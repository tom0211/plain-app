import{u as ee,_ as te,a as se}from"./list-b690a49a.js";import{_ as oe}from"./FieldId-157cea66.js";import{_ as ae}from"./Multiselect-7ac32139.js";import{_ as ne,a as le}from"./label-outline-rounded-dd2719cc.js";import{_ as ue}from"./Breadcrumb-21545a73.js";import{d as ie,p as ce,s as re,a as de,r as m,u as pe,A as me,n as _e,B as ge,C as he,D as fe,E as be,t as ve,G as ye,H as ke,I as $e,J as Ve,o as u,c,b as e,e as p,g as a,F as y,w as k,k as C,v as Se,f as n,K as q,L as we,M as Te,N as L,O as Ce,y as N,x as qe,P as De,Q as Me,R as Be,z as $,S as V}from"./index-969024c8.js";import{n as Ue}from"./list-6498ebd9.js";import{u as Ae,a as Fe,b as Qe}from"./tags-92f7dae5.js";import{b as Re,a as Ke}from"./search-61784dc8.js";import"./VModal.vuevuetypescriptsetuptruelang-34936a76.js";import"./vee-validate.esm-fbca28e1.js";import"./baseIndexOf-70b929c6.js";const Ie={class:"v-toolbar"},Le={class:"right-actions"},Ne=["title"],ze=["title"],Ee={class:"row mb-3"},xe={class:"col-md-3 col-form-label"},Ge={class:"col-md-9"},Pe=["onKeyup"],He={class:"row mb-3"},Je={class:"col-md-3 col-form-label"},Oe={class:"col-md-9"},je={class:"actions"},We=["onClick"],Xe={class:"table"},Ye=e("th",null,"ID",-1),Ze=["onClick"],et=["onUpdate:modelValue"],tt={class:"nowrap"},st={class:"badge"},ot=["title"],at={key:0},nt={colspan:"7"},lt={class:"no-data-placeholder"},yt=ie({__name:"MessagesView",setup(ut){var K,I;const _=ce(),{app:z}=re(de()),i=m([]),{t:E}=pe(),r=me({text:"",tags:[]}),g="SMS",D=_e(),M=D.query,h=m(parseInt(((K=M.page)==null?void 0:K.toString())??"1")),f=50,b=m(0),l=m(ge(((I=M.q)==null?void 0:I.toString())??"")),B=m(""),{tags:S}=Ae(g,l,r,async s=>{d&&s.push({name:"type",op:"",value:J[d].toString()}),B.value=Re(s),await he(),P()}),{addToTags:U}=Fe(g,i,S),{removeFromTags:A}=Qe(g,i,S),x=fe(()=>i.value.some(s=>s.checked)),{selectAll:w,toggleSelect:F}=ee(i),{loading:G,load:P,refetch:H}=be({handle:(s,o)=>{o?ve(E(o),"error"):s&&(i.value=s.messages.map(T=>({...T,checked:!1})),b.value=s.messageCount)},document:ye,variables:()=>({offset:(h.value-1)*f,limit:f,query:B.value}),appApi:!0}),d=D.params.type,J={inbox:1,sent:2,drafts:3,outbox:4};ke(h,s=>{d?$(_,`/messages/${d}?page=${s}&q=${V(l.value)}`):$(_,`/messages?page=${s}&q=${V(l.value)}`)});function Q(){l.value=Ke(r),R()}function R(){d?$(_,`/messages/${d}?q=${V(l.value)}`):$(_,`/messages?q=${V(l.value)}`)}return $e(()=>{Ve.on("refetch_by_tag_type",s=>{s===g&&H()})}),(s,o)=>{const T=ue,O=ne,j=le,W=ae,X=te,Y=oe,Z=se;return u(),c(y,null,[e("div",Ie,[p(T,{current:()=>`${s.$t("page_title.messages")} (${b.value})`},null,8,["current"]),e("div",Le,[a(x)?(u(),c(y,{key:0},[e("button",{type:"button",class:"btn btn-action",onClick:o[0]||(o[0]=k((...t)=>a(U)&&a(U)(...t),["stop"])),title:s.$t("add_to_tags")},[p(O,{class:"bi"})],8,Ne),e("button",{type:"button",class:"btn btn-action",onClick:o[1]||(o[1]=k((...t)=>a(A)&&a(A)(...t),["stop"])),title:s.$t("remove_from_tags")},[p(j,{class:"bi"})],8,ze)],64)):C("",!0),p(X,{modelValue:l.value,"onUpdate:modelValue":o[4]||(o[4]=t=>l.value=t),search:R},{filters:Se(()=>[e("div",Ee,[e("label",xe,n(s.$t("keywords")),1),e("div",Ge,[q(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=t=>r.text=t),class:"form-control",onKeyup:Te(Q,["enter"])},null,40,Pe),[[we,r.text]])])]),e("div",He,[e("label",Je,n(s.$t("tags")),1),e("div",Oe,[p(W,{modelValue:r.tags,"onUpdate:modelValue":o[3]||(o[3]=t=>r.tags=t),label:"name","track-by":"id",options:a(S)},null,8,["modelValue","options"])])]),e("div",je,[e("button",{type:"button",class:"btn",onClick:k(Q,["stop"])},n(s.$t("search")),9,We)])]),_:1},8,["modelValue"])])]),e("table",Xe,[e("thead",null,[e("tr",null,[e("th",null,[q(e("input",{class:"form-check-input",type:"checkbox",onChange:o[5]||(o[5]=(...t)=>a(F)&&a(F)(...t)),"onUpdate:modelValue":o[6]||(o[6]=t=>Ce(w)?w.value=t:null)},null,544),[[L,a(w)]])]),Ye,e("th",null,n(s.$t("content")),1),e("th",null,n(s.$t("sms_address")),1),e("th",null,n(s.$t("type")),1),e("th",null,n(s.$t("tags")),1),e("th",null,n(s.$t("time")),1)])]),e("tbody",null,[(u(!0),c(y,null,N(i.value,t=>(u(),c("tr",{key:t.id,class:qe({checked:t.checked}),onClick:k(v=>t.checked=!t.checked,["stop"])},[e("td",null,[q(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":v=>t.checked=v},null,8,et),[[L,t.checked]])]),e("td",null,[p(Y,{id:t.id,raw:t},null,8,["id","raw"])]),e("td",null,n(t.body),1),e("td",null,n(t.address),1),e("td",tt,n(s.$t(`message_type.${t.type}`)),1),e("td",null,[(u(!0),c(y,null,N(t.tags,v=>(u(),c("span",st,n(v.name),1))),256))]),e("td",{title:a(De)(t.date),class:"nowrap"},n(a(Me)(t.date)),9,ot)],10,Ze))),128))]),i.value.length?C("",!0):(u(),c("tfoot",at,[e("tr",null,[e("td",nt,[e("div",lt,n(s.$t(a(Ue)(a(G),a(z).permissions,"READ_SMS"))),1)])])]))]),b.value>f?(u(),Be(Z,{key:0,modelValue:h.value,"onUpdate:modelValue":o[7]||(o[7]=t=>h.value=t),total:b.value,limit:f},null,8,["modelValue","total"])):C("",!0)],64)}}});export{yt as default};
