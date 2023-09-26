import{u as ve,_ as ge,a as ke,b as be}from"./list-18c9d8b7.js";import{o as l,e as a,f as t,d as $e,a as ye,r as v,u as Te,B as Ce,D as qe,p as we,C as Ve,E as Ae,G as Se,a1 as De,I as g,H as Me,J as Ie,K as Be,x as c,h as o,F as C,L as k,w as r,j as S,t as i,y as Ne,A as K,M as Ue,N as Qe,O as Re,k as O,aS as Ze,aT as He,n as J,Q as P,R as Le,z as ze,U as W,X as Ee,Y as Fe,V as Ge,W as je,aU as X,Z as Ke,$ as Oe,a0 as Je}from"./index-391e08bf.js";import{_ as Pe}from"./Breadcrumb-db40a1f3.js";import{n as We}from"./list-6498ebd9.js";import{u as Xe,a as Ye}from"./tags-8c2303eb.js";import"./vee-validate.esm-910387f0.js";const xe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},et=t("path",{fill:"currentColor",d:"M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM7 6v13h10V6H7Zm2 10q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7ZM7 6v13V6Z"},null,-1),tt=[et];function st(Y,q){return l(),a("svg",xe,tt)}const ot={name:"material-symbols-delete-outline-rounded",render:st},nt={class:"v-toolbar"},lt=["onClick"],at=t("md-ripple",null,null,-1),it=t("md-ripple",null,null,-1),ct=["onClick"],dt={class:"filters"},rt=["label"],ut={class:"form-label"},_t={type:"filter"},pt=["label","selected","onClick"],ht={class:"buttons"},mt=["onClick"],ft={class:"table-responsive"},vt={class:"table"},gt=["checked","indeterminate"],kt=t("th",null,"ID",-1),bt=t("th",null,null,-1),$t=["onClick"],yt=["checked"],Tt=["onClick"],Ct={class:"nowrap"},qt={class:"action-btns"},wt=["onClick"],Vt=t("md-ripple",null,null,-1),At=["onClick"],St=t("md-ripple",null,null,-1),Dt={class:"nowrap"},Mt={class:"nowrap"},It={key:0},Bt={colspan:"7"},Nt={class:"no-data-placeholder"},b=50,Et=$e({__name:"NotesView",setup(Y){var E,F;const q=ye(),u=v([]),D=v(),{t:M}=Te(),d=Ce({text:"",tags:[]}),_=qe.NOTE,I=we().query,$=v(parseInt(((E=I.page)==null?void 0:E.toString())??"1")),p=v(Ve(((F=I.q)==null?void 0:F.toString())??"")),w=v(""),{tags:y}=Xe(_,p,d,async e=>{e.push({name:"trash",op:"",value:"false"}),w.value=Qe(e),await Re(),ne()}),{addToTags:x}=Ye(_,u,y),{allChecked:B,realAllChecked:N,selectRealAll:ee,allCheckedAlertVisible:te,clearSelection:V,toggleAllChecked:U,toggleItemChecked:Q,toggleRow:se,total:m,checked:R}=ve(u),{loading:oe,load:ne,refetch:A}=Ae({handle:(e,n)=>{n?O(M(n),"error"):e&&(u.value=e.notes.map(f=>({...f,checked:!1})),m.value=e.noteCount)},document:Ze,variables:()=>({offset:($.value-1)*b,limit:b,query:w.value}),appApi:!0});function le(e){Ee(Fe,{type:_,tags:y.value,item:{key:e.id,title:"",size:0},selected:y.value.filter(n=>e.tags.some(f=>f.id===n.id))})}Se($,e=>{J(q,`/notes?page=${e}&q=${P(p.value)}`)});const{mutate:Z,onDone:ae}=De({document:He,appApi:!0});function ie(){const e=u.value.filter(n=>n.checked);if(e.length===0){O(M("select_first"),"error");return}Z({query:`ids:${e.map(n=>n.id).join(",")}`})}ae(()=>{V(),A(),u.value.some(e=>e.tags.length)&&g.emit("refetch_tags",_)});function ce(e){d.tags.includes(e)?Ge(d.tags,n=>n.id===e.id):d.tags.push(e)}function de(){p.value=je(d),H(),D.value.dismiss()}function H(){J(q,`/notes?q=${P(p.value)}`)}const L=e=>{e.type===_&&(V(),A())},z=e=>{e.type===_&&A()};Me(()=>{g.on("item_tags_updated",z),g.on("items_tags_updated",L)}),Ie(()=>{g.off("item_tags_updated",z),g.off("items_tags_updated",L)});function re(e){X.push(`/notes/${e.id}`)}function ue(){X.push("/notes/create")}return(e,n)=>{const f=Pe,G=ot,j=Ke,_e=ge,pe=ke,he=Oe,me=Je,fe=be,T=Be("tooltip");return l(),a(C,null,[t("div",nt,[c(f,{current:()=>`${e.$t("page_title.notes")} (${o(m)})`},null,8,["current"]),o(R)?(l(),a(C,{key:0},[k((l(),a("button",{class:"icon-button",onClick:r(ie,["stop"])},[at,c(G)],8,lt)),[[T,e.$t("move_to_trash")]]),k((l(),a("button",{class:"icon-button",onClick:n[0]||(n[0]=r(s=>o(x)(o(N),w.value),["stop"]))},[it,c(j)])),[[T,e.$t("add_to_tags")]])],64)):S("",!0),t("md-outlined-button",{onClick:r(ue,["prevent"])},i(e.$t("create")),9,ct),c(_e,{ref_key:"searchInputRef",ref:D,modelValue:p.value,"onUpdate:modelValue":n[2]||(n[2]=s=>p.value=s),search:H},{filters:Ne(()=>[t("div",dt,[k(t("md-outlined-text-field",{label:e.$t("keywords"),"onUpdate:modelValue":n[1]||(n[1]=s=>d.text=s),"keyup.enter":"applyAndDoSearch"},null,8,rt),[[Le,d.text]]),t("label",ut,i(e.$t("tags")),1),t("md-chip-set",_t,[(l(!0),a(C,null,K(o(y),s=>(l(),a("md-filter-chip",{key:s.id,label:s.name,selected:d.tags.includes(s),onClick:h=>ce(s)},null,8,pt))),128))]),t("div",ht,[t("md-filled-button",{onClick:r(de,["stop"])},i(e.$t("search")),9,mt)])])]),_:1},8,["modelValue"])]),c(pe,{limit:b,total:o(m),"all-checked-alert-visible":o(te),"real-all-checked":o(N),"select-real-all":o(ee),"clear-selection":o(V)},null,8,["total","all-checked-alert-visible","real-all-checked","select-real-all","clear-selection"]),t("div",ft,[t("table",vt,[t("thead",null,[t("tr",null,[t("th",null,[t("md-checkbox",{"touch-target":"wrapper",onChange:n[3]||(n[3]=(...s)=>o(U)&&o(U)(...s)),checked:o(B),indeterminate:!o(B)&&o(R)},null,40,gt)]),kt,t("th",null,i(e.$t("title")),1),bt,t("th",null,i(e.$t("tags")),1),t("th",null,i(e.$t("updated_at")),1),t("th",null,i(e.$t("created_at")),1)])]),t("tbody",null,[(l(!0),a(C,null,K(u.value,s=>(l(),a("tr",{key:s.id,class:ze({selected:s.checked}),onClick:r(h=>o(se)(s),["stop"])},[t("td",null,[t("md-checkbox",{"touch-target":"wrapper",onChange:n[4]||(n[4]=(...h)=>o(Q)&&o(Q)(...h)),checked:s.checked},null,40,yt)]),t("td",null,[c(he,{id:s.id,raw:s},null,8,["id","raw"])]),t("td",null,[t("a",{href:"#",onClick:r(h=>re(s),["stop","prevent"])},i(s.title||e.$t("no_content")),9,Tt)]),t("td",Ct,[t("div",qt,[k((l(),a("button",{class:"icon-button",onClick:r(h=>o(Z)({query:`ids:${s.id}`}),["stop"])},[Vt,c(G)],8,wt)),[[T,e.$t("move_to_trash")]]),k((l(),a("button",{class:"icon-button",onClick:r(h=>le(s),["stop"])},[St,c(j)],8,At)),[[T,e.$t("add_to_tags")]])])]),t("td",null,[c(me,{tags:s.tags,type:o(_)},null,8,["tags","type"])]),t("td",Dt,i(o(W)(s.updatedAt)),1),t("td",Mt,i(o(W)(s.createdAt)),1)],10,$t))),128))]),u.value.length?S("",!0):(l(),a("tfoot",It,[t("tr",null,[t("td",Bt,[t("div",Nt,i(e.$t(o(We)(o(oe)))),1)])])]))])]),o(m)>b?(l(),Ue(fe,{key:0,modelValue:$.value,"onUpdate:modelValue":n[5]||(n[5]=s=>$.value=s),total:o(m),limit:b},null,8,["modelValue","total"])):S("",!0)],64)}}});export{Et as default};
