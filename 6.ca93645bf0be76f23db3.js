(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0m+x":function(l){l.exports=JSON.parse('{"Questions":{"Question_1":"What is this site?","Question_2":"Who are you?"},"Answers":{"Answer_1":"This is my personal site used for blogging and to display the projects that I\'ve been working on.","Answer_2":"I go by Ding or Dingie on the internet. I am a programmer who is passionate in studying decision-making and understanding behavior."},"Goals":{"Goal_1":"Prepare Portfolio for College Admission","Goal_2":"Run a Marathon/Obtain Optimal Running Weight","Goal_3":"Prepare the outline for my book on Decision-Making","Goal_4":"Reach/Stay in Grandmaster tier in League of Legends for Season 10"},"Goal_Answer":{"Goal_1_Answer":{"1":"Section 1 (10/22/19): Planning, Review, and Setup (Completed)","2":"Section 2 (11/16/19): Improve on Website features and re-design layout","3":"Section 3 (12/11/20): Research/Practice what it takes to be a successful Phd Candidate","4":"Section 4 (01/05/19): Dropping Fruit Game with Experience Replay and Deep Q-Learning (Turn based)","5":"Section 5 (01/30/20): RL with Convolutional Neural Network","6":"Section 6 (02/25/20): RL with Asynchronous Advantage Actor-Critic A3C","7":"Section 7 (03/21/20): RL with Recurrent Neural Network (TBD)/Long-Short Term Memory Neural Network","8":"Section 8 (04/15/20): Dive into Genetic Algorithm","9":"Section 9 (05/10/20): RL with TensorFlow/PyTorch/OpenAI(TBD)","10":"Section 10 (06/04/20): RL in Robotics","11":"Section 11 (06/29/20): RL with Gameboy Emulators","12":"Section 12 (07/24/20): Social RL","13":"Section 13 (08/18/20): RL with Unreal Engine","14":"Section 14 (09/12/20): Fixing Site and Submitting Graduate School Applications","15":"Section 15 (10/07/20): Fixing Site and Submitting Graduate School Applications"},"Goal_2_Answer":{"1":"11/30/2019: Current Run: 5 km, Current Weight: 163 lb","2":"12/31/2019: Run Goal: 10 km, Weight Goal: 157 lb","3":"01/31/2020: Run Goal: 15 km, Weight Goal: 152 lb","4":"02/29/2020: Run Goal: 20 km, Weight Goal: 147 lb","5":"03/01/2020: Race Sign Up Day","6":"03/31/2020: Run Goal: 30 km, Weight Goal: 142 lb","7":"04/30/2020: Run Goal: 35 km, Weight Goal: 137 lb","8":"05/23/2020: Race Day"},"Goal_3_Answer":{"1":"Research how to become a better writer","2":"List out the core concepts for the book","3":"Write a synopsis of each concept in the book","4":"Research each individual topic","5":"Create a chapter template detailing the location/flow of each chapter","6":"Study fallacies and errors in human judgement","7":"Complete 1 chapter (rough draft)"},"Goal_4_Answer":{"1":"Consistently hit Diamond 1 across multiple accounts","2":"Reach Diamond 1 50 league points","3":"Reach Master Promos (Diamond 1 100 league points)","4":"Reach Masters","5":"Consistently be able to stay in Masters","6":"Reach halfway between Masters and Grandmasters","7":"Reach Grandmasters","8":"Consistently be able to stay in Grandmasters"}}}')},MRg5:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),a=u("0m+x"),b=u("t/Na"),s=u("XlPw"),r=u("mrSG"),i=u("FFOo"),c=function(){function l(l,n){this.count=l,this.source=n}return l.prototype.call=function(l,n){return n.subscribe(new p(l,this.count,this.source))},l}(),p=function(l){function n(n,u,e){var t=l.call(this,n)||this;return t.count=u,t.source=e,t}return r.b(n,l),n.prototype.error=function(n){if(!this.isStopped){var u=this.source,e=this.count;if(0===e)return l.prototype.error.call(this,n);e>-1&&(this.count=e-1),u.subscribe(this._unsubscribeAndRecycle())}},n}(i.a),w=u("9Z1F"),G=function(){function l(l){this.http=l,this.apiUrl="https://glacial-inlet-56148.herokuapp.com/api/v1/movies/",this.httpOptions={headers:new b.g({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"})}}return l.prototype.getMovies=function(){return this.http.get(this.apiUrl).pipe((void 0===(l=1)&&(l=-1),function(n){return n.lift(new c(l,n))}),Object(w.a)(this.handleError));var l},l.prototype.handleError=function(l){var n;return n=l.error instanceof ErrorEvent?l.error.message:"Error Code: "+l.status+"\nMessage: "+l.message,window.alert(n),Object(s.a)(n)},l.ngInjectableDef=e.Rb({factory:function(){return new l(e.Sb(b.c))},token:l,providedIn:"root"}),l}(),h=function(){function l(l,n){var u=this;this.restApi=l,this.router=n,this.showFiller=!1,this.aboutMeQuestions=a.Questions,this.aboutMeAnswers=a.Answers,this.aboutMeGoals=a.Goals,this.aboutMeGoalAnswers=a.Goal_Answer,this.restApi.getMovies().subscribe((function(l){console.log(l),console.log(u.aboutMeGoalAnswers.Goal_1_Answer)}))}return l.prototype.ngOnInit=function(){},l}(),A=u("ZYCi"),D=e.rb({encapsulation:0,styles:[[".completed-content[_ngcontent-%COMP%]{text-decoration:line-through;color:red}"]],data:{}});function _(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["About"])),(l()(),e.tb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Lb(4,null,["",""])),(l()(),e.tb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(6,null,["",""])),(l()(),e.tb(7,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Lb(8,null,["",""])),(l()(),e.tb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(10,null,["",""])),(l()(),e.tb(11,0,null,null,86,"div",[],null,null,null,null,null)),(l()(),e.tb(12,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Goals for 2020"])),(l()(),e.tb(14,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Lb(15,null,["1. ",""])),(l()(),e.tb(16,0,null,null,2,"span",[["class","completed-content"]],null,null,null,null,null)),(l()(),e.tb(17,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(18,null,["• ",""])),(l()(),e.tb(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(20,null,["• ",""])),(l()(),e.tb(21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(22,null,["• ",""])),(l()(),e.tb(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(24,null,["• ",""])),(l()(),e.tb(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(26,null,["• ",""])),(l()(),e.tb(27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(28,null,["• ",""])),(l()(),e.tb(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(30,null,["• ",""])),(l()(),e.tb(31,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(32,null,["• ",""])),(l()(),e.tb(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(34,null,["• ",""])),(l()(),e.tb(35,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(36,null,["• ",""])),(l()(),e.tb(37,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(38,null,["• ",""])),(l()(),e.tb(39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(40,null,["• ",""])),(l()(),e.tb(41,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(42,null,["• ",""])),(l()(),e.tb(43,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(44,null,["• ",""])),(l()(),e.tb(45,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(46,null,["• ",""])),(l()(),e.tb(47,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Lb(48,null,["2. ",""])),(l()(),e.tb(49,0,null,null,2,"span",[["class","completed-content"]],null,null,null,null,null)),(l()(),e.tb(50,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(51,null,["• ",""])),(l()(),e.tb(52,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(53,null,["• ",""])),(l()(),e.tb(54,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(55,null,["• ",""])),(l()(),e.tb(56,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(57,null,["• ",""])),(l()(),e.tb(58,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(59,null,["• ",""])),(l()(),e.tb(60,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(61,null,["• ",""])),(l()(),e.tb(62,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(63,null,["• ",""])),(l()(),e.tb(64,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(65,null,["• ",""])),(l()(),e.tb(66,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Lb(67,null,["3. ",""])),(l()(),e.tb(68,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(69,null,["• ",""])),(l()(),e.tb(70,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(71,null,["• ",""])),(l()(),e.tb(72,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(73,null,["• ",""])),(l()(),e.tb(74,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(75,null,["• ",""])),(l()(),e.tb(76,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(77,null,["• ",""])),(l()(),e.tb(78,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(79,null,["• ",""])),(l()(),e.tb(80,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(81,null,["• ",""])),(l()(),e.tb(82,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Lb(83,null,["4. ",""])),(l()(),e.tb(84,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(85,null,["• ",""])),(l()(),e.tb(86,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(87,null,["• ",""])),(l()(),e.tb(88,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(89,null,["• ",""])),(l()(),e.tb(90,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(91,null,["• ",""])),(l()(),e.tb(92,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(93,null,["• ",""])),(l()(),e.tb(94,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(95,null,["• ",""])),(l()(),e.tb(96,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(97,null,["• ",""]))],null,(function(l,n){var u=n.component;l(n,4,0,u.aboutMeQuestions.Question_1),l(n,6,0,u.aboutMeAnswers.Answer_1),l(n,8,0,u.aboutMeQuestions.Question_2),l(n,10,0,u.aboutMeAnswers.Answer_2),l(n,15,0,u.aboutMeGoals.Goal_1),l(n,18,0,u.aboutMeGoalAnswers.Goal_1_Answer[1]),l(n,20,0,u.aboutMeGoalAnswers.Goal_1_Answer[2]),l(n,22,0,u.aboutMeGoalAnswers.Goal_1_Answer[3]),l(n,24,0,u.aboutMeGoalAnswers.Goal_1_Answer[4]),l(n,26,0,u.aboutMeGoalAnswers.Goal_1_Answer[5]),l(n,28,0,u.aboutMeGoalAnswers.Goal_1_Answer[6]),l(n,30,0,u.aboutMeGoalAnswers.Goal_1_Answer[7]),l(n,32,0,u.aboutMeGoalAnswers.Goal_1_Answer[8]),l(n,34,0,u.aboutMeGoalAnswers.Goal_1_Answer[9]),l(n,36,0,u.aboutMeGoalAnswers.Goal_1_Answer[10]),l(n,38,0,u.aboutMeGoalAnswers.Goal_1_Answer[11]),l(n,40,0,u.aboutMeGoalAnswers.Goal_1_Answer[12]),l(n,42,0,u.aboutMeGoalAnswers.Goal_1_Answer[13]),l(n,44,0,u.aboutMeGoalAnswers.Goal_1_Answer[14]),l(n,46,0,u.aboutMeGoalAnswers.Goal_1_Answer[15]),l(n,48,0,u.aboutMeGoals.Goal_2),l(n,51,0,u.aboutMeGoalAnswers.Goal_2_Answer[1]),l(n,53,0,u.aboutMeGoalAnswers.Goal_2_Answer[2]),l(n,55,0,u.aboutMeGoalAnswers.Goal_2_Answer[3]),l(n,57,0,u.aboutMeGoalAnswers.Goal_2_Answer[4]),l(n,59,0,u.aboutMeGoalAnswers.Goal_2_Answer[5]),l(n,61,0,u.aboutMeGoalAnswers.Goal_2_Answer[6]),l(n,63,0,u.aboutMeGoalAnswers.Goal_2_Answer[7]),l(n,65,0,u.aboutMeGoalAnswers.Goal_2_Answer[8]),l(n,67,0,u.aboutMeGoals.Goal_3),l(n,69,0,u.aboutMeGoalAnswers.Goal_3_Answer[1]),l(n,71,0,u.aboutMeGoalAnswers.Goal_3_Answer[2]),l(n,73,0,u.aboutMeGoalAnswers.Goal_3_Answer[3]),l(n,75,0,u.aboutMeGoalAnswers.Goal_3_Answer[4]),l(n,77,0,u.aboutMeGoalAnswers.Goal_3_Answer[5]),l(n,79,0,u.aboutMeGoalAnswers.Goal_3_Answer[6]),l(n,81,0,u.aboutMeGoalAnswers.Goal_3_Answer[7]),l(n,83,0,u.aboutMeGoals.Goal_4),l(n,85,0,u.aboutMeGoalAnswers.Goal_4_Answer[1]),l(n,87,0,u.aboutMeGoalAnswers.Goal_4_Answer[2]),l(n,89,0,u.aboutMeGoalAnswers.Goal_4_Answer[3]),l(n,91,0,u.aboutMeGoalAnswers.Goal_4_Answer[4]),l(n,93,0,u.aboutMeGoalAnswers.Goal_4_Answer[5]),l(n,95,0,u.aboutMeGoalAnswers.Goal_4_Answer[6]),l(n,97,0,u.aboutMeGoalAnswers.Goal_4_Answer[7])}))}function d(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"app-about-me",[],null,null,null,_,D)),e.sb(1,114688,null,0,h,[G,A.k],null,null)],(function(l,n){l(n,1,0)}),null)}var g=e.pb("app-about-me",h,d,{},{},[]),M=u("yWMr"),L=u("t68o"),m=u("zbXB"),f=u("NcP4"),y=u("xYTU"),S=u("Ip0R"),R=u("M2Lx"),k=u("9Bt9"),v=u("qAlS"),C=u("lLAP"),W=u("dWZg"),j=u("OBdK"),O=u("eDkP"),P=u("Fzqc"),N=u("4tE/"),Q=u("Wf4p"),x=u("o3x0"),F=u("jQLj"),I=u("mVsa"),T=u("hR/J"),E=u("uGex"),B=u("v9Dh"),U=u("ZYjt"),Y=u("4epT"),Z=u("OkvK"),z=u("wmQ5"),J=function(){return function(){}}(),K=u("4c35"),q=u("Lwpp"),V=u("y4qS"),X=u("6Wmm"),H=u("BgWK"),$=u("UodH"),ll=u("u7R8"),nl=u("FVSy"),ul=u("de3e"),el=u("/dO6"),tl=u("LC5p"),ol=u("YhbO"),al=u("jlZm"),bl=u("r43C"),sl=u("SMsm"),rl=u("/VYK"),il=u("seP3"),cl=u("b716"),pl=u("0/Q6"),wl=u("Z+uX"),Gl=u("Blfk"),hl=u("9It4"),Al=u("Nsh5"),Dl=u("w+lc"),_l=u("kWGw"),dl=u("vARd"),gl=u("BHnd"),Ml=u("La40"),Ll=u("8mMr"),ml=u("J12g"),fl=u("y9Sd"),yl=u("YSh2");u.d(n,"AboutMePageModuleNgFactory",(function(){return Sl}));var Sl=e.qb(t,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[o.a,g,M.a,L.a,m.b,m.a,f.a,y.a,y.b]],[3,e.j],e.x]),e.Db(4608,S.m,S.l,[e.u,[2,S.A]]),e.Db(4608,R.b,R.b,[]),e.Db(4608,k.a,k.a,[S.d,e.z,v.e,k.c]),e.Db(135680,C.g,C.g,[e.z,W.a]),e.Db(4608,j.e,j.e,[e.M]),e.Db(4608,O.a,O.a,[O.g,O.c,e.j,O.f,O.d,e.r,e.z,S.d,P.b,[2,S.g]]),e.Db(5120,O.h,O.i,[O.a]),e.Db(5120,N.a,N.b,[O.a]),e.Db(4608,Q.d,Q.d,[]),e.Db(5120,x.c,x.d,[O.a]),e.Db(135680,x.e,x.e,[O.a,e.r,[2,S.g],[2,x.b],x.c,[3,x.e],O.c]),e.Db(4608,F.h,F.h,[]),e.Db(5120,F.a,F.b,[O.a]),e.Db(5120,I.c,I.j,[O.a]),e.Db(4608,Q.c,T.d,[Q.h,T.a]),e.Db(5120,E.a,E.b,[O.a]),e.Db(5120,B.a,B.b,[O.a]),e.Db(4608,U.e,Q.e,[[2,Q.i],[2,Q.k]]),e.Db(5120,Y.b,Y.a,[[3,Y.b]]),e.Db(5120,Z.b,Z.a,[[3,Z.b]]),e.Db(5120,z.b,z.a,[[3,z.b]]),e.Db(1073742336,S.c,S.c,[]),e.Db(1073742336,A.m,A.m,[[2,A.r],[2,A.k]]),e.Db(1073742336,J,J,[]),e.Db(1073742336,W.b,W.b,[]),e.Db(1073742336,R.c,R.c,[]),e.Db(1073742336,C.a,C.a,[]),e.Db(1073742336,k.b,k.b,[]),e.Db(1073742336,K.g,K.g,[]),e.Db(1073742336,P.a,P.a,[]),e.Db(1073742336,v.c,v.c,[]),e.Db(1073742336,q.e,q.e,[]),e.Db(1073742336,V.o,V.o,[]),e.Db(1073742336,j.c,j.c,[]),e.Db(1073742336,Q.k,Q.k,[[2,Q.f],[2,U.f]]),e.Db(1073742336,Q.r,Q.r,[]),e.Db(1073742336,Q.p,Q.p,[]),e.Db(1073742336,Q.n,Q.n,[]),e.Db(1073742336,O.e,O.e,[]),e.Db(1073742336,N.c,N.c,[]),e.Db(1073742336,X.a,X.a,[]),e.Db(1073742336,H.c,H.c,[]),e.Db(1073742336,$.c,$.c,[]),e.Db(1073742336,ll.a,ll.a,[]),e.Db(1073742336,nl.d,nl.d,[]),e.Db(1073742336,ul.b,ul.b,[]),e.Db(1073742336,ul.a,ul.a,[]),e.Db(1073742336,el.b,el.b,[]),e.Db(1073742336,x.j,x.j,[]),e.Db(1073742336,F.i,F.i,[]),e.Db(1073742336,tl.a,tl.a,[]),e.Db(1073742336,ol.c,ol.c,[]),e.Db(1073742336,al.a,al.a,[]),e.Db(1073742336,Q.l,Q.l,[]),e.Db(1073742336,bl.b,bl.b,[]),e.Db(1073742336,sl.a,sl.a,[]),e.Db(1073742336,rl.b,rl.b,[]),e.Db(1073742336,il.a,il.a,[]),e.Db(1073742336,cl.a,cl.a,[]),e.Db(1073742336,pl.a,pl.a,[]),e.Db(1073742336,I.i,I.i,[]),e.Db(1073742336,I.f,I.f,[]),e.Db(1073742336,Q.s,Q.s,[]),e.Db(1073742336,Q.m,Q.m,[]),e.Db(1073742336,E.c,E.c,[]),e.Db(1073742336,B.c,B.c,[]),e.Db(1073742336,Y.c,Y.c,[]),e.Db(1073742336,wl.a,wl.a,[]),e.Db(1073742336,Gl.a,Gl.a,[]),e.Db(1073742336,hl.a,hl.a,[]),e.Db(1073742336,Al.a,Al.a,[]),e.Db(1073742336,Dl.a,Dl.a,[]),e.Db(1073742336,_l.b,_l.b,[]),e.Db(1073742336,_l.a,_l.a,[]),e.Db(1073742336,dl.d,dl.d,[]),e.Db(1073742336,Z.c,Z.c,[]),e.Db(1073742336,z.c,z.c,[]),e.Db(1073742336,gl.a,gl.a,[]),e.Db(1073742336,Ml.a,Ml.a,[]),e.Db(1073742336,Ll.a,Ll.a,[]),e.Db(1073742336,ml.a,ml.a,[]),e.Db(1073742336,T.e,T.e,[]),e.Db(1073742336,T.c,T.c,[]),e.Db(1073742336,fl.a,fl.a,[]),e.Db(1073742336,t,t,[]),e.Db(1024,A.i,(function(){return[[{path:"",component:h}]]}),[]),e.Db(256,el.a,{separatorKeyCodes:[yl.f]},[]),e.Db(256,Q.g,T.b,[])])}))}}]);