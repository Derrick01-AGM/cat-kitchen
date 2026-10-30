// 技能造型由游戏计时驱动；不另设计时器，暂停、重开与技能结束同步恢复。
window.paintChefSkill=function(c,x,y,pose){
 const mode=pose.hiss>0?'hiss':pose.roar>0?'roar':pose.boost>0?'spino':null;
 if(!mode)return false;
 c.save();c.translate(x,y);const size=pose.scale||1;c.scale(size,size);
 c.lineJoin='round';c.lineCap='round';c.lineWidth=1.7;c.strokeStyle='#aa7850';
 const fur='#eac08a',cream='#fff0d5',ink='#62452f';
 function oval(x,y,rx,ry,color,edge=true){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fillStyle=color;c.fill();if(edge)c.stroke();}
 function poly(points,color){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fillStyle=color;c.fill();c.stroke();}
 function line(points,color=ink,width=1.7){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=color;c.lineWidth=width;c.stroke();c.strokeStyle='#aa7850';c.lineWidth=1.7;}
 function hat(x,y){oval(x-13,y-6,10,9,'#fffdf5');oval(x,y-10,13,11,'#fffdf5');oval(x+13,y-6,10,9,'#fffdf5');poly([[x-20,y-6],[x+20,y-6],[x+18,y+6],[x-18,y+6]],'#fff9ec');}
 if(mode==='spino'){
  // 参考照片的侧身圆弧拱背、四足站姿与回头看人的脸，毛尖只做少量点缀。
  c.save();c.translate(-29,-1);c.rotate(-.24);oval(-6,-2,6,23,fur);c.restore();
  oval(-17,12,6,15,fur);oval(13,11,6,16,fur);
  c.beginPath();c.moveTo(-32,8);c.bezierCurveTo(-39,-10,-32,-51,-11,-56);c.bezierCurveTo(13,-64,25,-40,28,-10);c.quadraticCurveTo(23,9,4,10);c.quadraticCurveTo(-16,1,-32,8);c.fillStyle=fur;c.fill();c.stroke();
  oval(-26,17,7,15,fur);oval(24,16,6,15,fur);oval(-27,30,9,4,cream);oval(25,30,9,4,cream);
  for(let i=0;i<4;i++)line([[-24+i*10,-43],[-27+i*10,-29],[-23+i*10,-17]],'#bb8752',2.5);
  poly([[-15,-55],[-11,-60],[-7,-55]],fur);poly([[-4,-57],[0,-62],[4,-55]],fur);
  poly([[7,-29],[7,-48],[19,-39],[32,-47],[34,-28]],fur);
  oval(21,-20,22,21,fur);oval(21,-11,15,10,cream,false);
  hat(20,-49);
  oval(13,-23,5,6,'#fff5d8',false);oval(29,-23,5,6,'#fff5d8',false);
  oval(14,-22,2.8,4,'#788653',false);oval(28,-22,2.8,4,'#788653',false);
  oval(14,-22,1.3,3.5,ink,false);oval(28,-22,1.3,3.5,ink,false);
  poly([[18,-13],[24,-13],[21,-9]],'#cc8e80');line([[21,-8],[17,-5],[13,-6]]);line([[21,-8],[25,-5],[29,-6]]);
  line([[6,-12],[-4,-14]],'#b19372',1);line([[36,-12],[46,-14]],'#b19372',1);
 }else{
  // 保留主厨的奶油色身体与白帽，变换头部表情和姿态。
  oval(0,6,23,23,fur);oval(0,10,16,17,cream,false);oval(-14,25,10,6,cream);oval(14,25,10,6,cream);
  const progress=mode==='hiss'?Math.max(0,Math.min(1,1-pose.hiss/.65)):0;
  const pop=mode==='hiss'?1+.65*(progress<.18?progress/.18:(1-progress)/.82):1;
  c.save();c.translate(0,mode==='roar'?-27:-22);c.scale(pop,pop);
  if(mode==='roar')c.rotate(-.1+Math.sin((pose.time||0)*22)*.025);
  poly([[-23,-7],[-27,-29],[-10,-19],[10,-19],[27,-29],[23,-7]],fur);
  poly([[-21,-12],[-23,-23],[-12,-17]],'#e5a59a');poly([[21,-12],[23,-23],[12,-17]],'#e5a59a');
  oval(0,0,29,26,fur);oval(-12,10,14,13,cream,false);oval(12,10,14,13,cream,false);
  for(const sign of [-1,1]){line([[sign*8,-18],[sign*10,-11]],'#b7814e',3);line([[sign*17,-16],[sign*19,-9]],'#b7814e',2);}
  if(mode==='roar'){
   line([[-19,-7],[-13,-11],[-7,-7]],ink,2.5);line([[7,-7],[13,-11],[19,-7]],ink,2.5);
   oval(0,10,10,16,'#633b32');oval(0,20,6,5,'#db8e88',false);
   poly([[-7,0],[-3,1],[-5,7]],'#fff9e7');poly([[7,0],[3,1],[5,7]],'#fff9e7');
  }else{
   // 参考耄耋脸：压低的眼皮、宽脸、张开的嘴和两颗獠牙。
   line([[-22,-10],[-10,-6],[-5,-9]],ink,3);line([[5,-9],[10,-6],[22,-10]],ink,3);
   oval(-13,-5,5,2.8,'#78724b',false);oval(13,-5,5,2.8,'#78724b',false);oval(-13,-5,1.2,3,ink,false);oval(13,-5,1.2,3,ink,false);
   oval(0,14,15,17,'#67392d');oval(0,24,9,6,'#d68a84',false);
   poly([[-12,2],[-5,4],[-9,15]],'#fffae8');poly([[12,2],[5,4],[9,15]],'#fffae8');
   poly([[-8,27],[-4,22],[-2,28]],'#fff5df');poly([[8,27],[4,22],[2,28]],'#fff5df');
  }
  poly([[-5,0],[5,0],[0,5]],'#c78c7d');
  for(const sign of [-1,1]){line([[sign*17,6],[sign*38,2]],'#faf0db',1.2);line([[sign*19,10],[sign*40,12]],'#faf0db',1.2);}
  hat(0,-29);c.restore();
  if(mode==='roar')for(const sign of [-1,1]){c.strokeStyle='#c99b60';c.lineWidth=2;c.beginPath();c.arc(sign*18,-48,18+(Math.sin((pose.time||0)*13)+1)*4,sign<0?2.7:4.8,sign<0?4.4:6.6);c.stroke();}
 }
 c.restore();return true;
};

window.paintSkillCaption=function(c,word,x,y,left,duration,color){
 const t=Math.max(0,Math.min(1,1-left/duration)),pop=1-Math.pow(1-Math.min(1,t/.2),3);
 const fontSize=(word==='哈'?46:40)+(word==='哈'?108:92)*pop;
 c.save();c.translate(x,Math.max(95,y));c.rotate(Math.sin(t*21)*.035*(1-t));c.globalAlpha=t<.65?1:Math.max(0,(1-t)/.35);
 c.font='900 '+fontSize+'px "Microsoft YaHei",sans-serif';c.textAlign='center';c.textBaseline='middle';c.lineJoin='round';
 c.shadowColor='#593b3b55';c.shadowBlur=12;c.shadowOffsetY=5;c.lineWidth=fontSize*.12;c.strokeStyle='#fff8e4';c.strokeText(word,0,0);c.shadowBlur=0;c.shadowOffsetY=0;c.fillStyle=color;c.fillText(word,0,0);c.restore();
};


window.TomatoArt = (() => {
  const tau = Math.PI * 2;
  function ellipse(c,x,y,rx,ry,fill,rotation=0,stroke=null,width=2) {
    c.beginPath(); c.ellipse(x,y,rx,ry,rotation,0,tau);
    if(fill){c.fillStyle=fill;c.fill();}
    if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}
  }
  function whole(c) {
    // 饱满的果形、低饱和阴影和两处反光，参考整颗番茄的轮廓。
    c.beginPath(); c.moveTo(0,-28);
    c.bezierCurveTo(-24,-42,-48,-13,-45,13);
    c.bezierCurveTo(-43,40,-16,47,0,42);
    c.bezierCurveTo(22,48,47,33,46,9);
    c.bezierCurveTo(45,-17,23,-39,0,-28);
    c.closePath(); c.fillStyle='#e96551'; c.fill();
    c.strokeStyle='#a94c3d';c.lineWidth=2.5;c.stroke();
    c.beginPath();c.moveTo(27,-23);
    c.bezierCurveTo(52,14,20,42,-30,30);
    c.bezierCurveTo(-13,51,40,46,45,17);
    c.bezierCurveTo(48,1,40,-15,27,-23);
    c.fillStyle='#cf4f40';c.fill();
    ellipse(c,-19,-7,13,7,'#ffb19a',-.62);
    ellipse(c,-28,7,4,3,'#ffd3b8',-.62);
    // 不规则五角叶冠，与参考图一样保持大而清楚的绿色叶片。
    c.beginPath();c.moveTo(-3,-30);
    c.quadraticCurveTo(-9,-44,0,-49);
    c.quadraticCurveTo(8,-42,8,-33);
    c.quadraticCurveTo(25,-42,33,-33);
    c.lineTo(16,-26);c.quadraticCurveTo(26,-20,24,-12);
    c.lineTo(7,-21);c.quadraticCurveTo(5,-5,-2,-9);
    c.lineTo(-8,-25);c.lineTo(-26,-16);
    c.quadraticCurveTo(-28,-24,-17,-29);
    c.quadraticCurveTo(-34,-31,-31,-36);
    c.quadraticCurveTo(-16,-40,-3,-30);
    c.fillStyle='#79985b';c.fill();c.strokeStyle='#577347';c.lineWidth=1.6;c.stroke();
    c.beginPath();c.moveTo(0,-31);c.lineTo(2,-43);
    c.strokeStyle='#a9bc79';c.lineWidth=3;c.lineCap='round';c.stroke();
  }
  function oneSlice(c,x,y,r,angle) {
    c.save();c.translate(x,y);c.rotate(angle);
    ellipse(c,0,4,r,r*.88,'#bd4c3e');
    ellipse(c,0,0,r,r*.88,'#ef7968',0,'#ad4b3c',2.2);
    ellipse(c,0,0,r*.84,r*.73,'#f39780');
    // 四瓣籽腔和奶黄色小籽，缩小后仍能看出番茄横截面。
    for(let i=0;i<4;i++){
      const a=i*Math.PI/2+.2;
      const px=Math.cos(a)*r*.48,py=Math.sin(a)*r*.41;
      ellipse(c,px,py,r*.31,r*.23,'#d95b4b',a);
      for(let j=-1;j<=1;j++){
        const b=a+j*.43;
        ellipse(c,Math.cos(b)*r*.57,Math.sin(b)*r*.49,r*.065,r*.14,'#f6d59a',b-Math.PI/2);
      }
    }
    ellipse(c,0,0,r*.18,r*.16,'#f6ad8c');
    c.beginPath();c.ellipse(0,0,r*.9,r*.79,0,3.7,5.05);
    c.strokeStyle='#ffbd9c';c.lineWidth=2.5;c.lineCap='round';c.stroke();
    c.restore();
  }
  function sliced(c) {
    oneSlice(c,17,14,30,.24);
    oneSlice(c,-12,-11,32,-.26);
  }
  function chunk(c,x,y,s,angle) {
    c.save();c.translate(x,y);c.rotate(angle);c.scale(s,s);
    c.beginPath();c.moveTo(-16,-9);
    c.bezierCurveTo(-11,-18,7,-15,15,-8);
    c.bezierCurveTo(22,1,12,12,3,13);
    c.bezierCurveTo(-13,17,-23,2,-16,-9);
    c.closePath();c.fillStyle='#db6a43';c.fill();
    c.strokeStyle='#b45b3e';c.lineWidth=1.6;c.stroke();
    c.beginPath();c.moveTo(-11,-4);c.quadraticCurveTo(-1,-10,8,-4);
    c.strokeStyle='#f8b474';c.lineWidth=3.5;c.lineCap='round';c.stroke();
    ellipse(c,3,5,2.4,1.3,'#f1c17f',-.4);
    c.restore();
  }
  function cooked(c) {
    // 少量浅汤汁，食材仍是可辨认的软烂番茄块。
    ellipse(c,0,12,46,25,'#c77a4526');
    ellipse(c,0,6,44,24,'#eaa16b',0,'#c98655',1.5);
    ellipse(c,-2,3,37,18,'#edb77e');
    chunk(c,-18,-1,1.05,-.3);chunk(c,16,1,1.05,.35);chunk(c,1,16,.86,-.12);
    ellipse(c,-32,12,2.4,1.4,'#ffe1a3');ellipse(c,31,14,3,1.4,'#ffe1a3');
    // 极少量香草点缀，不会盖过番茄的橙红色。
    ellipse(c,0,-5,5,2,'#8d9a58',-.5);
  }
  const painters={tomato:whole,chopped:sliced,cooked};
  function draw(c,kind,x,y,size=48){
    const painter=painters[kind];if(!painter)return;
    c.save();c.translate(x,y);c.scale(size/100,size/100);painter(c);c.restore();
  }
  return {draw,kinds:['tomato','chopped','cooked']};
})();

// 汉堡食材，与 TomatoArt 一样使用中心坐标和可缩放的透明绘图。
window.BurgerArt = (() => {
  const tau=Math.PI*2;
  function ellipse(c,x,y,rx,ry,fill,stroke=null,width=2){
    c.beginPath();c.ellipse(x,y,rx,ry,0,0,tau);c.fillStyle=fill;c.fill();
    if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}
  }
  function breadSlice(c,x,y,angle){
    c.save();c.translate(x,y);c.rotate(angle);
    const outline=()=>{
      c.beginPath();c.moveTo(-29,-10);c.bezierCurveTo(-48,-39,-21,-45,0,-42);
      c.bezierCurveTo(28,-45,46,-32,30,-12);c.lineTo(33,34);
      c.quadraticCurveTo(0,43,-33,34);c.closePath();
    };
    outline();
    c.fillStyle='#d89a55';c.fill();c.strokeStyle='#98653f';c.lineWidth=2.5;c.stroke();
    c.save();c.scale(.86,.86);outline();c.fillStyle='#fff0ca';c.fill();c.restore();
    for(const [dx,dy,rx,ry]of[[-17,-24,5,2],[12,-17,3,2],[-8,4,4,2],[15,20,4,2],[-19,27,3,2]])ellipse(c,dx,dy,rx,ry,'#e9d2a6');
    c.beginPath();c.moveTo(-29,-23);c.quadraticCurveTo(-22,-35,-9,-34);c.strokeStyle='#fff9df';c.lineWidth=3;c.lineCap='round';c.stroke();
    c.restore();
  }
  function bread(c){breadSlice(c,11,3,.13);breadSlice(c,-9,0,-.10);}
  function patty(c,cooked){
    ellipse(c,0,10,45,27,cooked?'#79503e':'#ba6970','#895342');
    ellipse(c,0,2,45,27,cooked?'#a16d4d':'#e69a94','#895342');
    ellipse(c,-7,-3,34,18,cooked?'#b27d58':'#edada0');
    for(const [x,y]of[[-26,-4],[-6,-13],[19,-5],[28,12],[-17,13],[4,8]]){
      ellipse(c,x,y,2.5,1.6,cooked?'#7e523c':'#f6c8b0');
    }
    if(cooked){
      c.strokeStyle='#77503c';c.lineWidth=4;c.lineCap='round';
      for(let i=0;i<3;i++){c.beginPath();c.moveTo(-24+i*18,-10);c.lineTo(-14+i*18,12);c.stroke();}
    }
  }
  function burger(c){
    // 配方只有面包、番茄片、熟肉饼，不增加额外食材。
    ellipse(c,0,31,44,14,'#daa05f','#97613c');
    ellipse(c,0,25,43,12,'#f3ce8d');
    ellipse(c,0,15,46,15,'#986346','#714b37',2.4);
    c.strokeStyle='#bb8b61';c.lineWidth=3;c.lineCap='round';
    for(const x of[-25,-8,10,27]){c.beginPath();c.moveTo(x-4,9);c.lineTo(x+4,16);c.stroke();}
    ellipse(c,-15,2,30,11,'#d45443','#a84c3a');
    ellipse(c,16,3,30,11,'#e97b61','#a84c3a');
    ellipse(c,-15,-1,25,6,'#f1a080');ellipse(c,17,0,25,6,'#f1a080');
    for(const x of[-25,-8,12,28])ellipse(c,x,0,2.5,1.5,'#ffe0a6');
    c.beginPath();c.moveTo(-46,-7);c.bezierCurveTo(-45,-47,42,-49,46,-7);
    c.bezierCurveTo(47,8,-44,9,-46,-7);c.closePath();
    c.fillStyle='#e6ad6a';c.fill();c.strokeStyle='#97613c';c.lineWidth=2.5;c.stroke();
    c.beginPath();c.moveTo(-38,-15);c.quadraticCurveTo(-27,-34,0,-34);c.strokeStyle='#ffdeb0';c.lineWidth=5;c.lineCap='round';c.stroke();
    for(const [x,y,a]of[[-21,-21,-.5],[0,-26,.3],[20,-21,-.3],[-9,-11,.4],[28,-10,-.4]]){
      c.save();c.translate(x,y);c.rotate(a);ellipse(c,0,0,2.4,4,'#fff3cf');c.restore();
    }
  }
  const painters={bread,rawPatty:c=>patty(c,false),cookedPatty:c=>patty(c,true),burger};
  function draw(c,kind,x,y,size=48){
    if(!painters[kind])return;
    c.save();c.translate(x,y);c.scale(size/100,size/100);painters[kind](c);c.restore();
  }
  return {draw,kinds:Object.keys(painters)};
})();

// 土豆、切片土豆和薯条共用的透明绘图素材。
window.FriesArt=(()=>{
  const tau=Math.PI*2;
  function ellipse(c,x,y,rx,ry,color,angle=0,stroke=null){
    c.beginPath();c.ellipse(x,y,rx,ry,angle,0,tau);c.fillStyle=color;c.fill();
    if(stroke){c.strokeStyle=stroke;c.lineWidth=2;c.stroke();}
  }
  function potato(c){
    c.beginPath();c.moveTo(-39,-13);c.bezierCurveTo(-39,-35,-7,-42,9,-31);
    c.bezierCurveTo(28,-36,46,-13,42,10);c.bezierCurveTo(42,35,13,43,-9,34);
    c.bezierCurveTo(-32,38,-48,12,-39,-13);c.closePath();
    c.fillStyle='#d3ad75';c.fill();c.strokeStyle='#a58359';c.lineWidth=2.5;c.stroke();
    ellipse(c,-12,-12,22,12,'#e6c997',-.35);
    for(const[x,y]of[[-25,-9],[-12,13],[14,-18],[27,6],[9,25]]){
      ellipse(c,x,y,2.4,1.8,'#ae8c5b',.3);ellipse(c,x-1,y-2,1.8,1,'#efdab0');
    }
  }
  function slices(c){
    for(const[x,y,a]of[[19,14,.32],[-3,3,-.1],[-22,-8,-.35]]){
      ellipse(c,x,y+3,18,29,'#d2ac70',a,'#b28a54');
      ellipse(c,x,y,17,27,'#ffedb3',a);
      ellipse(c,x-3,y-5,10,17,'#fff5d2',a);
    }
  }
  function stick(c,x,y,h,a){
    c.save();c.translate(x,y);c.rotate(a);
    c.beginPath();c.roundRect(-5,-h,11,h,2);c.fillStyle='#f6cd69';c.fill();
    c.strokeStyle='#b78a43';c.lineWidth=1.8;c.stroke();
    c.fillStyle='#ffe7a0';c.fillRect(-3,-h+3,3,h-5);
    c.fillStyle='#dba246';c.fillRect(4,-h+2,2,h-3);c.restore();
  }
  function fries(c){
    // 金黄薯条与红纸盒呼应参考图，使用小猫爪作为餐厅自己的装饰。
    for(const[x,y,h,a]of[[-27,0,38,-.25],[-15,-2,50,-.1],[-1,-1,42,.04],[12,-2,53,.13],[25,0,41,.28],[-22,4,31,.07],[-7,5,44,-.15],[8,5,33,.12],[22,5,36,.3]])stick(c,x,y,h,a);
    c.beginPath();c.moveTo(-35,-9);c.quadraticCurveTo(0,6,35,-9);c.lineTo(29,43);
    c.quadraticCurveTo(0,36,-29,43);c.closePath();c.fillStyle='#db6951';c.fill();
    c.strokeStyle='#a94d3f';c.lineWidth=2.5;c.stroke();
    c.beginPath();c.moveTo(-28,-4);c.lineTo(-24,35);c.strokeStyle='#ee9980';c.lineWidth=4;c.lineCap='round';c.stroke();
    ellipse(c,2,22,9,7,'#ffe0a0');
    for(const[x,y]of[[-9,12],[0,7],[10,12]])ellipse(c,x,y,3.6,4.6,'#ffe0a0',x*.04);
  }
  const painters={potato,potatoSlices:slices,fries};
  return {kinds:Object.keys(painters),draw(c,kind,x,y,size=48){
    if(!painters[kind])return;
    c.save();c.translate(x,y);c.scale(size/100,size/100);painters[kind](c);c.restore();
  }};
})();


