(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{8273:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,s,a=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){s="";for(var l=3,u=0,c=0,f=n.length;c<f;++c)i.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(s=i.options.separator+s),u++,s=n[f-c-1]+s;n=s}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),a+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);this.el&&("INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e)},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},9133:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(7294);var r=n(7857),i=n(5893);function s(t){var e=t.number,n=t.symbol;return(0,i.jsxs)("div",{className:"number",children:[(0,i.jsx)(r.ZP,{duration:10,className:"counter",end:e}),(0,i.jsx)(i.Fragment,{children:n})]})}},8626:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});n(9008);var r=n(9845),i=n(6382),s=n(7294),a=(n(9133),n(5893));function o(){var t=(0,s.useState)(2);t[0],t[1];return(0,a.jsx)("div",{className:"bg-white w-full p-5  pb-10",children:(0,a.jsx)("div",{className:"flex flex-col items-center p-3 ",children:(0,a.jsxs)("div",{className:"flex justify-center",children:[(0,a.jsx)("div",{className:"relative"}),(0,a.jsx)("div",{className:"flex flex-col md:flex-row",children:(0,a.jsxs)("div",{className:"flex flex-wrap ",children:[(0,a.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/broadleaf.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4  xs:w-1/2  p-4 border-gray-300",alt:""}),(0,a.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/commerce_tools.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4  xs:w-1/2  p-4 border-gray-300",alt:""}),(0,a.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/oracle_commerce.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4  xs:w-1/2 p-4  border-gray-300",alt:""}),(0,a.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/spryker.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4   xs:w-1/2 p-4  border-gray-300",alt:""})]})})]})})})}function l(){return(0,a.jsxs)("div",{className:"bg-white w-full p-5 pt-10 pb-10",children:[(0,a.jsx)("div",{className:"flex flex-col items-center pt-5",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center text-black font-raleway font-medium leading-tight",children:"Partnerships"}),(0,a.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-red-700"}),(0,a.jsx)("div",{className:"page_white_section_para",children:(0,a.jsx)("p",{className:"pb-3 md:pb-6",children:"Collaborating for Success: The Power of Partnership."})})]})}),(0,a.jsx)(o,{})]})}function u(){var t=(0,s.useState)(0),e=(t[0],t[1],(0,s.useState)(0)),n=(e[0],e[1],(0,s.useState)(2)),o=(n[0],n[1],(0,s.useState)(!1));o[0],o[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{title:"Our Company"}),(0,a.jsx)("div",{className:"sm:pt-5 pt-2",children:(0,a.jsx)("div",{className:"w-full flex flex-col sm:flex-row sm:justify-between overflow-x-hidden pt-16",children:(0,a.jsx)("div",{className:" w-full",children:(0,a.jsx)("div",{className:"relative group",children:(0,a.jsx)("div",{className:"bg-cover bg-center relative",children:(0,a.jsx)("img",{src:"".concat(".","/img/Inner_Pages_Banners/partner_ship_banner.png"),alt:"Image 1",className:" w-full h-full object-cover xs:w-full"})})})})})}),(0,a.jsx)(l,{}),(0,a.jsx)(i.Z,{})]})}},7265:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/partnerships",function(){return n(8626)}])},7857:function(t,e,n){"use strict";var r=n(7294),i=n(8273);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(){return(l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function f(t){var e=r.useRef(t);return c((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],d={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},m=function(t){var e=r.useMemo((function(){return a(a({},d),t)}),[t]),n=e.ref,s=e.startOnMount,o=e.enableReinitialize,l=e.delay,c=e.onEnd,m=e.onStart,h=e.onPauseResume,g=e.onReset,w=e.onUpdate,v=u(e,p),y=r.useRef(),b=r.useRef(),x=r.useRef(!1),V=f((function(){return function(t,e){var n=e.decimal,r=e.decimals,s=e.duration,a=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,f=e.separator,p=e.start,d=e.suffix,m=e.useEasing,h=e.enableScrollSpy,g=e.scrollSpyDelay,w=e.scrollSpyOnce;return new i.CountUp(t,o,{startVal:p,duration:s,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:d,useEasing:m,useGrouping:!!f,enableScrollSpy:h,scrollSpyDelay:g,scrollSpyOnce:w})}("string"===typeof n?n:n.current,v)})),j=f((function(t){var e=y.current;if(e&&!t)return e;var n=V();return y.current=n,n})),E=f((function(){var t=function(){return j(!0).start((function(){null===c||void 0===c||c({pauseResume:O,reset:N,start:F,update:S})}))};l&&l>0?b.current=setTimeout(t,1e3*l):t(),null===m||void 0===m||m({pauseResume:O,reset:N,update:S})})),O=f((function(){j().pauseResume(),null===h||void 0===h||h({reset:N,start:F,update:S})})),N=f((function(){j().el&&(b.current&&clearTimeout(b.current),j().reset(),null===g||void 0===g||g({pauseResume:O,start:F,update:S}))})),S=f((function(t){j().update(t),null===w||void 0===w||w({pauseResume:O,reset:N,start:F})})),F=f((function(){N(),E()})),P=f((function(t){s&&(t&&N(),E())}));return r.useEffect((function(){x.current?o&&P(!0):(x.current=!0,P())}),[o,x,P,l,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){N()}}),[N]),{start:F,pauseResume:O,reset:N,update:S,getCountUp:j}},h=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,s=t.children,o=t.style,c=u(t,h),p=r.useRef(null),d=r.useRef(!1),g=m(a(a({},c),{},{ref:p,startOnMount:"function"!==typeof s||0===t.delay,enableReinitialize:!1})),w=g.start,v=g.reset,y=g.update,b=g.pauseResume,x=g.getCountUp,V=f((function(){w()})),j=f((function(e){t.preserveValue||v(),y(e)})),E=f((function(){"function"!==typeof t.children||p.current instanceof Element?x():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){E()}),[E]),r.useEffect((function(){d.current&&j(t.end)}),[t.end,j]);var O=n&&t;return r.useEffect((function(){n&&d.current&&V()}),[V,n,O]),r.useEffect((function(){!n&&d.current&&V()}),[V,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){d.current=!0}),[]),"function"===typeof s?s({countUpRef:p,start:w,reset:v,update:y,pauseResume:b,getCountUp:x}):r.createElement("span",l({className:e,ref:p,style:o},i),"undefined"!==typeof t.start?x().formattingFn(t.start):"")}}},function(t){t.O(0,[334,708,774,888,179],(function(){return e=7265,t(t.s=e);var e}));var e=t.O();_N_E=e}]);