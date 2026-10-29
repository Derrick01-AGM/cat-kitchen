// 小猫厨房第二关 · 本地离线版，无需安装依赖。
'use strict';
const CHEF_DATA='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NzYiIGhlaWdodD0iNTc2IiB2aWV3Qm94PSIwIDAgMTQ0IDE0NCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImZ1ciIgeDE9IjAiIHkxPSIwIiB4Mj0iLjciIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmMGQzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWRjNThmIi8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY3JlYW0iIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmZWY3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjNlOGQ1Ii8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iaGF0IiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2VhZThkZiIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImV5ZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzViNTI1MCIvPjxzdG9wIG9mZnNldD0iLjY1IiBzdG9wLWNvbG9yPSIjMzQzNDM4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjQyNzMxIi8+PC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPCEtLSDouqvkvZPlkoznn63nn63nmoTliY3niKrvvIzkv53nlZnlj4LogIPnhafniYfkuK3nmoTnmb3og7jkuI7lpbbmsrnmqZjoibLog4zmr5vjgIIgLS0+CiAgPHBhdGggZD0iTTQ0IDEwNVEyNSAxMDUgMjYgMTIyUTI4IDEyOSA0NCAxMjMiIGZpbGw9InVybCgjZnVyKSIgc3Ryb2tlPSIjYjU5MTZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDxwYXRoIGQ9Ik00NyA5NFEzMiAxMDYgMzggMTI1UTQ1IDEzNSA3MiAxMzRRMTAwIDEzNSAxMDcgMTI1UTExMyAxMDUgOTcgOTRaIiBmaWxsPSJ1cmwoI2Z1cikiIHN0cm9rZT0iI2I1OTE2ZiIgc3Ryb2tlLXdpZHRoPSIxLjciLz4KICA8cGF0aCBkPSJNNTEgOTdRNzIgMTAzIDk0IDk3TDk2IDExMUw5MCAxMDlMODggMTE3TDgyIDExNEw3NyAxMjJMNzAgMTE5TDY0IDEyNEw1OSAxMTZMNTIgMTE5TDQ5IDEwOVoiIGZpbGw9InVybCgjY3JlYW0pIi8+CiAgPGcgaWQ9ImNoZWYtcmVzdGluZy1wYXdzIj4KICA8ZWxsaXBzZSBjeD0iNTIiIGN5PSIxMjUiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNmZmY2ZTciIHN0cm9rZT0iI2M0YWM5NiIgc3Ryb2tlLXdpZHRoPSIxLjMiLz4KICA8ZWxsaXBzZSBjeD0iOTIiIGN5PSIxMjUiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNmZmY2ZTciIHN0cm9rZT0iI2M0YWM5NiIgc3Ryb2tlLXdpZHRoPSIxLjMiLz4KICA8cGF0aCBkPSJNNDggMTI2VjEzME01MyAxMjZWMTMxTTg4IDEyNlYxMzFNOTMgMTI2VjEzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGFiNmFhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPC9nPgogIDwhLS0g5bCP6ICM56uL6LW355qE6ICz5py177yM5LiN6IO96KKr55m95Y6o5biI5bi95a6M5YWo6YGu5L2P44CCIC0tPgogIDxwYXRoIGQ9Ik0zNyA3M1EyNyA2NSAyOSA0NFE0MyA0NCA1MiA1OUw5NCA1OVExMDQgNDUgMTE2IDQ0UTExNyA2NSAxMDcgNzRaIiBmaWxsPSJ1cmwoI2Z1cikiIHN0cm9rZT0iI2I1OTE2ZiIgc3Ryb2tlLXdpZHRoPSIxLjciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNMzUgNTJRNDQgNTQgNDYgNjJMMzYgNjZaIE0xMDkgNTJRMTAwIDU0IDk5IDYyTDEwOSA2NloiIGZpbGw9IiNlNWI1YTUiLz4KICA8cGF0aCBkPSJNMzkgNThRNTMgNDkgNzIgNTFROTQgNDkgMTA3IDYxUTExNyA3MyAxMTMgODhMMTE3IDkyTDExMSA5NEwxMTMgOTlMMTA2IDEwMFE5NiAxMTMgNzIgMTE0UTQ3IDExNCAzNyAxMDFMMzAgMTAwTDMzIDk0TDI3IDkyTDMxIDg4UTI3IDcwIDM5IDU4WiIgZmlsbD0idXJsKCNmdXIpIiBzdHJva2U9IiNiNTkxNmYiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPCEtLSDmn5TlkozmqZjoibLpop3nurnjgIHnmb3oibLpvLvmooHkuI7ok6zmnb7nmoTlj6PpvLvjgIIgLS0+CiAgPHBhdGggZD0iTTUzIDU2UTU0IDY1IDYyIDcwUTU2IDU5IDYxIDU0TTY4IDUzUTY3IDY2IDcyIDczUTc3IDY1IDc2IDUzTTg0IDU0UTg5IDYwIDgzIDcwUTk0IDY0IDkyIDU3IiBmaWxsPSIjZDZhNTZkIiBvcGFjaXR5PSIuNyIvPgogIDxwYXRoIGQ9Ik0zNCA3OUw0NCA4MkwzMyA4NU0xMTAgNzlMMTAwIDgyTDExMiA4NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDZhNTZkIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iLjc1Ii8+CiAgPHBhdGggZD0iTTcyIDcxUTY2IDc4IDY1IDg2UTQ5IDg1IDQ3IDk2UTUyIDEwOCA3MiAxMDlROTIgMTA5IDk4IDk2UTk2IDg1IDc5IDg2UTc4IDc4IDcyIDcxWiIgZmlsbD0idXJsKCNjcmVhbSkiLz4KICA8ZWxsaXBzZSBjeD0iNTMiIGN5PSI4MCIgcng9IjkuNCIgcnk9IjEwLjEiIGZpbGw9IiNmZmY1ZTQiIHN0cm9rZT0iI2I2OWI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8ZWxsaXBzZSBjeD0iOTEiIGN5PSI4MCIgcng9IjkuNCIgcnk9IjEwLjEiIGZpbGw9IiNmZmY1ZTQiIHN0cm9rZT0iI2I2OWI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8ZWxsaXBzZSBjeD0iNTQiIGN5PSI4MSIgcng9IjcuNCIgcnk9IjguNiIgZmlsbD0idXJsKCNleWUpIi8+CiAgPGVsbGlwc2UgY3g9IjkwIiBjeT0iODEiIHJ4PSI3LjQiIHJ5PSI4LjYiIGZpbGw9InVybCgjZXllKSIvPgogIDxlbGxpcHNlIGN4PSI1MS41IiBjeT0iNzcuNSIgcng9IjIuNSIgcnk9IjIuOSIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIGN4PSI4Ny41IiBjeT0iNzcuNSIgcng9IjIuNSIgcnk9IjIuOSIgZmlsbD0iI2ZmZiIvPgogIDxjaXJjbGUgY3g9IjU3IiBjeT0iODUiIHI9IjEuMSIgZmlsbD0iI2I3YzBjNyIvPjxjaXJjbGUgY3g9IjkzIiBjeT0iODUiIHI9IjEuMSIgZmlsbD0iI2I3YzBjNyIvPgogIDxlbGxpcHNlIGN4PSI0MiIgY3k9Ijk0IiByeD0iNiIgcnk9IjMiIGZpbGw9IiNlZmM0YWUiIG9wYWNpdHk9Ii41NSIvPjxlbGxpcHNlIGN4PSIxMDIiIGN5PSI5NCIgcng9IjYiIHJ5PSIzIiBmaWxsPSIjZWZjNGFlIiBvcGFjaXR5PSIuNTUiLz4KICA8cGF0aCBkPSJNNjcgOTJRNzIgODkgNzcgOTJRNzcgOTQgNzIgOTdRNjcgOTQgNjcgOTJaIiBmaWxsPSIjZGM5YjkxIiBzdHJva2U9IiNiZDgwN2EiIHN0cm9rZS13aWR0aD0iLjgiLz4KICA8cGF0aCBkPSJNNzIgOTdWMTAwTTcyIDEwMFE2OCAxMDQgNjUgMTAwTTcyIDEwMFE3NiAxMDQgNzkgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNhZDgzNzYiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8cGF0aCBkPSJNNDQgOTVMMjkgOTNNNDQgOTlMMjkgMTAxTTEwMCA5NUwxMTUgOTNNMTAwIDk5TDExNSAxMDEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MzYWQ5NCIgc3Ryb2tlLXdpZHRoPSIxLjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwhLS0g55m96Imy5aSn5Y6o5biI5bi977ya6JOs5p2+6KS255qx5bi95Yag5LiO5a695bi95bim44CCIC0tPgogIDxwYXRoIGQ9Ik0zOCAzN1EyNCAzMyAyOCAyMVEzMCAxMyA0MCAxNFE0MyA0IDU0IDhRNjEgMCA3MiA1UTg0IDEgOTEgOVExMDMgNSAxMDggMTZRMTIwIDE4IDExNiAyOVExMTQgMzcgMTA2IDM4TDEwMiA0N0g0MloiIGZpbGw9InVybCgjaGF0KSIgc3Ryb2tlPSIjYjVhYTliIiBzdHJva2Utd2lkdGg9IjEuNyIvPgogIDxwYXRoIGQ9Ik00MCAxOVEzNyAyNyA0NCAzNU01MyAxM1E0OSAyNCA1NiAzNU02NiAxMFE2MiAyMiA2NiAzNU04MCAxMFE4NSAyMiA3OSAzNU05NCAxNVExMDAgMjUgOTEgMzVNMTA3IDIxUTExMCAyOCAxMDEgMzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q4ZDVjZCIgc3Ryb2tlLXdpZHRoPSIyLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik00MCAzNlE3MiAzMCAxMDUgMzZMMTAzIDUwUTcyIDQ0IDQyIDUwWiIgZmlsbD0idXJsKCNoYXQpIiBzdHJva2U9IiNiNWFhOWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHBhdGggZD0iTTQ2IDM5UTcyIDM1IDEwMCAzOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
// 第二关正式第二关：保留测试版画面，以已确认的规则融合顾客、技能、投掷和眩晕。
const canvas=document.getElementById('raft-game'),ctx=canvas.getContext('2d');
const CONFIG={width:1440,height:900,walkSpeed:220,sprintSpeed:355,catRadius:18,attackRadius:112,attackInterval:8,warningDuration:2.4,burstDuration:.85,rippleDuration:.85,faintDuration:5,foodRadius:17,chopDuration:1.5,cookDuration:2.5,fryDuration:2,marinateDuration:3,bakeDuration:3};
const RAFT={x:100,y:110,w:1240,h:680};
const SPAWN={x:720,y:425};
// Compact central opening: a straight passage remains above and below it.
const POOL={x:610,y:454,w:220,h:40};
const POOL_RIM={x:POOL.x-8,y:POOL.y-8,w:POOL.w+16,h:POOL.h+16};
const FISHING={duration:5,reach:70,kinds:['salmon','shrimp','crab','squid']};
const BELT={left:245,top:235,right:1195,bottom:695,radius:64,width:70,speed:126};
BELT.length=2*(BELT.right-BELT.left+BELT.bottom-BELT.top-4*BELT.radius)+2*Math.PI*BELT.radius;
const topStations=[
  {type:'crate',label:'米箱',supply:'rawRice'},{type:'counter',label:'备菜台1'},
  {type:'oven',label:'烧烤架'},{type:'board',label:'切菜台1'},
  {type:'crate',label:'海苔箱',supply:'nori'},{type:'counter',label:'备菜台2'},
  {type:'marinade',label:'生腌区'},{type:'trash',label:'垃圾桶1'}
];
const bottomStations=[
  {type:'counter',label:'备菜台3'},{type:'crate',label:'面糊箱',supply:'batter'},
  {type:'board',label:'切菜台2'},{type:'cooker',label:'高压锅'},
  {type:'counter',label:'备菜台4'},{type:'fryer',label:'油锅'},{type:'trash',label:'垃圾桶2'}
];
const tables=[335,445,555,665,775,885,995,1105].map((x,i)=>({id:'top'+i,row:'top',x:x-50,y:298,w:100,h:60,...topStations[i]})).concat([345,470,595,720,845,970,1095].map((x,i)=>({id:'bottom'+i,row:'bottom',x:x-50,y:555,w:100,h:60,...bottomStations[i]})));
const obstacles=[...tables,POOL_RIM];
const FOOD_NAMES={salmon:'生三文鱼',salmonSlices:'三文鱼刺身',rawRice:'生米',cookedRice:'熟米饭',nori:'海苔',salmonSushi:'三文鱼寿司',shrimp:'生虾',batter:'面糊',coatedShrimp:'裹粉虾',tempura:'天妇罗',crab:'生蟹',marinatedShrimp:'生腌虾',marinatedCrab:'生腌蟹',grilledFish:'烤鱼',squid:'生鱿鱼',grilledSquid:'烤鱿鱼',grilledShrimp:'炙烤虾',searedShrimpSushi:'炙烤虾寿司'};
const MARINADE_RECIPES={shrimp:{output:'marinatedShrimp',counter:'marinatedShrimpMade'},crab:{output:'marinatedCrab',counter:'marinatedCrabMade'}};
const OVEN_RECIPES={salmon:{output:'grilledFish',counter:'grilledFishMade'},squid:{output:'grilledSquid',counter:'grilledSquidMade'},shrimp:{output:'grilledShrimp'}};
const SUSHI_RECIPE=['salmonSlices','cookedRice','nori'];
const TEMPURA_PREP_RECIPE=['shrimp','batter'];
const SHRIMP_SUSHI_RECIPE=['grilledShrimp','cookedRice','nori'];
const PREP_RECIPES=[{ingredients:SUSHI_RECIPE,output:'salmonSushi'},{ingredients:TEMPURA_PREP_RECIPE,output:'coatedShrimp'},{ingredients:SHRIMP_SUSHI_RECIPE,output:'searedShrimpSushi'}];
const DISHES=[
  {kind:'salmonSushi',counter:'sushiMade'},{kind:'tempura',counter:'tempuraMade'},
  {kind:'marinatedShrimp',counter:'marinatedShrimpMade'},{kind:'marinatedCrab',counter:'marinatedCrabMade'},
  {kind:'salmonSlices',counter:'sashimiMade'},{kind:'grilledFish',counter:'grilledFishMade'},
  {kind:'grilledSquid',counter:'grilledSquidMade'},{kind:'searedShrimpSushi',counter:'searedShrimpSushiMade'}
];
function isFinishedDish(kind){return DISHES.some(dish=>dish.kind===kind);}
const KEYS=new Set(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright','shift','e','f','q',' ','p','r','j','k','escape']);
let state,lastFrame=performance.now(),cachedUi={};
const chefImage=typeof Image!=='undefined'?new Image():null;
if(chefImage)chefImage.src=CHEF_DATA;
function inside(x,y,rect){return x>=rect.x&&x<=rect.x+rect.w&&y>=rect.y&&y<=rect.y+rect.h;}
function onWood(x,y){return inside(x,y,RAFT);}
function beltPointAt(distance){
  let d=((distance%BELT.length)+BELT.length)%BELT.length;
  const r=BELT.radius,l=BELT.left,t=BELT.top,right=BELT.right,b=BELT.bottom,h=right-l-2*r,v=b-t-2*r,a=Math.PI*r/2;
  if(d<h)return{x:l+r+d,y:t};d-=h;
  if(d<a){const z=-Math.PI/2+d/r;return{x:right-r+r*Math.cos(z),y:t+r+r*Math.sin(z)};}d-=a;
  if(d<v)return{x:right,y:t+r+d};d-=v;
  if(d<a){const z=d/r;return{x:right-r+r*Math.cos(z),y:b-r+r*Math.sin(z)};}d-=a;
  if(d<h)return{x:right-r-d,y:b};d-=h;
  if(d<a){const z=Math.PI/2+d/r;return{x:l+r+r*Math.cos(z),y:b-r+r*Math.sin(z)};}d-=a;
  if(d<v)return{x:l,y:b-r-d};d-=v;
  const z=Math.PI+d/r;return{x:l+r+r*Math.cos(z),y:t+r+r*Math.sin(z)};
}
function distanceToBelt(x,y){const cx=(BELT.left+BELT.right)/2,cy=(BELT.top+BELT.bottom)/2,qx=Math.abs(x-cx)-((BELT.right-BELT.left)/2-BELT.radius),qy=Math.abs(y-cy)-((BELT.bottom-BELT.top)/2-BELT.radius);return Math.abs(Math.hypot(Math.max(qx,0),Math.max(qy,0))+Math.min(Math.max(qx,qy),0)-BELT.radius);}
function projectOnBelt(x,y){let best=0,error=Infinity;for(let d=0;d<BELT.length;d+=12){const p=beltPointAt(d),e=Math.hypot(p.x-x,p.y-y);if(e<error){best=d;error=e;}}let result=best;for(let d=best-12;d<=best+12;d+=.5){const p=beltPointAt(d),e=Math.hypot(p.x-x,p.y-y);if(e<error){result=d;error=e;}}return{distance:((result%BELT.length)+BELT.length)%BELT.length,error,...beltPointAt(result)};}
function hitsTable(x,y){return obstacles.some(rect=>{const nx=Math.max(rect.x,Math.min(x,rect.x+rect.w)),ny=Math.max(rect.y,Math.min(y,rect.y+rect.h));return Math.hypot(x-nx,y-ny)<CONFIG.catRadius;});}
function supportedAt(x,y){if(!onWood(x,y)||distanceToBelt(x,y)<BELT.width/2+CONFIG.catRadius)return false;for(let i=0;i<16;i++){const angle=i*Math.PI/8;if(!onWood(x+Math.cos(angle)*CONFIG.catRadius,y+Math.sin(angle)*CONFIG.catRadius))return false;}return !hitsTable(x,y);}
function tablePoint(table){return{x:table.x+table.w/2,y:table.y+table.h/2};}
function tableFoods(table){return state.foods.filter(food=>food.place==='table'&&food.tableId===table.id);}
function arrangeTable(table){const foods=tableFoods(table),p=tablePoint(table);foods.forEach((food,i)=>{food.x=p.x+(i-(foods.length-1)/2)*27;food.y=p.y;});}
function makeFood(kind,extra={}){return{id:state.nextId++,kind,...extra};}
function nearestTable(){let best=null,distance=Infinity;for(const table of tables){const nx=Math.max(table.x,Math.min(state.cat.x,table.x+table.w)),ny=Math.max(table.y,Math.min(state.cat.y,table.y+table.h));if(Math.hypot(state.cat.x-nx,state.cat.y-ny)>46)continue;const p=tablePoint(table),d=Math.hypot(state.cat.x-p.x,state.cat.y-p.y);if(d<distance){best=table;distance=d;}}return best;}
function beltSpaceFree(distance){return !state.foods.some(f=>f.place==='belt'&&Math.min(Math.abs(f.distance-distance),BELT.length-Math.abs(f.distance-distance))<58);}
function assemblePrep(table){
  const foods=tableFoods(table),recipe=PREP_RECIPES.find(recipe=>foods.length===recipe.ingredients.length&&recipe.ingredients.every(kind=>foods.some(food=>food.kind===kind)));if(!recipe)return false;
  const ids=new Set(foods.map(food=>food.id));state.foods=state.foods.filter(food=>!ids.has(food.id));state.foods.push(makeFood(recipe.output,{place:'table',tableId:table.id,...tablePoint(table)}));
  if(recipe.output==='salmonSushi'){state.sushiMade++;state.message='三文鱼寿司完成！空手 E 拿起，再到传送带旁 E 放上。';}
  else if(recipe.output==='searedShrimpSushi'){state.searedShrimpSushiMade++;state.message='炙烤虾寿司完成！空手 E 拿起，再放上传送带。';}
  else state.message='裹粉虾做好了！空手 E 拿起，放进油锅自动炸成天妇罗。';return true;
}
function interactTable(table){
  const held=state.hasFood,foods=tableFoods(table);
  if(table.type==='crate'){if(held){state.message='手里已有食物，请先放下；食材箱可无限拿取。';return;}state.hasFood=makeFood(table.supply);const hint={rawRice:'放进高压锅会自动煮熟。',nori:'海苔无需加工，直接放到备菜台。',batter:'和生虾放到同一张备菜台，自动合成裹粉虾。'};state.message='拿到'+FOOD_NAMES[table.supply]+'。'+hint[table.supply];return;}
  if(table.type==='trash'){if(held){sfx.play('bin');state.message='已丢掉'+FOOD_NAMES[held.kind]+'。';state.hasFood=null;}else state.message='垃圾桶：手持不需要的食材时按 E 丢弃。';return;}
  if(!held){
    if(!foods.length){state.message=table.type==='board'?'先把生三文鱼放上切菜台，再按住 F 切。':table.type==='cooker'?'先把生米放进高压锅，入锅后自动煮饭。':table.type==='fryer'?'把生虾和面糊放在备菜台上裹粉，再将裹粉虾放进油锅。':table.type==='oven'?'将生鱼、生虾或生鱿鱼按 E 放入，自动烘烤；一次一份，烤好后再取走。':table.type==='marinade'?'将生虾或生蟹按 E 放入，自动腌制；一次处理一份，腌好后再取走。':'空备菜台：刺身或炙烤虾＋熟饭＋海苔做对应寿司；生虾＋面糊做裹粉虾。';return;}
    const food=foods[foods.length-1];if(table.type==='cooker'&&food.kind==='rawRice'){state.message='正在煮饭，还需 '+Math.max(0,CONFIG.cookDuration-(food.cookProgress||0)).toFixed(1)+' 秒；可以离开去备菜。';return;}
    if(table.type==='fryer'&&food.kind==='coatedShrimp'){state.message='正在炸虾，还需 '+Math.max(0,CONFIG.fryDuration-(food.fryProgress||0)).toFixed(1)+' 秒；可以离开，炸好再来取。';return;}
    if(table.type==='marinade'&&MARINADE_RECIPES[food.kind]){state.message='正在腌制，还需 '+Math.max(0,CONFIG.marinateDuration-(food.marinateProgress||0)).toFixed(1)+' 秒；可以离开，完成后回来 E 取走。';return;}
    if(table.type==='oven'&&OVEN_RECIPES[food.kind]){state.message='正在烘烤，还需 '+Math.max(0,CONFIG.bakeDuration-(food.bakeProgress||0)).toFixed(1)+' 秒；可以离开，烤好再来取。';return;}
    state.foods.splice(state.foods.indexOf(food),1);state.hasFood=food;arrangeTable(table);state.message='拿起'+FOOD_NAMES[food.kind]+'。'+(food.kind==='salmonSlices'?'这是可直接上菜的刺身，也能和熟米饭、海苔做寿司。':food.kind==='grilledShrimp'?'和熟米饭、海苔放到同一备菜台，合成炙烤虾寿司。':'');return;
  }
  if(table.type==='board'&&!['salmon','salmonSlices'].includes(held.kind)){state.message='切菜台目前只处理三文鱼，请放入生三文鱼。';return;}
  if(table.type==='cooker'&&held.kind!=='rawRice'){state.message='高压锅目前只接受从米箱拿出的生米。';return;}
  if(table.type==='fryer'&&held.kind!=='coatedShrimp'){state.message='油锅只接受裹粉虾；先在备菜台把生虾和面糊合在一起。';return;}
  if(table.type==='marinade'&&!MARINADE_RECIPES[held.kind]){state.message='生腌区只接受生虾或生蟹，直接放入即可自动腌制。';return;}
  if(table.type==='oven'&&!OVEN_RECIPES[held.kind]){state.message='烧烤架只接受生鱼、生虾或生鱿鱼；请先取走已有成品再放下一份。';return;}
  if(table.type!=='counter'&&foods.length){state.message='这里已有食材，请先取走成品。';return;}
  if(table.type==='counter'&&foods.length){
    const kinds=[...foods.map(food=>food.kind),held.kind],valid=new Set(kinds).size===kinds.length&&PREP_RECIPES.some(recipe=>kinds.every(kind=>recipe.ingredients.includes(kind)));
    if(!valid){state.message='材料重复或不属于同一道配方，请换一张备菜台，或先取走已有材料。';return;}
  }
  const food={...held,place:'table',tableId:table.id,...tablePoint(table)};delete food.distance;state.foods.push(food);state.hasFood=null;arrangeTable(table);
  if(table.type==='board')state.message=food.kind==='salmon'?'放好了，空手在台边按住 F 切鱼；松手或离开暂停，回来继续。':'刺身已放好，可以 E 取回上菜或继续做寿司。';
  else if(table.type==='cooker'){food.cookProgress=0;state.message='高压锅已自动开始煮饭，约 '+CONFIG.cookDuration+' 秒完成；可以离开，熟后回来 E 取饭。';}
  else if(table.type==='fryer'){food.fryProgress=0;state.message='油锅已自动开始炸虾，约 '+CONFIG.fryDuration+' 秒完成；可以离开，炸好后 E 取天妇罗。';}
  else if(table.type==='marinade'){food.marinateProgress=0;state.message=FOOD_NAMES[food.kind]+'已开始腌制，约 '+CONFIG.marinateDuration+' 秒完成；无需另加材料，可以离开，完成后回来 E 取走。';}
  else if(table.type==='oven'){food.bakeProgress=0;state.message=FOOD_NAMES[food.kind]+'已放入烧烤架，约 '+CONFIG.bakeDuration+' 秒自动烤好；可以离开，烤好后 E 取走。';}
  else if(!assemblePrep(table)){const kinds=tableFoods(table).map(item=>item.kind),recipes=PREP_RECIPES.filter(recipe=>kinds.every(kind=>recipe.ingredients.includes(kind)));state.message=recipes.length?'已放入'+FOOD_NAMES[food.kind]+'，还需：'+recipes.map(recipe=>recipe.ingredients.filter(kind=>!kinds.includes(kind)).map(kind=>FOOD_NAMES[kind]).join('＋')).join(' 或 ')+'。':'已暂存在'+table.label+'，空手 E 可取回。';}
}
function processStations(dt){
  const nearby=state.faintLeft<=0&&!state.hasFood?nearestTable():null;
  for(const table of tables){const food=tableFoods(table)[0];if(!food)continue;
    if(table.type==='board'&&food.kind==='salmon'&&state.keys.f&&nearby?.id===table.id){food.chopProgress=Math.min(CONFIG.chopDuration,(food.chopProgress||0)+dt);if(food.chopProgress+1e-8>=CONFIG.chopDuration){food.kind='salmonSlices';delete food.chopProgress;state.sashimiMade++;state.message='三文鱼刺身做好了！E 拿起可直接上菜，也能继续与熟米饭、海苔做寿司。';}}
    if(table.type==='cooker'&&food.kind==='rawRice'){food.cookProgress=Math.min(CONFIG.cookDuration,(food.cookProgress||0)+dt);if(food.cookProgress+1e-8>=CONFIG.cookDuration){food.kind='cookedRice';delete food.cookProgress;state.message='米饭煮好了！到高压锅旁空手按 E 取饭。';}}
    if(table.type==='fryer'&&food.kind==='coatedShrimp'){food.fryProgress=Math.min(CONFIG.fryDuration,(food.fryProgress||0)+dt);if(food.fryProgress+1e-8>=CONFIG.fryDuration){food.kind='tempura';delete food.fryProgress;state.tempuraMade++;state.message='天妇罗炸好了！到油锅旁空手按 E 取走，再放上传送带。';}}
    if(table.type==='marinade'&&MARINADE_RECIPES[food.kind]){const recipe=MARINADE_RECIPES[food.kind];food.marinateProgress=Math.min(CONFIG.marinateDuration,(food.marinateProgress||0)+dt);if(food.marinateProgress+1e-8>=CONFIG.marinateDuration){food.kind=recipe.output;delete food.marinateProgress;state[recipe.counter]++;state.message=FOOD_NAMES[food.kind]+'腌好了！到生腌区旁空手按 E 取走，再放上传送带。';}}
    if(table.type==='oven'&&OVEN_RECIPES[food.kind]){const recipe=OVEN_RECIPES[food.kind];food.bakeProgress=Math.min(CONFIG.bakeDuration,(food.bakeProgress||0)+dt);if(food.bakeProgress+1e-8>=CONFIG.bakeDuration){food.kind=recipe.output;delete food.bakeProgress;if(recipe.counter)state[recipe.counter]++;state.message=FOOD_NAMES[food.kind]+'烤好了！空手 E 取走。'+(food.kind==='grilledShrimp'?'与熟米饭、海苔放同一备菜台做寿司。':'可以直接放上传送带上菜。');}}
  }
}
function interact(){
  if(!canAct())return;
  if(!state.hasFood){const near=state.foods.filter(f=>f.place==='ground'&&Math.hypot(f.x-state.cat.x,f.y-state.cat.y)<=48).sort((a,b)=>Math.hypot(a.x-state.cat.x,a.y-state.cat.y)-Math.hypot(b.x-state.cat.x,b.y-state.cat.y))[0];if(near){state.foods.splice(state.foods.indexOf(near),1);state.hasFood=near;state.message='拿起'+FOOD_NAMES[near.kind]+'。靠近台面或传送带 E 放下，Q 放到脚下。';return;}}
  const net=nearestFishingNet();if(net&&!nearestTable()){interactFishingNet(net);return;}
  const table=nearestTable(),beltNear=distanceToBelt(state.cat.x,state.cat.y)<=BELT.width/2+CONFIG.catRadius+17;
  const tableGap=table?Math.hypot(state.cat.x-Math.max(table.x,Math.min(state.cat.x,table.x+table.w)),state.cat.y-Math.max(table.y,Math.min(state.cat.y,table.y+table.h))):Infinity;
  if(beltNear&&distanceToBelt(state.cat.x,state.cat.y)-BELT.width/2<=tableGap){
    if(state.hasFood){const p=projectOnBelt(state.cat.x,state.cat.y);if(!beltSpaceFree(p.distance)){state.message='这段传送带已有食物，等它转过去再放。';return;}const food={...state.hasFood,place:'belt',distance:p.distance,x:p.x,y:p.y};delete food.tableId;state.foods.push(food);state.hasFood=null;state.message='直接放上传送带了，食物会沿餐台顺时针回转。';}
    else{const near=state.foods.filter(f=>f.place==='belt'&&Math.hypot(f.x-state.cat.x,f.y-state.cat.y)<=78).sort((a,b)=>Math.hypot(a.x-state.cat.x,a.y-state.cat.y)-Math.hypot(b.x-state.cat.x,b.y-state.cat.y))[0];if(near){state.foods.splice(state.foods.indexOf(near),1);state.hasFood=near;state.message='从传送带取回'+FOOD_NAMES[near.kind]+'。';}else state.message='空手 E 可以取回转到身旁的食物；手里有食物时 E 直接放上。';}return;
  }
  if(!table){state.message='走近台面或左右传送带按 E 取放；海鲜可从中央捕鱼网捕捞，也可接收顾客送货，Q 可将手持食物放到脚下。';return;}
  interactTable(table);
}
function dropFood(){if(!canAct()||!state.hasFood)return;const food={...state.hasFood,place:'ground',x:state.cat.x,y:state.cat.y};delete food.tableId;state.foods.push(food);state.hasFood=null;state.message='放到脚下了，空手按 E 可捡回。';}

const BREEDS=[{name:'暹罗',body:'#eadbc1',ear:'#ab8567',face:'#ae8d74'},{name:'蓝猫',body:'#aabac2',ear:'#879da8'},
  {name:'橘猫',body:'#e5b279',ear:'#c6935c'},{name:'三花',body:'#fff1da',ear:'#d6a77b',spots:['#d6a77b','#71675c']},
  {name:'黑猫',body:'#6e6a63',ear:'#5c574f'},{name:'白猫',body:'#fff8eb',ear:'#e5beaa'}];

// 单个循环音轨；播放状态跟随本局和窗口状态。
var music=(()=>{
  const audio=document.getElementById('bgm'),button=document.getElementById('music-toggle');
  let enabled=true,blocked=false,failed=false,pending=false,request=0;
  audio.volume=.5;audio.loop=true;
  function allowed(){return enabled&&state&&state.phase==='playing'&&!state.paused&&!state.suspended&&!document.hidden;}
  function refresh(){
    const text=failed?'音乐：加载失败':!enabled?'音乐：关':blocked?'点击开启音乐':'音乐：开';
    if(button.textContent!==text)button.textContent=text;
    button.setAttribute('aria-pressed',String(enabled));
    button.title=failed?'请确认 assets/bgm.m4a 与游戏一起解压。':blocked?'浏览器暂未允许自动播放，点击或按操作键即可开始。':enabled?'关闭背景音乐（当前音量 50%）':'开启背景音乐（音量 50%）';
  }
  function pause(rewind=false){
    ++request;pending=false;audio.pause();
    if(rewind){try{audio.currentTime=0;}catch(_){/* 未载入时本来就在起点。 */}}
    refresh();
  }
  function sync(){
    if(!allowed()){pause();return;}
    if(pending||!audio.paused||failed)return;
    pending=true;const ticket=++request;
    // 捕获自动播放策略或格式错误，不让音乐失败中断游戏。
    let play;
    try{play=audio.play();}catch(error){reject(error);return;}
    Promise.resolve(play).then(()=>{
      if(ticket!==request)return;
      pending=false;blocked=false;
      if(!allowed())pause();else refresh();
    },reject);
    function reject(error){
      if(ticket!==request)return;
      pending=false;
      if(error?.name==='NotAllowedError')blocked=true;
      else if(error?.name!=='AbortError')failed=true;
      refresh();
    }
  }
  function unlock(){if(!allowed())return;blocked=false;sync();}
  function restart(){pause(true);failed=false;blocked=false;sync();refresh();}
  button.addEventListener('click',()=>{
    // 自动播放被拦截时第一次点此按钮的含义是“开启”，不是静音。
    if(enabled&&blocked){blocked=false;sync();}else{enabled=!enabled;blocked=false;sync();}
    refresh();canvas.focus();
  });
  document.addEventListener('pointerdown',event=>{if(!event.target.closest?.('button'))unlock();});
  audio.addEventListener('error',()=>{failed=true;pause();});
  refresh();
  return {sync,unlock,restart,stop:()=>pause(true)};
})();


// Parameters retained from the teammate build. Positions use the test map's coordinates.
const RULES={round:180,maxCustomers:5,patience:52.5,spawnEvery:3,deliveryDelay:3,eatDuration:2,score:15,penalty:5,skillCooldown:30,spinoDuration:16,speedMult:1.8,workMult:2,stopDuration:5,spaceReduce:.3,chargeMax:1.2,throwMin:60,throwMax:330,throwSpeed:700,lureCooldown:60,lureDuration:15};
const SEAFOOD_FOR={salmonSushi:'salmon',salmonSlices:'salmon',grilledFish:'salmon',tempura:'shrimp',marinatedShrimp:'shrimp',marinatedCrab:'crab',grilledSquid:'squid',searedShrimpSushi:'shrimp'};
const SEATS=[];
for(const x of[420,620,820,1020]){SEATS.push({x,y:162});SEATS.push({x,y:759});}
for(const y of[410,570]){SEATS.push({x:174,y});SEATS.push({x:1266,y});}
SEATS.forEach((seat,i)=>Object.assign(seat,{id:i,distance:projectOnBelt(seat.x,seat.y).distance}));
let customerSequence=0,orderNodes=new Map(),uiNext=0;
function canAct(){return state.phase==='playing'&&!state.suspended&&!state.paused&&state.faintLeft<=0;}

var sfx=window.CatKitchenSfx.create({allowed:()=>typeof state!=='undefined'&&state?.phase==='playing'&&!state.paused&&!state.suspended,clips:{'cut':{src:'assets/sfx/cut.mp3',from:0,to:3,volume:0.32},'stun':{src:'assets/sfx/stun.mp3',from:0,to:null,volume:0.5},'eat':{src:'assets/sfx/eat.mp3',from:0,to:3,volume:0.4},'laowu':{src:'assets/sfx/laowu.mp3',from:0,to:3,volume:0.6},'oven':{src:'assets/sfx/oven.mp3',from:0,to:3,volume:0.32},'fryer':{src:'assets/sfx/fryer.mp3',from:0,to:3,volume:0.28},'bin':{src:'assets/sfx/bin.mp3',from:0,to:null,volume:0.5},'neige':{src:'assets/sfx/neige.mp3',from:0,to:null,volume:0.4}}});
function syncLevelSounds(){
 if(state.faintLeft<=0)sfx.stop('stun');
 const nearby=state.faintLeft<=0&&!state.hasFood?nearestTable():null,names=state.spinoLeft>0?['neige']:[];
 for(const table of tables){const food=tableFoods(table)[0];if(!food)continue;
  if(table.type==='board'&&food.kind==='salmon'&&state.keys.f&&nearby?.id===table.id)names.push('cut');
  if(table.type==='fryer'&&food.kind==='coatedShrimp')names.push('fryer');
  if(table.type==='oven'&&OVEN_RECIPES[food.kind])names.push('oven');
 }sfx.sync(names);
}
function reset(start=true){sfx.stopAll();
  state={raft:{...RAFT},cat:{...SPAWN,dirX:0,dirY:1},keys:{},phase:start?'playing':'ready',paused:false,suspended:!!document.hidden,elapsed:0,timeLeft:RULES.round,flowTime:0,flowPaused:false,cooldown:5,attack:null,hits:0,destroyed:0,faintLeft:0,stuns:0,hasFood:null,foods:[],nextId:1,particles:[],nets:createFishingNets(),beltTravel:0,customers:[],spawnLeft:1,score:0,served:0,missed:0,jCooldown:0,kCooldown:0,spinoLeft:0,kTextLeft:0,charging:false,charge:0,lureCooldown:0,distractedLeft:0,baits:[],decoy:null,message:'营业开始！中央两张网可随机捕捞：空手 E 下网，5 秒后回来逐只取。顾客仍会送海鲜上回转带。'};
  for(const dish of DISHES)state[dish.counter]=0;
  customerSequence=0;cachedUi={};uiNext=0;lastFrame=performance.now();
  for(const node of orderNodes.values())node.root.remove();orderNodes.clear();
  syncUi(true);if(start)music.restart();else music.stop();
}
function spawnCustomer(order){
  if(state.customers.length>=RULES.maxCustomers)return null;
  const free=SEATS.filter(seat=>!state.customers.some(c=>c.seat.id===seat.id));if(!free.length)return null;
  const seat=free[Math.floor(Math.random()*free.length)];
  const selected=order||(Math.random()<.25?'grilledSquid':DISHES[Math.floor(Math.random()*DISHES.length)].kind);
  if(!isFinishedDish(selected))return null;
  const customer={id:++customerSequence,seat,order:selected,breed:BREEDS[Math.floor(Math.random()*BREEDS.length)],patience:RULES.patience,maxP:RULES.patience,state:'waiting',eatProgress:0,deliveryTime:0,delivered:false,stun:0};
  state.customers.push(customer);return customer;
}
function removeFood(food){const index=state.foods.indexOf(food);if(index>=0)state.foods.splice(index,1);}
function deliverSeafood(customer){
  // Each order provides one raw seafood, as in the teammate's fish/squid delivery rule.
  const kind=SEAFOOD_FOR[customer.order];if(!kind)return false;
  const distance=customer.seat.distance;
  state.foods.push(makeFood(kind,{place:'belt',distance,...beltPointAt(distance),fromCustomer:customer.id}));
  customer.delivered=true;state.message='#'+(customer.seat.id+1)+' 号顾客送来'+FOOD_NAMES[kind]+'，请从回转带取回制作'+FOOD_NAMES[customer.order]+'。';return true;
}
function tickCustomers(dt){
  state.spawnLeft-=dt;if(state.spawnLeft<=0){spawnCustomer();state.spawnLeft=RULES.spawnEvery;}
  for(const c of [...state.customers]){
    if(c.state==='waiting'){
      if(c.stun>0){c.stun=Math.max(0,c.stun-dt);continue;}
      c.patience-=dt;
      if(c.patience<=0){state.customers.splice(state.customers.indexOf(c),1);state.score-=RULES.penalty;state.missed++;state.message='#'+(c.seat.id+1)+' 号顾客等不及离开了，扣 5 分。';continue;}
      if(!c.delivered){c.deliveryTime+=dt;if(c.deliveryTime+1e-8>=RULES.deliveryDelay)deliverSeafood(c);}
    }else{c.eatProgress=Math.min(1,c.eatProgress+dt/RULES.eatDuration);if(c.eatProgress>=1){state.customers.splice(state.customers.indexOf(c),1);state.score+=RULES.score;state.served++;state.message='顾客吃得很开心，完成一单，＋15 分！';}}
  }
}
function serveOnBelt(){
  for(const food of [...state.foods]){
    if(food.place!=='belt'||!isFinishedDish(food.kind))continue;
    const customer=state.customers.find(c=>c.state==='waiting'&&c.order===food.kind&&Math.min(Math.abs(c.seat.distance-food.distance),BELT.length-Math.abs(c.seat.distance-food.distance))<48);
    if(customer){customer.state='eating';customer.eatProgress=0;sfx.play('eat',RULES.eatDuration);removeFood(food);state.message='#'+(customer.seat.id+1)+' 号顾客拿到了'+FOOD_NAMES[food.kind]+'！';}
  }
}
function useSkill(key){
  if(!canAct())return false;
  if(key==='j'){
    if(state.jCooldown>0)return false;state.jCooldown=RULES.skillCooldown;state.spinoLeft=RULES.spinoDuration;syncLevelSounds();state.message='脊背龙！16 秒内移动 ×1.8、所有加工 ×2。';return true;
  }
  if(key==='k'){
    if(state.kCooldown>0)return false;state.kCooldown=RULES.skillCooldown;state.kTextLeft=1.5;sfx.play('laowu');for(const c of state.customers)if(c.state==='waiting')c.stun=RULES.stopDuration;
    state.message='老吴！当前等待中的顾客暂停耐心和送货计时 5 秒。';return true;
  }
  return false;
}
function beginThrow(){if(!canAct()||!state.hasFood||state.charging)return;state.charging=true;state.charge=0;}
function releaseThrow(){
  if(!state.charging)return;state.charging=false;
  if(!canAct()||!state.hasFood){state.charge=0;return;}
  if(state.charge<.2){state.charge=0;dropFood();return;}
  const distance=RULES.throwMin+(RULES.throwMax-RULES.throwMin)*Math.min(1,state.charge/RULES.chargeMax),cat=state.cat;
  const food={...state.hasFood,place:'flying',x:cat.x,y:cat.y,tx:Math.max(20,Math.min(CONFIG.width-20,cat.x+cat.dirX*distance)),ty:Math.max(20,Math.min(CONFIG.height-20,cat.y+cat.dirY*distance)),travelled:0};
  delete food.tableId;delete food.distance;state.foods.push(food);state.hasFood=null;state.charge=0;state.message='食物投出！工作台会接住合适的材料；扔进海里可引开鲨鱼。';
}
function acceptsThrow(table,food){
  const foods=tableFoods(table);
  if(table.type==='counter'){
    if(!foods.length)return true;if(foods.length>=3)return false;
    const kinds=[...foods.map(f=>f.kind),food.kind];return new Set(kinds).size===kinds.length&&PREP_RECIPES.some(r=>kinds.every(k=>r.ingredients.includes(k)));
  }
  if(foods.length)return false;
  return (table.type==='board'&&['salmon','salmonSlices'].includes(food.kind))||(table.type==='cooker'&&food.kind==='rawRice')||(table.type==='oven'&&!!OVEN_RECIPES[food.kind])||(table.type==='fryer'&&food.kind==='coatedShrimp')||(table.type==='marinade'&&!!MARINADE_RECIPES[food.kind]);
}
function tryAutoPlace(food){
  const table=tables.find(t=>food.x>=t.x-3&&food.x<=t.x+t.w+3&&food.y>=t.y-3&&food.y<=t.y+t.h+3&&acceptsThrow(t,food));if(!table)return false;
  removeFood(food);const previous=state.hasFood;state.hasFood=food;interactTable(table);state.hasFood=previous;return true;
}
function safeGroundPoint(x,y){
  if(supportedAt(x,y))return{x,y};
  for(let r=8;r<150;r+=8)for(let a=0;a<Math.PI*2;a+=Math.PI/12){const p={x:x+Math.cos(a)*r,y:y+Math.sin(a)*r};if(supportedAt(p.x,p.y))return p;}
  return{...SPAWN};
}
function landFood(food){
  if(tryAutoPlace(food))return;
  if(distanceToBelt(food.x,food.y)<=BELT.width/2){const p=projectOnBelt(food.x,food.y);Object.assign(food,{place:'belt',distance:p.distance,x:p.x,y:p.y});return;}
  if(!onWood(food.x,food.y)){
    removeFood(food);const attracts=state.lureCooldown<=0&&state.distractedLeft<=0&&!state.baits.some(b=>b.attracts);if(attracts)state.lureCooldown=RULES.lureCooldown;
    state.baits.push({...food,time:.5,attracts});state.message='食物落进海里了……';return;
  }
  if(inside(food.x,food.y,POOL_RIM))state.message='食物落在捕鱼池边了，空手靠近按 E 捡回。';
  Object.assign(food,{place:'ground',...safeGroundPoint(food.x,food.y)});
}
function tickThrows(dt){
  if(state.charging)state.charge=Math.min(RULES.chargeMax,state.charge+dt);
  for(const food of [...state.foods]){
    if(food.place!=='flying')continue;
    const dx=food.tx-food.x,dy=food.ty-food.y,d=Math.hypot(dx,dy),move=Math.min(d,RULES.throwSpeed*dt);
    if(d>0){food.x+=dx/d*move;food.y+=dy/d*move;food.travelled+=move;}
    if(food.travelled>22&&tryAutoPlace(food))continue;
    if(d<=move+1e-6)landFood(food);
  }
  for(const bait of [...state.baits]){
    bait.time-=dt;if(bait.time>0)continue;state.baits.splice(state.baits.indexOf(bait),1);
    if(bait.attracts){state.distractedLeft=RULES.lureDuration;state.attack=null;state.decoy={x:bait.x,y:bait.y,time:0};state.message='鲨鱼被诱饵引开，15 秒内不再袭击！';}
    else state.message='诱饵被其他鱼吃掉了，鲨鱼诱饵还在冷却。';
  }
}
function inBlast(x,y,radius,attack){return Math.hypot(x-attack.x,y-attack.y)<=attack.radius+radius;}
function triggerAttack(){
  if(state.phase!=='playing'||state.suspended||state.paused||state.distractedLeft>0||state.attack)return false;
  const edge=38,x=RAFT.x+edge+Math.random()*(RAFT.w-edge*2),y=RAFT.y+edge+Math.random()*(RAFT.h-edge*2);
  state.attack={x,y,radius:CONFIG.attackRadius,time:0,stage:'warning',angle:Math.random()*Math.PI*2,damaged:false};
  state.message='红圈下有鲨鱼！请提前离开，并抢救圈里的食材。';return true;
}
function wakeChef(){state.faintLeft=0;state.message='小猫的灵魂回来了！继续营业。';}
function impact(attack){
  if(attack.damaged)return;attack.damaged=true;state.hits++;
  const before=state.foods.length;state.foods=state.foods.filter(food=>food.place==='flying'||!inBlast(food.x,food.y,CONFIG.foodRadius,attack));let removed=before-state.foods.length;
  for(const net of state.nets)if(net.status==='ready'&&inBlast(net.x,net.y,CONFIG.foodRadius,attack)){removed+=net.catches.length;net.catches=[];net.status='idle';net.progress=0;}
  const hit=state.faintLeft<=0&&inBlast(state.cat.x,state.cat.y,CONFIG.catRadius,attack);
  if(hit){state.faintLeft=CONFIG.faintDuration;sfx.play('stun',CONFIG.faintDuration);state.stuns++;if(state.hasFood){state.hasFood=null;removed++;}state.charging=false;state.charge=0;}
  state.destroyed+=removed;
  for(let i=0;i<24;i++){const a=Math.random()*Math.PI*2,speed=45+Math.random()*145;state.particles.push({x:attack.x,y:attack.y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,life:.65+Math.random()*.45});}
  state.message=hit?'主厨被吓晕了！原地 5 秒后苏醒，连续轻按空格加快恢复。':'鲨鱼涌起，清除了范围内 '+removed+' 份食物。';
}
function moveCat(dt){
  if(state.faintLeft>0)return;const k=state.keys;let dx=Number(!!(k.d||k.arrowright))-Number(!!(k.a||k.arrowleft)),dy=Number(!!(k.s||k.arrowdown))-Number(!!(k.w||k.arrowup)),n=Math.hypot(dx,dy);if(!n)return;
  dx/=n;dy/=n;state.cat.dirX=dx;state.cat.dirY=dy;
  const speed=(k.shift?CONFIG.sprintSpeed:CONFIG.walkSpeed)*(state.spinoLeft>0?RULES.speedMult:1),nx=state.cat.x+dx*speed*dt,ny=state.cat.y+dy*speed*dt;
  if(supportedAt(nx,state.cat.y))state.cat.x=nx;if(supportedAt(state.cat.x,ny))state.cat.y=ny;
}
function finish(reason='ended'){sfx.stopAll();
  if(state.phase!=='playing')return;state.phase=reason;state.keys={};state.charging=false;state.charge=0;state.paused=false;state.message=reason==='ended'?'营业结束！本局完成 '+state.served+' 单，得分 '+state.score+'。':'本局已退出，可以重新开始。';music.stop();syncUi(true);
}
function tick(dt){
  if(state.phase!=='playing'||state.paused||state.suspended)return;
  const slice=Math.min(dt,state.timeLeft);if(slice<=0){finish();return;}dt=slice;
  state.elapsed+=dt;state.flowTime+=dt;state.timeLeft=Math.max(0,state.timeLeft-dt);
  for(const key of['jCooldown','kCooldown','lureCooldown','kTextLeft'])state[key]=Math.max(0,state[key]-dt);
  if(state.faintLeft>0){state.faintLeft=Math.max(0,state.faintLeft-dt);if(state.faintLeft<=1e-8)wakeChef();}
  tickFishing(dt);moveCat(dt);processStations(dt*(state.spinoLeft>0?RULES.workMult:1));tickThrows(dt);
  state.spinoLeft=Math.max(0,state.spinoLeft-dt);
  state.beltTravel=(state.beltTravel+BELT.speed*dt)%BELT.length;
  for(const food of state.foods)if(food.place==='belt'){food.distance=(food.distance+BELT.speed*dt)%BELT.length;Object.assign(food,beltPointAt(food.distance));}
  tickCustomers(dt);serveOnBelt();
  if(state.distractedLeft>0){state.distractedLeft=Math.max(0,state.distractedLeft-dt);if(state.distractedLeft<=0)state.cooldown=2;}
  else if(state.attack){const attack=state.attack;attack.time+=dt;
    if(attack.stage==='warning'&&attack.time+1e-8>=CONFIG.warningDuration){impact(attack);attack.stage='burst';attack.time=0;}
    else if(attack.stage==='burst'&&attack.time>=CONFIG.burstDuration){attack.stage='ripple';attack.time=0;}
    else if(attack.stage==='ripple'&&attack.time>=CONFIG.rippleDuration){state.attack=null;state.cooldown=3+Math.random()*2;}
  }else{state.cooldown=Math.max(0,state.cooldown-dt);if(state.cooldown<=0)triggerAttack();}
  if(state.decoy){state.decoy.time+=dt;if(state.decoy.time>1.5)state.decoy=null;}
  for(let i=state.particles.length-1;i>=0;i--){const p=state.particles[i];p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;if(p.life<=0)state.particles.splice(i,1);}
  if(state.timeLeft<=1e-8){state.timeLeft=0;finish();}
}
function step(seconds){if(state.suspended||state.paused||state.phase!=='playing')return;let left=Math.max(0,seconds);while(left>1e-9&&state.phase==='playing'){const dt=Math.min(left,1/120);tick(dt);left-=dt;}syncLevelSounds();}
function pauseGame(){if(state.phase!=='playing')return;state.paused=!state.paused;state.keys={};state.charging=false;state.charge=0;lastFrame=performance.now();music.sync();syncLevelSounds();syncUi(true);canvas.focus();}
function setSuspended(value){state.suspended=value;if(value){state.keys={};state.charging=false;state.charge=0;}lastFrame=performance.now();music.sync();syncLevelSounds();syncUi(true);}
document.addEventListener('keydown',event=>{
  const key=event.key.toLowerCase(),tag=event.target?.tagName||'';if(!KEYS.has(key)||['INPUT','TEXTAREA','SELECT'].includes(tag))return;if(tag==='BUTTON'&&key===' ')return;
  event.preventDefault();if(state.suspended)return;
  const previous=state.keys[key];state.keys[key]=true;if(event.repeat||previous)return;
  if(key==='escape'){finish('exited');return;}if(key==='r'){reset();return;}if(key==='p'){pauseGame();return;}
  music.unlock();
  if(state.phase!=='playing'||state.paused)return;
  if(state.faintLeft>0){if(key===' '){state.faintLeft=Math.max(0,state.faintLeft-RULES.spaceReduce);if(state.faintLeft<=1e-8)wakeChef();}return;}
  if(key==='e')interact();if(key==='q')beginThrow();if(key==='j'||key==='k')useSkill(key);
});
document.addEventListener('keyup',event=>{const key=event.key.toLowerCase();state.keys[key]=false;if(key==='q')releaseThrow();syncLevelSounds();});
window.addEventListener('blur',()=>setSuspended(true));window.addEventListener('focus',()=>{if(!document.hidden)setSuspended(false);});
document.addEventListener('visibilitychange',()=>{if(document.hidden)setSuspended(true);else if(!document.hasFocus||document.hasFocus())setSuspended(false);});
for(const id of['start-button','restart-button'])document.getElementById(id).addEventListener('click',()=>{reset();canvas.focus();});
document.getElementById('exit-button').addEventListener('click',()=>finish('exited'));
document.getElementById('pause-button').addEventListener('click',pauseGame);
document.getElementById('resume-button').addEventListener('click',()=>{if(state.paused)pauseGame();});
canvas.addEventListener('pointerdown',()=>canvas.focus());
function setText(id,value){if(cachedUi[id]===value)return;document.getElementById(id).textContent=value;cachedUi[id]=value;}
function skillStatus(){return state.spinoLeft>0?'脊背龙生效 '+state.spinoLeft.toFixed(1)+'s':state.jCooldown>0?'脊背龙冷却 '+Math.ceil(state.jCooldown)+'s':'脊背龙可用';}
function syncUi(force=false){
  const now=performance.now();if(!force&&now<uiNext)return;uiNext=now+100;
  const a=state.attack;
  const values={time:Math.ceil(state.timeLeft),score:state.score,served:state.served,customerCount:state.customers.length,hand:state.hasFood?FOOD_NAMES[state.hasFood.kind]:'空',message:state.message,skillJ:'J · '+skillStatus(),skillK:state.kCooldown>0?'K · 老吴冷却 '+Math.ceil(state.kCooldown)+'s':'K · 老吴可用',sharkStatus:state.distractedLeft>0?'鲨鱼被引开 '+Math.ceil(state.distractedLeft)+'s':a?(a.stage==='warning'?'红圈预警 · '+Math.max(0,CONFIG.warningDuration-a.time).toFixed(1)+'s':'鲨鱼正在涌起'):'鲨鱼巡游中',lureStatus:state.lureCooldown>0?'诱饵冷却 '+Math.ceil(state.lureCooldown)+'s':'投食诱鲨可用'};
  for(const[id,value]of Object.entries(values))setText(id,value);
  document.getElementById('skillJ').classList.toggle('active',state.spinoLeft>0);
  document.getElementById('pause-button').textContent=state.paused?'继续 · P':'暂停 · P';
  const phaseOverlay=state.phase!=='playing';document.getElementById('round-cover').hidden=!phaseOverlay;
  document.getElementById('focus-cover').hidden=phaseOverlay||(!state.suspended&&!state.paused);
  setText('pause-title',state.suspended?'已暂停 · 回到窗口继续':'休息一下');
  document.getElementById('resume-button').hidden=state.suspended;
  if(phaseOverlay){setText('round-title',state.phase==='ready'?'海上小厨房，开张！':state.phase==='ended'?'今日营业结束':'本局已退出');setText('round-detail',state.phase==='ready'?'180 秒 · 八道海鲜料理 · 最多五位顾客':'得分 '+state.score+' · 完成 '+state.served+' 单 · 流失 '+state.missed+' 位顾客');setText('start-button',state.phase==='ready'?'开始营业':'再来一局');}
  syncOrders();
}
window.Level2={CONFIG,RULES,RAFT,SPAWN,POOL,POOL_RIM,FISHING,nearestFishingNet,interactFishingNet,BELT,SEATS,BREEDS,tables,topStations,bottomStations,FOOD_NAMES,SUSHI_RECIPE,TEMPURA_PREP_RECIPE,PREP_RECIPES,MARINADE_RECIPES,OVEN_RECIPES,SHRIMP_SUSHI_RECIPE,DISHES,isFinishedDish,beltPointAt,distanceToBelt,projectOnBelt,reset,step,triggerAttack,supportedAt,interact,dropFood,useSkill,spawnCustomer,deliverSeafood,serveOnBelt,beginThrow,releaseThrow,finish,state:()=>state};

function createFishingNets(){
  return[POOL.x+54,POOL.x+POOL.w-54].map((x,i)=>({id:'net'+(i+1),label:'捕鱼网'+(i+1),x,y:POOL.y+POOL.h/2,status:'idle',progress:0,catches:[]}));
}
function nearestFishingNet(){
  let nearest=null,distance=FISHING.reach;
  for(const net of state.nets){const d=Math.hypot(state.cat.x-net.x,state.cat.y-net.y);if(d<distance){nearest=net;distance=d;}}
  return nearest;
}
function interactFishingNet(net){
  if(!canAct()||!state.nets.includes(net))return;
  if(state.hasFood){state.message='手里已有食物，请先放好，再空手按 E 使用'+net.label+'。';return;}
  if(net.status==='casting'){state.message=net.label+'正在捕捞，还需 '+Math.max(0,FISHING.duration-net.progress).toFixed(1)+' 秒，可以离开做菜。';return;}
  if(net.status==='ready'){
    const kind=net.catches.shift();if(kind)state.hasFood=makeFood(kind);
    if(net.catches.length){state.message='从'+net.label+'取出'+FOOD_NAMES[kind]+'，网里还剩 '+net.catches.length+' 份。';}
    else{net.status='idle';net.progress=0;state.message='拿到'+FOOD_NAMES[kind]+'，这网已取完；放好食材后可再按 E 下网。';}
    return;
  }
  net.status='casting';net.progress=0;net.catches=[];
  state.message=net.label+'已下网！约 '+FISHING.duration+' 秒后随机获得 3–4 份鱼、虾、蟹或鱿鱼，可以先去做菜。';
}
function tickFishing(dt){
  for(const net of state.nets){
    if(net.status!=='casting')continue;net.progress=Math.min(FISHING.duration,net.progress+dt);
    if(net.progress+1e-8<FISHING.duration)continue;
    const count=3+Math.floor(Math.random()*2);
    net.catches=Array.from({length:count},()=>FISHING.kinds[Math.floor(Math.random()*FISHING.kinds.length)]);
    net.status='ready';state.message=net.label+'捕到 '+count+' 份海鲜：'+net.catches.map(kind=>FOOD_NAMES[kind]).join('、')+'。空手回来按 E 逐只取走。';
  }
}
function drawFishingNets(){
  const c=ctx;
  for(const net of state.nets){
    // Rope mesh, warm wood rim and subdued water movement match the existing raft.
    c.save();c.translate(net.x,net.y);c.lineWidth=1.2;c.strokeStyle='#678d7c';c.fillStyle='#7eaa9326';
    c.beginPath();c.ellipse(0,0,36,13,0,0,Math.PI*2);c.fill();c.stroke();
    c.save();c.beginPath();c.ellipse(0,0,35,12,0,0,Math.PI*2);c.clip();
    c.globalAlpha=.65;c.lineWidth=1;c.strokeStyle='#e4e1b9';
    for(let x=-52;x<=52;x+=9){c.beginPath();c.moveTo(x-15,-15);c.lineTo(x+15,15);c.moveTo(x+15,-15);c.lineTo(x-15,15);c.stroke();}c.restore();
    c.strokeStyle='#d7c99b';c.lineWidth=2;c.beginPath();c.ellipse(0,-1,36,13,0,0,Math.PI*2);c.stroke();
    c.strokeStyle='#9c8359';c.lineWidth=2;c.beginPath();c.moveTo(-31,-7);c.lineTo(-40,-17);c.lineTo(-40,-22);c.moveTo(31,-7);c.lineTo(40,-17);c.lineTo(40,-22);c.stroke();
    ellipse(c,-40,-22,3,3,'#f0d89f');ellipse(c,40,-22,3,3,'#f0d89f');
    if(net.status==='casting'){
      c.strokeStyle='#dff4df66';c.lineWidth=1.2;c.beginPath();c.ellipse(0,0,16+Math.sin(state.elapsed*3)*4,6,0,0,Math.PI*2);c.stroke();
      rounded(c,-34,7,68,4,2,'#739b8c');if(net.progress>0)rounded(c,-34,7,68*net.progress/FISHING.duration,4,2,'#f0dba1');
    }
    c.restore();
    if(net.status==='ready')net.catches.forEach((kind,i)=>drawFood({kind},net.x+(i-(net.catches.length-1)/2)*18,net.y-3,.29,false));
    const text=net.status==='casting'?net.label+' · '+Math.ceil(FISHING.duration-net.progress)+'秒':net.status==='ready'?net.label+' · E 取 '+net.catches.length+'份':net.label+' · E 下网';
    label(c,text,net.x,POOL.y+POOL.h+20,10,net.status==='ready'?'#547d59':'#85754f');
  }
}

function rounded(c,x,y,w,h,r,fill,stroke=null,width=2){c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();if(stroke){c.lineWidth=width;c.strokeStyle=stroke;c.stroke();}}
function label(c,s,x,y,size=18,color='#6a5940',weight=600){c.fillStyle=color;c.font=weight+' '+size+'px "Microsoft YaHei",sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(s,x,y);}
function ellipse(c,x,y,rx,ry,color){c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();}
function polygon(c,points,color){c.fillStyle=color;c.beginPath();c.moveTo(...points[0]);for(const point of points.slice(1))c.lineTo(...point);c.closePath();c.fill();}
const STATION_SURFACES={crate:'#ddbb81',counter:'#faf1d8',board:'#e5eed4',cooker:'#dcecf0',oven:'#f8dfd6',fryer:'#fff0b7',marinade:'#ece0f0',trash:'#e1e6de'};
function makeDeck(){
  const sprite=document.createElement('canvas');sprite.width=1440;sprite.height=900;const c=sprite.getContext('2d');
  rounded(c,RAFT.x-5,RAFT.y+9,RAFT.w+10,RAFT.h,26,'#285b642b');rounded(c,RAFT.x-3,RAFT.y+3,RAFT.w+6,RAFT.h,23,'#8c6d42');
  for(let i=0;i<31;i++){
    const x=RAFT.x+i*40;rounded(c,x,RAFT.y,40,RAFT.h,14,['#d8b77f','#d1ac73','#ddbd87','#d2ae77'][i%4],'#ae8654',1.2);
    c.strokeStyle='#b2895640';c.lineWidth=1;for(let j=0;j<3;j++){c.beginPath();c.moveTo(x+7+j*6,RAFT.y+22+j*8);c.bezierCurveTo(x+5+j*7,350,x+16+j*3,540,x+9+j*5,RAFT.y+RAFT.h-20-j*8);c.stroke();}
  }
  for(const y of[RAFT.y+30,RAFT.y+RAFT.h-30]){c.strokeStyle='#8c7856';c.lineWidth=9;c.beginPath();c.moveTo(RAFT.x-2,y);c.lineTo(RAFT.x+RAFT.w+2,y);c.stroke();c.strokeStyle='#dfcfa0';c.lineWidth=4;c.setLineDash([5,6]);c.stroke();c.setLineDash([]);}
  for(const [width,color]of [[78,'#81694435'],[72,'#967348'],[65,'#dfbd83'],[53,'#f5e5bf']]){traceBelt(c);c.strokeStyle=color;c.lineWidth=width;c.stroke();}
  tables.forEach(t=>{rounded(c,t.x-3,t.y+7,t.w+6,t.h,10,'#815e3f25');rounded(c,t.x,t.y,t.w,t.h,10,'#b68b5e','#9a754c');rounded(c,t.x+5,t.y+4,t.w-10,t.h-13,7,STATION_SURFACES[t.type]||'#faf1d8','#c5a679',1.5);if(t.type==='crate'){rounded(c,t.x+3,t.y+t.h-17,t.w-6,11,3,'#eace9b');c.strokeStyle='#ad8553';c.lineWidth=2;c.beginPath();c.moveTo(t.x+12,t.y+7);c.lineTo(t.x+12,t.y+t.h-21);c.moveTo(t.x+t.w-12,t.y+7);c.lineTo(t.x+t.w-12,t.y+t.h-21);c.stroke();}label(c,t.label,t.x+t.w/2,t.y+t.h+13,12,'#5d4a32',600);});
  function stool(x,y,rotation=0){c.save();c.translate(x,y);c.rotate(rotation);ellipse(c,0,12,23,9,'#94714022');rounded(c,-21,-17,42,36,12,'#b5905f','#a28155');rounded(c,-17,-16,34,25,10,'#efce91');c.restore();}
  for(const x of[420,620,820,1020]){stool(x,162);stool(x,759);}for(const y of[410,570]){stool(174,y,Math.PI/2);stool(1266,y,-Math.PI/2);}
  for(const [x,y]of[[720,235],[1195,465],[720,695],[245,465]]){c.save();c.translate(x,y);c.rotate(x===1195?Math.PI/2:y===695?Math.PI:x===245?-Math.PI/2:0);c.strokeStyle='#b39b67';c.lineWidth=3;c.beginPath();c.moveTo(-5,-7);c.lineTo(4,0);c.lineTo(-5,7);c.stroke();c.restore();}
  for(const x of[118,1322])for(const y of[128,772]){ellipse(c,x,y,9,9,'#f8edcf');ellipse(c,x,y,5,5,'#c7835b');}
  // A transparent opening reveals the SAME animated sea rendered behind the raft.
  rounded(c,POOL_RIM.x,POOL_RIM.y,POOL_RIM.w,POOL_RIM.h,16,'#a17c4d','#8e7047',1.5);
  rounded(c,POOL.x-4,POOL.y-4,POOL.w+8,POOL.h+8,12,'#e0bc82');
  c.save();c.globalCompositeOperation='destination-out';rounded(c,POOL.x,POOL.y,POOL.w,POOL.h,9,'#000');c.restore();
  return sprite;
}
function traceBelt(c){const r=BELT.radius,l=BELT.left,t=BELT.top,right=BELT.right,b=BELT.bottom;c.beginPath();c.moveTo(l+r,t);c.lineTo(right-r,t);c.arc(right-r,t+r,r,-Math.PI/2,0);c.lineTo(right,b-r);c.arc(right-r,b-r,r,0,Math.PI/2);c.lineTo(l+r,b);c.arc(l+r,b-r,r,Math.PI/2,Math.PI);c.lineTo(l,t+r);c.arc(l+r,t+r,r,Math.PI,Math.PI*1.5);c.closePath();}
const deckSprite=makeDeck();
function drawBelt(){ctx.save();ctx.strokeStyle='#b7976259';ctx.lineWidth=52;ctx.setLineDash([2,22]);ctx.lineDashOffset=-state.beltTravel%24;traceBelt(ctx);ctx.stroke();ctx.restore();}
function drawWater(){
  const c=ctx,t=state.elapsed,sea=c.createLinearGradient(0,0,1440,900);sea.addColorStop(0,'#acd8cc');sea.addColorStop(.5,'#7fbeb8');sea.addColorStop(1,'#569ca7');c.fillStyle=sea;c.fillRect(0,0,1440,900);ellipse(c,220,140,310,100,'#e2f3d92b');ellipse(c,1210,840,350,150,'#376e8b18');c.lineCap='round';
  for(let row=0;row<13;row++)for(let col=0;col<12;col++){const x=col*136+(row%2)*58+Math.sin(t*.6+row)*9-70,y=32+row*72+Math.sin(t*.9+col*.8)*5;c.strokeStyle=(row+col)%3?'#e4f8df29':'#e4f8df55';c.lineWidth=1.8;c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+17,y+6,x+37,y);c.quadraticCurveTo(x+47,y-4,x+61,y);c.stroke();}
  for(const [x,y]of [[69,720],[1361,144],[1340,800]]){c.strokeStyle='#4d929278';c.lineWidth=5;for(let i=-2;i<=2;i++){c.beginPath();c.moveTo(x,y+24);c.quadraticCurveTo(x+i*10+Math.sin(t+i)*6,y-6,x+i*13,y-31-Math.abs(i)*8);c.stroke();}}
}
function sharkShape(c,x,y,angle,scale=1){
  c.save();c.translate(x,y);c.rotate(angle);c.scale(scale,scale);ellipse(c,-5,5,61,27,'#315f742e');polygon(c,[[-33,0],[-75,-25],[-66,0],[-75,25]],'#4c7183');polygon(c,[[-9,-11],[-24,-39],[17,-15]],'#5b8191');polygon(c,[[-9,11],[-24,39],[17,15]],'#5b8191');ellipse(c,0,0,47,22,'#7399a7');ellipse(c,9,6,32,12,'#c1d9d1');polygon(c,[[-8,-3],[8,-26],[16,1]],'#456c80');for(const y of[-11,11]){ellipse(c,29,y,4,4,'#eff5dd');ellipse(c,30,y,2,2,'#2d5262');}c.strokeStyle='#507789';c.lineWidth=2;c.beginPath();c.arc(29,0,13,-.4,.4);c.stroke();c.restore();
}
function marinadeSauce(c,plated){
  if(plated){ellipse(c,0,9,34,21,'#d9cdb0');ellipse(c,0,5,33,21,'#fff0cf');ellipse(c,0,3,28,17,'#b17f54');ellipse(c,0,1,25,14,'#c69965');}
}
function marinadeGarnish(c){
  for(const [x,y]of[[-16,-9],[16,-5],[-12,12],[18,10]]){ellipse(c,x,y,3.3,1.8,'#849665');ellipse(c,x+2,y-2,2,3,'#9baa71');}
  for(const [x,y]of[[-21,3],[13,-13],[5,15]]){ellipse(c,x,y,3,2.5,'#cb785a');ellipse(c,x,y,1.2,1,'#f4d398');}
  for(const [x,y]of[[-8,-12],[20,4],[-19,12]])ellipse(c,x,y,2,1.3,'#f4e2b3');
}
function paintFood(food,x=food.x,y=food.y,scale=1,plated=true,c=ctx){c.save();c.translate(x,y);c.scale(scale,scale);ellipse(c,0,17,21,6,'#775a3b20');
  if(food.kind==='salmon'){polygon(c,[[-19,0],[-36,-14],[-33,0],[-36,14]],'#8da495');ellipse(c,0,0,28,14,'#839a89');ellipse(c,2,4,24,10,'#edb88c');c.strokeStyle='#bec6a1';c.lineWidth=2;c.beginPath();c.moveTo(-17,-6);c.quadraticCurveTo(2,-12,18,-5);c.stroke();polygon(c,[[-7,-11],[0,-21],[9,-11]],'#91a38a');ellipse(c,18,-3,4,4,'#fff3cd');ellipse(c,19,-3,2,2,'#555e4d');c.strokeStyle='#a68465';c.lineWidth=1.5;c.beginPath();c.arc(12,0,7,-.9,.9);c.stroke();}
  else if(food.kind==='grilledFish'){
    if(plated){ellipse(c,0,9,35,19,'#dfd4b9');ellipse(c,0,6,34,17,'#fff1d0');polygon(c,[[18,15],[28,8],[25,19]],'#96a06d');}
    c.save();c.rotate(-.15);polygon(c,[[-19,0],[-35,-13],[-32,0],[-35,13]],'#b38650');ellipse(c,0,0,28,14,'#bd8c54');ellipse(c,2,-2,25,12,'#e7bc78');ellipse(c,0,7,20,5,'#d29c5d');c.strokeStyle='#9d7048';c.lineWidth=2.6;for(const x of[-12,-2,8]){c.beginPath();c.moveTo(x-3,-8);c.lineTo(x+2,7);c.stroke();}ellipse(c,19,-3,2.2,2.2,'#78624a');c.restore();
  }
  else if(['squid','grilledSquid'].includes(food.kind)){
    const grilled=food.kind==='grilledSquid';if(grilled&&plated){ellipse(c,0,12,32,21,'#dfd4b9');ellipse(c,0,9,31,19,'#fff2d1');}
    c.save();c.rotate(.15);if(grilled)rounded(c,-1,-35,3,76,1,'#b89b6a');const ink=grilled?'#c29564':'#aba4b7',body=grilled?'#e7bc86':'#e5dfe7';
    polygon(c,[[-12,-18],[-27,-7],[-13,-3]],ink);polygon(c,[[12,-18],[27,-7],[13,-3]],ink);
    c.fillStyle=ink;c.beginPath();c.moveTo(0,-31);c.bezierCurveTo(-14,-25,-20,-7,-14,10);c.quadraticCurveTo(0,17,14,10);c.bezierCurveTo(20,-7,14,-25,0,-31);c.fill();
    c.fillStyle=body;c.beginPath();c.moveTo(0,-27);c.bezierCurveTo(-11,-20,-15,-5,-11,9);c.quadraticCurveTo(0,14,11,9);c.bezierCurveTo(15,-5,11,-20,0,-27);c.fill();
    c.strokeStyle=grilled?'#d6aa77':'#d4ccd9';c.lineWidth=3.4;c.lineCap='round';for(let i=0;i<7;i++){const x=(i-3)*3.8;c.beginPath();c.moveTo(x,10);c.bezierCurveTo(x-4,21,x+(i%2?10:-10),34,x+(i%2?13:-13),24);c.stroke();}
    if(grilled){c.strokeStyle='#aa7851';c.lineWidth=2.5;for(const y of[-14,-5,4]){c.beginPath();c.moveTo(-9,y);c.lineTo(9,y+3);c.stroke();}}
    else{ellipse(c,-8,7,4,4,'#fbf0df');ellipse(c,8,7,4,4,'#fbf0df');ellipse(c,-8,7,2,2,'#77748c');ellipse(c,8,7,2,2,'#77748c');ellipse(c,-4,-15,4,7,'#f3edf2');}c.restore();
  }
  else if(food.kind==='salmonSlices'){if(plated){ellipse(c,0,12,32,18,'#dfd4b9');ellipse(c,0,9,31,17,'#fff4db');ellipse(c,21,13,5,4,'#a2ad75');}for(const [x,y]of[[-10,5],[0,0],[10,-5]]){c.save();c.translate(x,y);c.rotate(-.3);rounded(c,-14,-9,28,17,6,'#e99f77','#c7835e',1);c.strokeStyle='#ffe1b7';c.lineWidth=2;for(let i=-7;i<=7;i+=7){c.beginPath();c.moveTo(i-3,-7);c.lineTo(i+3,6);c.stroke();}c.restore();}}
  else if(food.kind==='nori'){c.save();c.rotate(-.1);rounded(c,-19,-15,40,31,4,'#8b9365');rounded(c,-23,-19,40,31,4,'#5c7656','#4c664d',1.5);c.strokeStyle='#91a27266';c.lineWidth=1;for(let i=-15;i<15;i+=7){c.beginPath();c.moveTo(i,-15);c.lineTo(i,8);c.moveTo(-18,i/2);c.lineTo(12,i/2);c.stroke();}c.restore();}
  else if(food.kind==='rawRice'){rounded(c,-20,-9,40,32,8,'#c8a46e','#aa8759',1.5);ellipse(c,0,-8,20,10,'#f3e7c5');for(let i=0;i<19;i++){const x=Math.sin(i*2.3)*15,y=-8+Math.cos(i*1.7)*6;c.fillStyle=i%3?'#fff6d9':'#d9c99e';c.beginPath();c.ellipse(x,y,3,1.3,-.5,0,Math.PI*2);c.fill();}}
  else if(['crab','marinatedCrab'].includes(food.kind)){
    const marinated=food.kind==='marinatedCrab',shell=marinated?'#bf9471':'#93a38a',limb=marinated?'#ad8061':'#7c947a';if(marinated)marinadeSauce(c,plated);
    c.save();c.lineCap='round';c.strokeStyle=limb;c.lineWidth=4;
    for(const side of[-1,1]){for(let i=0;i<3;i++){const y=-1+i*7;c.beginPath();c.moveTo(side*16,y);c.lineTo(side*(29+i),y+2);c.lineTo(side*(34-i*2),y+10);c.stroke();}c.beginPath();c.moveTo(side*15,-5);c.lineTo(side*28,-15);c.lineTo(side*26,-23);c.stroke();ellipse(c,side*26,-24,8,7,shell);polygon(c,[[side*23,-32],[side*26,-24],[side*29,-32]],'#f7edcb');}
    ellipse(c,0,1,22,15,limb);ellipse(c,0,-2,21,14,shell);ellipse(c,-5,-7,10,4,marinated?'#d9b78b':'#b4bda0');
    c.strokeStyle=limb;c.lineWidth=3;for(const x of[-8,8]){c.beginPath();c.moveTo(x,-11);c.lineTo(x,-19);c.stroke();ellipse(c,x,-19,3,3,'#f8ecc9');ellipse(c,x,-19,1.5,1.5,'#5a6653');}c.restore();if(marinated)marinadeGarnish(c);
  }
  else if(food.kind==='batter'){ellipse(c,0,12,23,10,'#899d88');rounded(c,-23,-7,46,21,8,'#a3b59b','#7f957e',1.5);ellipse(c,0,-6,25,11,'#f3ead0');ellipse(c,0,-7,21,8,'#e8d39e');c.strokeStyle='#fff0ca';c.lineWidth=2;c.beginPath();c.ellipse(-3,-7,12,4,0,.4,5.5);c.stroke();rounded(c,8,-27,5,27,2,'#b38d60');c.strokeStyle='#8f9d8a';c.lineWidth=1.5;c.beginPath();c.ellipse(10,-5,5,10,-.2,0,Math.PI*2);c.stroke();ellipse(c,-15,-1,3,2,'#fbefc5');}
  else if(['shrimp','coatedShrimp','tempura','marinatedShrimp','grilledShrimp'].includes(food.kind)){
    const grilled=food.kind==='grilledShrimp',marinated=food.kind==='marinatedShrimp',raw=food.kind==='shrimp'||marinated||grilled,fried=food.kind==='tempura';if(marinated)marinadeSauce(c,plated);
    if(fried&&plated){ellipse(c,0,10,31,18,'#e6dfc8');ellipse(c,0,7,29,16,'#fff5db');polygon(c,[[15,14],[26,8],[22,19]],'#9ba46c');}
    c.save();c.rotate(-.25);polygon(c,[[-16,-7],[-33,-17],[-29,-2]],raw?'#c99587':'#ce9065');polygon(c,[[-20,-5],[-34,0],[-26,7]],raw?'#d6afa0':'#e1a474');
    c.strokeStyle=grilled?'#b07c50':marinated?'#b68d7a':raw?'#a0aaa0':fried?'#c8964e':'#ceb88a';c.lineWidth=raw?14:19;c.beginPath();c.arc(-2,-1,16,-2.5,1.1);c.stroke();c.strokeStyle=grilled?'#e5ad77':marinated?'#dbc0a2':raw?'#d5c9b8':fried?'#edbf6b':'#f1dfaf';c.lineWidth=raw?10:15;c.stroke();
    if(raw){for(let i=0;i<5;i++){const a=-2+i*.58,x=Math.cos(a)*16-2,y=Math.sin(a)*16-1;c.strokeStyle=grilled?'#916445':'#a8a497';c.lineWidth=1.7;c.beginPath();c.moveTo(x-4,y-3);c.lineTo(x+3,y+3);c.stroke();}ellipse(c,7,10,1.6,1.6,'#777b69');c.strokeStyle='#a29b86';c.lineWidth=1;c.beginPath();c.moveTo(9,15);c.quadraticCurveTo(24,23,28,14);c.moveTo(8,16);c.quadraticCurveTo(16,28,24,23);c.stroke();}
    else{for(let i=0;i<17;i++){const a=-2.45+i*.21,offset=i%2?4:-3,x=Math.cos(a)*(16+offset)-2,y=Math.sin(a)*(16+offset)-1;ellipse(c,x,y,2.2,1.6,fried?(i%3?'#f8d98d':'#d7a252'):'#fff0cd');}}c.restore();if(marinated)marinadeGarnish(c);
  }
  else if(food.kind==='searedShrimpSushi'){ellipse(c,0,9,29,17,'#e6dcc6');ellipse(c,0,5,25,13,'#fff8df');ellipse(c,-1,0,22,10,'#fff2d4');drawFood({kind:'grilledShrimp'},-1,-7,.86,false,c);rounded(c,-3,-15,7,32,2,'#637c5e');}
  else {ellipse(c,0,5,25,15,'#e6dcc6');ellipse(c,0,1,24,12,'#fffbec');ellipse(c,0,-4,20,11,'#fff9dd');if(food.kind==='salmonSushi'){rounded(c,-22,-14,44,18,7,'#e69a70','#c7845e',1);c.strokeStyle='#ffe0b8';c.lineWidth=2;for(let x=-14;x<20;x+=9){c.beginPath();c.moveTo(x,-12);c.lineTo(x+5,1);c.stroke();}rounded(c,-4,-14,8,31,2,'#637c5e');}else{c.fillStyle='#ddd2b2';for(let i=0;i<7;i++){c.beginPath();c.ellipse(Math.sin(i*2)*12,-5+Math.cos(i*3)*5,2,1,0,0,Math.PI*2);c.fill();}c.strokeStyle='#f6f1dba0';c.lineWidth=2;for(const x of[-8,8]){c.beginPath();c.moveTo(x,-18);c.quadraticCurveTo(x-5,-23,x,-29);c.stroke();}}}
  c.restore();
}
function drawStations(){
  const c=ctx;for(const table of tables){const p=tablePoint(table),food=tableFoods(table)[0];
    if(table.type==='crate'){drawFood({kind:table.supply},p.x,p.y-4,.7);label(c,'E 取',p.x+31,p.y+13,9,'#92754c');}
    if(table.type==='board'){rounded(c,p.x-39,p.y-23,78,43,6,'#b9cb97','#7f9869',1.5);rounded(c,p.x-34,p.y-18,67,33,4,'#e0e8c8','#a5ba82',1);ellipse(c,p.x-30,p.y-9,2,3,'#7f9869');c.save();const cutting=food?.kind==='salmon'&&state.keys.f&&!state.hasFood&&state.faintLeft<=0&&nearestTable()?.id===table.id;c.translate(p.x+28,p.y-7+(cutting?Math.sin(state.elapsed*24)*3:0));c.rotate(.35);rounded(c,-3,-13,9,24,2,'#e6e6ce','#acae96',1);rounded(c,-3,9,7,13,2,'#a98051');c.restore();}
    if(table.type==='cooker'){const cooking=food?.kind==='rawRice',ready=food?.kind==='cookedRice';rounded(c,p.x-38,p.y-5,76,10,4,'#607f88');rounded(c,p.x-29,p.y-18,58,41,12,'#99bec8','#648c98',1.5);ellipse(c,p.x,p.y-14,29,9,'#d9e8e6');if(ready){ellipse(c,p.x,p.y-13,23,7,'#fff7dc');c.fillStyle='#ded7b8';for(let i=0;i<8;i++){c.beginPath();c.ellipse(p.x+Math.sin(i*2)*17,p.y-14+Math.cos(i*3)*3,2,1,0,0,Math.PI*2);c.fill();}}else{ellipse(c,p.x,p.y-18,31,9,'#e2edeb');rounded(c,p.x-10,p.y-29,20,10,4,'#657f89');ellipse(c,p.x+16,p.y-22,3,3,'#8da9b1');}rounded(c,p.x-7,p.y+7,14,7,3,cooking?'#d89b64':ready?'#f5df96':'#c3dce0');if(cooking){c.strokeStyle='#f9f2dc99';c.lineWidth=2;for(const x of[-10,10]){const offset=Math.sin(state.elapsed*3+x)*3;c.beginPath();c.moveTo(p.x+x,p.y-29);c.quadraticCurveTo(p.x+x+offset,p.y-37,p.x+x,p.y-43);c.stroke();}}}
    if(table.type==='fryer'){const frying=food?.kind==='coatedShrimp';rounded(c,p.x-36,p.y-21,72,45,9,'#e7c260','#b38c3c',1.5);rounded(c,p.x-29,p.y-17,58,29,6,'#927335');rounded(c,p.x-24,p.y-13,48,22,4,'#dbb353');c.strokeStyle='#f7e2a2';c.lineWidth=1;for(let x=-22;x<25;x+=7){c.beginPath();c.moveTo(p.x+x,p.y-12);c.lineTo(p.x+x,p.y+7);c.stroke();}rounded(c,p.x+18,p.y-25,25,6,3,'#9e7939');rounded(c,p.x-8,p.y+15,16,5,2,frying?'#da9d43':food?'#ffe1a0':'#efdb9a');if(food)drawFood(food,p.x,p.y-4,.55,false);if(frying){for(let i=0;i<6;i++){const x=p.x+Math.sin(i*2.5)*20,y=p.y-3+Math.cos(i*3)*7,r=1.5+(Math.sin(state.elapsed*5+i)+1)*.5;c.strokeStyle='#fae5a5a0';c.lineWidth=1;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.stroke();}}}
    if(table.type==='oven'){const baking=!!(food&&OVEN_RECIPES[food.kind]);window.paintKitchenGrill(c,p.x,p.y,baking,food?local=>drawFood(food,0,-4,.55,false,local):null,state.elapsed);}
    if(table.type==='marinade'){ellipse(c,p.x-4,p.y+5,32,18,'#b39bbd');ellipse(c,p.x-4,p.y,33,19,'#e9ddef');ellipse(c,p.x-4,p.y-2,28,14,'#b48c61');ellipse(c,p.x-4,p.y-3,24,11,'#cba774');rounded(c,p.x+29,p.y-16,10,24,3,'#b5a2c0','#8a7299',1);rounded(c,p.x+31,p.y-21,6,7,2,'#8c7199');rounded(c,p.x+28,p.y-6,12,7,2,'#eee1c1');if(food)drawFood(food,p.x-4,p.y-3,.5,false);else{ellipse(c,p.x-18,p.y-7,2,1,'#ead5a4');ellipse(c,p.x+8,p.y+2,2,1,'#9aa16f');}if(food&&MARINADE_RECIPES[food.kind]){c.strokeStyle='#f1dbaf66';c.lineWidth=1;const wobble=Math.sin(state.elapsed*1.4)*2;c.beginPath();c.ellipse(p.x-4,p.y-2,27+wobble,13,0,0,Math.PI*2);c.stroke();}}
    if(table.type==='trash'){rounded(c,p.x-22,p.y-19,44,42,7,'#97a298','#6c7b70',1.5);rounded(c,p.x-26,p.y-23,52,8,3,'#b6bfb6','#6c7b70',1);rounded(c,p.x-9,p.y-29,18,7,3,'#6c7b70');c.strokeStyle='#d3dbcc';c.lineWidth=2;for(const x of[-10,0,10]){c.beginPath();c.moveTo(p.x+x,p.y-10);c.lineTo(p.x+x,p.y+14);c.stroke();}}
  }
}
function drawStationProgress(){
  for(const table of tables){if(!['board','cooker','fryer','marinade','oven'].includes(table.type))continue;const food=tableFoods(table)[0];if(!food)continue;const p=tablePoint(table),below=table.row==='bottom',barY=below?table.y+table.h+19:table.y-12,textY=below?table.y+table.h+35:table.y-24,badgeY=below?table.y+table.h+24:table.y-24;
    const info={
      board:{working:food.kind==='salmon',progress:(food.chopProgress||0)/CONFIG.chopDuration,text:'切鱼中…',ready:'E 取刺身'},
      cooker:{working:food.kind==='rawRice',progress:(food.cookProgress||0)/CONFIG.cookDuration,text:'煮饭中 · 可离开',ready:'E 取熟饭'},
      fryer:{working:food.kind==='coatedShrimp',progress:(food.fryProgress||0)/CONFIG.fryDuration,text:'炸虾中 · 可离开',ready:'E 取天妇罗'},
      oven:{working:!!OVEN_RECIPES[food.kind],progress:(food.bakeProgress||0)/CONFIG.bakeDuration,text:'烘烤中 · 可离开',ready:'E 取'+FOOD_NAMES[food.kind]},
      marinade:{working:!!MARINADE_RECIPES[food.kind],progress:(food.marinateProgress||0)/CONFIG.marinateDuration,text:'腌制中 · 可离开',ready:'E 取'+FOOD_NAMES[food.kind]}
    }[table.type];
    if(info.working){const active=table.type!=='board'||(state.keys.f&&nearestTable()?.id===table.id&&!state.hasFood&&state.faintLeft<=0);rounded(ctx,p.x-43,barY,86,6,3,'#b5a17d');if(info.progress>0)rounded(ctx,p.x-43,barY,86*info.progress,6,3,'#7d9c6c');label(ctx,active?info.text:info.progress>0?'按住 F 继续切':'按住 F 切鱼',p.x,textY,11,'#4f6642');}
    else{rounded(ctx,p.x-43,badgeY,86,18,8,'#f3e5b6');label(ctx,info.ready,p.x,badgeY+9,11,'#6b542e');}
  }
}
function drawWarning(){
  const attack=state.attack;if(!attack)return;const c=ctx,{x,y,radius:r}=attack;
  if(attack.stage==='warning'){
    const progress=Math.min(1,attack.time/CONFIG.warningDuration),pulse=.13+Math.sin(state.elapsed*12)*.035;c.save();c.fillStyle='rgba(202,94,65,'+pulse+')';c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();c.fillStyle='#d4785318';c.beginPath();c.moveTo(x,y);c.arc(x,y,r*.88,-Math.PI/2,-Math.PI/2+progress*Math.PI*2);c.closePath();c.fill();c.lineWidth=3;c.strokeStyle='#c77554';c.setLineDash([10,6]);c.lineDashOffset=-state.elapsed*18;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.stroke();c.setLineDash([]);c.strokeStyle='#fff1cf';c.lineWidth=3;c.beginPath();c.moveTo(x-11,y);c.lineTo(x+11,y);c.moveTo(x,y-11);c.lineTo(x,y+11);c.stroke();c.restore();
    rounded(c,x-80,y-r-30,160,27,12,'#fff1d9','#d5a27a',1);label(c,'鲨鱼涌起 · '+Math.max(0,CONFIG.warningDuration-attack.time).toFixed(1)+' 秒',x,y-r-16,13,'#ab6347');
  }else{
    const p=attack.stage==='burst'?attack.time/CONFIG.burstDuration:attack.time/CONFIG.rippleDuration;
    c.save();c.globalAlpha=attack.stage==='burst'?.36:Math.max(0,.32*(1-p));ellipse(c,x,y,r,r*.72,'#ceeee5');c.globalAlpha=attack.stage==='burst'?.8:Math.max(0,.65*(1-p));c.strokeStyle='#f3fff0';c.lineWidth=5;for(let i=0;i<3;i++){c.beginPath();c.ellipse(x,y,(.35+p*.5+i*.12)*r,(.2+p*.32+i*.1)*r,0,0,Math.PI*2);c.stroke();}c.restore();
    if(attack.stage==='burst')sharkShape(c,x,y-20*Math.sin(p*Math.PI),attack.angle,.65+Math.sin(p*Math.PI)*.8);
  }
}

const foodSprites=new Map(),renderCache={faces:new Map()};
function rasterCanvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
function circle(c,x,y,r,color){ellipse(c,x,y,r,r,color);}
function drawFood(food,x=food.x,y=food.y,scale=1,plated=true,c=ctx){
  const key=food.kind+':'+plated;let sprite=foodSprites.get(key);
  if(!sprite){sprite=rasterCanvas(192,192);const sc=sprite.getContext('2d');sc.scale(2,2);paintFood(food,48,48,1,plated,sc);foodSprites.set(key,sprite);}
  c.drawImage(sprite,x-48*scale,y-48*scale,96*scale,96*scale);
}
function paintCatFace(c,breed,expression='waiting'){
  c.save();c.translate(24,25);c.strokeStyle='#91775f';c.lineWidth=1.3;
  c.fillStyle=breed.ear;c.beginPath();c.moveTo(-12,-5);c.lineTo(-15,-20);c.lineTo(-4,-12);c.moveTo(12,-5);c.lineTo(15,-20);c.lineTo(4,-12);c.fill();c.stroke();
  circle(c,0,0,16,breed.body);c.beginPath();c.arc(0,0,16,0,Math.PI*2);c.stroke();
  if(breed.spots){circle(c,-6,-4,5,breed.spots[0]);circle(c,7,5,4,breed.spots[1]);}
  if(breed.face){c.fillStyle=breed.face;c.beginPath();c.ellipse(0,2,10,8,0,0,Math.PI*2);c.fill();}
  if(expression==='eating'){
    c.strokeStyle='#5c4b3f';c.lineWidth=1.8;
    for(const x of[-6,6]){c.beginPath();c.arc(x,-2,3,0,Math.PI);c.stroke();}
  }else {circle(c,-6,-2,2.5,'#51433a');circle(c,6,-2,2.5,'#51433a');circle(c,-6.7,-3,0.8,'#fff');circle(c,5.3,-3,0.8,'#fff');}
  circle(c,0,5,2,'#c99689');c.restore();
}
function drawCatFace(c,breed,expression='waiting'){
  const key=breed.name+':'+expression;let sprite=renderCache.faces.get(key);
  if(!sprite){sprite=rasterCanvas(96,96);const sc=sprite.getContext('2d');sc.scale(2,2);paintCatFace(sc,breed,expression);renderCache.faces.set(key,sprite);}
  c.drawImage(sprite,0,0,48,48);
}

function patienceColor(p){return p>.5?'#91aa75':p>.25?'#d9aa59':'#c97965';}
function drawCustomer(customer){
  const c=customer,x=c.seat.x,y=c.seat.y;
  ellipse(ctx,x,y+22,21,7,'#9b795422');ctx.save();ctx.translate(x-29,y-29);ctx.scale(1.2,1.2);drawCatFace(ctx,c.breed,c.state);ctx.restore();
  if(c.state==='waiting'){
    const p=Math.max(0,c.patience/c.maxP);rounded(ctx,x-23,y-42,46,5,2,'#e0d1b3');rounded(ctx,x-23,y-42,46*p,5,2,patienceColor(p));
    rounded(ctx,x+23,y-33,39,35,9,'#fffcf1','#d3bc96');drawFood({kind:c.order},x+42,y-15,.47);
    label(ctx,'#'+(c.seat.id+1),x,y+37,12,'#8a704d');if(c.stun>0)label(ctx,'时停 '+Math.ceil(c.stun)+'s',x,y-55,11,'#75918c');
  }else{
    const size=Math.max(0,1-c.eatProgress)*.7;if(size>.04)drawFood({kind:c.order},x,y+34,size);
    if(c.eatProgress>.5)label(ctx,'😊',x,y-39,22);
  }
}
function syncOrders(){
  const box=document.getElementById('orders'),ids=new Set(state.customers.map(c=>c.id));
  for(const[id,node]of orderNodes)if(!ids.has(id)){node.root.remove();orderNodes.delete(id);}
  document.getElementById('orders-empty').hidden=state.customers.length>0;
  for(const c of state.customers){let node=orderNodes.get(c.id);
    if(!node){
      const root=document.createElement('article');root.className='order-ticket';
      const face=rasterCanvas(96,96),fc=face.getContext('2d');fc.scale(2,2);drawCatFace(fc,c.breed);face.className='order-avatar';
      const icon=rasterCanvas(96,96),ic=icon.getContext('2d');ic.scale(2,2);drawFood({kind:c.order},24,25,.6,true,ic);icon.className='order-food';
      const info=document.createElement('div');info.className='order-info';
      const name=document.createElement('strong');name.className='order-name';name.textContent=FOOD_NAMES[c.order];
      const caption=document.createElement('span');caption.className='order-caption';
      const track=document.createElement('div');track.className='order-patience';const fill=document.createElement('i');track.appendChild(fill);
      info.appendChild(name);info.appendChild(caption);info.appendChild(track);root.appendChild(face);root.appendChild(icon);root.appendChild(info);box.appendChild(root);
      node={root,caption,fill};orderNodes.set(c.id,node);
    }
    node.root.classList.toggle('eating',c.state==='eating');const p=Math.max(0,c.patience/c.maxP);
    node.fill.style.width=(p*100)+'%';node.fill.style.background=patienceColor(p);
    node.caption.textContent='#'+(c.seat.id+1)+' · '+(c.state==='eating'?'用餐中':c.stun>0?'时停中':!c.delivered?'准备送食材':Math.ceil(c.patience)+'s');
  }
}
function drawChef(){
  const c=ctx,p=state.cat,fainted=state.faintLeft>0;
  if(state.spinoLeft>0){c.save();c.strokeStyle='#f8e2a4';c.lineWidth=3;c.globalAlpha=.7;c.beginPath();c.ellipse(p.x,p.y+18,30,12,0,0,Math.PI*2);c.stroke();c.restore();}
  ellipse(c,p.x,p.y+16,21,8,'#78563032');c.save();c.translate(p.x,p.y);if(fainted)c.rotate(.18);
  if(chefImage&&chefImage.complete&&chefImage.width)c.drawImage(chefImage,-43,-57,86,86);
  else{ellipse(c,0,0,23,23,'#edc18b');polygon(c,[[-20,-10],[-22,-30],[-7,-20]],'#edc18b');polygon(c,[[20,-10],[22,-30],[7,-20]],'#edc18b');ellipse(c,-8,-3,3,4,'#4c4c45');ellipse(c,8,-3,3,4,'#4c4c45');rounded(c,-21,-35,42,13,5,'#fff5df');}c.restore();
  if(state.hasFood&&!fainted)drawFood(state.hasFood,p.x,p.y+18,.7);
  if(fainted){
    const remaining=Math.max(0,Math.min(1,state.faintLeft/CONFIG.faintDuration));
    rounded(c,p.x-145,p.y-145,290,78,15,'#fff3d9','#c6a97d',1.5);
    label(c,'眩晕中 · 剩余 '+state.faintLeft.toFixed(1)+' 秒',p.x,p.y-124,16,'#8b709b');
    rounded(c,p.x-122,p.y-109,244,10,5,'#e5d9c6');
    if(remaining>0)rounded(c,p.x-122,p.y-109,244*remaining,10,5,'#ab96bf');
    label(c,'连续轻按空格，加快苏醒',p.x,p.y-83,12,'#987953');
    for(let i=0;i<3;i++){const a=state.elapsed*4+i*Math.PI*2/3;label(c,'✦',p.x+Math.cos(a)*30,p.y-47+Math.sin(a)*10,16,'#f6dc8e');}
    // A tiny floating spirit is decorative; the chef stays at the same position.
    c.save();c.globalAlpha=.45;ellipse(c,p.x+12,p.y-53-Math.sin(state.elapsed*3)*4,10,12,'#fffbed');ellipse(c,p.x+9,p.y-55,1,2,'#748580');ellipse(c,p.x+15,p.y-55,1,2,'#748580');c.restore();
  }
  if(state.charging){const ratio=Math.min(1,state.charge/RULES.chargeMax);rounded(c,p.x-36,p.y-76,72,8,4,'#c9ba9b');rounded(c,p.x-36,p.y-76,Math.max(1,72*ratio),8,4,ratio<.4?'#83a779':ratio<.8?'#ddb369':'#cf8169');label(c,'松开 Q 投掷',p.x,p.y-89,11,'#756b4d');}
}
// Skill captions follow the chef and use simulation time, so pause freezes them too.
function drawSkillText(){
  const p=state.cat,c=ctx;
  function word(text,x,y,size,color,alpha){
    c.save();c.globalAlpha=alpha;c.font='900 '+size+'px "Microsoft YaHei",sans-serif';c.textAlign='center';c.textBaseline='middle';c.lineJoin='round';c.strokeStyle='#fff8e8';c.lineWidth=Math.max(3,size*.09);c.strokeText(text,x,y);c.fillStyle=color;c.fillText(text,x,y);c.restore();
  }
  if(state.spinoLeft>0){
    const elapsed=RULES.spinoDuration-state.spinoLeft,interval=.42,lifetime=1.15,newest=Math.floor(elapsed/interval);
    for(let i=Math.max(0,newest-2);i<=newest;i++){
      const age=elapsed-i*interval;if(age<0||age>=lifetime)continue;
      const t=age/lifetime,x=p.x+(i%2?15:-15)+Math.sin(age*5)*4,y=p.y-(state.faintLeft>0?165:75)-t*48;
      word('内阁',x,y,23,'#b88738',(1-t)*Math.min(1,.55+t*6));
    }
  }
  if(state.kTextLeft>0){
    const t=1-state.kTextLeft/1.5,pop=1-Math.pow(1-Math.min(1,t/.25),3),size=32+45*pop,alpha=t<.65?1:Math.max(0,(1-t)/.35);
    word('老吴',p.x,p.y-(state.faintLeft>0?200:112)-t*12,size,'#7a728d',alpha);
  }
}
function raftPose(time){
  const reduced=typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return reduced?{x:0,y:0,angle:0}:{x:Math.sin(time*.45)*1.6,y:Math.sin(time*.72)*2.8,angle:Math.sin(time*.43)*.0018};
}
function draw(){
  drawWater();
  if(state.decoy){const t=Math.min(1,state.decoy.time/1.5);sharkShape(ctx,state.decoy.x,state.decoy.y+Math.sin(t*Math.PI)*18,-Math.PI/2,.8);}
  else if(!state.attack){const a=state.flowTime*.4;sharkShape(ctx,720+Math.cos(a)*310,815+Math.sin(a)*22,Math.atan2(Math.cos(a)*22,-Math.sin(a)*310));}
  for(const bait of state.baits)drawFood(bait,bait.x,bait.y,.65);
  const pose=raftPose(state.elapsed);ctx.save();ctx.translate(720+pose.x,450+pose.y);ctx.rotate(pose.angle);ctx.translate(-720,-450);
  ctx.drawImage(deckSprite,0,0);drawBelt();drawStations();drawFishingNets();
  for(const food of state.foods){
    const table=food.place==='table'?tables.find(t=>t.id===food.tableId):null;if(['cooker','fryer','marinade','oven'].includes(table?.type))continue;
    if(food.place==='belt'){ellipse(ctx,food.x,food.y+5,27,18,'#fff9e7');ctx.strokeStyle='#c6b48d';ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(food.x,food.y+5,27,18,0,0,Math.PI*2);ctx.stroke();}
    const arc=food.place==='flying'?Math.sin(Math.min(1,food.travelled/RULES.throwMax)*Math.PI)*28:0;
    drawFood(food,food.x,food.y-arc,table?(tableFoods(table).length>1?.52:.7):food.place==='belt'?.78:.75,table?.type!=='board');
  }
  for(const customer of state.customers)drawCustomer(customer);
  drawStationProgress();const table=nearestTable();
  if(table&&state.faintLeft<=0&&state.phase==='playing'){ctx.strokeStyle='#8c9c64';ctx.lineWidth=3;ctx.setLineDash([6,5]);ctx.strokeRect(table.x-3,table.y-3,table.w+6,table.h+6);ctx.setLineDash([]);}
  drawWarning();drawChef();drawSkillText();
  for(const p of state.particles){ctx.save();ctx.globalAlpha=Math.min(1,p.life);ellipse(ctx,p.x,p.y,3,5,'#f1fff2');ctx.restore();}
  if(state.faintLeft<=0&&distanceToBelt(state.cat.x,state.cat.y)<=BELT.width/2+CONFIG.catRadius+17)label(ctx,state.hasFood?'E 直接放上传送带':'E 取回身旁食物',state.cat.x,state.cat.y-77,13,'#927348');
  ctx.restore();
}
function frame(now){const dt=Math.min(.05,Math.max(0,(now-lastFrame)/1000));lastFrame=now;step(dt);if(!state.suspended&&!state.paused&&state.phase==='playing')draw();syncUi();requestAnimationFrame(frame);}
reset(false);draw();if(chefImage)chefImage.onload=()=>draw();requestAnimationFrame(frame);window.Level2.draw=draw;window.Level2.raftPose=raftPose;

