import{bR as g}from"./index-969024c8.js";function Z(r,a,e){var o=r.length;return e=e===void 0?o:e,!a&&e>=o?r:g(r,a,e)}var b="\\ud800-\\udfff",R="\\u0300-\\u036f",l="\\ufe20-\\ufe2f",m="\\u20d0-\\u20ff",C=R+l+m,p="\\ufe0e\\ufe0f",v="\\u200d",A=RegExp("["+v+b+C+p+"]");function S(r){return A.test(r)}function $(r){return r.split("")}var s="\\ud800-\\udfff",M="\\u0300-\\u036f",h="\\ufe20-\\ufe2f",k="\\u20d0-\\u20ff",y=M+h+k,x="\\ufe0e\\ufe0f",H="["+s+"]",f="["+y+"]",u="\\ud83c[\\udffb-\\udfff]",J="(?:"+f+"|"+u+")",n="[^"+s+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",t="[\\ud800-\\udbff][\\udc00-\\udfff]",O="\\u200d",i=J+"?",c="["+x+"]?",T="(?:"+O+"(?:"+[n,d,t].join("|")+")"+c+i+")*",U=c+i+T,V="(?:"+[n+f+"?",f,d,t,H].join("|")+")",j=RegExp(u+"(?="+u+")|"+V+U,"g");function E(r){return r.match(j)||[]}function q(r){return S(r)?E(r):$(r)}export{Z as c,S as h,q as s};
