"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{8273:function(e,t,r){r.r(t),r.d(t,{CountUp:function(){return i}});var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){function e(e,t,r){var i=this;this.endVal=t,this.options=r,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration);var r=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=r?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(e){var t,r,n,s,a=e<0?"-":"";t=Math.abs(e).toFixed(i.options.decimalPlaces);var o=(t+="").split(".");if(r=o[0],n=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){s="";for(var l=3,c=0,u=0,d=r.length;u<d;++u)i.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(s=i.options.separator+s),c++,s=r[d-u-1]+s;r=s}return i.options.numerals&&i.options.numerals.length&&(r=r.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),a+i.options.prefix+r+n+i.options.suffix},this.easeOutExpo=function(e,t,r,n){return r*(1-Math.pow(2,-10*e/n))*1024/1023+t},this.options=n(n({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,r=e.el.getBoundingClientRect(),n=r.top+window.pageYOffset,i=r.top+r.height+window.pageYOffset;i<t&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>i||n>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var r=this.countDown?1:-1;this.endVal=e+r*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t)},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},9133:function(e,t,r){r.d(t,{Z:function(){return s}});r(7294);var n=r(7857),i=r(5893);function s(e){var t=e.number,r=e.symbol;return(0,i.jsxs)("div",{className:"number",children:[(0,i.jsx)(n.ZP,{duration:10,className:"counter",end:t}),(0,i.jsx)(i.Fragment,{children:r})]})}},802:function(e,t,r){r.d(t,{Z:function(){return s}});r(7294),r(9133);var n=r(4408),i=r(5893);function s(){var e=[{id:1,title:"Navigate with Ease by Tailoring your catalog to your customer\u2019s Catalog ID's and Names.",image:"".concat(".","/img/slider_images/B2B_Slider/slide1.png")},{id:2,title:"Composable Commerce empowers Enterprises to Assemble Best-Of-Breed platforms.",image:"".concat(".","/img/slider_images/B2B_Slider/slide2.png")},{id:3,title:"Shorten your Quote cycle by leveraging API Commerce.",image:"".concat(".","/img/slider_images/B2B_Slider/slide3.png")},{id:4,title:"Don't allow Punchout complexities to Punch You Out.",image:"".concat(".","/img/slider_images/B2B_Slider/slide4.png")},{id:5,title:"Real-time Actionable Dashboards for Day-To-Day operations.",image:"".concat(".","/img/slider_images/B2B_Slider/slide5.png")},{id:6,title:"Logixal's accelerator reduces Decoupled Micro-Frontends TTM by ~40% for composable commerce transformation.",image:"".concat(".","/img/slider_images/B2B_Slider/slide6.png")},{id:7,title:"Logixal's SME's are well-prepared to manage the intricacies of large catalogs. Are you ready to tackle the challenge?",image:"".concat(".","/img/slider_images/B2B_Slider/slide7.png")},{id:8,title:"Shorten your product discovery cycle by up to 40% with the help of AI powered search.",image:"".concat(".","/img/slider_images/B2B_Slider/slide8.png")}];return(0,i.jsxs)("div",{className:"bg-white w-full  pt-3 sm:pt-10",children:[(0,i.jsx)("div",{className:"flex flex-col items-center pt-5",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] sm:text-center text-left text-indigo-900 sm:text-black font-raleway pl-2 pr-2 sm:pl-0 sm:pr-0 font-bold sm:font-medium leading-tight",children:"Composable B2B Commerce"}),(0,i.jsx)("div",{className:"hidden lg:block border-b-4 mx-auto w-0  pt-0 sm:w-10  sm:pt-4 item-center border-red-700"}),(0,i.jsxs)("div",{className:"page_white_section_para",children:[(0,i.jsx)("p",{className:"pl-3 pr-1 sm:pl-0 sm:pr-0",children:"Welcome to Logixal, your one-stop-shop for all your B2B commerce requirements. Logixal has partnered with industry leading platforms to provide custom implementations or in-house enterprise solutions."}),(0,i.jsx)("div",{className:"bg-white w-full pl-5 pr-5 md:pl-16 md:pr-16  pb-10",children:(0,i.jsx)("div",{className:"flex flex-col items-center p-4 pt-5",children:(0,i.jsxs)("div",{className:"flex justify-center",children:[(0,i.jsx)("div",{className:"relative"}),(0,i.jsx)("div",{className:"flex flex-col md:flex-row",children:(0,i.jsxs)("div",{className:"flex flex-wrap ",children:[(0,i.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/broadleaf.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4  xs:w-1/2  p-4 border-gray-300",alt:""}),(0,i.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/commerce_tools.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4  xs:w-1/2  p-4 border-gray-300",alt:""}),(0,i.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/oracle_commerce.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4  xs:w-1/2 p-4  border-gray-300",alt:""}),(0,i.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/spryker.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4   xs:w-1/2 p-4  border-gray-300",alt:""})]})})]})})})]}),(0,i.jsx)("div",{className:"",children:(0,i.jsx)(n.Z,{items:e})})]})}),(0,i.jsxs)("div",{className:"page_white_section_para bg-gray-50 items-center pt-14",children:[(0,i.jsx)("p",{className:"pb-7 text-center font-semibold text-black font-normal md:text-lg xs:text-base sm:text-base lg:text-3xl leading-tight ",children:"Which Enterprise Commerce Are You?"}),(0,i.jsx)("div",{className:"pb-10",children:(0,i.jsx)("div",{className:"pl-10 pr-10 ",children:(0,i.jsxs)("div",{class:"grid gap-7 grid-cols-1 sm:grid-cols-2 justify-self-center",children:[(0,i.jsx)("div",{className:"pl-0 md:pl-16",children:(0,i.jsxs)("div",{class:"border rounded-md bg-white",children:[(0,i.jsx)("div",{className:"bg-[#363E7B] rounded-t-md",children:(0,i.jsx)("p",{className:"pb-4 text-center font-semibold text-white pt-4",children:"Traditional Commerce"})}),(0,i.jsx)("div",{className:"pl-5 pt-1 space-y-5",children:(0,i.jsxs)("ul",{class:"list-item sm:text-sm text-xs font-normal text-black   pb-2 pt-1 whitespace-normal space-y-2",children:[(0,i.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:" Single platform/In-house Custom framework-based solution"}),(0,i.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:" Monolith"}),(0,i.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:" Tightly Coupled UI"}),(0,i.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:" N-Tier Architecture"}),(0,i.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:" Business Powered Personalization"})]})})]})}),(0,i.jsx)("div",{className:"pr-0 md:pr-16 ",children:(0,i.jsxs)("div",{class:"border rounded-md bg-white",children:[(0,i.jsx)("div",{className:"bg-[#363E7B] rounded-t-md",children:(0,i.jsx)("p",{className:"pb-4 text-center font-semibold text-white pt-4",children:"Composable Commerce"})}),(0,i.jsx)("div",{className:"pl-5 pt-1 space-y-5",children:(0,i.jsxs)("ul",{class:"list-item sm:text-sm text-xs font-normal text-black   pb-2 pt-1 whitespace-normal space-y-2",children:[(0,i.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:"  Multi Platform\xa0based\xa0solution"}),(0,i.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:"  Headless Micro-services"}),(0,i.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:"  Decoupled Micro-frontend UI"}),(0,i.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:"  Event-Driven Architecture"}),(0,i.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:"  AI/ML Powered Personalization"})]})})]})})]})})})]})]})}},4408:function(e,t,r){r.d(t,{Z:function(){return a}});r(7294);var n=r(3378),i=r.n(n),s=r(5893);function a(e){var t=e.items;return(0,s.jsx)("div",{className:"bg-white",children:(0,s.jsx)(i(),{cols:2,rows:1,gap:10,loop:!0,autoplay:!0,children:t.map((function(e){return(0,s.jsx)(i().Item,{children:(0,s.jsxs)("div",{className:"relative bg-white group w-full h-full z-0 pb-5",children:[(0,s.jsx)("img",{width:"100%",height:"100%",src:e.image}),(0,s.jsx)("div",{className:"absolute left-0 bottom-4 opacity-90 right-0 z-10 flex  bg-[#363E7B] ",children:(0,s.jsx)("div",{className:"lg:p-4 xs:p-2 sm:p-2  h-35 md:h-40  lg:h-48 ",children:(0,s.jsx)("h3",{className:"text-white  font-semibold lg:text-4xl md:text-2xl text-lg ",children:e.title})})})]})})}))})})}},7857:function(e,t,r){var n=r(7294),i=r(8273);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?n.useLayoutEffect:n.useEffect;function d(e){var t=n.useRef(e);return u((function(){t.current=e})),n.useCallback((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.current.apply(void 0,r)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],f={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},p=function(e){var t=n.useMemo((function(){return a(a({},f),e)}),[e]),r=t.ref,s=t.startOnMount,o=t.enableReinitialize,l=t.delay,u=t.onEnd,p=t.onStart,h=t.onPauseResume,g=t.onReset,b=t.onUpdate,x=c(t,m),w=n.useRef(),y=n.useRef(),v=n.useRef(!1),j=d((function(){return function(e,t){var r=t.decimal,n=t.decimals,s=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,m=t.start,f=t.suffix,p=t.useEasing,h=t.enableScrollSpy,g=t.scrollSpyDelay,b=t.scrollSpyOnce;return new i.CountUp(e,o,{startVal:m,duration:s,decimal:r,decimalPlaces:n,easingFn:a,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:f,useEasing:p,useGrouping:!!d,enableScrollSpy:h,scrollSpyDelay:g,scrollSpyOnce:b})}("string"===typeof r?r:r.current,x)})),V=d((function(e){var t=w.current;if(t&&!e)return t;var r=j();return w.current=r,r})),E=d((function(){var e=function(){return V(!0).start((function(){null===u||void 0===u||u({pauseResume:N,reset:S,start:F,update:O})}))};l&&l>0?y.current=setTimeout(e,1e3*l):e(),null===p||void 0===p||p({pauseResume:N,reset:S,update:O})})),N=d((function(){V().pauseResume(),null===h||void 0===h||h({reset:S,start:F,update:O})})),S=d((function(){V().el&&(y.current&&clearTimeout(y.current),V().reset(),null===g||void 0===g||g({pauseResume:N,start:F,update:O}))})),O=d((function(e){V().update(e),null===b||void 0===b||b({pauseResume:N,reset:S,start:F})})),F=d((function(){S(),E()})),C=d((function(e){s&&(e&&S(),E())}));return n.useEffect((function(){v.current?o&&C(!0):(v.current=!0,C())}),[o,v,C,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),n.useEffect((function(){return function(){S()}}),[S]),{start:F,pauseResume:N,reset:S,update:O,getCountUp:V}},h=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,r=e.redraw,i=e.containerProps,s=e.children,o=e.style,u=c(e,h),m=n.useRef(null),f=n.useRef(!1),g=p(a(a({},u),{},{ref:m,startOnMount:"function"!==typeof s||0===e.delay,enableReinitialize:!1})),b=g.start,x=g.reset,w=g.update,y=g.pauseResume,v=g.getCountUp,j=d((function(){b()})),V=d((function(t){e.preserveValue||x(),w(t)})),E=d((function(){"function"!==typeof e.children||m.current instanceof Element?v():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));n.useEffect((function(){E()}),[E]),n.useEffect((function(){f.current&&V(e.end)}),[e.end,V]);var N=r&&e;return n.useEffect((function(){r&&f.current&&j()}),[j,r,N]),n.useEffect((function(){!r&&f.current&&j()}),[j,r,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),n.useEffect((function(){f.current=!0}),[]),"function"===typeof s?s({countUpRef:m,start:b,reset:x,update:w,pauseResume:y,getCountUp:v}):n.createElement("span",l({className:t,ref:m,style:o},i),"undefined"!==typeof e.start?v().formattingFn(e.start):"")}}}]);