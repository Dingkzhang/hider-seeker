(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dLlj:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),u=function(){return function(){}}(),e=t("pMnS"),r=t("Ip0R"),i=t("iJCc"),c=t("CMd7"),s=function(){function n(n,l,t){this.http=n,this.jsonConversion=l,this.paragraphConversion=t,this.currentStoryInfo=null,this.currentMainContent=null,this.setupBlogIndex()}return n.prototype.ngOnInit=function(){},n.prototype.ngOnDestroy=function(){this.blogIndexSubscription.unsubscribe(),this.blogInfoSubscription.unsubscribe()},n.prototype.setupBlogIndex=function(){var n=this;this.blogIndexSubscription=this.getBlogIndex().subscribe(function(l){n.blogIndexInfo=l,n.currentBlogIndex=n.blogIndexInfo.total_index,console.log(n.blogIndexInfo),n.setupBlogPageInfo(n.blogIndexInfo.total_index)})},n.prototype.getBlogIndex=function(){return this.http.get("../../../assets/blog-assets/index.json")},n.prototype.setupBlogPageInfo=function(n){var l=this;console.log(n),this.currentBlogIndex=n,this.blogInfoSubscription=this.getBlogPageInfo(n).subscribe(function(n){l.currentStoryInfo=n,l.currentMainContent=l.paragraphConversion.convertParagraphArray(n.main_info),console.log(l.currentStoryInfo)})},n.prototype.getBlogPageInfo=function(n){return this.http.get("../../../assets/blog-assets/stories/story_"+n+".json")},n.prototype.nextStory=function(){console.log(this.currentBlogIndex),console.log(this.blogIndexInfo.total_index),this.setupBlogPageInfo(this.currentBlogIndex<this.blogIndexInfo.total_index?this.currentBlogIndex+1:1)},n.prototype.prevStory=function(){console.log(this.currentBlogIndex),this.setupBlogPageInfo(this.currentBlogIndex>1?this.currentBlogIndex-1:this.blogIndexInfo.total_index)},n.prototype.defaultStory=function(){this.setupBlogPageInfo(this.blogIndexInfo.total_index)},n}(),g=t("t/Na"),b=o.qb({encapsulation:0,styles:[[".blog-content[_ngcontent-%COMP%]{max-width:500px;margin:auto}"]],data:{}});function a(n){return o.Hb(0,[(n()(),o.sb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Fb(1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function f(n){return o.Hb(0,[(n()(),o.sb(0,0,null,null,12,"div",[["class","blog-content"]],null,null,null,null,null)),(n()(),o.sb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o.Fb(2,null,["",""])),(n()(),o.sb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Fb(4,null,[""," ",""])),(n()(),o.jb(16777216,null,null,1,null,a)),o.rb(6,278528,null,0,r.j,[o.R,o.O,o.u],{ngForOf:[0,"ngForOf"]},null),(n()(),o.sb(7,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.nextStory()&&o),o},null,null)),(n()(),o.Fb(-1,null,["Next"])),(n()(),o.sb(9,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.prevStory()&&o),o},null,null)),(n()(),o.Fb(-1,null,["Previous"])),(n()(),o.sb(11,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.defaultStory()&&o),o},null,null)),(n()(),o.Fb(-1,null,["Most Recent"]))],function(n,l){n(l,6,0,l.component.currentMainContent)},function(n,l){var t=l.component;n(l,2,0,t.currentStoryInfo.title),n(l,4,0,t.currentStoryInfo.date,t.currentStoryInfo.description)})}function p(n){return o.Hb(0,[(n()(),o.jb(16777216,null,null,1,null,f)),o.rb(1,16384,null,0,r.k,[o.R,o.O],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,null!==l.component.currentStoryInfo)},null)}function I(n){return o.Hb(0,[(n()(),o.sb(0,0,null,null,1,"app-blog-landing",[],null,null,null,p,b)),o.rb(1,245760,null,0,s,[g.c,i.a,c.a],null,null)],function(n,l){n(l,1,0)},null)}var d=o.ob("app-blog-landing",s,I,{},{},[]),h=t("ZYCi"),x=function(){return function(){}}();t.d(l,"BlogPageModuleNgFactory",function(){return y});var y=o.pb(u,[],function(n){return o.yb([o.zb(512,o.j,o.eb,[[8,[e.a,d]],[3,o.j],o.z]),o.zb(4608,r.m,r.l,[o.w,[2,r.v]]),o.zb(1073742336,r.c,r.c,[]),o.zb(1073742336,h.m,h.m,[[2,h.s],[2,h.k]]),o.zb(1073742336,x,x,[]),o.zb(1073742336,u,u,[]),o.zb(1024,h.i,function(){return[[{path:"",component:s}]]},[])])})}}]);