(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2Xdf":function(e,t,n){"use strict";n.r(t),n.d(t,"FileExplorerComponent",(function(){return z}));var c=n("EM62"),i=n("rQns"),o=n("OZ4H"),a=n("29Wa"),l=n("Cd2c"),r=n("nIj0"),s=n("PBFl");let d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ob({type:e,selectors:[["s3-new-folder-modal"]],decls:10,vars:2,consts:[["mat-dialog-title",""],[1,"example-full-width"],["matInput","","placeholder","Folder Name",3,"ngModel","ngModelChange"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(e,t){1&e&&(c.ac(0,"h1",0),c.Hc(1,"Create a new folder"),c.Zb(),c.ac(2,"mat-dialog-content"),c.ac(3,"mat-form-field",1),c.ac(4,"input",2),c.ic("ngModelChange",(function(e){return t.folderName=e})),c.Zb(),c.Zb(),c.Zb(),c.ac(5,"mat-dialog-actions"),c.ac(6,"button",3),c.Hc(7,"Cancel"),c.Zb(),c.ac(8,"button",4),c.Hc(9," OK "),c.Zb(),c.Zb()),2&e&&(c.Ib(4),c.rc("ngModel",t.folderName),c.Ib(4),c.rc("mat-dialog-close",t.folderName))},directives:[o.f,o.d,a.b,l.b,r.b,r.h,r.j,o.b,s.a,o.c],styles:[""]}),e})(),m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ob({type:e,selectors:[["s3-rename-modal"]],decls:10,vars:2,consts:[["mat-dialog-title",""],[1,"example-full-width"],["matInput","","placeholder","Folder Name",3,"ngModel","ngModelChange"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(e,t){1&e&&(c.ac(0,"h1",0),c.Hc(1,"Rename Element"),c.Zb(),c.ac(2,"mat-dialog-content"),c.ac(3,"mat-form-field",1),c.ac(4,"input",2),c.ic("ngModelChange",(function(e){return t.folderName=e})),c.Zb(),c.Zb(),c.Zb(),c.ac(5,"mat-dialog-actions"),c.ac(6,"button",3),c.Hc(7,"Cancel"),c.Zb(),c.ac(8,"button",4),c.Hc(9," OK "),c.Zb(),c.Zb()),2&e&&(c.Ib(4),c.rc("ngModel",t.folderName),c.Ib(4),c.rc("mat-dialog-close",t.folderName))},directives:[o.f,o.d,a.b,l.b,r.b,r.h,r.j,o.b,s.a,o.c],styles:[""]}),e})();var f=n("A7yd"),u=n("2kYt"),b=n("qFEQ"),p=n("bFHC"),g=n("Jb3d"),h=n("GAih"),v=n("hcP7");function F(e,t){if(1&e){const e=c.bc();c.ac(0,"button",4),c.ic("click",(function(){return c.zc(e),c.mc().navigateUp()})),c.ac(1,"mat-icon"),c.Hc(2," arrow_back "),c.Zb(),c.Zb()}}function Z(e,t){if(1&e&&(c.ac(0,"span",15),c.Hc(1),c.Zb()),2&e){const e=c.mc();c.Ib(1),c.Jc("",e.selected.length," File(s) Selected")}}function I(e,t){if(1&e){const e=c.bc();c.ac(0,"button",4),c.ic("click",(function(){return c.zc(e),c.mc().selected=[]})),c.ac(1,"mat-icon"),c.Hc(2," clear "),c.Zb(),c.Zb()}}function w(e,t){1&e&&(c.ac(0,"mat-icon",21),c.Hc(1," folder "),c.Zb())}function M(e,t){1&e&&(c.ac(0,"mat-icon",21),c.Hc(1," insert_drive_file "),c.Zb())}const y=function(e){return{element:e}},E=function(e){return{"background-color":e}};function H(e,t){if(1&e){const e=c.bc();c.ac(0,"div",16),c.Vb(1,"span",17,18),c.ac(3,"div",19),c.ic("click",(function(n){c.zc(e);const i=t.$implicit;return c.mc().navigate(i,n)}))("contextmenu",(function(t){return c.zc(e),c.xc(2).openMenu(),t.preventDefault()})),c.Fc(4,w,2,0,"mat-icon",20),c.Fc(5,M,2,0,"mat-icon",20),c.ac(6,"span"),c.Hc(7),c.Zb(),c.Zb(),c.Zb()}if(2&e){const e=t.$implicit,n=c.mc(),i=c.xc(18);c.Ib(1),c.rc("matMenuTriggerFor",i)("matMenuTriggerData",c.uc(6,y,e)),c.Ib(2),c.rc("ngStyle",c.uc(8,E,n.selected.includes(e)?"grey":"")),c.Ib(1),c.rc("ngIf",e.isFolder),c.Ib(1),c.rc("ngIf",!e.isFolder),c.Ib(2),c.Ic(e.name)}}function k(e,t){if(1&e){const e=c.bc();c.ac(0,"button",24),c.ic("click",(function(){c.zc(e);const t=c.mc().element;return c.mc().encrypt(t)})),c.ac(1,"mat-icon"),c.Hc(2,"lock"),c.Zb(),c.ac(3,"span"),c.Hc(4,"Encrypt"),c.Zb(),c.Zb()}}function x(e,t){if(1&e){const e=c.bc();c.ac(0,"button",24),c.ic("click",(function(){c.zc(e);const t=c.mc().element;return c.mc().decrypt(t)})),c.ac(1,"mat-icon"),c.Hc(2,"lock_open"),c.Zb(),c.ac(3,"span"),c.Hc(4,"Decrypt"),c.Zb(),c.Zb()}}const O=function(e){return{self:e}};function C(e,t){if(1&e){const e=c.bc();c.ac(0,"button",22),c.ac(1,"mat-icon"),c.Hc(2,"open_with"),c.Zb(),c.ac(3,"span"),c.Hc(4,"Move To"),c.Zb(),c.Zb(),c.ac(5,"button",23),c.ic("click",(function(){c.zc(e);const n=t.element;return c.mc().openRenameDialog(n)})),c.ac(6,"mat-icon"),c.Hc(7,"edit"),c.Zb(),c.ac(8,"span"),c.Hc(9,"Rename"),c.Zb(),c.Zb(),c.ac(10,"button",24),c.ic("click",(function(){c.zc(e);const n=t.element;return c.mc().deleteElement(n)})),c.ac(11,"mat-icon"),c.Hc(12,"delete"),c.Zb(),c.ac(13,"span"),c.Hc(14,"Delete"),c.Zb(),c.Zb(),c.Fc(15,k,5,0,"button",25),c.Fc(16,x,5,0,"button",25)}if(2&e){const e=t.element,n=c.mc(),i=c.xc(21);c.rc("matMenuTriggerFor",i)("matMenuTriggerData",c.uc(5,O,e)),c.Ib(5),c.rc("disabled",n.selected.length>0),c.Ib(10),c.rc("ngIf",!e.isFolder),c.Ib(1),c.rc("ngIf",!e.isFolder)}}function D(e,t){if(1&e){const e=c.bc();c.ac(0,"button",24),c.ic("click",(function(){c.zc(e);const t=c.mc().$implicit,n=c.mc().self;return c.mc().moveElement(n,t)})),c.Hc(1),c.Zb()}if(2&e){const e=c.mc().$implicit;c.Ib(1),c.Jc(" ",e.name," ")}}function N(e,t){if(1&e&&(c.Yb(0),c.Fc(1,D,2,1,"button",25),c.Xb()),2&e){const e=t.$implicit,n=c.mc().self,i=c.mc();c.Ib(1),c.rc("ngIf",e.isFolder&&e.id!==n.id&&!i.selected.includes(e))}}function _(e,t){if(1&e&&c.Fc(0,N,2,1,"ng-container",26),2&e){const e=c.mc();c.rc("ngForOf",e._fileElements)}}function T(e,t){if(1&e){const e=c.bc();c.ac(0,"ngx-file-drop",27),c.ic("onFileDrop",(function(t){c.zc(e);const n=c.mc();return n.dropped(t),n.dragged=!1}))("onFileOver",(function(t){return c.zc(e),c.mc().fileOver(t)}))("onFileLeave",(function(t){c.zc(e);const n=c.mc();return n.fileLeave(t),n.dragged=!1})),c.Zb()}}let z=(()=>{class e{constructor(e){this.dialog=e,this.selected=[],this._fileElements=[],this.folderAdded=new c.q,this.filesUploaded=new c.q,this.elementRemoved=new c.q,this.elementRenamed=new c.q,this.elementMoved=new c.q,this.navigatedDown=new c.q,this.fileSelected=new c.q,this.navigatedUp=new c.q,this.encryptEmitter=new c.q,this.decryptEmitter=new c.q}set fileElements(e){this._fileElements=e,this.selected=[]}deleteElement(e){this.selected.length?(this.selected.includes(e)||this.selected.push(e),this.selected.forEach(e=>{this.elementRemoved.emit(e)})):this.elementRemoved.emit(e)}navigate(e,t){t.ctrlKey?this.selected=this.toggleInArray(this.selected,e):(this.selected=[],e.isFolder?this.navigatedDown.emit(e):this.fileSelected.emit(e))}navigateUp(){this.navigatedUp.emit()}moveElement(e,t){this.selected.length?(this.selected.includes(e)||this.selected.push(e),this.selected.forEach(e=>{this.elementMoved.emit({element:e,moveTo:t})})):this.elementMoved.emit({element:e,moveTo:t})}openNewFolderDialog(){this.dialog.open(d).afterClosed().subscribe(e=>{e&&this.folderAdded.emit({name:e})})}openRenameDialog(e){this.dialog.open(m).afterClosed().subscribe(t=>{t&&(e.name=t,this.elementRenamed.emit(e))})}openMenu(e,t,n){e.preventDefault(),n.openMenu()}uploadFile(e){const t=e.srcElement.files,n=[];for(let c=0;c<t.length;c++){const e=t[c],o=new i.a;o.actualFile=e,o.isFolder=!1,o.name=e.name,n.push(o)}this.filesUploaded.emit(n)}dropped(e,t){const n=[],c=e.length;let o=0;for(const a of e)a.fileEntry.isFile&&a.fileEntry.file(e=>{let t=a.relativePath;const l=t.split("/");l.pop(),t=l.join("/"),o++;const r=new i.a;r.actualFile=e,r.isFolder=!1,r.name=e.name,r.parent=t,n.push(r),o===c&&this.filesUploaded.emit(n)})}fileOver(e){}fileLeave(e){}encrypt(e){this.encryptEmitter.emit(e)}decrypt(e){this.decryptEmitter.emit(e)}toggleInArray(e,t){const n=e.indexOf(t);return-1===n?e.push(t):e.splice(n,1),e}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(o.a))},e.\u0275cmp=c.Ob({type:e,selectors:[["rms-file-explorer"]],inputs:{fileElements:"fileElements",canNavigateUp:"canNavigateUp",path:"path"},outputs:{folderAdded:"folderAdded",filesUploaded:"filesUploaded",elementRemoved:"elementRemoved",elementRenamed:"elementRenamed",elementMoved:"elementMoved",navigatedDown:"navigatedDown",fileSelected:"fileSelected",navigatedUp:"navigatedUp",encryptEmitter:"encryptEmitter",decryptEmitter:"decryptEmitter"},decls:26,vars:7,consts:[[3,"dragover"],["mat-icon-button","",3,"click",4,"ngIf"],["fxFlex","1 1 auto"],["class","small-font",4,"ngIf"],["mat-icon-button","",3,"click"],[1,"container"],["fxFlex","","fxLayout","row wrap",1,"content"],["class","file-or-folder",4,"ngFor","ngForOf"],[3,"overlapTrigger"],["rootMenu","matMenu"],["matMenuContent",""],["moveToMenu","matMenu"],["dropZoneLabel","Drop files here","dropZoneClassName","drop-area","contentClassName","drop-content",3,"onFileDrop","onFileOver","onFileLeave",4,"ngIf"],["hidden","","multiple","","type","file",3,"change"],["uploader",""],[1,"small-font"],[1,"file-or-folder"],[3,"matMenuTriggerFor","matMenuTriggerData"],["menuTrigger","matMenuTrigger"],["fxFlex","","fxLayout","column space-between",1,"element-container",3,"ngStyle","click","contextmenu"],["color","primary","class","file-or-folder-icon pointer",4,"ngIf"],["color","primary",1,"file-or-folder-icon","pointer"],["mat-menu-item","",3,"matMenuTriggerFor","matMenuTriggerData"],["mat-menu-item","",3,"disabled","click"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["dropZoneLabel","Drop files here","dropZoneClassName","drop-area","contentClassName","drop-content",3,"onFileDrop","onFileOver","onFileLeave"]],template:function(e,t){if(1&e){const e=c.bc();c.ac(0,"div",0),c.ic("dragover",(function(){return t.dragged=!0})),c.ac(1,"mat-toolbar"),c.Fc(2,F,3,0,"button",1),c.ac(3,"span"),c.Hc(4),c.Zb(),c.Vb(5,"span",2),c.Fc(6,Z,2,1,"span",3),c.Fc(7,I,3,0,"button",1),c.ac(8,"button",4),c.ic("click",(function(){return t.openNewFolderDialog()})),c.ac(9,"mat-icon"),c.Hc(10," create_new_folder "),c.Zb(),c.Zb(),c.ac(11,"button",4),c.ic("click",(function(){return c.zc(e),c.xc(25).click()})),c.ac(12,"mat-icon"),c.Hc(13," cloud_upload "),c.Zb(),c.Zb(),c.Zb(),c.ac(14,"div",5),c.ac(15,"div",6),c.Fc(16,H,8,10,"div",7),c.Zb(),c.Zb(),c.ac(17,"mat-menu",8,9),c.Fc(19,C,17,7,"ng-template",10),c.Zb(),c.ac(20,"mat-menu",null,11),c.Fc(22,_,1,1,"ng-template",10),c.Zb(),c.Zb(),c.Fc(23,T,1,0,"ngx-file-drop",12),c.ac(24,"input",13,14),c.ic("change",(function(e){return t.uploadFile(e)})),c.Zb()}2&e&&(c.Ib(2),c.rc("ngIf",t.canNavigateUp),c.Ib(2),c.Jc(" ",t.path||"Files"," "),c.Ib(2),c.rc("ngIf",t.selected.length),c.Ib(1),c.rc("ngIf",t.selected.length),c.Ib(9),c.rc("ngForOf",t._fileElements),c.Ib(1),c.rc("overlapTrigger",!1),c.Ib(6),c.rc("ngIf",t.dragged))},directives:[f.a,u.k,b.a,s.a,p.a,b.b,u.j,g.e,g.a,g.d,u.l,h.a,g.b,v.a],styles:[".file-or-folder[_ngcontent-%COMP%]{padding:8px;overflow:hidden}.file-or-folder-icon[_ngcontent-%COMP%]{width:50px;height:50px;font-size:50px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.element-container[_ngcontent-%COMP%]{padding:15px;width:100px;word-break:break-all}.small-font[_ngcontent-%COMP%]{font-size:small}"],changeDetection:0}),e})()}}]);