function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,r=!0,c=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return r=e.done,e},e:function(e){c=!0,o=e},f:function(){try{r||null==i.return||i.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{qMY6:function(e,t,n){"use strict";n.r(t),n.d(t,"FileExplorerModule",(function(){return O})),n.d(t,"FileElement",(function(){return _})),n.d(t,"FileExplorerComponent",(function(){return re}));var i=n("2kYt"),o=n("LTOS"),r=n("nIj0"),c=n("EM62"),a=n("8lHc"),l=["fileSelector"];function s(e,t){if(1&e&&(c.bc(0,"div",8),c.Lc(1),c.ac()),2&e){var n=c.nc(2);c.Ib(1),c.Mc(n.dropZoneLabel)}}function d(e,t){if(1&e){var n=c.cc();c.bc(0,"div"),c.bc(1,"input",9),c.jc("click",(function(e){return c.Cc(n),c.nc(2).openFileSelector(e)})),c.ac(),c.ac()}if(2&e){var i=c.nc(2);c.Ib(1),c.vc("value",i.browseBtnLabel),c.uc("className",i.browseBtnClassName)}}function u(e,t){if(1&e&&(c.Jc(0,s,2,1,"div",6),c.Jc(1,d,2,2,"div",7)),2&e){var n=c.nc();c.uc("ngIf",n.dropZoneLabel),c.Ib(1),c.uc("ngIf",n.showBrowseBtn)}}function p(e,t){}var f,m,g,b,v,h,y=function(e){return{openFileSelector:e}},w=function e(t,n){_classCallCheck(this,e),this.relativePath=t,this.fileEntry=n},k=((f=function e(t){_classCallCheck(this,e),this.template=t}).\u0275fac=function(e){return new(e||f)(c.Vb(c.Q))},f.\u0275dir=c.Qb({type:f,selectors:[["","ngx-file-drop-content-tmp",""]]}),f),F=function(e,t,n,i){var o,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=((b=function(){function e(t,n){var i=this;_classCallCheck(this,e),this.zone=t,this.renderer=n,this.accept="*",this.directory=!1,this.multiple=!0,this.dropZoneLabel="",this.dropZoneClassName="ngx-file-drop__drop-zone",this.contentClassName="ngx-file-drop__content",this.showBrowseBtn=!1,this.browseBtnClassName="btn btn-primary btn-xs ngx-file-drop__browse-btn",this.browseBtnLabel="Browse files",this.onFileDrop=new c.q,this.onFileOver=new c.q,this.onFileLeave=new c.q,this.isDraggingOverDropZone=!1,this.globalDraggingInProgress=!1,this.files=[],this.numOfActiveReadEntries=0,this.helperFormEl=null,this.fileInputPlaceholderEl=null,this.dropEventTimerSubscription=null,this._disabled=!1,this.openFileSelector=function(e){i.fileSelector&&i.fileSelector.nativeElement&&i.fileSelector.nativeElement.click()},this.globalDragStartListener=this.renderer.listen("document","dragstart",(function(e){i.globalDraggingInProgress=!0})),this.globalDragEndListener=this.renderer.listen("document","dragend",(function(e){i.globalDraggingInProgress=!1}))}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.dropEventTimerSubscription&&(this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=null),this.globalDragStartListener(),this.globalDragEndListener(),this.files=[],this.helperFormEl=null,this.fileInputPlaceholderEl=null}},{key:"onDragOver",value:function(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone||(this.isDraggingOverDropZone=!0,this.onFileOver.emit(e)),this.preventAndStop(e))}},{key:"onDragLeave",value:function(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone&&(this.isDraggingOverDropZone=!1,this.onFileLeave.emit(e)),this.preventAndStop(e))}},{key:"dropFiles",value:function(e){var t;!this.isDropzoneDisabled()&&(this.isDraggingOverDropZone=!1,e.dataTransfer)&&(e.dataTransfer.dropEffect="copy",t=e.dataTransfer.items?e.dataTransfer.items:e.dataTransfer.files,this.preventAndStop(e),this.checkFiles(t))}},{key:"uploadFiles",value:function(e){!this.isDropzoneDisabled()&&e.target&&(this.checkFiles(e.target.files||[]),this.resetFileInput())}},{key:"checkFiles",value:function(e){for(var t=this,n=function(n){var i=e[n],o=null;if(t.canGetAsEntry(i)&&(o=i.webkitGetAsEntry()),o)if(o.isFile){var r=new w(o.name,o);t.addToQueue(r)}else o.isDirectory&&t.traverseFileTree(o,o.name);else if(i){var c={name:i.name,isDirectory:!1,isFile:!0,file:function(e){e(i)}},a=new w(c.name,c);t.addToQueue(a)}},i=0;i<e.length;i++)n(i);this.dropEventTimerSubscription&&this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=Object(a.a)(200,200).subscribe((function(){if(t.files.length>0&&0===t.numOfActiveReadEntries){var e=t.files;t.files=[],t.onFileDrop.emit(e)}}))}},{key:"traverseFileTree",value:function(e,t){var n=this;if(e.isFile){var i=new w(t,e);this.files.push(i)}else{t+="/";var o=e.createReader(),r=[];!function i(){n.numOfActiveReadEntries++,o.readEntries((function(o){if(o.length)r=r.concat(o),i();else if(0===r.length){var c=new w(t,e);n.zone.run((function(){n.addToQueue(c)}))}else for(var a=function(e){n.zone.run((function(){n.traverseFileTree(r[e],t+r[e].name)}))},l=0;l<r.length;l++)a(l);n.numOfActiveReadEntries--}))}()}}},{key:"resetFileInput",value:function(){if(this.fileSelector&&this.fileSelector.nativeElement){var e=this.fileSelector.nativeElement,t=e.parentElement,n=this.getHelperFormElement(),i=this.getFileInputPlaceholderElement();t!==n&&(this.renderer.insertBefore(t,i,e),this.renderer.appendChild(n,e),n.reset(),this.renderer.insertBefore(t,e,i),this.renderer.removeChild(t,i))}}},{key:"getHelperFormElement",value:function(){return this.helperFormEl||(this.helperFormEl=this.renderer.createElement("form")),this.helperFormEl}},{key:"getFileInputPlaceholderElement",value:function(){return this.fileInputPlaceholderEl||(this.fileInputPlaceholderEl=this.renderer.createElement("div")),this.fileInputPlaceholderEl}},{key:"canGetAsEntry",value:function(e){return!!e.webkitGetAsEntry}},{key:"isDropzoneDisabled",value:function(){return this.globalDraggingInProgress||this.disabled}},{key:"addToQueue",value:function(e){this.files.push(e)}},{key:"preventAndStop",value:function(e){e.stopPropagation(),e.preventDefault()}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=null!=e&&"false"!=="".concat(e)}}]),e}()).\u0275fac=function(e){return new(e||b)(c.Vb(c.D),c.Vb(c.J))},b.\u0275cmp=c.Pb({type:b,selectors:[["ngx-file-drop"]],contentQueries:function(e,t,n){var i;1&e&&c.Ob(n,k,!0,c.Q),2&e&&c.zc(i=c.kc())&&(t.contentTemplate=i.first)},viewQuery:function(e,t){var n;1&e&&c.Hc(l,!0),2&e&&c.zc(n=c.kc())&&(t.fileSelector=n.first)},inputs:{accept:"accept",directory:"directory",multiple:"multiple",dropZoneLabel:"dropZoneLabel",dropZoneClassName:"dropZoneClassName",contentClassName:"contentClassName",showBrowseBtn:"showBrowseBtn",browseBtnClassName:"browseBtnClassName",browseBtnLabel:"browseBtnLabel",disabled:"disabled"},outputs:{onFileDrop:"onFileDrop",onFileOver:"onFileOver",onFileLeave:"onFileLeave"},decls:7,vars:15,consts:[[3,"className","drop","dragover","dragleave"],[3,"className"],["type","file",1,"ngx-file-drop__file-input",3,"accept","multiple","change"],["fileSelector",""],["defaultContentTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ngx-file-drop__drop-zone-label",4,"ngIf"],[4,"ngIf"],[1,"ngx-file-drop__drop-zone-label"],["type","button",3,"className","value","click"]],template:function(e,t){if(1&e&&(c.bc(0,"div",0),c.jc("drop",(function(e){return t.dropFiles(e)}))("dragover",(function(e){return t.onDragOver(e)}))("dragleave",(function(e){return t.onDragLeave(e)})),c.bc(1,"div",1),c.bc(2,"input",2,3),c.jc("change",(function(e){return t.uploadFiles(e)})),c.ac(),c.Jc(4,u,2,2,"ng-template",null,4,c.Kc),c.Jc(6,p,0,0,"ng-template",5),c.ac(),c.ac()),2&e){var n=c.Ac(5);c.Mb("ngx-file-drop__drop-zone--over",t.isDraggingOverDropZone),c.uc("className",t.dropZoneClassName),c.Ib(1),c.uc("className",t.contentClassName),c.Ib(1),c.uc("accept",t.accept)("multiple",t.multiple),c.Jb("directory",t.directory||void 0)("webkitdirectory",t.directory||void 0)("mozdirectory",t.directory||void 0)("msdirectory",t.directory||void 0)("odirectory",t.directory||void 0),c.Ib(4),c.uc("ngTemplateOutlet",t.contentTemplate||n)("ngTemplateOutletContext",c.xc(13,y,t.openFileSelector))}},directives:[i.q,i.l],styles:[".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:rgba(147,147,147,.5)}.ngx-file-drop__content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]}),F([Object(c.v)(),C("design:type",String)],b.prototype,"accept",void 0),F([Object(c.v)(),C("design:type",Boolean)],b.prototype,"directory",void 0),F([Object(c.v)(),C("design:type",Boolean)],b.prototype,"multiple",void 0),F([Object(c.v)(),C("design:type",String)],b.prototype,"dropZoneLabel",void 0),F([Object(c.v)(),C("design:type",String)],b.prototype,"dropZoneClassName",void 0),F([Object(c.v)(),C("design:type",String)],b.prototype,"contentClassName",void 0),F([Object(c.v)(),C("design:type",Boolean),C("design:paramtypes",[Boolean])],b.prototype,"disabled",null),F([Object(c.v)(),C("design:type",Boolean)],b.prototype,"showBrowseBtn",void 0),F([Object(c.v)(),C("design:type",String)],b.prototype,"browseBtnClassName",void 0),F([Object(c.v)(),C("design:type",String)],b.prototype,"browseBtnLabel",void 0),F([Object(c.F)(),C("design:type",c.q)],b.prototype,"onFileDrop",void 0),F([Object(c.F)(),C("design:type",c.q)],b.prototype,"onFileOver",void 0),F([Object(c.F)(),C("design:type",c.q)],b.prototype,"onFileLeave",void 0),F([Object(c.l)(k,{read:c.Q}),C("design:type",c.Q)],b.prototype,"contentTemplate",void 0),F([Object(c.T)("fileSelector",{static:!0}),C("design:type",c.n)],b.prototype,"fileSelector",void 0),b=F([C("design:paramtypes",[c.D,c.J])],b)),E=((g=function e(){_classCallCheck(this,e)}).\u0275mod=c.Tb({type:g,bootstrap:function(){return[I]}}),g.\u0275inj=c.Sb({factory:function(e){return new(e||g)},providers:[],imports:[[i.c]]}),g),O=((m=function e(){_classCallCheck(this,e)}).\u0275mod=c.Tb({type:m}),m.\u0275inj=c.Sb({factory:function(e){return new(e||m)},imports:[[i.c,o.c,r.k,r.s,E]]}),m),_=function e(){_classCallCheck(this,e)},D=n("OZ4H"),L=n("29Wa"),T=n("Cd2c"),x=n("PBFl"),S=((h=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=c.Pb({type:h,selectors:[["s3-new-folder-modal"]],decls:10,vars:2,consts:[["mat-dialog-title",""],[1,"example-full-width"],["matInput","","placeholder","Folder Name",3,"ngModel","ngModelChange"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(e,t){1&e&&(c.bc(0,"h1",0),c.Lc(1,"Create a new folder"),c.ac(),c.bc(2,"mat-dialog-content"),c.bc(3,"mat-form-field",1),c.bc(4,"input",2),c.jc("ngModelChange",(function(e){return t.folderName=e})),c.ac(),c.ac(),c.ac(),c.bc(5,"mat-dialog-actions"),c.bc(6,"button",3),c.Lc(7,"Cancel"),c.ac(),c.bc(8,"button",4),c.Lc(9," OK "),c.ac(),c.ac()),2&e&&(c.Ib(4),c.uc("ngModel",t.folderName),c.Ib(4),c.uc("mat-dialog-close",t.folderName))},directives:[D.h,D.e,L.b,T.b,r.b,r.o,r.r,D.c,x.a,D.d],styles:[""]}),h),M=((v=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=c.Pb({type:v,selectors:[["s3-rename-modal"]],decls:10,vars:2,consts:[["mat-dialog-title",""],[1,"example-full-width"],["matInput","","placeholder","Folder Name",3,"ngModel","ngModelChange"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(e,t){1&e&&(c.bc(0,"h1",0),c.Lc(1,"Rename Element"),c.ac(),c.bc(2,"mat-dialog-content"),c.bc(3,"mat-form-field",1),c.bc(4,"input",2),c.jc("ngModelChange",(function(e){return t.folderName=e})),c.ac(),c.ac(),c.ac(),c.bc(5,"mat-dialog-actions"),c.bc(6,"button",3),c.Lc(7,"Cancel"),c.ac(),c.bc(8,"button",4),c.Lc(9," OK "),c.ac(),c.ac()),2&e&&(c.Ib(4),c.uc("ngModel",t.folderName),c.Ib(4),c.uc("mat-dialog-close",t.folderName))},directives:[D.h,D.e,L.b,T.b,r.b,r.o,r.r,D.c,x.a,D.d],styles:[""]}),v),j=n("A7yd"),N=n("Y2X+"),P=n("qFEQ"),A=n("bFHC"),B=n("Jb3d"),Z=n("GAih"),J=n("4+zl");function R(e,t){if(1&e){var n=c.cc();c.bc(0,"button",6),c.jc("click",(function(){return c.Cc(n),c.nc().navigateUp()})),c.bc(1,"mat-icon"),c.Lc(2," arrow_back "),c.ac(),c.ac()}}function q(e,t){if(1&e&&(c.bc(0,"div",17),c.Lc(1),c.ac()),2&e){var n=c.nc();c.Ib(1),c.Nc(" ",n.selected.length," File(s) Selected ")}}function z(e,t){if(1&e){var n=c.cc();c.bc(0,"button",6),c.jc("click",(function(){return c.Cc(n),c.nc().selected=[]})),c.bc(1,"mat-icon"),c.Lc(2," clear "),c.ac(),c.ac()}}function U(e,t){1&e&&(c.bc(0,"mat-icon",23),c.Lc(1," folder "),c.ac())}function Q(e,t){1&e&&(c.bc(0,"mat-icon",23),c.Lc(1," insert_drive_file "),c.ac())}var H=function(e){return{element:e}},$=function(e){return{"background-color":e}};function G(e,t){if(1&e){var n=c.cc();c.bc(0,"div",18),c.Wb(1,"span",19,20),c.bc(3,"div",21),c.jc("click",(function(e){c.Cc(n);var i=t.$implicit;return c.nc().navigate(i,e)}))("contextmenu",(function(e){return c.Cc(n),c.Ac(2).openMenu(),e.preventDefault()})),c.Jc(4,U,2,0,"mat-icon",22),c.Jc(5,Q,2,0,"mat-icon",22),c.bc(6,"span"),c.Lc(7),c.oc(8,"ellipsis"),c.ac(),c.ac(),c.ac()}if(2&e){var i=t.$implicit,o=c.nc(),r=c.Ac(21);c.Ib(1),c.uc("matMenuTriggerFor",r)("matMenuTriggerData",c.xc(11,H,i)),c.Ib(2),c.vc("matTooltip",i.name),c.uc("id",i.id)("ngStyle",c.xc(13,$,o.selected.includes(i)?"grey":"")),c.Ib(1),c.uc("ngIf",i.isFolder),c.Ib(1),c.uc("ngIf",!i.isFolder),c.Ib(2),c.Mc(c.qc(8,8,i.name,20))}}function Y(e,t){if(1&e){var n=c.cc();c.bc(0,"button",26),c.jc("click",(function(){c.Cc(n);var e=c.nc().element;return c.nc().encrypt(e)})),c.bc(1,"mat-icon"),c.Lc(2,"lock"),c.ac(),c.bc(3,"span"),c.Lc(4,"Encrypt"),c.ac(),c.ac()}}function K(e,t){if(1&e){var n=c.cc();c.bc(0,"button",26),c.jc("click",(function(){c.Cc(n);var e=c.nc().element;return c.nc().decrypt(e)})),c.bc(1,"mat-icon"),c.Lc(2,"lock_open"),c.ac(),c.bc(3,"span"),c.Lc(4,"Decrypt"),c.ac(),c.ac()}}var V=function(e){return{self:e}};function W(e,t){if(1&e){var n=c.cc();c.bc(0,"button",24),c.bc(1,"mat-icon"),c.Lc(2,"open_with"),c.ac(),c.bc(3,"span"),c.Lc(4,"Move To"),c.ac(),c.ac(),c.bc(5,"button",25),c.jc("click",(function(){c.Cc(n);var e=t.element;return c.nc().openRenameDialog(e)})),c.bc(6,"mat-icon"),c.Lc(7,"edit"),c.ac(),c.bc(8,"span"),c.Lc(9,"Rename"),c.ac(),c.ac(),c.bc(10,"button",26),c.jc("click",(function(){c.Cc(n);var e=t.element;return c.nc().deleteElement(e)})),c.bc(11,"mat-icon"),c.Lc(12,"delete"),c.ac(),c.bc(13,"span"),c.Lc(14,"Delete"),c.ac(),c.ac(),c.Jc(15,Y,5,0,"button",27),c.Jc(16,K,5,0,"button",27)}if(2&e){var i=t.element,o=c.nc(),r=c.Ac(24);c.uc("matMenuTriggerFor",r)("matMenuTriggerData",c.xc(5,V,i)),c.Ib(5),c.uc("disabled",o.selected.length>0),c.Ib(10),c.uc("ngIf",!i.isFolder),c.Ib(1),c.uc("ngIf",!i.isFolder)}}function X(e,t){if(1&e){var n=c.cc();c.bc(0,"button",26),c.jc("click",(function(){c.Cc(n);var e=c.nc().self;return c.nc().moveElement(e,null)})),c.Lc(1," Parent "),c.ac()}}function ee(e,t){if(1&e){var n=c.cc();c.bc(0,"button",26),c.jc("click",(function(){c.Cc(n);var e=c.nc().$implicit,t=c.nc().self;return c.nc().moveElement(t,e)})),c.Lc(1),c.ac()}if(2&e){var i=c.nc().$implicit;c.Ib(1),c.Nc(" ",i.name," ")}}function te(e,t){if(1&e&&(c.Zb(0),c.Jc(1,ee,2,1,"button",27),c.Yb()),2&e){var n=t.$implicit,i=c.nc().self,o=c.nc();c.Ib(1),c.uc("ngIf",n.isFolder&&n.id!==i.id&&!o.selected.includes(n))}}function ne(e,t){if(1&e&&(c.Zb(0),c.Jc(1,X,2,0,"button",27),c.Yb(),c.Jc(2,te,2,1,"ng-container",28)),2&e){var n=c.nc();c.Ib(1),c.uc("ngIf",n.canNavigateUp),c.Ib(1),c.uc("ngForOf",n._fileElements)}}function ie(e,t){if(1&e){var n=c.cc();c.bc(0,"ngx-file-drop",29),c.jc("onFileDrop",(function(e){c.Cc(n);var t=c.nc();return t.dropped(e),t.dragged=!1}))("onFileOver",(function(e){return c.Cc(n),c.nc().fileOver(e)}))("onFileLeave",(function(e){c.Cc(n);var t=c.nc();return t.fileLeave(e),t.dragged=!1})),c.ac()}}var oe,re=((oe=function(){function e(t){_classCallCheck(this,e),this.dialog=t,this.selected=[],this._fileElements=[],this.folderAdded=new c.q,this.filesUploaded=new c.q,this.elementRemoved=new c.q,this.elementRenamed=new c.q,this.elementMoved=new c.q,this.navigatedDown=new c.q,this.fileSelected=new c.q,this.navigatedUp=new c.q,this.encryptEmitter=new c.q,this.decryptEmitter=new c.q}return _createClass(e,[{key:"deleteElement",value:function(e){var t=this;this.selected.length?(this.selected.includes(e)||this.selected.push(e),this.selected.forEach((function(e){t.elementRemoved.emit(e)}))):this.elementRemoved.emit(e)}},{key:"navigate",value:function(e,t){t.ctrlKey?this.selected=this.toggleInArray(this.selected,e):(this.selected=[],e.isFolder?this.navigatedDown.emit(e):this.fileSelected.emit(e))}},{key:"navigateUp",value:function(){this.navigatedUp.emit()}},{key:"moveElement",value:function(e,t){var n=this;this.selected.length?(this.selected.includes(e)||this.selected.push(e),this.selected.forEach((function(e){n.elementMoved.emit({element:e,moveTo:t})}))):this.elementMoved.emit({element:e,moveTo:t})}},{key:"openNewFolderDialog",value:function(){var e=this;this.dialog.open(S).afterClosed().subscribe((function(t){t&&e.folderAdded.emit({name:t})}))}},{key:"openRenameDialog",value:function(e){var t=this;this.dialog.open(M).afterClosed().subscribe((function(n){n&&(e.name=n,t.elementRenamed.emit(e))}))}},{key:"openMenu",value:function(e,t,n){e.preventDefault(),n.openMenu()}},{key:"uploadFile",value:function(e){for(var t=e.srcElement.files,n=[],i=0;i<t.length;i++){var o=t[i],r=new _;r.actualFile=o,r.isFolder=!1,r.name=o.name,n.push(r)}this.filesUploaded.emit(n)}},{key:"dropped",value:function(e,t){var n,i=this,o=[],r=e.length,c=0,a=_createForOfIteratorHelper(e);try{var l=function(){var e=n.value;e.fileEntry.isFile&&e.fileEntry.file((function(t){var n=e.relativePath,a=n.split("/");a.pop(),n=a.join("/"),c++;var l=new _;l.actualFile=t,l.isFolder=!1,l.name=t.name,l.parent=n,o.push(l),c===r&&i.filesUploaded.emit(o)}))};for(a.s();!(n=a.n()).done;)l()}catch(s){a.e(s)}finally{a.f()}}},{key:"fileOver",value:function(e){}},{key:"fileLeave",value:function(e){}},{key:"encrypt",value:function(e){this.encryptEmitter.emit(e)}},{key:"decrypt",value:function(e){this.decryptEmitter.emit(e)}},{key:"toggleInArray",value:function(e,t){var n=e.indexOf(t);return-1===n?e.push(t):e.splice(n,1),e}},{key:"fileElements",set:function(e){this._fileElements=e,this.selected=[]}}]),e}()).\u0275fac=function(e){return new(e||oe)(c.Vb(D.b))},oe.\u0275cmp=c.Pb({type:oe,selectors:[["rms-file-explorer"]],inputs:{fileElements:"fileElements",canNavigateUp:"canNavigateUp",path:"path"},outputs:{folderAdded:"folderAdded",filesUploaded:"filesUploaded",elementRemoved:"elementRemoved",elementRenamed:"elementRenamed",elementMoved:"elementMoved",navigatedDown:"navigatedDown",fileSelected:"fileSelected",navigatedUp:"navigatedUp",encryptEmitter:"encryptEmitter",decryptEmitter:"decryptEmitter"},decls:29,vars:19,consts:[[3,"dragover"],[2,"height","max-content","min-height","64px"],["mat-icon-button","",3,"click",4,"ngIf"],["matTooltipPosition","below","matTooltipClass","tooltip2",1,"wrap-path",3,"matTooltip"],["fxFlex","1 1 auto"],["class","small-font",4,"ngIf"],["mat-icon-button","",3,"click"],[1,"container"],["fxFlex","","fxLayout","row wrap",1,"content"],["class","file-or-folder",4,"ngFor","ngForOf"],[3,"overlapTrigger"],["rootMenu","matMenu"],["matMenuContent",""],["moveToMenu","matMenu"],["dropZoneLabel","Drop files here","dropZoneClassName","drop-area","contentClassName","drop-content","style","height: 10px;\n  width: 10px;\n  display: block;",3,"onFileDrop","onFileOver","onFileLeave",4,"ngIf"],["hidden","","multiple","","type","file",3,"change"],["uploader",""],[1,"small-font"],[1,"file-or-folder"],[3,"matMenuTriggerFor","matMenuTriggerData"],["menuTrigger","matMenuTrigger"],["fxFlex","","fxLayout","column space-between","matTooltipPosition","below","matTooltipClass","tooltip",1,"element-container",3,"id","ngStyle","matTooltip","click","contextmenu"],["color","primary","class","file-or-folder-icon pointer",4,"ngIf"],["color","primary",1,"file-or-folder-icon","pointer"],["mat-menu-item","",3,"matMenuTriggerFor","matMenuTriggerData"],["mat-menu-item","",3,"disabled","click"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["dropZoneLabel","Drop files here","dropZoneClassName","drop-area","contentClassName","drop-content",2,"height","10px","width","10px","display","block",3,"onFileDrop","onFileOver","onFileLeave"]],template:function(e,t){if(1&e){var n=c.cc();c.bc(0,"div",0),c.jc("dragover",(function(){return t.dragged=!0})),c.bc(1,"mat-toolbar",1),c.Jc(2,R,3,0,"button",2),c.bc(3,"span",3),c.Lc(4),c.oc(5,"ellipsis"),c.ac(),c.Wb(6,"span",4),c.Jc(7,q,2,1,"div",5),c.Jc(8,z,3,0,"button",2),c.bc(9,"button",6),c.jc("click",(function(){return t.openNewFolderDialog()})),c.bc(10,"mat-icon"),c.Lc(11," create_new_folder "),c.ac(),c.ac(),c.bc(12,"button",6),c.jc("click",(function(){return c.Cc(n),c.Ac(28).click()})),c.bc(13,"mat-icon"),c.Lc(14," cloud_upload "),c.ac(),c.ac(),c.ac(),c.bc(15,"div",7),c.bc(16,"div",8),c.Jc(17,G,9,15,"div",9),c.oc(18,"orderBy"),c.oc(19,"orderBy"),c.ac(),c.ac(),c.bc(20,"mat-menu",10,11),c.Jc(22,W,17,7,"ng-template",12),c.ac(),c.bc(23,"mat-menu",null,13),c.Jc(25,ne,3,2,"ng-template",12),c.ac(),c.ac(),c.Jc(26,ie,1,0,"ngx-file-drop",14),c.bc(27,"input",15,16),c.jc("change",(function(e){return t.uploadFile(e)})),c.ac()}2&e&&(c.Ib(2),c.uc("ngIf",t.canNavigateUp),c.Ib(1),c.vc("matTooltip",t.path),c.Ib(1),c.Nc(" ",c.qc(5,8,t.path,100)," "),c.Ib(3),c.uc("ngIf",t.selected.length),c.Ib(1),c.uc("ngIf",t.selected.length),c.Ib(9),c.uc("ngForOf",c.rc(18,11,c.rc(19,15,t._fileElements,"asc","name"),"desc","isFolder")),c.Ib(3),c.uc("overlapTrigger",!1),c.Ib(6),c.uc("ngIf",t.dragged))},directives:[j.a,i.l,N.a,P.a,x.a,A.a,P.c,i.k,B.e,B.a,B.d,i.m,Z.a,B.b,I],pipes:[o.d,J.a],styles:[".file-or-folder[_ngcontent-%COMP%]{padding:8px;overflow:hidden}.file-or-folder-icon[_ngcontent-%COMP%]{width:50px;height:50px;font-size:50px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.element-container[_ngcontent-%COMP%]{padding:15px;width:100px;word-break:break-all}.small-font[_ngcontent-%COMP%]{font-size:small;word-break:break-all}  .tooltip,   .tooltip2{word-break:break-all!important;white-space:normal!important}  .tooltip2{min-width:100%}.wrap-path[_ngcontent-%COMP%]{max-width:80%;word-break:break-all!important;white-space:normal!important}"],changeDetection:0}),oe)}}]);