import{_ as s}from"./VModal.vuevuetypescriptsetuptruelang-33c2fc8e.js";import{d as r,U as l,a5 as m,o as c,Q as u,v as _,b as f,g as y,f as g}from"./index-03d179e2.js";const b=["disabled"],C=r({__name:"DeleteConfirm",props:{id:{type:String,default:"",required:!0},name:{type:String},gql:{type:Object,required:!0},typeName:{type:String,required:!0},appApi:{type:Boolean,default:!1},done:{type:Function}},setup(n){const e=n,{mutate:o,loading:a,onDone:i}=l({document:e.gql,options:{update:t=>{e.typeName!=="Application"&&t.evict({id:t.identify({__typename:e.typeName,id:e.id})})}},appApi:e.appApi});function p(){o({id:e.id})}return i(()=>{e.done&&e.done(),m()}),(t,q)=>{const d=s;return c(),u(d,{class:"delete-modal",size:"sm",title:t.$t("confirm_to_delete_name",{name:n.name})},{action:_(()=>[f("button",{type:"button",disabled:y(a),class:"btn",onClick:p},g(t.$t("delete")),9,b)]),_:1},8,["title"])}}});export{C as _};
