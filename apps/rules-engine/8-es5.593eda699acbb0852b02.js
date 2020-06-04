function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{HMjN:function(t,e,n){"use strict";n.r(e),n.d(e,"HeaderModule",(function(){return A})),n.d(e,"HeaderComponent",(function(){return Y}));var o,i=n("2kYt"),a=n("LTOS"),c=n("nIj0"),r=n("EM62"),l=((o=function t(){_classCallCheck(this,t)}).\u0275mod=r.Pb({type:o}),o.\u0275inj=r.Ob({factory:function(t){return new(t||o)},imports:[[c.i,c.p,i.c,a.c]]}),o),s=n("OZ4H"),d=n("oqI+"),p=n("PBFl"),u=n("3Uyd"),b=n("bFHC"),m=n("Meci"),f=n("qFEQ"),h=n("zmEM"),g=n("29Wa"),v=n("R7+U"),k=n("mFH5"),x=n("Cd2c");function C(t,e){1&t&&r.Sb(0,"div",20)}function y(t,e){if(1&t){var n=r.Yb();r.Xb(0,"div",3),r.Xb(1,"mat-card",4),r.Dc(2,C,1,0,"div",5),r.Xb(3,"div",6),r.Xb(4,"button",7),r.fc("click",(function(){r.wc(n);var t=e.index;return r.jc().removeHelpCard(t)})),r.Xb(5,"mat-icon"),r.Fc(6,"remove"),r.Wb(),r.Wb(),r.Xb(7,"button",8),r.fc("click",(function(){r.wc(n);var t=e.index;return r.jc().addHelpCard(t)})),r.Xb(8,"mat-icon"),r.Fc(9,"add"),r.Wb(),r.Wb(),r.Xb(10,"mat-icon",9),r.Fc(11,"swap_vert"),r.Wb(),r.Wb(),r.Sb(12,"mat-divider",10),r.Xb(13,"div",11),r.Xb(14,"mat-form-field",12),r.Xb(15,"mat-label"),r.Fc(16,"Type"),r.Wb(),r.Xb(17,"mat-select",13),r.Xb(18,"mat-option",14),r.Fc(19,"Text"),r.Wb(),r.Xb(20,"mat-option",15),r.Fc(21,"Link"),r.Wb(),r.Wb(),r.Wb(),r.Xb(22,"mat-form-field",16),r.Xb(23,"mat-label"),r.Fc(24,"title"),r.Wb(),r.Sb(25,"input",17),r.Wb(),r.Xb(26,"mat-form-field",18),r.Xb(27,"mat-label"),r.Fc(28,"content"),r.Wb(),r.Sb(29,"textarea",19),r.Wb(),r.Wb(),r.Wb(),r.Wb()}if(2&t){var o=e.index;r.Eb(13),r.oc("formGroupName",o)}}var w,W=((w=function(){function t(e){_classCallCheck(this,t),this.formBuilder=e,this.contents=[],this.contentChange=new r.p}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.form=this.formBuilder.group({items:this.formBuilder.array([])}),this.items=this.form.get("items"),this.contents.length>0?this.contents.forEach((function(e){t.items.push(t.formBuilder.group({type:new c.e(e.type||"text"),title:new c.e(e.title||""),value:new c.e(e.value||""),order:new c.e(e.order)}))})):this.items.push(this.formBuilder.group({type:"text",title:"",value:"",order:""})),this.form.get("items").valueChanges.subscribe((function(e){t.contents=t.reorder(e),t.contentChange.emit(t.contents)}))}},{key:"drop",value:function(t){var e=this.items.at(t.previousIndex);this.items.removeAt(t.previousIndex),this.items.insert(t.currentIndex,e)}},{key:"removeHelpCard",value:function(t){this.items.controls.length>1&&(this.items=this.form.get("items"),this.items.removeAt(t))}},{key:"addHelpCard",value:function(t){this.items=this.form.get("items"),this.items.insert(t+1,this.formBuilder.group({type:"text",title:"",value:"",order:""}))}},{key:"reorder",value:function(t){return t.map((function(t,e){return t.order=e+1,t}))}},{key:"emitContentChange",value:function(t){this.contentChange.emit(t)}}]),t}()).\u0275fac=function(t){return new(t||w)(r.Rb(c.d))},w.\u0275cmp=r.Lb({type:w,selectors:[["rms-frontend-help-edit"]],inputs:{contents:"contents"},outputs:{contentChange:"contentChange"},decls:3,vars:2,consts:[[1,"example-form",3,"formGroup"],["cdkDropList","",1,"example-list",3,"cdkDropListDropped"],["formArrayName","items","cdkDrag","","class","example-box",4,"ngFor","ngForOf"],["formArrayName","items","cdkDrag","",1,"example-box"],["fxLayout","row"],["class","drag-placeholder",4,"cdkDragPlaceholder"],["fxLayout","column","fxLayoutAlign","space-evenly start"],["mat-icon-button","","type","button",1,"remove-btn",3,"click"],["mat-icon-button","","type","button",3,"click"],["cdkDragHandle","",1,"dragable"],["vertical","true",2,"margin-right","10px"],[3,"formGroupName"],[2,"width","30%"],["formControlName","type"],["value","text"],["value","link"],[2,"width","70%"],["matInput","","formControlName","title"],[1,"example-full-width"],["matInput","","formControlName","value"],[1,"drag-placeholder"]],template:function(t,e){1&t&&(r.Xb(0,"form",0),r.Xb(1,"div",1),r.fc("cdkDropListDropped",(function(t){return e.drop(t)})),r.Dc(2,y,30,1,"div",2),r.Wb(),r.Wb()),2&t&&(r.oc("formGroup",e.form),r.Eb(2),r.oc("ngForOf",e.form.get("items").controls))},directives:[c.s,c.n,c.g,d.d,i.k,c.c,d.a,m.a,f.c,d.c,f.b,p.a,b.a,d.b,h.a,c.h,g.b,g.e,v.a,c.m,c.f,k.n,x.b,c.b],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.example-list[_ngcontent-%COMP%]{width:500px;max-width:100%;border:1px solid #ccc;min-height:60px;display:block;background:#fff;border-radius:4px;overflow:hidden}.example-box[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.drag-placeholder[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.drag-placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;min-height:60px}.dragable[_ngcontent-%COMP%]{cursor:move}.remove-btn[_ngcontent-%COMP%]{color:red}"]}),w);function X(t,e){if(1&t&&(r.Xb(0,"mat-expansion-panel-header"),r.Xb(1,"mat-panel-title"),r.Fc(2),r.Wb(),r.Wb()),2&t){var n=r.jc().$implicit;r.Eb(2),r.Hc(" ",n.title," ")}}function F(t,e){if(1&t){var n=r.Yb();r.Xb(0,"mat-expansion-panel-header",11,12),r.fc("click",(function(){r.wc(n);var t=r.uc(1),e=r.jc().$implicit,o=r.jc(3);return t._toggle(),o.goToPage(e.link)})),r.Xb(2,"mat-panel-title"),r.Fc(3),r.Wb(),r.Xb(4,"mat-icon",13),r.Fc(5,"open_in_new"),r.Wb(),r.Wb()}if(2&t){var o=r.jc().$implicit;r.Eb(3),r.Hc(" ",o.title," ")}}function M(t,e){if(1&t&&(r.Xb(0,"div"),r.Fc(1),r.Wb()),2&t){var n=r.jc().$implicit;r.Eb(1),r.Hc(" ",n.value," ")}}function E(t,e){if(1&t&&(r.Xb(0,"mat-expansion-panel",9),r.Dc(1,X,3,1,"mat-expansion-panel-header",0),r.Dc(2,F,6,1,"mat-expansion-panel-header",10),r.Dc(3,M,2,1,"div",0),r.Wb()),2&t){var n=e.$implicit;r.oc("hideToggle","link"==n.type),r.Eb(1),r.oc("ngIf","text"==n.type),r.Eb(1),r.oc("ngIf","link"==n.type),r.Eb(1),r.oc("ngIf","text"==n.type)}}function H(t,e){if(1&t&&(r.Xb(0,"mat-accordion"),r.Dc(1,E,4,4,"mat-expansion-panel",8),r.Wb()),2&t){var n=r.jc(2);r.Eb(1),r.oc("ngForOf",n.contents)}}function O(t,e){if(1&t){var n=r.Yb();r.Xb(0,"rms-frontend-help-edit",14),r.fc("contentChange",(function(t){return r.wc(n),r.jc(2).contentChanged(t)})),r.Wb()}if(2&t){var o=r.jc(2);r.oc("contents",o.contents)}}function _(t,e){if(1&t){var n=r.Yb();r.Xb(0,"button",15),r.fc("click",(function(){return r.wc(n),r.jc(2).OpenHelpEditor()})),r.Fc(1,"Edit"),r.Wb()}}function D(t,e){if(1&t){var n=r.Yb();r.Xb(0,"button",15),r.fc("click",(function(){return r.wc(n),r.jc(2).updateContent()})),r.Fc(1,"Update"),r.Wb()}}function I(t,e){if(1&t&&(r.Xb(0,"div"),r.Xb(1,"div",1),r.Xb(2,"h1",2),r.Fc(3),r.Wb(),r.Wb(),r.Xb(4,"div",3),r.Dc(5,H,2,1,"mat-accordion",0),r.Dc(6,O,1,1,"rms-frontend-help-edit",4),r.Wb(),r.Xb(7,"div",5),r.Dc(8,_,2,0,"button",6),r.Dc(9,D,2,0,"button",6),r.Xb(10,"button",7),r.Fc(11,"Close"),r.Wb(),r.Wb(),r.Wb()),2&t){var n=r.jc();r.Eb(3),r.Hc(" ",n.title," "),r.Eb(2),r.oc("ngIf",!n.editMode),r.Eb(1),r.oc("ngIf",n.editMode&&n.isEditor),r.Eb(2),r.oc("ngIf",n.isEditor&&!n.editMode),r.Eb(1),r.oc("ngIf",n.editMode)}}var P,j,L=((P=function(){function t(e,n){_classCallCheck(this,t),this.dialogRef=e,this.dialog=n,this.title="Help Modal",this.contents=[],this.isEditor=!0,this.updateHelpContent=new r.p,this.loading=!0,this.editMode=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.contents.length>0&&(this.contents=this.contents.sort((function(t,e){return t.order-e.order})))}},{key:"ngAfterViewInit",value:function(){this.loading=!1}},{key:"goToPage",value:function(t){window.location.href=t}},{key:"OpenHelpEditor",value:function(){this.editMode=!0}},{key:"updateContent",value:function(){this.editMode=!1,this.updateHelpContent.emit(this.contents)}},{key:"contentChanged",value:function(t){this.contents=t}}]),t}()).\u0275fac=function(t){return new(t||P)(r.Rb(s.f),r.Rb(s.a))},P.\u0275cmp=r.Lb({type:P,selectors:[["rms-frontend-help-modal"]],inputs:{title:"title",contents:"contents",isEditor:"isEditor"},outputs:{updateHelpContent:"updateHelpContent"},decls:1,vars:1,consts:[[4,"ngIf"],["cdkDrag","","cdkDragRootElement",".cdk-overlay-pane","cdkDragBoundary",".cdk-overlay-container"],["mat-dialog-title","","cdkDragHandle","",1,"draggable-title"],["mat-dialog-content","",2,"padding-top","20px","padding-bottom","20px"],[3,"contents","contentChange",4,"ngIf"],["mat-dialog-actions",""],["mat-raised-button","",3,"click",4,"ngIf"],["mat-raised-button","","mat-dialog-close",""],[3,"hideToggle",4,"ngFor","ngForOf"],[3,"hideToggle"],["style","padding-right: 15px;",3,"click",4,"ngIf"],[2,"padding-right","15px",3,"click"],["noexpand",""],[2,"font-size","18px","color","#7e7e7e"],[3,"contents","contentChange"],["mat-raised-button","",3,"click"]],template:function(t,e){1&t&&r.Dc(0,I,12,5,"div",0),2&t&&r.oc("ngIf",!e.loading)},directives:[i.l,d.a,s.g,d.b,s.d,s.b,p.a,s.c,u.a,i.k,u.c,u.d,u.e,b.a,W],styles:[".draggable-title[_ngcontent-%COMP%]{margin:-24px -24px 0!important;padding:10px 24px;background:#369;color:#fff;cursor:move}"]}),P),T=n("yDe4"),A=((j=function t(){_classCallCheck(this,t)}).\u0275mod=r.Pb({type:j}),j.\u0275inj=r.Ob({factory:function(t){return new(t||j)},imports:[[i.c,a.c,l,T.d.forFeature([a.d])]]}),j),S=n("D57K"),R=n("IdLP"),z=n("A7yd"),B=n("Jb3d"),N=n("nKqi");function $(t,e){if(1&t&&(r.Xb(0,"a",10),r.Fc(1),r.Wb()),2&t){var n=e.$implicit;r.pc("href",n.value,r.yc),r.Eb(1),r.Hc(" ",n.key," ")}}var G,Y=((G=function(){function t(e,n){_classCallCheck(this,t),this.dialog=e,this.store=n,this.helpContent=[],this.helpChange=new r.p,this.themeSub=this.theme$.subscribe((function(t){document.body.classList.remove("dark-theme"),document.body.classList.remove("light-theme"),document.body.classList.add("".concat(t,"-theme"))})),this.links=[{key:"Main Home",value:"https://RMSLowside.github.io/rmslow/apps/home/"},{key:"Steve Home",value:"https://smcfall2.github.io/rmslow/apps/home/"},{key:"Daniel Home",value:"https://flare891.github.io/rmslow/apps/home"},{key:"S3 App",value:"".concat(location.origin,"/rmslow/apps/s3")},{key:"Lazy App",value:"".concat(location.origin,"/rmslow/apps/lazy-load")},{key:"NGXS Form App",value:"".concat(location.origin,"/rmslow/apps/ngxs-forms")},{key:"Date Translation App",value:"".concat(location.origin,"/rmslow/apps/date-translation")},{key:"Rules Engine",value:"".concat(location.origin,"/rmslow/apps/rules-engine")},{key:"Metrics",value:"".concat(location.origin,"/rmslow/apps/charts")}]}return _createClass(t,[{key:"openHelpModal",value:function(){var t=this;if(-1==this.dialog.openDialogs.findIndex((function(t){return"help-modal"===t.id}))){var e=this.dialog.open(L,{id:"help-modal",hasBackdrop:!1,minWidth:"500px",minHeight:"400px",position:{top:"70px",right:"10px"}});e.componentInstance.title="Home Page Help Modal",e.componentInstance.contents=this.helpContent,e.componentInstance.updateHelpContent.subscribe((function(e){t.HelpContentChange(e)})),e.afterClosed().subscribe((function(t){console.log("help modal closed")}))}}},{key:"themeChange",value:function(t){this.store.dispatch(new a.e(t))}},{key:"HelpContentChange",value:function(t){this.helpChange.emit(t)}}]),t}()).\u0275fac=function(t){return new(t||G)(r.Rb(s.a),r.Rb(T.i))},G.\u0275cmp=r.Lb({type:G,selectors:[["rms-frontend-header"]],inputs:{title:"title",helpContent:"helpContent"},outputs:{helpChange:"helpChange"},decls:26,vars:5,consts:[["color","primary"],["fxFlex","1 1 auto"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["appMenu","matMenu"],["mat-menu-item","",3,"matMenuTriggerFor"],["themeMenu","matMenu"],["mat-menu-item","",3,"click"],["linkMenu","matMenu"],["mat-list-item","",3,"href",4,"ngFor","ngForOf"],["mat-list-item","",3,"href"]],template:function(t,e){if(1&t&&(r.Xb(0,"mat-toolbar",0),r.Xb(1,"h1"),r.Fc(2),r.Wb(),r.Sb(3,"span",1),r.Xb(4,"button",2),r.fc("click",(function(){return e.openHelpModal()})),r.Xb(5,"mat-icon"),r.Fc(6,"help_outline"),r.Wb(),r.Wb(),r.Xb(7,"button",3),r.Xb(8,"mat-icon"),r.Fc(9,"menu"),r.Wb(),r.Wb(),r.Wb(),r.Xb(10,"mat-menu",null,4),r.Xb(12,"button",5),r.Fc(13,"Themes"),r.Wb(),r.Xb(14,"button",5),r.Fc(15,"Links"),r.Wb(),r.Wb(),r.Xb(16,"mat-menu",null,6),r.Xb(18,"button",7),r.fc("click",(function(){return e.themeChange("dark")})),r.Fc(19,"Dark"),r.Wb(),r.Xb(20,"button",7),r.fc("click",(function(){return e.themeChange("light")})),r.Fc(21,"Light"),r.Wb(),r.Wb(),r.Xb(22,"mat-menu",null,8),r.Xb(24,"mat-nav-list"),r.Dc(25,$,2,2,"a",9),r.Wb(),r.Wb()),2&t){var n=r.uc(11),o=r.uc(17),i=r.uc(23);r.Eb(2),r.Gc(e.title),r.Eb(5),r.oc("matMenuTriggerFor",n),r.Eb(5),r.oc("matMenuTriggerFor",o),r.Eb(2),r.oc("matMenuTriggerFor",i),r.Eb(11),r.oc("ngForOf",e.links)}},directives:[z.a,f.a,p.a,b.a,B.c,B.d,B.a,N.c,i.k,N.a],styles:[""]}),Object(S.b)([Object(T.e)(a.d.getTheme),Object(S.c)("design:type",R.a)],G.prototype,"theme$",void 0),G)}}]);