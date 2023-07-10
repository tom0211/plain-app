import{u as nt,_ as at,a as lt}from"./list-b690a49a.js";import{_ as ct}from"./FieldId-157cea66.js";import{_ as ut}from"./Multiselect-7ac32139.js";import{_ as it,a as rt}from"./label-outline-rounded-dd2719cc.js";import{_ as dt}from"./Breadcrumb-21545a73.js";import{d as pt,p as _t,r as m,u as mt,A as ht,n as bt,B as ft,C as vt,D as gt,E as kt,t as I,az as yt,H as $t,V as Ct,aA as Vt,I as wt,J as Tt,o as c,c as u,b as t,e as p,g as a,F as g,w as i,f as n,k as C,v as St,K as V,L as At,M as Dt,N as K,O as Nt,y as L,x as qt,Q as z,R as Bt,z as R,S as E,m as G}from"./index-969024c8.js";import{b as Mt,a as Qt}from"./search-61784dc8.js";import{n as Ut}from"./list-6498ebd9.js";import{u as Ft,a as It,b as Kt}from"./tags-92f7dae5.js";import"./VModal.vuevuetypescriptsetuptruelang-34936a76.js";import"./baseIndexOf-70b929c6.js";import"./vee-validate.esm-fbca28e1.js";const Lt={class:"v-toolbar"},zt={class:"right-actions"},Rt=["title"],Et=["title"],Gt=["onClick"],Ot=["onClick"],Ht={class:"row mb-3"},Jt={class:"col-md-3 col-form-label"},Pt={class:"col-md-9"},jt=["onKeyup"],Wt={class:"row mb-3"},Xt={class:"col-md-3 col-form-label"},Yt={class:"col-md-9"},Zt={class:"actions"},xt=["onClick"],te={class:"table"},ee=t("th",null,"ID",-1),oe=["onClick"],se=["onUpdate:modelValue"],ne=["onClick"],ae={class:"badge"},le={class:"nowrap"},ce={class:"nowrap"},ue={key:0},ie={colspan:"6"},re={class:"no-data-placeholder"},we=pt({__name:"NotesView",setup(de){var U,F;const w=_t(),l=m([]),{t:T}=mt(),r=ht({text:"",tags:[]}),h="NOTE",S=bt().query,b=m(parseInt(((U=S.page)==null?void 0:U.toString())??"1")),f=50,v=m(0),d=m(ft(((F=S.q)==null?void 0:F.toString())??"")),A=m(""),{tags:k}=Ft(h,d,r,async e=>{e.push({name:"trash",op:"",value:"false"}),A.value=Mt(e),await vt(),J()}),{addToTags:D}=It(h,l,k),{removeFromTags:N}=Kt(h,l,k),O=gt(()=>l.value.some(e=>e.checked)),{selectAll:y,toggleSelect:q}=nt(l),{loading:H,load:J,refetch:B}=kt({handle:(e,s)=>{s?I(T(s),"error"):e&&(l.value=e.notes.map($=>({...$,checked:!1})),v.value=e.noteCount)},document:yt,variables:()=>({offset:(b.value-1)*f,limit:f,query:A.value}),appApi:!0});$t(b,e=>{R(w,`/notes?page=${e}&q=${E(d.value)}`)});const{mutate:P,onDone:j}=Ct({document:Vt,appApi:!0});function W(){const e=l.value.filter(s=>s.checked);if(e.length===0){I(T("select_first"),"error");return}P({ids:e.map(s=>s.id)})}j(()=>{B()});function M(){d.value=Qt(r),Q()}function Q(){R(w,`/notes?q=${E(d.value)}`)}wt(()=>{Tt.on("refetch_by_tag_type",e=>{e===h&&B()})});function X(e){G.push(`/notes/${e.id}`)}function Y(){G.push("/notes/create")}return(e,s)=>{const $=dt,Z=it,x=rt,tt=ut,et=at,ot=ct,st=lt;return c(),u(g,null,[t("div",Lt,[p($,{current:()=>`${e.$t("page_title.notes")} (${v.value})`},null,8,["current"]),t("div",zt,[a(O)?(c(),u(g,{key:0},[t("button",{type:"button",class:"btn btn-action",onClick:s[0]||(s[0]=i((...o)=>a(D)&&a(D)(...o),["stop"])),title:e.$t("add_to_tags")},[p(Z,{class:"bi"})],8,Rt),t("button",{type:"button",class:"btn btn-action",onClick:s[1]||(s[1]=i((...o)=>a(N)&&a(N)(...o),["stop"])),title:e.$t("remove_from_tags")},[p(x,{class:"bi"})],8,Et),t("button",{type:"button",class:"btn btn-action",onClick:i(W,["stop"])},n(e.$t("move_to_trash")),9,Gt)],64)):C("",!0),t("button",{class:"btn btn-action",type:"button",onClick:i(Y,["prevent"])},n(e.$t("create")),9,Ot),p(et,{modelValue:d.value,"onUpdate:modelValue":s[4]||(s[4]=o=>d.value=o),search:Q},{filters:St(()=>[t("div",Ht,[t("label",Jt,n(e.$t("keywords")),1),t("div",Pt,[V(t("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=o=>r.text=o),class:"form-control",onKeyup:Dt(M,["enter"])},null,40,jt),[[At,r.text]])])]),t("div",Wt,[t("label",Xt,n(e.$t("tags")),1),t("div",Yt,[p(tt,{modelValue:r.tags,"onUpdate:modelValue":s[3]||(s[3]=o=>r.tags=o),label:"name","track-by":"id",options:a(k)},null,8,["modelValue","options"])])]),t("div",Zt,[t("button",{type:"button",class:"btn",onClick:i(M,["stop"])},n(e.$t("search")),9,xt)])]),_:1},8,["modelValue"])])]),t("table",te,[t("thead",null,[t("tr",null,[t("th",null,[V(t("input",{class:"form-check-input",type:"checkbox",onChange:s[5]||(s[5]=(...o)=>a(q)&&a(q)(...o)),"onUpdate:modelValue":s[6]||(s[6]=o=>Nt(y)?y.value=o:null)},null,544),[[K,a(y)]])]),ee,t("th",null,n(e.$t("title")),1),t("th",null,n(e.$t("tags")),1),t("th",null,n(e.$t("updated_at")),1),t("th",null,n(e.$t("created_at")),1)])]),t("tbody",null,[(c(!0),u(g,null,L(l.value,o=>(c(),u("tr",{key:o.id,class:qt({checked:o.checked}),onClick:i(_=>o.checked=!o.checked,["stop"])},[t("td",null,[V(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":_=>o.checked=_},null,8,se),[[K,o.checked]])]),t("td",null,[p(ot,{id:o.id,raw:o},null,8,["id","raw"])]),t("td",null,[t("a",{href:"#",onClick:i(_=>X(o),["stop"])},n(o.title||e.$t("no_content")),9,ne)]),t("td",null,[(c(!0),u(g,null,L(o.tags,_=>(c(),u("span",ae,n(_.name),1))),256))]),t("td",le,n(a(z)(o.updatedAt)),1),t("td",ce,n(a(z)(o.createdAt)),1)],10,oe))),128))]),l.value.length?C("",!0):(c(),u("tfoot",ue,[t("tr",null,[t("td",ie,[t("div",re,n(e.$t(a(Ut)(a(H)))),1)])])]))]),v.value>f?(c(),Bt(st,{key:0,modelValue:b.value,"onUpdate:modelValue":s[7]||(s[7]=o=>b.value=o),total:v.value,limit:f},null,8,["modelValue","total"])):C("",!0)],64)}}});export{we as default};