window.Level2StreetArt=(()=>{let ctx,state,tables=[],externalFood;const names={salmon:'生三文鱼',salmonSlices:'三文鱼刺身',rawRice:'生米',cookedRice:'熟米饭',nori:'海苔',salmonSushi:'三文鱼寿司',shrimp:'生虾',batter:'面糊',coatedShrimp:'裹粉虾',tempura:'天妇罗',crab:'生蟹',marinatedShrimp:'生腌虾',marinatedCrab:'生腌蟹',grilledFish:'烤鱼',squid:'生鱿鱼',grilledSquid:'烤鱿鱼',grilledShrimp:'炙烤虾',searedShrimpSushi:'炙烤虾寿司'};
function rounded(c,x,y,w,h,r,fill,stroke=null,width=2){c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();if(stroke){c.lineWidth=width;c.strokeStyle=stroke;c.stroke();}}
function label(c,s,x,y,size=18,color='#6a5940',weight=600){c.fillStyle=color;c.font=weight+' '+size+'px "Microsoft YaHei",sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(s,x,y);}
function ellipse(c,x,y,rx,ry,color){c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();}
function polygon(c,points,color){c.fillStyle=color;c.beginPath();c.moveTo(...points[0]);for(const point of points.slice(1))c.lineTo(...point);c.closePath();c.fill();}
const STATION_SURFACES={crate:'#ddbb81',counter:'#faf1d8',board:'#e5eed4',cooker:'#dcecf0',oven:'#f8dfd6',fryer:'#fff0b7',marinade:'#ece0f0',trash:'#e1e6de'};
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
    if(table.type==='oven'){const baking=!!(food&&OVEN_RECIPES[food.kind]);rounded(c,p.x-41,p.y-25,82,50,7,'#d98b79','#a85f53',1.5);rounded(c,p.x-35,p.y-18,51,34,4,baking?'#83503f':'#855e56');rounded(c,p.x-31,p.y-14,43,25,3,baking?'#ce9565':'#b17d6b');c.strokeStyle=baking?'#e1bb7b':'#e4b9a1';c.lineWidth=1;for(const y of[-7,0,7]){c.beginPath();c.moveTo(p.x-30,p.y+y);c.lineTo(p.x+11,p.y+y);c.stroke();}if(food)drawFood(food,p.x-10,p.y-3,.4,false);rounded(c,p.x-33,p.y-21,47,4,2,'#9c6356');for(const y of[-11,5]){ellipse(c,p.x+28,p.y+y,5,5,'#f8dfc4');ellipse(c,p.x+28,p.y+y,2,2,'#a87560');}ellipse(c,p.x+28,p.y+17,2.5,2.5,baking?'#d99b5b':food?'#e2ba83':'#ad7c6a');c.strokeStyle='#b67562';c.lineWidth=1;for(let x=-27;x<13;x+=7){c.beginPath();c.moveTo(p.x+x,p.y+21);c.lineTo(p.x+x+3,p.y+21);c.stroke();}}
    if(table.type==='marinade'){ellipse(c,p.x-4,p.y+5,32,18,'#b39bbd');ellipse(c,p.x-4,p.y,33,19,'#e9ddef');ellipse(c,p.x-4,p.y-2,28,14,'#b48c61');ellipse(c,p.x-4,p.y-3,24,11,'#cba774');rounded(c,p.x+29,p.y-16,10,24,3,'#b5a2c0','#8a7299',1);rounded(c,p.x+31,p.y-21,6,7,2,'#8c7199');rounded(c,p.x+28,p.y-6,12,7,2,'#eee1c1');if(food)drawFood(food,p.x-4,p.y-3,.5,false);else{ellipse(c,p.x-18,p.y-7,2,1,'#ead5a4');ellipse(c,p.x+8,p.y+2,2,1,'#9aa16f');}if(food&&MARINADE_RECIPES[food.kind]){c.strokeStyle='#f1dbaf66';c.lineWidth=1;const wobble=Math.sin(state.elapsed*1.4)*2;c.beginPath();c.ellipse(p.x-4,p.y-2,27+wobble,13,0,0,Math.PI*2);c.stroke();}}
    if(table.type==='trash'){rounded(c,p.x-22,p.y-19,44,42,7,'#97a298','#6c7b70',1.5);rounded(c,p.x-26,p.y-23,52,8,3,'#b6bfb6','#6c7b70',1);rounded(c,p.x-9,p.y-29,18,7,3,'#6c7b70');c.strokeStyle='#d3dbcc';c.lineWidth=2;for(const x of[-10,0,10]){c.beginPath();c.moveTo(p.x+x,p.y-10);c.lineTo(p.x+x,p.y+14);c.stroke();}}
  }
}
const foodSprites=new Map(),renderCache={faces:new Map()};
function rasterCanvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
function circle(c,x,y,r,color){ellipse(c,x,y,r,r,color);}
function drawFood(food,x=food.x,y=food.y,scale=1,plated=true,c=ctx){
  if(!names[food.kind]&&externalFood){externalFood(c,x,y,food.kind,scale);return;}const key=food.kind+':'+plated;let sprite=foodSprites.get(key);
  if(!sprite){sprite=rasterCanvas(192,192);const sc=sprite.getContext('2d');sc.scale(2,2);paintFood(food,48,48,1,plated,sc);foodSprites.set(key,sprite);}
  c.drawImage(sprite,x-48*scale,y-48*scale,96*scale,96*scale);
}
// 适配第三关台面坐标，食物、箱体、器具均使用第二关原始绘制函数。
const OVEN_RECIPES={salmon:true,shrimp:true,squid:true},MARINADE_RECIPES={};
function tablePoint(table){return{x:table.x+table.w/2,y:table.y+table.h/2};}
function tableFoods(table){return table.layers.map(kind=>({kind}));}
function nearestTable(){return tables[0];}
function station(c,st,time,foodPainter){
 externalFood=foodPainter;
 ctx=c;state={elapsed:time,keys:{f:st.process.active},hasFood:null,faintLeft:0};
 const type=st.type==='surface'?'counter':st.type==='cutting'?'board':st.type;
 const table={id:st.id,type,supply:st.item,x:-50,y:-30,w:100,h:60,layers:st.layers};tables=[table];
 c.save();c.translate(st.x,st.y);c.scale(st.scale,st.scale);
 rounded(c,-53,-23,106,60,10,'#815e3f25');rounded(c,-50,-30,100,60,10,'#b68b5e','#9a754c');
 rounded(c,-45,-26,90,47,7,STATION_SURFACES[type]||'#faf1d8','#c5a679',1.5);
 if(type==='crate'){
  rounded(c,-47,13,94,11,3,'#eace9b');c.strokeStyle='#ad8553';c.lineWidth=2;c.beginPath();
  c.moveTo(-38,-23);c.lineTo(-38,9);c.moveTo(38,-23);c.lineTo(38,9);c.stroke();
 }
 drawStations();
 if(type==='board'||type==='counter')st.layers.forEach((kind,i)=>drawFood({kind},(i-(st.layers.length-1)/2)*29,-3,st.layers.length===1?.8:.52,!['salmon','shrimp','squid'].includes(kind),c));
 c.restore();
}
return{names,station,food:(c,kind,x,y,scale=1,plated=true)=>drawFood({kind},x,y,scale,plated,c)};

})();

/* 第三关独立地图原型。坐标统一使用 1600×930，后续可直接复用布局数据。 */
(()=>{'use strict';
const W=1600,H=930,canvas=document.getElementById('map'),ctx=canvas.getContext('2d'),$=id=>document.getElementById(id),keys=new Set();
const COLORS=['#bc7764','#c8a154','#78917b'],NAMES=['街头小吃 · 4 道菜','日料 / 饮品双排台','甜品厨房 · 6 道新品'];
const ROWS=[150,480,810],ROAD={x:1022,w:194},SPAWN={x:716,y:300};
const CART_WIDTH=244,CART_SCALE=.92,CART_HOME_X=752,CART_HOME_Y=[135,390,645],STALL_SLOT_X=[438,517,596,653];
const STALL_POSITIONS=ROWS.flatMap((y,row)=>(row===1?[517,596,653]:STALL_SLOT_X).map(x=>({x,y:y+15})));
function armRects(row){const y=ROWS[row]-12;return row===1?[{x:64,y:438,w:326,h:114},{x:490,y:438,w:190,h:114}]:[{x:64,y,w:616,h:54}];}
const chefImage=new Image();chefImage.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NzYiIGhlaWdodD0iNTc2IiB2aWV3Qm94PSIwIDAgMTQ0IDE0NCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImZ1ciIgeDE9IjAiIHkxPSIwIiB4Mj0iLjciIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmMGQzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWRjNThmIi8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY3JlYW0iIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmZWY3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjNlOGQ1Ii8+PC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iaGF0IiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2VhZThkZiIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImV5ZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzViNTI1MCIvPjxzdG9wIG9mZnNldD0iLjY1IiBzdG9wLWNvbG9yPSIjMzQzNDM4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjQyNzMxIi8+PC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPCEtLSDouqvkvZPlkoznn63nn63nmoTliY3niKrvvIzkv53nlZnlj4LogIPnhafniYfkuK3nmoTnmb3og7jkuI7lpbbmsrnmqZjoibLog4zmr5vjgIIgLS0+CiAgPHBhdGggZD0iTTQ0IDEwNVEyNSAxMDUgMjYgMTIyUTI4IDEyOSA0NCAxMjMiIGZpbGw9InVybCgjZnVyKSIgc3Ryb2tlPSIjYjU5MTZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDxwYXRoIGQ9Ik00NyA5NFEzMiAxMDYgMzggMTI1UTQ1IDEzNSA3MiAxMzRRMTAwIDEzNSAxMDcgMTI1UTExMyAxMDUgOTcgOTRaIiBmaWxsPSJ1cmwoI2Z1cikiIHN0cm9rZT0iI2I1OTE2ZiIgc3Ryb2tlLXdpZHRoPSIxLjciLz4KICA8cGF0aCBkPSJNNTEgOTdRNzIgMTAzIDk0IDk3TDk2IDExMUw5MCAxMDlMODggMTE3TDgyIDExNEw3NyAxMjJMNzAgMTE5TDY0IDEyNEw1OSAxMTZMNTIgMTE5TDQ5IDEwOVoiIGZpbGw9InVybCgjY3JlYW0pIi8+CiAgPGcgaWQ9ImNoZWYtcmVzdGluZy1wYXdzIj4KICA8ZWxsaXBzZSBjeD0iNTIiIGN5PSIxMjUiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNmZmY2ZTciIHN0cm9rZT0iI2M0YWM5NiIgc3Ryb2tlLXdpZHRoPSIxLjMiLz4KICA8ZWxsaXBzZSBjeD0iOTIiIGN5PSIxMjUiIHJ4PSIxMyIgcnk9IjkiIGZpbGw9IiNmZmY2ZTciIHN0cm9rZT0iI2M0YWM5NiIgc3Ryb2tlLXdpZHRoPSIxLjMiLz4KICA8cGF0aCBkPSJNNDggMTI2VjEzME01MyAxMjZWMTMxTTg4IDEyNlYxMzFNOTMgMTI2VjEzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGFiNmFhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPC9nPgogIDwhLS0g5bCP6ICM56uL6LW355qE6ICz5py177yM5LiN6IO96KKr55m95Y6o5biI5bi95a6M5YWo6YGu5L2P44CCIC0tPgogIDxwYXRoIGQ9Ik0zNyA3M1EyNyA2NSAyOSA0NFE0MyA0NCA1MiA1OUw5NCA1OVExMDQgNDUgMTE2IDQ0UTExNyA2NSAxMDcgNzRaIiBmaWxsPSJ1cmwoI2Z1cikiIHN0cm9rZT0iI2I1OTE2ZiIgc3Ryb2tlLXdpZHRoPSIxLjciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNMzUgNTJRNDQgNTQgNDYgNjJMMzYgNjZaIE0xMDkgNTJRMTAwIDU0IDk5IDYyTDEwOSA2NloiIGZpbGw9IiNlNWI1YTUiLz4KICA8cGF0aCBkPSJNMzkgNThRNTMgNDkgNzIgNTFROTQgNDkgMTA3IDYxUTExNyA3MyAxMTMgODhMMTE3IDkyTDExMSA5NEwxMTMgOTlMMTA2IDEwMFE5NiAxMTMgNzIgMTE0UTQ3IDExNCAzNyAxMDFMMzAgMTAwTDMzIDk0TDI3IDkyTDMxIDg4UTI3IDcwIDM5IDU4WiIgZmlsbD0idXJsKCNmdXIpIiBzdHJva2U9IiNiNTkxNmYiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPCEtLSDmn5TlkozmqZjoibLpop3nurnjgIHnmb3oibLpvLvmooHkuI7ok6zmnb7nmoTlj6PpvLvjgIIgLS0+CiAgPHBhdGggZD0iTTUzIDU2UTU0IDY1IDYyIDcwUTU2IDU5IDYxIDU0TTY4IDUzUTY3IDY2IDcyIDczUTc3IDY1IDc2IDUzTTg0IDU0UTg5IDYwIDgzIDcwUTk0IDY0IDkyIDU3IiBmaWxsPSIjZDZhNTZkIiBvcGFjaXR5PSIuNyIvPgogIDxwYXRoIGQ9Ik0zNCA3OUw0NCA4MkwzMyA4NU0xMTAgNzlMMTAwIDgyTDExMiA4NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDZhNTZkIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iLjc1Ii8+CiAgPHBhdGggZD0iTTcyIDcxUTY2IDc4IDY1IDg2UTQ5IDg1IDQ3IDk2UTUyIDEwOCA3MiAxMDlROTIgMTA5IDk4IDk2UTk2IDg1IDc5IDg2UTc4IDc4IDcyIDcxWiIgZmlsbD0idXJsKCNjcmVhbSkiLz4KICA8ZWxsaXBzZSBjeD0iNTMiIGN5PSI4MCIgcng9IjkuNCIgcnk9IjEwLjEiIGZpbGw9IiNmZmY1ZTQiIHN0cm9rZT0iI2I2OWI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8ZWxsaXBzZSBjeD0iOTEiIGN5PSI4MCIgcng9IjkuNCIgcnk9IjEwLjEiIGZpbGw9IiNmZmY1ZTQiIHN0cm9rZT0iI2I2OWI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8ZWxsaXBzZSBjeD0iNTQiIGN5PSI4MSIgcng9IjcuNCIgcnk9IjguNiIgZmlsbD0idXJsKCNleWUpIi8+CiAgPGVsbGlwc2UgY3g9IjkwIiBjeT0iODEiIHJ4PSI3LjQiIHJ5PSI4LjYiIGZpbGw9InVybCgjZXllKSIvPgogIDxlbGxpcHNlIGN4PSI1MS41IiBjeT0iNzcuNSIgcng9IjIuNSIgcnk9IjIuOSIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIGN4PSI4Ny41IiBjeT0iNzcuNSIgcng9IjIuNSIgcnk9IjIuOSIgZmlsbD0iI2ZmZiIvPgogIDxjaXJjbGUgY3g9IjU3IiBjeT0iODUiIHI9IjEuMSIgZmlsbD0iI2I3YzBjNyIvPjxjaXJjbGUgY3g9IjkzIiBjeT0iODUiIHI9IjEuMSIgZmlsbD0iI2I3YzBjNyIvPgogIDxlbGxpcHNlIGN4PSI0MiIgY3k9Ijk0IiByeD0iNiIgcnk9IjMiIGZpbGw9IiNlZmM0YWUiIG9wYWNpdHk9Ii41NSIvPjxlbGxpcHNlIGN4PSIxMDIiIGN5PSI5NCIgcng9IjYiIHJ5PSIzIiBmaWxsPSIjZWZjNGFlIiBvcGFjaXR5PSIuNTUiLz4KICA8cGF0aCBkPSJNNjcgOTJRNzIgODkgNzcgOTJRNzcgOTQgNzIgOTdRNjcgOTQgNjcgOTJaIiBmaWxsPSIjZGM5YjkxIiBzdHJva2U9IiNiZDgwN2EiIHN0cm9rZS13aWR0aD0iLjgiLz4KICA8cGF0aCBkPSJNNzIgOTdWMTAwTTcyIDEwMFE2OCAxMDQgNjUgMTAwTTcyIDEwMFE3NiAxMDQgNzkgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNhZDgzNzYiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8cGF0aCBkPSJNNDQgOTVMMjkgOTNNNDQgOTlMMjkgMTAxTTEwMCA5NUwxMTUgOTNNMTAwIDk5TDExNSAxMDEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MzYWQ5NCIgc3Ryb2tlLXdpZHRoPSIxLjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwhLS0g55m96Imy5aSn5Y6o5biI5bi977ya6JOs5p2+6KS255qx5bi95Yag5LiO5a695bi95bim44CCIC0tPgogIDxwYXRoIGQ9Ik0zOCAzN1EyNCAzMyAyOCAyMVEzMCAxMyA0MCAxNFE0MyA0IDU0IDhRNjEgMCA3MiA1UTg0IDEgOTEgOVExMDMgNSAxMDggMTZRMTIwIDE4IDExNiAyOVExMTQgMzcgMTA2IDM4TDEwMiA0N0g0MloiIGZpbGw9InVybCgjaGF0KSIgc3Ryb2tlPSIjYjVhYTliIiBzdHJva2Utd2lkdGg9IjEuNyIvPgogIDxwYXRoIGQ9Ik00MCAxOVEzNyAyNyA0NCAzNU01MyAxM1E0OSAyNCA1NiAzNU02NiAxMFE2MiAyMiA2NiAzNU04MCAxMFE4NSAyMiA3OSAzNU05NCAxNVExMDAgMjUgOTEgMzVNMTA3IDIxUTExMCAyOCAxMDEgMzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q4ZDVjZCIgc3Ryb2tlLXdpZHRoPSIyLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik00MCAzNlE3MiAzMCAxMDUgMzZMMTAzIDUwUTcyIDQ0IDQyIDUwWiIgZmlsbD0idXJsKCNoYXQpIiBzdHJva2U9IiNiNWFhOWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHBhdGggZD0iTTQ2IDM5UTcyIDM1IDEwMCAzOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
const base=document.createElement('canvas');base.width=W;base.height=H;const b=base.getContext('2d');
let state,previous=0,statusTimer=-99,raf=0;
const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function rr(c,x,y,w,h,r,fill,stroke,line=2){c.beginPath();c.roundRect(x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=line;c.stroke();}}
function el(c,x,y,rx,ry,fill,stroke,line=2){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=line;c.stroke();}}
function path(c,pts,fill,stroke,line=2,close=true){c.beginPath();pts.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));if(close)c.closePath();if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=line;c.lineJoin='round';c.stroke();}}
function text(c,t,x,y,size=18,color='#5e5645',weight=600,align='center'){c.font=weight+' '+size+'px "Microsoft YaHei",sans-serif';c.fillStyle=color;c.textAlign=align;c.textBaseline='middle';c.fillText(t,x,y);}
function line(c,x,y,x2,y2,color='#ad9b7a',width=2){path(c,[[x,y],[x2,y2]],null,color,width,false);}
function shadow(c,x,y,w,h,r=10){rr(c,x+4,y+7,w,h,r,'rgba(88,70,42,.13)');}
function sign(c,title,sub,x,w,color){shadow(c,x,26,w,61,13);rr(c,x,26,w,61,13,'#fffcf0','#c6b999');rr(c,x+12,41,6,30,3,color);text(c,title,x+30,48,22,'#554e40',800,'left');text(c,sub,x+30,71,12,'#92816b',500,'left');}
function tree(c,x,y,s=1){c.save();c.translate(x,y);c.scale(s,s);el(c,2,26,25,9,'rgba(102,92,56,.12)');rr(c,-5,-1,10,31,3,'#b49b72');el(c,0,-6,31,27,'#a9ba8b','#7c956d');el(c,-14,-17,22,21,'#b9c89b');el(c,16,-18,24,23,'#9eaf7f');el(c,1,-30,23,21,'#bccb9b');c.restore();}
function bowl(c,x,y,s=1){c.save();c.translate(x,y);c.scale(s,s);el(c,0,13,28,8,'#d4c2a1');el(c,0,1,31,23,'#fff5dd','#b9a17c');el(c,0,-4,28,16,'#b77748');el(c,0,-5,24,12,'#ebbb72');c.strokeStyle='#f8e1a5';c.lineWidth=3;for(let i=0;i<5;i++){c.beginPath();c.moveTo(-17+i*8,-9);c.bezierCurveTo(-28+i*8,4,6+i*4,-7,-12+i*8,3);c.stroke();}el(c,9,-10,8,5,'#fff8dc');el(c,10,-10,3,3,'#e8aa4f');for(let i=0;i<3;i++)rr(c,-15+i*8,-12,6,3,1,'#80a06a');c.restore();}
function mapFood(c,kind,x,y,s=1){c.save();c.translate(x,y);c.scale(s,s);el(c,1,18,30,9,'rgba(93,69,37,.11)');el(c,0,3,32,24,'#fffdf1','#d8c7a8');el(c,0,2,26,18,'#f5e7ce');if(kind==='skewer'){for(let i=0;i<3;i++){c.save();c.translate(-14+i*14,0);c.rotate(-.35);rr(c,-2,-17,4,43,2,'#b88c59');for(let j=0;j<3;j++)rr(c,-6,-17+j*10,12,9,4,j%2?'#c77c43':'#e5a95c','#aa713e',1);c.restore();}}else if(kind==='bun'){for(let i=0;i<3;i++){let px=i===2?0:(i===0?-13:13),py=i===2?9:-5;el(c,px,py,13,12,'#f1d6a5','#c4a47a',1.3);path(c,[[px-7,py-2],[px-2,py-7],[px,py-8],[px+6,py-2]],null,'#c8a577',1.5,false);}}else if(kind==='bowl'){bowl(c,0,0,.85);}else{for(let i=0;i<5;i++){let a=i*2.4;let xx=Math.sin(a)*16,yy=Math.cos(a)*9;el(c,xx,yy,8,8,'#d6a569','#ae8255',1);rr(c,xx-5,yy-3,9,2,1,'#b16a45');el(c,xx+2,yy-3,2,1,'#789567');}}c.restore();}
// 精致暖木台面：细木纹、奶油色内嵌面与黄铜固定点，空台面保留给后续玩法。
function station(c){
 const pieces=[{x:64,y:138,w:72,h:714},...ROWS.flatMap((_,row)=>armRects(row))];
 for(const r of pieces){
  rr(c,r.x+2,r.y+5,r.w,r.h,9,'#795d3a20');
  const edge=c.createLinearGradient(r.x,r.y,r.x,r.y+r.h);edge.addColorStop(0,'#c9aa82');edge.addColorStop(1,'#a98460');
  rr(c,r.x,r.y,r.w,r.h,9,edge,'#997b58',1.5);
  const top=c.createLinearGradient(r.x,r.y+4,r.x,r.y+r.h-5);top.addColorStop(0,'#fff5df');top.addColorStop(.5,'#f4e3c2');top.addColorStop(1,'#ebd4ad');
  rr(c,r.x+5,r.y+4,r.w-10,r.h-11,6,top,'#d8bd94',1);
  c.save();c.beginPath();c.roundRect(r.x+8,r.y+7,r.w-16,r.h-17,4);c.clip();
  for(let i=0;i<Math.ceil(r.h/12);i++){const yy=r.y+12+i*12;c.beginPath();c.moveTo(r.x+9,yy);c.bezierCurveTo(r.x+r.w*.35,yy-2,r.x+r.w*.64,yy+2,r.x+r.w-9,yy);c.strokeStyle=i%2?'#d2b38b16':'#ffffff35';c.lineWidth=.8;c.stroke();}
  c.restore();line(c,r.x+10,r.y+7,r.x+r.w-10,r.y+7,'#fffbedba',1.3);
  rr(c,r.x+9,r.y+r.h-6,r.w-18,2,1,'#d9ba8f');
  for(const xx of[r.x+9,r.x+r.w-9])el(c,xx,r.y+r.h-5,1.3,1.3,'#9d8056');
 }
 // 厨房上下通道只用细箭头提示，不在台面上堆放说明牌。
 for(const y of[423,565]){const dir=y<490?-1:1;path(c,[[435,y-dir*3],[440,y+dir*3],[445,y-dir*3]],null,'#b7aa8c',1.6,false);}
 for(const y of[325,655]){c.save();c.globalAlpha=.2;el(c,408,y+5,15,11,'#b5a07c');for(const [x,yy]of[[-15,-9],[-5,-16],[7,-15],[17,-6]])el(c,408+x,y+yy,4,5,'#b5a07c');c.restore();}
}

