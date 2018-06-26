(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{lIAz:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),a=function(){},t=e("zl1X"),c=e("+Xo0"),i=e("0G9f"),s=e("8KBR"),o=e("5lT0"),r=e("QkwE"),d=e("vAyd"),g=e("mrSG"),p='\n<clr-paged-search-result-list [clrItems]="pagedItems"\n                              [clrPage]="currentPage"\n                              [clrPageSize]="pageSize"\n                              [clrTotalItems]="allItems.length"\n                              (clrPageChange)="onPageChanged($event)">\n    <ng-template let-item="item">\n        <div class="col-xs-12">\n            <div class="card">\n                <div class="card-header">\n                    {{item}}\n                </div>\n                <div class="card-block">\n                    <div class="card-text">\n                        This is an example card.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</clr-paged-search-result-list>\n            \n',m=function(l){function n(){var n=l.call(this,"paged-search-result-list")||this;return n.htmlExample=p,n.allItems=["Nelson","Graham","Olene","Dorian","Nidia","Keenan","Luna","Letisha","Lenny","Jeana","Alica","Sheridan","Georgia","Brad","Ellen","Brynn","Roslyn","Rhona","Marcella","Sibyl","Shenika","Desirae","Beverly","Johnson","Kaitlin","Lucius","Darla","Debby","Lottie","Genoveva"],n.pageSize=3,n.pagedItems=[],n.currentPage=1,n}return Object(g.b)(n,l),n.prototype.onPageChanged=function(l){var n=this;this.currentPage=l;var e=(l-1)*this.pageSize,u=Math.min(e+this.pageSize-1,this.allItems.length-1);setTimeout(function(){return n.pagedItems=n.allItems.slice(e,u+1)},0)},n}(e("N+3j").a),b=u.Ka({encapsulation:2,styles:[],data:{}});function h(l){return u.gb(0,[(l()(),u.Ma(0,0,null,null,6,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),u.Ma(1,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.Ma(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u.eb(3,null,[" "," "])),(l()(),u.Ma(4,0,null,null,2,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),u.Ma(5,0,null,null,1,"div",[["class","card-text"]],null,null,null,null,null)),(l()(),u.eb(-1,null,[" This is an example card. "]))],null,function(l,n){l(n,3,0,n.context.item)})}function U(l){return u.gb(0,[(l()(),u.Ma(0,0,null,null,60,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,c.b,c.a)),u.La(1,49152,null,0,i.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),u.Ma(2,0,null,0,58,"article",[],null,null,null,null,null)),(l()(),u.Ma(3,0,null,null,1,"h5",[["class","component-summary"],["id","search-result-list-header"]],null,null,null,null,null)),(l()(),u.eb(-1,null,["The Paged Search Result List component is a basic component used to display a list of generic data including a pager above and below the list."])),(l()(),u.Ma(5,0,null,null,4,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),u.Ma(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.eb(-1,null,["Style"])),(l()(),u.Ma(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.eb(-1,null,["You can style the list any way you want - this component allows you to use a custom template to show all items of your list. The custom template can range from a single line representing text to one or more completely new angular components."])),(l()(),u.Ma(10,0,null,null,50,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),u.Ma(11,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),u.eb(-1,null,["Code & Examples"])),(l()(),u.eb(-1,null,[" To set a template for each item of your list simply add a "])),(l()(),u.Ma(14,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.eb(-1,null,["ng-template"])),(l()(),u.eb(-1,null,[" inside the "])),(l()(),u.Ma(17,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.eb(-1,null,["clr-paged-search-result-list"])),(l()(),u.eb(-1,null,[". By defining "])),(l()(),u.Ma(20,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.eb(-1,null,['let-item="item"'])),(l()(),u.eb(-1,null,[" on your "])),(l()(),u.Ma(23,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.eb(-1,null,["ng-template"])),(l()(),u.eb(-1,null,[" you can get the context of each individual item. "])),(l()(),u.Ma(26,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.eb(-1,null,[" Following interactions are available: "])),(l()(),u.Ma(28,0,null,null,25,"ul",[],null,null,null,null,null)),(l()(),u.Ma(29,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.eb(-1,null,[" To show items add a "])),(l()(),u.Ma(31,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.eb(-1,null,["[clrItems]"])),(l()(),u.eb(-1,null,[" input to the component. "])),(l()(),u.Ma(34,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.eb(-1,null,[" To set the current page add a "])),(l()(),u.Ma(36,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.eb(-1,null,["[clrPage]"])),(l()(),u.eb(-1,null,[" input to the component. "])),(l()(),u.Ma(39,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.eb(-1,null,[" To define the page size add a "])),(l()(),u.Ma(41,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.eb(-1,null,["[clrPageSize]"])),(l()(),u.eb(-1,null,[" input to the component. "])),(l()(),u.Ma(44,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.eb(-1,null,[" To define the number of total items add a "])),(l()(),u.Ma(46,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.eb(-1,null,["[clrTotalItems]"])),(l()(),u.eb(-1,null,[" input to the component. "])),(l()(),u.Ma(49,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.eb(-1,null,[" To react to page changes, bind to the event "])),(l()(),u.Ma(51,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.eb(-1,null,["(clrPageChange)"])),(l()(),u.eb(-1,null,[". "])),(l()(),u.Ma(54,0,null,null,4,"div",[["class","margin-top-24"]],null,null,null,null,null)),(l()(),u.Ma(55,0,null,null,3,"clr-paged-search-result-list",[],null,[[null,"clrPageChange"]],function(l,n,e){var u=!0;return"clrPageChange"===n&&(u=!1!==l.component.onPageChanged(e)&&u),u},s.f,s.b)),u.La(56,49152,null,1,o.d,[],{pageSize:[0,"pageSize"],currentPage:[1,"currentPage"],totalItems:[2,"totalItems"],items:[3,"items"]},{pageChange:"clrPageChange"}),u.cb(335544320,1,{itemTemplate:0}),(l()(),u.Ea(0,[[1,2]],null,0,null,h)),(l()(),u.Ma(59,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),u.La(60,4243456,null,0,d.a,[],{code:[0,"code"]},null)],function(l,n){var e=n.component;l(n,1,0,e.title,e.newLayout,e.ui,e.ng),l(n,56,0,e.pageSize,e.currentPage,e.allItems.length,e.pagedItems),l(n,60,0,e.htmlExample)},function(l,n){l(n,0,0,!0)})}var v=u.Ia("clr-search-result-list-demo",m,function(l){return u.gb(0,[(l()(),u.Ma(0,0,null,null,1,"clr-search-result-list-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,U,b)),u.La(1,49152,null,0,m,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),M=e("Ip0R"),f=e("KZfJ"),y=e("gIcY"),I=e("XPsC"),P=e("ZYCi"),w=e("JsA7");e.d(n,"PagedSearchResultListDemoModuleNgFactory",function(){return S});var S=u.Ja(a,[],function(l){return u.Ta([u.Ua(512,u.j,u.Z,[[8,[t.k,t.a,t.j,v]],[3,u.j],u.v]),u.Ua(4608,M.q,M.p,[u.s,[2,M.F]]),u.Ua(4608,f.Ab,f.Ab,[]),u.Ua(4608,y.r,y.r,[]),u.Ua(5120,f.qc,f.rc,[[3,f.qc]]),u.Ua(1073742336,M.b,M.b,[]),u.Ua(1073742336,f.W,f.W,[]),u.Ua(1073742336,f.Bb,f.Bb,[]),u.Ua(1073742336,f.Nc,f.Nc,[]),u.Ua(1073742336,f.P,f.P,[]),u.Ua(1073742336,f.d,f.d,[]),u.Ua(1073742336,f.R,f.R,[]),u.Ua(1073742336,f.n,f.n,[]),u.Ua(1073742336,f.Uc,f.Uc,[]),u.Ua(1073742336,f.Wc,f.Wc,[]),u.Ua(1073742336,f.I,f.I,[]),u.Ua(1073742336,f.S,f.S,[]),u.Ua(1073742336,y.o,y.o,[]),u.Ua(1073742336,y.e,y.e,[]),u.Ua(1073742336,f.Da,f.Da,[]),u.Ua(1073742336,f.Ib,f.Ib,[]),u.Ua(1073742336,f.ic,f.ic,[]),u.Ua(1073742336,f.B,f.B,[]),u.Ua(1073742336,f.Xa,f.Xa,[]),u.Ua(1073742336,f.ib,f.ib,[]),u.Ua(1073742336,f.s,f.s,[]),u.Ua(1073742336,f.Ha,f.Ha,[]),u.Ua(1073742336,f.Ca,f.Ca,[]),u.Ua(1073742336,f.i,f.i,[]),u.Ua(1073742336,f.j,f.j,[]),u.Ua(1073742336,f.Ya,f.Ya,[]),u.Ua(1073742336,f.q,f.q,[]),u.Ua(1073742336,f.Fa,f.Fa,[]),u.Ua(1073742336,f.Ka,f.Ka,[]),u.Ua(1073742336,f.sc,f.sc,[]),u.Ua(1073742336,f.db,f.db,[]),u.Ua(1073742336,f.nb,f.nb,[]),u.Ua(1073742336,f.Aa,f.Aa,[]),u.Ua(1073742336,f.Qa,f.Qa,[]),u.Ua(1073742336,f.gb,f.gb,[]),u.Ua(1073742336,f.La,f.La,[]),u.Ua(1073742336,f.rb,f.rb,[]),u.Ua(1073742336,f.a,f.a,[]),u.Ua(1073742336,I.a,I.a,[]),u.Ua(1073742336,P.o,P.o,[[2,P.t],[2,P.l]]),u.Ua(1073742336,w.a,w.a,[]),u.Ua(1073742336,o.i,o.i,[]),u.Ua(1073742336,o.g,o.g,[]),u.Ua(1073742336,o.e,o.e,[]),u.Ua(1073742336,o.c,o.c,[]),u.Ua(1073742336,o.a,o.a,[]),u.Ua(1073742336,a,a,[]),u.Ua(1024,P.j,function(){return[[{path:"",component:m}]]},[])])})}}]);