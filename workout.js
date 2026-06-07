/* Training Program Generator — tb-workout · loads into #tbw-mount on the Webflow page */
(function(){
  if(document.getElementById('tbw')) return; // avoid double-mount
  var ff=document.createElement('link');ff.rel='stylesheet';ff.href='https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;1,9..144,500&family=Mulish:wght@400;600;700;800&display=swap';document.head.appendChild(ff);
  var st=document.createElement('style');st.textContent=`:root{--ink:#1d1530;--paper:#FBF6F1;--card:#fff;--muted:#6c6075;--line:#e9ddd4;
  --accent:#1C2F5E;--accent2:#B8860B;--soft:#eef1f7;--shadow:0 10px 30px rgba(28,47,94,.10);--shotbg:#FBF6F1;}
#tbw[data-sex="f"]{--ink:#2b2230;--paper:#FBF5F1;--muted:#6e5f68;--line:#ecddd6;
  --accent:#46243F;--accent2:#C0685C;--soft:#f6ebe6;--shadow:0 10px 30px rgba(70,36,63,.12);--shotbg:#F7E9E6;}
#tbw *{box-sizing:border-box}
#tbw{margin:0;background:var(--paper);color:var(--ink);font-family:"Mulish",sans-serif;line-height:1.55;
  background-image:radial-gradient(circle at 12% -10%,color-mix(in srgb,var(--accent) 7%,transparent),transparent 42%)}
#tbw .wrap{max-width:1000px;margin:0 auto;padding:28px 16px 90px}
#tbw h1, #tbw h2, #tbw h3, #tbw .serif{font-family:"Fraunces",serif}
#tbw .eyebrow{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--accent2);font-weight:800}
#tbw .head{text-align:center;margin-bottom:20px}
#tbw .head h1{font-size:clamp(27px,6vw,44px);line-height:1.08;margin:.25em 0 .15em;color:var(--accent)}
#tbw .head p{color:var(--muted);max-width:560px;margin:0 auto;font-size:15.5px}
#tbw .sexbar{display:flex;justify-content:center;margin:20px auto 4px;max-width:340px;border:1.5px solid var(--accent);border-radius:50px;overflow:hidden}
#tbw .sexbar button{flex:1;padding:13px 8px;border:0;background:transparent;font-weight:800;font-size:14px;color:var(--accent);cursor:pointer;font-family:"Mulish";transition:.2s}
#tbw .sexbar button.on{background:var(--accent);color:#fff}
#tbw .card{background:var(--card);border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow)}
#tbw .form{padding:22px;margin-top:20px}
#tbw .grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
@media(max-width:640px){#tbw .grid{grid-template-columns:1fr;gap:16px}}
#tbw .field label{display:block;font-weight:800;font-size:13px;letter-spacing:.3px;margin-bottom:8px}
#tbw .opts{display:flex;flex-wrap:wrap;gap:8px}
#tbw .chip{padding:10px 14px;border:1.4px solid var(--line);border-radius:40px;background:var(--paper);cursor:pointer;font-weight:600;font-size:14px;transition:.15s;-webkit-tap-highlight-color:transparent}
#tbw .chip:active{transform:scale(.96)}
#tbw .chip.sel{background:var(--accent);color:#fff;border-color:var(--accent)}
#tbw .femonly{display:none}
#tbw[data-sex="f"] .femonly{display:block}
#tbw .gen{display:block;width:100%;margin-top:20px;padding:17px;border:0;border-radius:12px;background:var(--accent);color:#fff;font-family:"Fraunces";font-weight:700;font-size:19px;cursor:pointer;transition:.2s}
#tbw .gen:active{transform:scale(.99)}
#tbw .gen .a2{color:var(--accent2)}
#tbw .out{margin-top:26px;display:none}
#tbw .note{background:var(--soft);border-left:4px solid var(--accent2);border-radius:10px;padding:13px 16px;font-size:14.5px;margin-bottom:18px}
#tbw .note b{color:var(--accent)}
#tbw .planhead{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:8px;margin-bottom:4px}
#tbw .planhead h2{font-size:25px;color:var(--accent);margin:0}
#tbw .summary{color:var(--muted);font-size:13.5px}
#tbw .btns{display:flex;gap:10px;flex-wrap:wrap;margin:12px 0 22px}
#tbw .btns button{padding:11px 16px;border:1.4px solid var(--accent);background:transparent;color:var(--accent);border-radius:40px;font-weight:700;font-size:13.5px;cursor:pointer;font-family:"Mulish"}
#tbw .btns button:active{background:var(--accent);color:#fff}
#tbw details.block{margin-bottom:18px;border:1px solid var(--line);border-radius:14px;background:var(--card);overflow:hidden}
#tbw details.block>summary{cursor:pointer;list-style:none;padding:15px 18px;font-family:"Fraunces";font-weight:700;font-size:17px;color:var(--accent);display:flex;justify-content:space-between;align-items:center}
#tbw details.block>summary::-webkit-details-marker{display:none}
#tbw details.block>summary .cv{font-size:13px;font-family:"Mulish";color:var(--accent2);font-weight:800}
#tbw details.block .inner{padding:0 18px 16px}
#tbw .warmrow{display:flex;gap:10px;padding:9px 0;border-top:1px dashed var(--line);font-size:14px}
#tbw .warmrow b{color:var(--accent)}
#tbw .day{margin-bottom:16px;overflow:hidden}
#tbw .dtop{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;background:var(--accent);color:#fff}
#tbw .dtop h3{margin:0;font-size:18px}
#tbw .dtop .tag{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:color-mix(in srgb,var(--accent2) 80%,#fff);font-weight:800}
#tbw .ex{display:grid;grid-template-columns:120px 1fr auto;gap:16px;align-items:center;padding:15px 18px;border-bottom:1px solid var(--line)}
#tbw .ex:last-child{border-bottom:0}
@media(max-width:640px){#tbw .ex{grid-template-columns:92px 1fr;gap:12px;padding:14px}
#tbw .ex .sets{grid-column:1/-1;text-align:left;border-top:1px dashed var(--line);padding-top:8px}}
#tbw .shot{position:relative;border-radius:12px;border:1px solid var(--line);background:var(--shotbg);aspect-ratio:4/5;overflow:hidden}
#tbw .fig{position:absolute;inset:8px;background:var(--accent);-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center}
#tbw .fig.end{opacity:0;transition:opacity .3s}
#tbw .shot:hover .fig.end{opacity:1}
#tbw .badge{position:absolute;left:6px;bottom:6px;background:color-mix(in srgb,var(--accent) 88%,#000);color:#fff;font-size:8.5px;font-weight:800;letter-spacing:.5px;padding:3px 7px;border-radius:20px;z-index:2}
#tbw .shot:hover .badge::after{content:" END"}
#tbw .badge::after{content:" START"}
#tbw .ph{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;aspect-ratio:4/5;border-radius:12px;background:var(--shotbg);border:1px dashed var(--accent2);color:var(--accent2);text-align:center;padding:6px}
#tbw .ph .ico{font-size:26px;opacity:.8}
#tbw .ph .t{font-size:9px;font-weight:800;letter-spacing:.4px;line-height:1.2}
#tbw .exname{font-family:"Fraunces";font-weight:700;font-size:17px;color:var(--ink)}
#tbw .exmeta{font-size:11.5px;color:var(--accent2);font-weight:800;letter-spacing:.4px;text-transform:uppercase;margin:2px 0 6px}
#tbw .exinstr{font-size:13.5px;color:var(--muted)}
#tbw .exinstr b{color:var(--ink)}
#tbw .swap{font-size:11px;border:1px solid var(--line);background:var(--paper);border-radius:30px;padding:5px 11px;cursor:pointer;color:var(--muted);margin-top:8px}
#tbw .swap:active{border-color:var(--accent2);color:var(--accent)}
#tbw .sets{text-align:right;min-width:92px}
#tbw .sets .s{font-family:"Fraunces";font-weight:700;font-size:21px;color:var(--accent)}
#tbw .sets .r{font-size:12px;color:var(--muted)}
#tbw .progtbl{width:100%;border-collapse:collapse;font-size:13.5px;margin-top:4px}
#tbw .progtbl td, #tbw .progtbl th{border:1px solid var(--line);padding:8px 10px;text-align:left}
#tbw .progtbl th{background:var(--soft);color:var(--accent);font-weight:800}
#tbw .cta{padding:24px;text-align:center;background:var(--accent);color:#fff;border-radius:18px;margin-top:8px}
#tbw .cta h3{margin:.1em 0 .3em;font-size:22px}
#tbw .cta p{color:#e8e2da;margin:.2em auto;max-width:520px;font-size:14.5px}
#tbw .cta .pill{display:inline-block;margin-top:14px;background:var(--accent2);color:#fff;padding:12px 22px;border-radius:40px;font-weight:800;font-size:14px;text-decoration:none}
#tbw .disc{font-size:11.5px;color:var(--muted);text-align:center;margin-top:16px;font-style:italic}
#tbw .reveal{opacity:0;transform:translateY(12px);animation:rise .5s forwards}
@keyframes rise{to{opacity:1;transform:none}}
#tbw .restore{background:var(--soft);border:1px solid var(--line);border-radius:12px;padding:12px 16px;margin-top:16px;font-size:14px;display:none;align-items:center;justify-content:space-between;gap:10px}
#tbw .restore button{border:0;background:var(--accent);color:#fff;border-radius:30px;padding:9px 16px;font-weight:700;cursor:pointer;font-family:"Mulish";font-size:13px}
#tbw .a2h{display:none;margin-top:18px;background:var(--soft);border:1px dashed var(--accent2);border-radius:12px;padding:12px 16px;font-size:13.5px;color:var(--ink);line-height:1.55}
#tbw .a2h b{color:var(--accent)}
#tbw .figp{display:none}
@media print{#tbw, #tbw *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}
#tbw .form, #tbw .sexbar, #tbw .btns, #tbw .swap, #tbw .restore, #tbw .gen, #tbw .a2h{display:none!important}
#tbw .shot:hover .fig.end{opacity:0}
#tbw .badge{display:none!important}
#tbw{background:#fff}
#tbw .wrap{padding:0!important;max-width:none}
#tbw .card,#tbw .day{box-shadow:none!important;margin:0 0 6px!important;break-inside:auto}
#tbw .dtop{break-after:avoid;page-break-after:avoid}
#tbw .ex{break-inside:avoid!important;page-break-inside:avoid!important}
#tbw details.block,#tbw .cta,#tbw .note{break-inside:avoid!important;page-break-inside:avoid!important}
#tbw details.block .inner{display:block!important}
#tbw .reveal{opacity:1!important;transform:none!important;animation:none!important}
#tbw .shot{aspect-ratio:auto!important;height:128px}
#tbw .fig{display:none!important}
#tbw .figp{display:block!important;position:absolute;inset:8px;width:calc(100% - 16px);height:calc(100% - 16px);object-fit:contain}}`;document.head.appendChild(st);
  ['apple-mobile-web-app-capable','mobile-web-app-capable'].forEach(function(n){var m=document.createElement('meta');m.setAttribute('name',n);m.setAttribute('content','yes');document.head.appendChild(m);});
  var __mt=document.createElement('meta');__mt.setAttribute('name','apple-mobile-web-app-title');__mt.setAttribute('content','Workouts');document.head.appendChild(__mt);
  try{var __wu=location.origin+'/workout-generator';var __MAN={name:'Workout Generator',short_name:'Workouts',description:'Build a hormone-aware weekly training program.',id:__wu,start_url:__wu,scope:__wu,display:'standalone',background_color:'#FBF6F1',theme_color:'#1C2F5E',icons:[{src:'https://cdn.jsdelivr.net/gh/mingas/tb-workout@main/icon_192.png',sizes:'192x192',type:'image/png'},{src:'https://cdn.jsdelivr.net/gh/mingas/tb-workout@main/icon_512.png',sizes:'512x512',type:'image/png'},{src:'https://cdn.jsdelivr.net/gh/mingas/tb-workout@main/icon_maskable_512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]};var __oldm=document.querySelector('link[rel="manifest"]');if(__oldm&&__oldm.parentNode)__oldm.parentNode.removeChild(__oldm);var __mb=new Blob([JSON.stringify(__MAN)],{type:'application/manifest+json'});var __ml=document.createElement('link');__ml.rel='manifest';__ml.href=URL.createObjectURL(__mb);document.head.appendChild(__ml);}catch(e){}
  var mount=document.getElementById('tbw-mount')||document.body;
  mount.innerHTML='<div id="tbw" data-sex="m">'+'<div class="wrap">\n  <div class="head">\n    <div class="eyebrow">Plain Hormones</div>\n    <h1 id="h1">Build a training plan that fits your hormones</h1>\n    <p id="sub">Answer a few questions and get a structured weekly program, built on recognised training science.</p>\n  </div>\n  <div class="sexbar">\n    <button id="bm" class="on" onclick="setSex(\'m\')">&#9794;&nbsp; Men</button>\n    <button id="bf" onclick="setSex(\'f\')">&#9792;&nbsp; Women</button>\n  </div>\n\n  <div id="restore" class="restore">\n    <span>Welcome back &mdash; want your last program?</span>\n    <button onclick="restoreLast()">Show last plan</button>\n  </div>\n\n  <div class="card form">\n    <div class="grid">\n      <div class="field"><label>Days per week</label><div class="opts" id="days"></div></div>\n      <div class="field"><label>Experience</label><div class="opts" id="exp"></div></div>\n      <div class="field"><label>Main goal</label><div class="opts" id="goal"></div></div>\n      <div class="field"><label>Equipment</label><div class="opts" id="equip"></div></div>\n      <div class="field femonly" style="grid-column:1/-1"><label>Life stage</label><div class="opts" id="stage"></div></div>\n    </div>\n    <button class="gen" onclick="generate(true)">Generate my program <span class="a2">&rarr;</span></button>\n  </div>\n\n  <div class="out" id="out"></div>\n  <div id="a2h" class="a2h"></div>\n</div>'+'</div>';

const IMG='https://cdn.jsdelivr.net/gh/lczarnec/everkinetic_modifications@master/images/';
const KEY='tb_workout_last_v1';
const S={sex:'m',days:'3',exp:'beg',goal:'muscle',equip:'gym',stage:'cycle'};
const CFG={
  days:[['3','3 days'],['4','4 days'],['5','5 days'],['6','6 days']],
  exp:[['beg','Beginner'],['int','Intermediate'],['adv','Advanced']],
  goal:[['strength','Strength'],['muscle','Build muscle'],['fatloss','Fat loss'],['general','General fitness']],
  equip:[['gym','Full gym'],['home','Home (dumbbells)'],['min','Minimal / bodyweight']],
  stage:[['cycle','Regular periods'],['peri','Perimenopause'],['meno','Menopause'],['post','Post-menopause']]
};
const LBL={beg:'Beginner',int:'Intermediate',adv:'Advanced',strength:'Strength',muscle:'Build muscle',fatloss:'Fat loss',general:'General fitness'};

function chips(id,key){const el=document.getElementById(id);el.innerHTML='';
  CFG[key].forEach(([v,l])=>{const b=document.createElement('div');b.className='chip'+(S[key]===v?' sel':'');
    b.textContent=l;b.onclick=()=>{S[key]=v;chips(id,key)};el.appendChild(b)})}
['days','exp','goal','equip','stage'].forEach(k=>chips(k,k));
function setSex(x){S.sex=x;document.getElementById('tbw').dataset.sex=x;
  document.getElementById('bm').classList.toggle('on',x==='m');
  document.getElementById('bf').classList.toggle('on',x==='f');
  document.getElementById('h1').textContent=x==='m'?'Build a training plan that supports your testosterone':'Build a training plan for this stage of your hormones';
  document.getElementById('sub').textContent=x==='m'?'Answer a few questions and get a structured weekly program, built around compound lifts and the recovery your hormones need.':'Answer a few questions and get a structured weekly program, built around strength training to protect muscle and bone as hormones shift.';}

/* ============ EXERCISE LIBRARY (verified Everkinetic stems; null = placeholder + rich text) ============
   pat: squat hinge pushH pushV pullH pullV lunge iso core
   eq:  gym | home | min   ·   lvl: 1 beginner-ok, 2 needs experience */
function e(name,pat,mus,eq,lvl,evk,instr){return {name,pat,mus,eq,lvl,evk,instr};}
const EX=[
 // ---- SQUAT ----
 e('Barbell Back Squat','squat','Quads, glutes',['gym'],2,'barbell_squat','Bar on upper back. Sit down and back until thighs reach about parallel, then drive up through mid-foot.'),
 e('Front Squat','squat','Quads, glutes',['gym'],2,'front_squat_with_barbell','Bar across the front of the shoulders, elbows high. Squat down with an upright torso, then stand.'),
 e('Hack Squat (machine)','squat','Quads',['gym'],1,'hack_squat_machine','Shoulders under the pads, feet mid-platform. Lower to about 90\u00b0, then press back up.'),
 e('Goblet / Dumbbell Squat','squat','Quads, glutes',['home','min'],1,'pile_squat_with_dumbbell','Hold a dumbbell at your chest. Squat down keeping the chest tall, then push the floor away to stand.'),
 e('Sumo Squat','squat','Quads, glutes, inner thigh',['gym','home'],1,'side_squats_with_barbell','Wide stance, toes turned out. Sit straight down keeping knees tracking over the toes, then stand.'),
 e('Single-Leg Squat','squat','Quads, glutes',['gym'],2,'single_leg_squat_with_barbell','Most weight on one leg. Lower under control, then drive up. Builds single-leg strength and balance.'),
 e('Narrow-Stance Hack Squat','squat','Quads',['gym'],1,'narrow_stance_hack_squats','Feet close together on the platform. Lower under control to bias the quads, then press up.'),
 e('Overhead Squat','squat','Quads, core, shoulders',['gym'],2,'one_leg_squat_with_barbell','Bar locked out overhead. Squat with control keeping the bar stacked over mid-foot.'),
 // ---- HINGE / GLUTE ----
 e('Romanian Deadlift','hinge','Hamstrings, glutes',['gym','home'],1,'romanian_dead_lift','Soft knees. Push the hips back, lower the weight down the thighs feeling the hamstrings, then stand tall.'),
 e('Dumbbell Deadlift','hinge','Hamstrings, back, glutes',['home','min'],1,'dumbbell_dead_lifts','Hinge at the hips with a flat back, dumbbells close to the legs. Stand by driving the hips forward.'),
 e('Good Morning','hinge','Hamstrings, lower back',['gym'],2,'barbell_good_mornings','Bar on the back, soft knees. Hinge forward with a flat back until you feel the hamstrings, then stand.'),
 e('Smith-Machine Deadlift','hinge','Hamstrings, glutes, back',['gym'],1,'smith_machine_dead_lifts','Fixed bar path. Hinge and lift with a flat back \u2014 a good controlled option for learning the hinge.'),
 e('Back Extension','hinge','Lower back, glutes',['gym'],1,'hyperextensions','On the bench, hinge down then squeeze the glutes to lift the torso in line with the legs. Don\u2019t over-arch.'),
 e('Cable Glute Kickback','hinge','Glutes',['gym'],1,'one_legged_cable_kickback','Cable on the ankle. Drive the leg back and up squeezing the glute, then return slowly. One of the best glute isolators.'),
 e('Hip Thrust','hinge','Glutes',['gym','home'],1,null,'<b>Setup:</b> Upper back against a bench, a weight over the hips, feet flat and shoulder-width. <b>Movement:</b> Drive through the heels and push the hips up until the torso is flat, squeeze the glutes hard, then lower under control. <b>Cue:</b> Ribs down, chin tucked \u2014 push with the glutes, not the lower back. A top exercise for glutes and hip strength.'),
 e('Glute Bridge','hinge','Glutes',['home','min'],1,null,'<b>Setup:</b> Lie on your back, knees bent, feet flat and close to your hips. <b>Movement:</b> Press through the heels and lift the hips until the body forms a straight line from knees to shoulders, squeeze, then lower. <b>Cue:</b> Keep the core braced so the work stays in the glutes, not the lower back.'),
 e('Cable Pull-Through','hinge','Glutes, hamstrings',['gym'],1,null,'<b>Setup:</b> Face away from a low cable, rope between the legs, slight knee bend. <b>Movement:</b> Hinge at the hips letting the rope travel back, then drive the hips forward to stand tall and squeeze the glutes. <b>Cue:</b> It\u2019s a hip hinge, not a squat \u2014 movement comes from the hips.'),
 e('Single-Leg RDL','hinge','Hamstrings, glutes, balance',['home','min'],2,null,'<b>Setup:</b> Stand on one leg holding a weight, soft knee. <b>Movement:</b> Hinge at the hip lowering the weight as the free leg extends behind you, then return to standing. <b>Cue:</b> Keep the hips level and the back flat; move slowly for balance.'),
 // ---- PUSH HORIZONTAL (chest) ----
 e('Barbell Bench Press','pushH','Chest, triceps',['gym'],1,'bench_press','Lower the bar to mid-chest with control, elbows about 45\u00b0, then press back up over the shoulders.'),
 e('Dumbbell Bench Press','pushH','Chest, triceps',['home'],1,'bench_press_dumbbell','Press two dumbbells from chest level to over the shoulders, then lower under control.'),
 e('Incline Barbell Press','pushH','Upper chest, shoulders',['gym'],1,'incline_bench_press','On an inclined bench, lower the bar to the upper chest, then press up. Targets the upper chest.'),
 e('Incline Dumbbell Press','pushH','Upper chest, shoulders',['home'],1,'dumbbell_incline_bench_press','On an incline, press dumbbells from the upper chest to over the shoulders, lower under control.'),
 e('Decline Bench Press','pushH','Lower chest, triceps',['gym'],1,'decline_barbell_bench_press','On a decline, lower the bar to the lower chest and press up. Biases the lower chest.'),
 e('Chest Dip','pushH','Chest, triceps',['gym','min'],2,'chest_dips','Lean slightly forward on the bars, lower until you feel a stretch in the chest, then press up.'),
 e('Press-up','pushH','Chest, triceps',['min'],1,'push_ups','Hands under the shoulders, body in a straight line. Lower the chest toward the floor, then push back up.'),
 e('Machine Chest Press','pushH','Chest, triceps',['gym'],1,'decline_chest_press','Press the handles forward to full extension, then return slowly. A beginner-friendly pressing option.'),
 // ---- PUSH VERTICAL (shoulders) ----
 e('Overhead Press','pushV','Shoulders, triceps',['gym'],1,'seated_military_press','Press the bar overhead in a straight line, ribs down, finishing with the arms locked overhead.'),
 e('Dumbbell Shoulder Press','pushV','Shoulders, triceps',['home','min'],1,'dumbbell_shoulder_press','Press two dumbbells from shoulder height to overhead, then lower under control.'),
 e('Arnold Press','pushV','Shoulders',['home'],2,'arnold_press','Start with palms facing you; rotate the palms out as you press overhead. Hits all three delt heads.'),
 e('One-Arm Shoulder Press','pushV','Shoulders, core',['home','min'],2,'one_arm_dumbbell_shoulder_press','Press one dumbbell overhead while bracing the core to resist leaning. Builds stability.'),
 e('Machine Shoulder Press','pushV','Shoulders',['gym'],1,'seated_shoulder_press_machine','Press the handles overhead along the fixed path, then lower. Easy to learn and control.'),
 // ---- PULL HORIZONTAL (rows) ----
 e('Bent-over Barbell Row','pullH','Back, biceps',['gym'],1,'reverse_grips_bent_over_barbell_rows','Hinge forward with a flat back. Pull the bar to the lower ribs, squeeze the shoulder blades, lower slowly.'),
 e('Seated Cable Row','pullH','Back, biceps',['gym'],1,'seated_cable_rows','Sit tall, pull the handle to your stomach leading with the elbows, squeeze the back, return slowly.'),
 e('T-Bar Row','pullH','Back, biceps',['gym'],1,'t_bar_rows','Hinge over the bar, pull it to the torso driving the elbows back, then lower under control.'),
 e('Inverted / Body Row','pullH','Back, biceps',['min'],1,'body_row','Under a sturdy bar, body straight. Pull the chest to the bar, then lower with control. Great bodyweight back move.'),
 e('Two-Dumbbell Row','pullH','Back, biceps',['home'],1,'rear_deltoid_row_dumbbell','Hinge forward, flat back. Pull both dumbbells to the ribs, squeeze, then lower under control.'),
 e('Wide-Grip Row','pullH','Upper back, rear delts',['gym'],1,'rear_deltoid_row_barbell','Pull a wide bar to the upper chest, elbows flared, to target the upper back and rear shoulders.'),
 e('One-Arm Dumbbell Row','pullH','Back, biceps',['home'],1,'one_arm_upright_row','One hand and knee on a bench, flat back. Pull the dumbbell to the hip, squeeze the back, lower slowly.'),
 // ---- PULL VERTICAL (pulldown / pull-up) ----
 e('Lat Pulldown','pullV','Back, biceps',['gym'],1,'wide_grip_lat_pull_down','Pull the bar to the upper chest leading with the elbows, then control the bar back up.'),
 e('Close-Grip Pulldown','pullV','Back, biceps',['gym'],1,'overhand_pull_down','Narrow grip, pull to the chest squeezing the lats, return slowly. Emphasises lower lats.'),
 e('Underhand Pulldown','pullV','Back, biceps',['gym'],1,'underhand_pull_down','Palms facing you, pull to the chest. The underhand grip brings in more biceps and lower lats.'),
 e('V-Bar Pulldown','pullV','Back, biceps',['gym'],1,'v_bar_pull_down','Neutral grip on the V-handle, pull to the chest, squeeze, return slowly.'),
 e('Pull-up / Chin-up','pullV','Back, biceps',['gym','home','min'],2,'chin_ups','Hang from the bar, pull until the chin clears, then lower all the way under control. Use a band to assist if needed.'),
 e('Wide-Grip Pull-up','pullV','Back',['gym','min'],2,'wide_grip_chin_up','Wide overhand grip. Pull the chest toward the bar, lower under control. Emphasises the upper-back width.'),
 // ---- LUNGE / UNILATERAL ----
 e('Barbell Lunge','lunge','Quads, glutes',['gym'],2,'barbell_lunges','Bar on the back. Step forward and drop the back knee toward the floor, then drive through the front heel.'),
 e('Dumbbell Lunge','lunge','Quads, glutes',['gym','home'],1,'dumbbell_lunges','Dumbbells at your sides. Step forward, lower the back knee, then drive back up through the front heel.'),
 e('Walking Lunge','lunge','Quads, glutes',['min'],1,'walking_lunges','Step forward into a lunge, then step through into the next lunge, keeping the torso tall.'),
 e('Reverse Lunge (DB)','lunge','Quads, glutes',['home','min'],1,'rear_lunges_with_dumbbell','Step backward into a lunge and drop the back knee, then drive through the front heel to stand. Easier on the knees.'),
 e('Reverse Lunge (BB)','lunge','Quads, glutes',['gym'],2,'rear_lunges_with_barbell','Bar on the back, step back into a lunge, then drive up through the front heel.'),
 e('Step-up (DB)','lunge','Quads, glutes',['home','min'],1,'step_ups_with_dumbbells','Step onto a sturdy box driving through the lead heel, stand tall, then lower under control.'),
 e('Step-up (BB)','lunge','Quads, glutes',['gym'],2,'step_ups_with_barbell','Bar on the back, step up onto the box through the lead heel, then lower with control.'),
 // ---- ISOLATION (arms / delts) ----
 e('Dumbbell Curl','iso','Biceps',['gym','home'],1,'biceps_curl_with_dumbbell','Elbows pinned, curl the weight up without swinging, then lower slowly.'),
 e('Alternating Curl','iso','Biceps',['gym','home'],1,'alternating_bicep_curl_with_dumbbell','Curl one arm at a time with control, keeping the elbows still.'),
 e('Hammer Curl','iso','Biceps, forearms',['gym','home'],1,'bicep_hammer_curl_with_dumbbell','Neutral (thumbs-up) grip, curl up and lower slowly. Hits the biceps and forearms.'),
 e('Barbell Curl','iso','Biceps',['gym'],1,'bicep_curls_with_barbell','Curl the bar up keeping the elbows fixed at your sides, then lower under control.'),
 e('Reverse Curl','iso','Forearms, biceps',['gym','home'],1,'biceps_curl_reverse_with_dumbbells','Palms-down grip, curl up and lower slowly. Targets the forearms and outer biceps.'),
 e('Preacher Curl','iso','Biceps',['gym'],1,'preacher_curl_with_barbell','Arms on the pad, curl up then lower fully. The pad stops you swinging \u2014 strict biceps work.'),
 e('Triceps Pushdown','iso','Triceps',['gym'],1,'triceps_pushdown_with_cable','Elbows tucked, extend the arms fully down, then control the return.'),
 e('Overhead Cable Extension','iso','Triceps',['gym'],1,'low_triceps_extension_with_cable','Extend the arms fully against the cable, keeping the elbows pointing forward.'),
 e('Bench Dip','iso','Triceps',['home','min'],1,'bench_dips','Hands on a bench behind you, lower the hips by bending the elbows, then press back up.'),
 e('Skull Crusher','iso','Triceps',['gym'],2,'decline_ez_bar_triceps_extension_with_barbell','Lying down, lower the bar toward the forehead by bending the elbows, then extend. Keep elbows still.'),
 e('Overhead DB Extension','iso','Triceps',['home'],1,'standing_triceps_extension','Hold one dumbbell overhead, lower behind the head by bending the elbows, then extend.'),
 e('Lateral Raise','iso','Side delts',['gym','home'],1,'lateral_dumbbell_raises','Raise the dumbbells out to shoulder height with a soft elbow, then lower slowly.'),
 e('Front Raise','iso','Front delts',['gym','home'],1,'front_raises','Raise the weight forward to shoulder height with a soft elbow, then lower under control.'),
 e('Rear Delt Raise','iso','Rear delts',['gym','home'],1,'lying_rear_lateral_raise','Bent forward, raise the dumbbells out to the sides squeezing the rear shoulders, then lower.'),
 e('Bent-over Rear Delt Fly','iso','Rear delts',['gym','home'],1,'bent_over_rear_deltoid_raise_with_head_on_bench','Chest on a bench, raise the dumbbells out to the sides for the rear delts, then lower slowly.'),
 e('Upright Row','iso','Shoulders, traps',['gym','home'],1,'dumbbell_upright_row','Pull the weight up the front of the body to chest height, elbows leading, then lower.'),
 // ---- CORE ----
 e('Plank','core','Core',['gym','home','min'],1,'side_plank','Forearm down, body in a straight line, hips lifted, brace the abs. Hold, then switch sides.'),
 e('Crunch','core','Abs',['gym','home','min'],1,'crunches','Lie on your back, curl the shoulders off the floor squeezing the abs, then lower slowly.'),
 e('Decline Crunch','core','Abs',['gym'],1,'decline_crunch','On a decline bench, curl up squeezing the abs, then lower under control for a bigger range.'),
 e('Cross-Body Crunch','core','Abs, obliques',['gym','home','min'],1,'cross_body_crunch','Bring opposite elbow toward the opposite knee, alternating, to work the obliques.'),
 e('Hanging / Bench Leg Raise','core','Lower abs',['gym','home'],1,'flat_bench_leg_raises','Lift the legs with control while keeping the lower back flat, then lower slowly.'),
 e('Ab Wheel Rollout','core','Core',['gym','home'],2,'ab_rollout_on_knees_with_barbell','From the knees, roll out keeping the core braced and back flat, then pull back in. Advanced \u2014 stay controlled.'),
 e('Cable Crunch','core','Abs',['gym'],1,'seated_ab_crunch_with_cable','Kneeling, crunch down against the cable by flexing the abs, then return slowly.'),
 e('Bodyweight Squat','squat','Quads, glutes',['home','min'],1,null,'<b>Setup:</b> Stand tall, feet shoulder-width, arms out in front for balance. <b>Movement:</b> Sit the hips down and back until the thighs reach about parallel, chest up and heels down, then drive up. <b>Cue:</b> Push the knees out slightly and keep the weight in the mid-foot. Add a slow 3-second lower or a pause at the bottom to make it harder \u2014 no equipment needed.'),
 e('Pike Push-up','pushV','Shoulders, triceps',['home','min'],1,null,'<b>Setup:</b> From a push-up position, walk the feet in and lift the hips so the body forms an upside-down V, head pointing down. <b>Movement:</b> Bend the elbows to lower the crown of the head toward the floor, then press back up. <b>Cue:</b> The more vertical the torso, the more it trains the shoulders. A scalable, equipment-free overhead press.'),
 e('Doorway / Towel Row','pullH','Back, biceps',['min'],1,null,'<b>Setup:</b> Loop a sturdy towel around a fixed pole or the latch-side edge of a securely closed door; hold both ends, lean back with straight arms, feet close to the base. <b>Movement:</b> Pull the chest toward your hands, driving the elbows back and squeezing the shoulder blades, then lower slowly. <b>Cue:</b> The more horizontal the body, the harder it is \u2014 a no-equipment way to train the back.'),
 e('Dumbbell Pullover','pullV','Lats, chest',['home','gym'],1,'straight_arm_dumbbell_pullover','<b>Setup:</b> Lie back on a bench holding one dumbbell over the chest with both hands. <b>Movement:</b> With a slight bend in the elbows, lower the weight back behind the head until you feel a stretch through the lats, then pull it back over the chest. <b>Cue:</b> Move from the shoulders, not the elbows \u2014 a great lat builder when you have no pull-up bar.'),
];

/* ============ SPLITS ============ */
function splitPlan(sex,days){
  const D={
   '3':[['Full Body A',['squat','pushH','pullH','pushV','core']],
        ['Full Body B',['hinge','pullV','pushH','lunge','core']],
        ['Full Body C',['squat','pushV','pullH','iso','core']]],
   '4':[['Upper A',['pushH','pullV','pushV','pullH','iso']],['Lower A',['squat','hinge','lunge','core']],
        ['Upper B',['pushV','pullH','pushH','iso','iso']],['Lower B',['hinge','squat','lunge','core']]],
   '5':[['Push',['pushH','pushV','iso','iso']],['Pull',['pullV','pullH','iso','core']],
        ['Legs',['squat','hinge','lunge','core']],['Upper',['pushH','pullH','pushV','iso']],
        ['Lower',['hinge','squat','lunge','core']]],
   '6':[['Push A',['pushH','pushV','iso','iso']],['Pull A',['pullV','pullH','iso','core']],
        ['Legs A',['squat','hinge','lunge','core']],['Push B',['pushV','pushH','iso','iso']],
        ['Pull B',['pullH','pullV','iso','core']],['Legs B',['hinge','squat','lunge','core']]]
  };
  let plan=JSON.parse(JSON.stringify(D[days]));
  if(sex==='f')plan.forEach(d=>{ // women: ensure a hinge/glute emphasis in lower/full days
    if(!d[1].includes('hinge')&&d[1].includes('squat')) d[1].splice(d[1].indexOf('squat')+1,0,'hinge');
  });
  if(S.goal==='fatloss')plan.forEach(d=>d[1].push('cond'));
  return plan;
}
function poolFor(pat){
  let p=EX.filter(e=>e.pat===pat&&e.eq.includes(S.equip));
  if(S.exp==='beg'){const b=p.filter(e=>e.lvl===1);if(b.length)p=b;}
  if(!p.length)p=EX.filter(e=>e.pat===pat); // fallback ignore equip
  return p;
}
function pick(pat,used){
  let p=poolFor(pat).filter(e=>!used.has(e.name));
  if(!p.length)p=poolFor(pat);
  // women: bias hinge slot toward glute-focused choices
  if(S.sex==='f'&&pat==='hinge'){const g=p.filter(e=>/glute/i.test(e.mus));if(g.length&&Math.random()<.7)p=g;}
  return p[Math.floor(Math.random()*p.length)];
}
function setsReps(){
  const base={strength:[4,'3\u20135 reps','2\u20135 min rest'],muscle:[3,'8\u201312 reps','60\u201390 s rest'],
    fatloss:[3,'12\u201315 reps','30\u201360 s rest'],general:[3,'8\u201312 reps','60\u201390 s rest']}[S.goal];
  let sets=base[0]+(S.exp==='adv'?1:0)-(S.exp==='beg'&&base[0]>3?1:0);
  return {sets,reps:base[1],rest:base[2]};
}
function warmups(dname){
  const lower=/Lower|Legs|Full/.test(dname), upper=/Upper|Push|Pull/.test(dname);
  const L=[['5 min easy cardio','Bike, brisk walk or row to raise the heart rate'],
           ['Leg swings &amp; hip circles','10 each side to open the hips'],
           ['Bodyweight squats','2 \u00d7 10, slow and controlled'],
           ['Glute bridges','2 \u00d7 12 to switch the glutes on']];
  const U=[['5 min easy cardio','Bike, brisk walk or row to raise the heart rate'],
           ['Arm circles &amp; band pull-aparts','15 each to open the shoulders'],
           ['Push-ups (knees ok)','1 \u00d7 8\u201310 to prime the chest and triceps'],
           ['Light first set','1 set of your first lift at ~50% to groove the movement']];
  return lower&&!upper?L:upper&&!lower?U:[L[0],L[1],U[1],['Light first set','1 set of your first exercise at ~50% to warm the joints']];
}

function buildPlan(){
  const plan=splitPlan(S.sex,S.days);const sr=setsReps();const used=new Set();
  return plan.map(([dname,slots])=>{used.clear();
    const ex=slots.filter(p=>p!=='cond').map(p=>{const e=pick(p,used);if(e)used.add(e.name);return e;}).filter(Boolean);
    const cond=slots.includes('cond');
    return {dname,ex,cond,sr};
  });
}

function shot(e){
  if(e.evk){const u1=IMG+e.evk+'_1.png',u2=IMG+e.evk+'_2.png';
    return `<div class="shot"><div class="fig" style="-webkit-mask-image:url('${u1}');mask-image:url('${u1}')"></div>
      <div class="fig end" style="-webkit-mask-image:url('${u2}');mask-image:url('${u2}')"></div><img class="figp" src="${u1}" alt="${e.name}"><span class="badge"></span></div>`;}
  return `<div class="ph"><span class="ico">&#127947;</span><span class="t">ILLUSTRATION<br>COMING SOON</span></div>`;
}
function exRow(e,sr,di,xi){
  return `<div class="ex" data-d="${di}" data-i="${xi}">${shot(e)}
    <div><div class="exname">${e.name}</div><div class="exmeta">${e.mus}</div>
    <div class="exinstr">${e.instr}</div>
    <button class="swap" onclick="swap(this,'${e.pat}')">&#8634; swap exercise</button></div>
    <div class="sets"><div class="s">${sr.sets}</div><div class="r">sets &middot; ${sr.reps}<br>${sr.rest}</div></div></div>`;
}

function render(model){
  const out=document.getElementById('out');const sr=model[0].sr;
  let html=`<div class="note reveal">${noteText()}</div>
  <div class="planhead"><h2>Your weekly program</h2>
  <span class="summary">${S.sex==='m'?'Men':'Women'} &middot; ${S.days} days/week &middot; ${LBL[S.exp]} &middot; ${LBL[S.goal]}</span></div>
  <div class="btns"><button onclick="generate(true)">&#8635; Regenerate plan</button><button onclick="window.print()">&#8681; Save as PDF</button></div>`;

  // Warm-up (collapsible; open for beginners, closed for advanced)
  const wOpen=S.exp!=='adv';
  html+=`<details class="block" ontoggle="this.querySelector('.cv').textContent=this.open?'tap to skip':'tap to expand'" ${wOpen?'open':''}><summary>Warm-up <span class="cv">${wOpen?'tap to skip':'tap to expand'}</span></summary><div class="inner">
    <p style="font-size:13.5px;color:var(--muted);margin:.2em 0 .4em">5\u20138 minutes. ${S.exp==='adv'?'You likely have your own \u2014 skip if so.':'Don\u2019t skip this \u2014 it lowers injury risk and improves your first lifts.'}</p>`;
  warmups(model[0].dname).forEach(w=>html+=`<div class="warmrow"><b style="min-width:46%">${w[0]}</b><span style="color:var(--muted)">${w[1]}</span></div>`);
  html+=`</div></details>`;

  // Days
  model.forEach((d,i)=>{
    html+=`<div class="card day reveal" style="animation-delay:${i*60}ms"><div class="dtop"><h3>Day ${i+1} &mdash; ${d.dname}</h3><span class="tag">${d.ex.length+(d.cond?1:0)} exercises</span></div>`;
    d.ex.forEach((e,j)=>html+=exRow(e,sr,i,j));
    if(d.cond)html+=`<div class="ex"><div class="ph"><span class="ico">&#128692;</span><span class="t">CONDITIONING</span></div>
      <div><div class="exname">Conditioning Finisher</div><div class="exmeta">Heart, full body</div>
      <div class="exinstr">8\u201312 min of intervals \u2014 bike, row, brisk incline walk or a circuit. Hard but controlled.</div></div>
      <div class="sets"><div class="s">8\u201312</div><div class="r">minutes</div></div></div>`;
    html+=`</div>`;
  });

  // Progression (collapsible)
  html+=`<details class="block" ontoggle="this.querySelector('.cv').textContent=this.open?'tap to close':'tap to open'"><summary>How to progress &mdash; week by week <span class="cv">tap to open</span></summary><div class="inner">
    <p style="font-size:13.5px;color:var(--muted);margin:.2em 0 .5em">${progText()}</p>
    <table class="progtbl"><tr><th>Weeks</th><th>What to do</th></tr>
    <tr><td>1\u20132</td><td>Learn the movements. Pick a weight you can control for the listed reps with 1\u20132 reps left in the tank.</td></tr>
    <tr><td>3\u20134</td><td>Add reps each session until you reach the top of the range on every set.</td></tr>
    <tr><td>5\u20136</td><td>Once you hit the top reps, add a small amount of weight and drop back to the bottom of the range. Repeat.</td></tr>
    <tr><td>Every 6\u20138 wks</td><td>Take a lighter week (about half the sets) to recover, then continue. Re-generate for fresh exercises any time.</td></tr></table>
  </div></details>`;

  // CTA
  html+=`<div class="cta reveal"><div class="eyebrow" style="color:var(--accent2)">Next step</div>
    <h3>${S.sex==='m'?'Make sure your hormones aren\u2019t holding you back':'Know what\u2019s happening with your hormones'}</h3>
    <p>${S.sex==='m'?'Training hard but still flat, tired or stalling? Take the free testosterone symptom check, or see which blood tests to ask for.':'Take the free hormone quiz, or see which blood tests are worth asking for in perimenopause and menopause.'}</p>
    <a class="pill" href="${S.sex==='m'?'/testosterone-test':'/hormone-quiz'}">&rarr; Free check &middot; no email needed</a></div>
    <div class="disc">Exercise illustrations: Everkinetic, CC-BY-SA 3.0 (recoloured). General guidance built on recognised training principles (ACSM / NSCA / peer-reviewed research) \u2014 not medical or individual advice. Check with a professional before starting if you have injuries or health conditions.</div>`;

  out.innerHTML=html;out.style.display='block';
}
function noteText(){
  if(S.sex==='m')return `<b>Why this plan:</b> compound lifts drive the biggest hormonal response, but recovery is where testosterone is protected \u2014 more sessions isn\u2019t always better. This balances hard training and rest for <b>${LBL[S.goal].toLowerCase()}</b>, with each major muscle trained about twice a week.`;
  if(S.stage==='cycle')return `<b>Why this plan:</b> with <b>regular cycles</b>, resistance training is the best investment you can make \u2014 it builds the muscle, strength and bone density that protect you for decades and supports steady energy across your cycle. This focuses on progressive strength work with strong hips and glutes.`;
  const stage={peri:'perimenopause',meno:'menopause',post:'post-menopause'}[S.stage];
  return `<b>Why this plan:</b> through <b>${stage}</b>, falling oestrogen makes it harder to hold muscle and bone. Strength training is the strongest lever you have \u2014 so this prioritises resistance work, hip and glute strength, and recovery, not endless cardio.`;
}
function progText(){
  return {strength:'Strength comes from lifting heavier over time. Keep reps low (3\u20135), rest fully, and add weight before reps.',
    muscle:'Muscle grows from doing a little more over time (progressive overload) \u2014 add reps, then weight.',
    fatloss:'Keep the weights challenging while you lose fat \u2014 that\u2019s what preserves muscle. Progress reps, then weight.',
    general:'Aim to do a little more than last time \u2014 an extra rep or a touch more weight \u2014 while keeping good form.'}[S.goal];
}

let CURRENT=null;
function saveState(){try{localStorage.setItem(KEY,JSON.stringify({S:{...S},model:CURRENT,t:Date.now()}));}catch(e){}}
function generate(save){
  CURRENT=buildPlan();
  render(CURRENT);
  if(save)saveState();
  document.getElementById('out').scrollIntoView({behavior:'smooth',block:'start'});
}
function swap(btn,pat){
  const exEl=btn.closest('.ex');const day=exEl.closest('.day');
  const di=+exEl.dataset.d, xi=+exEl.dataset.i;
  const used=new Set([...day.querySelectorAll('.exname')].map(n=>n.textContent));
  let p=poolFor(pat).filter(e=>!used.has(e.name));if(!p.length)p=poolFor(pat);
  const e=p[Math.floor(Math.random()*p.length)];if(!e)return;
  const sr=setsReps();
  if(CURRENT&&CURRENT[di])CURRENT[di].ex[xi]=e;
  exEl.outerHTML=exRow(e,sr,di,xi);
  saveState();
}
function restoreLast(){
  try{const d=JSON.parse(localStorage.getItem(KEY));if(!d)return;
    Object.assign(S,d.S);document.getElementById('tbw').dataset.sex=S.sex;
    document.getElementById('bm').classList.toggle('on',S.sex==='m');
    document.getElementById('bf').classList.toggle('on',S.sex==='f');
    setSex(S.sex);['days','exp','goal','equip','stage'].forEach(k=>chips(k,k));
    if(d.model){CURRENT=d.model;render(CURRENT);}else{generate(false);}
    document.getElementById('out').scrollIntoView({behavior:'smooth',block:'start'});
    document.getElementById('restore').style.display='none';
  }catch(e){}
}
// On load: offer to restore last plan (works when opened as a real file in your browser)
(function(){try{if(localStorage.getItem(KEY))document.getElementById('restore').style.display='flex';}catch(e){}})();

// Add-to-Home-Screen hint (mobile only; hidden once installed/standalone)
(function(){try{var el=document.getElementById('a2h');if(!el)return;
  var standalone=(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||window.navigator.standalone===true;
  if(standalone)return;
  var ua=navigator.userAgent||'';var ios=/iPhone|iPad|iPod/i.test(ua);var android=/Android/i.test(ua);
  if(!ios&&!android)return;
  el.innerHTML=ios
    ?'<b>&#128241; Add this page to your Home Screen</b> for quick access: tap the <b>Share</b> icon, then <b>Add to Home Screen</b>. It remembers your last plan.'
    :'<b>&#128241; Add this page to your Home Screen</b> for quick access: open the browser menu <b>&#8942;</b>, then <b>Add to Home screen</b>. It remembers your last plan.';
  el.style.display='block';
}catch(e){}})();

// Expose handlers used by inline onclick (script runs inside an IIFE)
window.setSex=setSex;window.generate=generate;window.swap=swap;window.restoreLast=restoreLast;

})();
