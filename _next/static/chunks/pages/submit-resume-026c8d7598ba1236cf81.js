(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5416],{4857:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var r=t(9008),n=t(9845),i=t(2078),l=(t(802),t(7294)),s=t(2809),o=t(266),c=t(809),u=t.n(c),d=t(1163),m=t(5893);function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(){var e,a=(0,d.useRouter)(),t=(0,l.useState)(null),r=t[0],n=t[1],i=(0,l.useState)(""),c=i[0],h=i[1],p=(0,l.useState)({firstName:"",lastName:"",email:"",mobileNumber:"",year:"",referralSource:"",comments:"",departments:"",country:"",city:""}),g=p[0],x=p[1],f=(0,l.useState)(""),y=f[0],v=f[1],N=(0,l.useState)(""),j=N[0],w=N[1],S=(0,l.useState)(""),k=S[0],C=S[1],M=function(e){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){P(a.result)}},P=function(e){h(e),console.log(c)},B=function(){var e=(0,o.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==g.firstName&&""!==g.lastName&&""!==g.email&&""!==g.mobileNumber&&""!==y&&""!==j&&""!==g.year&&""!==g.referralSource&&""!==g.comments&&""!==g.departments){e.next=4;break}return alert("All fields are mandatory"),e.abrupt("return");case 4:if(r){e.next=7;break}return alert("Please select a file to upload"),e.abrupt("return");case 7:if(/^\d+$/.test(g.mobileNumber)){e.next=11;break}return alert("Mobile number should contain only numbers"),e.abrupt("return");case 11:return t.preventDefault(),e.prev=12,e.next=15,fetch("https://e9y2laf4ri.execute-api.ap-south-1.amazonaws.com/dev/mail",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({from:"careers@logixal.com",subject:"Submit Resume",to:"careers@logixal.com",firstName:g.firstName,lastName:g.lastName,email:g.email,year:g.year,mobileNumber:g.mobileNumber,country:y,city:j,referralSource:g.referralSource,departments:g.departments,comments:g.comments,base64Data:c,fileName:k})});case 15:if(!(n=e.sent).ok){e.next=20;break}console.log("response.ok",n.ok),e.next=21;break;case 20:throw new Error("Unable to Send Mail");case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(12),console.error(e.t0);case 26:a.push("/submitResumeSuccess");case 27:case"end":return e.stop()}}),e,null,[[12,23]])})));return function(a){return e.apply(this,arguments)}}(),A=function(e){var a=e.target,t=a.name,r=a.value;x((function(e){return b(b({},e),{},(0,s.Z)({},t,r))}))},O=[{id:1,name:"United States",cities:["New York","Los Angeles","Chicago","Houston","Philadelphia","Phoenix","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","San Francisco","Charlotte","Indianapolis","Seattle","Denver","Washington DC"]},{id:2,name:"Canada",cities:["Toronto","Vancouver","Montreal","Calgary","Ottawa","Edmonton","Mississauga","Winnipeg","Quebec City","Hamilton","Brampton","Surrey","Laval","Halifax","London","Markham","Vaughan","Gatineau","Longueuil","Burnaby"]},{id:3,name:"Mexico",cities:["Mexico City","Guadalajara","Monterrey","Puebla","Tijuana","Le\xf3n","Canc\xfan","Ju\xe1rez","M\xe9rida","Mexicali","Aguascalientes","Chihuahua","San Luis Potos\xed","Toluca","Cuernavaca","Ensenada","Zapopan","Quer\xe9taro","Hermosillo","Morelia"]},{id:4,name:"Argentina",cities:["Buenos Aires","Cordoba","Rosario","Mendoza","La Plata","Mar del Plata","San Miguel de Tucum\xe1n","Salta","Santa Fe","Corrientes","Posadas","Bah\xeda Blanca","San Juan","Neuqu\xe9n","Formosa","Concordia","Trelew","Rafaela","R\xedo Cuarto","San Rafael"]},{id:5,name:"Brazil",cities:["Sao Paulo","Rio de Janeiro","Brasilia","Salvador","Fortaleza","Belo Horizonte","Manaus","Curitiba","Recife","Porto Alegre","Goi\xe2nia","Bel\xe9m","Campinas","S\xe3o Lu\xeds","Uberl\xe2ndia","Natal","Macei\xf3","Teresina","Florian\xf3polis","Cuiab\xe1"]},{id:6,name:"Colombia",cities:["Bogota","Medellin","Cali","Barranquilla","Cartagena","C\xfacuta","Soledad","Ibagu\xe9","Pereira","Santa Marta","Bucaramanga","Villavicencio","Valledupar","Pasto","Monteria","Neiva","Sincelejo","Armenia","Popay\xe1n","Tunja"]},{id:7,name:"France",cities:["Paris","Marseille","Lyon","Toulouse","Nice","Nantes","Strasbourg","Montpellier","Bordeaux","Lille","Rennes","Reims","Le Havre","Saint-\xc9tienne","Toulon"]},{id:8,name:"Germany",cities:["Berlin","Munich","Hamburg","Cologne","Frankfurt","Stuttgart","D\xfcsseldorf","Dortmund","Essen","Leipzig"]},{id:9,name:"United Kingdom",cities:["London","Manchester","Birmingham","Liverpool","Newcastle","Nottingham","Sheffield","Leeds","Bristol","Glasgow"]},{id:10,name:"Italy",cities:["Rome","Milan","Naples","Turin","Palermo","Genoa","Bologna","Florence","Bari","Catania"]},{id:11,name:"Spain",cities:["Madrid","Barcelona","Valencia","Seville","Zaragoza","M\xe1laga","Murcia","Palma de Mallorca","Las Palmas de Gran Canaria","Bilbao"]},{id:12,name:"Australia",cities:["Sydney","Melbourne","Brisbane","Perth","Adelaide","Gold Coast","Newcastle","Canberra","Wollongong","Sunshine Coast"]},{id:13,name:"China",cities:["Beijing","Shanghai","Guangzhou","Shenzhen","Chengdu","Hangzhou"]},{id:14,name:"Japan",cities:["Tokyo","Osaka","Kyoto","Yokohama","Nagoya","Sapporo"]},{id:15,name:"South Korea",cities:["Seoul","Busan","Incheon","Daegu","Gwangju","Daejeon"]},{id:16,name:"India",cities:["Mumbai","Delhi","Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Pune","Surat","Jaipur","Lucknow","Kanpur","Nagpur","Visakhapatnam","Bhopal","Patna","Ludhiana","Agra","Nashik","Vadodara","Faridabad","Madurai","Jamshedpur","Asansol","Dhanbad","Ranchi","Bhubaneswar","Amritsar","Allahabad","Coimbatore","Jabalpur","Gwalior","Vijayawada","Jodhpur","Raipur","Kota","Guwahati","Chandigarh"]},{id:17,name:"Russia",cities:["Moscow","St. Petersburg","Novosibirsk","Yekaterinburg","Nizhny Novgorod","Kazan","Chelyabinsk","Omsk","Samara","Rostov-on-Don","Ufa","Krasnoyarsk","Perm","Voronezh","Volgograd","Krasnodar","Saratov","Tolyatti","Izhevsk","Ulyanovsk","Barnaul","Vladivostok","Yaroslavl","Irkutsk","Tyumen","Khabarovsk","Murmansk","Kemerovo","Novokuznetsk","Orenburg","Tomsk","Kurgan","Nizhnevartovsk","Magnitogorsk","Penza","Nalchik","Lipetsk","Kostroma"]},{id:18,name:"South Africa",cities:["Johannesburg","Cape Town","Durban","Pretoria","Port Elizabeth","Bloemfontein","Nelspruit","Kimberley","Polokwane","Rustenburg","East London","Pietermaritzburg","Mbombela","Mahikeng","Middelburg","Vryburg","Richards Bay","Grahamstown","Klerksdorp","Kroonstad","Thohoyandou","Aliwal North","Vereeniging","Welkom","Mthatha","Vanderbijlpark","George","Lichtenburg","Upington","Mossel Bay","De Aar","Kathu","Springbok"]},{id:19,name:"Egypt",cities:["Cairo","Alexandria","Giza","Shubra El-Kheima","Port Said","Suez","Luxor","al-Mansura","El-Mahalla El-Kubra","Tanta","Asyut","Ismailia","Faiyum","Zagazig","Aswan","Damietta","Damanhur","Minya","Beni Suef","Hurghada","Qena","Sohag","Shibin El Kom","Banha","Arish","Mallawi","Kafr el-Sheikh","Dekernes","Bilbais","Marsa Matruh"]},{id:20,name:"Nigeria",cities:["Abuja","Lagos","Kano","Ibadan","Kaduna","Port Harcourt"]}];return(0,m.jsx)("div",{className:"bg-white w-full p-5 pt-10 pb-10",children:(0,m.jsx)("div",{className:"flex flex-col items-center pt-5",children:(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{className:"md:text-[43px] sm:text-[34px] xs:text-[34px] lg:text-[64px] text-center text-black font-raleway font-medium leading-tight",children:"Submit Resume"}),(0,m.jsx)("div",{className:"border-b-4 mx-auto w-10  pt-4 item-center border-red-700"}),(0,m.jsx)("div",{className:"page_white_section_para",children:(0,m.jsxs)("div",{className:"border bg-gray-50  rounded-md pb-8",children:[(0,m.jsx)("h2",{className:"md:text-[22px] xs:text-[16px] sm:text-[16px] lg:text-[22px]]  font-bold sm:text-left  leading-tight text-black pt-7 pl-10",children:"Unlock Your Potential"}),(0,m.jsxs)("form",{onSubmit:B,className:"pl-10 pr-10",children:[(0,m.jsx)("div",{className:"pt-6 pb-4 bg-gray-50",children:(0,m.jsxs)("div",{className:"grid grid-cols-1  sm:grid-cols-2 gap-y-1 gap-x-1 ",children:[(0,m.jsx)("div",{className:"mb-4 sm:pr-2 bg-gray-50",children:(0,m.jsx)("input",{type:"text",name:"firstName",id:"firstName",className:"border rounded w-full py-3 px-4 text-black leading-tight placeholder-black text-base bg-white",placeholder:"First Name",value:g.firstName,onChange:A})}),(0,m.jsx)("div",{className:"mb-4 sm:pl-2 bg-gray-50",children:(0,m.jsx)("input",{type:"text",name:"lastName",id:"lastName",className:"border rounded w-full py-3 px-4 text-black leading-tight placeholder-black text-base bg-white",placeholder:"Last Name",value:g.lastName,onChange:A})}),(0,m.jsx)("div",{className:"mb-4 sm:pr-2 bg-gray-50",children:(0,m.jsx)("input",{type:"text",name:"email",id:"email",className:"border rounded w-full py-3 px-3 text-black leading-tight placeholder-black text-base bg-white",placeholder:"Email Id",value:g.email,onChange:A})}),(0,m.jsx)("div",{className:"mb-4 sm:pl-2 bg-gray-50",children:(0,m.jsx)("input",{type:"text",name:"mobileNumber",id:"mobileNumber",className:"border rounded w-full py-3 px-3 text-black leading-tight placeholder-black text-base bg-white",placeholder:"Mobile Number",value:g.mobileNumber,onChange:A})}),(0,m.jsx)("div",{className:"mb-4 sm:pr-2 bg-gray-50",children:(0,m.jsxs)("select",{id:"country",name:"country",value:y,onChange:function(e){v(e.target.value),w("")},className:"border rounded w-full py-3 px-3 text-black leading-tight  text-base bg-white",children:[(0,m.jsx)("option",{value:"",children:"Country"}),O.map((function(e){return(0,m.jsx)("option",{value:e.name,children:e.name},e.id)}))]})}),(0,m.jsx)("div",{className:"mb-4 sm:pl-2 bg-gray-50",children:(0,m.jsxs)("select",{id:"city",name:"city",value:j,onChange:function(e){w(e.target.value)},className:"border rounded w-full py-3 px-3 text-black leading-tight  text-base bg-white",children:[(0,m.jsx)("option",{value:"",children:"City"}),null===(e=O.find((function(e){return e.name===y})))||void 0===e?void 0:e.cities.map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))]})}),(0,m.jsx)("div",{className:"mb-2 sm:pr-2  bg-gray-50",children:(0,m.jsxs)("select",{id:"year",name:"year",value:g.year,onChange:A,className:"border rounded w-full py-3 px-3 text-black leading-tight  text-base bg-white",children:[(0,m.jsx)("option",{value:"",children:"Years of Experience"}),["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"].map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))]})}),(0,m.jsxs)("div",{className:"mb-2 sm:pl-2 sm:pt-0 pt-2 bg-gray-50",children:[(0,m.jsxs)("label",{className:"inline-flex items-center border rounded w-full py-3 px-3 text-black leading-tight  text-base rounded-md text-white bg-[#363E7B] ",children:[(0,m.jsx)("span",{children:"Add Your Resume"}),(0,m.jsx)("input",{type:"file",className:"hidden",onChange:function(e){if(!/(\.pdf|\.doc|\.docx)$/i.exec(e.target.value))return alert("Please select a file in PDF, DOC, or DOCX format"),void(e.target.value="");n(e.target.files[0]),C(e.target.files[0].name);var a=e.target.files[0];M(a)}}),(0,m.jsx)("div",{className:"ml-auto",children:(0,m.jsx)("img",{src:"".concat("","/img/white_plus.png"),alt:"Arrow",className:"w-5 h-4 "})})]}),k&&(0,m.jsx)("p",{className:"text-xs text-gray-500 pt-2 pl-4",children:k})]})]})}),(0,m.jsx)("div",{className:"pb-5 bg-gray-50",children:(0,m.jsxs)("select",{id:"referralSource",name:"referralSource",value:g.referralSource,onChange:A,className:"border rounded w-full py-3 px-3 text-black leading-tight text-base bg-white",children:[(0,m.jsx)("option",{value:"",children:"Where did you hear about Logixal?"}),["Friend or family","Social media","Online search","Advertisement","Other"].map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))]})}),(0,m.jsx)("div",{className:"pb-5 bg-gray-50",children:(0,m.jsxs)("select",{id:"departments",name:"departments",value:g.departments,onChange:A,className:"border rounded w-full py-3 px-3 text-black leading-tight text-base bg-white",children:[(0,m.jsx)("option",{value:"",children:"Select Department"}),["Information Technology","Design","Business & Marketing","Human Resources","Other"].map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))]})}),(0,m.jsx)("div",{className:"pb-4 bg-gray-50",children:(0,m.jsx)("textarea",{id:"comments",name:"comments",value:g.comments,onChange:A,className:"border rounded w-full py-8 px-3 text-black leading-tight placeholder-black text-base bg-white",placeholder:"Any comments"})}),(0,m.jsxs)("div",{class:"flex items-center",children:[(0,m.jsxs)("button",{type:"submit",className:"flex items-center w-25  font-semibold rounded-md text-white bg-[#C03434] p-4 ",children:[(0,m.jsx)("span",{children:" Submit"}),(0,m.jsx)("img",{src:"".concat("","/img/white_arrow.png"),alt:"Arrow",className:"w-5 h-4 ml-8"})]}),(0,m.jsx)("p",{class:"ml-auto text-[#C03434] text-sm",children:"(All fields are mandatory)"})]})]})]})})]})})})}function g(){var e=(0,l.useState)(0),a=(e[0],e[1],(0,l.useState)(0)),t=(a[0],a[1],(0,l.useState)(2)),s=(t[0],t[1],(0,l.useState)(!1));s[0],s[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(r.default,{children:[(0,m.jsx)("title",{children:"Submit Resume"}),(0,m.jsx)("meta",{name:"description",content:"Submit your resume to Logixal, a software engineering company empowering digital transformation across industries."}),(0,m.jsx)("meta",{name:"keywords",content:"digital transformation, submit resume, Logixal"}),(0,m.jsx)("link",{rel:"icon",href:"./favicon.ico"})]}),(0,m.jsx)(n.Z,{title:"Careers"}),(0,m.jsx)("div",{className:"sm:pt-5 pt-1",children:(0,m.jsx)("div",{className:"w-full flex flex-col sm:flex-row sm:justify-between overflow-x-hidden pt-16",children:(0,m.jsx)("div",{className:" w-full",children:(0,m.jsx)("div",{className:"relative group",children:(0,m.jsx)("div",{className:"bg-cover bg-center relative",children:(0,m.jsx)("img",{src:"".concat("","/img/banner/Submit_Resume.png"),alt:"Submit Resume",className:" w-full h-full object-cover xs:w-full"})})})})})}),(0,m.jsx)(p,{}),(0,m.jsx)(i.Z,{})]})}},3967:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/submit-resume",function(){return t(4857)}])}},function(e){e.O(0,[9774,5576,7857,8408,3378,3405,802,2888,179],(function(){return a=3967,e(e.s=a);var a}));var a=e.O();_N_E=a}]);