function bay(c,i){const y=CART_HOME_Y[i]-12;rr(c,1260,y,297,249,15,'#cfd3b8','#aab294');c.save();c.beginPath();c.roundRect(1265,y+5,287,239,11);c.clip();for(let k=-6;k<14;k++)path(c,[[1260+k*45,y],[1280+k*45,y],[1529+k*45,y+249],[1509+k*45,y+249]],'#dce0c8');c.restore();c.setLineDash([10,8]);rr(c,1275,y+10,267,229,10,null,'#f7f7e5',3);c.setLineDash([]);text(c,'0'+(i+1),1309,y+95,41,'rgba(103,122,95,.25)',800);text(c,'暂扣位 '+(i+1),1408,y+218,14,'#7e8b6f',700);}
function staticScene(){const c=b;c.fillStyle='#e7dfc8';c.fillRect(0,0,W,H);
 // 左侧暖石砖。道路与暂扣区保持清楚的三栏分区。
 rr(c,22,108,977,780,22,'#efe8d4','#d6c8ac');c.save();c.beginPath();c.roundRect(22,108,977,780,22);c.clip();for(let y=110,row=0;y<900;y+=46,row++){for(let x=20-(row%2)*49;x<1020;x+=98){rr(c,x+2,y+2,94,42,3,(row+Math.floor(x/98))%4===0?'#f3ecd9':'#eee5ce');}}c.restore();
 rr(c,690,121,51,735,18,'rgba(255,250,234,.48)');c.setLineDash([4,11]);line(c,716,143,716,842,'#d4c6a8',1.5);c.setLineDash([]);
 text(c,'工作通道',716,871,12,'#a1967a',600);
 c.fillStyle='#6d7677';c.fillRect(ROAD.x,0,ROAD.w,H);c.fillStyle='#747d7d';c.fillRect(ROAD.x+10,0,ROAD.w-20,H);
 for(let i=0;i<23;i++){rr(c,1005,i*43,17,42,2,i%2?'#d6c4a2':'#fff2d3');rr(c,1216,i*43,17,42,2,i%2?'#d6c4a2':'#fff2d3');}
 c.setLineDash([30,27]);line(c,1119,105,1119,920,'#f4d179',5);c.setLineDash([]);line(c,1032,0,1032,H,'#c1c6bc',2);line(c,1206,0,1206,H,'#c1c6bc',2);
 for(const y of [350,605]){for(let x=1040;x<1200;x+=34)rr(c,x,y,23,56,2,'#f5f1dc');rr(c,963,y+4,30,48,8,'#ded5b8','#c1b294');for(let i=0;i<4;i++)line(c,969,y+10+i*10,988,y+10+i*10,'#b7aa8a',2);rr(c,1245,y+4,20,48,5,'#e6dfc7');}
 rr(c,1248,108,333,780,22,'#dfe3cb','#c0c7a8');for(let i=0;i<3;i++)bay(c,i);
 sign(c,'街边小吃区','一个 E 型大摊位  +  三辆竖向推车',40,470,'#b98466');
 text(c,'双 向 车 道',1119,45,20,'#fff4d6',800);text(c,'斑马线 · 注意来车',1119,72,12,'#e3e5d6',500);
 sign(c,'推车暂扣区','巡逻猫偶尔经过，暂扣位留空',1260,304,'#788b77');
 rr(c,947,121,52,735,16,'#e4dfc8','#d2c7ac',1);c.setLineDash([4,12]);line(c,940,143,940,842,'#d1c5aa',1);c.setLineDash([]);text(c,'巡逻通道',973,871,12,'#96886a');station(c);
 tree(c,827,86,.68);rr(c,768,873,110,10,4,'#b3b88b');text(c,'推车在位封路 · 暂扣后通行',165,871,13,'#a48d68');
 for(let i=0;i<8;i++){rr(c,1580,115+i*100,9,73,3,'#a8b295');el(c,1584,114+i*100,8,5,'#c5ceb2');}
}
function cart(c,t){const x=0,y=0,i=t.row,w=CART_WIDTH,h=143;c.save();c.translate(t.x+143*CART_SCALE,t.y);c.rotate(Math.PI/2);c.scale(CART_SCALE,CART_SCALE);shadow(c,x,y+10,w,h,14);
 for(const wx of [x+28,x+w-28]){rr(c,wx-12,y+119,24,30,7,'#5b625b','#404a47');el(c,wx,y+137,6,6,'#b9c5b5');}
 rr(c,x,y,w,127,11,'#92a8a1','#647b73');rr(c,x+7,y+8,w-14,88,8,'#dfebe0','#8fa39a');for(let k=0;k<5;k++)line(c,x+30+k*40,y+12,x+30+k*40,y+91,'#c5d3c8',1);
 rr(c,x+7,y+99,w-14,25,5,COLORS[i]);rr(c,x+(w-129)/2,y+101,129,22,5,'#fff5df');c.save();c.translate(x+w/2,y+112);c.rotate(-Math.PI/2);Array.from('小吃推车'+(i+1)).forEach((glyph,n)=>text(c,glyph,0,(n-2)*18,14,'#6c624c',800));c.restore();
 // 浅色摆盘面与小炉头只是工作台示意，未绑定制作规则。
 rr(c,x+16,y+19,67,61,8,'#b2c2b4','#879b8e');el(c,x+49,y+49,23,23,'#72867c');el(c,x+49,y+49,17,17,'#586d64');el(c,x+49,y+49,9,9,'#b9c7b4');
 rr(c,x-12,y+29,13,58,5,'#94a39a','#6f8176');rr(c,x+w-1,y+27,16,62,5,'#c5d3c7','#8ea396');
 if(t.targetX>1000){rr(c,x+165,y-13,65,25,6,'#fff1ca','#c8ac74');text(c,'暂扣中',x+197,y,12,'#94704d');}
 c.restore();}
function newState(){return{time:0,paused:false,hidden:!!document.hidden,impounded:false,cat:{...SPAWN,face:1,moving:false,held:null},surfaces:[],carts:CART_HOME_Y.map((y,row)=>({row,x:CART_HOME_X,y,targetX:CART_HOME_X,targetY:y,impounded:false})),cars:[{x:1069,y:185,dir:1,speed:106,color:'#cf8771'},{x:1069,y:720,dir:1,speed:106,color:'#d2b36b'},{x:1169,y:470,dir:-1,speed:120,color:'#9fb9ae'},{x:1169,y:1000,dir:-1,speed:120,color:'#91a9bc'}],patrol:{active:false,next:6,phase:0,x:1550,y:124,target:0},lastMessage:''};}
function setupSurfaces(){for(let row=0;row<3;row++)state.surfaces.push({type:'cart',row,slots:[null,null,null,null]});}
function slotPosition(s,index){if(s.type==='stall')return STALL_POSITIONS[index];const t=state.carts[s.row],u=125+(index%2)*72,v=28+Math.floor(index/2)*45;return{x:t.x+(143-v)*CART_SCALE,y:t.y+u*CART_SCALE};}
function cartBounds(t){return{x:t.x-6*CART_SCALE,y:t.y-10*CART_SCALE,w:149*CART_SCALE,h:(CART_WIDTH+25)*CART_SCALE};}
function collisionRects(){return[{x:64,y:138,w:72,h:714},...ROWS.flatMap((y,row)=>armRects(row)),...state.carts.filter(t=>!t.carried).map(cartBounds)];}
function canStand(x,y){if(x<42||x>1550||y<119||y>863)return false;const r=18;return!collisionRects().some(o=>{const nx=Math.max(o.x,Math.min(o.x+o.w,x)),ny=Math.max(o.y,Math.min(o.y+o.h,y));return(x-nx)**2+(y-ny)**2<r*r;});}
function announce(message){if(state.lastMessage===message&&state.time-statusTimer<2)return;state.lastMessage=message;statusTimer=state.time;$('status').textContent=message;}
function mapInteract(){if(state.paused||state.hidden)return;const p=state.cat;let chosen=null;for(const surface of state.surfaces){for(let i=0;i<surface.slots.length;i++){const pos=slotPosition(surface,i),dist=Math.hypot(pos.x-p.x,pos.y-p.y),valid=p.held?!surface.slots[i]:!!surface.slots[i],score=dist+((pos.x-p.x)*p.face < -8?90:0);if(valid&&dist<(surface.type==='cart'?150:119)&&(!chosen||score<chosen.score))chosen={surface,i,dist,score};}}
 if(!chosen){announce(p.held?'靠近一个空台面，按 E 放下餐盘。':'靠近摊位或推车上的餐盘，按 E 拿起。');return;}const s=chosen.surface;if(p.held){s.slots[chosen.i]=p.held;p.held=null;announce('餐盘已放到'+(s.type==='cart'?'小吃推车':'固定摊位')+' '+(s.row+1)+'。');}else{p.held=s.slots[chosen.i];s.slots[chosen.i]=null;announce('拿到示意餐盘。可以搬到另一组摊位或空推车上。');}}
function syncCartButtons(){state.carts.forEach((t,i)=>{const btn=$(['impound-0','impound','impound-2'][i]);btn.setAttribute('aria-pressed',String(t.impounded));btn.textContent=(t.impounded?'归还 ':'暂扣 ')+(i+1)+' 号推车';});}
function toggleImpound(index=1){if(state.paused)return;if(typeof index!=='number')index=1;const t=state.carts[index];if(!t)return;t.impounded=!t.impounded;t.targetX=t.impounded?1350:CART_HOME_X;t.targetY=CART_HOME_Y[index];state.impounded=state.carts.some(t=>t.impounded);syncCartButtons();announce(t.impounded?'第 '+(index+1)+' 辆推车移入暂扣区，对应通道随之打开，可穿过马路。':'第 '+(index+1)+' 辆推车归位；三辆全部在位时会重新封住街边小吃区。');}
const PATROL_SPEED=94*1.2;
const PATROL_POINTS=[{x:1550,y:300},{x:1550,y:378},{x:1260,y:378},{x:973,y:378},{x:973,y:260},{x:973,y:512},{x:973,y:760},{x:973,y:633},{x:1260,y:633},{x:1550,y:633},{x:1550,y:817},{x:1550,y:122}];
function car(c,v){c.save();c.translate(v.x,v.y);if(v.dir<0)c.rotate(Math.PI);shadow(c,-41,-72,82,144,20);for(const x of [-43,35]){rr(c,x,-46,9,30,4,'#4c5553');rr(c,x,27,9,30,4,'#4c5553');}rr(c,-40,-72,80,144,21,v.color,'#53625e',2.5);rr(c,-33,-63,66,126,16,'rgba(255,255,255,.13)');rr(c,-30,-38,60,78,14,'#5c7377','#54666a');rr(c,-25,-33,50,21,8,'#c1d4cf');rr(c,-25,20,50,14,5,'#a9c2c0');rr(c,-25,-8,50,26,6,v.color);line(c,-38,-6,-38,20,'#c4c5ac',2);line(c,38,-6,38,20,'#c4c5ac',2);for(const x of [-25,17]){rr(c,x,55,13,8,3,'#ffefb7');rr(c,x,-62,12,6,2,'#d77868');}line(c,-23,45,23,45,'rgba(255,255,255,.23)',2);c.restore();}
function officer(c,p){c.save();c.translate(p.x,p.y);const bob=reduced?0:Math.sin(state.time*8)*1.5;el(c,1,24,22,7,'rgba(83,86,60,.17)');c.translate(0,bob);path(c,[[-18,-16],[-22,-36],[-6,-25],[8,-25],[22,-36],[18,-12]],'#a8b2a2','#768376',2);el(c,0,-9,24,22,'#b8c1af','#7d8d7e');path(c,[[-18,5],[-20,25],[-10,29],[10,29],[20,24],[17,5]],'#718995','#4c6674');el(c,-10,29,10,5,'#607a85');el(c,10,29,10,5,'#607a85');el(c,-9,-11,2.7,3.5,'#3e5354');el(c,9,-11,2.7,3.5,'#3e5354');el(c,0,-2,3,2,'#c18e80');line(c,-23,-4,-14,-2,'#73897a',1);line(c,14,-2,23,-4,'#73897a',1);rr(c,-23,-35,46,16,7,'#587582','#3f5d6b');el(c,0,-19,27,6,'#466570');path(c,[[0,-34],[6,-30],[4,-24],[0,-21],[-4,-24],[-6,-30]],'#ebc76b');rr(c,-19,18,38,5,2,'#4f6973');el(c,7,12,4,5,'#e9c67b');c.restore();}
function paintChefSprites(c){const p=state.cat,bob=p.moving&&!reduced?Math.sin(state.time*13)*2:0;el(c,p.x,p.y+19,23,8,'rgba(108,80,45,.18)');c.save();c.translate(p.x,p.y+bob);if(window.paintChefSkill(c,0,0,{boost:state.level?.boost,roar:state.level?.burst,hiss:state.level?.hiss,time:state.time})){}else if(chefImage.complete&&chefImage.width)c.drawImage(chefImage,-44,-61,88,88);else{el(c,0,-12,24,25,'#e9c58e');rr(c,-21,-44,42,16,6,'#fffbed');el(c,-8,-14,3,4,'#534d43');el(c,8,-14,3,4,'#534d43');}if(p.held){food(c,p.held,0,14,.66);el(c,-16,14,6,4,'#fff2d8','#c4ac85',1);el(c,16,14,6,4,'#fff2d8','#c4ac85',1);}c.restore();
 // 朝向脚边的小箭头，避免将正面猫图整体翻转造成持物错位。
 path(c,[[p.x+p.face*30,p.y+17],[p.x+p.face*37,p.y+21],[p.x+p.face*30,p.y+25]],'#aa956e');}
