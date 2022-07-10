import{u as d,a,E as N}from"./popper.91c84279.js";import{b as A,D as R,u as D,I as T,_ as $,aU as I,w as O}from"./base.197bc1e5.js";import{d as f}from"./dropdown.e1a9d9ca.js";import{d as V,r as z,c as n,u as p,a as u,b as H,e as c,f as L,t as v,n as U,k as b,g as m,J,z as j}from"./index.bbf7818f.js";const q=A({trigger:d.trigger,placement:f.placement,disabled:d.disabled,visible:a.visible,transition:a.transition,popperOptions:f.popperOptions,tabindex:f.tabindex,content:a.content,popperStyle:a.popperStyle,popperClass:a.popperClass,enterable:{...a.enterable,default:!0},effect:{...a.effect,default:"light"},teleported:a.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0}}),F={"update:visible":t=>R(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},G={name:"ElPopover"},K=V({...G,props:q,emits:F,setup(t,{expose:o,emit:r}){const s=t,l=D("popover"),i=z(),g=n(()=>{var e;return(e=p(i))==null?void 0:e.popperRef}),w=n(()=>[{width:T(s.width)},s.popperStyle]),y=n(()=>[l.b(),s.popperClass,{[l.m("plain")]:!!s.content}]),P=n(()=>s.transition==="el-fade-in-linear"),C=()=>{var e;(e=i.value)==null||e.hide()},E=()=>{r("before-enter")},k=()=>{r("before-leave")},S=()=>{r("after-enter")},B=()=>{r("update:visible",!1),r("after-leave")};return o({popperRef:g,hide:C}),(e,Y)=>(u(),H(p(N),j({ref_key:"tooltipRef",ref:i},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":p(y),"popper-style":p(w),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":p(P),onBeforeShow:E,onBeforeHide:k,onShow:S,onHide:B}),{content:c(()=>[e.title?(u(),L("div",{key:0,class:U(p(l).e("title")),role:"title"},v(e.title),3)):b("v-if",!0),m(e.$slots,"default",{},()=>[J(v(e.content),1)])]),default:c(()=>[e.$slots.reference?m(e.$slots,"reference",{key:0}):b("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration"]))}});var M=$(K,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const h=(t,o)=>{const r=o.arg||o.value,s=r==null?void 0:r.popperRef;s&&(s.triggerRef=t)};var Q={mounted(t,o){h(t,o)},updated(t,o){h(t,o)}};const W="popover",X=I(Q,W),te=O(M,{directive:X});export{te as E};
