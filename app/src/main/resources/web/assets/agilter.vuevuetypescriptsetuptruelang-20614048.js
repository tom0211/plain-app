import{d as k,u as A,q as x,r as E,i as L,t as M,bv as S,o as i,c as r,e as l,k as $,g as c,w as g,F as f,A as q,z as N,j as Q,bw as _,a1 as u,Z as b,bx as V,E as B,B as D,V as G,by as I,bz as w}from"./inde-e40fd5ce.js";import{c as F}from"./inde-a986ec4f.js";import{_ as y}from"./ditalueodal.vuevuetypescriptsetuptruelang-41de1b05.js";import{_ as O}from"./eleteonfirm.vuevuetypescriptsetuptruelang-f10cca05.js";const z={class:"nav-title mt-4"},j=["onClick"],H={class:"nav"},P=["onClick","onContextmenu"],J=k({__name:"TagFilter",props:{tagType:{type:String,required:!0},selected:{type:String,required:!0}},setup(s){const o=s,{t:n}=A(),C=x(),d=E([]),{refetch:p}=L({handle:(e,a)=>{a?M(n(a),"error"):e&&(d.value=e.tags)},document:S,variables:{type:o.tagType},appApi:!0});function v(){u(y,{title:n("add_tag"),placeholder:n("name"),mutation:()=>b({document:V,options:{update:()=>{p()}},appApi:!0}),getVariables:e=>({type:o.tagType,name:e})})}function T(e){const a=B([{name:"tag",op:"",value:_(e.name)}]);D(C,`/${{NOTE:"notes",AUDIO:"audios",IMAGE:"images",VIDEO:"videos",FEED_ENTRY:"feeds",SMS:"messages",CALL:"calls",CONTACT:"contacts",AI_CHAT:"aichats"}[o.tagType]}?q=${G(a)}`)}function h(e,a){e.preventDefault(),F({x:e.x,y:e.y,items:[{label:n("rename"),onClick:()=>{u(y,{title:n("rename"),placeholder:n("name"),value:a.name,mutation:()=>b({document:I,appApi:!0}),getVariables:t=>({id:a.id,name:t}),done:()=>{p()}})}},{label:n("delete"),onClick:()=>{u(O,{id:a.id,name:a.name,gql:w,appApi:!0,typeName:"Tag"})}}]})}return(e,a)=>(i(),r(f,null,[l("h2",z,[$(c(e.$t("tags"))+" ",1),l("button",{class:"btn btn-sm",type:"button",onClick:g(v,["prevent"])},c(e.$t("add")),9,j)]),l("ul",H,[(i(!0),r(f,null,q(d.value,t=>(i(),r("li",{onClick:g(m=>T(t),["prevent"]),key:t.id,onContextmenu:m=>h(m,t),class:N({active:s.selected&&Q(_)(t.name)===s.selected})},c(t.name),43,P))),128))])],64))}});export{J as _};