function nearestHint(){let best=null;for(const s of state.surfaces)for(let i=0;i<s.slots.length;i++){let point=slotPosition(s,i),dist=Math.hypot(point.x-state.cat.x,point.y-state.cat.y),valid=state.cat.held?!s.slots[i]:!!s.slots[i],score=dist+((point.x-state.cat.x)*state.cat.face < -8?90:0);if(dist<(s.type==='cart'?150:119)&&valid&&(!best||score<best.score))best={point,dist,score};}return best;}
function draw(){ctx.clearRect(0,0,W,H);ctx.drawImage(base,0,0);ctx.save();ctx.beginPath();ctx.rect(ROAD.x,108,ROAD.w,H-108);ctx.clip();state.cars.forEach(v=>car(ctx,v));ctx.restore();state.carts.filter(t=>!t.carried).forEach(t=>cart(ctx,t));for(const s of state.surfaces.filter(s=>!state.carts[s.row].carried))for(let i=0;i<s.slots.length;i++){const pos=slotPosition(s,i);ctx.save();ctx.translate(pos.x,pos.y);if(s.type==='cart'){ctx.rotate(Math.PI/2);ctx.scale(CART_SCALE,CART_SCALE);}if(s.slots[i])drawCartSlot(ctx,s,i,0,0,.79);else{el(ctx,0,2,26,18,'rgba(255,255,245,.3)');ctx.setLineDash([3,5]);el(ctx,0,2,25,17,null,'#c4c5ac',1);}ctx.restore();}

 drawKitchenTest();
 if(state.patrol.active){const p=state.patrol,inSnack=p.x<1005,message=inSnack?'最好别被我抓到在做吃的':'巡逻中',width=inSnack?190:68;officer(ctx,p);rr(ctx,p.x+(inSnack?65:0)-width/2,p.y-73,width,26,9,'#fff8e6','#b7bd9e',1);text(ctx,message,p.x+(inSnack?65:0),p.y-60,12,'#6c8378');}drawChef(ctx);drawLevelEffects();const hint=closestKitchen()||nearestPort()?null:nearestHint();if(hint&&!state.paused){rr(ctx,state.cat.x-52,state.cat.y-86,104,25,8,'#fffae9','#c6b68f',1);text(ctx,state.cat.held?'E 放下餐盘':'E 拿起餐盘',state.cat.x,state.cat.y-73,12,'#776347');}
 if(state.paused||state.hidden){ctx.fillStyle='rgba(74,70,51,.18)';ctx.fillRect(0,0,W,H);rr(ctx,620,412,360,91,20,'#fff9e9','#c9b98f');text(ctx,state.hidden?'离开页面 · 演示已暂停':'演示已暂停',800,449,26,'#665b44',800);text(ctx,'点击“继续演示”或回到页面继续',800,480,14,'#9a8a6b');}}
function reset(){keys.clear();state=newState();setupSurfaces();initTest();initLevel3();$('pause').textContent='暂停 · P';syncCartButtons();$('patrol-state').dataset.mode='';announce('十六道菜试玩已就绪！上方推车供应小吃，中间供应日料，最下方供应甜品；空茶壶先加水，再按 F 煮茶。');draw();}
function setPause(){if(!state.level?.started)return;state.paused=!state.paused;keys.clear();$('pause').textContent=state.paused?'继续 · P':'暂停 · P';music.sync();syncLevelSounds();draw();}
$('pause').addEventListener('click',setPause);$('reset').addEventListener('click',restartLevel3);$('exit').addEventListener('click',exitLevel3);$('start-game').addEventListener('click',startLevel3);
for(const key of ['j','k','l'])$('skill-'+key).addEventListener('click',()=>useLevelSkill(key));
$('touch-e').addEventListener('click',testInteract);
$('touch-f').addEventListener('pointerdown',e=>{e.preventDefault();if(!canAct())return;e.currentTarget.setPointerCapture(e.pointerId);keys.add('f');testProcess();});
['pointerup','pointercancel','lostpointercapture'].forEach(type=>$('touch-f').addEventListener(type,()=>keys.delete('f')));
window.addEventListener('keydown',e=>{if(e.target&&['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName))return;const key=e.key.toLowerCase();if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright','shift','e','f','q','j','k','l','p','escape',' '].includes(key))e.preventDefault();
 const down=keys.has(key);keys.add(key);if(down||e.repeat)return;if(key==='p'){setPause();return;}if(key==='escape'){exitLevel3();return;}if(!canAct())return;
 music.unlock();if(key==='e')testInteract();if(key==='f')testProcess();if(key==='q')beginThrow();if(['j','k','l'].includes(key))useLevelSkill(key);
});
window.addEventListener('keyup',e=>{const key=e.key.toLowerCase();keys.delete(key);if(key==='q')finishThrow();if(key==='f'){for(const st of state.test.stations)if(st.type==='cutting')st.process.active=false;syncLevelSounds();}});
function clearGameKeys(){keys.clear();if(state.level){state.level.charging=false;state.level.charge=0;}}
window.addEventListener('blur',()=>{clearGameKeys();state.hidden=true;draw();});window.addEventListener('focus',()=>{state.hidden=!!document.hidden;previous=0;});
document.addEventListener('visibilitychange',()=>{state.hidden=!!document.hidden;clearGameKeys();previous=0;draw();});
canvas.addEventListener('pointerdown',()=>canvas.focus({preventScroll:true}));document.querySelectorAll('[data-dir]').forEach(btn=>{const key={up:'w',down:'s',left:'a',right:'d'}[btn.dataset.dir];btn.addEventListener('pointerdown',e=>{e.preventDefault();btn.setPointerCapture(e.pointerId);keys.add(key);});['pointerup','pointercancel','lostpointercapture'].forEach(type=>btn.addEventListener(type,()=>keys.delete(key)));});
// 地图数据与演示接口供后续整合使用，不依赖外部图片、库或网络。
window.catStreetDemo={width:W,height:H,rows:ROWS,road:ROAD,slotPosition,step,draw,reset,canStand,interact:testInteract,start:startLevel3,seizeCart,useSkill:useLevelSkill,beginThrow,finishThrow,startPatrol,getState:()=>state};
var ITEMS={
  tomato_raw:{name:'生番茄',art:'tomato'},tomato_cut:{name:'切好的番茄',art:'chopped'},tomato_cooked:{name:'熟番茄',art:'cooked'},
  bread:{name:'面包',art:'bread'},meat_raw:{name:'生肉饼',art:'rawPatty'},meat_cooked:{name:'熟肉饼',art:'cookedPatty'},
  burger:{name:'汉堡',art:'burger'},potato_raw:{name:'生土豆',art:'potato'},potato_cut:{name:'切好的土豆',art:'potatoSlices'},fries:{name:'薯条',art:'fries'}
};
// 熟肉饼只作配方材料，第一关的点单与可出餐列表严格限制为四道菜。
var SERVABLE=['tomato_cooked','bread','burger','fries'],ORDERS=SERVABLE.slice();
var BREEDS=[{name:'暹罗',body:'#eadbc1',ear:'#ab8567',face:'#ae8d74'},{name:'蓝猫',body:'#aabac2',ear:'#879da8'},
  {name:'橘猫',body:'#e5b279',ear:'#c6935c'},{name:'三花',body:'#fff1da',ear:'#d6a77b',spots:['#d6a77b','#71675c']},
  {name:'黑猫',body:'#6e6a63',ear:'#5c574f'},{name:'白猫',body:'#fff8eb',ear:'#e5beaa'}];

var renderCache={food:new Map(),faces:new Map()};
function rasterCanvas(w,h){const c=document.createElement("canvas");c.width=w;c.height=h;return c;}
function circle(c,x,y,r,color){c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();}
function box(c,x,y,w,h,r,fill,stroke){c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=1.7;c.stroke();}}
function label(c,text,x,y,size=15,color='#70543d'){c.fillStyle=color;c.font='600 '+size+'px "Microsoft YaHei",sans-serif';c.textAlign='center';c.fillText(text,x,y);}
function drawIngredient(c,x,y,item,size=40){if(DESSERT_NAMES[item]){drawDessertFood(c,x,y,item,size/60);return;}if(JP_NAMES[item]){window.Level2StreetArt.food(c,item,x,y,size/60,false);return;}
  const type=ITEMS[item]?.art;if(!type)return;
  const art=window.TomatoArt.kinds.includes(type)?window.TomatoArt:window.BurgerArt.kinds.includes(type)?window.BurgerArt:window.FriesArt;
  art.draw(c,type,x,y,size);
}
function paintFood(c,x,y,item,scale=1){
  c.save();c.translate(x,y);c.scale(scale,scale);
  if(item==='fries'){
    c.fillStyle='#b3936630';c.beginPath();c.ellipse(0,25,22,7,0,0,Math.PI*2);c.fill();drawIngredient(c,0,-2,item,62);
  }else if(SERVABLE.includes(item)){
    c.fillStyle='#fff8e8';c.beginPath();c.ellipse(0,item==='burger'?13:5,29,20,0,0,Math.PI*2);c.fill();c.strokeStyle='#b5a181';c.lineWidth=2;c.stroke();
    drawIngredient(c,0,item==='burger'?-3:-1,item,item==='burger'?56:48);
  }else drawIngredient(c,0,0,item,40);
  c.restore();
}
function drawFood(c,x,y,item,scale=1){if(DESSERT_NAMES[item]){drawDessertFood(c,x,y,item,scale);return;}if(JP_NAMES[item]){window.Level2StreetArt.food(c,item,x,y,scale,JP_DISHES.includes(item));return;}
  let sprite=renderCache.food.get(item);
  if(!sprite){sprite=rasterCanvas(192,192);const sc=sprite.getContext('2d');sc.scale(2,2);paintFood(sc,48,48,item);renderCache.food.set(item,sprite);}
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
function processingBar(st,process){
  if(!process||(!process.active&&!(st.type==='cutting'&&process.progress>0)))return;
  const ratio=Math.min(1,process.progress/process.duration),y=st.y+51;
  box(ctx,st.x-31,y,62,6,3,'#e1d3b8');box(ctx,st.x-31,y,62*ratio,6,3,'#93a874');
  label(ctx,st.type==='cutting'?(process.active?'按住 F 切菜':'已暂停 · 按住 F'):'加工中',st.x,y+19,12,'#8b9769');
}
function drawStation(st,withProgress=true){
  ctx.save();ctx.translate(st.x,st.y);ctx.scale(st.scale,st.scale);
  if(st.type==='crate'){
    const meat=st.item==='meat_raw';
    box(ctx,-53,-30,106,53,8,meat?'#aab9af':'#c99f6b',meat?'#84988b':'#a78056');
    box(ctx,-48,-26,96,38,5,meat?'#e9e9d6':'#b58d5a');
    drawIngredient(ctx,-23,-7,st.item,39);drawIngredient(ctx,23,-7,st.item,39);
    if(st.item==='tomato_raw'||st.item==='potato_raw')drawIngredient(ctx,0,-4,st.item,43);
    box(ctx,-53,8,106,15,4,meat?'#c2cec0':'#e6c28d',meat?'#84988b':'#a78056');
  }else if(st.type==='cutting'){
    box(ctx,-51,-25,102,45,9,'#cfaa7b','#b68e64');box(ctx,-47,-22,94,37,7,'#e6c796');
    ctx.strokeStyle='#d4af7f';ctx.lineWidth=1;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-40,-17+i*10);ctx.lineTo(40,-17+i*10);ctx.stroke();}
    const item=g.cuttingSurfaces[st.id][0];if(item)drawIngredient(ctx,-6,-5,item,50);
    ctx.save();ctx.translate(31,-6);ctx.rotate(-.15);box(ctx,-5,-19,13,25,2,'#e8e9dd','#acb6a7');box(ctx,-3,6,8,15,3,'#a27652');ctx.restore();
  }else if(st.type==='stove'){
    box(ctx,-51,-27,102,49,8,'#87908a','#6c766e');box(ctx,-46,-23,92,37,6,'#bbc0af');circle(ctx,0,-1,25,g.cooking.active?'#e1ac67':'#8e9b8d');
    box(ctx,-49,-6,17,10,4,'#767f73');box(ctx,32,-6,17,10,4,'#767f73');
    ctx.fillStyle='#718073';ctx.beginPath();ctx.ellipse(0,2,37,23,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#f0dfb9';ctx.beginPath();ctx.ellipse(0,-4,36,22,0,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#586b5c';ctx.lineWidth=3;ctx.stroke();
    const item=g.stoveSurfaces[st.id][0];if(item)drawIngredient(ctx,0,-7,item,60);
    if(g.cooking.active){ctx.strokeStyle='#baa37fa0';ctx.lineWidth=2;for(let i=-1;i<=1;i++){ctx.beginPath();ctx.moveTo(i*14,-31);ctx.bezierCurveTo(i*14-6,-38,i*14+6,-42,i*14,-49);ctx.stroke();}}
  }else if(st.type==='fryer'){
    box(ctx,-53,-32,106,65,9,'#8c9c91','#6e8175');box(ctx,-44,-25,88,45,6,'#e4cf92','#9c895a');
    ctx.strokeStyle='#c0a76c';ctx.lineWidth=1.5;for(let i=0;i<6;i++){ctx.beginPath();ctx.moveTo(-36+i*14,-21);ctx.lineTo(-36+i*14,16);ctx.stroke();}
    box(ctx,-12,22,24,17,4,'#6e8175');
    if(g.fryerSurface[0])drawIngredient(ctx,0,-5,g.fryerSurface[0],48);
    if(g.frying.active)for(let i=0;i<5;i++){ctx.beginPath();ctx.arc(-29+i*14,-12+Math.sin(g.elapsed*7+i)*5,3,0,Math.PI*2);ctx.strokeStyle='#fff0bd';ctx.lineWidth=2;ctx.stroke();}
  }else if(st.type==='surface'){
    box(ctx,-51,-26,102,50,9,'#d7ba88','#b2966f');box(ctx,-47,-22,94,39,7,'#fff3d6');
    const layers=g.surfaces[st.id];
    if(layers.length===1)drawFood(ctx,0,-3,layers[0],.9);
    else for(let i=0;i<layers.length;i++)drawFood(ctx,(i-(layers.length-1)/2)*30,-3,layers[i],.54);
  }else if(st.type==='plate'){
    ctx.fillStyle='#fffdfa';ctx.beginPath();ctx.ellipse(0,-4,24,15,0,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#c1af91';ctx.lineWidth=2;ctx.stroke();
    ctx.strokeStyle='#93a875';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,10);ctx.lineTo(0,25);ctx.lineTo(-5,20);ctx.moveTo(0,25);ctx.lineTo(5,20);ctx.stroke();
  }else if(st.type==='trash'){
    box(ctx,-23,-25,46,47,6,'#a9b6a0','#85927d');box(ctx,-27,-31,54,10,4,'#c7cfb5','#85927d');box(ctx,-8,-37,16,6,3,'#a9b6a0');
    ctx.strokeStyle='#e6ebd9';ctx.lineWidth=3;for(const x of[-12,0,12]){ctx.beginPath();ctx.moveTo(x,-13);ctx.lineTo(x,12);ctx.stroke();}
  }
  ctx.restore();
  if(st.x<=136){label(ctx,st.label,st.x,st.y+26,12,'#70543d');if(st.type==='surface')label(ctx,'E 拿放 '+g.surfaces[st.id].length+'/3',st.x,st.y+40,10,'#8b996b');else if(st.type==='crate')label(ctx,'E 拿取',st.x,st.y+40,10,'#8b996b');else if(['cutting','stove','fryer'].includes(st.type))label(ctx,st.type==='cutting'?'按住 F 切菜':'放入自动加工',st.x,st.y+40,10,'#8b996b');return;}
  const bottom=st.y>580,labelY=bottom?st.y-29:st.y+43;
  label(ctx,st.label+(st.type==='crate'?' · E':st.type==='plate'?' · E':''),st.x,labelY,st.scale<.7?13:14,st.type==='plate'?'#7e9865':'#70543d');
  if(st.type==='cutting'||st.type==='stove'||st.type==='fryer'){
    const process=processFor(st);if(process.active||(st.type==='cutting'&&process.progress>0)){if(withProgress)processingBar(st,process);}else label(ctx,st.type==='cutting'?'按住 F 切菜':'放入自动加工',st.x,labelY+17,11,'#9e8262');
  }else if(st.type==='surface')label(ctx,'E 放取 · '+g.surfaces[st.id].length+'/3',st.x,st.y+43,11,'#8b996b');
}

