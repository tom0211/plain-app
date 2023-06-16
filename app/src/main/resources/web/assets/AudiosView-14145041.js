import{u as ht,_ as ft,a as yt}from"./list-2a0eb093.js";import{U as j,ap as gt,u as O,I as w,t as R,r as m,aq as vt,d as kt,p as bt,s as $t,a as Tt,A as wt,aj as F,n as Vt,B as Ct,C as At,ah as St,D as It,ar as Dt,G as Rt,H as Ut,o as d,c as r,b as t,e as v,w as T,f as a,v as qt,J as S,K as Lt,L as Mt,g as l,M as N,N as Qt,F as I,y as P,x as xt,j as zt,Q as E,k as D,W as Bt,l as Ft,z as G,R as K,aa as Nt,as as Pt}from"./index-03d179e2.js";import{_ as Et}from"./FieldId-d3cd765c.js";import{_ as Gt}from"./Multiselect-22bdf84a.js";import{_ as Kt}from"./Dropdown.vuevuetypescriptsetuptruelang-615229ff.js";import{_ as jt}from"./Breadcrumb-49d3fe3b.js";import{b as Ot,a as Wt}from"./search-fae66e3e.js";import{n as Ht}from"./list-6498ebd9.js";import{u as Jt,a as Xt,b as Yt}from"./tags-01c5b779.js";import{u as Zt,_ as te}from"./ConfirmModal.vuevuetypescriptsetuptruelang-7670a3cc.js";import{a as ee}from"./files-9d4356a8.js";import"./VModal.vuevuetypescriptsetuptruelang-33c2fc8e.js";import"./baseIndexOf-70b929c6.js";import"./vee-validate.esm-16aa8390.js";import"./toInteger-dbfb180b.js";const oe=h=>{const{mutate:p,loading:n,onDone:i}=j({document:gt,appApi:!0}),{t:u}=O();return i(()=>{w.emit("refetch_app"),R(u("added_to_playlist"))}),{loading:n,addToPlaylist:()=>{const c=h.value.filter(f=>f.checked);if(c.length===0){R(u("select_first"),"error");return}p({paths:c.map(f=>f.path)})}}},se=()=>{const h=m(""),{mutate:p,loading:n,onDone:i}=j({document:vt,appApi:!0});return i(()=>{w.emit("refetch_app"),w.emit("play_audio")}),{loading:n,playing:h,play:u=>{h.value=u.path,p({path:u.path})}}},ae={class:"v-toolbar"},ne={class:"right-actions"},le=["onClick"],ie={class:"row mb-3"},ue={class:"col-md-3 col-form-label"},ce={class:"col-md-9"},de=["onKeyup"],re={class:"row mb-3"},pe={class:"col-md-3 col-form-label"},_e={class:"col-md-9"},me={class:"actions"},he=["onClick"],fe={class:"table"},ye=t("th",null,"ID",-1),ge=["onClick"],ve=["onUpdate:modelValue"],ke={key:0,class:"spinner spinner-sm"},be={class:"badge"},$e={key:0},Te={colspan:"7"},we={class:"no-data-placeholder"},Ne=kt({__name:"AudiosView",setup(h){var x,z;const p=bt(),n=m([]),{t:i}=O(),{app:u}=$t(Tt()),c=wt({text:"",tags:[]}),f=F(()=>u.value.audios??[]),W=F(()=>{const o=u.value.audioCurrent;return f.value.find(s=>s.path==o)}),y="AUDIO",U=Vt().query,k=m(parseInt(((x=U.page)==null?void 0:x.toString())??"1")),b=50,$=m(0),_=m(Ct(((z=U.q)==null?void 0:z.toString())??"")),q=m(""),{tags:V}=Jt(y,_,c,async o=>{q.value=Ot(o),await At(),lt()}),{addToPlaylist:H}=oe(n),{addToTags:J}=Xt(y,n,V),{removeFromTags:X}=Yt(y,n,V),{deleteItems:Y}=Zt(y,n),{downloadItems:Z}=ee(n,"audios.zip"),tt=St(),{play:et,playing:ot,loading:st}=se(),at=[{text:i("add_to_playlist"),click:H},{text:i("add_to_tags"),click:J},{text:i("remove_from_tags"),click:X},{text:i("download"),click:Z},{text:i("delete"),click:Y}],{selectAll:C,toggleSelect:L}=ht(n),{loading:nt,load:lt,refetch:it}=It({handle:(o,s)=>{s?R(i(s),"error"):o&&(n.value=o.audios.map(A=>({...A,checked:!1})),$.value=o.audioCount)},document:Dt,variables:()=>({offset:(k.value-1)*b,limit:b,query:q.value}),appApi:!0});Rt(k,o=>{G(p,`/audios?page=${o}&q=${K(_.value)}`)});function ut(){tt.push("/files"),Nt(te,{message:i("upload_audios")})}function M(){_.value=Wt(c),Q()}function Q(){G(p,`/audios?q=${K(_.value)}`)}return Ut(()=>{w.on("refetch_by_tag_type",o=>{o===y&&it()})}),(o,s)=>{const A=jt,ct=Kt,dt=Gt,rt=ft,pt=Et,_t=Pt,mt=yt;return d(),r(I,null,[t("div",ae,[v(A,{current:()=>`${o.$t("page_title.audios")} (${$.value})`},null,8,["current"]),t("div",ne,[t("button",{type:"button",class:"btn btn-action",onClick:T(ut,["stop"])},a(o.$t("upload")),9,le),v(ct,{title:o.$t("actions"),items:at},null,8,["title"]),v(rt,{modelValue:_.value,"onUpdate:modelValue":s[2]||(s[2]=e=>_.value=e),search:Q},{filters:qt(()=>[t("div",ie,[t("label",ue,a(o.$t("keywords")),1),t("div",ce,[S(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>c.text=e),class:"form-control",onKeyup:Mt(M,["enter"])},null,40,de),[[Lt,c.text]])])]),t("div",re,[t("label",pe,a(o.$t("tags")),1),t("div",_e,[v(dt,{modelValue:c.tags,"onUpdate:modelValue":s[1]||(s[1]=e=>c.tags=e),label:"name","track-by":"id",options:l(V)},null,8,["modelValue","options"])])]),t("div",me,[t("button",{type:"button",class:"btn",onClick:T(M,["stop"])},a(o.$t("search")),9,he)])]),_:1},8,["modelValue"])])]),t("table",fe,[t("thead",null,[t("tr",null,[t("th",null,[S(t("input",{class:"form-check-input",type:"checkbox",onChange:s[3]||(s[3]=(...e)=>l(L)&&l(L)(...e)),"onUpdate:modelValue":s[4]||(s[4]=e=>Qt(C)?C.value=e:null)},null,544),[[N,l(C)]])]),ye,t("th",null,a(o.$t("name")),1),t("th",null,a(o.$t("artist")),1),t("th",null,a(o.$t("tags")),1),t("th",null,a(o.$t("duration")),1),t("th",null,a(o.$t("file_size")),1)])]),t("tbody",null,[(d(!0),r(I,null,P(n.value,e=>{var B;return d(),r("tr",{key:e.id,class:xt({checked:e.checked}),onClick:T(g=>e.checked=!e.checked,["stop"])},[t("td",null,[S(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":g=>e.checked=g},null,8,ve),[[N,e.checked]])]),t("td",null,[v(pt,{id:e.id,raw:e},null,8,["id","raw"])]),t("td",null,[zt(a(e.title)+" ",1),l(st)&&e.path===l(ot)?(d(),r("i",ke)):e.path!==((B=l(W))==null?void 0:B.path)?(d(),E(_t,{key:1,class:"bi bi-btn",onClick:T(g=>l(et)(e),["stop"])},null,8,["onClick"])):D("",!0)]),t("td",null,a(e.artist),1),t("td",null,[(d(!0),r(I,null,P(e.tags,g=>(d(),r("span",be,a(g.name),1))),256))]),t("td",null,a(l(Bt)(e.duration)),1),t("td",null,a(l(Ft)(e.size)),1)],10,ge)}),128))]),n.value.length?D("",!0):(d(),r("tfoot",$e,[t("tr",null,[t("td",Te,[t("div",we,a(o.$t(l(Ht)(l(nt),l(u).permissions,"WRITE_EXTERNAL_STORAGE"))),1)])])]))]),$.value>b?(d(),E(mt,{key:0,modelValue:k.value,"onUpdate:modelValue":s[5]||(s[5]=e=>k.value=e),total:$.value,limit:b},null,8,["modelValue","total"])):D("",!0)],64)}}});export{Ne as default};