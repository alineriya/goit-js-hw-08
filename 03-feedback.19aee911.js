!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e="Expected a function",n=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function m(t,n,o){var r,i,u,f,c,a,l=0,s=!1,d=!1,m=!0;if("function"!=typeof t)throw new TypeError(e);function j(e){var n=r,o=i;return r=i=void 0,l=e,f=t.apply(o,n)}function T(t){var e=t-a;return void 0===a||e>=n||e<0||d&&t-l>=u}function h(){var t=b();if(T(t))return w(t);c=setTimeout(h,function(t){var e=n-(t-a);return d?p(e,u-(t-l)):e}(t))}function w(t){return c=void 0,m&&r?j(t):(r=i=void 0,f)}function O(){var t=b(),e=T(t);if(r=arguments,i=this,a=t,e){if(void 0===c)return function(t){return l=t,c=setTimeout(h,n),s?j(t):f}(a);if(d)return c=setTimeout(h,n),j(a)}return void 0===c&&(c=setTimeout(h,n)),f}return n=g(n)||0,y(o)&&(s=!!o.leading,u=(d="maxWait"in o)?v(g(o.maxWait)||0,n):u,m="trailing"in o?!!o.trailing:m),O.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=a=i=c=void 0},O.flush=function(){return void 0===c?f:w(b())},O}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&d.call(t)==o}(t))return n;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var a=u.test(t);return a||f.test(t)?c(t.slice(2),a?2:8):i.test(t)?n:+t}const j="feedback-form-state",T=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form textarea");T.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem(j)})),h.addEventListener("input",(function(t){const e=t.currentTarget.value;localStorage.setItem(j,e)}))}();
//# sourceMappingURL=03-feedback.19aee911.js.map