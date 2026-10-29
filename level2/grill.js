// 共用的暖色卡通炭火烧烤架；只改变外观，保留原加工流程。
window.paintKitchenGrill=function(c,x,y,active,paintFood,time=0){
 c.save();c.translate(x,y);
 function rect(x,y,w,h,r,fill,stroke){c.beginPath();c.roundRect(x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=1.5;c.stroke();}}
 rect(-35,15,7,15,2,'#726f61');rect(28,15,7,15,2,'#726f61');
 rect(-43,-23,86,48,8,'#ad7460','#81584b');rect(-38,-20,76,35,5,'#514c43','#837c68');
 for(let i=0;i<8;i++){const xx=-29+(i%4)*19,yy=-9+Math.floor(i/4)*14;c.beginPath();c.ellipse(xx,yy,7,4,.2,0,Math.PI*2);c.fillStyle=active?(i%2?'#db9760':'#b9744d'):'#777263';c.fill();}
 c.strokeStyle='#d2c7a8';c.lineWidth=2;for(let xx=-32;xx<=32;xx+=8){c.beginPath();c.moveTo(xx,-17);c.lineTo(xx,11);c.stroke();}
 c.strokeStyle='#9d9b86';c.lineWidth=1.5;for(const yy of[-12,-2,8]){c.beginPath();c.moveTo(-34,yy);c.lineTo(34,yy);c.stroke();}
 rect(-51,-9,9,20,3,'#737665','#575e50');rect(42,-9,9,20,3,'#737665','#575e50');rect(-29,19,58,4,2,'#d2a785');
 if(paintFood)paintFood(c);
 if(active){c.strokeStyle='#e7d5aeaa';c.lineWidth=1.4;for(const xx of[-18,14]){const sway=Math.sin(time*3+xx)*3;c.beginPath();c.moveTo(xx,-25);c.quadraticCurveTo(xx+sway,-32,xx,-39);c.stroke();}}
 c.restore();
};
