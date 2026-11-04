"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var q=s(function(z,c){
function j(a,r,t,e,n,v){var o,u,i;if(a<=0)return e;for(o=v+r*n,i=r*2+1;i<a&&(u=v+i*n,i+1<a&&e[v+(i+1)*n]<e[u]&&(i+=1,u=v+i*n),!(e[u]>=t));)e[o]=e[u],r=i,o=u,i=r*2+1;return e[o]=t,e}c.exports=j
});var f=s(function(A,m){
var D=require('@stdlib/strided-base-stride2offset/dist'),S=q();function l(a,r,t,e,n){return S(a,r,t,e,n,D(a,n))}m.exports=l
});var w=s(function(B,h){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=f(),_=q();R(d,"ndarray",_);h.exports=d
});var b=require("path").join,k=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=w(),p,y=k(b(__dirname,"./native.js"));E(y)?p=O:p=y;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
