module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Btnmenu.js":
/*!*******************************!*\
  !*** ./components/Btnmenu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedMenus; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_More__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/More */ "@material-ui/icons/More");
/* harmony import */ var _material_ui_icons_More__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_More__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Grade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Grade */ "@material-ui/icons/Grade");
/* harmony import */ var _material_ui_icons_Grade__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Grade__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\Xpointer\\Desktop\\Next\\Next-Versel\\components\\Btnmenu.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread({
  elevation: 0,
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center'
  }
}, props), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 3
}, undefined));
const StyledMenuItem = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a);
function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      "aria-controls": "customized-menu",
      "aria-haspopup": "true",
      variant: "contained",
      color: "primary",
      onClick: handleClick,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
        fontSize: "small"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledMenu, {
      id: "customized-menu",
      anchorEl: anchorEl,
      keepMounted: true,
      open: Boolean(anchorEl),
      onClose: handleClose,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledMenuItem, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Grade__WEBPACK_IMPORTED_MODULE_10___default.a, {
            fontSize: "small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
          primary: "Upgrade"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledMenuItem, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_More__WEBPACK_IMPORTED_MODULE_9___default.a, {
            fontSize: "small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
          primary: "Settings"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledMenuItem, {
        type: "button",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8___default.a, {
            fontSize: "small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
          primary: "Sign Out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Dashboard.js":
/*!*********************************!*\
  !*** ./components/Dashboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "@material-ui/icons/ArrowForward");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Listitem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Listitem */ "./components/Listitem.js");
/* harmony import */ var _Btnmenu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Btnmenu */ "./components/Btnmenu.js");

var _jsxFileName = "C:\\Users\\Xpointer\\Desktop\\Next\\Next-Versel\\components\\Dashboard.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function Copyright() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    children: ['Copyright © XP ', new Date().getFullYear(), '.']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

const drawerWidth = 240;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
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
    width: `calc(100% - ${drawerWidth}px)`,
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
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
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
}));
function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.paper, classes.fixedHeight);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      position: "absolute",
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.appBar, open && classes.appBarShift),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.toolbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.menuButton, open && classes.menuButtonHidden),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_17___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
          component: "h1",
          variant: "h6",
          color: "inherit",
          noWrap: true,
          className: classes.title,
          children: "Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Btnmenu__WEBPACK_IMPORTED_MODULE_20__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "permanent",
      classes: {
        paper: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, !open && classes.drawerPaperClose)
      },
      open: open,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.toolbarIcon,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
          onClick: handleDrawerClose,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9___default.a, {
        children: _Listitem__WEBPACK_IMPORTED_MODULE_19__["mainListItems"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: classes.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.appBarSpacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13___default.a, {
        maxWidth: "lg",
        className: classes.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a, {
              className: fixedHeightPaper
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a, {
              className: fixedHeightPaper
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a, {
              className: fixedHeightPaper
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a, {
              className: fixedHeightPaper
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a, {
              className: fixedHeightPaper
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a, {
              className: fixedHeightPaper
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a, {
              className: fixedHeightPaper
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a, {
              className: fixedHeightPaper
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
          pt: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Copyright, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Listitem.js":
/*!********************************!*\
  !*** ./components/Listitem.js ***!
  \********************************/
/*! exports provided: mainListItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainListItems", function() { return mainListItems; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "@material-ui/icons/BarChart");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Layers */ "@material-ui/icons/Layers");
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Assignment */ "@material-ui/icons/Assignment");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\Xpointer\\Desktop\\Next\\Next-Versel\\components\\Listitem.js";











const mainListItems = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
      primary: "Customers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
      primary: "Orders"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    button: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
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

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dashboard */ "./components/Dashboard.js");

var _jsxFileName = "C:\\Users\\Xpointer\\Desktop\\Next\\Next-Versel\\pages\\home.js";



 // import CenteredTabs from "../components/Nav";
// import Accordeon from "../components/Accordion"
// import Step from "../components/Step"
// import Album from "../components/Album"



function App() {
  const prefersDarkMode = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()("(prefers-color-scheme: dark)");
  const theme = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
    palette: {
      type: prefersDarkMode ? "dark" : "light"
    }
  }), [prefersDarkMode]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForward");

/***/ }),

/***/ "@material-ui/icons/Assignment":
/*!************************************************!*\
  !*** external "@material-ui/icons/Assignment" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),

/***/ "@material-ui/icons/BarChart":
/*!**********************************************!*\
  !*** external "@material-ui/icons/BarChart" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BarChart");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/Grade":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Grade" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Grade");

/***/ }),

/***/ "@material-ui/icons/Layers":
/*!********************************************!*\
  !*** external "@material-ui/icons/Layers" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Layers");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/More":
/*!******************************************!*\
  !*** external "@material-ui/icons/More" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/More");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "@material-ui/icons/People":
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "@material-ui/icons/ShoppingCart":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ShoppingCart" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdG5tZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlzdGl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lnbm1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmFyQ2hhcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0dyYWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xheWVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVvcGxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU3R5bGVkTWVudSIsIndpdGhTdHlsZXMiLCJwYXBlciIsImJvcmRlciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiU3R5bGVkTWVudUl0ZW0iLCJ0aGVtZSIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb2xvciIsImNvbW1vbiIsIndoaXRlIiwiTWVudUl0ZW0iLCJDdXN0b21pemVkTWVudXMiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJCb29sZWFuIiwiUm91dGVyIiwicHVzaCIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImRyYXdlcldpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImRpc3BsYXkiLCJ0b29sYmFyIiwicGFkZGluZ1JpZ2h0IiwidG9vbGJhckljb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwibWl4aW5zIiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJhcHBCYXJTaGlmdCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImVudGVyaW5nU2NyZWVuIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwibWVudUJ1dHRvbkhpZGRlbiIsInRpdGxlIiwiZmxleEdyb3ciLCJkcmF3ZXJQYXBlciIsInBvc2l0aW9uIiwid2hpdGVTcGFjZSIsImRyYXdlclBhcGVyQ2xvc2UiLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsImFwcEJhclNwYWNlciIsImNvbnRlbnQiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImNvbnRhaW5lciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZmxleERpcmVjdGlvbiIsImZpeGVkSGVpZ2h0IiwiRGFzaGJvYXJkIiwiY2xhc3NlcyIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlRHJhd2VyT3BlbiIsImhhbmRsZURyYXdlckNsb3NlIiwiZml4ZWRIZWlnaHRQYXBlciIsImNsc3giLCJtYWluTGlzdEl0ZW1zIiwiQXBwIiwicHJlZmVyc0RhcmtNb2RlIiwidXNlTWVkaWFRdWVyeSIsInVzZU1lbW8iLCJjcmVhdGVNdWlUaGVtZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtR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Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveCc7XHJcbmltcG9ydCBPcHRpb25zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZSc7XHJcbmltcG9ydCBVcGdyYWRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR3JhZGUnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFN0eWxlZE1lbnUgPSB3aXRoU3R5bGVzKHtcclxuICBwYXBlcjoge1xyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkM2Q0ZDUnLFxyXG4gIH0sXHJcbn0pKChwcm9wcykgPT4gKFxyXG4gIDxNZW51XHJcbiAgICBlbGV2YXRpb249ezB9XHJcbiAgICBnZXRDb250ZW50QW5jaG9yRWw9e251bGx9XHJcbiAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgIH19XHJcbiAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgIH19XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSk7XHJcblxyXG5jb25zdCBTdHlsZWRNZW51SXRlbSA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICAnJiAuTXVpTGlzdEl0ZW1JY29uLXJvb3QsICYgLk11aUxpc3RJdGVtVGV4dC1wcmltYXJ5Jzoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpKE1lbnVJdGVtKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRNZW51cygpIHtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJjdXN0b21pemVkLW1lbnVcIlxyXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8U3R5bGVkTWVudVxyXG4gICAgICAgIGlkPVwiY3VzdG9taXplZC1tZW51XCJcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdHlsZWRNZW51SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxVcGdyYWRlSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVXBncmFkZVwiIC8+XHJcbiAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cclxuICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8T3B0aW9uc0ljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlNldHRpbmdzXCIgLz5cclxuICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxyXG4gICAgICAgIDxTdHlsZWRNZW51SXRlbSAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy8nKX0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uID5cclxuICAgICAgICAgICAgPEluYm94SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uID5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlNpZ24gT3V0XCIgLz5cclxuICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxyXG4gICAgICA8L1N0eWxlZE1lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZCc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IHsgbWFpbkxpc3RJdGVtc30gZnJvbSAnLi9MaXN0aXRlbSc7XHJcbmltcG9ydCBCdG5NZW51IGZyb20gJy4vQnRubWVudSdcclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgeydDb3B5cmlnaHQgwqkgWFAgJ31cclxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgeycuJ31cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICB9LFxyXG4gIHRvb2xiYXI6IHtcclxuICAgIHBhZGRpbmdSaWdodDogMjQsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICB9LFxyXG4gIHRvb2xiYXJJY29uOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgcGFkZGluZzogJzAgOHB4JyxcclxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBhcHBCYXJTaGlmdDoge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiAzNixcclxuICB9LFxyXG4gIG1lbnVCdXR0b25IaWRkZW46IHtcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGRyYXdlclBhcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXJDbG9zZToge1xyXG4gICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFwcEJhclNwYWNlcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIH0sXHJcbiAgZml4ZWRIZWlnaHQ6IHtcclxuICAgIGhlaWdodDogMjQwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgZml4ZWRIZWlnaHRQYXBlciA9IGNsc3goY2xhc3Nlcy5wYXBlciwgY2xhc3Nlcy5maXhlZEhlaWdodCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmFwcEJhciwgb3BlbiAmJiBjbGFzc2VzLmFwcEJhclNoaWZ0KX0+XHJcbiAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubWVudUJ1dHRvbiwgb3BlbiAmJiBjbGFzc2VzLm1lbnVCdXR0b25IaWRkZW4pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuXHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIG5vV3JhcCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICBcclxuICAgICAgICAgIDxCdG5NZW51Lz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgcGFwZXI6IGNsc3goY2xhc3Nlcy5kcmF3ZXJQYXBlciwgIW9wZW4gJiYgY2xhc3Nlcy5kcmF3ZXJQYXBlckNsb3NlKSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFySWNvbn0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX0+XHJcbiAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PnttYWluTGlzdEl0ZW1zfTwvTGlzdD5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICBcclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJTcGFjZXJ9IC8+XHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIFxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEJveCBwdD17NH0+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkJztcclxuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydCc7XHJcbmltcG9ydCBQZW9wbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZW9wbGUnO1xyXG5pbXBvcnQgQmFyQ2hhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CYXJDaGFydCc7XHJcbmltcG9ydCBMYXllcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MYXllcnMnO1xyXG5pbXBvcnQgQXNzaWdubWVudEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lnbm1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5MaXN0SXRlbXMgPSAoXHJcbiAgPGRpdj5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPERhc2hib2FyZEljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8UGVvcGxlSWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VzdG9tZXJzXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPcmRlcnNcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEJhckNoYXJ0SWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmVwb3J0c1wiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGF5ZXJzSWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSW50ZWdyYXRpb25zXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgPC9kaXY+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbi8vIGltcG9ydCBDZW50ZXJlZFRhYnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbi8vIGltcG9ydCBBY2NvcmRlb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWNjb3JkaW9uXCJcclxuLy8gaW1wb3J0IFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RlcFwiXHJcbi8vIGltcG9ydCBBbGJ1bSBmcm9tIFwiLi4vY29tcG9uZW50cy9BbGJ1bVwiXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGFzaGJvYXJkXCJcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBwcmVmZXJzRGFya01vZGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcclxuXHJcbiAgY29uc3QgdGhlbWUgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT5cclxuICAgICAgY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgICAgIHBhbGV0dGU6IHtcclxuICAgICAgICAgIHR5cGU6IHByZWZlcnNEYXJrTW9kZSA/IFwiZGFya1wiIDogXCJsaWdodFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgW3ByZWZlcnNEYXJrTW9kZV1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgIDxEYXNoYm9hcmQvPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lnbm1lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0JhckNoYXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9HcmFkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGF5ZXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVvcGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==