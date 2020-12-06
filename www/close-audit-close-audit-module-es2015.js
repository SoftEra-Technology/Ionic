(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["close-audit-close-audit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/close-audit/close-audit.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/close-audit/close-audit.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div style=\"background-color: black; align-content: center;\"><table style=\"margin-left: 10px; margin-top: 5px; margin-bottom: 2px;\"><tbody><tr><td><span style=\"margin-top:20px; margin-left: 5px; margin-top: 1px;\"><img src=\"../../assets/tablez.png\"  height=\"35\" width=\"35\" /></span></td><td>&nbsp;</td><td><span style=\"color: white; margin-top: 1px;\">Compleated Audit</span></td></tr></tbody></table> </div>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let element_Audit of AttemptedOpenAuditByUser\"> \n  \n   <ion-item>\n    <table>\n      <tbody>\n        <tr>\n          <td rowspan=\"2\" width=\"5%\" align=\"center\"> <span *ngIf=\"element_Audit.MARKS_SCORED===0\"><img src=\"../../assets/red_lock_48.png\"  height=\"40\" width=\"50\" /></span> <span *ngIf=\"element_Audit.MARKS_SCORED>0\"><img src=\"../../assets/refresh1.jpg\"  height=\"40\" width=\"50\" /></span> </td>\n          <td width=\"90%\" align=\"left\" style=\"font-size:x-large;\"><b> Audit: {{element_Audit.AUDIT_NAME}}  {{element_Audit.STR_NAME}}</b> </td>\n          \n        </tr>\n        <tr>\n          <td align=\"left\">  &nbsp;&nbsp;Audit Performed On: {{element_Audit.AUDIT_DT | slice:0:10}} Total Marks: {{element_Audit.AUDIT_POINTS}}  Marks Scored: {{element_Audit.MARKS_SCORED}} \n            </td>\n        </tr>\n      </tbody>\n    </table>\n    <ion-note slot=\"end\" color=\"tertiary\"><ion-button  color=\"medium\" (click)=\"OenAudit_Page_setting(element_Audit.ATTEMPTED_ID, element_Audit.AUDIT_ID, element_Audit.STR_CODE)\"> <ion-checkbox color=\"dark\"></ion-checkbox></ion-button></ion-note>\n   \n    \n              \n             \n  </ion-item>\n</div>\n\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-grid>\n    <ion-row>\n     \n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\"  expand=\"full\" (click)=\"Add_Comment()\">Audit Findings</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\"  (click)=\"openCam()\" expand=\"full\">Attach Image</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\"  (click)=\"PushAudit()\" expand=\"full\">Push</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\" (click)=\"GoToAuditList()\"  expand=\"full\">Open</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\" (click)=\"GoToDashboard()\"  expand=\"full\">Exit</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/unit-manager-login/unit-manager-login.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unit-manager-login/unit-manager-login.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <br/><br/><br/>\n  <div style=\"margin-left:35px; margin-right: 35px;\">\n    <!--<form id=\"contactForm\" [formGroup]=\"form_user\">-->\n       <div style= \"border: 1px solid black;\">\n         <ion-input type=\"text\"   [(ngModel)]=\"UMId\" placeholder=\"Unit Manager Id\"></ion-input>\n       </div><br/>\n       <div style=\"border: 1px solid black;\">\n         \n         <ion-input  type=\"Password\" [(ngModel)]=\"PASS\" placeholder=\"Password\"></ion-input>\n       </div>\n      <br/>\n \n         <!--<div><ion-button  style=\"background-color: #3986b2;\" (click)=\"sendPostRequest(form_user)\">&nbsp;&nbsp;&nbsp;Sign In &nbsp;&nbsp;&nbsp;</ion-button></div>-->\n       \n         <!-- <div><ion-button  style=\"background-color: #3986b2;\" (click)=\"checkconnection_serve()\">&nbsp;&nbsp;&nbsp;check connection&nbsp;&nbsp;&nbsp;</ion-button></div> -->\n         \n \n   <!--</form>-->\n </div>\n   \n      \n     \n      <div style=\"margin-left: 8px; margin-right: 8px;\">Comment</div>\n        <div style=\"border-style: double; margin-left: 8px; margin-right: 8px;\"> \n      <ion-textarea rows=\"6\" cols=\"25\"   style=\"background-color: whitesmoke;\" [(ngModel)]=\"comment_um\"></ion-textarea>\n    </div>\n  \n    <div style=\"margin-left: 8px; margin-right: 8px;\">\n      <ion-button  color=\"medium\" (click)=\"close_Comment()\">Exit</ion-button>\n      <ion-button  color=\"medium\" (click)=\"save_Comment()\">Push</ion-button>\n    </div>\n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/Model/FilledChoice.ts":
/*!***************************************!*\
  !*** ./src/app/Model/FilledChoice.ts ***!
  \***************************************/
/*! exports provided: FilledChoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilledChoice", function() { return FilledChoice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FilledChoice {
}


/***/ }),

