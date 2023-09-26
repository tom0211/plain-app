import{o as s,e as o,f as a,d as z,u as J,p as P,r as l,s as X,c as O,i as B,a1 as W,H as ee,I as r,J as te,K as ne,t as T,M as se,h as y,j as I,F as oe,A as ae,L as f,w as S,x as q,k as Z,ch as ie,aP as ce,ci as de,$ as le,U as re,au as _e,av as ue,X as pe,Y as me,Z as he,_ as ve}from"./index-391e08bf.js";import{u as Te}from"./markdown-50aebb46.js";const ye={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},fe=a("path",{fill:"currentColor",d:"M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h14v-6q0-.425.288-.713T20 12q.425 0 .713.288T21 13v6q0 .825-.588 1.413T19 21H5Zm4-6q-.275-.275-.275-.7T9 13.6L17.6 5H15q-.425 0-.713-.288T14 4q0-.425.288-.713T15 3h5q.425 0 .713.288T21 4v5q0 .425-.288.713T20 10q-.425 0-.713-.288T19 9V6.4l-8.625 8.625q-.275.275-.675.275T9 15Z"},null,-1),qe=[fe];function ge(i,c){return s(),o("svg",ye,qe)}const be={name:"material-symbols-open-in-new-rounded",render:ge},we={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ke=a("path",{fill:"currentColor",d:"M15.375 19.25q-.525.25-.95-.038T14 18.275q0-.25.163-.487t.412-.363q1.575-.75 2.5-2.225T18 11.95q0-1.125-.425-2.187T16.25 7.8L16 7.55V9q0 .425-.288.713T15 10q-.425 0-.713-.288T14 9V5q0-.425.288-.713T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6h-1.75l.4.35q1.225 1.225 1.788 2.663T20 11.95q0 2.4-1.25 4.363t-3.375 2.937ZM5 20q-.425 0-.713-.288T4 19q0-.425.288-.713T5 18h1.75l-.4-.35q-1.225-1.225-1.788-2.663T4 12.05q0-2.4 1.25-4.362T8.625 4.75q.525-.25.95.038t.425.937q0 .25-.163.488t-.412.362q-1.575.75-2.5 2.225T6 12.05q0 1.125.425 2.188T7.75 16.2l.25.25V15q0-.425.288-.713T9 14q.425 0 .713.288T10 15v4q0 .425-.288.713T9 20H5Z"},null,-1),Ce=[ke];function $e(i,c){return s(),o("svg",we,Ce)}const Ee={name:"material-symbols-sync-rounded",render:$e},g=i=>(_e("data-v-024bbe7f"),i=i(),ue(),i),Fe={class:"container"},Me={class:"title"},Ve={class:"subtitle v-center"},Le={key:1,class:"author"},He=["onClick"],xe=g(()=>a("md-ripple",null,null,-1)),De={key:2,indeterminate:"",class:"spinner-sm"},Ae=["disabled","onClick"],Be=g(()=>a("md-ripple",null,null,-1)),Ie=["href"],Se={class:"icon-button"},Ze=g(()=>a("md-ripple",null,null,-1)),Ne=["innerHTML"],_="FEED_ENTRY",Qe=z({__name:"FeedEntryView",setup(i){const{t:c}=J(),N=P(),b=l(N.params.id),n=l(),u=l(""),p=l(),{app:Q,urlTokenKey:U}=X(O()),{render:w}=Te(Q,U),{refetch:k}=B({handle:async(e,t)=>{t?Z(c(t),"error"):(n.value=e.feedEntry,u.value=await w(e.feedEntry.content||e.feedEntry.description))},document:ie,variables:()=>({id:b.value}),appApi:!0});B({handle:(e,t)=>{t?Z(c(t),"error"):e&&(p.value=e.tags)},document:ce,variables:{type:_},appApi:!0});function G(){var e,t;pe(me,{type:_,tags:p.value,item:{key:(e=n.value)==null?void 0:e.id,title:"",size:0},selected:(t=p.value)==null?void 0:t.filter(m=>{var d;return(d=n.value)==null?void 0:d.tags.some(h=>h.id===m.id)})})}const{mutate:R,loading:C,onDone:K}=W({document:de,appApi:!0});K(async e=>{const t=e.data;n.value=t.syncFeedContent,u.value=await w(t.syncFeedContent.content||t.syncFeedContent.description)});const Y=()=>{R({id:b.value})},$=e=>{e.type===_&&k()},E=e=>{e.type===_&&k()};return ee(()=>{r.on("item_tags_updated",E),r.on("items_tags_updated",$)}),te(()=>{r.off("item_tags_updated",E),r.off("items_tags_updated",$)}),(e,t)=>{var F,M,V,L,H,x,D;const m=le,d=he,h=Ee,j=be,v=ne("tooltip");return s(),o("div",Fe,[a("h2",Me,T((F=n.value)==null?void 0:F.title),1),a("div",Ve,[(M=n.value)!=null&&M.publishedAt?(s(),se(m,{key:0,class:"time",id:y(re)((V=n.value)==null?void 0:V.publishedAt),raw:n.value},null,8,["id","raw"])):I("",!0),(L=n.value)!=null&&L.author?(s(),o("span",Le,T((H=n.value)==null?void 0:H.author),1)):I("",!0),(s(!0),o(oe,null,ae((x=n.value)==null?void 0:x.tags,A=>(s(),o("span",{key:A.id,class:"badge"},T(A.name),1))),128)),f((s(),o("button",{class:"icon-button",onClick:S(G,["prevent"]),style:{"margin-inline-start":"8px"}},[xe,q(d)],8,He)),[[v,e.$t("add_to_tags")]]),y(C)?(s(),o("md-circular-progress",De)):f((s(),o("button",{key:3,class:"icon-button btn-icon",disabled:y(C),onClick:S(Y,["prevent"])},[Be,q(h)],8,Ae)),[[v,e.$t("sync_content")]]),f((s(),o("a",{href:(D=n.value)==null?void 0:D.url,target:"_blank"},[a("button",Se,[Ze,q(j)])],8,Ie)),[[v,e.$t("view_original_article")]])]),a("div",{class:"md-container",innerHTML:u.value},null,8,Ne)])}}});const Re=ve(Qe,[["__scopeId","data-v-024bbe7f"]]);export{Re as default};