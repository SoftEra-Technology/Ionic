(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-audit-new-audit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-audit/new-audit.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-audit/new-audit.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div style=\"background-color: black; align-content: center;\"><table style=\"margin-left: 10px; margin-top: 5px; margin-bottom: 2px;\"><tbody><tr><td><span style=\"margin-top:20px; margin-left: 5px; margin-top: 1px;\"><img src=\"../../assets/tablez.png\"  height=\"35\" width=\"35\" /></span></td><td>&nbsp;</td><td><span style=\"color: white; margin-top: 1px;\">New Audit</span></td></tr></tbody></table> </div>\n</ion-header>\n\n   \n<ion-content>\n  <form id=\"NewAudit\" [formGroup]=\"form_NewAudit\">  \n\n  <ion-item>\n    <ion-label>Audit Name</ion-label>\n  \n    <ion-select ok-text=\"Okay\" cancel-text=\"Nah\" formControlName=\"Audit_Select\">\n     \n      <ion-select-option  *ngFor=\"let element_a of AllAudits\" value={{element_a.AUDIT_ID}}>{{element_a.AUDIT_NAME}}</ion-select-option>\n     \n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Restaurant</ion-label>\n  \n    <ion-select ok-text=\"Okay\" cancel-text=\"Nah\"  formControlName=\"Audit_Store\">\n      <!-- <ion-select-option value=\"0\">Select Store</ion-select-option> -->\n      <ion-select-option *ngFor=\"let element_s of row_store\"  value={{element_s.STR_CODE}}>{{element_s.STR_NAME}}</ion-select-option>\n     \n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Manager on shift</ion-label>\n  \n    <ion-input style=\"background-color: #f4f5f8;\"  formControlName=\"Audit_Manager\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Evaluator</ion-label>\n  \n    <ion-input *ngFor=\"let element_u of User_data\" value={{element_u.EMP_NAME}} style=\"background-color: #f4f5f8;\"  formControlName=\"Auditor_Name\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Audit Date</ion-label>\n \n    <ion-datetime type=\"datetime-local\" displayFormat=\"DD/MM/YYYY\" max=\"2099-12-31\" [(ngModel)]=\"myDate\"  formControlName=\"Audit_date\"></ion-datetime>\n  </ion-item>\n  \n  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>\n  <ion-grid>\n    <ion-row>\n     \n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\"  expand=\"full\" (click)=\"Next_New_Audit(form_NewAudit)\">Next</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\"  (click)=\"Reload_page()\" expand=\"full\">Refresh</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\" (click)=\"Exit_New_Audit()\"  expand=\"full\">EXIT</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n</form>  \n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  \n</ion-footer>\n");

/***/ }),

/***/ "./src/app/new-audit/new-audit-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/new-audit/new-audit-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NewAuditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAuditPageRoutingModule", function() { return NewAuditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_audit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-audit.page */ "./src/app/new-audit/new-audit.page.ts");




const routes = [
    {
        path: '',
        component: _new_audit_page__WEBPACK_IMPORTED_MODULE_3__["NewAuditPage"]
    }
];
let NewAuditPageRoutingModule = class NewAuditPageRoutingModule {
};
NewAuditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewAuditPageRoutingModule);



/***/ }),

/***/ "./src/app/new-audit/new-audit.module.ts":
/*!***********************************************!*\
  !*** ./src/app/new-audit/new-audit.module.ts ***!
  \***********************************************/
/*! exports provided: NewAuditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAuditPageModule", function() { return NewAuditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _new_audit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-audit-routing.module */ "./src/app/new-audit/new-audit-routing.module.ts");
/* harmony import */ var _new_audit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-audit.page */ "./src/app/new-audit/new-audit.page.ts");








let NewAuditPageModule = class NewAuditPageModule {
};
NewAuditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_audit_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewAuditPageRoutingModule"]
        ],
        declarations: [_new_audit_page__WEBPACK_IMPORTED_MODULE_6__["NewAuditPage"]]
    })
], NewAuditPageModule);



/***/ }),

/***/ "./src/app/new-audit/new-audit.page.scss":
/*!***********************************************!*\
  !*** ./src/app/new-audit/new-audit.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1hdWRpdC9uZXctYXVkaXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/new-audit/new-audit.page.ts":
/*!*********************************************!*\
  !*** ./src/app/new-audit/new-audit.page.ts ***!
  \*********************************************/
/*! exports provided: NewAuditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAuditPage", function() { return NewAuditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_user_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/user-login.service */ "./src/app/Service/user-login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_navigation_with_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-navigation-with-data */ "./node_modules/ngx-navigation-with-data/fesm2015/ngx-navigation-with-data.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");









