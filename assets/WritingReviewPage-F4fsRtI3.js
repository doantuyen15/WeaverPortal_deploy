import{ar as k,r,j as n}from"./vendor-BfZpPNdr.js";import{B as y,w as E}from"./firebase-jfwRJv3N.js";import{d as L,bg as j}from"./index-BtEj57VO.js";import"./ui-DfpM5-2S.js";import"./charts-eP7_7I19.js";const h=`<title>Summary and Table, Marked</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&display=swap">

<style>
/* ── Weaver Portal design tokens (.design-sync :root) + a derived dark set ── */
:root{
  --canvas:#fafbfc; --paper:#ffffff; --warm:#fff8f3; --warm-border:#fbe6d6;
  --ink:#1f2430; --ink-soft:#6b7280; --ink-muted:#9aa0aa; --ink-faint:#b8bcc4;
  --hair:#ecedef; --hair-soft:#f1f2f4;
  --brand:#f97316; --brand-tint:#ffedd5;
  --fix:#c2410c;
  --credit:#0d9488; --credit-ink:#0b6f66; --credit-tint:#e0f4f1;
  --cost:#d14343;   --cost-ink:#8f2b2b;   --cost-tint:#fdeaea;
  --sel:#eef8f6; --sel-edge:#0d9488;
  --ramp-1:#f3a3a3; --ramp-2:#dd6a6a; --ramp-3:#b93030;
  --meter-track:#ecedef; --meter-fill:#6b7280;
  --shadow-card:0 1px 2px #1018280d, 0 6px 16px -6px #1018281a;
  --shadow-tile:0 1px 2px #1018280a, 0 2px 5px -3px #1018280f;
  --shadow-pop:0 8px 28px #10182829;
  --radius:14px;
  --mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --canvas:#14171d; --paper:#1b1f28; --warm:#241b14; --warm-border:#3a2a1c;
    --ink:#eef0f4; --ink-soft:#a9b0bd; --ink-muted:#7e8595; --ink-faint:#626a79;
    --hair:#2b3038; --hair-soft:#232830;
    --brand:#fb923c; --brand-tint:#3a2410;
    --fix:#fb923c;
    --credit:#3dd6c0; --credit-ink:#9fe8dc; --credit-tint:#122b28;
    --cost:#f28585;   --cost-ink:#f6c9c9;   --cost-tint:#2e1c1c;
    --sel:#16352f; --sel-edge:#3dd6c0;
    --ramp-1:#7a3a3a; --ramp-2:#a84a4a; --ramp-3:#e07070;
    --meter-track:#2b3038; --meter-fill:#a9b0bd;
    --shadow-card:0 1px 2px #0006, 0 6px 16px -6px #0009;
    --shadow-tile:0 1px 2px #0004, 0 2px 5px -3px #0006;
    --shadow-pop:0 8px 28px #000a;
  }
}
:root[data-theme="dark"]{
  --canvas:#14171d; --paper:#1b1f28; --warm:#241b14; --warm-border:#3a2a1c;
  --ink:#eef0f4; --ink-soft:#a9b0bd; --ink-muted:#7e8595; --ink-faint:#626a79;
  --hair:#2b3038; --hair-soft:#232830;
  --brand:#fb923c; --brand-tint:#3a2410;
  --fix:#fb923c;
  --credit:#3dd6c0; --credit-ink:#9fe8dc; --credit-tint:#122b28;
  --cost:#f28585;   --cost-ink:#f6c9c9;   --cost-tint:#2e1c1c;
  --sel:#16352f; --sel-edge:#3dd6c0;
  --ramp-1:#7a3a3a; --ramp-2:#a84a4a; --ramp-3:#e07070;
  --meter-track:#2b3038; --meter-fill:#a9b0bd;
  --shadow-card:0 1px 2px #0006, 0 6px 16px -6px #0009;
  --shadow-tile:0 1px 2px #0004, 0 2px 5px -3px #0006;
  --shadow-pop:0 8px 28px #000a;
}

*{box-sizing:border-box}
body{
  margin:0; background:var(--canvas); color:var(--ink);
  font-family:"Be Vietnam Pro","Manrope","Inter",system-ui,sans-serif;
  font-weight:400; line-height:1.6; -webkit-font-smoothing:antialiased;
}
.wrap{max-width:1360px;margin:0 auto;padding:clamp(16px,2.6vw,26px) clamp(14px,2.6vw,24px) 30px}
h1,h2,h3{text-wrap:balance;margin:0;line-height:1.2}
p{margin:0}
.lbl{font-family:var(--mono);font-size:.625rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted)}

/* ── masthead ── */
.mast{display:flex;flex-wrap:wrap;gap:10px 20px;align-items:baseline;justify-content:space-between;margin-bottom:14px}
.mast .who{display:flex;flex-direction:column;gap:3px}
.eyebrow{font-size:.625rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:var(--brand)}
.mast h1{font-size:clamp(1.35rem,2.6vw,1.85rem);font-weight:900;letter-spacing:-.025em}
.stamp{font-family:var(--mono);font-size:.6875rem;letter-spacing:.05em;text-transform:uppercase;color:var(--ink-muted)}

/* ── tabs ── */
.tabs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;border-bottom:1px solid var(--hair)}
.tab{appearance:none;background:transparent;border:1px solid transparent;border-bottom:none;
  border-radius:10px 10px 0 0;padding:9px 15px;font:inherit;font-size:.875rem;font-weight:700;
  color:var(--ink-muted);cursor:pointer;margin-bottom:-1px;transition:color .15s,background .15s}
.tab:hover{color:var(--ink-soft)}
.tab:focus-visible{outline:2px solid var(--brand);outline-offset:-2px}
.tab[aria-selected="true"]{background:var(--paper);border-color:var(--hair);color:var(--ink);
  box-shadow:0 -2px 0 var(--brand) inset}
.tab .n{font-family:var(--mono);font-size:.6875rem;color:var(--ink-faint);margin-left:7px;font-weight:700}

/* ── 3-panel split ── */
.split{display:grid;gap:14px;grid-template-columns:minmax(0,1.06fr) minmax(0,1fr);align-items:stretch}
.rcol{display:grid;gap:14px;grid-template-rows:minmax(0,1.05fr) minmax(0,1fr);min-height:0}
.panel{background:var(--paper);border:1px solid var(--hair);border-radius:var(--radius);
  box-shadow:var(--shadow-card);display:flex;flex-direction:column;min-height:0;overflow:hidden}
.panel-head{display:flex;flex-direction:column;gap:10px;
  padding:13px 18px;border-bottom:1px solid var(--hair-soft);flex:0 0 auto}
.ph-top{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:baseline;justify-content:space-between}
.panel-head h2{font-size:.9375rem;font-weight:800;letter-spacing:-.01em}
.panel-body{padding:16px 18px 20px;overflow-y:auto;flex:1 1 auto;min-height:0}
@media(min-width:1040px){
  .split{height:calc(100dvh - 168px);min-height:620px}
}
@media(max-width:1039px){
  .split{grid-template-columns:1fr;height:auto}
  .rcol{grid-template-rows:auto auto}
  .panel-body{overflow:visible}
}

/* ── official score profile ── */
.score{display:flex;align-items:baseline;gap:5px;white-space:nowrap}
.score .v{font-family:var(--mono);font-size:1.75rem;font-weight:800;color:var(--fix);
  letter-spacing:-.03em;font-variant-numeric:tabular-nums;line-height:1}
.score .sep{font-family:var(--mono);font-size:1.1rem;font-weight:700;color:var(--fix);opacity:.75}
.score .d{font-family:var(--mono);font-size:.8125rem;font-weight:700;color:var(--ink-muted)}

/* ── header pills ── */
.pills{display:flex;flex-wrap:wrap;gap:5px}
.pill{appearance:none;background:transparent;border:1px solid var(--hair);border-radius:999px;
  padding:4px 10px;font:inherit;font-size:.6875rem;font-weight:700;color:var(--ink-soft);
  cursor:pointer;display:inline-flex;align-items:center;gap:6px;line-height:1.35;
  transition:background .14s,border-color .14s,color .14s}
.pill:hover{border-color:var(--ink-faint);color:var(--ink)}
.pill:focus-visible{outline:2px solid var(--brand);outline-offset:2px}
.pill .v{font-family:var(--mono);font-variant-numeric:tabular-nums;color:var(--ink-muted);font-weight:700}
.pill .v.absent{color:var(--ink-faint);font-style:italic}
.pill[aria-pressed="true"]{background:var(--brand-tint);border-color:var(--brand);color:var(--fix)}
.pill[aria-pressed="true"] .v{color:var(--fix)}
.pill-rows{display:flex;flex-direction:column;gap:7px}
.pill-row{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.pill-k{font-family:var(--mono);font-size:.5625rem;font-weight:700;letter-spacing:.09em;
  text-transform:uppercase;color:var(--ink-faint);min-width:50px}

/* ── task line ── */
.task{color:var(--ink-soft);font-size:.8125rem;max-width:64ch;margin-bottom:14px;
  padding-bottom:12px;border-bottom:1px solid var(--hair-soft)}

/* ── the stimulus, collapsed ── */
.src{border:1px solid var(--hair);border-radius:10px;margin-bottom:16px;background:var(--canvas)}
.src>summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:10px;
  padding:9px 12px;border-radius:9px}
.src>summary::-webkit-details-marker{display:none}
.src>summary:focus-visible{outline:2px solid var(--brand);outline-offset:2px}
.src>summary:hover .src-t{color:var(--ink)}
.src-t{font-size:.75rem;font-weight:800;color:var(--ink-soft);letter-spacing:-.005em}
.src>summary .lbl{margin-left:auto}
.chev{width:8px;height:8px;border-right:1.5px solid var(--ink-faint);border-bottom:1.5px solid var(--ink-faint);
  transform:rotate(45deg);transition:transform .16s ease;flex:none;margin-right:2px}
.src[open]>summary .chev{transform:rotate(-135deg)}
.src[open]>summary{border-bottom:1px solid var(--hair-soft);border-radius:9px 9px 0 0}
.src-body{padding:12px 14px 14px}
.src-body .tbl-wrap{margin:0;border:0;border-radius:0}
.src-txt{font-size:.8125rem;line-height:1.75;color:var(--ink-soft);max-width:70ch}
.src-txt p+p{margin-top:9px;text-indent:1.4em}
.src-txt em{font-style:italic;color:var(--ink)}
@media (prefers-reduced-motion:reduce){.chev{transition:none}}

/* ── source table (Part 2 reference) ── */
.tbl-wrap{overflow-x:auto;margin-bottom:16px;border:1px solid var(--hair);border-radius:10px}
.tbl{border-collapse:collapse;width:100%;font-size:.75rem;font-variant-numeric:tabular-nums}
.tbl caption{caption-side:top;text-align:left;padding:10px 12px 8px;font-size:.6875rem;font-weight:800;color:var(--ink-soft)}
.tbl caption span{font-family:var(--mono);font-weight:700;color:var(--ink-muted)}
.tbl th,.tbl td{padding:6px 10px;border-top:1px solid var(--hair-soft);text-align:right;white-space:nowrap}
.tbl thead th{background:var(--hair-soft);font-family:var(--mono);font-size:.625rem;letter-spacing:.06em;
  color:var(--ink-muted);font-weight:700;border-top:0}
.tbl th[scope=row]{text-align:left;font-weight:700;color:var(--ink);white-space:normal;min-width:8.5rem}
.tbl tbody td{font-family:var(--mono);font-weight:600;color:var(--ink)}

/* ── the marked script ── */
.slab{background:var(--warm);border:1px solid var(--warm-border);border-radius:12px;padding:16px 18px}
.script{font-size:1rem;line-height:2.05;color:var(--ink)}
.mk{border-radius:3px;padding:1px 0}
.mk:focus-visible{outline:2px solid var(--brand);outline-offset:2px}
.mk s{color:var(--ink-soft);text-decoration:line-through;text-decoration-thickness:1.5px;
  text-decoration-color:var(--ink-faint);cursor:help}
.mk ins{color:var(--fix);text-decoration:none;font-weight:600;cursor:help;margin-left:.28em}
.mk.miss{background:var(--brand-tint);border-bottom:2px dotted var(--fix);border-radius:3px;padding:1px 4px}
.mk.miss ins{margin-left:0}
.mk.miss .flag{font-family:var(--mono);font-size:.5625rem;font-weight:700;letter-spacing:.08em;
  text-transform:uppercase;color:var(--fix);margin-right:6px;vertical-align:.12em}
.mk:hover s,.mk.on s{text-decoration-color:var(--ink-soft);color:var(--ink)}
.mk:hover ins,.mk.on ins{background:var(--brand-tint);border-radius:3px;box-shadow:0 0 0 3px var(--brand-tint)}
/* selection wash: light enough to leave text contrast intact, with a teal edge carrying the signal */
.us{border-radius:2px}
.uhot{background:var(--sel);box-shadow:0 -2px 0 var(--sel) inset;
  border-bottom:2px solid var(--sel-edge);border-radius:2px}

/* ── criteria ── */
.crit{padding-top:14px;margin-top:14px;border-top:1px solid var(--hair-soft);scroll-margin-top:4px}
.crit:first-of-type{border-top:0;margin-top:0;padding-top:0}
.crit-h{display:flex;flex-wrap:wrap;gap:6px 10px;align-items:baseline}
.crit-h .n{font-size:.875rem;font-weight:800}
.crit-h .b{font-family:var(--mono);font-size:.75rem;font-weight:700;color:var(--ink-soft);font-variant-numeric:tabular-nums}
.crit-track{position:relative;height:5px;border-radius:3px;background:var(--meter-track);margin-top:8px}
.crit-fill{position:absolute;inset-block:0;left:0;border-radius:3px;background:var(--meter-fill)}
.crit-tick{position:absolute;top:-3px;bottom:-3px;width:1.5px;background:var(--ink-faint);left:66.67%}
.verdict{margin-top:9px;font-size:.875rem;color:var(--ink);font-weight:500}
.ev{list-style:none;margin:10px 0 0;padding:0;display:flex;flex-direction:column;gap:7px}
.ev li{display:grid;grid-template-columns:auto 1fr;gap:9px;align-items:start;font-size:.8125rem;color:var(--ink-soft)}
.pol{font-family:var(--mono);font-size:.5625rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;
  padding:2px 6px;border-radius:999px;white-space:nowrap;margin-top:2px}
.pol.credit{color:var(--credit-ink);background:var(--credit-tint);border:1px solid var(--credit)}
.pol.cost{color:var(--cost-ink);background:var(--cost-tint);border:1px solid var(--cost)}

.score-note{margin-top:16px;padding-top:12px;border-top:1px solid var(--hair-soft);
  font-size:.75rem;color:var(--ink-muted);line-height:1.55}

/* ── upgrades ── */
.up{padding-top:16px;margin-top:16px;border-top:1px solid var(--hair-soft);scroll-margin-top:4px}
.up:first-of-type{border-top:0;margin-top:0;padding-top:0}
.up-h{display:flex;flex-wrap:wrap;gap:7px 10px;align-items:center;margin-bottom:9px}
.up-t{font-size:.875rem;font-weight:800;line-height:1.4;margin-bottom:11px}
.cut{font-family:var(--mono);font-size:.625rem;font-weight:700;letter-spacing:.05em;
  color:var(--credit-ink);background:var(--credit-tint);border:1px solid var(--credit);
  padding:2px 8px;border-radius:999px;white-space:nowrap}
.pane{border:1px solid var(--hair);border-radius:10px;padding:12px 13px;box-shadow:var(--shadow-tile)}
.pane + .pane{margin-top:9px}
.pane.after{background:var(--warm);border-color:var(--warm-border)}
.pane-l{display:flex;justify-content:space-between;align-items:baseline;gap:10px;margin-bottom:7px}
.pane-txt{font-size:.875rem;line-height:1.62}
.pane.before .pane-txt{color:var(--ink-muted)}
.pane.after .pane-txt{color:var(--ink);font-weight:500}
mark.hl{background:var(--brand-tint);color:var(--fix);font-weight:700;border-radius:3px;padding:1px 3px}
.buys{list-style:none;margin:11px 0 0;padding:0;display:flex;flex-direction:column;gap:7px}
.buys li{display:grid;grid-template-columns:auto 1fr;gap:9px;align-items:start;font-size:.8125rem;color:var(--ink-soft)}
.axis{font-family:var(--mono);font-size:.5625rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;
  color:var(--fix);background:var(--brand-tint);border:1px solid var(--brand);padding:2px 6px;
  border-radius:999px;white-space:nowrap;margin-top:2px}

/* ── what the summary lost ── */
.ledger{margin-top:20px;padding-top:16px;border-top:1px solid var(--hair)}
.ledger-h{display:flex;flex-wrap:wrap;gap:8px 12px;align-items:baseline;justify-content:space-between}
.ledger-h h3{font-size:.875rem;font-weight:800}
.ledger-rule{font-size:.8125rem;color:var(--ink-soft);margin:7px 0 4px}
.units{list-style:none;margin:10px 0 0;padding:0}
.unit{display:grid;grid-template-columns:3px 1fr;gap:0 12px;padding:12px 0;
  border-top:1px solid var(--hair-soft);scroll-margin-top:4px}
.unit:first-child{border-top:0}
.stripe{border-radius:2px;grid-row:1/-1}
.u-meta{display:flex;flex-wrap:wrap;gap:5px;align-items:center;margin-bottom:6px}
.chip{font-family:var(--mono);font-size:.5625rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;
  padding:2px 6px;border-radius:999px;border:1px solid var(--hair);color:var(--ink-muted);white-space:nowrap}
.chip.w-critical{color:var(--cost-ink);background:var(--cost-tint);border-color:var(--cost)}
.u-src{font-size:.8438rem;font-weight:700;line-height:1.45}
.u-quote{margin-top:6px;font-size:.75rem;color:var(--ink-muted);font-family:var(--mono);
  border-left:2px solid var(--hair);padding-left:8px}
.u-why{margin-top:6px;font-size:.8125rem;color:var(--ink-soft)}

/* ── phrases tab ── */
.phwrap{background:var(--paper);border:1px solid var(--hair);border-radius:var(--radius);box-shadow:var(--shadow-card);overflow:hidden}
.phwrap .panel-body{padding:20px clamp(16px,3vw,26px) 26px;overflow:visible}
.pgroup + .pgroup{margin-top:24px;padding-top:20px;border-top:1px solid var(--hair-soft)}
.pgroup-h{display:flex;flex-wrap:wrap;gap:9px;align-items:baseline;margin-bottom:4px}
.pgroup-h .t{font-size:.9375rem;font-weight:800}
.pgroup-note{font-size:.8125rem;color:var(--ink-soft);max-width:78ch;margin-bottom:13px}
.plist{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:11px}
.phrase{border:1px solid var(--hair);border-radius:10px;padding:13px 15px;box-shadow:var(--shadow-tile);
  display:flex;flex-direction:column;gap:8px}
.phrase.link{background:var(--warm);border-color:var(--warm-border)}
.ph-n{font-family:var(--mono);font-size:.5625rem;font-weight:700;color:var(--ink-faint);letter-spacing:.06em}
.ph-frame{font-size:.9375rem;font-weight:700;line-height:1.45}
.ph-frame .slot{color:var(--fix);font-weight:800}
.ph-use{font-size:.8125rem;color:var(--ink-soft)}
.ph-rows{display:flex;flex-direction:column;gap:6px;padding-top:9px;border-top:1px solid var(--hair-soft)}
.ph-row{display:grid;grid-template-columns:74px 1fr;gap:10px;align-items:start;font-size:.8125rem}
.ph-row .k{font-family:var(--mono);font-size:.5625rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);padding-top:3px}
.ph-row .plug{color:var(--fix);font-weight:600}
.ph-row .where{color:var(--ink-soft)}
.ph-row .repl{color:var(--ink-muted);text-decoration:line-through;text-decoration-color:var(--ink-faint);text-decoration-thickness:1px}
@media(max-width:520px){.ph-row{grid-template-columns:1fr;gap:2px}}

/* ── tooltip ── */
#tip{position:fixed;z-index:99;max-width:min(380px,calc(100vw - 24px));background:var(--paper);color:var(--ink);
  border:1px solid var(--hair);border-radius:12px;box-shadow:var(--shadow-pop);padding:12px 14px;
  font-size:.8125rem;line-height:1.55;opacity:0;visibility:hidden;transform:translateY(3px);
  transition:opacity .14s ease,transform .14s ease;pointer-events:none}
#tip.on{opacity:1;visibility:visible;transform:none}
#tip.pin{pointer-events:auto}
#tip .tt{display:flex;align-items:center;gap:8px;margin-bottom:7px;padding-bottom:7px;border-bottom:1px solid var(--hair-soft)}
#tip .tag{font-family:var(--mono);font-size:.5625rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;
  color:var(--fix);background:var(--brand-tint);border:1px solid var(--brand);padding:2px 7px;border-radius:999px}
#tip .sw{font-size:.75rem;color:var(--ink-muted);font-family:var(--mono);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#tip .sw b{color:var(--fix);font-weight:700}
#tip .why{color:var(--ink-soft)}
@media(prefers-reduced-motion:reduce){#tip{transition:none}}
</style>

<div class="wrap">
  <header class="mast">
    <div class="who">
      <span class="eyebrow">Weaver · Writing review</span>
      <h1 id="h-title"></h1>
    </div>
    <span class="stamp" id="h-stamp"></span>
  </header>

  <nav class="tabs" role="tablist" aria-label="Review sections" id="tabs"></nav>
  <div id="views"></div>
</div>

<div id="tip" role="tooltip" aria-hidden="true"></div>

<script type="application/json" id="spine">/*__DATA__*/<\/script>
<script>
(function(){
"use strict";
var D = JSON.parse(document.getElementById('spine').textContent);
var esc = function(s){ return String(s).replace(/[&<>"]/g, function(c){
  return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };
var el = function(id){ return document.getElementById(id); };
var DIEM = 'điểm';
var num = function(v){
  var t = Number(v).toFixed(3).replace(/0+$/, '').replace(/\\.$/, '');
  return t.indexOf('.') < 0 ? t + '.0' : t;
};


el('h-title').textContent = D.meta.title;
el('h-stamp').textContent = D.meta.paper + ' · ' + num(D.meta.totalScore.value) +
  ' / ' + num(D.meta.totalScore.max) + ' ' + DIEM;

function criticalUnits(p){
  return p.compaction ? p.compaction.units.filter(function(u){ return u.weight === 'critical'; }) : [];
}

/* Everything highlightable — a rewrite, a criterion's quotes, a critical loss — is a character
   range over the part's text. Atoms are split at every boundary, so one span can carry several keys. */
function rangesFor(p){
  var full = p.script.map(function(g){ return g.k === 't' ? g.v : g.k === 'f' ? g.was : ''; }).join('');
  var R = [];
  function add(key, txt){ var i = full.indexOf(txt); if (i >= 0) R.push({ k: key, s: i, e: i + txt.length }); }
  D.upgrades.filter(function(u){ return u.partId === p.id; }).forEach(function(u){ add('u-' + u.id, u.before); });
  p.criteria.forEach(function(c, ci){
    c.evidence.forEach(function(e){ (e.quotes || []).forEach(function(q){ add('c-' + p.id + '-' + ci, q); }); });
  });
  criticalUnits(p).forEach(function(u, li){ if (u.inSummary) add('l-' + p.id + '-' + li, u.inSummary); });
  return R;
}

function markHTML(g, keys){
  var a = ' tabindex="0" role="button" data-tag="' + esc(g.tag) + '" data-was="' + esc(g.was || '') +
          '" data-now="' + esc(g.now) + '" data-why="' + esc(g.why) + '"' +
          (keys.length ? ' data-k="' + keys.join(' ') + '"' : '');
  if (g.k === 'f') {
    return '<span class="mk"' + a + ' aria-label="Correction: ' + esc(g.was) + ' becomes ' +
           esc(g.now) + '"><s>' + esc(g.was) + '</s><ins>' + esc(g.now) + '</ins></span>';
  }
  return '<span class="mk miss"' + a + ' aria-label="Missing: ' + esc(g.now) +
         '"><span class="flag">missing</span><ins>' + esc(g.now) + '</ins></span>';
}

function scriptHTML(p){
  var R = rangesFor(p), out = '', off = 0;
  function keysAt(pos){
    var ks = [];
    R.forEach(function(r){ if (pos >= r.s && pos < r.e && ks.indexOf(r.k) < 0) ks.push(r.k); });
    return ks;
  }
  p.script.forEach(function(g){
    if (g.k === 't'){
      var v = g.v, start = off, cuts = [0, v.length];
      R.forEach(function(r){
        [r.s, r.e].forEach(function(b){
          var rel = b - start;
          if (rel > 0 && rel < v.length && cuts.indexOf(rel) < 0) cuts.push(rel);
        });
      });
      cuts.sort(function(a, b){ return a - b; });
      for (var i = 0; i < cuts.length - 1; i++){
        var chunk = v.slice(cuts[i], cuts[i + 1]), ks = keysAt(start + cuts[i]);
        out += ks.length ? '<span class="us" data-k="' + ks.join(' ') + '">' + esc(chunk) + '</span>' : esc(chunk);
      }
      off += v.length;
    } else if (g.k === 'f'){
      out += markHTML(g, keysAt(off));
      off += g.was.length;
    } else {
      out += markHTML(g, []);
    }
  });
  return out;
}

function tableHTML(t){
  return '<div class="tbl-wrap"><table class="tbl">' +
    '<caption>' + esc(t.caption) + (t.unit ? ' <span>(' + esc(t.unit) + ')</span>' : '') + '</caption>' +
    '<thead><tr><th scope="col">Level of education</th>' +
      t.columns.map(function(c){ return '<th scope="col">' + esc(c) + '</th>'; }).join('') + '</tr></thead>' +
    '<tbody>' + t.rows.map(function(r){
      return '<tr><th scope="row">' + esc(r.label) + '</th>' +
        r.values.map(function(v){ return '<td>' + esc(v) + '</td>'; }).join('') + '</tr>';
    }).join('') + '</tbody></table></div>';
}

function sourceHTML(p){
  var s = p.source;
  if (!s) return p.table ? tableHTML(p.table) : '';
  var body = s.kind === 'passage'
    ? '<div class="src-txt">' + s.paragraphs.map(function(t){
        return '<p>' + esc(t).replace(/\\*([^*]+)\\*/g, '<em>$1</em>') + '</p>';
      }).join('') + '</div>'
    : tableHTML(p.table);
  return '<details class="src"' + (s.kind === 'table' ? ' open' : '') + '>' +
    '<summary><span class="chev"></span><span class="src-t">' + esc(s.label) + '</span>' +
    (s.meta ? '<span class="lbl">' + esc(s.meta) + '</span>' : '') + '</summary>' +
    '<div class="src-body">' + body + '</div></details>';
}

function critHTML(c, partId, i){
  return '<div class="crit" id="crit-' + partId + '-' + i + '"><div class="crit-h">' +
    '<span class="n">' + esc(c.name) + '</span>' +
    '<span class="b">band ' + c.band.toFixed(1) + ' / 9</span></div>' +
    '<div class="crit-track"><div class="crit-fill" style="width:' + ((c.band / 9) * 100).toFixed(1) +
      '%"></div><div class="crit-tick"></div></div>' +
    '<p class="verdict">' + esc(c.verdict) + '</p>' +
    '<ul class="ev">' + c.evidence.map(function(e){
      return '<li><span class="pol ' + e.polarity + '">' +
        (e.polarity === 'credit' ? '+ good' : '- cost') + '</span><span>' + esc(e.text) + '</span></li>';
    }).join('') + '</ul></div>';
}

function hl(s){
  return esc(s).replace(/\\{\\{([\\s\\S]*?)\\}\\}/g, function(_, t){ return '<mark class="hl">' + t + '</mark>'; });
}
function upgradeHTML(u, i){
  return '<div class="up" id="up-' + u.id + '"><div class="up-h">' +
    '<span class="chip">' + String(i + 1).padStart(2, '0') + '</span>' +
    '<span class="chip">' + esc(u.kind) + '</span>' +
    '<span class="cut">-' + (u.beforeWords - u.afterWords) + ' words</span></div>' +
    '<p class="up-t">' + esc(u.title) + '</p>' +
    '<div class="pane before"><div class="pane-l"><span class="lbl">As written</span>' +
      '<span class="lbl">' + u.beforeWords + 'w</span></div>' +
      '<p class="pane-txt">' + esc(u.before) + '</p></div>' +
    '<div class="pane after"><div class="pane-l"><span class="lbl">Upgraded</span>' +
      '<span class="lbl">' + u.afterWords + 'w</span></div>' +
      '<p class="pane-txt">' + hl(u.after) + '</p></div>' +
    '<ul class="buys">' + u.buys.map(function(b){
      return '<li><span class="axis">' + esc(b.axis) + '</span><span>' + esc(b.text) + '</span></li>';
    }).join('') + '</ul></div>';
}

var RAMP = { kept:'var(--credit)', thinned:'var(--ramp-1)', distorted:'var(--ramp-2)', lost:'var(--ramp-3)' };
function ledgerHTML(p){
  var units = criticalUnits(p);
  if (!units.length) return '';
  var rows = units.map(function(u, i){
    var st = u.status === 'kept'
      ? 'color:var(--credit-ink);background:var(--credit-tint);border-color:var(--credit)'
      : 'color:var(--cost-ink);background:var(--cost-tint);border-color:' + RAMP[u.status];
    return '<li class="unit" id="led-' + p.id + '-' + i + '">' +
      '<span class="stripe" style="background:' + RAMP[u.status] + '"></span><div>' +
      '<div class="u-meta">' + (u.para ? '<span class="chip">P' + u.para + '</span>' : '') +
        '<span class="chip" style="' + st + '">' + u.status + '</span>' +
        '<span class="chip w-critical">critical</span></div>' +
      '<div class="u-src">' + esc(u.source) + '</div>' +
      (u.inSummary ? '<div class="u-quote">you wrote: &ldquo;' + esc(u.inSummary) + '&rdquo;</div>'
                   : '<div class="u-quote">never appears in your summary</div>') +
      '<p class="u-why">' + esc(u.reason) + '</p></div></li>';
  }).join('');
  return '<div class="ledger"><div class="ledger-h"><h3>What the summary lost</h3>' +
    '<span class="lbl">' + units.length + ' critical ideas</span></div>' +
    '<p class="ledger-rule">' + esc(p.compaction.rule) + '</p>' +
    '<ul class="units">' + rows + '</ul></div>';
}

function pill(key, target, label, val, absent){
  return '<button type="button" class="pill" data-key="' + key + '" data-target="' + target +
    '" aria-pressed="false">' + esc(label) +
    (val ? '<span class="v' + (absent ? ' absent' : '') + '">' + esc(val) + '</span>' : '') + '</button>';
}

function scoreNote(p){
  var contents = p.criteria[0], lang = p.criteria.slice(1);
  var mean = lang.reduce(function(n, c){ return n + c.band; }, 0) / lang.length;
  return '<p class="score-note"><b>' + esc(contents.name) + '</b> ' + contents.band.toFixed(1) +
    ' &nbsp;·&nbsp; <b>Language use</b> ' + mean.toFixed(1) + ' (' +
    lang.map(function(c){ return esc(c.abbr) + ' ' + c.band.toFixed(1); }).join(', ') + ')' +
    ' &nbsp;&rarr;&nbsp; <b>' + num(p.score.value) + ' / ' + num(p.score.max) + ' ' + DIEM + '</b>. ' +
    'The rubric weighs contents and language use equally, so strong English can sit beside a mark ' +
    'held down by what the writing left out.</p>';
}

function partView(p){
  var ups = D.upgrades.filter(function(u){ return u.partId === p.id; });
  var marks = p.script.filter(function(g){ return g.k !== 't'; }).length;

  var critPills = '<div class="pills" role="group" aria-label="Jump to a criterion and light up what it quotes">' +
    p.criteria.map(function(c, i){
      return pill('c-' + p.id + '-' + i, 'crit-' + p.id + '-' + i, c.abbr || c.name, c.band.toFixed(1));
    }).join('') + '</div>';

  var rows = '<div class="pill-row"><span class="pill-k">Rewrites</span>' +
    '<div class="pills" role="group" aria-label="Highlight a rewritten passage">' +
    ups.map(function(u){
      return pill('u-' + u.id, 'up-' + u.id, u.pill, '-' + (u.beforeWords - u.afterWords) + 'w');
    }).join('') + '</div></div>';
  var crit = criticalUnits(p);
  if (crit.length) rows += '<div class="pill-row"><span class="pill-k">Lost</span>' +
    '<div class="pills" role="group" aria-label="Highlight a critical idea">' +
    crit.map(function(u, i){
      return pill('l-' + p.id + '-' + i, 'led-' + p.id + '-' + i, u.pill,
                  u.inSummary ? '' : 'not written', !u.inSummary);
    }).join('') + '</div></div>';

  return '<div class="split">' +
    '<section class="panel" data-role="script"><div class="panel-head"><div class="ph-top">' +
        '<h2>The essay, marked</h2><span class="lbl">' + marks + ' corrections</span>' +
      '</div></div>' +
      '<div class="panel-body">' +
        '<p class="task">' + esc(p.task) + '</p>' +
        sourceHTML(p) +
        '<div class="slab"><div class="script">' + scriptHTML(p) + '</div></div>' +
      '</div></section>' +
    '<div class="rcol">' +
      '<section class="panel" data-role="marking"><div class="panel-head">' +
        '<div class="ph-top"><h2>Marking</h2>' +
          '<span class="score"><span class="v">' + num(p.score.value) + '</span>' +
          '<span class="sep">/</span><span class="d">' + num(p.score.max) + ' ' + DIEM + '</span></span>' +
        '</div>' + critPills + '</div>' +
        '<div class="panel-body">' +
          p.criteria.map(function(c, i){ return critHTML(c, p.id, i); }).join('') +
          scoreNote(p) +
          '</div></section>' +
      '<section class="panel" data-role="upgrades"><div class="panel-head">' +
        '<div class="ph-top"><h2>Sentence upgrades</h2>' +
          '<span class="lbl">' + ups.length + (ups.length === 1 ? ' rewrite' : ' rewrites') + '</span>' +
        '</div><div class="pill-rows">' + rows + '</div></div>' +
        '<div class="panel-body">' + ups.map(upgradeHTML).join('') + ledgerHTML(p) + '</div></section>' +
    '</div></div>';
}

/* ── phrases tab ── */
function frameHTML(f){
  return esc(f).replace(/\\[([^\\]]+)\\]/g, function(_, s){ return '<span class="slot">[' + s + ']</span>'; });
}
function phraseHTML(p, n){
  return '<li class="phrase' + (p.kind === 'linking' ? ' link' : '') + '">' +
    '<span class="ph-n">' + String(n).padStart(2, '0') + ' &middot; ' + esc(p.kind) + '</span>' +
    '<p class="ph-frame">' + frameHTML(p.frame) + '</p>' +
    '<p class="ph-use">' + esc(p.use) + '</p>' +
    '<div class="ph-rows">' +
      '<div class="ph-row"><span class="k">Plugged in</span><span class="plug">' + esc(p.plugIn) + '</span></div>' +
      '<div class="ph-row"><span class="k">Goes</span><span class="where">' + esc(p.plugInFor) + '</span></div>' +
      (p.replaces ? '<div class="ph-row"><span class="k">Replaces</span><span class="' +
        (/^Nothing/.test(p.replaces) ? 'where' : 'repl') + '">' + esc(p.replaces) + '</span></div>' : '') +
    '</div></li>';
}
function phrasesView(){
  var linking = D.phrases.filter(function(p){ return p.kind === 'linking'; });
  var content = D.phrases.filter(function(p){ return p.kind !== 'linking'; });
  var n = 0;
  return '<div class="phwrap"><div class="panel-head"><div class="ph-top"><h2>Phrases to steal</h2>' +
    '<span class="lbl">' + D.phrases.length + ' phrases &middot; ' + linking.length + ' linking</span></div></div>' +
    '<div class="panel-body">' +
    '<div class="pgroup"><div class="pgroup-h"><span class="t">Linking phrases</span>' +
      '<span class="lbl">' + linking.length + '</span></div>' +
      '<p class="pgroup-note">These join two sentences &mdash; they open an argument, extend it, or turn it. ' +
      'Each one replaces a connector you reused, or supplies a link your writing left out.</p>' +
      '<ul class="plist">' + linking.map(function(p){ return phraseHTML(p, ++n); }).join('') + '</ul></div>' +
    '<div class="pgroup"><div class="pgroup-h"><span class="t">Summarising and data-reporting</span>' +
      '<span class="lbl">' + content.length + '</span></div>' +
      '<p class="pgroup-note">Frames for the two jobs this paper sets: compressing a passage without losing ' +
      'its reasoning, and reporting a table as findings rather than as a list of numbers.</p>' +
      '<ul class="plist">' + content.map(function(p){ return phraseHTML(p, ++n); }).join('') + '</ul></div>' +
    '</div></div>';
}

/* ── tabs ── */
var TABS = D.parts.map(function(p){
  return { id: p.id, label: p.short || p.label,
           n: String(p.script.filter(function(g){ return g.k !== 't'; }).length),
           view: function(){ return partView(p); } };
});
TABS.push({ id: 'phrases', label: 'Phrases to steal', n: String(D.phrases.length), view: phrasesView });

el('tabs').innerHTML = TABS.map(function(t, i){
  return '<button class="tab" role="tab" id="tab-' + t.id + '" aria-controls="view-' + t.id +
    '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '" data-i="' + i + '">' +
    esc(t.label) + '<span class="n">' + t.n + '</span></button>';
}).join('');
el('views').innerHTML = TABS.map(function(t, i){
  return '<div role="tabpanel" id="view-' + t.id + '" aria-labelledby="tab-' + t.id + '"' +
    (i === 0 ? '' : ' hidden') + '>' + t.view() + '</div>';
}).join('');

var tabEls = Array.prototype.slice.call(document.querySelectorAll('.tab'));
function select(i){
  tabEls.forEach(function(b, j){
    var on = i === j;
    b.setAttribute('aria-selected', String(on));
    b.tabIndex = on ? 0 : -1;
    el('view-' + TABS[j].id).hidden = !on;
  });
  clearHot(); hide(true);
}
el('tabs').addEventListener('click', function(e){
  var b = e.target.closest && e.target.closest('.tab');
  if (b) select(+b.dataset.i);
});
el('tabs').addEventListener('keydown', function(e){
  var i = tabEls.indexOf(document.activeElement);
  if (i < 0) return;
  var next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 :
             e.key === 'Home' ? 0 : e.key === 'End' ? tabEls.length - 1 : null;
  if (next === null) return;
  e.preventDefault();
  next = (next + tabEls.length) % tabEls.length;
  select(next); tabEls[next].focus();
});

/* ── pills: light up the essay, scroll the detail into view ── */
function scrollWithin(target){
  if (!target) return;
  var box = target.closest('.panel-body');
  if (!box || box.scrollHeight <= box.clientHeight + 1){ target.scrollIntoView({ block:'nearest' }); return; }
  var r = target.getBoundingClientRect(), b = box.getBoundingClientRect();
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var top = Math.max(0, box.scrollTop + (r.top - b.top) - 12);
  if (box.scrollTo) box.scrollTo({ top: top, behavior: reduce ? 'auto' : 'smooth' });
  else box.scrollTop = top;
}
function clearHot(){
  Array.prototype.forEach.call(document.querySelectorAll('.uhot'), function(n){ n.classList.remove('uhot'); });
  Array.prototype.forEach.call(document.querySelectorAll('.pill[aria-pressed="true"]'), function(b){
    b.setAttribute('aria-pressed', 'false');
  });
}
document.addEventListener('click', function(e){
  var b = e.target.closest && e.target.closest('.pill');
  if (!b) return;
  var wasOn = b.getAttribute('aria-pressed') === 'true';
  var view = b.closest('[role="tabpanel"]');
  clearHot();
  if (wasOn) return;
  b.setAttribute('aria-pressed', 'true');
  var spans = b.dataset.key ? view.querySelectorAll('[data-k~="' + b.dataset.key + '"]') : [];
  Array.prototype.forEach.call(spans, function(n){ n.classList.add('uhot'); });
  if (spans.length) scrollWithin(spans[0]);
  if (b.dataset.target) scrollWithin(el(b.dataset.target));
});

/* ── tooltip ── */
var tip = el('tip'), cur = null, pinned = false;
function show(m){
  var was = m.getAttribute('data-was'), now = m.getAttribute('data-now');
  var swap = was ? esc(was) + ' &rarr; <b>' + esc(now) + '</b>' : '<b>' + esc(now) + '</b>';
  tip.innerHTML = '<div class="tt"><span class="tag">' + esc(m.getAttribute('data-tag')) + '</span>' +
                  '<span class="sw">' + swap + '</span></div>' +
                  '<div class="why">' + esc(m.getAttribute('data-why')) + '</div>';
  tip.setAttribute('aria-hidden', 'false');
  tip.classList.add('on');
  place(m);
  if (cur && cur !== m) cur.classList.remove('on');
  cur = m; m.classList.add('on');
}
function place(m){
  var r = m.getBoundingClientRect();
  tip.style.left = '0px'; tip.style.top = '0px';
  var t = tip.getBoundingClientRect();
  var left = Math.max(12, Math.min(r.left + r.width / 2 - t.width / 2, window.innerWidth - t.width - 12));
  var top = r.top - t.height - 10;
  if (top < 12) top = r.bottom + 10;
  tip.style.left = left + 'px';
  tip.style.top = Math.max(12, Math.min(top, window.innerHeight - t.height - 12)) + 'px';
}
function hide(force){
  if (pinned && !force) return;
  pinned = false;
  tip.classList.remove('on', 'pin');
  tip.setAttribute('aria-hidden', 'true');
  if (cur) { cur.classList.remove('on'); cur = null; }
}
document.addEventListener('mouseover', function(e){
  var m = e.target.closest && e.target.closest('.mk[data-why]');
  if (m && !pinned) show(m);
});
document.addEventListener('mouseout', function(e){
  var m = e.target.closest && e.target.closest('.mk[data-why]');
  if (m && !pinned && !(e.relatedTarget && tip.contains(e.relatedTarget))) hide();
});
document.addEventListener('focusin', function(e){
  var m = e.target.closest && e.target.closest('.mk[data-why]');
  if (m) { pinned = false; show(m); }
});
document.addEventListener('focusout', function(e){
  var m = e.target.closest && e.target.closest('.mk[data-why]');
  if (m) hide(true);
});
document.addEventListener('click', function(e){
  var m = e.target.closest && e.target.closest('.mk[data-why]');
  if (m){
    e.preventDefault();
    if (pinned && cur === m) { hide(true); return; }
    pinned = false; show(m); pinned = true; tip.classList.add('pin');
  } else if (!tip.contains(e.target) && !(e.target.closest && e.target.closest('.pill'))) hide(true);
});
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') { hide(true); clearHot(); }
  if ((e.key === 'Enter' || e.key === ' ') && document.activeElement &&
      document.activeElement.classList.contains('mk')) { e.preventDefault(); document.activeElement.click(); }
});
document.addEventListener('scroll', function(){ if (cur) { pinned ? place(cur) : hide(true); } }, true);
window.addEventListener('resize', function(){ if (cur) place(cur); });
})();
<\/script>
`,b="/*__DATA__*/";function M(t){return JSON.stringify(t).replace(/</g,"<").replace(/\u2028/g,"\u2028").replace(/\u2029/g,"\u2029")}function z(t,e={}){if(!h.includes(b))throw new Error("reviewTemplate.html lost its /*__DATA__*/ placeholder");const i=h.replace(b,M(t));return'<!doctype html><html lang="en"'+(e.theme?' data-theme="'+e.theme+'"':"")+'><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{margin:0;padding:0}</style></head><body>'+i+"</body></html>"}function T(t){try{return JSON.parse(t)}catch{throw new Error("Dữ liệu bài chữa không đọc được.")}}const S="writingGradingPrototype",x=t=>`weaver:${j}:writingReview:${t}`;function I(){const{reviewId:t}=k(),[e,i]=r.useState({status:"loading"}),[s,f]=r.useState(""),[p,m]=r.useState(!1),[o,g]=r.useState(!1),d=r.useRef(null);r.useEffect(()=>{let a=!0;return(async()=>{try{const l=await y(E(L,S,t));if(!a)return;if(!l.exists()){i({status:"missing"});return}const u=l.data();i({status:"ready",title:u.title||"Bài chữa",password:String(u.password||""),payloadJson:u.payloadJson||""});try{sessionStorage.getItem(x(t))==="1"&&g(!0)}catch{}}catch(l){a&&i({status:"error",message:l?.message||String(l)})}})(),()=>{a=!1}},[t]),r.useEffect(()=>{e.status==="ready"&&!o&&d.current?.focus()},[e.status,o]);const v=r.useCallback(a=>{if(a.preventDefault(),s.trim()===e.password){g(!0);try{sessionStorage.setItem(x(t),"1")}catch{}}else m(!0),f(""),d.current?.focus()},[s,e.password,t]),w=r.useMemo(()=>{if(!o||e.status!=="ready")return"";try{return z(T(e.payloadJson))}catch(a){return`<!doctype html><meta charset="utf-8"><body style="font:14px system-ui;padding:24px;color:#f28585;background:#14171d">${a.message}</body>`}},[o,e.status,e.payloadJson]);return e.status==="loading"?n.jsx(c,{children:n.jsx("p",{className:"text-sm text-slate-500 dark:text-[#a9b0bd]",children:"Đang tải bài chữa..."})}):e.status==="missing"?n.jsxs(c,{children:[n.jsx("h1",{className:"text-lg font-extrabold text-slate-800 dark:text-[#eef0f4]",children:"Không tìm thấy bài chữa"}),n.jsx("p",{className:"mt-2 text-sm text-slate-500 dark:text-[#a9b0bd]",children:"Đường dẫn có thể đã sai hoặc bài chữa đã được gỡ. Hãy hỏi lại giáo viên gửi link."})]}):e.status==="error"?n.jsxs(c,{children:[n.jsx("h1",{className:"text-lg font-extrabold text-slate-800 dark:text-[#eef0f4]",children:"Không mở được bài chữa"}),n.jsx("p",{className:"mt-2 text-sm text-slate-500 dark:text-[#a9b0bd]",children:e.message})]}):o?n.jsx("iframe",{title:e.title,srcDoc:w,sandbox:"allow-scripts",className:"h-dvh w-full border-0 bg-[#fafbfc] dark:bg-[#14171d]"}):n.jsxs(c,{children:[n.jsx("p",{className:"text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-orange-500 dark:text-[#fb923c]",children:"Weaver · Bài chữa"}),n.jsx("h1",{className:"mt-1.5 text-xl font-extrabold tracking-tight text-slate-800 dark:text-[#eef0f4]",children:e.title}),n.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-500 dark:text-[#a9b0bd]",children:"Nhập mật khẩu giáo viên gửi kèm để xem bài chữa."}),n.jsxs("form",{onSubmit:v,className:"mt-5 flex flex-col gap-2.5",children:[n.jsx("label",{htmlFor:"wr-pass",className:"sr-only",children:"Mật khẩu"}),n.jsx("input",{id:"wr-pass",ref:d,type:"password",value:s,autoComplete:"off",onChange:a=>{f(a.target.value),m(!1)},"aria-invalid":p||void 0,"aria-describedby":p?"wr-pass-err":void 0,className:`w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition
              focus:ring-2 focus:ring-orange-200 dark:bg-[#14171d] dark:text-[#eef0f4] dark:placeholder:text-[#626a79]
              dark:focus:ring-[#3a2410] ${p?"border-red-400 dark:border-[#f28585]":"border-slate-200 focus:border-orange-400 dark:border-[#2b3038] dark:focus:border-[#fb923c]"}`,placeholder:"Mật khẩu"}),p&&n.jsx("p",{id:"wr-pass-err",role:"alert",className:"text-xs font-semibold text-red-500 dark:text-[#f28585]",children:"Mật khẩu chưa đúng. Thử lại nhé."}),n.jsx("button",{type:"submit",disabled:!s.trim(),className:`rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition
              hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400
              dark:disabled:bg-[#232830] dark:disabled:text-[#626a79]`,children:"Mở bài chữa"})]})]})}function c({children:t}){return n.jsx("div",{className:"font-be-vietnam flex min-h-dvh items-center justify-center bg-slate-50 px-5 py-10 dark:bg-[#14171d]",children:n.jsx("div",{className:"w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-[#2b3038] dark:bg-[#1b1f28] dark:shadow-none",children:t})})}export{I as default};
