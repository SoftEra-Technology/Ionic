function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dash-board-dash-board-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dash-board/dash-board.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dash-board/dash-board.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashBoardDashBoardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div style=\"background-color: black; align-content: center;\"><table style=\"margin-left: 10px; margin-top: 5px; margin-bottom: 2px;\"><tbody><tr><td><span style=\"margin-top:20px; margin-left: 5px; margin-top: 1px;\"><img src=\"../../assets/tablez.png\"  height=\"35\" width=\"35\" /></span></td><td>&nbsp;</td><td><span style=\"color: white; margin-top: 1px;\">Home</span></td></tr></tbody></table> </div>\n</ion-header>\n\n<ion-content>\n   <br/><br/><br/>\n  \n  <div style=\"background-color: #3986b2; text-align: center; margin-left: 10px; margin-right: 10px;\"><ion-button expand=\"full\"  (click)=\"Get_Sync()\">Sync Definition</ion-button></div><br/>\n  <ion-spinner color=\"secondary\" name=\"bubble\" *ngIf=\"showSpinner\"></ion-spinner>\n  <div style=\"background-color: #3986b2; text-align: center; margin-left: 10px; margin-right: 10px;\"><ion-button expand=\"full\"  (click)=\"GotoNewAudit()\">New Audit</ion-button></div><br/>\n  <div style=\"background-color: #3986b2; text-align: center; margin-left: 10px; margin-right: 10px;\"><ion-button expand=\"full\"  (click)=\"GotoOpenAudit()\">Open Audit(s)</ion-button></div><br/>\n  <div style=\"background-color: #3986b2; text-align: center; margin-left: 10px; margin-right: 10px;\"> <ion-button expand=\"full\" (click)=\"GotoCloseAudit()\">Compleated Audit(s)</ion-button></div><br/>\n  <div style=\"background-color: #3986b2; text-align: center; margin-left: 10px; margin-right: 10px;\"><ion-button expand=\"full\"  (click)=\"logoff()\">Log Off</ion-button></div><br/>\n  \n  <!-- <div class=\"main_div\"></div>\n<table>\n  <tbody>\n    <tr>\n      <td width=\"48%\"></td>\n      <td width=\"3%\"></td>\n      <td width=\"49%\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"48%\">&nbsp;</td>\n      <td width=\"3%\"></td>\n      <td width=\"49%\"></td>\n    </tr>\n    <tr>\n      <td width=\"48%\"><div>  </div></td>\n      <td width=\"3%\"></td>\n      <td width=\"49%\"><div> </div></td>\n    </tr>\n    <tr>\n      <td width=\"48%\">&nbsp;</td>\n      <td width=\"3%\"></td>\n      <td width=\"49%\"></td>\n    </tr>\n    <tr>\n      <td width=\"48\"><div></div></td>\n      <td width=\"3%\"></td>\n      <td width=\"49%\"><div><ion-button expand=\"full\" color=\"danger\">Log Off</ion-button></div></td>\n    </tr>\n  </tbody>\n</table>\n<div class=\"div_button\"></div>\n</div> -->\n\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\n    <div *ngFor=\"let element of row_data\" style=\"text-align: center;\">User : {{element.EMP_NAME}}</div>\n    <div  style=\"text-align: center;\">Powered by : SoftEra Audit v3.0</div>\n    <div  style=\"text-align: center;\">Copyright &#xA9; 2020 SoftEra Technologies</div>\n  \n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/dash-board/dash-board-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/dash-board/dash-board-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: DashBoardPageRoutingModule */

  /***/
  function srcAppDashBoardDashBoardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashBoardPageRoutingModule", function () {
      return DashBoardPageRoutingModule;
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


    var _dash_board_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dash-board.page */
    "./src/app/dash-board/dash-board.page.ts");

    var routes = [{
      path: '',
      component: _dash_board_page__WEBPACK_IMPORTED_MODULE_3__["DashBoardPage"]
    }];

    var DashBoardPageRoutingModule = function DashBoardPageRoutingModule() {
      _classCallCheck(this, DashBoardPageRoutingModule);
    };

    DashBoardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashBoardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/dash-board/dash-board.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/dash-board/dash-board.module.ts ***!
    \*************************************************/

  /*! exports provided: DashBoardPageModule */

  /***/
  function srcAppDashBoardDashBoardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashBoardPageModule", function () {
      return DashBoardPageModule;
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


    var _dash_board_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dash-board-routing.module */
    "./src/app/dash-board/dash-board-routing.module.ts");
    /* harmony import */


    var _dash_board_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dash-board.page */
    "./src/app/dash-board/dash-board.page.ts");

    var DashBoardPageModule = function DashBoardPageModule() {
      _classCallCheck(this, DashBoardPageModule);
    };

    DashBoardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dash_board_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashBoardPageRoutingModule"]],
      declarations: [_dash_board_page__WEBPACK_IMPORTED_MODULE_6__["DashBoardPage"]]
    })], DashBoardPageModule);
    /***/
  },

  /***/
  "./src/app/dash-board/dash-board.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/dash-board/dash-board.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashBoardDashBoardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  --ion-background-color: black!important;\n}\n\n.div_button {\n  background-color: white;\n}\n\n.main_div {\n  margin-top: 5em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaC1ib2FyZC9FOlxcYWtzaGF5XFxpb25pY1xcVGFibGV6L3NyY1xcYXBwXFxkYXNoLWJvYXJkXFxkYXNoLWJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaC1ib2FyZC9kYXNoLWJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVDQUFBO0FDQUo7O0FER0U7RUFFQSx1QkFBQTtBQ0RGOztBRE1BO0VBSUksZUFBQTtFQUNBLGdCQUFBO0VBQ0QsaUJBQUE7QUNOSCIsImZpbGUiOiJzcmMvYXBwL2Rhc2gtYm9hcmQvZGFzaC1ib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kaXZfYnV0dG9uXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvL21hcmdpbi1sZWZ0OiAyZW07XHJcbiAgLy9tYXJnaW4tcmlnaHQ6IDJlbTtcclxufVxyXG5cclxuLm1haW5fZGl2XHJcbntcclxuXHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2shaW1wb3J0YW50O1xufVxuXG4uZGl2X2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbl9kaXYge1xuICBtYXJnaW4tdG9wOiA1ZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dash-board/dash-board.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/dash-board/dash-board.page.ts ***!
    \***********************************************/

  /*! exports provided: DashBoardPage */

  /***/
  function srcAppDashBoardDashBoardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashBoardPage", function () {
      return DashBoardPage;
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


    var _Model_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Model/Store */
    "./src/app/Model/Store.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Service/user-login.service */
    "./src/app/Service/user-login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Service_network_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Service/network-service.service */
    "./src/app/Service/network-service.service.ts");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
    /* harmony import */


    var _Service_loader_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../Service/loader-service.service */
    "./src/app/Service/loader-service.service.ts");

    var DashBoardPage = /*#__PURE__*/function () {
      function DashBoardPage(platform, sqlite, //public database:SQLiteObject,
      userService, router, networkServiceService, screenOrientation, ionLoader, activatedRoute) {
        var _this = this;

        _classCallCheck(this, DashBoardPage);

        this.platform = platform;
        this.sqlite = sqlite;
        this.userService = userService;
        this.router = router;
        this.networkServiceService = networkServiceService;
        this.screenOrientation = screenOrientation;
        this.ionLoader = ionLoader;
        this.activatedRoute = activatedRoute;
        this.database_name = "AUDIT_DB.db"; // DB name

        this.showSpinner = false;
        this.activatedRoute.queryParams.subscribe(function (res) {
          _this.setPortrait(); // console.log(JSON.parse(res.value));
          //  this.Query_data =<any>JSON.parse(res.value);
          //  console.log("list page");
          //  console.log(this.Query_data.AttemptedId);
          //  debugger;
          //  if(String(this.Query_data.refresh)==="yes")
          //  {
          //     //window.location.reload();
          //  }
          //  this.createDB();
          //  //this.fetchAttemptedAuditForStore(Number(this.Query_data.AuditId), String(this.Query_data.Storeid));
          //this.fetchAttemptedSection(Number(this.Query_data.AttemptedId), Number(this.Query_data.AuditId))

        });
        this.store = new _Model_Store__WEBPACK_IMPORTED_MODULE_3__["Store"]();
        this.platform.ready().then(function () {
          _this.setPortrait();

          _this.createDB(); //this.unlockScreen();

        }).catch(function (error) {
          console.log(error);
        });
      }

      _createClass(DashBoardPage, [{
        key: "showLoader",
        value: function showLoader() {
          var _this2 = this;

          this.ionLoader.showLoader();
          setTimeout(function () {
            _this2.hideLoader();
          }, 128000);
        }
      }, {
        key: "hideLoader",
        value: function hideLoader() {
          this.ionLoader.hideLoader();
          window.location.reload();
        }
      }, {
        key: "setPortrait",
        value: function setPortrait() {
          // set to portrait
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
      }, {
        key: "unlockScreen",
        value: function unlockScreen() {// allow user rotate
          //this.screenOrientation.unlock();
        }
      }, {
        key: "checkconnection_serve",
        value: function checkconnection_serve() {
          this.check_status = this.networkServiceService.getCurrentNetworkStatus(); //alert(this.check_status);
        }
      }, {
        key: "logoff",
        value: function logoff() {
          this.router.navigate(['home']);
        }
      }, {
        key: "GotoNewAudit",
        value: function GotoNewAudit() {
          this.router.navigate(['new-audit']);
        }
      }, {
        key: "GotoCloseAudit",
        value: function GotoCloseAudit() {
          this.router.navigate(['close-audit']);
        }
      }, {
        key: "GotoOpenAudit",
        value: function GotoOpenAudit() {
          this.router.navigate(['open-audit']);
        }
      }, {
        key: "createDB",
        value: function createDB() {
          var _this3 = this;

          console.log("database created");
          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this3.databaseObj = db; //alert('audit Database Created!');

            _this3.getRows();

            _this3.CreateAllTables();

            _this3.create_storetable();

            _this3.fetchAttemptedOpenAuditCount();
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "getRows",
        value: function getRows() {
          var _this4 = this;

          this.databaseObj.executeSql("SELECT * FROM USER_TB", []).then(function (res) {
            _this4.row_data = [];

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this4.row_data.push(res.rows.item(i)); //alert( this.row_data[i].toString())


                console.log(_this4.row_data[i].toString());
              }
            }
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setPortrait();
        } //Get Sync

      }, {
        key: "Get_Sync",
        value: function Get_Sync() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var audit_count;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.checkconnection_serve();
                    audit_count = this.fetchAttemptedOpenAuditCount();
                    console.log("Total Count AttemptedOpen AuditCount");
                    console.log(this.Count_AttemptedOpenAuditCount);
                    console.log(this.Count_AttemptedOpenAuditCount[0].CNT);

                    if (this.Count_AttemptedOpenAuditCount[0].CNT === 0) {
                      if (this.check_status === 0) {
                        this.get_all_store_api();
                        this.Delelete_All_data();
                        this.Get_AllAudit();
                        this.showLoader();
                      } else {
                        if (this.check_status === 1) {
                          alert("Please Check Connection");
                        }
                      }
                    } else {
                      alert("Please Close Open Audit");
                    }

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "Get_AllAudit",
        value: function Get_AllAudit() {
          var _this5 = this;

          // console.log("auditor id: " +this.row_data[0].EMP_ID)
          var Auditor_id = this.row_data[0].EMP_ID.toString();
          console.log("auditor id: " + Auditor_id);

          try {
            this.userService.Get_Audit_By_Auditor(Auditor_id).subscribe(function (response) {
              //this.yser_ss= <JSON>response
              console.log(response); //this.user_detail = new UserData;

              _this5.yser_ss = response;
              console.log(_this5.yser_ss.Audits[0].AuditName);
              console.log(_this5.yser_ss.Audits[0].AuditId);

              if (_this5.yser_ss.Audits.length > 0) {
                var tempVariable = _this5.yser_ss; // this.showLoader();

                for (var i = 0; i <= _this5.yser_ss.Audits.length - 1; i++) {
                  console.log(_this5.yser_ss);

                  _this5.Get_all_Audit_with_question(tempVariable.Audits[i].AuditId);
                } //this.hideLoader();

              }
            });
          } catch (error) {
            alert("Please Check Connection");
          }
        }
      }, {
        key: "Get_all_Audit_with_question",
        value: function Get_all_Audit_with_question(AuditID) {
          var _this6 = this;

          try {
            return this.userService.Get_Audit_By_Id(AuditID).subscribe(function (response) {
              //this.yser_ss= <JSON>response
              //console.log("get audit by id");
              //this.user_detail = new UserData;
              _this6.auditResponce = response; // console.log(typeof(this.auditResponce));
              //console.log(typeof(this.auditResponce.Audt.AuditId));

              _this6.datafrom_server();
            });
          } catch (error) {
            alert("Please Check Connection");
          }
        }
      }, {
        key: "datafrom_server",
        value: function datafrom_server() {
          console.log("NEW AUDIT iNSERTION");
          console.log(this.auditResponce);
          console.log(this.auditResponce.StatusFl); // console.log(this.Audit);
          // console.log(this.auditResponce);
          // console.log(this.auditResponce.Audt.AuditId);
          // console.log(this.auditResponce.Audt.Sections[0].SectionName);
          // console.log("Question Name");
          // console.log(this.auditResponce.Audt.Sections[0].Questions[0].QuestionName);
          // console.log("Question type");
          // console.log(this.auditResponce.Audt.Sections[0].Questions[0].QuestionType);
          // console.log(this.auditResponce.Audt.Sections[0].Questions[0].YesNo[0].ChoiceId);
          // console.log(this.auditResponce.Audt.Sections[0].Questions[0].YesNo[0].Marks);
          //create Audit  

          this.createAudit(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.AuditName, this.auditResponce.Audt.AuditTypeId.toString(), this.auditResponce.Audt.AuditType, this.auditResponce.Audt.AuditStage, this.auditResponce.Audt.AuditPoints.toString(), this.auditResponce.Audt.QuestionCount.toString());

          if (this.auditResponce.Audt.Sections.length > 0) {
            for (var i = 0; i <= this.auditResponce.Audt.Sections.length - 1; i++) {
              //create section
              this.createSection(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(), this.auditResponce.Audt.Sections[i].ParentSectionId.toString(), this.auditResponce.Audt.Sections[i].SectionName, this.auditResponce.Audt.Sections[i].SectionDesc, this.auditResponce.Audt.Sections[i].SectionOrder.toString(), this.auditResponce.Audt.Sections[i].SectionPoint.toString(), this.auditResponce.Audt.Sections[i].TQuestionCount.toString(), this.auditResponce.Audt.Sections[i].QuestionCount.toString(), this.auditResponce.Audt.Sections[i].CQuestionCount.toString());

              if (this.auditResponce.Audt.Sections[i].Questions.length > 0) {
                for (var j = 0; j <= this.auditResponce.Audt.Sections[i].Questions.length - 1; j++) {
                  this.createQuestion(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionTypeId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionName.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionType, this.auditResponce.Audt.Sections[i].Questions[j].QuestionOrder.toString(), this.auditResponce.Audt.Sections[i].Questions[j].IsNC, this.auditResponce.Audt.Sections[i].Questions[j].QuestionPoint.toString());
                  console.log("insering question");
                  console.log(this.auditResponce.Audt.Sections[i].Questions[j].QuestionName);
                  console.log(this.auditResponce.Audt.Sections[i].Questions[j].QuestionType);

                  if (this.auditResponce.Audt.Sections[i].Questions[j].QuestionType == "Choice" && this.auditResponce.Audt.Sections[i].Questions[j].Choice.length > 0) {
                    for (var d = 0; d < this.auditResponce.Audt.Sections[i].Questions[j].Choice.length - 1; d++) {
                      this.createQChoice(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Choice[d].ChoiceId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Choice[d].Choice, this.auditResponce.Audt.Sections[i].Questions[j].Choice[d].Marks.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Choice[d].Comments.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Choice[d].IsNegative);
                    }
                  }

                  if (this.auditResponce.Audt.Sections[i].Questions[j].QuestionType == "Yes/No" && this.auditResponce.Audt.Sections[i].Questions[j].YesNo.length > 0) {
                    for (var e = 0; e < this.auditResponce.Audt.Sections[i].Questions[j].YesNo.length - 1; e++) {
                      this.createQChoice(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].YesNo[e].ChoiceId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].YesNo[e].Choice, this.auditResponce.Audt.Sections[i].Questions[j].YesNo[e].Marks.toString(), this.auditResponce.Audt.Sections[i].Questions[j].YesNo[e].Comments, this.auditResponce.Audt.Sections[i].Questions[j].YesNo[e].IsNegative);
                    }
                  }

                  if (this.auditResponce.Audt.Sections[i].Questions[j].QuestionType == "Standard" && this.auditResponce.Audt.Sections[i].Questions[j].Standard.Id != 0) {
                    this.createQStandard(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Standard.Id.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Standard.Type, this.auditResponce.Audt.Sections[i].Questions[j].Standard.MinRange, this.auditResponce.Audt.Sections[i].Questions[j].Standard.MaxRange, this.auditResponce.Audt.Sections[i].Questions[j].Standard.Fix, this.auditResponce.Audt.Sections[i].Questions[j].Standard.UoM, this.auditResponce.Audt.Sections[i].Questions[j].Standard.Field, this.auditResponce.Audt.Sections[i].Questions[j].Standard.Multiple);

                    if (this.auditResponce.Audt.Sections[i].Questions[j].Standard.PreDefinedValues.length > 0) {
                      for (var c = 0; c < this.auditResponce.Audt.Sections[i].Questions[j].Standard.PreDefinedValues.length - 1; c++) {
                        this.createQStandardPreDefined(this.auditResponce.Audt.AuditId.toString(), this.auditResponce.Audt.Sections[i].SectionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].QuestionId.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Standard.Id.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Standard.PreDefinedValues[c].Id.toString(), this.auditResponce.Audt.Sections[i].Questions[j].Standard.PreDefinedValues[c].Name.toString());
                      }
                    }
                  } //if standared

                } // for Question  

              }
            }
          }
        }
      }, {
        key: "CreateAllTables",
        value: function CreateAllTables() {
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "AUDIT_NAME text not null,AUDIT_TYPE_ID integer not null,AUDIT_TYPE text not null,AUDIT_STAGE text not null,AUDIT_PT integer not null," + "QUESTION_COUNT integer not null);", []).then(function () {
            console.log('Table Audit Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS SECTION_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "SECTION_ID integer not null,PARENT_SECTION_ID integer not null,SECTION_NAME text not null,SECTION_DESC text not null," + "SECTION_ORDER integer not null,SECTION_PT integer not null,T_QUESTION_COUNT integer not null,S_QUESTION_COUNT integer not null," + "C_QUESTION_COUNT integer not null);", []).then(function () {
            console.log('Table section Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS QUESTION_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_TYPE_ID integer not null,QUESTION_NAME text not null," + "QUESTION_TYPE text not null,QUESTION_ORDER integer not null,IS_CRITICAL text not null,QUESTION_MARKS integer not null);", []).then(function () {
            console.log('Table section Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS QUESTION_CHOICE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "SECTION_ID integer not null,QUESTION_ID integer not null,CHOICE_ID integer not null,CHOICE_TEXT text not null,POINTS integer not null," + "COMMENTS_REQUIRED text not null,IS_NEGATIVE text not null);", []).then(function () {
            console.log('Table QUESTION_CHOICE_TB Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS QUESTION_STANDARD_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "SECTION_ID integer not null,QUESTION_ID integer not null,STANDARD_ID integer not null,STANDARD_TYPE text not null,MIN_RANGE text," + "MAX_RANGE text,FIX text,UOM text,FIELD_LABEL text,IS_PREDEFINED text);", []).then(function () {
            console.log('Table QUESTION_STANDARD_TB Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS QUESTION_STANDARD_PREDEFINED_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "SECTION_ID integer not null,QUESTION_ID integer not null,STANDARD_ID integer not null,VALUE_ID integer not null,VALUE_NAME text not null);", []).then(function () {
            console.log('Table section Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS QUESTION_OPTION_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "SECTION_ID integer not null,QUESTION_ID integer not null,OPTION_ID integer not null,OPTION_TEXT text not null,SCORABLE_FL text not null);", []).then(function () {
            console.log('Table section Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS QUESTION_RANGE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "SECTION_ID integer not null,QUESTION_ID integer not null,RANGE_ID integer not null,MIN_RANGE text not null,MAX_RANGE text not null," + "POINTS integer not null,COMMENTS_REQUIRED text not null);", []).then(function () {
            console.log('Table QUESTION_STANDARD_PREDEFINED_TB Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS QUESTION_FIELDS_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "SECTION_ID integer not null,QUESTION_ID integer not null,FIELD_ID integer not null,FIELD_NAME text not null,FIELD_TYPE text not null," + "ISKEY text not null,ISSCORABLE text not null);", []).then(function () {
            console.log('Table QUESTION_FIELDS_TB Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS FIELDS_VALUE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "SECTION_ID integer not null,QUESTION_ID integer not null,FIELD_ID integer not null,VALUE_ID not null,VALUE_NAME text not null,DEFAULT_VALUE text not null);", []).then(function () {
            console.log('Table section Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS FIELDS_CHOICE_TB(_id integer primary key autoincrement,AUDIT_ID integer not null," + "SECTION_ID integer not null,QUESTION_ID integer not null,FIELD_ID integer not null,CHOICE_ID not null,CHOICE_TEXT text not null," + "CHOICE_PT integer not null);", []).then(function () {
            console.log('Table FIELDS_VALUE_TB Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_TB(ATTEMPTED_ID integer primary key autoincrement," + "AUDIT_ID integer not null,AUDIT_NAME text not null,STR_CODE text not null,STR_NAME text not null,USER_ID text not null," + "STR_MANAGER text not null,AUDIT_DT text not null,AUDIT_STATUS text not null,UNIQUE_ID text not null,AUDIT_FINDINGS text not null);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_TB Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_SECTION(ATTEMPTED_ID integer not null,AUDIT_ID integer not null," + "SECTION_ID integer not null,PARENT_SECTION_ID integer not null,SECTION_NAME text not null,SECTION_DESC text not null," + "SECTION_ORDER integer not null,SECTION_PT integer not null,T_QUESTION_COUNT integer not null,QUESTION_ANSWERED integer not null," + "S_QUESTION_COUNT integer not null,C_QUESTION_COUNT integer not null);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_SECTION Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS(ATTEMPTED_ID integer not null,AUDIT_ID integer not null," + "SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_TYPE_ID integer not null,QUESTION_NAME text not null," + "QUESTION_TYPE text not null,QUESTION_ORDER integer not null,IS_CRITICAL text not null,QUESTION_MARKS integer not null,MARKS_SCORED integer not null," + "QUESTION_STATUS text not null,QUESTION_COMMENT text not null,IMAGE_NAME text not null,IS_INCLUDED text not null,IMAGE_PUSHED text not null);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_QUESTIONS Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS_CHOICE(ATTEMPTED_ID integer not null," + "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,CHOICE_ID integer not null," + "CHOICE_TEXT text not null,POINTS integer not null,COMMENTS text,CHOICE_VALUE text not null);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_QUESTIONS_CHOICE Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS_STANDATD(ATTEMPTED_ID integer not null," + "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,STANDARD_ID integer not null," + "FIELD_VALUE text,COMMENTS text,CHOICE_VALUE text,POINTS integer not null,IMAGE_NAME text not null,IMAGE_PUSHED text not null);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_QUESTIONS_STANDATD Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED(ATTEMPTED_ID integer not null," + "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,STANDARD_ID integer not null," + "VALUE_ID integer not null,VALUE_NAME text not null,VALUE_OBSERVED text not null,POINTS integer not null,COMMENTS text,CHOICE_VALUE text not null," + "IMAGE_NAME text not null,IMAGE_PUSHED text not null);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS_OPTION(ATTEMPTED_ID integer not null," + "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,OPTION_ID integer not null," + "OPTION_TEXT text not null,OPTION_TEXT_VALUE text not null,POINTS integer not null,ISSCORABLE text);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_QUESTIONS_OPTION Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_QUESTIONS_RANGE(ATTEMPTED_ID integer not null," + "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,RANGE_ID integer not null," + "MIN_RANGE text not null,MAX_RANGE text not null,POINTS integer not null,COMMENTS text);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_QUESTIONS_RANGE Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_RECIVING_QUESTIONS(ATTEMPTED_ID integer not null," + "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,QUESTION_NAME text not null,UNLOAD_START_TIME text," + "UNLOAD_END_TIME text,VEHICLE_NO text,TEMPERATURE text);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_RECIVING_QUESTIONS Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_QUESTION_FIELD(ATTEMPTED_ID integer not null," + "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,KEY_FIELD_ID integer not null," + "KEY_FIELD_NAME text not null,KEY_FIELD_TYPE text not null,ISKEY text not null,ISSCORABLE text not null,KEY_FIELD_VALUE_ID integer not null," + "KEY_FIELD_VALUE text not null,IMAGE_NAME text not null,IMAGE_PUSHED text not null);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_QUESTION_FIELD Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE(ATTEMPTED_ID integer not null," + "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,KEY_FIELD_ID integer not null,KEY_FIELD_NAME text not null," + "KEY_FIELD_VALUE_ID integer not null,KEY_FIELD_VALUE text not null,OTHER_FIELD_ID integer not null,OTHER_FIELD_NAME text not null," + "OTHER_FIELD_TYPE text not null,OTHER_FIELD_ISKEY text not null,OTHER_FIELD_VALUE_ID integer not null,OTHER_FIELD_VALUE text not null);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE Table IF NOT EXISTS AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE(ATTEMPTED_ID integer not null," + "AUDIT_ID integer not null,SECTION_ID integer not null,QUESTION_ID integer not null,KEY_FIELD_ID integer not null,KEY_FIELD_NAME text not null," + "KEY_FIELD_VALUE_ID integer not null,KEY_FIELD_VALUE text not null,CHOICE_FIELD_ID integer not null,CHOIC_FIELD_NAME text not null," + "CHOICE_FIELD_TYPE text not null,CHOICE_FIELD_ISKEY text not null,CHOICE_ID integer not null,CHOICE_TEXT text not null,CHOICE_PT integer not null,CHECKED Text not null);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE  IF NOT EXISTS AUDIT_ERROR_LOG(ID integer primary key autoincrement,SCREEN_NAME text not null," + "FUNCTION_NAME text not null,EXCEPTION text not null);", []).then(function () {
            console.log('Table AUDIT_ERROR_LOG Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS AUDIT_ATTEMPTED_IMAGES_TB(ATTEMPTED_ID integer not null," + "AUDIT_ID integer not null,STR_CODE text not null,UNIQUE_ID text not null,IMAGE_NAME text not null,IMAGE_PUSHED text not null);", []).then(function () {
            console.log('Table AUDIT_ATTEMPTED_IMAGES_TB Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          }); //this.Delelete_All_data();
        }
      }, {
        key: "create_storetable",
        value: function create_storetable() {
          this.databaseObj.executeSql("CREATE TABLE IF NOT EXISTS STORE_TB(_id integer primary key autoincrement,STR_CODE text not null,STR_NAME text not null);", []).then(function () {//alert('Table Created!');
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "get_all_store_api",
        value: function get_all_store_api() {
          var _this7 = this;

          var Bu_id = this.row_data[0].BU_ID.toString();
          var empid = "00" + this.row_data[0].EMP_ID.toString();
          this.store.StrCode = Bu_id;
          this.store.StrName = empid;
          console.log(this.store);
          this.userService.Get_All_Store(this.store).subscribe(function (response) {
            _this7.storeResponse = response;
            console.log(_this7.storeResponse);

            if (_this7.storeResponse.Stores.length > 0) {
              var tempVariable = _this7.storeResponse.Stores;

              for (var i = 0; i <= _this7.storeResponse.Stores.length - 1; i++) {
                console.log(_this7.yser_ss);

                _this7.insert_store(_this7.storeResponse.Stores[i].StrCode, _this7.storeResponse.Stores[i].StrName);
              }
            }
          });
        }
      }, {
        key: "insert_store",
        value: function insert_store(StrCode, StrName) {
          var _this8 = this;

          this.databaseObj.executeSql("INSERT INTO STORE_TB(STR_CODE,STR_NAME) VALUES('" + StrCode + "','" + StrName + "')", []).then(function () {
            //alert('Store code  inserted !');
            _this8.getstore();
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "getstore",
        value: function getstore() {
          var _this9 = this;

          this.databaseObj.executeSql("SELECT * FROM STORE_TB", []).then(function (res) {
            _this9.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this9.row_store.push(res.rows.item(i));
              }
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deleteStore",
        value: function deleteStore() {
          this.databaseObj.executeSql("DELETE FROM STORE_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "AttemptedOpenAuditCount",
        value: function AttemptedOpenAuditCount(lAuditId, _sStoreCode) {
          var _this10 = this;

          this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM AUDIT_ATTEMPTED_TB t WHERE AUDIT_ID=" + lAuditId + " AND AUDIT_STATUS='Open' AND STR_CODE='" + _sStoreCode + "'", []).then(function (res) {
            _this10.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this10.count_AttemptedOpenAuditCount.push(res.rows.item(i));
              }
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "Delelete_All_data",
        value: function Delelete_All_data() {
          this.databaseObj.executeSql("DELETE FROM AUDIT_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM SECTION_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM QUESTION_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM QUESTION_CHOICE_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM QUESTION_RANGE_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM QUESTION_FIELDS_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM FIELDS_VALUE_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM FIELDS_CHOICE_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM QUESTION_OPTION_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM QUESTION_STANDARD_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM QUESTION_STANDARD_PREDEFINED_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_SECTION", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_RANGE", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM QUESTION_STANDARD_PREDEFINED_TB", []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deleteAudit",
        value: function deleteAudit(lAuditId) {
          this.databaseObj.executeSql("DELETE FROM AUDIT_TB WHERE AUDIT_ID=" + lAuditId, []).then(function (res) {
            console.log(res);
            return true;
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deleteSection",
        value: function deleteSection(lAuditId) {
          this.databaseObj.executeSql("DELETE FROM SECTION_TB WHERE AUDIT_ID=" + lAuditId, []).then(function (res) {
            console.log(res);
            return true;
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deleteQuestion",
        value: function deleteQuestion(lAuditId) {
          this.databaseObj.executeSql("DELETE FROM QUESTION_TB WHERE AUDIT_ID=" + lAuditId, []).then(function (res) {
            console.log(res);
            return true;
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deleteQChoice",
        value: function deleteQChoice(lAuditId) {
          this.databaseObj.executeSql("DELETE FROM QUESTION_CHOICE_TB WHERE AUDIT_ID=" + lAuditId, []).then(function (res) {
            console.log(res);
            return true;
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deleteQOption",
        value: function deleteQOption(lAuditId) {
          this.databaseObj.executeSql("DELETE FROM QUESTION_OPTION_TB WHERE AUDIT_ID=" + lAuditId, []).then(function (res) {
            console.log(res);
            return true;
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deleteQRange",
        value: function deleteQRange(lAuditId) {
          this.databaseObj.executeSql("DELETE FROM QUESTION_RANGE_TB WHERE AUDIT_ID=" + lAuditId, []).then(function (res) {
            console.log(res);
            return true;
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deleteQField",
        value: function deleteQField(lAuditId) {
          this.databaseObj.executeSql("DELETE FROM QUESTION_FIELDS_TB WHERE AUDIT_ID=" + lAuditId, []).then(function (res) {
            console.log(res);
            return true;
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deleteQFieldValue",
        value: function deleteQFieldValue(lAuditId) {
          this.databaseObj.executeSql("DELETE FROM FIELDS_VALUE_TB WHERE AUDIT_ID=" + lAuditId, []).then(function (res) {
            console.log(res);
            return true;
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deleteQFieldChoice",
        value: function deleteQFieldChoice(lAuditId) {
          this.databaseObj.executeSql("DELETE FROM FIELDS_CHOICE_TB WHERE AUDIT_ID=" + lAuditId, []).then(function (res) {
            console.log(res);
            return true;
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAllAudits",
        value: function fetchAllAudits() {
          var _this11 = this;

          this.databaseObj.executeSql("SELECT *  FROM AUDIT_TB", []).then(function (res) {
            _this11.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this11.AllAudits.push(res.rows.item(i));
              }

              return _this11.AllAudits;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "createAudit",
        value: function createAudit(sAuditID, sAuditName, sAuditTypeId, sAuditTyp, sAuditStage, sAuditPt, sQuestionCnt) {
          this.databaseObj.executeSql("INSERT INTO AUDIT_TB (AUDIT_ID, AUDIT_NAME,AUDIT_TYPE_ID,AUDIT_TYPE,AUDIT_STAGE,AUDIT_PT, QUESTION_COUNT) " + "VALUES(" + sAuditID + ",'" + sAuditName + "'," + sAuditTypeId + ",'" + sAuditTyp + "','" + sAuditStage + "'," + sAuditPt + "," + sQuestionCnt + ")", []).then(function (res) {
            console.log(res);
            return true;
          }).catch(function (e) {
            console.log("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "createSection",
        value: function createSection(sAuditID, sSectionId, sParentSectionId, sSectionName, sSectionDesc, sSectionOrder, sSectionPt, sTQuestionCnt, sSQuestionCnt, sCQuestionCnt) {
          this.databaseObj.executeSql("INSERT INTO SECTION_TB(AUDIT_ID, SECTION_ID, PARENT_SECTION_ID, SECTION_NAME, SECTION_DESC, SECTION_ORDER, SECTION_PT, T_QUESTION_COUNT, S_QUESTION_COUNT, C_QUESTION_COUNT ) " + "VALUES(" + sAuditID + "," + sSectionId + "," + sParentSectionId + ",'" + sSectionName + "','" + sSectionDesc + "'," + sSectionOrder + "," + sSectionPt + "," + sTQuestionCnt + "," + sSQuestionCnt + "," + sCQuestionCnt + ")", []).then(function (res) {
            return true;
          }).catch(function (e) {
            console.log("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "createQuestion",
        value: function createQuestion(sAuditID, sSectionId, sQuestionId, sQuestionTypeId, sQuestionName, sQuestionType, sQuestionOrder, sIsCritical, sQuestionMarks) {
          this.databaseObj.executeSql("INSERT INTO QUESTION_TB(AUDIT_ID, SECTION_ID, QUESTION_ID, QUESTION_TYPE_ID, QUESTION_NAME, QUESTION_TYPE, QUESTION_ORDER, IS_CRITICAL, QUESTION_MARKS) " + "VALUES(" + sAuditID + "," + sSectionId + "," + sQuestionId + "," + sQuestionTypeId + ",'" + sQuestionName + "','" + sQuestionType + "'," + sQuestionOrder + ",'" + sIsCritical + "'," + sQuestionMarks + ")", []).then(function (res) {
            return true;
          }).catch(function (e) {
            console.log("error " + JSON.stringify(e));
          }); // this.databaseObj.executeSql( "INSERT INTO QUESTION_TB(AUDIT_ID, SECTION_ID, QUESTION_ID, QUESTION_TYPE_ID, QUESTION_NAME, QUESTION_TYPE, QUESTION_ORDER, IS_CRITICAL, QUESTION_MARKS) " +
          // "VALUES(" + sAuditID + "," + sSectionId + "," + sQuestionId + "," + sQuestionTypeId + ",'" + sQuestionName + "'," + sQuestionType + "," +
          // "'" + sQuestionOrder +"," + sIsCritical+"," + sQuestionMarks+ "')", []).then((res) => {console.log(res); return true;}).catch(e => {console.log("error " + JSON.stringify(e))});
        }
      }, {
        key: "createQChoice",
        value: function createQChoice(sAuditId, sSectionId, sQuestionId, sChoiceId, sChoiceText, sMarks, sComntReq, sIsNegative) {
          this.databaseObj.executeSql("INSERT INTO QUESTION_CHOICE_TB(AUDIT_ID,SECTION_ID,QUESTION_ID,CHOICE_ID,CHOICE_TEXT,POINTS,COMMENTS_REQUIRED,IS_NEGATIVE) " + "VALUES(" + sAuditId + "," + sSectionId + "," + sQuestionId + "," + sChoiceId + ",'" + sChoiceText + "'," + sMarks + ",'" + sComntReq + "','" + sIsNegative + "')", []).then(function (res) {
            return true;
          }).catch(function (e) {
            console.log("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedCompletedAuditByUser",
        value: function fetchAttemptedCompletedAuditByUser(_sUserId) {
          var _this12 = this;

          this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,AUDIT_STATUS," + "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID) AS TOTALQUESTION," + "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID AND QUESTION_STATUS<>'Open') AS ATTEMPTQUESTION," + "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND IS_INCLUDED='Yes') AS AUDIT_POINTS," + "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND QUESTION_STATUS<>'Open'),0) MARKS_SCORED," + "UNIQUE_ID FROM AUDIT_ATTEMPTED_TB t WHERE USER_ID='" + _sUserId + "' AND AUDIT_STATUS='Close'", []).then(function (res) {
            _this12.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this12.AttemptedCompletedAuditByUser.push(res.rows.item(i));
              }

              return _this12.AttemptedCompletedAuditByUser;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchImageNotPushedAttemptedQuestionBySQL",
        value: function fetchImageNotPushedAttemptedQuestionBySQL(lAttemptedId, lAuditId) {
          var _this13 = this;

          this.databaseObj.executeSql("SELECT AUDIT_ID,SECTION_ID,QUESTION_ID,0 AS KEY_FIELD_VALUE_ID,IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTIONS " + "WHERE QUESTION_STATUS='Done' AND ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND IMAGE_PUSHED='No' AND IMAGE_NAME<>'' " + "AND IMAGE_NAME<>'null' " + "UNION " + "SELECT Y.AUDIT_ID,Y.SECTION_ID,Y.QUESTION_ID,X.KEY_FIELD_VALUE_ID,X.IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTION_FIELD X,AUDIT_ATTEMPTED_QUESTIONS Y " + "WHERE X.AUDIT_ID=Y.AUDIT_ID AND X.SECTION_ID=Y.SECTION_ID AND X.QUESTION_ID=Y.QUESTION_ID AND Y.QUESTION_STATUS='Done' " + "AND X.IMAGE_NAME<>'' AND X.IMAGE_NAME<>'null' AND X.IMAGE_PUSHED='No' AND X.ATTEMPTED_ID=" + lAttemptedId + " AND X.AUDIT_ID=" + lAuditId + " " + "UNION " + "SELECT Y.AUDIT_ID,Y.SECTION_ID,Y.QUESTION_ID,X.VALUE_ID AS KEY_FIELD_VALUE_ID,X.IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED X,AUDIT_ATTEMPTED_QUESTIONS Y " + "WHERE X.AUDIT_ID=Y.AUDIT_ID AND X.SECTION_ID=Y.SECTION_ID AND X.QUESTION_ID=Y.QUESTION_ID AND Y.QUESTION_STATUS='Done' " + "AND X.IMAGE_NAME<>'' AND X.IMAGE_NAME<>'null' AND X.IMAGE_PUSHED='No' AND X.ATTEMPTED_ID=" + lAttemptedId + " AND X.AUDIT_ID=" + lAuditId, []).then(function (res) {
            _this13.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this13.ImageNotPushedAttemptedQuestionBySQL.push(res.rows.item(i));
              }

              return _this13.ImageNotPushedAttemptedQuestionBySQL;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedOpenAuditCount",
        value: function fetchAttemptedOpenAuditCount() {
          var _this14 = this;

          this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM AUDIT_ATTEMPTED_TB WHERE AUDIT_STATUS='Open'", []).then(function (res) {
            _this14.Count_AttemptedOpenAuditCount = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this14.Count_AttemptedOpenAuditCount.push(res.rows.item(i));
              }

              console.log(_this14.Count_AttemptedOpenAuditCount);
              return _this14.Count_AttemptedOpenAuditCount;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "deletAttemptedAuditById",
        value: function deletAttemptedAuditById(attemtedId) {
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_TB WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_RECIVING_QUESTIONS WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_OPTION WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_RANGE WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_IMAGES_TB WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED WHERE ATTEMPTED_ID=" + attemtedId, []).then(function (res) {
            console.log(res);
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedQuestionBySQL",
        value: function fetchAttemptedQuestionBySQL(lAttemptedId, lAuditId, lSectionId) {
          var _this15 = this;

          this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID,QUESTION_ORDER," + "CASE WHEN IS_INCLUDED='Yes' THEN QUESTION_MARKS ELSE 0 END AS QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED,IS_CRITICAL " + "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND SECTION_ID=" + lSectionId + " ORDER BY QUESTION_ORDER", []).then(function (res) {
            _this15.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this15.AttemptedQuestionBySQL.push(res.rows.item(i));
              }

              return _this15.AttemptedQuestionBySQL;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedQuestionChoiceBySQL",
        value: function fetchAttemptedQuestionChoiceBySQL(lAttemptedId, lAuditId, lQuestionId) {
          var _this16 = this;

          this.databaseObj.executeSql("SELECT A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.QUESTION_ID,A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME " + "FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE A INNER JOIN AUDIT_ATTEMPTED_QUESTIONS B ON A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID " + "AND A.SECTION_ID=B.SECTION_ID AND A.QUESTION_ID=B.QUESTION_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.QUESTION_ID=" + lQuestionId, []).then(function (res) {
            _this16.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this16.AttemptedQuestionBySQL.push(res.rows.item(i));
              }

              return _this16.AttemptedQuestionBySQL;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedAuditPrevQuestionBySQL",
        value: function fetchAttemptedAuditPrevQuestionBySQL(lAttemptedId, lSectionId, lAuditId, lQuestionId) {
          var _this17 = this;

          this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID," + "QUESTION_ORDER,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED FROM AUDIT_ATTEMPTED_QUESTIONS " + "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM " + "AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ORDER<(SELECT QUESTION_ORDER " + "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + "))", []).then(function (res) {
            _this17.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this17.AttemptedAuditPrevQuestionBySQL.push(res.rows.item(i));
              }

              return _this17.AttemptedAuditPrevQuestionBySQL;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchPrevAttemptedSection",
        value: function fetchPrevAttemptedSection(lAttemptedId, lAuditId, lSectionId) {
          var _this18 = this;

          this.databaseObj.executeSql("SELECT (SELECT QUESTION_ID FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND SECTION_ID=A.SECTION_ID AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " " + "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID)) AS QUESTION_ID,A.SECTION_ID,A.SECTION_NAME," + "(SELECT QUESTION_NAME FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " + "AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_NAME," + "(SELECT QUESTION_TYPE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " + "AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_TYPE FROM AUDIT_ATTEMPTED_SECTION A WHERE A.ATTEMPTED_ID=" + lAttemptedId + " " + "AND A.AUDIT_ID=" + lAuditId + " AND A.SECTION_ORDER=(SELECT MAX(SECTION_ORDER) FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " " + "AND AUDIT_ID=" + lAuditId + " AND SECTION_ORDER<(SELECT SECTION_ORDER FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " " + "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + "))", []).then(function (res) {
            _this18.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this18.PrevAttemptedSection.push(res.rows.item(i));
              }

              return _this18.PrevAttemptedSection;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedAuditNextQuestionBySQL",
        value: function fetchAttemptedAuditNextQuestionBySQL(lAttemptedId, lSectionId, lAuditId, lQuestionId) {
          var _this19 = this;

          this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID," + "QUESTION_ORDER,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED FROM AUDIT_ATTEMPTED_QUESTIONS " + "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM " + "AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ORDER>(SELECT QUESTION_ORDER " + "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + "))", []).then(function (res) {
            _this19.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this19.AttemptedAuditNextQuestionBySQL.push(res.rows.item(i));
              }

              return _this19.AttemptedAuditNextQuestionBySQL;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchNextAttemptedSection",
        value: function fetchNextAttemptedSection(lAttemptedId, lAuditId, lSectionId) {
          var _this20 = this;

          this.databaseObj.executeSql("SELECT (SELECT QUESTION_ID FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND SECTION_ID=A.SECTION_ID AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " " + "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID)) AS QUESTION_ID,A.SECTION_ID,A.SECTION_NAME," + "(SELECT QUESTION_NAME FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " + "AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_NAME," + "(SELECT QUESTION_TYPE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " + "AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_TYPE FROM AUDIT_ATTEMPTED_SECTION A WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " " + "AND A.SECTION_ORDER=(SELECT MIN(SECTION_ORDER) FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND PARENT_SECTION_ID=(SELECT PARENT_SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND SECTION_ID=" + lSectionId + ") AND SECTION_ORDER>(SELECT SECTION_ORDER FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " " + "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + ")) AND A.PARENT_SECTION_ID=(" + "SELECT PARENT_SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " + "AND SECTION_ID=" + lSectionId + ")", []).then(function (res) {
            _this20.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this20.NextAttemptedSection.push(res.rows.item(i));
              }

              return _this20.NextAttemptedSection;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchQuestionById",
        value: function fetchQuestionById(lAuditId, lSectionId, lQuestionId) {
          var _this21 = this;

          this.databaseObj.executeSql("SELECT _id,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER,IS_CRITICAL," + "QUESTION_MARKS,(SELECT COUNT(*) FROM QUESTION_TB WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + ") AS CNT FROM QUESTION_TB t " + "WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ID=" + lQuestionId, []).then(function (res) {
            _this21.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this21.QuestionById.push(res.rows.item(i));
              }

              return _this21.QuestionById;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchQuestionBased",
        value: function fetchQuestionBased(lAuditId, lSectionId, lQuestionId) {
          var _this22 = this;

          this.databaseObj.executeSql("SELECT *  FROM QUESTION_STANDARD_TB" + "WHERE AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, []).then(function (res) {
            _this22.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this22.QuestionBased.push(res.rows.item(i));
              }

              return _this22.QuestionBased;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchQuestionBasedValues",
        value: function fetchQuestionBasedValues(lAuditId, lSectionId, lQuestionId, lStandardId) {
          var _this23 = this;

          this.databaseObj.executeSql("SELECT _id,AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,VALUE_ID,VALUE_NAME FROM QUESTION_STANDARD_PREDEFINED_TB " + "WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ID=" + lQuestionId + " AND STANDARD_ID=" + lStandardId, []).then(function (res) {
            _this23.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this23.QuestionBasedValues.push(res.rows.item(i));
              }

              return _this23.QuestionBasedValues;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchQuestionChoice",
        value: function fetchQuestionChoice(lAuditId, lSectionId, lQuestionId) {
          var _this24 = this;

          this.databaseObj.executeSql("SELECT * FROM QUESTION_CHOICE_TB " + "WHERE AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, []).then(function (res) {
            _this24.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this24.QuestionChoice.push(res.rows.item(i));
              }

              return _this24.QuestionChoice;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchTopAttemptedSection",
        value: function fetchTopAttemptedSection(lAttemptedId, lAuditId) {
          var _this25 = this;

          this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," + "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" + "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," + "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" + "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," + "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" + "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " + "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.PARENT_SECTION_ID=0 ORDER BY A.SECTION_ORDER", []).then(function (res) {
            _this25.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this25.QuestionChoice.push(res.rows.item(i));
              }

              return _this25.QuestionChoice;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchSLAttemptedSection",
        value: function fetchSLAttemptedSection(lAttemptedId, lSectionId, lAuditId) {
          var _this26 = this;

          this.databaseObj.executeSql("SELECT * FROM SECTION_TB WHERE AUDIT_ID=" + lAuditId + " AND PARENT_SECTION_ID=" + lSectionId, []).then(function (res) {
            _this26.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this26.SLAttemptedSection_check.push(res.rows.item(i));
              }

              return _this26.SLAttemptedSection_check;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });

          if (this.SLAttemptedSection_check != null) {
            if (this.SLAttemptedSection_check.length > 0) {
              this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," + "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" + "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," + "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" + "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," + "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" + "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " + "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.PARENT_SECTION_ID=" + lSectionId + " ORDER BY A.SECTION_ORDER", []).then(function (res) {
                _this26.row_store = [];
                console.log(res);

                if (res.rows.length > 0) {
                  for (var i = 0; i < res.rows.length; i++) {
                    _this26.SLAttemptedSection.push(res.rows.item(i));
                  }

                  return _this26.SLAttemptedSection;
                } //this.router.navigate(['dash-board']);

              }).catch(function (e) {
                alert("error " + JSON.stringify(e));
              });
            } else {
              this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," + "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" + "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," + "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" + "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," + "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" + "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " + "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.SECTION_ID=" + lSectionId + " ORDER BY A.SECTION_ORDER", []).then(function (res) {
                _this26.row_store = [];
                console.log(res);

                if (res.rows.length > 0) {
                  for (var i = 0; i < res.rows.length; i++) {
                    _this26.SLAttemptedSection.push(res.rows.item(i));
                  }

                  return _this26.SLAttemptedSection;
                } //this.router.navigate(['dash-board']);

              }).catch(function (e) {
                alert("error " + JSON.stringify(e));
              });
            }
          } else {
            this.databaseObj.executeSql("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," + "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" + "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," + "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" + "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," + "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" + "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" + "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " + "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.PARENT_SECTION_ID=" + lSectionId + " ORDER BY A.SECTION_ORDER", []).then(function (res) {
              _this26.row_store = [];
              console.log(res);

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  _this26.SLAttemptedSection.push(res.rows.item(i));
                }

                return _this26.SLAttemptedSection;
              } //this.router.navigate(['dash-board']);

            }).catch(function (e) {
              alert("error " + JSON.stringify(e));
            });
          }
        }
      }, {
        key: "fetchGenericImageNotPushedAttemptedQuestionBySQL",
        value: function fetchGenericImageNotPushedAttemptedQuestionBySQL(lAttemptedId, lAuditId) {
          var _this27 = this;

          this.databaseObj.executeSql("SELECT AUDIT_ID,IMAGE_NAME FROM AUDIT_ATTEMPTED_IMAGES_TB WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND IMAGE_PUSHED='No' AND IMAGE_NAME<>'' " + "AND IMAGE_NAME<>'null'", []).then(function (res) {
            _this27.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this27.GenericImageNotPushedAttemptedQuestionBySQL.push(res.rows.item(i));
              }

              return _this27.GenericImageNotPushedAttemptedQuestionBySQL;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "DeleteGenericImages",
        value: function DeleteGenericImages(sUniqueID, sAttemptedId) {
          this.databaseObj.executeSql("DELETE FROM AUDIT_ATTEMPTED_IMAGES_TB WHERE ATTEMPTED_ID=" + sAttemptedId, []);
        }
      }, {
        key: "SaveGenericImage",
        value: function SaveGenericImage(sAttemptedId, sUniqueID, sAuditId, sStoreId, sImageNm, i) {
          this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_IMAGES_TB(ATTEMPTED_ID,AUDIT_ID,STR_CODE,UNIQUE_ID,IMAGE_NAME,IMAGE_PUSHED) VALUES(" + sAttemptedId + "," + sAuditId + "," + "'" + sStoreId + "','" + sUniqueID + "','" + sImageNm + "','No')", []).then(function () {//console.log("data inserted");
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "UpdateAuditFindings",
        value: function UpdateAuditFindings(sAttemptedId, sUniqueID, sAuditId, sAuditFindings) {
          this.databaseObj.executeSql("UPDATE AUDIT_ATTEMPTED_TB SET AUDIT_FINDINGS='" + sAuditFindings.replace("'", "''") + "' WHERE ATTEMPTED_ID=" + sAttemptedId + " " + "AND AUDIT_ID=" + sAuditId + " AND UNIQUE_ID='" + sUniqueID + "'", []).then(function () {//console.log("data inserted");
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "GetAuditFindings",
        value: function GetAuditFindings(sAttemptedId, sUniqueID, sAuditId) {
          var _this28 = this;

          this.databaseObj.executeSql("SELECT AUDIT_FINDINGS FROM AUDIT_ATTEMPTED_TB WHERE ATTEMPTED_ID=" + sAttemptedId + " AND AUDIT_ID=" + sAuditId + " AND UNIQUE_ID='" + sUniqueID + "'", []).then(function (res) {
            _this28.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this28.AuditFindings.push(res.rows.item(i));
              }

              return _this28.AuditFindings;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "createQStandard",
        value: function createQStandard(sAuditId, sSectionId, sQuestionId, sStandardId, sStandardTyp, sMinRng, sMaxRng, sFix, sUOM, sFieldLbl, sPreDefined) {
          this.databaseObj.executeSql("INSERT INTO QUESTION_STANDARD_TB(AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,STANDARD_TYPE,MIN_RANGE,MAX_RANGE,FIX,UOM,FIELD_LABEL,IS_PREDEFINED) " + "VALUES(" + sAuditId + "," + sSectionId + "," + sQuestionId + "," + sStandardId + ",'" + sStandardTyp + "','" + sMinRng + "'," + "'" + sMaxRng + "','" + sFix + "','" + sUOM + "','" + sFieldLbl + "','" + sPreDefined + "')", []).then(function () {
            return true;
          }).catch(function (e) {
            console.log("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "createQStandardPreDefined",
        value: function createQStandardPreDefined(sAuditId, sSectionId, sQuestionId, sStandardId, sValueId, sValueNm) {
          this.databaseObj.executeSql("INSERT INTO QUESTION_STANDARD_PREDEFINED_TB(AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,VALUE_ID,VALUE_NAME) " + "VALUES(" + sAuditId + "," + sSectionId + "," + sQuestionId + "," + sStandardId + "," + sValueId + ",'" + sValueNm + "')", []).then(function () {//console.log("data inserted");
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedQuestionStandardBySQL",
        value: function fetchAttemptedQuestionStandardBySQL(lAttemptedId, lAuditId, lQuestionId) {
          var _this29 = this;

          this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,FIELD_VALUE,COMMENTS,CHOICE_VALUE,POINTS,IMAGE_NAME,IMAGE_PUSHED FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD " + "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, []).then(function (res) {
            _this29.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this29.AttemptedQuestionStandardBySQL.push(res.rows.item(i));
              }

              return _this29.AttemptedQuestionStandardBySQL;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedQuestionStandardValueBySQL",
        value: function fetchAttemptedQuestionStandardValueBySQL(lAttemptedId, lAuditId, lQuestionId, lStandardId) {
          var _this30 = this;

          this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,STANDARD_ID,VALUE_ID,VALUE_NAME,VALUE_OBSERVED,POINTS,COMMENTS," + "CHOICE_VALUE,IMAGE_NAME,IMAGE_PUSHED FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED WHERE ATTEMPTED_ID=" + lAttemptedId + " " + "AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + " AND STANDARD_ID=" + lStandardId, []).then(function (res) {
            _this30.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this30.AttemptedQuestionStandardValueBySQL.push(res.rows.item(i));
              }

              return _this30.AttemptedQuestionStandardValueBySQL;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "ChkAudit",
        value: function ChkAudit(sAuditId) {
          var _this31 = this;

          this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM AUDIT_TB WHERE AUDIT_ID=" + sAuditId, []).then(function (res) {
            _this31.row_store = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this31.CheckAudit.push(res.rows.item(i));
              }

              return _this31.CheckAudit;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "ChkSection",
        value: function ChkSection(sAuditId, sSectionId) {
          var _this32 = this;

          this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM SECTION_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId, []).then(function (res) {
            _this32.CheckSection = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this32.CheckSection.push(res.rows.item(i));
              }

              return _this32.CheckSection;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "ChkQuestion",
        value: function ChkQuestion(sAuditId, sSectionId, sQuestionId) {
          var _this33 = this;

          this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM QUESTION_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId + " AND QUESTION_ID=" + sQuestionId, []).then(function (res) {
            _this33.CheckQuestion = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this33.CheckQuestion.push(res.rows.item(i));
              }

              return _this33.CheckQuestion;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "ChkQuestionChoice",
        value: function ChkQuestionChoice(sAuditId, sSectionId, sQuestionId, sChoiceId) {
          var _this34 = this;

          this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM QUESTION_CHOICE_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId + " AND QUESTION_ID=" + sQuestionId + " AND CHOICE_ID=" + sChoiceId, []).then(function (res) {
            _this34.CheckQuestionChoice = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this34.CheckQuestionChoice.push(res.rows.item(i));
              }

              return _this34.CheckQuestionChoice;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "ChkQuestionStandard",
        value: function ChkQuestionStandard(sAuditId, sSectionId, sQuestionId, sStandardId) {
          var _this35 = this;

          this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM QUESTION_STANDARD_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId + " AND QUESTION_ID=" + sQuestionId + " AND STANDARD_ID=" + sStandardId, []).then(function (res) {
            _this35.CheckQuestionStandard = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this35.CheckQuestionStandard.push(res.rows.item(i));
              }

              return _this35.CheckQuestionStandard;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "ChkQuestionStandardPreDefined",
        value: function ChkQuestionStandardPreDefined(sAuditId, sSectionId, sQuestionId, sStandardId, sValueId) {
          var _this36 = this;

          this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM QUESTION_STANDARD_PREDEFINED_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId + " AND QUESTION_ID=" + sQuestionId + " AND STANDARD_ID=" + sStandardId + " AND VALUE_ID=" + sValueId, []).then(function (res) {
            _this36.CheckQuestionStandardPreDefined = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this36.CheckQuestionStandardPreDefined.push(res.rows.item(i));
              }

              return _this36.CheckQuestionStandardPreDefined;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "ChkAttemptAudit",
        value: function ChkAttemptAudit(sAuditId) {
          var _this37 = this;

          this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM AUDIT_ATTEMPTED_TB WHERE AUDIT_ID=" + sAuditId, []).then(function (res) {
            _this37.CheckAttemptAudit = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this37.CheckAttemptAudit.push(res.rows.item(i));
              }

              return _this37.CheckAttemptAudit;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "createSection1",
        value: function createSection1(sAuditId) {
          this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_SECTION(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,PARENT_SECTION_ID,SECTION_NAME,SECTION_DESC,SECTION_ORDER,SECTION_PT," + "T_QUESTION_COUNT,QUESTION_ANSWERED,S_QUESTION_COUNT,C_QUESTION_COUNT) SELECT B.ATTEMPTED_ID,B.AUDIT_ID,A.SECTION_ID,A.PARENT_SECTION_ID,A.SECTION_NAME," + "A.SECTION_DESC,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT,'' AS QUESTION_ANSWERED,A.S_QUESTION_COUNT,A.C_QUESTION_COUNT FROM SECTION_TB A " + "INNER JOIN AUDIT_ATTEMPTED_TB B ON A.AUDIT_ID=B.AUDIT_ID " + "LEFT JOIN AUDIT_ATTEMPTED_SECTION C ON B.ATTEMPTED_ID=C.ATTEMPTED_ID AND B.AUDIT_ID=C.AUDIT_ID AND A.SECTION_ID=C.SECTION_ID " + "WHERE A.AUDIT_ID=" + sAuditId + " AND C.SECTION_ID IS NULL", []).then(function () {//console.log("data inserted");
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "createQuestion1",
        value: function createQuestion1(sAuditId) {
          this.databaseObj.executeSql("INSERT INTO AUDIT_ATTEMPTED_QUESTIONS(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER," + "IS_CRITICAL,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IMAGE_NAME,IS_INCLUDED,IMAGE_PUSHED) SELECT B.ATTEMPTED_ID,B.AUDIT_ID,A.SECTION_ID," + "A.QUESTION_ID,A.QUESTION_TYPE_ID,A.QUESTION_NAME,A.QUESTION_TYPE,A.QUESTION_ORDER,A.IS_CRITICAL,A.QUESTION_MARKS,0 AS MARKS_SCORED," + "'Open' AS QUESTION_STATUS,'' AS QUESTION_COMMENT,'' AS IMAGE_NAME,'Yes' AS IS_INCLUDED,'Yes' AS IMAGE_PUSHED FROM QUESTION_TB A " + "INNER JOIN AUDIT_ATTEMPTED_TB B ON A.AUDIT_ID=B.AUDIT_ID " + "LEFT JOIN AUDIT_ATTEMPTED_QUESTIONS C ON B.ATTEMPTED_ID=C.ATTEMPTED_ID AND B.AUDIT_ID=C.AUDIT_ID AND A.SECTION_ID=C.SECTION_ID AND A.QUESTION_ID=C.QUESTION_ID " + "WHERE A.AUDIT_ID=" + sAuditId + " AND C.QUESTION_ID IS NULL", []).then(function () {//console.log("data inserted");
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "ValidateUser",
        value: function ValidateUser(sUserId, sPassword) {
          var _this38 = this;

          this.databaseObj.executeSql("SELECT COUNT(*) AS CNT FROM USER_TB WHERE EMP_ID='" + sUserId + "' AND PASSWORD='" + sPassword + "'", []).then(function (res) {
            _this38.ValidateUser_arry = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this38.ValidateUser_arry.push(res.rows.item(i));
              }

              return _this38.ValidateUser_arry;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "GetUsrDetails",
        value: function GetUsrDetails(sUserId, sPassword) {
          var _this39 = this;

          this.databaseObj.executeSql("SELECT * FROM USER_TB WHERE EMP_ID='" + sUserId + "' AND PASSWORD='" + sPassword + "'", []).then(function (res) {
            _this39.GetUsrDetails_arry = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this39.GetUsrDetails_arry.push(res.rows.item(i));
              }

              return _this39.GetUsrDetails_arry;
            } //this.router.navigate(['dash-board']);

          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }]);

      return DashBoardPage;
    }(); //root class


    DashBoardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]
      }, {
        type: _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _Service_network_service_service__WEBPACK_IMPORTED_MODULE_7__["NetworkServiceService"]
      }, {
        type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]
      }, {
        type: _Service_loader_service_service__WEBPACK_IMPORTED_MODULE_9__["LoaderServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }];
    };

    DashBoardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dash-board.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dash-board/dash-board.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dash-board.page.scss */
      "./src/app/dash-board/dash-board.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"], _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _Service_network_service_service__WEBPACK_IMPORTED_MODULE_7__["NetworkServiceService"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"], _Service_loader_service_service__WEBPACK_IMPORTED_MODULE_9__["LoaderServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])], DashBoardPage);
    /***/
  }
}]);
//# sourceMappingURL=dash-board-dash-board-module-es5.js.map