/***/ "./src/app/Model/SavedAudit.ts":
/*!*************************************!*\
  !*** ./src/app/Model/SavedAudit.ts ***!
  \*************************************/
/*! exports provided: SavedAudit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedAudit", function() { return SavedAudit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SavedAudit {
}


/***/ }),

/***/ "./src/app/Model/SavedQuestion.ts":
/*!****************************************!*\
  !*** ./src/app/Model/SavedQuestion.ts ***!
  \****************************************/
/*! exports provided: SavedQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedQuestion", function() { return SavedQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SavedQuestion {
}


/***/ }),

/***/ "./src/app/Model/UnitManager.ts":
/*!**************************************!*\
  !*** ./src/app/Model/UnitManager.ts ***!
  \**************************************/
/*! exports provided: UnitManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitManager", function() { return UnitManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UnitManager {
}


/***/ }),

/***/ "./src/app/close-audit/close-audit-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/close-audit/close-audit-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CloseAuditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAuditPageRoutingModule", function() { return CloseAuditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _close_audit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close-audit.page */ "./src/app/close-audit/close-audit.page.ts");




const routes = [
    {
        path: '',
        component: _close_audit_page__WEBPACK_IMPORTED_MODULE_3__["CloseAuditPage"]
    }
];
let CloseAuditPageRoutingModule = class CloseAuditPageRoutingModule {
};
CloseAuditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CloseAuditPageRoutingModule);



/***/ }),

/***/ "./src/app/close-audit/close-audit.module.ts":
/*!***************************************************!*\
  !*** ./src/app/close-audit/close-audit.module.ts ***!
  \***************************************************/
/*! exports provided: CloseAuditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAuditPageModule", function() { return CloseAuditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _close_audit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./close-audit-routing.module */ "./src/app/close-audit/close-audit-routing.module.ts");
/* harmony import */ var _close_audit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./close-audit.page */ "./src/app/close-audit/close-audit.page.ts");
/* harmony import */ var _question_comment_question_comment_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../question-comment/question-comment.module */ "./src/app/question-comment/question-comment.module.ts");
/* harmony import */ var _unit_manager_login_unit_manager_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../unit-manager-login/unit-manager-login.module */ "./src/app/unit-manager-login/unit-manager-login.module.ts");









let CloseAuditPageModule = class CloseAuditPageModule {
};
CloseAuditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _unit_manager_login_unit_manager_login_module__WEBPACK_IMPORTED_MODULE_8__["UnitManagerLoginPageModule"],
            _question_comment_question_comment_module__WEBPACK_IMPORTED_MODULE_7__["QuestionCommentPageModule"],
            _close_audit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CloseAuditPageRoutingModule"]
        ],
        declarations: [_close_audit_page__WEBPACK_IMPORTED_MODULE_6__["CloseAuditPage"]]
    })
], CloseAuditPageModule);



/***/ }),

