(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{499:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return w}});var n=t(9008),i=t(4570),o=t(9845),r=t(3597),s=t(2100),l=t(797),c=t(6382),d=t(7294),u=t(5893),m=function(){var e=(0,d.useState)(!0),a=e[0],t=e[1],n=function(){document.cookie="trackingDeclined=true",t(!1)};return(0,d.useEffect)((function(){var e=document.cookie.split(";").map((function(e){return e.trim()})),a=e.includes("trackingAccepted=true"),n=e.includes("trackingDeclined=true");t(!a&&!n)}),[]),(0,u.jsx)(u.Fragment,{children:a&&(0,u.jsxs)("div",{className:"fixed right-10 bottom-10 p-10 bg-[#C03434] rounded-3xl opacity-90 w-80  item-center",children:[(0,u.jsx)("button",{className:"absolute top-5 right-6",onClick:n,children:(0,u.jsx)("img",{src:"".concat(".","/img/b2b_Commerce/red_close.svg"),alt:"Close Icon",className:"w-5 h-5 "})}),(0,u.jsx)("p",{className:"text-white text-md font-bold font-sans",children:"This website uses cookies"}),(0,u.jsx)("p",{className:"text-white mb-2 font-sans font-light text-sm  pt-2",children:"We use cookies to enhance your experience on our website. By clicking 'Accept Cookies,' You consent to the use of cookies. You can read more about our cookies policy on our privacy policy page."}),(0,u.jsxs)("div",{className:"flex pt-3",children:[(0,u.jsx)("button",{className:"mr-4 text-white text-xs  border border-white rounded-full px-4 py-2  hover:bg-white hover:text-[#C03434] transition duration-300",onClick:function(){document.cookie="trackingAccepted=true",t(!1)},children:"ACCEPT ALL"}),(0,u.jsx)("button",{className:"text-white border text-xs   border-white rounded-full px-4 py-2 hover:bg-white hover:text-[#C03434] transition duration-300",onClick:n,children:"DECLINE ALL"})]})]})})},h=t(3073),p=t(2809),x=t(266),g=t(809),b=t.n(g);function f(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?f(Object(t),!0).forEach((function(a){(0,p.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function y(e){var a=e.index,t=e.onClose,n=e.caseStudy,i=(0,d.useState)({firstName:"",lastName:"",jobTitle:"",company:"",phoneNumber:"",email:""}),o=i[0],r=i[1],s=["Kaman_Automation_CS1.pdf","NewYork_Co_CS2.pdf","Ashford_CS3.pdf","BedBath_Beyond_CS4.pdf","AAFES_CS5.pdf"],l=(0,d.useState)(""),c=l[0],m=l[1],h=(0,d.useState)(!1),g=h[0],f=h[1],y=function(){var e=(0,x.Z)(b().mark((function e(i){var r,l,d,u,m;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.preventDefault(),""!==o.firstName&&""!==o.lastName&&""!==o.email&&""!==o.phoneNumber&&""!==o.company&&""!==o.jobTitle){e.next=4;break}return alert("All fields are mandatory"),e.abrupt("return");case 4:if(/^\d+$/.test(o.phoneNumber)){e.next=8;break}return alert("Mobile number should contain only numbers"),e.abrupt("return");case 8:return r="".concat(".","/pdf/home_case_study/").concat(s[a]),e.next=11,fetch(r);case 11:return l=e.sent,e.next=14,l.blob();case 14:return d=e.sent,(u=document.createElement("a")).href=window.URL.createObjectURL(d),u.download="".concat(s[a]),document.body.appendChild(u),u.click(),u.remove(),e.prev=21,e.next=24,fetch("https://40kuv0ilx6.execute-api.us-east-1.amazonaws.com/dev/write",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({"First Name":o.firstName,"Last Name":o.lastName,Email:o.email,Phone:o.phoneNumber,Country:c,"Job Title":o.jobTitle,Company:o.company,"Case Study":n})});case 24:if(!(m=e.sent).ok){e.next=29;break}console.log("response.ok",m.ok),e.next=30;break;case 29:throw new Error("Error!!");case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(21),console.error(e.t0);case 35:f(!0),setTimeout((function(){f(!1),t()}),3e3);case 37:case"end":return e.stop()}}),e,null,[[21,32]])})));return function(a){return e.apply(this,arguments)}}(),j=function(e){var a=e.target,t=a.name,n=a.value;r((function(e){return v(v({},e),{},(0,p.Z)({},t,n))}))};return(0,u.jsx)("div",{className:"fixed z-50 inset-0 overflow-y-auto w-full ",children:(0,u.jsxs)("div",{className:"flex items-center justify-center min-h-screen pt-10",children:[(0,u.jsx)("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-20"}),(0,u.jsx)("div",{className:"relative z-50 bg-white rounded-lg ",children:(0,u.jsx)("div",{className:"w-full ",children:(0,u.jsx)("div",{className:"bg-white w-full ",children:(0,u.jsx)("div",{className:"flex flex-col  ",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{onClick:t,className:"absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600",children:(0,u.jsx)("svg",{className:"h-6 w-6 fill-current",viewBox:"0 0 20 10",children:(0,u.jsx)("path",{fillRule:"evenodd",d:"M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 1 0 1.414-1.414L11.414 10z"})})}),(0,u.jsx)("div",{className:"text-justify text-black font-normal md:text-lg xs:text-base sm:text-base lg:text-xl leading-tight pl-8 pr-8 pt-4",children:g?(0,u.jsx)("div",{className:"flex items-center justify-center w-68 h-56",children:(0,u.jsxs)("div",{className:"bg-white rounded-lg p-4 item-center",children:[(0,u.jsx)("p",{className:"text-center md:text-[34px] xs:text-[24px] sm:text-[28px] lg:text-[38px]]  font-bold   leading-tight text-black ",children:"Downloading..."}),(0,u.jsx)("p",{className:"text-sm font-normal text-gray-900 tracking-normal whitespace-normal break-normal pt-3 pb-3 ",children:"Thank you for showing your interest in our case studies. Your download will start soon."})]})}):(0,u.jsxs)("div",{className:"  pb-8",children:[(0,u.jsx)("h2",{className:"md:text-[22px] xs:text-[16px] sm:text-[16px] lg:text-[22px]]  font-bold sm:text-left  leading-tight text-black pt-5 ",children:"Unlock Our Latest Case study Today"}),(0,u.jsx)("p",{className:"text-sm font-normal text-gray-900 tracking-normal whitespace-normal break-normal pt-3 pb-3 ",children:"Download our latest case study for free and discover how our solutions can help your business succeed."}),(0,u.jsxs)("form",{onSubmit:y,className:"",children:[(0,u.jsx)("div",{className:" pb-4 ",children:(0,u.jsxs)("div",{className:"grid grid-cols-1  sm:grid-cols-2 gap-y-1 gap-x-1 ",children:[(0,u.jsx)("div",{className:"mb-4 sm:pr-2 ",children:(0,u.jsx)("input",{type:"text",name:"firstName",id:"firstName",className:"border rounded-md w-full py-3 px-4 text-black leading-tight placeholder-black text-base bg-white",placeholder:"First Name",value:o.firstName,onChange:j})}),(0,u.jsx)("div",{className:"mb-4 sm:pl-2 ",children:(0,u.jsx)("input",{type:"text",name:"lastName",id:"lastName",className:"border rounded-md w-full py-3 px-4 text-black leading-tight placeholder-black text-base bg-white",placeholder:"Last Name",value:o.lastName,onChange:j})}),(0,u.jsx)("div",{className:"mb-4 sm:pr-2 ",children:(0,u.jsx)("input",{type:"text",name:"company",id:"company",className:"border rounded-md w-full py-3 px-4 text-black leading-tight placeholder-black text-base bg-white",placeholder:"Company",value:o.company,onChange:j})}),(0,u.jsx)("div",{className:"mb-4 sm:pl-2 ",children:(0,u.jsx)("input",{type:"text",name:"jobTitle",id:"jobTitle",className:"border rounded-md w-full py-3 px-4 text-black leading-tight placeholder-black text-base bg-white",placeholder:"Job Title",value:o.jobTitle,onChange:j})}),(0,u.jsx)("div",{className:"mb-4 sm:pr-2 ",children:(0,u.jsx)("input",{type:"text",name:"phoneNumber",id:"phoneNumber",className:"border rounded-md w-full py-3 px-4 text-black leading-tight placeholder-black text-base bg-white",placeholder:"Phone Number",value:o.phoneNumber,onChange:j})}),(0,u.jsx)("div",{className:"mb-4 sm:pl-2 ",children:(0,u.jsx)("input",{type:"email",name:"email",id:"email",className:"border rounded-md w-full py-3 px-4 text-black leading-tight placeholder-black text-base bg-white",placeholder:"Email Id",value:o.email,onChange:j})}),(0,u.jsx)("div",{className:"mb-4 sm:pr-2 ",children:(0,u.jsxs)("select",{id:"country",name:"country",value:c,onChange:function(e){m(e.target.value)},className:"border rounded-md w-full py-3 px-3 text-black leading-tight  text-base bg-white",children:[(0,u.jsx)("option",{value:"",children:"Country"}),[{id:1,name:"United States",cities:["New York","Los Angeles","Chicago","Houston","Philadelphia","Phoenix","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","San Francisco","Charlotte","Indianapolis","Seattle","Denver","Washington DC"]},{id:2,name:"Canada",cities:["Toronto","Vancouver","Montreal","Calgary","Ottawa","Edmonton","Mississauga","Winnipeg","Quebec City","Hamilton","Brampton","Surrey","Laval","Halifax","London","Markham","Vaughan","Gatineau","Longueuil","Burnaby"]},{id:3,name:"Mexico",cities:["Mexico City","Guadalajara","Monterrey","Puebla","Tijuana","Le\xf3n","Canc\xfan","Ju\xe1rez","M\xe9rida","Mexicali","Aguascalientes","Chihuahua","San Luis Potos\xed","Toluca","Cuernavaca","Ensenada","Zapopan","Quer\xe9taro","Hermosillo","Morelia"]},{id:4,name:"Argentina",cities:["Buenos Aires","Cordoba","Rosario","Mendoza","La Plata","Mar del Plata","San Miguel de Tucum\xe1n","Salta","Santa Fe","Corrientes","Posadas","Bah\xeda Blanca","San Juan","Neuqu\xe9n","Formosa","Concordia","Trelew","Rafaela","R\xedo Cuarto","San Rafael"]},{id:5,name:"Brazil",cities:["Sao Paulo","Rio de Janeiro","Brasilia","Salvador","Fortaleza","Belo Horizonte","Manaus","Curitiba","Recife","Porto Alegre","Goi\xe2nia","Bel\xe9m","Campinas","S\xe3o Lu\xeds","Uberl\xe2ndia","Natal","Macei\xf3","Teresina","Florian\xf3polis","Cuiab\xe1"]},{id:6,name:"Colombia",cities:["Bogota","Medellin","Cali","Barranquilla","Cartagena","C\xfacuta","Soledad","Ibagu\xe9","Pereira","Santa Marta","Bucaramanga","Villavicencio","Valledupar","Pasto","Monteria","Neiva","Sincelejo","Armenia","Popay\xe1n","Tunja"]},{id:7,name:"France",cities:["Paris","Marseille","Lyon","Toulouse","Nice","Nantes","Strasbourg","Montpellier","Bordeaux","Lille","Rennes","Reims","Le Havre","Saint-\xc9tienne","Toulon"]},{id:8,name:"Germany",cities:["Berlin","Munich","Hamburg","Cologne","Frankfurt","Stuttgart","D\xfcsseldorf","Dortmund","Essen","Leipzig"]},{id:9,name:"United Kingdom",cities:["London","Manchester","Birmingham","Liverpool","Newcastle","Nottingham","Sheffield","Leeds","Bristol","Glasgow"]},{id:10,name:"Italy",cities:["Rome","Milan","Naples","Turin","Palermo","Genoa","Bologna","Florence","Bari","Catania"]},{id:11,name:"Spain",cities:["Madrid","Barcelona","Valencia","Seville","Zaragoza","M\xe1laga","Murcia","Palma de Mallorca","Las Palmas de Gran Canaria","Bilbao"]},{id:12,name:"Australia",cities:["Sydney","Melbourne","Brisbane","Perth","Adelaide","Gold Coast","Newcastle","Canberra","Wollongong","Sunshine Coast"]},{id:13,name:"China",cities:["Beijing","Shanghai","Guangzhou","Shenzhen","Chengdu","Hangzhou"]},{id:14,name:"Japan",cities:["Tokyo","Osaka","Kyoto","Yokohama","Nagoya","Sapporo"]},{id:15,name:"South Korea",cities:["Seoul","Busan","Incheon","Daegu","Gwangju","Daejeon"]},{id:16,name:"India",cities:["Mumbai","Delhi","Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Pune","Surat","Jaipur","Lucknow","Kanpur","Nagpur","Visakhapatnam","Bhopal","Patna","Ludhiana","Agra","Nashik","Vadodara","Faridabad","Madurai","Jamshedpur","Asansol","Dhanbad","Ranchi","Bhubaneswar","Amritsar","Allahabad","Coimbatore","Jabalpur","Gwalior","Vijayawada","Jodhpur","Raipur","Kota","Guwahati","Chandigarh"]},{id:17,name:"Russia",cities:["Moscow","St. Petersburg","Novosibirsk","Yekaterinburg","Nizhny Novgorod","Kazan","Chelyabinsk","Omsk","Samara","Rostov-on-Don","Ufa","Krasnoyarsk","Perm","Voronezh","Volgograd","Krasnodar","Saratov","Tolyatti","Izhevsk","Ulyanovsk","Barnaul","Vladivostok","Yaroslavl","Irkutsk","Tyumen","Khabarovsk","Murmansk","Kemerovo","Novokuznetsk","Orenburg","Tomsk","Kurgan","Nizhnevartovsk","Magnitogorsk","Penza","Nalchik","Lipetsk","Kostroma"]},{id:18,name:"South Africa",cities:["Johannesburg","Cape Town","Durban","Pretoria","Port Elizabeth","Bloemfontein","Nelspruit","Kimberley","Polokwane","Rustenburg","East London","Pietermaritzburg","Mbombela","Mahikeng","Middelburg","Vryburg","Richards Bay","Grahamstown","Klerksdorp","Kroonstad","Thohoyandou","Aliwal North","Vereeniging","Welkom","Mthatha","Vanderbijlpark","George","Lichtenburg","Upington","Mossel Bay","De Aar","Kathu","Springbok"]},{id:19,name:"Egypt",cities:["Cairo","Alexandria","Giza","Shubra El-Kheima","Port Said","Suez","Luxor","al-Mansura","El-Mahalla El-Kubra","Tanta","Asyut","Ismailia","Faiyum","Zagazig","Aswan","Damietta","Damanhur","Minya","Beni Suef","Hurghada","Qena","Sohag","Shibin El Kom","Banha","Arish","Mallawi","Kafr el-Sheikh","Dekernes","Bilbais","Marsa Matruh"]},{id:20,name:"Nigeria",cities:["Abuja","Lagos","Kano","Ibadan","Kaduna","Port Harcourt"]}].map((function(e){return(0,u.jsx)("option",{value:e.name,children:e.name},e.id)}))]})})]})}),(0,u.jsxs)("div",{class:"flex items-center",children:[(0,u.jsxs)("button",{type:"submit",className:"flex items-center w-25  py-3 px-4 font-semibold rounded-md text-white bg-[#C03434] p-4 ",children:[(0,u.jsx)("span",{children:" Download Now"}),(0,u.jsx)("img",{src:"".concat(".","/img/white_arrow.png"),alt:"Arrow",className:"w-5 h-4 ml-8"})]}),(0,u.jsx)("p",{class:"ml-auto text-[#C03434]  text-sm pl-3 leading-tight",children:"(All fields are mandatory)"})]})]})]})})]})})})})})]})})}function j(){var e=(0,d.useState)(!1),a=e[0],t=e[1],n=(0,d.useState)(""),i=n[0],o=n[1],r=["Scaling Success Story","Fashion Retailing Triumphs","Enabling Industrial Efficiency","Fortune 500 Retailer Overview","Serving the Military Community"],s=["Third largest North American distributor serving the $35 billion power transmission/motion control market.","A leading American speciality retailer of fashion-oriented and moderately priced women's apparel.","Third largest North American distributor serving the $35 billion power transmission/motion control market.","A chain or retail stores, which engages in the sale of wide assortment of domestic merchandise and is counted among the Fortune 500 companies.","Online store of AAFES (Army & Air Force Exchange), committed to providing the exchange benefits to American military community since 1895."],l=(0,d.useState)(null),c=l[0],m=l[1],p=function(e){m(e),t(!0),o(r[e])};return(0,u.jsxs)("div",{className:"bg-[#C03434] pb-10 pt-12",children:[a&&(0,u.jsx)(y,{index:c,onClose:function(){t(!1),m(null)},caseStudy:i}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px]  text-center text-white font-raleway font-normal leading-tight",children:"Success Stories"}),(0,u.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-white"}),(0,u.jsx)("h4",{className:"text-center text-white font-raleway font-normal md:text-text-xl xs:text-lg sm:text-lg lg:text-2xl leading-tight pt-5 ",children:"Sharing our impact and contribution through successful stories"})]}),(0,u.jsx)("div",{class:"block md:block lg:hidden",children:(0,u.jsx)(h.Z,{itemsToShow:1,itemsToScroll:1,pagination:!1,showArrows:!1,children:[0,1,2,3,4].map((function(e){return(0,u.jsx)("div",{className:"cursor-pointer",onClick:function(){return p(e)},children:(0,u.jsx)("div",{className:"relative overflow-hidden w-full py-12 flex flex-col",children:(0,u.jsx)("div",{className:"relative w-80 h-100",style:{whiteSpace:"nowrap"},children:(0,u.jsx)("div",{className:"object-cover max-w-80 mx-auto p-4",children:(0,u.jsxs)("div",{className:"relative bg-white p-2 rounded-md",children:[(0,u.jsx)("img",{src:"".concat(".","/img/home_stories/case_study").concat(e+1,".png"),alt:"Case Study"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{className:"text-lg font-bold text-blue-900 leading-tight pt-2 pb-1",children:r[e]}),(0,u.jsx)("p",{className:"text-sm font-normal text-black pb-2 tracking-normal h-[6em] whitespace-normal",children:s[e]})]})]})})})})},e)}))})}),(0,u.jsx)("div",{class:"hidden lg:block",children:(0,u.jsx)(h.Z,{itemsToShow:4,itemsToScroll:1,pagination:!1,showArrows:!0,children:[0,1,2,3,4].map((function(e){return(0,u.jsx)("div",{className:"cursor-pointer",onClick:function(){return p(e)},children:(0,u.jsx)("div",{className:"relative overflow-hidden w-full py-12 flex flex-col",children:(0,u.jsx)("div",{className:"relative w-80 h-100",style:{whiteSpace:"nowrap"},children:(0,u.jsx)("div",{className:"object-cover max-w-80 mx-auto p-4",children:(0,u.jsxs)("div",{className:"relative bg-white p-2 rounded-md",children:[(0,u.jsx)("img",{src:"".concat(".","/img/home_stories/case_study").concat(e+1,".png"),alt:"Case Study"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{className:"text-lg font-bold text-blue-900 leading-tight pt-2 pb-1",children:r[e]}),(0,u.jsx)("p",{className:"text-sm font-normal text-black pb-2 tracking-normal h-[6em] whitespace-normal",children:s[e]})]})]})})})})},e)}))})})]})}function w(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(n.default,{children:[(0,u.jsx)("title",{children:"Logixal - Digital Transformation Consulting and Solutions"}),(0,u.jsx)("meta",{name:"description",content:"Logixal is a digital transformation consulting and solutions company. We help organizations in their digital transformation journey by providing innovative solutions."}),(0,u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1"}),(0,u.jsx)("meta",{name:"description",content:"An end to end ecommerce and e banking solutions provider that enables your enterprise to operate with industry standards"}),(0,u.jsx)("meta",{name:"keywords",content:"Digital transformation consulting, digital transformation solutions, IT consulting, software development, technology solutions"}),(0,u.jsx)("meta",{"http-equiv":"cache-control",content:"max-age=518400"}),(0,u.jsx)("meta",{"http-equiv":"pragma",content:"public"}),(0,u.jsx)("link",{rel:"icon",href:"./favicon.ico"})]}),(0,u.jsx)(o.Z,{}),(0,u.jsx)(i.Z,{}),(0,u.jsx)(r.Z,{}),(0,u.jsx)(j,{}),(0,u.jsx)(s.Z,{}),(0,u.jsx)(l.Z,{}),(0,u.jsx)(c.Z,{}),(0,u.jsx)(m,{})]})}},8581:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(499)}])}},function(e){e.O(0,[9774,3948,7857,2944,3857,9708,263,2888,179],(function(){return a=8581,e(e.s=a);var a}));var a=e.O();_N_E=a}]);