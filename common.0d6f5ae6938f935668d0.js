(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{CMd7:function(n,r,o){"use strict";o.d(r,"a",function(){return e});var t=o("CcnG"),e=function(){function n(){}return n.prototype.convertParagraphArray=function(n){var r=[];for(var o in n)for(var t in n[o])r.push(n[o][t]);return console.log(r),r},n.prototype.convertJsonArray=function(n){var r=[];for(var o in n)r.push(n[o]);return console.log(r),r},n.ngInjectableDef=t.Tb({factory:function(){return new n},token:n,providedIn:"root"}),n}()},iJCc:function(n,r,o){"use strict";o.d(r,"a",function(){return c});var t=o("CMd7"),e=o("CcnG"),c=function(){function n(n){this.paragraphConversion=n}return n.prototype.jsonObjectToArray=function(n){return Object.keys(n).map(function(r){return{type:r,value:n[r]}})},n.ngInjectableDef=e.Tb({factory:function(){return new n(e.Ub(t.a))},token:n,providedIn:"root"}),n}()}}]);