!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,p=Math.max,g=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var o,r,u,f,a,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function h(){var e=y();if(b(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function w(e){return a=void 0,v&&o?m(e):(o=r=void 0,f)}function O(){var e=y(),n=b(e);if(o=arguments,r=this,l=e,n){if(void 0===a)return function(e){return c=e,a=setTimeout(h,t),s?m(e):f}(l);if(d)return a=setTimeout(h,t),m(l)}return void 0===a&&(a=setTimeout(h,t)),f}return t=S(t)||0,j(n)&&(s=!!n.leading,u=(d="maxWait"in n)?p(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=r=a=void 0},O.flush=function(){return void 0===a?f:w(y())},O}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=a.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):f.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const h="feedback-form-state";let w={};const O=document.querySelector(".feedback-form"),T=document.querySelector(".feedback-form input"),x=document.querySelector(".feedback-form textarea");O.addEventListener("submit",(function(e){if(e.preventDefault(),""!==T.value&&""!==x.value)return console.log(w),e.target.reset(),void localStorage.removeItem(h);alert("Please fill in all fields")})),O.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(w))}),500)),function(){const e=localStorage.getItem(h);e&&(w=JSON.parse(e),T.value=w.email,x.value=w.message)}()}();
//# sourceMappingURL=03-feedback.2aadfcb8.js.map
