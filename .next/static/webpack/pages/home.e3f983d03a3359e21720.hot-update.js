webpackHotUpdate_N_E("pages/home",{

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
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _Listitem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Listitem */ "./components/Listitem.js");
/* harmony import */ var _Deposits__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Deposits */ "./components/Deposits.js");
/* harmony import */ var _Orders__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Orders */ "./components/Orders.js");




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
      lineNumber: 29,
      columnNumber: 7
    }, this), ' ', new Date().getFullYear(), '.']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
      lineNumber: 132,
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
            lineNumber: 142,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
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
          lineNumber: 144,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          color: "inherit",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15__["default"], {
            badgeContent: 4,
            color: "secondary",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_22___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: _Listitem__WEBPACK_IMPORTED_MODULE_23__["mainListItems"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: _Listitem__WEBPACK_IMPORTED_MODULE_23__["secondaryListItems"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: classes.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: classes.appBarSpacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
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
            md: 8,
            lg: 9,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: fixedHeightPaper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Chart, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__["default"], {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: fixedHeightPaper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Deposits__WEBPACK_IMPORTED_MODULE_24__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__["default"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: classes.paper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Orders__WEBPACK_IMPORTED_MODULE_25__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
          pt: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Copyright, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 131,
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

/***/ "./components/Listitem.js":
/*!********************************!*\
  !*** ./components/Listitem.js ***!
  \********************************/
/*! exports provided: mainListItems, secondaryListItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainListItems", function() { return mainListItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryListItems", function() { return secondaryListItems; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "./node_modules/@material-ui/icons/BarChart.js");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Layers */ "./node_modules/@material-ui/icons/Layers.js");
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Assignment */ "./node_modules/@material-ui/icons/Assignment.js");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\Xpointer\\Desktop\\Next\\Next-Versel\\components\\Listitem.js";











var mainListItems = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: "Dashboard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: "Orders"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: "Customers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: "Reports"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: "Integrations"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined);
var secondaryListItems = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    inset: true,
    children: "Saved reports"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: "Current month"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: "Last quarter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: "Year-end sale"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 49,
  columnNumber: 3
}, undefined);

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

/***/ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListItem/ListItem.js ***!
  \*****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../List/ListContext */ "./node_modules/@material-ui/core/esm/List/ListContext.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);












var styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },

    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},

    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },

    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"];
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

var ListItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItem(props, ref) {
  var _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      componentProp = props.component,
      _props$ContainerCompo = props.ContainerComponent,
      ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
      _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

  var ContainerClassName = _props$ContainerProps.className,
      ContainerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_props$ContainerProps, ["className"]),
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$divider = props.divider,
      divider = _props$divider === void 0 ? false : _props$divider,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_10__["default"]);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems
  };
  var listItemRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  useEnhancedEffect(function () {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (true) {
        console.error('Material-UI: Unable to set focus to a ListItem whose component has not been rendered.');
      }
    }
  }, [autoFocus]);
  var children = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(childrenProp);
  var hasSecondaryAction = children.length && Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(children[children.length - 1], ['ListItemSecondaryAction']);
  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    listItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_11__["findDOMNode"](instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__["default"])(handleOwnRef, ref);

  var componentProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled: disabled
  }, other);

  var Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"];
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List_ListContext__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
      value: childContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ContainerComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, componentProps, children), children.pop()));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List_ListContext__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: handleRef
  }, componentProps), children));
});
 true ? ListItem.propTypes = {
  /**
   * Defines the `align-items` style property.
   */
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['flex-start', 'center']),

  /**
   * If `true`, the list item will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the list item will be a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   */
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The content of the component. If a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, function (props) {
    var children = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(props.children); // React.Children.toArray(props.children).findLastIndex(isListItemSecondaryAction)

    var secondaryActionIndex = -1;

    for (var i = children.length - 1; i >= 0; i -= 1) {
      var child = children[i];

      if (Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['ListItemSecondaryAction'])) {
        secondaryActionIndex = i;
        break;
      }
    } //  is ListItemSecondaryAction the last child of ListItem


    if (secondaryActionIndex !== -1 && secondaryActionIndex !== children.length - 1) {
      return new Error('Material-UI: You used an element after ListItemSecondaryAction. ' + 'For ListItem to detect that it has a secondary action ' + 'you must pass it as the last child to ListItem.');
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   */
  ContainerComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Props applied to the container component if used.
   */
  ContainerProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the list item will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Use to apply selected styling.
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiListItem'
})(ListItem));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListItem/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListItem/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ListItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js ***!
  \*************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../List/ListContext */ "./node_modules/@material-ui/core/esm/List/ListContext.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      minWidth: 56,
      color: theme.palette.action.active,
      flexShrink: 0,
      display: 'inline-flex'
    },

    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      marginTop: 8
    }
  };
};
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

var ListItemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItemIcon(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
    ref: ref
  }, other));
});
 true ? ListItemIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@material-ui/icons` SVG icon element.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiListItemIcon'
})(ListItemIcon));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListItemIcon/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ListItemIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js ***!
  \*************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../List/ListContext */ "./node_modules/@material-ui/core/esm/List/ListContext.js");








var styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_6__["default"] && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_6__["default"] && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 true ? ListItemText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Alias for the `primary` prop.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   */
  disableTypography: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The main content element.
   */
  primary: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The secondary content element.
   */
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiListItemText'
})(ListItemText));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListItemText/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListItemText/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ListItemText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js ***!
  \***************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      listStyle: 'none',
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 72
    },

    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: 'inherit'
    }
  };
};
var ListSubheader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListSubheader(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$disableSticky = props.disableSticky,
      disableSticky = _props$disableSticky === void 0 ? false : _props$disableSticky,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "component", "disableGutters", "disableSticky", "inset"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, color !== 'default' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], inset && classes.inset, !disableSticky && classes.sticky, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 true ? ListSubheader.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'primary', 'inherit']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the List Subheader will not have gutters.
   */
  disableGutters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   */
  disableSticky: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the List Subheader will be indented.
   */
  inset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiListSubheader'
})(ListSubheader));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListSubheader/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListSubheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ListSubheader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/icons/Assignment.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/Assignment.js ***!
  \*******************************************************/
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
  d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
}), 'Assignment');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/BarChart.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/BarChart.js ***!
  \*****************************************************/
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
  d: "M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"
}), 'BarChart');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Dashboard.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/Dashboard.js ***!
  \******************************************************/
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
  d: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
}), 'Dashboard');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Layers.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Layers.js ***!
  \***************************************************/
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
  d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
}), 'Layers');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/People.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/People.js ***!
  \***************************************************/
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
  d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
}), 'People');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ShoppingCart.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ShoppingCart.js ***!
  \*********************************************************/
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
  d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
}), 'ShoppingCart');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlzdGl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdEl0ZW0vTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdEl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdEl0ZW1JY29uL0xpc3RJdGVtSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9MaXN0SXRlbUljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdEl0ZW1UZXh0L0xpc3RJdGVtVGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9MaXN0SXRlbVRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdFN1YmhlYWRlci9MaXN0U3ViaGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0xpc3RTdWJoZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9CYXJDaGFydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvTGF5ZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnQuanMiXSwibmFtZXMiOlsiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsInRvb2xiYXIiLCJwYWRkaW5nUmlnaHQiLCJ0b29sYmFySWNvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtaXhpbnMiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsImFwcEJhclNoaWZ0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiZW50ZXJpbmdTY3JlZW4iLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJtZW51QnV0dG9uSGlkZGVuIiwidGl0bGUiLCJmbGV4R3JvdyIsImRyYXdlclBhcGVyIiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwiZHJhd2VyUGFwZXJDbG9zZSIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiYXBwQmFyU3BhY2VyIiwiY29udGVudCIsImhlaWdodCIsIm92ZXJmbG93IiwiY29udGFpbmVyIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJwYXBlciIsImZsZXhEaXJlY3Rpb24iLCJmaXhlZEhlaWdodCIsIkRhc2hib2FyZCIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJmaXhlZEhlaWdodFBhcGVyIiwiY2xzeCIsIm1haW5MaXN0SXRlbXMiLCJzZWNvbmRhcnlMaXN0SXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNuQixzQkFDRSxxRUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixTQUFLLEVBQUMsZUFBbEM7QUFBa0QsU0FBSyxFQUFDLFFBQXhEO0FBQUEsZUFDRyxjQURILGVBRUUscUVBQUMsK0RBQUQ7QUFBTSxXQUFLLEVBQUMsU0FBWjtBQUFzQixVQUFJLEVBQUMsMEJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFJVSxHQUpWLEVBS0csSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBTEgsRUFNRyxHQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0tBWFFGLFM7QUFhVCxJQUFNRyxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUU7QUFETCxLQURpQztBQUl2Q0MsV0FBTyxFQUFFO0FBQ1BDLGtCQUFZLEVBQUUsRUFEUCxDQUNXOztBQURYLEtBSjhCO0FBT3ZDQyxlQUFXO0FBQ1RILGFBQU8sRUFBRSxNQURBO0FBRVRJLGdCQUFVLEVBQUUsUUFGSDtBQUdUQyxvQkFBYyxFQUFFLFVBSFA7QUFJVEMsYUFBTyxFQUFFO0FBSkEsT0FL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QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELDRDQUE0QyxtQkFBTyxDQUFDLHVGQUF1Qjs7QUFFM0U7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS5lM2Y5ODNkMDNhMzM1OWUyMTcyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IG1haW5MaXN0SXRlbXMsIHNlY29uZGFyeUxpc3RJdGVtcyB9IGZyb20gJy4vTGlzdGl0ZW0nO1xyXG5pbXBvcnQgRGVwb3NpdHMgZnJvbSAnLi9EZXBvc2l0cyc7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9PcmRlcnMnO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgcGFkZGluZ1JpZ2h0OiAyNCwgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gIH0sXHJcbiAgdG9vbGJhckljb246IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGFwcEJhclNoaWZ0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IDM2LFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbkhpZGRlbjoge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBkcmF3ZXJQYXBlckNsb3NlOiB7XHJcbiAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXBwQmFyU3BhY2VyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBmaXhlZEhlaWdodDoge1xyXG4gICAgaGVpZ2h0OiAyNDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBmaXhlZEhlaWdodFBhcGVyID0gY2xzeChjbGFzc2VzLnBhcGVyLCBjbGFzc2VzLmZpeGVkSGVpZ2h0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYXBwQmFyLCBvcGVuICYmIGNsYXNzZXMuYXBwQmFyU2hpZnQpfT5cclxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5tZW51QnV0dG9uLCBvcGVuICYmIGNsYXNzZXMubWVudUJ1dHRvbkhpZGRlbil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBub1dyYXAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17NH0gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ljb24gLz5cclxuICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgcGFwZXI6IGNsc3goY2xhc3Nlcy5kcmF3ZXJQYXBlciwgIW9wZW4gJiYgY2xhc3Nlcy5kcmF3ZXJQYXBlckNsb3NlKSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFySWNvbn0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX0+XHJcbiAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PnttYWluTGlzdEl0ZW1zfTwvTGlzdD5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PntzZWNvbmRhcnlMaXN0SXRlbXN9PC9MaXN0PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhclNwYWNlcn0gLz5cclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgey8qIENoYXJ0ICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9IGxnPXs5fT5cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxDaGFydCAvPlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgey8qIFJlY2VudCBEZXBvc2l0cyAqL31cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Zml4ZWRIZWlnaHRQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8RGVwb3NpdHMgLz5cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIHsvKiBSZWNlbnQgT3JkZXJzICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8T3JkZXJzIC8+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEJveCBwdD17NH0+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkJztcclxuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydCc7XHJcbmltcG9ydCBQZW9wbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZW9wbGUnO1xyXG5pbXBvcnQgQmFyQ2hhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CYXJDaGFydCc7XHJcbmltcG9ydCBMYXllcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MYXllcnMnO1xyXG5pbXBvcnQgQXNzaWdubWVudEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lnbm1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5MaXN0SXRlbXMgPSAoXHJcbiAgPGRpdj5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPERhc2hib2FyZEljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiT3JkZXJzXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxQZW9wbGVJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDdXN0b21lcnNcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEJhckNoYXJ0SWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmVwb3J0c1wiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGF5ZXJzSWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSW50ZWdyYXRpb25zXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5TGlzdEl0ZW1zID0gKFxyXG4gIDxkaXY+XHJcbiAgICA8TGlzdFN1YmhlYWRlciBpbnNldD5TYXZlZCByZXBvcnRzPC9MaXN0U3ViaGVhZGVyPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8QXNzaWdubWVudEljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1cnJlbnQgbW9udGhcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEFzc2lnbm1lbnRJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMYXN0IHF1YXJ0ZXJcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEFzc2lnbm1lbnRJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJZZWFyLWVuZCBzYWxlXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgPC9kaXY+XHJcbik7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnLi4vQnV0dG9uQmFzZSc7XG5pbXBvcnQgaXNNdWlFbGVtZW50IGZyb20gJy4uL3V0aWxzL2lzTXVpRWxlbWVudCc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcbmltcG9ydCBMaXN0Q29udGV4dCBmcm9tICcuLi9MaXN0L0xpc3RDb250ZXh0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSAobm9ybWFsbHkgcm9vdCkgYGNvbXBvbmVudGAgZWxlbWVudC4gTWF5IGJlIHdyYXBwZWQgYnkgYSBgY29udGFpbmVyYC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIHBhZGRpbmdUb3A6IDgsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgJyYkZm9jdXNWaXNpYmxlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLnNlbGVjdGVkXG4gICAgICB9LFxuICAgICAgJyYkc2VsZWN0ZWQsICYkc2VsZWN0ZWQ6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uc2VsZWN0ZWRcbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgb3BhY2l0eTogMC41XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY29udGFpbmVyYCBlbGVtZW50IGlmIGBjaGlsZHJlbmAgaW5jbHVkZXMgYExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uYC4gKi9cbiAgICBjb250YWluZXI6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSBgY29tcG9uZW50YCdzIGBmb2N1c1Zpc2libGVDbGFzc05hbWVgIHByb3AgaWYgYGJ1dHRvbj17dHJ1ZX1gLiAqL1xuICAgIGZvY3VzVmlzaWJsZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGNvbXBvbmVudGAgZWxlbWVudCBpZiBkZW5zZS4gKi9cbiAgICBkZW5zZToge1xuICAgICAgcGFkZGluZ1RvcDogNCxcbiAgICAgIHBhZGRpbmdCb3R0b206IDRcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBjb21wb25lbnRgIGVsZW1lbnQgaWYgYGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJgLiAqL1xuICAgIGFsaWduSXRlbXNGbGV4U3RhcnQ6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0J1xuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgaW5uZXIgYGNvbXBvbmVudGAgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW5uZXIgYGNvbXBvbmVudGAgZWxlbWVudCBpZiBgZGl2aWRlcj17dHJ1ZX1gLiAqL1xuICAgIGRpdmlkZXI6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUuZGl2aWRlciksXG4gICAgICBiYWNrZ3JvdW5kQ2xpcDogJ3BhZGRpbmctYm94J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW5uZXIgYGNvbXBvbmVudGAgZWxlbWVudCBpZiBgZGlzYWJsZUd1dHRlcnM9e2ZhbHNlfWAuICovXG4gICAgZ3V0dGVyczoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDE2LFxuICAgICAgcGFkZGluZ1JpZ2h0OiAxNlxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW5uZXIgYGNvbXBvbmVudGAgZWxlbWVudCBpZiBgYnV0dG9uPXt0cnVlfWAuICovXG4gICAgYnV0dG9uOiB7XG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2JhY2tncm91bmQtY29sb3InLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdFxuICAgICAgfSksXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcbiAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcbiAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY29tcG9uZW50YCBlbGVtZW50IGlmIGBjaGlsZHJlbmAgaW5jbHVkZXMgYExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uYC4gKi9cbiAgICBzZWNvbmRhcnlBY3Rpb246IHtcbiAgICAgIC8vIEFkZCBzb21lIHNwYWNlIHRvIGF2b2lkIGNvbGxpc2lvbiBhcyBgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25gXG4gICAgICAvLyBpcyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuXG4gICAgICBwYWRkaW5nUmlnaHQ6IDQ4XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNlbGVjdGVkPXt0cnVlfWAuICovXG4gICAgc2VsZWN0ZWQ6IHt9XG4gIH07XG59O1xudmFyIHVzZUVuaGFuY2VkRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VFZmZlY3QgOiBSZWFjdC51c2VMYXlvdXRFZmZlY3Q7XG4vKipcbiAqIFVzZXMgYW4gYWRkaXRpb25hbCBjb250YWluZXIgY29tcG9uZW50IGlmIGBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbmAgaXMgdGhlIGxhc3QgY2hpbGQuXG4gKi9cblxudmFyIExpc3RJdGVtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlzdEl0ZW0ocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGFsaWduSXRlbXMgPSBwcm9wcy5hbGlnbkl0ZW1zLFxuICAgICAgYWxpZ25JdGVtcyA9IF9wcm9wcyRhbGlnbkl0ZW1zID09PSB2b2lkIDAgPyAnY2VudGVyJyA6IF9wcm9wcyRhbGlnbkl0ZW1zLFxuICAgICAgX3Byb3BzJGF1dG9Gb2N1cyA9IHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgIGF1dG9Gb2N1cyA9IF9wcm9wcyRhdXRvRm9jdXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGF1dG9Gb2N1cyxcbiAgICAgIF9wcm9wcyRidXR0b24gPSBwcm9wcy5idXR0b24sXG4gICAgICBidXR0b24gPSBfcHJvcHMkYnV0dG9uID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRidXR0b24sXG4gICAgICBjaGlsZHJlblByb3AgPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29tcG9uZW50UHJvcCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRDb250YWluZXJDb21wbyA9IHByb3BzLkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICAgIENvbnRhaW5lckNvbXBvbmVudCA9IF9wcm9wcyRDb250YWluZXJDb21wbyA9PT0gdm9pZCAwID8gJ2xpJyA6IF9wcm9wcyRDb250YWluZXJDb21wbyxcbiAgICAgIF9wcm9wcyRDb250YWluZXJQcm9wcyA9IHByb3BzLkNvbnRhaW5lclByb3BzO1xuICBfcHJvcHMkQ29udGFpbmVyUHJvcHMgPSBfcHJvcHMkQ29udGFpbmVyUHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJENvbnRhaW5lclByb3BzO1xuXG4gIHZhciBDb250YWluZXJDbGFzc05hbWUgPSBfcHJvcHMkQ29udGFpbmVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgQ29udGFpbmVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzJENvbnRhaW5lclByb3BzLCBbXCJjbGFzc05hbWVcIl0pLFxuICAgICAgX3Byb3BzJGRlbnNlID0gcHJvcHMuZGVuc2UsXG4gICAgICBkZW5zZSA9IF9wcm9wcyRkZW5zZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGVuc2UsXG4gICAgICBfcHJvcHMkZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3Byb3BzJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlR3V0dGVycyA9IHByb3BzLmRpc2FibGVHdXR0ZXJzLFxuICAgICAgZGlzYWJsZUd1dHRlcnMgPSBfcHJvcHMkZGlzYWJsZUd1dHRlcnMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVHdXR0ZXJzLFxuICAgICAgX3Byb3BzJGRpdmlkZXIgPSBwcm9wcy5kaXZpZGVyLFxuICAgICAgZGl2aWRlciA9IF9wcm9wcyRkaXZpZGVyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXZpZGVyLFxuICAgICAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lID0gcHJvcHMuZm9jdXNWaXNpYmxlQ2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQsXG4gICAgICBzZWxlY3RlZCA9IF9wcm9wcyRzZWxlY3RlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc2VsZWN0ZWQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWxpZ25JdGVtc1wiLCBcImF1dG9Gb2N1c1wiLCBcImJ1dHRvblwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcIkNvbnRhaW5lckNvbXBvbmVudFwiLCBcIkNvbnRhaW5lclByb3BzXCIsIFwiZGVuc2VcIiwgXCJkaXNhYmxlZFwiLCBcImRpc2FibGVHdXR0ZXJzXCIsIFwiZGl2aWRlclwiLCBcImZvY3VzVmlzaWJsZUNsYXNzTmFtZVwiLCBcInNlbGVjdGVkXCJdKTtcblxuICB2YXIgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoTGlzdENvbnRleHQpO1xuICB2YXIgY2hpbGRDb250ZXh0ID0ge1xuICAgIGRlbnNlOiBkZW5zZSB8fCBjb250ZXh0LmRlbnNlIHx8IGZhbHNlLFxuICAgIGFsaWduSXRlbXM6IGFsaWduSXRlbXNcbiAgfTtcbiAgdmFyIGxpc3RJdGVtUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgaWYgKGxpc3RJdGVtUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgbGlzdEl0ZW1SZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBVbmFibGUgdG8gc2V0IGZvY3VzIHRvIGEgTGlzdEl0ZW0gd2hvc2UgY29tcG9uZW50IGhhcyBub3QgYmVlbiByZW5kZXJlZC4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthdXRvRm9jdXNdKTtcbiAgdmFyIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlblByb3ApO1xuICB2YXIgaGFzU2Vjb25kYXJ5QWN0aW9uID0gY2hpbGRyZW4ubGVuZ3RoICYmIGlzTXVpRWxlbWVudChjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXSwgWydMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiddKTtcbiAgdmFyIGhhbmRsZU93blJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIC8vICNTdHJpY3RNb2RlIHJlYWR5XG4gICAgbGlzdEl0ZW1SZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgfSwgW10pO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihoYW5kbGVPd25SZWYsIHJlZik7XG5cbiAgdmFyIGNvbXBvbmVudFByb3BzID0gX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgY2hpbGRDb250ZXh0LmRlbnNlICYmIGNsYXNzZXMuZGVuc2UsICFkaXNhYmxlR3V0dGVycyAmJiBjbGFzc2VzLmd1dHRlcnMsIGRpdmlkZXIgJiYgY2xhc3Nlcy5kaXZpZGVyLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBidXR0b24gJiYgY2xhc3Nlcy5idXR0b24sIGFsaWduSXRlbXMgIT09IFwiY2VudGVyXCIgJiYgY2xhc3Nlcy5hbGlnbkl0ZW1zRmxleFN0YXJ0LCBoYXNTZWNvbmRhcnlBY3Rpb24gJiYgY2xhc3Nlcy5zZWNvbmRhcnlBY3Rpb24sIHNlbGVjdGVkICYmIGNsYXNzZXMuc2VsZWN0ZWQpLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICB9LCBvdGhlcik7XG5cbiAgdmFyIENvbXBvbmVudCA9IGNvbXBvbmVudFByb3AgfHwgJ2xpJztcblxuICBpZiAoYnV0dG9uKSB7XG4gICAgY29tcG9uZW50UHJvcHMuY29tcG9uZW50ID0gY29tcG9uZW50UHJvcCB8fCAnZGl2JztcbiAgICBjb21wb25lbnRQcm9wcy5mb2N1c1Zpc2libGVDbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMuZm9jdXNWaXNpYmxlLCBmb2N1c1Zpc2libGVDbGFzc05hbWUpO1xuICAgIENvbXBvbmVudCA9IEJ1dHRvbkJhc2U7XG4gIH1cblxuICBpZiAoaGFzU2Vjb25kYXJ5QWN0aW9uKSB7XG4gICAgLy8gVXNlIGRpdiBieSBkZWZhdWx0LlxuICAgIENvbXBvbmVudCA9ICFjb21wb25lbnRQcm9wcy5jb21wb25lbnQgJiYgIWNvbXBvbmVudFByb3AgPyAnZGl2JyA6IENvbXBvbmVudDsgLy8gQXZvaWQgbmVzdGluZyBvZiBsaSA+IGxpLlxuXG4gICAgaWYgKENvbnRhaW5lckNvbXBvbmVudCA9PT0gJ2xpJykge1xuICAgICAgaWYgKENvbXBvbmVudCA9PT0gJ2xpJykge1xuICAgICAgICBDb21wb25lbnQgPSAnZGl2JztcbiAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50UHJvcHMuY29tcG9uZW50ID09PSAnbGknKSB7XG4gICAgICAgIGNvbXBvbmVudFByb3BzLmNvbXBvbmVudCA9ICdkaXYnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNoaWxkQ29udGV4dFxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lckNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuY29udGFpbmVyLCBDb250YWluZXJDbGFzc05hbWUpLFxuICAgICAgcmVmOiBoYW5kbGVSZWZcbiAgICB9LCBDb250YWluZXJQcm9wcyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIGNoaWxkcmVuKSwgY2hpbGRyZW4ucG9wKCkpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0Q29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjaGlsZENvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBoYW5kbGVSZWZcbiAgfSwgY29tcG9uZW50UHJvcHMpLCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBMaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgYWxpZ24taXRlbXNgIHN0eWxlIHByb3BlcnR5LlxuICAgKi9cbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFsnZmxleC1zdGFydCcsICdjZW50ZXInXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxpc3QgaXRlbSB3aWxsIGJlIGZvY3VzZWQgZHVyaW5nIHRoZSBmaXJzdCBtb3VudC5cbiAgICogRm9jdXMgd2lsbCBhbHNvIGJlIHRyaWdnZXJlZCBpZiB0aGUgdmFsdWUgY2hhbmdlcyBmcm9tIGZhbHNlIHRvIHRydWUuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsaXN0IGl0ZW0gd2lsbCBiZSBhIGJ1dHRvbiAodXNpbmcgYEJ1dHRvbkJhc2VgKS4gUHJvcHMgaW50ZW5kZWRcbiAgICogZm9yIGBCdXR0b25CYXNlYCBjYW4gdGhlbiBiZSBhcHBsaWVkIHRvIGBMaXN0SXRlbWAuXG4gICAqL1xuICBidXR0b246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LiBJZiBhIGBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbmAgaXMgdXNlZCBpdCBtdXN0XG4gICAqIGJlIHRoZSBsYXN0IGNoaWxkLlxuICAgKi9cbiAgY2hpbGRyZW46IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5ub2RlLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKTsgLy8gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbikuZmluZExhc3RJbmRleChpc0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uKVxuXG4gICAgdmFyIHNlY29uZGFyeUFjdGlvbkluZGV4ID0gLTE7XG5cbiAgICBmb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoaXNNdWlFbGVtZW50KGNoaWxkLCBbJ0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJ10pKSB7XG4gICAgICAgIHNlY29uZGFyeUFjdGlvbkluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSAvLyAgaXMgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gdGhlIGxhc3QgY2hpbGQgb2YgTGlzdEl0ZW1cblxuXG4gICAgaWYgKHNlY29uZGFyeUFjdGlvbkluZGV4ICE9PSAtMSAmJiBzZWNvbmRhcnlBY3Rpb25JbmRleCAhPT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignTWF0ZXJpYWwtVUk6IFlvdSB1c2VkIGFuIGVsZW1lbnQgYWZ0ZXIgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24uICcgKyAnRm9yIExpc3RJdGVtIHRvIGRldGVjdCB0aGF0IGl0IGhhcyBhIHNlY29uZGFyeSBhY3Rpb24gJyArICd5b3UgbXVzdCBwYXNzIGl0IGFzIHRoZSBsYXN0IGNoaWxkIHRvIExpc3RJdGVtLicpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9KSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKiBCeSBkZWZhdWx0LCBpdCdzIGEgYGxpYCB3aGVuIGBidXR0b25gIGlzIGBmYWxzZWAgYW5kIGEgYGRpdmAgd2hlbiBgYnV0dG9uYCBpcyBgdHJ1ZWAuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogVGhlIGNvbnRhaW5lciBjb21wb25lbnQgdXNlZCB3aGVuIGEgYExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uYCBpcyB0aGUgbGFzdCBjaGlsZC5cbiAgICovXG4gIENvbnRhaW5lckNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgY29tcG9uZW50IGlmIHVzZWQuXG4gICAqL1xuICBDb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBjb21wYWN0IHZlcnRpY2FsIHBhZGRpbmcgZGVzaWduZWQgZm9yIGtleWJvYXJkIGFuZCBtb3VzZSBpbnB1dCB3aWxsIGJlIHVzZWQuXG4gICAqL1xuICBkZW5zZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxpc3QgaXRlbSB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsZWZ0IGFuZCByaWdodCBwYWRkaW5nIGlzIHJlbW92ZWQuXG4gICAqL1xuICBkaXNhYmxlR3V0dGVyczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSAxcHggbGlnaHQgYm9yZGVyIGlzIGFkZGVkIHRvIHRoZSBib3R0b20gb2YgdGhlIGxpc3QgaXRlbS5cbiAgICovXG4gIGRpdmlkZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBmb2N1c1Zpc2libGVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFVzZSB0byBhcHBseSBzZWxlY3RlZCBzdHlsaW5nLlxuICAgKi9cbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUxpc3RJdGVtJ1xufSkoTGlzdEl0ZW0pOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xpc3RJdGVtJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgTGlzdENvbnRleHQgZnJvbSAnLi4vTGlzdC9MaXN0Q29udGV4dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgbWluV2lkdGg6IDU2LFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmFjdGl2ZSxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgd2hlbiB0aGUgcGFyZW50IGBMaXN0SXRlbWAgdXNlcyBgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcImAuICovXG4gICAgYWxpZ25JdGVtc0ZsZXhTdGFydDoge1xuICAgICAgbWFyZ2luVG9wOiA4XG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogQSBzaW1wbGUgd3JhcHBlciB0byBhcHBseSBgTGlzdGAgc3R5bGVzIHRvIGFuIGBJY29uYCBvciBgU3ZnSWNvbmAuXG4gKi9cblxudmFyIExpc3RJdGVtSWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIExpc3RJdGVtSWNvbihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICB2YXIgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoTGlzdENvbnRleHQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgY29udGV4dC5hbGlnbkl0ZW1zID09PSAnZmxleC1zdGFydCcgJiYgY2xhc3Nlcy5hbGlnbkl0ZW1zRmxleFN0YXJ0KSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBMaXN0SXRlbUljb24ucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudCwgbm9ybWFsbHkgYEljb25gLCBgU3ZnSWNvbmAsXG4gICAqIG9yIGEgYEBtYXRlcmlhbC11aS9pY29uc2AgU1ZHIGljb24gZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpTGlzdEl0ZW1JY29uJ1xufSkoTGlzdEl0ZW1JY29uKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MaXN0SXRlbUljb24nOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuaW1wb3J0IExpc3RDb250ZXh0IGZyb20gJy4uL0xpc3QvTGlzdENvbnRleHQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgIG1pbldpZHRoOiAwLFxuICAgIG1hcmdpblRvcDogNCxcbiAgICBtYXJnaW5Cb3R0b206IDRcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFR5cG9ncmFwaHlgIGNvbXBvbmVudHMgaWYgcHJpbWFyeSBhbmQgc2Vjb25kYXJ5IGFyZSBzZXQuICovXG4gIG11bHRpbGluZToge1xuICAgIG1hcmdpblRvcDogNixcbiAgICBtYXJnaW5Cb3R0b206IDZcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFR5cG9ncmFwaHlgIGNvbXBvbmVudHMgaWYgZGVuc2UuICovXG4gIGRlbnNlOiB7fSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBpbnNldD17dHJ1ZX1gLiAqL1xuICBpbnNldDoge1xuICAgIHBhZGRpbmdMZWZ0OiA1NlxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBwcmltYXJ5IGBUeXBvZ3JhcGh5YCBjb21wb25lbnQuICovXG4gIHByaW1hcnk6IHt9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzZWNvbmRhcnkgYFR5cG9ncmFwaHlgIGNvbXBvbmVudC4gKi9cbiAgc2Vjb25kYXJ5OiB7fVxufTtcbnZhciBMaXN0SXRlbVRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBMaXN0SXRlbVRleHQocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVUeXBvZ3JhID0gcHJvcHMuZGlzYWJsZVR5cG9ncmFwaHksXG4gICAgICBkaXNhYmxlVHlwb2dyYXBoeSA9IF9wcm9wcyRkaXNhYmxlVHlwb2dyYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVR5cG9ncmEsXG4gICAgICBfcHJvcHMkaW5zZXQgPSBwcm9wcy5pbnNldCxcbiAgICAgIGluc2V0ID0gX3Byb3BzJGluc2V0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRpbnNldCxcbiAgICAgIHByaW1hcnlQcm9wID0gcHJvcHMucHJpbWFyeSxcbiAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHMgPSBwcm9wcy5wcmltYXJ5VHlwb2dyYXBoeVByb3BzLFxuICAgICAgc2Vjb25kYXJ5UHJvcCA9IHByb3BzLnNlY29uZGFyeSxcbiAgICAgIHNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcyA9IHByb3BzLnNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcyxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlVHlwb2dyYXBoeVwiLCBcImluc2V0XCIsIFwicHJpbWFyeVwiLCBcInByaW1hcnlUeXBvZ3JhcGh5UHJvcHNcIiwgXCJzZWNvbmRhcnlcIiwgXCJzZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHNcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoTGlzdENvbnRleHQpLFxuICAgICAgZGVuc2UgPSBfUmVhY3QkdXNlQ29udGV4dC5kZW5zZTtcblxuICB2YXIgcHJpbWFyeSA9IHByaW1hcnlQcm9wICE9IG51bGwgPyBwcmltYXJ5UHJvcCA6IGNoaWxkcmVuO1xuXG4gIGlmIChwcmltYXJ5ICE9IG51bGwgJiYgcHJpbWFyeS50eXBlICE9PSBUeXBvZ3JhcGh5ICYmICFkaXNhYmxlVHlwb2dyYXBoeSkge1xuICAgIHByaW1hcnkgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCBfZXh0ZW5kcyh7XG4gICAgICB2YXJpYW50OiBkZW5zZSA/ICdib2R5MicgOiAnYm9keTEnLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnByaW1hcnksXG4gICAgICBjb21wb25lbnQ6IFwic3BhblwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgfSwgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcyksIHByaW1hcnkpO1xuICB9XG5cbiAgdmFyIHNlY29uZGFyeSA9IHNlY29uZGFyeVByb3A7XG5cbiAgaWYgKHNlY29uZGFyeSAhPSBudWxsICYmIHNlY29uZGFyeS50eXBlICE9PSBUeXBvZ3JhcGh5ICYmICFkaXNhYmxlVHlwb2dyYXBoeSkge1xuICAgIHNlY29uZGFyeSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIF9leHRlbmRzKHtcbiAgICAgIHZhcmlhbnQ6IFwiYm9keTJcIixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zZWNvbmRhcnksXG4gICAgICBjb2xvcjogXCJ0ZXh0U2Vjb25kYXJ5XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICB9LCBzZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHMpLCBzZWNvbmRhcnkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGRlbnNlICYmIGNsYXNzZXMuZGVuc2UsIGluc2V0ICYmIGNsYXNzZXMuaW5zZXQsIHByaW1hcnkgJiYgc2Vjb25kYXJ5ICYmIGNsYXNzZXMubXVsdGlsaW5lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIHByaW1hcnksIHNlY29uZGFyeSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IExpc3RJdGVtVGV4dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBBbGlhcyBmb3IgdGhlIGBwcmltYXJ5YCBwcm9wLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY2hpbGRyZW4gd29uJ3QgYmUgd3JhcHBlZCBieSBhIFR5cG9ncmFwaHkgY29tcG9uZW50LlxuICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgdG8gcmVuZGVyIGFuIGFsdGVybmF0aXZlIFR5cG9ncmFwaHkgdmFyaWFudCBieSB3cmFwcGluZ1xuICAgKiB0aGUgYGNoaWxkcmVuYCAob3IgYHByaW1hcnlgKSB0ZXh0LCBhbmQgb3B0aW9uYWwgYHNlY29uZGFyeWAgdGV4dFxuICAgKiB3aXRoIHRoZSBUeXBvZ3JhcGh5IGNvbXBvbmVudC5cbiAgICovXG4gIGRpc2FibGVUeXBvZ3JhcGh5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY2hpbGRyZW4gd2lsbCBiZSBpbmRlbnRlZC5cbiAgICogVGhpcyBzaG91bGQgYmUgdXNlZCBpZiB0aGVyZSBpcyBubyBsZWZ0IGF2YXRhciBvciBsZWZ0IGljb24uXG4gICAqL1xuICBpbnNldDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIHByaW1hcnk6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGVzZSBwcm9wcyB3aWxsIGJlIGZvcndhcmRlZCB0byB0aGUgcHJpbWFyeSB0eXBvZ3JhcGh5IGNvbXBvbmVudFxuICAgKiAoYXMgbG9uZyBhcyBkaXNhYmxlVHlwb2dyYXBoeSBpcyBub3QgYHRydWVgKS5cbiAgICovXG4gIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBzZWNvbmRhcnkgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgc2Vjb25kYXJ5OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlc2UgcHJvcHMgd2lsbCBiZSBmb3J3YXJkZWQgdG8gdGhlIHNlY29uZGFyeSB0eXBvZ3JhcGh5IGNvbXBvbmVudFxuICAgKiAoYXMgbG9uZyBhcyBkaXNhYmxlVHlwb2dyYXBoeSBpcyBub3QgYHRydWVgKS5cbiAgICovXG4gIHNlY29uZGFyeVR5cG9ncmFwaHlQcm9wczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlMaXN0SXRlbVRleHQnXG59KShMaXN0SXRlbVRleHQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xpc3RJdGVtVGV4dCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDhweCcsXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIGNvbG9yUHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiaW5oZXJpdFwiYC4gKi9cbiAgICBjb2xvckluaGVyaXQ6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGlubmVyIGBjb21wb25lbnRgIGVsZW1lbnQgaWYgYGRpc2FibGVHdXR0ZXJzPXtmYWxzZX1gLiAqL1xuICAgIGd1dHRlcnM6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAxNixcbiAgICAgIHBhZGRpbmdSaWdodDogMTZcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgaW5zZXQ9e3RydWV9YC4gKi9cbiAgICBpbnNldDoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDcyXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVTdGlja3k9e2ZhbHNlfWAuICovXG4gICAgc3RpY2t5OiB7XG4gICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICB0b3A6IDAsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0J1xuICAgIH1cbiAgfTtcbn07XG52YXIgTGlzdFN1YmhlYWRlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIExpc3RTdWJoZWFkZXIocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAnZGVmYXVsdCcgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2xpJyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkZGlzYWJsZUd1dHRlcnMgPSBwcm9wcy5kaXNhYmxlR3V0dGVycyxcbiAgICAgIGRpc2FibGVHdXR0ZXJzID0gX3Byb3BzJGRpc2FibGVHdXR0ZXJzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlR3V0dGVycyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlU3RpY2t5ID0gcHJvcHMuZGlzYWJsZVN0aWNreSxcbiAgICAgIGRpc2FibGVTdGlja3kgPSBfcHJvcHMkZGlzYWJsZVN0aWNreSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVN0aWNreSxcbiAgICAgIF9wcm9wcyRpbnNldCA9IHByb3BzLmluc2V0LFxuICAgICAgaW5zZXQgPSBfcHJvcHMkaW5zZXQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGluc2V0LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVHdXR0ZXJzXCIsIFwiZGlzYWJsZVN0aWNreVwiLCBcImluc2V0XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBjb2xvciAhPT0gJ2RlZmF1bHQnICYmIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCBpbnNldCAmJiBjbGFzc2VzLmluc2V0LCAhZGlzYWJsZVN0aWNreSAmJiBjbGFzc2VzLnN0aWNreSwgIWRpc2FibGVHdXR0ZXJzICYmIGNsYXNzZXMuZ3V0dGVycyksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTGlzdFN1YmhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdwcmltYXJ5JywgJ2luaGVyaXQnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBMaXN0IFN1YmhlYWRlciB3aWxsIG5vdCBoYXZlIGd1dHRlcnMuXG4gICAqL1xuICBkaXNhYmxlR3V0dGVyczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIExpc3QgU3ViaGVhZGVyIHdpbGwgbm90IHN0aWNrIHRvIHRoZSB0b3AgZHVyaW5nIHNjcm9sbC5cbiAgICovXG4gIGRpc2FibGVTdGlja3k6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBMaXN0IFN1YmhlYWRlciB3aWxsIGJlIGluZGVudGVkLlxuICAgKi9cbiAgaW5zZXQ6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUxpc3RTdWJoZWFkZXInXG59KShMaXN0U3ViaGVhZGVyKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MaXN0U3ViaGVhZGVyJzsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTIgMTRIN3YtMmg3djJ6bTMtNEg3di0yaDEwdjJ6bTAtNEg3VjdoMTB2MnpcIlxufSksICdBc3NpZ25tZW50Jyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk01IDkuMmgzVjE5SDV6TTEwLjYgNWgyLjh2MTRoLTIuOHptNS42IDhIMTl2NmgtMi44elwiXG59KSwgJ0JhckNoYXJ0Jyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0zIDEzaDhWM0gzdjEwem0wIDhoOHYtNkgzdjZ6bTEwIDBoOFYxMWgtOHYxMHptMC0xOHY2aDhWM2gtOHpcIlxufSksICdEYXNoYm9hcmQnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTExLjk5IDE4LjU0bC03LjM3LTUuNzNMMyAxNC4wN2w5IDcgOS03LTEuNjMtMS4yNy03LjM4IDUuNzR6TTEyIDE2bDcuMzYtNS43M0wyMSA5bC05LTctOSA3IDEuNjMgMS4yN0wxMiAxNnpcIlxufSksICdMYXllcnMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE2IDExYzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zUzE3LjY2IDUgMTYgNWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM3ptLTggMGMxLjY2IDAgMi45OS0xLjM0IDIuOTktM1M5LjY2IDUgOCA1QzYuMzQgNSA1IDYuMzQgNSA4czEuMzQgMyAzIDN6bTAgMmMtMi4zMyAwLTcgMS4xNy03IDMuNVYxOWgxNHYtMi41YzAtMi4zMy00LjY3LTMuNS03LTMuNXptOCAwYy0uMjkgMC0uNjIuMDItLjk3LjA1IDEuMTYuODQgMS45NyAxLjk3IDEuOTcgMy40NVYxOWg2di0yLjVjMC0yLjMzLTQuNjctMy41LTctMy41elwiXG59KSwgJ1Blb3BsZScpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNyAxOGMtMS4xIDAtMS45OS45LTEuOTkgMlM1LjkgMjIgNyAyMnMyLS45IDItMi0uOS0yLTItMnpNMSAydjJoMmwzLjYgNy41OS0xLjM1IDIuNDVjLS4xNi4yOC0uMjUuNjEtLjI1Ljk2IDAgMS4xLjkgMiAyIDJoMTJ2LTJINy40MmMtLjE0IDAtLjI1LS4xMS0uMjUtLjI1bC4wMy0uMTIuOS0xLjYzaDcuNDVjLjc1IDAgMS40MS0uNDEgMS43NS0xLjAzbDMuNTgtNi40OWMuMDgtLjE0LjEyLS4zMS4xMi0uNDggMC0uNTUtLjQ1LTEtMS0xSDUuMjFsLS45NC0ySDF6bTE2IDE2Yy0xLjEgMC0xLjk5LjktMS45OSAycy44OSAyIDEuOTkgMiAyLS45IDItMi0uOS0yLTItMnpcIlxufSksICdTaG9wcGluZ0NhcnQnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==