// 六道甜品与饮品：杯中配料可以逐步添加，茶壶每次加水煮出五杯。
const DESSERT_DISHES=['milkTea','cheeseMatcha','lemonade','vanillaSundae','oreoSundae','strawberrySundae'];
const DESSERT_NAMES={cup:'空杯子',milk:'牛奶',blackTea:'红茶',matcha:'抹茶',pearls:'珍珠',water:'水',lemon:'整颗柠檬',lemonSlices:'柠檬片',cheeseFoam:'芝士奶盖',milkTea:'珍珠奶茶',cheeseMatcha:'芝士厚抹',lemonade:'柠檬水',vanillaSundae:'香草圣代',oreoSundae:'奥利奥圣代',strawberrySundae:'草莓圣代'};
const CUP_RECIPES=[{parts:['milk','blackTea','pearls'],result:'milkTea'},{parts:['milk','matcha','cheeseFoam'],result:'cheeseMatcha'},{parts:['lemonSlices','water'],result:'lemonade'}];
const CUP_CONTENTS=new Map([['cup',[]]]);
for(const recipe of CUP_RECIPES)for(let mask=1;mask<(1<<recipe.parts.length);mask++){
 const parts=recipe.parts.filter((_,i)=>mask&(1<<i)).sort(),full=parts.length===recipe.parts.length,kind=full?recipe.result:'cup_'+parts.join('_');
 CUP_CONTENTS.set(kind,parts);if(!DESSERT_NAMES[kind])DESSERT_NAMES[kind]='杯装'+parts.map(p=>DESSERT_NAMES[p]).join('＋');
}
Object.assign(ITEMS,Object.fromEntries(Object.entries(DESSERT_NAMES).map(([kind,name])=>[kind,{name}])));
const DESSERT_SPECS=[
 ['cupRack','dispenser','杯子架',165,525,'cup','dessert'],['milkBottle','dispenser','牛奶瓶',228,525,'milk','dessert'],
 ['pearlBox','dispenser','珍珠箱',291,525,'pearls','dessert'],['waterTap','dispenser','接水处',354,525,'water','dessert'],
 ['teaPot','teaKettle','红茶壶',535,525,'blackTea','dessert'],['matchaPot','teaKettle','抹茶壶',620,525,'matcha','dessert'],
 ['lemonBox','crate','柠檬箱',248,825,'lemon','dessert'],['foamMachine','foamMachine','奶盖机',327,825,null,'dessert'],
 ['iceMachine','iceMachine','冰淇淋机',406,825,null,'dessert'],['oreoTopping','topping','奥利奥碎',485,825,'oreoSundae','dessert'],
 ['berryTopping','topping','草莓酱',564,825,'strawberrySundae','dessert']
];
function cupWithIngredient(kind,ingredient){
 const parts=CUP_CONTENTS.get(kind);if(!parts||parts.includes(ingredient))return null;
 const next=[...parts,ingredient].sort(),recipe=CUP_RECIPES.find(r=>next.every(p=>r.parts.includes(p)));if(!recipe)return null;
 return next.length===recipe.parts.length?recipe.result:'cup_'+next.join('_');
}
function mixCupOnSurface(st){
 const combined=[...st.layers,state.cat.held],cups=combined.filter(kind=>CUP_CONTENTS.has(kind));if(!cups.length||combined.length===1)return false;
 if(cups.length!==1){announce('一份饮品只需要一个杯子，请先拿走多余杯子。');return true;}
 let result=cups[0];for(const ingredient of combined.filter(kind=>!CUP_CONTENTS.has(kind))){result=cupWithIngredient(result,ingredient);if(!result){announce('这些配料无法加入这杯饮品；柠檬要先切片，配料也不能重复。');return true;}}
 st.layers=[result];state.cat.held=null;announce(ITEMS[result].name+'已放好，空手 E 拿起后可继续接配料。');return true;
}
function interactDessertStation(st){
 const p=state.cat;if(st.style!=='dessert')return false;
 if(st.type==='crate')return false;
 if(st.type==='dispenser'){
  if(!p.held){p.held=st.item;announce('拿到'+ITEMS[p.held].name+'。'+(st.item==='water'?'可加进空茶壶，也能和杯子、柠檬片制作柠檬水。':''));return true;}
  const result=st.item==='cup'?null:cupWithIngredient(p.held,st.item);
  if(result){p.held=result;announce('已加入'+ITEMS[st.item].name+'，现在是'+ITEMS[result].name+'。');}
  else announce('先拿杯子接取所需配料；已有的配料不能重复添加。');return true;
 }
 if(st.type==='teaKettle'){
  const pot=st.kettle;
  if(p.held==='water'){
   if(pot.stage!=='empty'){announce('壶内还有水、正在煮或还有茶，先用完这一壶。');return true;}
   p.held=null;pot.stage='filled';pot.progress=0;announce(st.label+'已加水，靠近后轻按 F 开始煮，等待 3 秒可接 5 杯。');return true;
  }
  if(pot.stage!=='ready'){announce(pot.stage==='brewing'?'正在煮'+(st.item==='blackTea'?'红茶':'抹茶')+'，可以离开，煮好回来接取。':pot.stage==='filled'?'已加好水，靠近后按一次 F 煮茶。':'茶壶是空的，先去接水处空手 E 拿水，再到这里 E 加水。');return true;}
  const result=cupWithIngredient(p.held,st.item);if(!result){announce('拿着空杯或配料兼容的杯子按 E 接茶，同一杯不能重复接。');return true;}
  p.held=result;pot.cupsLeft--;if(pot.cupsLeft===0){pot.stage='empty';pot.progress=0;}
  announce('接到'+ITEMS[st.item].name+'，壶内剩余 '+pot.cupsLeft+'/5 杯。'+(pot.cupsLeft===0?'需要重新加水并按 F 煮茶。':''));return true;
 }
 if(st.type==='topping'){
  if(p.held!=='vanillaSundae'){announce('拿着香草圣代到这里按 E，添加'+(st.id==='oreoTopping'?'奥利奥碎':'草莓酱')+'。');return true;}
  p.held=st.item;announce(ITEMS[p.held].name+'做好了！送到最下方甜品推车摆盘格。');return true;
 }
 if(st.type==='foamMachine'||st.type==='iceMachine'){
  if(st.layers.length){if(st.process.active){announce(st.label+'正在制作，完成后空手 E 取走。');return true;}
   if(p.held){announce('先放下手中物品，再空手 E 取成品。');return true;}
   p.held=st.layers.pop();announce('拿到'+ITEMS[p.held].name+'。');return true;
  }
  const result=st.type==='iceMachine'?(p.held==='cup'?'vanillaSundae':null):cupWithIngredient(p.held,'cheeseFoam');
  if(!result){announce(st.type==='iceMachine'?'拿着空杯子按 E，放入冰淇淋机制作香草圣代。':'拿着杯子按 E 加芝士奶盖；芝士厚抹还需要牛奶和煮好的抹茶。');return true;}
  st.layers=[p.held];p.held=null;st.pendingResult=result;st.process={active:true,progress:0,duration:1.5};announce(st.label+'已开始制作，约 1.5 秒后空手 E 取走。');return true;
 }
 return false;
}
function testProcess(){
 if(!canAct()||state.level.carry>=0)return;const st=closestKitchen();if(!st||st.type!=='teaKettle')return;
 const pot=st.kettle;if(pot.stage==='filled'){pot.stage='brewing';pot.progress=0;announce(st.label+'开始煮茶，3 秒后完成，可以离开。');}
 else announce(pot.stage==='empty'?'请先拿水，按 E 给'+st.label+'加水。':pot.stage==='ready'?'茶已煮好，剩余 '+pot.cupsLeft+'/5 杯，拿杯子按 E 接茶。':'正在煮茶，请稍等。');
}
function updateDesserts(dt){
 for(const st of state.test.stations){
  if(st.type==='teaKettle'&&st.kettle.stage==='brewing'){const pot=st.kettle;pot.progress+=dt;if(pot.progress+1e-8>=3){pot.progress=3;pot.stage='ready';pot.cupsLeft=5;announce(st.label+'煮好了，可用杯子接取 5 杯。');}}
  if(['foamMachine','iceMachine'].includes(st.type)&&st.process.active){st.process.progress+=dt;if(st.process.progress+1e-8>=st.process.duration){st.layers=[st.pendingResult];st.pendingResult=null;st.process.active=false;st.process.progress=0;announce(st.label+'制作完成，空手 E 取走。');}}
 }
}
const dessertSprites=new Map();
function drawDessertFood(c,x,y,kind,scale=1){
 let sprite=dessertSprites.get(kind);if(!sprite){sprite=rasterCanvas(192,192);const sc=sprite.getContext('2d');sc.scale(2,2);sc.translate(48,48);paintDessertFood(sc,kind);dessertSprites.set(kind,sprite);}
 c.drawImage(sprite,x-48*scale,y-48*scale,96*scale,96*scale);
}
function paintDessertFood(c,kind){
 const parts=CUP_CONTENTS.get(kind),sundae=['vanillaSundae','oreoSundae','strawberrySundae'].includes(kind);
 if(parts||sundae){
  el(c,0,26,19,5,'#876d4520');path(c,[[-22,-19],[22,-19],[16,26],[-16,26]],'#fff7e6','#ae9877',2);
  if(parts?.length||sundae){const drink=sundae?'#f0dfb8':parts.includes('matcha')?'#a6b981':parts.includes('blackTea')?(parts.includes('milk')?'#cba476':'#b57b50'):parts.includes('milk')?'#f2e9cd':parts.includes('lemonSlices')?'#f4df94':'#bcd8d5';path(c,[[-18,-11],[18,-11],[13,22],[-13,22]],drink);el(c,0,-11,18,5,sundae?'#fff5d9':drink);}
  if(parts?.includes('pearls'))for(const[x,y]of[[-9,15],[0,17],[8,14],[-4,7],[6,6]])el(c,x,y,3.3,3.3,'#6e5446');
  if(parts?.includes('lemonSlices')){el(c,6,1,9,10,'#fbefae','#d8b85d',1.4);el(c,6,1,6,7,'#fff7c8');for(let i=0;i<5;i++){const a=i*Math.PI*2/5;line(c,6,1,6+Math.cos(a)*6,1+Math.sin(a)*7,'#e5cf7a',1);}}
  if(parts?.includes('cheeseFoam')){el(c,0,-13,19,7,'#fff5d5','#dcc99b',1);el(c,-3,-17,13,5,'#fff9e5');}
  if(sundae){el(c,0,-11,20,8,'#fff7df','#d5be92',1);el(c,0,-20,17,9,'#fff9e8','#deca9f',1);el(c,2,-28,12,8,'#fff6dc','#deca9f',1);path(c,[[-4,-30],[5,-42],[8,-30]],'#fff6dc','#deca9f',1);if(kind==='oreoSundae'){for(const[px,py]of[[-12,-19],[1,-28],[10,-14],[-2,-9],[9,-29]])rr(c,px-2,py-2,4,4,1,'#665248');el(c,-12,-32,7,9,'#645348','#8a7462',1.5);line(c,-16,-32,-8,-32,'#efe0bf',1.5);}if(kind==='strawberrySundae'){path(c,[[-14,-24],[-4,-21],[5,-25],[14,-20],[8,-13],[-2,-15],[-13,-11]],'#d78075');el(c,11,-30,6,8,'#d5816a');path(c,[[6,-37],[11,-34],[16,-37],[13,-31]],'#8ea46e');}}
  if(!sundae&&parts?.length){line(c,8,-34,3,10,'#c99e88',3);line(c,8,-34,17,-34,'#c99e88',3);}
  el(c,0,-20,23,5,null,'#b7a17e',1.5);line(c,-14,-6,-11,17,'#ffffff90',2);return;
 }
 if(kind==='lemon'){el(c,0,0,24,18,'#efce6c','#bf9e51',1.5);el(c,-12,-6,8,3,'#ffe8a1');path(c,[[12,-13],[15,-23],[25,-20],[20,-13]],'#9aaa75');el(c,-24,0,3,4,'#efce6c');el(c,24,0,3,4,'#efce6c');return;}
 if(kind==='lemonSlices'){for(const[px,py]of[[-8,6],[8,-3]]){el(c,px,py,18,16,'#f1d572','#c8aa58',1.5);el(c,px,py,14,12,'#fff0b1');for(let i=0;i<6;i++){const a=i*Math.PI/3;line(c,px,py,px+Math.cos(a)*12,py+Math.sin(a)*10,'#dfc36a',1.5);}}return;}
 if(kind==='milk'){rr(c,-15,-22,30,46,7,'#fff8df','#b9af91',1.5);rr(c,-10,-30,20,12,3,'#9fb9bc','#7a989f',1);rr(c,-13,-2,26,15,3,'#c2d6d0');text(c,'奶',0,6,12,'#738f8b',800);el(c,-7,-12,3,7,'#fffdf1');return;}
 if(kind==='water'){rr(c,-17,-19,32,42,6,'#e4f0e4','#93aaa0',1.5);rr(c,-13,-4,24,24,4,'#b3d3cf');path(c,[[17,-11],[28,-11],[28,12],[17,12]],null,'#93aaa0',3);path(c,[[-18,-20],[-7,-25],[15,-20]],'#e4f0e4','#93aaa0',1.2);return;}
 el(c,0,15,24,9,'#b3b9a0');rr(c,-24,-1,48,18,7,'#dbe0c7','#9caa8a',1.2);el(c,0,-2,24,9,kind==='cheeseFoam'?'#fff2cc':'#e7d6ab');
 if(kind==='pearls')for(let i=0;i<10;i++)el(c,Math.sin(i*2)*17,-2+Math.cos(i*3)*5,4,3.5,'#70574a');
}
function drawDessertStation(st){
 const c=ctx;c.save();c.translate(st.x,st.y);c.scale(.62,.62);
 rr(c,-53,-27,106,61,8,'#af9676','#947d60',1.5);rr(c,-48,-23,96,46,6,st.type==='teaKettle'?'#d9e5cd':'#f5e5cd','#c3aa87',1);
 if(st.type==='teaKettle'){
  const matcha=st.item==='matcha',pot=st.kettle,color=matcha?'#a9ba83':'#d8ad79';el(c,0,2,28,22,color,'#9d8f6e',1.5);el(c,0,-12,25,7,'#f6eccd','#a99975',1);rr(c,-8,-23,16,9,4,'#899778');path(c,[[23,-6],[40,-13],[36,-1],[25,9]],color,'#9d8f6e',2);c.beginPath();c.ellipse(-29,-2,12,16,0,-1.9,1.9);c.strokeStyle='#8e9474';c.lineWidth=5;c.stroke();
  text(c,pot.stage==='ready'?pot.cupsLeft+'/5':pot.stage==='filled'?'水':pot.stage==='brewing'?'煮':'空',0,5,16,'#6d7052',800);
  if(pot.stage==='brewing'){for(const x of[-8,8]){path(c,[[x,-24],[x-4,-32],[x+2,-38]],null,'#fff9df',2,false);}rr(c,-39,23,78,5,2,'#ccbea0');rr(c,-39,23,78*Math.min(1,pot.progress/3),5,2,'#8eab77');}
 }else if(st.type==='iceMachine'||st.type==='foamMachine'){
  const ice=st.type==='iceMachine';rr(c,-35,-31,70,61,7,ice?'#b8cdb5':'#e0b4a6',ice?'#819d80':'#b18b7b',1.5);rr(c,-28,-24,56,18,4,'#f7efdc');text(c,ice?'VANILLA':'CHEESE',0,-15,9,ice?'#789274':'#ab7f70',800);rr(c,-12,-2,24,10,3,'#9b9f88');rr(c,-4,5,8,9,2,'#f9edcd');el(c,0,26,22,4,'#9ba88e');drawDessertFood(c,0,14,st.layers[0]||'cup',.4);
  if(st.process.active){rr(c,-38,31,76,5,2,'#cbbb9c');rr(c,-38,31,76*Math.min(1,st.process.progress/st.process.duration),5,2,'#8da77b');}
 }else if(st.type==='topping'){
  const berry=st.id==='berryTopping';rr(c,-22,-21,44,46,7,berry?'#dc9d8b':'#c0a78d',berry?'#b27b6c':'#9b8169',1.5);rr(c,-25,-26,50,10,3,'#e5d7b6','#b4a181',1);rr(c,-17,-7,34,21,4,'#f9efd7');
  if(berry){el(c,0,2,9,11,'#cf8170');path(c,[[-9,-7],[0,-3],[9,-7],[5,0],[-5,0]],'#92a16a');}else{el(c,0,2,11,11,'#78614e');for(const x of[-5,4])for(const y of[-2,6])el(c,x,y,1.6,1.6,'#c1aa82');}
 }else if(st.id==='cupRack'){drawDessertFood(c,-19,0,'cup',.65);drawDessertFood(c,20,-4,'cup',.65);}
 else if(st.id==='waterTap'){rr(c,-26,4,53,20,5,'#b5d0c4','#86a69b',1.3);path(c,[[-17,-11],[-17,-28],[14,-28],[14,-12]],null,'#8ca99d',6,false);drawDessertFood(c,8,9,'water',.53);}
 else if(st.type==='crate'){rr(c,-47,-19,94,40,5,'#d2b87f','#ac905e',1);for(const x of[-25,0,25])drawDessertFood(c,x,-2,'lemon',.48);rr(c,-48,14,96,10,3,'#e9d198');}
 else drawDessertFood(c,0,-2,st.item,.82);
 c.restore();const bottom=st.y>790,nameY=st.y+(bottom?-55:40),hintY=nameY+15;
 text(c,st.label,st.x,nameY,12,'#624e36',800);
 let hint=st.type==='teaKettle'?{empty:'先 E 加水',filled:'按 F 煮 3 秒',brewing:'煮茶中 · 可离开',ready:st.kettle.cupsLeft+'/5 杯 · E 接茶'}[st.kettle.stage]:st.type==='topping'?'手持圣代 · E':st.type==='iceMachine'||st.type==='foamMachine'?(st.process.active?'制作中…':st.layers.length?'E 取成品':'手持杯子 · E'):st.id==='waterTap'?'E 取水 / 接水':st.id==='cupRack'?'E 拿杯子':'E 拿取 / 添加';
 text(c,hint,st.x,hintY,10,'#788760');
}

