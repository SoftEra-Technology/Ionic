function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-audit-list-audit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-audit/list-audit.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-audit/list-audit.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListAuditListAuditPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div style=\"background-color: black; align-content: center;\"><table style=\"margin-left: 10px; margin-top: 5px; margin-bottom: 2px;\"><tbody><tr><td><span style=\"margin-top:20px; margin-left: 5px; margin-top: 1px;\"><img src=\"../../assets/tablez.png\"  height=\"35\" width=\"35\" /></span></td><td>&nbsp;</td><td><span style=\"color: white; margin-top: 1px;\">List Audit</span></td></tr></tbody></table> </div>\n</ion-header>\n\n<ion-content>\n<div *ngFor=\"let element_Audit of AttemptedAuditForStore\"> \n  <div (click)=\"fetchAttemptedSection(element_Audit.ATTEMPTED_ID, element_Audit.AUDIT_ID)\">\n  <ion-item>\n    <table><tbody><tr><td><img src=\"../../assets/tablez.png\"  height=\"25\" width=\"25\" /></td><td> Audit: {{element_Audit.AUDIT_NAME}}</td><td></td></tr>\n                \n              \n  </tbody></table>\n</ion-item>\n</div>\n</div>\n  \n      <div *ngFor=\"let element_section of AttemptedSection\"> \n          <div  (click)=\"fetchAttemptedQuestionBySQL(element_section.ATTEMPTED_ID, element_section.AUDIT_ID, element_section.SECTION_ID)\">\n          <ion-item>\n            <table>\n              <tbody>\n                <tr>\n                  <td rowspan=\"2\" width=\"5%\" align=\"center\"> <span *ngIf=\"element_section.MARKS_SCORED===0\"><img src=\"../../assets/red_lock_48.png\"  height=\"40\" width=\"50\" /></span> <span *ngIf=\"element_section.MARKS_SCORED>0\"><img src=\"../../assets/refresh1.jpg\"  height=\"40\" width=\"50\" /></span> </td>\n                  <td width=\"95%\" align=\"left\" style=\"font-size:large;\"><b>  Section: {{element_section.SECTION_NAME}}&nbsp; &nbsp;&nbsp; &nbsp;{{AuditStore}}</b></td>\n                </tr>\n                <tr>\n                  <td align=\"left\"> {{AuditDate | slice:0:10}}, Total Questions: {{element_section.T_QUESTION_COUNT}}  Question Answered: {{element_section.ATTEMPTQUESTION}} Markes Scored(%): {{element_section.MARKS_SCORED}}\n                   </td>\n                </tr>\n              </tbody>\n            </table>\n         \n              </ion-item>\n          \n          <div *ngIf=\"show_Question===element_section.SECTION_ID\">\n            <div *ngFor=\"let element_question of AttemptedQuestionBySQL\"> \n              <div style=\"margin-left: 20px;\">\n                \n              <ion-item (click)=\"GotoQuestionChoice(element_question.ATTEMPTED_ID,element_section.SECTION_ID,  element_question.QUESTION_ID)\">\n                <span *ngIf=\"element_question.QUESTION_STATUS==='Open'\"><img src=\"../../assets/red_lock_48.png\"  height=\"30\" width=\"30\" /></span><span *ngIf=\"element_question.QUESTION_STATUS==='Done'\"><img src=\"../../assets/thick.png\"  height=\"30\" width=\"30\" /></span>{{element_question.QUESTION_NAME}}<br/>\n                    Marks : {{element_question.QUESTION_MARKS}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Scored: {{element_question.MARKS_SCORED}} <br/> \n                    \n                    \n                    \n                  </ion-item>\n                </div>\n            </div>\n        </div>\n      </div>\n      \n      </div>\n   \n \n\n\n\n\n\n  <!-- <div (click)=\"fetchAttemptedQuestionBySQL(element_section.ATTEMPTED_ID, element_section.AUDIT_ID, element_section.SECTION_ID)\">{{element_section.SECTION_NAME}}</div>\n  <div *ngIf()></div> -->\n\n\n  \n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n \n          <ion-button  color=\"medium\" (click)=\" GoToDashboard()\"  expand=\"full\">EXIT</ion-button>\n      \n    \n  </ion-footer>";
    /***/
  },

  /***/
  "./src/app/list-audit/list-audit-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/list-audit/list-audit-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ListAuditPageRoutingModule */

  /***/
  function srcAppListAuditListAuditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListAuditPageRoutingModule", function () {
      return ListAuditPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_audit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-audit.page */
    "./src/app/list-audit/list-audit.page.ts");

    var routes = [{
      path: '',
      component: _list_audit_page__WEBPACK_IMPORTED_MODULE_3__["ListAuditPage"]
    }];

    var ListAuditPageRoutingModule = function ListAuditPageRoutingModule() {
      _classCallCheck(this, ListAuditPageRoutingModule);
    };

    ListAuditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListAuditPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/list-audit/list-audit.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/list-audit/list-audit.module.ts ***!
    \*************************************************/

  /*! exports provided: ListAuditPageModule */

  /***/
  function srcAppListAuditListAuditModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListAuditPageModule", function () {
      return ListAuditPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _list_audit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-audit-routing.module */
    "./src/app/list-audit/list-audit-routing.module.ts");
    /* harmony import */


    var _list_audit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list-audit.page */
    "./src/app/list-audit/list-audit.page.ts");

    var ListAuditPageModule = function ListAuditPageModule() {
      _classCallCheck(this, ListAuditPageModule);
    };

    ListAuditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_audit_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListAuditPageRoutingModule"]],
      declarations: [_list_audit_page__WEBPACK_IMPORTED_MODULE_6__["ListAuditPage"]]
    })], ListAuditPageModule);
    /***/
  },

  /***/
  "./src/app/list-audit/list-audit.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/list-audit/list-audit.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListAuditListAuditPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtYXVkaXQvbGlzdC1hdWRpdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/list-audit/list-audit.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/list-audit/list-audit.page.ts ***!
    \***********************************************/

  /*! exports provided: ListAuditPage */

  /***/
  function srcAppListAuditListAuditPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListAuditPage", function () {
      return ListAuditPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _Service_user_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Service/user-login.service */
    "./src/app/Service/user-login.service.ts");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/ngx/index.js");

    var ListAuditPage = /*#__PURE__*/function () {
      function ListAuditPage(userService, router, network, platform, sqlite, activatedRoute, screenOrientation) {
        var _this = this;

        _classCallCheck(this, ListAuditPage);

        this.userService = userService;
        this.router = router;
        this.network = network;
        this.platform = platform;
        this.sqlite = sqlite;
        this.activatedRoute = activatedRoute;
        this.screenOrientation = screenOrientation;
        this.database_name = "AUDIT_DB.db"; // DB name

        this.show_Section = false;
        this.show_Question = -1;
        this.myImgUrl = '../../assets/red_lock_48.png';
        this.activatedRoute.queryParams.subscribe(function (res) {
          console.log(JSON.parse(res.value));
          _this.Query_data = JSON.parse(res.value);
          console.log("list page");
          console.log(_this.Query_data.AttemptedId);

          _this.setLandscape();

          if (String(_this.Query_data.refresh) === "yes") {//window.location.reload();
          }

          _this.createDB(); //this.fetchAttemptedAuditForStore(Number(this.Query_data.AuditId), String(this.Query_data.Storeid));
          //this.fetchAttemptedSection(Number(this.Query_data.AttemptedId), Number(this.Query_data.AuditId))

        });
        this.platform.ready().then(function () {
          _this.createDB();

          _this.setLandscape();
        }).catch(function (error) {
          console.log(error);
        });
      }

      _createClass(ListAuditPage, [{
        key: "setLandscape",
        value: function setLandscape() {
          // set to landscape
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        }
      }, {
        key: "GotoQuestionChoice",
        value: function GotoQuestionChoice(lAttemptedId, lSectionid, IQuestion_Id) {
          var objecta = {
            AttemptedId: lAttemptedId,
            AuditId: this.Query_data.AuditId,
            SectionId: lSectionid,
            QuestionID: IQuestion_Id,
            Store_id: this.AuditStore
          };
          this.router.navigate(['/audit-choice-question'], {
            queryParams: {
              value: JSON.stringify(objecta)
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setLandscape();
        }
      }, {
        key: "createDB",
        value: function createDB() {
          var _this2 = this;

          console.log("database created");
          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this2.databaseObj = db;

            _this2.fetchAttemptedAuditForStore(Number(_this2.Query_data.AuditId), String(_this2.Query_data.Storeid));

            _this2.fetchAttemptedSection(Number(_this2.Query_data.AttemptedId), Number(_this2.Query_data.AuditId)); //alert('audit Database Created!');

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedAuditForStore",
        value: function fetchAttemptedAuditForStore(lAuditId, _sStoreCode) {
          var _this3 = this;

          this.databaseObj.executeSql("SELECT * from AUDIT_ATTEMPTED_TB where AUDIT_ID=" + lAuditId + " AND STR_CODE='" + _sStoreCode + "' ORDER BY ATTEMPTED_ID DESC", []).then(function (res) {
            _this3.AttemptedAuditForStore = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this3.AttemptedAuditForStore.push(res.rows.item(i));
              }

              _this3.AuditStore = _this3.AttemptedAuditForStore[0].STR_NAME;
              _this3.AuditDate = _this3.AttemptedAuditForStore[0].AUDIT_DT;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            console.log("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedSection",
        value: function fetchAttemptedSection(lAttemptedId, lAuditId) {
          var _this4 = this;

          debugger;
          this.databaseObj.executeSql("SELECT B.SECTION_NAME AS P_SECTION_NAME,A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.PARENT_SECTION_ID,A.SECTION_NAME,A.SECTION_DESC,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," + "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID " + "AND QUESTION_STATUS<>'Open')+(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID " + "AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," + "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes') AS SECTION_MARKS," + "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" + "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " + "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.S_QUESTION_COUNT>0", []).then(function (res) {
            _this4.AttemptedSection = [];
            debugger;
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this4.AttemptedSection.push(res.rows.item(i));
              }

              console.log("section akshay");
              console.log(_this4.AttemptedSection);

              if (_this4.Query_data.refresh == "yes") {//window.location.reload();
              }
            }
          }).catch(function (e) {
            console.log("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedAuditBySQL",
        value: function fetchAttemptedAuditBySQL(lAttemptedId, lAuditId) {
          var _this5 = this;

          this.databaseObj.executeSql("SELECT AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,UNIQUE_ID FROM AUDIT_ATTEMPTED_TB " + "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId, []).then(function (res) {
            _this5.AttemptedAuditBySQL = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this5.AttemptedAuditBySQL.push(res.rows.item(i));
              }

              return _this5.AttemptedAuditBySQL;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedSectionQuestionBySQL",
        value: function fetchAttemptedSectionQuestionBySQL(sType, lAttemptedId, lAuditId, lId) {
          var _this6 = this;

          debugger;

          if ("Audit" == sType) {
            this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," + "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " + "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " + "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId, []).then(function (res) {
              _this6.AttemptedSectionQuestionBySQL = [];
              debugger;
              console.log(res);

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  _this6.AttemptedSectionQuestionBySQL.push(res.rows.item(i));
                }
              } //this.router.navigate(['dash-board']);

            }).catch(function (e) {
              alert("error " + JSON.stringify(e));
            });
          } else if ("Section" == sType) {
            this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," + "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " + "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " + "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.SECTION_ID=" + lId, []).then(function (res) {
              _this6.AttemptedSectionQuestionBySQL = [];
              console.log(res);

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  _this6.AttemptedSectionQuestionBySQL.push(res.rows.item(i));
                }

                debugger;
              } //this.router.navigate(['dash-board']);

            }).catch(function (e) {
              alert("error " + JSON.stringify(e));
            });
          } else if ("Question" == sType) {
            this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," + "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " + "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " + "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND B.QUESTION_ID=" + lId, []).then(function (res) {
              _this6.AttemptedSectionQuestionBySQL = [];
              console.log(res);

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  _this6.AttemptedSectionQuestionBySQL.push(res.rows.item(i));
                } //return this.AttemptedAuditBySQL;

              } //this.router.navigate(['dash-board']);

            }).catch(function (e) {
              alert("error " + JSON.stringify(e));
            });
          } else {
            this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," + "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " + "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " + "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND 1=2", []).then(function (res) {
              _this6.AttemptedSectionQuestionBySQL = [];
              console.log(res);

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  _this6.AttemptedSectionQuestionBySQL.push(res.rows.item(i));
                } //return this.AttemptedAuditBySQL;

              } //this.router.navigate(['dash-board']);

            }).catch(function (e) {
              alert("error " + JSON.stringify(e));
            });
          }

          if (this.AttemptedSectionQuestionBySQL.length > 0) {
            return this.AttemptedSectionQuestionBySQL;
          }
        }
      }, {
        key: "fetchAttemptedQuestionBySQL",
        value: function fetchAttemptedQuestionBySQL(lAttemptedId, lAuditId, lSectionId) {
          var _this7 = this;

          debugger;

          if (this.show_Question === lSectionId) {
            this.show_Question = -1;
          } else {
            this.show_Question = lSectionId;
          }

          console.log(lAttemptedId);
          console.log("Entered in fetched question");
          this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID,QUESTION_ORDER," + "CASE WHEN IS_INCLUDED='Yes' THEN QUESTION_MARKS ELSE 0 END AS QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED,IS_CRITICAL " + "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND SECTION_ID=" + lSectionId + " ORDER BY QUESTION_ORDER", []).then(function (res) {
            _this7.AttemptedQuestionBySQL = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this7.AttemptedQuestionBySQL.push(res.rows.item(i));
              }

              for (var j = 0; j < _this7.AttemptedQuestionBySQL.length; j++) {
                _this7.AttemptedQuestionBySQL[j].QUESTION_NAME = String(_this7.AttemptedQuestionBySQL[j].QUESTION_NAME).replace(/'/g, "");
              }

              console.log("------------------------------------------");
              debugger;
              console.log(_this7.AttemptedQuestionBySQL);
              return _this7.AttemptedQuestionBySQL;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "GoToDashboard",
        value: function GoToDashboard() {
          //this.router.navigate(['dash-board']);
          this.router.navigate(['/dash-board'], {
            queryParams: {
              value: "refresh"
            }
          });
        }
      }, {
        key: "Repace_string",
        value: function Repace_string(Data) {
          debugger;
          return Data.replace(/'/g, "");
        }
      }]);

      return ListAuditPage;
    }();

    ListAuditPage.ctorParameters = function () {
      return [{
        type: _Service_user_login_service__WEBPACK_IMPORTED_MODULE_6__["UserLoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]
      }];
    };

    ListAuditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-audit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-audit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-audit/list-audit.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-audit.page.scss */
      "./src/app/list-audit/list-audit.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_user_login_service__WEBPACK_IMPORTED_MODULE_6__["UserLoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]])], ListAuditPage);
    /***/
  }
}]);
//# sourceMappingURL=list-audit-list-audit-module-es5.js.map