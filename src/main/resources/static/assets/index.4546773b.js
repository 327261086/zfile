import{b0 as G,r as J}from"./base.197bc1e5.js";/* empty css                */import{Z as Q,a as j}from"./ZFormItem.f4459b46.js";/* empty css              */import"./tooltip.f118fcb0.js";import{E as H}from"./popper.91c84279.js";import{E as K}from"./image-viewer.9e2d72eb.js";/* empty css               */import{E as O}from"./radio.6dc3ee2c.js";import{E as W}from"./switch.4caa5287.js";import{g as X,v as M,l as Y,d as $}from"./admin-setting.fad9817e.js";import{r as ee,ax as A,_ as oe,w as F,u as e,Q as te,a as m,b as v,e as n,h as l,I,f as T,k as b,J as a,S as ne,U as ie,p as h}from"./index.bbf7818f.js";import{t as ae}from"./vue3-clipboard.esm-bundler.34366eba.js";import{E as p}from"./request.19cbe8c5.js";import{E as R}from"./index.6dd6d04c.js";import{b as U}from"./route-block.9b0645f8.js";import{E as le}from"./index.9aca9b8e.js";import{v as se}from"./directive.b8a17520.js";import"./index.c92ded65.js";import"./focus-trap.fe4b8179.js";import"./event.3ec63147.js";import"./index.eeb08216.js";import"./debounce.a03a8484.js";import"./scroll.4cf9bb37.js";import"./event.776e7e11.js";import"./validator.998eeed0.js";import"./index.c66de53e.js";const y=ee({});function re(){const{data:r,reload:o}=A(Y,{formatResult:t=>t.data}),{loading:u,run:g}=A($,{manual:!0,onSuccess(){p({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}}),f=()=>{g(r.value)},d=()=>{X().then(t=>{y.value=t.data})};return{data:r,reload:o,saveData:f,saveLoading:u,load2FAInfo:d,twoFAData:y,copyTwoFASecret:()=>{ae(y.value.secret).then(()=>{p.success("\u590D\u5236\u6210\u529F")})},verifyCodeAndBind:()=>{M(y.value).then(t=>{p.success("\u7ED1\u5B9A\u6210\u529F"),o()})},rebind:()=>{r.value.loginVerifySecret="",d()},cancelBind:()=>{R.confirm("\u662F\u5426\u786E\u8BA4\u53D6\u6D88\u7ED1\u5B9A\uFF0C\u786E\u8BA4\u540E\u5C06\u81EA\u52A8\u6062\u590D\u4E3A\u56FE\u5F62\u9A8C\u8BC1\u7801","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"success",callback:t=>{t==="confirm"&&(r.value.loginVerifySecret="",r.value.loginVerifyMode="image")}})},validBind:()=>{R.prompt("\u8BF7\u8F93\u5165\u53CC\u56E0\u7D20\u8BA4\u8BC1 APP \u4E2D\u7684\u9A8C\u8BC1\u7801","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",inputValidator(t){return!!t},inputErrorMessage:"\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A."}).then(({value:t})=>{let i={secret:r.value.loginVerifySecret,code:t};M(i).then(()=>{p.success("\u9A8C\u8BC1\u6210\u529F")})})}}}const k=r=>(ne("data-v-eb0c5abc"),r=r(),ie(),r),de=a(" \u5B89\u5168\u8BBE\u7F6E "),ce=a(" \u6B64\u5904\u8BBE\u7F6E\u53EF\u4FDD\u62A4\u60A8\u7684\u7AD9\u70B9\u5B89\u5168 "),me=a(" \u542F\u7528\u540E\uFF0C\u4F1A\u5728\u95E8\u6237\u663E\u793A\u540E\u53F0\u767B\u9646\u5165\u53E3\uFF0C\u8BF7\u6839\u636E\u81EA\u8EAB\u60C5\u51B5\u9009\u62E9\u662F\u5426\u542F\u7528 "),ue=a("\u4E0D\u542F\u7528\u767B\u9646\u9A8C\u8BC1"),fe=a("\u542F\u7528\u56FE\u7247\u9A8C\u8BC1\u7801"),_e=a("\u542F\u7528\u53CC\u56E0\u7D20\u8BA4\u8BC1"),pe=a(" \u56FE\u7247\u9A8C\u8BC1\u7801\u4E5F\u53EF\u80FD\u4F1A\u88AB\u8BC6\u522B\uFF0C\u4E0D\u80FD\u5B8C\u5168\u62B5\u6321\u66B4\u529B\u7834\u89E3\u3002 "),ye=a(" \u53CC\u56E0\u7D20\u8BA4\u8BC1\u53EF\u5B8C\u7F8E\u4FDD\u62A4\u767B\u9646\u8BA4\u8BC1\uFF0C\u53EF\u4F7F\u7528\u4EFB\u610F\u652F\u6301 2FA \u8BA4\u8BC1\u7684\u8F6F\u4EF6\uFF0C\u5982 "),ge=k(()=>h("b",null,"Google \u8EAB\u4EFD\u9A8C\u8BC1\u5668",-1)),Ve=a("\u3001"),ve=k(()=>h("b",null,"Microsoft Authenticator",-1)),be=a(" \u7B49\u8F6F\u4EF6. "),he=k(()=>h("br",null,null,-1)),ke={key:0,class:"w-full"},Se=a("\u91CD\u65B0\u7ED1\u5B9A"),Be=a("\u53D6\u6D88\u7ED1\u5B9A"),Ce=a("\u9A8C\u8BC1\u7ED1\u5B9A"),Ee={key:1},we=a(" \u53EF\u626B\u63CF\u4E0A\u65B9\u4E8C\u7EF4\u7801\u6216\u590D\u5236\u4E0B\u65B9\u5BC6\u94A5\u5230\u652F\u6301\u53CC\u56E0\u7D20\u8BA4\u8BC1\u7684\u8F6F\u4EF6\u4E2D\u6DFB\u52A0\u3002 "),xe=a("\u9A8C\u8BC1\u5E76\u7ED1\u5B9A"),Me=a(" \u8BF7\u7ED1\u5B9A\u53CC\u56E0\u7D20\u8BA4\u8BC1\u8F6F\u4EF6\u540E\uFF0C\u8F93\u5165\u663E\u793A\u7684\u9A8C\u8BC1\u7801\u8FDB\u884C\u7ED1\u5B9A "),q={__name:"index",setup(r){const{data:o,saveData:u,saveLoading:g,load2FAInfo:f,twoFAData:d,copyTwoFASecret:S,verifyCodeAndBind:B,rebind:C,cancelBind:E,validBind:w}=re();return F(()=>{var t;return(t=o.value)==null?void 0:t.loginVerifyMode},(t,i)=>{(t==="off"||t==="image")&&i&&u(),t==="2fa"&&!o.value.loginVerifySecret&&f()}),F(()=>{var t;return(t=o.value)==null?void 0:t.showLogin},(t,i)=>{t!==i&&i!==void 0&&u()}),(t,i)=>{const D=W,_=Q,V=O,c=J,L=K,z=H,x=le,N=j,Z=se;return e(o)?te((m(),v(N,{key:0,model:e(o)},{"form-title":n(()=>[de]),"form-sub-title":n(()=>[ce]),default:n(()=>[l(_,{label:"\u662F\u5426\u663E\u793A\u767B\u9646\u5165\u53E3"},{tips:n(()=>[me]),default:n(()=>[l(D,{modelValue:e(o).showLogin,"onUpdate:modelValue":i[0]||(i[0]=s=>e(o).showLogin=s)},null,8,["modelValue"])]),_:1}),l(_,{label:"\u767B\u9646\u9A8C\u8BC1\u65B9\u5F0F"},I({default:n(()=>[l(V,{modelValue:e(o).loginVerifyMode,"onUpdate:modelValue":i[1]||(i[1]=s=>e(o).loginVerifyMode=s),label:"off"},{default:n(()=>[ue]),_:1},8,["modelValue"]),l(V,{modelValue:e(o).loginVerifyMode,"onUpdate:modelValue":i[2]||(i[2]=s=>e(o).loginVerifyMode=s),label:"image"},{default:n(()=>[fe]),_:1},8,["modelValue"]),l(V,{modelValue:e(o).loginVerifyMode,"onUpdate:modelValue":i[3]||(i[3]=s=>e(o).loginVerifyMode=s),label:"2fa"},{default:n(()=>[_e]),_:1},8,["modelValue"])]),_:2},[e(o).loginVerifyMode==="image"?{name:"tips",fn:n(()=>[pe])}:void 0,e(o).loginVerifyMode==="2fa"?{name:"tips",fn:n(()=>[ye,ge,Ve,ve,be,he])}:void 0]),1024),e(o).loginVerifyMode==="2fa"?(m(),v(_,{key:0,label:"\u53CC\u56E0\u7D20\u8BA4\u8BC1\u5BC6\u94A5"},I({default:n(()=>{var s;return[e(o).loginVerifySecret?(m(),T("div",ke,[l(c,{size:"small",type:"primary",onClick:e(C)},{default:n(()=>[Se]),_:1},8,["onClick"]),l(c,{size:"small",type:"primary",onClick:e(E)},{default:n(()=>[Be]),_:1},8,["onClick"]),l(c,{size:"small",type:"primary",onClick:e(w)},{default:n(()=>[Ce]),_:1},8,["onClick"])])):(m(),T("div",Ee,[l(L,{onClick:e(f),src:(s=e(d))==null?void 0:s.qrcode},null,8,["onClick","src"]),l(x,{readonly:"",modelValue:e(d).secret,"onUpdate:modelValue":i[4]||(i[4]=P=>e(d).secret=P)},{append:n(()=>[l(z,{class:"item",effect:"dark",content:"\u590D\u5236",placement:"bottom"},{default:n(()=>[l(c,{onClick:e(S),icon:e(G)},null,8,["onClick","icon"])]),_:1})]),_:1},8,["modelValue"])]))]}),_:2},[e(o).loginVerifySecret?void 0:{name:"tips",fn:n(()=>[we])}]),1024)):b("",!0),e(o).loginVerifyMode==="2fa"&&!e(o).loginVerifySecret?(m(),v(_,{key:1,label:"\u53CC\u56E0\u7D20\u8BA4\u8BC1\u9A8C\u8BC1\u7801"},{tips:n(()=>[Me]),default:n(()=>[l(x,{modelValue:e(d).code,"onUpdate:modelValue":i[5]||(i[5]=s=>e(d).code=s)},null,8,["modelValue"]),l(c,{onClick:e(B),type:"primary"},{default:n(()=>[xe]),_:1},8,["onClick"])]),_:1})):b("",!0)]),_:1},8,["model"])),[[Z,e(g)]]):b("",!0)}}};typeof U=="function"&&U(q);var no=oe(q,[["__scopeId","data-v-eb0c5abc"]]);export{no as default};
