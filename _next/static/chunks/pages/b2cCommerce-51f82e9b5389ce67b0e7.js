(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[462],{8273:function(e,t,s){"use strict";s.r(t),s.d(t,{CountUp:function(){return r}});var i=function(){return(i=Object.assign||function(e){for(var t,s=1,i=arguments.length;s<i;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=function(){function e(e,t,s){var r=this;this.endVal=t,this.options=s,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){r.startTime||(r.startTime=e);var t=e-r.startTime;r.remaining=r.duration-t,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(t,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(t,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(t/r.duration);var s=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=s?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),t<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.callback&&r.callback()},this.formatNumber=function(e){var t,s,i,n,a=e<0?"-":"";t=Math.abs(e).toFixed(r.options.decimalPlaces);var o=(t+="").split(".");if(s=o[0],i=o.length>1?r.options.decimal+o[1]:"",r.options.useGrouping){n="";for(var l=3,c=0,d=0,m=s.length;d<m;++d)r.options.useIndianSeparators&&4===d&&(l=2,c=1),0!==d&&c%l==0&&(n=r.options.separator+n),c++,n=s[m-d-1]+n;s=n}return r.options.numerals&&r.options.numerals.length&&(s=s.replace(/[0-9]/g,(function(e){return r.options.numerals[+e]})),i=i.replace(/[0-9]/g,(function(e){return r.options.numerals[+e]}))),a+r.options.prefix+s+i+r.options.suffix},this.easeOutExpo=function(e,t,s,i){return s*(1-Math.pow(2,-10*e/i))*1024/1023+t},this.options=i(i({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return r.handleScroll(r)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,s=e.el.getBoundingClientRect(),i=s.top+window.pageYOffset,r=s.top+s.height+window.pageYOffset;r<t&&r>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>r||i>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var s=this.countDown?1:-1;this.endVal=e+s*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t)},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},9133:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});s(7294);var i=s(7857),r=s(5893);function n(e){var t=e.number,s=e.symbol;return(0,r.jsxs)("div",{className:"number",children:[(0,r.jsx)(i.ZP,{duration:10,className:"counter",end:t}),(0,r.jsx)(r.Fragment,{children:s})]})}},4408:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});s(7294);var i=s(3378),r=s.n(i),n=s(5893);function a(e){var t=e.items;return(0,n.jsx)("div",{className:"bg-white",children:(0,n.jsx)(r(),{cols:2,rows:1,gap:10,loop:!0,autoplay:!0,children:t.map((function(e){return(0,n.jsx)(r().Item,{children:(0,n.jsxs)("div",{className:"relative bg-white group w-full h-full z-0 pb-5",children:[(0,n.jsx)("img",{width:"100%",height:"100%",src:e.image}),(0,n.jsx)("div",{className:"absolute left-0 bottom-4 opacity-90 right-0 z-10 flex  bg-[#363E7B] ",children:(0,n.jsx)("div",{className:"lg:p-4 xs:p-2 sm:p-2  h-35 md:h-40  lg:h-48 ",children:(0,n.jsx)("h3",{className:"text-white  font-semibold lg:text-4xl md:text-2xl text-lg ",children:e.title})})})]})})}))})})}},298:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});s(9008);var i=s(9845),r=s(6382),n=s(7294),a=s(5893),o=[{id:1,title:"Implementation",descriptions:["Headless Commerce","Platform Enhancements & Upgrades","Re-platforming","Enterprise Search","Modernised UX/UI"],descriptions1:["Manage your user\u2019s experience through decouple and modernised UI. Composable commerce enables enterprises to leverage and selected functionalities from industry leading headless commerce platforms.","Enhance your current commerce platforms by implementing new features, internal system integrations, 3rd party integrations (reviews & ratings, shipping gateway, payment gateway, etc.), improve system performance, scalability and security. Keep up with latest software and hardware by periodic upgrade cycle.","Keep up with latest industry technology and infrastructure trends, to address current platforms challenges (performance, scalability, functionality) and enable your enterprise commerce for next-gen growth cycles.","Shorten discovery cycle for shoppers, business users and service agents to perform their daily operations. Improvise their discovery journey by providing AI/ML powered recommendations.","Increase brand engagement and loyalty by steering your CX. Modern micro frontend UI enables complete decoupling of CX from the backend enterprise systems."],image:"".concat(".","/img/b2b_Commerce/implementation_ic.png")},{id:2,title:"Care",descriptions:["Proactive Support","BAU Support","Performance (APM)","Holiday Readiness"],descriptions1:["Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit.","Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit.","Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit.","Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit."],image:"".concat(".","/img/b2b_Commerce/care_ic.png")},{id:3,title:"Cloud Transformation",descriptions:["Cloud Migration"],descriptions1:["Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet consectetur adipiscing elit."],image:"".concat(".","/img/b2b_Commerce/cloud_ic.png")},{id:4,title:"AI/ML Powered Commerce",descriptions:["AI/ML Experience Engine","Store Trends (Inspired by Google Trends)"],descriptions1:["Real time personalisation of shoppers, business users and service agents based on real time insights, derived from the events from various enterprise data sources (user signals, internal enterprise systems, 3rd party systems and business rules).","Real time monitoring of user activity on your commerce storefront to determine historical and current store trends and improvise future shopper\u2019s journey."],image:"".concat(".","/img/b2b_Commerce/data_eng_ic.png")}],l=function(){var e=(0,n.useState)(null),t=e[0],s=e[1],i=(0,n.useState)(null),r=i[0],l=i[1],c=(0,n.useState)(!1),d=c[0],m=c[1];return(0,a.jsx)("div",{className:"items-center w-200 pb-12 pl-2 pr-2 sm:pl-16 sm:pr-16 bg-white",children:(0,a.jsx)("div",{className:"pl-0 pr-0 sm:pl-16 sm:pr-16",children:(0,a.jsxs)("div",{className:"pl-0 pr-0 sm:pl-12 sm:pr-12",children:[(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 p-4   sm:pl-12 sm:pr-12",children:o.map((function(e){return(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:t===e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"border rounded-md p-4 cursor-pointer shadow-lg bg-white  ".concat(d?"hidden sm:block":"block"),children:[(0,a.jsx)("img",{className:"mx-auto ",src:e.image,alt:e.title}),(0,a.jsx)("h2",{className:"lg:text-base sm:text-sm xs:text-xs md:text-base   font-bold text-black leading-tight text-center pt-5 ",children:e.title})]}),(0,a.jsx)("img",{className:"mx-auto w-8 h-6   ".concat(d?"hidden sm:block":"block"),src:"".concat(".","/img/b2b_Commerce/white_down.png")})]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"border rounded-md p-4  cursor-pointer bg-white  ".concat(d?"hidden sm:block":"block"),children:[(0,a.jsx)("img",{className:"mx-auto ",src:e.image,alt:e.title}),(0,a.jsx)("h2",{className:"lg:text-base sm:text-sm xs:text-xs md:text-base font-bold text-black leading-tight text-center pt-5 ",children:e.title})]})})})},e.id)}))}),(0,a.jsx)("div",{className:"pl-4 sm:pl-12 pr-4 sm:pr-12 bg-white",children:(0,a.jsx)("div",{className:"",children:o.map((function(e){return(0,a.jsx)("div",{className:"w-full",children:t===e&&(0,a.jsxs)("div",{className:"w-full border rounded-md pt-10 relative bg-white",children:[(0,a.jsx)("button",{className:"absolute top-5 right-4",onClick:function(){return function(e){t===e?(s(null),l(null),m(!1)):(s(e),l(null),m(!0))}(e)},children:(0,a.jsx)("img",{src:"".concat(".","/img/b2b_Commerce/white_close.png"),alt:"Close Icon",className:"w-4 h-3 "})}),(0,a.jsxs)("div",{className:"flex pl-6 pb-5 bg-white ".concat(d?"block sm:hidden":"hidden"),children:[(0,a.jsx)("img",{src:e.image,alt:"Icon",className:"w-12 h-12 "}),(0,a.jsx)("p",{className:"text-base font-bold text-black leading-tight text-center  p-4 ",children:e.title})]}),(0,a.jsx)("ul",{children:e.descriptions.map((function(t,s){return(0,a.jsx)("li",{className:"cursor-pointer",onClick:function(){var e;l((e=t)===r?null:e)},children:r===t?(0,a.jsx)("div",{className:"w-100 truncate  items-center pl-8 pr-8 pt-2",children:(0,a.jsxs)("div",{className:"items-center  border-gray-300",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"w-11/12",children:(0,a.jsx)("h3",{className:"text-sm font-bold text-black leading-tight",children:t})}),(0,a.jsx)("div",{className:"ml-11 w-1/11",children:(0,a.jsx)("img",{src:"".concat(".","/img/b2b_Commerce/down_chevron.png"),alt:"Icon",className:"pl-5"})})]}),(0,a.jsx)("p",{className:"w-11/12 pointer-events-none text-sm font-normal text-black leading-tight pb-2 pt-1 whitespace-normal w-100",children:e.descriptions1[s]}),(0,a.jsx)("div",{className:"pt-2 ",children:s===e.descriptions1.length-1?null:(0,a.jsx)("div",{className:"grid max-w-screen-xl grid-cols-1 gap-10 mx-auto border-t border-gray-300 dark:border-trueGray-700 lg:grid-cols-5"})})]})}):(0,a.jsxs)("div",{className:"w-100 truncate bg-white items-center pl-8 pr-8  pt-3",children:[(0,a.jsxs)("div",{className:"flex items-center bg-white  border-gray-300   ",children:[(0,a.jsx)("div",{className:"w-11/12",children:(0,a.jsx)("h3",{className:"text-sm font-bold text-black leading-tight",children:t})}),(0,a.jsx)("div",{className:"ml-11 w-1/11 bg-white",children:(0,a.jsx)("img",{src:"".concat(".","/img/b2b_Commerce/right_chevron.png"),alt:"Icon",className:"pl-5"})})]}),(0,a.jsx)("div",{className:"pt-2",children:s===e.descriptions1.length-1?null:(0,a.jsx)("div",{className:"border-t border-gray-300"})})]})},s)}))})]})},e.id)}))})})]})})})},c=(s(9133),s(4408));function d(){var e=[{id:1,title:"Composable Commerce enables businesses to pick ideal platforms for advanced customer experiences.",image:"".concat(".","/img/slider_images/B2C_Slider/slide1.png")},{id:2,title:'The "Web-first" or "Mobile-first" approaches are outdated. The future is "API-first".',image:"".concat(".","/img/slider_images/B2C_Slider/slide2.png")},{id:3,title:"Performance is a culture not a project phase. Continuous Performance optimisations through iterative cycles.",image:"".concat(".","/img/slider_images/B2C_Slider/slide3.png")},{id:4,title:"Composable Commerce empowers Enterprises to Assemble Best-Of-Breed platforms to deliver cutting edge CX.",image:"".concat(".","/img/slider_images/B2C_Slider/slide4.png")},{id:5,title:"Partner with Logixal to offer AI/ML driven personalized shopping experiences across all consumer touchpoints.",image:"".concat(".","/img/slider_images/B2C_Slider/slide5.png")},{id:6,title:"Shorten your product discovery cycle by up to 40% with the help of AI powered search.",image:"".concat(".","/img/slider_images/B2C_Slider/slide6.png")},{id:7,title:"End to End Test Automation - From API to UI.",image:"".concat(".","/img/slider_images/B2C_Slider/slide7.png")},{id:8,title:"Caching and Performance culture.",image:"".concat(".","/img/slider_images/B2C_Slider/slide8.png")}];return(0,a.jsxs)("div",{className:"bg-white w-full  pt-3 sm:pt-10 pb-1 sm:pb-1",children:[(0,a.jsx)("div",{className:"flex flex-col items-center pt-5",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] sm:text-center text-left text-indigo-900 sm:text-black font-raleway pl-2 pr-2 sm:pl-0 sm:pr-0 font-bold sm:font-medium leading-tight",children:"Composable B2C Commerce"}),(0,a.jsx)("div",{className:"hidden lg:block border-b-4 mx-auto w-0  pt-0 sm:w-10  sm:pt-4 item-center border-red-700"}),(0,a.jsxs)("div",{className:"page_white_section_para",children:[(0,a.jsx)("p",{className:"pl-3 pr-1 sm:pl-0 sm:pr-0",children:"Welcome to Logixal, your one-stop-shop for all your B2C commerce requirements. Logixal has partnered with industry leading platforms to provide custom implementations or in-house enterprise solutions."}),(0,a.jsx)("div",{className:"bg-white w-full pl-5 pr-5 md:pl-16 md:pr-16  pb-10",children:(0,a.jsx)("div",{className:"flex flex-col items-center p-4 pt-5",children:(0,a.jsxs)("div",{className:"flex justify-center",children:[(0,a.jsx)("div",{className:"relative"}),(0,a.jsx)("div",{className:"flex flex-col md:flex-row",children:(0,a.jsxs)("div",{className:"flex flex-wrap ",children:[(0,a.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/broadleaf.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4  xs:w-1/2  p-4 border-gray-300",alt:""}),(0,a.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/commerce_tools.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4  xs:w-1/2  p-4 border-gray-300",alt:""}),(0,a.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/oracle_commerce.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4  xs:w-1/2 p-4  border-gray-300",alt:""}),(0,a.jsx)("img",{src:"".concat(".","/img/b2c_commerce/partners/spryker.png"),className:"sm:w-1/2 md:w-1/4 lg:w-1/4   xs:w-1/2 p-4  border-gray-300",alt:""})]})})]})})})]}),(0,a.jsx)(c.Z,{items:e})]})}),(0,a.jsxs)("div",{className:"page_white_section_para bg-gray-50 items-center pt-14",children:[(0,a.jsx)("p",{className:"pb-7 text-center font-semibold text-black font-normal md:text-lg xs:text-base sm:text-base lg:text-3xl leading-tight ",children:"Which Enterprise Commerce Are You?"}),(0,a.jsx)("div",{className:"pb-10",children:(0,a.jsx)("div",{className:"pl-10 pr-10 ",children:(0,a.jsxs)("div",{class:"grid gap-7 grid-cols-1 sm:grid-cols-2 justify-self-center",children:[(0,a.jsx)("div",{className:"pl-0 md:pl-16",children:(0,a.jsxs)("div",{class:"border rounded-md bg-white",children:[(0,a.jsx)("div",{className:"bg-[#363E7B] rounded-t-md",children:(0,a.jsx)("p",{className:"pb-4 text-center font-semibold text-white pt-4",children:"Traditional Commerce"})}),(0,a.jsx)("div",{className:"pl-5 pt-1 space-y-5",children:(0,a.jsxs)("ul",{class:"list-item sm:text-sm text-xs font-normal text-black   pb-2 pt-1 whitespace-normal space-y-2",children:[(0,a.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:" Single platform/In-house Custom framework-based solution"}),(0,a.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:" Monolith"}),(0,a.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:" Tightly Coupled UI"}),(0,a.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:" N-Tier Architecture"}),(0,a.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:" Business Powered Personalization"})]})})]})}),(0,a.jsx)("div",{className:"pr-0 md:pr-16 ",children:(0,a.jsxs)("div",{class:"border rounded-md bg-white",children:[(0,a.jsx)("div",{className:"bg-[#363E7B] rounded-t-md",children:(0,a.jsx)("p",{className:"pb-4 text-center font-semibold text-white pt-4",children:"Composable Commerce"})}),(0,a.jsx)("div",{className:"pl-5 pt-1 space-y-5",children:(0,a.jsxs)("ul",{class:"list-item sm:text-sm text-xs font-normal text-black   pb-2 pt-1 whitespace-normal space-y-2",children:[(0,a.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:"  Multi Platform\xa0based\xa0solution"}),(0,a.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:"  Headless Micro-services"}),(0,a.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:"  Decoupled Micro-frontend UI"}),(0,a.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:"  Event-Driven Architecture"}),(0,a.jsx)("li",{class:"before:inline-block before:w-1 before:h-1 before:mr-0 before:bg-[#C03434]",children:"  AI/ML Powered Personalization"})]})})]})})]})})})]})]})}var m=s(1664);function u(){var e=(0,n.useState)(0),t=(e[0],e[1],(0,n.useState)(0)),s=(t[0],t[1],(0,n.useState)(0)),o=(s[0],s[1],(0,n.useState)(2)),c=(o[0],o[1],(0,n.useState)(!1)),u=(c[0],c[1],[{id:1,title:"Platform Migration",image:"".concat(".","/img/b2b_Commerce/platform_migration.png")},{id:2,title:"Custom Catalogue",image:"".concat(".","/img/b2b_Commerce/custom_catalogue.png")},{id:3,title:"Pricing Engine",image:"".concat(".","/img/b2b_Commerce/pricing_engine.png")},{id:4,title:"Multisite",image:"".concat(".","/img/b2b_Commerce/multisite.png")}]),p=("".concat(".","/img/b2b_Commerce/industries.png"),"".concat(".","/img/b2b_Commerce/Hospitality.png"),"".concat(".","/img/b2b_Commerce/Entertainment.png"),"".concat(".","/img/b2b_Commerce/Food.png"),(0,n.useState)(null)),h=(p[0],p[1],(0,n.useState)(null)),f=(h[0],h[1],(0,n.useState)(!1));f[0],f[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{title:"Our Offerings"}),(0,a.jsx)("div",{className:"sm:pt-5 pt-2",children:(0,a.jsx)("div",{className:"w-full flex flex-col sm:flex-row sm:justify-between overflow-x-hidden pt-16",children:(0,a.jsx)("div",{className:" w-full",children:(0,a.jsx)("div",{className:"relative group",children:(0,a.jsx)("div",{className:"bg-cover bg-center relative",children:(0,a.jsx)("img",{src:"".concat(".","/img/Inner_Pages_Banners/b2c_commerce_banner.png"),alt:"Image 1",className:" w-full h-full object-cover xs:w-full"})})})})})}),(0,a.jsx)(d,{}),(0,a.jsx)("p",{className:"bg-white pt-7 pb-7 text-center text-black font-normal md:text-lg xs:text-base sm:text-base lg:text-xl leading-tight lg:pl-20 lg:pr-20 pt-8",children:"Logixal\xa0SME\u2019s provide\xa0SI Services & Solutions to both\xa0of the above\xa0Enterprise Commerce Customers."}),(0,a.jsx)(l,{}),(0,a.jsx)("div",{className:"bg-[#363E7B] w-full pt-12 pb-14",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px]  text-center text-white font-raleway font-normal leading-tight",children:"Strategic Objectives"}),(0,a.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-white"}),(0,a.jsx)("h4",{className:"text-center text-white font-raleway font-normal md:text-[28px] xs:text-[16px] sm:text-[16px] lg:text-[28px] leading-tight pt-5 pb-5 sm:pb-12 pl-10 pr-10",children:"Ensure alignment with business objectives and strategize effectively for success."})]}),(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 pl-5 pr-5",children:u.map((function(e){return(0,a.jsxs)("div",{className:"border rounded-md p-4 cursor-pointer bg-white shadow-lg",children:[(0,a.jsx)("img",{className:"mx-auto ",src:e.image,alt:e.title}),(0,a.jsx)("h2",{className:"text-base font-bold text-black leading-tight text-center pt-5",children:e.title})]})}))})]})}),(0,a.jsx)("div",{className:"bg-[#C03434] w-full p-5 pt-12 pb-10",children:(0,a.jsxs)("div",{className:"flex flex-col items-center pt-5",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center text-white font-raleway font-normal leading-tight",children:"How Can We Help?"}),(0,a.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-white"}),(0,a.jsx)("h4",{className:"text-center text-white font-raleway font-normal md:text-[28px] xs:text-[16px] sm:text-[16px] lg:text-[28px] leading-tight pt-5 pb-12",children:"Let's talk about what Logixal can do for your business."})]}),(0,a.jsx)("div",{className:"pb-10",children:(0,a.jsx)(m.default,{href:"/locations",children:(0,a.jsxs)("button",{className:"inline-flex items-center font-semibold text-sm rounded-md text-[#C03434] bg-white p-5 w-80",children:[(0,a.jsx)("span",{className:"md:text-[22px] sm:text-[16px] xs:text-[16px] lg:text-[22px]",children:"Get In Touch "}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsx)("img",{src:"".concat(".","/img/b2b_Commerce/red_arrow.png"),alt:"Arrow",className:"w-4 h-4"})})]})})})]})}),(0,a.jsx)(r.Z,{})]})}},4069:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/b2cCommerce",function(){return s(298)}])},7857:function(e,t,s){"use strict";var i=s(7294),r=s(8273);function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t,s){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var i=s.call(e,t||"default");if("object"!==typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var s,i,r=function(e,t){if(null==e)return{};var s,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)s=n[i],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)s=n[i],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var d="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function m(e){var t=i.useRef(e);return d((function(){t.current=e})),i.useCallback((function(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return t.current.apply(void 0,s)}),[])}var u=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},h=function(e){var t=i.useMemo((function(){return a(a({},p),e)}),[e]),s=t.ref,n=t.startOnMount,o=t.enableReinitialize,l=t.delay,d=t.onEnd,h=t.onStart,f=t.onPauseResume,g=t.onReset,x=t.onUpdate,b=c(t,u),w=i.useRef(),v=i.useRef(),j=i.useRef(!1),y=m((function(){return function(e,t){var s=t.decimal,i=t.decimals,n=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,c=t.numerals,d=t.prefix,m=t.separator,u=t.start,p=t.suffix,h=t.useEasing,f=t.enableScrollSpy,g=t.scrollSpyDelay,x=t.scrollSpyOnce;return new r.CountUp(e,o,{startVal:u,duration:n,decimal:s,decimalPlaces:i,easingFn:a,formattingFn:l,numerals:c,separator:m,prefix:d,suffix:p,useEasing:h,useGrouping:!!m,enableScrollSpy:f,scrollSpyDelay:g,scrollSpyOnce:x})}("string"===typeof s?s:s.current,b)})),N=m((function(e){var t=w.current;if(t&&!e)return t;var s=y();return w.current=s,s})),C=m((function(){var e=function(){return N(!0).start((function(){null===d||void 0===d||d({pauseResume:E,reset:_,start:S,update:V})}))};l&&l>0?v.current=setTimeout(e,1e3*l):e(),null===h||void 0===h||h({pauseResume:E,reset:_,update:V})})),E=m((function(){N().pauseResume(),null===f||void 0===f||f({reset:_,start:S,update:V})})),_=m((function(){N().el&&(v.current&&clearTimeout(v.current),N().reset(),null===g||void 0===g||g({pauseResume:E,start:S,update:V}))})),V=m((function(e){N().update(e),null===x||void 0===x||x({pauseResume:E,reset:_,start:S})})),S=m((function(){_(),C()})),O=m((function(e){n&&(e&&_(),C())}));return i.useEffect((function(){j.current?o&&O(!0):(j.current=!0,O())}),[o,j,O,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),i.useEffect((function(){return function(){_()}}),[_]),{start:S,pauseResume:E,reset:_,update:V,getCountUp:N}},f=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,s=e.redraw,r=e.containerProps,n=e.children,o=e.style,d=c(e,f),u=i.useRef(null),p=i.useRef(!1),g=h(a(a({},d),{},{ref:u,startOnMount:"function"!==typeof n||0===e.delay,enableReinitialize:!1})),x=g.start,b=g.reset,w=g.update,v=g.pauseResume,j=g.getCountUp,y=m((function(){x()})),N=m((function(t){e.preserveValue||b(),w(t)})),C=m((function(){"function"!==typeof e.children||u.current instanceof Element?j():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){C()}),[C]),i.useEffect((function(){p.current&&N(e.end)}),[e.end,N]);var E=s&&e;return i.useEffect((function(){s&&p.current&&y()}),[y,s,E]),i.useEffect((function(){!s&&p.current&&y()}),[y,s,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),i.useEffect((function(){p.current=!0}),[]),"function"===typeof n?n({countUpRef:u,start:x,reset:b,update:w,pauseResume:v,getCountUp:j}):i.createElement("span",l({className:t,ref:u,style:o},r),"undefined"!==typeof e.start?j().formattingFn(e.start):"")}}},function(e){e.O(0,[774,334,378,708,888,179],(function(){return t=4069,e(e.s=t);var t}));var t=e.O();_N_E=t}]);