import{n as u,s as g}from"./scheduler.uvmn1DSa.js";const i=[];function k(e,r){return{subscribe:h(e,r).subscribe}}function h(e,r=u){let n;const o=new Set;function b(t){if(g(e,t)&&(e=t,n)){const c=!i.length;for(const s of o)s[1](),i.push(s,e);if(c){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function a(t){b(t(e))}function _(t,c=u){const s=[t,c];return o.add(s),o.size===1&&(n=r(b,a)||u),t(e),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:b,update:a,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_17olxj2)==null?void 0:f.base)??"/sveltekit-gh-pages";var l;const q=((l=globalThis.__sveltekit_17olxj2)==null?void 0:l.assets)??p;export{q as a,p as b,k as r,h as w};
