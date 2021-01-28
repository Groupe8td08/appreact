(this["webpackJsonptremor-watch"]=this["webpackJsonptremor-watch"]||[]).push([[0],{15:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),o=a.n(s),c=a(16),r=a.n(c),i=(a(79),a(3)),l=a(4),d=a(6),h=a(5),b=(a.p,a(15),a(29)),j=(a(62),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={lab:[],data:{labels:["9:15","9:20","9:30","9:35","9:40","9:45","9:50","9:55","10:00","10:05","10:10","10:15","10:20","10:25"],datasets:[{label:" X Tremor",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40,65,59,80,81,56,55,40]},{label:"Y Tremor",fill:!1,lineTension:.1,backgroundColor:"rgba(75,0,192,0.4)",borderColor:"rgba(75,0,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,0,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,0,192,1)",pointHoverBorderColor:"rgba(220,0,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[80,70,40,31,60,50,59,70,35,40,80,56,60,70]},{label:"Z Tremor",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,0,0.4)",borderColor:"rgba(75,192,0,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,0,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,0,1)",pointHoverBorderColor:"rgba(220,220,0,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[30,50,88,83,40,30,45,50,53,88,80,70,55,31]}]},options:{maintainAspectRatio:!0,responsive:!0,legend:{position:"top"},scales:{yAxes:[{ticks:{beginAtZero:!1}}]},plugins:{zoom:{pan:{enabled:!0,mode:"x",speed:10,threshold:10},zoom:{enabled:!0,drag:!1,mode:"x"}}}}},e.actu=function(){var t=e.props.datax,a=e.props.datay,n=e.props.dataz,s=e.props.labo,o=e.state.data;o.datasets[0].data=t,o.datasets[1].data=a,o.datasets[2].data=n,o.labels=s,e.setState({data:o})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{padding:"0.5em"},children:Object(n.jsx)("button",{onClick:this.actu,children:"Afficher les donn\xe9es"})}),Object(n.jsx)("div",{style:{width:"85%",height:"85%"},children:Object(n.jsx)(b.Line,{data:this.state.data,options:this.state.options})})]})}}]),a}(o.a.Component)),u=(a(63),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{class:"navbar navbar-expand-sm bg-primary navbar-dark",children:Object(n.jsxs)("ul",{class:"navbar-nav",children:[Object(n.jsx)("li",{class:"nav-item active h-elem",children:Object(n.jsx)("a",{class:"nav-link",href:"/home",to:"/home",style:{pointer:"none",color:"inherit",textDecoration:"inherit"},children:"Accueil"})}),Object(n.jsx)("li",{class:"nav-item h-elem",children:Object(n.jsx)("a",{class:"nav-link",href:"/courbes-simples",to:"/courbes-simples",style:{color:"inherit",textDecoration:"inherit"},children:"Courbes simples"})}),Object(n.jsx)("li",{class:"nav-item h-elem",children:Object(n.jsx)("a",{class:"nav-link",href:"/donut",to:"/donut",style:{color:"inherit",textDecoration:"inherit"},children:"Donut"})}),Object(n.jsx)("li",{class:"nav-item h-elem",children:Object(n.jsx)("a",{class:"nav-link",href:"/score",to:"/score",style:{color:"inherit",textDecoration:"inherit"},children:"Score"})})]})}),Object(n.jsx)("h1",{className:"titre",children:"Tremor watch interface"})]})}}]),a}(o.a.Component)),x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"jumbotron text-center",children:[Object(n.jsx)("p",{children:"Projet d'\xe9tudiants de l'ECE Paris en collaboration avec le Centre de Recherche Interdisciplinaire de Paris (CRI), ann\xe9e scolaire 2020-2021"}),Object(n.jsx)("li",{children:"Projet tutor\xe9 par Frederic Ravaut (tuteur ECE), Vladimir Hermand (tuteur CRI) et K\xe9vin Lhoste (Responsable du MakerLab et tuteur CRI)"}),Object(n.jsx)("li",{children:"Equipe : H\xe9l\xe8ne Meunier, M\xe9linda Vachon, Arnaud Bretxa, Xavier Koczan, Guillaume Le Loher et Laura Flaquer"})]})}}]),a}(o.a.Component),O=a(22),p=a(7),v=a(2),m=(a(176),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).showFile=function(){if(n.v=[5,6],window.File&&window.FileReader&&window.FileList&&window.Blob){var e=document.getElementById("show-text"),t=document.querySelector("input[type=file]").files[0],a=new FileReader;t.type.match(/text.*/)?a.onload=function(t){e.innerHTML=t.target.result,n.v=t.target.result,n.setState({variable1:String(n.v)})}:e.innerHTML="<span class='error'>It doesn't seem to be a text file!</span>",a.readAsText(t)}else alert("Your browser is too old to support HTML5 File API")},n.showKlicKlic=function(){console.log("tableau",n.state.tableau);for(var e=n.state.variable1.split("\n"),t=Object(v.a)(n.state.tableau),a=Object(v.a)(n.state.heure),s=Object(v.a)(n.state.x),o=Object(v.a)(n.state.y),c=Object(v.a)(n.state.z),r=Object(v.a)(n.state.score),i=1;i<e.length;i++){var l=e[i];console.log(typeof e[i]),console.log(l.split(","));var d=l.split(",");console.log(d[0]),1==i?(t=[{heure:d[0],x:d[1],y:d[2],z:d[3],score:d[4]}],a=[d[0]],s=[d[1]],o=[d[2]],c=[d[3]],r=[d[4]]):(t=[].concat(Object(v.a)(t),[{heure:d[0],x:d[1],y:d[2],z:d[3],score:d[4]}]),a=[].concat(Object(v.a)(a),[d[0]]),s=[].concat(Object(v.a)(s),[d[1]]),o=[].concat(Object(v.a)(o),[d[2]]),c=[].concat(Object(v.a)(c),[d[3]]),r=[].concat(Object(v.a)(r),[d[4]]))}n.setState({heure:a,x:s,y:o,z:c,score:r,tableau:t})},n.state={selectedFile:null,variable1:"",tableau:[],heure:[],x:[],y:[],z:[],score:[]},console.log(n.state.tableau),n}return Object(l.a)(a,[{key:"render",value:function(){return console.log("xxxx",this.state.x),console.log("score",this.state.score),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Upload file to plot the data !"}),Object(n.jsx)("input",{type:"file",onChange:this.showFile.bind(this)}),Object(n.jsx)("button",{onClick:this.showKlicKlic.bind(this),children:"Upload Data"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"centrer",children:"Tremor graph"}),Object(n.jsx)(j,{title:this.state.title,datax:this.state.x,datay:this.state.y,dataz:this.state.z,labo:this.state.heure})]}),Object(n.jsx)("p",{children:"Donn\xe9es : "}),Object(n.jsx)("div",{id:"show-text"}),Object(n.jsx)("div",{})]})}}]),a}(o.a.Component)),y=a(30),g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).actu=function(){e.props.labo;var t=e.state.chartData;e.setState({data:t})},e.state={},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{padding:"0.5em"}}),Object(n.jsxs)("div",{style:{padding:"2em",align:"center",width:"50%",height:"50%"},children:[Object(n.jsx)("h4",{style:{padding:"1em"},children:"Moyennes des tremblements"}),Object(n.jsx)("p",{children:"L\xe9gende :"}),Object(n.jsxs)("div",{class:"haha",children:[Object(n.jsx)("div",{class:"hehe, box_col1",children:"X"}),Object(n.jsx)("div",{class:"hehehe, box_col2",children:"Y"}),Object(n.jsx)("div",{class:"hehehehe, box_col3",children:"Z"})]}),Object(n.jsx)(y.PieChart,{data:[{title:"X",value:this.props.moyennex,color:"#E38627"},{title:"Y",value:this.props.moyenney,color:"#C13C37"},{title:"Z",value:this.props.moyennez,color:"#6A2135"}],label:function(e){return e.dataEntry.value}})]})]})}}]),a}(s.Component),f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).showFile=function(){if(n.v=[5,6],window.File&&window.FileReader&&window.FileList&&window.Blob){var e=document.getElementById("show-text"),t=document.querySelector("input[type=file]").files[0],a=new FileReader;t.type.match(/text.*/)?a.onload=function(t){e.innerHTML=t.target.result,n.v=t.target.result,n.setState({variable1:String(n.v)})}:e.innerHTML="<span class='error'>It doesn't seem to be a text file!</span>",a.readAsText(t)}else alert("Your browser is too old to support HTML5 File API")},n.showKlicKlic=function(){console.log("tableau",n.state.tableau);for(var e=n.state.variable1.split("\n"),t=Object(v.a)(n.state.tableau),a=Object(v.a)(n.state.heure),s=Object(v.a)(n.state.x),o=Object(v.a)(n.state.y),c=Object(v.a)(n.state.z),r=Object(v.a)(n.state.score),i=0,l=0,d=0,h=0,b=0,j=0,u=0,x=0,O=0,p=1;p<e.length;p++){var m=e[p];console.log(typeof e[p]),console.log(m.split(","));var y=m.split(",");console.log(y[0]),1==p?(t=[{heure:y[0],x:y[1],y:y[2],z:y[3],score:y[4]}],a=[y[0]],s=[y[1]],o=[y[2]],c=[y[3]],r=[y[4]]):(t=[].concat(Object(v.a)(t),[{heure:y[0],x:y[1],y:y[2],z:y[3],score:y[4]}]),a=[].concat(Object(v.a)(a),[y[0]]),s=[].concat(Object(v.a)(s),[y[1]]),o=[].concat(Object(v.a)(o),[y[2]]),c=[].concat(Object(v.a)(c),[y[3]]),r=[].concat(Object(v.a)(r),[y[4]]))}h=s[0],b=s[0],j=o[0],u=o[0],x=c[0],O=c[0];for(p=0;p<=s.length-1;p++)i+=parseInt(s[p]),l+=parseInt(o[p]),d+=parseInt(c[p]),h>s[p]&&(h=s[p]),b<s[p]&&(b=s[p]),j>o[p]&&(j=o[p]),u<o[p]&&(u=o[p]),x>c[p]&&(x=c[p]),O<c[p]&&(O=c[p]),console.log("vx:",s[p]),console.log("i:",p);i=parseInt(i/s.length),l=parseInt(l/o.length),d=parseInt(d/c.length),console.log("moyennex:",i),console.log("moyenney:",l),console.log("moyennez:",d),n.setState({heure:a,x:s,y:o,z:c,score:r,tableau:t,moyennex:i,moyenney:l,moyennez:d,minx:h,maxx:b,miny:j,maxy:u,minz:x,maxz:O})},n.state={selectedFile:null,variable1:"",tableau:[],heure:[],x:[],minx:0,maxx:0,y:[],miny:0,maxy:0,z:[],minz:0,maxz:0,score:[],moyennex:"",moyenney:"",moyennez:""},console.log(n.state.tableau),n}return Object(l.a)(a,[{key:"render",value:function(){return console.log(this.state.moyennex),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Upload file to plot the data !"}),Object(n.jsx)("input",{type:"file",onChange:this.showFile.bind(this)}),Object(n.jsx)("button",{class:"lapin",onClick:this.showKlicKlic.bind(this),children:"Upload Data"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"centrer",children:"Pie Chart des tremblements"}),Object(n.jsxs)("div",{class:"wrapper",children:[Object(n.jsx)("div",{class:"one",children:Object(n.jsx)(g,{moyennex:this.state.moyennex,moyenney:this.state.moyenney,moyennez:this.state.moyennez,labo:this.state.heure})}),Object(n.jsxs)("div",{class:"two",children:[Object(n.jsx)("h4",{children:"Valeurs:"}),Object(n.jsxs)("div",{class:"ha",children:[Object(n.jsxs)("div",{class:"hehe",children:[Object(n.jsx)("h5",{children:"Tremor X"}),Object(n.jsxs)("p",{children:["Moyenne : ",this.state.moyennex]}),Object(n.jsxs)("p",{children:["Min : ",this.state.minx]}),Object(n.jsxs)("p",{children:["Max : ",this.state.maxx]})]}),Object(n.jsxs)("div",{class:"hehehe",children:[Object(n.jsx)("h5",{children:"Tremor Y"}),Object(n.jsxs)("p",{children:["Moyenne : ",this.state.moyenney]}),Object(n.jsxs)("p",{children:["Min : ",this.state.miny]}),Object(n.jsxs)("p",{children:["Max : ",this.state.maxy]})]}),Object(n.jsxs)("div",{class:"hehehehe",children:[Object(n.jsx)("h5",{children:"Tremor Z"}),Object(n.jsxs)("p",{children:["Moyenne : ",this.state.moyennez]}),Object(n.jsxs)("p",{children:["Min : ",this.state.minz]}),Object(n.jsxs)("p",{children:["Max : ",this.state.maxz]})]})]})]})]})]}),Object(n.jsx)("p",{children:"Donn\xe9es : "}),Object(n.jsx)("div",{id:"show-text"}),Object(n.jsx)("div",{})]})}}]),a}(s.Component),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={lab:[],data:{labels:["9:15","9:20","9:30","9:35","9:40","9:45","9:50","9:55","10:00","10:05","10:10","10:15","10:20","10:25"],datasets:[{label:"Score",fill:!1,lineTension:.1,backgroundColor:"rgba(75,12,0,0.4)",borderColor:"rgba(75,12,0,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,12,0,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,12,0,1)",pointHoverBorderColor:"rgba(220,20,0,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]}]},options:{maintainAspectRatio:!0,responsive:!0,legend:{position:"top"},scales:{yAxes:[{ticks:{beginAtZero:!1}}]},plugins:{zoom:{pan:{enabled:!0,mode:"x",speed:10,threshold:10},zoom:{enabled:!0,drag:!1,mode:"x"}}}}},e.actu=function(){var t=e.props.labo,a=e.state.data,n=e.props.score;a.datasets[0].data=n,a.labels=t,e.setState({data:a})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{padding:"0.5em"},children:Object(n.jsx)("button",{onClick:this.actu,children:"Afficher les donn\xe9es"})}),Object(n.jsx)("div",{style:{width:"85%",height:"85%"},children:Object(n.jsx)(b.Line,{data:this.state.data})})]})}}]),a}(o.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).showFile=function(){if(n.v=[5,6],window.File&&window.FileReader&&window.FileList&&window.Blob){var e=document.getElementById("show-text"),t=document.querySelector("input[type=file]").files[0],a=new FileReader;t.type.match(/text.*/)?a.onload=function(t){e.innerHTML=t.target.result,n.v=t.target.result,n.setState({variable1:String(n.v)})}:e.innerHTML="<span class='error'>It doesn't seem to be a text file!</span>",a.readAsText(t)}else alert("Your browser is too old to support HTML5 File API")},n.showKlicKlic=function(){console.log("tableau",n.state.tableau);for(var e=n.state.variable1.split("\n"),t=Object(v.a)(n.state.tableau),a=Object(v.a)(n.state.heure),s=Object(v.a)(n.state.x),o=Object(v.a)(n.state.y),c=Object(v.a)(n.state.z),r=Object(v.a)(n.state.score),i=0,l=0,d=0,h=0,b=0,j=1;j<e.length;j++){var u=e[j];console.log(typeof e[j]),console.log(u.split(","));var x=u.split(",");console.log(x[0]),1==j?(t=[{heure:x[0],x:x[1],y:x[2],z:x[3],score:x[4]}],a=[x[0]],s=[x[1]],o=[x[2]],c=[x[3]],r=[x[4]]):(t=[].concat(Object(v.a)(t),[{heure:x[0],x:x[1],y:x[2],z:x[3],score:x[4]}]),a=[].concat(Object(v.a)(a),[x[0]]),s=[].concat(Object(v.a)(s),[x[1]]),o=[].concat(Object(v.a)(o),[x[2]]),c=[].concat(Object(v.a)(c),[x[3]]),r=[].concat(Object(v.a)(r),[x[4]]))}for(j=0;j<r.length;j++)"0"===r[j]&&(i+=1),1==parseInt(r[j])&&(l+=1),2==parseInt(r[j])&&(d+=1),3==parseInt(r[j])&&(h+=1),4==parseInt(r[j])&&(b+=1);console.log(r),console.log("cpt1:",i),console.log("cpt2:",l),console.log("cpt3:",d),console.log("cpt4:",h),console.log("cpt5:",b),n.setState({heure:a,x:s,y:o,z:c,score:r,tableau:t,moyenne1:i,moyenne2:l,moyenne3:d,moyenne4:h,moyenne5:b})},n.state={selectedFile:null,variable1:"",tableau:[],heure:[],x:[],y:[],z:[],score:[],moyenne1:"",moyenne2:"",moyenne3:"",moyenne4:"",moyenne5:""},console.log(n.state.tableau),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Upload file to plot the data !"}),Object(n.jsx)("input",{type:"file",onChange:this.showFile.bind(this)}),Object(n.jsx)("button",{onClick:this.showKlicKlic.bind(this),children:"Upload Data"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"centrer",children:"Line chart du score"}),Object(n.jsx)(w,{score:this.state.score,labo:this.state.heure})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"centrer",children:"Pie chart du score"}),Object(n.jsxs)("div",{class:"wrapper",children:[Object(n.jsx)("div",{class:"one",children:Object(n.jsxs)("div",{style:{padding:"2em",align:"center",width:"50%",height:"50%"},children:[Object(n.jsx)("h4",{style:{padding:"1em"},children:"Occurence des scores"}),Object(n.jsx)("p",{children:"L\xe9gende :"}),Object(n.jsxs)("div",{class:"hoho",children:[Object(n.jsx)("div",{class:"hi, box_col1",children:"1"}),Object(n.jsx)("div",{class:"hihi, box_col2",children:"2"}),Object(n.jsx)("div",{class:"hihihi, box_col3",children:"3"}),Object(n.jsx)("div",{class:"hihihihi, box_col4",children:"4"}),Object(n.jsx)("div",{class:"hihihihihi, box_col5",children:"5"})]}),Object(n.jsx)(y.PieChart,{data:[{title:"1",value:this.state.moyenne1,color:"#E38627"},{title:"2",value:this.state.moyenne2,color:"#C13C37"},{title:"3",value:this.state.moyenne3,color:"#6A2135"},{title:"4",value:this.state.moyenne4,color:"#256698"},{title:"5",value:this.state.moyenne5,color:"#155508"}],label:function(e){return e.dataEntry.value}})]})}),Object(n.jsxs)("div",{class:"two",children:[Object(n.jsx)("h4",{children:"Valeurs:"}),Object(n.jsxs)("div",{class:"ha",children:[Object(n.jsxs)("div",{class:"hehe",children:[Object(n.jsxs)("h5",{children:["Score 1: ",this.state.moyenne1]}),Object(n.jsxs)("h5",{children:["Score 4: ",this.state.moyenne4]})]}),Object(n.jsxs)("div",{class:"hehehe",children:[Object(n.jsxs)("h5",{children:["Score 2: ",this.state.moyenne2]}),Object(n.jsxs)("h5",{children:["Score 5: ",this.state.moyenne5]})]}),Object(n.jsx)("div",{class:"hehehehe",children:Object(n.jsxs)("h5",{children:["Score 3: ",this.state.moyenne3]})})]})]})]})]}),Object(n.jsx)("p",{children:"Donn\xe9es : "}),Object(n.jsx)("div",{id:"show-text"}),Object(n.jsx)("div",{})]})}}]),a}(s.Component),z=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).showFile=function(){if(n.v=[5,6],window.File&&window.FileReader&&window.FileList&&window.Blob){var e=document.getElementById("show-text"),t=document.querySelector("input[type=file]").files[0],a=new FileReader;t.type.match(/text.*/)?a.onload=function(t){e.innerHTML=t.target.result,n.v=t.target.result,n.setState({variable1:String(n.v)})}:e.innerHTML="<span class='error'>It doesn't seem to be a text file!</span>",a.readAsText(t)}else alert("Your browser is too old to support HTML5 File API")},n.showKlicKlic=function(){console.log("tableau",n.state.tableau);for(var e=n.state.variable1.split("\n"),t=Object(v.a)(n.state.tableau),a=Object(v.a)(n.state.heure),s=Object(v.a)(n.state.x),o=Object(v.a)(n.state.y),c=Object(v.a)(n.state.z),r=Object(v.a)(n.state.score),i=1;i<e.length;i++){var l=e[i];console.log(typeof e[i]),console.log(l.split(","));var d=l.split(",");console.log(d[0]),1==i?(t=[{heure:d[0],x:d[1],y:d[2],z:d[3],score:d[4]}],a=[d[0]],s=[d[1]],o=[d[2]],c=[d[3]],r=[d[4]]):(t=[].concat(Object(v.a)(t),[{heure:d[0],x:d[1],y:d[2],z:d[3],score:d[4]}]),a=[].concat(Object(v.a)(a),[d[0]]),s=[].concat(Object(v.a)(s),[d[1]]),o=[].concat(Object(v.a)(o),[d[2]]),c=[].concat(Object(v.a)(c),[d[3]]),r=[].concat(Object(v.a)(r),[d[4]]))}n.setState({heure:a,x:s,y:o,z:c,score:r,tableau:t})},n.act=function(){window.location.reload()},n.state={selectedFile:null,variable1:"",tableau:[],heure:[],x:[],y:[],z:[],score:[]},console.log(n.state.tableau),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Upload file to plot the data !"}),Object(n.jsx)("input",{type:"file",onChange:this.showFile.bind(this)}),Object(n.jsx)("button",{onClick:this.showKlicKlic.bind(this),children:"Upload Data"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"centrer",children:"Tremor X"}),Object(n.jsx)(j,{datax:this.state.x,labo:this.state.heure})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"centrer",children:"Tremor Y"}),Object(n.jsx)(j,{datay:this.state.y,labo:this.state.heure})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"centrer",children:"Tremor Z"}),Object(n.jsx)(j,{dataz:this.state.z,labo:this.state.heure})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"centrer",children:"Score"}),Object(n.jsx)(j,{score:this.state.score,labo:this.state.heure})]}),Object(n.jsx)("p",{children:"Donn\xe9es : "}),Object(n.jsx)("div",{id:"show-text"}),Object(n.jsx)("div",{})]})}}]),a}(o.a.Component),k=(o.a.Component,function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{}),Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{exact:!0,path:"/",children:Object(n.jsx)(m,{})}),Object(n.jsx)(p.a,{exact:!0,path:"/home",children:Object(n.jsx)(m,{})}),Object(n.jsx)(p.a,{exact:!0,path:"/courbes-simples",children:Object(n.jsx)(z,{})}),Object(n.jsx)(p.a,{exact:!0,path:"/donut",children:Object(n.jsx)(f,{})}),Object(n.jsx)(p.a,{exact:!0,path:"/score",children:Object(n.jsx)(C,{})})]})]})}),Object(n.jsx)(x,{})]})}}]),a}(o.a.Component)),F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,197)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),o(e),c(e)}))};r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),F()},79:function(e,t,a){}},[[196,1,2]]]);
//# sourceMappingURL=main.4d8130fa.chunk.js.map