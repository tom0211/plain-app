import{d as z,r as h,u as J,ai as G,ck as Q,cl as X,cm as Y,cn as Z,co as ee,cp as se,cq as ne,aU as te,e as S,f as g,x as oe,t as p,L as A,bv as x,w as re,h as d,ak as ie,al as ae,R as le,j as R,g as ue,F as ce,cr as de,cs as fe,o as E,ct as me,_ as we}from"./index-bfd324f1.js";import{u as ve,a as be}from"./vee-validate.esm-4679beb0.js";function N(n){let t=n;if(typeof t>"u"){if(typeof navigator>"u"||!navigator)return"";t=navigator.userAgent||""}return t.toLowerCase()}function L(n,t){try{return new RegExp(n,"g").exec(t)}catch{return null}}function M(){if(typeof navigator>"u"||!navigator||!navigator.userAgentData)return!1;const t=navigator.userAgentData.brands;return!!(t&&t.length)}function ge(n,t){const o=L(`(${n})((?:\\/|\\s|:)([0-9|\\.|_]+))`,t);return o?o[3]:""}function I(n){return n.replace(/_/g,".")}function V(n,t){let o=null,e="-1";return n.some(r=>{const a=L(`(${r.test})((?:\\/|\\s|:)([0-9|\\.|_]+))?`,t);return!a||r.brand?!1:(o=r,e=a[3]||"-1",r.versionAlias?e=r.versionAlias:r.versionTest&&(e=ge(r.versionTest.toLowerCase(),t)||e),e=I(e),!0)}),{preset:o,version:e}}function _(n,t){const o={brand:"",version:"-1"};return n.some(e=>{const r=U(t,e);return r?(o.brand=e.id,o.version=e.versionAlias||r.version,o.version!=="-1"):!1}),o}function U(n,t){return n.find(o=>L(`${t.test}`,o.brand.toLowerCase()))}const P=[{test:"phantomjs",id:"phantomjs"},{test:"whale",id:"whale"},{test:"edgios|edge|edg",id:"edge"},{test:"msie|trident|windows phone",id:"ie",versionTest:"iemobile|msie|rv"},{test:"miuibrowser",id:"miui browser"},{test:"samsungbrowser",id:"samsung internet"},{test:"samsung",id:"samsung internet",versionTest:"version"},{test:"chrome|crios",id:"chrome"},{test:"firefox|fxios",id:"firefox"},{test:"android",id:"android browser",versionTest:"version"},{test:"safari|iphone|ipad|ipod",id:"safari",versionTest:"version"}],W=[{test:"(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",id:"chrome",versionTest:"chrome"},{test:"chromium",id:"chrome"},{test:"whale",id:"chrome",versionAlias:"-1",brand:!0}],$=[{test:"applewebkit",id:"webkit",versionTest:"applewebkit|safari"}],D=[{test:"(?=(iphone|ipad))(?!(.*version))",id:"webview"},{test:"(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",id:"webview"},{test:"webview",id:"webview"}],F=[{test:"windows phone",id:"windows phone"},{test:"windows 2000",id:"window",versionAlias:"5.0"},{test:"windows nt",id:"window"},{test:"win32|windows",id:"window"},{test:"iphone|ipad|ipod",id:"ios",versionTest:"iphone os|cpu os"},{test:"macos|macintel|mac os x",id:"mac"},{test:"android|linux armv81",id:"android"},{test:"tizen",id:"tizen"},{test:"webos|web0s",id:"webos"}];function O(n){return!!V(D,n).preset}function pe(n){const t=N(n),o=!!/mobi/g.exec(t),e={name:"unknown",version:"-1",majorVersion:-1,webview:O(t),chromium:!1,chromiumVersion:"-1",webkit:!1,webkitVersion:"-1"},r={name:"unknown",version:"-1",majorVersion:-1},{preset:a,version:w}=V(P,t),{preset:s,version:l}=V(F,t),b=V(W,t);if(e.chromium=!!b.preset,e.chromiumVersion=b.version,!e.chromium){const f=V($,t);e.webkit=!!f.preset,e.webkitVersion=f.version}return s&&(r.name=s.id,r.version=l,r.majorVersion=parseInt(l,10)),a&&(e.name=a.id,e.version=w,e.webview&&r.name==="ios"&&e.name!=="safari"&&(e.webview=!1)),e.majorVersion=parseInt(e.version,10),{browser:e,os:r,isMobile:o,isHints:!1}}function H(n){const t=navigator.userAgentData,o=[...t.brands],e=n&&n.fullVersionList,r=t.mobile||!1,a=o[0],w=(n&&n.platform||t.platform||navigator.platform).toLowerCase(),s={name:a.brand,version:a.version,majorVersion:-1,webkit:!1,webkitVersion:"-1",chromium:!1,chromiumVersion:"-1",webview:!!_(D,o).brand||O(N())},l={name:"unknown",version:"-1",majorVersion:-1};s.webkit=!s.chromium&&$.some(i=>U(o,i));const b=_(W,o);if(s.chromium=!!b.brand,s.chromiumVersion=b.version,!s.chromium){const i=_($,o);s.webkit=!!i.brand,s.webkitVersion=i.version}const f=F.find(i=>new RegExp(`${i.test}`,"g").exec(w));if(l.name=f?f.id:"",n&&(l.version=n.platformVersion),e&&e.length){const i=_(P,e);s.name=i.brand||s.name,s.version=i.version||s.version}else{const i=_(P,o);s.name=i.brand||s.name,s.version=i.brand&&n?n.uaFullVersion:i.version}return s.webkit&&(l.name=r?"ios":"mac"),l.name==="ios"&&s.webview&&(s.version="-1"),l.version=I(l.version),s.version=I(s.version),l.majorVersion=parseInt(l.version,10),s.majorVersion=parseInt(s.version,10),{browser:s,os:l,isMobile:r,isHints:!0}}async function he(){if(M()){const n=await navigator.userAgentData.getHighEntropyValues(["architecture","model","platform","platformVersion","uaFullVersion","fullVersionList"]);return H(n)}return _e()}function _e(n){return typeof n>"u"&&M()?H():pe(n)}const Ve={class:"header"},ke={class:"login-block"},ye=["label","error","error-text"],Se=["disabled"],Ae={key:0,class:"tips"},Ee=z({__name:"LoginView",setup(n){const{handleSubmit:t,isSubmitting:o}=ve(),e=h(!1),r=h(!0),a=h(!1),w=h("");let s;const l=window.location.protocol==="http:"?!1:!window.navigator.userAgentData,{t:b}=J(),{value:f,errorMessage:i}=be("password",G().required()),T=h(!1);async function K(){const u=await fetch(`${de()}/init`,{method:"POST",headers:fe()});if(u.status===403){e.value=!0,r.value=!0,w.value="web_access_disabled";return}r.value=!1;const m=await u.text();m?(f.value=m,T.value=!1):T.value=!0}K();const k=t(async()=>{const u=localStorage.getItem("client_id");s=new WebSocket(`${Q()}?cid=${u}&auth=1`);const m=f.value??"",y=X(m),v=Y(y);w.value="",e.value=!1,s.onopen=async()=>{o.value=!0;const c=await he(),B=Z(v,JSON.stringify({password:y,browserName:c.browser.name,browserVersion:c.browser.version,osName:c.os.name,osVersion:c.os.version,isMobile:c.isMobile}));s.send(ee(B))},s.onmessage=async c=>{var C;const B=se(v,ne(await c.data.arrayBuffer())),j=JSON.parse(B);j.status==="PENDING"?a.value=!0:(localStorage.setItem("auth_token",j.token),s.close(),window.location.href=((C=te.currentRoute.value.query.redirect)==null?void 0:C.toString())??"/")},s.onclose=c=>{c.reason==="abort"||c.reason==="OK"||(o.value=!1,e.value=!0,a.value=!1,w.value=`login.${c.reason?c.reason:"failed"}`)},window.setTimeout(function(){s.readyState!==1&&s.close(3001,"timeout")},2e3)});function q(){a.value=!1,e.value=!1,o.value=!1,s.close(3001,"abort")}return(u,m)=>{const y=me;return E(),S(ce,null,[g("header",Ve,[oe(y,{"logged-in":!1})]),g("h1",null,p(u.$t("app_name")),1),g("div",ke,[A(g("form",{onSubmit:m[2]||(m[2]=re((...v)=>d(k)&&d(k)(...v),["prevent"]))},[A(g("div",{class:"alert alert-danger",role:"alert"},p(w.value?u.$t(w.value):""),513),[[x,e.value]]),T.value?A((E(),S("md-outlined-text-field",{key:0,label:d(b)("password"),"onUpdate:modelValue":m[0]||(m[0]=v=>ie(f)?f.value=v:null),onKeydown:m[1]||(m[1]=ae((...v)=>d(k)&&d(k)(...v),["enter"])),type:"password",class:"form-control",error:d(i),"error-text":d(i)?u.$t(d(i)):""},null,40,ye)),[[le,d(f)]]):R("",!0),r.value?R("",!0):(E(),S("md-filled-button",{key:1,disabled:d(o)},p(u.$t(d(o)?"logging_in":"log_in")),9,Se))],544),[[x,!a.value]]),A(g("div",null,[ue(p(u.$t("login.to_continue"))+" ",1),g("md-outlined-button",{onClick:q},p(u.$t("cancel")),1)],512),[[x,a.value]])]),d(l)?(E(),S("div",Ae,p(u.$t("browser_warning")),1)):R("",!0)],64)}}});const xe=we(Ee,[["__scopeId","data-v-4531ffbc"]]);export{xe as default};