/***/ "./src/app/close-audit/close-audit.page.scss":
/*!***************************************************!*\
  !*** ./src/app/close-audit/close-audit.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3NlLWF1ZGl0L2Nsb3NlLWF1ZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/close-audit/close-audit.page.ts":
/*!*************************************************!*\
  !*** ./src/app/close-audit/close-audit.page.ts ***!
  \*************************************************/
/*! exports provided: CloseAuditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAuditPage", function() { return CloseAuditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _Model_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Store */ "./src/app/Model/Store.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/user-login.service */ "./src/app/Service/user-login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _question_comment_question_comment_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../question-comment/question-comment.page */ "./src/app/question-comment/question-comment.page.ts");
/* harmony import */ var _Service_loader_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/loader-service.service */ "./src/app/Service/loader-service.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _Model_SavedAudit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Model/SavedAudit */ "./src/app/Model/SavedAudit.ts");
/* harmony import */ var _Model_SavedQuestion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Model/SavedQuestion */ "./src/app/Model/SavedQuestion.ts");
/* harmony import */ var _Model_FilledChoice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Model/FilledChoice */ "./src/app/Model/FilledChoice.ts");
/* harmony import */ var _unit_manager_login_unit_manager_login_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../unit-manager-login/unit-manager-login.page */ "./src/app/unit-manager-login/unit-manager-login.page.ts");
/* harmony import */ var _Model_UnitManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Model/UnitManager */ "./src/app/Model/UnitManager.ts");

















