(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div style=\"background-color: black; align-content: center;\"><table style=\"margin-left: 10px; margin-top: 5px; margin-bottom: 2px;\"><tbody><tr><td><span style=\"margin-top:20px; margin-left: 5px; margin-top: 1px;\"><img src=\"../../assets/tablez.png\"  height=\"35\" width=\"35\" /></span></td><td>&nbsp;</td><td><span style=\"color: white; margin-top: 1px;\">Audit</span></td></tr></tbody></table> </div>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"--background-image: url(../../assets/Sunset.jpg);\"><br/><br/><br/>\n <div style=\"text-align: center; margin-left:10px; margin-right: 10px;\"><img src=\"../../assets/Logo.jpg\"  height=\"230\" width=\"280\" /></div><br/>\n \n  \n\n  \n <div style=\"margin-left:35px; margin-right: 35px;\">\n   <form id=\"contactForm\" [formGroup]=\"form_user\">\n      <div style= \"border: 1px solid black;\">\n        <ion-input type=\"text\"  formControlName=\"EMAIL\" placeholder=\"Employee Id\"></ion-input>\n      </div><br/>\n      <div style=\"border: 1px solid black;\">\n        \n        <ion-input  type=\"Password\" formControlName=\"USERPASSWORD\" placeholder=\"Password\"></ion-input>\n      </div>\n     <br/>\n\n        <div><ion-button  style=\"background-color: #3986b2;\" (click)=\"sendPostRequest(form_user)\">&nbsp;&nbsp;&nbsp;Sign In &nbsp;&nbsp;&nbsp;</ion-button></div>\n      \n        <!-- <div><ion-button  style=\"background-color: #3986b2;\" (click)=\"checkconnection_serve()\">&nbsp;&nbsp;&nbsp;check connection&nbsp;&nbsp;&nbsp;</ion-button></div> -->\n        \n\n  </form>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Model/UserMpdel.ts":
/*!************************************!*\
  !*** ./src/app/Model/UserMpdel.ts ***!
  \************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserData {
}


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
        providers: [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content.background {\n  --ion-background-color:#000;\n}\n\n.login {\n  background-color: white;\n  margin-left: 2em;\n  margin-right: 2em;\n}\n\n.item-has-focus {\n  --highlight-background: #9c1313;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcYWtzaGF5XFxpb25pY1xcVGFibGV6L3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQUY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtBQ0hGOztBRFdBO0VBRUUsMkJBQUE7QUNURjs7QURhQTtFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1hGOztBRGNBO0VBQ0UsK0JBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIFxufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8vaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAvLy0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCIpIWltcG9ydGFudDtcbi8vfVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xuIC8vIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JnLmdpZlwiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDAwO1xuICBcbn1cblxuLmxvZ2luXG57XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuLml0ZW0taGFzLWZvY3Vze1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjOWMxMzEzO1xufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDAwO1xufVxuXG4ubG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbi5pdGVtLWhhcy1mb2N1cyB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6ICM5YzEzMTM7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Model_UserMpdel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/UserMpdel */ "./src/app/Model/UserMpdel.ts");
/* harmony import */ var _Service_user_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/user-login.service */ "./src/app/Service/user-login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_network_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/network-service.service */ "./src/app/Service/network-service.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");







//import {getWritableDatabase} from '../Service/DataBaseAdapter'
//import {DataBaseHelper} from '../Service/DataBaseHelper'




