import{b as ie,u as ue,_ as de,a as ce}from"./list-b690a49a.js";import{_ as re}from"./FieldId-157cea66.js";import{_ as pe}from"./Multiselect-7ac32139.js";import{_ as _e,a as me}from"./label-outline-rounded-dd2719cc.js";import{_ as fe}from"./delete-outline-rounded-9f24a513.js";import{_ as he}from"./Breadcrumb-21545a73.js";import{d as be,p as ve,r,u as ge,A as ye,n as ke,B as $e,c2 as Ce,D as we,E as Ve,t as A,c3 as Fe,i as Te,C as Ee,c4 as Qe,H as Se,I as De,J as O,V as Ae,c5 as Ue,o as d,c as p,b as e,e as _,g as l,F as E,w as m,k as Q,f as a,v as Ie,K as U,L as qe,M as Be,N as Y,O as Le,y as j,x as Me,af as Ke,P as Ne,Q as Re,R as Ge,z as x,S as W,m as ze}from"./index-969024c8.js";import{c as Pe,k as X,b as He,a as Je}from"./search-61784dc8.js";import{n as Oe}from"./list-6498ebd9.js";import{a as Ye,b as je}from"./tags-92f7dae5.js";import"./VModal.vuevuetypescriptsetuptruelang-34936a76.js";import"./baseIndexOf-70b929c6.js";import"./vee-validate.esm-fbca28e1.js";const xe={class:"v-toolbar"},We={class:"right-actions"},Xe=["title"],Ze=["title"],et=["title"],tt=["disabled","onClick"],st={class:"row mb-3"},ot={class:"col-md-3 col-form-label"},nt={class:"col-md-9"},lt=["onKeyup"],at={class:"row mb-3"},it={class:"col-md-3 col-form-label"},ut={class:"col-md-9"},dt={class:"actions"},ct=["onClick"],rt={class:"table"},pt=e("th",null,"ID",-1),_t=e("th",null,null,-1),mt=["onClick"],ft=["onUpdate:modelValue"],ht=["src"],bt=["href","onClick"],vt={class:"badge"},gt=["title"],yt={key:0},kt={colspan:"7"},$t={class:"no-data-placeholder"},Mt=be({__name:"FeedsView",setup(Ct){var H,J;const I=ve(),c=r([]),{t:S}=ge(),i=ye({text:"",feeds:[],tags:[]}),$="FEED_ENTRY",q=ke().query,C=r(parseInt(((H=q.page)==null?void 0:H.toString())??"1")),w=50,V=r(0),F=r([]),Z=r([]),f=r($e(((J=q.q)==null?void 0:J.toString())??"")),B=r(""),{addToTags:L}=Ye($,c,F),{removeFromTags:M}=je($,c,F),{deleteItems:K}=ie(Ce,()=>{R()},c),T=r(!1),ee=we(()=>c.value.some(t=>t.checked)),{selectAll:D,toggleSelect:N}=ue(c),{loading:te,load:se,refetch:R}=Ve({handle:(t,o)=>{o?A(S(o),"error"):t&&(c.value=t.feedEntries.map(h=>({...h,checked:!1})),V.value=t.feedEntryCount)},document:Fe,variables:()=>({offset:(C.value-1)*w,limit:w,query:B.value}),appApi:!0});Te({handle:async(t,o)=>{if(o)A(S(o),"error");else if(t){F.value=t.tags,Z.value=t.feeds;const h=Pe(f.value);i.tags=[];const b=[],v=[];h.forEach(n=>{if(n.name==="text")i.text=n.value;else if(n.name==="tag"){const u=t.tags.find(y=>X(y.name)===n.value);u?(i.tags.push(u),b.push(u.id)):b.push("invalid")}else if(n.name==="feed"){const u=t.feeds.find(y=>X(y.name)===n.value);u?(i.feeds.push(u),v.push(u.id)):v.push("invalid")}});const g=[...h].filter(n=>n.name!=="tag"&&n.name!=="feed");b.forEach(n=>{g.push({name:"tag_id",op:"",value:n})}),v.forEach(n=>{g.push({name:"feed_id",op:"",value:n})}),B.value=He(g),await Ee(),se()}},document:Qe,variables:{type:$},appApi:!0}),Se(C,t=>{x(I,`/feeds?page=${t}&q=${W(f.value)}`)});function G(){f.value=Je(i),z()}function z(){x(I,`/feeds?q=${W(f.value)}`)}De(()=>{O.on("refetch_by_tag_type",t=>{t===$&&R()}),O.on("feeds_fetched",t=>{T.value=!1,A(t.error||S("feeds_synced"))})});function oe(t){ze.push(P(t))}function P(t){return`/feeds/${t.feedId}/entries/${t.id}`}const{mutate:ne}=Ae({document:Ue,appApi:!0});function le(){T.value=!0,ne({id:""})}return(t,o)=>{const h=he,b=fe,v=_e,g=me,n=pe,u=de,y=re,ae=ce;return d(),p(E,null,[e("div",xe,[_(h,{current:()=>`${t.$t("page_title.feeds")} (${V.value})`},null,8,["current"]),e("div",We,[l(ee)?(d(),p(E,{key:0},[e("button",{type:"button",class:"btn btn-action",onClick:o[0]||(o[0]=m((...s)=>l(K)&&l(K)(...s),["stop"])),title:t.$t("delete")},[_(b,{class:"bi"})],8,Xe),e("button",{type:"button",class:"btn btn-action",onClick:o[1]||(o[1]=m((...s)=>l(L)&&l(L)(...s),["stop"])),title:t.$t("add_to_tags")},[_(v,{class:"bi"})],8,Ze),e("button",{type:"button",class:"btn btn-action",onClick:o[2]||(o[2]=m((...s)=>l(M)&&l(M)(...s),["stop"])),title:t.$t("remove_from_tags")},[_(g,{class:"bi"})],8,et)],64)):Q("",!0),e("button",{class:"btn btn-action",disabled:T.value,type:"button",onClick:m(le,["prevent"])},a(T.value?t.$t("syncing"):t.$t("sync_feeds")),9,tt),_(u,{modelValue:f.value,"onUpdate:modelValue":o[5]||(o[5]=s=>f.value=s),search:z},{filters:Ie(()=>[e("div",st,[e("label",ot,a(t.$t("keywords")),1),e("div",nt,[U(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=s=>i.text=s),class:"form-control",onKeyup:Be(G,["enter"])},null,40,lt),[[qe,i.text]])])]),e("div",at,[e("label",it,a(t.$t("tags")),1),e("div",ut,[_(n,{modelValue:i.tags,"onUpdate:modelValue":o[4]||(o[4]=s=>i.tags=s),label:"name","track-by":"id",options:F.value},null,8,["modelValue","options"])])]),e("div",dt,[e("button",{type:"button",class:"btn",onClick:m(G,["stop"])},a(t.$t("search")),9,ct)])]),_:1},8,["modelValue"])])]),e("table",rt,[e("thead",null,[e("tr",null,[e("th",null,[U(e("input",{class:"form-check-input",type:"checkbox",onChange:o[6]||(o[6]=(...s)=>l(N)&&l(N)(...s)),"onUpdate:modelValue":o[7]||(o[7]=s=>Le(D)?D.value=s:null)},null,544),[[Y,l(D)]])]),pt,_t,e("th",null,a(t.$t("title")),1),e("th",null,a(t.$t("source")),1),e("th",null,a(t.$t("tags")),1),e("th",null,a(t.$t("published_at")),1)])]),e("tbody",null,[(d(!0),p(E,null,j(c.value,s=>(d(),p("tr",{key:s.id,class:Me({checked:s.checked}),onClick:m(k=>s.checked=!s.checked,["stop"])},[e("td",null,[U(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":k=>s.checked=k},null,8,ft),[[Y,s.checked]])]),e("td",null,[_(y,{id:s.id,raw:s},null,8,["id","raw"])]),e("td",null,[s.image?(d(),p("img",{key:0,src:l(Ke)(s.image)+"&w=200&h=200",width:"50",height:"50"},null,8,ht)):Q("",!0)]),e("td",null,[e("a",{href:P(s),onClick:m(k=>oe(s),["prevent"])},a(s.title||t.$t("no_content")),9,bt)]),e("td",null,a(s.author),1),e("td",null,[(d(!0),p(E,null,j(s.tags,k=>(d(),p("span",vt,a(k.name),1))),256))]),e("td",{class:"nowrap",title:l(Ne)(s.publishedAt)},a(l(Re)(s.publishedAt)),9,gt)],10,mt))),128))]),c.value.length?Q("",!0):(d(),p("tfoot",yt,[e("tr",null,[e("td",kt,[e("div",$t,a(t.$t(l(Oe)(l(te)))),1)])])]))]),V.value>w?(d(),Ge(ae,{key:0,modelValue:C.value,"onUpdate:modelValue":o[8]||(o[8]=s=>C.value=s),total:V.value,limit:w},null,8,["modelValue","total"])):Q("",!0)],64)}}});export{Mt as default};
