import{aT as j,aU as A,aV as v,aW as z,aX as L,av as M,aY as R,aZ as x}from"./index-969024c8.js";import{h as m,s as N,c as F}from"./stringToArray-46bdaa9b.js";import{a as _}from"./toInteger-9d33d366.js";var k="[object RegExp]";function V(e){return j(e)&&A(e)==k}var b=v&&v.isRegExp,$=b?z(b):V;const p=$;var w=L("length");const y=w;var E="\\ud800-\\udfff",D="\\u0300-\\u036f",G="\\ufe20-\\ufe2f",H="\\u20d0-\\u20ff",J=D+G+H,P="\\ufe0e\\ufe0f",W="["+E+"]",d="["+J+"]",c="\\ud83c[\\udffb-\\udfff]",Z="(?:"+d+"|"+c+")",S="[^"+E+"]",T="(?:\\ud83c[\\udde6-\\uddff]){2}",O="[\\ud800-\\udbff][\\udc00-\\udfff]",q="\\u200d",U=Z+"?",I="["+P+"]?",X="(?:"+q+"(?:"+[S,T,O].join("|")+")"+I+U+")*",Y=I+U+X,B="(?:"+[S+d+"?",d,T,O,W].join("|")+")",h=RegExp(c+"(?="+c+")|"+B+Y,"g");function K(e){for(var a=h.lastIndex=0;h.test(e);)++a;return a}function Q(e){return m(e)?K(e):y(e)}var ee=30,re="...",ae=/\w*$/;function ne(e,a){var n=ee,s=re;if(M(a)){var r="separator"in a?a.separator:r;n="length"in a?_(a.length):n,s="omission"in a?R(a.omission):s}e=x(e);var o=e.length;if(m(e)){var u=N(e);o=u.length}if(n>=o)return e;var i=n-Q(s);if(i<1)return s;var f=u?F(u,0,i).join(""):e.slice(0,i);if(r===void 0)return f+s;if(u&&(i+=f.length-i),p(r)){if(e.slice(i).search(r)){var t,C=f;for(r.global||(r=RegExp(r.source,x(ae.exec(r))+"g")),r.lastIndex=0;t=r.exec(C);)var l=t.index;f=f.slice(0,l===void 0?i:l)}}else if(e.indexOf(R(r),i)!=i){var g=f.lastIndexOf(r);g>-1&&(f=f.slice(0,g))}return f+s}export{ne as t};
