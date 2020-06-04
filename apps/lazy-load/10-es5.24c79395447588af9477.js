function _createSuper(t){return function(){var e,n=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"Z+F6":function(t,e,n){"use strict";n.r(e),n.d(e,"RouteTwoModule",(function(){return dt}));var r,o,c,i=n("2kYt"),a=n("sEIs"),s=n("D57K"),u=n("MJ1a"),l=n("yDe4"),f=n("IdLP"),p=n("8htw"),h=n("LTOS"),b=n("nIj0"),m=n("EM62"),d=((r=function t(){_classCallCheck(this,t)}).\u0275mod=m.Tb({type:r}),r.\u0275inj=m.Sb({factory:function(t){return new(t||r)},imports:[[h.c,i.c]]}),r),y=n("OZ4H"),v=n("PBFl"),g=((o=function(){function t(e,n){_classCallCheck(this,t),this.dialogRef=e,this.data=n,this.title=n.title,this.message=n.message}return _createClass(t,[{key:"onConfirm",value:function(){this.dialogRef.close(!0)}},{key:"onDismiss",value:function(){this.dialogRef.close(!1)}}]),t}()).\u0275fac=function(t){return new(t||o)(m.Vb(y.g),m.Vb(y.a))},o.\u0275cmp=m.Pb({type:o,selectors:[["rms-frontend-confirmation-modal"]],decls:9,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"innerHtml"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(m.bc(0,"h1",0),m.Lc(1),m.ac(),m.bc(2,"div",1),m.Wb(3,"p",2),m.ac(),m.bc(4,"div",3),m.bc(5,"button",4),m.jc("click",(function(){return e.onDismiss()})),m.Lc(6,"No"),m.ac(),m.bc(7,"button",5),m.jc("click",(function(){return e.onConfirm()})),m.Lc(8,"Yes"),m.ac(),m.ac()),2&t&&(m.Ib(1),m.Nc(" ",e.title,"\n"),m.Ib(2),m.uc("innerHtml",e.message,m.Dc))},directives:[y.h,y.e,y.c,v.a],styles:[""]}),o),C=function t(e,n){_classCallCheck(this,t),this.title=e,this.message=n},_=((c=function t(){_classCallCheck(this,t)}).\u0275mod=m.Tb({type:c}),c.\u0275inj=m.Sb({factory:function(t){return new(t||c)},imports:[[i.c,h.c,b.s,d]]}),c),k=n("qFEQ"),w=n("bFHC"),I=n("nsO7"),O=n("29Wa"),F=n("R7+U"),x=n("mFH5");function L(t,e){if(1&t){var n=m.cc();m.bc(0,"button",10),m.jc("click",(function(){m.Cc(n);var t=m.nc().$implicit;return m.nc().confirmDialog([t])})),m.bc(1,"mat-icon"),m.Lc(2,"reply"),m.ac(),m.ac()}}function D(t,e){if(1&t&&(m.bc(0,"div",5),m.bc(1,"span"),m.bc(2,"strong",6),m.Lc(3),m.ac(),m.ac(),m.Wb(4,"span",7),m.bc(5,"mat-icon",8),m.Lc(6,"arrow_forward"),m.ac(),m.Wb(7,"span",7),m.Wb(8,"span",2),m.Jc(9,L,3,0,"button",9),m.ac()),2&t){var n=e.$implicit,r=e.first,o=e.last;m.Ib(3),m.Nc("",n.field,":"),m.Ib(1),m.uc("innerHTML",n.oldValue||"<em>Blank</em>",m.Dc),m.Ib(1),m.uc("inline",!0),m.Ib(2),m.uc("innerHTML",n.newValue||"<em>Blank</em>",m.Dc),m.Ib(2),m.uc("ngIf",!(r&&o))}}var q,S=((q=function(){function t(e){_classCallCheck(this,t),this.dialog=e,this.revertChange=new m.q}return _createClass(t,[{key:"emit",value:function(t){this.revertChange.emit(t)}},{key:"trackByIndex",value:function(t){return t}},{key:"confirmDialog",value:function(t){var e=this,n="You are about to revert ";t.forEach((function(e,r){n+="<strong>".concat(e.field,"</strong> to ").concat(e.oldValue||"<em>Blank</em>"," "),r!=t.length-1&&(n+="and ")}));var r=new C("Confirm Revert",n+=". Do you want to continue?");this.dialog.open(g,{maxWidth:"400px",data:r}).afterClosed().subscribe((function(n){n&&e.emit(t)}))}}]),t}()).\u0275fac=function(t){return new(t||q)(m.Vb(y.b))},q.\u0275cmp=m.Pb({type:q,selectors:[["rms-frontend-history-segment"]],inputs:{histories:"histories",canEdit:"canEdit"},outputs:{revertChange:"revertChange"},decls:16,vars:9,consts:[["fxLayout","column"],["fxLayout","row","fxLayoutAlign","start center"],["fxFlex","1 1 auto"],["mat-icon-button","","title","Revert all changes in set",3,"click"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center","class","change-segment",4,"ngFor","ngForOf","ngForTrackBy"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"change-segment"],[2,"padding-right","5px","padding-left","10px"],[3,"innerHTML"],["aria-hidden","false","aria-label","Arrow Icon",1,"icon",3,"inline"],["mat-icon-button","","style","padding-right: 50px;","title","Revert change",3,"click",4,"ngIf"],["mat-icon-button","","title","Revert change",2,"padding-right","50px",3,"click"]],template:function(t,e){1&t&&(m.bc(0,"div",0),m.bc(1,"div",1),m.bc(2,"span"),m.bc(3,"strong"),m.Lc(4),m.ac(),m.Lc(5," updated "),m.bc(6,"strong"),m.Lc(7),m.ac(),m.Lc(8),m.oc(9,"date"),m.ac(),m.Wb(10,"span",2),m.bc(11,"button",3),m.jc("click",(function(){return e.confirmDialog(e.histories)})),m.bc(12,"mat-icon"),m.Lc(13,"reply_all"),m.ac(),m.ac(),m.ac(),m.bc(14,"div",0),m.Jc(15,D,10,5,"div",4),m.ac(),m.ac()),2&t&&(m.Ib(4),m.Mc(e.histories[0].user),m.Ib(3),m.Mc(e.histories.length),m.Ib(1),m.Oc(" ",e.histories.length>1?"fields":"field"," ",m.qc(9,6,e.histories[0].date,"medium")," "),m.Ib(7),m.uc("ngForOf",e.histories)("ngForTrackBy",e.trackByIndex))},directives:[k.c,k.b,k.a,v.a,w.a,i.k,i.l],pipes:[i.e],styles:[".segment[_ngcontent-%COMP%]{margin:10px;background-color:var(--alternate-card-color)}.icon[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]{font-size:large}.icon[_ngcontent-%COMP%]{margin:5px}.change-segment[_ngcontent-%COMP%]{margin-top:-10px}"]}),q);function j(t,e){if(1&t&&(m.bc(0,"mat-option",5),m.Lc(1),m.ac()),2&t){var n=e.$implicit;m.uc("value",n),m.Ib(1),m.Mc(n)}}function P(t,e){if(1&t&&(m.bc(0,"mat-option",5),m.Lc(1),m.ac()),2&t){var n=e.$implicit;m.uc("value",n),m.Ib(1),m.Mc(n)}}function T(t,e){if(1&t){var n=m.cc();m.bc(0,"div"),m.bc(1,"rms-frontend-history-segment",7),m.jc("revertChange",(function(t){return m.Cc(n),m.nc().revertChange.emit(t)})),m.ac(),m.Wb(2,"hr"),m.ac()}if(2&t){var r=e.$implicit,o=m.nc();m.Ib(1),m.uc("histories",r)("canEdit",o.canEdit)}}var E,A,R,M=((A=function(){function t(){_classCallCheck(this,t),this.revertChange=new m.q,this.fieldFilter=new b.e,this.userFilter=new b.e,this.sort=new b.e}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getFilter",value:function(t){return _toConsumableArray(new Set(this.histories.map((function(e){return e[t]}))))}},{key:"filterHistories",value:function(){var t=this.histories,e=this.fieldFilter.value,n=this.userFilter.value;(null==e?void 0:e.length)&&(t=t.filter((function(t){return e.includes(t.field)}))),(null==n?void 0:n.length)&&(t=t.filter((function(t){return n.includes(t.user)})));var r=[],o=[];return t.forEach((function(e,n){0===n||o.length&&o[0].date===e.date?o.push(e):(r.push(I.cloneDeep(o)),o=[e]),n===t.length-1&&r.push(I.cloneDeep(o))})),"desc"===this.sort.value?r.reverse():r}},{key:"trackByIndex",value:function(t,e){return t}}]),t}()).\u0275fac=function(t){return new(t||A)},A.\u0275cmp=m.Pb({type:A,selectors:[["rms-frontend-history-list"]],inputs:{histories:"histories",canEdit:"canEdit"},outputs:{revertChange:"revertChange"},decls:21,vars:10,consts:[["fxFlex","","flexlayout","column"],[1,"filters"],["multiple","",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"formControl","value"],[3,"value"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"histories","canEdit","revertChange"]],template:function(t,e){1&t&&(m.bc(0,"div",0),m.bc(1,"span"),m.bc(2,"mat-form-field",1),m.bc(3,"mat-label"),m.Lc(4,"Field"),m.ac(),m.bc(5,"mat-select",2),m.Jc(6,j,2,2,"mat-option",3),m.ac(),m.ac(),m.bc(7,"mat-form-field",1),m.bc(8,"mat-label"),m.Lc(9,"User"),m.ac(),m.bc(10,"mat-select",2),m.Jc(11,P,2,2,"mat-option",3),m.ac(),m.ac(),m.bc(12,"mat-form-field",1),m.bc(13,"mat-label"),m.Lc(14,"Sort"),m.ac(),m.bc(15,"mat-select",4),m.bc(16,"mat-option",5),m.Lc(17," Least Recent"),m.ac(),m.bc(18,"mat-option",5),m.Lc(19," Most Recent"),m.ac(),m.ac(),m.ac(),m.ac(),m.Jc(20,T,3,2,"div",6),m.ac()),2&t&&(m.Ib(5),m.uc("formControl",e.fieldFilter),m.Ib(1),m.uc("ngForOf",e.getFilter("field")),m.Ib(4),m.uc("formControl",e.userFilter),m.Ib(1),m.uc("ngForOf",e.getFilter("user")),m.Ib(4),m.uc("formControl",e.sort)("value","asc"),m.Ib(1),m.uc("value","asc"),m.Ib(2),m.uc("value","desc"),m.Ib(2),m.uc("ngForOf",e.filterHistories())("ngForTrackBy",e.trackByIndex))},directives:[k.a,O.b,O.e,F.a,b.o,b.f,i.k,x.n,S],styles:[".filters[_ngcontent-%COMP%]{width:100px;margin-left:15px;margin-right:15px}"]}),A),V=((E=function(){function t(){_classCallCheck(this,t),this.revertChange=new m.q}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"emit",value:function(t){this.revertChange.emit(t)}}]),t}()).\u0275fac=function(t){return new(t||E)},E.\u0275cmp=m.Pb({type:E,selectors:[["rms-frontend-history-modal"]],outputs:{revertChange:"revertChange"},decls:10,vars:4,consts:[["fxLayout","row"],["mat-dialog-title",""],["fxFlex","1 1 auto"],["mat-icon-button","","mat-dialog-close",""],[3,"histories","canEdit","revertChange"]],template:function(t,e){1&t&&(m.bc(0,"div",0),m.bc(1,"h1",1),m.Lc(2,"History"),m.ac(),m.Wb(3,"span",2),m.bc(4,"button",3),m.bc(5,"mat-icon"),m.Lc(6," close "),m.ac(),m.ac(),m.ac(),m.bc(7,"mat-dialog-content"),m.bc(8,"rms-frontend-history-list",4),m.jc("revertChange",(function(t){return e.emit(t)})),m.oc(9,"async"),m.ac(),m.ac()),2&t&&(m.Ib(8),m.uc("histories",m.pc(9,2,e.histories))("canEdit",e.canEdit))},directives:[k.c,y.h,k.a,v.a,y.d,w.a,y.e,M],pipes:[i.b],styles:[""]}),E),H=n("ZTXN"),G=n("Ohay"),N=n("kuMc"),W=n("mWib"),$=function(){function t(e){_classCallCheck(this,t),this.payload=e}return _createClass(t,null,[{key:"type",get:function(){return"[Forms] Update Form Status"}}]),t}(),B=function(){function t(e){_classCallCheck(this,t),this.payload=e}return _createClass(t,null,[{key:"type",get:function(){return"[Forms] Update Form Value"}}]),t}(),J=function(){function t(e){_classCallCheck(this,t),this.payload=e}return _createClass(t,null,[{key:"type",get:function(){return"[Forms] Update Form"}}]),t}(),U=function(){function t(e){_classCallCheck(this,t),this.payload=e}return _createClass(t,null,[{key:"type",get:function(){return"[Forms] Update Form Dirty"}}]),t}(),z=function(){function t(e){_classCallCheck(this,t),this.payload=e}return _createClass(t,null,[{key:"type",get:function(){return"[Forms] Update Form Errors"}}]),t}(),Q=((R=function(){function t(e,n,r){_classCallCheck(this,t),this._store=e,this._formGroupDirective=n,this._cd=r,this.path=null,this.debounce=100,this.clearDestroy=!1,this._destroy$=new H.a,this._updating=!1}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.getStateStream("".concat(this.path,".model")).subscribe((function(e){!t._updating&&e&&(t.form.patchValue(e),t._cd.markForCheck())})),this.getStateStream("".concat(this.path,".dirty")).subscribe((function(e){t.form.dirty!==e&&"boolean"==typeof e&&(e?t.form.markAsDirty():t.form.markAsPristine(),t._cd.markForCheck())})),this._store.selectOnce((function(e){return Object(l.m)(e,t.path)})).subscribe((function(){t._store.dispatch([new B({path:t.path,value:t.form.getRawValue()}),new $({path:t.path,status:t.form.status}),new U({path:t.path,dirty:t.form.dirty})])})),this.getStateStream("".concat(this.path,".disabled")).subscribe((function(e){t.form.disabled!==e&&"boolean"==typeof e&&(e?t.form.disable():t.form.enable(),t._cd.markForCheck())})),this._formGroupDirective.valueChanges.pipe(this.debounceChange()).subscribe((function(){var e=t._formGroupDirective.control.getRawValue();t._updating=!0,t._store.dispatch([new B({path:t.path,value:e}),new U({path:t.path,dirty:t._formGroupDirective.dirty}),new z({path:t.path,errors:t._formGroupDirective.errors})]).subscribe({error:function(){return t._updating=!1},complete:function(){return t._updating=!1}})})),this._formGroupDirective.statusChanges.pipe(Object(G.a)(),this.debounceChange()).subscribe((function(e){t._store.dispatch(new $({status:e,path:t.path}))}))}},{key:"ngOnDestroy",value:function(){this._destroy$.next(),this._destroy$.complete(),this.clearDestroy&&this._store.dispatch(new J({path:this.path,value:null,dirty:null,status:null,errors:null}))}},{key:"debounceChange",value:function(){var t=this;return"change"!==this._formGroupDirective.control.updateOn||this.debounce<0?function(e){return e.pipe(Object(N.a)(t._destroy$))}:function(e){return e.pipe(Object(W.a)(t.debounce),Object(N.a)(t._destroy$))}}},{key:"getStateStream",value:function(t){return this._store.select((function(e){return Object(l.m)(e,t)})).pipe(Object(N.a)(this._destroy$))}},{key:"form",get:function(){return this._formGroupDirective.form}}]),t}()).\u0275fac=function(t){return new(t||R)(m.Vb(l.i),m.Vb(b.i),m.Vb(m.i))},R.\u0275dir=m.Qb({type:R,selectors:[["","ngxsForm",""]],inputs:{path:["ngxsForm","path"],debounce:["ngxsFormDebounce","debounce"],clearDestroy:["ngxsFormClearOnDestroy","clearDestroy"]}}),R),Y=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,t),this.value=e.value,this.key=e.key||"",this.label=e.label||"",this.required=!!e.required,this.order=void 0===e.order?1:e.order,this.controlType=e.controlType||"",this.type=e.type||""},Z=n("Cd2c");function K(t,e){if(1&t&&(m.bc(0,"mat-form-field"),m.bc(1,"mat-label"),m.Lc(2),m.ac(),m.Wb(3,"input",4),m.ac()),2&t){var n=m.nc();m.Ib(2),m.Mc(n.question.label),m.Ib(1),m.uc("placeholder",n.question.label)("id",n.question.key)("type",n.question.type)("formControlName",n.question.key)}}function X(t,e){if(1&t&&(m.bc(0,"mat-option",7),m.Lc(1),m.ac()),2&t){var n=e.$implicit;m.uc("value",n.key),m.Ib(1),m.Nc(" ",n.value," ")}}function tt(t,e){if(1&t&&(m.bc(0,"mat-form-field"),m.bc(1,"mat-label"),m.Lc(2),m.ac(),m.bc(3,"mat-select",5),m.Jc(4,X,2,2,"mat-option",6),m.ac(),m.ac()),2&t){var n=m.nc();m.Ib(2),m.Mc(n.question.label),m.Ib(1),m.uc("formControlName",n.question.key),m.Ib(1),m.uc("ngForOf",n.question.options)}}function et(t,e){if(1&t&&(m.bc(0,"div",8),m.Lc(1),m.ac()),2&t){var n=m.nc();m.Ib(1),m.Nc(" ",n.question.label," is required ")}}var nt,rt=((nt=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"isValid",get:function(){return this.form.controls[this.question.key].valid}}]),t}()).\u0275fac=function(t){return new(t||nt)},nt.\u0275cmp=m.Pb({type:nt,selectors:[["app-question"]],inputs:{question:"question",form:"form"},decls:5,vars:5,consts:[[3,"formGroup"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","errorMessage",4,"ngIf"],["matInput","",3,"placeholder","id","type","formControlName"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"errorMessage"]],template:function(t,e){1&t&&(m.bc(0,"div",0),m.bc(1,"div",1),m.Jc(2,K,4,5,"mat-form-field",2),m.Jc(3,tt,5,3,"mat-form-field",2),m.ac(),m.Jc(4,et,2,1,"div",3),m.ac()),2&t&&(m.uc("formGroup",e.form),m.Ib(1),m.uc("ngSwitch",e.question.controlType),m.Ib(1),m.uc("ngSwitchCase","textbox"),m.Ib(1),m.uc("ngSwitchCase","dropdown"),m.Ib(1),m.uc("ngIf",!e.isValid))},directives:[b.p,b.i,i.n,i.o,i.l,O.b,O.e,Z.b,b.b,b.o,b.g,F.a,i.k,x.n],encapsulation:2}),nt);function ot(t,e){if(1&t&&(m.bc(0,"div",2),m.Wb(1,"app-question",3),m.ac()),2&t){var n=e.$implicit,r=m.nc();m.Ib(1),m.uc("question",n)("form",r.form)}}var ct,it,at,st,ut,lt=((it=function(){function t(){_classCallCheck(this,t),this.questions=[],this.clearOnDestroy=!1,this.payLoad=""}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||it)},it.\u0275cmp=m.Pb({type:it,selectors:[["dynamic-form"]],inputs:{questions:"questions",form:"form",clearOnDestroy:"clearOnDestroy"},decls:3,vars:3,consts:[["ngxsForm","dynamicForms.formGroup","autocomplete","off",3,"formGroup","ngxsFormClearOnDestroy"],["class","form-row",4,"ngFor","ngForOf"],[1,"form-row"],[3,"question","form"]],template:function(t,e){1&t&&(m.bc(0,"div"),m.bc(1,"form",0),m.Jc(2,ot,2,2,"div",1),m.ac(),m.ac()),2&t&&(m.Ib(1),m.uc("formGroup",e.form)("ngxsFormClearOnDestroy",e.clearOnDestroy),m.Ib(1),m.uc("ngForOf",e.questions))},directives:[b.u,b.p,Q,b.i,i.k,rt],encapsulation:2}),it),ft=((ct=function(){function t(){_classCallCheck(this,t),this.outputEvent=new m.q}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.toFormGroup(this.questions)}},{key:"saveAsDraft",value:function(){this.outputEvent.emit(this.form.value)}},{key:"toFormGroup",value:function(t){var e={};return t.forEach((function(t){e[t.key]=t.required?new b.e(t.value||"",b.t.required):new b.e(t.value||"")})),new b.h(e)}}]),t}()).\u0275fac=function(t){return new(t||ct)},ct.\u0275cmp=m.Pb({type:ct,selectors:[["rms-dynamic-form-modal"]],inputs:{questions:"questions",clearOnDestroy:"clearOnDestroy"},outputs:{outputEvent:"outputEvent"},decls:9,vars:3,consts:[["mat-dialog-title",""],[3,"form","questions","clearOnDestroy"],["mat-raised-button","","color","primary","mat-dialog-close","",3,"click"],["mat-raised-button","","mat-dialog-close",""]],template:function(t,e){1&t&&(m.bc(0,"div"),m.Wb(1,"h1",0),m.bc(2,"mat-dialog-content"),m.Wb(3,"dynamic-form",1),m.ac(),m.bc(4,"mat-dialog-actions"),m.bc(5,"button",2),m.jc("click",(function(){return e.saveAsDraft()})),m.Lc(6," Submit "),m.ac(),m.bc(7,"button",3),m.Lc(8,"Cancel"),m.ac(),m.ac(),m.ac()),2&t&&(m.Ib(3),m.uc("form",e.form)("questions",e.questions)("clearOnDestroy",e.clearOnDestroy))},directives:[y.h,y.e,lt,y.c,v.a,y.d],styles:[""]}),ct),pt=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,n),(t=e.call(this,r)).controlType="dropdown",t.options=[],t.options=r.options||[],t}return n}(Y),ht=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,n),(t=e.call(this,r)).controlType="textbox",t.type=r.type||"",t}return n}(Y),bt=[{path:"",component:(at=function(){function t(e,n){_classCallCheck(this,t),this.store=e,this.dialog=n,this.userControl=new b.e,this.person={name:"",description:"",favColor:""},this.version=0}return _createClass(t,[{key:"ngOnInit",value:function(){this.userControl.setValue("Steve")}},{key:"openHistory",value:function(){var t=this,e=this.dialog.open(V,{width:"600px"});e.componentInstance.histories=this.histories$,e.componentInstance.canEdit=!0,e.componentInstance.revertChange.subscribe((function(n){var r=I.cloneDeep(t.person);n.forEach((function(t){r[t.field]=t.oldValue})),t.onSave(r),e.close()})),e.afterClosed().subscribe((function(t){}))}},{key:"openForms",value:function(){var t=this,e=this.dialog.open(ft,{width:"500px"});e.componentInstance.questions=this.getQuestions(),e.componentInstance.clearOnDestroy=!1,e.componentInstance.outputEvent.subscribe((function(e){t.onSave(e)})),e.afterClosed().subscribe((function(t){}))}},{key:"getQuestions",value:function(){var t,e,n;return[new pt({key:"favColor",label:"Favorite Color",options:[{key:"Orange",value:"Orange"},{key:"Green",value:"Green"},{key:"Blue",value:"Blue"},{key:"Red",value:"Red"}],value:null===(t=this.person)||void 0===t?void 0:t.favColor,order:3}),new ht({key:"name",label:"Name",value:null===(e=this.person)||void 0===e?void 0:e.name,order:1}),new ht({key:"description",label:"Description",type:"textbox",value:null===(n=this.person)||void 0===n?void 0:n.description,order:2})].sort((function(t,e){return t.order-e.order}))}},{key:"onSave",value:function(t){var e=this,n=new Date;Object.keys(this.person).forEach((function(r){t[r]!=e.person[r]&&(e.store.dispatch(new p.a({user:e.userControl.value,version:e.version,date:n,newValue:t[r],oldValue:e.person[r],field:r})),e.person[r]=t[r])}))}}]),t}(),at.\u0275fac=function(t){return new(t||at)(m.Vb(l.i),m.Vb(y.b))},at.\u0275cmp=m.Pb({type:at,selectors:[["lazy-load-route-two"]],decls:19,vars:7,consts:[["fxFlex",""],["mat-raised-button","","color","accent","routerLink","/home",2,"margin","20px"],["mat-raised-button","","color","accent",2,"margin","20px",3,"click"],["mat-raised-button","","color","accent",2,"margin","20px",3,"disabled","click"],["fxLayout","column"],[2,"margin","10px","width","120px"],["matInput","","placeholder","user","id","userVal",3,"formControl"],[2,"margin","10px"]],template:function(t,e){1&t&&(m.bc(0,"div",0),m.bc(1,"button",1),m.Lc(2," Lazy-App Home "),m.ac(),m.bc(3,"button",2),m.jc("click",(function(){return e.openForms()})),m.Lc(4," Edit Person "),m.ac(),m.bc(5,"button",3),m.jc("click",(function(){return e.openHistory()})),m.oc(6,"async"),m.Lc(7," History Modal "),m.ac(),m.bc(8,"div",4),m.bc(9,"mat-form-field",5),m.bc(10,"mat-label"),m.Lc(11,"User"),m.ac(),m.Wb(12,"input",6),m.ac(),m.bc(13,"span",7),m.Lc(14),m.ac(),m.bc(15,"span",7),m.Lc(16),m.ac(),m.bc(17,"span",7),m.Lc(18),m.ac(),m.ac(),m.ac()),2&t&&(m.Ib(5),m.uc("disabled",0==m.pc(6,5,e.histories$).length),m.Ib(7),m.uc("formControl",e.userControl),m.Ib(2),m.Nc(" Name: ",e.person.name," "),m.Ib(2),m.Nc(" Description: ",e.person.description," "),m.Ib(2),m.Nc(" Favorite Color: ",e.person.favColor," "))},directives:[k.a,v.a,a.h,k.c,O.b,O.e,Z.b,b.b,b.o,b.f],pipes:[i.b],styles:[""]}),Object(s.b)([Object(l.e)(u.a.getHistories),Object(s.c)("design:type",f.a)],at.prototype,"histories$",void 0),at)}],mt=((ut=function t(){_classCallCheck(this,t)}).\u0275mod=m.Tb({type:ut}),ut.\u0275inj=m.Sb({factory:function(t){return new(t||ut)},imports:[[a.i.forChild(bt)],a.i]}),ut),dt=((st=function t(){_classCallCheck(this,t)}).\u0275mod=m.Tb({type:st}),st.\u0275inj=m.Sb({factory:function(t){return new(t||st)},imports:[[i.c,h.c,b.s,mt,_]]}),st)}}]);