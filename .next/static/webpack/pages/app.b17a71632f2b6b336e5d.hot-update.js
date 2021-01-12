webpackHotUpdate_N_E("pages/app",{

/***/ "./components/Dashboard.js":
/*!*********************************!*\
  !*** ./components/Dashboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "./node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _Listitem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Listitem */ "./components/Listitem.js");
/* harmony import */ var _Deposits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Deposits */ "./components/Deposits.js");
/* harmony import */ var _Orders__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Orders */ "./components/Orders.js");




var _jsxFileName = "C:\\Users\\Xpointer\\Desktop\\Next\\Next-Versel\\components\\Dashboard.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


























function Copyright() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    children: ['Copyright © ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_19__["default"], {
      color: "inherit",
      href: "https://material-ui.com/",
      children: "Your Website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), ' ', new Date().getFullYear(), '.']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_c = Copyright;
var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    toolbar: {
      paddingRight: 24 // keep right padding when drawer closed

    },
    toolbarIcon: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    menuButtonHidden: {
      display: 'none'
    },
    title: {
      flexGrow: 1
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7)
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing(9)
    }),
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column'
    },
    fixedHeight: {
      height: 240
    }
  };
});
function Dashboard() {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setOpen(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpen(false);
  };

  var fixedHeightPaper = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.paper, classes.fixedHeight);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      position: "absolute",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.appBar, open && classes.appBarShift),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.toolbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.menuButton, open && classes.menuButtonHidden),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
          component: "h1",
          variant: "h6",
          color: "inherit",
          noWrap: true,
          className: classes.title,
          children: "Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          "aria-label": "delete",
          className: classes.margin,
          size: "small",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_21___default.a, {
            fontSize: "inherit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          color: "inherit",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15__["default"], {
            badgeContent: 4,
            color: "secondary",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_23___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "permanent",
      classes: {
        paper: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.drawerPaper, !open && classes.drawerPaperClose)
      },
      open: open,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: classes.toolbarIcon,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onClick: handleDrawerClose,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_22___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: _Listitem__WEBPACK_IMPORTED_MODULE_24__["mainListItems"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: _Listitem__WEBPACK_IMPORTED_MODULE_24__["secondaryListItems"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: classes.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: classes.appBarSpacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_16__["default"], {
        maxWidth: "lg",
        className: classes.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__["default"], {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__["default"], {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: fixedHeightPaper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Deposits__WEBPACK_IMPORTED_MODULE_25__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__["default"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: classes.paper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Orders__WEBPACK_IMPORTED_MODULE_26__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
          pt: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Copyright, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 5
  }, this);
}

_s(Dashboard, "ZbauVcu/I6GQoZvFWe0/Vd1mXmg=", false, function () {
  return [useStyles];
});

_c2 = Dashboard;

var _c, _c2;

$RefreshReg$(_c, "Copyright");
$RefreshReg$(_c2, "Dashboard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@material-ui/icons/ArrowDownward.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ArrowDownward.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), 'ArrowDownward');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEb3dud2FyZC5qcyJdLCJuYW1lcyI6WyJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwidG9vbGJhciIsInBhZGRpbmdSaWdodCIsInRvb2xiYXJJY29uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1peGlucyIsImFwcEJhciIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwiYXBwQmFyU2hpZnQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJlbnRlcmluZ1NjcmVlbiIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsIm1lbnVCdXR0b25IaWRkZW4iLCJ0aXRsZSIsImZsZXhHcm93IiwiZHJhd2VyUGFwZXIiLCJwb3NpdGlvbiIsIndoaXRlU3BhY2UiLCJkcmF3ZXJQYXBlckNsb3NlIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJhcHBCYXJTcGFjZXIiLCJjb250ZW50IiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJjb250YWluZXIiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInBhcGVyIiwiZmxleERpcmVjdGlvbiIsImZpeGVkSGVpZ2h0IiwiRGFzaGJvYXJkIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsImZpeGVkSGVpZ2h0UGFwZXIiLCJjbHN4Iiwi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QUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFTRSxxRUFBQywrREFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxjQUFFLEVBQUUsRUFBZjtBQUFBLG1DQUNFLHFFQUFDLGdFQUFEO0FBQU8sdUJBQVMsRUFBRVAsT0FBTyxDQUFDSixLQUExQjtBQUFBLHFDQUNFLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFnQkUscUVBQUMsNkRBQUQ7QUFBSyxZQUFFLEVBQUUsQ0FBVDtBQUFBLGlDQUNFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVFRDs7R0FsRnVCRyxTO1VBQ05qRCxTOzs7TUFETWlELFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhYOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcC5iMTdhNzE2MzJmMmI2YjMzNmU1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgQXJyb3dEb3dud2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmQnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IG1haW5MaXN0SXRlbXMsIHNlY29uZGFyeUxpc3RJdGVtcyB9IGZyb20gJy4vTGlzdGl0ZW0nO1xyXG5pbXBvcnQgRGVwb3NpdHMgZnJvbSAnLi9EZXBvc2l0cyc7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9PcmRlcnMnO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgcGFkZGluZ1JpZ2h0OiAyNCwgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gIH0sXHJcbiAgdG9vbGJhckljb246IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGFwcEJhclNoaWZ0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IDM2LFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbkhpZGRlbjoge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBkcmF3ZXJQYXBlckNsb3NlOiB7XHJcbiAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXBwQmFyU3BhY2VyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBmaXhlZEhlaWdodDoge1xyXG4gICAgaGVpZ2h0OiAyNDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBmaXhlZEhlaWdodFBhcGVyID0gY2xzeChjbGFzc2VzLnBhcGVyLCBjbGFzc2VzLmZpeGVkSGVpZ2h0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYXBwQmFyLCBvcGVuICYmIGNsYXNzZXMuYXBwQmFyU2hpZnQpfT5cclxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5tZW51QnV0dG9uLCBvcGVuICYmIGNsYXNzZXMubWVudUJ1dHRvbkhpZGRlbil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBub1dyYXAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImRlbGV0ZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgPEFycm93RG93bndhcmRJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXs0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICBwYXBlcjogY2xzeChjbGFzc2VzLmRyYXdlclBhcGVyLCAhb3BlbiAmJiBjbGFzc2VzLmRyYXdlclBhcGVyQ2xvc2UpLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJJY29ufT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfT5cclxuICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+e21haW5MaXN0SXRlbXN9PC9MaXN0PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+e3NlY29uZGFyeUxpc3RJdGVtc308L0xpc3Q+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyU3BhY2VyfSAvPlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG5cclxuICAgICAgICAgICAgey8qIFJlY2VudCBEZXBvc2l0cyAqL31cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Zml4ZWRIZWlnaHRQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8RGVwb3NpdHMgLz5cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIHsvKiBSZWNlbnQgT3JkZXJzICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8T3JkZXJzIC8+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEJveCBwdD17NH0+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIwIDEybC0xLjQxLTEuNDFMMTMgMTYuMTdWNGgtMnYxMi4xN2wtNS41OC01LjU5TDQgMTJsOCA4IDgtOHpcIlxufSksICdBcnJvd0Rvd253YXJkJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=