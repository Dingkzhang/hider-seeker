(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"w0+9":function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),a=function(){return function(){}}(),o=e("pMnS"),r=[".calendar-container[_ngcontent-%COMP%]{position:absolute;left:0;right:0;min-width:1000px;margin:auto;background-color:#f1eefb}.calendar-title-container[_ngcontent-%COMP%]{display:grid;text-align:center;background-color:#8aafa7}.calendar-title[_ngcontent-%COMP%]{font-size:100px}.calendar-wrapper[_ngcontent-%COMP%]{margin:auto;text-align:center;display:grid;width:90%;padding:10px}*[_ngcontent-%COMP%]{box-sizing:border-box}.zoom[_ngcontent-%COMP%]{transition:all .2s ease-in-out;margin:0 auto;z-index:90}.zoom[_ngcontent-%COMP%]:hover{background-color:#8aafa7;opacity:.5;transform:scale(3)}  .mat-calendar-body-cell-content{color:#000}  .mat-calendar-table-header{color:#000}  .mat-calendar-body-label{color:#000;font-size:50px}  .mat-calendar-table-header tr th{font-size:50px}  .mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){text-decoration:line-through;color:grey}  .mat-calendar-body-selected{background-color:#8aafa7;color:#fff}  .mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:#000}  .cdk-global-scrollblock{position:static}  .mat-calendar-period-button{font-size:50px;display:grid}  .mat-calendar-body{font-size:50px}  .mat-dialog-container{background-color:#8aafa7}"],c=e("bujt"),i=e("UodH"),s=e("lLAP"),u=e("wFw1"),d=e("zbXB"),b=e("jQLj"),h=e("Wf4p"),p=e("CMd7"),g=e("wd/R"),D=function(){function n(n,t,e){this.http=n,this.renderer=t,this.dialog=e,this.changeText=null,this.selectedDate=g(),this.minDate=new Date("2019/10/22"),this.maxDate=new Date,this.currentDay=null,this.currentYear=null,this.currentMonth=null,this.currentCalendarIndex=null,this.calendarIndexJson=null,this.calendarInfoJson=null,this.doesMonthExist=!1,this.selectedDay=null,this.selectedMonth=null,this.selectedYear=null,this.oneMonthInMilli=2629746e3,this.monthArray={Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12},this.excuseArray=[[{type:"text",paragraph:"Hello, no time sorry! I'm not really that busy I'm just lazy."}],[{type:"text",paragraph:"Cool, I'm glad you clicked on me but I don't have anything to say."}],[{type:"text",paragraph:"Let me just keep wasting your time. Please keep reading me."}],[{type:"text",paragraph:"Yikes, no content here. Too bad so sad."}]],this.selectedDate=null,this.setupCalendarIndex()}return n.prototype.ngOnInit=function(){},n.prototype.setupCalendarIndex=function(){var n=this;this.calendarIndexSubscription=this.getCalendarIndex().subscribe((function(t){n.calendarIndexJson=t,n.currentMonth=n.calendarIndexJson.current_month,n.currentYear=n.calendarIndexJson.current_year;var e=n.currentYear+"-"+n.currentMonth.toString()+"-15";console.log(e),n.currentMilliMonth=n.convertDateToMilli(e),n.checkMonthExist(n.currentMonth,n.currentYear,n.calendarIndexJson)?(n.doesMonthExist=!0,n.setupCalendarInfo(n.currentMonth,n.currentYear)):n.doesMonthExist=!1}))},n.prototype.setupCalendarInfo=function(n,t){var e=this;this.getCalendarInfo(n,t).subscribe((function(n){e.calendarInfoJson=n,console.log(e.calendarInfoJson)}))},n.prototype.getCalendarIndex=function(){return this.http.get("../../../assets/calendar-assets/index.json")},n.prototype.getCalendarInfo=function(n,t){return this.http.get("../../assets/calendar-assets/"+t+"-dates/"+t+"-"+n+".json")},n.prototype.ngAfterViewInit=function(){var n=this,t=document.querySelectorAll(".mat-calendar-next-button"),e=document.querySelectorAll(".mat-calendar-previous-button");t&&Array.from(t).forEach((function(t){n.renderer.listen(t,"click",(function(){console.log("clickity forward"),console.log(n.currentMonth),console.log(n.currentMilliMonth),n.currentMilliMonth=n.currentMilliMonth+n.oneMonthInMilli,n.monthSelected(n.currentMilliMonth)}))})),e&&Array.from(e).forEach((function(t){n.renderer.listen(t,"click",(function(){console.log("clickity back"),console.log(n.currentMonth),console.log(n.currentMilliMonth),n.currentMilliMonth=n.currentMilliMonth-n.oneMonthInMilli,n.monthSelected(n.currentMilliMonth)}))}))},n.prototype.ngOnDestroy=function(){this.calendarIndexSubscription&&!this.calendarIndexSubscription.closed&&this.calendarIndexSubscription.unsubscribe(),this.calendarInfoSubscription&&!this.calendarInfoSubscription.closed&&this.calendarInfoSubscription.unsubscribe()},n.prototype.monthSelected=function(n){var t=new Date(n).toString(),e=t.split(" ")[1],l=+t.split(" ")[3],a=this.convertMonthToNum(e);this.currentMilliMonth=this.convertDateToMilli(l+"-"+a+"-15"),console.log(this.currentMilliMonth),this.currentMonth=a,this.currentYear=l,console.log(this.currentMilliMonth,this.currentMonth,this.currentYear),this.checkMonthExist(a,l,this.calendarIndexJson)?(console.log("it is true"),this.setupCalendarInfo(a,l),this.doesMonthExist=!0):this.doesMonthExist=!1},n.prototype.checkMonthExist=function(n,t,e){return console.log("inside check month exist"),console.log(n,t,e),!(void 0===e.calendar_library[t]||void 0===e.calendar_library[t]||void 0===e.calendar_library[t][0][n]||void 0===e.calendar_library[t][0][n].doesExist||!e.calendar_library[t][0][n].doesExist)},n.prototype.convertDateToMilli=function(n){return new Date(n).getTime()},n.prototype.convertMilliToDate=function(n){return new Date(n)},n.prototype.convertMonthToNum=function(n){return this.monthArray[n]},n.prototype.dateChanged=function(n){console.log("date: "+n),console.log(this.calendarInfoJson);var t,e=this.convertMilliToDate(n);t=this.doesMonthExist&&this.checkDateExist(e)?this.getDateData():this.getRandomData(),this.displayCalendarInfo(t)},n.prototype.checkDateExist=function(n){console.log(n),console.log(typeof JSON.stringify(n)),console.log(JSON.stringify(n));var t=JSON.stringify(n).split("T")[0];return this.selectedMonth=JSON.stringify(t).split("-")[1],this.selectedDay=JSON.stringify(t).split("-")[2].substring(0,JSON.stringify(t).split("-")[2].length-1),this.selectedYear=JSON.stringify(t).split("-")[0].substring(3,JSON.stringify(t).split("-")[0].length),null!=this.calendarInfoJson&&this.calendarInfoJson.year_int===this.selectedYear&&this.calendarInfoJson.month_int===this.selectedMonth&&this.calendarInfoJson.calendar_info.hasOwnProperty(this.selectedDay)&&this.calendarInfoJson.calendar_info[this.selectedDay].doesDataExist?(console.log("correcto"),!0):(console.log("falsio"),!1)},n.prototype.getDateData=function(){return this.calendarInfoJson.calendar_info[this.selectedDay].main_info},n.prototype.getRandomData=function(){return this.createRandomExcuse()},n.prototype.displayCalendarInfo=function(n){var t=this;console.log(n),this.dialog.open(f,{panelClass:"custom-calendar-dialog-content",data:n}).afterClosed().subscribe((function(n){console.log("dialog closed"),console.log(t.selectedDate),t.selectedDate=null}))},n.prototype.createRandomExcuse=function(){var n=this.getRandomInt(this.excuseArray.length);return console.log(this.excuseArray[n]),this.excuseArray[n]},n.prototype.getRandomInt=function(n){return Math.floor(Math.random()*Math.floor(n))},n}(),f=function(){function n(n,t,e){this.paragraphConversion=n,this.calendarDialogRef=t,this.data=e,console.log(e)}return n.prototype.setupCalendarData=function(n){},n.prototype.onCloseClick=function(){this.calendarDialogRef.close()},n}(),m=e("t/Na"),y=e("o3x0"),M=e("Ip0R"),x=l.rb({encapsulation:0,styles:[r],data:{}});function I(n){return l.Nb(0,[l.Jb(402653184,1,{calendar:0}),(n()(),l.tb(1,0,null,null,8,"div",[["class","calendar-container"]],null,null,null,null,null)),(n()(),l.tb(2,0,null,null,4,"div",[["class","calendar-title-container"]],null,null,null,null,null)),(n()(),l.tb(3,0,null,null,3,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,c.b,c.a)),l.sb(4,180224,null,0,i.b,[l.k,s.g,[2,u.a]],null,null),(n()(),l.tb(5,0,null,0,1,"h1",[["class","calendar-title"]],null,null,null,null,null)),(n()(),l.Lb(-1,null,["Task Calendar"])),(n()(),l.tb(7,0,null,null,2,"div",[["class","calendar-wrapper"]],null,null,null,null,null)),(n()(),l.tb(8,0,null,null,1,"mat-calendar",[["class","mat-calendar"]],null,[[null,"selectedChange"],[null,"monthSelected"]],(function(n,t,e){var l=!0,a=n.component;return"selectedChange"===t&&(l=!1!==(a.selectedDate=e)&&l),"monthSelected"===t&&(l=!1!==a.monthSelected(e)&&l),"selectedChange"===t&&(l=!1!==a.dateChanged(e)&&l),l}),d.d,d.c)),l.sb(9,10141696,[[1,4],["calendar",4]],0,b.c,[b.h,[2,h.c],[2,h.g],l.h],{selected:[0,"selected"],minDate:[1,"minDate"],maxDate:[2,"maxDate"]},{selectedChange:"selectedChange",monthSelected:"monthSelected"})],(function(n,t){var e=t.component;n(t,9,0,e.selectedDate,e.minDate,e.maxDate)}),(function(n,t){n(t,3,0,l.Fb(t,4).disabled||null,"NoopAnimations"===l.Fb(t,4)._animationMode)}))}function C(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"app-calendar",[],null,null,null,I,x)),l.sb(1,4440064,null,0,D,[m.c,l.E,y.e],null,null)],(function(n,t){n(t,1,0)}),null)}var v=l.pb("app-calendar",D,C,{},{selectedDate:"selectedDate"},[]),k=l.rb({encapsulation:0,styles:[r],data:{}});function S(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Lb(1,null,[" "," "]))],null,(function(n,t){n(t,1,0,t.parent.context.$implicit.paragraph)}))}function J(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,0,"img",[["alt","Photo of a Shiba Inu"],["height","100%"],["width","100%"]],[[8,"src",4]],null,null,null,null))],null,(function(n,t){n(t,0,0,l.xb(1,"",t.parent.context.$implicit.img,""))}))}function w(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,5,"div",[["class","test-class"]],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,S)),l.sb(2,16384,null,0,M.k,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(3,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,J)),l.sb(5,16384,null,0,M.k,[l.P,l.M],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,2,0,"text"===t.context.$implicit.type),n(t,5,0,"img"===t.context.$implicit.type)}),null)}function O(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,4,"div",[["class","dialog-panel"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,3,"div",[["class","mat-dialog-content"],["mat-dialog-content",""]],null,null,null,null,null)),l.sb(2,16384,null,0,y.i,[],null,null),(n()(),l.ib(16777216,null,null,1,null,w)),l.sb(4,278528,null,0,M.j,[l.P,l.M,l.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,4,0,t.component.data)}),null)}function N(n){return l.Nb(0,[(n()(),l.ib(16777216,null,null,1,null,O)),l.sb(1,16384,null,0,M.k,[l.P,l.M],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,null!==t.component.data)}),null)}function _(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"calendar-dialog",[],null,null,null,N,k)),l.sb(1,49152,null,0,f,[p.a,y.k,y.a],null,null)],null,null)}var E=l.pb("calendar-dialog",f,_,{},{},[]),P=e("yWMr"),A=e("t68o"),Y=e("NcP4"),j=e("xYTU"),z=e("M2Lx"),T=e("9Bt9"),R=e("qAlS"),F=e("dWZg"),L=e("OBdK"),q=e("eDkP"),B=e("Fzqc"),W=e("4tE/"),K=e("mVsa"),Z=e("hR/J"),V=e("uGex"),$=e("v9Dh"),G=e("ZYjt"),H=e("4epT"),Q=e("OkvK"),U=e("wmQ5"),X=e("ZYCi"),nn=function(){return function(){}}(),tn=e("4c35"),en=e("Lwpp"),ln=e("y4qS"),an=e("6Wmm"),on=e("BgWK"),rn=e("u7R8"),cn=e("FVSy"),sn=e("de3e"),un=e("/dO6"),dn=e("LC5p"),bn=e("YhbO"),hn=e("jlZm"),pn=e("r43C"),gn=e("SMsm"),Dn=e("/VYK"),fn=e("seP3"),mn=e("b716"),yn=e("0/Q6"),Mn=e("Z+uX"),xn=e("Blfk"),In=e("9It4"),Cn=e("Nsh5"),vn=e("w+lc"),kn=e("kWGw"),Sn=e("vARd"),Jn=e("BHnd"),wn=e("La40"),On=e("8mMr"),Nn=e("J12g"),_n=e("y9Sd"),En=e("YSh2");e.d(t,"CalendarPageModuleNgFactory",(function(){return Pn}));var Pn=l.qb(a,[],(function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[o.a,v,P.a,A.a,d.b,d.a,Y.a,j.a,j.b,E]],[3,l.j],l.x]),l.Db(4608,M.m,M.l,[l.u,[2,M.A]]),l.Db(4608,z.b,z.b,[]),l.Db(4608,T.a,T.a,[M.d,l.z,R.e,T.c]),l.Db(135680,s.g,s.g,[l.z,F.a]),l.Db(4608,L.e,L.e,[l.M]),l.Db(4608,q.a,q.a,[q.g,q.c,l.j,q.f,q.d,l.r,l.z,M.d,B.b,[2,M.g]]),l.Db(5120,q.h,q.i,[q.a]),l.Db(5120,W.a,W.b,[q.a]),l.Db(4608,h.d,h.d,[]),l.Db(5120,y.c,y.d,[q.a]),l.Db(135680,y.e,y.e,[q.a,l.r,[2,M.g],[2,y.b],y.c,[3,y.e],q.c]),l.Db(4608,b.h,b.h,[]),l.Db(5120,b.a,b.b,[q.a]),l.Db(5120,K.c,K.j,[q.a]),l.Db(4608,h.c,Z.d,[h.h,Z.a]),l.Db(5120,V.a,V.b,[q.a]),l.Db(5120,$.a,$.b,[q.a]),l.Db(4608,G.e,h.e,[[2,h.i],[2,h.k]]),l.Db(5120,H.b,H.a,[[3,H.b]]),l.Db(5120,Q.b,Q.a,[[3,Q.b]]),l.Db(5120,U.b,U.a,[[3,U.b]]),l.Db(1073742336,M.c,M.c,[]),l.Db(1073742336,X.m,X.m,[[2,X.r],[2,X.k]]),l.Db(1073742336,nn,nn,[]),l.Db(1073742336,F.b,F.b,[]),l.Db(1073742336,z.c,z.c,[]),l.Db(1073742336,s.a,s.a,[]),l.Db(1073742336,T.b,T.b,[]),l.Db(1073742336,tn.g,tn.g,[]),l.Db(1073742336,B.a,B.a,[]),l.Db(1073742336,R.c,R.c,[]),l.Db(1073742336,en.e,en.e,[]),l.Db(1073742336,ln.o,ln.o,[]),l.Db(1073742336,L.c,L.c,[]),l.Db(1073742336,h.k,h.k,[[2,h.f],[2,G.f]]),l.Db(1073742336,h.r,h.r,[]),l.Db(1073742336,h.p,h.p,[]),l.Db(1073742336,h.n,h.n,[]),l.Db(1073742336,q.e,q.e,[]),l.Db(1073742336,W.c,W.c,[]),l.Db(1073742336,an.a,an.a,[]),l.Db(1073742336,on.c,on.c,[]),l.Db(1073742336,i.c,i.c,[]),l.Db(1073742336,rn.a,rn.a,[]),l.Db(1073742336,cn.d,cn.d,[]),l.Db(1073742336,sn.b,sn.b,[]),l.Db(1073742336,sn.a,sn.a,[]),l.Db(1073742336,un.b,un.b,[]),l.Db(1073742336,y.j,y.j,[]),l.Db(1073742336,b.i,b.i,[]),l.Db(1073742336,dn.a,dn.a,[]),l.Db(1073742336,bn.c,bn.c,[]),l.Db(1073742336,hn.a,hn.a,[]),l.Db(1073742336,h.l,h.l,[]),l.Db(1073742336,pn.b,pn.b,[]),l.Db(1073742336,gn.a,gn.a,[]),l.Db(1073742336,Dn.b,Dn.b,[]),l.Db(1073742336,fn.a,fn.a,[]),l.Db(1073742336,mn.a,mn.a,[]),l.Db(1073742336,yn.a,yn.a,[]),l.Db(1073742336,K.i,K.i,[]),l.Db(1073742336,K.f,K.f,[]),l.Db(1073742336,h.s,h.s,[]),l.Db(1073742336,h.m,h.m,[]),l.Db(1073742336,V.c,V.c,[]),l.Db(1073742336,$.c,$.c,[]),l.Db(1073742336,H.c,H.c,[]),l.Db(1073742336,Mn.a,Mn.a,[]),l.Db(1073742336,xn.a,xn.a,[]),l.Db(1073742336,In.a,In.a,[]),l.Db(1073742336,Cn.a,Cn.a,[]),l.Db(1073742336,vn.a,vn.a,[]),l.Db(1073742336,kn.b,kn.b,[]),l.Db(1073742336,kn.a,kn.a,[]),l.Db(1073742336,Sn.d,Sn.d,[]),l.Db(1073742336,Q.c,Q.c,[]),l.Db(1073742336,U.c,U.c,[]),l.Db(1073742336,Jn.a,Jn.a,[]),l.Db(1073742336,wn.a,wn.a,[]),l.Db(1073742336,On.a,On.a,[]),l.Db(1073742336,Nn.a,Nn.a,[]),l.Db(1073742336,Z.e,Z.e,[]),l.Db(1073742336,Z.c,Z.c,[]),l.Db(1073742336,_n.a,_n.a,[]),l.Db(1073742336,a,a,[]),l.Db(1024,X.i,(function(){return[[{path:"",component:D}]]}),[]),l.Db(256,un.a,{separatorKeyCodes:[En.f]},[]),l.Db(256,h.g,Z.b,[])])}))}}]);