// 第三关轻量制作测试：四道小吃 + 六道日料 + 六道甜品饮品；原关卡文件保持独立。
let g;
const DEMO_ORDERS=['bread','tomato_cooked','burger','fries'];
const JP_DISHES=['salmonSushi','tempura','salmonSlices','grilledFish','grilledSquid','searedShrimpSushi'];
const JP_KINDS=['salmon','salmonSlices','rawRice','cookedRice','nori','salmonSushi','shrimp','batter','coatedShrimp','tempura','grilledFish','squid','grilledSquid','grilledShrimp','searedShrimpSushi'];
const JP_NAMES=Object.fromEntries(JP_KINDS.map(kind=>[kind,window.Level2StreetArt.names[kind]]));
Object.assign(ITEMS,Object.fromEntries(JP_KINDS.map(kind=>[kind,{name:JP_NAMES[kind]}])));
SERVABLE.push(...JP_DISHES,...DESSERT_DISHES);
const PREP_RECIPES=[
 {parts:['bread','tomato_cut','meat_cooked'],result:'burger'},
 {parts:['salmonSlices','cookedRice','nori'],result:'salmonSushi'},
 {parts:['shrimp','batter'],result:'coatedShrimp'},
 {parts:['grilledShrimp','cookedRice','nori'],result:'searedShrimpSushi'}
];
const PROCESS_RECIPES={
 cutting:{tomato_raw:['tomato_cut',1.5],potato_raw:['potato_cut',1.5],salmon:['salmonSlices',1.5],lemon:['lemonSlices',1.5]},
 stove:{tomato_cut:['tomato_cooked',1.5],meat_raw:['meat_cooked',1.5]},
 fryer:{potato_cut:['fries',1.5],coatedShrimp:['tempura',2]},
 cooker:{rawRice:['cookedRice',2.5]},
 oven:{salmon:['grilledFish',3],squid:['grilledSquid',3],shrimp:['grilledShrimp',3]}
};
const kitchenSpecs=[
 ['tomatoCrate','crate','番茄箱',169,165,'tomato_raw'],['potatoCrate','crate','土豆箱',248,165,'potato_raw'],
 ['meatCrate','crate','肉饼箱',327,165,'meat_raw'],['breadCrate','crate','面包箱',406,165,'bread'],
 ['cutting1','cutting','切菜台',485,165],['stove1','stove','灶台',564,165],['fryer','fryer','油锅',643,165],
 ['prep1','surface','上方备菜',100,231],['cutting3','cutting','切菜板',100,301],['trash','trash','垃圾桶',100,371],
 ['riceCrate','crate','米箱',354,465,'rawRice','level2'],
 ['fishPool','pool','生三文鱼',165,465,'salmon','level2'],['shrimpPool','pool','生虾',228,465,'shrimp','level2'],['squidPool','pool','生鱿鱼',291,465,'squid','level2'],
 ['cutting2','cutting','切菜台',643,825,null,'level2'],['oven','oven','烧烤架',535,465,null,'level2'],['fryer2','fryer','油锅',620,465,null,'level2'],
 ['cooker','cooker','高压锅',100,631,null,'level2'],['noriCrate','crate','海苔箱',100,701,'nori','level2'],
 ['batterCrate','crate','面糊箱',100,771,'batter','level2'],['prep3','surface','下方备菜',169,825,null,'level2']
];
function initTest(){
 state.cat.x=406;state.cat.y=270;
 const makeCustomer=(order,i)=>({order,breed:BREEDS[i%BREEDS.length],eating:0});
 state.test={stations:kitchenSpecs.concat(DESSERT_SPECS).map(([id,type,label,x,y,item,style])=>({id,type,label,x,y,item,style,scale:.62,layers:[],kettle:type==='teaKettle'?{stage:'empty',cupsLeft:0,progress:0}:null,process:{active:false,progress:0,duration:1.5}})),served:0,score:0,nextOrder:3,nextJapaneseOrder:3,nextDessertOrder:3,
 queue:DEMO_ORDERS.slice(0,3).map(makeCustomer),japaneseQueue:JP_DISHES.slice(0,3).map((order,i)=>makeCustomer(order,i+3)),dessertQueue:DESSERT_DISHES.slice(0,3).map((order,i)=>makeCustomer(order,i+2)),hudTimer:0};
 syncTestHud();
}
function closestKitchen(){const p=state.cat;let best=null;
 for(const st of state.test.stations){const dx=Math.abs(p.x-st.x),dy=Math.abs(p.y-st.y),d=Math.hypot(dx,dy),score=d+Math.min(dx,dy)*.85;if(d<86&&(!best||score<best.score))best={st,d,score};}return best?.st||null;
}
function processFor(st){return st.process;}
function syncKitchenArt(){const t=state.test,at=id=>t.stations.find(st=>st.id===id);g={elapsed:state.time,cuttingSurfaces:Object.fromEntries(t.stations.filter(st=>st.type==='cutting').map(st=>[st.id,st.layers])),stoveSurfaces:{stove1:at('stove1').layers},fryerSurface:at('fryer').layers,cutting:at('cutting1').process,cooking:at('stove1').process,frying:at('fryer').process,surfaces:Object.fromEntries(t.stations.filter(st=>st.type==='surface').map(st=>[st.id,st.layers]))};}
function servingGroups(){const t=state.test;return[{row:0,name:'小吃',orders:DEMO_ORDERS,queue:t.queue,next:'nextOrder'},{row:1,name:'日料',orders:JP_DISHES,queue:t.japaneseQueue,next:'nextJapaneseOrder'},{row:2,name:'甜品',orders:DESSERT_DISHES,queue:t.dessertQueue,next:'nextDessertOrder'}];}
function prototypePortPosition(row=0){const cart=state.carts[row];return{x:cart.x+28,y:cart.y+34};}
function nearestPort(){const p=state.cat;return servingGroups().map(group=>({...group,port:portPosition(group.row)})).filter(group=>Math.hypot(p.x-group.port.x,p.y-group.port.y)<=85).sort((a,b)=>Math.hypot(p.x-a.port.x,p.y-a.port.y)-Math.hypot(p.x-b.port.x,p.y-b.port.y))[0]||null;}
function prototypeTryServe(group=nearestPort()){
 const p=state.cat,test=state.test;if(!group||!p.held)return false;const front=group.queue[0];
 if(!group.orders.includes(p.held)){announce(group.name+'出餐口只收本区域成品，请先加工完成，并确认出餐口。');return true;}
 if(front.eating>0){announce('这位顾客正在吃，稍等片刻再出餐。');return true;}
 if(front.order!==p.held){announce('队首顾客要的是'+ITEMS[front.order].name+'，请按订单出餐。');return true;}
 front.eating=1.2;p.held=null;test.score+=15;test.served++;announce('出餐成功！'+ITEMS[front.order].name+' +15 分。');syncTestHud();return true;
}
function kitchenInteract(){
 if(state.paused||state.hidden)return;
 const st=closestKitchen(),p=state.cat,port=nearestPort();
 if(port&&(!st||Math.hypot(p.x-port.port.x,p.y-port.port.y)<Math.hypot(p.x-st.x,p.y-st.y))){if(p.held)tryServe(port);else announce(port.name+'出餐口：'+(port.queue.filter(q=>!q.parcel).map(q=>ITEMS[q.order].name).join('、')||'暂无待制作订单')+'；可向任意匹配顾客出餐。');return;}
 if(!st){mapInteract();syncTestHud();return;}
 if(interactDessertStation(st)){syncTestHud();return;}
 if(st.type==='crate'||st.type==='pool'){
  if(p.held){announce('手里已经有'+ITEMS[p.held]?.name+'，先放到备菜台或推车上。');return;}
  p.held=st.item;announce('拿到'+ITEMS[st.item].name+'。'+(st.type==='pool'?'水池可直接取料，无需捕鱼。':''));syncTestHud();return;
 }
 if(st.type==='trash'){if(p.held){sfx.play('bin');p.held=null;announce('已清空手中的食材。');}else announce('手上没有需要丢弃的东西。');syncTestHud();return;}
 if(!p.held){
  if(!st.layers.length){announce(st.label+'是空的，先放入材料。');return;}
  if(st.process.active&&st.type!=='cutting'){announce('正在加工，完成后再按 E 拿走。');return;}
  p.held=st.layers.pop();st.process.active=false;st.process.progress=0;announce('拿起'+ITEMS[p.held].name+'。');syncTestHud();return;
 }
 const item=p.held;
 if(st.type==='surface'){
  if(mixCupOnSurface(st)){syncTestHud();return;}
  if(st.layers.length>=3||st.layers.includes(item)){announce('这张备菜台已满或已有相同材料，请换一个位置。');return;}
  const kinds=[...st.layers,item];
  if(st.layers.length&&!PREP_RECIPES.some(recipe=>kinds.every(kind=>recipe.parts.includes(kind)))){announce('这些材料不属于同一道配方，请换台面或先拿走原有食材。');return;}
  st.layers.push(item);p.held=null;
  const recipe=PREP_RECIPES.find(recipe=>recipe.parts.length===st.layers.length&&recipe.parts.every(kind=>st.layers.includes(kind)));
  if(recipe){st.layers=[recipe.result];announce(ITEMS[recipe.result].name+'做好了！空手 E 拿走。');}
  else announce('已放入'+st.label+'；同一道菜的材料放在同一张备菜台。');
 }else{
  if(st.layers.length){announce(st.label+'已经有材料，请先拿走。');return;}
  const recipe=PROCESS_RECIPES[st.type]?.[item];
  if(!recipe){announce('这份材料不适合'+st.label+'，请查看下方菜谱。');return;}
  st.layers=[item];p.held=null;st.process={progress:0,duration:recipe[1],active:st.type!=='cutting'};
  announce(st.type==='cutting'?'材料已放上切菜台，空手站在旁边按住 F 切菜。':st.label+'已自动开始加工，可以离开准备其他材料。');
 }
 syncTestHud();
}
function updateKitchenTest(dt){
 const t=state.test,near=closestKitchen();updateDesserts(dt);
 for(const st of t.stations){const recipe=PROCESS_RECIPES[st.type]?.[st.layers[0]],pr=st.process;
  if(st.type==='cutting')pr.active=near===st&&keys.has('f')&&!state.cat.held&&!!recipe;
  if(!pr.active||!recipe)continue;pr.progress+=dt;
  if(pr.progress+1e-8>=pr.duration){st.layers=[recipe[0]];pr.active=false;pr.progress=0;announce(ITEMS[recipe[0]].name+'做好了，空手按 E 拿走。');}
 }
 t.hudTimer-=dt;if(t.hudTimer<=0){t.hudTimer=.15;syncTestHud();}
}
function prototypeSyncHud(){const t=state.test;if(!t)return;
 const orderLine=group=>group.name+'出餐口：'+group.queue.map((q,i)=>(i+1)+'. '+ITEMS[q.order].name+(q.eating>0?'（用餐中）':'')).join(' → ');
 $('test-hud').textContent='完成 '+t.served+' 单 · 得分 '+t.score+' · 手上：'+(ITEMS[state.cat.held]?.name||'空手')+'\n'+servingGroups().map(orderLine).join('\n');
}
function drawSeafoodPool(){
 const poolStations=state.test.stations.filter(st=>st.type==='pool'),y=poolStations[0].y;
 rr(ctx,139,y-22,180,43,7,'#a4b9b0','#7f9e97',2);rr(ctx,143,y-18,172,35,5,'#b7d3ce','#dcece0',1);
 poolStations.forEach((st,i)=>{
  if(i)line(ctx,196+(i-1)*63,y-17,196+(i-1)*63,y+16,'#91b3ad',1.5);
  ctx.save();ctx.beginPath();ctx.rect(st.x-22,y-16,44,30);ctx.clip();ctx.strokeStyle='#e9f2df80';ctx.lineWidth=1;
  for(let j=0;j<2;j++){const yy=y-12+j*18;ctx.beginPath();ctx.moveTo(st.x-25,yy);ctx.quadraticCurveTo(st.x,yy+2*Math.sin(state.time*1.5+i),st.x+25,yy);ctx.stroke();}ctx.restore();
  drawFood(ctx,st.x,y,st.item,st.item==='squid'?.39:.48);text(ctx,st.label+' · E',st.x,y+31,11,'#526f69',800);
 });
}
function drawJapaneseStation(st){
 window.Level2StreetArt.station(ctx,st,state.time,drawFood);
 const left=st.x<=136,compact=st.y===465,nameY=st.y+(left?26:compact?31:st.y>790?-55:40),hintY=nameY+15,pr=st.process;
 text(ctx,st.label,st.x,nameY,12,'#5d4a32',800);
 let hint=st.type==='crate'?'E 拿取':st.type==='surface'?'E 拿放 '+st.layers.length+'/3':st.type==='cutting'?'按住 F 切菜':'放入自动加工';
 if(st.layers.length&&PROCESS_RECIPES[st.type])hint=PROCESS_RECIPES[st.type][st.layers[0]]?(pr.active?'加工中…':pr.progress>0?'按住 F 继续':'按住 F 切菜'):'E 取成品';
 if(!compact)text(ctx,hint,st.x,hintY,10,pr.active?'#697f47':'#738665');
 if(pr.active||pr.progress>0){const y=st.y+(compact?21:20);rr(ctx,st.x-26,y,52,4,2,'#c7bb98');if(pr.progress>0)rr(ctx,st.x-26,y,52*Math.min(1,pr.progress/pr.duration),4,2,'#819f68');}
}
function drawUnifiedCuttingStation(st){
 const c=ctx,pr=st.process;c.save();c.translate(st.x,st.y);c.scale(st.scale,st.scale);
 box(c,-51,-26,102,49,8,'#a9b292','#7f916c');box(c,-47,-22,94,39,6,'#eccfa0','#b89b73');
 for(let i=0;i<3;i++)line(c,-38,-13+i*10,36,-13+i*10,'#d7b988',.8);
 el(c,-39,-11,2.5,3,'#c1a476');if(st.layers[0])drawIngredient(c,-7,-4,st.layers[0],49);
 c.save();c.translate(29,-6+(pr.active?Math.sin(state.time*23)*3:0));c.rotate(-.15);
 box(c,-5,-18,13,25,2,'#eceee2','#a4afa2');box(c,-3,7,8,14,3,'#9c7654');c.restore();c.restore();
 const left=st.x<=136,compact=st.y===465,nameY=st.y+(left?26:compact?31:st.y>790?-55:43);
 text(c,'切菜板',st.x,nameY,12,'#624e36',800);
 if(!compact)text(c,pr.active?'切菜中…':pr.progress>0?'按住 F 继续':'按住 F 切菜',st.x,nameY+15,10,'#788760');
 if(pr.active||pr.progress>0){const y=st.y+21;rr(c,st.x-26,y,52,4,2,'#c7bb98');rr(c,st.x-26,y,52*Math.min(1,pr.progress/pr.duration),4,2,'#819f68');}
}
function prototypeDrawKitchen(){
 syncKitchenArt();drawSeafoodPool();
 for(const st of state.test.stations){if(st.type==='pool')continue;if(st.type==='cutting')drawUnifiedCuttingStation(st);else if(st.style==='dessert')drawDessertStation(st);else if(st.style==='level2')drawJapaneseStation(st);else drawStation(st);}
 for(const group of servingGroups()){
  const port=portPosition(group.row);rr(ctx,port.x-23,port.y-15,46,30,7,'#fff9df','#91a477',2);el(ctx,port.x,port.y-1,13,7,'#fffefa','#c2af89',1.5);
  path(ctx,[[port.x-6,port.y+5],[port.x,port.y+10],[port.x+6,port.y+5]],null,'#8da471',2,false);text(ctx,group.name+'出餐口 · E',port.x,port.y-25,12,'#5d7958',800);
  const cart=state.carts[group.row];group.queue.forEach((customer,i)=>{const x=cart.x+154,y=cart.y+60+i*74;el(ctx,x,y+19,19,6,'rgba(90,85,65,.13)');ctx.save();ctx.translate(x-24,y-24);drawCatFace(ctx,customer.breed,customer.eating>0?'eating':'waiting');ctx.restore();rr(ctx,x-22,y-64,44,33,8,'#fff9e9','#cbb78e',1);drawFood(ctx,x,y-48,customer.order,.48);if(customer.eating>0)text(ctx,'好吃！',x,y+33,12,'#7e946a');});
 }
 const near=closestKitchen(),port=nearestPort();let hint=near?.type==='teaKettle'?'E 加水 / 接茶 · F 煮茶':near?(near.type==='cutting'?'E 拿放 · 按住 F 切菜':near.type==='pool'?'E 取'+ITEMS[near.item].name:'E · '+near.label):port?'E · '+port.name+'出餐口':'';
 if(hint){rr(ctx,state.cat.x-82,state.cat.y-104,164,24,8,'#fff9e7','#bca67e',1);text(ctx,hint,state.cat.x,state.cat.y-92,12,'#766348');}
}
function food(c,kind,x,y,scale=1){if(ITEMS[kind])drawFood(c,x,y,kind,scale);else mapFood(c,kind,x,y,scale);}

// 一首循环 BGM；与营业、暂停和窗口状态保持同步。
var music=(()=>{
 const audio=$('bgm'),button=$('music-toggle');
 let enabled=true,blocked=false,failed=false,pending=false,request=0;
 audio.volume=.3;audio.loop=true;
 function allowed(){return enabled&&state?.level?.started&&!state.level.over&&!state.paused&&!state.hidden&&!document.hidden;}
 function refresh(){
  button.textContent=failed?'音乐：加载失败':!enabled?'音乐：关':blocked?'点击开启音乐':'音乐：开';
  button.setAttribute('aria-pressed',String(enabled));
  button.title=failed?'请将 assets/bgm.m4a 与游戏一起解压。':blocked?'点击此按钮开启音乐。':enabled?'关闭背景音乐（音量 30%）':'开启背景音乐（音量 30%）';
 }
 function pause(rewind=false){
  ++request;pending=false;audio.pause();
  if(rewind)try{audio.currentTime=0;}catch(_){/* 音频尚未加载时已在起点。 */}
  refresh();
 }
 function sync(){
  if(!allowed()){pause();return;}
  if(pending||!audio.paused||failed)return;
  pending=true;const ticket=++request;
  function reject(error){if(ticket!==request)return;pending=false;if(error?.name==='NotAllowedError')blocked=true;else if(error?.name!=='AbortError')failed=true;refresh();}
  try{Promise.resolve(audio.play()).then(()=>{
   if(ticket!==request)return;pending=false;blocked=false;
   if(!allowed())pause();else refresh();
  },reject);}catch(error){reject(error);}
 }
 function unlock(){if(allowed()){blocked=false;sync();}}
 function restart(){pause(true);failed=false;blocked=false;sync();}
 button.addEventListener('click',()=>{
  if(enabled&&blocked)blocked=false;else enabled=!enabled;
  sync();refresh();canvas.focus({preventScroll:true});
 });
 audio.addEventListener('error',()=>{failed=true;pause();});
 // 游戏本身的窗口事件先更新 state.hidden，再同步音乐。
 window.addEventListener('blur',()=>pause());
 window.addEventListener('focus',sync);
 document.addEventListener('visibilitychange',sync);
 window.addEventListener('pagehide',()=>pause());
 document.addEventListener('pointerdown',event=>{if(!event.target?.closest?.('button'))unlock();});
 refresh();return{sync,unlock,restart,stop:()=>pause(true)};
})();

// 第三关融合玩法：同学版的技能、投掷、撞车和拖车，配合已确认的地图与完整菜谱。
const LEVEL3={duration:300,walkSpeed:240,sprintSpeed:330,patrolSpeed:150,firstVisit:12,warning:3,hitDuration:1.8,patience:52.5,penalty:5,maxCustomers:7,maxPerQueue:3,firstCustomer:5};

