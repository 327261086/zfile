import{d as E,G as S,r as T,c as d,a as o,b as a,e as p,Q as B,R as N,p as h,u as e,n as t,q as I,k as s,f as i,g as m,J as k,t as f,h as V,F as $,T as A}from"./index.bbf7818f.js";import{b as D,a6 as F,a7 as y,a8 as M,u as P,E as _,_ as j,w as q}from"./base.197bc1e5.js";const G=["light","dark"],J=D({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:F(y),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:G,default:"light"}}),O={close:c=>c instanceof MouseEvent},Q={name:"ElAlert"},R=E({...Q,props:J,emits:O,setup(c,{emit:w}){const n=c,{Close:z}=M,u=S(),r=P("alert"),g=T(!0),v=d(()=>y[n.type]),x=d(()=>[r.e("icon"),{[r.is("big")]:!!n.description||!!u.default}]),C=d(()=>n.description||{[r.is("bold")]:u.default}),b=l=>{g.value=!1,w("close",l)};return(l,K)=>(o(),a(A,{name:e(r).b("fade"),persisted:""},{default:p(()=>[B(h("div",{class:t([e(r).b(),e(r).m(l.type),e(r).is("center",l.center),e(r).is(l.effect)]),role:"alert"},[l.showIcon&&e(v)?(o(),a(e(_),{key:0,class:t(e(x))},{default:p(()=>[(o(),a(I(e(v))))]),_:1},8,["class"])):s("v-if",!0),h("div",{class:t(e(r).e("content"))},[l.title||l.$slots.title?(o(),i("span",{key:0,class:t([e(r).e("title"),e(C)])},[m(l.$slots,"title",{},()=>[k(f(l.title),1)])],2)):s("v-if",!0),l.$slots.default||l.description?(o(),i("p",{key:1,class:t(e(r).e("description"))},[m(l.$slots,"default",{},()=>[k(f(l.description),1)])],2)):s("v-if",!0),l.closable?(o(),i($,{key:2},[l.closeText?(o(),i("div",{key:0,class:t([e(r).e("close-btn"),e(r).is("customed")]),onClick:b},f(l.closeText),3)):(o(),a(e(_),{key:1,class:t(e(r).e("close-btn")),onClick:b},{default:p(()=>[V(e(z))]),_:1},8,["class"]))],64)):s("v-if",!0)],2)],2),[[N,g.value]])]),_:3},8,["name"]))}});var H=j(R,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);const W=q(H);export{W as E};
