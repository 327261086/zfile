import{b as x,B as z,d as L,D as M,F as V,G as g,H as U,I as $,J as q,K as B,L as G}from"./base.197bc1e5.js";import{U as D}from"./event.776e7e11.js";import{b as Z}from"./index.c66de53e.js";import{r as c,c as _,w as h,Y as H,o as J,a0 as K}from"./index.bbf7818f.js";const Y=x({center:{type:Boolean,default:!1},closeIcon:{type:z,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),ee={close:()=>!0},oe=x({...Y,appendToBody:{type:Boolean,default:!1},beforeClose:{type:L(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,required:!0},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),le={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[D]:e=>M(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},te=(e,a)=>{const l=K().emit,{nextZIndex:m}=V();let p="";const I=g(),F=g(),t=c(!1),f=c(!1),u=c(!1),d=c(e.zIndex||m());let n,s;const P=U("namespace",q),T=_(()=>{const o={},i=`--${P.value}-dialog`;return e.fullscreen||(e.top&&(o[`${i}-margin-top`]=e.top),e.width&&(o[`${i}-width`]=$(e.width))),o});function E(){l("opened")}function O(){l("closed"),l(D,!1),e.destroyOnClose&&(u.value=!1)}function k(){l("close")}function C(){s==null||s(),n==null||n(),e.openDelay&&e.openDelay>0?{stop:n}=B(()=>b(),e.openDelay):b()}function r(){n==null||n(),s==null||s(),e.closeDelay&&e.closeDelay>0?{stop:s}=B(()=>v(),e.closeDelay):v()}function y(){function o(i){i||(f.value=!0,t.value=!1)}e.beforeClose?e.beforeClose(o):r()}function w(){e.closeOnClickModal&&y()}function b(){!G||(t.value=!0)}function v(){t.value=!1}function A(){l("openAutoFocus")}function S(){l("closeAutoFocus")}e.lockScroll&&Z(t);function N(){e.closeOnPressEscape&&y()}return h(()=>e.modelValue,o=>{o?(f.value=!1,C(),u.value=!0,l("open"),d.value=e.zIndex?d.value++:m(),H(()=>{a.value&&(a.value.scrollTop=0)})):t.value&&r()}),h(()=>e.fullscreen,o=>{!a.value||(o?(p=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=p)}),J(()=>{e.modelValue&&(t.value=!0,u.value=!0,C())}),{afterEnter:E,afterLeave:O,beforeLeave:k,handleClose:y,onModalClick:w,close:r,doClose:v,onOpenAutoFocus:A,onCloseAutoFocus:S,onCloseRequested:N,titleId:I,bodyId:F,closed:f,style:T,rendered:u,visible:t,zIndex:d}};export{ee as a,oe as b,le as c,Y as d,te as u};