var sfx=window.CatKitchenSfx.create({allowed:()=>state?.level?.started&&!state.level.over&&!state.paused&&!state.hidden,clips:{'bin':{src:'assets/sfx/bin.mp3',from:0,to:null,volume:0.5},'neige':{src:'assets/sfx/neige.mp3',from:0,to:null,volume:0.4},'car':{src:'assets/sfx/car.mp3',from:0,to:null,volume:0.12},'cut':{src:'assets/sfx/cut.mp3',from:0,to:3,volume:0.32},'stun':{src:'assets/sfx/stun.mp3',from:0,to:null,volume:0.6},'eat':{src:'assets/sfx/eat.mp3',from:0,to:3,volume:0.4},'hiss':{src:'assets/sfx/hiss.mp3',from:0,to:2,volume:0.55},'ice':{src:'assets/sfx/ice.mp3',from:2,to:5,volume:0.32},'laowu':{src:'assets/sfx/laowu.mp3',from:0,to:3,volume:0.6},'oven':{src:'assets/sfx/oven.mp3',from:0,to:3,volume:0.32},'boil':{src:'assets/sfx/boil.m4a',from:0,to:3,volume:0.3},'fryer':{src:'assets/sfx/fryer.mp3',from:0,to:3,volume:0.28},'stove':{src:'assets/sfx/stove.mp3',from:4,to:7,volume:0.32}}});
function syncLevelSounds(){
 if(state.cat.stun<=0)sfx.stop('stun');
 const names=state.level.boost>0?['neige']:[];
 for(const st of state.test?.stations||[]){
  if(st.process.active){if(st.type==='cutting')names.push('cut');else if(st.type==='stove')names.push('stove');else if(st.type==='fryer')names.push('fryer');else if(st.type==='oven')names.push('oven');else if(st.type==='iceMachine'||st.type==='foamMachine')names.push('ice');}
  if(st.type==='teaKettle'&&st.kettle.stage==='brewing')names.push('boil');
 }
 if(state.cars.some(car=>!(car.stop>0)))names.push('car');sfx.sync(names);
}
function initLevel3(){sfx.stopAll();
 music.stop();
 state.level={started:false,over:false,left:300,boost:0,freeze:0,jCD:0,kCD:0,lCD:0,burst:0,hiss:0,charge:0,charging:false,carry:-1,ground:[],flying:[],spawn:1.5,warningRow:0,customerSpawn:LEVEL3.firstCustomer,nextCustomerId:1};
 Object.assign(state.cat,{dirX:0,dirY:1,stun:0,stunMax:1.8,invulnerable:0,kx:0,ky:0});
 Object.assign(state.patrol,{active:false,next:12,warning:0,fleeing:false,customPath:null});
 for(const cart of state.carts){cart.carried=false;cart.wasSeized=false;}
 state.test.missed=0;for(const group of servingGroups())group.queue.length=0;
 showLevelDialog(false);syncTestHud();
}
function showLevelDialog(ended,exited=false){
 if(ended){music.stop();sfx.stopAll();}
 $('game-dialog').hidden=false;$('dialog-title').textContent=exited?'本局已退出':ended?'营业结束':'猫猫风味街，开张！';
 $('dialog-intro').hidden=ended;
 $('dialog-description').textContent=ended?'本局完成 '+state.test.served+' 单，流失 '+state.test.missed+' 位顾客，获得 '+state.test.score+' 分。':'小吃、日料与甜品饮品，一条街同时开张。';
 $('start-game').textContent=ended?'再营业一局':'开始营业';
}
function startLevel3(){if(state.level.over)reset();state.level.started=true;state.paused=false;keys.clear();$('pause').textContent='暂停 · P';$('game-dialog').hidden=true;previous=0;announce('开始营业！城管首次在 12 秒后预警，注意出餐后顾客尚未带走的食物。');canvas.focus();music.restart();syncLevelSounds();syncTestHud();}
function restartLevel3(){reset();startLevel3();}
function exitLevel3(){
 if(!state.level.started||state.level.over)return;
 state.level.started=false;state.level.over=true;state.paused=false;keys.clear();state.level.charging=false;state.level.charge=0;
 $('pause').textContent='暂停 · P';showLevelDialog(true,true);announce('本局已退出，可以重新开始。');syncTestHud();draw();
}
function canAct(){return state.level?.started&&!state.level.over&&!state.paused&&!state.hidden&&state.cat.stun<=0;}
function cartSurface(row){return state.surfaces.find(s=>s.row===row);}
function queuePoint(row,index){return{x:CART_HOME_X+154,y:CART_HOME_Y[row]+56+index*82};}
function cartHasFood(row){return cartSurface(row).slots.some(Boolean)||servingGroups()[row].queue.some(q=>!!q.parcel);}
function seizeCart(row){
 const t=state.carts[row];if(t.impounded||t.carried)return false;
 t.impounded=true;t.wasSeized=true;t.targetX=1350;t.targetY=CART_HOME_Y[row];cartSurface(row).slots.fill(null);cartSurface(row).slotLayers=[[],[],[],[]];
 for(const q of servingGroups()[row].queue){q.parcel=null;q.eating=0;}
 state.impounded=true;announce((row+1)+' 号推车被扣留，车上与顾客尚未带走的食物已清空！顾客在原地继续等候。');return true;
}
function portPosition(row=0){return{x:CART_HOME_X+28,y:CART_HOME_Y[row]+34};}
// 取消独立出餐口，顾客只从自己排队的推车格子领取成品。
function nearestPort(){return null;}
function tryServe(){return false;}
function collectCartOrders(){
 for(const group of servingGroups()){
  const cart=state.carts[group.row],surface=cartSurface(group.row);
  if(cart.impounded||cart.carried||Math.abs(cart.x-CART_HOME_X)>1)continue;
  for(let index=0;index<surface.slots.length;index++){
   const layers=cartSlotLayers(surface,index);if(layers.length!==1)continue;
   const kind=layers[0];if(!group.orders.includes(kind))continue;
   const customer=group.queue.find(q=>!q.parcel&&q.order===kind&&q.patience>0);if(!customer)continue;
   setCartSlot(surface,index,[]);customer.parcel=kind;customer.eating=3;sfx.play('eat');
   announce(ITEMS[kind].name+'已被点餐顾客拿走，3 秒后离开并结算；请留意城管。');
  }
 }
}
function testInteract(){
 if(!canAct())return;const p=state.cat,l=state.level;
 if(l.carry>=0){const t=state.carts[l.carry];t.carried=false;t.x=t.targetX=1350;t.y=t.targetY=CART_HOME_Y[t.row];l.carry=-1;announce('已松开推车，推车回到暂扣位；可再按 E 拖走。');return;}
 for(const t of state.carts){if(!t.impounded||Math.abs(t.x-1350)>2)continue;const b=cartBounds(t),nx=Math.max(b.x,Math.min(b.x+b.w,p.x)),ny=Math.max(b.y,Math.min(b.y+b.h,p.y));
  if(Math.hypot(p.x-nx,p.y-ny)<50){if(p.held){announce('请先放下手中物品，再空手按 E 拿车。');return;}t.carried=true;l.carry=t.row;announce('已抓住 '+(t.row+1)+' 号推车，走回原推车位会自动放下；E 可松开。');return;}
 }
 if(!p.held){const near=l.ground.filter(f=>Math.hypot(f.x-p.x,f.y-p.y)<53).sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y))[0];if(near){l.ground.splice(l.ground.indexOf(near),1);p.held=near.kind;syncTestHud();return;}}
 kitchenInteract();
}
function useLevelSkill(key){
 if(!canAct())return;const l=state.level,p=state.patrol;
 if(key==='j'&&l.jCD<=0){l.jCD=30;l.boost=16;syncLevelSounds();announce('脊背龙：16 秒移速 ×1.8、加工速度 ×2！');}
 if(key==='k'&&l.kCD<=0){l.kCD=30;l.freeze=5;l.burst=1.5;sfx.play('laowu');announce('老吴：顾客与城管冻结 5 秒。');}
 if(key==='l'&&l.lCD<=0){
  if(!p.active&&p.warning<=0){announce('城管不在场，暂时不用哈气。');return;}
  l.lCD=40;l.hiss=.65;sfx.play('hiss');
  if(p.warning>0){p.warning=0;p.next=25+Math.random()*15;announce('小猫哈气！本次巡逻已取消。');}
  else {const cross=Math.abs(p.y-378)<Math.abs(p.y-633)?378:633;p.customPath=p.x<=1005?[{x:973,y:cross},{x:1260,y:cross},{x:1550,y:cross},{x:1550,y:122}]:[{x:p.x,y:cross},{x:1550,y:cross},{x:1550,y:122}];p.target=0;p.fleeing=true;announce('小猫哈气！城管被吓跑了。');}
 }
 syncTestHud();
}
function startPatrol(){
 if(!state.level?.started||state.paused)return;Object.assign(state.patrol,{active:true,warning:0,x:1550,y:122,target:0,customPath:null,fleeing:false});announce('城管开始巡逻，请清空推车上的暂存食物并尽快出餐。');
}
function updatePatrol(dt){
 const p=state.patrol;if(!p.active){if(p.warning>0){p.warning-=dt;if(p.warning<=0)startPatrol();}else{p.next-=dt;if(p.next<=0){p.warning=3;state.level.warningRow=Math.floor(Math.random()*3);announce('注意！3 秒后城管出勤！');}}return;}
 const route=p.customPath||PATROL_POINTS,target=route[p.target],dx=target.x-p.x,dy=target.y-p.y,d=Math.hypot(dx,dy),move=(p.fleeing?210:150)*dt;
 if(d<=move){p.x=target.x;p.y=target.y;p.target++;if(p.target>=route.length){p.active=false;p.warning=0;p.next=p.fleeing?25+Math.random()*15:18+Math.random()*15;p.fleeing=false;p.customPath=null;}}
 else {p.x+=dx/d*move;p.y+=dy/d*move;}
 if(p.active&&!p.fleeing&&Math.abs(p.x-973)<3){for(const t of state.carts)if(!t.impounded&&Math.abs(p.y-(CART_HOME_Y[t.row]+112))<75&&cartHasFood(t.row))seizeCart(t.row);}
}
function spawnLevelCustomer(){
 const groups=servingGroups(),count=groups.reduce((sum,g)=>sum+g.queue.length,0);
 if(count>=LEVEL3.maxCustomers)return null;
 const choices=groups.filter(g=>g.queue.length<LEVEL3.maxPerQueue).flatMap(group=>group.orders.map(order=>({group,order})));
 if(!choices.length)return null;
 const {group,order}=choices[Math.floor(Math.random()*choices.length)];
 const customer={id:state.level.nextCustomerId++,order,breed:BREEDS[Math.floor(Math.random()*BREEDS.length)],patience:LEVEL3.patience,maxP:LEVEL3.patience,eating:0,parcel:null};
 group.queue.push(customer);announce('新顾客点了'+ITEMS[order].name+'，已前往'+group.name+'推车排队。');syncTestHud();return customer;
}
function updateCustomerArrivals(dt){
 state.level.customerSpawn-=dt;
 if(state.level.customerSpawn<=0){spawnLevelCustomer();state.level.customerSpawn=4+Math.random()*4;}
}
function updateCustomers(dt){
 collectCartOrders();
 for(const group of servingGroups())for(let i=group.queue.length-1;i>=0;i--){
  const q=group.queue[i];
  if(q.parcel){q.eating-=dt;if(q.eating<=0){state.test.score+=15;state.test.served++;announce(ITEMS[q.parcel].name+'已被顾客带走，+15 分！');group.queue.splice(i,1);}}
  else {q.patience=Math.max(0,q.patience-dt);if(q.patience<=0){state.test.score-=LEVEL3.penalty;state.test.missed++;group.queue.splice(i,1);announce('点'+ITEMS[q.order].name+'的顾客等太久离开了，扣 5 分。');}}
 }
}
function addTraffic(){
 const down=Math.random()<.5,x=down?1069:1169,y=down?-150:H+150;
 if(state.cars.some(c=>c.x===x&&Math.abs(c.y-y)<250))return;
 state.cars.push({x,y,dir:down?1:-1,speed:100+Math.random()*80,color:['#cf8771','#d2b36b','#9fb9ae','#91a9bc'][Math.floor(Math.random()*4)],stop:0});
}
function updateTraffic(dt){
 const p=state.cat,l=state.level;l.spawn-=dt;if(l.spawn<=0){l.spawn=1.5;addTraffic();}
 for(let i=state.cars.length-1;i>=0;i--){const car=state.cars[i];
  if(car.stop>0){car.stop-=dt;if(car.stop<=0)state.cars.splice(i,1);continue;}
  car.y+=car.dir*car.speed*dt;if(car.y>H+155||car.y<-155){state.cars.splice(i,1);continue;}
  if(p.stun>0||p.invulnerable>0)continue;
  const nx=Math.max(car.x-40,Math.min(car.x+40,p.x)),ny=Math.max(car.y-72,Math.min(car.y+72,p.y));
  if(Math.hypot(p.x-nx,p.y-ny)<18){p.stun=1.8;sfx.play('stun',1.8);p.kx=(Math.random()-.5)*360;p.ky=car.dir*600;car.stop=3;l.charging=false;l.charge=0;announce('被车撞倒！眩晕 1.8 秒，恢复后可继续行动。');}
 }
}
function moveCartAnimations(dt){
 const p=state.cat,l=state.level;
 for(const t of state.carts){
  if(t.carried){if(p.stun<=0){t.x=p.x+24;t.y=p.y-100;
    if(p.x<CART_HOME_X+35&&Math.hypot(p.x-(CART_HOME_X+66),p.y-(CART_HOME_Y[t.row]+112))<110){t.carried=false;t.impounded=false;t.x=t.targetX=CART_HOME_X;t.y=t.targetY=CART_HOME_Y[t.row];l.carry=-1;p.x=CART_HOME_X-25;p.y=Math.max(CART_HOME_Y[t.row]+30,Math.min(CART_HOME_Y[t.row]+200,p.y));announce((t.row+1)+' 号推车已归位，顾客继续点餐！');}
   }continue;}
  const diff=t.targetX-t.x;if(Math.abs(diff)<.01)continue;t.x+=Math.sign(diff)*Math.min(Math.abs(diff),520*dt);
  const box=cartBounds(t),nx=Math.max(box.x,Math.min(box.x+box.w,p.x)),ny=Math.max(box.y,Math.min(box.y+box.h,p.y));
  if(Math.hypot(p.x-nx,p.y-ny)<18){const candidates=[{x:box.x-19,y:p.y},{x:box.x+box.w+19,y:p.y},{x:p.x,y:box.y-19},{x:p.x,y:box.y+box.h+19}].filter(pos=>canStand(pos.x,pos.y)).sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y));if(candidates[0])Object.assign(p,candidates[0]);}
 }
 state.impounded=state.carts.some(t=>t.impounded);
}
function beginThrow(){if(canAct()&&state.cat.held&&state.level.carry<0){state.level.charging=true;state.level.charge=0;}}
// 预览与实际飞行共用落点计算；沿途遇到能接料的台面时提前接住。
function throwStationPlan(st,kind){
 if(st.type==='trash')return{ok:true,label:'垃圾桶'};
 if(st.type==='surface'){
  const kinds=[...st.layers,kind],cups=kinds.filter(k=>CUP_CONTENTS.has(k));
  if(cups.length&&kinds.length>1){
   if(cups.length!==1)return{ok:false,label:'只需要一个杯子'};
   let result=cups[0];for(const ingredient of kinds.filter(k=>!CUP_CONTENTS.has(k))){result=cupWithIngredient(result,ingredient);if(!result)return{ok:false,label:'配料不兼容'};}
   return{ok:true,layers:[result],label:st.label};
  }
  if(kinds.length>3||st.layers.includes(kind))return{ok:false,label:'台面已满或材料重复'};
  if(st.layers.length&&!PREP_RECIPES.some(r=>kinds.every(k=>r.parts.includes(k))))return{ok:false,label:'配方不兼容'};
  const recipe=PREP_RECIPES.find(r=>r.parts.length===kinds.length&&r.parts.every(k=>kinds.includes(k)));
  return{ok:true,layers:recipe?[recipe.result]:kinds,label:st.label};
 }
 if(st.type==='teaKettle')return{ok:kind==='water'&&st.kettle.stage==='empty',label:st.kettle.stage==='empty'?'加水后按 F 煮茶':'壶内还有水或茶'};
 if(st.type==='iceMachine'||st.type==='foamMachine'){
  const result=st.type==='iceMachine'?(kind==='cup'?'vanillaSundae':null):cupWithIngredient(kind,'cheeseFoam');
  return{ok:!!result&&!st.layers.length&&!st.process.active,result,label:st.layers.length||st.process.active?'机器已被占用':st.label};
 }
 const recipe=PROCESS_RECIPES[st.type]?.[kind];
 return{ok:!!recipe&&!st.layers.length&&!st.process.active,recipe,label:st.layers.length||st.process.active?'工作台已被占用':st.label};
}
function throwStationMatches(st,kind){
 return st.type==='surface'||st.type==='trash'||!!PROCESS_RECIPES[st.type]?.[kind]||
  st.type==='teaKettle'&&kind==='water'||st.type==='iceMachine'&&kind==='cup'||st.type==='foamMachine'&&!!cupWithIngredient(kind,'cheeseFoam');
}
function throwTargets(kind){
 const targets=state.test.stations.filter(st=>throwStationMatches(st,kind)).map(st=>({type:'station',id:st.id,x:st.x,y:st.y,hw:53*st.scale,hh:28*st.scale,plan:throwStationPlan(st,kind)}));
 for(const surface of state.surfaces){const cart=state.carts[surface.row];if(cart.impounded||cart.carried||Math.abs(cart.x-CART_HOME_X)>1)continue;
  surface.slots.forEach((slot,index)=>{const pos=slotPosition(surface,index);targets.push({type:'cart',row:surface.row,index,...pos,hw:18,hh:16,plan:cartSlotPlan(surface,index,kind)});});
 }
 return targets;
}
function throwRayEntry(p,ux,uy,length,target){
 let enter=0,exit=length;
 for(const [origin,dir,center,half]of[[p.x,ux,target.x,target.hw+12],[p.y,uy,target.y,target.hh+12]]){
  if(Math.abs(dir)<1e-8){if(Math.abs(origin-center)>half)return null;}
  else{let a=(center-half-origin)/dir,b=(center+half-origin)/dir;if(a>b)[a,b]=[b,a];enter=Math.max(enter,a);exit=Math.min(exit,b);if(enter>exit)return null;}
 }
 const along=(target.x-p.x)*ux+(target.y-p.y)*uy;
 return along>16&&Math.hypot(target.x-p.x,target.y-p.y)<=Math.min(330,length+30)?enter:null;
}
function throwAim(kind=state.cat.held,charge=state.level.charge){
 const p=state.cat,distance=60+270*Math.min(1,charge/1.2),norm=Math.hypot(p.dirX,p.dirY)||1;
 const raw={x:Math.max(42,Math.min(1550,p.x+p.dirX/norm*distance)),y:Math.max(119,Math.min(863,p.y+p.dirY/norm*distance))};
 const length=Math.hypot(raw.x-p.x,raw.y-p.y),ux=length?(raw.x-p.x)/length:0,uy=length?(raw.y-p.y)/length:1;
 let selected=null,best=Infinity;
 for(const target of throwTargets(kind)){
  const entry=throwRayEntry(p,ux,uy,length,target);if(entry===null)continue;
  const perpendicular=Math.abs((target.x-p.x)*uy-(target.y-p.y)*ux),score=entry+perpendicular*.2;
  if(score<best){selected=target;best=score;}
 }
 return{x:selected?.x??raw.x,y:selected?.y??raw.y,target:selected,distance};
}
function finishThrow(){
 const p=state.cat,l=state.level;if(!l.charging)return;l.charging=false;if(!canAct()||!p.held){l.charge=0;return;}
 const kind=p.held,aim=throwAim(kind);p.held=null;
 if(l.charge<.2)l.ground.push({kind,x:p.x,y:p.y});
 else l.flying.push({kind,x:p.x,y:p.y,tx:aim.x,ty:aim.y,target:aim.target,distance:Math.hypot(aim.x-p.x,aim.y-p.y)});
 l.charge=0;syncTestHud();
}
function placeThrown(kind,x,y,target){
 if(!target)target=throwTargets(kind).filter(t=>Math.abs(x-t.x)<=t.hw+12&&Math.abs(y-t.y)<=t.hh+12).sort((a,b)=>Math.hypot(x-a.x,y-a.y)-Math.hypot(x-b.x,y-b.y))[0];
 if(!target)return false;
 if(target.type==='cart'){
  const cart=state.carts[target.row],surface=cartSurface(target.row);if(cart.impounded||cart.carried||Math.abs(cart.x-CART_HOME_X)>1)return false;
  const plan=cartSlotPlan(surface,target.index,kind);if(!plan.ok)return false;setCartSlot(surface,target.index,plan.layers);return true;
 }
 const st=state.test.stations.find(s=>s.id===target.id);if(!st)return false;const plan=throwStationPlan(st,kind);if(!plan.ok)return false;
 if(st.type==='trash'){sfx.play('bin');return true;}
 if(st.type==='surface'){st.layers=plan.layers;return true;}
 if(st.type==='teaKettle'){st.kettle.stage='filled';st.kettle.progress=0;return true;}
 st.layers=[kind];st.process={active:st.type!=='cutting',progress:0,duration:plan.recipe?.[1]??1.5};if(plan.result)st.pendingResult=plan.result;
 return true;
}
function landOnFloor(kind,x,y){
 if(!canStand(x,y)){let found=null;for(let r=20;r<=140&&!found;r+=15)for(let i=0;i<24;i++){const px=x+Math.cos(i*Math.PI/12)*r,py=y+Math.sin(i*Math.PI/12)*r;if(canStand(px,py)){found={x:px,y:py};break;}}if(found){x=found.x;y=found.y;}else{x=state.cat.x;y=state.cat.y;}}
 state.level.ground.push({kind,x,y});
}
function updateThrows(dt){
 const l=state.level;if(l.charging&&canAct())l.charge=Math.min(1.2,l.charge+dt);
 for(let i=l.flying.length-1;i>=0;i--){const f=l.flying[i],dx=f.tx-f.x,dy=f.ty-f.y,d=Math.hypot(dx,dy),move=700*dt;
  if(d<=move){if(!placeThrown(f.kind,f.tx,f.ty,f.target))landOnFloor(f.kind,f.tx,f.ty);l.flying.splice(i,1);}else{f.x+=dx/d*move;f.y+=dy/d*move;}
 }
}
function step(dt){
 dt=Math.max(0,Math.min(.04,dt));const l=state.level;if(!l?.started||l.over||state.paused||state.hidden)return;
 state.time+=dt;l.left=Math.max(0,l.left-dt);if(l.left<=1e-8){l.left=0;l.over=true;l.started=false;keys.clear();showLevelDialog(true);syncTestHud();return;}
 const wasFrozen=l.freeze>0;for(const key of['boost','freeze','jCD','kCD','lCD','burst','hiss'])l[key]=Math.max(0,l[key]-dt);
 const p=state.cat;p.invulnerable=Math.max(0,p.invulnerable-dt);
 if(p.stun>0){p.stun=Math.max(0,p.stun-dt);if(p.stun===0)p.invulnerable=.5;const sx=p.kx*dt,sy=p.ky*dt;if(canStand(p.x+sx,p.y))p.x+=sx;if(canStand(p.x,p.y+sy))p.y+=sy;const friction=Math.pow(.94,dt*60);p.kx*=friction;p.ky*=friction;p.moving=false;}
 else {const dx=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0),dy=(keys.has('s')||keys.has('arrowdown')?1:0)-(keys.has('w')||keys.has('arrowup')?1:0),n=Math.hypot(dx,dy);p.moving=n>0;
  if(n){p.dirX=dx/n;p.dirY=dy/n;if(dx)p.face=dx>0?1:-1;const speed=(keys.has('shift')?330:240)*(l.boost>0?1.8:1),sx=dx/n*speed*dt,sy=dy/n*speed*dt;if(canStand(p.x+sx,p.y))p.x+=sx;if(canStand(p.x,p.y+sy))p.y+=sy;}
 }
 const cuttingKey=keys.has('f');if(p.stun>0||l.carry>=0)keys.delete('f');updateKitchenTest(dt*(l.boost>0?2:1));if(cuttingKey&&p.stun<=0&&l.carry<0)keys.add('f');
 updateTraffic(dt);moveCartAnimations(dt);updateThrows(dt);updateCustomerArrivals(dt);if(!wasFrozen){updateCustomers(dt);updatePatrol(dt);}
 const patrolText=state.patrol.warning>0?'城管 '+Math.ceil(state.patrol.warning)+' 秒后出勤':state.patrol.active?(l.freeze>0?'城管已冻结':'城管正在巡查'):'城管 '+Math.ceil(state.patrol.next)+' 秒后预警';
 if($('patrol-state').dataset.mode!==patrolText){$('patrol-state').dataset.mode=patrolText;$('patrol-state').innerHTML='<i></i>'+patrolText;}syncLevelSounds();
}
function syncTestHud(){
 if(!state?.level)return;const l=state.level,total=Math.ceil(l.left),clock=Math.floor(total/60)+':'+String(total%60).padStart(2,'0');
 $('test-hud').textContent='剩余 '+clock+'　·　完成 '+state.test.served+' 单　·　得分 '+state.test.score+'　·　手上：'+(ITEMS[state.cat.held]?.name||'空手')+(l.carry>=0?'　·　拖着 '+(l.carry+1)+' 号推车':'')+'\n'+servingGroups().map(g=>g.name+'：'+(g.queue.map(q=>ITEMS[q.order].name+(q.parcel?'（正在取餐）':'（'+Math.ceil(q.patience)+'s）')).join(' · ')||'暂无订单')).join('\n');
 $('skill-j').textContent='J 脊背龙 '+(l.boost>0?'生效 '+Math.ceil(l.boost)+'s':l.jCD>0?'冷却 '+Math.ceil(l.jCD)+'s':'可用');
 $('skill-k').textContent='K 老吴 '+(l.freeze>0?'生效 '+Math.ceil(l.freeze)+'s':l.kCD>0?'冷却 '+Math.ceil(l.kCD)+'s':'可用');$('skill-l').textContent='L 小猫哈气 '+(l.lCD>0?'冷却 '+Math.ceil(l.lCD)+'s':'可用');
}
function drawKitchenTest(){
 syncKitchenArt();drawSeafoodPool();for(const st of state.test.stations){if(st.type==='pool')continue;if(st.type==='cutting')drawUnifiedCuttingStation(st);else if(st.style==='dessert')drawDessertStation(st);else if(st.style==='level2')drawJapaneseStation(st);else drawStation(st);}
 for(const group of servingGroups()){
  const absent=state.carts[group.row].impounded;
  if(absent){text(ctx,'推车已暂扣',CART_HOME_X+64,CART_HOME_Y[group.row]+105,13,'#ae7964',800);text(ctx,'跨过马路 · E 取车',CART_HOME_X+64,CART_HOME_Y[group.row]+127,11,'#8e886c');}
  group.queue.forEach((q,i)=>{const{x,y}=queuePoint(group.row,i);el(ctx,x,y+19,19,6,'rgba(90,85,65,.13)');ctx.save();ctx.translate(x-24,y-24);drawCatFace(ctx,q.breed,q.parcel?'eating':'waiting');ctx.restore();rr(ctx,x-22,y-64,44,33,8,'#fff9e9','#cbb78e',1);drawFood(ctx,x,y-48,q.order,.48);
   if(!q.parcel){const ratio=Math.max(0,q.patience/q.maxP);rr(ctx,x-19,y-35,38,3,1.5,'#dacbb0');if(ratio>0)rr(ctx,x-19,y-35,38*ratio,3,1.5,state.level.freeze>0?'#89aab3':ratio>.5?'#90a974':ratio>.25?'#d7aa5d':'#c97b68');}
   if(q.parcel){drawFood(ctx,x+25,y+12,q.parcel,.3);rr(ctx,x-19,y-35,38,3,1.5,'#dacbb0');rr(ctx,x-19,y-35,38*Math.max(0,q.eating/3),3,1.5,'#8fa77a');}
   if(state.level.freeze>0){effectStar(ctx,x+21,y-11,7,'#809eae');}
   if(i===0&&state.patrol.warning>0&&state.level.warningRow===group.row){rr(ctx,x-59,y-94,118,23,7,'#fff0c6','#d6b46f',1);text(ctx,'城管要来了！',x,y-82,12,'#99784d');}
  });
 }
 const near=closestKitchen();if(near&&canAct()&&state.level.carry<0&&!state.level.charging){const hint=near.type==='teaKettle'?'E 加水 / 接茶 · F 煮茶':near.type==='cutting'?'E 拿放 · 按住 F 切菜':'E · '+near.label;rr(ctx,state.cat.x-82,state.cat.y-104,164,24,8,'#fff9e7','#bca67e',1);text(ctx,hint,state.cat.x,state.cat.y-92,12,'#766348');}
}
function drawChef(c){const p=state.cat;c.save();if(p.stun>0){c.translate(p.x,p.y);c.rotate(Math.sin(state.time*12)*.07-.16);c.translate(-p.x,-p.y);c.globalAlpha=.78+.2*Math.sin(state.time*20);}paintChefSprites(c);c.restore();}
function effectStar(c,x,y,r,color){const points=[];for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.43:r;points.push([x+Math.cos(a)*rr,y+Math.sin(a)*rr]);}path(c,points,color,'#fff5d6',.8);}
function drawThrowPreview(){
 const c=ctx,p=state.cat,l=state.level,ratio=Math.min(1,l.charge/1.2);
 rr(c,p.x-36,p.y-88,72,7,3,'#e8d5ae');if(ratio>0)rr(c,p.x-36,p.y-88,72*ratio,7,3,ratio>.75?'#cf8870':ratio>.4?'#dbb36a':'#90aa78');
 if(l.charge<.2){text(c,'按住 Q 蓄力 · 轻按放下',p.x,p.y-101,12,'#937956');return;}
 const aim=throwAim(),target=aim.target,color=target?(target.plan.ok?'#789967':'#bf8068'):'#bb9a5d';
 c.save();c.strokeStyle=color;c.lineWidth=2;c.setLineDash([6,5]);c.beginPath();
 for(let i=0;i<=24;i++){const t=i/24,x=p.x+(aim.x-p.x)*t,y=p.y+(aim.y-p.y)*t-Math.sin(Math.PI*t)*28;if(i)c.lineTo(x,y);else c.moveTo(x,y);}c.stroke();c.setLineDash([]);
 if(target)rr(c,aim.x-target.hw-4,aim.y-target.hh-4,target.hw*2+8,target.hh*2+8,6,null,color,2);
 c.beginPath();c.arc(aim.x,aim.y,11,0,Math.PI*2);c.stroke();line(c,aim.x-4,aim.y,aim.x+4,aim.y,color,1.5);line(c,aim.x,aim.y-4,aim.x,aim.y+4,color,1.5);
 const hint=target?(target.plan.ok?'松开 Q → '+target.plan.label:'无法接住 · '+target.plan.label):'松开 Q → 地面落点';
 const w=Math.max(144,Math.min(250,c.measureText(hint).width+28)),x=Math.max(w/2+10,Math.min(W-w/2-10,p.x));
 rr(c,x-w/2,p.y-122,w,25,8,'#fff9e9f2',color,1);text(c,hint,x,p.y-109,12,color,700);c.restore();
}
function drawLevelEffects(){
 const c=ctx,p=state.cat,l=state.level;
 for(const f of l.ground){el(c,f.x,f.y+13,18,5,'#8c795928');food(c,f.kind,f.x,f.y,.56);}
 for(const f of l.flying){const progress=f.distance?Math.max(0,Math.min(1,1-Math.hypot(f.tx-f.x,f.ty-f.y)/f.distance)):1;el(c,f.x,f.y+10,13,4,'#8c79592a');food(c,f.kind,f.x,f.y-Math.sin(progress*Math.PI)*28,.58);}
 if(l.carry>=0){const t=state.carts[l.carry];c.save();c.translate(p.stun>0?t.x+6:p.x+30,p.stun>0?t.y+120:p.y+20);c.scale(.42,.42);c.translate(-t.x-66,-t.y-112);cart(c,t);const s=cartSurface(t.row);s.slots.forEach((kind,i)=>{if(kind){const pos=slotPosition(s,i);drawCartSlot(c,s,i,pos.x,pos.y,.75);}});c.restore();text(c,'拖车中 · 原位自动归还',p.x,p.y-82,12,'#937956');}
 if(l.charging&&p.held)drawThrowPreview();
 if(l.boost>0){for(let i=0;i<2;i++){const y=p.y-78-((state.time*30+i*22)%48);c.save();c.globalAlpha=1-((state.time*30+i*22)%48)/48;text(c,'内阁',p.x+(i?12:-12),y,16,'#bc805e',800);c.restore();}}
 if(l.burst>0)window.paintSkillCaption(c,'老吴',p.x,p.y-112,l.burst,1.5,'#587f9a');
 if(l.hiss>0){c.save();c.strokeStyle='#c38f6d';c.lineWidth=3;c.beginPath();c.arc(p.x,p.y-12,40+(1-l.hiss/.65)*110,-.8,2.5);c.stroke();c.restore();window.paintSkillCaption(c,'哈',p.x,p.y-112,l.hiss,.65,'#bd6b48');}
 if(l.freeze>0&&state.patrol.active)text(c,'冻结 '+l.freeze.toFixed(1)+'s',state.patrol.x,state.patrol.y+48,12,'#6796a5');
 if(p.stun>0){
  for(let i=0;i<3;i++){const a=state.time*5+i*Math.PI*2/3;effectStar(c,p.x+Math.cos(a)*30,p.y-65+Math.sin(a)*9,8,i%2?'#d1a776':'#e0bd62');}
  rr(c,p.x-116,p.y-137,232,45,10,'#fff2d7f2','#c49b70',1.5);text(c,'撞车眩晕 · '+p.stun.toFixed(1)+' 秒',p.x,p.y-121,15,'#a56f55',800);rr(c,p.x-95,p.y-108,190,6,3,'#dfcbaa');rr(c,p.x-95,p.y-108,190*p.stun/p.stunMax,6,3,'#ca9773');
 }
}

