(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{8273:function(e,t,s){"use strict";s.r(t),s.d(t,{CountUp:function(){return i}});var n=function(){return(n=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var i in t=arguments[s])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){function e(e,t,s){var i=this;this.endVal=t,this.options=s,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration);var s=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=s?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(e){var t,s,n,a,l=e<0?"-":"";t=Math.abs(e).toFixed(i.options.decimalPlaces);var r=(t+="").split(".");if(s=r[0],n=r.length>1?i.options.decimal+r[1]:"",i.options.useGrouping){a="";for(var o=3,c=0,m=0,d=s.length;m<d;++m)i.options.useIndianSeparators&&4===m&&(o=2,c=1),0!==m&&c%o==0&&(a=i.options.separator+a),c++,a=s[d-m-1]+a;s=a}return i.options.numerals&&i.options.numerals.length&&(s=s.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),l+i.options.prefix+s+n+i.options.suffix},this.easeOutExpo=function(e,t,s,n){return s*(1-Math.pow(2,-10*e/n))*1024/1023+t},this.options=n(n({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,s=e.el.getBoundingClientRect(),n=s.top+window.pageYOffset,i=s.top+s.height+window.pageYOffset;i<t&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>i||n>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var s=this.countDown?1:-1;this.endVal=e+s*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t)},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},9133:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});s(7294);var n=s(7857),i=s(5893);function a(e){var t=e.number,s=e.symbol;return(0,i.jsxs)("div",{className:"number",children:[(0,i.jsx)(n.ZP,{duration:10,className:"counter",end:t}),(0,i.jsx)(i.Fragment,{children:s})]})}},3768:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var n=s(9008),i=s(7294),a=s(1664),l=s(5893),r=function(){return(0,l.jsx)("div",{className:"w-full flex flex-col sm:flex-row sm:justify-between overflow-hidden lg:pt-16 xs:pt-16 ",children:(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full ",children:[(0,l.jsxs)("div",{className:"relative group max-w-full z-0",children:[(0,l.jsxs)("div",{className:"bg-cover bg-center  relative",children:[(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/Homepage_Banners/b2b_commerce.png"),alt:"Image 2",className:"w-full object-cover  xs:w-full xs:h-[200px] sm:w-full sm:h-[200px] md:w-full md:h-64 lg:w-full lg:h-80"}),(0,l.jsx)("h3",{className:"text-white text-capitalize font-bold text-3xl leading-tight absolute bottom-0 pl-6 pb-5 w-full group-hover:opacity-0",children:"B2B Commerce"})]}),(0,l.jsx)(a.default,{href:"/b2bCommerce",children:(0,l.jsx)("a",{children:(0,l.jsx)("div",{className:"opacity-0 group-hover:opacity-80 duration-300 absolute left-0 bottom-0 right-0 z-10 flex  bg-indigo-900 text-white text-capitalize font-medium text-2xl leading-tight",children:(0,l.jsxs)("div",{className:"lg:p-4 xs:p-2 sm:p-2 min-h-24 h-24 xs:h-28 sm:min-h-32 sm:h-32 md:min-h-35 md:h-35 lg:min-h-35 lg:h-35",children:[(0,l.jsx)("h3",{className:"text-white text-capitalize font-medium text-3xl leading-tight ",children:"B2B Commerce"}),(0,l.jsxs)("div",{className:"flex sm:flex-col md:flex-row lg:pt-1 xs:pt-0 xs:pb-2  lg:pb-4",children:[(0,l.jsx)("p",{className:"text-white text-base font-medium leading-tight ",children:"Rich B2B features delivered as consumer-like shopping experience."}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/arrow.png"),alt:"B2B Commerce",className:"w-8 h-8 object-cover"})]})]})})})})]}),(0,l.jsxs)("div",{className:"relative group z-0",children:[(0,l.jsxs)("div",{className:"bg-cover bg-center  relative ",children:[(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/Homepage_Banners/b2c_commerce.png"),alt:"Image 2",className:"w-full  object-cover  xs:w-full xs:h-[200px] sm:w-full sm:h-[200px] md:w-full md:h-64 lg:w-full lg:h-80"}),(0,l.jsx)("h3",{className:"text-white text-capitalize font-bold text-3xl leading-tight absolute bottom-0 pl-8 pb-5 w-full group-hover:opacity-0",children:"B2C Commerce"})]}),(0,l.jsx)(a.default,{href:"/b2cCommerce",children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("div",{className:"opacity-0 group-hover:opacity-80 duration-300 absolute left-0 bottom-0 right-0 z-10 flex  bg-indigo-900 text-white text-capitalize font-medium text-2xl leading-tight",children:(0,l.jsxs)("div",{className:"lg:p-4 xs:p-2 sm:p-2 min-h-24 h-24 xs:h-28 sm:min-h-32 sm:h-32 md:min-h-35 md:h-35 lg:min-h-35 lg:h-35",children:[(0,l.jsx)("h3",{className:"text-white text-capitalize font-medium text-3xl leading-tight",children:"B2C Commerce"}),(0,l.jsxs)("div",{className:"flex sm:flex-col md:flex-row lg:pt-1 xs:pt-0 xs:pb-2  lg:pb-4",children:[(0,l.jsx)("p",{className:"text-white text-base text-base leading-tight",children:"Don't just sell. Build Consumer relationships and Brand Advocates."}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/arrow.png"),alt:"B2C Commerce",className:"w-8 h-8 object-cover"})]})]})})})})]}),(0,l.jsxs)("div",{className:"relative group z-0",children:[(0,l.jsxs)("div",{className:"bg-cover bg-center  relative",children:[(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/Homepage_Banners/digital_banking.png"),alt:"Image 2",className:"w-full object-cover  xs:w-full xs:h-[200px] sm:w-full sm:h-[200px] md:w-full md:h-64 lg:w-full lg:h-80"}),(0,l.jsx)("h3",{className:"text-white text-capitalize font-bold text-3xl leading-tight absolute bottom-0 pl-6 pb-5 w-full group-hover:opacity-0",children:"Digital Banking"})]}),(0,l.jsx)(a.default,{href:"/digibanking",children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("div",{className:"opacity-0 group-hover:opacity-80 duration-300 absolute left-0 bottom-0 right-0 z-10 flex  bg-indigo-900 text-white text-capitalize font-medium text-2xl leading-tight",children:(0,l.jsxs)("div",{className:"lg:p-4 xs:p-2 sm:p-2 min-h-24 h-24 xs:h-28 sm:min-h-32 sm:h-32 md:min-h-35 md:h-35 lg:min-h-35 lg:h-35",children:[(0,l.jsx)("h3",{className:"text-white text-capitalize font-medium text-3xl leading-tight ",children:"Digital Banking"}),(0,l.jsxs)("div",{className:"flex sm:flex-col md:flex-row lg:pt-1 xs:pt-0 xs:pb-2  lg:pb-4",children:[(0,l.jsx)("p",{className:"text-white text-base font-medium leading-tight",children:"We enable digitization and transformation of Core Banking processes and implementation of omnichannel solutions."}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/arrow.png"),alt:"Digital Banking",className:"w-8 h-8 object-cover"})]})]})})})})]}),(0,l.jsxs)("div",{className:"relative group z-0",children:[(0,l.jsxs)("div",{className:"bg-cover bg-center  relative",children:[(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/Homepage_Banners/customer_experience.png"),alt:"Image 2",className:"w-full  object-cover  xs:w-full xs:h-[200px] sm:w-full sm:h-[200px] md:w-full md:h-64 lg:w-full lg:h-80"}),(0,l.jsx)("h3",{className:"text-white text-capitalize font-bold text-3xl leading-tight absolute bottom-0 pl-6 pb-5 w-full group-hover:opacity-0",children:"User Experience"})]}),(0,l.jsx)(a.default,{href:"/experience",children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("div",{className:"opacity-0 group-hover:opacity-80 duration-300 absolute left-0 bottom-0 right-0 z-10 flex  bg-indigo-900 text-white text-capitalize font-medium text-2xl leading-tight",children:(0,l.jsxs)("div",{className:"lg:p-4 xs:p-2 sm:p-2 min-h-24 h-24 xs:h-28 sm:min-h-32 sm:h-32 md:min-h-35 md:h-35 lg:min-h-35 lg:h-35",children:[(0,l.jsx)("h3",{className:"text-white text-capitalize font-medium text-3xl leading-tight ",children:"User Experience"}),(0,l.jsxs)("div",{className:"flex sm:flex-col md:flex-row lg:pt-1 xs:pt-0 xs:pb-2  lg:pb-4",children:[(0,l.jsx)("p",{className:"text-white text-base font-medium leading-tight",children:"Understand, Engage, Convert, Delight with Innovative and Insightful User Experiences."}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/arrow.png"),alt:"Customer Experience",className:"w-8 h-8 object-cover"})]})]})})})})]}),(0,l.jsxs)("div",{className:"relative group z-0",children:[(0,l.jsxs)("div",{className:"bg-cover bg-center  relative",children:[(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/Homepage_Banners/experience_engine.png"),alt:"Image 2",className:"w-full  object-cover  xs:w-full xs:h-[200px] sm:w-full sm:h-[200px] md:w-full md:h-64 lg:w-full lg:h-80"}),(0,l.jsx)("h3",{className:"text-white text-capitalize font-bold text-3xl leading-tight absolute bottom-0 pl-6 pb-5 w-full group-hover:opacity-0",children:"AI/ML Experience Engine"})]}),(0,l.jsx)(a.default,{href:"/aiml",children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("div",{className:"opacity-0 group-hover:opacity-80 duration-300 absolute left-0 bottom-0 right-0 z-10 flex  bg-indigo-900 text-white text-capitalize font-medium text-2xl leading-tight",children:(0,l.jsxs)("div",{className:"lg:p-3 xs:p-2 sm:p-1 min-h-24 h-24 xs:h-28 sm:min-h-32 sm:h-32 md:min-h-35 md:h-35 lg:min-h-35 lg:h-35",children:[(0,l.jsx)("h3",{className:"text-white text-capitalize font-medium  text-2xl sm:text-3xl leading-tight ",children:"AI/ML Experience Engine"}),(0,l.jsxs)("div",{className:"flex sm:flex-col md:flex-row lg:pt-0 xs:pt-0 xs:pb-2  lg:pb-4",children:[(0,l.jsx)("p",{className:"text-white text-base font-medium leading-tight",children:"Boost\xa0your\xa0Revenue\xa0and\xa0Reduce operational costs by providing AI/ML powered personalized experience to Customers, Merchants and Service Agents."}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/arrow.png"),alt:"AI/ML Experience Engine",className:"w-8 h-8 object-cover"})]})]})})})})]}),(0,l.jsxs)("div",{className:"relative group z-0",children:[(0,l.jsxs)("div",{className:"bg-cover bg-center  relative",children:[(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/Homepage_Banners/cloud_transformations.png"),alt:"Image 2",className:"w-full  object-cover  xs:w-full xs:h-[200px] sm:w-full sm:h-[200px] md:w-full md:h-64 lg:w-full lg:h-80"}),(0,l.jsx)("h3",{className:"text-white text-capitalize font-bold text-3xl leading-tight absolute bottom-0 pl-6 pb-5 w-full group-hover:opacity-0",children:"Cloud Transformations"})]}),(0,l.jsx)(a.default,{href:"/cloud",children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("div",{className:"opacity-0 group-hover:opacity-80 duration-300 absolute left-0 bottom-0 right-0 z-10 flex  bg-indigo-900 text-white text-capitalize font-medium text-2xl leading-tight",children:(0,l.jsxs)("div",{className:"lg:p-4 xs:p-2 sm:p-2 min-h-24 h-24 xs:h-28 sm:min-h-32 sm:h-32 md:min-h-35 md:h-35 lg:min-h-35 lg:h-35",children:[(0,l.jsx)("h3",{className:"text-white text-capitalize font-medium text-3xl leading-tight ",children:"Cloud Transformations"}),(0,l.jsxs)("div",{className:"flex sm:flex-col md:flex-row lg:pt-1 xs:pt-0 xs:pb-2  lg:pb-4",children:[(0,l.jsx)("p",{className:"text-white text-base font-medium leading-tight",children:"Be Cloud Native not just Operate in Cloud."}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/arrow.png"),alt:"Cloud Transformations",className:"w-8 h-8 object-cover"})]})]})})})})]})]})})},o=s(9845),c=s(9133);function m(){return(0,l.jsxs)("div",{className:"bg-white p-6 sm:p-0 sm:pl-10 pt-10 sm:pt-12 ",children:[(0,l.jsx)("h1",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center sm:text-left font-medium leading-normal text-gray-900 ",children:"Our Experience"}),(0,l.jsx)("div",{className:"border-b-4 mx-auto sm:mx-0  w-10  pt-4 item-center sm:item-left border-[#C03434]"}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row justify-center",children:[(0,l.jsxs)("div",{className:"md:w-10/12 pt-5",children:[(0,l.jsx)("h2",{className:"md:text-[43px] xs:text-[16px] sm:text-[16px] lg:text-[43px]  font-medium text-center sm:text-left  leading-tight text-gray-900",children:"A global professional company specialized in delivering of high quality solutions."}),(0,l.jsx)("div",{className:"container mx-auto sm:mx-0",children:(0,l.jsxs)("div",{className:"grid lg:mt-10 sm:mt-8 xs:mt-8  lg:pt-5 xs:pt-0 sm:pt-0 sm:gap-14 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h1",{className:"text-[64px] sm:text-[82px] font-bold sm:font-normal leading-tight text-center text-[#C03434] tracking-tight custom-font",children:(0,l.jsx)(c.Z,{number:75,symbol:"+"})}),(0,l.jsx)("p",{className:"font-raleway font-bold text-[16px] text-center leading-normal text-gray-900 sm:pb-0 pb-10",children:"Customers"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h1",{className:"text-[64px] sm:text-[82px] font-bold sm:font-normal text-center leading-tight text-[#C03434] tracking-tight custom-font",children:(0,l.jsx)(c.Z,{number:30,symbol:"%"})}),(0,l.jsx)("p",{className:"font-bold font-raleway text-center text-[16px]  leading-normal text-gray-900 sm:pb-0 pb-10",children:"YOY Org. Growth"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h1",{className:"text-[64px] sm:text-[82px] font-bold sm:font-normal text-center leading-tight text-[#C03434] tracking-tight custom-font",children:(0,l.jsx)(c.Z,{number:46,symbol:"+"})}),(0,l.jsx)("p",{className:"text-base font-bold text-center font-raleway text-[16px]  leading-normal text-gray-900 sm:pb-0 pb-10",children:"Success Stories"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h1",{className:"text-[64px] sm:text-[82px] font-bold sm:font-normal text-center leading-tight text-[#C03434] tracking-tight custom-font",children:(0,l.jsx)(c.Z,{number:17,symbol:"+"})}),(0,l.jsx)("p",{className:"text-base font-bold text-center font-raleway text-[16px]  leading-normal text-gray-900 sm:pb-0 pb-10",children:"Years In Business"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h1",{className:"text-[64px] sm:text-[82px] font-bold sm:font-normal text-center leading-tight text-[#C03434] tracking-tight custom-font",children:(0,l.jsx)(c.Z,{number:200,symbol:"+"})}),(0,l.jsx)("p",{className:"text-base font-bold text-center font-raleway text-[16px]  leading-normal text-gray-900 sm:pb-0 pb-10",children:"Engineers"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h1",{className:"text-[64px] sm:text-[82px] font-bold sm:font-normal text-center leading-tight text-[#C03434] tracking-tight custom-font",children:(0,l.jsx)(c.Z,{number:50,symbol:"+"})}),(0,l.jsx)("p",{className:"text-base font-bold text-center font-raleway text-[16px]  leading-normal text-gray-900 ",children:"Implementation Accelerators"})]})]})})]}),(0,l.jsx)("div",{className:"md:w-2/12 lg:pl-0 xs:pl-12",children:(0,l.jsx)("img",{className:"w-64 h-100",src:"".concat("/logixal-website","/img/trophy_image.png"),alt:"trophy"})})]})]})}function d(){var e=(0,i.useState)(2);e[0],e[1];return(0,l.jsx)("div",{className:"bg-[#C03434] w-full p-5 pt-10 pb-10",children:(0,l.jsxs)("div",{className:"flex flex-col items-center pt-5",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center text-white font-raleway font-normal leading-tight",children:"Our Clients"}),(0,l.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-white"}),(0,l.jsx)("h4",{className:"text-center text-white font-raleway font-normal md:text-[28px] xs:text-[16px] sm:text-[16px] lg:text-[28px] leading-tight pt-5 pb-12",children:"We build long-term relationships with our happy clients."})]}),(0,l.jsxs)("div",{className:"flex justify-center",children:[(0,l.jsx)("div",{className:"relative"}),(0,l.jsx)("div",{className:"flex flex-col md:flex-row",children:(0,l.jsxs)("div",{className:"flex flex-wrap pb-8",children:[(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/client_logos/exchange.png"),className:"sm:w-1/2 md:w-1/6 lg:w-1/6  xs:w-1/2  p-4 border-gray-300",alt:""}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/client_logos/hdfc.png"),className:"sm:w-1/2 md:w-1/6 lg:w-1/6  xs:w-1/2  p-4 border-gray-300",alt:""}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/client_logos/kaman.png"),className:"sm:w-1/2 md:w-1/6 lg:w-1/6  xs:w-1/2 p-4  border-gray-300",alt:""}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/client_logos/oracle.png"),className:"sm:w-1/2 md:w-1/6 lg:w-1/6   xs:w-1/2 p-4  border-gray-300",alt:""}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/client_logos/yes_bank.png"),className:"sm:w-1/2 md:w-1/6 lg:w-1/6  xs:w-1/2 p-4  border-gray-300",alt:""}),(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/client_logos/zanaco.png"),className:"sm:w-1/2 md:w-1/6 lg:w-1/6  xs:w-1/2 p-4  border-gray-300",alt:""})]})})]})]})})}function x(){var e=(0,i.useState)(2);e[0],e[1];return(0,l.jsx)("div",{className:"bg-[#363E7B] w-full p-5 pt-12 pb-10",children:(0,l.jsxs)("div",{className:"flex flex-col items-center pt-5",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center text-white font-raleway font-normal leading-tight",children:"Join Us"}),(0,l.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-white"}),(0,l.jsx)("h4",{className:"text-center text-white font-raleway font-normal md:text-[28px] xs:text-[16px] sm:text-[16px] lg:text-[28px] leading-tight pt-5 pb-12",children:"We're constantly growing, and you can too. Find a role that's a good fit for you."})]}),(0,l.jsx)("div",{className:"pb-10",children:(0,l.jsx)(a.default,{href:"/currentOpening",children:(0,l.jsxs)("button",{className:"inline-flex items-center  font-semibold text-lg rounded-md text-[#C03434] bg-white p-4  w-80",children:[(0,l.jsx)("span",{children:"Current Openings "}),(0,l.jsx)("div",{className:"ml-auto",children:(0,l.jsx)("img",{src:"".concat("/logixal-website","/img/b2b_Commerce/red_arrow.png"),alt:"Arrow",className:"w-4 h-4 ml-24"})})]})})})]})})}var u=s(6382);function h(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.default,{children:[(0,l.jsx)("title",{children:"Logixal INC"}),(0,l.jsx)("meta",{name:"description",content:""}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1"}),(0,l.jsx)("meta",{name:"description",content:"An end to end ecommerce and e banking solutions provider that enables your enterprise to operate with industry standards"}),(0,l.jsx)("meta",{name:"keywords",content:"Atg, ecommerce websites, b2b ecommerce, e-commerce consulting, e-commerce, best e-commerce, e commerce platform"}),(0,l.jsx)("meta",{"http-equiv":"cache-control",content:"max-age=518400"}),(0,l.jsx)("meta",{"http-equiv":"pragma",content:"public"}),(0,l.jsx)("link",{rel:"icon",href:"./favicon.ico"})]}),(0,l.jsx)(o.Z,{}),(0,l.jsx)(r,{}),(0,l.jsx)(m,{}),(0,l.jsx)(d,{}),(0,l.jsx)(x,{}),(0,l.jsx)(u.Z,{})]})}},487:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/landing",function(){return s(3768)}])},7857:function(e,t,s){"use strict";var n=s(7294),i=s(8273);function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t,s){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var n=s.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var m="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?n.useLayoutEffect:n.useEffect;function d(e){var t=n.useRef(e);return m((function(){t.current=e})),n.useCallback((function(){for(var e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return t.current.apply(void 0,s)}),[])}var x=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],u={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},h=function(e){var t=n.useMemo((function(){return l(l({},u),e)}),[e]),s=t.ref,a=t.startOnMount,r=t.enableReinitialize,o=t.delay,m=t.onEnd,h=t.onStart,p=t.onPauseResume,g=t.onReset,f=t.onUpdate,b=c(t,x),w=n.useRef(),j=n.useRef(),v=n.useRef(!1),y=d((function(){return function(e,t){var s=t.decimal,n=t.decimals,a=t.duration,l=t.easingFn,r=t.end,o=t.formattingFn,c=t.numerals,m=t.prefix,d=t.separator,x=t.start,u=t.suffix,h=t.useEasing,p=t.enableScrollSpy,g=t.scrollSpyDelay,f=t.scrollSpyOnce;return new i.CountUp(e,r,{startVal:x,duration:a,decimal:s,decimalPlaces:n,easingFn:l,formattingFn:o,numerals:c,separator:d,prefix:m,suffix:u,useEasing:h,useGrouping:!!d,enableScrollSpy:p,scrollSpyDelay:g,scrollSpyOnce:f})}("string"===typeof s?s:s.current,b)})),N=d((function(e){var t=w.current;if(t&&!e)return t;var s=y();return w.current=s,s})),E=d((function(){var e=function(){return N(!0).start((function(){null===m||void 0===m||m({pauseResume:V,reset:O,start:S,update:C})}))};o&&o>0?j.current=setTimeout(e,1e3*o):e(),null===h||void 0===h||h({pauseResume:V,reset:O,update:C})})),V=d((function(){N().pauseResume(),null===p||void 0===p||p({reset:O,start:S,update:C})})),O=d((function(){N().el&&(j.current&&clearTimeout(j.current),N().reset(),null===g||void 0===g||g({pauseResume:V,start:S,update:C}))})),C=d((function(e){N().update(e),null===f||void 0===f||f({pauseResume:V,reset:O,start:S})})),S=d((function(){O(),E()})),F=d((function(e){a&&(e&&O(),E())}));return n.useEffect((function(){v.current?r&&F(!0):(v.current=!0,F())}),[r,v,F,o,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),n.useEffect((function(){return function(){O()}}),[O]),{start:S,pauseResume:V,reset:O,update:C,getCountUp:N}},p=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,s=e.redraw,i=e.containerProps,a=e.children,r=e.style,m=c(e,p),x=n.useRef(null),u=n.useRef(!1),g=h(l(l({},m),{},{ref:x,startOnMount:"function"!==typeof a||0===e.delay,enableReinitialize:!1})),f=g.start,b=g.reset,w=g.update,j=g.pauseResume,v=g.getCountUp,y=d((function(){f()})),N=d((function(t){e.preserveValue||b(),w(t)})),E=d((function(){"function"!==typeof e.children||x.current instanceof Element?v():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));n.useEffect((function(){E()}),[E]),n.useEffect((function(){u.current&&N(e.end)}),[e.end,N]);var V=s&&e;return n.useEffect((function(){s&&u.current&&y()}),[y,s,V]),n.useEffect((function(){!s&&u.current&&y()}),[y,s,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),n.useEffect((function(){u.current=!0}),[]),"function"===typeof a?a({countUpRef:x,start:f,reset:b,update:w,pauseResume:j,getCountUp:v}):n.createElement("span",o({className:t,ref:x,style:r},i),"undefined"!==typeof e.start?v().formattingFn(e.start):"")}}},function(e){e.O(0,[334,708,774,888,179],(function(){return t=487,e(e.s=t);var t}));var t=e.O();_N_E=t}]);