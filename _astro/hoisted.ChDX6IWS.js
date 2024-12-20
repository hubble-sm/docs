const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./assets/_astro/ui-core.C9h57nbf.js","./assets/_astro/Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js"])))=>i.map(i=>d[i]);
import"./Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js";const S=document.getElementById("starlight__sidebar"),y=S?.querySelector("sl-sidebar-state-persist"),v="sl-sidebar-state",b=()=>{let t=[];const e=y?.dataset.hash||"";try{const n=sessionStorage.getItem(v),r=JSON.parse(n||"{}");Array.isArray(r.open)&&r.hash===e&&(t=r.open)}catch{}return{hash:e,open:t,scroll:S?.scrollTop||0}},w=t=>{try{sessionStorage.setItem(v,JSON.stringify(t))}catch{}},L=()=>w(b()),x=(t,e)=>{const n=b();n.open[e]=t,w(n)};y?.addEventListener("click",t=>{if(!(t.target instanceof Element))return;const e=t.target.closest("summary")?.closest("details");if(!e)return;const n=e.querySelector("sl-sidebar-restore"),r=parseInt(n?.dataset.index||"");isNaN(r)||x(!e.open,r)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&L()});addEventListener("pageHide",L);class H extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=n.currentTarget.value)})}}customElements.define("starlight-lang-select",H);const C="modulepreload",M=function(t,e){return new URL(t,e).href},E={},_=function(e,n,r){let m=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),g=a?.nonce||a?.getAttribute("nonce");m=Promise.allSettled(n.map(s=>{if(s=M(s,r),s in E)return;E[s]=!0;const d=s.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const f=i[l];if(f.href===s&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${h}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":C,d||(c.as="script"),c.crossOrigin="",c.href=s,g&&c.setAttribute("nonce",g),document.head.appendChild(c),d)return new Promise((l,f)=>{c.addEventListener("load",l),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}function u(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return m.then(i=>{for(const a of i||[])a.status==="rejected"&&u(a.reason);return e().catch(u)})};class A extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),n=this.querySelector("button[data-close-modal]"),r=this.querySelector("dialog"),m=this.querySelector(".dialog-frame"),u=o=>{("href"in(o.target||{})||document.body.contains(o.target)&&!m.contains(o.target))&&a()},i=o=>{r.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),o?.stopPropagation(),window.addEventListener("click",u)},a=()=>r.close();e.addEventListener("click",i),e.disabled=!1,n.addEventListener("click",a),r.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",u)}),window.addEventListener("keydown",o=>{(o.metaKey===!0||o.ctrlKey===!0)&&o.key==="k"&&(r.open?a():i(),o.preventDefault())});let g={};try{g=JSON.parse(this.dataset.translations||"{}")}catch{}const h=this.dataset.stripTrailingSlash!==void 0?o=>o.replace(/(.)\/(#.*)?$/,"$1$2"):o=>o;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(c=>setTimeout(c,1)))(async()=>{const{PagefindUI:c}=await _(async()=>{const{PagefindUI:l}=await import("./ui-core.C9h57nbf.js");return{PagefindUI:l}},__vite__mapDeps([0,1]),import.meta.url);new c({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:g,showSubResults:!0,processResult:l=>{l.url=h(l.url),l.sub_results=l.sub_results.map(f=>(f.url=h(f.url),f))}})})})}}customElements.define("site-search",A);const T="starlight-theme",k=t=>t==="auto"||t==="dark"||t==="light"?t:"auto",I=()=>k(typeof localStorage<"u"&&localStorage.getItem(T));function P(t){typeof localStorage<"u"&&localStorage.setItem(T,t==="light"||t==="dark"?t:"")}const R=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function p(t){StarlightThemeProvider.updatePickers(t),document.documentElement.dataset.theme=t==="auto"?R():t,P(t)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{I()==="auto"&&p("auto")});class O extends HTMLElement{constructor(){super(),p(I()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&p(k(e.currentTarget.value))})}}customElements.define("starlight-theme-select",O);class B extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",n=>this.closeOnEscape(n))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",B);const N="_top";class q extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10),this.onIdle=e=>(window.requestIdleCallback||(n=>setTimeout(n,1)))(e),this.init=()=>{const e=[...this.querySelectorAll("a")],n=s=>{if(s instanceof HTMLHeadingElement){if(s.id===N)return!0;const d=s.tagName[1];if(d){const h=parseInt(d,10);if(h>=this.minH&&h<=this.maxH)return!0}}return!1},r=s=>{if(!s)return null;const d=s;for(;s;){if(n(s))return s;for(s=s.previousElementSibling;s?.lastElementChild;)s=s.lastElementChild;const h=r(s);if(h)return h}return r(d.parentElement)},m=s=>{for(const{isIntersecting:d,target:h}of s){if(!d)continue;const o=r(h);if(!o)continue;const c=e.find(l=>l.hash==="#"+encodeURIComponent(o.id));if(c){this.current=c;break}}},u=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let i;const a=()=>{i||(i=new IntersectionObserver(m,{rootMargin:this.getRootMargin()}),u.forEach(s=>i.observe(s)))};a();let g;window.addEventListener("resize",()=>{i&&(i.disconnect(),i=void 0),clearTimeout(g),g=setTimeout(()=>this.onIdle(a),200)})},this.onIdle(()=>this.init())}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,n=this.querySelector("summary")?.getBoundingClientRect().height||0,r=e+n+32,m=r+53,u=document.documentElement.clientHeight;return`-${r}px 0% ${m-u}px`}}customElements.define("starlight-toc",q);class $ extends q{set current(e){super.current=e;const n=this.querySelector(".display-current");n&&(n.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const n=()=>{e.open=!1};e.querySelectorAll("a").forEach(r=>{r.addEventListener("click",n)}),window.addEventListener("click",r=>{e.contains(r.target)||n()}),window.addEventListener("keydown",r=>{if(r.key==="Escape"&&e.open){const m=e.contains(document.activeElement);if(n(),m){const u=e.querySelector("summary");u&&u.focus()}}})}}customElements.define("mobile-starlight-toc",$);export{_};