// 第三关的街头摊位装饰与统一器具，只改变绘制。
const paintPlainStreetCounter=station;
station=function(c){
 paintPlainStreetCounter(c);
 const pieces=[{x:64,y:138,w:72,h:714},...ROWS.flatMap((_,row)=>armRects(row))];
 // 台沿贴红白防水围布，保留原来的台面与通道。
 for(const r of pieces){
  c.save();c.beginPath();c.rect(r.x+5,r.y+r.h-8,r.w-10,6);c.clip();
  rr(c,r.x+5,r.y+r.h-8,r.w-10,6,1,'#a45f4a');
  for(let x=r.x+7;x<r.x+r.w-7;x+=18)rr(c,x,r.y+r.h-8,8,5,1,'#f6e6c7');
  c.restore();
 }
 // 边角方格抹布与调味瓶。
 for(const y of[204,782]){
  rr(c,72,y,47,16,2,'#f2e7cc','#c8ad85',.8);
  c.save();c.beginPath();c.rect(72,y,47,16);c.clip();
  for(let x=76;x<119;x+=10)rr(c,x,y,3,16,0,'#a66f5a55');
  for(let yy=y+3;yy<y+16;yy+=7)rr(c,72,yy,47,2,0,'#a66f5a55');c.restore();
 }
 for(const [i,color]of['#aa5d43','#ad9758','#9c7961'].entries()){
  const x=81+i*15;rr(c,x,570,11,20,3,color,'#886e50',.8);rr(c,x+1,566,9,6,2,'#eee2c3','#a48a66',.7);rr(c,x+2,577,7,6,1,'#f5e4bf');
 }
};

function streetStationCaption(st){
 const c=ctx,pr=st.process,left=st.x<=136,compact=st.y===465;
 const y=st.y+(left?26:compact?31:st.y>790?-55:43);
 text(c,st.label,st.x,y,12,'#624e36',800);
 if(!compact)text(c,pr.active?'炸制中…':st.layers.length?'E 取成品':'放入自动加工',st.x,y+15,10,'#788760');
 if(pr.active){rr(c,st.x-26,st.y+21,52,4,2,'#c7bb98');rr(c,st.x-26,st.y+21,52*Math.min(1,pr.progress/pr.duration),4,2,'#819f68');}
}
function drawStreetFryer(st){
 const c=ctx;c.save();c.translate(st.x,st.y);c.scale(st.scale,st.scale);
 rr(c,-52,-27,104,58,7,'#b9995b','#907643',1.5);
 rr(c,-49,-25,98,43,6,'#e8c777','#b49a60',1.2);
 rr(c,-39,-20,67,35,5,'#9b9e87','#727f76',1.4);
 rr(c,-34,-16,57,26,4,'#e8b858','#ac8b48',1);
 for(const x of[-26,-15,-4,7,18])line(c,x,-13,x,7,'#f7dc9255',1);
 for(const y of[-9,-1,6])line(c,-31,y,20,y,'#f7dc9255',1);
 path(c,[[25,-8],[37,-8],[37,10]],null,'#7e8778',3,false);
 rr(c,32,7,12,19,4,'#6e7867','#566653',1);
 rr(c,-46,20,63,7,2,'#f5d997');el(c,31,23,3,3,st.process.active?'#db8150':'#91a17b');
 if(st.layers[0])drawIngredient(c,-5,-3,st.layers[0],43);
 if(st.process.active)for(let i=0;i<4;i++)el(c,-24+i*12,-7+Math.sin(state.time*7+i)*3,1.8,1.8,'#fff0bb');
 c.restore();streetStationCaption(st);
}
const paintOriginalStreetStation=drawStation,paintOriginalJapaneseStation=drawJapaneseStation;
drawStation=function(st){if(st.type==='fryer')drawStreetFryer(st);else paintOriginalStreetStation(st);};
drawJapaneseStation=function(st){if(st.type==='fryer')drawStreetFryer(st);else paintOriginalJapaneseStation(st);};

const paintOriginalDessertStation=drawDessertStation;
drawDessertStation=function(st){
 if(st.type!=='teaKettle'){paintOriginalDessertStation(st);return;}
 const c=ctx,pot=st.kettle,matcha=st.item==='matcha',color=matcha?'#a5b786':'#d3a570';
 c.save();c.translate(st.x,st.y);c.scale(st.scale,st.scale);
 rr(c,-53,-27,106,61,8,'#af9676','#947d60',1.5);rr(c,-48,-23,96,46,6,'#e2e7d4','#c3aa87',1);
 el(c,0,20,33,6,'#8f886b25');
 // 闭合的竖直把手画在壶身后方，两端与左侧壶身相接。
 c.beginPath();c.ellipse(-28,0,13,16,0,0,Math.PI*2);c.strokeStyle='#6f7962';c.lineWidth=6;c.stroke();
 c.beginPath();c.ellipse(-28,0,13,16,0,0,Math.PI*2);c.strokeStyle='#9ba386';c.lineWidth=2;c.stroke();
 path(c,[[20,-5],[30,-8],[35,-18],[43,-18],[37,1],[23,12]],color,'#8f8264',1.5);
 el(c,0,3,27,22,color,'#8f8264',1.5);
 c.beginPath();c.ellipse(-9,1,9,13,-.3,Math.PI*.6,Math.PI*1.4);c.strokeStyle='#fff4d575';c.lineWidth=3;c.stroke();
 el(c,0,-15,25,7,'#efe6c9','#9a8c6b',1.2);rr(c,-7,-25,14,8,4,'#6f7962','#5e6955',1);
 el(c,0,5,15,10,'#f7ebd4');
 text(c,pot.stage==='ready'?pot.cupsLeft+'/5':pot.stage==='filled'?'水':pot.stage==='brewing'?'煮':'空',0,5,13,'#6d7052',800);
 if(pot.stage==='brewing'){
  for(const x of[-8,8])path(c,[[x,-29],[x-3,-35],[x+1,-41]],null,'#faf4dd',2,false);
  rr(c,-39,25,78,4,2,'#ccbea0');rr(c,-39,25,78*Math.min(1,pot.progress/3),4,2,'#8eab77');
 }
 c.restore();const y=st.y+(st.y>790?-55:40);text(c,st.label,st.x,y,12,'#624e36',800);
 text(c,{empty:'先 E 加水',filled:'按 F 煮 3 秒',brewing:'煮茶中 · 可离开',ready:pot.cupsLeft+'/5 杯 · E 接茶'}[pot.stage],st.x,y+15,10,'#788760');
};

// 每个摆盘格独立保存材料，与备菜台使用相同的配方校验。
function cartSlotLayers(surface,index){
 surface.slotLayers??=[[],[],[],[]];
 let layers=surface.slotLayers[index]||[];
 if((layers.at(-1)||null)!==surface.slots[index])layers=surface.slots[index]?[surface.slots[index]]:[];
 return surface.slotLayers[index]=layers;
}
function setCartSlot(surface,index,layers){surface.slotLayers??=[[],[],[],[]];surface.slotLayers[index]=[...layers];surface.slots[index]=layers.at(-1)||null;}
function cartSlotPlan(surface,index,kind){return throwStationPlan({type:'surface',label:'推车第 '+(index+1)+' 格',layers:cartSlotLayers(surface,index)},kind);}
function drawCartSlot(c,surface,index,x,y,scale){
 const layers=cartSlotLayers(surface,index);
 layers.forEach((kind,i)=>food(c,kind,x+(i-(layers.length-1)/2)*16,y,layers.length===1?scale:scale*.61));
}
function nearestCartSlot(){
 const p=state.cat;let best=null;
 for(const surface of state.surfaces){const cart=state.carts[surface.row];if(cart.impounded||cart.carried||Math.abs(cart.x-CART_HOME_X)>1)continue;
  for(let index=0;index<surface.slots.length;index++){
   if(!p.held&&!surface.slots[index])continue;
   const point=slotPosition(surface,index),dist=Math.hypot(point.x-p.x,point.y-p.y),score=dist+((point.x-p.x)*p.face < -8?90:0);
   if(dist<150&&(!best||score<best.score))best={surface,index,point,dist,score};
  }
 }
 return best;
}
mapInteract=function(){
 if(state.paused||state.hidden)return;const p=state.cat,target=nearestCartSlot();
 if(!target){announce('靠近推车摆盘格，按 E 拿放材料。');return;}
 const {surface,index}=target;
 if(p.held){const plan=cartSlotPlan(surface,index,p.held);if(!plan.ok){announce(plan.label+'，请换一格或先取走材料。');return;}
  setCartSlot(surface,index,plan.layers);p.held=null;
  announce('已放入推车第 '+(index+1)+' 格；配方材料须放在同一格。');
 }else{const layers=[...cartSlotLayers(surface,index)];p.held=layers.pop();setCartSlot(surface,index,layers);announce('拿起'+ITEMS[p.held].name+'。');}
};
nearestHint=function(){return nearestCartSlot();};
const paintPreGrillJapaneseStation=drawJapaneseStation;
drawJapaneseStation=function(st){
 if(st.type!=='oven'){paintPreGrillJapaneseStation(st);return;}
 const c=ctx;c.save();c.translate(st.x,st.y);c.scale(st.scale,st.scale);
 rr(c,-53,-27,106,61,8,'#af9676','#947d60',1.5);
 window.paintKitchenGrill(c,0,0,st.process.active,st.layers[0]?()=>drawIngredient(c,0,-4,st.layers[0],43):null,state.time);c.restore();
 const compact=st.y===465,y=st.y+(compact?31:40);text(c,st.label,st.x,y,12,'#624e36',800);
 if(!compact)text(c,st.process.active?'烧烤中…':'放入自动加工',st.x,y+15,10,'#788760');
 if(st.process.active){rr(c,st.x-26,st.y+21,52,4,2,'#c7bb98');rr(c,st.x-26,st.y+21,52*Math.min(1,st.process.progress/st.process.duration),4,2,'#819f68');}
};

staticScene();reset();function frame(t){if(!previous)previous=t;step((t-previous)/1000);previous=t;draw();raf=requestAnimationFrame(frame);}raf=requestAnimationFrame(frame);
})();

