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
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: fixedHeightPaper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Deposits__WEBPACK_IMPORTED_MODULE_24__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__["default"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: classes.paper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Orders__WEBPACK_IMPORTED_MODULE_25__["default"], {}, void 0, false, {
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
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
          pt: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Copyright, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsInRvb2xiYXIiLCJwYWRkaW5nUmlnaHQiLCJ0b29sYmFySWNvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtaXhpbnMiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsImFwcEJhclNoaWZ0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiZW50ZXJpbmdTY3JlZW4iLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJtZW51QnV0dG9uSGlkZGVuIiwidGl0bGUiLCJmbGV4R3JvdyIsImRyYXdlclBhcGVyIiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwiZHJhd2VyUGFwZXJDbG9zZSIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiYXBwQmFyU3BhY2VyIiwiY29udGVudCIsImhlaWdodCIsIm92ZXJmbG93IiwiY29udGFpbmVyIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJwYXBlciIsImZsZXhEaXJlY3Rpb24iLCJmaXhlZEhlaWdodCIsIkRhc2hib2FyZCIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJmaXhlZEhlaWdodFBhcGVyIiwiY2xzeCIsIm1haW5MaXN0SXRlbXMiLCJzZWNvbmRhcnlMaXN0SXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWdCRSxxRUFBQyw2REFBRDtBQUFLLFlBQUUsRUFBRSxDQUFUO0FBQUEsaUNBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0VEOztHQTdFdUJHLFM7VUFDTmpELFM7OztNQURNaUQsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLmE3NmFmZWU3MTcwY2E5MDMwZTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IHsgbWFpbkxpc3RJdGVtcywgc2Vjb25kYXJ5TGlzdEl0ZW1zIH0gZnJvbSAnLi9MaXN0aXRlbSc7XHJcbmltcG9ydCBEZXBvc2l0cyBmcm9tICcuL0RlcG9zaXRzJztcclxuaW1wb3J0IE9yZGVycyBmcm9tICcuL09yZGVycyc7XHJcblxyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIHsnQ29weXJpZ2h0IMKpICd9XHJcbiAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9cIj5cclxuICAgICAgICBZb3VyIFdlYnNpdGVcclxuICAgICAgPC9MaW5rPnsnICd9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgIHsnLid9XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICB0b29sYmFyOiB7XHJcbiAgICBwYWRkaW5nUmlnaHQ6IDI0LCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgfSxcclxuICB0b29sYmFySWNvbjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIHBhZGRpbmc6ICcwIDhweCcsXHJcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgYXBwQmFyU2hpZnQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogMzYsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uSGlkZGVuOiB7XHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBkcmF3ZXJQYXBlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGRyYXdlclBhcGVyQ2xvc2U6IHtcclxuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHBCYXJTcGFjZXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIGZpeGVkSGVpZ2h0OiB7XHJcbiAgICBoZWlnaHQ6IDI0MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGZpeGVkSGVpZ2h0UGFwZXIgPSBjbHN4KGNsYXNzZXMucGFwZXIsIGNsYXNzZXMuZml4ZWRIZWlnaHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5hcHBCYXIsIG9wZW4gJiYgY2xhc3Nlcy5hcHBCYXJTaGlmdCl9PlxyXG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm1lbnVCdXR0b24sIG9wZW4gJiYgY2xhc3Nlcy5tZW51QnV0dG9uSGlkZGVuKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIG5vV3JhcCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXs0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICBwYXBlcjogY2xzeChjbGFzc2VzLmRyYXdlclBhcGVyLCAhb3BlbiAmJiBjbGFzc2VzLmRyYXdlclBhcGVyQ2xvc2UpLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJJY29ufT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfT5cclxuICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+e21haW5MaXN0SXRlbXN9PC9MaXN0PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+e3NlY29uZGFyeUxpc3RJdGVtc308L0xpc3Q+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyU3BhY2VyfSAvPlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG5cclxuICAgICAgICAgICAgey8qIFJlY2VudCBEZXBvc2l0cyAqL31cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Zml4ZWRIZWlnaHRQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8RGVwb3NpdHMgLz5cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIHsvKiBSZWNlbnQgT3JkZXJzICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8T3JkZXJzIC8+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEJveCBwdD17NH0+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==