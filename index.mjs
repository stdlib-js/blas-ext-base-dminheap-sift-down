// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";function t(r,e,t,n,s,d){var i,o,a;if(r<=0)return n;for(i=d+e*s,a=2*e+1;a<r&&(o=d+a*s,a+1<r&&n[d+(a+1)*s]<n[o]&&(o=d+(a+=1)*s),!(n[o]>=t));)n[i]=n[o],i=o,a=2*(e=a)+1;return n[i]=t,n}function n(r,n,s,d,i){return t(r,n,s,d,i,e(r,i))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
