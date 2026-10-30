import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import assert from 'node:assert/strict';
const source=readFileSync('dist/app.js','utf8');
const sandbox={};runInNewContext(source.slice(source.indexOf('function planMarkup('),source.indexOf('function drawPlan('))+';this.render=planMarkup;',sandbox);
const fp=[[10.775,3.635],[30.619,3.2],[33.781,25.152],[4.698,22.424]];
function inside(x,y){return fp.every((a,i)=>{const b=fp[(i+1)%4];return (b[0]-a[0])*(y-a[1])-(b[1]-a[1])*(x-a[0])>=-.001})}
function overlap(a,b){return a.x<b.x+b.w-.001&&a.x+a.w>b.x+.001&&a.y<b.y+b.h-.001&&a.y+a.h>b.y+.001}
for(const level of ['B',0,1,2,3,4,5]){
 const svg=sandbox.render(level),rects=[...svg.matchAll(/<rect x="([\d.]+)" y="([\d.]+)" width="([\d.]+)" height="([\d.]+)"[^>]*>/g)].map(m=>({x:(+m[1]-65)/12,y:(+m[2]-95)/12,w:+m[3]/12,h:+m[4]/12}));
 for(const r of rects)for(const [x,y]of [[r.x,r.y],[r.x+r.w,r.y],[r.x+r.w,r.y+r.h],[r.x,r.y+r.h]])assert(inside(x,y),`${level}: rectangle outside footprint at ${x},${y}`);
 const bays=rects.filter(r=>Math.abs(r.w-2.6)<.001&&r.h===5&&(Math.abs(r.y-6)<.001||Math.abs(r.y-17.6)<.001)),rooms=rects.filter(r=>Math.abs(r.w-3.2)<.001&&r.h===7.5);
 if(level===0||level===1){assert.equal(bays.length,12);for(const bay of bays)for(const r of rects.filter(r=>r.w===3.5&&r.h===6||Math.abs(r.w-2.6)<.001&&r.h===5&&(r.x===7||r.x===11)))assert(!overlap(bay,r),'Bay overlaps lift or stair');}
 if(level===3||level===4){assert.equal(rooms.length,10);for(const [i,a] of rooms.entries())for(const b of rooms.slice(i+1))assert(!overlap(a,b),'Rooms overlap');}
 console.log(`${level}: contained rectangles, counts verified`);
}
assert(!source.includes('band('),'No skewed room bands');
