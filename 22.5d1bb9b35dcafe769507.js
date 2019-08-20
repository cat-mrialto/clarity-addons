(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"1c1o":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("zl1X"),b=u("pMnS"),i=u("8KBR"),s=u("+Xo0"),a=u("0G9f"),c=u("QkwE"),r=u("vAyd"),d=u("gIcY"),p=u("xLE1"),g=u("6/Z3"),f=u("Ip0R"),m=u("mrSG"),h=u("N+3j"),E='\n\n<button class="btn" (click)="openNotify(example, { timeout: clrExampleTimeout, notificationType: clrExampleType,\n    dismissable: clrExampleDismissable, progressbar: clrExampleProgressbar })">Show Notification</button>\n<ng-template #example>\n    <ng-container clr-notification-message>\n        Some Information\n        <button class="btn btn-info-outline" (click)="showAlert()">Show Alert</button>\n    </ng-container>\n</ng-template>\n',v='\nonClose(): void {\n    console.log("notification closed");\n}\n\nopenNotify(content, options): void {\n    this.notificationService.openNotification(content, options).result.then(this.onClose);\n}\n',O='\n<button class="btn" (click)="openString()">Show Notification from String</button>\n',y='\nopenString(): void {\n    this.notificationService.openNotification("This is a string message", {progressbar: true, dismissable: true});\n}\n',C=function(l){function n(n){var u=l.call(this,"notification")||this;return u.notificationService=n,u.codeExample=E,u.codeExampleTS=v,u.codeExampleString=O,u.codeExampleStringTS=y,u.clrExampleTimeout=2e3,u.clrExampleType="info",u.clrExampleDismissable=!0,u.clrExampleProgressbar=!0,u}return Object(m.c)(n,l),n.prototype.onClose=function(){console.log("notification closed")},n.prototype.openNotify=function(l,n){this.notificationService.openNotification(l,n).result.then(this.onClose)},n.prototype.openString=function(){this.notificationService.openNotification("This is a string message",{progressbar:!0,dismissable:!0})},n.prototype.log=function(){console.log("log from notification")},n}(h.a),w=e.sb({encapsulation:0,styles:[["#clr-type[_ngcontent-%COMP%]{width:160px}"]],data:{}});function G(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Danger "]))],null,null)}function x(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Warning "]))],null,null)}function T(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Info "]))],null,null)}function S(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Success "]))],null,null)}function k(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Complex notification "])),(l()(),e.ub(2,0,null,null,1,"button",[["class","btn"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.log()&&e),e},null,null)),(l()(),e.Ob(-1,null,["Log console"]))],null,null)}function N(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,222,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,s.b,s.a)),e.tb(1,49152,null,0,a.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.ub(2,0,null,0,220,"article",[],null,null,null,null,null)),(l()(),e.ub(3,0,null,null,1,"h5",[["class","component-summary"],["id","generic-pager-header"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Notifications are shown to inform the user of a particular event or completed action."])),(l()(),e.ub(5,0,null,null,124,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Notification Types"])),(l()(),e.ub(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" There are four different sub-types of notifications: error, warning, info, and success. "])),(l()(),e.ub(10,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),e.ub(11,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Error"])),(l()(),e.ub(13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Reserved for errors, malfunctions, as well as critical issues like license expiration. "])),(l()(),e.ub(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(16,0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openNotify(e.Gb(l,18),{timeout:3e3,notificationType:"danger",dismissable:!1,progressbar:!1})&&t),t},null,null)),(l()(),e.Ob(-1,null,["Show Error Notification"])),(l()(),e.kb(0,[["exampleDanger",2]],null,0,null,G)),(l()(),e.ub(19,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),e.ub(20,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Warning"])),(l()(),e.ub(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Reserved for warnings: a message that needs the user attention and aknowledgment but might not cause errors. "])),(l()(),e.ub(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(25,0,null,null,1,"button",[["class","btn btn-warning"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openNotify(e.Gb(l,27),{timeout:3e3,notificationType:"warning",dismissable:!1,progressbar:!1})&&t),t},null,null)),(l()(),e.Ob(-1,null,["Show Warning Notification"])),(l()(),e.kb(0,[["exampleWarning",2]],null,0,null,x)),(l()(),e.ub(28,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),e.ub(29,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Info"])),(l()(),e.ub(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Provides info to users in context. Shouldn\u2019t be overused to replace regular content. "])),(l()(),e.ub(33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(34,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openNotify(e.Gb(l,36),{timeout:3e3,notificationType:"info",dismissable:!1,progressbar:!1})&&t),t},null,null)),(l()(),e.Ob(-1,null,["Show Info Notification"])),(l()(),e.kb(0,[["exampleInfo",2]],null,0,null,T)),(l()(),e.ub(37,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),e.ub(38,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Success"])),(l()(),e.ub(40,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Reserved to provide to a static persistent success message. "])),(l()(),e.ub(42,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(43,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openNotify(e.Gb(l,45),{timeout:3e3,notificationType:"success",dismissable:!1,progressbar:!1})&&t),t},null,null)),(l()(),e.Ob(-1,null,["Show Success Notification"])),(l()(),e.kb(0,[["exampleSuccess",2]],null,0,null,S)),(l()(),e.ub(46,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Angular Component"])),(l()(),e.ub(48,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Notifications will be opened by a service, not by including the notification component in the markup. That way it's possible to use the same markup for multiple notification instances. "])),(l()(),e.ub(50,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" The service will be called with two parameters. The first one defines the content of the notification as a template or string. The second parameter defines the options for the notification, described below. "])),(l()(),e.ub(52,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" The service will return a "])),(l()(),e.ub(54,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["ClrNotificationRef"])),(l()(),e.Ob(-1,null,[" containing a promise "])),(l()(),e.ub(57,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["result"])),(l()(),e.Ob(-1,null,[" which will get resolved after the notification was closed. "])),(l()(),e.ub(60,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Summary of Options"])),(l()(),e.ub(62,0,null,null,67,"table",[["class","table"]],null,null,null,null,null)),(l()(),e.ub(63,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.ub(64,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ub(65,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Input"])),(l()(),e.ub(67,0,null,null,1,"th",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Values"])),(l()(),e.ub(69,0,null,null,1,"th",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default"])),(l()(),e.ub(71,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Effect"])),(l()(),e.ub(73,0,null,null,56,"tbody",[],null,null,null,null,null)),(l()(),e.ub(74,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(75,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(76,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["timeout"])),(l()(),e.ub(78,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: Number"])),(l()(),e.ub(80,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: 2000"])),(l()(),e.ub(82,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Javascript Number"])),(l()(),e.ub(84,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["2000"])),(l()(),e.ub(86,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Time in ms when the notification will be closed automatically. 0 means it stays open until user closes it manually."])),(l()(),e.ub(88,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(89,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(90,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["notificationType"])),(l()(),e.ub(92,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: String"])),(l()(),e.ub(94,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['Default: "info"'])),(l()(),e.ub(96,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['"info", "warning", "success", "danger"'])),(l()(),e.ub(98,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['"info"'])),(l()(),e.ub(100,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Defines the type of notification. "])),(l()(),e.ub(102,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(103,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(104,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["dismissable"])),(l()(),e.ub(106,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: Boolean"])),(l()(),e.ub(108,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: false"])),(l()(),e.ub(110,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["true, false"])),(l()(),e.ub(112,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["false"])),(l()(),e.ub(114,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Defines whether the notification is closable by the user manually. "])),(l()(),e.ub(116,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(117,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(118,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["progressbar"])),(l()(),e.ub(120,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: Boolean"])),(l()(),e.ub(122,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: false"])),(l()(),e.ub(124,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["true, false"])),(l()(),e.ub(126,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["false"])),(l()(),e.ub(128,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Defines whether the progressbar (until notification closes automatically) will be shown. "])),(l()(),e.ub(130,0,null,null,92,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.ub(131,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Code & Examples"])),(l()(),e.ub(133,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Notification from String"])),(l()(),e.ub(135,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["For simple messages a string can be provided to the notification service."])),(l()(),e.ub(137,0,null,null,1,"clr-code-snippet",[],null,null,null,c.b,c.a)),e.tb(138,4243456,null,0,r.a,[],{code:[0,"code"]},null),(l()(),e.ub(139,0,null,null,1,"clr-code-snippet",[],null,null,null,c.b,c.a)),e.tb(140,4243456,null,0,r.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),e.ub(141,0,null,null,2,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),e.ub(142,0,null,null,1,"button",[["class","btn"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.openString()&&e),e},null,null)),(l()(),e.Ob(-1,null,["Show Notification from String"])),(l()(),e.ub(144,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Notification from ng-template"])),(l()(),e.ub(146,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["For more complex notifications (including buttons etc.) an instance to a TemplateRef can be provided as content."])),(l()(),e.ub(148,0,null,null,1,"clr-code-snippet",[],null,null,null,c.b,c.a)),e.tb(149,4243456,null,0,r.a,[],{code:[0,"code"]},null),(l()(),e.ub(150,0,null,null,1,"clr-code-snippet",[],null,null,null,c.b,c.a)),e.tb(151,4243456,null,0,r.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),e.ub(152,0,null,null,66,"form",[["class","clr-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Gb(l,154).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Gb(l,154).onReset()&&t),t},null,null)),e.tb(153,16384,null,0,d.G,[],null,null),e.tb(154,4210688,null,0,d.r,[[8,null],[8,null]],null,null),e.Lb(2048,null,d.c,null,[d.r]),e.tb(156,16384,null,0,d.q,[[4,d.c]],null,null),(l()(),e.ub(157,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.ub(158,0,null,null,2,"label",[["for","clr-timeout"]],[[1,"for",0]],null,null,null,null)),e.tb(159,212992,null,0,p.mb,[[2,p.Pc],[2,p.Qc],[2,p.Rc],e.H,e.l],{forAttr:[0,"forAttr"]},null),(l()(),e.Ob(-1,null,["Timeout"])),(l()(),e.ub(161,16777216,null,null,7,"input",[["clrInput",""],["id","clr-timeout"],["name","clr-timeout"],["type","number"]],[[2,"clr-input",null],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Gb(l,162)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Gb(l,162).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Gb(l,162)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Gb(l,162)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Gb(l,163).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Gb(l,163).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Gb(l,163).onTouched()&&t),"blur"===n&&(t=!1!==e.Gb(l,167).triggerValidation()&&t),"ngModelChange"===n&&(t=!1!==(o.clrExampleTimeout=u)&&t),t},null,null)),e.tb(162,16384,null,0,d.d,[e.H,e.l,[2,d.a]],null,null),e.tb(163,16384,null,0,d.v,[e.H,e.l],null,null),e.Lb(1024,null,d.n,function(l,n){return[l,n]},[d.d,d.v]),e.tb(165,671744,null,0,d.s,[[2,d.c],[8,null],[8,null],[6,d.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Lb(2048,null,d.o,null,[d.s]),e.tb(167,212992,null,0,p.jb,[e.S,e.s,[6,d.o],e.H,e.l],{id:[0,"id"]},null),e.tb(168,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e.ub(169,0,null,null,27,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.ub(170,0,null,null,2,"label",[["for","clr-type"]],[[1,"for",0]],null,null,null,null)),e.tb(171,212992,null,0,p.mb,[[2,p.Pc],[2,p.Qc],[2,p.Rc],e.H,e.l],{forAttr:[0,"forAttr"]},null),(l()(),e.Ob(-1,null,["Type"])),(l()(),e.ub(173,0,null,null,23,"div",[["class","select"]],null,null,null,null,null)),(l()(),e.ub(174,0,null,null,22,"select",[["id","clr-type"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,o=l.component;return"change"===n&&(t=!1!==e.Gb(l,175).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Gb(l,175).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.clrExampleType=u)&&t),t},null,null)),e.tb(175,16384,null,0,d.z,[e.H,e.l],null,null),e.Lb(1024,null,d.n,function(l){return[l]},[d.z]),e.tb(177,671744,null,0,d.s,[[2,d.c],[8,null],[8,null],[6,d.n]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),e.Jb(178,{standalone:0}),e.Lb(2048,null,d.o,null,[d.s]),e.tb(180,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e.ub(181,0,null,null,3,"option",[["value","info"]],null,null,null,null,null)),e.tb(182,147456,null,0,d.u,[e.l,e.H,[2,d.z]],{value:[0,"value"]},null),e.tb(183,147456,null,0,d.F,[e.l,e.H,[8,null]],{value:[0,"value"]},null),(l()(),e.Ob(-1,null,["Info"])),(l()(),e.ub(185,0,null,null,3,"option",[["value","warning"]],null,null,null,null,null)),e.tb(186,147456,null,0,d.u,[e.l,e.H,[2,d.z]],{value:[0,"value"]},null),e.tb(187,147456,null,0,d.F,[e.l,e.H,[8,null]],{value:[0,"value"]},null),(l()(),e.Ob(-1,null,["Warning"])),(l()(),e.ub(189,0,null,null,3,"option",[["value","success"]],null,null,null,null,null)),e.tb(190,147456,null,0,d.u,[e.l,e.H,[2,d.z]],{value:[0,"value"]},null),e.tb(191,147456,null,0,d.F,[e.l,e.H,[8,null]],{value:[0,"value"]},null),(l()(),e.Ob(-1,null,["Success"])),(l()(),e.ub(193,0,null,null,3,"option",[["value","danger"]],null,null,null,null,null)),e.tb(194,147456,null,0,d.u,[e.l,e.H,[2,d.z]],{value:[0,"value"]},null),e.tb(195,147456,null,0,d.F,[e.l,e.H,[8,null]],{value:[0,"value"]},null),(l()(),e.Ob(-1,null,["Danger"])),(l()(),e.ub(197,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.ub(198,0,null,null,9,"div",[["class","checkbox"]],null,null,null,null,null)),(l()(),e.ub(199,0,null,null,5,"input",[["id","clr-dismissable"],["name","clr-dismissable"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,o=l.component;return"change"===n&&(t=!1!==e.Gb(l,200).onChange(u.target.checked)&&t),"blur"===n&&(t=!1!==e.Gb(l,200).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.clrExampleDismissable=u)&&t),t},null,null)),e.tb(200,16384,null,0,d.b,[e.H,e.l],null,null),e.Lb(1024,null,d.n,function(l){return[l]},[d.b]),e.tb(202,671744,null,0,d.s,[[2,d.c],[8,null],[8,null],[6,d.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Lb(2048,null,d.o,null,[d.s]),e.tb(204,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e.ub(205,0,null,null,2,"label",[["for","clr-dismissable"]],[[1,"for",0]],null,null,null,null)),e.tb(206,212992,null,0,p.mb,[[2,p.Pc],[2,p.Qc],[2,p.Rc],e.H,e.l],{forAttr:[0,"forAttr"]},null),(l()(),e.Ob(-1,null,["Dismissable"])),(l()(),e.ub(208,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.ub(209,0,null,null,9,"div",[["class","checkbox"]],null,null,null,null,null)),(l()(),e.ub(210,0,null,null,5,"input",[["class","form-control"],["id","clr-progressbar"],["name","clr-progressbar"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,o=l.component;return"change"===n&&(t=!1!==e.Gb(l,211).onChange(u.target.checked)&&t),"blur"===n&&(t=!1!==e.Gb(l,211).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.clrExampleProgressbar=u)&&t),t},null,null)),e.tb(211,16384,null,0,d.b,[e.H,e.l],null,null),e.Lb(1024,null,d.n,function(l){return[l]},[d.b]),e.tb(213,671744,null,0,d.s,[[2,d.c],[8,null],[8,null],[6,d.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Lb(2048,null,d.o,null,[d.s]),e.tb(215,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e.ub(216,0,null,null,2,"label",[["for","clr-progressbar"]],[[1,"for",0]],null,null,null,null)),e.tb(217,212992,null,0,p.mb,[[2,p.Pc],[2,p.Qc],[2,p.Rc],e.H,e.l],{forAttr:[0,"forAttr"]},null),(l()(),e.Ob(-1,null,["Progressbar"])),(l()(),e.ub(219,0,null,null,2,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),e.ub(220,0,null,null,1,"button",[["class","btn"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.openNotify(e.Gb(l,222),{timeout:o.clrExampleTimeout,notificationType:o.clrExampleType,dismissable:o.clrExampleDismissable,progressbar:o.clrExampleProgressbar})&&t),t},null,null)),(l()(),e.Ob(-1,null,["Show Notification"])),(l()(),e.kb(0,[["example",2]],null,0,null,k))],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,138,0,u.codeExampleString),l(n,140,0,u.codeExampleStringTS,"typescript"),l(n,149,0,u.codeExample),l(n,151,0,u.codeExampleTS,"typescript"),l(n,159,0,"clr-timeout"),l(n,165,0,"clr-timeout",u.clrExampleTimeout),l(n,167,0,"clr-timeout"),l(n,171,0,"clr-type");var e=u.clrExampleType,t=l(n,178,0,!0);l(n,177,0,e,t),l(n,182,0,"info"),l(n,183,0,"info"),l(n,186,0,"warning"),l(n,187,0,"warning"),l(n,190,0,"success"),l(n,191,0,"success"),l(n,194,0,"danger"),l(n,195,0,"danger"),l(n,202,0,"clr-dismissable",u.clrExampleDismissable),l(n,206,0,"clr-dismissable"),l(n,213,0,"clr-progressbar",u.clrExampleProgressbar),l(n,217,0,"clr-progressbar")},function(l,n){l(n,0,0,!0),l(n,152,0,e.Gb(n,156).ngClassUntouched,e.Gb(n,156).ngClassTouched,e.Gb(n,156).ngClassPristine,e.Gb(n,156).ngClassDirty,e.Gb(n,156).ngClassValid,e.Gb(n,156).ngClassInvalid,e.Gb(n,156).ngClassPending),l(n,158,0,e.Gb(n,159).forAttr),l(n,161,0,!0,e.Gb(n,167).id,e.Gb(n,168).ngClassUntouched,e.Gb(n,168).ngClassTouched,e.Gb(n,168).ngClassPristine,e.Gb(n,168).ngClassDirty,e.Gb(n,168).ngClassValid,e.Gb(n,168).ngClassInvalid,e.Gb(n,168).ngClassPending),l(n,170,0,e.Gb(n,171).forAttr),l(n,174,0,e.Gb(n,180).ngClassUntouched,e.Gb(n,180).ngClassTouched,e.Gb(n,180).ngClassPristine,e.Gb(n,180).ngClassDirty,e.Gb(n,180).ngClassValid,e.Gb(n,180).ngClassInvalid,e.Gb(n,180).ngClassPending),l(n,199,0,e.Gb(n,204).ngClassUntouched,e.Gb(n,204).ngClassTouched,e.Gb(n,204).ngClassPristine,e.Gb(n,204).ngClassDirty,e.Gb(n,204).ngClassValid,e.Gb(n,204).ngClassInvalid,e.Gb(n,204).ngClassPending),l(n,205,0,e.Gb(n,206).forAttr),l(n,210,0,e.Gb(n,215).ngClassUntouched,e.Gb(n,215).ngClassTouched,e.Gb(n,215).ngClassPristine,e.Gb(n,215).ngClassDirty,e.Gb(n,215).ngClassValid,e.Gb(n,215).ngClassInvalid,e.Gb(n,215).ngClassPending),l(n,216,0,e.Gb(n,217).forAttr)})}function D(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,2,"clr-notification-demo-docu",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,N,w)),e.Lb(512,null,g.D,g.D,[e.s,e.g,e.j,f.e]),e.tb(2,49152,null,0,C,[g.D],null,null)],null,function(l,n){l(n,0,0,!0,!0)})}var P=e.qb("clr-notification-demo-docu",C,D,{},{},[]),H=u("ZYCi"),L=u("XPsC"),A=u("JsA7");u.d(n,"NotificationDemoModuleNgFactory",function(){return M});var M=e.rb(t,[],function(l){return e.Db([e.Eb(512,e.j,e.db,[[8,[o.ab,o.a,o.b,o.d,o.e,o.f,o.g,o.h,o.c,o.bb,o.cb,o.db,o.eb,b.a,i.a,P]],[3,e.j],e.z]),e.Eb(4608,f.s,f.r,[e.w,[2,f.K]]),e.Eb(4608,d.D,d.D,[]),e.Eb(4608,g.f,g.f,[]),e.Eb(1073742336,f.c,f.c,[]),e.Eb(1073742336,p.gb,p.gb,[]),e.Eb(1073742336,p.Lc,p.Lc,[]),e.Eb(1073742336,p.Le,p.Le,[]),e.Eb(1073742336,p.Y,p.Y,[]),e.Eb(1073742336,p.i,p.i,[]),e.Eb(1073742336,p.ab,p.ab,[]),e.Eb(1073742336,p.u,p.u,[]),e.Eb(1073742336,p.Uc,p.Uc,[]),e.Eb(1073742336,p.s,p.s,[]),e.Eb(1073742336,p.Xc,p.Xc,[]),e.Eb(1073742336,p.O,p.O,[]),e.Eb(1073742336,d.C,d.C,[]),e.Eb(1073742336,d.k,d.k,[]),e.Eb(1073742336,p.lb,p.lb,[]),e.Eb(1073742336,p.Bb,p.Bb,[]),e.Eb(1073742336,p.Hb,p.Hb,[]),e.Eb(1073742336,p.Lb,p.Lb,[]),e.Eb(1073742336,p.hc,p.hc,[]),e.Eb(1073742336,p.db,p.db,[]),e.Eb(1073742336,p.rb,p.rb,[]),e.Eb(1073742336,p.hd,p.hd,[]),e.Eb(1073742336,p.kd,p.kd,[]),e.Eb(1073742336,p.S,p.S,[]),e.Eb(1073742336,p.Rb,p.Rb,[]),e.Eb(1073742336,p.H,p.H,[]),e.Eb(1073742336,p.Xb,p.Xb,[]),e.Eb(1073742336,p.nc,p.nc,[]),e.Eb(1073742336,p.y,p.y,[]),e.Eb(1073742336,p.vb,p.vb,[]),e.Eb(1073742336,p.qb,p.qb,[]),e.Eb(1073742336,p.n,p.n,[]),e.Eb(1073742336,p.o,p.o,[]),e.Eb(1073742336,p.tb,p.tb,[]),e.Eb(1073742336,p.yb,p.yb,[]),e.Eb(1073742336,p.je,p.je,[]),e.Eb(1073742336,p.ec,p.ec,[]),e.Eb(1073742336,p.sc,p.sc,[]),e.Eb(1073742336,p.ob,p.ob,[]),e.Eb(1073742336,p.Ob,p.Ob,[]),e.Eb(1073742336,p.kc,p.kc,[]),e.Eb(1073742336,p.Cb,p.Cb,[]),e.Eb(1073742336,p.wc,p.wc,[]),e.Eb(1073742336,p.ye,p.ye,[]),e.Eb(1073742336,p.xe,p.xe,[]),e.Eb(1073742336,p.Eb,p.Eb,[]),e.Eb(1073742336,p.a,p.a,[]),e.Eb(1073742336,g.cb,g.cb,[]),e.Eb(1073742336,g.M,g.M,[]),e.Eb(1073742336,g.s,g.s,[]),e.Eb(1073742336,g.K,g.K,[]),e.Eb(1073742336,g.h,g.h,[]),e.Eb(1073742336,H.p,H.p,[[2,H.u],[2,H.l]]),e.Eb(1073742336,g.e,g.e,[]),e.Eb(1073742336,g.w,g.w,[]),e.Eb(1073742336,g.o,g.o,[]),e.Eb(1073742336,g.C,g.C,[]),e.Eb(1073742336,g.u,g.u,[]),e.Eb(1073742336,g.c,g.c,[]),e.Eb(1073742336,g.F,g.F,[]),e.Eb(1073742336,g.T,g.T,[]),e.Eb(1073742336,g.Y,g.Y,[]),e.Eb(1073742336,g.O,g.O,[]),e.Eb(1073742336,g.j,g.j,[]),e.Eb(1073742336,g.q,g.q,[]),e.Eb(1073742336,g.Q,g.Q,[]),e.Eb(1073742336,g.lb,g.lb,[]),e.Eb(1073742336,g.z,g.z,[]),e.Eb(1073742336,g.a,g.a,[]),e.Eb(1073742336,L.a,L.a,[]),e.Eb(1073742336,A.a,A.a,[]),e.Eb(1073742336,t,t,[]),e.Eb(1024,H.j,function(){return[[{path:"",component:C}]]},[])])})}}]);