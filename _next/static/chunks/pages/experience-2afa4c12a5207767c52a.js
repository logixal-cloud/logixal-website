(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{8273:function(e,t,n){"use strict";n.r(t),n.d(t,{CountUp:function(){return r}});var i=function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=function(){function e(e,t,n){var r=this;this.endVal=t,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){r.startTime||(r.startTime=e);var t=e-r.startTime;r.remaining=r.duration-t,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(t,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(t,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(t/r.duration);var n=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=n?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),t<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.callback&&r.callback()},this.formatNumber=function(e){var t,n,i,s,a=e<0?"-":"";t=Math.abs(e).toFixed(r.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],i=o.length>1?r.options.decimal+o[1]:"",r.options.useGrouping){s="";for(var l=3,c=0,u=0,d=n.length;u<d;++u)r.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(s=r.options.separator+s),c++,s=n[d-u-1]+s;n=s}return r.options.numerals&&r.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return r.options.numerals[+e]})),i=i.replace(/[0-9]/g,(function(e){return r.options.numerals[+e]}))),a+r.options.prefix+n+i+r.options.suffix},this.easeOutExpo=function(e,t,n,i){return n*(1-Math.pow(2,-10*e/i))*1024/1023+t},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return r.handleScroll(r)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),i=n.top+window.pageYOffset,r=n.top+n.height+window.pageYOffset;r<t&&r>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>r||i>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t)},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},9133:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(7294);var i=n(7857),r=n(5893);function s(e){var t=e.number,n=e.symbol;return(0,r.jsxs)("div",{className:"number",children:[(0,r.jsx)(i.ZP,{duration:10,className:"counter",end:t}),(0,r.jsx)(r.Fragment,{children:n})]})}},4408:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});n(7294);var i=n(3378),r=n.n(i),s=n(5893);function a(e){var t=e.items;return(0,s.jsx)("div",{className:"bg-white",children:(0,s.jsx)(r(),{cols:2,rows:1,gap:10,loop:!0,autoplay:!0,children:t.map((function(e){return(0,s.jsx)(r().Item,{children:(0,s.jsxs)("div",{className:"relative bg-white group w-full h-full z-0 pb-5",children:[(0,s.jsx)("img",{width:"100%",height:"100%",src:e.image}),(0,s.jsx)("div",{className:"absolute left-0 bottom-4 opacity-90 right-0 z-10 flex  bg-[#363E7B] ",children:(0,s.jsx)("div",{className:"lg:p-4 xs:p-2 sm:p-2  h-35 md:h-40  lg:h-48 ",children:(0,s.jsx)("h3",{className:"text-white  font-semibold lg:text-4xl md:text-2xl text-lg ",children:e.title})})})]})})}))})})}},5460:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});n(9008);var i=n(9845),r=n(6382),s=n(7294),a=(n(9133),n(5893));function o(){return(0,a.jsx)("div",{className:"bg-white w-full p-5 pt-10 pb-10",children:(0,a.jsx)("div",{className:"flex flex-col items-center pt-5",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center text-black font-raleway font-medium leading-tight",children:"User Experience"}),(0,a.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-red-700"}),(0,a.jsx)("div",{className:"page_white_section_para",children:(0,a.jsx)("p",{className:"pb-8",children:"Enhancing your Customer experience by providing UI services across commerce and banking domains"})})]})})})}var l=n(1664),c=n(4408);function u(){var e=(0,s.useState)(0),t=(e[0],e[1],(0,s.useState)(0)),n=(t[0],t[1],(0,s.useState)(2)),u=(n[0],n[1],(0,s.useState)(!1)),d=(u[0],u[1],[{id:1,title:"SSR: Ready to Serve. CSR: Ready to Process.",image:"".concat(".","/img/slider_images/User_Experience/slide1.png")},{id:2,title:"Frictionless and Seamless shopping experiences across all consumer touchpoints.",image:"".concat(".","/img/slider_images/User_Experience/slide2.png")},{id:3,title:"Decouple User Experience from the transactional Back-end systems.",image:"".concat(".","/img/slider_images/User_Experience/slide3.png")},{id:4,title:" Logixal's accelerator reduces Decoupled Micro-Frontends TTM by ~40% for composable commerce transformation.",image:"".concat(".","/img/slider_images/User_Experience/slide4.png")}]),p=[{id:1,title:"Headless Architecture",descriptions:"Decoupling UI and Backend.",image:"".concat(".","/img/Customer_Experience/headless_architecture.png")},{id:2,title:"ReactJS, NextJS and Angular",descriptions:"Cutting-edge UI frameworks.",image:"".concat(".","/img/Customer_Experience/reactjs.png")},{id:3,title:"PWA Compliant Frontend",descriptions:"Omni channel and offline experiences.",image:"".concat(".","/img/Customer_Experience/pwa_compliant_frontend.png")},{id:4,title:"Frontend Optimisation",descriptions:"Site performance.",image:"".concat(".","/img/Customer_Experience/frontend_optimization.png")}],m=[{id:1,title:"User and Market Research",descriptions:"Informed Insights for Effective Decisions.",image:"".concat(".","/img/Customer_Experience/user_research.png")},{id:2,title:"Modernisation",descriptions:"Revitalizing Your Business for Today.",image:"".concat(".","/img/Customer_Experience/modernisation.png")},{id:3,title:"Interactions and UI Design",descriptions:"Intuitive UI. Seamless Interactions.",image:"".concat(".","/img/Customer_Experience/interactions.png")},{id:4,title:"Usability Testing",descriptions:"Enhancing User Experience Through Testing.",image:"".concat(".","/img/Customer_Experience/usability_testing.png")}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{title:"Our Offerings"}),(0,a.jsx)("div",{className:"sm:pt-5 pt-2",children:(0,a.jsx)("div",{className:"w-full flex flex-col sm:flex-row sm:justify-between overflow-x-hidden pt-16",children:(0,a.jsx)("div",{className:" w-full",children:(0,a.jsx)("div",{className:"relative group",children:(0,a.jsx)("div",{className:"bg-cover bg-center relative",children:(0,a.jsx)("img",{src:"".concat(".","/img/Inner_Pages_Banners/customer_experience_banner.png"),alt:"Image 1",className:" w-full h-full object-cover xs:w-full"})})})})})}),(0,a.jsx)(o,{}),(0,a.jsx)(c.Z,{items:d}),(0,a.jsx)("div",{className:"pt-10 bg-white",children:(0,a.jsx)("div",{className:"bg-[#363E7B] w-full pt-12 pb-5",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px]  text-center text-white font-raleway font-normal leading-tight",children:"Our UI Services"}),(0,a.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-white"}),(0,a.jsx)("h4",{className:"text-center text-white font-raleway font-normal md:text-text-xl xs:text-lg sm:text-lg lg:text-2xl leading-tight pt-5 ",children:"Revolutionize your user experience with our UI services."})]}),(0,a.jsx)("div",{className:"sm:pl-12 sm:pr-12 pl-0 pr-0",children:(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-5 sm:p-12",children:p.map((function(e){return(0,a.jsxs)("div",{className:"border rounded-md p-4 cursor-pointer  bg-white shadow-lg",children:[(0,a.jsx)("img",{className:"mx-auto ",src:e.image,alt:e.title}),(0,a.jsx)("h2",{className:"text-base font-bold text-black leading-tight text-center pt-3",children:e.title}),(0,a.jsx)("h2",{className:"text-sm font-medium text-gray-900  text-center pt-1",children:e.descriptions})]})}))})})]})})}),(0,a.jsx)("div",{className:"bg-white w-full pt-12 pb-5",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px]  text-center text-black font-raleway font-normal leading-tight",children:"Our UX Services"}),(0,a.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-red-700"}),(0,a.jsx)("h4",{className:"text-center text-black font-raleway font-normal md:text-text-xl xs:text-lg sm:text-lg lg:text-2xl leading-tight pt-5 ",children:"Empowering Your User Experience for Optimal Engagement and Satisfaction."})]}),(0,a.jsx)("div",{className:"sm:pl-8 sm:pr-8 pl-0 pr-0",children:(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-5 sm:p-12",children:m.map((function(e){return(0,a.jsxs)("div",{className:"border rounded-md p-4 cursor-pointer  bg-white shadow-lg",children:[(0,a.jsx)("img",{className:"mx-auto ",src:e.image,alt:e.title}),(0,a.jsx)("h2",{className:"text-base font-bold text-black leading-tight text-center pt-3",children:e.title}),(0,a.jsx)("h2",{className:"text-sm font-medium text-gray-900  text-center pt-1",children:e.descriptions})]})}))})})]})}),(0,a.jsx)("div",{className:"bg-[#C03434] w-full p-5 pt-12 pb-10",children:(0,a.jsxs)("div",{className:"flex flex-col items-center pt-5",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center text-white font-raleway font-normal leading-tight",children:"How Can We Help?"}),(0,a.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-white"}),(0,a.jsx)("h4",{className:"text-center text-white font-raleway font-normal md:text-[28px] xs:text-[16px] sm:text-[16px] lg:text-[28px] leading-tight pt-5 pb-12",children:"Let's talk about what Logixal can do for your business."})]}),(0,a.jsx)("div",{className:"pb-10",children:(0,a.jsx)(l.default,{href:"/locations",children:(0,a.jsxs)("button",{className:"inline-flex items-center font-semibold text-sm rounded-md text-[#C03434] bg-white p-5 w-80",children:[(0,a.jsx)("span",{className:"md:text-[22px] sm:text-[16px] xs:text-[16px] lg:text-[22px]",children:"Get In Touch "}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsx)("img",{src:"".concat(".","/img/b2b_Commerce/red_arrow.png"),alt:"Arrow",className:"w-4 h-4"})})]})})})]})}),(0,a.jsx)(r.Z,{})]})}},5105:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experience",function(){return n(5460)}])},7857:function(e,t,n){"use strict";var i=n(7294),r=n(8273);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function d(e){var t=i.useRef(e);return u((function(){t.current=e})),i.useCallback((function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.current.apply(void 0,n)}),[])}var p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},f=function(e){var t=i.useMemo((function(){return a(a({},m),e)}),[e]),n=t.ref,s=t.startOnMount,o=t.enableReinitialize,l=t.delay,u=t.onEnd,f=t.onStart,h=t.onPauseResume,x=t.onReset,g=t.onUpdate,b=c(t,p),v=i.useRef(),w=i.useRef(),y=i.useRef(!1),j=d((function(){return function(e,t){var n=t.decimal,i=t.decimals,s=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,p=t.start,m=t.suffix,f=t.useEasing,h=t.enableScrollSpy,x=t.scrollSpyDelay,g=t.scrollSpyOnce;return new r.CountUp(e,o,{startVal:p,duration:s,decimal:n,decimalPlaces:i,easingFn:a,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:m,useEasing:f,useGrouping:!!d,enableScrollSpy:h,scrollSpyDelay:x,scrollSpyOnce:g})}("string"===typeof n?n:n.current,b)})),E=d((function(e){var t=v.current;if(t&&!e)return t;var n=j();return v.current=n,n})),N=d((function(){var e=function(){return E(!0).start((function(){null===u||void 0===u||u({pauseResume:V,reset:S,start:_,update:O})}))};l&&l>0?w.current=setTimeout(e,1e3*l):e(),null===f||void 0===f||f({pauseResume:V,reset:S,update:O})})),V=d((function(){E().pauseResume(),null===h||void 0===h||h({reset:S,start:_,update:O})})),S=d((function(){E().el&&(w.current&&clearTimeout(w.current),E().reset(),null===x||void 0===x||x({pauseResume:V,start:_,update:O}))})),O=d((function(e){E().update(e),null===g||void 0===g||g({pauseResume:V,reset:S,start:_})})),_=d((function(){S(),N()})),F=d((function(e){s&&(e&&S(),N())}));return i.useEffect((function(){y.current?o&&F(!0):(y.current=!0,F())}),[o,y,F,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),i.useEffect((function(){return function(){S()}}),[S]),{start:_,pauseResume:V,reset:S,update:O,getCountUp:E}},h=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,r=e.containerProps,s=e.children,o=e.style,u=c(e,h),p=i.useRef(null),m=i.useRef(!1),x=f(a(a({},u),{},{ref:p,startOnMount:"function"!==typeof s||0===e.delay,enableReinitialize:!1})),g=x.start,b=x.reset,v=x.update,w=x.pauseResume,y=x.getCountUp,j=d((function(){g()})),E=d((function(t){e.preserveValue||b(),v(t)})),N=d((function(){"function"!==typeof e.children||p.current instanceof Element?y():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){N()}),[N]),i.useEffect((function(){m.current&&E(e.end)}),[e.end,E]);var V=n&&e;return i.useEffect((function(){n&&m.current&&j()}),[j,n,V]),i.useEffect((function(){!n&&m.current&&j()}),[j,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),i.useEffect((function(){m.current=!0}),[]),"function"===typeof s?s({countUpRef:p,start:g,reset:b,update:v,pauseResume:w,getCountUp:y}):i.createElement("span",l({className:t,ref:p,style:o},r),"undefined"!==typeof e.start?y().formattingFn(e.start):"")}}},function(e){e.O(0,[774,334,378,708,888,179],(function(){return t=5105,e(e.s=t);var t}));var t=e.O();_N_E=t}]);