import{i as l,S as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(n){const r="43227181-d0d7712551e06c0c43f074b98",o=new URLSearchParams({key:r,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(i=>{if(!i.ok)throw new Error("Failed to fetch data");return i.json()})}function p(){document.querySelector(".loader").style.display="block"}function f(){document.querySelector(".loader").style.display="none"}function m(){document.querySelector(".gallery").innerHTML=""}function h(n){const r=document.querySelector(".gallery");r.innerHTML=n.map(o=>y(o)).join("")}function y({id:n,webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:s,downloads:a}){return`<li class="gallery-item">
      <a href="${o}" id="image-${n}">
          <img src="${r}" alt="${i}" width="360">
      </a>
      <div class="image-specs">
      <div class="specs-box"><p>Likes</p><p>${e}</p></div>
      <div class="specs-box"><p>Views</p><p>${t}</p></div>
      <div class="specs-box"><p>Comments</p><p>${s}</p></div>
      <div class="specs-box"><p>Downloads</p><p>${a}</p></div>
      </div>
  </li>`}const c=document.getElementById("searchInput"),g=document.getElementById("searchForm"),v=document.querySelector(".search-btn");g.addEventListener("submit",function(n){n.preventDefault();const r=c.value;r.length>=3&&(p(),u(r).then(o=>{o.hits.length===0?l.info({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topCenter"}):(m(),h(o.hits),new d(".gallery a").refresh())}).catch(o=>{console.error("Error fetching data:",o)}).finally(()=>{f()}))});c.addEventListener("input",function(){v.disabled=c.value.length<3});
//# sourceMappingURL=commonHelpers.js.map
