import{b as ue,u as ce,_ as de,a as pe}from"./list-2a0eb093.js";import{_ as re}from"./FieldId-d3cd765c.js";import{o as c,c as d,b as t,d as _e,p as fe,r as f,u as he,s as me,a as ve,A as ke,n as ge,B as ye,Z as be,i as $e,t as we,$ as qe,G as Ce,U as Se,a0 as Ve,D as Te,a1 as Ie,H as Ae,I as De,e as q,w as _,g as a,f as o,v as Ue,J as T,K as Le,L as Me,M as P,N as Qe,F as G,y as Be,x as xe,j as ze,l as Fe,O as K,P as N,k as R,Q as Pe,z as C,R as S,a2 as Ge,a3 as Ke,_ as Ne}from"./index-03d179e2.js";import{_ as Re}from"./Breadcrumb-49d3fe3b.js";import{n as Ze}from"./list-6498ebd9.js";import{c as He,b as Z}from"./search-fae66e3e.js";import{u as je,a as Ee,b as Je}from"./files-9d4356a8.js";import"./VModal.vuevuetypescriptsetuptruelang-33c2fc8e.js";import"./baseIndexOf-70b929c6.js";import"./toInteger-dbfb180b.js";const Oe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},We=t("path",{fill:"currentColor",d:"M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.275-.275-.275-.7t.275-.7q.275-.275.713-.287t.712.262L11 12.15V5q0-.425.288-.713T12 4q.425 0 .713.288T13 5v7.15l1.875-1.875q.275-.275.713-.263t.712.288q.275.275.275.7t-.275.7l-3.6 3.6q-.15.15-.325.213t-.375.062ZM6 20q-.825 0-1.413-.588T4 18v-2q0-.425.288-.713T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.713T19 15q.425 0 .713.288T20 16v2q0 .825-.588 1.413T18 20H6Z"},null,-1),Xe=[We];function Ye(i,h){return c(),d("svg",Oe,Xe)}const et={name:"material-symbols-download-rounded",render:Ye};function tt(i,h){const m=i.findIndex(v=>v.id===h);m!==-1&&i.splice(m,1)}const st=i=>(Ge("data-v-1b651032"),i=i(),Ke(),i),nt={class:"v-toolbar"},ot={class:"right-actions"},at=["onClick"],lt={class:"row mb-3"},it={class:"col-md-3 col-form-label"},ut={class:"col-md-9"},ct=["onKeyup"],dt={class:"actions"},pt=["onClick"],rt={class:"table"},_t={class:"actions"},ft=["onClick"],ht=["onUpdate:modelValue"],mt=st(()=>t("br",null,null,-1)),vt={class:"nowrap"},kt=["title"],gt=["title"],yt={class:"actions one"},bt={key:0},$t=["onClick"],wt={key:0},qt={colspan:"8"},Ct={class:"no-data-placeholder"},St=_e({__name:"AppsView",setup(i){var z,F;const{input:h,upload:m,uploadChanged:v}=je(),k=fe(),l=f([]),{t:I}=he(),{app:A}=me(ve()),g=ke({text:"",tags:[]}),{downloadItems:D}=Ee(l,"apps.zip"),{downloadFile:H}=Je(A),U=ge(),L=U.query,y=f(parseInt(((z=L.page)==null?void 0:z.toString())??"1")),b=50,$=f(0),u=f(ye(((F=L.q)==null?void 0:F.toString())??"")),M=He(u.value),p=U.params.type;p&&M.push({name:"type",op:"",value:p});const j=f(Z(M)),{deleteItems:E}=ue(be,()=>{W()},l);I("delete");const J=()=>{m(A.value.downloadsDir)},{selectAll:V,toggleSelect:Q}=ce(l),{loading:O,refetch:W}=$e({handle:(e,n)=>{n?we(I(n),"error"):e&&(l.value=e.packages.map(r=>({...r,checked:!1})),$.value=e.packageCount)},document:qe,variables:()=>({offset:(y.value-1)*b,limit:b,query:j.value}),appApi:!0});Ce(y,e=>{p?C(k,`/apps/${p}?page=${e}&q=${S(u.value)}`):C(k,`/apps?page=${e}&q=${S(u.value)}`)});function B(){const e=[];g.text&&e.push({name:"text",op:"",value:g.text}),u.value=Z(e),x()}function x(){p?C(k,`/apps/${p}?q=${S(u.value)}`):C(k,`/apps?q=${S(u.value)}`)}const{mutate:X,onDone:Y}=Se({document:Ve,appApi:!0});function ee(e){Y(()=>{e.isUninstalling=!0}),X({id:e.id})}const{loading:te,load:se,refetch:ne}=Te({handle:(e,n)=>{if(e)for(const r of e.packageStatuses)r.exist||tt(l.value,r.id)},document:Ie,variables:()=>({ids:l.value.filter(e=>e.isUninstalling).map(e=>e.id)}),appApi:!0});return Ae(()=>{De.on("upload_task_done",n=>{n.status});let e=!0;setInterval(()=>{l.value.some(n=>n.isUninstalling)&&!te.value&&(e?(se(),e=!1):ne())},1e3)}),(e,n)=>{const r=Re,oe=de,ae=et,le=re,ie=pe;return c(),d(G,null,[t("div",nt,[q(r,{current:()=>`${e.$t("page_title.apps")} (${$.value})`},null,8,["current"]),t("div",ot,[t("button",{type:"button",class:"btn btn-action",onClick:n[0]||(n[0]=_((...s)=>a(D)&&a(D)(...s),["stop"]))},o(e.$t("download")),1),t("button",{type:"button",class:"btn btn-action",onClick:_(J,["stop"]),style:{display:"none"}},o(e.$t("install")),9,at),q(oe,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=s=>u.value=s),search:x},{filters:Ue(()=>[t("div",lt,[t("label",it,o(e.$t("keywords")),1),t("div",ut,[T(t("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=s=>g.text=s),class:"form-control",onKeyup:Me(B,["enter"])},null,40,ct),[[Le,g.text]])])]),t("div",dt,[t("button",{type:"button",class:"btn",onClick:_(B,["stop"])},o(e.$t("search")),9,pt)])]),_:1},8,["modelValue"])])]),t("table",rt,[t("thead",null,[t("tr",null,[t("th",null,[T(t("input",{class:"form-check-input",type:"checkbox",onChange:n[3]||(n[3]=(...s)=>a(Q)&&a(Q)(...s)),"onUpdate:modelValue":n[4]||(n[4]=s=>Qe(V)?V.value=s:null)},null,544),[[P,a(V)]])]),t("th",null,o(e.$t("name")),1),t("th",null,o(e.$t("version")),1),t("th",null,o(e.$t("size")),1),t("th",null,o(e.$t("type")),1),t("th",null,o(e.$t("installed_at")),1),t("th",null,o(e.$t("updated_at")),1),t("th",_t,o(e.$t("actions")),1)])]),t("tbody",null,[(c(!0),d(G,null,Be(l.value,s=>(c(),d("tr",{key:s.id,class:xe({checked:s.checked}),onClick:_(w=>s.checked=!s.checked,["stop"])},[t("td",null,[T(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":w=>s.checked=w},null,8,ht),[[P,s.checked]])]),t("td",null,[t("strong",null,[ze(o(s.name)+" ",1),q(ae,{class:"bi bi-btn",onClick:_(w=>a(H)(s.path,`${s.name.replace(" ","")}-${s.id}.apk`),["stop"])},null,8,["onClick"])]),mt,q(le,{id:s.id,raw:s},null,8,["id","raw"])]),t("td",null,o(s.version),1),t("td",null,o(a(Fe)(s.size)),1),t("td",vt,o(e.$t("app_type."+s.type)),1),t("td",{class:"nowrap",title:a(K)(s.installedAt)},o(a(N)(s.installedAt)),9,kt),t("td",{class:"nowrap",title:a(K)(s.updatedAt)},o(a(N)(s.updatedAt)),9,gt),t("td",yt,[s.isUninstalling?(c(),d("span",bt,o(e.$t("uninstalling")),1)):(c(),d("a",{key:1,href:"#",class:"v-link",onClick:_(w=>ee(s),["stop"])},o(e.$t("uninstall")),9,$t))])],10,ft))),128))]),l.value.length?R("",!0):(c(),d("tfoot",wt,[t("tr",null,[t("td",qt,[t("div",Ct,o(e.$t(a(Ze)(a(O)))),1)])])]))]),$.value>b?(c(),Pe(ie,{key:0,modelValue:y.value,"onUpdate:modelValue":n[5]||(n[5]=s=>y.value=s),total:$.value,limit:b},null,8,["modelValue","total"])):R("",!0),t("input",{ref_key:"fileInput",ref:h,style:{display:"none"},type:"file",accept:".apk",multiple:"",onChange:n[6]||(n[6]=(...s)=>a(v)&&a(v)(...s))},null,544)],64)}}});const xt=Ne(St,[["__scopeId","data-v-1b651032"]]);export{xt as default};