let HomePage = class HomePage {
    constructor(userService, router, network, platform, sqlite, networkServiceService, screenOrientation
    //public database:SQLiteObject,
    //public Data_Adapter: getWritableDatabase,
    //public Data_Helper: DataBaseHelper
    ) {
        this.userService = userService;
        this.router = router;
        this.network = network;
        this.platform = platform;
        this.sqlite = sqlite;
        this.networkServiceService = networkServiceService;
        this.screenOrientation = screenOrientation;
        this.database_name = "AUDIT_DB.db"; // DB name
        this.table_name = "myfreakytable";
        this.user_detail = new _Model_UserMpdel__WEBPACK_IMPORTED_MODULE_3__["UserData"]();
        //this.checkconnection();
        //this.user_responce =[];
        this.platform.ready().then(() => {
            //this.unlockScreen();
            this.setPortrait();
            this.createDB();
        }).catch(error => {
            console.log(error);
        });
    }
    setPortrait() {
        // set to portrait
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    unlockScreen() {
        // allow user rotate
        this.screenOrientation.unlock();
    }
    ngAfterViewInit() {
    }
    createDB() {
        console.log("database created");
        this.sqlite.create({
            name: this.database_name,
            location: 'default'
        })
            .then((db) => {
            this.databaseObj = db;
            // alert('audit Database Created!');
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    createTable() {
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS USER_TB (EMP_ID text PRIMARY KEY, EMP_NAME text not null,EMAIL text not null,PASSWORD text not null,BU_ID integer not null,BU_NAME text not null)', [])
            .then(() => {
            //alert('Table Created!');
            this.insertRow(this.user_responce.Usr.EmpId, this.user_responce.Usr.EmpName, this.user_responce.Usr.Email, this.user_responce.Usr.Password, this.user_responce.Usr.BuId, this.user_responce.Usr.BuName);
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    insertRow(sEmpId, sEmpName, sEmail, sPassword, sBuId, sBuName) {
        // this.databaseObj.executeSql('INSERT INTO USER_TB (Name) VALUES ("' + this.name_model + '")', [])
        //   .then(() => {
        //     alert('Row Inserted!');
        //     console.log(this.data.username);
        //     this.getRows();
        //   })
        //   .catch(e => {
        //     alert("error " + JSON.stringify(e))
        //   });
        let sql = "";
        sql = "DELETE FROM USER_TB";
        this.databaseObj.executeSql("DELETE FROM USER_TB", []);
        sql = "INSERT INTO USER_TB(EMP_ID,EMP_NAME,EMAIL,PASSWORD,BU_ID,BU_NAME) VALUES('" + sEmpId + "','" + sEmpName + "'," +
            "'" + sEmail + "','" + sPassword + "'," + sBuId + ",'" + sBuName + "')";
        this.databaseObj.executeSql("INSERT INTO USER_TB(EMP_ID,EMP_NAME,EMAIL,PASSWORD,BU_ID,BU_NAME) VALUES('" + sEmpId + "','" + sEmpName + "'," +
            "'" + sEmail + "','" + sPassword + "'," + sBuId + ",'" + sBuName + "')", []).then(() => {
            //alert('Record Created!');
            console.log("data inserted");
            this.getRows();
        })
            .catch(e => {
            console.log(JSON.stringify(e));
            alert("error " + JSON.stringify(e));
        });
        //alert("user inserted 00377 aks");
        //this.getRows(); 
    }
    getRows() {
        this.databaseObj.executeSql("SELECT * FROM USER_TB", [])
            .then((res) => {
            this.row_data = [];
            console.log(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.row_data.push(res.rows.item(i));
                    //alert( this.row_data[i].toString())
                    console.log(this.row_data[i].toString());
                }
            }
            this.router.navigate(['dash-board']);
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    getRows_for_offine() {
        this.databaseObj.executeSql("SELECT * FROM USER_TB", [])
            .then((res) => {
            this.row_data = [];
            console.log(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.row_data.push(res.rows.item(i));
                }
                this.offine_login();
            }
            //this.router.navigate(['dash-board']);
        })
            .catch(e => {
            alert("Please check connnection Error: We must be online");
            return false;
        });
    }
    checkconnection_serve() {
        this.check_status = this.networkServiceService.getCurrentNetworkStatus();
    }
    ngOnInit() {
        this.form_user = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            EMAIL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            USERPASSWORD: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    sendPostRequest(user) {
        this.checkconnection_serve();
        this.user_detail = this.form_user.value;
        console.log("we are in send request");
        console.log(this.check_status);
        if (this.check_status === 0) {
            console.log("we are fetching record ");
            this.userService.validate_user(this.user_detail).subscribe(response => {
                //console.log(response);
                //this.user_detail = new UserData;
                try {
                    this.user_responce = response;
                    console.log("we have fatched record from api");
                    debugger;
                    console.log(this.user_responce.Msg);
                    console.log(this.user_responce.Usr.EmpName);
                    if (this.user_responce.Usr.EmpName == null) {
                        alert("Invalid credential - Either Email or Password is invalid");
                        return false;
                    }
                    else {
                        this.createTable();
                    }
                }
                catch (error) {
                    alert("you are not connected");
                }
            });
        }
        else {
            if (this.check_status === 1) {
                //alert("you are not connected");
                this.row_data = [];
                this.getRows_for_offine();
            }
        }
    }
    offine_login() {
        let U_Name = this.user_detail.EMAIL;
        let U_Pass = this.user_detail.USERPASSWORD;
        console.log(U_Pass.toString());
        console.log(this.row_data);
        if (this.row_data.length > 0) {
            for (let obj of this.row_data) {
                if (obj.EMP_ID == U_Name.toString() && (obj.PASSWORD == U_Pass)) {
                    console.log("we have fetched record from offle");
                    this.router.navigate(['dash-board']);
                }
                else {
                    alert("Invalid credential - Either Email or Password is invalid");
                    return false;
                }
            }
        }
        else {
            alert("Please Connect this time online");
        }
    }
    Dashboard_txt() {
        this.router.navigate(['dash-board']);
    }
};
HomePage.ctorParameters = () => [
    { type: _Service_user_login_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__["SQLite"] },
    { type: _Service_network_service_service__WEBPACK_IMPORTED_MODULE_9__["NetworkServiceService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_user_login_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__["SQLite"],
        _Service_network_service_service__WEBPACK_IMPORTED_MODULE_9__["NetworkServiceService"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"]
        //public database:SQLiteObject,
        //public Data_Adapter: getWritableDatabase,
        //public Data_Helper: DataBaseHelper
    ])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map