const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
let CloseAuditPage = class CloseAuditPage {
    constructor(platform, sqlite, 
    //public database:SQLiteObject,
    userService, router, camera, modalController, screenOrientation, ionLoader) {
        this.platform = platform;
        this.sqlite = sqlite;
        this.userService = userService;
        this.router = router;
        this.camera = camera;
        this.modalController = modalController;
        this.screenOrientation = screenOrientation;
        this.ionLoader = ionLoader;
        this.database_name = "AUDIT_DB.db"; // DB name
        this.savedQuestions_array = [];
        this.ObjUM = new _Model_UnitManager__WEBPACK_IMPORTED_MODULE_15__["UnitManager"]();
        this.image = '';
        this.Question_comment = "";
        this.AttemptedClosedAuditByUser = [];
        this.AttemptedClosedAudit = [];
        this.AttemptedClosedAuditSection = [];
        this.AttemptedClosedAuditSectionQuestion = [];
        this.AttemptedClosedAuditSectionQuestionAnswer = [];
        this.unit_managerid = "";
        this.unit_managerPass = "";
        this.unit_managerComment = "";
        this.filledChoices1 = [];
        this.store = new _Model_Store__WEBPACK_IMPORTED_MODULE_3__["Store"]();
        this.platform.ready().then(() => {
            this.createDB();
            this.setLandscape();
        }).catch(error => {
            console.log(error);
        });
    }
    showLoader() {
        this.ionLoader.showLoader();
        setTimeout(() => {
            this.hideLoader();
        }, 328000);
    }
    hideLoader() {
        this.ionLoader.hideLoader();
        window.location.reload();
    }
    openCam() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        const tempImage = this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //console.log(imageData)
            this.imageData = imageData;
            this.image = window.Ionic.WebView.convertFileSrc(imageData);
        }, (err) => {
            // Handle error
            console.log("error " + JSON.stringify(err));
        });
    }
    upload() {
        let url = 'your REST API url';
        const date = new Date().valueOf();
        // Replace extension according to your media type
        const imageName = date + '.jpeg';
        // call method that creates a blob from dataUri
        const imageBlob = this.dataURItoBlob(this.imageData);
        const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });
        let postData = new FormData();
        postData.append('file', imageFile);
        // let data:Observable<any> = this.http.post(url,postData);
        //data.subscribe((result) => {
        //console.log(result);
        //});
    }
    dataURItoBlob(dataURI) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    }
    Add_Comment() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.Question_comment="akshay  comment"
            const modal = yield this.modalController.create({
                component: _question_comment_question_comment_page__WEBPACK_IMPORTED_MODULE_8__["QuestionCommentPage"],
                componentProps: {
                    'comment': this.Question_comment,
                }
            });
            modal.onDidDismiss()
                .then((data) => {
                console.log("data from model popup in close Audit");
                console.log(data);
                const popup_data1 = data['data']; // Here's your selected user!
                console.log(popup_data1);
                this.Question_comment = popup_data1;
            });
            return yield modal.present();
        });
    }
    OenAudit_Page_setting(lAttemptedId, lAuditId, lStoreId) {
        this.objecta = "";
        this.objecta = {
            AttemptedId: lAttemptedId,
            AuditId: lAuditId,
            Storeid: lStoreId,
        };
    }
    GoToAuditList() {
        this.router.navigate(['/list-audit'], {
            queryParams: {
                value: JSON.stringify(this.objecta)
            },
        });
    }
    setLandscape() {
        // set to landscape
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    createDB() {
        console.log("database created");
        this.sqlite.create({
            name: this.database_name,
            location: 'default'
        })
            .then((db) => {
            this.databaseObj = db;
            //alert('audit Database Created!');
            this.getRows();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    getRows() {
        this.databaseObj.executeSql("SELECT * FROM USER_TB", [])
            .then((res) => {
            this.row_data = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.row_data.push(res.rows.item(i));
                    //alert( this.row_data[i].toString())
                    console.log(this.row_data[i].EMP_ID.toString());
                }
                this.fetchAttemptedOpenAuditByUser(this.row_data[0].EMP_ID.toString());
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    fetchAttemptedOpenAuditByUser(_sUserId) {
        this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,AUDIT_STATUS," +
            "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID) AS TOTALQUESTION," +
            "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID AND QUESTION_STATUS<>'Open') AS ATTEMPTQUESTION," +
            "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND IS_INCLUDED='Yes') AS AUDIT_POINTS," +
            "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND QUESTION_STATUS<>'Open'),0) MARKS_SCORED," +
            "UNIQUE_ID FROM AUDIT_ATTEMPTED_TB t WHERE USER_ID='" + _sUserId + "' AND AUDIT_STATUS='Close'", [])
            .then((res) => {
            this.AttemptedOpenAuditByUser = [];
            console.log(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.AttemptedOpenAuditByUser.push(res.rows.item(i));
                }
                //console.log("anoop");
                //console.log(this.AttemptedOpenAuditByUser);
                return this.AttemptedOpenAuditByUser;
            }
            //this.router.navigate(['dash-board']);
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    GoToDashboard() {
        //this.router.navigate(['dash-board']);
        this.router.navigate(['/dash-board'], {
            queryParams: {
                value: "refresh"
            },
        });
    }
    ngOnInit() {
    }
    // this.comment_um, this.UMId, this.PASS
    PushAudit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let lAttemptedId = this.objecta.AttemptedId;
            // this.deletAttemptedAuditById(Number(lAttemptedId));
            //this.Question_comment="akshay  comment"
            if (this.objecta == undefined) {
                alert("Please Select One Audit");
                return false;
            }
            else {
                const modal = yield this.modalController.create({
                    component: _unit_manager_login_unit_manager_login_page__WEBPACK_IMPORTED_MODULE_14__["UnitManagerLoginPage"],
                    componentProps: {
                        'comment': this.unit_managerComment,
                        'UMId': this.unit_managerid,
                        'PASS': this.unit_managerPass,
                    }
                });
                modal.onDidDismiss()
                    .then((data) => {
                    debugger;
                    console.log("data from model popup in close Audit for Unit Manager");
                    console.log(data);
                    const popup_data1 = data['data']; // Here's your selected user!
                    console.log(popup_data1);
                    this.ObjUM = popup_data1;
                    this.unit_managerid = this.ObjUM.UMId;
                    this.unit_managerPass = this.ObjUM.UMPASS;
                    this.unit_managerComment = this.ObjUM.UComment;
                    //var aa= this.ObjUM.data.UMId;
                    console.log(this.unit_managerid);
                    if (this.unit_managerid == "" || this.unit_managerPass == "") {
                        alert("Please Enter Unit Manager Id And PassWord");
                    }
                    else {
                        this.PushAudit_server(this.unit_managerid, this.unit_managerPass, this.unit_managerComment);
                    }
                    //alert(this.unit_managerid);
                    //this.Question_comment=popup_data1;
                });
                return yield modal.present();
            }
        });
    }
    PushAudit_server(unit_managerid, unit_managerPass, unit_managerComment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.showLoader();
            this.savedAudit = new _Model_SavedAudit__WEBPACK_IMPORTED_MODULE_11__["SavedAudit"]();
            let lAttemptedId = this.objecta.AttemptedId;
            let lAuditId = this.objecta.AuditId;
            let Storeid = this.objecta.Storeid;
            let sql = "SELECT AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,UNIQUE_ID FROM AUDIT_ATTEMPTED_TB " +
                "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId;
            this.databaseObj.executeSql("SELECT AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,UNIQUE_ID FROM AUDIT_ATTEMPTED_TB " +
                "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + "", [])
                .then((res) => {
                this.AttemptedClosedAudit = [];
                //console.log(res);
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        this.AttemptedClosedAudit.push(res.rows.item(i));
                    }
                    console.log("Audit");
                    //console.log(this.AttemptedClosedAudit);
                    this.savedAudit._auditId = Number(this.AttemptedClosedAudit[0].AUDIT_ID);
                    //this.savedAudit._auditId=Number(this.AttemptedClosedAudit[0].AUDIT_NAME);
                    this.savedAudit._strCode = String(this.AttemptedClosedAudit[0].STR_CODE);
                    //this.savedAudit._auditId=Number(this.AttemptedClosedAudit[0].STR_NAME);
                    this.savedAudit._auditor = String(this.AttemptedClosedAudit[0].USER_ID);
                    this.savedAudit._stroreManager = String(this.AttemptedClosedAudit[0].STR_MANAGER);
                    let Auditdd = String(this.AttemptedClosedAudit[0].AUDIT_DT).slice(0, 10).split("-");
                    let year = Auditdd[0];
                    let mm = Auditdd[1];
                    let dd = Auditdd[2];
                    let Audit_date = dd + "/" + mm + "/" + year;
                    this.savedAudit._auditDt = Audit_date;
                    //this.savedAudit._auditDt=String(this.AttemptedClosedAudit[0].AUDIT_DT).slice(0,10).replace('-','/').replace('-','/');
                    this.savedAudit._uniqueId = String(this.AttemptedClosedAudit[0].UNIQUE_ID);
                    this.savedAudit._isValid = "yes";
                    this.savedAudit._status = "Closed";
                    debugger;
                    this.savedAudit._umId = unit_managerid;
                    //"356302114";
                    this.savedAudit._umPwd = unit_managerPass;
                    //"0W9H7Ya1";
                    this.savedAudit._auditeeComment = "Auditee Comment";
                    this.savedAudit._auditorComment = "Auditror Comment";
                    this.savedAudit._auditFindings = "Audit Findings";
                    this.GetClosedSection();
                    console.log(this.savedAudit);
                    //return this.AttemptedClosedAuditByUser;
                }
                //this.router.navigate(['dash-board']);
            })
                .catch(e => {
                console.log("error " + JSON.stringify(e));
            });
        });
    }
    GetClosedSection() {
        let lAttemptedId = this.objecta.AttemptedId;
        let lAuditId = this.objecta.AuditId;
        let Storeid = this.objecta.Storeid;
        var sql = "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER" +
            "FROM AUDIT_ATTEMPTED_SECTION A " +
            "WHERE " +
            "A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId;
        this.databaseObj.executeSql("SELECT SECTION_ID, SECTION_NAME, SECTION_ORDER FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + "", [])
            .then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.AttemptedClosedAuditSection = [];
            //console.log(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.AttemptedClosedAuditSection.push(res.rows.item(i));
                }
                console.log("Audit section");
                this.savedQuestions_array = [];
                //console.log(this.AttemptedClosedAuditSection);
                for (var i = 0; i < this.AttemptedClosedAuditSection.length; i++) {
                    let asns = yield this.GetClosedSeectionQuestion(Number(lAttemptedId), Number(lAuditId), Number(this.AttemptedClosedAuditSection[i].SECTION_ID), String(this.AttemptedClosedAuditSection[i].SECTION_NAME), Number(this.AttemptedClosedAuditSection[i].SECTION_ORDER));
                }
                this.savedAudit._lstQuestion = this.savedQuestions_array;
                for (var i = 0; i < this.savedAudit._lstQuestion.length; i++) {
                    let an = yield this.GetClosedSeectionQuestionAnswer(Number(lAttemptedId), Number(lAuditId), Number(this.savedAudit._lstQuestion[i]._questionId));
                    this.savedAudit._lstQuestion[i]._lstChoice = this.filledChoices1;
                }
                console.log("object of audit aaaaaaaaaaa");
                console.log(JSON.stringify(this.savedAudit));
                console.log(this.savedAudit);
                this.userService.Post_Close_Audit(this.savedAudit).subscribe(response => {
                    debugger;
                    //auditResponce_uploded: AuditResponce;
                    //this.auditResponce = <AuditResponce>response;
                    if (response['StatusFl'] == true) {
                        alert("Audit Uploded");
                        this.deletAttemptedAuditById(Number(lAttemptedId));
                        this.ionLoader.hideLoader();
                        window.location.reload();
                    }
                    else {
                        alert(response['Msg']);
                        this.ionLoader.hideLoader();
                    }
                });
                //this.hideLoader();
                //return this.AttemptedClosedAuditSection;
            }
            //this.router.navigate(['dash-board']);
        }))
            .catch(e => {
            console.log("error " + JSON.stringify(e));
        });
    }
    GetClosedSeectionQuestion(lAttemptedId, lAuditId, lId, SECTION_NAME, SECTION_ORDER) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let sql = "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," +
                "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " +
                "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " +
                "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND B.QUESTION_ID=" + lId;
            // "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID, B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND B.QUESTION_ID=" + lId +"", [])
            this.databaseObj.executeSql("SELECT QUESTION_ID,QUESTION_NAME,QUESTION_ORDER,QUESTION_TYPE_ID," +
                "QUESTION_TYPE,QUESTION_COMMENT,IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTIONS  " +
                "WHERE  " +
                "ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lId + "", [])
                .then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.AttemptedClosedAuditSectionQuestion = [];
                //console.log(res);
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        this.AttemptedClosedAuditSectionQuestion.push(res.rows.item(i));
                    }
                    console.log("Question");
                    //console.log(this.AttemptedClosedAuditSectionQuestion);
                    for (var i = 0; i < this.AttemptedClosedAuditSectionQuestion.length; i++) {
                        var question = new _Model_SavedQuestion__WEBPACK_IMPORTED_MODULE_12__["SavedQuestion"]();
                        question._sectionId = lId;
                        question._sectionNm = SECTION_NAME;
                        question._sectionOrder = SECTION_ORDER;
                        question._questionId = Number(this.AttemptedClosedAuditSectionQuestion[i].QUESTION_ID);
                        question._questionNm = this.AttemptedClosedAuditSectionQuestion[i].QUESTION_NAME;
                        question._questionOrder = Number(this.AttemptedClosedAuditSectionQuestion[i].QUESTION_ORDER);
                        question._questionTypeId = Number(this.AttemptedClosedAuditSectionQuestion[i].QUESTION_TYPE_ID);
                        question._questionType = this.AttemptedClosedAuditSectionQuestion[i].QUESTION_TYPE;
                        question._imgString = this.AttemptedClosedAuditSectionQuestion[i].QUESTION_COMMENT;
                        question._attachedImage = this.AttemptedClosedAuditSectionQuestion[i].IMAGE_NAME;
                        question._questionAns = "aks";
                        // console.log("Question obj");
                        //console.log(question);
                        //  let an = await  this.GetClosedSeectionQuestionAnswer(Number(lAttemptedId), Number(lAuditId), Number(this.AttemptedClosedAuditSectionQuestion[i].QUESTION_ID))
                        //  console.log("Question Answer");
                        //  console.log(this.AttemptedClosedAuditSectionQuestionAnswer);
                        // var filledChoices1 =[];
                        //  for (var i = 0; i < this.AttemptedClosedAuditSectionQuestionAnswer.length; i++) {
                        //      var fildcho = new FilledChoice ();
                        //      fildcho.Choice = this.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_TEXT;
                        //      fildcho.ChoiceId = Number(this.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_ID);
                        //      fildcho.Marks = Number(this.AttemptedClosedAuditSectionQuestionAnswer[i].POINTS);
                        //      //A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME
                        //     filledChoices1.push(fildcho)
                        //    }
                        //   // console.log("Question Answer obj");
                        // console.log(this.filledChoices);
                        //question.ChoiceValues= filledChoices1;
                        //debugger;
                        this.savedQuestions_array.push(question);
                        console.log("Question Answer obj");
                        console.log(this.savedQuestions_array);
                    }
                    //return this.AttemptedClosedAuditSectionQuestion;
                }
                //this.router.navigate(['dash-board']);
            }))
                .catch(e => {
                console.log("error " + JSON.stringify(e));
            });
            //return new Promise(resolve => {
            //           setTimeout(() => {
            //resolve(x);
            //         }, 100);
            // });
            //            console.log("this might take some time....");
            yield delay(5000);
            console.log("done!");
            let num = 10;
            return num;
        });
    }
    GetClosedSeectionQuestionAnswer(lAttemptedId, lAuditId, lQuestionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let sql = "SELECT A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.QUESTION_ID,A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME " + "FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE A INNER JOIN AUDIT_ATTEMPTED_QUESTIONS B ON A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID " + "AND A.SECTION_ID=B.SECTION_ID AND A.QUESTION_ID=B.QUESTION_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.QUESTION_ID=" + lQuestionId;
            this.databaseObj.executeSql("SELECT A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.QUESTION_ID,A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME " + "FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE A INNER JOIN AUDIT_ATTEMPTED_QUESTIONS B ON A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID " + "AND A.SECTION_ID=B.SECTION_ID AND A.QUESTION_ID=B.QUESTION_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.QUESTION_ID=" + lQuestionId + "", [])
                .then((res) => {
                this.AttemptedClosedAuditSectionQuestionAnswer = [];
                console.log(res);
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        this.AttemptedClosedAuditSectionQuestionAnswer.push(res.rows.item(i));
                    }
                    console.log("Question Answer");
                    console.log(this.AttemptedClosedAuditSectionQuestionAnswer);
                    this.filledChoices1 = [];
                    for (var i = 0; i < this.AttemptedClosedAuditSectionQuestionAnswer.length; i++) {
                        var fildcho = new _Model_FilledChoice__WEBPACK_IMPORTED_MODULE_13__["FilledChoice"]();
                        fildcho.Choice = this.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_TEXT;
                        fildcho.ChoiceId = Number(this.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_ID);
                        fildcho.Marks = Number(this.AttemptedClosedAuditSectionQuestionAnswer[i].POINTS);
                        fildcho.Comments = "Akshay";
                        fildcho.Value = this.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_VALUE;
                        //A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME
                        this.filledChoices1.push(fildcho);
                    }
                    // return this.AttemptedClosedAuditSectionQuestionAnswer;
                }
                //this.router.navigate(['dash-board']);
            })
                .catch(e => {
                console.log("error " + JSON.stringify(e));
            });
            console.log("this might take some time....");
            yield delay(5000);
            console.log("done!");
            let num = 10;
            return num;
        });
    }
    deletAttemptedAuditById(attemtedId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_TB WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_RECIVING_QUESTIONS WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_OPTION WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_RANGE WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_IMAGES_TB WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => { console.log(res); }).catch(e => { alert("error " + JSON.stringify(e)); });
            //kjkljkl
            //     this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            // this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_SECTION", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            // this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            // this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            // this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_RANGE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            // this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            // this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            // this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            // this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            // this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            // this.databaseObj.executeSql("DELETE FROM QUESTION_STANDARD_PREDEFINED_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
            yield delay(5000);
            console.log("done!");
            let num = 10;
            return num;
        });
    }
};
CloseAuditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
    { type: _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"] },
    { type: _Service_loader_service_service__WEBPACK_IMPORTED_MODULE_9__["LoaderServiceService"] }
];
CloseAuditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-close-audit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./close-audit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/close-audit/close-audit.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./close-audit.page.scss */ "./src/app/close-audit/close-audit.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"],
        _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"],
        _Service_loader_service_service__WEBPACK_IMPORTED_MODULE_9__["LoaderServiceService"]])
], CloseAuditPage);



