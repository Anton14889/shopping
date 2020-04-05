function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-products/admin-products.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-products/admin-products.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProductsAdminProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container d-flex justify-content-between\">\n    <h1>\n        Admin page\n    </h1>\n    <button mat-raised-button\n    (click)='signOut()'\n>Exit</button>\n</div>\n\n\n\n<app-admin-table></app-admin-table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-table/admin-table.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-table/admin-table.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminTableAdminTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mb-5\">\n\n    <div class=\"d-flex justify-content-between align-items-center\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <button mat-stroked-button color=\"primary\" class='add__button' (click)='openSubmitForm()'>Add item</button>\n    </div>\n\n    <ng-container *ngIf='emptyData'>\n        The list is empty. Add your product\n    </ng-container>\n    <ng-container *ngIf='addProduct && !emptyData'>\n        <div class=\"spinner d-flex justify-content-center align-items-center\">\n            <mat-spinner diameter='50'></mat-spinner>\n        </div>\n    </ng-container>\n\n    <div class=\"mat-elevation-z8\" *ngIf='dataSource.data.length && !addProduct'>\n\n        <table mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n            </ng-container>\n\n            <!-- image Column -->\n            <ng-container matColumnDef=\"image\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\n                <td mat-cell *matCellDef=\"let row\">\n\n                    <ng-container *ngIf='!row?.spinner'>\n                        <img src=\"{{row?.imgURL}}\">\n                    </ng-container>\n\n                    <ng-container *ngIf='row?.spinner'>\n                        <mat-spinner diameter='20' class=\"ml-3\"></mat-spinner>\n                    </ng-container>\n                    <ng-container *ngIf='row?.imageError'>\n                        <span class='error'>\n                            {{row?.imageError}}\n                        </span>\n                    </ng-container>\n                </td>\n            </ng-container>\n\n            <!-- price Column -->\n            <ng-container matColumnDef=\"price\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Price </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.price}}$ </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header  class='text-center'> Name </th>\n                <td mat-cell *matCellDef=\"let row\"  class='text-center'> {{row.name}} </td>\n            </ng-container>\n\n            <!-- description Column -->\n            <ng-container matColumnDef=\"description\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"info/edit\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Info/edit</th>\n                <td mat-cell *matCellDef=\"let row\"> <button mat-stroked-button color=\"primary\"\n                        (click)='openInfo(row)'>info/ edit</button> </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [user]='user' [routAdminUser]='routAdminUser'></app-header>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <div class=\"line-container\">\n    <hr>\n    <span>\n      2019\n    </span>\n  </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"card\">\n\n    <ng-container *ngIf='id'>\n        <ng-container *ngIf='id[data.id]'>\n            <mat-icon color=\"black\" class='favorite'>favorite_border</mat-icon>\n        </ng-container>\n    </ng-container>\n\n    <mat-card-header class='card__header'>\n        <mat-card-title>{{data.name}}</mat-card-title>\n    </mat-card-header>\n    <div class=\"card__img d-flex justify-content-center align-items-center\">\n\n        <ng-container *ngIf='!data?.spinner'>\n            <img mat-card-image src=\"{{data.imgURL}}\" alt=\"Photo {{data.name}}\">\n        </ng-container>\n\n        <ng-container *ngIf='data?.spinner'>\n            <mat-spinner diameter='70' class='d-flex justify-content-center'></mat-spinner>\n        </ng-container>\n        <ng-container *ngIf='data?.imageError'>\n            <span class=\"error\">\n                {{data?.imageError}}\n            </span>\n        </ng-container>\n    </div>\n    <mat-card-content class='card__content'>\n        <p>\n            {{data.description}}\n        </p>\n    </mat-card-content>\n    <mat-card-content>\n        <p>\n            Price: {{data.price}} $\n        </p>\n    </mat-card-content>\n    <mat-card-actions>\n        <ng-container *ngIf='id'>\n            <ng-container *ngIf='id[data.id]'>\n                <button mat-stroked-button (click)=\"clickIdEvent(data)\">{{idText}}</button>\n            </ng-container>\n    \n            <ng-container *ngIf='!id[data.id]'>\n                <button mat-stroked-button (click)=\"clickLeft(data)\">{{button_Left}}</button>\n            </ng-container>\n    \n        </ng-container>\n    \n        <ng-container *ngIf='!id'>\n            <button mat-stroked-button (click)=\"clickLeft(data)\">{{button_Left}}</button>\n        </ng-container>\n    \n        <button mat-stroked-button (click)=\"clickRight(data)\">{{button_Right}}</button>\n        <ng-container *ngIf='close_Button'>\n            <button mat-stroked-button (click)=\"clickCloseButton(data)\">{{close_Button}}</button>\n        </ng-container>    \n    </mat-card-actions>\n    \n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spinner d-flex justify-content-center align-items-center\" *ngIf='spinner'>\n    <mat-spinner diameter='50'></mat-spinner>\n</div>\n<div class=\"container d-flex flex-wrap mb-5\">\n    <div class=\"card\" *ngFor='let data of result; let i = index'>\n        <app-card [button_Left]='\"Delete\"' [button_Right]='\"Buy\"' [data]='data' (buttonLeft)='delete(data, i)'\n            (buttonRight)='buy(data)'>\n        </app-card>\n    </div>\n    <div class=\"card hide\"></div>\n    <div class=\"card hide\"></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoriteFavoriteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spinner d-flex justify-content-center align-items-center\" *ngIf='spinner'>\n    <mat-spinner diameter='50'></mat-spinner>\n</div>\n<div class=\"container d-flex flex-wrap mb-5\">\n    <div class=\"card\" *ngFor='let data of result; let i = index'>\n        <app-card [button_Left]='\"Delete\"' [button_Right]='\"Buy\"' [data]='data' (buttonLeft)='delete(data, i)'\n            (buttonRight)='buy(data)'>\n        </app-card>\n    </div>\n    <div class=\"card hide\"></div>\n    <div class=\"card hide\"></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" class='text-center'>\n    <mat-toolbar-row>\n        <button mat-icon-button (click)=\"drawer.toggle()\" class='menu__icon mr-1'>\n            <mat-icon>menu</mat-icon>\n        </button>\n        <h1 routerLink=\"/products\">\n            SHOPPING WEB APP\n        </h1>\n        <span class=\"example-spacer\"></span>\n        <button mat-icon-button class='menu__icon favorite__icon m-sm-4' routerLink=\"/favorite\">\n            <mat-icon matBadge=\"{{favoritSize}}\" matBadgeColor=\"accent\">favorite_border</mat-icon>\n        </button>\n        <button mat-icon-button class='menu__icon m-sm-4' routerLink=\"/cart\">\n            <mat-icon matBadge=\"{{cartSize}}\" matBadgeColor=\"accent\">shopping_cart</mat-icon>\n        </button>\n       \n    </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-drawer #drawer class=\"example-sidenav\" [mode]=\"mode\" [opened]='isOpen' (click)='close()'>\n\n    <div class=\"container pt-4 m d-flex justify-content-beetwen flex-wrap\">\n\n        <div routerLink=\"/products\" routerLinkActive #rlap=\"routerLinkActive\">\n            <button mat-raised-button *ngIf='!rlap.isActive else nonactivep'>\n                Products\n            </button>\n            <ng-template #nonactivep>\n                <button mat-raised-button color=\"primary\">Products</button>\n            </ng-template>\n        </div>\n\n        <div routerLink=\"/favorite\" routerLinkActive #rlaf=\"routerLinkActive\">\n            <button mat-raised-button *ngIf='!rlaf.isActive; else nonactivef' matBadge=\"{{favoritSize}}\"\n                matBadgePosition=\"after\" matBadgeColor=\"accent\">\n                Favorite\n            </button>\n            <ng-template #nonactivef>\n                <button mat-raised-button color=\"primary\" matBadge=\"{{favoritSize}}\" matBadgePosition=\"after\"\n                    matBadgeColor=\"accent\">Favorite</button>\n            </ng-template>\n        </div>\n\n        <div routerLink=\"/cart\" routerLinkActive #rlac=\"routerLinkActive\">\n            <button mat-raised-button *ngIf='!rlac.isActive; else nonactivec' matBadge=\"{{cartSize}}\"\n                matBadgePosition=\"after\" matBadgeColor=\"accent\">\n                Cart\n            </button>\n            <ng-template #nonactivec>\n                <button mat-raised-button color=\"primary\" matBadge=\"{{cartSize}}\" matBadgePosition=\"after\"\n                    matBadgeColor=\"accent\">\n                    Cart\n                </button>\n            </ng-template>\n        </div>\n\n        <div routerLink=\"/{{routAdminUser}}\" routerLinkActive #rlas=\"routerLinkActive\">\n            <button mat-raised-button *ngIf=' !rlas.isActive; else nonactives' routerLinkActive=\"active\">\n                <ng-container *ngIf='user?.email'>\n                    {{user?.email}}\n                </ng-container>\n                <ng-container *ngIf='!user?.email'>\n                    Sign In\n                </ng-container>\n\n            </button>\n            <ng-template #nonactives>\n                <button mat-raised-button color=\"primary\">\n                    <ng-container *ngIf='user?.email'>\n                        {{user?.email}}\n                    </ng-container>\n                    <ng-container *ngIf='!user?.email'>\n                        Sign In\n                    </ng-container>\n                </button>\n            </ng-template>\n        </div>\n\n        <button mat-button class='menu__icon'>\n            Close menu\n            <mat-icon>\n                close\n            </mat-icon>\n        </button>\n\n    </div>\n    <mat-sidenav-container></mat-sidenav-container>\n</mat-drawer>\n\n\n<div class=\"line-container\">\n    <hr>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-dialog/modal-dialog.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-dialog/modal-dialog.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalDialogModalDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form__container d-flex justify-content-center flex-column\">\n    <form [formGroup]='addProductForm'>\n        <div class=\"name__form mb-4\">\n            <label for=\"name\">\n                Name product\n            </label>\n            <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Name:\" formControlName=\"name\" id='name' type='text'>\n                <mat-error *ngIf='name.errors?.required && (name.dirty || name.touched)'>\n                    Enter name\n                </mat-error>\n            </mat-form-field>\n        </div>\n\n        <div class=\"description__form mb-4\">\n\n            <label for=\"description\">\n                Description\n            </label>\n            <mat-form-field class=\"full-width\">\n                <textarea matInput placeholder=\"description:\" formControlName=\"description\" id='description' rows=\"2\"></textarea>\n                <mat-error *ngIf='description.errors?.required &&  (description.dirty || description.touched)'>\n                    Enter description\n                </mat-error>\n            </mat-form-field>\n\n        </div>\n        <div class=\"price__form mb-4\">\n            <label for=\"price\">\n                Price\n            </label>\n            <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"price:\" formControlName=\"price\" id='price' type='text'>\n                <mat-error>\n                    <span *ngIf='price.errors?.required &&  (price.dirty || price.touched)'>\n                        Enter price\n                    </span>\n                    <span *ngIf='price.errors?.pattern &&  (price.dirty || price.touched)'>\n                        Price must be a number\n                    </span>\n                </mat-error>\n            </mat-form-field>\n        </div>\n        <div class=\"img__form\">\n            <label for=\"img\">\n                Add image\n            </label>\n            <br>\n            <input placeholder=\"img:\" accept=\"image/x-png,image/gif,image/jpeg\" id='img' type='file' #file\n                (change)='imgName()'>\n            <mat-error *ngIf='img.value == null'>\n                Add image\n            </mat-error>\n        </div>\n    </form>\n    <ng-container *ngIf='!editButton'>\n        <button mat-raised-button color=\"primary\" (click)='onSubmit()' class=\"mt-5\"\n            [disabled]='img.value == null || !addProductForm.valid '>Submit</button>\n    </ng-container>\n    <ng-container *ngIf='editButton'>\n        <button mat-raised-button color=\"primary\" (click)='onEdit()' class=\"mt-5\">Submit</button>\n    </ng-container>\n    <button mat-raised-button (click)='closeDialog()' class=\"mt-4 mb-3\">Close</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mb-5\">\n\n  <div class=\"d-flex justify-content-between\">\n    <button mat-stroked-button (click)=\"isOpen = !isOpen\"\n      class='mb-3'>{{isOpen ? 'Hide filter' : 'Open filter'}}</button>\n    <div>\n      <button mat-button (click)=\"byMaxPrice()\" class='mr-1'>Low price</button>\n      <button mat-button (click)=\"byMinPrice()\">High price</button>\n    </div>\n  </div>\n\n  <mat-sidenav-container class=\"driver__container\" (backdropClick)=\"isOpen = !isOpen\">\n    <mat-sidenav class='mat__sidenav' [mode]=\"mode\" [opened]='isOpen' #sidenav autoFocus='false'>\n      <div class='search'>\n        <mat-form-field appearance=\"legacy\">\n          <mat-label>Search by name</mat-label>\n          <input matInput type=\"text\" #inp (input)='search(inp.value)'>\n\n          <button mat-button *ngIf=\"inp.value\" matSuffix mat-icon-button aria-label=\"Clear\" class='clear'\n            (click)=\"[inp.value='', search(inp.value)]\">\n            <mat-icon>close</mat-icon>\n          </button>\n\n        </mat-form-field>\n        <button mat-stroked-button (click)='isOpen = !isOpen' class='button__mobile'>\n          Search\n        </button>\n      </div>\n      <div class='search'>\n        <mat-form-field appearance=\"legacy\">\n          <mat-label>Minimum price</mat-label>\n          <input matInput #inpPriceMin (input)='searchByPrice(inpPriceMin.value, inpPriceMax.value)' value=\"0\">\n        </mat-form-field>\n      </div>\n      <div class='search'>\n        <mat-form-field appearance=\"legacy\">\n          <mat-label>Maximum price</mat-label>\n          <input matInput #inpPriceMax (input)='searchByPrice(inpPriceMin.value, inpPriceMax.value)' value=\"99999\">\n        </mat-form-field>\n        <button mat-stroked-button (click)='isOpen = !isOpen' class='button__mobile'>\n          Search\n        </button>\n      </div>\n\n\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n\n      <div class=\"spinner d-flex justify-content-center align-items-center\" *ngIf='spinner'>\n        <mat-spinner diameter='50'></mat-spinner>\n      </div>\n\n      <div class=\"d-flex flex-wrap justify-content-sm-start justify-content-center\">\n\n        <div class=\"card\" *ngFor='let data of searchArr'>\n          <app-card [data]='data' [button_Left]='\"Add favorites\"' [button_Right]='\"Add cart\"' [id]='id'\n            [idText]='\"Delete favorites\"' (idEvent)=\"deleteFavorites(data)\" (buttonRight)='addCart(data)'\n            (buttonLeft)='addFavorites(data)'></app-card>\n        </div>\n\n        <div class=\"card hide\"></div>\n        <div class=\"card hide\"></div>\n      </div>\n\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSigninSigninComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template appHost></ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template appHost></ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/template-sign/template-sign.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/template-sign/template-sign.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTemplateSignTemplateSignComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"my__container\">\n        <form [formGroup]='signForm'>\n            <div class=\"form-email\">\n\n                <label for=\"email\">\n                    Your email\n                </label>\n\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Email:\" formControlName=\"email\" id='email' type='email'>\n                </mat-form-field>\n\n                <div class=\"error\" role=\"alert\" *ngIf='email.errors?.required &&  (email.dirty || email.touched)'>\n                    Enter email\n                </div>\n\n                <div class=\"error\" role=\"alert\" *ngIf=\"email.errors?.email &&  (email.dirty || email.touched)\">\n                    Incorrect email\n                </div>\n            </div>\n\n            <div class=\"form-password\">\n\n                <label for=\"password\">\n                    Your password\n                </label>\n\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Password:\" formControlName=\"password\" id='password' type='password'>\n                </mat-form-field>\n\n                <div class=\"error\" role=\"alert\" *ngIf='password.errors?.minlength'>\n                    Password at least 6 characters\n                </div>\n                <div class=\"error\" role=\"alert\"\n                    *ngIf='password.errors?.required &&  (password.dirty || password.touched)'>\n                    Enter password\n                </div>\n\n            </div>\n\n            <button mat-raised-button color=\"primary\" (click)='onSubmit()'\n            [disabled]='!signForm.valid'\n            >{{buttonValue}}</button>\n        </form>\n           <div class=\"signup\">\n            <a routerLink='/{{rout}}'>\n                {{signMessage}}\n            </a>\n           </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-info/user-info.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-info/user-info.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserInfoUserInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n   <ul>\n       <li>email: {{user.email}}</li>\n       <li>displayName: {{user.displayName}}</li>\n       <li>photoURL: {{user.photoURL}}</li>\n       <li>emailVerified: {{user.emailVerified}}</li>\n       <li>phoneNumber: {{user.phoneNumber}}</li>\n   </ul>\n</div>\n<div class=\"container\">\n    <button mat-raised-button\n        (click)='signOut()'\n    >Exit</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/admin-mobile-edit/admin-mobile-edit.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-mobile-edit/admin-mobile-edit.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMobileEditAdminMobileEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n    width: 260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbW9iaWxlLWVkaXQvYWRtaW4tbW9iaWxlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1tb2JpbGUtZWRpdC9hZG1pbi1tb2JpbGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIHdpZHRoOiAyNjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-mobile-edit/admin-mobile-edit.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin-mobile-edit/admin-mobile-edit.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdminMobileEditComponent */

  /***/
  function srcAppAdminMobileEditAdminMobileEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminMobileEditComponent", function () {
      return AdminMobileEditComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modal-dialog/modal-dialog.component */
    "./src/app/modal-dialog/modal-dialog.component.ts");
    /* harmony import */


    var _modal_buy_modal_buy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../modal-buy/modal-buy.component */
    "./src/app/modal-buy/modal-buy.component.ts");

    var AdminMobileEditComponent =
    /*#__PURE__*/
    function () {
      function AdminMobileEditComponent(data, dialogRef, dialog) {
        _classCallCheck(this, AdminMobileEditComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.close_Button = 'Close';
        this.names = data.uniqueNames;
      }

      _createClass(AdminMobileEditComponent, [{
        key: "edit",
        value: function edit() {
          this.dialog.open(_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ModalDialogComponent"], {
            data: {
              eventObj: this.data.eventObj,
              uniqueNames: this.names,
              id: this.data.id,
              editButton: true
            },
            maxHeight: '80vh',
            maxWidth: '95vw',
            position: {
              'top': '15vh'
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete() {
          this.dialog.open(_modal_buy_modal_buy_component__WEBPACK_IMPORTED_MODULE_4__["ModalBuyComponent"], {
            data: {
              name: this.data.eventObj.name,
              message: 'delete',
              button_message: 'Delete',
              eventObj: this.data.eventObj,
              id: this.data.id,
              editButton: true,
              adminDelete: true
            }
          });
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }]);

      return AdminMobileEditComponent;
    }();

    AdminMobileEditComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    AdminMobileEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-mobile-edit',
      template: "\n       <div class='card'>\n       <app-card [data]=\"data.eventObj\"\n        [close_Button]='close_Button'\n       [button_Left]='\"Delete\"'\n       [button_Right]='\"Edit\"'\n       (buttonRight)='edit()'\n       (buttonLeft)='delete()'\n       (closeButton)='closeDialog()'\n       >   \n           </app-card>\n       </div>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-mobile-edit.component.css */
      "./src/app/admin-mobile-edit/admin-mobile-edit.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AdminMobileEditComponent);
    /***/
  },

  /***/
  "./src/app/admin-products/admin-products.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/admin-products/admin-products.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProductsAdminProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n    width: 80px;\n    height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin-products/admin-products.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin-products/admin-products.component.ts ***!
    \************************************************************/

  /*! exports provided: AdminProductsComponent */

  /***/
  function srcAppAdminProductsAdminProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function () {
      return AdminProductsComponent;
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


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    var AdminProductsComponent =
    /*#__PURE__*/
    function () {
      function AdminProductsComponent(authGuard, appComponent) {
        _classCallCheck(this, AdminProductsComponent);

        this.authGuard = authGuard;
        this.appComponent = appComponent;
      }

      _createClass(AdminProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authGuard.checkLogin('/sign-in');
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.appComponent.signOut();
        }
      }]);

      return AdminProductsComponent;
    }();

    AdminProductsComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]
      }, {
        type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
      }];
    };

    AdminProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-products/admin-products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-products.component.css */
      "./src/app/admin-products/admin-products.component.css")).default]
    })], AdminProductsComponent);
    /***/
  },

  /***/
  "./src/app/admin-table/admin-table.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/admin-table/admin-table.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminTableAdminTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 55%;\n}\n\n.add__button {\n  width: 20%;\n  height: 70%;\n  min-width: 100px;\n}\n\ntd.mat-cell:last-of-type, td.mat-footer-cell:last-of-type, th.mat-header-cell:last-of-type {\n  padding-right: 0\n}\n\ntable img {\n  width: 50px;\n  padding: 5px;\n}\n\n.mobile__info {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: #fff;\n  padding: 20px;\n}\n\n.card {\n  max-width: 400px;\n  margin: auto;\n}\n\n.card img {\n  height: 200px;\n  width: 100%;\n}\n\n@media screen and (max-width: 768px) {\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tdGFibGUvYWRtaW4tdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tdGFibGUvYWRtaW4tdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDU1JTtcbn1cblxuLmFkZF9fYnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBcbn1cbnRhYmxlIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tb2JpbGVfX2luZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uY2FyZCBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin-table/admin-table.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin-table/admin-table.component.ts ***!
    \******************************************************/

  /*! exports provided: AdminTableComponent */

  /***/
  function srcAppAdminTableAdminTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminTableComponent", function () {
      return AdminTableComponent;
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


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../upload-service/upload.service */
    "./src/app/upload-service/upload.service.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modal-dialog/modal-dialog.component */
    "./src/app/modal-dialog/modal-dialog.component.ts");
    /* harmony import */


    var _admin_mobile_edit_admin_mobile_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../admin-mobile-edit/admin-mobile-edit.component */
    "./src/app/admin-mobile-edit/admin-mobile-edit.component.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var AdminTableComponent =
    /*#__PURE__*/
    function () {
      function AdminTableComponent(uploadService, media, dialog, data) {
        var _this = this;

        _classCallCheck(this, AdminTableComponent);

        this.uploadService = uploadService;
        this.dialog = dialog;
        this.data = data;
        this.displayedColumns = ['id', 'image', 'name', 'price', 'info/edit'];
        this.id = -1;
        this.names = {};
        this.editObj = {};
        this.addProduct = false;
        this.editButton = false;
        this.emptyData = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.mobileQuery = media.matchMedia('(max-width: 768px)');

        this.mobileQueryListener = function () {
          _this.displayedColumns.length === 4 ? _this.displayedColumns = ['id', 'image', 'name', 'price', 'info/edit'] : _this.displayedColumns = ['id', 'image', 'name', 'info/edit'];
        };

        this.mobileQuery.addListener(this.mobileQueryListener);
      }

      _createClass(AdminTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.allList();

          if (document.documentElement.clientWidth <= 768) {
            this.displayedColumns = ['id', 'image', 'name', 'info/edit'];
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this.mobileQueryListener);

          try {
            this.imgList.unsubscribe();
            this.allListSub.unsubscribe();
            this.dataServer.unsubscribe();
          } catch (error) {}
        }
      }, {
        key: "openSubmitForm",
        value: function openSubmitForm() {
          this.dialog.open(_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ModalDialogComponent"], {
            data: {
              id: this.id,
              editButton: false,
              uniqueNames: this.names,
              eventObj: {
                img: ''
              }
            },
            maxHeight: '80vh',
            maxWidth: '95vw',
            position: {
              'top': '15vh'
            }
          });
          this.updateListAfterCloseDialog();
        }
      }, {
        key: "openInfo",
        value: function openInfo(e) {
          this.editObj = e;
          this.dialog.open(_admin_mobile_edit_admin_mobile_edit_component__WEBPACK_IMPORTED_MODULE_9__["AdminMobileEditComponent"], {
            data: {
              eventObj: e,
              uniqueNames: this.names,
              id: this.id,
              editButton: true
            },
            maxWidth: '96vw',
            maxHeight: '90vh',
            position: {
              'top': '10vh'
            }
          });
          this.updateListAfterCloseDialog();
        }
      }, {
        key: "updateListAfterCloseDialog",
        value: function updateListAfterCloseDialog() {
          var _this2 = this;

          var dialog = this.dialog.afterAllClosed.subscribe(function (e) {
            _this2.dataServer = _this2.data.changeEmitted$.subscribe(function (dataServer) {
              if (dataServer['product']) {
                _this2.allList();

                setTimeout(function () {
                  _this2.data.emitProduct(false);

                  dialog.unsubscribe();
                }, 300);
              }
            });
          });
        }
      }, {
        key: "allList",
        value: function allList() {
          var _this3 = this;

          var result = [];
          var objData = {};
          this.addProduct = true;
          this.allListSub = this.uploadService.tableList().subscribe(function (data) {
            if (data.empty) {
              _this3.dataSource.data = result;
              _this3.emptyData = data.empty;
            }

            data.forEach(function (doc) {
              if (_this3.id < doc.data()['id']) {
                _this3.id = doc.data()['id'];
              }

              _this3.uniqueNames(doc.data()['name'], true);

              _this3.emptyData = false;
              _this3.imgList = _this3.uploadService.downloadImage(doc.data()['img']).subscribe(function (imgURL) {
                objData = doc.data();
                objData['imgURL'] = imgURL;
                result.push(objData);
                _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](result);
                _this3.dataSource.paginator = _this3.paginator;
                _this3.addProduct = false;
              }, function (error) {
                console.warn(error);
                objData = doc.data();
                objData['imageError'] = 'error';
                result.push(objData);
                _this3.dataSource.data = result;
                _this3.addProduct = false;
              });
            });
          }, function (e) {
            return console.warn("tableList error");
          });
        }
      }, {
        key: "uniqueNames",
        value: function uniqueNames(name, value) {
          this.names[name] = value;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }]);

      return AdminTableComponent;
    }();

    AdminTableComponent.ctorParameters = function () {
      return [{
        type: _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["MediaMatcher"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: false
    })], AdminTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: false
    })], AdminTableComponent.prototype, "sort", void 0);
    AdminTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-table/admin-table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-table.component.css */
      "./src/app/admin-table/admin-table.component.css")).default]
    })], AdminTableComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
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


    var _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../admin-products/admin-products.component */
    "./src/app/admin-products/admin-products.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [{
      path: 'admin',
      component: _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_3__["AdminProductsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
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


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-products/admin-products.component */
    "./src/app/admin-products/admin-products.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./favorite/favorite.component */
    "./src/app/favorite/favorite.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user-info/user-info.component */
    "./src/app/user-info/user-info.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: '/sign-in',
      pathMatch: 'full'
    }, {
      path: 'sign-in',
      component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    }, {
      path: 'sign-up',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'admin',
      component: _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_5__["AdminProductsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    }, {
      path: 'products',
      component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]
    }, {
      path: 'favorite',
      component: _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_7__["FavoriteComponent"]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]
    }, {
      path: 'user',
      component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_9__["UserInfoComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".line-container {\n    text-align: center;\n    z-index: 200;\n    background: #fff;\n}\n.line-container hr {\n    margin: 0 0 2px 0!important\n }\n.line-container {\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7Q0FDSDtBQUNEO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmxpbmUtY29udGFpbmVyIGhyIHtcbiAgICBtYXJnaW46IDAgMCAycHggMCFpbXBvcnRhbnRcbiB9XG4ubGluZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _user_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-services/cart.service */
    "./src/app/user-services/cart.service.ts");
    /* harmony import */


    var _user_services_favorites_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-services/favorites.service */
    "./src/app/user-services/favorites.service.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(data, auth, afAuth, afs, ref, router, cartService, favoritesService, authGuard, ngZone) {
        _classCallCheck(this, AppComponent);

        this.data = data;
        this.auth = auth;
        this.afAuth = afAuth;
        this.afs = afs;
        this.ref = ref;
        this.router = router;
        this.cartService = cartService;
        this.favoritesService = favoritesService;
        this.authGuard = authGuard;
        this.ngZone = ngZone;
        this.user = {
          email: null,
          isAdmin: null
        };
        this.routAdminUser = 'sign-in';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.auf();
        }
      }, {
        key: "auf",
        value: function auf() {
          var _this4 = this;

          this.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
              _this4.user.email = user.email;
              _this4.user.isAdmin = false;
              _this4.user.user = {
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
                emailVerified: user.emailVerified,
                phoneNumber: user.phoneNumber
              };

              _this4.data.clearId();

              _this4.ref.detectChanges();

              _this4.data.emitUser(_this4.user);

              _this4.cartService.cartSize(_this4.user.email);

              _this4.favoritesService.favoritSize(_this4.user.email);

              _this4.afs.collection("admins").doc('eQbHkjgcwiGpCqwWHyzj').get().subscribe(function (data) {
                if (data.data()[_this4.user.email]) {
                  _this4.auth.login(data.data()[_this4.user.email]);

                  _this4.authGuard.checkLogin('admin');

                  _this4.routAdminUser = 'admin';
                  _this4.user.isAdmin = true;
                  setTimeout(function () {
                    _this4.navigate(['admin']); // this.router.navigate(['products'])

                  }, 0);
                  return;
                }

                _this4.routAdminUser = 'user';

                _this4.navigate(['products']);

                return;
              });
            } else {
              console.log('НЕТ АУТЕНТИФИКАЦИИ');
              _this4.user = {
                email: null,
                isAdmin: false,
                favoritSize: null,
                cartSize: null
              };

              _this4.data.clearId();

              _this4.data.emitUser(_this4.user);

              _this4.cartService.cartSize(_this4.user.email);

              _this4.favoritesService.favoritSize(_this4.user.email);

              _this4.routAdminUser = 'sign-in';

              _this4.navigate(['products']);
            }
          });
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.afAuth.auth.signOut().then(function (_) {
            console.log('signOut');
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "navigate",
        value: function navigate(commands) {
          var _this5 = this;

          this.ngZone.run(function () {
            return _this5.router.navigate(commands);
          }).then();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _user_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
      }, {
        type: _user_services_favorites_service__WEBPACK_IMPORTED_MODULE_8__["FavoritesService"]
      }, {
        type: _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _template_sign_template_sign_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./template-sign/template-sign.component */
    "./src/app/template-sign/template-sign.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _template_shared_host_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./template-shared/host.directive */
    "./src/app/template-shared/host.directive.ts");
    /* harmony import */


    var _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./admin-products/admin-products.component */
    "./src/app/admin-products/admin-products.component.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./favorite/favorite.component */
    "./src/app/favorite/favorite.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _admin_table_admin_table_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./admin-table/admin-table.component */
    "./src/app/admin-table/admin-table.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _modal_buy_modal_buy_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./modal-buy/modal-buy.component */
    "./src/app/modal-buy/modal-buy.component.ts");
    /* harmony import */


    var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./user-info/user-info.component */
    "./src/app/user-info/user-info.component.ts");
    /* harmony import */


    var _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./modal-dialog/modal-dialog.component */
    "./src/app/modal-dialog/modal-dialog.component.ts");
    /* harmony import */


    var _admin_mobile_edit_admin_mobile_edit_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./admin-mobile-edit/admin-mobile-edit.component */
    "./src/app/admin-mobile-edit/admin-mobile-edit.component.ts");
    /* harmony import */


    var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./toastr/toastr.component */
    "./src/app/toastr/toastr.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js"); // import { AngularFireModule } from 'angularfire2';
    // import { AngularFirestore } from '@angular/fire/firestore';
    // << Note AngularFirestoreModule !!!


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_13__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _template_sign_template_sign_component__WEBPACK_IMPORTED_MODULE_16__["TemplateSignComponent"], _template_shared_host_directive__WEBPACK_IMPORTED_MODULE_29__["HostDirective"], _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_30__["AdminProductsComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_32__["ProductsComponent"], _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_33__["FavoriteComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_34__["CartComponent"], _admin_table_admin_table_component__WEBPACK_IMPORTED_MODULE_35__["AdminTableComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_36__["CardComponent"], _modal_buy_modal_buy_component__WEBPACK_IMPORTED_MODULE_37__["ModalBuyComponent"], _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_38__["UserInfoComponent"], _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_39__["ModalDialogComponent"], _admin_mobile_edit_admin_mobile_edit_component__WEBPACK_IMPORTED_MODULE_40__["AdminMobileEditComponent"], _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_41__["ToastrComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_31__["AdminModule"], //firebase
      _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase), angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"], //material
      _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"]],
      providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], {
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MAT_DIALOG_DEFAULT_OPTIONS"],
        useValue: {
          hasBackdrop: true
        }
      }, {
        provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
        useValue: {
          duration: 1000
        }
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
      entryComponents: [_template_sign_template_sign_component__WEBPACK_IMPORTED_MODULE_16__["TemplateSignComponent"], _modal_buy_modal_buy_component__WEBPACK_IMPORTED_MODULE_37__["ModalBuyComponent"], _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_39__["ModalDialogComponent"], _admin_mobile_edit_admin_mobile_edit_component__WEBPACK_IMPORTED_MODULE_40__["AdminMobileEditComponent"], _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_41__["ToastrComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var url = state.url;
          return this.checkLogin(url);
        }
      }, {
        key: "checkLogin",
        value: function checkLogin(url) {
          if (this.authService.isLoggedIn) {
            return true;
          }

          this.authService.redirectUrl = url; // Navigate to the login page with extras

          this.router.navigate(['/sign-in']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService() {
        _classCallCheck(this, AuthService);

        this.isLoggedIn = false;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(value) {
          this.isLoggedIn = value;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isLoggedIn = false;
        }
      }]);

      return AuthService;
    }();

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/card/card.component.css":
  /*!*****************************************!*\
    !*** ./src/app/card/card.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card__img {\n  margin-bottom: 20px;\n  margin-top: 15px;\n}\nimg {\n  margin: auto;\n  max-height: 300px;\n  width: inherit;\n}\n.card__content {\n  height: 150px;\n  overflow-x: auto;\n}\n.card__header {\n  line-height: 50px;\n}\n.favorite {\n  position: absolute;\n  right: 20px;\n  top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkX19pbWcge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4uY2FyZF9fY29udGVudCB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uY2FyZF9faGVhZGVyIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG4uZmF2b3JpdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardComponent =
    /*#__PURE__*/
    function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);

        this.idEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.buttonLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.buttonRight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CardComponent, [{
        key: "clickLeft",
        value: function clickLeft(val) {
          this.buttonLeft.emit(val);
        }
      }, {
        key: "clickRight",
        value: function clickRight(val) {
          this.buttonRight.emit(val);
        }
      }, {
        key: "clickCloseButton",
        value: function clickCloseButton(val) {
          this.closeButton.emit(val);
        }
      }, {
        key: "clickIdEvent",
        value: function clickIdEvent(val) {
          this.idEvent.emit(val);
        }
      }]);

      return CardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "button_Left", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "button_Right", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "close_Button", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "idText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardComponent.prototype, "idEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardComponent.prototype, "buttonLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardComponent.prototype, "buttonRight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardComponent.prototype, "closeButton", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.css */
      "./src/app/card/card.component.css")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/cart/cart.component.css":
  /*!*****************************************!*\
    !*** ./src/app/cart/cart.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n    min-width: 270px;\n    max-width: 350px;\n    margin: 0 auto 20px;\n    height: 100%;\n  }\n.card.hide {\n    max-width: 100%;\n    min-width: 270px;\n    /* width: calc(100% - 330px); */\n    visibility: hidden;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7QUFDRjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuLmNhcmQuaGlkZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG4gICAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDMzMHB4KTsgKi9cbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
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


    var _user_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-services/cart.service */
    "./src/app/user-services/cart.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _modal_buy_modal_buy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../modal-buy/modal-buy.component */
    "./src/app/modal-buy/modal-buy.component.ts");
    /* harmony import */


    var _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../upload-service/upload.service */
    "./src/app/upload-service/upload.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(cartService, dialog, data, uploadService) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
        this.dialog = dialog;
        this.data = data;
        this.uploadService = uploadService;
        this.user = {
          email: null
        };
        this.result = [];
        this.spinner = false;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.dataServer = this.data.changeEmitted$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (dataServer) {
            if (dataServer['email'] != _this6.user['email']) {
              _this6.user['email'] = dataServer['email'];

              _this6.userList();
            } else if (_this6.user['email'] !== undefined) {
              _this6.user['email'] = undefined;

              _this6.noUserList();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          try {
            this.dataServer.unsubscribe();
            this.imgList.unsubscribe();
            this.cartList.unsubscribe();
            this.allListSub.unsubscribe();
          } catch (error) {}
        }
      }, {
        key: "delete",
        value: function _delete(data, i) {
          this.result.splice(i, 1);
          this.cartService.deleteItem(this.user.email, "".concat(data.id), data.name);
        }
      }, {
        key: "buy",
        value: function buy(data) {
          this.dialog.open(_modal_buy_modal_buy_component__WEBPACK_IMPORTED_MODULE_5__["ModalBuyComponent"], {
            data: {
              name: data.name,
              message: 'to buy',
              button_message: 'Buy'
            }
          });
        }
      }, {
        key: "noUserList",
        value: function noUserList() {
          var _this7 = this;

          var result = [];
          var dataObj = {};
          var fa = JSON.parse(localStorage.getItem('cart')) || {};

          for (var key in fa) {
            if (fa.hasOwnProperty(key)) {
              var element = fa[key];

              if (element) {
                this.spinner = true;
                this.cartList = this.cartService.searchById(+key).subscribe(function (data) {
                  _this7.imgList = _this7.uploadService.downloadImage(data.payload.doc.data()['img']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (imgURL) {
                    dataObj = data.payload.doc.data();
                    dataObj['imgURL'] = imgURL;
                    result.push(dataObj);
                    _this7.spinner = false;
                  }, function (error) {
                    console.warn(error);
                    dataObj = data.payload.doc.data();
                    dataObj['imageError'] = 'error';
                    result.push(dataObj);
                    _this7.spinner = false;
                  });
                  _this7.spinner = false;
                  _this7.result = result;
                }, function (e) {
                  _this7.spinner = false;
                  console.warn("tableList error");
                });
              }
            }
          }
        }
      }, {
        key: "userList",
        value: function userList() {
          var _this8 = this;

          var result = [];
          var dataObj = {};
          this.spinner = true;
          this.allListSub = this.cartService.tableList(this.user.email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (data) {
            if (data.empty) {
              _this8.allListSub.unsubscribe();

              _this8.spinner = false;
              return _this8.result = result;
            }

            data.forEach(function (doc) {
              _this8.cartList = _this8.cartService.searchById(doc.data()['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (data) {
                _this8.imgList = _this8.uploadService.downloadImage(data.payload.doc.data()['img']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (imgURL) {
                  dataObj = data.payload.doc.data();
                  dataObj['imgURL'] = imgURL;
                  result.push(dataObj);
                  _this8.spinner = false;
                }, function (error) {
                  console.warn(error);
                  dataObj = data.payload.doc.data();
                  dataObj['imageError'] = 'error';
                  result.push(dataObj);
                  _this8.spinner = false;
                });
              });
            });
            _this8.result = result;
          }, function (e) {
            return console.warn("tableList error");
          });
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _user_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]
      }];
    };

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/cart/cart.component.css")).default]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/favorite/favorite.component.css":
  /*!*************************************************!*\
    !*** ./src/app/favorite/favorite.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoriteFavoriteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n    min-width: 270px;\n    max-width: 350px;\n    margin: 0 auto 20px;\n    height: 100%;\n  }\n  \n.card.hide {\n    max-width: 100%;\n    min-width: 270px;\n    /* width: calc(100% - 330px); */\n    visibility: hidden;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7QUFFRjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlL2Zhdm9yaXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgbWluLXdpZHRoOiAyNzBweDtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuLmNhcmQuaGlkZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG4gICAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDMzMHB4KTsgKi9cbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/favorite/favorite.component.ts":
  /*!************************************************!*\
    !*** ./src/app/favorite/favorite.component.ts ***!
    \************************************************/

  /*! exports provided: FavoriteComponent */

  /***/
  function srcAppFavoriteFavoriteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function () {
      return FavoriteComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _user_services_favorites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user-services/favorites.service */
    "./src/app/user-services/favorites.service.ts");
    /* harmony import */


    var _modal_buy_modal_buy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../modal-buy/modal-buy.component */
    "./src/app/modal-buy/modal-buy.component.ts");
    /* harmony import */


    var _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../upload-service/upload.service */
    "./src/app/upload-service/upload.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FavoriteComponent =
    /*#__PURE__*/
    function () {
      function FavoriteComponent(favoritService, uploadService, dialog, data) {
        _classCallCheck(this, FavoriteComponent);

        this.favoritService = favoritService;
        this.uploadService = uploadService;
        this.dialog = dialog;
        this.data = data;
        this.user = {
          email: null
        };
        this.result = [];
        this.spinner = false;
      }

      _createClass(FavoriteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.dataServer = this.data.changeEmitted$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (dataServer) {
            if (dataServer['email'] != _this9.user['email']) {
              _this9.user['email'] = dataServer['email'];

              _this9.userList();
            } else if (_this9.user['email'] !== undefined) {
              _this9.user['email'] = undefined;

              _this9.noUserList();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          try {
            this.dataServer.unsubscribe();
            this.imgList.unsubscribe();
            this.favoritList.unsubscribe();
            this.allListSub.unsubscribe();
          } catch (error) {}
        }
      }, {
        key: "delete",
        value: function _delete(data, i) {
          this.result.splice(i, 1);
          this.favoritService.deleteItem(this.user.email, "".concat(data.id), data.name);
        }
      }, {
        key: "buy",
        value: function buy(data) {
          this.dialog.open(_modal_buy_modal_buy_component__WEBPACK_IMPORTED_MODULE_5__["ModalBuyComponent"], {
            data: {
              name: data.name,
              message: 'to buy',
              button_message: 'Buy'
            }
          });
        }
      }, {
        key: "noUserList",
        value: function noUserList() {
          var _this10 = this;

          var result = [];
          var dataObj = {};
          var fa = JSON.parse(localStorage.getItem('favorites')) || {};

          for (var key in fa) {
            if (fa.hasOwnProperty(key)) {
              var element = fa[key];

              if (element) {
                this.spinner = true;
                this.favoritList = this.favoritService.searchById(+key).subscribe(function (data) {
                  _this10.imgList = _this10.uploadService.downloadImage(data.payload.doc.data()['img']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (imgURL) {
                    dataObj = data.payload.doc.data();
                    dataObj['imgURL'] = imgURL;
                    result.push(dataObj);
                    _this10.spinner = false;
                  }, function (error) {
                    console.warn(error);
                    dataObj = data.payload.doc.data();
                    dataObj['imageError'] = 'error';
                    result.push(dataObj);
                    _this10.spinner = false;
                  });
                  _this10.spinner = false;
                  _this10.result = result;
                }, function (e) {
                  _this10.spinner = false;
                  console.warn("tableList error");
                });
              }
            }
          }
        }
      }, {
        key: "userList",
        value: function userList() {
          var _this11 = this;

          var result = [];
          var dataObj = {};
          this.spinner = true;
          this.allListSub = this.favoritService.tableList(this.user.email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (data) {
            if (data.empty) {
              _this11.allListSub.unsubscribe();

              _this11.spinner = false;
              return _this11.result = result;
            }

            data.forEach(function (doc) {
              _this11.favoritList = _this11.favoritService.searchById(doc.data()['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (data) {
                _this11.imgList = _this11.uploadService.downloadImage(data.payload.doc.data()['img']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (imgURL) {
                  dataObj = data.payload.doc.data();
                  dataObj['imgURL'] = imgURL;
                  result.push(dataObj);
                  _this11.spinner = false;
                }, function (error) {
                  console.warn(error);
                  dataObj = data.payload.doc.data();
                  dataObj['imageError'] = 'error';
                  result.push(dataObj);
                  _this11.spinner = false;
                });
              });
            });
            _this11.result = result;
          }, function (e) {
            _this11.spinner = false;
            console.warn("tableList error");
          });
        }
      }]);

      return FavoriteComponent;
    }();

    FavoriteComponent.ctorParameters = function () {
      return [{
        type: _user_services_favorites_service__WEBPACK_IMPORTED_MODULE_4__["FavoritesService"]
      }, {
        type: _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorite',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorite.component.css */
      "./src/app/favorite/favorite.component.css")).default]
    })], FavoriteComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container button {\n  width: 100%;\n  min-width: 150px;\n}\n.container div {\n  width: 20%;\n  margin: auto;\n  margin-bottom: 15px;\n}\n.line-container {\n  max-width: 1250px;\n  margin: 0 auto;\n  text-align: center;\n}\n.example-sidenav {\n  width: 100%;\n  position: relative;\n}\n.example-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n.menu__icon {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n\n  .example-sidenav {\n    width: 250px;\n    top: 64px;\n    position: absolute;\n  }\n\n  .container div {\n    width: 100%;\n  }\n\n  .menu__icon {\n    display: block;\n  }\n\n}\n@media screen and (max-width: 599px) {\n  .example-sidenav {\n    top: 56px;\n  }\n\n}\n@media screen and (max-width: 359px) {\n  .favorite__icon {\n    display: none;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBOztFQUVFO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVGO0FBQ0E7RUFDRTtJQUNFLFNBQVM7RUFDWDs7QUFFRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuLmNvbnRhaW5lciBkaXYge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5saW5lLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTI1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLm1lbnVfX2ljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gIC5leGFtcGxlLXNpZGVuYXYge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICB0b3A6IDY0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmNvbnRhaW5lciBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1lbnVfX2ljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5leGFtcGxlLXNpZGVuYXYge1xuICAgIHRvcDogNTZweDtcbiAgfVxuXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuZmF2b3JpdGVfX2ljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(data, media, changeDetectorRef) {
        var _this12 = this;

        _classCallCheck(this, HeaderComponent);

        this.isOpen = true;
        this.mode = 'side';
        this.width = false;
        data.changeEmitted$.subscribe(function (dataServer) {
          _this12.cartSize = dataServer.cartSize;
          _this12.favoritSize = dataServer.favoritSize;
        });
        this.mobileQuery = media.matchMedia('(max-width: 768px)');

        this._mobileQueryListener = function () {
          _this12.isOpen = !_this12.isOpen;
          _this12.mode === 'over' ? _this12.mode = 'side' : _this12.mode = 'over';
          _this12.width === true ? _this12.width = false : _this12.width = true;
          changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (document.documentElement.clientWidth <= 768) {
            this.isOpen = false;
            this.mode = 'over';
            this.width = true;
          }
        }
      }, {
        key: "close",
        value: function close() {
          if (this.width) {
            this.drawer.close();
            document.documentElement.style.overflow = "auto";
          }
        }
      }, {
        key: "open",
        value: function open() {
          this.drawer.open();
          document.documentElement.style.overflow = "hidden";
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "routAdminUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer', {
      static: false
    })], HeaderComponent.prototype, "drawer", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/imgSmall.ts":
  /*!*****************************!*\
    !*** ./src/app/imgSmall.ts ***!
    \*****************************/

  /*! exports provided: smallImg */

  /***/
  function srcAppImgSmallTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "smallImg", function () {
      return smallImg;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var smallImg = function smallImg(file, acceptFileSize, maxWidth, maxHeight, quality, callback) {
      if (!HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
          value: function value(callback, type, quality) {
            var binStr = atob(this.toDataURL(type, quality).split(',')[1]),
                len = binStr.length,
                arr = new Uint8Array(len);

            for (var i = 0; i < len; i++) {
              arr[i] = binStr.charCodeAt(i);
            }

            callback(new Blob([arr], {
              type: type || 'image/png'
            }));
          }
        });
      }

      window.URL = window.URL; // Modified from https://stackoverflow.com/a/32490603, cc by-sa 3.0
      // -2 = not jpeg, -1 = no data, 1..8 = orientations

      function getExifOrientation(file, callback) {
        // Suggestion from http://code.flickr.net/2012/06/01/parsing-exif-client-side-using-javascript-2/:
        if (file.slice) {
          file = file.slice(0, 131072);
        } else if (file.webkitSlice) {
          file = file.webkitSlice(0, 131072);
        }

        var reader, target;
        reader = new FileReader();

        reader.onload = function (e) {
          var view = new DataView(e.target.result);

          if (view.getUint16(0, false) != 0xFFD8) {
            callback(-2);
            return;
          }

          var length = view.byteLength,
              offset = 2;

          while (offset < length) {
            var marker = view.getUint16(offset, false);
            offset += 2;

            if (marker == 0xFFE1) {
              if (view.getUint32(offset += 2, false) != 0x45786966) {
                callback(-1);
                return;
              }

              var little = view.getUint16(offset += 6, false) == 0x4949;
              offset += view.getUint32(offset + 4, little);
              var tags = view.getUint16(offset, little);
              offset += 2;

              for (var i = 0; i < tags; i++) {
                if (view.getUint16(offset + i * 12, little) == 0x0112) {
                  callback(view.getUint16(offset + i * 12 + 8, little));
                  return;
                }
              }
            } else if ((marker & 0xFF00) != 0xFF00) break;else offset += view.getUint16(offset, false);
          }

          callback(-1);
        };

        reader.readAsArrayBuffer(file);
      } // Derived from https://stackoverflow.com/a/40867559, cc by-sa


      function imgToCanvasWithOrientation(img, rawWidth, rawHeight, orientation) {
        var canvas = document.createElement('canvas');

        if (orientation > 4) {
          canvas.width = rawHeight;
          canvas.height = rawWidth;
        } else {
          canvas.width = rawWidth;
          canvas.height = rawHeight;
        }

        if (orientation > 1) {
          console.log("EXIF orientation = " + orientation + ", rotating picture");
        }

        var ctx = canvas.getContext('2d');

        switch (orientation) {
          case 2:
            ctx.transform(-1, 0, 0, 1, rawWidth, 0);
            break;

          case 3:
            ctx.transform(-1, 0, 0, -1, rawWidth, rawHeight);
            break;

          case 4:
            ctx.transform(1, 0, 0, -1, 0, rawHeight);
            break;

          case 5:
            ctx.transform(0, 1, 1, 0, 0, 0);
            break;

          case 6:
            ctx.transform(0, 1, -1, 0, rawHeight, 0);
            break;

          case 7:
            ctx.transform(0, -1, -1, 0, rawHeight, rawWidth);
            break;

          case 8:
            ctx.transform(0, -1, 1, 0, 0, rawWidth);
            break;
        }

        ctx.drawImage(img, 0, 0, rawWidth, rawHeight);
        return canvas;
      }

      (function (file, acceptFileSize, maxWidth, maxHeight, quality, callback) {
        if (file.size <= acceptFileSize) {
          callback(file);
          return;
        }

        var img = new Image();

        img.onerror = function () {
          URL.revokeObjectURL(this.src);
          callback(file);
        };

        img.onload = function () {
          URL.revokeObjectURL(img.src);
          getExifOrientation(file, function (orientation) {
            var w = img.width,
                h = img.height;
            var scale = orientation > 4 ? Math.min(maxHeight / w, maxWidth / h, 1) : Math.min(maxWidth / w, maxHeight / h, 1);
            h = Math.round(h * scale);
            w = Math.round(w * scale);
            var canvas = imgToCanvasWithOrientation(img, w, h, orientation);
            canvas.toBlob(function (blob) {
              console.log("Resized image to " + w + "x" + h + ", " + (blob.size >> 10) + "kB");
              callback(blob);
            }, 'image/jpeg', quality);
          });
        };

        img.src = URL.createObjectURL(file);
      })(file, acceptFileSize, maxWidth, maxHeight, quality, callback);
    };
    /***/

  },

  /***/
  "./src/app/modal-buy/modal-buy.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modal-buy/modal-buy.component.ts ***!
    \**************************************************/

  /*! exports provided: ModalBuyComponent */

  /***/
  function srcAppModalBuyModalBuyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalBuyComponent", function () {
      return ModalBuyComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../upload-service/upload.service */
    "./src/app/upload-service/upload.service.ts");

    var ModalBuyComponent =
    /*#__PURE__*/
    function () {
      function ModalBuyComponent(data, dialogRef, uploadService, dataService, dialog) {
        _classCallCheck(this, ModalBuyComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        this.uploadService = uploadService;
        this.dataService = dataService;
        this.dialog = dialog;
      }

      _createClass(ModalBuyComponent, [{
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "deleteAdmin",
        value: function deleteAdmin() {
          this.uploadService.deleteItem(this.data.eventObj.name);
          this.uploadService.deleteIMG(this.data.eventObj.img);
          this.dataService.emitProduct(true);
          this.dialog.closeAll();
        }
      }]);

      return ModalBuyComponent;
    }();

    ModalBuyComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    ModalBuyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n  <h1 mat-dialog-title>\n  \n  Do you want {{data.message}}\n  <br>\n  {{data.name}} ?</h1>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"closeDialog()\">No</button>\n  <ng-container *ngIf=\"data.adminDelete\">\n  <button mat-button (click)=\"deleteAdmin()\">{{data.button_message}}</button>\n  </ng-container>\n  <ng-container *ngIf=\"!data.adminDelete\">\n  <button mat-button (click)=\"closeDialog()\">{{data.button_message}}</button>\n  </ng-container>\n  \n</div>\n"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ModalBuyComponent);
    /***/
  },

  /***/
  "./src/app/modal-dialog/modal-dialog.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/modal-dialog/modal-dialog.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalDialogModalDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "label {\n    margin: 0;\n    padding: 0;\n    font-size: 1.3em;\n    font-weight: 500;\n    cursor: pointer;\n    display: block;\n  }\n.full-width {\n    width: 100%;\n}\n.form__container {\n    overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0Y7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4uZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybV9fY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modal-dialog/modal-dialog.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modal-dialog/modal-dialog.component.ts ***!
    \********************************************************/

  /*! exports provided: ModalDialogComponent */

  /***/
  function srcAppModalDialogModalDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function () {
      return ModalDialogComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../upload-service/upload.service */
    "./src/app/upload-service/upload.service.ts");
    /* harmony import */


    var _imgSmall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../imgSmall */
    "./src/app/imgSmall.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var ModalDialogComponent =
    /*#__PURE__*/
    function () {
      function ModalDialogComponent(fb, data, dialogRef, uploadService, dataService) {
        _classCallCheck(this, ModalDialogComponent);

        this.fb = fb;
        this.data = data;
        this.dialogRef = dialogRef;
        this.uploadService = uploadService;
        this.dataService = dataService;
        this.addProductForm = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          img: ['']
        });
        this.saveIMGid = null;

        if (data.editButton) {
          this.editButton = data.editButton;
          this.names = data.uniqueNames;
          this.addProductForm.patchValue({
            id: data.eventObj.id
          });
          this.addProductForm.patchValue({
            name: data.eventObj.name
          });
          this.addProductForm.patchValue({
            description: data.eventObj.description
          });
          this.addProductForm.patchValue({
            price: data.eventObj.price
          });
          this.addProductForm.patchValue({
            img: data.eventObj.img
          });
        } else {
          this.editButton = data.editButton;
          this.names = data.uniqueNames;
          this.addProductForm.reset();
          this.addProductForm.patchValue({
            id: data.id
          });
        }
      }

      _createClass(ModalDialogComponent, [{
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          //нельзя добавить новый продукт с существующим именем
          if (this.data.uniqueNames[this.name.value]) {
            return alert('Name already exists');
          }

          var data = {
            name: this.name.value,
            id: +this.data.id + 1,
            description: this.description.value,
            price: +this.price.value,
            img: this.img.value
          };
          this.uploadService.addItem(this.name.value, data);
          this.upload(this.file.nativeElement.files[0]);
          this.dataService.emitProduct(true);
          this.closeDialog();
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          var data = {
            name: this.name.value,
            id: this.data.eventObj['id'],
            description: this.description.value,
            price: +this.price.value,
            img: this.img.value
          }; //если новое имя и новая картинка или имя картинка и описание

          if (this.addProductForm.value.img != this.data.eventObj['img'] && this.addProductForm.value.name != this.data.eventObj['name']) {
            if (this.addProductForm.value.name != this.data.eventObj['name']) {
              // если новое имя существует
              if (this.data.uniqueNames[this.addProductForm.value.name]) {
                return alert('Name already exist');
              }

              this.closeDialog();
              return this.editImageEndName(data);
            }
          } //если новое имя


          if (this.addProductForm.value.name != this.data.eventObj['name']) {
            if (this.data.uniqueNames[this.addProductForm.value.name]) {
              return alert('Name already exist');
            }

            this.closeDialog();
            return this.editname(data);
          } //если новая картинка


          if (this.addProductForm.value.img != this.data.eventObj['img']) {
            this.closeDialog();
            return this.editImage(data);
          }

          this.closeDialog();
          return this.editDescription(data);
        }
      }, {
        key: "editDescription",
        value: function editDescription(data) {
          this.uploadService.addItem(this.name.value, data);
          this.data.eventObj['name'] = data['name'];
          this.data.eventObj['description'] = data['description'];
          this.data.eventObj['price'] = data['price'];
        }
      }, {
        key: "editImageEndName",
        value: function editImageEndName(data) {
          this.uploadService.deleteIMG(this.data.eventObj['img']);
          this.uploadService.deleteItem(this.data.eventObj['name']);
          this.uploadService.addItem(this.name.value, data);
          this.uniqueNames(this.data.eventObj['name'], false);
          this.data.eventObj['name'] = data['name'];
          this.data.eventObj['description'] = data['description'];
          this.data.eventObj['price'] = data['price'];
          this.upload(this.file.nativeElement.files[0]);
          return this.returnIMG(this.data.eventObj);
        }
      }, {
        key: "editImage",
        value: function editImage(data) {
          this.uploadService.deleteIMG(this.data.eventObj['img']);
          this.uploadService.addItem(this.name.value, data);
          this.data.eventObj['name'] = data['name'];
          this.data.eventObj['description'] = data['description'];
          this.data.eventObj['price'] = data['price'];
          this.upload(this.file.nativeElement.files[0]);
          return this.returnIMG(this.data.eventObj);
        }
      }, {
        key: "editname",
        value: function editname(data) {
          this.uploadService.deleteItem(this.data.eventObj['name']);
          this.uploadService.addItem(this.name.value, data);
          this.uniqueNames(this.data.eventObj['name'], false);
          this.data.eventObj['name'] = data['name'];
          this.data.eventObj['description'] = data['description'];
          this.data.eventObj['price'] = data['price'];
        }
      }, {
        key: "upload",
        value: function upload(file) {
          var _this13 = this;

          Object(_imgSmall__WEBPACK_IMPORTED_MODULE_5__["smallImg"])(file, 80, 500, Infinity, 0.9, function (blob) {
            _this13.uploadService.uploadImage(_this13.img.value, blob); //валидация картинки


            _this13.data.eventObj['img'] = _this13.img.value || null;

            _this13.addProductForm.reset();
          });
        }
      }, {
        key: "returnIMG",
        value: function returnIMG(dataObj) {
          var _this14 = this;

          this.data.eventObj['spinner'] = true;
          return setTimeout(function () {
            _this14.uploadService.downloadImage(_this14.saveIMGid).subscribe(function (imgURL) {
              dataObj['imgURL'] = imgURL;
              dataObj['spinner'] = false;
              dataObj['imageError'] = null;
            }, function (error) {
              dataObj['imageError'] = 'error';
              console.warn(error);
            });
          }, 2000);
        }
      }, {
        key: "uniqueNames",
        value: function uniqueNames(name, value) {
          this.names[name] = value;
        }
      }, {
        key: "imgName",
        value: function imgName() {
          var id = Math.random().toString(36).substring(2);
          this.addProductForm.patchValue({
            img: id
          });
          this.saveIMGid = id;
        }
      }, {
        key: "name",
        get: function get() {
          return this.addProductForm.get('name');
        }
      }, {
        key: "description",
        get: function get() {
          return this.addProductForm.get('description');
        }
      }, {
        key: "price",
        get: function get() {
          return this.addProductForm.get('price');
        }
      }, {
        key: "img",
        get: function get() {
          return this.addProductForm.get('img');
        }
      }]);

      return ModalDialogComponent;
    }();

    ModalDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file', {
      static: false
    })], ModalDialogComponent.prototype, "file", void 0);
    ModalDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-dialog/modal-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-dialog.component.css */
      "./src/app/modal-dialog/modal-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ModalDialogComponent);
    /***/
  },

  /***/
  "./src/app/products/products.component.css":
  /*!*************************************************!*\
    !*** ./src/app/products/products.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.search {\n  width: 180px;\n  padding-right: 15px;\n}\n\n.mat-form-field {\n display: block;\n}\n\n.search button:not(.clear) {\n  width: 90%;\n  margin-bottom: 20px;\n}\n\n.driver__container {\n  min-height: 350px;\n}\n\n.card {\n  min-width: 270px;\n  max-width: 350px;\n  margin: 0 auto 20px;\n  height: 100%;\n}\n\n.card.hide {\n  max-width: 100%;\n  min-width: 270px;\n  /* width: calc(100% - 330px); */\n  visibility: hidden;\n}\n\n.button__mobile {\n  display: none;\n}\n\n@media screen and (max-width: 768px) {\n  .button__mobile {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNlYXJjaCB7XG4gIHdpZHRoOiAxODBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaCBidXR0b246bm90KC5jbGVhcikge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZHJpdmVyX19jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAzNTBweDtcbn1cbi5jYXJkIHtcbiAgbWluLXdpZHRoOiAyNzBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZC5oaWRlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI3MHB4O1xuICAvKiB3aWR0aDogY2FsYygxMDAlIC0gMzMwcHgpOyAqL1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5idXR0b25fX21vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnV0dG9uX19tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
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


    var _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../upload-service/upload.service */
    "./src/app/upload-service/upload.service.ts");
    /* harmony import */


    var _user_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-services/cart.service */
    "./src/app/user-services/cart.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _user_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user-services/favorites.service */
    "./src/app/user-services/favorites.service.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(uploadService, cartService, favoritesService, data, favoritService, changeDetectorRef, media) {
        var _this15 = this;

        _classCallCheck(this, ProductsComponent);

        this.uploadService = uploadService;
        this.cartService = cartService;
        this.favoritesService = favoritesService;
        this.data = data;
        this.favoritService = favoritService;
        this.isOpen = true;
        this.mode = 'side';
        this.result = [];
        this.searchArr = [];
        this.spinner = false;
        this.user = {
          email: null
        };
        this.mobileQuery = media.matchMedia('(max-width: 768px)');

        this._mobileQueryListener = function () {
          _this15.isOpen = !_this15.isOpen;
          _this15.mode === 'over' ? _this15.mode = 'side' : _this15.mode = 'over';
          changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          if (document.documentElement.clientWidth <= 768) {
            this.isOpen = false;
            this.mode = 'over';
          }

          this.dataServer = this.data.changeEmitted$.subscribe(function (dataServer) {
            if (dataServer['email'] != _this16.user['email']) {
              _this16.user['email'] = dataServer['email'];
            }

            _this16.id = dataServer['favoritsId'];
          });
          this.allList();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
          this.dataServer.unsubscribe();
        }
      }, {
        key: "addFavorites",
        value: function addFavorites(data) {
          var favorites = {
            id: data.id,
            name: data.name
          };
          this.favoritesService.addItem(this.user.email, "".concat(data.id), favorites);
        }
      }, {
        key: "deleteFavorites",
        value: function deleteFavorites(data) {
          this.favoritService.deleteItem(this.user.email, "".concat(data.id), data.name);
        }
      }, {
        key: "addCart",
        value: function addCart(data) {
          var cart = {
            id: data.id,
            name: data.name
          };
          this.cartService.addItem(this.user.email, "".concat(data.id), cart);
        }
      }, {
        key: "byMinPrice",
        value: function byMinPrice() {
          this.searchArr.sort(function (a, b) {
            return b.price - a.price;
          });
        }
      }, {
        key: "byMaxPrice",
        value: function byMaxPrice() {
          this.searchArr.sort(function (a, b) {
            return a.price - b.price;
          });
        }
      }, {
        key: "searchByPrice",
        value: function searchByPrice(min, max) {
          var searchArr = [];

          if (max) {
            for (var i = 0; i < this.result.length; i++) {
              if (this.result[i].price >= min && this.result[i].price <= max) {
                searchArr.push(this.result[i]);
              }
            }

            this.searchArr = searchArr;
          } else {
            this.searchArr = this.result;
          }
        }
      }, {
        key: "search",
        value: function search(value) {
          var searchArr = [];

          if (value) {
            for (var i = 0; i < this.result.length; i++) {
              if (~this.result[i].name.trim().toLowerCase().indexOf(value.trim().toLowerCase())) {
                searchArr.push(this.result[i]);
              }
            }

            this.searchArr = searchArr;
          } else {
            this.searchArr = this.result;
          }
        }
      }, {
        key: "allList",
        value: function allList() {
          var _this17 = this;

          var result = [];
          var objData = {};
          this.spinner = true;
          this.uploadService.tableList().subscribe(function (data) {
            data.forEach(function (doc) {
              _this17.uploadService.downloadImage(doc.data()['img']).subscribe(function (imgURL) {
                objData = doc.data();
                objData['imgURL'] = imgURL;
                result.push(objData);
                _this17.result = result;
                _this17.searchArr = result;
                _this17.spinner = false;
              }, function (error) {
                console.warn(error);
                objData = doc.data();
                objData['imageError'] = 'error';
                result.push(objData);
                _this17.result = result;
                _this17.searchArr = result;
                _this17.spinner = false;
              });
            });
          }, function (e) {
            return console.warn("tableList error");
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _upload_service_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]
      }, {
        type: _user_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }, {
        type: _user_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _user_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["MediaMatcher"]
      }];
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.css */
      "./src/app/products/products.component.css")).default]
    })], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/services/auth-parol.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-parol.service.ts ***!
    \************************************************/

  /*! exports provided: AuthWhithParolService */

  /***/
  function srcAppServicesAuthParolServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthWhithParolService", function () {
      return AuthWhithParolService;
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


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);

    var AuthWhithParolService =
    /*#__PURE__*/
    function () {
      function AuthWhithParolService(afAuth, router) {
        _classCallCheck(this, AuthWhithParolService);

        this.afAuth = afAuth;
        this.router = router;
      } //регистрация


      _createClass(AuthWhithParolService, [{
        key: "SignUp",
        value: function SignUp(email, password) {
          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(email, password).then(function (res) {
              resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        } //вход

      }, {
        key: "SignIn",
        value: function SignIn(email, password) {
          var _this18 = this;

          return new Promise(function (resolve, reject) {
            _this18.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
              resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.afAuth.auth.signOut().then(function () {
            console.log('signOut');
          }).catch(function (error) {
            console.log(error);
          });
          return this.router.navigate(['/']);
        }
      }]);

      return AuthWhithParolService;
    }();

    AuthWhithParolService.ctorParameters = function () {
      return [{
        type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthWhithParolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthWhithParolService);
    /***/
  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.data = {};
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](null);
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        this.favoritsId = {};
      }

      _createClass(DataService, [{
        key: "emitUser",
        value: function emitUser(change) {
          this.data = change;
          this.emitChangeSource.next(this.data);
        }
      }, {
        key: "updateFavoritSize",
        value: function updateFavoritSize(change) {
          this.data['favoritSize'] = change;
          this.emitChangeSource.next(this.data);
        }
      }, {
        key: "updateCartSize",
        value: function updateCartSize(change) {
          this.data['cartSize'] = change;
          this.emitChangeSource.next(this.data);
        }
      }, {
        key: "emitProduct",
        value: function emitProduct(change) {
          this.data['product'] = change;
        }
      }, {
        key: "favoritId",
        value: function favoritId(id) {
          this.favoritsId[id] = true;
          this.data['favoritsId'] = this.favoritsId;
          this.emitChangeSource.next(this.data);
        }
      }, {
        key: "deleteFavoritId",
        value: function deleteFavoritId(id) {
          this.favoritsId[id] = false;
          this.data['favoritsId'] = this.favoritsId;
          this.emitChangeSource.next(this.data);
        }
      }, {
        key: "clearId",
        value: function clearId() {
          this.favoritsId = {};
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/signin/signin.component.css":
  /*!*********************************************!*\
    !*** ./src/app/signin/signin.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSigninSigninComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/signin/signin.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signin/signin.component.ts ***!
    \********************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _template_shared_host_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../template-shared/host.directive */
    "./src/app/template-shared/host.directive.ts");
    /* harmony import */


    var _template_shared_ad_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../template-shared/ad-item */
    "./src/app/template-shared/ad-item.ts");
    /* harmony import */


    var _template_sign_template_sign_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../template-sign/template-sign.component */
    "./src/app/template-sign/template-sign.component.ts");

    var SigninComponent =
    /*#__PURE__*/
    function () {
      function SigninComponent(fb, componentFactoryResolver) {
        _classCallCheck(this, SigninComponent);

        this.fb = fb;
        this.componentFactoryResolver = componentFactoryResolver;
        this.adItem = new _template_shared_ad_item__WEBPACK_IMPORTED_MODULE_4__["AdItem"](_template_sign_template_sign_component__WEBPACK_IMPORTED_MODULE_5__["TemplateSignComponent"], {
          signForm: this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }),
          buttonValue: 'Sign In',
          signMessage: 'Dont have an account? Sign Up',
          rout: 'sign-up',
          signin: true
        });
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadComponent();
        }
      }, {
        key: "loadComponent",
        value: function loadComponent() {
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.adItem.component);
          var viewContainerRef = this.adHost.viewContainerRef;
          viewContainerRef.clear();
          var componentRef = viewContainerRef.createComponent(componentFactory);
          componentRef.instance.data = this.adItem.data;
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_template_shared_host_directive__WEBPACK_IMPORTED_MODULE_3__["HostDirective"], {
      static: true
    })], SigninComponent.prototype, "adHost", void 0);
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signin.component.css */
      "./src/app/signin/signin.component.css")).default]
    })], SigninComponent);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.css":
  /*!*********************************************!*\
    !*** ./src/app/signup/signup.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _template_shared_host_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../template-shared/host.directive */
    "./src/app/template-shared/host.directive.ts");
    /* harmony import */


    var _template_shared_ad_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../template-shared/ad-item */
    "./src/app/template-shared/ad-item.ts");
    /* harmony import */


    var _template_sign_template_sign_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../template-sign/template-sign.component */
    "./src/app/template-sign/template-sign.component.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(fb, componentFactoryResolver) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
        this.componentFactoryResolver = componentFactoryResolver;
        this.adItem = new _template_shared_ad_item__WEBPACK_IMPORTED_MODULE_4__["AdItem"](_template_sign_template_sign_component__WEBPACK_IMPORTED_MODULE_5__["TemplateSignComponent"], {
          signForm: this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }),
          buttonValue: 'Sign Up',
          signMessage: 'Already have an account? Sign In',
          rout: 'sign-in'
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadComponent();
        }
      }, {
        key: "loadComponent",
        value: function loadComponent() {
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.adItem.component);
          var viewContainerRef = this.adHost.viewContainerRef;
          viewContainerRef.clear();
          var componentRef = viewContainerRef.createComponent(componentFactory);
          componentRef.instance.data = this.adItem.data;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_template_shared_host_directive__WEBPACK_IMPORTED_MODULE_3__["HostDirective"], {
      static: true
    })], SignupComponent.prototype, "adHost", void 0);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/template-shared/ad-item.ts":
  /*!********************************************!*\
    !*** ./src/app/template-shared/ad-item.ts ***!
    \********************************************/

  /*! exports provided: AdItem */

  /***/
  function srcAppTemplateSharedAdItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdItem", function () {
      return AdItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AdItem = function AdItem(component, data) {
      _classCallCheck(this, AdItem);

      this.component = component;
      this.data = data;
    };
    /***/

  },

  /***/
  "./src/app/template-shared/host.directive.ts":
  /*!***************************************************!*\
    !*** ./src/app/template-shared/host.directive.ts ***!
    \***************************************************/

  /*! exports provided: HostDirective */

  /***/
  function srcAppTemplateSharedHostDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HostDirective", function () {
      return HostDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HostDirective = function HostDirective(viewContainerRef) {
      _classCallCheck(this, HostDirective);

      this.viewContainerRef = viewContainerRef;
    };

    HostDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    HostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appHost]'
    })], HostDirective);
    /***/
  },

  /***/
  "./src/app/template-sign/template-sign.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/template-sign/template-sign.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTemplateSignTemplateSignComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full-width {\n    width: 100%;\n}\n.my__container {\n    width: 320px;\n    margin: 50px auto;\n}\nlabel {\n    margin: 0;\n    padding: 0;\n    font-size: 1.3em;\n    font-weight: 500;\n    cursor: pointer;\n}\n.form-email {\n    margin-bottom: 25px;\n}\n.form-password {\n    margin-bottom: 15px;\n}\nbutton {\n    width: 100%;\n    margin-top: 20px;\n}\n.error {\n    color: rgba(228, 61, 61, 0.829);\n    position: absolute;\n}\n.signup {\n    text-align: center;\n    margin-top: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGUtc2lnbi90ZW1wbGF0ZS1zaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlLXNpZ24vdGVtcGxhdGUtc2lnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm15X19jb250YWluZXIge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cbmxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm0tZW1haWwge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uZm9ybS1wYXNzd29yZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5lcnJvciB7XG4gICAgY29sb3I6IHJnYmEoMjI4LCA2MSwgNjEsIDAuODI5KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc2lnbnVwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/template-sign/template-sign.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/template-sign/template-sign.component.ts ***!
    \**********************************************************/

  /*! exports provided: TemplateSignComponent */

  /***/
  function srcAppTemplateSignTemplateSignComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateSignComponent", function () {
      return TemplateSignComponent;
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


    var _services_auth_parol_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth-parol.service */
    "./src/app/services/auth-parol.service.ts");

    var TemplateSignComponent =
    /*#__PURE__*/
    function () {
      function TemplateSignComponent(authService) {
        _classCallCheck(this, TemplateSignComponent);

        this.authService = authService;
      }

      _createClass(TemplateSignComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signForm = this.data.signForm;
          this.buttonValue = this.data.buttonValue;
          this.signMessage = this.data.signMessage;
          this.rout = this.data.rout;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.data.signin) {
            this.authService.SignIn(this.email.value, this.password.value).then(function (res) {}, function (err) {
              return alert(err.message);
            });
          } else {
            this.authService.SignUp(this.email.value, this.password.value).then(function (res) {}, function (err) {
              return alert(err.message);
            });
          }
        }
      }, {
        key: "email",
        get: function get() {
          return this.signForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.signForm.get('password');
        }
      }]);

      return TemplateSignComponent;
    }();

    TemplateSignComponent.ctorParameters = function () {
      return [{
        type: _services_auth_parol_service__WEBPACK_IMPORTED_MODULE_2__["AuthWhithParolService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TemplateSignComponent.prototype, "data", void 0);
    TemplateSignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-template-sign',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./template-sign.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/template-sign/template-sign.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./template-sign.component.css */
      "./src/app/template-sign/template-sign.component.css")).default]
    })], TemplateSignComponent);
    /***/
  },

  /***/
  "./src/app/toastr/toastr.component.ts":
  /*!********************************************!*\
    !*** ./src/app/toastr/toastr.component.ts ***!
    \********************************************/

  /*! exports provided: ToastrComponent */

  /***/
  function srcAppToastrToastrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastrComponent", function () {
      return ToastrComponent;
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


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var ToastrComponent = function ToastrComponent(data) {
      _classCallCheck(this, ToastrComponent);

      this.data = data;
    };

    ToastrComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]]
        }]
      }];
    };

    ToastrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n  <div \n    class=\"text-center\"\n  >\n  {{ data }}\n  </div>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))], ToastrComponent);
    /***/
  },

  /***/
  "./src/app/upload-service/upload.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/upload-service/upload.service.ts ***!
    \**************************************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppUploadServiceUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
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


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/storage */
    "./node_modules/angularfire2/storage/index.js");
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../toastr/toastr.component */
    "./src/app/toastr/toastr.component.ts");

    var UploadService =
    /*#__PURE__*/
    function () {
      function UploadService(afStorage, afs, snackBar) {
        _classCallCheck(this, UploadService);

        this.afStorage = afStorage;
        this.afs = afs;
        this.snackBar = snackBar;
      }

      _createClass(UploadService, [{
        key: "tableList",
        value: function tableList() {
          return this.afs.collection("products").get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500));
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(productName) {
          var _this19 = this;

          this.afs.collection('products').doc(productName).delete().then(function () {
            _this19.snackBar.openFromComponent(_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_6__["ToastrComponent"], {
              data: "".concat(productName, " deleted")
            });
          }).catch(function (e) {
            return alert('ERROR LOAD');
          });
        }
      }, {
        key: "deleteIMG",
        value: function deleteIMG(id) {
          this.afStorage.ref("/images/".concat(id)).delete().subscribe(function (res) {
            console.log('DELETED');
          }, function (error) {
            alert('ERROR delete image');
          });
        }
      }, {
        key: "addItem",
        value: function addItem(productName, objDescripton) {
          var _this20 = this;

          this.afs.collection("products").doc(productName).set(objDescripton).then(function () {
            _this20.snackBar.openFromComponent(_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_6__["ToastrComponent"], {
              data: "".concat(productName, " added")
            });
          }).catch(function (e) {
            alert('ERROR LOAD');
          });
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(id, file) {
          this.afStorage.upload("/images/".concat(id), file);
        }
      }, {
        key: "downloadImage",
        value: function downloadImage(id) {
          return this.afStorage.ref("/images/".concat(id)).getDownloadURL().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(800));
        }
      }]);

      return UploadService;
    }();

    UploadService.ctorParameters = function () {
      return [{
        type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UploadService);
    /***/
  },

  /***/
  "./src/app/user-info/user-info.component.css":
  /*!***************************************************!*\
    !*** ./src/app/user-info/user-info.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserInfoUserInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user-info/user-info.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-info/user-info.component.ts ***!
    \**************************************************/

  /*! exports provided: UserInfoComponent */

  /***/
  function srcAppUserInfoUserInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function () {
      return UserInfoComponent;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    var UserInfoComponent =
    /*#__PURE__*/
    function () {
      function UserInfoComponent(data, appComponent) {
        var _this21 = this;

        _classCallCheck(this, UserInfoComponent);

        this.data = data;
        this.appComponent = appComponent;
        this.user = {
          email: null,
          displayName: null,
          photoURL: null,
          emailVerified: null,
          phoneNumber: null
        };
        this.data.changeEmitted$.subscribe(function (dataServer) {
          _this21.user = dataServer['user'];
        });
      }

      _createClass(UserInfoComponent, [{
        key: "signOut",
        value: function signOut() {
          this.appComponent.signOut();
        }
      }]);

      return UserInfoComponent;
    }();

    UserInfoComponent.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
      }];
    };

    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-info/user-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-info.component.css */
      "./src/app/user-info/user-info.component.css")).default]
    })], UserInfoComponent);
    /***/
  },

  /***/
  "./src/app/user-services/cart.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/user-services/cart.service.ts ***!
    \***********************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppUserServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../toastr/toastr.component */
    "./src/app/toastr/toastr.component.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var CartService =
    /*#__PURE__*/
    function () {
      function CartService(snackBar, afs, data) {
        _classCallCheck(this, CartService);

        this.snackBar = snackBar;
        this.afs = afs;
        this.data = data;
      }

      _createClass(CartService, [{
        key: "searchById",
        value: function searchById(id) {
          return this.afs.collection('products', function (ref) {
            return ref.where('id', '==', id).limit(1);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (clients) {
            return clients;
          }));
        }
      }, {
        key: "tableList",
        value: function tableList(userEmail) {
          return this.afs.collection("usersData").doc(userEmail).collection('cart').get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500));
        }
      }, {
        key: "addItem",
        value: function addItem(userEmail, productName, objDescripton) {
          var _this22 = this;

          if (!userEmail) {
            var cartObj = JSON.parse(localStorage.getItem('cart')) || {};
            cartObj[+productName] = true;
            localStorage.setItem('cart', JSON.stringify(cartObj));
            this.snackBar.openFromComponent(_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"], {
              data: "".concat(objDescripton['name'], " added to cart")
            });
            this.data.updateCartSize(Object.keys(cartObj).length);
            return;
          }

          this.afs.collection("usersData").doc("".concat(userEmail)).collection('cart').doc(productName).set(objDescripton).then(function () {
            if (userEmail) {
              _this22.snackBar.openFromComponent(_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"], {
                data: "".concat(objDescripton['name'], " added to cart")
              });
            }

            _this22.cartSize(userEmail);
          }).catch(function (e) {
            console.warn(e);
            alert('error add to cart');
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(userEmail, productName, name) {
          var _this23 = this;

          if (!userEmail) {
            var cartObj = JSON.parse(localStorage.getItem('cart')) || {};
            cartObj = JSON.parse(localStorage.getItem('cart'));
            delete cartObj[productName];
            localStorage.setItem('cart', JSON.stringify(cartObj));
            this.snackBar.openFromComponent(_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"], {
              data: "".concat(name, " deleted from cart")
            });

            if (Object.keys(cartObj).length == 0) {
              this.data.updateCartSize(null);
              return;
            }

            this.data.updateCartSize(Object.keys(cartObj).length);
            return;
          }

          this.afs.collection("usersData").doc("".concat(userEmail)).collection('cart').doc(productName).delete().then(function () {
            _this23.snackBar.openFromComponent(_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"], {
              data: "".concat(name, " deleted from cart")
            });

            _this23.cartSize(userEmail);
          }).catch(function (e) {
            console.warn(e);
            alert('ERROR DELETE');
          });
        }
      }, {
        key: "cartSize",
        value: function cartSize(userEmail) {
          var _this24 = this;

          if (!userEmail) {
            var cartObj = JSON.parse(localStorage.getItem('cart')) || {};

            if (Object.keys(cartObj).length == 0) {
              this.data.updateCartSize(null);
              return;
            }

            this.data.updateCartSize(Object.keys(cartObj).length);
            return;
          }

          this.tableList(userEmail).subscribe(function (data) {
            var size;
            data.empty ? size = null : size = data.size;

            _this24.data.updateCartSize(size);
          });
        }
      }]);

      return CartService;
    }();

    CartService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CartService);
    /***/
  },

  /***/
  "./src/app/user-services/favorites.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/user-services/favorites.service.ts ***!
    \****************************************************/

  /*! exports provided: FavoritesService */

  /***/
  function srcAppUserServicesFavoritesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesService", function () {
      return FavoritesService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../toastr/toastr.component */
    "./src/app/toastr/toastr.component.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var FavoritesService =
    /*#__PURE__*/
    function () {
      function FavoritesService(snackBar, afs, data) {
        _classCallCheck(this, FavoritesService);

        this.snackBar = snackBar;
        this.afs = afs;
        this.data = data;
      }

      _createClass(FavoritesService, [{
        key: "searchById",
        value: function searchById(id) {
          return this.afs.collection('products', function (ref) {
            return ref.where('id', '==', id).limit(1);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (clients) {
            return clients;
          }));
        }
      }, {
        key: "tableList",
        value: function tableList(userEmail) {
          return this.afs.collection("usersData").doc(userEmail).collection('favorites').get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500));
        }
      }, {
        key: "addItem",
        value: function addItem(userEmail, productName, objDescripton) {
          var _this25 = this;

          if (!userEmail) {
            var favoritObj = JSON.parse(localStorage.getItem('favorites')) || {};
            favoritObj[+productName] = true;
            localStorage.setItem('favorites', JSON.stringify(favoritObj));
            this.snackBar.openFromComponent(_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"], {
              data: "".concat(objDescripton['name'], " added to favorites")
            });
            this.data.updateFavoritSize(Object.keys(favoritObj).length);
            this.data.favoritId(+productName);
            return;
          }

          this.afs.collection("usersData").doc("".concat(userEmail)).collection('favorites').doc(productName).set(objDescripton).then(function () {
            if (userEmail) {
              _this25.snackBar.openFromComponent(_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"], {
                data: "".concat(objDescripton['name'], " added to favorites")
              });
            }

            _this25.favoritSize(userEmail);
          }).catch(function (e) {
            console.warn(e);
            alert('error add to cart');
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(userEmail, productName, name) {
          var _this26 = this;

          if (!userEmail) {
            var favoritObj = JSON.parse(localStorage.getItem('favorites')) || {};
            delete favoritObj[productName];
            localStorage.setItem('favorites', JSON.stringify(favoritObj));
            this.snackBar.openFromComponent(_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"], {
              data: "".concat(name, " deleted from favorites")
            });
            this.data.deleteFavoritId(productName);

            if (Object.keys(favoritObj).length == 0) {
              this.data.updateFavoritSize(null);
              return;
            }

            this.data.updateFavoritSize(Object.keys(favoritObj).length);
            return;
          }

          this.afs.collection("usersData").doc("".concat(userEmail)).collection('favorites').doc(productName).delete().then(function () {
            _this26.snackBar.openFromComponent(_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"], {
              data: "".concat(name, " deleted from favorites")
            });

            _this26.favoritSize(userEmail);

            _this26.data.deleteFavoritId(productName);
          }).catch(function (e) {
            console.warn(e);
            alert('ERROR DELETE');
          });
        }
      }, {
        key: "favoritSize",
        value: function favoritSize(userEmail) {
          var _this27 = this;

          if (!userEmail) {
            var favoritObj = JSON.parse(localStorage.getItem('favorites')) || {};

            for (var key in favoritObj) {
              if (favoritObj.hasOwnProperty(key)) {
                this.data.favoritId(+key);
              }
            }

            if (Object.keys(favoritObj).length == 0) {
              this.data.updateFavoritSize(null);
              return;
            }

            this.data.updateFavoritSize(Object.keys(favoritObj).length);
            return;
          }

          this.tableList(userEmail).subscribe(function (data) {
            var size;
            data.empty ? size = null : size = data.size;

            _this27.data.updateFavoritSize(size);

            data.forEach(function (i) {
              _this27.data.favoritId(i['id']);
            });
          });
        }
      }]);

      return FavoritesService;
    }();

    FavoritesService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    FavoritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FavoritesService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyD989HFTGIlBOOypOW5Iv4-4wC4Pyp1UpI",
        authDomain: "shopping-backend-firebas-8d9fe.firebaseapp.com",
        databaseURL: "https://shopping-backend-firebas-8d9fe.firebaseio.com",
        projectId: "shopping-backend-firebas-8d9fe",
        storageBucket: "shopping-backend-firebas-8d9fe.appspot.com",
        messagingSenderId: "414892379948",
        appId: "1:414892379948:web:ccc14d15b3b890c6726689",
        measurementId: "G-JJFRWK40MM"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\script\angular\shopping-web-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map