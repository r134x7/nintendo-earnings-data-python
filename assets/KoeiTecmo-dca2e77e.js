import{r as h,u as k,c as s,j as S,C as p,l as F,p as L,g as M,S as Y,A,G}from"./index-97d2b75f.js";import{m as I,n as K,o as N,p as R,q as V,a as _,g as $,G as z,r as H}from"./GRAPH_SOFTWARE_SALES-b6858a8e.js";import{v as U,w as W,x as j,G as B,S as y,a as O,d as x,y as q,b as D}from"./GRAPH_CONSOLIDATED_EARNINGS-f608f7b0.js";import{S as b}from"./Space-31ae9772.js";import"./ChevronIcon-2a3e80d5.js";const n=new Map;n.set(n.size,I);n.set(n.size,K);n.set(n.size,N);n.set(n.size,R);n.set(n.size,V);const E=new Map,Q=new Map;n.forEach((r,o,i)=>{E.set(o,_(r,i.get(o+1),41,"Million","One Thousand")),Q.set(o,$(r,i.get(o+1),"Million","One Thousand"))});n.clear();function J(r){const[o,i]=h.useState(""),e=k(a=>a),t=Array.from({length:r.yearLength},(a,l)=>[{name:"Data Sources",value:U?.[l]},{name:"Consolidated Operating Results",value:W.get(l),graph:s(B,{setData:j.get(l)})},{name:"Software Sales",value:E.get(l),graph:s(z,{setData:Q.get(l)})}].filter(u=>u.value!==void 0)),m=t[r.setIndex].map(a=>a.name),g=a=>l=>{let[u]=a.filter(d=>l===d.name);return u?.value||""},v=(a=>l=>{let[u]=a.filter(d=>l===d.name);return u?.graph})(t[r.setIndex]),C=g(t[r.setIndex]);function f(){setTimeout(()=>{i("")},10)}return S("div",{children:[m.filter(a=>a===o).length===0&&o.length!==0?f():s(y,{fullWidth:!0,orientation:"vertical",value:o,onChange:i,data:m}),o==="Data Sources"?C(o):s(p,{onCopy:a=>O(a,x),style:{backgroundColor:`${e.colour}`,color:e.fontColor==="dark"?"#fff":"#000000"},block:!0,children:C(o)}),v(o)]})}function X(){const[r,o]=h.useState(""),[i,e]=h.useState(6),[t,m]=h.useState("FY Cumulative"),g=k(a=>a);h.useEffect(()=>{switch(r){case"Koei Tecmo Consolidated Operating Results - Cumulative":e(t==="1st Quarter"?0:t==="2nd Quarter"?1:t==="3rd Quarter"?2:t==="4th Quarter"?3:t==="First Half"?4:t==="First Three Quarters"?5:6);break;case"Koei Tecmo Sales Per Software Unit - Cumulative":e(t==="1st Quarter"?0:t==="2nd Quarter"?1:t==="3rd Quarter"?2:t==="4th Quarter"?3:t==="First Half"?4:t==="First Three Quarters"?5:6);break}},[r,t]);const c=[{name:"Koei Tecmo Consolidated Operating Results - Cumulative",value:q[i]},{name:"Koei Tecmo Sales Per Software Unit - Cumulative",value:H[i]}],v=c.map(a=>a.name),f=(a=>l=>{let[u]=a.filter(d=>l===d.name);return u?u.value:""})(c);return S("div",{children:[s(y,{fullWidth:!0,orientation:"vertical",value:r,onChange:o,data:v}),S(p,{onCopy:a=>O(a,x),style:{backgroundColor:`${g.colour}`,color:g.fontColor==="dark"?"#fff":"#000000"},block:!0,children:[r==="Koei Tecmo Consolidated Operating Results - Cumulative"||r==="Koei Tecmo Sales Per Software Unit - Cumulative"?s(D,{data:["1st Quarter","2nd Quarter","3rd Quarter","4th Quarter","First Half","First Three Quarters","FY Cumulative"],defaultValue:"FY Cumulative",label:"Select a time period:",radius:"xl",value:t,onChange:m}):void 0,f(r)]}),s(b,{h:"xl"}),s(b,{h:"xl"}),s(b,{h:"xl"}),s(b,{h:"xl"})]})}const T=2023,Z=2023-2010,w=Array.from({length:Z+1},(r,o)=>"FY3/"+(T-o));function oe(){const r=F(L("Also, visit Install Base. It's a place to discuss and elaborate on the business side of the video game industry.",40),"=","top",!0,40),i=M("Koei Tecmo (They publish Hyrule Warriors), this is where you can find archived data.",40,"−",80),[e,t]=h.useState(""),[m,g]=h.useState("Data by Fiscal Year"),c=k(f=>f),C=(f=>a=>{let[l]=f.map((d,P)=>a===d?P:-1).filter(d=>d!==-1),u=f.length;return l>=0?s(J,{setIndex:l,yearLength:u}):null})(w);return S("div",{children:[s(Y,{mb:"md",align:"center",children:s(p,{style:{backgroundColor:`${c.colour}`,color:c.fontColor==="dark"?"#fff":"#000000"},block:!0,children:i})}),s(Y,{align:"center",children:S(p,{style:{backgroundColor:`${c.colour}`,color:c.fontColor==="dark"?"#fff":"#000000"},block:!0,children:[r,s(A,{className:"fade",style:{textAlign:"center"},mb:"sm",href:"https://www.installbaseforum.com/",target:"_blank",children:s(p,{style:{backgroundColor:`${c.colour}`,color:c.fontColor==="dark"?"#fff":"#000000"},block:!0,children:F(L("https://www.installbaseforum.com/",36),"=","both",!0,36)})})]})}),s(y,{mb:"sm",mt:"sm",fullWidth:!0,orientation:"horizontal",value:m,onChange:g,data:["Data by Fiscal Year","Special Page"]}),m==="Data by Fiscal Year"?s(G,{position:"center",children:s(D,{dropdownPosition:"bottom",mb:"sm",mr:"md",placeholder:"Select",label:`Select a Fiscal Year from ${T-(w.length-1)} to ${T}.`,description:`Fiscal Year ending March ${Number(e?.slice(4,8))?e?.slice(4,8):""}.`,radius:"xl",size:"md",data:w,value:e,onChange:t})}):s(X,{}),m==="Data by Fiscal Year"&&typeof e=="string"?C(e):null]})}export{oe as default};
