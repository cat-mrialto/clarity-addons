(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Xo0":function(l,n,u){"use strict";var t=u("CcnG"),e=u("Ip0R"),a=u("ZYCi"),r=function(){function l(l){this.renderer=l,this.anchors=[],this.throttle=!1}return Object.defineProperty(l.prototype,"links",{set:function(l){var n=this;this.anchors=l.map(function(l){return"#"+l.fragment}),this.sub=l.changes.subscribe(function(){n.anchors=l.map(function(l){return"#"+l.fragment})})},enumerable:!0,configurable:!0}),l.prototype.handleEvent=function(){var l=this;this.scrollPosition=this.scrollable.scrollTop,this.throttle||window.requestAnimationFrame(function(){var n=l.findCurrentAnchor()||0;l.linkElements.forEach(function(u,t){l.renderer.setElementClass(u.nativeElement,"active",t===n)}),l.throttle=!1}),this.throttle=!0},l.prototype.findCurrentAnchor=function(){for(var l=this.anchors.length-1;l>=0;l--){var n=this.anchors[l];if(this.scrollable.querySelector(n)&&this.scrollable.querySelector(n).offsetTop<=this.scrollPosition)return l}},l.prototype.ngOnInit=function(){this.scrollable.addEventListener("scroll",this)},l.prototype.ngOnDestroy=function(){this.scrollable&&this.scrollable.removeEventListener("scroll",this),this.sub&&this.sub.unsubscribe()},l}(),i=function(){function l(l,n){var u=this;this.route=l,this.platformId=n,this.sub=this.route.fragment.subscribe(function(l){u.scrollToAnchor(l,!1)})}return l.prototype.ngOnInit=function(){this.scrollToAnchor(this.route.snapshot.fragment,!1)},l.prototype.scrollToAnchor=function(l,n){if(void 0===n&&(n=!0),l&&Object(e.B)(this.platformId)){var u=document.querySelector("#"+l);u&&u.scrollIntoView({behavior:n?"smooth":"instant",block:"start"})}},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l}();u("0G9f"),u.d(n,"a",function(){return o}),u.d(n,"b",function(){return d});var o=t.Ka({encapsulation:2,styles:[],data:{}});function s(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.eb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.description)})}function c(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,1,"span",[["class","bug bug-ng"]],null,null,null,null,null)),(l()(),t.Ma(1,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0],[8,"title",0]],null,null,null,null))],null,function(l,n){var u=n.component;l(n,1,0,t.Oa(1,"assets/images/bugs/badge_ng",u.ngInProgress?"_inprogress":"",".svg"),t.Oa(1,"",u.uiInProgress?"Development in Progress":"Angular",""),t.Oa(1,"",u.uiInProgress?"Development in Progress":"Angular",""))})}function f(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,6,"div",[["class","component-workstream-bugs"]],null,null,null,null,null)),(l()(),t.Ma(1,0,null,null,1,"span",[["class","bug bug-html"]],[[2,"hidden",null]],null,null,null,null)),(l()(),t.Ma(2,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0],[8,"title",0]],null,null,null,null)),(l()(),t.Ma(3,0,null,null,1,"span",[["class","bug bug-css"]],[[2,"hidden",null]],null,null,null,null)),(l()(),t.Ma(4,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0],[8,"title",0]],null,null,null,null)),(l()(),t.Ea(16777216,null,null,1,null,c)),t.La(6,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,6,0,u.ngDone||u.ngInProgress)},function(l,n){var u=n.component;l(n,1,0,!u.uiDone&&!u.uiInProgress),l(n,2,0,t.Oa(1,"assets/images/bugs/badge_html5",u.uiInProgress?"_inprogress":"",".svg"),t.Oa(1,"",u.uiInProgress?"Development in Progress":"HTML5",""),t.Oa(1,"",u.uiInProgress?"Development in Progress":"HTML5","")),l(n,3,0,!u.uiDone&&!u.uiInProgress),l(n,4,0,t.Oa(1,"assets/images/bugs/badge_css3",u.uiInProgress?"_inprogress":"",".svg"),t.Oa(1,"",u.uiInProgress?"Development in Progress":"CSS3",""),t.Oa(1,"",u.uiInProgress?"Development in Progress":"CSS3",""))})}function g(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),t.Ma(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","top"],["id","topTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Wa(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.La(2,671744,[[4,4],[1,4]],0,a.n,[a.l,a.a,e.l],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),t.La(3,1720320,null,2,a.m,[a.l,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.cb(603979776,3,{links:1}),t.cb(603979776,4,{linksWithHrefs:1}),(l()(),t.eb(-1,null,[" Examples & Code "]))],function(l,n){l(n,2,0,"top","."),l(n,3,0,"active")},function(l,n){l(n,1,0,t.Wa(n,2).target,t.Wa(n,2).href)})}function b(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),t.Ma(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","guidelines"],["id","guidelinesTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Wa(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.La(2,671744,[[6,4],[1,4]],0,a.n,[a.l,a.a,e.l],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),t.La(3,1720320,null,2,a.m,[a.l,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.cb(603979776,5,{links:1}),t.cb(603979776,6,{linksWithHrefs:1}),(l()(),t.eb(-1,null,[" Design Guidelines "]))],function(l,n){l(n,2,0,"guidelines","."),l(n,3,0,"active")},function(l,n){l(n,1,0,t.Wa(n,2).target,t.Wa(n,2).href)})}function h(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),t.Ma(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","top"],["id","topTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Wa(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.La(2,671744,[[8,4],[1,4]],0,a.n,[a.l,a.a,e.l],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),t.La(3,1720320,null,2,a.m,[a.l,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.cb(603979776,7,{links:1}),t.cb(603979776,8,{linksWithHrefs:1}),(l()(),t.eb(-1,null,[" Design Guidelines "]))],function(l,n){l(n,2,0,"top","."),l(n,3,0,"active")},function(l,n){l(n,1,0,t.Wa(n,2).target,t.Wa(n,2).href)})}function p(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),t.Ma(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","examples"],["id","guidelinesTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Wa(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.La(2,671744,[[10,4],[1,4]],0,a.n,[a.l,a.a,e.l],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),t.La(3,1720320,null,2,a.m,[a.l,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.cb(603979776,9,{links:1}),t.cb(603979776,10,{linksWithHrefs:1}),(l()(),t.eb(-1,null,[" Code & Examples "]))],function(l,n){l(n,2,0,"examples","."),l(n,3,0,"active")},function(l,n){l(n,1,0,t.Wa(n,2).target,t.Wa(n,2).href)})}function d(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,20,"div",[["class","dox-wrapper dox-header"]],[[2,"new-component-layout",null]],null,null,null,null)),(l()(),t.Ma(1,0,null,null,19,"section",[],null,null,null,null,null)),(l()(),t.Ma(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.eb(3,null,["",""])),(l()(),t.Ea(16777216,null,null,1,null,s)),t.La(5,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Ea(16777216,null,null,1,null,f)),t.La(7,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Ma(8,0,null,null,12,"div",[["class","dox-tabs"]],null,null,null,null,null)),(l()(),t.Ma(9,0,null,null,11,"ul",[["class","list-unstyled"]],null,null,null,null,null)),t.La(10,212992,null,2,r,[t.C],{scrollable:[0,"scrollable"]},null),t.cb(603979776,1,{links:1}),t.cb(603979776,2,{linkElements:1}),(l()(),t.Ea(16777216,null,null,1,null,g)),t.La(14,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Ea(16777216,null,null,1,null,b)),t.La(16,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Ea(16777216,null,null,1,null,h)),t.La(18,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Ea(16777216,null,null,1,null,p)),t.La(20,16384,null,0,e.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Ma(21,0,[["scrollable",1]],null,4,"section",[["class","dox-content"],["hash-listener",""]],[[4,"position",null]],null,null,null,null)),t.La(22,212992,null,0,i,[a.a,t.z],null,null),(l()(),t.Ma(23,0,null,null,2,"div",[["class","dox-content-wrapper"]],null,null,null,null,null)),(l()(),t.Ma(24,0,null,null,0,"a",[["id","top"]],null,null,null,null,null)),t.Va(null,0)],function(l,n){var u=n.component;l(n,5,0,u.description),l(n,7,0,!u.useNewLayout),l(n,10,0,t.Wa(n,21)),l(n,14,0,!u.useNewLayout),l(n,16,0,!u.useNewLayout),l(n,18,0,u.useNewLayout),l(n,20,0,u.useNewLayout),l(n,22,0)},function(l,n){var u=n.component;l(n,0,0,u.useNewLayout),l(n,3,0,u.title),l(n,21,0,"relative")})}},"0G9f":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.title="",this.newLayout=!1,this.ui=0,this.ng=0,this.description=""}return Object.defineProperty(l.prototype,"useNewLayout",{get:function(){return!!this.newLayout},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"uiInProgress",{get:function(){return 4<this.ui&&this.ui<20},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"uiDone",{get:function(){return this.ui>19},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"ngInProgress",{get:function(){return 4<this.ng&&this.ui<20},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"ngDone",{get:function(){return this.ng>19},enumerable:!0,configurable:!0}),l}()},JsA7:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){}},"N+3j":function(l,n,u){"use strict";for(var t=u("qwhO"),e=new Map,a=0,r=t.list;a<r.length;a++){var i=r[a];e.set(i.url,i)}u.d(n,"a",function(){return o});var o=function(){function l(l){this.ui=-1,this.ng=-1,this.title="",this.newLayout=!1;var n=e.get(l);this.populateComponentDetails(n.text,n.ui,n.ng,n.newLayout)}return l.prototype.populateComponentDetails=function(l,n,u,t){this.ui=n,this.ng=u,this.title=l,this.newLayout=t},l}()},kqXD:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){},a=u("zl1X"),r=u("+Xo0"),i=u("0G9f"),o=u("ZYCi"),s=u("Ip0R"),c=u("mrSG"),f=function(l){function n(){return l.call(this,"sidebarpage-layout")||this}return Object(c.b)(n,l),n}(u("N+3j").a),g=t.Ka({encapsulation:2,styles:[],data:{}});function b(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,18,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,r.b,r.a)),t.La(1,49152,null,0,i.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),t.Ma(2,0,null,0,16,"article",[],null,null,null,null,null)),(l()(),t.Ma(3,0,null,null,1,"h5",[["class","component-summary"],["id","generic-pager-header"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["This is a sidebar page layout"])),(l()(),t.eb(-1,null,[" Live-Demo: "])),(l()(),t.Ma(6,0,null,null,6,"a",[["class","nav-link"],["routerLink","/full-page-layouts/sidebarpage-layout"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Wa(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.La(7,671744,[[2,4]],0,o.n,[o.l,o.a,s.l],{routerLink:[0,"routerLink"]},null),t.La(8,1720320,null,2,o.m,[o.l,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.cb(603979776,1,{links:1}),t.cb(603979776,2,{linksWithHrefs:1}),(l()(),t.Ma(11,0,null,null,1,"span",[["class","nav-text"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["Sidebar Page Layout"])),(l()(),t.Ma(13,0,null,null,2,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),t.Ma(14,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.eb(-1,null,["Style"])),(l()(),t.Ma(16,0,null,null,2,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),t.Ma(17,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["Code & Examples"]))],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,7,0,"/full-page-layouts/sidebarpage-layout"),l(n,8,0,"active")},function(l,n){l(n,0,0,!0),l(n,6,0,t.Wa(n,7).target,t.Wa(n,7).href)})}var h=t.Ia("clr-sidebarpage-layout-demo-docu",f,function(l){return t.gb(0,[(l()(),t.Ma(0,0,null,null,1,"clr-sidebarpage-layout-demo-docu",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,b,g)),t.La(1,49152,null,0,f,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),p=u("KZfJ"),d=u("gIcY"),m=u("XPsC"),L=u("JsA7");u.d(n,"SidebarPageLayoutDemoModuleNgFactory",function(){return v});var v=t.Ja(e,[],function(l){return t.Ta([t.Ua(512,t.j,t.Z,[[8,[a.k,a.a,a.j,h]],[3,t.j],t.v]),t.Ua(4608,s.q,s.p,[t.s,[2,s.F]]),t.Ua(4608,p.Ab,p.Ab,[]),t.Ua(4608,d.r,d.r,[]),t.Ua(5120,p.qc,p.rc,[[3,p.qc]]),t.Ua(1073742336,s.b,s.b,[]),t.Ua(1073742336,p.W,p.W,[]),t.Ua(1073742336,p.Bb,p.Bb,[]),t.Ua(1073742336,p.Nc,p.Nc,[]),t.Ua(1073742336,p.P,p.P,[]),t.Ua(1073742336,p.d,p.d,[]),t.Ua(1073742336,p.R,p.R,[]),t.Ua(1073742336,p.n,p.n,[]),t.Ua(1073742336,p.Uc,p.Uc,[]),t.Ua(1073742336,p.Wc,p.Wc,[]),t.Ua(1073742336,p.I,p.I,[]),t.Ua(1073742336,p.S,p.S,[]),t.Ua(1073742336,d.o,d.o,[]),t.Ua(1073742336,d.e,d.e,[]),t.Ua(1073742336,p.Da,p.Da,[]),t.Ua(1073742336,p.Ib,p.Ib,[]),t.Ua(1073742336,p.ic,p.ic,[]),t.Ua(1073742336,p.B,p.B,[]),t.Ua(1073742336,p.Xa,p.Xa,[]),t.Ua(1073742336,p.ib,p.ib,[]),t.Ua(1073742336,p.s,p.s,[]),t.Ua(1073742336,p.Ha,p.Ha,[]),t.Ua(1073742336,p.Ca,p.Ca,[]),t.Ua(1073742336,p.i,p.i,[]),t.Ua(1073742336,p.j,p.j,[]),t.Ua(1073742336,p.Ya,p.Ya,[]),t.Ua(1073742336,p.q,p.q,[]),t.Ua(1073742336,p.Fa,p.Fa,[]),t.Ua(1073742336,p.Ka,p.Ka,[]),t.Ua(1073742336,p.sc,p.sc,[]),t.Ua(1073742336,p.db,p.db,[]),t.Ua(1073742336,p.nb,p.nb,[]),t.Ua(1073742336,p.Aa,p.Aa,[]),t.Ua(1073742336,p.Qa,p.Qa,[]),t.Ua(1073742336,p.gb,p.gb,[]),t.Ua(1073742336,p.La,p.La,[]),t.Ua(1073742336,p.rb,p.rb,[]),t.Ua(1073742336,p.a,p.a,[]),t.Ua(1073742336,m.a,m.a,[]),t.Ua(1073742336,o.o,o.o,[[2,o.t],[2,o.l]]),t.Ua(1073742336,L.a,L.a,[]),t.Ua(1073742336,e,e,[]),t.Ua(1024,o.j,function(){return[[{path:"",component:f}]]},[])])})}}]);