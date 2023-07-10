import{_ as R}from"./MonacoEditor.vuevuetypescriptsetuptruelang-0e60980f.js";import{_ as W}from"./Breadcrumb-21545a73.js";import{g as S,M as $}from"./splitpanes.es-1cecc8e0.js";import{au as Q,av as B,d as H,p as j,u as F,n as G,r as y,s as O,a as U,D as P,i as X,t as q,aw as z,V as J,ax as K,ay as Y,o as Z,c as ee,b,e as E,v as M,j as te,f as A,g as h,H as ne,Q as ae,_ as ie}from"./index-969024c8.js";import{u as oe}from"./markdown-f4c7565d.js";import{t as D}from"./toInteger-9d33d366.js";import{t as se}from"./truncate-5023c35a.js";import"./stringToArray-46bdaa9b.js";var re=function(){return Q.Date.now()};const I=re;var ue="Expected a function",ce=Math.max,le=Math.min;function de(V,u,o){var l,s,i,a,t,c,v=0,T=!1,d=!1,p=!0;if(typeof V!="function")throw new TypeError(ue);u=D(u)||0,B(o)&&(T=!!o.leading,d="maxWait"in o,i=d?ce(D(o.maxWait)||0,u):i,p="trailing"in o?!!o.trailing:p);function x(e){var f=l,k=s;return l=s=void 0,v=e,a=V.apply(k,f),a}function N(e){return v=e,t=setTimeout(_,u),T?x(e):a}function C(e){var f=e-c,k=e-v,L=u-f;return d?le(L,i-k):L}function w(e){var f=e-c,k=e-v;return c===void 0||f>=u||f<0||d&&k>=i}function _(){var e=I();if(w(e))return n(e);t=setTimeout(_,C(e))}function n(e){return t=void 0,p&&l?x(e):(l=s=void 0,a)}function r(){t!==void 0&&clearTimeout(t),v=0,l=c=s=t=void 0}function g(){return t===void 0?a:n(I())}function m(){var e=I(),f=w(e);if(l=arguments,s=this,c=e,f){if(t===void 0)return N(c);if(d)return clearTimeout(t),t=setTimeout(_,u),x(c)}return t===void 0&&(t=setTimeout(_,u)),a}return m.cancel=r,m.flush=g,m}const me={class:"page-container container-fluid"},fe={class:"main"},ve={class:"time"},pe=["innerHTML"],_e=H({__name:"NoteEditView",setup(V){const u=j(),{t:o}=F(),l=G(),s=y(l.params.id),i=y(),a=y(""),t=y(""),{app:c}=O(U()),v=P(()=>{var n;return(n=i.value)!=null&&n.deletedAt?["/notes","/notes/trash"]:["/notes"]}),{render:T}=oe(c);let d=!1;function p(){return s.value==="create"}const x=de(()=>{C({id:p()?"":s.value,input:{content:a.value,title:se(a.value,{length:100,omission:""})}})},500),N=()=>{ne(a,async n=>{t.value=await T(n),x()})};p()?N():X({handle:async(n,r)=>{if(r)q(o(r),"error");else{if(d)return;i.value=n.note,a.value=n.note.content,t.value=await T(a.value),d=!0,N()}},document:z,variables:()=>({id:s.value}),appApi:!0});const{mutate:C,onDone:w}=J({document:K,appApi:!0});w(n=>{var g,m;i.value=n.data.saveNote,p()&&(s.value=(g=i.value)==null?void 0:g.id,Y(u,`/notes/${(m=i.value)==null?void 0:m.id}`))});function _(){var r;const n=(r=i==null?void 0:i.value)==null?void 0:r.updatedAt;return n?`(${o("updated_at")}: ${ae(n)})`:""}return(n,r)=>{const g=W,m=R;return Z(),ee("div",me,[b("div",fe,[E(g,{paths:h(v)},{current:M(()=>[te(A(s.value==="create"?h(o)("create"):h(o)("edit")),1),b("span",ve,A(_()),1)]),_:1},8,["paths"]),E(h($),{class:"panel-container"},{default:M(()=>[E(h(S),null,{default:M(()=>[E(m,{language:"html",modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=e=>a.value=e)},null,8,["modelValue"])]),_:1}),E(h(S),{class:"markdown-panel"},{default:M(()=>[b("div",{class:"md-container",innerHTML:t.value},null,8,pe)]),_:1})]),_:1})])])}}});const ye=ie(_e,[["__scopeId","data-v-8eaa310c"]]);export{ye as default};
