(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[584],{8273:function(e,t,n){"use strict";n.r(t),n.d(t,{CountUp:function(){return s}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},s=function(){function e(e,t,n){var s=this;this.endVal=t,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){s.startTime||(s.startTime=e);var t=e-s.startTime;s.remaining=s.duration-t,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(e){var t,n,r,i,a=e<0?"-":"";t=Math.abs(e).toFixed(s.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],r=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){i="";for(var l=3,u=0,c=0,d=n.length;c<d;++c)s.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(i=s.options.separator+i),u++,i=n[d-c-1]+i;n=i}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]}))),a+s.options.prefix+n+r+s.options.suffix},this.easeOutExpo=function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),r=n.top+window.pageYOffset,s=n.top+n.height+window.pageYOffset;s<t&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||r>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t)},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},9133:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});n(7294);var r=n(7857),s=n(5893);function i(e){var t=e.number,n=e.symbol;return(0,s.jsxs)("div",{className:"number",children:[(0,s.jsx)(r.ZP,{duration:10,className:"counter",end:t}),(0,s.jsx)(s.Fragment,{children:n})]})}},2853:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});n(9008);var r=n(9845),s=n(6382),i=n(7294),a=(n(9133),n(5893));function o(){return(0,a.jsx)("div",{className:"bg-white w-full p-3 pt-10 ",children:(0,a.jsx)("div",{className:"flex flex-col items-center pt-5",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center text-black font-raleway font-medium leading-tight",children:"Resources"}),(0,a.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-red-700"}),(0,a.jsx)("div",{className:"page_white_section_para",children:(0,a.jsx)("p",{className:"pb-3 text-center",children:"Unlock your Potential with Our Comprehensive Resources."})})]})})})}var l=n(1664);function u(){var e=(0,i.useState)(1),t=(e[0],e[1],(0,i.useState)(0)),n=(t[0],t[1]);(0,i.useEffect)((function(){n(window.innerWidth);var e=function(){return n(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var u=["Highly performing cohesive team with strong leadership","Blend of structured management consulting and design thinking.","Driving innovations to gain measurable benefits for our customers."],c=["Cloud Tranformations","Customer Experience","Digital Engineering"],d=["A recent studyrevealed that businesses experience an average increase of 28% in sales","A recent studyrevealed that businesses experience an average increase of 28% in sales","A recent studyrevealed that businesses experience an average increase of 28% in sales"];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{title:"Insights"}),(0,a.jsx)("div",{className:"sm:pt-5 pt-1",children:(0,a.jsx)("div",{className:"w-full flex flex-col sm:flex-row sm:justify-between overflow-x-hidden pt-16",children:(0,a.jsx)("div",{className:" w-full",children:(0,a.jsx)("div",{className:"relative group",children:(0,a.jsx)("div",{className:"bg-cover bg-center relative",children:(0,a.jsx)("img",{src:"".concat(".","/img/banner/resources.png"),alt:"Resources",className:" w-full h-full object-cover xs:w-full"})})})})})}),(0,a.jsx)(o,{}),(0,a.jsx)("div",{className:"pl-5 pr-5 bg-white",children:(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 p-5 pb-14",children:[0,1,2].map((function(e){return(0,a.jsx)("div",{className:"w-full",children:(0,a.jsxs)("div",{className:"border relative bg-white p-2 rounded-md ",children:[(0,a.jsx)("img",{className:"w-full h-full",src:"".concat(".","/img/about_us/advantage_v").concat(e+1,".png"),alt:"advantage"}),(0,a.jsxs)("div",{className:"w-full h-full",children:[(0,a.jsx)("p",{className:"text-sm  font-medium text-[#C03434] leading-tight pt-2",children:c[e]}),(0,a.jsx)("p",{className:"text-xl   font-bold text-blue-900  pt-2 whitespace-normal",children:u[e]}),(0,a.jsxs)("p",{className:"text-sm  font-semibold text-gray-900  pb-3 pt-2 whitespace-normal",children:[d[e]," "]}),(0,a.jsx)("div",{className:"border border-red-800 w-40 flex rounded-lg p-1",children:(0,a.jsxs)("button",{className:"inline-flex items-center font-bold  text-[#C03434] bg-white p-2 w-80",children:[(0,a.jsx)("span",{className:"md:text-[12px] sm:text-[8px] xs:text-[8px] lg:text-[15px]",children:"Download"}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsx)("img",{src:"".concat(".","/img/b2b_Commerce/red_arrow.png"),alt:"Arrow",className:"w-4 h-4"})})]})})]})]})})}))})}),(0,a.jsx)("div",{className:"bg-[#C03434] w-full p-5 pt-12 pb-10",children:(0,a.jsxs)("div",{className:"flex flex-col items-center pt-5",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center text-white font-raleway font-normal leading-tight",children:"How Can We Help?"}),(0,a.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-white"}),(0,a.jsx)("h4",{className:"text-center text-white font-raleway font-normal md:text-[28px] xs:text-[16px] sm:text-[16px] lg:text-[28px] leading-tight pt-5 pb-12",children:"Let's talk about what Logixal can do for your business."})]}),(0,a.jsx)("div",{className:"pb-10",children:(0,a.jsx)(l.default,{href:"/locations",children:(0,a.jsxs)("button",{className:"inline-flex items-center font-semibold text-sm rounded-md text-[#C03434] bg-white p-5 w-80",children:[(0,a.jsx)("span",{className:"md:text-[22px] sm:text-[16px] xs:text-[16px] lg:text-[22px]",children:"Get In Touch "}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsx)("img",{src:"".concat(".","/img/b2b_Commerce/red_arrow.png"),alt:"Arrow",className:"w-4 h-4"})})]})})})]})}),(0,a.jsx)(s.Z,{})]})}},3307:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources",function(){return n(2853)}])},7857:function(e,t,n){"use strict";var r=n(7294),s=n(8273);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function d(e){var t=r.useRef(e);return c((function(){t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)}),[])}var f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},h=function(e){var t=r.useMemo((function(){return a(a({},p),e)}),[e]),n=t.ref,i=t.startOnMount,o=t.enableReinitialize,l=t.delay,c=t.onEnd,h=t.onStart,m=t.onPauseResume,x=t.onReset,g=t.onUpdate,v=u(t,f),w=r.useRef(),b=r.useRef(),y=r.useRef(!1),j=d((function(){return function(e,t){var n=t.decimal,r=t.decimals,i=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,u=t.numerals,c=t.prefix,d=t.separator,f=t.start,p=t.suffix,h=t.useEasing,m=t.enableScrollSpy,x=t.scrollSpyDelay,g=t.scrollSpyOnce;return new s.CountUp(e,o,{startVal:f,duration:i,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:u,separator:d,prefix:c,suffix:p,useEasing:h,useGrouping:!!d,enableScrollSpy:m,scrollSpyDelay:x,scrollSpyOnce:g})}("string"===typeof n?n:n.current,v)})),V=d((function(e){var t=w.current;if(t&&!e)return t;var n=j();return w.current=n,n})),E=d((function(){var e=function(){return V(!0).start((function(){null===c||void 0===c||c({pauseResume:N,reset:O,start:F,update:S})}))};l&&l>0?b.current=setTimeout(e,1e3*l):e(),null===h||void 0===h||h({pauseResume:N,reset:O,update:S})})),N=d((function(){V().pauseResume(),null===m||void 0===m||m({reset:O,start:F,update:S})})),O=d((function(){V().el&&(b.current&&clearTimeout(b.current),V().reset(),null===x||void 0===x||x({pauseResume:N,start:F,update:S}))})),S=d((function(e){V().update(e),null===g||void 0===g||g({pauseResume:N,reset:O,start:F})})),F=d((function(){O(),E()})),P=d((function(e){i&&(e&&O(),E())}));return r.useEffect((function(){y.current?o&&P(!0):(y.current=!0,P())}),[o,y,P,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),r.useEffect((function(){return function(){O()}}),[O]),{start:F,pauseResume:N,reset:O,update:S,getCountUp:V}},m=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,s=e.containerProps,i=e.children,o=e.style,c=u(e,m),f=r.useRef(null),p=r.useRef(!1),x=h(a(a({},c),{},{ref:f,startOnMount:"function"!==typeof i||0===e.delay,enableReinitialize:!1})),g=x.start,v=x.reset,w=x.update,b=x.pauseResume,y=x.getCountUp,j=d((function(){g()})),V=d((function(t){e.preserveValue||v(),w(t)})),E=d((function(){"function"!==typeof e.children||f.current instanceof Element?y():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){E()}),[E]),r.useEffect((function(){p.current&&V(e.end)}),[e.end,V]);var N=n&&e;return r.useEffect((function(){n&&p.current&&j()}),[j,n,N]),r.useEffect((function(){!n&&p.current&&j()}),[j,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),r.useEffect((function(){p.current=!0}),[]),"function"===typeof i?i({countUpRef:f,start:g,reset:v,update:w,pauseResume:b,getCountUp:y}):r.createElement("span",l({className:t,ref:f,style:o},s),"undefined"!==typeof e.start?y().formattingFn(e.start):"")}}},function(e){e.O(0,[334,708,774,888,179],(function(){return t=3307,e(e.s=t);var t}));var t=e.O();_N_E=t}]);