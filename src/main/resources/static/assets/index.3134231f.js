import{_ as y,O as z,r as p,V,a1 as k,$ as I,a as U,f as E,p as o,h as l,e as i,u as t,j as N,S,U as C,J as M}from"./index.bbf7818f.js";import{aO as q,aL as R,aM as B,x as F,r as j}from"./base.197bc1e5.js";import{E as D,a as L}from"./form-item.962ab13d.js";/* empty css               *//* empty css              */import{_ as O}from"./zfile-basic.5314831c.js";import{i as $,a as G}from"./install.0838262e.js";import{r as J}from"./BadgeCheckIcon.fc085fd1.js";import{E as _}from"./request.19cbe8c5.js";import{E as T}from"./index.9aca9b8e.js";import"./index.c92ded65.js";import"./isEqual.a8284c4e.js";import"./event.776e7e11.js";const g=d=>(S("data-v-6462780c"),d=d(),C(),d),A={class:"min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center"},H={class:"max-w-screen-lg bg-white shadow-xl sm:rounded-xl flex flex-1"},K=g(()=>o("div",{class:"flex-1 bg-gray-50 text-center hidden lg:flex rounded-l-xl"},[o("div",{class:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat zfile-install-logo"})],-1)),P={class:"lg:w-1/2 mt-10 xl:w-1/2 w-11/12 p-6 sm:p-12"},Q={class:"mt-0 flex flex-col items-center"},W={class:"text-2xl mt-0 xl:text-3xl font-extrabold box animate__animated animate__fadeInDown"},X={class:"w-full flex-1"},Y=g(()=>o("div",{class:"my-12 border-b text-center"},[o("div",{class:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"}," \u7CFB\u7EDF\u521D\u59CB\u5316 ")],-1)),Z=M(" \u7CFB\u7EDF\u521D\u59CB\u5316 "),ee={__name:"index",setup(d){let f=z(),u=p(!1),c=p(),a=V({siteName:"",username:"",password:"",domain:""}),x=p({siteName:[{required:!0,message:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0",trigger:["change","blur"]}],username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u8D26\u53F7",trigger:["change","blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u5BC6\u7801",trigger:["change","blur"]}],domain:[{required:!0,type:"url",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u57DF\u540D\uFF0C\u9700\u4EE5 http:// \u6216 https:// \u5F00\u5934",trigger:"change"}]});const h=r=>{window.open(r)},b=async()=>{await c.value.validate(r=>{r?(u.value=!0,G(a).then(e=>{_({message:"\u521D\u59CB\u5316\u6210\u529F",type:e.code===0?"success":"error",duration:1500,onClose(){f.push("/")}})}).finally(()=>{u.value=!1})):_.warning("\u8BF7\u6B63\u786E\u8F93\u5165\u521D\u59CB\u5316\u503C!")})};return k(()=>{const r=I();a.domain=r.zfileConfig.baseUrl||window.location.origin,$().then(e=>{e.data&&f.push("/")})}),(r,e)=>{const m=T,n=D,v=j,w=L;return U(),E("div",A,[o("div",H,[K,o("div",P,[o("div",Q,[o("h1",W,[o("img",{class:"w-16 cursor-pointer",onClick:e[0]||(e[0]=s=>h("https://github.com/zhaojun1998/zfile")),src:O})]),o("div",X,[Y,l(w,{onSubmit:e[5]||(e[5]=N(()=>{},["prevent"])),ref_key:"installFormRef",ref:c,rules:t(x),model:t(a),class:"zfile-install-form",size:"large"},{default:i(()=>[l(n,{class:"box animate__animated animate__fadeInUp",prop:"siteName"},{default:i(()=>[l(m,{placeholder:"\u7AD9\u70B9\u540D\u79F0","prefix-icon":t(q),modelValue:t(a).siteName,"onUpdate:modelValue":e[1]||(e[1]=s=>t(a).siteName=s)},null,8,["prefix-icon","modelValue"])]),_:1}),l(n,{class:"box animate__animated animate__fadeInUp",prop:"username"},{default:i(()=>[l(m,{placeholder:"\u7BA1\u7406\u5458\u8D26\u53F7","prefix-icon":t(R),modelValue:t(a).username,"onUpdate:modelValue":e[2]||(e[2]=s=>t(a).username=s),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),l(n,{class:"box animate__animated animate__fadeInUp",prop:"password"},{default:i(()=>[l(m,{placeholder:"\u7BA1\u7406\u5458\u5BC6\u7801",type:"password","show-password":"","prefix-icon":t(B),modelValue:t(a).password,"onUpdate:modelValue":e[3]||(e[3]=s=>t(a).password=s),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),l(n,{class:"box animate__animated animate__fadeInUp",prop:"domain"},{default:i(()=>[l(m,{placeholder:"\u7AD9\u70B9\u5730\u5740/\u57DF\u540D","prefix-icon":t(F),modelValue:t(a).domain,"onUpdate:modelValue":e[4]||(e[4]=s=>t(a).domain=s),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),l(n,null,{default:i(()=>[l(v,{"native-type":"submit",loading:t(u),class:"w-full",type:"primary",icon:t(J),onClick:b},{default:i(()=>[Z]),_:1},8,["loading","icon"])]),_:1})]),_:1},8,["rules","model"])])])])])])}}};var ce=y(ee,[["__scopeId","data-v-6462780c"]]);export{ce as default};
