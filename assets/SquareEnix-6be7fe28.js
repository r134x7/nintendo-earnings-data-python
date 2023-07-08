import{r as d,u as P,t as z,c as t,j as b,C,F as $,l as T,p as L,B as R,f as M,g as O,S as N,A as U,G as H}from"./index-e7972934.js";import{w as B,x as j,G as X,y as J}from"./GRAPH_SOFTWARE_SALES-bea26abe.js";import{m as K,n as Y}from"./annual_report_cumulative-6279653a.js";import{z as Z,A as ee,D as te,G as ae,S as Q,a as V,d as G,E as re,b as _}from"./GRAPH_CONSOLIDATED_EARNINGS-1ea880c3.js";import{T as W}from"./TextInput-1214f10f.js";import{S as y}from"./Space-5aabf5a4.js";import"./ChevronIcon-745d3af1.js";function le(s){const[n,m]=d.useState(""),a=P(e=>e),[c,p]=d.useState(""),[w,f]=d.useState(0);let r=new Set,l=-1,S=K.get(s.setIndex+l),h=z(S,"FY Series IP",n,c,r);const i=[{value:h.sectionTitle,placeholder:"Search specific series",label:`Series Search - Number of game series shown: ${w}`,description:"Clear field to show all game series listed."}].filter(e=>e.value===n);d.useEffect(()=>{switch(n){case h.sectionTitle:f(h.titlesLength.length);break}},[c,n,s.setIndex]);const g=Array.from({length:s.yearLength},(e,o)=>{var u;return[{name:"Data Sources",value:(u=Z)==null?void 0:u[o]},{name:"Consolidated Financial Results",value:ee.get(o),graph:t(ae,{setData:te.get(o)})},{name:"Software Sales",value:B.get(o),graph:t(X,{setData:j.get(o)})},{name:"FY Series IP",value:h.table}].filter(k=>k.value!==void 0)}),v=g[s.setIndex].map(e=>e.name),x=e=>o=>{let[u]=e.filter(k=>o===k.name);return(u==null?void 0:u.value)||""},E=e=>o=>{let[u]=e.filter(k=>o===k.name);return u==null?void 0:u.graph},F=x(g[s.setIndex]),D=E(g[s.setIndex]);function I(){setTimeout(()=>{m("")},10)}return b("div",{children:[v.filter(e=>e===n).length===0&&n.length!==0?I():t(Q,{fullWidth:!0,orientation:"vertical",value:n,onChange:m,data:v}),n==="Data Sources"?F(n):b(C,{onCopy:e=>V(e,G),style:{backgroundColor:`${a.colour}`,color:a.fontColor==="dark"?"#fff":"#000000"},block:!0,children:[n===h.sectionTitle?b($,{children:[t(W,{placeholder:i[0].placeholder,label:i[0].label,description:i[0].description,radius:"xl",value:c,onChange:e=>{p(e.target.value.toLowerCase())}}),r.size>0&&c!==r.values().next().value?T(L("Nearest single word search: (To use, click on a word)",40),"−","both",!0,40):void 0,r.size>0&&c!==r.values().next().value?[...r].flatMap((e,o)=>o>3?[]:t(R,{onClick:()=>p(e),radius:"xl",ml:"sm",mb:"sm",variant:"subtle",compact:!0,children:t(C,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${a.colour}`,color:a.fontColor==="dark"?"#fff":"#000000"},children:e})},e)):c===r.values().next().value||w===0?t(R,{onClick:()=>p(""),radius:"xl",m:"sm",variant:"subtle",compact:!0,children:t(C,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${a.colour}`,color:a.fontColor==="dark"?"#fff":"#000000"},children:"Clear Search"})}):void 0,t("br",{})]}):void 0,F(n)]}),D(n)]})}function se(){const[s,n]=d.useState(""),m=P(e=>e),[a,c]=d.useState(""),[p,w]=d.useState(0),[f,r]=d.useState(6),[l,S]=d.useState("FY Cumulative");let h=M(Y.titleList,a),i=new Set;a.length!==0&&s==="Square Enix FY Series IP - Cumulative"&&h.map(e=>[...e.title.toLowerCase().matchAll(new RegExp(`(?=\\w*${a})\\w+`,"g"))].flat().map(o=>i.add(o)));let g=h.reduce((e,o)=>e+o.table,""),v=Y.header+g+Y.footnotes;const x=[{value:"Square Enix FY Series IP - Cumulative",placeholder:"Search specific series",label:`Series Search - Number of game series shown: ${p}`,description:"Clear field to show all game series listed."}].filter(e=>e.value===s);d.useEffect(()=>{switch(s){case"Square Enix Consolidated Financial Results - Cumulative":r(l==="1st Quarter"?0:l==="2nd Quarter"?1:l==="3rd Quarter"?2:l==="4th Quarter"?3:l==="First Half"?4:l==="First Three Quarters"?5:6);break;case"Square Enix Sales Per Software Unit - Cumulative":r(l==="1st Quarter"?0:l==="2nd Quarter"?1:l==="3rd Quarter"?2:l==="4th Quarter"?3:l==="First Half"?4:l==="First Three Quarters"?5:6);break;case"Square Enix FY Series IP - Cumulative":w(h.length);break}},[a,s,l]);const E=[{name:"Square Enix Consolidated Financial Results - Cumulative",value:re[f]},{name:"Square Enix Sales Per Software Unit - Cumulative",value:J[f]},{name:"Square Enix FY Series IP - Cumulative",value:v}],F=E.map(e=>e.name),I=(e=>o=>{let[u]=e.filter(k=>o===k.name);return u?u.value:""})(E);return b("div",{children:[t(Q,{fullWidth:!0,orientation:"vertical",value:s,onChange:n,data:F}),b(C,{onCopy:e=>V(e,G),style:{backgroundColor:`${m.colour}`,color:m.fontColor==="dark"?"#fff":"#000000"},block:!0,children:[s==="Square Enix Consolidated Financial Results - Cumulative"||s==="Square Enix Sales Per Software Unit - Cumulative"?t(_,{data:["1st Quarter","2nd Quarter","3rd Quarter","4th Quarter","First Half","First Three Quarters","FY Cumulative"],defaultValue:"FY Cumulative",label:"Select a time period:",radius:"xl",value:l,onChange:S}):void 0,s==="Square Enix FY Series IP - Cumulative"?b($,{children:[t(W,{placeholder:x[0].placeholder,label:x[0].label,description:x[0].description,radius:"xl",value:a,onChange:e=>{c(e.target.value.toLowerCase())}}),i.size>0&&a!==i.values().next().value?T(L("Nearest single word search: (To use, click on a word)",40),"−","both",!0,40):void 0,i.size>0&&a!==i.values().next().value?[...i].flatMap((e,o)=>o>3?[]:t(R,{onClick:()=>c(e),radius:"xl",ml:"sm",mb:"sm",variant:"subtle",compact:!0,children:t(C,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${m.colour}`,color:m.fontColor==="dark"?"#fff":"#000000"},children:e})},e)):a===i.values().next().value||p===0?t(R,{onClick:()=>c(""),radius:"xl",m:"sm",variant:"subtle",compact:!0,children:t(C,{style:{border:"solid",borderWidth:"1px",borderRadius:"16px",backgroundColor:`${m.colour}`,color:m.fontColor==="dark"?"#fff":"#000000"},children:"Clear Search"})}):void 0,t("br",{})]}):void 0,I(s)]}),t(y,{h:"xl"}),t(y,{h:"xl"}),t(y,{h:"xl"}),t(y,{h:"xl"})]})}const q=2023,oe=2023-2004,A=Array.from({length:oe+1},(s,n)=>"FY3/"+(q-n));function he(){const s=T(L("Also, visit Install Base. It's a place to discuss and elaborate on the business side of the video game industry.",40),"=","top",!0,40),m=O("Square Enix (They publish Marvel's Avengers), this is where you can find archived data.",40,"−",80),[a,c]=d.useState(""),[p,w]=d.useState("Data by Fiscal Year"),f=P(S=>S),l=(S=>h=>{let[i]=S.map((v,x)=>h===v?x:-1).filter(v=>v!==-1),g=S.length;return i>=0?t(le,{setIndex:i,yearLength:g}):null})(A);return b("div",{children:[t(N,{mb:"md",align:"center",children:t(C,{style:{backgroundColor:`${f.colour}`,color:f.fontColor==="dark"?"#fff":"#000000"},block:!0,children:m})}),t(N,{mb:"md",align:"center",children:b(C,{style:{backgroundColor:`${f.colour}`,color:f.fontColor==="dark"?"#fff":"#000000"},block:!0,children:[s,t(U,{className:"fade",style:{textAlign:"center"},mb:"sm",href:"https://www.installbaseforum.com/",target:"_blank",children:t(C,{style:{backgroundColor:`${f.colour}`,color:f.fontColor==="dark"?"#fff":"#000000"},block:!0,children:T(L("https://www.installbaseforum.com/",36),"−","both",!0,36)})})]})}),t(Q,{mb:"sm",mt:"sm",fullWidth:!0,orientation:"horizontal",value:p,onChange:w,data:["Data by Fiscal Year","Special Page"]}),p==="Data by Fiscal Year"?t(H,{position:"center",children:t(_,{dropdownPosition:"bottom",mb:"sm",mr:"md",placeholder:"Select",label:`Select a Fiscal Year from ${q-(A.length-1)} to ${q}.`,description:`Fiscal Year ending March ${Number(a==null?void 0:a.slice(4,8))?a==null?void 0:a.slice(4,8):""}.`,radius:"xl",size:"md",data:A,value:a,onChange:c})}):t(se,{}),p==="Data by Fiscal Year"&&typeof a=="string"?l(a):null]})}export{he as default};
