import{O as V,r as h,o as C,a as u,f as b,b as g,e as l,h as a,u as s,k,J as w}from"./index.bbf7818f.js";import"./base.197bc1e5.js";import{a as x}from"./checkbox.4d1c2a75.js";import"./scrollbar.7d059005.js";import"./tooltip.f118fcb0.js";import"./popper.91c84279.js";import{Z as E,a as R}from"./ZFormItem.f4459b46.js";import{E as S}from"./switch.4caa5287.js";import{e as B}from"./admin-storage.12c0dbf5.js";import{u as I}from"./storage-list.a02d975e.js";import"./index.e63d92a7.js";import"./request.19cbe8c5.js";import"./event.3ec63147.js";import"./debounce.a03a8484.js";import"./event.776e7e11.js";import"./index.eeb08216.js";import"./focus-trap.fe4b8179.js";import"./index.c92ded65.js";import"./validator.998eeed0.js";import"./sortable.esm.a99254e8.js";import"./index.6dd6d04c.js";import"./index.9aca9b8e.js";import"./index.c66de53e.js";import"./scroll.4cf9bb37.js";const M=w(" \u6B64\u9875\u9762\u53EF\u4EE5\u7BA1\u7406\u60A8\u7684\u7F13\u5B58\u76F8\u5173\u8BBE\u7F6E\uFF0C\u5305\u62EC\u7F13\u5B58\u7684\u7BA1\u7406\u3001\u7F13\u5B58\u7684\u6E05\u7406\u3001\u7F13\u5B58\u7684\u7EDF\u8BA1\u7B49\u3002 "),ae={__name:"index",setup(N){let i=V();const{cacheManageVisible:U,switchCacheEnableStatus:p,switchCacheAutoRefreshStatus:d,currentCacheManageId:f}=I(i),e=h(null),c=()=>{B(f.value).then(r=>{e.value=r.data})};return C(()=>{c()}),(r,t)=>{const m=S,n=E,_=R,v=x;return u(),b("div",null,[e.value?(u(),g(_,{key:0,modelValue:e.value,"onUpdate:modelValue":t[4]||(t[4]=o=>e.value=o)},{"form-sub-title":l(()=>[M]),default:l(()=>[a(n,{label:"\u5F00\u542F\u7F13\u5B58"},{default:l(()=>[a(m,{onChange:t[0]||(t[0]=o=>s(p)(e.value)),modelValue:e.value.enableCache,"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.enableCache=o)},null,8,["modelValue"])]),_:1}),a(n,{label:"\u5F00\u542F\u7F13\u5B58\u81EA\u52A8\u5237\u65B0"},{default:l(()=>[a(m,{onChange:t[2]||(t[2]=o=>s(d)(e.value)),modelValue:e.value.autoRefreshCache,"onUpdate:modelValue":t[3]||(t[3]=o=>e.value.autoRefreshCache=o)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])):k("",!0),a(v)])}}};export{ae as default};
