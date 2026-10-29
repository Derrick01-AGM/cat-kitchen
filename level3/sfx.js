/* Local-file compatible sound effects. Segment times are in source-file seconds. */
window.CatKitchenSfx={create({clips,allowed,buttonId='sfx-toggle'}){
 let enabled=true,wanted=[],serial=0;
 const loops=new Map(),shots=new Map(),failed=new Set(),button=document.getElementById(buttonId);
 const live=()=>enabled&&allowed()&&!document.hidden;
 function release(v){if(!v||v.dead)return;v.dead=true;v.token++;v.audio.pause();try{v.audio.currentTime=v.from;}catch(_){} }
 function removeShot(v){release(v);shots.delete(v.id);}
 function stopAll(){for(const v of loops.values())release(v);loops.clear();for(const v of shots.values())release(v);shots.clear();}
 function seek(v){try{v.audio.currentTime=v.from;return true;}catch(_){return false;}}
 function attempt(v){
  if(v.dead||v.pending||v.blocked||!live())return;
  if(v.from>0&&v.audio.readyState<1)return;
  if(v.audio.currentTime<v.from-.02&&!seek(v))return;
  v.pending=true;const token=++v.token;
  try{Promise.resolve(v.audio.play()).then(()=>{
   if(v.dead||token!==v.token){if(v.dead)v.audio.pause();return;}
   v.pending=false;if(!live())release(v);
  },error=>{if(v.dead||token!==v.token)return;v.pending=false;if(error?.name==='NotAllowedError')v.blocked=true;else if(error?.name!=='AbortError'){failed.add(v.name);remove(v);}});}
  catch(_){v.pending=false;remove(v);}
 }
 function remove(v){if(v.loop){release(v);loops.delete(v.name);}else removeShot(v);}
 function boundary(v){
  if(v.dead)return;if(!live()){remove(v);return;}
  const end=Math.min(v.to??Infinity,Number.isFinite(v.audio.duration)?v.audio.duration:Infinity);
  if(v.audio.currentTime>=end-.02||v.audio.ended){
   if(v.loop){seek(v);attempt(v);}else removeShot(v);
  }
 }
 function voice(name,loop){
  const spec=clips[name];if(!spec||failed.has(name)||!live())return null;
  const audio=new Audio(spec.src),v={name,loop,audio,id:++serial,from:spec.from||0,to:spec.to,dead:false,pending:false,blocked:false,token:0};
  audio.preload='auto';audio.volume=spec.volume??.4;audio.loop=false;
  audio.addEventListener('loadedmetadata',()=>{if(v.dead)return;if(Number.isFinite(audio.duration)&&audio.duration<=v.from){remove(v);return;}seek(v);attempt(v);});
  audio.addEventListener('timeupdate',()=>boundary(v));audio.addEventListener('ended',()=>boundary(v));audio.addEventListener('error',()=>{failed.add(name);remove(v);});
  seek(v);return v;
 }
 function play(name,duration){
  if(!live()||!clips[name])return;
  const same=[...shots.values()].filter(v=>v.name===name);if(same.length>=2)removeShot(same[0]);
  const v=voice(name,false);if(v){if(duration>0)v.to=Math.min(v.to??Infinity,v.from+duration);shots.set(v.id,v);attempt(v);}
 }
 function stop(name){for(const v of shots.values())if(v.name===name)removeShot(v);}
 function sync(names=[]){
  wanted=[...new Set(names)].filter(name=>clips[name]);
  if(!live()){stopAll();return;}
  for(const [name,v]of loops)if(!wanted.includes(name)){release(v);loops.delete(name);}
  for(const name of wanted){let v=loops.get(name);if(!v){v=voice(name,true);if(v)loops.set(name,v);}if(v){boundary(v);if(!v.dead&&v.audio.paused)attempt(v);}}
  for(const v of shots.values())boundary(v);
 }
 function refresh(){if(!button)return;button.textContent=enabled?'音效：开':'音效：关';button.setAttribute('aria-pressed',String(enabled));button.title=enabled?'关闭游戏音效':'开启游戏音效';}
 button?.addEventListener('click',()=>{enabled=!enabled;if(!enabled)stopAll();else sync(wanted);refresh();});
 function unlock(){if(!live())return;for(const v of [...loops.values(),...shots.values()]){v.blocked=false;if(v.audio.paused)attempt(v);}}
 document.addEventListener('pointerdown',unlock,{capture:true});document.addEventListener('keydown',unlock,{capture:true});
 window.addEventListener('blur',stopAll);window.addEventListener('pagehide',stopAll);document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAll();});
 refresh();return{play,sync,stop,stopAll};
}};
