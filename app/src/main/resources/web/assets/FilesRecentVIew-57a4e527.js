import{d as K,u as W,r as v,s as X,a as J,ai as P,V as q,aO as Y,D as Z,o as n,c as a,b as i,e as k,g as s,w as ee,k as c,K as I,N as C,f as d,F as b,y as te,x as se,aP as T,aQ as R,af as oe,j as f,Q as ne,l as ae,aR as ie,am as le,aS as ce,_ as de}from"./index-969024c8.js";import{k as ue,b as re,_ as me,j as _e}from"./files-6c349b30.js";import{_ as pe}from"./Breadcrumb-21545a73.js";import{c as he}from"./index-310d6f13.js";import{n as ve}from"./list-6498ebd9.js";import"./search-61784dc8.js";import"./baseIndexOf-70b929c6.js";import"./toInteger-9d33d366.js";const ke={class:"v-toolbar"},be={class:"right-actions"},fe=["onClick","title"],we={class:"form-check mt-2 me-3 ms-3"},ye={class:"form-check-label",for:"select-mode"},Ve={class:"panel-container"},ge={key:0,class:"file-items"},xe=["onClick","onDblclick","onContextmenu"],De=["onUpdate:modelValue"],Ie=["src"],Ce={class:"title"},Te={style:{"font-size":"0.75rem"}},Re={key:1,class:"no-data-placeholder"},Fe={key:0,class:"file-item-info"},Ee=K({__name:"FilesRecentVIew",setup(Ne){const{t:h}=W(),w=v([]),u=v(!1),{app:_}=X(J()),{loading:F,files:r}=ue(_),{visible:E,index:N,view:S,hide:A}=P(),{downloadFile:y,downloadDir:$,downloadFiles:M}=re(_),{view:V}=_e(w,S),p=v(null),{mutate:U,onDone:z}=q({document:Y,appApi:!0});z(e=>{M(e.data.setTempValue.key)});const g=()=>{const e=[];return r.value.forEach(o=>{o.checked&&e.push({path:o.path})}),e},L=()=>{U({key:ie(),value:JSON.stringify(g())})},O=Z(()=>g().length>0);function B(e){if(u.value){e.checked=!e.checked;return}p.value=e}function x(e){return T(e.name)||R(e.name)||ce(e.name)}function G(e){x(e)?V(r.value,e):y(e.path)}function H(e,o){e.preventDefault();let l;o.isDir?l=[{label:h("download"),onClick:()=>{$(o.path)}}]:(l=[],x(o)&&l.push({label:h("open"),onClick:()=>{V(r.value,o)}}),l.push({label:h("download"),onClick:()=>{y(o.path)}})),he({x:e.x,y:e.y,items:l})}return(e,o)=>{const l=pe,Q=me,j=le;return n(),a(b,null,[i("div",ke,[k(l,{current:e.$t("recent_files")},null,8,["current"]),i("div",be,[u.value&&s(O)?(n(),a("button",{key:0,type:"button",class:"btn btn-action",onClick:ee(L,["stop"]),title:e.$t("download")},[k(Q,{class:"bi"})],8,fe)):c("",!0),i("div",we,[I(i("input",{class:"form-check-input","onUpdate:modelValue":o[0]||(o[0]=t=>u.value=t),id:"select-mode",type:"checkbox"},null,512),[[C,u.value]]),i("label",ye,d(e.$t("select_mode")),1)])])]),i("div",Ve,[s(_).permissions.includes("WRITE_EXTERNAL_STORAGE")?(n(),a("div",ge,[(n(!0),a(b,null,te(s(r),t=>{var D;return n(),a("div",{key:t.path,class:se(["file-item",{active:((D=p.value)==null?void 0:D.path)===t.path}]),onClick:m=>B(t),onDblclick:m=>G(t),onContextmenu:m=>H(m,t)},[u.value?I((n(),a("input",{key:0,class:"form-check-input","onUpdate:modelValue":m=>t.checked=m,type:"checkbox"},null,8,De)),[[C,t.checked]]):c("",!0),s(T)(t.name)||s(R)(t.name)?(n(),a("img",{key:1,src:s(oe)(t.fileId)+"&w=50&h=50",width:"50",height:"50"},null,8,Ie)):c("",!0),i("div",Ce,[f(d(t.name)+" ",1),i("div",Te,[f(d(s(ne)(t.updatedAt)),1),t.isDir?c("",!0):(n(),a(b,{key:0},[f(", "+d(s(ae)(t.size)),1)],64))])])],42,xe)}),128))])):c("",!0),s(r).length===0?(n(),a("div",Re,d(e.$t(s(ve)(s(F),s(_).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):c("",!0)]),p.value?(n(),a("div",Fe,d(e.$t("path"))+": "+d(p.value.path),1)):c("",!0),k(j,{visible:s(E),index:s(N),sources:w.value,onHide:s(A)},null,8,["visible","index","sources","onHide"])],64)}}});const Be=de(Ee,[["__scopeId","data-v-b89da663"]]);export{Be as default};
