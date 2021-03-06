(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["open-audit-open-audit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-audit/open-audit.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-audit/open-audit.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div style=\"background-color: black; align-content: center;\"><table style=\"margin-left: 10px; margin-top: 5px; margin-bottom: 2px;\"><tbody><tr><td><span style=\"margin-top:20px; margin-left: 5px; margin-top: 1px;\"><img src=\"../../assets/tablez.png\"  height=\"35\" width=\"35\" /></span></td><td>&nbsp;</td><td><span style=\"color: white; margin-top: 1px;\">Open Audit</span></td></tr></tbody></table> </div>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let element_Audit of AttemptedOpenAuditByUser\"> \n  \n   <ion-item>\n    <table>\n      <tbody>\n        <tr>\n          <td rowspan=\"2\" width=\"5%\" align=\"center\"> <span *ngIf=\"element_Audit.MARKS_SCORED===0\"><img src=\"../../assets/red_lock_48.png\"  height=\"40\" width=\"50\" /></span> <span *ngIf=\"element_Audit.MARKS_SCORED>0\"><img src=\"../../assets/refresh1.jpg\"  height=\"40\" width=\"50\" /></span> </td>\n          <td width=\"90%\" align=\"left\" style=\"font-size:x-large;\"><b> Audit: {{element_Audit.AUDIT_NAME}}  {{element_Audit.STR_NAME}}</b> </td>\n          \n        </tr>\n        <tr>\n          <td align=\"left\">  &nbsp;&nbsp;Audit Performed On: {{element_Audit.AUDIT_DT | slice:0:10}} Total Marks: {{element_Audit.AUDIT_POINTS}}  Marks Scored: {{element_Audit.MARKS_SCORED}} \n            </td>\n        </tr>\n      </tbody>\n    </table>\n    <ion-note slot=\"end\" color=\"tertiary\"><ion-button  color=\"medium\" (click)=\"OenAudit_Page_setting(element_Audit.ATTEMPTED_ID, element_Audit.AUDIT_ID, element_Audit.STR_CODE)\"> <ion-checkbox color=\"dark\"></ion-checkbox></ion-button></ion-note>\n   \n    \n              \n             \n  </ion-item>\n</div>\n\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-grid>\n    <ion-row>\n     \n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\"  expand=\"full\" (click)=\"GoToAuditList()\">Open</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\"  (click)=\"DeleteAudit()\" expand=\"full\">Delete</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\" (click)=\"GoToDashboard()\"  expand=\"full\">EXIT</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n</ion-footer>");

/***/ }),

/***/ "./src/app/open-audit/open-audit-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/open-audit/open-audit-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OpenAuditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenAuditPageRoutingModule", function() { return OpenAuditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _open_audit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./open-audit.page */ "./src/app/open-audit/open-audit.page.ts");




const routes = [
    {
        path: '',
        component: _open_audit_page__WEBPACK_IMPORTED_MODULE_3__["OpenAuditPage"]
    }
];
let OpenAuditPageRoutingModule = class OpenAuditPageRoutingModule {
};
OpenAuditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OpenAuditPageRoutingModule);



/***/ }),

/***/ "./src/app/open-audit/open-audit.module.ts":
/*!*************************************************!*\
  !*** ./src/app/open-audit/open-audit.module.ts ***!
  \*************************************************/
/*! exports provided: OpenAuditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenAuditPageModule", function() { return OpenAuditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _open_audit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./open-audit-routing.module */ "./src/app/open-audit/open-audit-routing.module.ts");
/* harmony import */ var _open_audit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-audit.page */ "./src/app/open-audit/open-audit.page.ts");







let OpenAuditPageModule = class OpenAuditPageModule {
};
OpenAuditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _open_audit_routing_module__WEBPACK_IMPORTED_MODULE_5__["OpenAuditPageRoutingModule"]
        ],
        declarations: [_open_audit_page__WEBPACK_IMPORTED_MODULE_6__["OpenAuditPage"]]
    })
], OpenAuditPageModule);



/***/ }),

/***/ "./src/app/open-audit/open-audit.page.scss":
/*!*************************************************!*\
  !*** ./src/app/open-audit/open-audit.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZW4tYXVkaXQvb3Blbi1hdWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/open-audit/open-audit.page.ts":
/*!***********************************************!*\
  !*** ./src/app/open-audit/open-audit.page.ts ***!
  \***********************************************/
/*! exports provided: OpenAuditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenAuditPage", function() { return OpenAuditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _Model_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Store */ "./src/app/Model/Store.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/user-login.service */ "./src/app/Service/user-login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");








let OpenAuditPage = class OpenAuditPage {
    constructor(platform, sqlite, 
    //public database:SQLiteObject,
    userService, router, screenOrientation) {
        this.platform = platform;
        this.sqlite = sqlite;
        this.userService = userService;
        this.router = router;
        this.screenOrientation = screenOrientation;
        this.database_name = "AUDIT_DB.db"; // DB name
        this.store = new _Model_Store__WEBPACK_IMPORTED_MODULE_3__["Store"]();
        this.platform.ready().then(() => {
            this.setLandscape();
            this.createDB();
        }).catch(error => {
            console.log(error);
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
            "UNIQUE_ID FROM AUDIT_ATTEMPTED_TB t WHERE USER_ID='" + _sUserId + "' AND AUDIT_STATUS='Open'", [])
            .then((res) => {
            this.AttemptedOpenAuditByUser = [];
            console.log(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.AttemptedOpenAuditByUser.push(res.rows.item(i));
                }
                return this.AttemptedOpenAuditByUser;
            }
            //this.router.navigate(['dash-board']);
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    ngOnInit() {
        this.setLandscape();
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
    GoToDashboard() {
        //this.router.navigate(['dash-board']);
        this.router.navigate(['/dash-board'], {
            queryParams: {
                value: "refresh"
            },
        });
    }
    DeleteAudit() {
        alert(this.objecta.AttemptedId);
        console.log(" attempted id fot delete" + this.objecta.AttemptedId);
        this.deletAttemptedAuditById(Number(this.objecta.AttemptedId));
    }
    deletAttemptedAuditById(attemtedId) {
        debugger;
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
        this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED WHERE ATTEMPTED_ID=" + attemtedId, []).then((res) => {
            console.log(res);
            window.location.reload();
        }).catch(e => { alert("error " + JSON.stringify(e)); });
        //kjkljkl
        //  this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_TB", []).then((res) => {console.log(res);}).catch(e => {alert("error " + JSON.stringify(e))});
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
    }
};
OpenAuditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
    { type: _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"] }
];
OpenAuditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-open-audit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./open-audit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-audit/open-audit.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./open-audit.page.scss */ "./src/app/open-audit/open-audit.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"],
        _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]])
], OpenAuditPage);



/***/ })

}]);
//# sourceMappingURL=open-audit-open-audit-module-es2015.js.map