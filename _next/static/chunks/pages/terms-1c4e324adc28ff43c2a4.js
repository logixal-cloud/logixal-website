(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{8273:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,a,s=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){a="";for(var u=3,l=0,c=0,f=n.length;c<f;++c)i.options.useIndianSeparators&&4===c&&(u=2,l=1),0!==c&&l%u==0&&(a=i.options.separator+a),l++,a=n[f-c-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),s+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);this.el&&("INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e)},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},9133:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});n(7294);var r=n(7857),i=n(5893);function a(t){var e=t.number,n=t.symbol;return(0,i.jsxs)("div",{className:"number",children:[(0,i.jsx)(r.ZP,{duration:10,className:"counter",end:e}),(0,i.jsx)(i.Fragment,{children:n})]})}},5731:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});n(9008);var r=n(9845),i=n(6382),a=(n(7294),n(9133),n(5893));function s(){return(0,a.jsx)("div",{className:"bg-white w-full  p-3 pt-10 pb-16",children:(0,a.jsx)("div",{className:"flex flex-col items-center pt-5",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center text-black font-raleway font-medium leading-tight",children:"Terms and Conditions"}),(0,a.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-red-700"}),(0,a.jsx)("div",{className:"page_white_section_para",children:(0,a.jsx)("p",{className:"pb-3  text-center",children:"Clear guidelines for a positive user experience."})})]})})})}function o(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{title:"Insights"}),(0,a.jsx)("div",{className:"w-full flex flex-col  sm:flex-row sm:justify-between overflow-x-hidden pt-16 ",children:(0,a.jsx)("div",{className:" w-full",children:(0,a.jsx)("div",{className:"relative group",children:(0,a.jsx)("div",{className:"bg-cover  bg-center relative",children:(0,a.jsx)("img",{src:"".concat(".","/img/terms/terms_conditions_banner.png"),alt:"Image 1",className:" w-full h-full object-cover xs:w-full"})})})})}),(0,a.jsx)(s,{}),(0,a.jsx)(i.Z,{})]})}},8875:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms",function(){return n(5731)}])},7857:function(t,e,n){"use strict";var r=n(7294),i=n(8273);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function f(t){var e=r.useRef(t);return c((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],d={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},h=function(t){var e=r.useMemo((function(){return s(s({},d),t)}),[t]),n=e.ref,a=e.startOnMount,o=e.enableReinitialize,u=e.delay,c=e.onEnd,h=e.onStart,m=e.onPauseResume,g=e.onReset,v=e.onUpdate,y=l(e,p),b=r.useRef(),w=r.useRef(),V=r.useRef(!1),x=f((function(){return function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,s=e.easingFn,o=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,f=e.separator,p=e.start,d=e.suffix,h=e.useEasing,m=e.enableScrollSpy,g=e.scrollSpyDelay,v=e.scrollSpyOnce;return new i.CountUp(t,o,{startVal:p,duration:a,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:u,numerals:l,separator:f,prefix:c,suffix:d,useEasing:h,useGrouping:!!f,enableScrollSpy:m,scrollSpyDelay:g,scrollSpyOnce:v})}("string"===typeof n?n:n.current,y)})),E=f((function(t){var e=b.current;if(e&&!t)return e;var n=x();return b.current=n,n})),O=f((function(){var t=function(){return E(!0).start((function(){null===c||void 0===c||c({pauseResume:j,reset:S,start:N,update:F})}))};u&&u>0?w.current=setTimeout(t,1e3*u):t(),null===h||void 0===h||h({pauseResume:j,reset:S,update:F})})),j=f((function(){E().pauseResume(),null===m||void 0===m||m({reset:S,start:N,update:F})})),S=f((function(){E().el&&(w.current&&clearTimeout(w.current),E().reset(),null===g||void 0===g||g({pauseResume:j,start:N,update:F}))})),F=f((function(t){E().update(t),null===v||void 0===v||v({pauseResume:j,reset:S,start:N})})),N=f((function(){S(),O()})),P=f((function(t){a&&(t&&S(),O())}));return r.useEffect((function(){V.current?o&&P(!0):(V.current=!0,P())}),[o,V,P,u,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){S()}}),[S]),{start:N,pauseResume:j,reset:S,update:F,getCountUp:E}},m=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,o=t.style,c=l(t,m),p=r.useRef(null),d=r.useRef(!1),g=h(s(s({},c),{},{ref:p,startOnMount:"function"!==typeof a||0===t.delay,enableReinitialize:!1})),v=g.start,y=g.reset,b=g.update,w=g.pauseResume,V=g.getCountUp,x=f((function(){v()})),E=f((function(e){t.preserveValue||y(),b(e)})),O=f((function(){"function"!==typeof t.children||p.current instanceof Element?V():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){O()}),[O]),r.useEffect((function(){d.current&&E(t.end)}),[t.end,E]);var j=n&&t;return r.useEffect((function(){n&&d.current&&x()}),[x,n,j]),r.useEffect((function(){!n&&d.current&&x()}),[x,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){d.current=!0}),[]),"function"===typeof a?a({countUpRef:p,start:v,reset:y,update:b,pauseResume:w,getCountUp:V}):r.createElement("span",u({className:e,ref:p,style:o},i),"undefined"!==typeof t.start?V().formattingFn(t.start):"")}}},function(t){t.O(0,[334,708,774,888,179],(function(){return e=8875,t(t.s=e);var e}));var e=t.O();_N_E=e}]);