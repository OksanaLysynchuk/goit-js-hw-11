import{S as d}from"./assets/vendor-874053e3.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="42752010-70402d91d951665a6458bc92c",h="https://pixabay.com/api/";function m(o){const n=`${h}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.ok)throw new Error("Image error!");return r.json()}).catch(r=>{throw console.error("Error while fetching images from pixabay!",r),r})}function f(o){const n=o.map(e=>{const t=document.createElement("div");t.classList.add("card");const c=document.createElement("a");c.href=e.largeImageURL,c.classList.add("gallery-item");const i=document.createElement("img");return i.src=e.webformatURL,i.alt=e.tags,c.appendChild(i),t.appendChild(c),t}),r=document.querySelector(".gallery");r.innerHTML="",n.forEach(e=>{r.appendChild(e)}),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function p(){const o=document.querySelector(".loader");o.style.display="block"}function l(){const o=document.querySelector(".loader");o.style.display="none"}function s(o){iziToast.error({title:"Error",message:o,position:"topRight"})}const g=document.querySelector(".search-page"),y=document.querySelector(".search-placeholder");g.addEventListener("submit",L);function L(o){o.preventDefault();const n=y.value.trim();if(!n){s("Please enter a search term");return}p(),m(n).then(r=>{l(),r.hits.length===0?s("Sorry, there are no images matching your search query. Please try again!"):f(r.hits)}).catch(r=>{l(),s("Error while fetching images from pixabay!")})}
//# sourceMappingURL=commonHelpers.js.map
