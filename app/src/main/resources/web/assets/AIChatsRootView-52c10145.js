import{_ as M}from"./TagFilter.vuevuetypescriptsetuptruelang-b6d269b8.js";import{o as g,c as T,b as e,d as k,r as A,u as L,V,aJ as K,a4 as S,i as x,t as B,aK as G,C as I,a5 as N,R as Z,v as u,f as p,K as b,O as P,M as Q,g as t,L as R,a6 as z,n as D,p as F,q as E,e as n,j,w as y,x as H,z as J,Y as O}from"./index-969024c8.js";import{g as $,M as U}from"./splitpanes.es-1cecc8e0.js";import{p as Y}from"./search-61784dc8.js";import{_ as W}from"./VModal.vuevuetypescriptsetuptruelang-34936a76.js";import{u as X,a as tt}from"./vee-validate.esm-fbca28e1.js";import"./index-310d6f13.js";import"./EditValueModal.vuevuetypescriptsetuptruelang-7059a330.js";import"./DeleteConfirm.vuevuetypescriptsetuptruelang-8440e164.js";import"./baseIndexOf-70b929c6.js";const et={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},st=e("path",{fill:"currentColor",d:"m9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2h-5.5Zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Zm0-2q-.625 0-1.063-.438T10.55 12q0-.625.438-1.063t1.062-.437q.625 0 1.063.438T13.55 12q0 .625-.438 1.063t-1.062.437ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588t1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12q0-.4-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587L11 20Z"},null,-1),ot=[st];function at(m,l){return g(),T("svg",et,ot)}const nt={name:"material-symbols-settings-outline",render:at},lt={class:"row"},it={class:"col-md-2 col-form-label"},ct={class:"col-md-10"},rt=["placeholder"],ut=["disabled"],pt=k({__name:"AIChatConfigModal",props:{value:{type:String}},setup(m){const l=m,{handleSubmit:h}=X(),i=A(),{t:f}=L(),{mutate:v,loading:d,onDone:C}=V({document:K,options:{update:()=>{}},appApi:!0}),{value:o,resetField:q,errorMessage:c}=tt("inputValue",S().required());o.value=l.value??"",o.value||q(),x({handle:(s,a)=>{a?B(f(a),"error"):s&&(o.value=s.aiChatConfig.chatGPTApiKey)},document:G,variables:null,appApi:!0}),(async()=>{var s;await I(),(s=i.value)==null||s.focus()})();const _=h(()=>{v({chatGPTApiKey:o.value??""})});return C(()=>{N()}),(s,a)=>{const w=W;return g(),Z(w,{title:"ChatGPT"},{body:u(()=>[e("div",lt,[e("label",it,p(s.$t("api_key")),1),e("div",ct,[b(e("input",{ref_key:"input",ref:i,type:"text",placeholder:s.$t("api_key"),class:"form-control","onUpdate:modelValue":a[0]||(a[0]=r=>P(o)?o.value=r:null),onKeyup:a[1]||(a[1]=Q((...r)=>t(_)&&t(_)(...r),["enter"]))},null,40,rt),[[R,t(o)]]),b(e("div",{class:"invalid-feedback"},p(t(c)?s.$t(t(c)):""),513),[[z,t(c)]])])])]),action:u(()=>[e("button",{type:"button",disabled:t(d),class:"btn",onClick:a[2]||(a[2]=(...r)=>t(_)&&t(_)(...r))},p(s.$t("save")),9,ut)]),_:1})}}}),dt={class:"page-container container-fluid"},_t={class:"sidebar"},mt={class:"nav-title"},ht=["onClick"],ft={class:"nav"},vt=["onClick"],qt={class:"main"},Lt=k({__name:"AIChatsRootView",setup(m){const l=D(),h=F(),i=Y(l.query);function f(){J(h,"/aichats")}function v(){O(pt)}return(d,C)=>{const o=nt,q=M,c=E("router-view");return g(),T("div",dt,[n(t(U),null,{default:u(()=>[n(t($),{size:"20"},{default:u(()=>[e("div",_t,[e("h2",mt,[j(p(d.$t("page_title.aichats"))+" ",1),e("button",{class:"btn btn-sm",type:"button",onClick:y(v,["prevent"])},[n(o)],8,ht)]),e("ul",ft,[e("li",{onClick:y(f,["prevent"]),class:H({active:t(l).path==="/aichats"&&!t(i)})},p(d.$t("all")),11,vt)]),n(q,{"tag-type":"AI_CHAT",selected:t(i)},null,8,["selected"])])]),_:1}),n(t($),null,{default:u(()=>[e("div",qt,[n(c)])]),_:1})]),_:1})])}}});export{Lt as default};