let NewAuditPage = class NewAuditPage {
    constructor(platform, sqlite, 
    //public database:SQLiteObject,
    userService, router, navCtrl, screenOrientation) {
        this.platform = platform;
        this.sqlite = sqlite;
        this.userService = userService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.screenOrientation = screenOrientation;
        this.myDate = new Date().toISOString();
        this.database_name = "AUDIT_DB.db"; // DB name
        //this.store= new Store()
        this.platform.ready().then(() => {
            this.createDB();
            this.unlockScreen();
            //this.setLandscape()
        }).catch(error => {
            console.log(error);
        });
    }
    ngOnInit() {
        // this.getUser();
        this.form_NewAudit = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            Audit_Select: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            Audit_Store: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            Audit_Manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            Auditor_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            Audit_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
    }
    unlockScreen() {
        // allow user rotate
        this.screenOrientation.unlock();
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
            this.getUser();
            this.getstore();
            this.fetchAllAudits();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    getUser() {
        this.databaseObj.executeSql("SELECT * FROM USER_TB", [])
            .then((res) => {
            this.User_data = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.User_data.push(res.rows.item(i));
                    //alert( this.row_data[i].toString())
                }
                console.log("User Data on New Audit");
                console.log(this.User_data);
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    getstore() {
        this.databaseObj.executeSql("SELECT * FROM STORE_TB", [])
            .then((res) => {
            this.row_store = [];
            console.log(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.row_store.push(res.rows.item(i));
                }
            }
            console.log("store on New Audit");
            console.log(this.row_store);
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    fetchAllAudits() {
        this.databaseObj.executeSql("SELECT * FROM AUDIT_TB", [])
            .then((res) => {
            this.AllAudits = [];
            console.log(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.AllAudits.push(res.rows.item(i));
                }
                console.log("All Audit data");
                console.log(this.AllAudits);
            }
            //this.router.navigate(['dash-board']);
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    Exit_New_Audit() {
        this.router.navigate(['dash-board']);
    }
    onChange_Audit(selectedId) {
        this.seledcted_audit = this.AllAudits.find((x) => x.AUDIT_ID == selectedId);
        alert(this.seledcted_audit["AUDIT_ID"]);
        alert(this.seledcted_audit["AUDIT_NAME"]);
    }
    onChange_Store(selectedId) {
        this.seledcted_Store = this.row_store.find((x) => x.STR_CODE == selectedId);
        alert(this.seledcted_Store["STR_CODE"]);
        alert(this.seledcted_Store["STR_NAME"]);
    }
    Next_New_Audit(item) {
        var store_name;
        var audit_id;
        var audit_name;
        //alert("next new audit");
        // this.seledcted_Store1 = this.row_store.find((x: any) => x.STR_CODE == this.form_NewAudit.get('STR_CODE').value); 
        // alert(this.seledcted_Store1["STR_CODE"]);
        // alert(this.seledcted_Store1["STR_NAME"]);
        this.store_id = this.form_NewAudit.get('Audit_Store').value;
        for (var i = 0; i <= this.row_store.length - 1; i++) {
            if (this.row_store[i].STR_CODE == this.store_id) {
                store_name = this.row_store[i].STR_NAME;
                console.log(this.store_id);
                console.log(store_name);
            }
        }
        //  this.seledcted_audit = this.AllAudits.find((x: any) => x.AUDIT_ID == selectedId); 
        //  alert(this.seledcted_audit["AUDIT_ID"]);
        //  alert(this.seledcted_audit["AUDIT_NAME"]);
        audit_id = this.form_NewAudit.get('Audit_Select').value;
        console.log(audit_id);
        for (var i = 0; i <= this.AllAudits.length - 1; i++) {
            if (this.AllAudits[i].AUDIT_ID == audit_id) {
                audit_name = this.AllAudits[i].AUDIT_NAME;
                console.log(this.AllAudits[i].AUDIT_ID);
                console.log(audit_name);
            }
        }
        console.log(this.form_NewAudit.get('Audit_date').value);
        console.log(this.form_NewAudit.get('Audit_Manager').value);
        let user_id = this.User_data[0].EMP_ID;
        //console.log(user_id);
        //this.router.navigate(['list-audit']);
        //this.navCtrl.navigate('list-audit', {Name:"virendta"});
        this.createAttemptedAudit(audit_id.toString(), audit_name.toString(), this.store_id.toString(), store_name.toString(), user_id.toString(), this.form_NewAudit.get('Audit_Manager').value.toString(), this.form_NewAudit.get('Audit_date').value.toString(), "Open", "1", "");
    }
    createAttemptedAudit(sAuditID, sAuditName, sStrCode, sStrName, sUserId, sStrManager, sAuditDt, sAuditStatus, sUniqueId, sAuditFindings) {
        this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_TB(AUDIT_ID, AUDIT_NAME, STR_CODE, STR_NAME, USER_ID,STR_MANAGER, AUDIT_DT, AUDIT_STATUS,UNIQUE_ID,AUDIT_FINDINGS ) " +
            "VALUES(" + sAuditID + ",'" + sAuditName + "','" + sStrCode + "','" + sStrName + "','" + sUserId + "','" + sStrManager + "','" + sAuditDt + "','" + sAuditStatus + "','" + sUniqueId + "','" + sAuditFindings + "')", [])
            .then((res) => {
            console.log(res);
            this.fetchAttemptedAuditForStore(Number(sAuditID), sStrCode);
            //return true;
        }).catch(e => { console.log("error " + JSON.stringify(e)); });
        console.log("createAttempted Audit created");
    }
    fetchAttemptedAuditForStore(lAuditId, _sStoreCode) {
        this.databaseObj.executeSql("SELECT * FROM AUDIT_ATTEMPTED_TB where AUDIT_ID=" + lAuditId + " AND STR_CODE='" + _sStoreCode + "' ORDER BY ATTEMPTED_ID DESC", [])
            .then((res) => {
            this.AttemptedAuditForStore = [];
            console.log(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.AttemptedAuditForStore.push(res.rows.item(i));
                }
                console.log("Audit Inserted in the Audit list");
                console.log(this.AttemptedAuditForStore);
                this.createAttemptedSectionBySQL(Number(this.AttemptedAuditForStore[0].ATTEMPTED_ID), Number(lAuditId));
                this.createAttemptedQuestionBySQL(Number(this.AttemptedAuditForStore[0].ATTEMPTED_ID), Number(lAuditId));
                //return this.AttemptedAuditForStore;
            }
            //this.router.navigate(['dash-board']);
        })
            .catch(e => {
            console.log("error " + JSON.stringify(e));
        });
    }
    createAttemptedSectionBySQL(lAttemptedId, lAuditId) {
        this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_SECTION(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,PARENT_SECTION_ID,SECTION_NAME,SECTION_DESC,SECTION_ORDER,SECTION_PT," +
            "T_QUESTION_COUNT,QUESTION_ANSWERED,S_QUESTION_COUNT,C_QUESTION_COUNT) SELECT " + lAttemptedId + ",AUDIT_ID,SECTION_ID,PARENT_SECTION_ID,SECTION_NAME," +
            "SECTION_DESC,SECTION_ORDER,SECTION_PT,T_QUESTION_COUNT,'',S_QUESTION_COUNT,C_QUESTION_COUNT FROM SECTION_TB WHERE AUDIT_ID=" + lAuditId, []).then((res) => { console.log(res); return true; }).catch(e => { console.log("error " + JSON.stringify(e)); });
        console.log("createAttemptedQuestion section");
    }
    createAttemptedQuestionBySQL(lAttemptedId, lAuditId) {
        this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_QUESTIONS(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER," +
            "IS_CRITICAL,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IMAGE_NAME,IS_INCLUDED,IMAGE_PUSHED) SELECT " +
            lAttemptedId + ",AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER," +
            "IS_CRITICAL,QUESTION_MARKS,0,'Open','','','Yes','Yes' FROM QUESTION_TB WHERE AUDIT_ID=" + lAuditId, [])
            .then((res) => {
            console.log(res);
            let objecta = {
                AttemptedId: lAttemptedId,
                AuditId: lAuditId,
                Storeid: this.store_id,
            };
            this.router.navigate(['/list-audit'], {
                queryParams: {
                    value: JSON.stringify(objecta)
                },
            });
            //this.navCtrl.navigate('list-audit', {AttemptedId:lAttemptedId})
            return true;
        }).catch(e => { console.log("error " + JSON.stringify(e)); });
        console.log("createAttemptedQuestion created");
    }
    Reload_page() {
        window.location.reload();
    }
};
NewAuditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
    { type: _Service_user_login_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_navigation_with_data__WEBPACK_IMPORTED_MODULE_6__["NgxNavigationWithDataComponent"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] }
];
NewAuditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-audit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-audit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-audit/new-audit.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-audit.page.scss */ "./src/app/new-audit/new-audit.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"],
        _Service_user_login_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_navigation_with_data__WEBPACK_IMPORTED_MODULE_6__["NgxNavigationWithDataComponent"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]])
], NewAuditPage);



/***/ })

}]);
//# sourceMappingURL=new-audit-new-audit-module-es2015.js.map