function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["close-audit-close-audit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/close-audit/close-audit.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/close-audit/close-audit.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCloseAuditCloseAuditPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div style=\"background-color: black; align-content: center;\"><table style=\"margin-left: 10px; margin-top: 5px; margin-bottom: 2px;\"><tbody><tr><td><span style=\"margin-top:20px; margin-left: 5px; margin-top: 1px;\"><img src=\"../../assets/tablez.png\"  height=\"35\" width=\"35\" /></span></td><td>&nbsp;</td><td><span style=\"color: white; margin-top: 1px;\">Compleated Audit</span></td></tr></tbody></table> </div>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let element_Audit of AttemptedOpenAuditByUser\"> \n  \n   <ion-item>\n    <table>\n      <tbody>\n        <tr>\n          <td rowspan=\"2\" width=\"5%\" align=\"center\"> <span *ngIf=\"element_Audit.MARKS_SCORED===0\"><img src=\"../../assets/red_lock_48.png\"  height=\"40\" width=\"50\" /></span> <span *ngIf=\"element_Audit.MARKS_SCORED>0\"><img src=\"../../assets/refresh1.jpg\"  height=\"40\" width=\"50\" /></span> </td>\n          <td width=\"90%\" align=\"left\" style=\"font-size:x-large;\"><b> Audit: {{element_Audit.AUDIT_NAME}}  {{element_Audit.STR_NAME}}</b> </td>\n          \n        </tr>\n        <tr>\n          <td align=\"left\">  &nbsp;&nbsp;Audit Performed On: {{element_Audit.AUDIT_DT | slice:0:10}} Total Marks: {{element_Audit.AUDIT_POINTS}}  Marks Scored: {{element_Audit.MARKS_SCORED}} \n            </td>\n        </tr>\n      </tbody>\n    </table>\n    <ion-note slot=\"end\" color=\"tertiary\"><ion-button  color=\"medium\" (click)=\"OenAudit_Page_setting(element_Audit.ATTEMPTED_ID, element_Audit.AUDIT_ID, element_Audit.STR_CODE)\"> <ion-checkbox color=\"dark\"></ion-checkbox></ion-button></ion-note>\n   \n    \n              \n             \n  </ion-item>\n</div>\n\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-grid>\n    <ion-row>\n     \n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\"  expand=\"full\" (click)=\"Add_Comment()\">Audit Findings</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\"  (click)=\"openCam()\" expand=\"full\">Attach Image</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\"  (click)=\"PushAudit()\" expand=\"full\">Push</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\" (click)=\"GoToAuditList()\"  expand=\"full\">Open</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-button  color=\"medium\" (click)=\"GoToDashboard()\"  expand=\"full\">Exit</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/unit-manager-login/unit-manager-login.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unit-manager-login/unit-manager-login.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUnitManagerLoginUnitManagerLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <br/><br/><br/>\n  <div style=\"margin-left:35px; margin-right: 35px;\">\n    <!--<form id=\"contactForm\" [formGroup]=\"form_user\">-->\n       <div style= \"border: 1px solid black;\">\n         <ion-input type=\"text\"   [(ngModel)]=\"UMId\" placeholder=\"Unit Manager Id\"></ion-input>\n       </div><br/>\n       <div style=\"border: 1px solid black;\">\n         \n         <ion-input  type=\"Password\" [(ngModel)]=\"PASS\" placeholder=\"Password\"></ion-input>\n       </div>\n      <br/>\n \n         <!--<div><ion-button  style=\"background-color: #3986b2;\" (click)=\"sendPostRequest(form_user)\">&nbsp;&nbsp;&nbsp;Sign In &nbsp;&nbsp;&nbsp;</ion-button></div>-->\n       \n         <!-- <div><ion-button  style=\"background-color: #3986b2;\" (click)=\"checkconnection_serve()\">&nbsp;&nbsp;&nbsp;check connection&nbsp;&nbsp;&nbsp;</ion-button></div> -->\n         \n \n   <!--</form>-->\n </div>\n   \n      \n     \n      <div style=\"margin-left: 8px; margin-right: 8px;\">Comment</div>\n        <div style=\"border-style: double; margin-left: 8px; margin-right: 8px;\"> \n      <ion-textarea rows=\"6\" cols=\"25\"   style=\"background-color: whitesmoke;\" [(ngModel)]=\"comment_um\"></ion-textarea>\n    </div>\n  \n    <div style=\"margin-left: 8px; margin-right: 8px;\">\n      <ion-button  color=\"medium\" (click)=\"close_Comment()\">Exit</ion-button>\n      <ion-button  color=\"medium\" (click)=\"save_Comment()\">Push</ion-button>\n    </div>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/Model/FilledChoice.ts":
  /*!***************************************!*\
    !*** ./src/app/Model/FilledChoice.ts ***!
    \***************************************/

  /*! exports provided: FilledChoice */

  /***/
  function srcAppModelFilledChoiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilledChoice", function () {
      return FilledChoice;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FilledChoice = function FilledChoice() {
      _classCallCheck(this, FilledChoice);
    };
    /***/

  },

  /***/
  "./src/app/Model/SavedAudit.ts":
  /*!*************************************!*\
    !*** ./src/app/Model/SavedAudit.ts ***!
    \*************************************/

  /*! exports provided: SavedAudit */

  /***/
  function srcAppModelSavedAuditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavedAudit", function () {
      return SavedAudit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SavedAudit = function SavedAudit() {
      _classCallCheck(this, SavedAudit);
    };
    /***/

  },

  /***/
  "./src/app/Model/SavedQuestion.ts":
  /*!****************************************!*\
    !*** ./src/app/Model/SavedQuestion.ts ***!
    \****************************************/

  /*! exports provided: SavedQuestion */

  /***/
  function srcAppModelSavedQuestionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavedQuestion", function () {
      return SavedQuestion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SavedQuestion = function SavedQuestion() {
      _classCallCheck(this, SavedQuestion);
    };
    /***/

  },

  /***/
  "./src/app/Model/UnitManager.ts":
  /*!**************************************!*\
    !*** ./src/app/Model/UnitManager.ts ***!
    \**************************************/

  /*! exports provided: UnitManager */

  /***/
  function srcAppModelUnitManagerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitManager", function () {
      return UnitManager;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UnitManager = function UnitManager() {
      _classCallCheck(this, UnitManager);
    };
    /***/

  },

  /***/
  "./src/app/close-audit/close-audit-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/close-audit/close-audit-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CloseAuditPageRoutingModule */

  /***/
  function srcAppCloseAuditCloseAuditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseAuditPageRoutingModule", function () {
      return CloseAuditPageRoutingModule;
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


    var _close_audit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./close-audit.page */
    "./src/app/close-audit/close-audit.page.ts");

    var routes = [{
      path: '',
      component: _close_audit_page__WEBPACK_IMPORTED_MODULE_3__["CloseAuditPage"]
    }];

    var CloseAuditPageRoutingModule = function CloseAuditPageRoutingModule() {
      _classCallCheck(this, CloseAuditPageRoutingModule);
    };

    CloseAuditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CloseAuditPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/close-audit/close-audit.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/close-audit/close-audit.module.ts ***!
    \***************************************************/

  /*! exports provided: CloseAuditPageModule */

  /***/
  function srcAppCloseAuditCloseAuditModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseAuditPageModule", function () {
      return CloseAuditPageModule;
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


    var _close_audit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./close-audit-routing.module */
    "./src/app/close-audit/close-audit-routing.module.ts");
    /* harmony import */


    var _close_audit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./close-audit.page */
    "./src/app/close-audit/close-audit.page.ts");
    /* harmony import */


    var _question_comment_question_comment_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../question-comment/question-comment.module */
    "./src/app/question-comment/question-comment.module.ts");
    /* harmony import */


    var _unit_manager_login_unit_manager_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../unit-manager-login/unit-manager-login.module */
    "./src/app/unit-manager-login/unit-manager-login.module.ts");

    var CloseAuditPageModule = function CloseAuditPageModule() {
      _classCallCheck(this, CloseAuditPageModule);
    };

    CloseAuditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _unit_manager_login_unit_manager_login_module__WEBPACK_IMPORTED_MODULE_8__["UnitManagerLoginPageModule"], _question_comment_question_comment_module__WEBPACK_IMPORTED_MODULE_7__["QuestionCommentPageModule"], _close_audit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CloseAuditPageRoutingModule"]],
      declarations: [_close_audit_page__WEBPACK_IMPORTED_MODULE_6__["CloseAuditPage"]]
    })], CloseAuditPageModule);
    /***/
  },

  /***/
  "./src/app/close-audit/close-audit.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/close-audit/close-audit.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCloseAuditCloseAuditPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3NlLWF1ZGl0L2Nsb3NlLWF1ZGl0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/close-audit/close-audit.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/close-audit/close-audit.page.ts ***!
    \*************************************************/

  /*! exports provided: CloseAuditPage */

  /***/
  function srcAppCloseAuditCloseAuditPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseAuditPage", function () {
      return CloseAuditPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _question_comment_question_comment_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../question-comment/question-comment.page */
    "./src/app/question-comment/question-comment.page.ts");
    /* harmony import */


    var _Service_loader_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../Service/loader-service.service */
    "./src/app/Service/loader-service.service.ts");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
    /* harmony import */


    var _Model_SavedAudit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../Model/SavedAudit */
    "./src/app/Model/SavedAudit.ts");
    /* harmony import */


    var _Model_SavedQuestion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../Model/SavedQuestion */
    "./src/app/Model/SavedQuestion.ts");
    /* harmony import */


    var _Model_FilledChoice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../Model/FilledChoice */
    "./src/app/Model/FilledChoice.ts");
    /* harmony import */


    var _unit_manager_login_unit_manager_login_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../unit-manager-login/unit-manager-login.page */
    "./src/app/unit-manager-login/unit-manager-login.page.ts");
    /* harmony import */


    var _Model_UnitManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../Model/UnitManager */
    "./src/app/Model/UnitManager.ts");

    var delay = function delay(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    };

    var CloseAuditPage = /*#__PURE__*/function () {
      function CloseAuditPage(platform, sqlite, //public database:SQLiteObject,
      userService, router, camera, modalController, screenOrientation, ionLoader) {
        var _this = this;

        _classCallCheck(this, CloseAuditPage);

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
        this.platform.ready().then(function () {
          _this.createDB();

          _this.setLandscape();
        }).catch(function (error) {
          console.log(error);
        });
      }

      _createClass(CloseAuditPage, [{
        key: "showLoader",
        value: function showLoader() {
          var _this2 = this;

          this.ionLoader.showLoader();
          setTimeout(function () {
            _this2.hideLoader();
          }, 328000);
        }
      }, {
        key: "hideLoader",
        value: function hideLoader() {
          this.ionLoader.hideLoader();
          window.location.reload();
        }
      }, {
        key: "openCam",
        value: function openCam() {
          var _this3 = this;

          var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          var tempImage = this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //console.log(imageData)
            _this3.imageData = imageData;
            _this3.image = window.Ionic.WebView.convertFileSrc(imageData);
          }, function (err) {
            // Handle error
            console.log("error " + JSON.stringify(err));
          });
        }
      }, {
        key: "upload",
        value: function upload() {
          var url = 'your REST API url';
          var date = new Date().valueOf(); // Replace extension according to your media type

          var imageName = date + '.jpeg'; // call method that creates a blob from dataUri

          var imageBlob = this.dataURItoBlob(this.imageData);
          var imageFile = new File([imageBlob], imageName, {
            type: 'image/jpeg'
          });
          var postData = new FormData();
          postData.append('file', imageFile); // let data:Observable<any> = this.http.post(url,postData);
          //data.subscribe((result) => {
          //console.log(result);
          //});
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          var byteString = window.atob(dataURI);
          var arrayBuffer = new ArrayBuffer(byteString.length);
          var int8Array = new Uint8Array(arrayBuffer);

          for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
          }

          var blob = new Blob([int8Array], {
            type: 'image/jpeg'
          });
          return blob;
        }
      }, {
        key: "Add_Comment",
        value: function Add_Comment() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _question_comment_question_comment_page__WEBPACK_IMPORTED_MODULE_8__["QuestionCommentPage"],
                      componentProps: {
                        'comment': this.Question_comment
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log("data from model popup in close Audit");
                      console.log(data);
                      var popup_data1 = data['data']; // Here's your selected user!

                      console.log(popup_data1);
                      _this4.Question_comment = popup_data1;
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "OenAudit_Page_setting",
        value: function OenAudit_Page_setting(lAttemptedId, lAuditId, lStoreId) {
          this.objecta = "";
          this.objecta = {
            AttemptedId: lAttemptedId,
            AuditId: lAuditId,
            Storeid: lStoreId
          };
        }
      }, {
        key: "GoToAuditList",
        value: function GoToAuditList() {
          this.router.navigate(['/list-audit'], {
            queryParams: {
              value: JSON.stringify(this.objecta)
            }
          });
        }
      }, {
        key: "setLandscape",
        value: function setLandscape() {
          // set to landscape
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        }
      }, {
        key: "createDB",
        value: function createDB() {
          var _this5 = this;

          console.log("database created");
          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this5.databaseObj = db; //alert('audit Database Created!');

            _this5.getRows();
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "getRows",
        value: function getRows() {
          var _this6 = this;

          this.databaseObj.executeSql("SELECT * FROM USER_TB", []).then(function (res) {
            _this6.row_data = [];

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this6.row_data.push(res.rows.item(i)); //alert( this.row_data[i].toString())


                console.log(_this6.row_data[i].EMP_ID.toString());
              }

              _this6.fetchAttemptedOpenAuditByUser(_this6.row_data[0].EMP_ID.toString());
            }
          }).catch(function (e) {
            alert("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "fetchAttemptedOpenAuditByUser",
        value: function fetchAttemptedOpenAuditByUser(_sUserId) {
          var _this7 = this;

          this.databaseObj.executeSql("SELECT ATTEMPTED_ID,AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,AUDIT_STATUS," + "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID) AS TOTALQUESTION," + "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID AND QUESTION_STATUS<>'Open') AS ATTEMPTQUESTION," + "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND IS_INCLUDED='Yes') AS AUDIT_POINTS," + "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND QUESTION_STATUS<>'Open'),0) MARKS_SCORED," + "UNIQUE_ID FROM AUDIT_ATTEMPTED_TB t WHERE USER_ID='" + _sUserId + "' AND AUDIT_STATUS='Close'", []).then(function (res) {
            _this7.AttemptedOpenAuditByUser = [];
            console.log(res);

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                _this7.AttemptedOpenAuditByUser.push(res.rows.item(i));
              } //console.log("anoop");
              //console.log(this.AttemptedOpenAuditByUser);


              return _this7.AttemptedOpenAuditByUser;
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
        key: "ngOnInit",
        value: function ngOnInit() {} // this.comment_um, this.UMId, this.PASS

      }, {
        key: "PushAudit",
        value: function PushAudit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this8 = this;

            var lAttemptedId, modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    lAttemptedId = this.objecta.AttemptedId; // this.deletAttemptedAuditById(Number(lAttemptedId));
                    //this.Question_comment="akshay  comment"

                    if (!(this.objecta == undefined)) {
                      _context2.next = 6;
                      break;
                    }

                    alert("Please Select One Audit");
                    return _context2.abrupt("return", false);

                  case 6:
                    _context2.next = 8;
                    return this.modalController.create({
                      component: _unit_manager_login_unit_manager_login_page__WEBPACK_IMPORTED_MODULE_14__["UnitManagerLoginPage"],
                      componentProps: {
                        'comment': this.unit_managerComment,
                        'UMId': this.unit_managerid,
                        'PASS': this.unit_managerPass
                      }
                    });

                  case 8:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (data) {
                      debugger;
                      console.log("data from model popup in close Audit for Unit Manager");
                      console.log(data);
                      var popup_data1 = data['data']; // Here's your selected user!

                      console.log(popup_data1);
                      _this8.ObjUM = popup_data1;
                      _this8.unit_managerid = _this8.ObjUM.UMId;
                      _this8.unit_managerPass = _this8.ObjUM.UMPASS;
                      _this8.unit_managerComment = _this8.ObjUM.UComment; //var aa= this.ObjUM.data.UMId;

                      console.log(_this8.unit_managerid);

                      if (_this8.unit_managerid == "" || _this8.unit_managerPass == "") {
                        alert("Please Enter Unit Manager Id And PassWord");
                      } else {
                        _this8.PushAudit_server(_this8.unit_managerid, _this8.unit_managerPass, _this8.unit_managerComment);
                      } //alert(this.unit_managerid);
                      //this.Question_comment=popup_data1;

                    });
                    _context2.next = 12;
                    return modal.present();

                  case 12:
                    return _context2.abrupt("return", _context2.sent);

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "PushAudit_server",
        value: function PushAudit_server(unit_managerid, unit_managerPass, unit_managerComment) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this9 = this;

            var lAttemptedId, lAuditId, Storeid, sql;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.showLoader();
                    this.savedAudit = new _Model_SavedAudit__WEBPACK_IMPORTED_MODULE_11__["SavedAudit"]();
                    lAttemptedId = this.objecta.AttemptedId;
                    lAuditId = this.objecta.AuditId;
                    Storeid = this.objecta.Storeid;
                    sql = "SELECT AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,UNIQUE_ID FROM AUDIT_ATTEMPTED_TB " + "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId;
                    this.databaseObj.executeSql("SELECT AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,UNIQUE_ID FROM AUDIT_ATTEMPTED_TB " + "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + "", []).then(function (res) {
                      _this9.AttemptedClosedAudit = []; //console.log(res);

                      if (res.rows.length > 0) {
                        for (var i = 0; i < res.rows.length; i++) {
                          _this9.AttemptedClosedAudit.push(res.rows.item(i));
                        }

                        console.log("Audit"); //console.log(this.AttemptedClosedAudit);

                        _this9.savedAudit._auditId = Number(_this9.AttemptedClosedAudit[0].AUDIT_ID); //this.savedAudit._auditId=Number(this.AttemptedClosedAudit[0].AUDIT_NAME);

                        _this9.savedAudit._strCode = String(_this9.AttemptedClosedAudit[0].STR_CODE); //this.savedAudit._auditId=Number(this.AttemptedClosedAudit[0].STR_NAME);

                        _this9.savedAudit._auditor = String(_this9.AttemptedClosedAudit[0].USER_ID);
                        _this9.savedAudit._stroreManager = String(_this9.AttemptedClosedAudit[0].STR_MANAGER);
                        var Auditdd = String(_this9.AttemptedClosedAudit[0].AUDIT_DT).slice(0, 10).split("-");
                        var year = Auditdd[0];
                        var mm = Auditdd[1];
                        var dd = Auditdd[2];
                        var Audit_date = dd + "/" + mm + "/" + year;
                        _this9.savedAudit._auditDt = Audit_date; //this.savedAudit._auditDt=String(this.AttemptedClosedAudit[0].AUDIT_DT).slice(0,10).replace('-','/').replace('-','/');

                        _this9.savedAudit._uniqueId = String(_this9.AttemptedClosedAudit[0].UNIQUE_ID);
                        _this9.savedAudit._isValid = "yes";
                        _this9.savedAudit._status = "Closed";
                        debugger;
                        _this9.savedAudit._umId = unit_managerid; //"356302114";

                        _this9.savedAudit._umPwd = unit_managerPass; //"0W9H7Ya1";

                        _this9.savedAudit._auditeeComment = "Auditee Comment";
                        _this9.savedAudit._auditorComment = "Auditror Comment";
                        _this9.savedAudit._auditFindings = "Audit Findings";

                        _this9.GetClosedSection();

                        console.log(_this9.savedAudit); //return this.AttemptedClosedAuditByUser;
                      } //this.router.navigate(['dash-board']);

                    }).catch(function (e) {
                      console.log("error " + JSON.stringify(e));
                    });

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "GetClosedSection",
        value: function GetClosedSection() {
          var _this10 = this;

          var lAttemptedId = this.objecta.AttemptedId;
          var lAuditId = this.objecta.AuditId;
          var Storeid = this.objecta.Storeid;
          var sql = "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER" + "FROM AUDIT_ATTEMPTED_SECTION A " + "WHERE " + "A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId;
          this.databaseObj.executeSql("SELECT SECTION_ID, SECTION_NAME, SECTION_ORDER FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + "", []).then(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this11 = this;

              var i, asns, an;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.AttemptedClosedAuditSection = []; //console.log(res);

                      if (!(res.rows.length > 0)) {
                        _context4.next = 27;
                        break;
                      }

                      for (i = 0; i < res.rows.length; i++) {
                        this.AttemptedClosedAuditSection.push(res.rows.item(i));
                      }

                      console.log("Audit section");
                      this.savedQuestions_array = []; //console.log(this.AttemptedClosedAuditSection);

                      i = 0;

                    case 6:
                      if (!(i < this.AttemptedClosedAuditSection.length)) {
                        _context4.next = 13;
                        break;
                      }

                      _context4.next = 9;
                      return this.GetClosedSeectionQuestion(Number(lAttemptedId), Number(lAuditId), Number(this.AttemptedClosedAuditSection[i].SECTION_ID), String(this.AttemptedClosedAuditSection[i].SECTION_NAME), Number(this.AttemptedClosedAuditSection[i].SECTION_ORDER));

                    case 9:
                      asns = _context4.sent;

                    case 10:
                      i++;
                      _context4.next = 6;
                      break;

                    case 13:
                      this.savedAudit._lstQuestion = this.savedQuestions_array;
                      i = 0;

                    case 15:
                      if (!(i < this.savedAudit._lstQuestion.length)) {
                        _context4.next = 23;
                        break;
                      }

                      _context4.next = 18;
                      return this.GetClosedSeectionQuestionAnswer(Number(lAttemptedId), Number(lAuditId), Number(this.savedAudit._lstQuestion[i]._questionId));

                    case 18:
                      an = _context4.sent;
                      this.savedAudit._lstQuestion[i]._lstChoice = this.filledChoices1;

                    case 20:
                      i++;
                      _context4.next = 15;
                      break;

                    case 23:
                      console.log("object of audit aaaaaaaaaaa");
                      console.log(JSON.stringify(this.savedAudit));
                      console.log(this.savedAudit);
                      this.userService.Post_Close_Audit(this.savedAudit).subscribe(function (response) {
                        debugger; //auditResponce_uploded: AuditResponce;
                        //this.auditResponce = <AuditResponce>response;

                        if (response['StatusFl'] == true) {
                          alert("Audit Uploded");

                          _this11.deletAttemptedAuditById(Number(lAttemptedId));

                          _this11.ionLoader.hideLoader();

                          window.location.reload();
                        } else {
                          alert(response['Msg']);

                          _this11.ionLoader.hideLoader();
                        }
                      }); //this.hideLoader();
                      //return this.AttemptedClosedAuditSection;

                    case 27:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }).catch(function (e) {
            console.log("error " + JSON.stringify(e));
          });
        }
      }, {
        key: "GetClosedSeectionQuestion",
        value: function GetClosedSeectionQuestion(lAttemptedId, lAuditId, lId, SECTION_NAME, SECTION_ORDER) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this12 = this;

            var sql, num;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    sql = "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," + "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " + "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " + "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND B.QUESTION_ID=" + lId; // "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID, B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND B.QUESTION_ID=" + lId +"", [])

                    this.databaseObj.executeSql("SELECT QUESTION_ID,QUESTION_NAME,QUESTION_ORDER,QUESTION_TYPE_ID," + "QUESTION_TYPE,QUESTION_COMMENT,IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTIONS  " + "WHERE  " + "ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lId + "", []).then(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var i, question;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                this.AttemptedClosedAuditSectionQuestion = []; //console.log(res);

                                if (res.rows.length > 0) {
                                  for (i = 0; i < res.rows.length; i++) {
                                    this.AttemptedClosedAuditSectionQuestion.push(res.rows.item(i));
                                  }

                                  console.log("Question"); //console.log(this.AttemptedClosedAuditSectionQuestion);

                                  for (i = 0; i < this.AttemptedClosedAuditSectionQuestion.length; i++) {
                                    question = new _Model_SavedQuestion__WEBPACK_IMPORTED_MODULE_12__["SavedQuestion"]();
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
                                    question._questionAns = "aks"; // console.log("Question obj");
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
                                  } //return this.AttemptedClosedAuditSectionQuestion;

                                } //this.router.navigate(['dash-board']);


                              case 2:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    }).catch(function (e) {
                      console.log("error " + JSON.stringify(e));
                    }); //return new Promise(resolve => {
                    //           setTimeout(() => {
                    //resolve(x);
                    //         }, 100);
                    // });
                    //            console.log("this might take some time....");

                    _context6.next = 4;
                    return delay(5000);

                  case 4:
                    console.log("done!");
                    num = 10;
                    return _context6.abrupt("return", num);

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "GetClosedSeectionQuestionAnswer",
        value: function GetClosedSeectionQuestionAnswer(lAttemptedId, lAuditId, lQuestionId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this13 = this;

            var sql, num;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    sql = "SELECT A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.QUESTION_ID,A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME " + "FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE A INNER JOIN AUDIT_ATTEMPTED_QUESTIONS B ON A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID " + "AND A.SECTION_ID=B.SECTION_ID AND A.QUESTION_ID=B.QUESTION_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.QUESTION_ID=" + lQuestionId;
                    this.databaseObj.executeSql("SELECT A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.QUESTION_ID,A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME " + "FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE A INNER JOIN AUDIT_ATTEMPTED_QUESTIONS B ON A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID " + "AND A.SECTION_ID=B.SECTION_ID AND A.QUESTION_ID=B.QUESTION_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.QUESTION_ID=" + lQuestionId + "", []).then(function (res) {
                      _this13.AttemptedClosedAuditSectionQuestionAnswer = [];
                      console.log(res);

                      if (res.rows.length > 0) {
                        for (var i = 0; i < res.rows.length; i++) {
                          _this13.AttemptedClosedAuditSectionQuestionAnswer.push(res.rows.item(i));
                        }

                        console.log("Question Answer");
                        console.log(_this13.AttemptedClosedAuditSectionQuestionAnswer);
                        _this13.filledChoices1 = [];

                        for (var i = 0; i < _this13.AttemptedClosedAuditSectionQuestionAnswer.length; i++) {
                          var fildcho = new _Model_FilledChoice__WEBPACK_IMPORTED_MODULE_13__["FilledChoice"]();
                          fildcho.Choice = _this13.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_TEXT;
                          fildcho.ChoiceId = Number(_this13.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_ID);
                          fildcho.Marks = Number(_this13.AttemptedClosedAuditSectionQuestionAnswer[i].POINTS);
                          fildcho.Comments = "Akshay";
                          fildcho.Value = _this13.AttemptedClosedAuditSectionQuestionAnswer[i].CHOICE_VALUE; //A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME

                          _this13.filledChoices1.push(fildcho);
                        } // return this.AttemptedClosedAuditSectionQuestionAnswer;

                      } //this.router.navigate(['dash-board']);

                    }).catch(function (e) {
                      console.log("error " + JSON.stringify(e));
                    });
                    console.log("this might take some time....");
                    _context7.next = 5;
                    return delay(5000);

                  case 5:
                    console.log("done!");
                    num = 10;
                    return _context7.abrupt("return", num);

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "deletAttemptedAuditById",
        value: function deletAttemptedAuditById(attemtedId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var num;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
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
                    }); //kjkljkl
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

                    _context8.next = 15;
                    return delay(5000);

                  case 15:
                    console.log("done!");
                    num = 10;
                    return _context8.abrupt("return", num);

                  case 18:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return CloseAuditPage;
    }();

    CloseAuditPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]
      }, {
        type: _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"]
      }, {
        type: _Service_loader_service_service__WEBPACK_IMPORTED_MODULE_9__["LoaderServiceService"]
      }];
    };

    CloseAuditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-close-audit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./close-audit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/close-audit/close-audit.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./close-audit.page.scss */
      "./src/app/close-audit/close-audit.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"], _Service_user_login_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"], _Service_loader_service_service__WEBPACK_IMPORTED_MODULE_9__["LoaderServiceService"]])], CloseAuditPage);
    /***/
  },

  /***/
  "./src/app/unit-manager-login/unit-manager-login.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/unit-manager-login/unit-manager-login.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UnitManagerLoginPageModule */

  /***/
  function srcAppUnitManagerLoginUnitManagerLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitManagerLoginPageModule", function () {
      return UnitManagerLoginPageModule;
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


    var _unit_manager_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./unit-manager-login.page */
    "./src/app/unit-manager-login/unit-manager-login.page.ts");

    var UnitManagerLoginPageModule = function UnitManagerLoginPageModule() {
      _classCallCheck(this, UnitManagerLoginPageModule);
    };

    UnitManagerLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_unit_manager_login_page__WEBPACK_IMPORTED_MODULE_5__["UnitManagerLoginPage"]],
      entryComponents: [_unit_manager_login_page__WEBPACK_IMPORTED_MODULE_5__["UnitManagerLoginPage"]]
    })], UnitManagerLoginPageModule);
    /***/
  },

  /***/
  "./src/app/unit-manager-login/unit-manager-login.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/unit-manager-login/unit-manager-login.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUnitManagerLoginUnitManagerLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXQtbWFuYWdlci1sb2dpbi91bml0LW1hbmFnZXItbG9naW4ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/unit-manager-login/unit-manager-login.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/unit-manager-login/unit-manager-login.page.ts ***!
    \***************************************************************/

  /*! exports provided: UnitManagerLoginPage */

  /***/
  function srcAppUnitManagerLoginUnitManagerLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitManagerLoginPage", function () {
      return UnitManagerLoginPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _Model_UnitManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Model/UnitManager */
    "./src/app/Model/UnitManager.ts");

    var UnitManagerLoginPage = /*#__PURE__*/function () {
      function UnitManagerLoginPage(navParams, modalController) {
        _classCallCheck(this, UnitManagerLoginPage);

        this.navParams = navParams;
        this.modalController = modalController;
        this.UMobject = new _Model_UnitManager__WEBPACK_IMPORTED_MODULE_3__["UnitManager"]();
        this.comment_um = this.navParams.get('comment');
        this.UMId = this.navParams.get('UMId');
        this.PASS = this.navParams.get('PASS');
      }

      _createClass(UnitManagerLoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save_Comment",
        value: function save_Comment() {
          //this.comment="this is not good thing";
          this.dismiss();
        }
      }, {
        key: "close_Comment",
        value: function close_Comment() {
          this.dismiss();
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          var UMobject1 = new _Model_UnitManager__WEBPACK_IMPORTED_MODULE_3__["UnitManager"]();
          UMobject1.UMId = this.UMId;
          UMobject1.UMPASS = this.PASS;
          UMobject1.UComment = this.comment_um;
          this.modalController.dismiss(UMobject1); //, this.UMId, this.PASS
        }
      }]);

      return UnitManagerLoginPage;
    }();

    UnitManagerLoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    UnitManagerLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unit-manager-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unit-manager-login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/unit-manager-login/unit-manager-login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unit-manager-login.page.scss */
      "./src/app/unit-manager-login/unit-manager-login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], UnitManagerLoginPage);
    /***/
  }
}]);
//# sourceMappingURL=close-audit-close-audit-module-es5.js.map