!function(o){var c={},r=o.fn.data,f=o.camelCase,s=o.expando="Zepto"+ +new Date,h=[];function u(t,n,e){var a,i,r=t[s]||(t[s]=++o.uuid),u=c[r]||(c[r]=(a=t,i={},o.each(a.attributes||h,function(t,n){0==n.name.indexOf("data-")&&(i[f(n.name.replace("data-",""))]=o.zepto.deserializeValue(n.value))}),i));return void 0!==n&&(u[f(n)]=e),u}o.fn.data=function(n,t){return void 0===t?o.isPlainObject(n)?this.each(function(t,e){o.each(n,function(t,n){u(e,t,n)})}):0 in this?function(t,n){var e=t[s],a=e&&c[e];if(void 0===n)return a||u(t);if(a){if(n in a)return a[n];var i=f(n);if(i in a)return a[i]}return r.call(o(t),n)}(this[0],n):void 0:this.each(function(){u(this,n,t)})},o.data=function(t,n,e){return o(t).data(n,e)},o.hasData=function(t){var n=t[s],e=n&&c[n];return!!e&&!o.isEmptyObject(e)},o.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var t=this[s],n=t&&c[t];n&&o.each(e||n,function(t){delete n[e?f(this):t]})})},["remove","empty"].forEach(function(n){var e=o.fn[n];o.fn[n]=function(){var t=this.find("*");return"remove"===n&&(t=t.add(this)),t.removeData(),e.call(this)}})}(Zepto);