/***/ }),

/***/ "./src/app/unit-manager-login/unit-manager-login.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/unit-manager-login/unit-manager-login.module.ts ***!
  \*****************************************************************/
/*! exports provided: UnitManagerLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitManagerLoginPageModule", function() { return UnitManagerLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _unit_manager_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit-manager-login.page */ "./src/app/unit-manager-login/unit-manager-login.page.ts");






let UnitManagerLoginPageModule = class UnitManagerLoginPageModule {
};
UnitManagerLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [_unit_manager_login_page__WEBPACK_IMPORTED_MODULE_5__["UnitManagerLoginPage"]],
        entryComponents: [_unit_manager_login_page__WEBPACK_IMPORTED_MODULE_5__["UnitManagerLoginPage"]]
    })
], UnitManagerLoginPageModule);



/***/ }),

/***/ "./src/app/unit-manager-login/unit-manager-login.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/unit-manager-login/unit-manager-login.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXQtbWFuYWdlci1sb2dpbi91bml0LW1hbmFnZXItbG9naW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/unit-manager-login/unit-manager-login.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/unit-manager-login/unit-manager-login.page.ts ***!
  \***************************************************************/
/*! exports provided: UnitManagerLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitManagerLoginPage", function() { return UnitManagerLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _Model_UnitManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/UnitManager */ "./src/app/Model/UnitManager.ts");





let UnitManagerLoginPage = class UnitManagerLoginPage {
    constructor(navParams, modalController) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.UMobject = new _Model_UnitManager__WEBPACK_IMPORTED_MODULE_3__["UnitManager"]();
        this.comment_um = this.navParams.get('comment');
        this.UMId = this.navParams.get('UMId');
        this.PASS = this.navParams.get('PASS');
    }
    ngOnInit() {
    }
    save_Comment() {
        //this.comment="this is not good thing";
        this.dismiss();
    }
    close_Comment() {
        this.dismiss();
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        let UMobject1 = new _Model_UnitManager__WEBPACK_IMPORTED_MODULE_3__["UnitManager"]();
        UMobject1.UMId = this.UMId;
        UMobject1.UMPASS = this.PASS;
        UMobject1.UComment = this.comment_um;
        this.modalController.dismiss(UMobject1);
        //, this.UMId, this.PASS
    }
};
UnitManagerLoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
UnitManagerLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-manager-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unit-manager-login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/unit-manager-login/unit-manager-login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unit-manager-login.page.scss */ "./src/app/unit-manager-login/unit-manager-login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], UnitManagerLoginPage);



/***/ })

}]);
//# sourceMappingURL=close-audit-close-audit-module-es2015.js.map