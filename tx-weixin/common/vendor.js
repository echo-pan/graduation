(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // ??????atob??????????????????????????????????????????`const Base64 = {atob};Base64.atob('xxxx')`??????????????????
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('?????????????????????????????????????????????????????????' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context????????????
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// ??????????????????
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime ??????????????? uni ???????????????????????????????????? uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';

var messages = {};

var locale;

{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}

function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}

function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // ?????????
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // ???????????? $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function setLocale$1(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom };

  }
}

function populateParameters(result) {var _result$brand =





  result.brand,brand = _result$brand === void 0 ? '' : _result$brand,_result$model = result.model,model = _result$model === void 0 ? '' : _result$model,_result$system = result.system,system = _result$system === void 0 ? '' : _result$system,_result$language = result.language,language = _result$language === void 0 ? '' : _result$language,theme = result.theme,version = result.version,platform = result.platform,fontSizeSetting = result.fontSizeSetting,SDKVersion = result.SDKVersion,pixelRatio = result.pixelRatio,deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // ??? ?????? ?????? ??????

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__wxf2d1de878443a966",
    appName: "????????????",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.6.5",
    uniRuntimeVersion: "3.6.5",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined };


  Object.assign(result, parameters);
}

function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc' };

    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}

function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}

function getAppLanguage(defaultLanguage) {
  return getLocale$1 ?
  getLocale$1() :
  defaultLanguage;
}

function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }

  return _hostName;
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  } };


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


var getAppBaseInfo = {
  returnValue: function returnValue(result) {var _result =
    result,version = _result.version,language = _result.language,SDKVersion = _result.SDKVersion,theme = _result.theme;

    var _hostName = getHostName(result);

    var hostLanguage = language.replace('_', '-');

    result = sortObject(Object.assign(result, {
      appId: "__UNI__wxf2d1de878443a966",
      appName: "????????????",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme }));

  } };


var getDeviceInfo = {
  returnValue: function returnValue(result) {var _result2 =
    result,brand = _result2.brand,model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);

    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model }));

  } };


var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);

    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0 }));

  } };


var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {var
    locationReducedAccuracy = result.locationReducedAccuracy;

    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // ?????????????????????????????????????????????????????????__id__???????????????????????????mp-weixin??????navigateTo???AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// ?????? api ???????????????
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue ??? false ???????????????????????????????????????????????????????????????????????????
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// ??????????????????
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// ???????????? key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}????????????????????? key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// ???????????? returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// ??????????????? api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// ?????? api ??????????????????
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// ?????? api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


/**
                    * ????????? try-catch
                    */
/**
                        * ????????? try-catch
                        */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}

function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}

var cid;
var cidErrMsg;
var enabled;

function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}

function invokePushCallback(
args)
{
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message) };

    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // ?????????????????????
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message) });

    });
  }
}

var getPushCidCallbacks = [];

function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}

function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }var _getApiCallbacks =




  getApiCallbacks(args),success = _getApiCallbacks.success,fail = _getApiCallbacks.fail,complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);

  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid };

        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '') };

        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}

var onPushMessageCallbacks = [];
// ????????? defineOnApi ?????????????????? defineOnApi ?????? UniServiceJSBridge ????????????????????????????????????????????????????????????
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};

var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    // ???????????????????????????????????????????????????????????? vue ???????????????????????? vue ???????????????
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // ????????????/QQ???????????????????????????????????????????????????????????????
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // ??????????????? triggerEvent ?????????
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initUnknownHooks(mpOptions, vueOptions) {var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {return initHook$1(mpOptions, hook, excludes);});
}

function findHooks(vueOptions) {var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}

function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // ?????? Vue.prototype ???????????????
    } catch (e) {
      if (Object({"VUE_APP_NAME":"????????????","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('?????? Vue ??? data ???????????????????????? data ???????????????????????? data ?????????????????? vm ??????????????????????????????????????????????????????', data);
      }
    }
  } else {
    try {
      // ??? data ?????????
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // ????????????????????? render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: '' };

        properties.virtualHostClass = {
          type: null,
          value: '' };

      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // ??????????????????????????? $slots ??? props??????????????? vueSlots ????????? $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO ???????????? mpvue ??? mp ??????
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for ???????????????????????????', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent ????????????????????? event ??????

  // fixed ?????????????????? mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ?
  event.detail.__args__ || [event.detail] :
  [event.detail];

  if (isCustom) {// ???????????????
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// ???????????????????????? event ??? detail ??????
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }

  var extraObj = processEventExtra(vm, extra, event, __args__);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {// wxcomponent ?????????????????????
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // ???????????? scoped slots ??????????????????????????????????????????
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('?????????????????????');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // ????????? web-view ?????? dataset ?????????
  if (!eventOpts) {
    return console.warn('?????????????????????');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao ?????????????????? scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // ??????????????????????????????????????????????????????????????????????????????
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // ???????????????????????????getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// ?????????????????????????????????????????????????????? onShow ??? onLaunch ??????
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// ?????? ???2.2.3 ????????????????????? 2.3.0 ??? nextTick ??????
          console.error('?????????????????????????????????????????? ?????????????????????-??????-????????????-????????????????????? ?????????`2.3.0`??????');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm ???????????? globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // ??????????????? globalData
  appOptions.globalData = vm.$options.globalData || {};
  // ??? methods ?????????????????? getApp() ???
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);

  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // ??????????????????(????????????:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // ??????????????????
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO ???????????? for ?????? scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail ?????????,value ?????????(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // ?????? multipleSlots ??????????????? bug??????????????????????????? ??? u-list?????????????????????
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // ??????????????????
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // ????????? vue ??????
        this.$vm = new VueComponent(options);

        // ??????$slots,$scopedSlots???????????????????????????$slots???
        initSlots(this.$vm, properties.vueSlots);

        // ???????????? setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // ????????? props ???????????? true????????????????????? false ????????? created,ready ??????, ??? attached ?????????
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // ?????? mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 10:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('?????? log end ??????');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 16:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 17:
/*!*****************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/filters/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.dateFormat = dateFormat; // ?????????????????????
function getformatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds() };

  for (var k in o) {
    if (new RegExp("(".concat(k, ")")).test(fmt)) {
      var str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

// ????????????
function dateFormat(time) {
  return getformatDate(new Date(time), "yyyy-MM-dd hh:mm");
}

/***/ }),

/***/ 18:
/*!****************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/config/index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.def = def;var dev = {
  baseUrl: 'http://localhost:8585',
  //baseUrl: 'http://116.62.17.100:8585',
  h5Appid: 'wxdb19069bd8e49de3'
  // debug: true
};

function def() {
  return dev;
}

/***/ }),

/***/ 19:
/*!******************************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/components/zhangxu-showModal/initModal.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = initModal;var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
function initModal(v) {
  // ??????store?????????Vue?????????
  v.prototype.$modalStore = new _vuex.default.Store({
    state: {
      show: false,
      title: "??????",
      content: '',
      showCancel: true,
      cancelText: "??????",
      cancelColor: "#000000",
      confirmText: "??????",
      confirmColor: "#576b95",
      success: null },

    mutations: {
      hideModal: function hideModal(state) {
        // ??????????????????????????????

        if (state.hideTabBar) {
          wx.showTabBar();
        }

        state.show = false;
      },
      showModal: function showModal(state, data) {
        state = Object.assign(state, data);
        console.log(state);
        state.show = true;
      },
      success: function success(state, res) {
        var cb = state.success;
        var resObj = {
          cancel: false,
          confirm: false };

        res == "confirm" ? resObj.confirm = true : resObj.cancel = true;
        cb && cb(resObj);
      } } });


  // ??????$showModal???Vue?????????????????????????????????
  v.prototype.$showModal = function (option) {
    if (typeof option === 'object') {

      if (option.hideTabBar) {
        wx.hideTabBar();
      }


      v.prototype.$modalStore.commit('showModal', option);
    } else {
      throw "??????????????????????????????????????????" + typeof option;
    }
  };
}

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 226:
/*!********************************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/components/QS-SharePoster/QS-SharePoster.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 5));var _app2 = _interopRequireDefault(__webpack_require__(/*! ./app.js */ 227));
var _QRCodeAlg = _interopRequireDefault(__webpack_require__(/*! ./QRCodeAlg.js */ 228));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var ShreUserPosterBackgroundKey = 'ShrePosterBackground_'; // ??????????????????????????????
var idKey = 'QSSHAREPOSTER_IDKEY'; //drawArray???????????????idkey
var isMp = false;

isMp = true;



// export default 
function getSharePoster(obj) {
  return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve, reject) {var result1, result2;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (

                returnPromise(obj));case 3:result1 = _context.sent;
              resolve(result1);_context.next = 21;break;case 7:_context.prev = 7;_context.t0 = _context["catch"](0);

              //TODO handle the exception
              removePosterStorage(obj.type);_context.prev = 10;

              _app2.default.log('------------???????????????, ?????????????????????------------');_context.next = 14;return (
                returnPromise(obj));case 14:result2 = _context.sent;
              resolve(result2);_context.next = 21;break;case 18:_context.prev = 18;_context.t1 = _context["catch"](10);

              //TODO handle the exception
              reject(_context.t1);case 21:case "end":return _context.stop();}}}, _callee, null, [[0, 7], [10, 18]]);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());




}

function returnPromise(obj) {var

  type =

















  obj.type,formData = obj.formData,background = obj.background,posterCanvasId = obj.posterCanvasId,backgroundImage = obj.backgroundImage,reserve = obj.reserve,textArray = obj.textArray,drawArray = obj.drawArray,qrCodeArray = obj.qrCodeArray,imagesArray = obj.imagesArray,setCanvasWH = obj.setCanvasWH,setCanvasToTempFilePath = obj.setCanvasToTempFilePath,setDraw = obj.setDraw,bgScale = obj.bgScale,Context = obj.Context,_this = obj._this,delayTimeScale = obj.delayTimeScale,drawDelayTime = obj.drawDelayTime;
  return new Promise( /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(rs, rj) {var bgObj, params, i, hasAllInfoCallback, _i, drawArrayItem, newData, drawArray_copy, _i2, item, _newData, item_idKey, poster;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;

              _app2.default.showLoading('????????????????????????');
              if (!Context) {
                _app2.default.log('??????????????????,??????????????????');
                Context = uni.createCanvasContext(posterCanvasId, _this || null);
              }if (!(

              background && background.width && background.height)) {_context2.next = 7;break;}
              bgObj = background;_context2.next = 10;break;case 7:_context2.next = 9;return (

                getShreUserPosterBackground({
                  backgroundImage: backgroundImage,
                  type: type,
                  formData: formData }));case 9:bgObj = _context2.sent;case 10:


              // ??????ios ????????????
              bgScale = bgScale || .75;
              bgObj.width = bgObj.width * bgScale;
              bgObj.height = bgObj.height * bgScale;

              _app2.default.log('?????????????????????????????????:' + JSON.stringify(bgObj));
              params = {
                bgObj: bgObj,
                type: type,
                bgScale: bgScale };

              if (setCanvasWH && typeof setCanvasWH == 'function') setCanvasWH(params);if (!
              imagesArray) {_context2.next = 24;break;}
              if (typeof imagesArray == 'function')
              imagesArray = imagesArray(params);
              _app2.default.showLoading('??????????????????????????????????????????');
              _app2.default.log('??????????????????');_context2.next = 22;return (
                setImage(imagesArray));case 22:imagesArray = _context2.sent;
              _app2.default.hideLoading();case 24:

              if (textArray) {
                if (typeof textArray == 'function')
                textArray = textArray(params);
                textArray = setText(Context, textArray);

              }if (!
              qrCodeArray) {_context2.next = 39;break;}
              if (typeof qrCodeArray == 'function')
              qrCodeArray = qrCodeArray(params);
              _app2.default.showLoading('??????????????????????????????????????????');
              i = 0;case 29:if (!(i < qrCodeArray.length)) {_context2.next = 38;break;}
              _app2.default.log(i);if (!
              qrCodeArray[i].image) {_context2.next = 35;break;}_context2.next = 34;return (
                _app2.default.downloadFile_PromiseFc(qrCodeArray[i].image));case 34:qrCodeArray[i].image = _context2.sent;case 35:i++;_context2.next = 29;break;case 38:

              _app2.default.hideLoading();case 39:if (!

              drawArray) {_context2.next = 94;break;}
              if (typeof drawArray == 'function') {
                drawArray = drawArray(params);
              }if (!
              _app2.default.isPromise(drawArray)) {_context2.next = 45;break;}_context2.next = 44;return (
                drawArray);case 44:drawArray = _context2.sent;case 45:if (!(


              _app2.default.isArray(drawArray) && drawArray.length > 0)) {_context2.next = 94;break;}
              hasAllInfoCallback = false;
              _i = 0;case 48:if (!(_i < drawArray.length)) {_context2.next = 76;break;}
              drawArrayItem = drawArray[_i];
              if (_app2.default.isFn(drawArrayItem.allInfoCallback) && !hasAllInfoCallback) hasAllInfoCallback = true;
              drawArrayItem[idKey] = _i;
              newData = void 0;_context2.t0 =
              drawArrayItem.type;_context2.next = _context2.t0 ===
              'image' ? 56 : _context2.t0 ===


              'text' ? 60 : _context2.t0 ===


              'qrcode' ? 62 : _context2.t0 ===





              'custom' ? 68 : 69;break;case 56:_context2.next = 58;return setImage(drawArrayItem);case 58:newData = _context2.sent;return _context2.abrupt("break", 71);case 60:newData = setText(Context, drawArrayItem);return _context2.abrupt("break", 71);case 62:if (!drawArrayItem.image) {_context2.next = 67;break;}_context2.next = 65;return _app2.default.downloadFile_PromiseFc(drawArrayItem.image);case 65:_context2.t1 = _context2.sent;newData = { image: _context2.t1 };case 67:return _context2.abrupt("break", 71);case 68:return _context2.abrupt("break", 71);case 69:


              _app2.default.log('??????????????????');return _context2.abrupt("break", 71);case 71:


              if (newData && _app2.default.isObject(newData)) {
                drawArray[_i] = _objectSpread(_objectSpread({}, drawArrayItem),
                newData);

              };case 73:_i++;_context2.next = 48;break;case 76:if (!


              hasAllInfoCallback) {_context2.next = 94;break;}
              _app2.default.log('----------------hasAllInfoCallback----------------');
              drawArray_copy = _toConsumableArray(drawArray);
              drawArray_copy.sort(function (a, b) {
                var a_serialNum = !_app2.default.isUndef(a.serialNum) && !_app2.default.isNull(a.serialNum) ? Number(a.serialNum) : Number.NEGATIVE_INFINITY;
                var b_serialNum = !_app2.default.isUndef(b.serialNum) && !_app2.default.isNull(b.serialNum) ? Number(b.serialNum) : Number.NEGATIVE_INFINITY;
                return a_serialNum - b_serialNum;
              });

              _i2 = 0;case 81:if (!(_i2 < drawArray_copy.length)) {_context2.next = 94;break;}
              item = _objectSpread({}, drawArray_copy[_i2]);if (!

              _app2.default.isFn(item.allInfoCallback)) {_context2.next = 91;break;}
              _newData = item.allInfoCallback({
                drawArray: drawArray_copy });if (!

              _app2.default.isPromise(_newData)) {_context2.next = 89;break;}_context2.next = 88;return _newData;case 88:_newData = _context2.sent;case 89:
              item_idKey = item[idKey];
              if (!_app2.default.isUndef(item_idKey)) {
                drawArray[item[idKey]] = _objectSpread(_objectSpread({}, item),
                _newData);

              } else {
                console.log('???????????? ?????????idKey!!!	...???????????????');
              }case 91:_i2++;_context2.next = 81;break;case 94:_context2.next = 96;return (





                drawShareImage({
                  Context: Context,
                  type: type,
                  posterCanvasId: posterCanvasId,
                  reserve: reserve,
                  drawArray: drawArray,
                  textArray: textArray,
                  imagesArray: imagesArray,
                  bgObj: bgObj,
                  qrCodeArray: qrCodeArray,
                  setCanvasToTempFilePath: setCanvasToTempFilePath,
                  setDraw: setDraw,
                  bgScale: bgScale,
                  _this: _this,
                  delayTimeScale: delayTimeScale,
                  drawDelayTime: drawDelayTime }));case 96:poster = _context2.sent;

              _app2.default.hideLoading();
              rs({
                bgObj: bgObj,
                poster: poster,
                type: type });_context2.next = 104;break;case 101:_context2.prev = 101;_context2.t2 = _context2["catch"](0);


              //TODO handle the exception
              rj(_context2.t2);case 104:case "end":return _context2.stop();}}}, _callee2, null, [[0, 101]]);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());


}

function drawShareImage(obj) {//??????????????????
  var
  Context =














  obj.Context,type = obj.type,posterCanvasId = obj.posterCanvasId,reserve = obj.reserve,bgObj = obj.bgObj,drawArray = obj.drawArray,textArray = obj.textArray,qrCodeArray = obj.qrCodeArray,imagesArray = obj.imagesArray,setCanvasToTempFilePath = obj.setCanvasToTempFilePath,setDraw = obj.setDraw,bgScale = obj.bgScale,_this = obj._this,delayTimeScale = obj.delayTimeScale,drawDelayTime = obj.drawDelayTime;
  var params = {
    Context: Context,
    bgObj: bgObj,
    type: type,
    bgScale: bgScale };

  delayTimeScale = delayTimeScale !== undefined ? delayTimeScale : 15;
  drawDelayTime = drawDelayTime !== undefined ? drawDelayTime : 100;
  return new Promise(function (rs, rj) {
    try {
      _app2.default.showLoading('??????????????????');
      _app2.default.log('????????????:' + JSON.stringify(bgObj));
      if (bgObj && bgObj.path) {
        _app2.default.log('?????????????????????');
        Context.drawImage(bgObj.path, 0, 0, bgObj.width, bgObj.height);
      } else {
        _app2.default.log('????????????????????????');
        if (bgObj.backgroundColor) {
          _app2.default.log('?????????????????????:' + bgObj.backgroundColor);
          Context.setFillStyle(bgObj.backgroundColor);
          Context.fillRect(0, 0, bgObj.width, bgObj.height);
        } else {
          _app2.default.log('????????????????????????');
        }
      }

      _app2.default.showLoading('????????????');
      if (imagesArray && imagesArray.length > 0)
      drawImage(Context, imagesArray);

      _app2.default.showLoading('?????????????????????');
      if (setDraw && typeof setDraw == 'function') setDraw(params);

      _app2.default.showLoading('????????????');
      if (textArray && textArray.length > 0)
      drawText(Context, textArray, bgObj);

      _app2.default.showLoading('???????????????');
      if (qrCodeArray && qrCodeArray.length > 0) {
        for (var i = 0; i < qrCodeArray.length; i++) {
          drawQrCode(Context, qrCodeArray[i]);
        }
      }

      _app2.default.showLoading('????????????????????????');
      if (drawArray && drawArray.length > 0) {
        for (var _i3 = 0; _i3 < drawArray.length; _i3++) {
          var drawArrayItem = drawArray[_i3];
          _app2.default.log('????????????????????????, drawArrayItem:' + JSON.stringify(drawArrayItem));
          switch (drawArrayItem.type) {
            case 'image':
              _app2.default.log('????????????????????????, ????????????');
              drawImage(Context, drawArrayItem);
              break;
            case 'text':
              _app2.default.log('????????????????????????, ????????????');
              drawText(Context, drawArrayItem, bgObj);
              break;
            case 'qrcode':
              _app2.default.log('????????????????????????, ???????????????');
              drawQrCode(Context, drawArrayItem);
              break;
            case 'custom':
              _app2.default.log('????????????????????????, ?????????????????????');
              if (drawArrayItem.setDraw && typeof drawArrayItem.setDraw === 'function')
              drawArrayItem.setDraw(Context);
              break;
            default:
              _app2.default.log('??????????????????');
              break;}

        }
      }
      _app2.default.showLoading('?????????');
      setTimeout(function () {
        Context.draw(typeof reserve == 'boolean' ? reserve : false, function () {
          _app2.default.showLoading('??????????????????');
          var setObj = setCanvasToTempFilePath || {};
          if (setObj && typeof setObj == 'function')
          setObj = setCanvasToTempFilePath(bgObj, type);
          var canvasToTempFilePathFn;










          var data = _objectSpread({
            x: 0,
            y: 0,
            width: bgObj.width,
            height: bgObj.height,
            destWidth: bgObj.width * 2, // ???H5??????????????????????????????
            destHeight: bgObj.height * 2, // ???H5??????????????????????????????
            quality: .8,
            fileType: 'jpg' },
          setObj);

          _app2.default.log('canvasToTempFilePath???data??????:' + JSON.stringify(data));
          canvasToTempFilePathFn = function canvasToTempFilePathFn() {
            var toTempFilePathObj = _objectSpread(_objectSpread({},
            data), {}, {
              canvasId: posterCanvasId,
              success: function success(res) {
                _app2.default.hideLoading();
                rs(res);
              },
              fail: function fail(err) {
                _app2.default.hideLoading();
                _app2.default.log('??????????????????:' + JSON.stringify(err));
                rj('??????????????????:' + JSON.stringify(err));
              } });

            uni.canvasToTempFilePath(toTempFilePathObj, _this || null);
          };

          var delayTime = 0;
          if (qrCodeArray) {
            qrCodeArray.forEach(function (item) {
              if (item.text) {
                delayTime += Number(item.text.length);
              }
            });
          }
          if (imagesArray) {
            imagesArray.forEach(function () {
              delayTime += delayTimeScale;
            });
          }
          if (textArray) {
            textArray.forEach(function () {
              delayTime += delayTimeScale;
            });
          }
          if (drawArray) {
            drawArray.forEach(function (item) {
              switch (item.type) {
                case 'text':
                  if (item.text) {
                    delayTime += item.text.length;
                  }
                  break;
                default:
                  delayTime += delayTimeScale;
                  break;}

            });
          }
          _app2.default.log('????????????:' + delayTimeScale);
          _app2.default.log('????????????:' + delayTime);
          setTimeout(canvasToTempFilePathFn, delayTime);
        });
      }, drawDelayTime);
    } catch (e) {
      //TODO handle the exception
      _app2.default.hideLoading();
      rj(e);
    }
  });
}

// export 
function setText(Context, texts) {// ??????????????????
  _app2.default.log('????????????????????????, texts:' + JSON.stringify(texts));
  if (texts && _app2.default.isArray(texts)) {
    _app2.default.log('texts?????????');
    if (texts.length > 0) {
      for (var i = 0; i < texts.length; i++) {
        _app2.default.log('???????????????-???????????????:' + JSON.stringify(texts[i]));
        texts[i] = setTextFn(Context, texts[i]);
      }
    }
  } else {
    _app2.default.log('texts?????????');
    texts = setTextFn(Context, texts);
  }
  _app2.default.log('??????texts:' + JSON.stringify(texts));
  return texts;
}

function setTextFn(Context, textItem) {
  _app2.default.log('????????????????????????, textItem:' + JSON.stringify(textItem));
  if (_app2.default.isNotNull_string(textItem.text)) {
    textItem.text = String(textItem.text);
    textItem.alpha = textItem.alpha !== undefined ? textItem.alpha : 1;
    textItem.color = textItem.color || 'black';
    textItem.size = textItem.size !== undefined ? textItem.size : 10;
    textItem.textAlign = textItem.textAlign || 'left';
    textItem.textBaseline = textItem.textBaseline || 'middle';
    textItem.dx = textItem.dx || 0;
    textItem.dy = textItem.dy || 0;
    textItem.size = Math.ceil(Number(textItem.size));
    _app2.default.log('???????????????-?????????????????????:' + JSON.stringify(textItem));
    var textLength = countTextLength(Context, {
      text: textItem.text,
      size: textItem.size });

    _app2.default.log('???????????????-???????????????????????????:' + textLength);
    var infoCallBackObj = {};
    if (textItem.infoCallBack && typeof textItem.infoCallBack === 'function') {
      infoCallBackObj = textItem.infoCallBack(textLength);
    }
    textItem = _objectSpread(_objectSpread({},
    textItem), {}, {
      textLength: textLength },
    infoCallBackObj);

    _app2.default.log('???????????????-infoCallBack???:' + JSON.stringify(textItem));
  }
  return textItem;
}

function countTextLength(Context, obj) {
  _app2.default.log('??????????????????, obj:' + JSON.stringify(obj));var

  text =

  obj.text,size = obj.size;
  Context.setFontSize(size);
  var textLength;
  /* try{
                  	textLength = Context.measureText(text); // ??????????????? App?????????????????????????????????????????????measureText??????
                  }catch(e){
                  	//TODO handle the exception
                  	textLength = {};
                  } */
  textLength = {};
  _app2.default.log('measureText??????????????????, textLength:' + JSON.stringify(textLength));
  textLength = textLength && textLength.width ? textLength.width : 0;
  if (!textLength) {
    var l = 0;
    for (var j = 0; j < text.length; j++) {
      var t = text.substr(j, 1);
      var countL = countStrLength(t);
      _app2.default.log('????????????????????????:' + countL);
      l += countL;
    }
    _app2.default.log('?????????????????????:' + l);
    textLength = l * size;
  }
  return textLength;
}

//????????????????????????
function countStrLength(t) {
  var l;
  if (/a/.test(t)) {
    l = 0.552734375;
  } else if (/b/.test(t)) {
    l = 0.638671875;
  } else if (/c/.test(t)) {
    l = 0.50146484375;
  } else if (/d/.test(t)) {
    l = 0.6396484375;
  } else if (/e/.test(t)) {
    l = 0.5673828125;
  } else if (/f/.test(t)) {
    l = 0.3466796875;
  } else if (/g/.test(t)) {
    l = 0.6396484375;
  } else if (/h/.test(t)) {
    l = 0.61572265625;
  } else if (/i/.test(t)) {
    l = 0.26611328125;
  } else if (/j/.test(t)) {
    l = 0.26708984375;
  } else if (/k/.test(t)) {
    l = 0.54443359375;
  } else if (/l/.test(t)) {
    l = 0.26611328125;
  } else if (/m/.test(t)) {
    l = 0.93701171875;
  } else if (/n/.test(t)) {
    l = 0.6162109375;
  } else if (/o/.test(t)) {
    l = 0.6357421875;
  } else if (/p/.test(t)) {
    l = 0.638671875;
  } else if (/q/.test(t)) {
    l = 0.6396484375;
  } else if (/r/.test(t)) {
    l = 0.3818359375;
  } else if (/s/.test(t)) {
    l = 0.462890625;
  } else if (/t/.test(t)) {
    l = 0.37255859375;
  } else if (/u/.test(t)) {
    l = 0.6162109375;
  } else if (/v/.test(t)) {
    l = 0.52490234375;
  } else if (/w/.test(t)) {
    l = 0.78955078125;
  } else if (/x/.test(t)) {
    l = 0.5068359375;
  } else if (/y/.test(t)) {
    l = 0.529296875;
  } else if (/z/.test(t)) {
    l = 0.49169921875;
  } else if (/A/.test(t)) {
    l = 0.70361328125;
  } else if (/B/.test(t)) {
    l = 0.62744140625;
  } else if (/C/.test(t)) {
    l = 0.6689453125;
  } else if (/D/.test(t)) {
    l = 0.76171875;
  } else if (/E/.test(t)) {
    l = 0.5498046875;
  } else if (/F/.test(t)) {
    l = 0.53125;
  } else if (/G/.test(t)) {
    l = 0.74365234375;
  } else if (/H/.test(t)) {
    l = 0.7734375;
  } else if (/I/.test(t)) {
    l = 0.2939453125;
  } else if (/J/.test(t)) {
    l = 0.39599609375;
  } else if (/K/.test(t)) {
    l = 0.634765625;
  } else if (/L/.test(t)) {
    l = 0.51318359375;
  } else if (/M/.test(t)) {
    l = 0.97705078125;
  } else if (/N/.test(t)) {
    l = 0.81298828125;
  } else if (/O/.test(t)) {
    l = 0.81494140625;
  } else if (/P/.test(t)) {
    l = 0.61181640625;
  } else if (/Q/.test(t)) {
    l = 0.81494140625;
  } else if (/R/.test(t)) {
    l = 0.65283203125;
  } else if (/S/.test(t)) {
    l = 0.5771484375;
  } else if (/T/.test(t)) {
    l = 0.5732421875;
  } else if (/U/.test(t)) {
    l = 0.74658203125;
  } else if (/V/.test(t)) {
    l = 0.67626953125;
  } else if (/W/.test(t)) {
    l = 1.017578125;
  } else if (/X/.test(t)) {
    l = 0.64501953125;
  } else if (/Y/.test(t)) {
    l = 0.603515625;
  } else if (/Z/.test(t)) {
    l = 0.6201171875;
  } else if (/[0-9]/.test(t)) {
    l = 0.58642578125;
  } else if (/[\u4e00-\u9fa5]/.test(t)) {
    l = 1;
  } else if (/ /.test(t)) {
    l = 0.2958984375;
  } else if (/\`/.test(t)) {
    l = 0.294921875;
  } else if (/\~/.test(t)) {
    l = 0.74169921875;
  } else if (/\!/.test(t)) {
    l = 0.3125;
  } else if (/\@/.test(t)) {
    l = 1.03125;
  } else if (/\#/.test(t)) {
    l = 0.63818359375;
  } else if (/\$/.test(t)) {
    l = 0.58642578125;
  } else if (/\%/.test(t)) {
    l = 0.8896484375;
  } else if (/\^/.test(t)) {
    l = 0.74169921875;
  } else if (/\&/.test(t)) {
    l = 0.8701171875;
  } else if (/\*/.test(t)) {
    l = 0.455078125;
  } else if (/\(/.test(t)) {
    l = 0.333984375;
  } else if (/\)/.test(t)) {
    l = 0.333984375;
  } else if (/\_/.test(t)) {
    l = 0.4482421875;
  } else if (/\-/.test(t)) {
    l = 0.4326171875;
  } else if (/\+/.test(t)) {
    l = 0.74169921875;
  } else if (/\=/.test(t)) {
    l = 0.74169921875;
  } else if (/\|/.test(t)) {
    l = 0.26904296875;
  } else if (/\\/.test(t)) {
    l = 0.416015625;
  } else if (/\[/.test(t)) {
    l = 0.333984375;
  } else if (/\]/.test(t)) {
    l = 0.333984375;
  } else if (/\;/.test(t)) {
    l = 0.24072265625;
  } else if (/\'/.test(t)) {
    l = 0.25634765625;
  } else if (/\,/.test(t)) {
    l = 0.24072265625;
  } else if (/\./.test(t)) {
    l = 0.24072265625;
  } else if (/\//.test(t)) {
    l = 0.42724609375;
  } else if (/\{/.test(t)) {
    l = 0.333984375;
  } else if (/\}/.test(t)) {
    l = 0.333984375;
  } else if (/\:/.test(t)) {
    l = 0.24072265625;
  } else if (/\"/.test(t)) {
    l = 0.435546875;
  } else if (/\</.test(t)) {
    l = 0.74169921875;
  } else if (/\>/.test(t)) {
    l = 0.74169921875;
  } else if (/\?/.test(t)) {
    l = 0.48291015625;
  } else {
    l = 1;
  }
  return l;
}

// export 
function setImage(images) {// ??????????????????
  _app2.default.log('??????????????????????????????');
  return new Promise( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(resolve, rejcet) {var i;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;if (!(

              images && _app2.default.isArray(images))) {_context3.next = 14;break;}
              _app2.default.log('images???????????????');
              i = 0;case 4:if (!(i < images.length)) {_context3.next = 12;break;}
              _app2.default.log('???????????????????????????:' + i);_context3.next = 8;return (
                setImageFn(images[i]));case 8:images[i] = _context3.sent;case 9:i++;_context3.next = 4;break;case 12:_context3.next = 18;break;case 14:


              _app2.default.log('images???????????????');_context3.next = 17;return (
                setImageFn(images));case 17:images = _context3.sent;case 18:

              resolve(images);_context3.next = 24;break;case 21:_context3.prev = 21;_context3.t0 = _context3["catch"](0);

              //TODO handle the exception
              rejcet(_context3.t0);case 24:case "end":return _context3.stop();}}}, _callee3, null, [[0, 21]]);}));return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());


}

function setImageFn(image) {
  return new Promise( /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(resolve, reject) {var imgUrl, hasinfoCallBack, imageInfo;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:if (!
              image.url) {_context4.next = 17;break;}
              imgUrl = image.url;_context4.next = 4;return (
                _app2.default.downloadFile_PromiseFc(imgUrl));case 4:imgUrl = _context4.sent;
              image.url = imgUrl;
              hasinfoCallBack = image.infoCallBack && typeof image.infoCallBack === 'function';
              imageInfo = {};_context4.next = 10;return (
                _app2.default.getImageInfo_PromiseFc(imgUrl));case 10:imageInfo = _context4.sent;
              if (hasinfoCallBack) {
                image = _objectSpread(_objectSpread({},
                image),
                image.infoCallBack(imageInfo));

              }
              image.dx = image.dx || 0;
              image.dy = image.dy || 0;
              image.dWidth = image.dWidth || imageInfo.width;
              image.dHeight = image.dHeight || imageInfo.height;
              image = _objectSpread(_objectSpread({},
              image), {}, {
                imageInfo: imageInfo });case 17:


              resolve(image);case 18:case "end":return _context4.stop();}}}, _callee4);}));return function (_x7, _x8) {return _ref4.apply(this, arguments);};}());

}

// export 
function drawText(Context, textArray, bgObj) {// ????????????????????????
  if (!_app2.default.isArray(textArray)) {
    _app2.default.log('??????????????????, ????????????');
    textArray = [textArray];
  } else {
    _app2.default.log('??????????????????, ?????????');
  }
  _app2.default.log('??????????????????, textArray:' + JSON.stringify(textArray));
  var newArr = [];
  if (textArray && textArray.length > 0) {
    for (var j = 0; j < textArray.length; j++) {
      var textItem = textArray[j];
      if (textItem.text && textItem.lineFeed) {
        var lineNum = -1,
        maxWidth = bgObj.width,
        lineHeight = textItem.size,
        dx = textItem.dx;
        if (_app2.default.isObject(textItem.lineFeed)) {
          var lineFeed = textItem.lineFeed;
          lineNum = lineFeed.lineNum !== undefined && typeof lineFeed.lineNum === 'number' && lineFeed.lineNum >= 0 ?
          lineFeed.lineNum : lineNum;
          maxWidth = lineFeed.maxWidth !== undefined && typeof lineFeed.maxWidth === 'number' ? lineFeed.maxWidth :
          maxWidth;
          lineHeight = lineFeed.lineHeight !== undefined && typeof lineFeed.lineHeight === 'number' ? lineFeed.lineHeight :
          lineHeight;
          dx = lineFeed.dx !== undefined && typeof lineFeed.dx === 'number' ? lineFeed.dx : dx;
        }
        var chr = textItem.text.split("");
        var temp = "";
        var row = [];
        //?????????????????????????????????
        for (var a = 0, len = chr.length; a < len; a++) {
          if (countTextLength(Context, {
            text: temp,
            size: textItem.size }) <=
          maxWidth && countTextLength(Context, {
            text: temp + chr[a],
            size: textItem.size }) <=
          maxWidth) {
            temp += chr[a];
            if (a == chr.length - 1) {
              row.push(temp);
            }
          } else {
            row.push(temp);
            temp = chr[a];
          }
        }
        _app2.default.log('????????????????????????:' + JSON.stringify(row));
        //??????????????? ????????????lineHeight  ????????????lineNum
        var allNum = lineNum >= 0 && lineNum < row.length ? lineNum : row.length;

        for (var i = 0; i < allNum; i++) {
          var str = row[i];
          if (i == allNum - 1 && allNum < row.length) {
            str = str.substring(0, str.length - 1) + '...';
          }
          var obj = _objectSpread(_objectSpread({}, textItem), {}, {
            text: str,
            dx: i === 0 ? textItem.dx : dx >= 0 ? dx : textItem.dx,
            dy: textItem.dy + i * lineHeight,
            textLength: countTextLength(Context, {
              text: str,
              size: textItem.size }) });


          _app2.default.log('???????????????????????????:' + JSON.stringify(obj));
          newArr.push(obj);
        }
      } else {
        newArr.push(textItem);
      }
    }
  }
  _app2.default.log('?????????????????????:' + JSON.stringify(newArr));
  drawTexts(Context, newArr);
}

function setFont() {var textItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (textItem.font && typeof textItem.font === 'string') {
    _app2.default.log(textItem.font);
    return textItem.font;
  } else {
    var fontStyle = 'normal';
    var fontVariant = 'normal';
    var fontWeight = 'normal';
    var fontSize = textItem.size || 10;
    var fontFamily = 'sans-serif';
    fontSize = Math.ceil(Number(fontSize));
    if (textItem.fontStyle && typeof textItem.fontStyle === 'string')
    fontStyle = textItem.fontStyle.trim();
    if (textItem.fontVariant && typeof textItem.fontVariant === 'string')
    fontVariant = textItem.fontVariant.trim();
    if (textItem.fontWeight && (typeof textItem.fontWeight === 'string' || typeof textItem.fontWeight === 'number'))
    fontWeight = textItem.fontWeight.trim();
    if (textItem.fontFamily && typeof textItem.fontFamily === 'string')
    fontFamily = textItem.fontFamily.trim();
    return fontStyle + ' ' +
    fontVariant + ' ' +
    fontWeight + ' ' +
    fontSize + 'px' + ' ' +
    fontFamily;
  }
}

function drawTexts(Context, texts) {// ????????????
  _app2.default.log('????????????????????????, texts:' + JSON.stringify(texts));
  if (texts && _app2.default.isArray(texts)) {
    _app2.default.log('????????????????????????, ?????????');
    if (texts.length > 0) {
      for (var i = 0; i < texts.length; i++) {
        drawTextFn(Context, texts[i]);
      }
    }
  } else {
    _app2.default.log('????????????????????????, ????????????');
    drawTextFn(Context, texts);
  }
}

function drawTextFn(Context, textItem) {
  _app2.default.log('????????????????????????, textItem:' + JSON.stringify(textItem));
  if (textItem && _app2.default.isObject(textItem) && textItem.text) {
    Context.font = setFont(textItem);
    Context.setFillStyle(textItem.color);
    Context.setGlobalAlpha(textItem.alpha);
    Context.setTextAlign(textItem.textAlign);
    Context.setTextBaseline(textItem.textBaseline);
    Context.fillText(textItem.text, textItem.dx, textItem.dy);
    if (textItem.lineThrough && _app2.default.isObject(textItem.lineThrough)) {
      _app2.default.log('????????????');
      var lineThrough = textItem.lineThrough;
      lineThrough.alpha = lineThrough.alpha !== undefined ? lineThrough.alpha : textItem.alpha;
      lineThrough.style = lineThrough.style || textItem.color;
      lineThrough.width = lineThrough.width !== undefined ? lineThrough.width : textItem.size / 10;
      lineThrough.cap = lineThrough.cap !== undefined ? lineThrough.cap : 'butt';
      _app2.default.log('???????????????:' + JSON.stringify(lineThrough));
      Context.setGlobalAlpha(lineThrough.alpha);
      Context.setStrokeStyle(lineThrough.style);
      Context.setLineWidth(lineThrough.width);
      Context.setLineCap(lineThrough.cap);
      var mx, my;
      switch (textItem.textAlign) {
        case 'left':
          mx = textItem.dx;
          break;
        case 'center':
          mx = textItem.dx - textItem.textLength / 2;
          break;
        default:
          mx = textItem.dx - textItem.textLength;
          break;}

      switch (textItem.textBaseline) {
        case 'top':
          my = textItem.dy + textItem.size * .5;
          break;
        case 'middle':
          my = textItem.dy;
          break;
        default:
          my = textItem.dy - textItem.size * .5;
          break;}

      Context.beginPath();
      Context.moveTo(mx, my);
      Context.lineTo(mx + textItem.textLength, my);
      Context.stroke();
      Context.closePath();
      _app2.default.log('???????????????');
    }
    Context.setGlobalAlpha(1);
    Context.font = '10px sans-serif';
  }
}
// export 
function drawImage(Context, images) {// ????????????
  _app2.default.log('????????????????????????:' + JSON.stringify(images));
  if (images && _app2.default.isArray(images)) {
    if (images.length > 0) {
      for (var i = 0; i < images.length; i++) {
        readyDrawImageFn(Context, images[i]);
      }
    }
  } else {
    readyDrawImageFn(Context, images);
  }

}

function readyDrawImageFn(Context, img) {
  _app2.default.log('????????????????????????, img:' + JSON.stringify(img));
  if (img.url) {
    if (img.circleSet) {
      drawCircleImage(Context, img);
    } else if (img.roundRectSet) {
      drawRoundRectImage(Context, img);
    } else {
      drawImageFn(Context, img);
    }
  }
}

function drawImageFn(Context, img) {
  _app2.default.log('??????????????????????????????, img:' + JSON.stringify(img));
  if (img.url) {
    var hasAlpha = !_app2.default.isUndef(img.alpha);
    img.alpha = Number(!_app2.default.isUndef(img.alpha) ? img.alpha : 1);
    Context.setGlobalAlpha(img.alpha);
    _app2.default.log('????????????????????????, ???url');
    if (img.dWidth && img.dHeight && img.sx && img.sy && img.sWidth && img.sHeight) {
      _app2.default.log('????????????????????????, ?????????????????????');
      Context.drawImage(img.url, img.dx || 0, img.dy || 0,
      img.dWidth || false, img.dHeight || false,
      img.sx || false, img.sy || false,
      img.sWidth || false, img.sHeight || false);
    } else if (img.dWidth && img.dHeight) {
      _app2.default.log('????????????????????????, ?????????????????????');
      Context.drawImage(img.url, img.dx || 0, img.dy || 0,
      img.dWidth || false, img.dHeight || false);
    } else {
      _app2.default.log('????????????????????????, ?????????????????????');
      Context.drawImage(img.url, img.dx || 0, img.dy || 0);
    }
    if (hasAlpha) {
      Context.setGlobalAlpha(1);
    }
  }
  _app2.default.log('????????????????????????, ????????????');
}

function drawCircleImage(Context, obj) {
  _app2.default.log('??????????????????????????????, obj:' + JSON.stringify(obj));var

  dx =





  obj.dx,dy = obj.dy,dWidth = obj.dWidth,dHeight = obj.dHeight,circleSet = obj.circleSet,imageInfo = obj.imageInfo;
  var x, y, r;
  if (typeof circleSet === 'object') {
    x = circleSet.x;
    y = circleSet.y;
    r = circleSet.r;
  }
  if (!r) {
    var d;
    d = dWidth > dHeight ? dHeight : dWidth;
    r = d / 2;
  }

  x = x ? dx + x : (dx || 0) + r;
  y = y ? dy + y : (dy || 0) + r;
  Context.save();
  Context.beginPath();
  Context.arc(x, y, r, 0, 2 * Math.PI, false);
  Context.closePath();
  Context.setGlobalAlpha(0);
  Context.fillStyle = '#FFFFFF';
  Context.fill();
  Context.setGlobalAlpha(1);
  Context.clip();
  drawImageFn(Context, obj);
  _app2.default.log('????????????????????????');
  Context.restore();
}

function drawRoundRectImage(Context, obj) {// ????????????
  _app2.default.log('??????????????????????????????, obj:' + JSON.stringify(obj));
  Context.save();var

  dx =





  obj.dx,dy = obj.dy,dWidth = obj.dWidth,dHeight = obj.dHeight,roundRectSet = obj.roundRectSet,imageInfo = obj.imageInfo;
  var r;
  if (typeof roundRectSet === 'object') {
    r = roundRectSet.r;
  }
  r = r || dWidth * .1;

  if (dWidth < 2 * r) {
    r = dWidth / 2;
  }
  if (dHeight < 2 * r) {
    r = dHeight / 2;
  }
  Context.beginPath();
  Context.moveTo(dx + r, dy);
  Context.arcTo(dx + dWidth, dy, dx + dWidth, dy + dHeight, r);
  Context.arcTo(dx + dWidth, dy + dHeight, dx, dy + dHeight, r);
  Context.arcTo(dx, dy + dHeight, dx, dy, r);
  Context.arcTo(dx, dy, dx + dWidth, dy, r);
  Context.closePath();
  Context.setGlobalAlpha(0);
  Context.fillStyle = '#FFFFFF';
  Context.fill();
  Context.setGlobalAlpha(1);
  Context.clip();
  drawImageFn(Context, obj);
  Context.restore();
  _app2.default.log('??????????????????????????????, ????????????');
}

// export 
function drawQrCode(Context, qrCodeObj) {//???????????????????????? ????????? ????????? ???????????????????????????
  _app2.default.log('???????????????????????????');
  _app2.default.showLoading('?????????????????????');
  var qrcodeAlgObjCache = [];
  var options = {
    text: String(qrCodeObj.text || '') || '', // ????????????
    size: Number(qrCodeObj.size || 0) || 200, // ???????????????
    background: String(qrCodeObj.background || '') || '#ffffff', // ?????????
    foreground: String(qrCodeObj.foreground || '') || '#000000', // ?????????
    pdground: String(qrCodeObj.pdground || '') || '#000000', // ??????????????????
    correctLevel: Number(qrCodeObj.correctLevel || 0) || 3, // ????????????
    image: String(qrCodeObj.image || '') || '', // ???????????????
    imageSize: Number(qrCodeObj.imageSize || 0) || 40, // ?????????????????????
    dx: Number(qrCodeObj.dx || 0) || 0, // x?????????
    dy: Number(qrCodeObj.dy || 0) || 0 // y?????????
  };
  var qrCodeAlg = null;
  var d = 0;
  for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
    d = i;
    if (qrcodeAlgObjCache[i].text == options.text && qrcodeAlgObjCache[i].text.correctLevel == options.correctLevel) {
      qrCodeAlg = qrcodeAlgObjCache[i].obj;
      break;
    }
  }
  if (d == l) {
    qrCodeAlg = new _QRCodeAlg.default(options.text, options.correctLevel);
    qrcodeAlgObjCache.push({
      text: options.text,
      correctLevel: options.correctLevel,
      obj: qrCodeAlg });

  }
  var getForeGround = function getForeGround(config) {
    var options = config.options;
    if (options.pdground && (
    config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 ||
    config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 ||
    config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2))
    {
      return options.pdground;
    }
    return options.foreground;
  };
  var count = qrCodeAlg.getModuleCount();
  var ratioSize = options.size;
  var ratioImgSize = options.imageSize;
  //????????????????????????
  var tileW = (ratioSize / count).toPrecision(4);
  var tileH = (ratioSize / count).toPrecision(4);
  //??????
  for (var row = 0; row < count; row++) {
    for (var col = 0; col < count; col++) {
      var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
      var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
      var foreground = getForeGround({
        row: row,
        col: col,
        count: count,
        options: options });

      Context.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);
      Context.fillRect(options.dx + Math.round(col * tileW), options.dy + Math.round(row * tileH), w, h);
    }
  }
  if (options.image) {




    // ???????????????
    var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {
      ctxi.setLineWidth(lineWidth);
      ctxi.setFillStyle(options.background);
      ctxi.setStrokeStyle(options.background);
      ctxi.beginPath(); // draw top and top right corner 
      ctxi.moveTo(x + r, y);
      ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
      ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
      ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
      ctxi.arcTo(x, y, x + r, y, r);
      ctxi.closePath();
      if (fill) {
        ctxi.fill();
      }
      if (stroke) {
        ctxi.stroke();
      }
    };var x = options.dx + Number(((ratioSize - ratioImgSize) / 2).toFixed(2));var y = options.dy + Number(((ratioSize - ratioImgSize) / 2).toFixed(2));drawRoundedRect(Context, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);Context.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);
  }
  _app2.default.hideLoading();
}


function getShreUserPosterBackground(objs) {//??????????????????????????????????????? ???????????????????????? ????????????getShreUserPosterBackgroundFc??????
  var
  backgroundImage =

  objs.backgroundImage,type = objs.type;
  return new Promise( /*#__PURE__*/function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(resolve, reject) {var pbg, image, index, imageObj, obj, savedFilePath, _savedFilePath, _savedFilePath2, _savedFilePath3;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.prev = 0;

              _app2.default.showLoading('???????????????????????????');


              pbg = getPosterStorage(type);




              _app2.default.log('???????????????:' + JSON.stringify(pbg));if (!(
              pbg && pbg.path && pbg.name)) {_context5.next = 53;break;}
              _app2.default.log('???????????????, ???????????????????????????????????????');_context5.next = 8;return (
                _app2.default.getPosterUrl(objs));case 8:image = _context5.sent;
              _app2.default.log('????????????name????????????');if (!(
              pbg.name === _app2.default.fileNameInPath(image))) {_context5.next = 45;break;}
              _app2.default.log('name??????, ???????????????????????????????????????');_context5.next = 14;return (
                _app2.default.checkFile_PromiseFc(pbg.path));case 14:index = _context5.sent;if (!(
              index >= 0)) {_context5.next = 37;break;}
              _app2.default.log('??????save????????????, ??????????????????, ???????????????');_context5.next = 19;return (
                _app2.default.getImageInfo_PromiseFc(pbg.path));case 19:imageObj = _context5.sent;
              obj = _objectSpread({}, pbg);if (!(

              !pbg.width || !pbg.height || pbg.width !== imageObj.width || pbg.height !== imageObj.height)) {_context5.next = 30;break;}
              _app2.default.log('???????????????????????? ????????????');_context5.next = 25;return (
                getShreUserPosterBackgroundFc(objs, image));case 25:savedFilePath = _context5.sent;
              _app2.default.hideLoading();
              resolve(savedFilePath);_context5.next = 35;break;case 30:

              _app2.default.log('??????????????????, ????????????, ???????????????');
              obj = _objectSpread(_objectSpread({},
              pbg), {}, {
                width: imageObj.width,
                height: imageObj.height });


              setPosterStorage(type, _objectSpread({}, obj));


              _app2.default.hideLoading();
              resolve(obj);case 35:_context5.next = 43;break;case 37:


              _app2.default.log('??????save???????????????, ??????????????????');_context5.next = 40;return (
                getShreUserPosterBackgroundFc(objs, image));case 40:_savedFilePath = _context5.sent;
              _app2.default.hideLoading();
              resolve(_savedFilePath);case 43:_context5.next = 51;break;case 45:


              _app2.default.log('name?????????, ??????????????????');_context5.next = 48;return (
                getShreUserPosterBackgroundFc(objs, image));case 48:_savedFilePath2 = _context5.sent;
              _app2.default.hideLoading();
              resolve(_savedFilePath2);case 51:_context5.next = 59;break;case 53:


              _app2.default.log('???????????????????????????, ???????????????????????????');_context5.next = 56;return (
                getShreUserPosterBackgroundFc(objs));case 56:_savedFilePath3 = _context5.sent;
              _app2.default.hideLoading();
              resolve(_savedFilePath3);case 59:_context5.next = 67;break;case 61:_context5.prev = 61;_context5.t0 = _context5["catch"](0);


              _app2.default.hideLoading();
              _app2.default.showToast('?????????????????????????????????:' + JSON.stringify(_context5.t0));
              _app2.default.log(JSON.stringify(_context5.t0));
              reject(_context5.t0);case 67:case "end":return _context5.stop();}}}, _callee5, null, [[0, 61]]);}));return function (_x9, _x10) {return _ref5.apply(this, arguments);};}());


}

function getPosterStorage(type) {
  return _app2.default.getStorageSync(getStorageKey(type));
}

function removePosterStorage(type) {
  var ShreUserPosterBackgroundKey = getStorageKey(type);
  var pbg = _app2.default.getStorageSync(ShreUserPosterBackgroundKey);
  if (pbg && pbg.path) {
    _app2.default.removeSavedFile(pbg.path);
    _app2.default.removeStorageSync(ShreUserPosterBackgroundKey);
  }
}

function setPosterStorage(type, data) {
  _app2.default.setStorage(getStorageKey(type), data);
}

function getStorageKey(type) {
  return ShreUserPosterBackgroundKey + (type || 'default');
}

function getShreUserPosterBackgroundFc(objs, upimage) {//??????????????????????????????
  var
  backgroundImage =

  objs.backgroundImage,type = objs.type;
  _app2.default.log('?????????????????????, ????????????????????????');
  removePosterStorage(type);
  return new Promise( /*#__PURE__*/function () {var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(resolve, reject) {var name, savedFilePath, imageObj, returnObj, image, _savedFilePath4, _imageObj, _returnObj;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.prev = 0;

              _app2.default.showLoading('???????????????????????????');if (!
              upimage) {_context6.next = 24;break;}
              _app2.default.log('???????????????????????????????????????');
              _app2.default.log('??????????????????????????????');
              name = _app2.default.fileNameInPath(upimage);_context6.next = 8;return (
                _app2.default.downLoadAndSaveFile_PromiseFc(upimage));case 8:savedFilePath = _context6.sent;if (!
              savedFilePath) {_context6.next = 20;break;}
              _app2.default.log('??????????????????????????????:' + savedFilePath);_context6.next = 13;return (
                _app2.default.getImageInfo_PromiseFc(savedFilePath));case 13:imageObj = _context6.sent;
              returnObj = {
                path: savedFilePath,
                width: imageObj.width,
                height: imageObj.height,
                name: name };


              setPosterStorage(type, _objectSpread({}, returnObj));


              _app2.default.hideLoading();
              resolve(returnObj);_context6.next = 22;break;case 20:

              _app2.default.hideLoading();
              reject('not find savedFilePath');case 22:_context6.next = 48;break;case 24:


              _app2.default.log('??????????????????????????????????????????, ???????????????????????????????????????');_context6.next = 27;return (
                _app2.default.getPosterUrl(objs));case 27:image = _context6.sent;
              _app2.default.log('??????????????????????????????:' + image);_context6.next = 31;return (
                _app2.default.downLoadAndSaveFile_PromiseFc(image));case 31:_savedFilePath4 = _context6.sent;if (!
              _savedFilePath4) {_context6.next = 46;break;}
              _app2.default.log('??????????????????????????????:' + _savedFilePath4);_context6.next = 36;return (
                _app2.default.getImageInfo_PromiseFc(_savedFilePath4));case 36:_imageObj = _context6.sent;
              _app2.default.log('????????????????????????');
              _returnObj = {
                path: _savedFilePath4,
                width: _imageObj.width,
                height: _imageObj.height,
                name: _app2.default.fileNameInPath(image) };

              _app2.default.log('?????????????????????????????????:' + JSON.stringify(_returnObj));


              setPosterStorage(type, _objectSpread({}, _returnObj));



              _app2.default.hideLoading();
              _app2.default.log('???????????????????????????');
              resolve(_objectSpread({}, _returnObj));_context6.next = 48;break;case 46:


              _app2.default.hideLoading();
              reject('not find savedFilePath');case 48:_context6.next = 53;break;case 50:_context6.prev = 50;_context6.t0 = _context6["catch"](0);



              //TODO handle the exception
              reject(_context6.t0);case 53:case "end":return _context6.stop();}}}, _callee6, null, [[0, 50]]);}));return function (_x11, _x12) {return _ref6.apply(this, arguments);};}());


}


module.exports = {
  getSharePoster: getSharePoster,
  setText: setText,
  setImage: setImage,
  drawText: drawText,
  drawImage: drawImage,
  drawQrCode: drawQrCode };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 227:
/*!*********************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/components/QS-SharePoster/app.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var _log = console.log; // ??????????????????APP.vue????????????onlaunch????????? console.log = ()=> {} ?????????????????????????????????
//log = ()=>{};	// ????????????????????????????????????????????????
var _app = {
  //????????????
  log: function log(t) {
    _log(t);
  }, // ????????????,
  showLoading: function showLoading(msg, ifmask) {
    uni.showLoading({
      title: msg,
      mask: ifmask || false });

  },
  hideLoading: function hideLoading() {
    uni.hideLoading();
  },
  showToast: function showToast(msg, icon) {
    uni.showToast({
      title: msg,
      icon: icon || 'none' });

  },
  getPosterUrl: function getPosterUrl(objs) {// ????????????????????????url????????????
    var
    backgroundImage =


    objs.backgroundImage,type = objs.type,formData = objs.formData;
    return new Promise(function (rs, rj) {
      var image;
      if (backgroundImage) {
        image = backgroundImage;
      } else {
        switch (type) {//??????type???????????????, ???????????????request??????
          case 1:
            image = '';
            break;
          default:
            image = '/static/share_coupon.jpg';
            break;}

      }
      if (image) {
        rs(image); // resolve???????????????
      } else {
        rj('???????????????????????????');
      }
    });
  },






  //????????????????????????
  shareTypeListSheetArray: {
    array: [0, 1, 2, 3, 4, 5] },
  // ???????????? 0-???????????? 1-????????? 2-????????? 3-?????? 4-?????? 5-?????????
  isArray: function isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  },
  isObject: function isObject(arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
  },
  isPromise: function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isUndefined: function isUndefined(arg) {
    return arg === undefined;
  },
  isUndef: function isUndef(arg) {
    return arg === undefined;
  },
  isNotNull_string: function isNotNull_string(arg) {
    return arg !== null && arg !== undefined && arg !== '';
  },
  isFn: function isFn(fn) {
    return fn && typeof fn === 'function';
  },
  getStorage: function getStorage(key, scb, fcb) {
    uni.getStorage({
      key: key,
      success: function success(res) {
        if (res.data && res.data != "") {
          if (scb) scb(res.data);
        } else {
          if (fcb) fcb();
        }
      },
      fail: function fail() {
        if (fcb) fcb();
      } });

  },
  setStorage: function setStorage(key, data) {
    _log('????????????');
    _log('key???' + key);
    _log('data???' + JSON.stringify(data));
    uni.setStorage({
      key: key,
      data: data });

  },
  setStorageSync: function setStorageSync(key, data) {
    uni.setStorageSync(key, data);
  },
  getStorageSync: function getStorageSync(key) {
    return uni.getStorageSync(key);
  },
  clearStorageSync: function clearStorageSync() {
    uni.clearStorageSync();
  },
  removeStorageSync: function removeStorageSync(key) {
    uni.removeStorageSync(key);
  },
  getImageInfo: function getImageInfo(url, cb, fcb) {
    url = checkMPUrl(url);
    uni.getImageInfo({
      src: url,
      success: function success(res) {
        if (cb && typeof cb == 'function') cb(res);
      },
      fail: function fail(err) {
        if (fcb && typeof fcb == 'function') fcb(err);
      } });

  },
  downloadFile: function downloadFile(url, cb) {
    url = checkMPUrl(url);
    uni.downloadFile({
      url: url,
      success: function success(res) {
        if (cb && typeof cb == 'function') cb(res);
      } });

  },
  downloadFile_PromiseFc: function downloadFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      if (url.substring(0, 4) !== 'http') {
        rs(url);
      } else {
        url = checkMPUrl(url);
        _log('url:' + url);
        uni.downloadFile({
          url: url,
          success: function success(res) {
            if (res && res.tempFilePath)
            rs(res.tempFilePath);else

            rj('not find tempFilePath');
          },
          fail: function fail(err) {
            rj(err);
          } });

      }
    });
  },
  saveFile: function saveFile(url) {
    uni.saveFile({
      tempFilePath: url,
      success: function success(res) {
        _log('????????????:' + JSON.stringify(res));
      } });

  },
  downLoadAndSaveFile_PromiseFc: function downLoadAndSaveFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      _log('???????????????????????????:' + url);
      if (url.substring(0, 4) === 'http') {
        url = checkMPUrl(url);
        uni.downloadFile({
          url: url,
          success: function success(d_res) {
            _log('????????????????????????' + JSON.stringify(d_res));
            if (d_res && d_res.tempFilePath) {






              uni.saveFile({
                tempFilePath: d_res.tempFilePath,
                success: function success(s_res) {
                  _log('?????????????????????:' + JSON.stringify(s_res));
                  if (s_res && s_res.savedFilePath)
                  rs(s_res.savedFilePath);else

                  rs(d_res.tempFilePath);
                },
                fail: function fail(err) {
                  rs(d_res.tempFilePath);
                } });



            } else {
              rj('not find tempFilePath');
            }
          },
          fail: function fail(err) {
            rj(err);
          } });

      } else {
        rs(url);
      }
    });
  },
  checkFile_PromiseFc: function checkFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      uni.getSavedFileList({
        success: function success(res) {
          var d = res.fileList;
          var index = d.findIndex(function (item) {
            return item.filePath === url;
          });
          rs(index);
        },
        fail: function fail(err) {
          rj(err);
        } });

    });
  },
  removeSavedFile: function removeSavedFile(path) {
    uni.getSavedFileList({
      success: function success(res) {
        var d = res.fileList;
        var index = d.findIndex(function (item) {
          return item.filePath === path;
        });
        if (index >= 0)
        uni.removeSavedFile({
          filePath: path });

      } });

  },
  fileNameInPath: function fileNameInPath(path) {
    var s = path.split("/");
    return s[s.length - 1];
  },
  getImageInfo_PromiseFc: function getImageInfo_PromiseFc(imgPath) {
    return new Promise(function (rs, rj) {
      _log('????????????????????????:' + imgPath);
      imgPath = checkMPUrl(imgPath);
      uni.getImageInfo({
        src: imgPath,
        success: function success(res) {
          _log('????????????????????????:' + JSON.stringify(res));
          rs(res);
        },
        fail: function fail(err) {
          _log('????????????????????????:' + JSON.stringify(err));
          rj(err);
        } });

    });
  },
  previewImage: function previewImage(urls) {
    if (typeof urls == 'string')
    urls = [urls];
    uni.previewImage({
      urls: urls });

  },
  actionSheet: function actionSheet(obj, cb) {
    var sheetArray = [];
    for (var i = 0; i < obj.array.length; i++) {
      switch (obj.array[i]) {
        case 'sinaweibo':
          sheetArray[i] = '????????????';
          break;
        case 'qq':
          sheetArray[i] = 'QQ';
          break;
        case 'weixin':
          sheetArray[i] = '??????';
          break;
        case 'WXSceneSession':
          sheetArray[i] = '????????????';
          break;
        case 'WXSenceTimeline':
          sheetArray[i] = '???????????????';
          break;
        case 'WXSceneFavorite':
          sheetArray[i] = '????????????';
          break;
        case 0:
          sheetArray[i] = '????????????';
          break;
        case 1:
          sheetArray[i] = '?????????';
          break;
        case 2:
          sheetArray[i] = '?????????';
          break;
        case 3:
          sheetArray[i] = '??????';
          break;
        case 4:
          sheetArray[i] = '??????';
          break;
        case 5:
          sheetArray[i] = '?????????';
          break;
        default:
          break;}

    }
    this.showActionSheet(sheetArray, cb);
  },
  showActionSheet: function showActionSheet(sheetArray, cb) {
    uni.showActionSheet({
      itemList: sheetArray,
      success: function success(e) {
        if (cb && typeof cb == 'function') cb(e.tapIndex);
      } });

  },
  getProvider: function getProvider(type, cb, sheet) {
    var _this = this;
    uni.getProvider({
      service: type,
      success: function success(res) {
        if (sheet) {
          var obj = {};
          obj.array = res.provider;
          _this.actionSheet(obj, function (index) {
            if (cb && typeof cb == "function") cb(res.provider[index]);
          });
        } else {
          if (type == 'payment') {
            var providers = res.provider;
            var payTypeArray = [];
            for (var i = 0; i < providers.length; i++) {
              if (providers[i] == 'wxpay') {
                payTypeArray[i] = {
                  name: '????????????',
                  value: providers[i],
                  img: '/static/image/wei.png' };

              } else if (providers[i] == 'alipay') {
                payTypeArray[i] = {
                  name: "???????????????",
                  value: providers[i],
                  img: '/static/image/ali.png' };

              }
            }
            if (cb && typeof cb == "function") cb(payTypeArray);
          } else {
            if (cb && typeof cb == "function") cb(res);
          }
        }
      } });

  } };



















































































































































































function checkMPUrl(url) {

  if (
  url.substring(0, 4) === 'http' &&
  url.substring(0, 12) !== 'http://store' &&
  url.substring(0, 10) !== 'http://tmp' &&
  url.substring(0, 5) !== 'https')
  {
    url = 'https' + url.substring(4, url.length);
  }

  return url;
}

module.exports = _app;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 228:
/*!***************************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/components/QS-SharePoster/QRCodeAlg.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = QRCodeAlg; /**
                                                                                                            * ?????????????????????utf8??????
                                                                                                            * unicode BMP?????????65535?????????
                                                                                                            * @param {num} code
                                                                                                            * return {array}
                                                                                                            */
function unicodeFormat8(code) {
  // 1 byte
  var c0, c1, c2;
  if (code < 128) {
    return [code];
    // 2 bytes
  } else if (code < 2048) {
    c0 = 192 + (code >> 6);
    c1 = 128 + (code & 63);
    return [c0, c1];
    // 3 bytes
  } else {
    c0 = 224 + (code >> 12);
    c1 = 128 + (code >> 6 & 63);
    c2 = 128 + (code & 63);
    return [c0, c1, c2];
  }
}
/**
   * ??????????????????utf8???????????????
   * @param {string} string
   * @return {array}
   */
function getUTF8Bytes(string) {
  var utf8codes = [];
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    var utf8 = unicodeFormat8(code);
    for (var j = 0; j < utf8.length; j++) {
      utf8codes.push(utf8[j]);
    }
  }
  return utf8codes;
}
/**
   * ?????????????????????
   * @param {string} data              ???????????????????????????
   * @param {num} errorCorrectLevel ????????????
   */
function QRCodeAlg(data, errorCorrectLevel) {
  this.typeNumber = -1; //??????
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null; //?????????????????????????????????
  this.moduleCount = 0; //????????????
  this.dataCache = null; //????????????
  this.rsBlocks = null; //??????????????????
  this.totalDataCount = -1; //?????????????????????
  this.data = data;
  this.utf8bytes = getUTF8Bytes(data);
  this.make();
}
QRCodeAlg.prototype = {
  constructor: QRCodeAlg,
  /**
                           * ???????????????????????????
                           * @return {num} ????????????
                           */
  getModuleCount: function getModuleCount() {
    return this.moduleCount;
  },
  /**
      * ??????
      */
  make: function make() {
    this.getRightType();
    this.dataCache = this.createData();
    this.createQrcode();
  },
  /**
      * ??????????????????????????????
      * @param  {bool} test ???????????????????????????????????????
      * @param  {num} maskPattern ???????????????
      */
  makeImpl: function makeImpl(maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);
    for (var row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);
    }
    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(true, maskPattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(true);
    }
    this.mapData(this.dataCache, maskPattern);
  },
  /**
      * ????????????????????????????????????
      * @param  {num} row ??????????????????????????????
      * @param  {num} col ??????????????????????????????
      */
  setupPositionProbePattern: function setupPositionProbePattern(row, col) {
    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r) continue;
      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c) continue;
        if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          this.modules[row + r][col + c] = true;
        } else {
          this.modules[row + r][col + c] = false;
        }
      }
    }
  },
  /**
      * ???????????????
      * @return {[type]} [description]
      */
  createQrcode: function createQrcode() {
    var minLostPoint = 0;
    var pattern = 0;
    var bestModules = null;
    for (var i = 0; i < 8; i++) {
      this.makeImpl(i);
      var lostPoint = QRUtil.getLostPoint(this);
      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
        bestModules = this.modules;
      }
    }
    this.modules = bestModules;
    this.setupTypeInfo(false, pattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(false);
    }
  },
  /**
      * ??????????????????
      * @return {[type]} [description]
      */
  setupTimingPattern: function setupTimingPattern() {
    for (var r = 8; r < this.moduleCount - 8; r++) {
      if (this.modules[r][6] != null) {
        continue;
      }
      this.modules[r][6] = r % 2 == 0;
      if (this.modules[6][r] != null) {
        continue;
      }
      this.modules[6][r] = r % 2 == 0;
    }
  },
  /**
      * ??????????????????
      * @return {[type]} [description]
      */
  setupPositionAdjustPattern: function setupPositionAdjustPattern() {
    var pos = QRUtil.getPatternPosition(this.typeNumber);
    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];
        if (this.modules[row][col] != null) {
          continue;
        }
        for (var r = -2; r <= 2; r++) {
          for (var c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  },
  /**
      * ?????????????????????7?????????????????????
      * @param  {bool} test ????????????????????????????????????
      * @return {[type]}      [description]
      */
  setupTypeNumber: function setupTypeNumber(test) {
    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  },
  /**
      * ???????????????????????????????????????????????????
      * @param  {bool} test
      * @param  {num} maskPattern ????????????
      * @return {}
      */
  setupTypeInfo: function setupTypeInfo(test, maskPattern) {
    var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data);
    // vertical
    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
      // horizontal
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 8) {
        this.modules[8][this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i - 1] = mod;
      }
    }
    // fixed module
    this.modules[this.moduleCount - 8][8] = !test;
  },
  /**
      * ????????????
      * @return {[type]} [description]
      */
  createData: function createData() {
    var buffer = new QRBitBuffer();
    var lengthBits = this.typeNumber > 9 ? 16 : 8;
    buffer.put(4, 4); //????????????
    buffer.put(this.utf8bytes.length, lengthBits);
    for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
      buffer.put(this.utf8bytes[i], 8);
    }
    if (buffer.length + 4 <= this.totalDataCount * 8) {
      buffer.put(0, 4);
    }
    // padding
    while (buffer.length % 8 != 0) {
      buffer.putBit(false);
    }
    // padding
    while (true) {
      if (buffer.length >= this.totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeAlg.PAD0, 8);
      if (buffer.length >= this.totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeAlg.PAD1, 8);
    }
    return this.createBytes(buffer);
  },
  /**
      * ???????????????
      * @param  {buffer} buffer ????????????
      * @return {[type]}
      */
  createBytes: function createBytes(buffer) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var length = this.rsBlock.length / 3;
    var rsBlocks = new Array();
    for (var i = 0; i < length; i++) {
      var count = this.rsBlock[i * 3 + 0];
      var totalCount = this.rsBlock[i * 3 + 1];
      var dataCount = this.rsBlock[i * 3 + 2];
      for (var j = 0; j < count; j++) {
        rsBlocks.push([dataCount, totalCount]);
      }
    }
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r = 0; r < rsBlocks.length; r++) {
      var dcCount = rsBlocks[r][0];
      var ecCount = rsBlocks[r][1] - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r] = new Array(dcCount);
      for (var i = 0; i < dcdata[r].length; i++) {
        dcdata[r][i] = 0xff & buffer.buffer[i + offset];
      }
      offset += dcCount;
      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (var i = 0; i < ecdata[r].length; i++) {
        var modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    var data = new Array(this.totalDataCount);
    var index = 0;
    for (var i = 0; i < maxDcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < dcdata[r].length) {
          data[index++] = dcdata[r][i];
        }
      }
    }
    for (var i = 0; i < maxEcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < ecdata[r].length) {
          data[index++] = ecdata[r][i];
        }
      }
    }
    return data;

  },
  /**
      * ?????????????????????????????????
      * @param  {} data
      * @param  {} maskPattern
      * @return {}
      */
  mapData: function mapData(data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;
      while (true) {
        for (var c = 0; c < 2; c++) {
          if (this.modules[row][col - c] == null) {
            var dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }
            var mask = QRUtil.getMask(maskPattern, row, col - c);
            if (mask) {
              dark = !dark;
            }
            this.modules[row][col - c] = dark;
            bitIndex--;
            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  } };

/**
        * ????????????
        */
QRCodeAlg.PAD0 = 0xEC;
QRCodeAlg.PAD1 = 0x11;
//---------------------------------------------------------------------
// ???????????????????????????
//---------------------------------------------------------------------
var QRErrorCorrectLevel = [1, 0, 3, 2];
//---------------------------------------------------------------------
// ????????????
//---------------------------------------------------------------------
var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7 };

//---------------------------------------------------------------------
// ?????????
//---------------------------------------------------------------------
var QRUtil = {
  /*
               ?????????????????????????????????
                */
  PATTERN_POSITION_TABLE: [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170]],

  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
  /*
                                                           BCH??????????????????
                                                            */
  getBCHTypeInfo: function getBCHTypeInfo(data) {
    var d = data << 10;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }
    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },
  /*
     BCH??????????????????
      */
  getBCHTypeNumber: function getBCHTypeNumber(data) {
    var d = data << 12;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }
    return data << 12 | d;
  },
  /*
     ??????BCH?????????
      */
  getBCHDigit: function getBCHDigit(data) {
    var digit = 0;
    while (data != 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  },
  /*
     ???????????????????????????????????????
      */
  getPatternPosition: function getPatternPosition(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  /*
     ????????????
      */
  getMask: function getMask(maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;
      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;
      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;
      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;
      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;
      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;
      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern);}

  },
  /*
     ??????RS??????????????????
      */
  getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
    var a = new QRPolynomial([1], 0);
    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
    }
    return a;
  },
  /*
     ????????????
      */
  getLostPoint: function getLostPoint(qrCode) {
    var moduleCount = qrCode.getModuleCount(),
    lostPoint = 0,
    darkCount = 0;
    for (var row = 0; row < moduleCount; row++) {
      var sameCount = 0;
      var head = qrCode.modules[row][0];
      for (var col = 0; col < moduleCount; col++) {
        var current = qrCode.modules[row][col];
        //level 3 ??????
        if (col < moduleCount - 6) {
          if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
            if (col < moduleCount - 10) {
              if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                lostPoint += 40;
              }
            } else if (col > 3) {
              if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                lostPoint += 40;
              }
            }
          }
        }
        //level 2 ??????
        if (row < moduleCount - 1 && col < moduleCount - 1) {
          var count = 0;
          if (current) count++;
          if (qrCode.modules[row + 1][col]) count++;
          if (qrCode.modules[row][col + 1]) count++;
          if (qrCode.modules[row + 1][col + 1]) count++;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
        //level 1 ??????
        if (head ^ current) {
          sameCount++;
        } else {
          head = current;
          if (sameCount >= 5) {
            lostPoint += 3 + sameCount - 5;
          }
          sameCount = 1;
        }
        //level 4 ??????
        if (current) {
          darkCount++;
        }
      }
    }
    for (var col = 0; col < moduleCount; col++) {
      var sameCount = 0;
      var head = qrCode.modules[0][col];
      for (var row = 0; row < moduleCount; row++) {
        var current = qrCode.modules[row][col];
        //level 3 ??????
        if (row < moduleCount - 6) {
          if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
            if (row < moduleCount - 10) {
              if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                lostPoint += 40;
              }
            } else if (row > 3) {
              if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                lostPoint += 40;
              }
            }
          }
        }
        //level 1 ??????
        if (head ^ current) {
          sameCount++;
        } else {
          head = current;
          if (sameCount >= 5) {
            lostPoint += 3 + sameCount - 5;
          }
          sameCount = 1;
        }
      }
    }
    // LEVEL4
    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  } };


//---------------------------------------------------------------------
// QRMath?????????????????????
//---------------------------------------------------------------------
var QRMath = {
  /*
               ???n?????????a^m
                */
  glog: function glog(n) {
    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }
    return QRMath.LOG_TABLE[n];
  },
  /*
     ???a^m?????????n
      */
  gexp: function gexp(n) {
    while (n < 0) {
      n += 255;
    }
    while (n >= 256) {
      n -= 255;
    }
    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256) };


for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}
//---------------------------------------------------------------------
// QRPolynomial ?????????
//---------------------------------------------------------------------
/**
 * ????????????
 * @param {Array} num   ??????
 * @param {num} shift a^shift
 */
function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }
  var offset = 0;
  while (offset < num.length && num[offset] == 0) {
    offset++;
  }
  this.num = new Array(num.length - offset + shift);
  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}
QRPolynomial.prototype = {
  get: function get(index) {
    return this.num[index];
  },
  getLength: function getLength() {
    return this.num.length;
  },
  /**
      * ???????????????
      * @param  {QRPolynomial} e ???????????????
      * @return {[type]}   [description]
      */
  multiply: function multiply(e) {
    var num = new Array(this.getLength() + e.getLength() - 1);
    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
      }
    }
    return new QRPolynomial(num, 0);
  },
  /**
      * ??????????????????
      * @param  {QRPolynomial} e ????????????
      * @return {}
      */
  mod: function mod(e) {
    var tl = this.getLength(),
    el = e.getLength();
    if (tl - el < 0) {
      return this;
    }
    var num = new Array(tl);
    for (var i = 0; i < tl; i++) {
      num[i] = this.get(i);
    }
    while (num.length >= el) {
      var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

      for (var i = 0; i < e.getLength(); i++) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
      }
      while (num[0] == 0) {
        num.shift();
      }
    }
    return new QRPolynomial(num, 0);
  } };


//---------------------------------------------------------------------
// RS_BLOCK_TABLE
//---------------------------------------------------------------------
/*
???????????????????????????[??????, ????????????????????????, ????????????????????????]
 */
var RS_BLOCK_TABLE = [
// L
// M
// Q
// H
// 1
[1, 26, 19],
[1, 26, 16],
[1, 26, 13],
[1, 26, 9],

// 2
[1, 44, 34],
[1, 44, 28],
[1, 44, 22],
[1, 44, 16],

// 3
[1, 70, 55],
[1, 70, 44],
[2, 35, 17],
[2, 35, 13],

// 4
[1, 100, 80],
[2, 50, 32],
[2, 50, 24],
[4, 25, 9],

// 5
[1, 134, 108],
[2, 67, 43],
[2, 33, 15, 2, 34, 16],
[2, 33, 11, 2, 34, 12],

// 6
[2, 86, 68],
[4, 43, 27],
[4, 43, 19],
[4, 43, 15],

// 7
[2, 98, 78],
[4, 49, 31],
[2, 32, 14, 4, 33, 15],
[4, 39, 13, 1, 40, 14],

// 8
[2, 121, 97],
[2, 60, 38, 2, 61, 39],
[4, 40, 18, 2, 41, 19],
[4, 40, 14, 2, 41, 15],

// 9
[2, 146, 116],
[3, 58, 36, 2, 59, 37],
[4, 36, 16, 4, 37, 17],
[4, 36, 12, 4, 37, 13],

// 10
[2, 86, 68, 2, 87, 69],
[4, 69, 43, 1, 70, 44],
[6, 43, 19, 2, 44, 20],
[6, 43, 15, 2, 44, 16],

// 11
[4, 101, 81],
[1, 80, 50, 4, 81, 51],
[4, 50, 22, 4, 51, 23],
[3, 36, 12, 8, 37, 13],

// 12
[2, 116, 92, 2, 117, 93],
[6, 58, 36, 2, 59, 37],
[4, 46, 20, 6, 47, 21],
[7, 42, 14, 4, 43, 15],

// 13
[4, 133, 107],
[8, 59, 37, 1, 60, 38],
[8, 44, 20, 4, 45, 21],
[12, 33, 11, 4, 34, 12],

// 14
[3, 145, 115, 1, 146, 116],
[4, 64, 40, 5, 65, 41],
[11, 36, 16, 5, 37, 17],
[11, 36, 12, 5, 37, 13],

// 15
[5, 109, 87, 1, 110, 88],
[5, 65, 41, 5, 66, 42],
[5, 54, 24, 7, 55, 25],
[11, 36, 12],

// 16
[5, 122, 98, 1, 123, 99],
[7, 73, 45, 3, 74, 46],
[15, 43, 19, 2, 44, 20],
[3, 45, 15, 13, 46, 16],

// 17
[1, 135, 107, 5, 136, 108],
[10, 74, 46, 1, 75, 47],
[1, 50, 22, 15, 51, 23],
[2, 42, 14, 17, 43, 15],

// 18
[5, 150, 120, 1, 151, 121],
[9, 69, 43, 4, 70, 44],
[17, 50, 22, 1, 51, 23],
[2, 42, 14, 19, 43, 15],

// 19
[3, 141, 113, 4, 142, 114],
[3, 70, 44, 11, 71, 45],
[17, 47, 21, 4, 48, 22],
[9, 39, 13, 16, 40, 14],

// 20
[3, 135, 107, 5, 136, 108],
[3, 67, 41, 13, 68, 42],
[15, 54, 24, 5, 55, 25],
[15, 43, 15, 10, 44, 16],

// 21
[4, 144, 116, 4, 145, 117],
[17, 68, 42],
[17, 50, 22, 6, 51, 23],
[19, 46, 16, 6, 47, 17],

// 22
[2, 139, 111, 7, 140, 112],
[17, 74, 46],
[7, 54, 24, 16, 55, 25],
[34, 37, 13],

// 23
[4, 151, 121, 5, 152, 122],
[4, 75, 47, 14, 76, 48],
[11, 54, 24, 14, 55, 25],
[16, 45, 15, 14, 46, 16],

// 24
[6, 147, 117, 4, 148, 118],
[6, 73, 45, 14, 74, 46],
[11, 54, 24, 16, 55, 25],
[30, 46, 16, 2, 47, 17],

// 25
[8, 132, 106, 4, 133, 107],
[8, 75, 47, 13, 76, 48],
[7, 54, 24, 22, 55, 25],
[22, 45, 15, 13, 46, 16],

// 26
[10, 142, 114, 2, 143, 115],
[19, 74, 46, 4, 75, 47],
[28, 50, 22, 6, 51, 23],
[33, 46, 16, 4, 47, 17],

// 27
[8, 152, 122, 4, 153, 123],
[22, 73, 45, 3, 74, 46],
[8, 53, 23, 26, 54, 24],
[12, 45, 15, 28, 46, 16],

// 28
[3, 147, 117, 10, 148, 118],
[3, 73, 45, 23, 74, 46],
[4, 54, 24, 31, 55, 25],
[11, 45, 15, 31, 46, 16],

// 29
[7, 146, 116, 7, 147, 117],
[21, 73, 45, 7, 74, 46],
[1, 53, 23, 37, 54, 24],
[19, 45, 15, 26, 46, 16],

// 30
[5, 145, 115, 10, 146, 116],
[19, 75, 47, 10, 76, 48],
[15, 54, 24, 25, 55, 25],
[23, 45, 15, 25, 46, 16],

// 31
[13, 145, 115, 3, 146, 116],
[2, 74, 46, 29, 75, 47],
[42, 54, 24, 1, 55, 25],
[23, 45, 15, 28, 46, 16],

// 32
[17, 145, 115],
[10, 74, 46, 23, 75, 47],
[10, 54, 24, 35, 55, 25],
[19, 45, 15, 35, 46, 16],

// 33
[17, 145, 115, 1, 146, 116],
[14, 74, 46, 21, 75, 47],
[29, 54, 24, 19, 55, 25],
[11, 45, 15, 46, 46, 16],

// 34
[13, 145, 115, 6, 146, 116],
[14, 74, 46, 23, 75, 47],
[44, 54, 24, 7, 55, 25],
[59, 46, 16, 1, 47, 17],

// 35
[12, 151, 121, 7, 152, 122],
[12, 75, 47, 26, 76, 48],
[39, 54, 24, 14, 55, 25],
[22, 45, 15, 41, 46, 16],

// 36
[6, 151, 121, 14, 152, 122],
[6, 75, 47, 34, 76, 48],
[46, 54, 24, 10, 55, 25],
[2, 45, 15, 64, 46, 16],

// 37
[17, 152, 122, 4, 153, 123],
[29, 74, 46, 14, 75, 47],
[49, 54, 24, 10, 55, 25],
[24, 45, 15, 46, 46, 16],

// 38
[4, 152, 122, 18, 153, 123],
[13, 74, 46, 32, 75, 47],
[48, 54, 24, 14, 55, 25],
[42, 45, 15, 32, 46, 16],

// 39
[20, 147, 117, 4, 148, 118],
[40, 75, 47, 7, 76, 48],
[43, 54, 24, 22, 55, 25],
[10, 45, 15, 67, 46, 16],

// 40
[19, 148, 118, 6, 149, 119],
[18, 75, 47, 31, 76, 48],
[34, 54, 24, 34, 55, 25],
[20, 45, 15, 61, 46, 16]];


/**
                            * ??????????????????????????????
                            * @return {[type]} [description]
                            */
QRCodeAlg.prototype.getRightType = function () {
  for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
    var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
    if (rsBlock == undefined) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
    }
    var length = rsBlock.length / 3;
    var totalDataCount = 0;
    for (var i = 0; i < length; i++) {
      var count = rsBlock[i * 3 + 0];
      var dataCount = rsBlock[i * 3 + 2];
      totalDataCount += dataCount * count;
    }
    var lengthBytes = typeNumber > 9 ? 2 : 1;
    if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
      this.typeNumber = typeNumber;
      this.rsBlock = rsBlock;
      this.totalDataCount = totalDataCount;
      break;
    }
  }
};

//---------------------------------------------------------------------
// QRBitBuffer
//---------------------------------------------------------------------
function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}
QRBitBuffer.prototype = {
  get: function get(index) {
    var bufIndex = Math.floor(index / 8);
    return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
  },
  put: function put(num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(num >>> length - i - 1 & 1);
    }
  },
  putBit: function putBit(bit) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }
    this.length++;
  } };

/***/ }),

/***/ 261:
/*!***************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/util/QS-SharePoster/app.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var _log = console.log; // ??????????????????APP.vue????????????onlaunch????????? console.log = ()=> {} ?????????????????????????????????
//log = ()=>{};	// ????????????????????????????????????????????????
var _app = {
  //????????????
  log: function log(t) {
    _log(t);
  }, // ????????????,
  showLoading: function showLoading(msg, ifmask) {
    uni.showLoading({
      title: msg,
      mask: ifmask || false });

  },
  hideLoading: function hideLoading() {
    uni.hideLoading();
  },
  showToast: function showToast(msg, icon) {
    uni.showToast({
      title: msg,
      icon: icon || 'none' });

  },
  getPosterUrl: function getPosterUrl(objs) {// ????????????????????????url????????????
    var
    backgroundImage =


    objs.backgroundImage,type = objs.type,formData = objs.formData;
    return new Promise(function (rs, rj) {
      var image;
      if (backgroundImage) {
        image = backgroundImage;
      } else {
        switch (type) {//??????type???????????????, ???????????????request??????
          case 1:
            image = '';
            break;
          default:
            image = 'https://lailemefresh.oss-cn-shanghai.aliyuncs.com/imgs/ePACQjD6PP2CcwY.png';
            break;}

      }
      if (image) {
        rs(image); // resolve???????????????
      } else {
        rj('???????????????????????????');
      }
    });
  },






  //????????????????????????
  shareTypeListSheetArray: {
    array: [0, 1, 2, 3, 4, 5] },
  // ???????????? 0-???????????? 1-????????? 2-????????? 3-?????? 4-?????? 5-?????????
  isArray: function isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  },
  isObject: function isObject(arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
  },
  isPromise: function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isUndefined: function isUndefined(arg) {
    return arg === undefined;
  },
  isUndef: function isUndef(arg) {
    return arg === undefined;
  },
  isNotNull_string: function isNotNull_string(arg) {
    return arg !== null && arg !== undefined && arg !== '';
  },
  isFn: function isFn(fn) {
    return fn && typeof fn === 'function';
  },
  getStorage: function getStorage(key, scb, fcb) {
    uni.getStorage({
      key: key,
      success: function success(res) {
        if (res.data && res.data != "") {
          if (scb) scb(res.data);
        } else {
          if (fcb) fcb();
        }
      },
      fail: function fail() {
        if (fcb) fcb();
      } });

  },
  setStorage: function setStorage(key, data) {
    _log('????????????');
    _log('key???' + key);
    _log('data???' + JSON.stringify(data));
    uni.setStorage({
      key: key,
      data: data });

  },
  setStorageSync: function setStorageSync(key, data) {
    uni.setStorageSync(key, data);
  },
  getStorageSync: function getStorageSync(key) {
    return uni.getStorageSync(key);
  },
  clearStorageSync: function clearStorageSync() {
    uni.clearStorageSync();
  },
  removeStorageSync: function removeStorageSync(key) {
    uni.removeStorageSync(key);
  },
  getImageInfo: function getImageInfo(url, cb, fcb) {
    url = checkMPUrl(url);
    uni.getImageInfo({
      src: url,
      success: function success(res) {
        if (cb && typeof cb == 'function') cb(res);
      },
      fail: function fail(err) {
        if (fcb && typeof fcb == 'function') fcb(err);
      } });

  },
  downloadFile: function downloadFile(url, cb) {
    url = checkMPUrl(url);
    uni.downloadFile({
      url: url,
      success: function success(res) {
        if (cb && typeof cb == 'function') cb(res);
      } });

  },
  downloadFile_PromiseFc: function downloadFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      if (url.substring(0, 4) !== 'http') {
        rs(url);
      } else {
        url = checkMPUrl(url);
        _log('url:' + url);
        uni.downloadFile({
          url: url,
          success: function success(res) {
            if (res && res.tempFilePath)
            rs(res.tempFilePath);else

            rj('not find tempFilePath');
          },
          fail: function fail(err) {
            rj(err);
          } });

      }
    });
  },
  saveFile: function saveFile(url) {
    uni.saveFile({
      tempFilePath: url,
      success: function success(res) {
        _log('????????????:' + JSON.stringify(res));
      } });

  },
  downLoadAndSaveFile_PromiseFc: function downLoadAndSaveFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      _log('???????????????????????????:' + url);
      if (url.substring(0, 4) === 'http') {
        url = checkMPUrl(url);
        uni.downloadFile({
          url: url,
          success: function success(d_res) {
            _log('????????????????????????' + JSON.stringify(d_res));
            if (d_res && d_res.tempFilePath) {






              uni.saveFile({
                tempFilePath: d_res.tempFilePath,
                success: function success(s_res) {
                  _log('?????????????????????:' + JSON.stringify(s_res));
                  if (s_res && s_res.savedFilePath)
                  rs(s_res.savedFilePath);else

                  rs(d_res.tempFilePath);
                },
                fail: function fail(err) {
                  rs(d_res.tempFilePath);
                } });



            } else {
              rj('not find tempFilePath');
            }
          },
          fail: function fail(err) {
            rj(err);
          } });

      } else {
        rs(url);
      }
    });
  },
  checkFile_PromiseFc: function checkFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      uni.getSavedFileList({
        success: function success(res) {
          var d = res.fileList;
          var index = d.findIndex(function (item) {
            return item.filePath === url;
          });
          rs(index);
        },
        fail: function fail(err) {
          rj(err);
        } });

    });
  },
  removeSavedFile: function removeSavedFile(path) {
    uni.getSavedFileList({
      success: function success(res) {
        var d = res.fileList;
        var index = d.findIndex(function (item) {
          return item.filePath === path;
        });
        if (index >= 0)
        uni.removeSavedFile({
          filePath: path });

      } });

  },
  fileNameInPath: function fileNameInPath(path) {
    var s = path.split("/");
    return s[s.length - 1];
  },
  getImageInfo_PromiseFc: function getImageInfo_PromiseFc(imgPath) {
    return new Promise(function (rs, rj) {
      _log('????????????????????????:' + imgPath);
      imgPath = checkMPUrl(imgPath);
      uni.getImageInfo({
        src: imgPath,
        success: function success(res) {
          _log('????????????????????????:' + JSON.stringify(res));
          rs(res);
        },
        fail: function fail(err) {
          _log('????????????????????????:' + JSON.stringify(err));
          rj(err);
        } });

    });
  },
  previewImage: function previewImage(urls) {
    if (typeof urls == 'string')
    urls = [urls];
    uni.previewImage({
      urls: urls });

  },
  actionSheet: function actionSheet(obj, cb) {
    var sheetArray = [];
    for (var i = 0; i < obj.array.length; i++) {
      switch (obj.array[i]) {
        case 'sinaweibo':
          sheetArray[i] = '????????????';
          break;
        case 'qq':
          sheetArray[i] = 'QQ';
          break;
        case 'weixin':
          sheetArray[i] = '??????';
          break;
        case 'WXSceneSession':
          sheetArray[i] = '????????????';
          break;
        case 'WXSenceTimeline':
          sheetArray[i] = '???????????????';
          break;
        case 'WXSceneFavorite':
          sheetArray[i] = '????????????';
          break;
        case 0:
          sheetArray[i] = '????????????';
          break;
        case 1:
          sheetArray[i] = '?????????';
          break;
        case 2:
          sheetArray[i] = '?????????';
          break;
        case 3:
          sheetArray[i] = '??????';
          break;
        case 4:
          sheetArray[i] = '??????';
          break;
        case 5:
          sheetArray[i] = '?????????';
          break;
        default:
          break;}

    }
    this.showActionSheet(sheetArray, cb);
  },
  showActionSheet: function showActionSheet(sheetArray, cb) {
    uni.showActionSheet({
      itemList: sheetArray,
      success: function success(e) {
        if (cb && typeof cb == 'function') cb(e.tapIndex);
      } });

  },
  getProvider: function getProvider(type, cb, sheet) {
    var _this = this;
    uni.getProvider({
      service: type,
      success: function success(res) {
        if (sheet) {
          var obj = {};
          obj.array = res.provider;
          _this.actionSheet(obj, function (index) {
            if (cb && typeof cb == "function") cb(res.provider[index]);
          });
        } else {
          if (type == 'payment') {
            var providers = res.provider;
            var payTypeArray = [];
            for (var i = 0; i < providers.length; i++) {
              if (providers[i] == 'wxpay') {
                payTypeArray[i] = {
                  name: '????????????',
                  value: providers[i],
                  img: '/static/image/wei.png' };

              } else if (providers[i] == 'alipay') {
                payTypeArray[i] = {
                  name: "???????????????",
                  value: providers[i],
                  img: '/static/image/ali.png' };

              }
            }
            if (cb && typeof cb == "function") cb(payTypeArray);
          } else {
            if (cb && typeof cb == "function") cb(res);
          }
        }
      } });

  } };



















































































































































































function checkMPUrl(url) {

  if (
  url.substring(0, 4) === 'http' &&
  url.substring(0, 12) !== 'http://store' &&
  url.substring(0, 10) !== 'http://tmp' &&
  url.substring(0, 5) !== 'https')
  {
    url = 'https' + url.substring(4, url.length);
  }

  return url;
}

module.exports = _app;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 262:
/*!**************************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/util/QS-SharePoster/QS-SharePoster.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 5));var _app2 = _interopRequireDefault(__webpack_require__(/*! ./app.js */ 261));
var _QRCodeAlg = _interopRequireDefault(__webpack_require__(/*! ./QRCodeAlg.js */ 263));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var ShreUserPosterBackgroundKey = 'ShrePosterBackground_'; // ??????????????????????????????
var idKey = 'QSSHAREPOSTER_IDKEY'; //drawArray???????????????idkey
var isMp = false;

isMp = true;



// export default 
function getSharePoster(obj) {
  return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve, reject) {var result1, result2;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (

                returnPromise(obj));case 3:result1 = _context.sent;
              resolve(result1);_context.next = 21;break;case 7:_context.prev = 7;_context.t0 = _context["catch"](0);

              //TODO handle the exception
              removePosterStorage(obj.type);_context.prev = 10;

              _app2.default.log('------------???????????????, ?????????????????????------------');_context.next = 14;return (
                returnPromise(obj));case 14:result2 = _context.sent;
              resolve(result2);_context.next = 21;break;case 18:_context.prev = 18;_context.t1 = _context["catch"](10);

              //TODO handle the exception
              reject(_context.t1);case 21:case "end":return _context.stop();}}}, _callee, null, [[0, 7], [10, 18]]);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());




}

function returnPromise(obj) {var

  type =

















  obj.type,formData = obj.formData,background = obj.background,posterCanvasId = obj.posterCanvasId,backgroundImage = obj.backgroundImage,reserve = obj.reserve,textArray = obj.textArray,drawArray = obj.drawArray,qrCodeArray = obj.qrCodeArray,imagesArray = obj.imagesArray,setCanvasWH = obj.setCanvasWH,setCanvasToTempFilePath = obj.setCanvasToTempFilePath,setDraw = obj.setDraw,bgScale = obj.bgScale,Context = obj.Context,_this = obj._this,delayTimeScale = obj.delayTimeScale,drawDelayTime = obj.drawDelayTime;
  return new Promise( /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(rs, rj) {var bgObj, params, i, hasAllInfoCallback, _i, drawArrayItem, newData, drawArray_copy, _i2, item, _newData, item_idKey, poster;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;

              _app2.default.showLoading('????????????????????????');
              if (!Context) {
                _app2.default.log('??????????????????,??????????????????');
                Context = uni.createCanvasContext(posterCanvasId, _this || null);
              }if (!(

              background && background.width && background.height)) {_context2.next = 7;break;}
              bgObj = background;_context2.next = 10;break;case 7:_context2.next = 9;return (

                getShreUserPosterBackground({
                  backgroundImage: backgroundImage,
                  type: type,
                  formData: formData }));case 9:bgObj = _context2.sent;case 10:


              // ??????ios ????????????
              bgScale = bgScale || .75;
              bgObj.width = bgObj.width * bgScale;
              bgObj.height = bgObj.height * bgScale;

              _app2.default.log('?????????????????????????????????:' + JSON.stringify(bgObj));
              params = {
                bgObj: bgObj,
                type: type,
                bgScale: bgScale };

              if (setCanvasWH && typeof setCanvasWH == 'function') setCanvasWH(params);if (!
              imagesArray) {_context2.next = 24;break;}
              if (typeof imagesArray == 'function')
              imagesArray = imagesArray(params);
              _app2.default.showLoading('??????????????????????????????????????????');
              _app2.default.log('??????????????????');_context2.next = 22;return (
                setImage(imagesArray));case 22:imagesArray = _context2.sent;
              _app2.default.hideLoading();case 24:

              if (textArray) {
                if (typeof textArray == 'function')
                textArray = textArray(params);
                textArray = setText(Context, textArray);

              }if (!
              qrCodeArray) {_context2.next = 39;break;}
              if (typeof qrCodeArray == 'function')
              qrCodeArray = qrCodeArray(params);
              _app2.default.showLoading('??????????????????????????????????????????');
              i = 0;case 29:if (!(i < qrCodeArray.length)) {_context2.next = 38;break;}
              _app2.default.log(i);if (!
              qrCodeArray[i].image) {_context2.next = 35;break;}_context2.next = 34;return (
                _app2.default.downloadFile_PromiseFc(qrCodeArray[i].image));case 34:qrCodeArray[i].image = _context2.sent;case 35:i++;_context2.next = 29;break;case 38:

              _app2.default.hideLoading();case 39:if (!

              drawArray) {_context2.next = 94;break;}
              if (typeof drawArray == 'function') {
                drawArray = drawArray(params);
              }if (!
              _app2.default.isPromise(drawArray)) {_context2.next = 45;break;}_context2.next = 44;return (
                drawArray);case 44:drawArray = _context2.sent;case 45:if (!(


              _app2.default.isArray(drawArray) && drawArray.length > 0)) {_context2.next = 94;break;}
              hasAllInfoCallback = false;
              _i = 0;case 48:if (!(_i < drawArray.length)) {_context2.next = 76;break;}
              drawArrayItem = drawArray[_i];
              if (_app2.default.isFn(drawArrayItem.allInfoCallback) && !hasAllInfoCallback) hasAllInfoCallback = true;
              drawArrayItem[idKey] = _i;
              newData = void 0;_context2.t0 =
              drawArrayItem.type;_context2.next = _context2.t0 ===
              'image' ? 56 : _context2.t0 ===


              'text' ? 60 : _context2.t0 ===


              'qrcode' ? 62 : _context2.t0 ===





              'custom' ? 68 : 69;break;case 56:_context2.next = 58;return setImage(drawArrayItem);case 58:newData = _context2.sent;return _context2.abrupt("break", 71);case 60:newData = setText(Context, drawArrayItem);return _context2.abrupt("break", 71);case 62:if (!drawArrayItem.image) {_context2.next = 67;break;}_context2.next = 65;return _app2.default.downloadFile_PromiseFc(drawArrayItem.image);case 65:_context2.t1 = _context2.sent;newData = { image: _context2.t1 };case 67:return _context2.abrupt("break", 71);case 68:return _context2.abrupt("break", 71);case 69:


              _app2.default.log('??????????????????');return _context2.abrupt("break", 71);case 71:


              if (newData && _app2.default.isObject(newData)) {
                drawArray[_i] = _objectSpread(_objectSpread({}, drawArrayItem),
                newData);

              };case 73:_i++;_context2.next = 48;break;case 76:if (!


              hasAllInfoCallback) {_context2.next = 94;break;}
              _app2.default.log('----------------hasAllInfoCallback----------------');
              drawArray_copy = _toConsumableArray(drawArray);
              drawArray_copy.sort(function (a, b) {
                var a_serialNum = !_app2.default.isUndef(a.serialNum) && !_app2.default.isNull(a.serialNum) ? Number(a.serialNum) : Number.NEGATIVE_INFINITY;
                var b_serialNum = !_app2.default.isUndef(b.serialNum) && !_app2.default.isNull(b.serialNum) ? Number(b.serialNum) : Number.NEGATIVE_INFINITY;
                return a_serialNum - b_serialNum;
              });

              _i2 = 0;case 81:if (!(_i2 < drawArray_copy.length)) {_context2.next = 94;break;}
              item = _objectSpread({}, drawArray_copy[_i2]);if (!

              _app2.default.isFn(item.allInfoCallback)) {_context2.next = 91;break;}
              _newData = item.allInfoCallback({
                drawArray: drawArray_copy });if (!

              _app2.default.isPromise(_newData)) {_context2.next = 89;break;}_context2.next = 88;return _newData;case 88:_newData = _context2.sent;case 89:
              item_idKey = item[idKey];
              if (!_app2.default.isUndef(item_idKey)) {
                drawArray[item[idKey]] = _objectSpread(_objectSpread({}, item),
                _newData);

              } else {
                console.log('???????????? ?????????idKey!!!	...???????????????');
              }case 91:_i2++;_context2.next = 81;break;case 94:_context2.next = 96;return (





                drawShareImage({
                  Context: Context,
                  type: type,
                  posterCanvasId: posterCanvasId,
                  reserve: reserve,
                  drawArray: drawArray,
                  textArray: textArray,
                  imagesArray: imagesArray,
                  bgObj: bgObj,
                  qrCodeArray: qrCodeArray,
                  setCanvasToTempFilePath: setCanvasToTempFilePath,
                  setDraw: setDraw,
                  bgScale: bgScale,
                  _this: _this,
                  delayTimeScale: delayTimeScale,
                  drawDelayTime: drawDelayTime }));case 96:poster = _context2.sent;

              _app2.default.hideLoading();
              rs({
                bgObj: bgObj,
                poster: poster,
                type: type });_context2.next = 104;break;case 101:_context2.prev = 101;_context2.t2 = _context2["catch"](0);


              //TODO handle the exception
              rj(_context2.t2);case 104:case "end":return _context2.stop();}}}, _callee2, null, [[0, 101]]);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());


}

function drawShareImage(obj) {//??????????????????
  var
  Context =














  obj.Context,type = obj.type,posterCanvasId = obj.posterCanvasId,reserve = obj.reserve,bgObj = obj.bgObj,drawArray = obj.drawArray,textArray = obj.textArray,qrCodeArray = obj.qrCodeArray,imagesArray = obj.imagesArray,setCanvasToTempFilePath = obj.setCanvasToTempFilePath,setDraw = obj.setDraw,bgScale = obj.bgScale,_this = obj._this,delayTimeScale = obj.delayTimeScale,drawDelayTime = obj.drawDelayTime;
  var params = {
    Context: Context,
    bgObj: bgObj,
    type: type,
    bgScale: bgScale };

  delayTimeScale = delayTimeScale !== undefined ? delayTimeScale : 15;
  drawDelayTime = drawDelayTime !== undefined ? drawDelayTime : 100;
  return new Promise(function (rs, rj) {
    try {
      _app2.default.showLoading('??????????????????');
      _app2.default.log('????????????:' + JSON.stringify(bgObj));
      if (bgObj && bgObj.path) {
        _app2.default.log('?????????????????????');
        Context.drawImage(bgObj.path, 0, 0, bgObj.width, bgObj.height);
      } else {
        _app2.default.log('????????????????????????');
        if (bgObj.backgroundColor) {
          _app2.default.log('?????????????????????:' + bgObj.backgroundColor);
          Context.setFillStyle(bgObj.backgroundColor);
          Context.fillRect(0, 0, bgObj.width, bgObj.height);
        } else {
          _app2.default.log('????????????????????????');
        }
      }

      _app2.default.showLoading('????????????');
      if (imagesArray && imagesArray.length > 0)
      drawImage(Context, imagesArray);

      _app2.default.showLoading('?????????????????????');
      if (setDraw && typeof setDraw == 'function') setDraw(params);

      _app2.default.showLoading('????????????');
      if (textArray && textArray.length > 0)
      drawText(Context, textArray, bgObj);

      _app2.default.showLoading('???????????????');
      if (qrCodeArray && qrCodeArray.length > 0) {
        for (var i = 0; i < qrCodeArray.length; i++) {
          drawQrCode(Context, qrCodeArray[i]);
        }
      }

      _app2.default.showLoading('????????????????????????');
      if (drawArray && drawArray.length > 0) {
        for (var _i3 = 0; _i3 < drawArray.length; _i3++) {
          var drawArrayItem = drawArray[_i3];
          _app2.default.log('????????????????????????, drawArrayItem:' + JSON.stringify(drawArrayItem));
          switch (drawArrayItem.type) {
            case 'image':
              _app2.default.log('????????????????????????, ????????????');
              drawImage(Context, drawArrayItem);
              break;
            case 'text':
              _app2.default.log('????????????????????????, ????????????');
              drawText(Context, drawArrayItem, bgObj);
              break;
            case 'qrcode':
              _app2.default.log('????????????????????????, ???????????????');
              drawQrCode(Context, drawArrayItem);
              break;
            case 'custom':
              _app2.default.log('????????????????????????, ?????????????????????');
              if (drawArrayItem.setDraw && typeof drawArrayItem.setDraw === 'function')
              drawArrayItem.setDraw(Context);
              break;
            default:
              _app2.default.log('??????????????????');
              break;}

        }
      }
      _app2.default.showLoading('?????????');
      setTimeout(function () {
        Context.draw(typeof reserve == 'boolean' ? reserve : false, function () {
          _app2.default.showLoading('??????????????????');
          var setObj = setCanvasToTempFilePath || {};
          if (setObj && typeof setObj == 'function')
          setObj = setCanvasToTempFilePath(bgObj, type);
          var canvasToTempFilePathFn;










          var data = _objectSpread({
            x: 0,
            y: 0,
            width: bgObj.width,
            height: bgObj.height,
            destWidth: bgObj.width * 2, // ???H5??????????????????????????????
            destHeight: bgObj.height * 2, // ???H5??????????????????????????????
            quality: .8,
            fileType: 'jpg' },
          setObj);

          _app2.default.log('canvasToTempFilePath???data??????:' + JSON.stringify(data));
          canvasToTempFilePathFn = function canvasToTempFilePathFn() {
            var toTempFilePathObj = _objectSpread(_objectSpread({},
            data), {}, {
              canvasId: posterCanvasId,
              success: function success(res) {
                _app2.default.hideLoading();
                rs(res);
              },
              fail: function fail(err) {
                _app2.default.hideLoading();
                _app2.default.log('??????????????????:' + JSON.stringify(err));
                rj('??????????????????:' + JSON.stringify(err));
              } });

            uni.canvasToTempFilePath(toTempFilePathObj, _this || null);
          };

          var delayTime = 0;
          if (qrCodeArray) {
            qrCodeArray.forEach(function (item) {
              if (item.text) {
                delayTime += Number(item.text.length);
              }
            });
          }
          if (imagesArray) {
            imagesArray.forEach(function () {
              delayTime += delayTimeScale;
            });
          }
          if (textArray) {
            textArray.forEach(function () {
              delayTime += delayTimeScale;
            });
          }
          if (drawArray) {
            drawArray.forEach(function (item) {
              switch (item.type) {
                case 'text':
                  if (item.text) {
                    delayTime += item.text.length;
                  }
                  break;
                default:
                  delayTime += delayTimeScale;
                  break;}

            });
          }
          _app2.default.log('????????????:' + delayTimeScale);
          _app2.default.log('????????????:' + delayTime);
          setTimeout(canvasToTempFilePathFn, delayTime);
        });
      }, drawDelayTime);
    } catch (e) {
      //TODO handle the exception
      _app2.default.hideLoading();
      rj(e);
    }
  });
}

// export 
function setText(Context, texts) {// ??????????????????
  _app2.default.log('????????????????????????, texts:' + JSON.stringify(texts));
  if (texts && _app2.default.isArray(texts)) {
    _app2.default.log('texts?????????');
    if (texts.length > 0) {
      for (var i = 0; i < texts.length; i++) {
        _app2.default.log('???????????????-???????????????:' + JSON.stringify(texts[i]));
        texts[i] = setTextFn(Context, texts[i]);
      }
    }
  } else {
    _app2.default.log('texts?????????');
    texts = setTextFn(Context, texts);
  }
  _app2.default.log('??????texts:' + JSON.stringify(texts));
  return texts;
}

function setTextFn(Context, textItem) {
  _app2.default.log('????????????????????????, textItem:' + JSON.stringify(textItem));
  if (_app2.default.isNotNull_string(textItem.text)) {
    textItem.text = String(textItem.text);
    textItem.alpha = textItem.alpha !== undefined ? textItem.alpha : 1;
    textItem.color = textItem.color || 'black';
    textItem.size = textItem.size !== undefined ? textItem.size : 10;
    textItem.textAlign = textItem.textAlign || 'left';
    textItem.textBaseline = textItem.textBaseline || 'middle';
    textItem.dx = textItem.dx || 0;
    textItem.dy = textItem.dy || 0;
    textItem.size = Math.ceil(Number(textItem.size));
    _app2.default.log('???????????????-?????????????????????:' + JSON.stringify(textItem));
    var textLength = countTextLength(Context, {
      text: textItem.text,
      size: textItem.size });

    _app2.default.log('???????????????-???????????????????????????:' + textLength);
    var infoCallBackObj = {};
    if (textItem.infoCallBack && typeof textItem.infoCallBack === 'function') {
      infoCallBackObj = textItem.infoCallBack(textLength);
    }
    textItem = _objectSpread(_objectSpread({},
    textItem), {}, {
      textLength: textLength },
    infoCallBackObj);

    _app2.default.log('???????????????-infoCallBack???:' + JSON.stringify(textItem));
  }
  return textItem;
}

function countTextLength(Context, obj) {
  _app2.default.log('??????????????????, obj:' + JSON.stringify(obj));var

  text =

  obj.text,size = obj.size;
  Context.setFontSize(size);
  var textLength;
  /* try{
                  	textLength = Context.measureText(text); // ??????????????? App?????????????????????????????????????????????measureText??????
                  }catch(e){
                  	//TODO handle the exception
                  	textLength = {};
                  } */
  textLength = {};
  _app2.default.log('measureText??????????????????, textLength:' + JSON.stringify(textLength));
  textLength = textLength && textLength.width ? textLength.width : 0;
  if (!textLength) {
    var l = 0;
    for (var j = 0; j < text.length; j++) {
      var t = text.substr(j, 1);
      var countL = countStrLength(t);
      _app2.default.log('????????????????????????:' + countL);
      l += countL;
    }
    _app2.default.log('?????????????????????:' + l);
    textLength = l * size;
  }
  return textLength;
}

//????????????????????????
function countStrLength(t) {
  var l;
  if (/a/.test(t)) {
    l = 0.552734375;
  } else if (/b/.test(t)) {
    l = 0.638671875;
  } else if (/c/.test(t)) {
    l = 0.50146484375;
  } else if (/d/.test(t)) {
    l = 0.6396484375;
  } else if (/e/.test(t)) {
    l = 0.5673828125;
  } else if (/f/.test(t)) {
    l = 0.3466796875;
  } else if (/g/.test(t)) {
    l = 0.6396484375;
  } else if (/h/.test(t)) {
    l = 0.61572265625;
  } else if (/i/.test(t)) {
    l = 0.26611328125;
  } else if (/j/.test(t)) {
    l = 0.26708984375;
  } else if (/k/.test(t)) {
    l = 0.54443359375;
  } else if (/l/.test(t)) {
    l = 0.26611328125;
  } else if (/m/.test(t)) {
    l = 0.93701171875;
  } else if (/n/.test(t)) {
    l = 0.6162109375;
  } else if (/o/.test(t)) {
    l = 0.6357421875;
  } else if (/p/.test(t)) {
    l = 0.638671875;
  } else if (/q/.test(t)) {
    l = 0.6396484375;
  } else if (/r/.test(t)) {
    l = 0.3818359375;
  } else if (/s/.test(t)) {
    l = 0.462890625;
  } else if (/t/.test(t)) {
    l = 0.37255859375;
  } else if (/u/.test(t)) {
    l = 0.6162109375;
  } else if (/v/.test(t)) {
    l = 0.52490234375;
  } else if (/w/.test(t)) {
    l = 0.78955078125;
  } else if (/x/.test(t)) {
    l = 0.5068359375;
  } else if (/y/.test(t)) {
    l = 0.529296875;
  } else if (/z/.test(t)) {
    l = 0.49169921875;
  } else if (/A/.test(t)) {
    l = 0.70361328125;
  } else if (/B/.test(t)) {
    l = 0.62744140625;
  } else if (/C/.test(t)) {
    l = 0.6689453125;
  } else if (/D/.test(t)) {
    l = 0.76171875;
  } else if (/E/.test(t)) {
    l = 0.5498046875;
  } else if (/F/.test(t)) {
    l = 0.53125;
  } else if (/G/.test(t)) {
    l = 0.74365234375;
  } else if (/H/.test(t)) {
    l = 0.7734375;
  } else if (/I/.test(t)) {
    l = 0.2939453125;
  } else if (/J/.test(t)) {
    l = 0.39599609375;
  } else if (/K/.test(t)) {
    l = 0.634765625;
  } else if (/L/.test(t)) {
    l = 0.51318359375;
  } else if (/M/.test(t)) {
    l = 0.97705078125;
  } else if (/N/.test(t)) {
    l = 0.81298828125;
  } else if (/O/.test(t)) {
    l = 0.81494140625;
  } else if (/P/.test(t)) {
    l = 0.61181640625;
  } else if (/Q/.test(t)) {
    l = 0.81494140625;
  } else if (/R/.test(t)) {
    l = 0.65283203125;
  } else if (/S/.test(t)) {
    l = 0.5771484375;
  } else if (/T/.test(t)) {
    l = 0.5732421875;
  } else if (/U/.test(t)) {
    l = 0.74658203125;
  } else if (/V/.test(t)) {
    l = 0.67626953125;
  } else if (/W/.test(t)) {
    l = 1.017578125;
  } else if (/X/.test(t)) {
    l = 0.64501953125;
  } else if (/Y/.test(t)) {
    l = 0.603515625;
  } else if (/Z/.test(t)) {
    l = 0.6201171875;
  } else if (/[0-9]/.test(t)) {
    l = 0.58642578125;
  } else if (/[\u4e00-\u9fa5]/.test(t)) {
    l = 1;
  } else if (/ /.test(t)) {
    l = 0.2958984375;
  } else if (/\`/.test(t)) {
    l = 0.294921875;
  } else if (/\~/.test(t)) {
    l = 0.74169921875;
  } else if (/\!/.test(t)) {
    l = 0.3125;
  } else if (/\@/.test(t)) {
    l = 1.03125;
  } else if (/\#/.test(t)) {
    l = 0.63818359375;
  } else if (/\$/.test(t)) {
    l = 0.58642578125;
  } else if (/\%/.test(t)) {
    l = 0.8896484375;
  } else if (/\^/.test(t)) {
    l = 0.74169921875;
  } else if (/\&/.test(t)) {
    l = 0.8701171875;
  } else if (/\*/.test(t)) {
    l = 0.455078125;
  } else if (/\(/.test(t)) {
    l = 0.333984375;
  } else if (/\)/.test(t)) {
    l = 0.333984375;
  } else if (/\_/.test(t)) {
    l = 0.4482421875;
  } else if (/\-/.test(t)) {
    l = 0.4326171875;
  } else if (/\+/.test(t)) {
    l = 0.74169921875;
  } else if (/\=/.test(t)) {
    l = 0.74169921875;
  } else if (/\|/.test(t)) {
    l = 0.26904296875;
  } else if (/\\/.test(t)) {
    l = 0.416015625;
  } else if (/\[/.test(t)) {
    l = 0.333984375;
  } else if (/\]/.test(t)) {
    l = 0.333984375;
  } else if (/\;/.test(t)) {
    l = 0.24072265625;
  } else if (/\'/.test(t)) {
    l = 0.25634765625;
  } else if (/\,/.test(t)) {
    l = 0.24072265625;
  } else if (/\./.test(t)) {
    l = 0.24072265625;
  } else if (/\//.test(t)) {
    l = 0.42724609375;
  } else if (/\{/.test(t)) {
    l = 0.333984375;
  } else if (/\}/.test(t)) {
    l = 0.333984375;
  } else if (/\:/.test(t)) {
    l = 0.24072265625;
  } else if (/\"/.test(t)) {
    l = 0.435546875;
  } else if (/\</.test(t)) {
    l = 0.74169921875;
  } else if (/\>/.test(t)) {
    l = 0.74169921875;
  } else if (/\?/.test(t)) {
    l = 0.48291015625;
  } else {
    l = 1;
  }
  return l;
}

// export 
function setImage(images) {// ??????????????????
  _app2.default.log('??????????????????????????????');
  return new Promise( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(resolve, rejcet) {var i;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;if (!(

              images && _app2.default.isArray(images))) {_context3.next = 14;break;}
              _app2.default.log('images???????????????');
              i = 0;case 4:if (!(i < images.length)) {_context3.next = 12;break;}
              _app2.default.log('???????????????????????????:' + i);_context3.next = 8;return (
                setImageFn(images[i]));case 8:images[i] = _context3.sent;case 9:i++;_context3.next = 4;break;case 12:_context3.next = 18;break;case 14:


              _app2.default.log('images???????????????');_context3.next = 17;return (
                setImageFn(images));case 17:images = _context3.sent;case 18:

              resolve(images);_context3.next = 24;break;case 21:_context3.prev = 21;_context3.t0 = _context3["catch"](0);

              //TODO handle the exception
              rejcet(_context3.t0);case 24:case "end":return _context3.stop();}}}, _callee3, null, [[0, 21]]);}));return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());


}

function setImageFn(image) {
  return new Promise( /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(resolve, reject) {var imgUrl, hasinfoCallBack, imageInfo;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:if (!
              image.url) {_context4.next = 17;break;}
              imgUrl = image.url;_context4.next = 4;return (
                _app2.default.downloadFile_PromiseFc(imgUrl));case 4:imgUrl = _context4.sent;
              image.url = imgUrl;
              hasinfoCallBack = image.infoCallBack && typeof image.infoCallBack === 'function';
              imageInfo = {};_context4.next = 10;return (
                _app2.default.getImageInfo_PromiseFc(imgUrl));case 10:imageInfo = _context4.sent;
              if (hasinfoCallBack) {
                image = _objectSpread(_objectSpread({},
                image),
                image.infoCallBack(imageInfo));

              }
              image.dx = image.dx || 0;
              image.dy = image.dy || 0;
              image.dWidth = image.dWidth || imageInfo.width;
              image.dHeight = image.dHeight || imageInfo.height;
              image = _objectSpread(_objectSpread({},
              image), {}, {
                imageInfo: imageInfo });case 17:


              resolve(image);case 18:case "end":return _context4.stop();}}}, _callee4);}));return function (_x7, _x8) {return _ref4.apply(this, arguments);};}());

}

// export 
function drawText(Context, textArray, bgObj) {// ????????????????????????
  if (!_app2.default.isArray(textArray)) {
    _app2.default.log('??????????????????, ????????????');
    textArray = [textArray];
  } else {
    _app2.default.log('??????????????????, ?????????');
  }
  _app2.default.log('??????????????????, textArray:' + JSON.stringify(textArray));
  var newArr = [];
  if (textArray && textArray.length > 0) {
    for (var j = 0; j < textArray.length; j++) {
      var textItem = textArray[j];
      if (textItem.text && textItem.lineFeed) {
        var lineNum = -1,
        maxWidth = bgObj.width,
        lineHeight = textItem.size,
        dx = textItem.dx;
        if (_app2.default.isObject(textItem.lineFeed)) {
          var lineFeed = textItem.lineFeed;
          lineNum = lineFeed.lineNum !== undefined && typeof lineFeed.lineNum === 'number' && lineFeed.lineNum >= 0 ?
          lineFeed.lineNum : lineNum;
          maxWidth = lineFeed.maxWidth !== undefined && typeof lineFeed.maxWidth === 'number' ? lineFeed.maxWidth :
          maxWidth;
          lineHeight = lineFeed.lineHeight !== undefined && typeof lineFeed.lineHeight === 'number' ? lineFeed.lineHeight :
          lineHeight;
          dx = lineFeed.dx !== undefined && typeof lineFeed.dx === 'number' ? lineFeed.dx : dx;
        }
        var chr = textItem.text.split("");
        var temp = "";
        var row = [];
        //?????????????????????????????????
        for (var a = 0, len = chr.length; a < len; a++) {
          if (countTextLength(Context, {
            text: temp,
            size: textItem.size }) <=
          maxWidth && countTextLength(Context, {
            text: temp + chr[a],
            size: textItem.size }) <=
          maxWidth) {
            temp += chr[a];
            if (a == chr.length - 1) {
              row.push(temp);
            }
          } else {
            row.push(temp);
            temp = chr[a];
          }
        }
        _app2.default.log('????????????????????????:' + JSON.stringify(row));
        //??????????????? ????????????lineHeight  ????????????lineNum
        var allNum = lineNum >= 0 && lineNum < row.length ? lineNum : row.length;

        for (var i = 0; i < allNum; i++) {
          var str = row[i];
          if (i == allNum - 1 && allNum < row.length) {
            str = str.substring(0, str.length - 1) + '...';
          }
          var obj = _objectSpread(_objectSpread({}, textItem), {}, {
            text: str,
            dx: i === 0 ? textItem.dx : dx >= 0 ? dx : textItem.dx,
            dy: textItem.dy + i * lineHeight,
            textLength: countTextLength(Context, {
              text: str,
              size: textItem.size }) });


          _app2.default.log('???????????????????????????:' + JSON.stringify(obj));
          newArr.push(obj);
        }
      } else {
        newArr.push(textItem);
      }
    }
  }
  _app2.default.log('?????????????????????:' + JSON.stringify(newArr));
  drawTexts(Context, newArr);
}

function setFont() {var textItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (textItem.font && typeof textItem.font === 'string') {
    _app2.default.log(textItem.font);
    return textItem.font;
  } else {
    var fontStyle = 'normal';
    var fontVariant = 'normal';
    var fontWeight = 'normal';
    var fontSize = textItem.size || 10;
    var fontFamily = 'sans-serif';
    fontSize = Math.ceil(Number(fontSize));
    if (textItem.fontStyle && typeof textItem.fontStyle === 'string')
    fontStyle = textItem.fontStyle.trim();
    if (textItem.fontVariant && typeof textItem.fontVariant === 'string')
    fontVariant = textItem.fontVariant.trim();
    if (textItem.fontWeight && (typeof textItem.fontWeight === 'string' || typeof textItem.fontWeight === 'number'))
    fontWeight = textItem.fontWeight.trim();
    if (textItem.fontFamily && typeof textItem.fontFamily === 'string')
    fontFamily = textItem.fontFamily.trim();
    return fontStyle + ' ' +
    fontVariant + ' ' +
    fontWeight + ' ' +
    fontSize + 'px' + ' ' +
    fontFamily;
  }
}

function drawTexts(Context, texts) {// ????????????
  _app2.default.log('????????????????????????, texts:' + JSON.stringify(texts));
  if (texts && _app2.default.isArray(texts)) {
    _app2.default.log('????????????????????????, ?????????');
    if (texts.length > 0) {
      for (var i = 0; i < texts.length; i++) {
        drawTextFn(Context, texts[i]);
      }
    }
  } else {
    _app2.default.log('????????????????????????, ????????????');
    drawTextFn(Context, texts);
  }
}

function drawTextFn(Context, textItem) {
  _app2.default.log('????????????????????????, textItem:' + JSON.stringify(textItem));
  if (textItem && _app2.default.isObject(textItem) && textItem.text) {
    Context.font = setFont(textItem);
    Context.setFillStyle(textItem.color);
    Context.setGlobalAlpha(textItem.alpha);
    Context.setTextAlign(textItem.textAlign);
    Context.setTextBaseline(textItem.textBaseline);
    Context.fillText(textItem.text, textItem.dx, textItem.dy);
    if (textItem.lineThrough && _app2.default.isObject(textItem.lineThrough)) {
      _app2.default.log('????????????');
      var lineThrough = textItem.lineThrough;
      lineThrough.alpha = lineThrough.alpha !== undefined ? lineThrough.alpha : textItem.alpha;
      lineThrough.style = lineThrough.style || textItem.color;
      lineThrough.width = lineThrough.width !== undefined ? lineThrough.width : textItem.size / 10;
      lineThrough.cap = lineThrough.cap !== undefined ? lineThrough.cap : 'butt';
      _app2.default.log('???????????????:' + JSON.stringify(lineThrough));
      Context.setGlobalAlpha(lineThrough.alpha);
      Context.setStrokeStyle(lineThrough.style);
      Context.setLineWidth(lineThrough.width);
      Context.setLineCap(lineThrough.cap);
      var mx, my;
      switch (textItem.textAlign) {
        case 'left':
          mx = textItem.dx;
          break;
        case 'center':
          mx = textItem.dx - textItem.textLength / 2;
          break;
        default:
          mx = textItem.dx - textItem.textLength;
          break;}

      switch (textItem.textBaseline) {
        case 'top':
          my = textItem.dy + textItem.size * .5;
          break;
        case 'middle':
          my = textItem.dy;
          break;
        default:
          my = textItem.dy - textItem.size * .5;
          break;}

      Context.beginPath();
      Context.moveTo(mx, my);
      Context.lineTo(mx + textItem.textLength, my);
      Context.stroke();
      Context.closePath();
      _app2.default.log('???????????????');
    }
    Context.setGlobalAlpha(1);
    Context.font = '10px sans-serif';
  }
}
// export 
function drawImage(Context, images) {// ????????????
  _app2.default.log('????????????????????????:' + JSON.stringify(images));
  if (images && _app2.default.isArray(images)) {
    if (images.length > 0) {
      for (var i = 0; i < images.length; i++) {
        readyDrawImageFn(Context, images[i]);
      }
    }
  } else {
    readyDrawImageFn(Context, images);
  }

}

function readyDrawImageFn(Context, img) {
  _app2.default.log('????????????????????????, img:' + JSON.stringify(img));
  if (img.url) {
    if (img.circleSet) {
      drawCircleImage(Context, img);
    } else if (img.roundRectSet) {
      drawRoundRectImage(Context, img);
    } else {
      drawImageFn(Context, img);
    }
  }
}

function drawImageFn(Context, img) {
  _app2.default.log('??????????????????????????????, img:' + JSON.stringify(img));
  if (img.url) {
    var hasAlpha = !_app2.default.isUndef(img.alpha);
    img.alpha = Number(!_app2.default.isUndef(img.alpha) ? img.alpha : 1);
    Context.setGlobalAlpha(img.alpha);
    _app2.default.log('????????????????????????, ???url');
    if (img.dWidth && img.dHeight && img.sx && img.sy && img.sWidth && img.sHeight) {
      _app2.default.log('????????????????????????, ?????????????????????');
      Context.drawImage(img.url, img.dx || 0, img.dy || 0,
      img.dWidth || false, img.dHeight || false,
      img.sx || false, img.sy || false,
      img.sWidth || false, img.sHeight || false);
    } else if (img.dWidth && img.dHeight) {
      _app2.default.log('????????????????????????, ?????????????????????');
      Context.drawImage(img.url, img.dx || 0, img.dy || 0,
      img.dWidth || false, img.dHeight || false);
    } else {
      _app2.default.log('????????????????????????, ?????????????????????');
      Context.drawImage(img.url, img.dx || 0, img.dy || 0);
    }
    if (hasAlpha) {
      Context.setGlobalAlpha(1);
    }
  }
  _app2.default.log('????????????????????????, ????????????');
}

function drawCircleImage(Context, obj) {
  _app2.default.log('??????????????????????????????, obj:' + JSON.stringify(obj));var

  dx =





  obj.dx,dy = obj.dy,dWidth = obj.dWidth,dHeight = obj.dHeight,circleSet = obj.circleSet,imageInfo = obj.imageInfo;
  var x, y, r;
  if (typeof circleSet === 'object') {
    x = circleSet.x;
    y = circleSet.y;
    r = circleSet.r;
  }
  if (!r) {
    var d;
    d = dWidth > dHeight ? dHeight : dWidth;
    r = d / 2;
  }

  x = x ? dx + x : (dx || 0) + r;
  y = y ? dy + y : (dy || 0) + r;
  Context.save();
  Context.beginPath();
  Context.arc(x, y, r, 0, 2 * Math.PI, false);
  Context.closePath();
  Context.setGlobalAlpha(0);
  Context.fillStyle = '#FFFFFF';
  Context.fill();
  Context.setGlobalAlpha(1);
  Context.clip();
  drawImageFn(Context, obj);
  _app2.default.log('????????????????????????');
  Context.restore();
}

function drawRoundRectImage(Context, obj) {// ????????????
  _app2.default.log('??????????????????????????????, obj:' + JSON.stringify(obj));
  Context.save();var

  dx =





  obj.dx,dy = obj.dy,dWidth = obj.dWidth,dHeight = obj.dHeight,roundRectSet = obj.roundRectSet,imageInfo = obj.imageInfo;
  var r;
  if (typeof roundRectSet === 'object') {
    r = roundRectSet.r;
  }
  r = r || dWidth * .1;

  if (dWidth < 2 * r) {
    r = dWidth / 2;
  }
  if (dHeight < 2 * r) {
    r = dHeight / 2;
  }
  Context.beginPath();
  Context.moveTo(dx + r, dy);
  Context.arcTo(dx + dWidth, dy, dx + dWidth, dy + dHeight, r);
  Context.arcTo(dx + dWidth, dy + dHeight, dx, dy + dHeight, r);
  Context.arcTo(dx, dy + dHeight, dx, dy, r);
  Context.arcTo(dx, dy, dx + dWidth, dy, r);
  Context.closePath();
  Context.setGlobalAlpha(0);
  Context.fillStyle = '#FFFFFF';
  Context.fill();
  Context.setGlobalAlpha(1);
  Context.clip();
  drawImageFn(Context, obj);
  Context.restore();
  _app2.default.log('??????????????????????????????, ????????????');
}

// export 
function drawQrCode(Context, qrCodeObj) {//???????????????????????? ????????? ????????? ???????????????????????????
  _app2.default.log('???????????????????????????');
  _app2.default.showLoading('?????????????????????');
  var qrcodeAlgObjCache = [];
  var options = {
    text: String(qrCodeObj.text || '') || '', // ????????????
    size: Number(qrCodeObj.size || 0) || 200, // ???????????????
    background: String(qrCodeObj.background || '') || '#ffffff', // ?????????
    foreground: String(qrCodeObj.foreground || '') || '#000000', // ?????????
    pdground: String(qrCodeObj.pdground || '') || '#000000', // ??????????????????
    correctLevel: Number(qrCodeObj.correctLevel || 0) || 3, // ????????????
    image: String(qrCodeObj.image || '') || '', // ???????????????
    imageSize: Number(qrCodeObj.imageSize || 0) || 40, // ?????????????????????
    dx: Number(qrCodeObj.dx || 0) || 0, // x?????????
    dy: Number(qrCodeObj.dy || 0) || 0 // y?????????
  };
  var qrCodeAlg = null;
  var d = 0;
  for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
    d = i;
    if (qrcodeAlgObjCache[i].text == options.text && qrcodeAlgObjCache[i].text.correctLevel == options.correctLevel) {
      qrCodeAlg = qrcodeAlgObjCache[i].obj;
      break;
    }
  }
  if (d == l) {
    qrCodeAlg = new _QRCodeAlg.default(options.text, options.correctLevel);
    qrcodeAlgObjCache.push({
      text: options.text,
      correctLevel: options.correctLevel,
      obj: qrCodeAlg });

  }
  var getForeGround = function getForeGround(config) {
    var options = config.options;
    if (options.pdground && (
    config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 ||
    config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 ||
    config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2))
    {
      return options.pdground;
    }
    return options.foreground;
  };
  var count = qrCodeAlg.getModuleCount();
  var ratioSize = options.size;
  var ratioImgSize = options.imageSize;
  //????????????????????????
  var tileW = (ratioSize / count).toPrecision(4);
  var tileH = (ratioSize / count).toPrecision(4);
  //??????
  for (var row = 0; row < count; row++) {
    for (var col = 0; col < count; col++) {
      var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
      var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
      var foreground = getForeGround({
        row: row,
        col: col,
        count: count,
        options: options });

      Context.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);
      Context.fillRect(options.dx + Math.round(col * tileW), options.dy + Math.round(row * tileH), w, h);
    }
  }
  if (options.image) {




    // ???????????????
    var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {
      ctxi.setLineWidth(lineWidth);
      ctxi.setFillStyle(options.background);
      ctxi.setStrokeStyle(options.background);
      ctxi.beginPath(); // draw top and top right corner 
      ctxi.moveTo(x + r, y);
      ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
      ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
      ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
      ctxi.arcTo(x, y, x + r, y, r);
      ctxi.closePath();
      if (fill) {
        ctxi.fill();
      }
      if (stroke) {
        ctxi.stroke();
      }
    };var x = options.dx + Number(((ratioSize - ratioImgSize) / 2).toFixed(2));var y = options.dy + Number(((ratioSize - ratioImgSize) / 2).toFixed(2));drawRoundedRect(Context, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);Context.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);
  }
  _app2.default.hideLoading();
}


function getShreUserPosterBackground(objs) {//??????????????????????????????????????? ???????????????????????? ????????????getShreUserPosterBackgroundFc??????
  var
  backgroundImage =

  objs.backgroundImage,type = objs.type;
  return new Promise( /*#__PURE__*/function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(resolve, reject) {var pbg, image, index, imageObj, obj, savedFilePath, _savedFilePath, _savedFilePath2, _savedFilePath3;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.prev = 0;

              _app2.default.showLoading('???????????????????????????');


              pbg = getPosterStorage(type);




              _app2.default.log('???????????????:' + JSON.stringify(pbg));if (!(
              pbg && pbg.path && pbg.name)) {_context5.next = 53;break;}
              _app2.default.log('???????????????, ???????????????????????????????????????');_context5.next = 8;return (
                _app2.default.getPosterUrl(objs));case 8:image = _context5.sent;
              _app2.default.log('????????????name????????????');if (!(
              pbg.name === _app2.default.fileNameInPath(image))) {_context5.next = 45;break;}
              _app2.default.log('name??????, ???????????????????????????????????????');_context5.next = 14;return (
                _app2.default.checkFile_PromiseFc(pbg.path));case 14:index = _context5.sent;if (!(
              index >= 0)) {_context5.next = 37;break;}
              _app2.default.log('??????save????????????, ??????????????????, ???????????????');_context5.next = 19;return (
                _app2.default.getImageInfo_PromiseFc(pbg.path));case 19:imageObj = _context5.sent;
              obj = _objectSpread({}, pbg);if (!(

              !pbg.width || !pbg.height || pbg.width !== imageObj.width || pbg.height !== imageObj.height)) {_context5.next = 30;break;}
              _app2.default.log('???????????????????????? ????????????');_context5.next = 25;return (
                getShreUserPosterBackgroundFc(objs, image));case 25:savedFilePath = _context5.sent;
              _app2.default.hideLoading();
              resolve(savedFilePath);_context5.next = 35;break;case 30:

              _app2.default.log('??????????????????, ????????????, ???????????????');
              obj = _objectSpread(_objectSpread({},
              pbg), {}, {
                width: imageObj.width,
                height: imageObj.height });


              setPosterStorage(type, _objectSpread({}, obj));


              _app2.default.hideLoading();
              resolve(obj);case 35:_context5.next = 43;break;case 37:


              _app2.default.log('??????save???????????????, ??????????????????');_context5.next = 40;return (
                getShreUserPosterBackgroundFc(objs, image));case 40:_savedFilePath = _context5.sent;
              _app2.default.hideLoading();
              resolve(_savedFilePath);case 43:_context5.next = 51;break;case 45:


              _app2.default.log('name?????????, ??????????????????');_context5.next = 48;return (
                getShreUserPosterBackgroundFc(objs, image));case 48:_savedFilePath2 = _context5.sent;
              _app2.default.hideLoading();
              resolve(_savedFilePath2);case 51:_context5.next = 59;break;case 53:


              _app2.default.log('???????????????????????????, ???????????????????????????');_context5.next = 56;return (
                getShreUserPosterBackgroundFc(objs));case 56:_savedFilePath3 = _context5.sent;
              _app2.default.hideLoading();
              resolve(_savedFilePath3);case 59:_context5.next = 67;break;case 61:_context5.prev = 61;_context5.t0 = _context5["catch"](0);


              _app2.default.hideLoading();
              _app2.default.showToast('?????????????????????????????????:' + JSON.stringify(_context5.t0));
              _app2.default.log(JSON.stringify(_context5.t0));
              reject(_context5.t0);case 67:case "end":return _context5.stop();}}}, _callee5, null, [[0, 61]]);}));return function (_x9, _x10) {return _ref5.apply(this, arguments);};}());


}

function getPosterStorage(type) {
  return _app2.default.getStorageSync(getStorageKey(type));
}

function removePosterStorage(type) {
  var ShreUserPosterBackgroundKey = getStorageKey(type);
  var pbg = _app2.default.getStorageSync(ShreUserPosterBackgroundKey);
  if (pbg && pbg.path) {
    _app2.default.removeSavedFile(pbg.path);
    _app2.default.removeStorageSync(ShreUserPosterBackgroundKey);
  }
}

function setPosterStorage(type, data) {
  _app2.default.setStorage(getStorageKey(type), data);
}

function getStorageKey(type) {
  return ShreUserPosterBackgroundKey + (type || 'default');
}

function getShreUserPosterBackgroundFc(objs, upimage) {//??????????????????????????????
  var
  backgroundImage =

  objs.backgroundImage,type = objs.type;
  _app2.default.log('?????????????????????, ????????????????????????');
  removePosterStorage(type);
  return new Promise( /*#__PURE__*/function () {var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(resolve, reject) {var name, savedFilePath, imageObj, returnObj, image, _savedFilePath4, _imageObj, _returnObj;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.prev = 0;

              _app2.default.showLoading('???????????????????????????');if (!
              upimage) {_context6.next = 24;break;}
              _app2.default.log('???????????????????????????????????????');
              _app2.default.log('??????????????????????????????');
              name = _app2.default.fileNameInPath(upimage);_context6.next = 8;return (
                _app2.default.downLoadAndSaveFile_PromiseFc(upimage));case 8:savedFilePath = _context6.sent;if (!
              savedFilePath) {_context6.next = 20;break;}
              _app2.default.log('??????????????????????????????:' + savedFilePath);_context6.next = 13;return (
                _app2.default.getImageInfo_PromiseFc(savedFilePath));case 13:imageObj = _context6.sent;
              returnObj = {
                path: savedFilePath,
                width: imageObj.width,
                height: imageObj.height,
                name: name };


              setPosterStorage(type, _objectSpread({}, returnObj));


              _app2.default.hideLoading();
              resolve(returnObj);_context6.next = 22;break;case 20:

              _app2.default.hideLoading();
              reject('not find savedFilePath');case 22:_context6.next = 48;break;case 24:


              _app2.default.log('??????????????????????????????????????????, ???????????????????????????????????????');_context6.next = 27;return (
                _app2.default.getPosterUrl(objs));case 27:image = _context6.sent;
              _app2.default.log('??????????????????????????????:' + image);_context6.next = 31;return (
                _app2.default.downLoadAndSaveFile_PromiseFc(image));case 31:_savedFilePath4 = _context6.sent;if (!
              _savedFilePath4) {_context6.next = 46;break;}
              _app2.default.log('??????????????????????????????:' + _savedFilePath4);_context6.next = 36;return (
                _app2.default.getImageInfo_PromiseFc(_savedFilePath4));case 36:_imageObj = _context6.sent;
              _app2.default.log('????????????????????????');
              _returnObj = {
                path: _savedFilePath4,
                width: _imageObj.width,
                height: _imageObj.height,
                name: _app2.default.fileNameInPath(image) };

              _app2.default.log('?????????????????????????????????:' + JSON.stringify(_returnObj));


              setPosterStorage(type, _objectSpread({}, _returnObj));



              _app2.default.hideLoading();
              _app2.default.log('???????????????????????????');
              resolve(_objectSpread({}, _returnObj));_context6.next = 48;break;case 46:


              _app2.default.hideLoading();
              reject('not find savedFilePath');case 48:_context6.next = 53;break;case 50:_context6.prev = 50;_context6.t0 = _context6["catch"](0);



              //TODO handle the exception
              reject(_context6.t0);case 53:case "end":return _context6.stop();}}}, _callee6, null, [[0, 50]]);}));return function (_x11, _x12) {return _ref6.apply(this, arguments);};}());


}


module.exports = {
  getSharePoster: getSharePoster,
  setText: setText,
  setImage: setImage,
  drawText: drawText,
  drawImage: drawImage,
  drawQrCode: drawQrCode };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 263:
/*!*********************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/util/QS-SharePoster/QRCodeAlg.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = QRCodeAlg; /**
                                                                                                            * ?????????????????????utf8??????
                                                                                                            * unicode BMP?????????65535?????????
                                                                                                            * @param {num} code
                                                                                                            * return {array}
                                                                                                            */
function unicodeFormat8(code) {
  // 1 byte
  var c0, c1, c2;
  if (code < 128) {
    return [code];
    // 2 bytes
  } else if (code < 2048) {
    c0 = 192 + (code >> 6);
    c1 = 128 + (code & 63);
    return [c0, c1];
    // 3 bytes
  } else {
    c0 = 224 + (code >> 12);
    c1 = 128 + (code >> 6 & 63);
    c2 = 128 + (code & 63);
    return [c0, c1, c2];
  }
}
/**
   * ??????????????????utf8???????????????
   * @param {string} string
   * @return {array}
   */
function getUTF8Bytes(string) {
  var utf8codes = [];
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    var utf8 = unicodeFormat8(code);
    for (var j = 0; j < utf8.length; j++) {
      utf8codes.push(utf8[j]);
    }
  }
  return utf8codes;
}
/**
   * ?????????????????????
   * @param {string} data              ???????????????????????????
   * @param {num} errorCorrectLevel ????????????
   */
function QRCodeAlg(data, errorCorrectLevel) {
  this.typeNumber = -1; //??????
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null; //?????????????????????????????????
  this.moduleCount = 0; //????????????
  this.dataCache = null; //????????????
  this.rsBlocks = null; //??????????????????
  this.totalDataCount = -1; //?????????????????????
  this.data = data;
  this.utf8bytes = getUTF8Bytes(data);
  this.make();
}
QRCodeAlg.prototype = {
  constructor: QRCodeAlg,
  /**
                           * ???????????????????????????
                           * @return {num} ????????????
                           */
  getModuleCount: function getModuleCount() {
    return this.moduleCount;
  },
  /**
      * ??????
      */
  make: function make() {
    this.getRightType();
    this.dataCache = this.createData();
    this.createQrcode();
  },
  /**
      * ??????????????????????????????
      * @param  {bool} test ???????????????????????????????????????
      * @param  {num} maskPattern ???????????????
      */
  makeImpl: function makeImpl(maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);
    for (var row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);
    }
    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(true, maskPattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(true);
    }
    this.mapData(this.dataCache, maskPattern);
  },
  /**
      * ????????????????????????????????????
      * @param  {num} row ??????????????????????????????
      * @param  {num} col ??????????????????????????????
      */
  setupPositionProbePattern: function setupPositionProbePattern(row, col) {
    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r) continue;
      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c) continue;
        if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          this.modules[row + r][col + c] = true;
        } else {
          this.modules[row + r][col + c] = false;
        }
      }
    }
  },
  /**
      * ???????????????
      * @return {[type]} [description]
      */
  createQrcode: function createQrcode() {
    var minLostPoint = 0;
    var pattern = 0;
    var bestModules = null;
    for (var i = 0; i < 8; i++) {
      this.makeImpl(i);
      var lostPoint = QRUtil.getLostPoint(this);
      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
        bestModules = this.modules;
      }
    }
    this.modules = bestModules;
    this.setupTypeInfo(false, pattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(false);
    }
  },
  /**
      * ??????????????????
      * @return {[type]} [description]
      */
  setupTimingPattern: function setupTimingPattern() {
    for (var r = 8; r < this.moduleCount - 8; r++) {
      if (this.modules[r][6] != null) {
        continue;
      }
      this.modules[r][6] = r % 2 == 0;
      if (this.modules[6][r] != null) {
        continue;
      }
      this.modules[6][r] = r % 2 == 0;
    }
  },
  /**
      * ??????????????????
      * @return {[type]} [description]
      */
  setupPositionAdjustPattern: function setupPositionAdjustPattern() {
    var pos = QRUtil.getPatternPosition(this.typeNumber);
    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];
        if (this.modules[row][col] != null) {
          continue;
        }
        for (var r = -2; r <= 2; r++) {
          for (var c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  },
  /**
      * ?????????????????????7?????????????????????
      * @param  {bool} test ????????????????????????????????????
      * @return {[type]}      [description]
      */
  setupTypeNumber: function setupTypeNumber(test) {
    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  },
  /**
      * ???????????????????????????????????????????????????
      * @param  {bool} test
      * @param  {num} maskPattern ????????????
      * @return {}
      */
  setupTypeInfo: function setupTypeInfo(test, maskPattern) {
    var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data);
    // vertical
    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
      // horizontal
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 8) {
        this.modules[8][this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i - 1] = mod;
      }
    }
    // fixed module
    this.modules[this.moduleCount - 8][8] = !test;
  },
  /**
      * ????????????
      * @return {[type]} [description]
      */
  createData: function createData() {
    var buffer = new QRBitBuffer();
    var lengthBits = this.typeNumber > 9 ? 16 : 8;
    buffer.put(4, 4); //????????????
    buffer.put(this.utf8bytes.length, lengthBits);
    for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
      buffer.put(this.utf8bytes[i], 8);
    }
    if (buffer.length + 4 <= this.totalDataCount * 8) {
      buffer.put(0, 4);
    }
    // padding
    while (buffer.length % 8 != 0) {
      buffer.putBit(false);
    }
    // padding
    while (true) {
      if (buffer.length >= this.totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeAlg.PAD0, 8);
      if (buffer.length >= this.totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeAlg.PAD1, 8);
    }
    return this.createBytes(buffer);
  },
  /**
      * ???????????????
      * @param  {buffer} buffer ????????????
      * @return {[type]}
      */
  createBytes: function createBytes(buffer) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var length = this.rsBlock.length / 3;
    var rsBlocks = new Array();
    for (var i = 0; i < length; i++) {
      var count = this.rsBlock[i * 3 + 0];
      var totalCount = this.rsBlock[i * 3 + 1];
      var dataCount = this.rsBlock[i * 3 + 2];
      for (var j = 0; j < count; j++) {
        rsBlocks.push([dataCount, totalCount]);
      }
    }
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r = 0; r < rsBlocks.length; r++) {
      var dcCount = rsBlocks[r][0];
      var ecCount = rsBlocks[r][1] - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r] = new Array(dcCount);
      for (var i = 0; i < dcdata[r].length; i++) {
        dcdata[r][i] = 0xff & buffer.buffer[i + offset];
      }
      offset += dcCount;
      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (var i = 0; i < ecdata[r].length; i++) {
        var modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    var data = new Array(this.totalDataCount);
    var index = 0;
    for (var i = 0; i < maxDcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < dcdata[r].length) {
          data[index++] = dcdata[r][i];
        }
      }
    }
    for (var i = 0; i < maxEcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < ecdata[r].length) {
          data[index++] = ecdata[r][i];
        }
      }
    }
    return data;

  },
  /**
      * ?????????????????????????????????
      * @param  {} data
      * @param  {} maskPattern
      * @return {}
      */
  mapData: function mapData(data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;
      while (true) {
        for (var c = 0; c < 2; c++) {
          if (this.modules[row][col - c] == null) {
            var dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }
            var mask = QRUtil.getMask(maskPattern, row, col - c);
            if (mask) {
              dark = !dark;
            }
            this.modules[row][col - c] = dark;
            bitIndex--;
            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  } };

/**
        * ????????????
        */
QRCodeAlg.PAD0 = 0xEC;
QRCodeAlg.PAD1 = 0x11;
//---------------------------------------------------------------------
// ???????????????????????????
//---------------------------------------------------------------------
var QRErrorCorrectLevel = [1, 0, 3, 2];
//---------------------------------------------------------------------
// ????????????
//---------------------------------------------------------------------
var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7 };

//---------------------------------------------------------------------
// ?????????
//---------------------------------------------------------------------
var QRUtil = {
  /*
               ?????????????????????????????????
                */
  PATTERN_POSITION_TABLE: [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170]],

  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
  /*
                                                           BCH??????????????????
                                                            */
  getBCHTypeInfo: function getBCHTypeInfo(data) {
    var d = data << 10;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }
    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },
  /*
     BCH??????????????????
      */
  getBCHTypeNumber: function getBCHTypeNumber(data) {
    var d = data << 12;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }
    return data << 12 | d;
  },
  /*
     ??????BCH?????????
      */
  getBCHDigit: function getBCHDigit(data) {
    var digit = 0;
    while (data != 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  },
  /*
     ???????????????????????????????????????
      */
  getPatternPosition: function getPatternPosition(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  /*
     ????????????
      */
  getMask: function getMask(maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;
      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;
      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;
      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;
      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;
      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;
      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern);}

  },
  /*
     ??????RS??????????????????
      */
  getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
    var a = new QRPolynomial([1], 0);
    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
    }
    return a;
  },
  /*
     ????????????
      */
  getLostPoint: function getLostPoint(qrCode) {
    var moduleCount = qrCode.getModuleCount(),
    lostPoint = 0,
    darkCount = 0;
    for (var row = 0; row < moduleCount; row++) {
      var sameCount = 0;
      var head = qrCode.modules[row][0];
      for (var col = 0; col < moduleCount; col++) {
        var current = qrCode.modules[row][col];
        //level 3 ??????
        if (col < moduleCount - 6) {
          if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
            if (col < moduleCount - 10) {
              if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                lostPoint += 40;
              }
            } else if (col > 3) {
              if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                lostPoint += 40;
              }
            }
          }
        }
        //level 2 ??????
        if (row < moduleCount - 1 && col < moduleCount - 1) {
          var count = 0;
          if (current) count++;
          if (qrCode.modules[row + 1][col]) count++;
          if (qrCode.modules[row][col + 1]) count++;
          if (qrCode.modules[row + 1][col + 1]) count++;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
        //level 1 ??????
        if (head ^ current) {
          sameCount++;
        } else {
          head = current;
          if (sameCount >= 5) {
            lostPoint += 3 + sameCount - 5;
          }
          sameCount = 1;
        }
        //level 4 ??????
        if (current) {
          darkCount++;
        }
      }
    }
    for (var col = 0; col < moduleCount; col++) {
      var sameCount = 0;
      var head = qrCode.modules[0][col];
      for (var row = 0; row < moduleCount; row++) {
        var current = qrCode.modules[row][col];
        //level 3 ??????
        if (row < moduleCount - 6) {
          if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
            if (row < moduleCount - 10) {
              if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                lostPoint += 40;
              }
            } else if (row > 3) {
              if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                lostPoint += 40;
              }
            }
          }
        }
        //level 1 ??????
        if (head ^ current) {
          sameCount++;
        } else {
          head = current;
          if (sameCount >= 5) {
            lostPoint += 3 + sameCount - 5;
          }
          sameCount = 1;
        }
      }
    }
    // LEVEL4
    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  } };


//---------------------------------------------------------------------
// QRMath?????????????????????
//---------------------------------------------------------------------
var QRMath = {
  /*
               ???n?????????a^m
                */
  glog: function glog(n) {
    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }
    return QRMath.LOG_TABLE[n];
  },
  /*
     ???a^m?????????n
      */
  gexp: function gexp(n) {
    while (n < 0) {
      n += 255;
    }
    while (n >= 256) {
      n -= 255;
    }
    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256) };


for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}
//---------------------------------------------------------------------
// QRPolynomial ?????????
//---------------------------------------------------------------------
/**
 * ????????????
 * @param {Array} num   ??????
 * @param {num} shift a^shift
 */
function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }
  var offset = 0;
  while (offset < num.length && num[offset] == 0) {
    offset++;
  }
  this.num = new Array(num.length - offset + shift);
  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}
QRPolynomial.prototype = {
  get: function get(index) {
    return this.num[index];
  },
  getLength: function getLength() {
    return this.num.length;
  },
  /**
      * ???????????????
      * @param  {QRPolynomial} e ???????????????
      * @return {[type]}   [description]
      */
  multiply: function multiply(e) {
    var num = new Array(this.getLength() + e.getLength() - 1);
    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
      }
    }
    return new QRPolynomial(num, 0);
  },
  /**
      * ??????????????????
      * @param  {QRPolynomial} e ????????????
      * @return {}
      */
  mod: function mod(e) {
    var tl = this.getLength(),
    el = e.getLength();
    if (tl - el < 0) {
      return this;
    }
    var num = new Array(tl);
    for (var i = 0; i < tl; i++) {
      num[i] = this.get(i);
    }
    while (num.length >= el) {
      var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

      for (var i = 0; i < e.getLength(); i++) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
      }
      while (num[0] == 0) {
        num.shift();
      }
    }
    return new QRPolynomial(num, 0);
  } };


//---------------------------------------------------------------------
// RS_BLOCK_TABLE
//---------------------------------------------------------------------
/*
???????????????????????????[??????, ????????????????????????, ????????????????????????]
 */
var RS_BLOCK_TABLE = [
// L
// M
// Q
// H
// 1
[1, 26, 19],
[1, 26, 16],
[1, 26, 13],
[1, 26, 9],

// 2
[1, 44, 34],
[1, 44, 28],
[1, 44, 22],
[1, 44, 16],

// 3
[1, 70, 55],
[1, 70, 44],
[2, 35, 17],
[2, 35, 13],

// 4
[1, 100, 80],
[2, 50, 32],
[2, 50, 24],
[4, 25, 9],

// 5
[1, 134, 108],
[2, 67, 43],
[2, 33, 15, 2, 34, 16],
[2, 33, 11, 2, 34, 12],

// 6
[2, 86, 68],
[4, 43, 27],
[4, 43, 19],
[4, 43, 15],

// 7
[2, 98, 78],
[4, 49, 31],
[2, 32, 14, 4, 33, 15],
[4, 39, 13, 1, 40, 14],

// 8
[2, 121, 97],
[2, 60, 38, 2, 61, 39],
[4, 40, 18, 2, 41, 19],
[4, 40, 14, 2, 41, 15],

// 9
[2, 146, 116],
[3, 58, 36, 2, 59, 37],
[4, 36, 16, 4, 37, 17],
[4, 36, 12, 4, 37, 13],

// 10
[2, 86, 68, 2, 87, 69],
[4, 69, 43, 1, 70, 44],
[6, 43, 19, 2, 44, 20],
[6, 43, 15, 2, 44, 16],

// 11
[4, 101, 81],
[1, 80, 50, 4, 81, 51],
[4, 50, 22, 4, 51, 23],
[3, 36, 12, 8, 37, 13],

// 12
[2, 116, 92, 2, 117, 93],
[6, 58, 36, 2, 59, 37],
[4, 46, 20, 6, 47, 21],
[7, 42, 14, 4, 43, 15],

// 13
[4, 133, 107],
[8, 59, 37, 1, 60, 38],
[8, 44, 20, 4, 45, 21],
[12, 33, 11, 4, 34, 12],

// 14
[3, 145, 115, 1, 146, 116],
[4, 64, 40, 5, 65, 41],
[11, 36, 16, 5, 37, 17],
[11, 36, 12, 5, 37, 13],

// 15
[5, 109, 87, 1, 110, 88],
[5, 65, 41, 5, 66, 42],
[5, 54, 24, 7, 55, 25],
[11, 36, 12],

// 16
[5, 122, 98, 1, 123, 99],
[7, 73, 45, 3, 74, 46],
[15, 43, 19, 2, 44, 20],
[3, 45, 15, 13, 46, 16],

// 17
[1, 135, 107, 5, 136, 108],
[10, 74, 46, 1, 75, 47],
[1, 50, 22, 15, 51, 23],
[2, 42, 14, 17, 43, 15],

// 18
[5, 150, 120, 1, 151, 121],
[9, 69, 43, 4, 70, 44],
[17, 50, 22, 1, 51, 23],
[2, 42, 14, 19, 43, 15],

// 19
[3, 141, 113, 4, 142, 114],
[3, 70, 44, 11, 71, 45],
[17, 47, 21, 4, 48, 22],
[9, 39, 13, 16, 40, 14],

// 20
[3, 135, 107, 5, 136, 108],
[3, 67, 41, 13, 68, 42],
[15, 54, 24, 5, 55, 25],
[15, 43, 15, 10, 44, 16],

// 21
[4, 144, 116, 4, 145, 117],
[17, 68, 42],
[17, 50, 22, 6, 51, 23],
[19, 46, 16, 6, 47, 17],

// 22
[2, 139, 111, 7, 140, 112],
[17, 74, 46],
[7, 54, 24, 16, 55, 25],
[34, 37, 13],

// 23
[4, 151, 121, 5, 152, 122],
[4, 75, 47, 14, 76, 48],
[11, 54, 24, 14, 55, 25],
[16, 45, 15, 14, 46, 16],

// 24
[6, 147, 117, 4, 148, 118],
[6, 73, 45, 14, 74, 46],
[11, 54, 24, 16, 55, 25],
[30, 46, 16, 2, 47, 17],

// 25
[8, 132, 106, 4, 133, 107],
[8, 75, 47, 13, 76, 48],
[7, 54, 24, 22, 55, 25],
[22, 45, 15, 13, 46, 16],

// 26
[10, 142, 114, 2, 143, 115],
[19, 74, 46, 4, 75, 47],
[28, 50, 22, 6, 51, 23],
[33, 46, 16, 4, 47, 17],

// 27
[8, 152, 122, 4, 153, 123],
[22, 73, 45, 3, 74, 46],
[8, 53, 23, 26, 54, 24],
[12, 45, 15, 28, 46, 16],

// 28
[3, 147, 117, 10, 148, 118],
[3, 73, 45, 23, 74, 46],
[4, 54, 24, 31, 55, 25],
[11, 45, 15, 31, 46, 16],

// 29
[7, 146, 116, 7, 147, 117],
[21, 73, 45, 7, 74, 46],
[1, 53, 23, 37, 54, 24],
[19, 45, 15, 26, 46, 16],

// 30
[5, 145, 115, 10, 146, 116],
[19, 75, 47, 10, 76, 48],
[15, 54, 24, 25, 55, 25],
[23, 45, 15, 25, 46, 16],

// 31
[13, 145, 115, 3, 146, 116],
[2, 74, 46, 29, 75, 47],
[42, 54, 24, 1, 55, 25],
[23, 45, 15, 28, 46, 16],

// 32
[17, 145, 115],
[10, 74, 46, 23, 75, 47],
[10, 54, 24, 35, 55, 25],
[19, 45, 15, 35, 46, 16],

// 33
[17, 145, 115, 1, 146, 116],
[14, 74, 46, 21, 75, 47],
[29, 54, 24, 19, 55, 25],
[11, 45, 15, 46, 46, 16],

// 34
[13, 145, 115, 6, 146, 116],
[14, 74, 46, 23, 75, 47],
[44, 54, 24, 7, 55, 25],
[59, 46, 16, 1, 47, 17],

// 35
[12, 151, 121, 7, 152, 122],
[12, 75, 47, 26, 76, 48],
[39, 54, 24, 14, 55, 25],
[22, 45, 15, 41, 46, 16],

// 36
[6, 151, 121, 14, 152, 122],
[6, 75, 47, 34, 76, 48],
[46, 54, 24, 10, 55, 25],
[2, 45, 15, 64, 46, 16],

// 37
[17, 152, 122, 4, 153, 123],
[29, 74, 46, 14, 75, 47],
[49, 54, 24, 10, 55, 25],
[24, 45, 15, 46, 46, 16],

// 38
[4, 152, 122, 18, 153, 123],
[13, 74, 46, 32, 75, 47],
[48, 54, 24, 14, 55, 25],
[42, 45, 15, 32, 46, 16],

// 39
[20, 147, 117, 4, 148, 118],
[40, 75, 47, 7, 76, 48],
[43, 54, 24, 22, 55, 25],
[10, 45, 15, 67, 46, 16],

// 40
[19, 148, 118, 6, 149, 119],
[18, 75, 47, 31, 76, 48],
[34, 54, 24, 34, 55, 25],
[20, 45, 15, 61, 46, 16]];


/**
                            * ??????????????????????????????
                            * @return {[type]} [description]
                            */
QRCodeAlg.prototype.getRightType = function () {
  for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
    var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
    if (rsBlock == undefined) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
    }
    var length = rsBlock.length / 3;
    var totalDataCount = 0;
    for (var i = 0; i < length; i++) {
      var count = rsBlock[i * 3 + 0];
      var dataCount = rsBlock[i * 3 + 2];
      totalDataCount += dataCount * count;
    }
    var lengthBytes = typeNumber > 9 ? 2 : 1;
    if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
      this.typeNumber = typeNumber;
      this.rsBlock = rsBlock;
      this.totalDataCount = totalDataCount;
      break;
    }
  }
};

//---------------------------------------------------------------------
// QRBitBuffer
//---------------------------------------------------------------------
function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}
QRBitBuffer.prototype = {
  get: function get(index) {
    var bufIndex = Math.floor(index / 8);
    return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
  },
  put: function put(num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(num >>> length - i - 1 & 1);
    }
  },
  putBit: function putBit(bit) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }
    this.length++;
  } };

/***/ }),

/***/ 3:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // ???????????????????????????
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // ???????????????????????????
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // ???????????? watch ??????????????????????????????
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // ??????????????????uni ??? uni-i18n ????????????????????????????????? uni????????? global ????????? getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // ?????????????????????
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // ????????????????????????uni-i18n ??? uni ????????????????????????????????? uni ????????? undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // ??????$vm????????????????????????????????????????????????????????????????????????props???default????????????t()????????????uni-goods-nav????????????app???????????????
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // ???????????????
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // ???????????????
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // ????????????????????????
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 316:
/*!************************************************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/components/Winglau14-lotusAddress/Winglau14-lotusAddress.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.lotusAddressJson = void 0;var lotusAddressJson = [{ value: "110000", name: "??????" }, { value: "120000", name: "??????" }, { value: "130000", name: "?????????" }, { value: "140000", name: "?????????" }, { value: "150000", name: "??????????????????" }, { value: "210000", name: "?????????" }, { value: "220000", name: "?????????" }, { value: "230000", name: "????????????" }, { value: "310000", name: "??????" }, { value: "320000", name: "?????????" }, { value: "330000", name: "?????????" }, { value: "340000", name: "?????????" }, { value: "350000", name: "?????????" }, { value: "360000", name: "?????????" }, { value: "370000", name: "?????????" }, { value: "410000", name: "?????????" }, { value: "420000", name: "?????????" }, { value: "430000", name: "?????????" }, { value: "440000", name: "?????????" }, { value: "450000", name: "?????????????????????" }, { value: "460000", name: "?????????" }, { value: "500000", name: "??????" }, { value: "510000", name: "?????????" }, { value: "520000", name: "?????????" }, { value: "530000", name: "?????????" }, { value: "540000", name: "???????????????" }, { value: "610000", name: "?????????" }, { value: "620000", name: "?????????" }, { value: "630000", name: "?????????" }, { value: "640000", name: "?????????????????????" }, { value: "650000", name: "????????????????????????" }, { value: "710000", name: "??????" }, { value: "810000", name: "?????????????????????" }, { value: "820000", name: "?????????????????????" }, { value: "990000", name: "??????" }, { value: "110100", name: "?????????", parent: "110000" }, { value: "120100", name: "?????????", parent: "120000" }, { value: "130100", name: "????????????", parent: "130000" }, { value: "130200", name: "?????????", parent: "130000" }, { value: "130300", name: "????????????", parent: "130000" }, { value: "130400", name: "?????????", parent: "130000" }, { value: "130500", name: "?????????", parent: "130000" }, { value: "130600", name: "?????????", parent: "130000" }, { value: "130700", name: "????????????", parent: "130000" }, { value: "130800", name: "?????????", parent: "130000" }, { value: "130900", name: "?????????", parent: "130000" }, { value: "131000", name: "?????????", parent: "130000" }, { value: "131100", name: "?????????", parent: "130000" }, { value: "140100", name: "?????????", parent: "140000" }, { value: "140200", name: "?????????", parent: "140000" }, { value: "140300", name: "?????????", parent: "140000" }, { value: "140400", name: "?????????", parent: "140000" }, { value: "140500", name: "?????????", parent: "140000" }, { value: "140600", name: "?????????", parent: "140000" }, { value: "140700", name: "?????????", parent: "140000" }, { value: "140800", name: "?????????", parent: "140000" }, { value: "140900", name: "?????????", parent: "140000" }, { value: "141000", name: "?????????", parent: "140000" }, { value: "141100", name: "?????????", parent: "140000" }, { value: "150100", name: "???????????????", parent: "150000" }, { value: "150200", name: "?????????", parent: "150000" }, { value: "150300", name: "?????????", parent: "150000" }, { value: "150400", name: "?????????", parent: "150000" }, { value: "150500", name: "?????????", parent: "150000" }, { value: "150600", name: "???????????????", parent: "150000" }, { value: "150700", name: "???????????????", parent: "150000" }, { value: "150800", name: "???????????????", parent: "150000" }, { value: "150900", name: "???????????????", parent: "150000" }, { value: "152200", name: "?????????", parent: "150000" }, { value: "152500", name: "???????????????", parent: "150000" }, { value: "152900", name: "????????????", parent: "150000" }, { value: "210100", name: "?????????", parent: "210000" }, { value: "210200", name: "?????????", parent: "210000" }, { value: "210300", name: "?????????", parent: "210000" }, { value: "210400", name: "?????????", parent: "210000" }, { value: "210500", name: "?????????", parent: "210000" }, { value: "210600", name: "?????????", parent: "210000" }, { value: "210700", name: "?????????", parent: "210000" }, { value: "210800", name: "?????????", parent: "210000" }, { value: "210900", name: "?????????", parent: "210000" }, { value: "211000", name: "?????????", parent: "210000" }, { value: "211100", name: "?????????", parent: "210000" }, { value: "211200", name: "?????????", parent: "210000" }, { value: "211300", name: "?????????", parent: "210000" }, { value: "211400", name: "????????????", parent: "210000" }, { value: "220100", name: "?????????", parent: "220000" }, { value: "220200", name: "?????????", parent: "220000" }, { value: "220300", name: "?????????", parent: "220000" }, { value: "220400", name: "?????????", parent: "220000" }, { value: "220500", name: "?????????", parent: "220000" }, { value: "220600", name: "?????????", parent: "220000" }, { value: "220700", name: "?????????", parent: "220000" }, { value: "220800", name: "?????????", parent: "220000" }, { value: "222400", name: "????????????????????????", parent: "220000" }, { value: "230100", name: "????????????", parent: "230000" }, { value: "230200", name: "???????????????", parent: "230000" }, { value: "230300", name: "?????????", parent: "230000" }, { value: "230400", name: "?????????", parent: "230000" }, { value: "230500", name: "????????????", parent: "230000" }, { value: "230600", name: "?????????", parent: "230000" }, { value: "230700", name: "?????????", parent: "230000" }, { value: "230800", name: "????????????", parent: "230000" }, { value: "230900", name: "????????????", parent: "230000" }, { value: "231000", name: "????????????", parent: "230000" }, { value: "231100", name: "?????????", parent: "230000" }, { value: "231200", name: "?????????", parent: "230000" }, { value: "232700", name: "??????????????????", parent: "230000" }, { value: "310100", name: "?????????", parent: "310000" }, { value: "320100", name: "?????????", parent: "320000" }, { value: "320200", name: "?????????", parent: "320000" }, { value: "320300", name: "?????????", parent: "320000" }, { value: "320400", name: "?????????", parent: "320000" }, { value: "320500", name: "?????????", parent: "320000" }, { value: "320600", name: "?????????", parent: "320000" }, { value: "320700", name: "????????????", parent: "320000" }, { value: "320800", name: "?????????", parent: "320000" }, { value: "320900", name: "?????????", parent: "320000" }, { value: "321000", name: "?????????", parent: "320000" }, { value: "321100", name: "?????????", parent: "320000" }, { value: "321200", name: "?????????", parent: "320000" }, { value: "321300", name: "?????????", parent: "320000" }, { value: "330100", name: "?????????", parent: "330000" }, { value: "330200", name: "?????????", parent: "330000" }, { value: "330300", name: "?????????", parent: "330000" }, { value: "330400", name: "?????????", parent: "330000" }, { value: "330500", name: "?????????", parent: "330000" }, { value: "330600", name: "?????????", parent: "330000" }, { value: "330700", name: "?????????", parent: "330000" }, { value: "330800", name: "?????????", parent: "330000" }, { value: "330900", name: "?????????", parent: "330000" }, { value: "331000", name: "?????????", parent: "330000" }, { value: "331100", name: "?????????", parent: "330000" }, { value: "340100", name: "?????????", parent: "340000" }, { value: "340200", name: "?????????", parent: "340000" }, { value: "340300", name: "?????????", parent: "340000" }, { value: "340400", name: "?????????", parent: "340000" }, { value: "340500", name: "????????????", parent: "340000" }, { value: "340600", name: "?????????", parent: "340000" }, { value: "340700", name: "?????????", parent: "340000" }, { value: "340800", name: "?????????", parent: "340000" }, { value: "341000", name: "?????????", parent: "340000" }, { value: "341100", name: "?????????", parent: "340000" }, { value: "341200", name: "?????????", parent: "340000" }, { value: "341300", name: "?????????", parent: "340000" }, { value: "341500", name: "?????????", parent: "340000" }, { value: "341600", name: "?????????", parent: "340000" }, { value: "341700", name: "?????????", parent: "340000" }, { value: "341800", name: "?????????", parent: "340000" }, { value: "350100", name: "?????????", parent: "350000" }, { value: "350200", name: "?????????", parent: "350000" }, { value: "350300", name: "?????????", parent: "350000" }, { value: "350400", name: "?????????", parent: "350000" }, { value: "350500", name: "?????????", parent: "350000" }, { value: "350600", name: "?????????", parent: "350000" }, { value: "350700", name: "?????????", parent: "350000" }, { value: "350800", name: "?????????", parent: "350000" }, { value: "350900", name: "?????????", parent: "350000" }, { value: "360100", name: "?????????", parent: "360000" }, { value: "360200", name: "????????????", parent: "360000" }, { value: "360300", name: "?????????", parent: "360000" }, { value: "360400", name: "?????????", parent: "360000" }, { value: "360500", name: "?????????", parent: "360000" }, { value: "360600", name: "?????????", parent: "360000" }, { value: "360700", name: "?????????", parent: "360000" }, { value: "360800", name: "?????????", parent: "360000" }, { value: "360900", name: "?????????", parent: "360000" }, { value: "361000", name: "?????????", parent: "360000" }, { value: "361100", name: "?????????", parent: "360000" }, { value: "370100", name: "?????????", parent: "370000" }, { value: "370200", name: "?????????", parent: "370000" }, { value: "370300", name: "?????????", parent: "370000" }, { value: "370400", name: "?????????", parent: "370000" }, { value: "370500", name: "?????????", parent: "370000" }, { value: "370600", name: "?????????", parent: "370000" }, { value: "370700", name: "?????????", parent: "370000" }, { value: "370800", name: "?????????", parent: "370000" }, { value: "370900", name: "?????????", parent: "370000" }, { value: "371000", name: "?????????", parent: "370000" }, { value: "371100", name: "?????????", parent: "370000" }, { value: "371200", name: "?????????", parent: "370000" }, { value: "371300", name: "?????????", parent: "370000" }, { value: "371400", name: "?????????", parent: "370000" }, { value: "371500", name: "?????????", parent: "370000" }, { value: "371600", name: "?????????", parent: "370000" }, { value: "371700", name: "?????????", parent: "370000" }, { value: "410100", name: "?????????", parent: "410000" }, { value: "410200", name: "?????????", parent: "410000" }, { value: "410300", name: "?????????", parent: "410000" }, { value: "410400", name: "????????????", parent: "410000" }, { value: "410500", name: "?????????", parent: "410000" }, { value: "410600", name: "?????????", parent: "410000" }, { value: "410700", name: "?????????", parent: "410000" }, { value: "410800", name: "?????????", parent: "410000" }, { value: "410900", name: "?????????", parent: "410000" }, { value: "411000", name: "?????????", parent: "410000" }, { value: "411100", name: "?????????", parent: "410000" }, { value: "411200", name: "????????????", parent: "410000" }, { value: "411300", name: "?????????", parent: "410000" }, { value: "411400", name: "?????????", parent: "410000" }, { value: "411500", name: "?????????", parent: "410000" }, { value: "411600", name: "?????????", parent: "410000" }, { value: "411700", name: "????????????", parent: "410000" }, { value: "420100", name: "?????????", parent: "420000" }, { value: "420200", name: "?????????", parent: "420000" }, { value: "420300", name: "?????????", parent: "420000" }, { value: "420500", name: "?????????", parent: "420000" }, { value: "420600", name: "?????????", parent: "420000" }, { value: "420700", name: "?????????", parent: "420000" }, { value: "420800", name: "?????????", parent: "420000" }, { value: "420900", name: "?????????", parent: "420000" }, { value: "421000", name: "?????????", parent: "420000" }, { value: "421100", name: "?????????", parent: "420000" }, { value: "421200", name: "?????????", parent: "420000" }, { value: "421300", name: "?????????", parent: "420000" }, { value: "422800", name: "??????????????????????????????", parent: "420000" }, { value: "430100", name: "?????????", parent: "430000" }, { value: "430200", name: "?????????", parent: "430000" }, { value: "430300", name: "?????????", parent: "430000" }, { value: "430400", name: "?????????", parent: "430000" }, { value: "430500", name: "?????????", parent: "430000" }, { value: "430600", name: "?????????", parent: "430000" }, { value: "430700", name: "?????????", parent: "430000" }, { value: "430800", name: "????????????", parent: "430000" }, { value: "430900", name: "?????????", parent: "430000" }, { value: "431000", name: "?????????", parent: "430000" }, { value: "431100", name: "?????????", parent: "430000" }, { value: "431200", name: "?????????", parent: "430000" }, { value: "431300", name: "?????????", parent: "430000" }, { value: "433100", name: "??????????????????????????????", parent: "430000" }, { value: "440100", name: "?????????", parent: "440000" }, { value: "440200", name: "?????????", parent: "440000" }, { value: "440300", name: "?????????", parent: "440000" }, { value: "440400", name: "?????????", parent: "440000" }, { value: "440500", name: "?????????", parent: "440000" }, { value: "440600", name: "?????????", parent: "440000" }, { value: "440700", name: "?????????", parent: "440000" }, { value: "440800", name: "?????????", parent: "440000" }, { value: "440900", name: "?????????", parent: "440000" }, { value: "441200", name: "?????????", parent: "440000" }, { value: "441300", name: "?????????", parent: "440000" }, { value: "441400", name: "?????????", parent: "440000" }, { value: "441500", name: "?????????", parent: "440000" }, { value: "441600", name: "?????????", parent: "440000" }, { value: "441700", name: "?????????", parent: "440000" }, { value: "441800", name: "?????????", parent: "440000" }, { value: "441900", name: "?????????", parent: "440000" }, { value: "442000", name: "?????????", parent: "440000" }, { value: "442101", name: "????????????", parent: "440000" }, { value: "445100", name: "?????????", parent: "440000" }, { value: "445200", name: "?????????", parent: "440000" }, { value: "445300", name: "?????????", parent: "440000" }, { value: "450100", name: "?????????", parent: "450000" }, { value: "450200", name: "?????????", parent: "450000" }, { value: "450300", name: "?????????", parent: "450000" }, { value: "450400", name: "?????????", parent: "450000" }, { value: "450500", name: "?????????", parent: "450000" }, { value: "450600", name: "????????????", parent: "450000" }, { value: "450700", name: "?????????", parent: "450000" }, { value: "450800", name: "?????????", parent: "450000" }, { value: "450900", name: "?????????", parent: "450000" }, { value: "451000", name: "?????????", parent: "450000" }, { value: "451100", name: "?????????", parent: "450000" }, { value: "451200", name: "?????????", parent: "450000" }, { value: "451300", name: "?????????", parent: "450000" }, { value: "451400", name: "?????????", parent: "450000" }, { value: "460100", name: "?????????", parent: "460000" }, { value: "460200", name: "?????????", parent: "460000" }, { value: "460300", name: "?????????", parent: "460000" }, { value: "500100", name: "?????????", parent: "500000" }, { value: "510100", name: "?????????", parent: "510000" }, { value: "510300", name: "?????????", parent: "510000" }, { value: "510400", name: "????????????", parent: "510000" }, { value: "510500", name: "?????????", parent: "510000" }, { value: "510600", name: "?????????", parent: "510000" }, { value: "510700", name: "?????????", parent: "510000" }, { value: "510800", name: "?????????", parent: "510000" }, { value: "510900", name: "?????????", parent: "510000" }, { value: "511000", name: "?????????", parent: "510000" }, { value: "511100", name: "?????????", parent: "510000" }, { value: "511300", name: "?????????", parent: "510000" }, { value: "511400", name: "?????????", parent: "510000" }, { value: "511500", name: "?????????", parent: "510000" }, { value: "511600", name: "?????????", parent: "510000" }, { value: "511700", name: "?????????", parent: "510000" }, { value: "511800", name: "?????????", parent: "510000" }, { value: "511900", name: "?????????", parent: "510000" }, { value: "512000", name: "?????????", parent: "510000" }, { value: "513200", name: "???????????????????????????", parent: "510000" }, { value: "513300", name: "?????????????????????", parent: "510000" }, { value: "513400", name: "?????????????????????", parent: "510000" }, { value: "520100", name: "?????????", parent: "520000" }, { value: "520200", name: "????????????", parent: "520000" }, { value: "520300", name: "?????????", parent: "520000" }, { value: "520400", name: "?????????", parent: "520000" }, { value: "522200", name: "?????????", parent: "520000" }, { value: "522300", name: "?????????????????????????????????", parent: "520000" }, { value: "522400", name: "?????????", parent: "520000" }, { value: "522600", name: "??????????????????????????????", parent: "520000" }, { value: "522700", name: "??????????????????????????????", parent: "520000" }, { value: "530100", name: "?????????", parent: "530000" }, { value: "530300", name: "?????????", parent: "530000" }, { value: "530400", name: "?????????", parent: "530000" }, { value: "530500", name: "?????????", parent: "530000" }, { value: "530600", name: "?????????", parent: "530000" }, { value: "530700", name: "?????????", parent: "530000" }, { value: "530800", name: "?????????", parent: "530000" }, { value: "530900", name: "?????????", parent: "530000" }, { value: "532300", name: "?????????????????????", parent: "530000" }, { value: "532500", name: "??????????????????????????????", parent: "530000" }, { value: "532600", name: "???????????????????????????", parent: "530000" }, { value: "532800", name: "???????????????????????????", parent: "530000" }, { value: "532900", name: "?????????????????????", parent: "530000" }, { value: "533100", name: "??????????????????????????????", parent: "530000" }, { value: "533300", name: "????????????????????????", parent: "530000" }, { value: "533400", name: "?????????????????????", parent: "530000" }, { value: "540100", name: "?????????", parent: "540000" }, { value: "542100", name: "?????????", parent: "540000" }, { value: "542200", name: "????????????", parent: "540000" }, { value: "542300", name: "????????????", parent: "540000" }, { value: "542400", name: "????????????", parent: "540000" }, { value: "542500", name: "????????????", parent: "540000" }, { value: "542600", name: "?????????", parent: "540000" }, { value: "610100", name: "?????????", parent: "610000" }, { value: "610200", name: "?????????", parent: "610000" }, { value: "610300", name: "?????????", parent: "610000" }, { value: "610400", name: "?????????", parent: "610000" }, { value: "610500", name: "?????????", parent: "610000" }, { value: "610600", name: "?????????", parent: "610000" }, { value: "610700", name: "?????????", parent: "610000" }, { value: "610800", name: "?????????", parent: "610000" }, { value: "610900", name: "?????????", parent: "610000" }, { value: "611000", name: "?????????", parent: "610000" }, { value: "620100", name: "?????????", parent: "620000" }, { value: "620200", name: "????????????", parent: "620000" }, { value: "620300", name: "?????????", parent: "620000" }, { value: "620400", name: "?????????", parent: "620000" }, { value: "620500", name: "?????????", parent: "620000" }, { value: "620600", name: "?????????", parent: "620000" }, { value: "620700", name: "?????????", parent: "620000" }, { value: "620800", name: "?????????", parent: "620000" }, { value: "620900", name: "?????????", parent: "620000" }, { value: "621000", name: "?????????", parent: "620000" }, { value: "621100", name: "?????????", parent: "620000" }, { value: "621200", name: "?????????", parent: "620000" }, { value: "622900", name: "?????????????????????", parent: "620000" }, { value: "623000", name: "?????????????????????", parent: "620000" }, { value: "630100", name: "?????????", parent: "630000" }, { value: "632100", name: "?????????", parent: "630000" }, { value: "632200", name: "?????????????????????", parent: "630000" }, { value: "632300", name: "?????????????????????", parent: "630000" }, { value: "632500", name: "?????????????????????", parent: "630000" }, { value: "632600", name: "?????????????????????", parent: "630000" }, { value: "632700", name: "?????????????????????", parent: "630000" }, { value: "632800", name: "??????????????????????????????", parent: "630000" }, { value: "640100", name: "?????????", parent: "640000" }, { value: "640200", name: "????????????", parent: "640000" }, { value: "640300", name: "?????????", parent: "640000" }, { value: "640400", name: "?????????", parent: "640000" }, { value: "640500", name: "?????????", parent: "640000" }, { value: "650100", name: "???????????????", parent: "650000" }, { value: "650200", name: "???????????????", parent: "650000" }, { value: "652100", name: "????????????", parent: "650000" }, { value: "652200", name: "????????????", parent: "650000" }, { value: "652300", name: "?????????????????????", parent: "650000" }, { value: "652700", name: "???????????????????????????", parent: "650000" }, { value: "652800", name: "???????????????????????????", parent: "650000" }, { value: "652900", name: "???????????????", parent: "650000" }, { value: "653000", name: "?????????????????????????????????", parent: "650000" }, { value: "653100", name: "????????????", parent: "650000" }, { value: "653200", name: "????????????", parent: "650000" }, { value: "654000", name: "????????????????????????", parent: "650000" }, { value: "654200", name: "????????????", parent: "650000" }, { value: "654300", name: "???????????????", parent: "650000" }, { value: "659000", name: "???????????????", parent: "650000" }, { value: "710100", name: "?????????", parent: "710000" }, { value: "710200", name: "?????????", parent: "710000" }, { value: "710300", name: "?????????", parent: "710000" }, { value: "710400", name: "?????????", parent: "710000" }, { value: "710500", name: "?????????", parent: "710000" }, { value: "710600", name: "?????????", parent: "710000" }, { value: "710700", name: "?????????", parent: "710000" }, { value: "710800", name: "?????????", parent: "710000" }, { value: "710900", name: "?????????", parent: "710000" }, { value: "711100", name: "?????????", parent: "710000" }, { value: "711200", name: "?????????", parent: "710000" }, { value: "711300", name: "?????????", parent: "710000" }, { value: "711400", name: "?????????", parent: "710000" }, { value: "711500", name: "?????????", parent: "710000" }, { value: "711700", name: "?????????", parent: "710000" }, { value: "711900", name: "?????????", parent: "710000" }, { value: "712100", name: "?????????", parent: "710000" }, { value: "712400", name: "?????????", parent: "710000" }, { value: "712500", name: "?????????", parent: "710000" }, { value: "712600", name: "?????????", parent: "710000" }, { value: "712700", name: "?????????", parent: "710000" }, { value: "712800", name: "?????????", parent: "710000" }, { value: "810100", name: "?????????", parent: "810000" }, { value: "810200", name: "??????", parent: "810000" }, { value: "810300", name: "??????", parent: "810000" }, { value: "820100", name: "????????????", parent: "820000" }, { value: "820200", name: "??????", parent: "820000" }, { value: "990100", name: "??????", parent: "990000" }, { value: "110101", name: "?????????", parent: "110100" }, { value: "110102", name: "?????????", parent: "110100" }, { value: "110103", name: "?????????", parent: "110100" }, { value: "110104", name: "?????????", parent: "110100" }, { value: "110105", name: "?????????", parent: "110100" }, { value: "110106", name: "?????????", parent: "110100" }, { value: "110107", name: "????????????", parent: "110100" }, { value: "110108", name: "?????????", parent: "110100" }, { value: "110109", name: "????????????", parent: "110100" }, { value: "110111", name: "?????????", parent: "110100" }, { value: "110112", name: "?????????", parent: "110100" }, { value: "110113", name: "?????????", parent: "110100" }, { value: "110114", name: "?????????", parent: "110100" }, { value: "110115", name: "?????????", parent: "110100" }, { value: "110116", name: "?????????", parent: "110100" }, { value: "110117", name: "?????????", parent: "110100" }, { value: "110228", name: "?????????", parent: "110100" }, { value: "110229", name: "?????????", parent: "110100" }, { value: "110230", name: "?????????", parent: "110100" }, { value: "120101", name: "?????????", parent: "120100" }, { value: "120102", name: "?????????", parent: "120100" }, { value: "120103", name: "?????????", parent: "120100" }, { value: "120104", name: "?????????", parent: "120100" }, { value: "120105", name: "?????????", parent: "120100" }, { value: "120106", name: "?????????", parent: "120100" }, { value: "120107", name: "?????????", parent: "120100" }, { value: "120108", name: "?????????", parent: "120100" }, { value: "120109", name: "?????????", parent: "120100" }, { value: "120110", name: "?????????", parent: "120100" }, { value: "120111", name: "?????????", parent: "120100" }, { value: "120112", name: "?????????", parent: "120100" }, { value: "120113", name: "?????????", parent: "120100" }, { value: "120114", name: "?????????", parent: "120100" }, { value: "120115", name: "?????????", parent: "120100" }, { value: "120116", name: "????????????", parent: "120100" }, { value: "120221", name: "?????????", parent: "120100" }, { value: "120223", name: "?????????", parent: "120100" }, { value: "120225", name: "??????", parent: "120100" }, { value: "120226", name: "?????????", parent: "120100" }, { value: "130102", name: "?????????", parent: "130100" }, { value: "130103", name: "?????????", parent: "130100" }, { value: "130104", name: "?????????", parent: "130100" }, { value: "130105", name: "?????????", parent: "130100" }, { value: "130107", name: "????????????", parent: "130100" }, { value: "130108", name: "?????????", parent: "130100" }, { value: "130121", name: "?????????", parent: "130100" }, { value: "130123", name: "?????????", parent: "130100" }, { value: "130124", name: "?????????", parent: "130100" }, { value: "130125", name: "?????????", parent: "130100" }, { value: "130126", name: "?????????", parent: "130100" }, { value: "130127", name: "?????????", parent: "130100" }, { value: "130128", name: "?????????", parent: "130100" }, { value: "130129", name: "?????????", parent: "130100" }, { value: "130130", name: "?????????", parent: "130100" }, { value: "130131", name: "?????????", parent: "130100" }, { value: "130132", name: "?????????", parent: "130100" }, { value: "130133", name: "??????", parent: "130100" }, { value: "130181", name: "?????????", parent: "130100" }, { value: "130182", name: "?????????", parent: "130100" }, { value: "130183", name: "?????????", parent: "130100" }, { value: "130184", name: "?????????", parent: "130100" }, { value: "130185", name: "?????????", parent: "130100" }, { value: "130186", name: "?????????", parent: "130100" }, { value: "130202", name: "?????????", parent: "130200" }, { value: "130203", name: "?????????", parent: "130200" }, { value: "130204", name: "?????????", parent: "130200" }, { value: "130205", name: "?????????", parent: "130200" }, { value: "130207", name: "?????????", parent: "130200" }, { value: "130208", name: "?????????", parent: "130200" }, { value: "130223", name: "??????", parent: "130200" }, { value: "130224", name: "?????????", parent: "130200" }, { value: "130225", name: "?????????", parent: "130200" }, { value: "130227", name: "?????????", parent: "130200" }, { value: "130229", name: "?????????", parent: "130200" }, { value: "130230", name: "????????????", parent: "130200" }, { value: "130281", name: "?????????", parent: "130200" }, { value: "130283", name: "?????????", parent: "130200" }, { value: "130284", name: "?????????", parent: "130200" }, { value: "130302", name: "?????????", parent: "130300" }, { value: "130303", name: "????????????", parent: "130300" }, { value: "130304", name: "????????????", parent: "130300" }, { value: "130321", name: "?????????????????????", parent: "130300" }, { value: "130322", name: "?????????", parent: "130300" }, { value: "130323", name: "?????????", parent: "130300" }, { value: "130324", name: "?????????", parent: "130300" }, { value: "130398", name: "?????????", parent: "130300" }, { value: "130399", name: "?????????????????????", parent: "130300" }, { value: "130402", name: "?????????", parent: "130400" }, { value: "130403", name: "?????????", parent: "130400" }, { value: "130404", name: "?????????", parent: "130400" }, { value: "130406", name: "????????????", parent: "130400" }, { value: "130421", name: "?????????", parent: "130400" }, { value: "130423", name: "?????????", parent: "130400" }, { value: "130424", name: "?????????", parent: "130400" }, { value: "130425", name: "?????????", parent: "130400" }, { value: "130426", name: "??????", parent: "130400" }, { value: "130427", name: "??????", parent: "130400" }, { value: "130428", name: "?????????", parent: "130400" }, { value: "130429", name: "?????????", parent: "130400" }, { value: "130430", name: "??????", parent: "130400" }, { value: "130431", name: "?????????", parent: "130400" }, { value: "130432", name: "?????????", parent: "130400" }, { value: "130433", name: "?????????", parent: "130400" }, { value: "130434", name: "??????", parent: "130400" }, { value: "130435", name: "?????????", parent: "130400" }, { value: "130481", name: "?????????", parent: "130400" }, { value: "130482", name: "?????????", parent: "130400" }, { value: "130502", name: "?????????", parent: "130500" }, { value: "130503", name: "?????????", parent: "130500" }, { value: "130521", name: "?????????", parent: "130500" }, { value: "130522", name: "?????????", parent: "130500" }, { value: "130523", name: "?????????", parent: "130500" }, { value: "130524", name: "?????????", parent: "130500" }, { value: "130525", name: "?????????", parent: "130500" }, { value: "130526", name: "??????", parent: "130500" }, { value: "130527", name: "?????????", parent: "130500" }, { value: "130528", name: "?????????", parent: "130500" }, { value: "130529", name: "?????????", parent: "130500" }, { value: "130530", name: "?????????", parent: "130500" }, { value: "130531", name: "?????????", parent: "130500" }, { value: "130532", name: "?????????", parent: "130500" }, { value: "130533", name: "??????", parent: "130500" }, { value: "130534", name: "?????????", parent: "130500" }, { value: "130535", name: "?????????", parent: "130500" }, { value: "130581", name: "?????????", parent: "130500" }, { value: "130582", name: "?????????", parent: "130500" }, { value: "130583", name: "?????????", parent: "130500" }, { value: "130602", name: "?????????", parent: "130600" }, { value: "130603", name: "?????????", parent: "130600" }, { value: "130604", name: "?????????", parent: "130600" }, { value: "130621", name: "?????????", parent: "130600" }, { value: "130622", name: "?????????", parent: "130600" }, { value: "130623", name: "?????????", parent: "130600" }, { value: "130624", name: "?????????", parent: "130600" }, { value: "130625", name: "?????????", parent: "130600" }, { value: "130626", name: "?????????", parent: "130600" }, { value: "130627", name: "??????", parent: "130600" }, { value: "130628", name: "?????????", parent: "130600" }, { value: "130629", name: "?????????", parent: "130600" }, { value: "130630", name: "?????????", parent: "130600" }, { value: "130631", name: "?????????", parent: "130600" }, { value: "130632", name: "?????????", parent: "130600" }, { value: "130633", name: "??????", parent: "130600" }, { value: "130634", name: "?????????", parent: "130600" }, { value: "130635", name: "??????", parent: "130600" }, { value: "130636", name: "?????????", parent: "130600" }, { value: "130637", name: "?????????", parent: "130600" }, { value: "130638", name: "??????", parent: "130600" }, { value: "130681", name: "?????????", parent: "130600" }, { value: "130682", name: "?????????", parent: "130600" }, { value: "130683", name: "?????????", parent: "130600" }, { value: "130684", name: "????????????", parent: "130600" }, { value: "130698", name: "?????????", parent: "130600" }, { value: "130699", name: "?????????", parent: "130600" }, { value: "130702", name: "?????????", parent: "130700" }, { value: "130703", name: "?????????", parent: "130700" }, { value: "130705", name: "?????????", parent: "130700" }, { value: "130706", name: "????????????", parent: "130700" }, { value: "130721", name: "?????????", parent: "130700" }, { value: "130722", name: "?????????", parent: "130700" }, { value: "130723", name: "?????????", parent: "130700" }, { value: "130724", name: "?????????", parent: "130700" }, { value: "130725", name: "?????????", parent: "130700" }, { value: "130726", name: "??????", parent: "130700" }, { value: "130727", name: "?????????", parent: "130700" }, { value: "130728", name: "?????????", parent: "130700" }, { value: "130729", name: "?????????", parent: "130700" }, { value: "130730", name: "?????????", parent: "130700" }, { value: "130731", name: "?????????", parent: "130700" }, { value: "130732", name: "?????????", parent: "130700" }, { value: "130733", name: "?????????", parent: "130700" }, { value: "130734", name: "?????????", parent: "130700" }, { value: "130802", name: "?????????", parent: "130800" }, { value: "130803", name: "?????????", parent: "130800" }, { value: "130804", name: "??????????????????", parent: "130800" }, { value: "130821", name: "?????????", parent: "130800" }, { value: "130822", name: "?????????", parent: "130800" }, { value: "130823", name: "?????????", parent: "130800" }, { value: "130824", name: "?????????", parent: "130800" }, { value: "130825", name: "?????????", parent: "130800" }, { value: "130826", name: "?????????????????????", parent: "130800" }, { value: "130827", name: "?????????????????????", parent: "130800" }, { value: "130828", name: "??????????????????????????????", parent: "130800" }, { value: "130829", name: "?????????", parent: "130800" }, { value: "130902", name: "?????????", parent: "130900" }, { value: "130903", name: "?????????", parent: "130900" }, { value: "130921", name: "??????", parent: "130900" }, { value: "130922", name: "??????", parent: "130900" }, { value: "130923", name: "?????????", parent: "130900" }, { value: "130924", name: "?????????", parent: "130900" }, { value: "130925", name: "?????????", parent: "130900" }, { value: "130926", name: "?????????", parent: "130900" }, { value: "130927", name: "?????????", parent: "130900" }, { value: "130928", name: "?????????", parent: "130900" }, { value: "130929", name: "??????", parent: "130900" }, { value: "130930", name: "?????????????????????", parent: "130900" }, { value: "130981", name: "?????????", parent: "130900" }, { value: "130982", name: "?????????", parent: "130900" }, { value: "130983", name: "?????????", parent: "130900" }, { value: "130984", name: "?????????", parent: "130900" }, { value: "130985", name: "?????????", parent: "130900" }, { value: "131002", name: "?????????", parent: "131000" }, { value: "131003", name: "?????????", parent: "131000" }, { value: "131022", name: "?????????", parent: "131000" }, { value: "131023", name: "?????????", parent: "131000" }, { value: "131024", name: "?????????", parent: "131000" }, { value: "131025", name: "?????????", parent: "131000" }, { value: "131026", name: "?????????", parent: "131000" }, { value: "131028", name: "?????????????????????", parent: "131000" }, { value: "131051", name: "?????????", parent: "131000" }, { value: "131052", name: "???????????????????????????", parent: "131000" }, { value: "131081", name: "?????????", parent: "131000" }, { value: "131082", name: "?????????", parent: "131000" }, { value: "131083", name: "?????????", parent: "131000" }, { value: "131102", name: "?????????", parent: "131100" }, { value: "131121", name: "?????????", parent: "131100" }, { value: "131122", name: "?????????", parent: "131100" }, { value: "131123", name: "?????????", parent: "131100" }, { value: "131124", name: "?????????", parent: "131100" }, { value: "131125", name: "?????????", parent: "131100" }, { value: "131126", name: "?????????", parent: "131100" }, { value: "131127", name: "??????", parent: "131100" }, { value: "131128", name: "?????????", parent: "131100" }, { value: "131181", name: "?????????", parent: "131100" }, { value: "131182", name: "?????????", parent: "131100" }, { value: "131183", name: "?????????", parent: "131100" }, { value: "140105", name: "?????????", parent: "140100" }, { value: "140106", name: "?????????", parent: "140100" }, { value: "140107", name: "????????????", parent: "140100" }, { value: "140108", name: "????????????", parent: "140100" }, { value: "140109", name: "????????????", parent: "140100" }, { value: "140110", name: "?????????", parent: "140100" }, { value: "140121", name: "?????????", parent: "140100" }, { value: "140122", name: "?????????", parent: "140100" }, { value: "140123", name: "?????????", parent: "140100" }, { value: "140181", name: "?????????", parent: "140100" }, { value: "140182", name: "?????????", parent: "140100" }, { value: "140202", name: "??????", parent: "140200" }, { value: "140203", name: "??????", parent: "140200" }, { value: "140211", name: "?????????", parent: "140200" }, { value: "140212", name: "?????????", parent: "140200" }, { value: "140221", name: "?????????", parent: "140200" }, { value: "140222", name: "?????????", parent: "140200" }, { value: "140223", name: "?????????", parent: "140200" }, { value: "140224", name: "?????????", parent: "140200" }, { value: "140225", name: "?????????", parent: "140200" }, { value: "140226", name: "?????????", parent: "140200" }, { value: "140227", name: "?????????", parent: "140200" }, { value: "140228", name: "?????????", parent: "140200" }, { value: "140302", name: "??????", parent: "140300" }, { value: "140303", name: "??????", parent: "140300" }, { value: "140311", name: "??????", parent: "140300" }, { value: "140321", name: "?????????", parent: "140300" }, { value: "140322", name: "??????", parent: "140300" }, { value: "140323", name: "?????????", parent: "140300" }, { value: "140421", name: "?????????", parent: "140400" }, { value: "140423", name: "?????????", parent: "140400" }, { value: "140424", name: "?????????", parent: "140400" }, { value: "140425", name: "?????????", parent: "140400" }, { value: "140426", name: "?????????", parent: "140400" }, { value: "140427", name: "?????????", parent: "140400" }, { value: "140428", name: "?????????", parent: "140400" }, { value: "140429", name: "?????????", parent: "140400" }, { value: "140430", name: "??????", parent: "140400" }, { value: "140431", name: "?????????", parent: "140400" }, { value: "140481", name: "?????????", parent: "140400" }, { value: "140482", name: "??????", parent: "140400" }, { value: "140483", name: "??????", parent: "140400" }, { value: "140484", name: "?????????", parent: "140400" }, { value: "140485", name: "?????????", parent: "140400" }, { value: "140502", name: "??????", parent: "140500" }, { value: "140521", name: "?????????", parent: "140500" }, { value: "140522", name: "?????????", parent: "140500" }, { value: "140524", name: "?????????", parent: "140500" }, { value: "140525", name: "?????????", parent: "140500" }, { value: "140581", name: "?????????", parent: "140500" }, { value: "140582", name: "?????????", parent: "140500" }, { value: "140602", name: "?????????", parent: "140600" }, { value: "140603", name: "?????????", parent: "140600" }, { value: "140621", name: "?????????", parent: "140600" }, { value: "140622", name: "??????", parent: "140600" }, { value: "140623", name: "?????????", parent: "140600" }, { value: "140624", name: "?????????", parent: "140600" }, { value: "140625", name: "?????????", parent: "140600" }, { value: "140702", name: "?????????", parent: "140700" }, { value: "140721", name: "?????????", parent: "140700" }, { value: "140722", name: "?????????", parent: "140700" }, { value: "140723", name: "?????????", parent: "140700" }, { value: "140724", name: "?????????", parent: "140700" }, { value: "140725", name: "?????????", parent: "140700" }, { value: "140726", name: "?????????", parent: "140700" }, { value: "140727", name: "??????", parent: "140700" }, { value: "140728", name: "?????????", parent: "140700" }, { value: "140729", name: "?????????", parent: "140700" }, { value: "140781", name: "?????????", parent: "140700" }, { value: "140782", name: "?????????", parent: "140700" }, { value: "140802", name: "?????????", parent: "140800" }, { value: "140821", name: "?????????", parent: "140800" }, { value: "140822", name: "?????????", parent: "140800" }, { value: "140823", name: "?????????", parent: "140800" }, { value: "140824", name: "?????????", parent: "140800" }, { value: "140825", name: "?????????", parent: "140800" }, { value: "140826", name: "??????", parent: "140800" }, { value: "140827", name: "?????????", parent: "140800" }, { value: "140828", name: "??????", parent: "140800" }, { value: "140829", name: "?????????", parent: "140800" }, { value: "140830", name: "?????????", parent: "140800" }, { value: "140881", name: "?????????", parent: "140800" }, { value: "140882", name: "?????????", parent: "140800" }, { value: "140883", name: "?????????", parent: "140800" }, { value: "140902", name: "?????????", parent: "140900" }, { value: "140921", name: "?????????", parent: "140900" }, { value: "140922", name: "?????????", parent: "140900" }, { value: "140923", name: "??????", parent: "140900" }, { value: "140924", name: "?????????", parent: "140900" }, { value: "140925", name: "?????????", parent: "140900" }, { value: "140926", name: "?????????", parent: "140900" }, { value: "140927", name: "?????????", parent: "140900" }, { value: "140928", name: "?????????", parent: "140900" }, { value: "140929", name: "?????????", parent: "140900" }, { value: "140930", name: "?????????", parent: "140900" }, { value: "140931", name: "?????????", parent: "140900" }, { value: "140932", name: "?????????", parent: "140900" }, { value: "140981", name: "?????????", parent: "140900" }, { value: "140982", name: "?????????", parent: "140900" }, { value: "141002", name: "?????????", parent: "141000" }, { value: "141021", name: "?????????", parent: "141000" }, { value: "141022", name: "?????????", parent: "141000" }, { value: "141023", name: "?????????", parent: "141000" }, { value: "141024", name: "?????????", parent: "141000" }, { value: "141025", name: "??????", parent: "141000" }, { value: "141026", name: "?????????", parent: "141000" }, { value: "141027", name: "?????????", parent: "141000" }, { value: "141028", name: "??????", parent: "141000" }, { value: "141029", name: "?????????", parent: "141000" }, { value: "141030", name: "?????????", parent: "141000" }, { value: "141031", name: "??????", parent: "141000" }, { value: "141032", name: "?????????", parent: "141000" }, { value: "141033", name: "??????", parent: "141000" }, { value: "141034", name: "?????????", parent: "141000" }, { value: "141081", name: "?????????", parent: "141000" }, { value: "141082", name: "?????????", parent: "141000" }, { value: "141083", name: "?????????", parent: "141000" }, { value: "141102", name: "?????????", parent: "141100" }, { value: "141121", name: "?????????", parent: "141100" }, { value: "141122", name: "?????????", parent: "141100" }, { value: "141123", name: "??????", parent: "141100" }, { value: "141124", name: "??????", parent: "141100" }, { value: "141125", name: "?????????", parent: "141100" }, { value: "141126", name: "?????????", parent: "141100" }, { value: "141127", name: "??????", parent: "141100" }, { value: "141128", name: "?????????", parent: "141100" }, { value: "141129", name: "?????????", parent: "141100" }, { value: "141130", name: "?????????", parent: "141100" }, { value: "141181", name: "?????????", parent: "141100" }, { value: "141182", name: "?????????", parent: "141100" }, { value: "141183", name: "?????????", parent: "141100" }, { value: "150102", name: "?????????", parent: "150100" }, { value: "150103", name: "?????????", parent: "150100" }, { value: "150104", name: "?????????", parent: "150100" }, { value: "150105", name: "?????????", parent: "150100" }, { value: "150121", name: "???????????????", parent: "150100" }, { value: "150122", name: "????????????", parent: "150100" }, { value: "150123", name: "???????????????", parent: "150100" }, { value: "150124", name: "????????????", parent: "150100" }, { value: "150125", name: "?????????", parent: "150100" }, { value: "150126", name: "?????????", parent: "150100" }, { value: "150202", name: "?????????", parent: "150200" }, { value: "150203", name: "????????????", parent: "150200" }, { value: "150204", name: "?????????", parent: "150200" }, { value: "150205", name: "?????????", parent: "150200" }, { value: "150206", name: "??????????????????", parent: "150200" }, { value: "150207", name: "?????????", parent: "150200" }, { value: "150221", name: "???????????????", parent: "150200" }, { value: "150222", name: "?????????", parent: "150200" }, { value: "150223", name: "???????????????????????????", parent: "150200" }, { value: "150224", name: "?????????", parent: "150200" }, { value: "150302", name: "????????????", parent: "150300" }, { value: "150303", name: "?????????", parent: "150300" }, { value: "150304", name: "?????????", parent: "150300" }, { value: "150305", name: "?????????", parent: "150300" }, { value: "150402", name: "?????????", parent: "150400" }, { value: "150403", name: "????????????", parent: "150400" }, { value: "150404", name: "?????????", parent: "150400" }, { value: "150421", name: "??????????????????", parent: "150400" }, { value: "150422", name: "????????????", parent: "150400" }, { value: "150423", name: "????????????", parent: "150400" }, { value: "150424", name: "?????????", parent: "150400" }, { value: "150425", name: "???????????????", parent: "150400" }, { value: "150426", name: "????????????", parent: "150400" }, { value: "150428", name: "????????????", parent: "150400" }, { value: "150429", name: "?????????", parent: "150400" }, { value: "150430", name: "?????????", parent: "150400" }, { value: "150431", name: "?????????", parent: "150400" }, { value: "150502", name: "????????????", parent: "150500" }, { value: "150521", name: "?????????????????????", parent: "150500" }, { value: "150522", name: "?????????????????????", parent: "150500" }, { value: "150523", name: "?????????", parent: "150500" }, { value: "150524", name: "?????????", parent: "150500" }, { value: "150525", name: "?????????", parent: "150500" }, { value: "150526", name: "????????????", parent: "150500" }, { value: "150581", name: "???????????????", parent: "150500" }, { value: "150582", name: "?????????", parent: "150500" }, { value: "150602", name: "?????????", parent: "150600" }, { value: "150621", name: "????????????", parent: "150600" }, { value: "150622", name: "????????????", parent: "150600" }, { value: "150623", name: "???????????????", parent: "150600" }, { value: "150624", name: "????????????", parent: "150600" }, { value: "150625", name: "?????????", parent: "150600" }, { value: "150626", name: "?????????", parent: "150600" }, { value: "150627", name: "???????????????", parent: "150600" }, { value: "150628", name: "?????????", parent: "150600" }, { value: "150702", name: "????????????", parent: "150700" }, { value: "150703", name: "???????????????", parent: "150700" }, { value: "150721", name: "?????????", parent: "150700" }, { value: "150722", name: "?????????????????????????????????", parent: "150700" }, { value: "150723", name: "??????????????????", parent: "150700" }, { value: "150724", name: "?????????????????????", parent: "150700" }, { value: "150725", name: "???????????????", parent: "150700" }, { value: "150726", name: "??????????????????", parent: "150700" }, { value: "150727", name: "??????????????????", parent: "150700" }, { value: "150781", name: "????????????", parent: "150700" }, { value: "150782", name: "????????????", parent: "150700" }, { value: "150783", name: "????????????", parent: "150700" }, { value: "150784", name: "???????????????", parent: "150700" }, { value: "150785", name: "?????????", parent: "150700" }, { value: "150786", name: "?????????", parent: "150700" }, { value: "150802", name: "?????????", parent: "150800" }, { value: "150821", name: "?????????", parent: "150800" }, { value: "150822", name: "?????????", parent: "150800" }, { value: "150823", name: "???????????????", parent: "150800" }, { value: "150824", name: "???????????????", parent: "150800" }, { value: "150825", name: "???????????????", parent: "150800" }, { value: "150826", name: "????????????", parent: "150800" }, { value: "150827", name: "?????????", parent: "150800" }, { value: "150902", name: "?????????", parent: "150900" }, { value: "150921", name: "?????????", parent: "150900" }, { value: "150922", name: "?????????", parent: "150900" }, { value: "150923", name: "?????????", parent: "150900" }, { value: "150924", name: "?????????", parent: "150900" }, { value: "150925", name: "?????????", parent: "150900" }, { value: "150926", name: "?????????????????????", parent: "150900" }, { value: "150927", name: "?????????????????????", parent: "150900" }, { value: "150928", name: "?????????????????????", parent: "150900" }, { value: "150929", name: "????????????", parent: "150900" }, { value: "150981", name: "?????????", parent: "150900" }, { value: "150982", name: "?????????", parent: "150900" }, { value: "152201", name: "???????????????", parent: "152200" }, { value: "152202", name: "????????????", parent: "152200" }, { value: "152221", name: "?????????????????????", parent: "152200" }, { value: "152222", name: "?????????????????????", parent: "152200" }, { value: "152223", name: "????????????", parent: "152200" }, { value: "152224", name: "?????????", parent: "152200" }, { value: "152225", name: "?????????", parent: "152200" }, { value: "152501", name: "???????????????", parent: "152500" }, { value: "152502", name: "???????????????", parent: "152500" }, { value: "152522", name: "????????????", parent: "152500" }, { value: "152523", name: "???????????????", parent: "152500" }, { value: "152524", name: "???????????????", parent: "152500" }, { value: "152525", name: "??????????????????", parent: "152500" }, { value: "152526", name: "??????????????????", parent: "152500" }, { value: "152527", name: "????????????", parent: "152500" }, { value: "152528", name: "?????????", parent: "152500" }, { value: "152529", name: "????????????", parent: "152500" }, { value: "152530", name: "?????????", parent: "152500" }, { value: "152531", name: "?????????", parent: "152500" }, { value: "152532", name: "?????????", parent: "152500" }, { value: "152921", name: "???????????????", parent: "152900" }, { value: "152922", name: "???????????????", parent: "152900" }, { value: "152923", name: "????????????", parent: "152900" }, { value: "152924", name: "?????????", parent: "152900" }, { value: "210102", name: "?????????", parent: "210100" }, { value: "210103", name: "?????????", parent: "210100" }, { value: "210104", name: "?????????", parent: "210100" }, { value: "210105", name: "?????????", parent: "210100" }, { value: "210106", name: "?????????", parent: "210100" }, { value: "210111", name: "????????????", parent: "210100" }, { value: "210112", name: "?????????", parent: "210100" }, { value: "210113", name: "????????????", parent: "210100" }, { value: "210114", name: "?????????", parent: "210100" }, { value: "210122", name: "?????????", parent: "210100" }, { value: "210123", name: "?????????", parent: "210100" }, { value: "210124", name: "?????????", parent: "210100" }, { value: "210181", name: "?????????", parent: "210100" }, { value: "210182", name: "????????????", parent: "210100" }, { value: "210183", name: "???????????????", parent: "210100" }, { value: "210184", name: "????????????", parent: "210100" }, { value: "210185", name: "?????????", parent: "210100" }, { value: "210202", name: "?????????", parent: "210200" }, { value: "210203", name: "?????????", parent: "210200" }, { value: "210204", name: "????????????", parent: "210200" }, { value: "210211", name: "????????????", parent: "210200" }, { value: "210212", name: "????????????", parent: "210200" }, { value: "210213", name: "?????????", parent: "210200" }, { value: "210224", name: "?????????", parent: "210200" }, { value: "210251", name: "?????????", parent: "210200" }, { value: "210281", name: "????????????", parent: "210200" }, { value: "210282", name: "????????????", parent: "210200" }, { value: "210283", name: "?????????", parent: "210200" }, { value: "210297", name: "?????????", parent: "210200" }, { value: "210298", name: "?????????", parent: "210200" }, { value: "210302", name: "?????????", parent: "210300" }, { value: "210303", name: "?????????", parent: "210300" }, { value: "210304", name: "?????????", parent: "210300" }, { value: "210311", name: "?????????", parent: "210300" }, { value: "210321", name: "?????????", parent: "210300" }, { value: "210323", name: "?????????????????????", parent: "210300" }, { value: "210351", name: "?????????", parent: "210300" }, { value: "210381", name: "?????????", parent: "210300" }, { value: "210382", name: "?????????", parent: "210300" }, { value: "210402", name: "?????????", parent: "210400" }, { value: "210403", name: "?????????", parent: "210400" }, { value: "210404", name: "?????????", parent: "210400" }, { value: "210411", name: "?????????", parent: "210400" }, { value: "210421", name: "?????????", parent: "210400" }, { value: "210422", name: "?????????????????????", parent: "210400" }, { value: "210423", name: "?????????????????????", parent: "210400" }, { value: "210424", name: "?????????", parent: "210400" }, { value: "210502", name: "?????????", parent: "210500" }, { value: "210503", name: "?????????", parent: "210500" }, { value: "210504", name: "?????????", parent: "210500" }, { value: "210505", name: "?????????", parent: "210500" }, { value: "210521", name: "?????????????????????", parent: "210500" }, { value: "210522", name: "?????????????????????", parent: "210500" }, { value: "210523", name: "?????????", parent: "210500" }, { value: "210602", name: "?????????", parent: "210600" }, { value: "210603", name: "?????????", parent: "210600" }, { value: "210604", name: "?????????", parent: "210600" }, { value: "210624", name: "?????????????????????", parent: "210600" }, { value: "210681", name: "?????????", parent: "210600" }, { value: "210682", name: "?????????", parent: "210600" }, { value: "210683", name: "?????????", parent: "210600" }, { value: "210702", name: "?????????", parent: "210700" }, { value: "210703", name: "?????????", parent: "210700" }, { value: "210711", name: "?????????", parent: "210700" }, { value: "210726", name: "?????????", parent: "210700" }, { value: "210727", name: "??????", parent: "210700" }, { value: "210781", name: "?????????", parent: "210700" }, { value: "210782", name: "?????????", parent: "210700" }, { value: "210783", name: "?????????", parent: "210700" }, { value: "210802", name: "?????????", parent: "210800" }, { value: "210803", name: "?????????", parent: "210800" }, { value: "210804", name: "????????????", parent: "210800" }, { value: "210811", name: "?????????", parent: "210800" }, { value: "210881", name: "?????????", parent: "210800" }, { value: "210882", name: "????????????", parent: "210800" }, { value: "210883", name: "?????????", parent: "210800" }, { value: "210902", name: "?????????", parent: "210900" }, { value: "210903", name: "?????????", parent: "210900" }, { value: "210904", name: "?????????", parent: "210900" }, { value: "210905", name: "????????????", parent: "210900" }, { value: "210911", name: "?????????", parent: "210900" }, { value: "210921", name: "????????????????????????", parent: "210900" }, { value: "210922", name: "?????????", parent: "210900" }, { value: "210923", name: "?????????", parent: "210900" }, { value: "211002", name: "?????????", parent: "211000" }, { value: "211003", name: "?????????", parent: "211000" }, { value: "211004", name: "?????????", parent: "211000" }, { value: "211005", name: "????????????", parent: "211000" }, { value: "211011", name: "????????????", parent: "211000" }, { value: "211021", name: "?????????", parent: "211000" }, { value: "211081", name: "?????????", parent: "211000" }, { value: "211082", name: "?????????", parent: "211000" }, { value: "211102", name: "????????????", parent: "211100" }, { value: "211103", name: "????????????", parent: "211100" }, { value: "211121", name: "?????????", parent: "211100" }, { value: "211122", name: "?????????", parent: "211100" }, { value: "211123", name: "?????????", parent: "211100" }, { value: "211202", name: "?????????", parent: "211200" }, { value: "211204", name: "?????????", parent: "211200" }, { value: "211221", name: "?????????", parent: "211200" }, { value: "211223", name: "?????????", parent: "211200" }, { value: "211224", name: "?????????", parent: "211200" }, { value: "211281", name: "????????????", parent: "211200" }, { value: "211282", name: "?????????", parent: "211200" }, { value: "211283", name: "?????????", parent: "211200" }, { value: "211302", name: "?????????", parent: "211300" }, { value: "211303", name: "?????????", parent: "211300" }, { value: "211321", name: "?????????", parent: "211300" }, { value: "211322", name: "?????????", parent: "211300" }, { value: "211324", name: "?????????????????????????????????", parent: "211300" }, { value: "211381", name: "?????????", parent: "211300" }, { value: "211382", name: "?????????", parent: "211300" }, { value: "211383", name: "?????????", parent: "211300" }, { value: "211402", name: "?????????", parent: "211400" }, { value: "211403", name: "?????????", parent: "211400" }, { value: "211404", name: "?????????", parent: "211400" }, { value: "211421", name: "?????????", parent: "211400" }, { value: "211422", name: "?????????", parent: "211400" }, { value: "211481", name: "?????????", parent: "211400" }, { value: "211482", name: "?????????", parent: "211400" }, { value: "220102", name: "?????????", parent: "220100" }, { value: "220103", name: "?????????", parent: "220100" }, { value: "220104", name: "?????????", parent: "220100" }, { value: "220105", name: "?????????", parent: "220100" }, { value: "220106", name: "?????????", parent: "220100" }, { value: "220112", name: "?????????", parent: "220100" }, { value: "220122", name: "?????????", parent: "220100" }, { value: "220181", name: "?????????", parent: "220100" }, { value: "220182", name: "?????????", parent: "220100" }, { value: "220183", name: "?????????", parent: "220100" }, { value: "220184", name: "???????????????????????????", parent: "220100" }, { value: "220185", name: "?????????????????????", parent: "220100" }, { value: "220186", name: "?????????????????????", parent: "220100" }, { value: "220187", name: "?????????????????????", parent: "220100" }, { value: "220188", name: "?????????", parent: "220100" }, { value: "220202", name: "?????????", parent: "220200" }, { value: "220203", name: "?????????", parent: "220200" }, { value: "220204", name: "?????????", parent: "220200" }, { value: "220211", name: "?????????", parent: "220200" }, { value: "220221", name: "?????????", parent: "220200" }, { value: "220281", name: "?????????", parent: "220200" }, { value: "220282", name: "?????????", parent: "220200" }, { value: "220283", name: "?????????", parent: "220200" }, { value: "220284", name: "?????????", parent: "220200" }, { value: "220285", name: "?????????", parent: "220200" }, { value: "220302", name: "?????????", parent: "220300" }, { value: "220303", name: "?????????", parent: "220300" }, { value: "220322", name: "?????????", parent: "220300" }, { value: "220323", name: "?????????????????????", parent: "220300" }, { value: "220381", name: "????????????", parent: "220300" }, { value: "220382", name: "?????????", parent: "220300" }, { value: "220383", name: "?????????", parent: "220300" }, { value: "220402", name: "?????????", parent: "220400" }, { value: "220403", name: "?????????", parent: "220400" }, { value: "220421", name: "?????????", parent: "220400" }, { value: "220422", name: "?????????", parent: "220400" }, { value: "220423", name: "?????????", parent: "220400" }, { value: "220502", name: "?????????", parent: "220500" }, { value: "220503", name: "????????????", parent: "220500" }, { value: "220521", name: "?????????", parent: "220500" }, { value: "220523", name: "?????????", parent: "220500" }, { value: "220524", name: "?????????", parent: "220500" }, { value: "220581", name: "????????????", parent: "220500" }, { value: "220582", name: "?????????", parent: "220500" }, { value: "220583", name: "?????????", parent: "220500" }, { value: "220602", name: "?????????", parent: "220600" }, { value: "220621", name: "?????????", parent: "220600" }, { value: "220622", name: "?????????", parent: "220600" }, { value: "220623", name: "????????????????????????", parent: "220600" }, { value: "220625", name: "?????????", parent: "220600" }, { value: "220681", name: "?????????", parent: "220600" }, { value: "220682", name: "?????????", parent: "220600" }, { value: "220702", name: "?????????", parent: "220700" }, { value: "220721", name: "?????????????????????????????????", parent: "220700" }, { value: "220722", name: "?????????", parent: "220700" }, { value: "220723", name: "?????????", parent: "220700" }, { value: "220724", name: "?????????", parent: "220700" }, { value: "220725", name: "?????????", parent: "220700" }, { value: "220802", name: "?????????", parent: "220800" }, { value: "220821", name: "?????????", parent: "220800" }, { value: "220822", name: "?????????", parent: "220800" }, { value: "220881", name: "?????????", parent: "220800" }, { value: "220882", name: "?????????", parent: "220800" }, { value: "220883", name: "?????????", parent: "220800" }, { value: "222401", name: "?????????", parent: "222400" }, { value: "222402", name: "?????????", parent: "222400" }, { value: "222403", name: "?????????", parent: "222400" }, { value: "222404", name: "?????????", parent: "222400" }, { value: "222405", name: "?????????", parent: "222400" }, { value: "222406", name: "?????????", parent: "222400" }, { value: "222424", name: "?????????", parent: "222400" }, { value: "222426", name: "?????????", parent: "222400" }, { value: "222427", name: "?????????", parent: "222400" }, { value: "230102", name: "?????????", parent: "230100" }, { value: "230103", name: "?????????", parent: "230100" }, { value: "230104", name: "?????????", parent: "230100" }, { value: "230106", name: "?????????", parent: "230100" }, { value: "230107", name: "?????????", parent: "230100" }, { value: "230108", name: "?????????", parent: "230100" }, { value: "230109", name: "?????????", parent: "230100" }, { value: "230111", name: "?????????", parent: "230100" }, { value: "230123", name: "?????????", parent: "230100" }, { value: "230124", name: "?????????", parent: "230100" }, { value: "230125", name: "??????", parent: "230100" }, { value: "230126", name: "?????????", parent: "230100" }, { value: "230127", name: "?????????", parent: "230100" }, { value: "230128", name: "?????????", parent: "230100" }, { value: "230129", name: "?????????", parent: "230100" }, { value: "230181", name: "?????????", parent: "230100" }, { value: "230182", name: "?????????", parent: "230100" }, { value: "230183", name: "?????????", parent: "230100" }, { value: "230184", name: "?????????", parent: "230100" }, { value: "230185", name: "?????????", parent: "230100" }, { value: "230186", name: "?????????", parent: "230100" }, { value: "230202", name: "?????????", parent: "230200" }, { value: "230203", name: "?????????", parent: "230200" }, { value: "230204", name: "?????????", parent: "230200" }, { value: "230205", name: "????????????", parent: "230200" }, { value: "230206", name: "???????????????", parent: "230200" }, { value: "230207", name: "????????????", parent: "230200" }, { value: "230208", name: "????????????????????????", parent: "230200" }, { value: "230221", name: "?????????", parent: "230200" }, { value: "230223", name: "?????????", parent: "230200" }, { value: "230224", name: "?????????", parent: "230200" }, { value: "230225", name: "?????????", parent: "230200" }, { value: "230227", name: "?????????", parent: "230200" }, { value: "230229", name: "?????????", parent: "230200" }, { value: "230230", name: "?????????", parent: "230200" }, { value: "230231", name: "?????????", parent: "230200" }, { value: "230281", name: "?????????", parent: "230200" }, { value: "230282", name: "?????????", parent: "230200" }, { value: "230302", name: "?????????", parent: "230300" }, { value: "230303", name: "?????????", parent: "230300" }, { value: "230304", name: "?????????", parent: "230300" }, { value: "230305", name: "?????????", parent: "230300" }, { value: "230306", name: "????????????", parent: "230300" }, { value: "230307", name: "?????????", parent: "230300" }, { value: "230321", name: "?????????", parent: "230300" }, { value: "230381", name: "?????????", parent: "230300" }, { value: "230382", name: "?????????", parent: "230300" }, { value: "230383", name: "?????????", parent: "230300" }, { value: "230402", name: "?????????", parent: "230400" }, { value: "230403", name: "?????????", parent: "230400" }, { value: "230404", name: "?????????", parent: "230400" }, { value: "230405", name: "?????????", parent: "230400" }, { value: "230406", name: "?????????", parent: "230400" }, { value: "230407", name: "?????????", parent: "230400" }, { value: "230421", name: "?????????", parent: "230400" }, { value: "230422", name: "?????????", parent: "230400" }, { value: "230423", name: "?????????", parent: "230400" }, { value: "230502", name: "?????????", parent: "230500" }, { value: "230503", name: "?????????", parent: "230500" }, { value: "230505", name: "????????????", parent: "230500" }, { value: "230506", name: "?????????", parent: "230500" }, { value: "230521", name: "?????????", parent: "230500" }, { value: "230522", name: "?????????", parent: "230500" }, { value: "230523", name: "?????????", parent: "230500" }, { value: "230524", name: "?????????", parent: "230500" }, { value: "230525", name: "?????????", parent: "230500" }, { value: "230602", name: "????????????", parent: "230600" }, { value: "230603", name: "?????????", parent: "230600" }, { value: "230604", name: "????????????", parent: "230600" }, { value: "230605", name: "?????????", parent: "230600" }, { value: "230606", name: "?????????", parent: "230600" }, { value: "230621", name: "?????????", parent: "230600" }, { value: "230622", name: "?????????", parent: "230600" }, { value: "230623", name: "?????????", parent: "230600" }, { value: "230624", name: "??????????????????????????????", parent: "230600" }, { value: "230625", name: "?????????", parent: "230600" }, { value: "230702", name: "?????????", parent: "230700" }, { value: "230703", name: "?????????", parent: "230700" }, { value: "230704", name: "?????????", parent: "230700" }, { value: "230705", name: "?????????", parent: "230700" }, { value: "230706", name: "?????????", parent: "230700" }, { value: "230707", name: "?????????", parent: "230700" }, { value: "230708", name: "?????????", parent: "230700" }, { value: "230709", name: "????????????", parent: "230700" }, { value: "230710", name: "?????????", parent: "230700" }, { value: "230711", name: "????????????", parent: "230700" }, { value: "230712", name: "????????????", parent: "230700" }, { value: "230713", name: "?????????", parent: "230700" }, { value: "230714", name: "????????????", parent: "230700" }, { value: "230715", name: "?????????", parent: "230700" }, { value: "230716", name: "????????????", parent: "230700" }, { value: "230722", name: "?????????", parent: "230700" }, { value: "230781", name: "?????????", parent: "230700" }, { value: "230782", name: "?????????", parent: "230700" }, { value: "230802", name: "?????????", parent: "230800" }, { value: "230803", name: "?????????", parent: "230800" }, { value: "230804", name: "?????????", parent: "230800" }, { value: "230805", name: "?????????", parent: "230800" }, { value: "230811", name: "??????", parent: "230800" }, { value: "230822", name: "?????????", parent: "230800" }, { value: "230826", name: "?????????", parent: "230800" }, { value: "230828", name: "?????????", parent: "230800" }, { value: "230833", name: "?????????", parent: "230800" }, { value: "230881", name: "?????????", parent: "230800" }, { value: "230882", name: "?????????", parent: "230800" }, { value: "230883", name: "?????????", parent: "230800" }, { value: "230902", name: "?????????", parent: "230900" }, { value: "230903", name: "?????????", parent: "230900" }, { value: "230904", name: "????????????", parent: "230900" }, { value: "230921", name: "?????????", parent: "230900" }, { value: "230922", name: "?????????", parent: "230900" }, { value: "231002", name: "?????????", parent: "231000" }, { value: "231003", name: "?????????", parent: "231000" }, { value: "231004", name: "?????????", parent: "231000" }, { value: "231005", name: "?????????", parent: "231000" }, { value: "231024", name: "?????????", parent: "231000" }, { value: "231025", name: "?????????", parent: "231000" }, { value: "231081", name: "????????????", parent: "231000" }, { value: "231083", name: "?????????", parent: "231000" }, { value: "231084", name: "?????????", parent: "231000" }, { value: "231085", name: "?????????", parent: "231000" }, { value: "231086", name: "?????????", parent: "231000" }, { value: "231102", name: "?????????", parent: "231100" }, { value: "231121", name: "?????????", parent: "231100" }, { value: "231123", name: "?????????", parent: "231100" }, { value: "231124", name: "?????????", parent: "231100" }, { value: "231181", name: "?????????", parent: "231100" }, { value: "231182", name: "???????????????", parent: "231100" }, { value: "231183", name: "?????????", parent: "231100" }, { value: "231202", name: "?????????", parent: "231200" }, { value: "231221", name: "?????????", parent: "231200" }, { value: "231222", name: "?????????", parent: "231200" }, { value: "231223", name: "?????????", parent: "231200" }, { value: "231224", name: "?????????", parent: "231200" }, { value: "231225", name: "?????????", parent: "231200" }, { value: "231226", name: "?????????", parent: "231200" }, { value: "231281", name: "?????????", parent: "231200" }, { value: "231282", name: "?????????", parent: "231200" }, { value: "231283", name: "?????????", parent: "231200" }, { value: "231284", name: "?????????", parent: "231200" }, { value: "232702", name: "?????????", parent: "232700" }, { value: "232703", name: "?????????", parent: "232700" }, { value: "232704", name: "?????????", parent: "232700" }, { value: "232721", name: "?????????", parent: "232700" }, { value: "232722", name: "?????????", parent: "232700" }, { value: "232723", name: "?????????", parent: "232700" }, { value: "232724", name: "???????????????", parent: "232700" }, { value: "232725", name: "?????????", parent: "232700" }, { value: "310101", name: "?????????", parent: "310100" }, { value: "310103", name: "?????????", parent: "310100" }, { value: "310104", name: "?????????", parent: "310100" }, { value: "310105", name: "?????????", parent: "310100" }, { value: "310106", name: "?????????", parent: "310100" }, { value: "310107", name: "?????????", parent: "310100" }, { value: "310108", name: "?????????", parent: "310100" }, { value: "310109", name: "?????????", parent: "310100" }, { value: "310110", name: "?????????", parent: "310100" }, { value: "310112", name: "?????????", parent: "310100" }, { value: "310113", name: "?????????", parent: "310100" }, { value: "310114", name: "?????????", parent: "310100" }, { value: "310115", name: "????????????", parent: "310100" }, { value: "310116", name: "?????????", parent: "310100" }, { value: "310117", name: "?????????", parent: "310100" }, { value: "310118", name: "?????????", parent: "310100" }, { value: "310119", name: "?????????", parent: "310100" }, { value: "310120", name: "?????????", parent: "310100" }, { value: "310152", name: "?????????", parent: "310100" }, { value: "310230", name: "?????????", parent: "310100" }, { value: "310231", name: "?????????", parent: "310100" }, { value: "320102", name: "?????????", parent: "320100" }, { value: "320103", name: "?????????", parent: "320100" }, { value: "320104", name: "?????????", parent: "320100" }, { value: "320105", name: "?????????", parent: "320100" }, { value: "320106", name: "?????????", parent: "320100" }, { value: "320107", name: "?????????", parent: "320100" }, { value: "320111", name: "?????????", parent: "320100" }, { value: "320113", name: "?????????", parent: "320100" }, { value: "320114", name: "????????????", parent: "320100" }, { value: "320115", name: "?????????", parent: "320100" }, { value: "320116", name: "?????????", parent: "320100" }, { value: "320124", name: "?????????", parent: "320100" }, { value: "320125", name: "?????????", parent: "320100" }, { value: "320126", name: "?????????", parent: "320100" }, { value: "320202", name: "?????????", parent: "320200" }, { value: "320203", name: "?????????", parent: "320200" }, { value: "320204", name: "?????????", parent: "320200" }, { value: "320205", name: "?????????", parent: "320200" }, { value: "320206", name: "?????????", parent: "320200" }, { value: "320211", name: "?????????", parent: "320200" }, { value: "320213", name: "?????????", parent: "320200" }, { value: "320214", name: "?????????", parent: "320200" }, { value: "320281", name: "?????????", parent: "320200" }, { value: "320282", name: "?????????", parent: "320200" }, { value: "320296", name: "??????", parent: "320200" }, { value: "320297", name: "?????????", parent: "320200" }, { value: "320302", name: "?????????", parent: "320300" }, { value: "320303", name: "?????????", parent: "320300" }, { value: "320304", name: "?????????", parent: "320300" }, { value: "320305", name: "?????????", parent: "320300" }, { value: "320311", name: "?????????", parent: "320300" }, { value: "320321", name: "??????", parent: "320300" }, { value: "320322", name: "??????", parent: "320300" }, { value: "320323", name: "?????????", parent: "320300" }, { value: "320324", name: "?????????", parent: "320300" }, { value: "320381", name: "?????????", parent: "320300" }, { value: "320382", name: "?????????", parent: "320300" }, { value: "320383", name: "?????????", parent: "320300" }, { value: "320402", name: "?????????", parent: "320400" }, { value: "320404", name: "?????????", parent: "320400" }, { value: "320405", name: "????????????", parent: "320400" }, { value: "320411", name: "?????????", parent: "320400" }, { value: "320412", name: "?????????", parent: "320400" }, { value: "320481", name: "?????????", parent: "320400" }, { value: "320482", name: "?????????", parent: "320400" }, { value: "320483", name: "?????????", parent: "320400" }, { value: "320502", name: "?????????", parent: "320500" }, { value: "320503", name: "?????????", parent: "320500" }, { value: "320504", name: "?????????", parent: "320500" }, { value: "320505", name: "?????????", parent: "320500" }, { value: "320506", name: "?????????", parent: "320500" }, { value: "320507", name: "?????????", parent: "320500" }, { value: "320508", name: "?????????", parent: "320500" }, { value: "320581", name: "?????????", parent: "320500" }, { value: "320582", name: "????????????", parent: "320500" }, { value: "320583", name: "?????????", parent: "320500" }, { value: "320584", name: "?????????", parent: "320500" }, { value: "320585", name: "?????????", parent: "320500" }, { value: "320594", name: "??????", parent: "320500" }, { value: "320595", name: "??????", parent: "320500" }, { value: "320596", name: "?????????", parent: "320500" }, { value: "320602", name: "?????????", parent: "320600" }, { value: "320611", name: "?????????", parent: "320600" }, { value: "320612", name: "?????????", parent: "320600" }, { value: "320621", name: "?????????", parent: "320600" }, { value: "320623", name: "?????????", parent: "320600" }, { value: "320681", name: "?????????", parent: "320600" }, { value: "320682", name: "?????????", parent: "320600" }, { value: "320683", name: "?????????", parent: "320600" }, { value: "320684", name: "?????????", parent: "320600" }, { value: "320693", name: "?????????", parent: "320600" }, { value: "320694", name: "?????????", parent: "320600" }, { value: "320703", name: "?????????", parent: "320700" }, { value: "320705", name: "?????????", parent: "320700" }, { value: "320706", name: "?????????", parent: "320700" }, { value: "320721", name: "?????????", parent: "320700" }, { value: "320722", name: "?????????", parent: "320700" }, { value: "320723", name: "?????????", parent: "320700" }, { value: "320724", name: "?????????", parent: "320700" }, { value: "320725", name: "?????????", parent: "320700" }, { value: "320802", name: "?????????", parent: "320800" }, { value: "320803", name: "?????????", parent: "320800" }, { value: "320804", name: "?????????", parent: "320800" }, { value: "320811", name: "?????????", parent: "320800" }, { value: "320826", name: "?????????", parent: "320800" }, { value: "320829", name: "?????????", parent: "320800" }, { value: "320830", name: "?????????", parent: "320800" }, { value: "320831", name: "?????????", parent: "320800" }, { value: "320832", name: "?????????", parent: "320800" }, { value: "320902", name: "?????????", parent: "320900" }, { value: "320903", name: "?????????", parent: "320900" }, { value: "320921", name: "?????????", parent: "320900" }, { value: "320922", name: "?????????", parent: "320900" }, { value: "320923", name: "?????????", parent: "320900" }, { value: "320924", name: "?????????", parent: "320900" }, { value: "320925", name: "?????????", parent: "320900" }, { value: "320981", name: "?????????", parent: "320900" }, { value: "320982", name: "?????????", parent: "320900" }, { value: "320983", name: "?????????", parent: "320900" }, { value: "321002", name: "?????????", parent: "321000" }, { value: "321003", name: "?????????", parent: "321000" }, { value: "321011", name: "?????????", parent: "321000" }, { value: "321023", name: "?????????", parent: "321000" }, { value: "321081", name: "?????????", parent: "321000" }, { value: "321084", name: "?????????", parent: "321000" }, { value: "321088", name: "?????????", parent: "321000" }, { value: "321092", name: "???????????????", parent: "321000" }, { value: "321093", name: "?????????", parent: "321000" }, { value: "321102", name: "?????????", parent: "321100" }, { value: "321111", name: "?????????", parent: "321100" }, { value: "321112", name: "?????????", parent: "321100" }, { value: "321181", name: "?????????", parent: "321100" }, { value: "321182", name: "?????????", parent: "321100" }, { value: "321183", name: "?????????", parent: "321100" }, { value: "321184", name: "?????????", parent: "321100" }, { value: "321202", name: "?????????", parent: "321200" }, { value: "321203", name: "?????????", parent: "321200" }, { value: "321281", name: "?????????", parent: "321200" }, { value: "321282", name: "?????????", parent: "321200" }, { value: "321283", name: "?????????", parent: "321200" }, { value: "321284", name: "?????????", parent: "321200" }, { value: "321285", name: "?????????", parent: "321200" }, { value: "321302", name: "?????????", parent: "321300" }, { value: "321311", name: "?????????", parent: "321300" }, { value: "321322", name: "?????????", parent: "321300" }, { value: "321323", name: "?????????", parent: "321300" }, { value: "321324", name: "?????????", parent: "321300" }, { value: "321325", name: "?????????", parent: "321300" }, { value: "330102", name: "?????????", parent: "330100" }, { value: "330103", name: "?????????", parent: "330100" }, { value: "330104", name: "?????????", parent: "330100" }, { value: "330105", name: "?????????", parent: "330100" }, { value: "330106", name: "?????????", parent: "330100" }, { value: "330108", name: "?????????", parent: "330100" }, { value: "330109", name: "?????????", parent: "330100" }, { value: "330110", name: "?????????", parent: "330100" }, { value: "330122", name: "?????????", parent: "330100" }, { value: "330127", name: "?????????", parent: "330100" }, { value: "330182", name: "?????????", parent: "330100" }, { value: "330183", name: "?????????", parent: "330100" }, { value: "330185", name: "?????????", parent: "330100" }, { value: "330186", name: "?????????", parent: "330100" }, { value: "330203", name: "?????????", parent: "330200" }, { value: "330204", name: "?????????", parent: "330200" }, { value: "330205", name: "?????????", parent: "330200" }, { value: "330206", name: "?????????", parent: "330200" }, { value: "330211", name: "?????????", parent: "330200" }, { value: "330212", name: "?????????", parent: "330200" }, { value: "330225", name: "?????????", parent: "330200" }, { value: "330226", name: "?????????", parent: "330200" }, { value: "330281", name: "?????????", parent: "330200" }, { value: "330282", name: "?????????", parent: "330200" }, { value: "330283", name: "?????????", parent: "330200" }, { value: "330284", name: "?????????", parent: "330200" }, { value: "330302", name: "?????????", parent: "330300" }, { value: "330303", name: "?????????", parent: "330300" }, { value: "330304", name: "?????????", parent: "330300" }, { value: "330322", name: "?????????", parent: "330300" }, { value: "330324", name: "?????????", parent: "330300" }, { value: "330326", name: "?????????", parent: "330300" }, { value: "330327", name: "?????????", parent: "330300" }, { value: "330328", name: "?????????", parent: "330300" }, { value: "330329", name: "?????????", parent: "330300" }, { value: "330381", name: "?????????", parent: "330300" }, { value: "330382", name: "?????????", parent: "330300" }, { value: "330383", name: "?????????", parent: "330300" }, { value: "330402", name: "?????????", parent: "330400" }, { value: "330411", name: "?????????", parent: "330400" }, { value: "330421", name: "?????????", parent: "330400" }, { value: "330424", name: "?????????", parent: "330400" }, { value: "330481", name: "?????????", parent: "330400" }, { value: "330482", name: "?????????", parent: "330400" }, { value: "330483", name: "?????????", parent: "330400" }, { value: "330484", name: "?????????", parent: "330400" }, { value: "330502", name: "?????????", parent: "330500" }, { value: "330503", name: "?????????", parent: "330500" }, { value: "330521", name: "?????????", parent: "330500" }, { value: "330522", name: "?????????", parent: "330500" }, { value: "330523", name: "?????????", parent: "330500" }, { value: "330524", name: "?????????", parent: "330500" }, { value: "330602", name: "?????????", parent: "330600" }, { value: "330621", name: "?????????", parent: "330600" }, { value: "330624", name: "?????????", parent: "330600" }, { value: "330681", name: "?????????", parent: "330600" }, { value: "330682", name: "?????????", parent: "330600" }, { value: "330683", name: "?????????", parent: "330600" }, { value: "330684", name: "?????????", parent: "330600" }, { value: "330702", name: "?????????", parent: "330700" }, { value: "330703", name: "?????????", parent: "330700" }, { value: "330723", name: "?????????", parent: "330700" }, { value: "330726", name: "?????????", parent: "330700" }, { value: "330727", name: "?????????", parent: "330700" }, { value: "330781", name: "?????????", parent: "330700" }, { value: "330782", name: "?????????", parent: "330700" }, { value: "330783", name: "?????????", parent: "330700" }, { value: "330784", name: "?????????", parent: "330700" }, { value: "330785", name: "?????????", parent: "330700" }, { value: "330802", name: "?????????", parent: "330800" }, { value: "330803", name: "?????????", parent: "330800" }, { value: "330822", name: "?????????", parent: "330800" }, { value: "330824", name: "?????????", parent: "330800" }, { value: "330825", name: "?????????", parent: "330800" }, { value: "330881", name: "?????????", parent: "330800" }, { value: "330882", name: "?????????", parent: "330800" }, { value: "330902", name: "?????????", parent: "330900" }, { value: "330903", name: "?????????", parent: "330900" }, { value: "330921", name: "?????????", parent: "330900" }, { value: "330922", name: "?????????", parent: "330900" }, { value: "330923", name: "?????????", parent: "330900" }, { value: "331002", name: "?????????", parent: "331000" }, { value: "331003", name: "?????????", parent: "331000" }, { value: "331004", name: "?????????", parent: "331000" }, { value: "331021", name: "?????????", parent: "331000" }, { value: "331022", name: "?????????", parent: "331000" }, { value: "331023", name: "?????????", parent: "331000" }, { value: "331024", name: "?????????", parent: "331000" }, { value: "331081", name: "?????????", parent: "331000" }, { value: "331082", name: "?????????", parent: "331000" }, { value: "331083", name: "?????????", parent: "331000" }, { value: "331102", name: "?????????", parent: "331100" }, { value: "331121", name: "?????????", parent: "331100" }, { value: "331122", name: "?????????", parent: "331100" }, { value: "331123", name: "?????????", parent: "331100" }, { value: "331124", name: "?????????", parent: "331100" }, { value: "331125", name: "?????????", parent: "331100" }, { value: "331126", name: "?????????", parent: "331100" }, { value: "331127", name: "?????????????????????", parent: "331100" }, { value: "331181", name: "?????????", parent: "331100" }, { value: "331182", name: "?????????", parent: "331100" }, { value: "340102", name: "?????????", parent: "340100" }, { value: "340103", name: "?????????", parent: "340100" }, { value: "340104", name: "?????????", parent: "340100" }, { value: "340111", name: "?????????", parent: "340100" }, { value: "340121", name: "?????????", parent: "340100" }, { value: "340122", name: "?????????", parent: "340100" }, { value: "340123", name: "?????????", parent: "340100" }, { value: "340151", name: "?????????", parent: "340100" }, { value: "340191", name: "??????", parent: "340100" }, { value: "340192", name: "?????????", parent: "340100" }, { value: "340202", name: "?????????", parent: "340200" }, { value: "340203", name: "?????????", parent: "340200" }, { value: "340207", name: "?????????", parent: "340200" }, { value: "340208", name: "?????????", parent: "340200" }, { value: "340221", name: "?????????", parent: "340200" }, { value: "340222", name: "?????????", parent: "340200" }, { value: "340223", name: "?????????", parent: "340200" }, { value: "340224", name: "?????????", parent: "340200" }, { value: "340302", name: "????????????", parent: "340300" }, { value: "340303", name: "?????????", parent: "340300" }, { value: "340304", name: "?????????", parent: "340300" }, { value: "340311", name: "?????????", parent: "340300" }, { value: "340321", name: "?????????", parent: "340300" }, { value: "340322", name: "?????????", parent: "340300" }, { value: "340323", name: "?????????", parent: "340300" }, { value: "340324", name: "?????????", parent: "340300" }, { value: "340402", name: "?????????", parent: "340400" }, { value: "340403", name: "????????????", parent: "340400" }, { value: "340404", name: "????????????", parent: "340400" }, { value: "340405", name: "????????????", parent: "340400" }, { value: "340406", name: "?????????", parent: "340400" }, { value: "340421", name: "?????????", parent: "340400" }, { value: "340422", name: "?????????", parent: "340400" }, { value: "340499", name: "??????", parent: "340400" }, { value: "340502", name: "????????????", parent: "340500" }, { value: "340503", name: "?????????", parent: "340500" }, { value: "340504", name: "?????????", parent: "340500" }, { value: "340506", name: "?????????", parent: "340500" }, { value: "340521", name: "?????????", parent: "340500" }, { value: "340522", name: "?????????", parent: "340500" }, { value: "340602", name: "?????????", parent: "340600" }, { value: "340603", name: "?????????", parent: "340600" }, { value: "340604", name: "?????????", parent: "340600" }, { value: "340621", name: "?????????", parent: "340600" }, { value: "340622", name: "?????????", parent: "340600" }, { value: "340702", name: "????????????", parent: "340700" }, { value: "340703", name: "????????????", parent: "340700" }, { value: "340705", name: "?????????", parent: "340700" }, { value: "340711", name: "??????", parent: "340700" }, { value: "340721", name: "?????????", parent: "340700" }, { value: "340722", name: "?????????", parent: "340700" }, { value: "340799", name: "?????????", parent: "340700" }, { value: "340802", name: "?????????", parent: "340800" }, { value: "340803", name: "?????????", parent: "340800" }, { value: "340811", name: "?????????", parent: "340800" }, { value: "340822", name: "?????????", parent: "340800" }, { value: "340823", name: "?????????", parent: "340800" }, { value: "340824", name: "?????????", parent: "340800" }, { value: "340825", name: "?????????", parent: "340800" }, { value: "340826", name: "?????????", parent: "340800" }, { value: "340827", name: "?????????", parent: "340800" }, { value: "340828", name: "?????????", parent: "340800" }, { value: "340881", name: "?????????", parent: "340800" }, { value: "340882", name: "?????????", parent: "340800" }, { value: "341002", name: "?????????", parent: "341000" }, { value: "341003", name: "?????????", parent: "341000" }, { value: "341004", name: "?????????", parent: "341000" }, { value: "341021", name: "??????", parent: "341000" }, { value: "341022", name: "?????????", parent: "341000" }, { value: "341023", name: "??????", parent: "341000" }, { value: "341024", name: "?????????", parent: "341000" }, { value: "341025", name: "?????????", parent: "341000" }, { value: "341102", name: "?????????", parent: "341100" }, { value: "341103", name: "?????????", parent: "341100" }, { value: "341122", name: "?????????", parent: "341100" }, { value: "341124", name: "?????????", parent: "341100" }, { value: "341125", name: "?????????", parent: "341100" }, { value: "341126", name: "?????????", parent: "341100" }, { value: "341181", name: "?????????", parent: "341100" }, { value: "341182", name: "?????????", parent: "341100" }, { value: "341183", name: "?????????", parent: "341100" }, { value: "341202", name: "?????????", parent: "341200" }, { value: "341203", name: "?????????", parent: "341200" }, { value: "341204", name: "?????????", parent: "341200" }, { value: "341221", name: "?????????", parent: "341200" }, { value: "341222", name: "?????????", parent: "341200" }, { value: "341225", name: "?????????", parent: "341200" }, { value: "341226", name: "?????????", parent: "341200" }, { value: "341282", name: "?????????", parent: "341200" }, { value: "341283", name: "?????????", parent: "341200" }, { value: "341302", name: "?????????", parent: "341300" }, { value: "341321", name: "?????????", parent: "341300" }, { value: "341322", name: "??????", parent: "341300" }, { value: "341323", name: "?????????", parent: "341300" }, { value: "341324", name: "??????", parent: "341300" }, { value: "341325", name: "?????????", parent: "341300" }, { value: "341400", name: "?????????", parent: "340100" }, { value: "341402", name: "?????????", parent: "340100" }, { value: "341421", name: "?????????", parent: "340100" }, { value: "341422", name: "?????????", parent: "340200" }, { value: "341423", name: "?????????", parent: "340500" }, { value: "341424", name: "??????", parent: "340500" }, { value: "341502", name: "?????????", parent: "341500" }, { value: "341503", name: "?????????", parent: "341500" }, { value: "341504", name: "?????????", parent: "341500" }, { value: "341521", name: "??????", parent: "341500" }, { value: "341522", name: "?????????", parent: "341500" }, { value: "341523", name: "?????????", parent: "341500" }, { value: "341524", name: "?????????", parent: "341500" }, { value: "341525", name: "?????????", parent: "341500" }, { value: "341526", name: "?????????", parent: "341500" }, { value: "341602", name: "?????????", parent: "341600" }, { value: "341621", name: "?????????", parent: "341600" }, { value: "341622", name: "?????????", parent: "341600" }, { value: "341623", name: "?????????", parent: "341600" }, { value: "341624", name: "?????????", parent: "341600" }, { value: "341702", name: "?????????", parent: "341700" }, { value: "341721", name: "?????????", parent: "341700" }, { value: "341722", name: "?????????", parent: "341700" }, { value: "341723", name: "?????????", parent: "341700" }, { value: "341724", name: "?????????", parent: "341700" }, { value: "341802", name: "?????????", parent: "341800" }, { value: "341821", name: "?????????", parent: "341800" }, { value: "341822", name: "?????????", parent: "341800" }, { value: "341823", name: "??????", parent: "341800" }, { value: "341824", name: "?????????", parent: "341800" }, { value: "341825", name: "?????????", parent: "341800" }, { value: "341881", name: "?????????", parent: "341800" }, { value: "341882", name: "?????????", parent: "341800" }, { value: "350102", name: "?????????", parent: "350100" }, { value: "350103", name: "?????????", parent: "350100" }, { value: "350104", name: "?????????", parent: "350100" }, { value: "350105", name: "?????????", parent: "350100" }, { value: "350111", name: "?????????", parent: "350100" }, { value: "350121", name: "?????????", parent: "350100" }, { value: "350122", name: "?????????", parent: "350100" }, { value: "350123", name: "?????????", parent: "350100" }, { value: "350124", name: "?????????", parent: "350100" }, { value: "350125", name: "?????????", parent: "350100" }, { value: "350128", name: "?????????", parent: "350100" }, { value: "350181", name: "?????????", parent: "350100" }, { value: "350182", name: "?????????", parent: "350100" }, { value: "350183", name: "?????????", parent: "350100" }, { value: "350203", name: "?????????", parent: "350200" }, { value: "350205", name: "?????????", parent: "350200" }, { value: "350206", name: "?????????", parent: "350200" }, { value: "350211", name: "?????????", parent: "350200" }, { value: "350212", name: "?????????", parent: "350200" }, { value: "350213", name: "?????????", parent: "350200" }, { value: "350214", name: "?????????", parent: "350200" }, { value: "350302", name: "?????????", parent: "350300" }, { value: "350303", name: "?????????", parent: "350300" }, { value: "350304", name: "?????????", parent: "350300" }, { value: "350305", name: "?????????", parent: "350300" }, { value: "350322", name: "?????????", parent: "350300" }, { value: "350323", name: "?????????", parent: "350300" }, { value: "350402", name: "?????????", parent: "350400" }, { value: "350403", name: "?????????", parent: "350400" }, { value: "350421", name: "?????????", parent: "350400" }, { value: "350423", name: "?????????", parent: "350400" }, { value: "350424", name: "?????????", parent: "350400" }, { value: "350425", name: "?????????", parent: "350400" }, { value: "350426", name: "?????????", parent: "350400" }, { value: "350427", name: "??????", parent: "350400" }, { value: "350428", name: "?????????", parent: "350400" }, { value: "350429", name: "?????????", parent: "350400" }, { value: "350430", name: "?????????", parent: "350400" }, { value: "350481", name: "?????????", parent: "350400" }, { value: "350482", name: "?????????", parent: "350400" }, { value: "350502", name: "?????????", parent: "350500" }, { value: "350503", name: "?????????", parent: "350500" }, { value: "350504", name: "?????????", parent: "350500" }, { value: "350505", name: "?????????", parent: "350500" }, { value: "350521", name: "?????????", parent: "350500" }, { value: "350524", name: "?????????", parent: "350500" }, { value: "350525", name: "?????????", parent: "350500" }, { value: "350526", name: "?????????", parent: "350500" }, { value: "350527", name: "?????????", parent: "350500" }, { value: "350581", name: "?????????", parent: "350500" }, { value: "350582", name: "?????????", parent: "350500" }, { value: "350583", name: "?????????", parent: "350500" }, { value: "350584", name: "?????????", parent: "350500" }, { value: "350602", name: "?????????", parent: "350600" }, { value: "350603", name: "?????????", parent: "350600" }, { value: "350622", name: "?????????", parent: "350600" }, { value: "350623", name: "?????????", parent: "350600" }, { value: "350624", name: "?????????", parent: "350600" }, { value: "350625", name: "?????????", parent: "350600" }, { value: "350626", name: "?????????", parent: "350600" }, { value: "350627", name: "?????????", parent: "350600" }, { value: "350628", name: "?????????", parent: "350600" }, { value: "350629", name: "?????????", parent: "350600" }, { value: "350681", name: "?????????", parent: "350600" }, { value: "350682", name: "?????????", parent: "350600" }, { value: "350702", name: "?????????", parent: "350700" }, { value: "350721", name: "?????????", parent: "350700" }, { value: "350722", name: "?????????", parent: "350700" }, { value: "350723", name: "?????????", parent: "350700" }, { value: "350724", name: "?????????", parent: "350700" }, { value: "350725", name: "?????????", parent: "350700" }, { value: "350781", name: "?????????", parent: "350700" }, { value: "350782", name: "????????????", parent: "350700" }, { value: "350783", name: "?????????", parent: "350700" }, { value: "350784", name: "?????????", parent: "350700" }, { value: "350785", name: "?????????", parent: "350700" }, { value: "350802", name: "?????????", parent: "350800" }, { value: "350821", name: "?????????", parent: "350800" }, { value: "350822", name: "?????????", parent: "350800" }, { value: "350823", name: "?????????", parent: "350800" }, { value: "350824", name: "?????????", parent: "350800" }, { value: "350825", name: "?????????", parent: "350800" }, { value: "350881", name: "?????????", parent: "350800" }, { value: "350882", name: "?????????", parent: "350800" }, { value: "350902", name: "?????????", parent: "350900" }, { value: "350921", name: "?????????", parent: "350900" }, { value: "350922", name: "?????????", parent: "350900" }, { value: "350923", name: "?????????", parent: "350900" }, { value: "350924", name: "?????????", parent: "350900" }, { value: "350925", name: "?????????", parent: "350900" }, { value: "350926", name: "?????????", parent: "350900" }, { value: "350981", name: "?????????", parent: "350900" }, { value: "350982", name: "?????????", parent: "350900" }, { value: "350983", name: "?????????", parent: "350900" }, { value: "360102", name: "?????????", parent: "360100" }, { value: "360103", name: "?????????", parent: "360100" }, { value: "360104", name: "????????????", parent: "360100" }, { value: "360105", name: "?????????", parent: "360100" }, { value: "360111", name: "????????????", parent: "360100" }, { value: "360121", name: "?????????", parent: "360100" }, { value: "360122", name: "?????????", parent: "360100" }, { value: "360123", name: "?????????", parent: "360100" }, { value: "360124", name: "?????????", parent: "360100" }, { value: "360125", name: "???????????????", parent: "360100" }, { value: "360126", name: "?????????????????????", parent: "360100" }, { value: "360127", name: "?????????", parent: "360100" }, { value: "360128", name: "?????????", parent: "360100" }, { value: "360202", name: "?????????", parent: "360200" }, { value: "360203", name: "?????????", parent: "360200" }, { value: "360222", name: "?????????", parent: "360200" }, { value: "360281", name: "?????????", parent: "360200" }, { value: "360282", name: "?????????", parent: "360200" }, { value: "360302", name: "?????????", parent: "360300" }, { value: "360313", name: "?????????", parent: "360300" }, { value: "360321", name: "?????????", parent: "360300" }, { value: "360322", name: "?????????", parent: "360300" }, { value: "360323", name: "?????????", parent: "360300" }, { value: "360324", name: "?????????", parent: "360300" }, { value: "360402", name: "?????????", parent: "360400" }, { value: "360403", name: "?????????", parent: "360400" }, { value: "360421", name: "?????????", parent: "360400" }, { value: "360423", name: "?????????", parent: "360400" }, { value: "360424", name: "?????????", parent: "360400" }, { value: "360425", name: "?????????", parent: "360400" }, { value: "360426", name: "?????????", parent: "360400" }, { value: "360427", name: "?????????", parent: "360400" }, { value: "360428", name: "?????????", parent: "360400" }, { value: "360429", name: "?????????", parent: "360400" }, { value: "360430", name: "?????????", parent: "360400" }, { value: "360481", name: "?????????", parent: "360400" }, { value: "360482", name: "?????????", parent: "360400" }, { value: "360483", name: "????????????", parent: "360400" }, { value: "360502", name: "?????????", parent: "360500" }, { value: "360521", name: "?????????", parent: "360500" }, { value: "360522", name: "?????????", parent: "360500" }, { value: "360602", name: "?????????", parent: "360600" }, { value: "360622", name: "?????????", parent: "360600" }, { value: "360681", name: "?????????", parent: "360600" }, { value: "360682", name: "?????????", parent: "360600" }, { value: "360702", name: "?????????", parent: "360700" }, { value: "360721", name: "??????", parent: "360700" }, { value: "360722", name: "?????????", parent: "360700" }, { value: "360723", name: "?????????", parent: "360700" }, { value: "360724", name: "?????????", parent: "360700" }, { value: "360725", name: "?????????", parent: "360700" }, { value: "360726", name: "?????????", parent: "360700" }, { value: "360727", name: "?????????", parent: "360700" }, { value: "360728", name: "?????????", parent: "360700" }, { value: "360729", name: "?????????", parent: "360700" }, { value: "360730", name: "?????????", parent: "360700" }, { value: "360731", name: "?????????", parent: "360700" }, { value: "360732", name: "?????????", parent: "360700" }, { value: "360733", name: "?????????", parent: "360700" }, { value: "360734", name: "?????????", parent: "360700" }, { value: "360735", name: "?????????", parent: "360700" }, { value: "360751", name: "?????????", parent: "360700" }, { value: "360781", name: "?????????", parent: "360700" }, { value: "360782", name: "?????????", parent: "360700" }, { value: "360783", name: "?????????", parent: "360700" }, { value: "360802", name: "?????????", parent: "360800" }, { value: "360803", name: "?????????", parent: "360800" }, { value: "360821", name: "?????????", parent: "360800" }, { value: "360822", name: "?????????", parent: "360800" }, { value: "360823", name: "?????????", parent: "360800" }, { value: "360824", name: "?????????", parent: "360800" }, { value: "360825", name: "?????????", parent: "360800" }, { value: "360826", name: "?????????", parent: "360800" }, { value: "360827", name: "?????????", parent: "360800" }, { value: "360828", name: "?????????", parent: "360800" }, { value: "360829", name: "?????????", parent: "360800" }, { value: "360830", name: "?????????", parent: "360800" }, { value: "360881", name: "????????????", parent: "360800" }, { value: "360882", name: "?????????", parent: "360800" }, { value: "360902", name: "?????????", parent: "360900" }, { value: "360921", name: "?????????", parent: "360900" }, { value: "360922", name: "?????????", parent: "360900" }, { value: "360923", name: "?????????", parent: "360900" }, { value: "360924", name: "?????????", parent: "360900" }, { value: "360925", name: "?????????", parent: "360900" }, { value: "360926", name: "?????????", parent: "360900" }, { value: "360981", name: "?????????", parent: "360900" }, { value: "360982", name: "?????????", parent: "360900" }, { value: "360983", name: "?????????", parent: "360900" }, { value: "360984", name: "?????????", parent: "360900" }, { value: "361002", name: "?????????", parent: "361000" }, { value: "361021", name: "?????????", parent: "361000" }, { value: "361022", name: "?????????", parent: "361000" }, { value: "361023", name: "?????????", parent: "361000" }, { value: "361024", name: "?????????", parent: "361000" }, { value: "361025", name: "?????????", parent: "361000" }, { value: "361026", name: "?????????", parent: "361000" }, { value: "361027", name: "?????????", parent: "361000" }, { value: "361028", name: "?????????", parent: "361000" }, { value: "361029", name: "?????????", parent: "361000" }, { value: "361030", name: "?????????", parent: "361000" }, { value: "361031", name: "?????????", parent: "361000" }, { value: "361102", name: "?????????", parent: "361100" }, { value: "361121", name: "?????????", parent: "361100" }, { value: "361122", name: "?????????", parent: "361100" }, { value: "361123", name: "?????????", parent: "361100" }, { value: "361124", name: "?????????", parent: "361100" }, { value: "361125", name: "?????????", parent: "361100" }, { value: "361126", name: "?????????", parent: "361100" }, { value: "361127", name: "?????????", parent: "361100" }, { value: "361128", name: "?????????", parent: "361100" }, { value: "361129", name: "?????????", parent: "361100" }, { value: "361130", name: "?????????", parent: "361100" }, { value: "361181", name: "?????????", parent: "361100" }, { value: "361182", name: "?????????", parent: "361100" }, { value: "370102", name: "?????????", parent: "370100" }, { value: "370103", name: "?????????", parent: "370100" }, { value: "370104", name: "?????????", parent: "370100" }, { value: "370105", name: "?????????", parent: "370100" }, { value: "370112", name: "?????????", parent: "370100" }, { value: "370113", name: "?????????", parent: "370100" }, { value: "370124", name: "?????????", parent: "370100" }, { value: "370125", name: "?????????", parent: "370100" }, { value: "370126", name: "?????????", parent: "370100" }, { value: "370181", name: "?????????", parent: "370100" }, { value: "370182", name: "?????????", parent: "370100" }, { value: "370202", name: "?????????", parent: "370200" }, { value: "370203", name: "?????????", parent: "370200" }, { value: "370205", name: "?????????", parent: "370200" }, { value: "370211", name: "?????????", parent: "370200" }, { value: "370212", name: "?????????", parent: "370200" }, { value: "370213", name: "?????????", parent: "370200" }, { value: "370214", name: "?????????", parent: "370200" }, { value: "370251", name: "?????????", parent: "370200" }, { value: "370281", name: "?????????", parent: "370200" }, { value: "370282", name: "?????????", parent: "370200" }, { value: "370283", name: "?????????", parent: "370200" }, { value: "370284", name: "?????????", parent: "370200" }, { value: "370285", name: "?????????", parent: "370200" }, { value: "370286", name: "?????????", parent: "370200" }, { value: "370302", name: "?????????", parent: "370300" }, { value: "370303", name: "?????????", parent: "370300" }, { value: "370304", name: "?????????", parent: "370300" }, { value: "370305", name: "?????????", parent: "370300" }, { value: "370306", name: "?????????", parent: "370300" }, { value: "370321", name: "?????????", parent: "370300" }, { value: "370322", name: "?????????", parent: "370300" }, { value: "370323", name: "?????????", parent: "370300" }, { value: "370324", name: "?????????", parent: "370300" }, { value: "370402", name: "?????????", parent: "370400" }, { value: "370403", name: "?????????", parent: "370400" }, { value: "370404", name: "?????????", parent: "370400" }, { value: "370405", name: "????????????", parent: "370400" }, { value: "370406", name: "?????????", parent: "370400" }, { value: "370481", name: "?????????", parent: "370400" }, { value: "370482", name: "?????????", parent: "370400" }, { value: "370502", name: "?????????", parent: "370500" }, { value: "370503", name: "?????????", parent: "370500" }, { value: "370521", name: "?????????", parent: "370500" }, { value: "370522", name: "?????????", parent: "370500" }, { value: "370523", name: "?????????", parent: "370500" }, { value: "370589", name: "?????????", parent: "370500" }, { value: "370590", name: "?????????", parent: "370500" }, { value: "370591", name: "?????????", parent: "370500" }, { value: "370602", name: "?????????", parent: "370600" }, { value: "370611", name: "?????????", parent: "370600" }, { value: "370612", name: "?????????", parent: "370600" }, { value: "370613", name: "?????????", parent: "370600" }, { value: "370634", name: "?????????", parent: "370600" }, { value: "370681", name: "?????????", parent: "370600" }, { value: "370682", name: "?????????", parent: "370600" }, { value: "370683", name: "?????????", parent: "370600" }, { value: "370684", name: "?????????", parent: "370600" }, { value: "370685", name: "?????????", parent: "370600" }, { value: "370686", name: "?????????", parent: "370600" }, { value: "370687", name: "?????????", parent: "370600" }, { value: "370688", name: "?????????", parent: "370600" }, { value: "370702", name: "?????????", parent: "370700" }, { value: "370703", name: "?????????", parent: "370700" }, { value: "370704", name: "?????????", parent: "370700" }, { value: "370705", name: "?????????", parent: "370700" }, { value: "370724", name: "?????????", parent: "370700" }, { value: "370725", name: "?????????", parent: "370700" }, { value: "370751", name: "?????????", parent: "370700" }, { value: "370781", name: "?????????", parent: "370700" }, { value: "370782", name: "?????????", parent: "370700" }, { value: "370783", name: "?????????", parent: "370700" }, { value: "370784", name: "?????????", parent: "370700" }, { value: "370785", name: "?????????", parent: "370700" }, { value: "370786", name: "?????????", parent: "370700" }, { value: "370787", name: "?????????", parent: "370700" }, { value: "370802", name: "?????????", parent: "370800" }, { value: "370811", name: "?????????", parent: "370800" }, { value: "370826", name: "?????????", parent: "370800" }, { value: "370827", name: "?????????", parent: "370800" }, { value: "370828", name: "?????????", parent: "370800" }, { value: "370829", name: "?????????", parent: "370800" }, { value: "370830", name: "?????????", parent: "370800" }, { value: "370831", name: "?????????", parent: "370800" }, { value: "370832", name: "?????????", parent: "370800" }, { value: "370881", name: "?????????", parent: "370800" }, { value: "370882", name: "?????????", parent: "370800" }, { value: "370883", name: "?????????", parent: "370800" }, { value: "370884", name: "?????????", parent: "370800" }, { value: "370902", name: "?????????", parent: "370900" }, { value: "370903", name: "?????????", parent: "370900" }, { value: "370921", name: "?????????", parent: "370900" }, { value: "370923", name: "?????????", parent: "370900" }, { value: "370982", name: "?????????", parent: "370900" }, { value: "370983", name: "?????????", parent: "370900" }, { value: "370984", name: "?????????", parent: "370900" }, { value: "371002", name: "?????????", parent: "371000" }, { value: "371081", name: "?????????", parent: "371000" }, { value: "371082", name: "?????????", parent: "371000" }, { value: "371083", name: "?????????", parent: "371000" }, { value: "371084", name: "?????????", parent: "371000" }, { value: "371102", name: "?????????", parent: "371100" }, { value: "371103", name: "?????????", parent: "371100" }, { value: "371121", name: "?????????", parent: "371100" }, { value: "371122", name: "??????", parent: "371100" }, { value: "371123", name: "?????????", parent: "371100" }, { value: "371202", name: "?????????", parent: "371200" }, { value: "371203", name: "?????????", parent: "371200" }, { value: "371204", name: "?????????", parent: "371200" }, { value: "371302", name: "?????????", parent: "371300" }, { value: "371311", name: "?????????", parent: "371300" }, { value: "371312", name: "?????????", parent: "371300" }, { value: "371321", name: "?????????", parent: "371300" }, { value: "371322", name: "?????????", parent: "371300" }, { value: "371323", name: "?????????", parent: "371300" }, { value: "371324", name: "?????????", parent: "371300" }, { value: "371325", name: "??????", parent: "371300" }, { value: "371326", name: "?????????", parent: "371300" }, { value: "371327", name: "?????????", parent: "371300" }, { value: "371328", name: "?????????", parent: "371300" }, { value: "371329", name: "?????????", parent: "371300" }, { value: "371330", name: "?????????", parent: "371300" }, { value: "371402", name: "?????????", parent: "371400" }, { value: "371421", name: "?????????", parent: "371400" }, { value: "371422", name: "?????????", parent: "371400" }, { value: "371423", name: "?????????", parent: "371400" }, { value: "371424", name: "?????????", parent: "371400" }, { value: "371425", name: "?????????", parent: "371400" }, { value: "371426", name: "?????????", parent: "371400" }, { value: "371427", name: "?????????", parent: "371400" }, { value: "371428", name: "?????????", parent: "371400" }, { value: "371451", name: "?????????", parent: "371400" }, { value: "371481", name: "?????????", parent: "371400" }, { value: "371482", name: "?????????", parent: "371400" }, { value: "371483", name: "?????????", parent: "371400" }, { value: "371502", name: "????????????", parent: "371500" }, { value: "371521", name: "?????????", parent: "371500" }, { value: "371522", name: "??????", parent: "371500" }, { value: "371523", name: "?????????", parent: "371500" }, { value: "371524", name: "?????????", parent: "371500" }, { value: "371525", name: "??????", parent: "371500" }, { value: "371526", name: "?????????", parent: "371500" }, { value: "371581", name: "?????????", parent: "371500" }, { value: "371582", name: "?????????", parent: "371500" }, { value: "371602", name: "?????????", parent: "371600" }, { value: "371621", name: "?????????", parent: "371600" }, { value: "371622", name: "?????????", parent: "371600" }, { value: "371623", name: "?????????", parent: "371600" }, { value: "371624", name: "?????????", parent: "371600" }, { value: "371625", name: "?????????", parent: "371600" }, { value: "371626", name: "?????????", parent: "371600" }, { value: "371627", name: "?????????", parent: "371600" }, { value: "371702", name: "?????????", parent: "371700" }, { value: "371721", name: "??????", parent: "371700" }, { value: "371722", name: "??????", parent: "371700" }, { value: "371723", name: "?????????", parent: "371700" }, { value: "371724", name: "?????????", parent: "371700" }, { value: "371725", name: "?????????", parent: "371700" }, { value: "371726", name: "?????????", parent: "371700" }, { value: "371727", name: "?????????", parent: "371700" }, { value: "371728", name: "?????????", parent: "371700" }, { value: "371729", name: "?????????", parent: "371700" }, { value: "410102", name: "?????????", parent: "410100" }, { value: "410103", name: "?????????", parent: "410100" }, { value: "410104", name: "???????????????", parent: "410100" }, { value: "410105", name: "?????????", parent: "410100" }, { value: "410106", name: "?????????", parent: "410100" }, { value: "410108", name: "?????????", parent: "410100" }, { value: "410122", name: "?????????", parent: "410100" }, { value: "410181", name: "?????????", parent: "410100" }, { value: "410182", name: "?????????", parent: "410100" }, { value: "410183", name: "?????????", parent: "410100" }, { value: "410184", name: "?????????", parent: "410100" }, { value: "410185", name: "?????????", parent: "410100" }, { value: "410186", name: "????????????", parent: "410100" }, { value: "410187", name: "?????????", parent: "410100" }, { value: "410188", name: "?????????", parent: "410100" }, { value: "410202", name: "?????????", parent: "410200" }, { value: "410203", name: "???????????????", parent: "410200" }, { value: "410204", name: "?????????", parent: "410200" }, { value: "410205", name: "????????????", parent: "410200" }, { value: "410211", name: "?????????", parent: "410200" }, { value: "410221", name: "??????", parent: "410200" }, { value: "410222", name: "?????????", parent: "410200" }, { value: "410223", name: "?????????", parent: "410200" }, { value: "410224", name: "?????????", parent: "410200" }, { value: "410225", name: "?????????", parent: "410200" }, { value: "410226", name: "?????????", parent: "410200" }, { value: "410302", name: "?????????", parent: "410300" }, { value: "410303", name: "?????????", parent: "410300" }, { value: "410304", name: "???????????????", parent: "410300" }, { value: "410305", name: "?????????", parent: "410300" }, { value: "410306", name: "?????????", parent: "410300" }, { value: "410307", name: "?????????", parent: "410300" }, { value: "410322", name: "?????????", parent: "410300" }, { value: "410323", name: "?????????", parent: "410300" }, { value: "410324", name: "?????????", parent: "410300" }, { value: "410325", name: "??????", parent: "410300" }, { value: "410326", name: "?????????", parent: "410300" }, { value: "410327", name: "?????????", parent: "410300" }, { value: "410328", name: "?????????", parent: "410300" }, { value: "410329", name: "?????????", parent: "410300" }, { value: "410381", name: "?????????", parent: "410300" }, { value: "410402", name: "?????????", parent: "410400" }, { value: "410403", name: "?????????", parent: "410400" }, { value: "410404", name: "?????????", parent: "410400" }, { value: "410411", name: "?????????", parent: "410400" }, { value: "410421", name: "?????????", parent: "410400" }, { value: "410422", name: "??????", parent: "410400" }, { value: "410423", name: "?????????", parent: "410400" }, { value: "410425", name: "??????", parent: "410400" }, { value: "410481", name: "?????????", parent: "410400" }, { value: "410482", name: "?????????", parent: "410400" }, { value: "410483", name: "?????????", parent: "410400" }, { value: "410502", name: "?????????", parent: "410500" }, { value: "410503", name: "?????????", parent: "410500" }, { value: "410505", name: "?????????", parent: "410500" }, { value: "410506", name: "?????????", parent: "410500" }, { value: "410522", name: "?????????", parent: "410500" }, { value: "410523", name: "?????????", parent: "410500" }, { value: "410526", name: "??????", parent: "410500" }, { value: "410527", name: "?????????", parent: "410500" }, { value: "410581", name: "?????????", parent: "410500" }, { value: "410582", name: "?????????", parent: "410500" }, { value: "410602", name: "?????????", parent: "410600" }, { value: "410603", name: "?????????", parent: "410600" }, { value: "410611", name: "?????????", parent: "410600" }, { value: "410621", name: "??????", parent: "410600" }, { value: "410622", name: "??????", parent: "410600" }, { value: "410623", name: "?????????", parent: "410600" }, { value: "410702", name: "?????????", parent: "410700" }, { value: "410703", name: "?????????", parent: "410700" }, { value: "410704", name: "?????????", parent: "410700" }, { value: "410711", name: "?????????", parent: "410700" }, { value: "410721", name: "?????????", parent: "410700" }, { value: "410724", name: "?????????", parent: "410700" }, { value: "410725", name: "?????????", parent: "410700" }, { value: "410726", name: "?????????", parent: "410700" }, { value: "410727", name: "?????????", parent: "410700" }, { value: "410728", name: "?????????", parent: "410700" }, { value: "410781", name: "?????????", parent: "410700" }, { value: "410782", name: "?????????", parent: "410700" }, { value: "410783", name: "?????????", parent: "410700" }, { value: "410802", name: "?????????", parent: "410800" }, { value: "410803", name: "?????????", parent: "410800" }, { value: "410804", name: "?????????", parent: "410800" }, { value: "410811", name: "?????????", parent: "410800" }, { value: "410821", name: "?????????", parent: "410800" }, { value: "410822", name: "?????????", parent: "410800" }, { value: "410823", name: "?????????", parent: "410800" }, { value: "410825", name: "??????", parent: "410800" }, { value: "410881", name: "?????????", parent: "410000" }, { value: "410882", name: "?????????", parent: "410800" }, { value: "410883", name: "?????????", parent: "410800" }, { value: "410884", name: "?????????", parent: "410800" }, { value: "410902", name: "?????????", parent: "410900" }, { value: "410922", name: "?????????", parent: "410900" }, { value: "410923", name: "?????????", parent: "410900" }, { value: "410926", name: "??????", parent: "410900" }, { value: "410927", name: "?????????", parent: "410900" }, { value: "410928", name: "?????????", parent: "410900" }, { value: "410929", name: "?????????", parent: "410900" }, { value: "411002", name: "?????????", parent: "411000" }, { value: "411023", name: "?????????", parent: "411000" }, { value: "411024", name: "?????????", parent: "411000" }, { value: "411025", name: "?????????", parent: "411000" }, { value: "411081", name: "?????????", parent: "411000" }, { value: "411082", name: "?????????", parent: "411000" }, { value: "411083", name: "?????????", parent: "411000" }, { value: "411102", name: "?????????", parent: "411100" }, { value: "411103", name: "?????????", parent: "411100" }, { value: "411104", name: "?????????", parent: "411100" }, { value: "411121", name: "?????????", parent: "411100" }, { value: "411122", name: "?????????", parent: "411100" }, { value: "411123", name: "?????????", parent: "411100" }, { value: "411202", name: "?????????", parent: "411200" }, { value: "411221", name: "?????????", parent: "411200" }, { value: "411222", name: "?????????", parent: "411200" }, { value: "411224", name: "?????????", parent: "411200" }, { value: "411281", name: "?????????", parent: "411200" }, { value: "411282", name: "?????????", parent: "411200" }, { value: "411283", name: "?????????", parent: "411200" }, { value: "411302", name: "?????????", parent: "411300" }, { value: "411303", name: "?????????", parent: "411300" }, { value: "411321", name: "?????????", parent: "411300" }, { value: "411322", name: "?????????", parent: "411300" }, { value: "411323", name: "?????????", parent: "411300" }, { value: "411324", name: "?????????", parent: "411300" }, { value: "411325", name: "?????????", parent: "411300" }, { value: "411326", name: "?????????", parent: "411300" }, { value: "411327", name: "?????????", parent: "411300" }, { value: "411328", name: "?????????", parent: "411300" }, { value: "411329", name: "?????????", parent: "411300" }, { value: "411330", name: "?????????", parent: "411300" }, { value: "411381", name: "?????????", parent: "411300" }, { value: "411382", name: "?????????", parent: "411300" }, { value: "411402", name: "?????????", parent: "411400" }, { value: "411403", name: "?????????", parent: "411400" }, { value: "411421", name: "?????????", parent: "411400" }, { value: "411422", name: "??????", parent: "411400" }, { value: "411423", name: "?????????", parent: "411400" }, { value: "411424", name: "?????????", parent: "411400" }, { value: "411425", name: "?????????", parent: "411400" }, { value: "411426", name: "?????????", parent: "411400" }, { value: "411481", name: "?????????", parent: "411400" }, { value: "411482", name: "?????????", parent: "411400" }, { value: "411502", name: "?????????", parent: "411500" }, { value: "411503", name: "?????????", parent: "411500" }, { value: "411521", name: "?????????", parent: "411500" }, { value: "411522", name: "?????????", parent: "411500" }, { value: "411523", name: "??????", parent: "411500" }, { value: "411524", name: "?????????", parent: "411500" }, { value: "411525", name: "?????????", parent: "411500" }, { value: "411526", name: "?????????", parent: "411500" }, { value: "411527", name: "?????????", parent: "411500" }, { value: "411528", name: "??????", parent: "411500" }, { value: "411529", name: "?????????", parent: "411500" }, { value: "411602", name: "?????????", parent: "411600" }, { value: "411621", name: "?????????", parent: "411600" }, { value: "411622", name: "?????????", parent: "411600" }, { value: "411623", name: "?????????", parent: "411600" }, { value: "411624", name: "?????????", parent: "411600" }, { value: "411625", name: "?????????", parent: "411600" }, { value: "411626", name: "?????????", parent: "411600" }, { value: "411627", name: "?????????", parent: "411600" }, { value: "411628", name: "?????????", parent: "411600" }, { value: "411681", name: "?????????", parent: "411600" }, { value: "411682", name: "?????????", parent: "411600" }, { value: "411702", name: "?????????", parent: "411700" }, { value: "411721", name: "?????????", parent: "411700" }, { value: "411722", name: "?????????", parent: "411700" }, { value: "411723", name: "?????????", parent: "411700" }, { value: "411724", name: "?????????", parent: "411700" }, { value: "411725", name: "?????????", parent: "411700" }, { value: "411726", name: "?????????", parent: "411700" }, { value: "411727", name: "?????????", parent: "411700" }, { value: "411728", name: "?????????", parent: "411700" }, { value: "411729", name: "?????????", parent: "411700" }, { value: "411730", name: "?????????", parent: "411700" }, { value: "420102", name: "?????????", parent: "420100" }, { value: "420103", name: "?????????", parent: "420100" }, { value: "420104", name: "?????????", parent: "420100" }, { value: "420105", name: "?????????", parent: "420100" }, { value: "420106", name: "?????????", parent: "420100" }, { value: "420107", name: "?????????", parent: "420100" }, { value: "420111", name: "?????????", parent: "420100" }, { value: "420112", name: "????????????", parent: "420100" }, { value: "420113", name: "?????????", parent: "420100" }, { value: "420114", name: "?????????", parent: "420100" }, { value: "420115", name: "?????????", parent: "420100" }, { value: "420116", name: "?????????", parent: "420100" }, { value: "420117", name: "?????????", parent: "420100" }, { value: "420118", name: "?????????", parent: "420100" }, { value: "420202", name: "????????????", parent: "420200" }, { value: "420203", name: "????????????", parent: "420200" }, { value: "420204", name: "?????????", parent: "420200" }, { value: "420205", name: "?????????", parent: "420200" }, { value: "420222", name: "?????????", parent: "420200" }, { value: "420281", name: "?????????", parent: "420200" }, { value: "420282", name: "?????????", parent: "420200" }, { value: "420302", name: "?????????", parent: "420300" }, { value: "420303", name: "?????????", parent: "420300" }, { value: "420321", name: "?????????", parent: "420300" }, { value: "420322", name: "?????????", parent: "420300" }, { value: "420323", name: "?????????", parent: "420300" }, { value: "420324", name: "?????????", parent: "420300" }, { value: "420325", name: "??????", parent: "420300" }, { value: "420381", name: "????????????", parent: "420300" }, { value: "420382", name: "??????", parent: "420300" }, { value: "420383", name: "?????????", parent: "420300" }, { value: "420502", name: "?????????", parent: "420500" }, { value: "420503", name: "????????????", parent: "420500" }, { value: "420504", name: "?????????", parent: "420500" }, { value: "420505", name: "?????????", parent: "420500" }, { value: "420506", name: "?????????", parent: "420500" }, { value: "420525", name: "?????????", parent: "420500" }, { value: "420526", name: "?????????", parent: "420500" }, { value: "420527", name: "?????????", parent: "420500" }, { value: "420528", name: "????????????????????????", parent: "420500" }, { value: "420529", name: "????????????????????????", parent: "420500" }, { value: "420551", name: "????????????", parent: "420500" }, { value: "420552", name: "?????????", parent: "420500" }, { value: "420581", name: "?????????", parent: "420500" }, { value: "420582", name: "?????????", parent: "420500" }, { value: "420583", name: "?????????", parent: "420500" }, { value: "420584", name: "?????????", parent: "420500" }, { value: "420602", name: "?????????", parent: "420600" }, { value: "420606", name: "?????????", parent: "420600" }, { value: "420607", name: "?????????", parent: "420600" }, { value: "420624", name: "?????????", parent: "420600" }, { value: "420625", name: "?????????", parent: "420600" }, { value: "420626", name: "?????????", parent: "420600" }, { value: "420682", name: "????????????", parent: "420600" }, { value: "420683", name: "?????????", parent: "420600" }, { value: "420684", name: "?????????", parent: "420600" }, { value: "420685", name: "?????????", parent: "420600" }, { value: "420702", name: "????????????", parent: "420700" }, { value: "420703", name: "?????????", parent: "420700" }, { value: "420704", name: "?????????", parent: "420700" }, { value: "420705", name: "?????????", parent: "420700" }, { value: "420802", name: "?????????", parent: "420800" }, { value: "420804", name: "?????????", parent: "420800" }, { value: "420821", name: "?????????", parent: "420800" }, { value: "420822", name: "?????????", parent: "420800" }, { value: "420881", name: "?????????", parent: "420800" }, { value: "420882", name: "?????????", parent: "420800" }, { value: "420902", name: "?????????", parent: "420900" }, { value: "420921", name: "?????????", parent: "420900" }, { value: "420922", name: "?????????", parent: "420900" }, { value: "420923", name: "?????????", parent: "420900" }, { value: "420981", name: "?????????", parent: "420900" }, { value: "420982", name: "?????????", parent: "420900" }, { value: "420984", name: "?????????", parent: "420900" }, { value: "420985", name: "?????????", parent: "420900" }, { value: "421002", name: "?????????", parent: "421000" }, { value: "421003", name: "?????????", parent: "421000" }, { value: "421022", name: "?????????", parent: "421000" }, { value: "421023", name: "?????????", parent: "421000" }, { value: "421024", name: "?????????", parent: "421000" }, { value: "421081", name: "?????????", parent: "421000" }, { value: "421083", name: "?????????", parent: "421000" }, { value: "421087", name: "?????????", parent: "421000" }, { value: "421088", name: "?????????", parent: "421000" }, { value: "421102", name: "?????????", parent: "421100" }, { value: "421121", name: "?????????", parent: "421100" }, { value: "421122", name: "?????????", parent: "421100" }, { value: "421123", name: "?????????", parent: "421100" }, { value: "421124", name: "?????????", parent: "421100" }, { value: "421125", name: "?????????", parent: "421100" }, { value: "421126", name: "?????????", parent: "421100" }, { value: "421127", name: "?????????", parent: "421100" }, { value: "421181", name: "?????????", parent: "421100" }, { value: "421182", name: "?????????", parent: "421100" }, { value: "421183", name: "?????????", parent: "421100" }, { value: "421202", name: "?????????", parent: "421200" }, { value: "421221", name: "?????????", parent: "421200" }, { value: "421222", name: "?????????", parent: "421200" }, { value: "421223", name: "?????????", parent: "421200" }, { value: "421224", name: "?????????", parent: "421200" }, { value: "421281", name: "?????????", parent: "421200" }, { value: "421282", name: "????????????", parent: "421200" }, { value: "421283", name: "?????????", parent: "421200" }, { value: "421302", name: "?????????", parent: "421300" }, { value: "421321", name: "??????", parent: "421300" }, { value: "421381", name: "?????????", parent: "421300" }, { value: "421382", name: "?????????", parent: "421300" }, { value: "422801", name: "?????????", parent: "422800" }, { value: "422802", name: "?????????", parent: "422800" }, { value: "422822", name: "?????????", parent: "422800" }, { value: "422823", name: "?????????", parent: "422800" }, { value: "422825", name: "?????????", parent: "422800" }, { value: "422826", name: "?????????", parent: "422800" }, { value: "422827", name: "?????????", parent: "422800" }, { value: "422828", name: "?????????", parent: "422800" }, { value: "422829", name: "?????????", parent: "422800" }, { value: "429004", name: "?????????", parent: "420000" }, { value: "429005", name: "?????????", parent: "420000" }, { value: "429006", name: "?????????", parent: "420000" }, { value: "429021", name: "???????????????", parent: "420000" }, { value: "430102", name: "?????????", parent: "430100" }, { value: "430103", name: "?????????", parent: "430100" }, { value: "430104", name: "?????????", parent: "430100" }, { value: "430105", name: "?????????", parent: "430100" }, { value: "430111", name: "?????????", parent: "430100" }, { value: "430121", name: "?????????", parent: "430100" }, { value: "430122", name: "?????????", parent: "430100" }, { value: "430124", name: "?????????", parent: "430100" }, { value: "430181", name: "?????????", parent: "430100" }, { value: "430182", name: "?????????", parent: "430100" }, { value: "430202", name: "?????????", parent: "430200" }, { value: "430203", name: "?????????", parent: "430200" }, { value: "430204", name: "?????????", parent: "430200" }, { value: "430211", name: "?????????", parent: "430200" }, { value: "430221", name: "?????????", parent: "430200" }, { value: "430223", name: "??????", parent: "430200" }, { value: "430224", name: "?????????", parent: "430200" }, { value: "430225", name: "?????????", parent: "430200" }, { value: "430281", name: "?????????", parent: "430200" }, { value: "430282", name: "?????????", parent: "430200" }, { value: "430302", name: "?????????", parent: "430300" }, { value: "430304", name: "?????????", parent: "430300" }, { value: "430321", name: "?????????", parent: "430300" }, { value: "430381", name: "?????????", parent: "430300" }, { value: "430382", name: "?????????", parent: "430300" }, { value: "430383", name: "?????????", parent: "430300" }, { value: "430405", name: "?????????", parent: "430400" }, { value: "430406", name: "?????????", parent: "430400" }, { value: "430407", name: "?????????", parent: "430400" }, { value: "430408", name: "?????????", parent: "430400" }, { value: "430412", name: "?????????", parent: "430400" }, { value: "430421", name: "?????????", parent: "430400" }, { value: "430422", name: "?????????", parent: "430400" }, { value: "430423", name: "?????????", parent: "430400" }, { value: "430424", name: "?????????", parent: "430400" }, { value: "430426", name: "?????????", parent: "430400" }, { value: "430481", name: "?????????", parent: "430400" }, { value: "430482", name: "?????????", parent: "430400" }, { value: "430483", name: "?????????", parent: "430400" }, { value: "430502", name: "?????????", parent: "430500" }, { value: "430503", name: "?????????", parent: "430500" }, { value: "430511", name: "?????????", parent: "430500" }, { value: "430521", name: "?????????", parent: "430500" }, { value: "430522", name: "?????????", parent: "430500" }, { value: "430523", name: "?????????", parent: "430500" }, { value: "430524", name: "?????????", parent: "430500" }, { value: "430525", name: "?????????", parent: "430500" }, { value: "430527", name: "?????????", parent: "430500" }, { value: "430528", name: "?????????", parent: "430500" }, { value: "430529", name: "?????????????????????", parent: "430500" }, { value: "430581", name: "?????????", parent: "430500" }, { value: "430582", name: "?????????", parent: "430500" }, { value: "430602", name: "????????????", parent: "430600" }, { value: "430603", name: "?????????", parent: "430600" }, { value: "430611", name: "?????????", parent: "430600" }, { value: "430621", name: "?????????", parent: "430600" }, { value: "430623", name: "?????????", parent: "430600" }, { value: "430624", name: "?????????", parent: "430600" }, { value: "430626", name: "?????????", parent: "430600" }, { value: "430681", name: "?????????", parent: "430600" }, { value: "430682", name: "?????????", parent: "430600" }, { value: "430683", name: "?????????", parent: "430600" }, { value: "430702", name: "?????????", parent: "430700" }, { value: "430703", name: "?????????", parent: "430700" }, { value: "430721", name: "?????????", parent: "430700" }, { value: "430722", name: "?????????", parent: "430700" }, { value: "430723", name: "??????", parent: "430700" }, { value: "430724", name: "?????????", parent: "430700" }, { value: "430725", name: "?????????", parent: "430700" }, { value: "430726", name: "?????????", parent: "430700" }, { value: "430781", name: "?????????", parent: "430700" }, { value: "430782", name: "?????????", parent: "430700" }, { value: "430802", name: "?????????", parent: "430800" }, { value: "430811", name: "????????????", parent: "430800" }, { value: "430821", name: "?????????", parent: "430800" }, { value: "430822", name: "?????????", parent: "430800" }, { value: "430823", name: "?????????", parent: "430800" }, { value: "430902", name: "?????????", parent: "430900" }, { value: "430903", name: "?????????", parent: "430900" }, { value: "430921", name: "??????", parent: "430900" }, { value: "430922", name: "?????????", parent: "430900" }, { value: "430923", name: "?????????", parent: "430900" }, { value: "430981", name: "?????????", parent: "430900" }, { value: "430982", name: "?????????", parent: "430900" }, { value: "431002", name: "?????????", parent: "431000" }, { value: "431003", name: "?????????", parent: "431000" }, { value: "431021", name: "?????????", parent: "431000" }, { value: "431022", name: "?????????", parent: "431000" }, { value: "431023", name: "?????????", parent: "431000" }, { value: "431024", name: "?????????", parent: "431000" }, { value: "431025", name: "?????????", parent: "431000" }, { value: "431026", name: "?????????", parent: "431000" }, { value: "431027", name: "?????????", parent: "431000" }, { value: "431028", name: "?????????", parent: "431000" }, { value: "431081", name: "?????????", parent: "431000" }, { value: "431082", name: "?????????", parent: "431000" }, { value: "431102", name: "?????????", parent: "431100" }, { value: "431103", name: "????????????", parent: "431100" }, { value: "431121", name: "?????????", parent: "431100" }, { value: "431122", name: "?????????", parent: "431100" }, { value: "431123", name: "?????????", parent: "431100" }, { value: "431124", name: "??????", parent: "431100" }, { value: "431125", name: "?????????", parent: "431100" }, { value: "431126", name: "?????????", parent: "431100" }, { value: "431127", name: "?????????", parent: "431100" }, { value: "431128", name: "?????????", parent: "431100" }, { value: "431129", name: "?????????????????????", parent: "431100" }, { value: "431130", name: "?????????", parent: "431100" }, { value: "431202", name: "?????????", parent: "431200" }, { value: "431221", name: "?????????", parent: "431200" }, { value: "431222", name: "?????????", parent: "431200" }, { value: "431223", name: "?????????", parent: "431200" }, { value: "431224", name: "?????????", parent: "431200" }, { value: "431225", name: "?????????", parent: "431200" }, { value: "431226", name: "?????????????????????", parent: "431200" }, { value: "431227", name: "?????????????????????", parent: "431200" }, { value: "431228", name: "?????????????????????", parent: "431200" }, { value: "431229", name: "???????????????????????????", parent: "431200" }, { value: "431230", name: "?????????????????????", parent: "431200" }, { value: "431281", name: "?????????", parent: "431200" }, { value: "431282", name: "?????????", parent: "431200" }, { value: "431302", name: "?????????", parent: "431300" }, { value: "431321", name: "?????????", parent: "431300" }, { value: "431322", name: "?????????", parent: "431300" }, { value: "431381", name: "????????????", parent: "431300" }, { value: "431382", name: "?????????", parent: "431300" }, { value: "431383", name: "?????????", parent: "431300" }, { value: "433101", name: "?????????", parent: "433100" }, { value: "433122", name: "?????????", parent: "433100" }, { value: "433123", name: "?????????", parent: "433100" }, { value: "433124", name: "?????????", parent: "433100" }, { value: "433125", name: "?????????", parent: "433100" }, { value: "433126", name: "?????????", parent: "433100" }, { value: "433127", name: "?????????", parent: "433100" }, { value: "433130", name: "?????????", parent: "433100" }, { value: "433131", name: "?????????", parent: "433100" }, { value: "440103", name: "?????????", parent: "440100" }, { value: "440104", name: "?????????", parent: "440100" }, { value: "440105", name: "?????????", parent: "440100" }, { value: "440106", name: "?????????", parent: "440100" }, { value: "440111", name: "?????????", parent: "440100" }, { value: "440112", name: "?????????", parent: "440100" }, { value: "440113", name: "?????????", parent: "440100" }, { value: "440114", name: "?????????", parent: "440100" }, { value: "440115", name: "?????????", parent: "440100" }, { value: "440116", name: "?????????", parent: "440100" }, { value: "440183", name: "?????????", parent: "440100" }, { value: "440184", name: "?????????", parent: "440100" }, { value: "440188", name: "?????????", parent: "440100" }, { value: "440189", name: "?????????", parent: "440100" }, { value: "440203", name: "?????????", parent: "440200" }, { value: "440204", name: "?????????", parent: "440200" }, { value: "440205", name: "?????????", parent: "440200" }, { value: "440222", name: "?????????", parent: "440200" }, { value: "440224", name: "?????????", parent: "440200" }, { value: "440229", name: "?????????", parent: "440200" }, { value: "440232", name: "?????????????????????", parent: "440200" }, { value: "440233", name: "?????????", parent: "440200" }, { value: "440281", name: "?????????", parent: "440200" }, { value: "440282", name: "?????????", parent: "440200" }, { value: "440283", name: "?????????", parent: "440200" }, { value: "440303", name: "?????????", parent: "440300" }, { value: "440304", name: "?????????", parent: "440300" }, { value: "440305", name: "?????????", parent: "440300" }, { value: "440306", name: "?????????", parent: "440300" }, { value: "440307", name: "?????????", parent: "440300" }, { value: "440308", name: "?????????", parent: "440300" }, { value: "440309", name: "?????????", parent: "440300" }, { value: "440320", name: "????????????", parent: "440300" }, { value: "440321", name: "????????????", parent: "440300" }, { value: "440322", name: "????????????", parent: "440300" }, { value: "440323", name: "????????????", parent: "440300" }, { value: "440402", name: "?????????", parent: "440400" }, { value: "440403", name: "?????????", parent: "440400" }, { value: "440404", name: "?????????", parent: "440400" }, { value: "440486", name: "?????????", parent: "440400" }, { value: "440487", name: "?????????", parent: "440400" }, { value: "440488", name: "?????????", parent: "440400" }, { value: "440507", name: "?????????", parent: "440500" }, { value: "440511", name: "?????????", parent: "440500" }, { value: "440512", name: "?????????", parent: "440500" }, { value: "440513", name: "?????????", parent: "440500" }, { value: "440514", name: "?????????", parent: "440500" }, { value: "440515", name: "?????????", parent: "440500" }, { value: "440523", name: "?????????", parent: "440500" }, { value: "440524", name: "?????????", parent: "440500" }, { value: "440604", name: "?????????", parent: "440600" }, { value: "440605", name: "?????????", parent: "440600" }, { value: "440606", name: "?????????", parent: "440600" }, { value: "440607", name: "?????????", parent: "440600" }, { value: "440608", name: "?????????", parent: "440600" }, { value: "440609", name: "?????????", parent: "440600" }, { value: "440703", name: "?????????", parent: "440700" }, { value: "440704", name: "?????????", parent: "440700" }, { value: "440705", name: "?????????", parent: "440700" }, { value: "440781", name: "?????????", parent: "440700" }, { value: "440783", name: "?????????", parent: "440700" }, { value: "440784", name: "?????????", parent: "440700" }, { value: "440785", name: "?????????", parent: "440700" }, { value: "440786", name: "?????????", parent: "440700" }, { value: "440802", name: "?????????", parent: "440800" }, { value: "440803", name: "?????????", parent: "440800" }, { value: "440804", name: "?????????", parent: "440800" }, { value: "440811", name: "?????????", parent: "440800" }, { value: "440823", name: "?????????", parent: "440800" }, { value: "440825", name: "?????????", parent: "440800" }, { value: "440881", name: "?????????", parent: "440800" }, { value: "440882", name: "?????????", parent: "440800" }, { value: "440883", name: "?????????", parent: "440800" }, { value: "440884", name: "?????????", parent: "440800" }, { value: "440902", name: "?????????", parent: "440900" }, { value: "440903", name: "?????????", parent: "440900" }, { value: "440923", name: "?????????", parent: "440900" }, { value: "440981", name: "?????????", parent: "440900" }, { value: "440982", name: "?????????", parent: "440900" }, { value: "440983", name: "?????????", parent: "440900" }, { value: "440984", name: "?????????", parent: "440900" }, { value: "441202", name: "?????????", parent: "441200" }, { value: "441203", name: "?????????", parent: "441200" }, { value: "441223", name: "?????????", parent: "441200" }, { value: "441224", name: "?????????", parent: "441200" }, { value: "441225", name: "?????????", parent: "441200" }, { value: "441226", name: "?????????", parent: "441200" }, { value: "441283", name: "?????????", parent: "441200" }, { value: "441284", name: "?????????", parent: "441200" }, { value: "441285", name: "?????????", parent: "441200" }, { value: "441302", name: "?????????", parent: "441300" }, { value: "441303", name: "?????????", parent: "441300" }, { value: "441322", name: "?????????", parent: "441300" }, { value: "441323", name: "?????????", parent: "441300" }, { value: "441324", name: "?????????", parent: "441300" }, { value: "441325", name: "?????????", parent: "441300" }, { value: "441402", name: "?????????", parent: "441400" }, { value: "441421", name: "?????????", parent: "441400" }, { value: "441422", name: "?????????", parent: "441400" }, { value: "441423", name: "?????????", parent: "441400" }, { value: "441424", name: "?????????", parent: "441400" }, { value: "441426", name: "?????????", parent: "441400" }, { value: "441427", name: "?????????", parent: "441400" }, { value: "441481", name: "?????????", parent: "441400" }, { value: "441482", name: "?????????", parent: "441400" }, { value: "441502", name: "??????", parent: "441500" }, { value: "441521", name: "?????????", parent: "441500" }, { value: "441523", name: "?????????", parent: "441500" }, { value: "441581", name: "?????????", parent: "441500" }, { value: "441582", name: "?????????", parent: "441500" }, { value: "441602", name: "?????????", parent: "441600" }, { value: "441621", name: "?????????", parent: "441600" }, { value: "441622", name: "?????????", parent: "441600" }, { value: "441623", name: "?????????", parent: "441600" }, { value: "441624", name: "?????????", parent: "441600" }, { value: "441625", name: "?????????", parent: "441600" }, { value: "441626", name: "?????????", parent: "441600" }, { value: "441702", name: "?????????", parent: "441700" }, { value: "441721", name: "?????????", parent: "441700" }, { value: "441723", name: "?????????", parent: "441700" }, { value: "441781", name: "?????????", parent: "441700" }, { value: "441782", name: "?????????", parent: "441700" }, { value: "441802", name: "?????????", parent: "441800" }, { value: "441821", name: "?????????", parent: "441800" }, { value: "441823", name: "?????????", parent: "441800" }, { value: "441825", name: "???????????????????????????", parent: "441800" }, { value: "441826", name: "?????????????????????", parent: "441800" }, { value: "441827", name: "?????????", parent: "441800" }, { value: "441881", name: "?????????", parent: "441800" }, { value: "441882", name: "?????????", parent: "441800" }, { value: "441883", name: "?????????", parent: "441800" }, { value: "445102", name: "?????????", parent: "445100" }, { value: "445121", name: "?????????", parent: "445100" }, { value: "445122", name: "?????????", parent: "445100" }, { value: "445185", name: "?????????", parent: "445100" }, { value: "445186", name: "?????????", parent: "445100" }, { value: "445202", name: "?????????", parent: "445200" }, { value: "445221", name: "?????????", parent: "445200" }, { value: "445222", name: "?????????", parent: "445200" }, { value: "445224", name: "?????????", parent: "445200" }, { value: "445281", name: "?????????", parent: "445200" }, { value: "445284", name: "?????????", parent: "445200" }, { value: "445285", name: "?????????", parent: "445200" }, { value: "445302", name: "?????????", parent: "445300" }, { value: "445321", name: "?????????", parent: "445300" }, { value: "445322", name: "?????????", parent: "445300" }, { value: "445323", name: "?????????", parent: "445300" }, { value: "445381", name: "?????????", parent: "445300" }, { value: "445382", name: "?????????", parent: "445300" }, { value: "450102", name: "?????????", parent: "450100" }, { value: "450103", name: "?????????", parent: "450100" }, { value: "450105", name: "?????????", parent: "450100" }, { value: "450107", name: "????????????", parent: "450100" }, { value: "450108", name: "?????????", parent: "450100" }, { value: "450109", name: "?????????", parent: "450100" }, { value: "450122", name: "?????????", parent: "450100" }, { value: "450123", name: "?????????", parent: "450100" }, { value: "450124", name: "?????????", parent: "450100" }, { value: "450125", name: "?????????", parent: "450100" }, { value: "450126", name: "?????????", parent: "450100" }, { value: "450127", name: "??????", parent: "450100" }, { value: "450128", name: "?????????", parent: "450100" }, { value: "450202", name: "?????????", parent: "450200" }, { value: "450203", name: "?????????", parent: "450200" }, { value: "450204", name: "?????????", parent: "450200" }, { value: "450205", name: "?????????", parent: "450200" }, { value: "450221", name: "?????????", parent: "450200" }, { value: "450222", name: "?????????", parent: "450200" }, { value: "450223", name: "?????????", parent: "450200" }, { value: "450224", name: "?????????", parent: "450200" }, { value: "450225", name: "?????????????????????", parent: "450200" }, { value: "450226", name: "?????????????????????", parent: "450200" }, { value: "450227", name: "?????????", parent: "450200" }, { value: "450302", name: "?????????", parent: "450300" }, { value: "450303", name: "?????????", parent: "450300" }, { value: "450304", name: "?????????", parent: "450300" }, { value: "450305", name: "?????????", parent: "450300" }, { value: "450311", name: "?????????", parent: "450300" }, { value: "450321", name: "?????????", parent: "450300" }, { value: "450322", name: "?????????", parent: "450300" }, { value: "450323", name: "?????????", parent: "450300" }, { value: "450324", name: "?????????", parent: "450300" }, { value: "450325", name: "?????????", parent: "450300" }, { value: "450326", name: "?????????", parent: "450300" }, { value: "450327", name: "?????????", parent: "450300" }, { value: "450328", name: "?????????????????????", parent: "450300" }, { value: "450329", name: "?????????", parent: "450300" }, { value: "450330", name: "?????????", parent: "450300" }, { value: "450331", name: "?????????", parent: "450300" }, { value: "450332", name: "?????????????????????", parent: "450300" }, { value: "450333", name: "?????????", parent: "450300" }, { value: "450403", name: "?????????", parent: "450400" }, { value: "450404", name: "?????????", parent: "450400" }, { value: "450405", name: "?????????", parent: "450400" }, { value: "450406", name: "?????????", parent: "450400" }, { value: "450421", name: "?????????", parent: "450400" }, { value: "450422", name: "??????", parent: "450400" }, { value: "450423", name: "?????????", parent: "450400" }, { value: "450481", name: "?????????", parent: "450400" }, { value: "450482", name: "?????????", parent: "450400" }, { value: "450502", name: "?????????", parent: "450500" }, { value: "450503", name: "?????????", parent: "450500" }, { value: "450512", name: "????????????", parent: "450500" }, { value: "450521", name: "?????????", parent: "450500" }, { value: "450522", name: "?????????", parent: "450500" }, { value: "450602", name: "?????????", parent: "450600" }, { value: "450603", name: "?????????", parent: "450600" }, { value: "450621", name: "?????????", parent: "450600" }, { value: "450681", name: "?????????", parent: "450600" }, { value: "450682", name: "?????????", parent: "450600" }, { value: "450702", name: "?????????", parent: "450700" }, { value: "450703", name: "?????????", parent: "450700" }, { value: "450721", name: "?????????", parent: "450700" }, { value: "450722", name: "?????????", parent: "450700" }, { value: "450723", name: "?????????", parent: "450700" }, { value: "450802", name: "?????????", parent: "450800" }, { value: "450803", name: "?????????", parent: "450800" }, { value: "450804", name: "?????????", parent: "450800" }, { value: "450821", name: "?????????", parent: "450800" }, { value: "450881", name: "?????????", parent: "450800" }, { value: "450882", name: "?????????", parent: "450800" }, { value: "450902", name: "?????????", parent: "450900" }, { value: "450903", name: "?????????", parent: "450900" }, { value: "450921", name: "??????", parent: "450900" }, { value: "450922", name: "?????????", parent: "450900" }, { value: "450923", name: "?????????", parent: "450900" }, { value: "450924", name: "?????????", parent: "450900" }, { value: "450981", name: "?????????", parent: "450900" }, { value: "450982", name: "?????????", parent: "450900" }, { value: "451002", name: "?????????", parent: "451000" }, { value: "451021", name: "?????????", parent: "451000" }, { value: "451022", name: "?????????", parent: "451000" }, { value: "451023", name: "?????????", parent: "451000" }, { value: "451024", name: "?????????", parent: "451000" }, { value: "451025", name: "?????????", parent: "451000" }, { value: "451026", name: "?????????", parent: "451000" }, { value: "451027", name: "?????????", parent: "451000" }, { value: "451028", name: "?????????", parent: "451000" }, { value: "451029", name: "?????????", parent: "451000" }, { value: "451030", name: "?????????", parent: "451000" }, { value: "451031", name: "?????????????????????", parent: "451000" }, { value: "451032", name: "?????????", parent: "451000" }, { value: "451102", name: "?????????", parent: "451100" }, { value: "451119", name: "???????????????", parent: "451100" }, { value: "451121", name: "?????????", parent: "451100" }, { value: "451122", name: "?????????", parent: "451100" }, { value: "451123", name: "?????????????????????", parent: "451100" }, { value: "451124", name: "?????????", parent: "451100" }, { value: "451202", name: "????????????", parent: "451200" }, { value: "451221", name: "?????????", parent: "451200" }, { value: "451222", name: "?????????", parent: "451200" }, { value: "451223", name: "?????????", parent: "451200" }, { value: "451224", name: "?????????", parent: "451200" }, { value: "451225", name: "????????????????????????", parent: "451200" }, { value: "451226", name: "????????????????????????", parent: "451200" }, { value: "451227", name: "?????????????????????", parent: "451200" }, { value: "451228", name: "?????????????????????", parent: "451200" }, { value: "451229", name: "?????????????????????", parent: "451200" }, { value: "451281", name: "?????????", parent: "451200" }, { value: "451282", name: "?????????", parent: "451200" }, { value: "451302", name: "?????????", parent: "451300" }, { value: "451321", name: "?????????", parent: "451300" }, { value: "451322", name: "?????????", parent: "451300" }, { value: "451323", name: "?????????", parent: "451300" }, { value: "451324", name: "?????????????????????", parent: "451300" }, { value: "451381", name: "?????????", parent: "451300" }, { value: "451382", name: "?????????", parent: "451300" }, { value: "451402", name: "?????????", parent: "451400" }, { value: "451421", name: "?????????", parent: "451400" }, { value: "451422", name: "?????????", parent: "451400" }, { value: "451423", name: "?????????", parent: "451400" }, { value: "451424", name: "?????????", parent: "451400" }, { value: "451425", name: "?????????", parent: "451400" }, { value: "451481", name: "?????????", parent: "451400" }, { value: "451482", name: "?????????", parent: "451400" }, { value: "460105", name: "?????????", parent: "460100" }, { value: "460106", name: "?????????", parent: "460100" }, { value: "460107", name: "?????????", parent: "460100" }, { value: "460108", name: "?????????", parent: "460100" }, { value: "460109", name: "?????????", parent: "460100" }, { value: "460321", name: "????????????", parent: "460300" }, { value: "460322", name: "????????????", parent: "460300" }, { value: "460323", name: "?????????????????????????????????", parent: "460300" }, { value: "469001", name: "????????????", parent: "460000" }, { value: "469002", name: "?????????", parent: "460000" }, { value: "469003", name: "?????????", parent: "460000" }, { value: "469005", name: "?????????", parent: "460000" }, { value: "469006", name: "?????????", parent: "460000" }, { value: "469007", name: "?????????", parent: "460000" }, { value: "469025", name: "?????????", parent: "460000" }, { value: "469026", name: "?????????", parent: "460000" }, { value: "469027", name: "?????????", parent: "460000" }, { value: "469028", name: "?????????", parent: "460000" }, { value: "469030", name: "?????????????????????", parent: "460000" }, { value: "469031", name: "?????????????????????", parent: "460000" }, { value: "469033", name: "?????????????????????", parent: "460000" }, { value: "469034", name: "?????????????????????", parent: "460000" }, { value: "469035", name: "???????????????????????????", parent: "460000" }, { value: "469036", name: "???????????????????????????", parent: "460000" }, { value: "469037", name: "????????????", parent: "460000" }, { value: "469038", name: "????????????", parent: "460000" }, { value: "469039", name: "?????????????????????????????????", parent: "460000" }, { value: "471004", name: "?????????", parent: "410300" }, { value: "471005", name: "?????????", parent: "410300" }, { value: "500101", name: "?????????", parent: "500100" }, { value: "500102", name: "?????????", parent: "500100" }, { value: "500103", name: "?????????", parent: "500100" }, { value: "500104", name: "????????????", parent: "500100" }, { value: "500105", name: "?????????", parent: "500100" }, { value: "500106", name: "????????????", parent: "500100" }, { value: "500107", name: "????????????", parent: "500100" }, { value: "500108", name: "?????????", parent: "500100" }, { value: "500109", name: "?????????", parent: "500100" }, { value: "500110", name: "?????????", parent: "500100" }, { value: "500111", name: "?????????", parent: "500100" }, { value: "500112", name: "?????????", parent: "500100" }, { value: "500113", name: "?????????", parent: "500100" }, { value: "500114", name: "?????????", parent: "500100" }, { value: "500115", name: "?????????", parent: "500100" }, { value: "500222", name: "?????????", parent: "500100" }, { value: "500223", name: "?????????", parent: "500100" }, { value: "500224", name: "?????????", parent: "500100" }, { value: "500225", name: "?????????", parent: "500100" }, { value: "500226", name: "?????????", parent: "500100" }, { value: "500227", name: "?????????", parent: "500100" }, { value: "500228", name: "?????????", parent: "500100" }, { value: "500229", name: "?????????", parent: "500100" }, { value: "500230", name: "?????????", parent: "500100" }, { value: "500231", name: "?????????", parent: "500100" }, { value: "500232", name: "?????????", parent: "500100" }, { value: "500233", name: "??????", parent: "500100" }, { value: "500234", name: "??????", parent: "500100" }, { value: "500235", name: "?????????", parent: "500100" }, { value: "500236", name: "?????????", parent: "500100" }, { value: "500237", name: "?????????", parent: "500100" }, { value: "500238", name: "?????????", parent: "500100" }, { value: "500240", name: "????????????????????????", parent: "500100" }, { value: "500241", name: "??????????????????????????????", parent: "500100" }, { value: "500242", name: "??????????????????????????????", parent: "500100" }, { value: "500243", name: "??????????????????????????????", parent: "500100" }, { value: "500381", name: "?????????", parent: "500100" }, { value: "500382", name: "?????????", parent: "500100" }, { value: "500383", name: "?????????", parent: "500100" }, { value: "500384", name: "?????????", parent: "500100" }, { value: "500385", name: "?????????", parent: "500100" }, { value: "510104", name: "?????????", parent: "510100" }, { value: "510105", name: "?????????", parent: "510100" }, { value: "510106", name: "?????????", parent: "510100" }, { value: "510107", name: "?????????", parent: "510100" }, { value: "510108", name: "?????????", parent: "510100" }, { value: "510112", name: "????????????", parent: "510100" }, { value: "510113", name: "????????????", parent: "510100" }, { value: "510114", name: "?????????", parent: "510100" }, { value: "510115", name: "?????????", parent: "510100" }, { value: "510121", name: "?????????", parent: "510100" }, { value: "510122", name: "?????????", parent: "510100" }, { value: "510124", name: "??????", parent: "510100" }, { value: "510129", name: "?????????", parent: "510100" }, { value: "510131", name: "?????????", parent: "510100" }, { value: "510132", name: "?????????", parent: "510100" }, { value: "510181", name: "????????????", parent: "510100" }, { value: "510182", name: "?????????", parent: "510100" }, { value: "510183", name: "?????????", parent: "510100" }, { value: "510184", name: "?????????", parent: "510100" }, { value: "510185", name: "?????????", parent: "510100" }, { value: "510302", name: "????????????", parent: "510300" }, { value: "510303", name: "?????????", parent: "510300" }, { value: "510304", name: "?????????", parent: "510300" }, { value: "510311", name: "?????????", parent: "510300" }, { value: "510321", name: "??????", parent: "510300" }, { value: "510322", name: "?????????", parent: "510300" }, { value: "510323", name: "?????????", parent: "510300" }, { value: "510402", name: "??????", parent: "510400" }, { value: "510403", name: "??????", parent: "510400" }, { value: "510411", name: "?????????", parent: "510400" }, { value: "510421", name: "?????????", parent: "510400" }, { value: "510422", name: "?????????", parent: "510400" }, { value: "510423", name: "?????????", parent: "510400" }, { value: "510502", name: "?????????", parent: "510500" }, { value: "510503", name: "?????????", parent: "510500" }, { value: "510504", name: "????????????", parent: "510500" }, { value: "510521", name: "??????", parent: "510500" }, { value: "510522", name: "?????????", parent: "510500" }, { value: "510524", name: "?????????", parent: "510500" }, { value: "510525", name: "?????????", parent: "510500" }, { value: "510526", name: "?????????", parent: "510500" }, { value: "510603", name: "?????????", parent: "510600" }, { value: "510623", name: "?????????", parent: "510600" }, { value: "510626", name: "?????????", parent: "510600" }, { value: "510681", name: "?????????", parent: "510600" }, { value: "510682", name: "?????????", parent: "510600" }, { value: "510683", name: "?????????", parent: "510600" }, { value: "510684", name: "?????????", parent: "510600" }, { value: "510703", name: "?????????", parent: "510700" }, { value: "510704", name: "?????????", parent: "510700" }, { value: "510722", name: "?????????", parent: "510700" }, { value: "510723", name: "?????????", parent: "510700" }, { value: "510724", name: "??????", parent: "510700" }, { value: "510725", name: "?????????", parent: "510700" }, { value: "510726", name: "?????????????????????", parent: "510700" }, { value: "510727", name: "?????????", parent: "510700" }, { value: "510751", name: "?????????", parent: "510700" }, { value: "510781", name: "?????????", parent: "510700" }, { value: "510782", name: "?????????", parent: "510700" }, { value: "510802", name: "?????????", parent: "510800" }, { value: "510811", name: "?????????", parent: "510800" }, { value: "510812", name: "?????????", parent: "510800" }, { value: "510821", name: "?????????", parent: "510800" }, { value: "510822", name: "?????????", parent: "510800" }, { value: "510823", name: "?????????", parent: "510800" }, { value: "510824", name: "?????????", parent: "510800" }, { value: "510825", name: "?????????", parent: "510800" }, { value: "510903", name: "?????????", parent: "510900" }, { value: "510904", name: "?????????", parent: "510900" }, { value: "510921", name: "?????????", parent: "510900" }, { value: "510922", name: "?????????", parent: "510900" }, { value: "510923", name: "?????????", parent: "510900" }, { value: "510924", name: "?????????", parent: "510900" }, { value: "511002", name: "?????????", parent: "511000" }, { value: "511011", name: "?????????", parent: "511000" }, { value: "511024", name: "?????????", parent: "511000" }, { value: "511025", name: "?????????", parent: "511000" }, { value: "511028", name: "?????????", parent: "511000" }, { value: "511029", name: "?????????", parent: "511000" }, { value: "511102", name: "?????????", parent: "511100" }, { value: "511111", name: "?????????", parent: "511100" }, { value: "511112", name: "????????????", parent: "511100" }, { value: "511113", name: "????????????", parent: "511100" }, { value: "511123", name: "?????????", parent: "511100" }, { value: "511124", name: "?????????", parent: "511100" }, { value: "511126", name: "?????????", parent: "511100" }, { value: "511129", name: "?????????", parent: "511100" }, { value: "511132", name: "?????????????????????", parent: "511100" }, { value: "511133", name: "?????????????????????", parent: "511100" }, { value: "511181", name: "????????????", parent: "511100" }, { value: "511182", name: "?????????", parent: "511100" }, { value: "511302", name: "?????????", parent: "511300" }, { value: "511303", name: "?????????", parent: "511300" }, { value: "511304", name: "?????????", parent: "511300" }, { value: "511321", name: "?????????", parent: "511300" }, { value: "511322", name: "?????????", parent: "511300" }, { value: "511323", name: "?????????", parent: "511300" }, { value: "511324", name: "?????????", parent: "511300" }, { value: "511325", name: "?????????", parent: "511300" }, { value: "511381", name: "?????????", parent: "511300" }, { value: "511382", name: "?????????", parent: "511300" }, { value: "511402", name: "?????????", parent: "511400" }, { value: "511421", name: "?????????", parent: "511400" }, { value: "511422", name: "?????????", parent: "511400" }, { value: "511423", name: "?????????", parent: "511400" }, { value: "511424", name: "?????????", parent: "511400" }, { value: "511425", name: "?????????", parent: "511400" }, { value: "511426", name: "?????????", parent: "511400" }, { value: "511502", name: "?????????", parent: "511500" }, { value: "511521", name: "?????????", parent: "511500" }, { value: "511522", name: "?????????", parent: "511500" }, { value: "511523", name: "?????????", parent: "511500" }, { value: "511524", name: "?????????", parent: "511500" }, { value: "511525", name: "??????", parent: "511500" }, { value: "511526", name: "??????", parent: "511500" }, { value: "511527", name: "?????????", parent: "511500" }, { value: "511528", name: "?????????", parent: "511500" }, { value: "511529", name: "?????????", parent: "511500" }, { value: "511530", name: "?????????", parent: "511500" }, { value: "511602", name: "?????????", parent: "511600" }, { value: "511603", name: "?????????", parent: "511600" }, { value: "511621", name: "?????????", parent: "511600" }, { value: "511622", name: "?????????", parent: "511600" }, { value: "511623", name: "?????????", parent: "511600" }, { value: "511681", name: "?????????", parent: "511600" }, { value: "511682", name: "?????????", parent: "511600" }, { value: "511683", name: "?????????", parent: "511600" }, { value: "511702", name: "?????????", parent: "511700" }, { value: "511721", name: "?????????", parent: "511700" }, { value: "511722", name: "?????????", parent: "511700" }, { value: "511723", name: "?????????", parent: "511700" }, { value: "511724", name: "?????????", parent: "511700" }, { value: "511725", name: "??????", parent: "511700" }, { value: "511781", name: "?????????", parent: "511700" }, { value: "511782", name: "?????????", parent: "511700" }, { value: "511802", name: "?????????", parent: "511800" }, { value: "511821", name: "?????????", parent: "511800" }, { value: "511822", name: "?????????", parent: "511800" }, { value: "511823", name: "?????????", parent: "511800" }, { value: "511824", name: "?????????", parent: "511800" }, { value: "511825", name: "?????????", parent: "511800" }, { value: "511826", name: "?????????", parent: "511800" }, { value: "511827", name: "?????????", parent: "511800" }, { value: "511828", name: "?????????", parent: "511800" }, { value: "511902", name: "?????????", parent: "511900" }, { value: "511903", name: "?????????", parent: "511900" }, { value: "511921", name: "?????????", parent: "511900" }, { value: "511922", name: "?????????", parent: "511900" }, { value: "511923", name: "?????????", parent: "511900" }, { value: "511924", name: "?????????", parent: "511900" }, { value: "512002", name: "?????????", parent: "512000" }, { value: "512021", name: "?????????", parent: "512000" }, { value: "512022", name: "?????????", parent: "512000" }, { value: "512081", name: "?????????", parent: "512000" }, { value: "512082", name: "?????????", parent: "512000" }, { value: "513221", name: "?????????", parent: "513200" }, { value: "513222", name: "??????", parent: "513200" }, { value: "513223", name: "??????", parent: "513200" }, { value: "513224", name: "?????????", parent: "513200" }, { value: "513225", name: "????????????", parent: "513200" }, { value: "513226", name: "?????????", parent: "513200" }, { value: "513227", name: "?????????", parent: "513200" }, { value: "513228", name: "?????????", parent: "513200" }, { value: "513229", name: "????????????", parent: "513200" }, { value: "513230", name: "?????????", parent: "513200" }, { value: "513231", name: "?????????", parent: "513200" }, { value: "513232", name: "????????????", parent: "513200" }, { value: "513233", name: "?????????", parent: "513200" }, { value: "513234", name: "?????????", parent: "513200" }, { value: "513321", name: "?????????", parent: "513300" }, { value: "513322", name: "?????????", parent: "513300" }, { value: "513323", name: "?????????", parent: "513300" }, { value: "513324", name: "?????????", parent: "513300" }, { value: "513325", name: "?????????", parent: "513300" }, { value: "513326", name: "?????????", parent: "513300" }, { value: "513327", name: "?????????", parent: "513300" }, { value: "513328", name: "?????????", parent: "513300" }, { value: "513329", name: "?????????", parent: "513300" }, { value: "513330", name: "?????????", parent: "513300" }, { value: "513331", name: "?????????", parent: "513300" }, { value: "513332", name: "?????????", parent: "513300" }, { value: "513333", name: "?????????", parent: "513300" }, { value: "513334", name: "?????????", parent: "513300" }, { value: "513335", name: "?????????", parent: "513300" }, { value: "513336", name: "?????????", parent: "513300" }, { value: "513337", name: "?????????", parent: "513300" }, { value: "513338", name: "?????????", parent: "513300" }, { value: "513339", name: "?????????", parent: "513300" }, { value: "513401", name: "?????????", parent: "513400" }, { value: "513422", name: "?????????????????????", parent: "513400" }, { value: "513423", name: "?????????", parent: "513400" }, { value: "513424", name: "?????????", parent: "513400" }, { value: "513425", name: "?????????", parent: "513400" }, { value: "513426", name: "?????????", parent: "513400" }, { value: "513427", name: "?????????", parent: "513400" }, { value: "513428", name: "?????????", parent: "513400" }, { value: "513429", name: "?????????", parent: "513400" }, { value: "513430", name: "?????????", parent: "513400" }, { value: "513431", name: "?????????", parent: "513400" }, { value: "513432", name: "?????????", parent: "513400" }, { value: "513433", name: "?????????", parent: "513400" }, { value: "513434", name: "?????????", parent: "513400" }, { value: "513435", name: "?????????", parent: "513400" }, { value: "513436", name: "?????????", parent: "513400" }, { value: "513437", name: "?????????", parent: "513400" }, { value: "513438", name: "?????????", parent: "513400" }, { value: "520102", name: "?????????", parent: "520100" }, { value: "520103", name: "?????????", parent: "520100" }, { value: "520111", name: "?????????", parent: "520100" }, { value: "520112", name: "?????????", parent: "520100" }, { value: "520113", name: "?????????", parent: "520100" }, { value: "520114", name: "?????????", parent: "520100" }, { value: "520121", name: "?????????", parent: "520100" }, { value: "520122", name: "?????????", parent: "520100" }, { value: "520123", name: "?????????", parent: "520100" }, { value: "520151", name: "????????????", parent: "520100" }, { value: "520181", name: "?????????", parent: "520100" }, { value: "520182", name: "?????????", parent: "520100" }, { value: "520201", name: "?????????", parent: "520200" }, { value: "520203", name: "????????????", parent: "520200" }, { value: "520221", name: "?????????", parent: "520200" }, { value: "520222", name: "??????", parent: "520200" }, { value: "520223", name: "?????????", parent: "520200" }, { value: "520302", name: "????????????", parent: "520300" }, { value: "520303", name: "?????????", parent: "520300" }, { value: "520321", name: "?????????", parent: "520300" }, { value: "520322", name: "?????????", parent: "520300" }, { value: "520323", name: "?????????", parent: "520300" }, { value: "520324", name: "?????????", parent: "520300" }, { value: "520325", name: "??????????????????????????????", parent: "520300" }, { value: "520326", name: "??????????????????????????????", parent: "520300" }, { value: "520327", name: "?????????", parent: "520300" }, { value: "520328", name: "?????????", parent: "520300" }, { value: "520329", name: "?????????", parent: "520300" }, { value: "520330", name: "?????????", parent: "520300" }, { value: "520381", name: "?????????", parent: "520300" }, { value: "520382", name: "?????????", parent: "520300" }, { value: "520383", name: "?????????", parent: "520300" }, { value: "520402", name: "?????????", parent: "520400" }, { value: "520421", name: "?????????", parent: "520400" }, { value: "520422", name: "?????????", parent: "520400" }, { value: "520423", name: "??????????????????????????????", parent: "520400" }, { value: "520424", name: "??????????????????????????????", parent: "520400" }, { value: "520425", name: "??????????????????????????????", parent: "520400" }, { value: "520426", name: "?????????", parent: "520400" }, { value: "522201", name: "?????????", parent: "522200" }, { value: "522222", name: "?????????", parent: "522200" }, { value: "522223", name: "?????????????????????", parent: "522200" }, { value: "522224", name: "?????????", parent: "522200" }, { value: "522225", name: "?????????", parent: "522200" }, { value: "522226", name: "??????????????????????????????", parent: "522200" }, { value: "522227", name: "?????????", parent: "522200" }, { value: "522228", name: "????????????????????????", parent: "522200" }, { value: "522229", name: "?????????????????????", parent: "522200" }, { value: "522230", name: "?????????", parent: "522200" }, { value: "522231", name: "?????????", parent: "522200" }, { value: "522301", name: "?????????", parent: "522300" }, { value: "522322", name: "?????????", parent: "522300" }, { value: "522323", name: "?????????", parent: "522300" }, { value: "522324", name: "?????????", parent: "522300" }, { value: "522325", name: "?????????", parent: "522300" }, { value: "522326", name: "?????????", parent: "522300" }, { value: "522327", name: "?????????", parent: "522300" }, { value: "522328", name: "?????????", parent: "522300" }, { value: "522329", name: "?????????", parent: "522300" }, { value: "522401", name: "????????????", parent: "522400" }, { value: "522422", name: "?????????", parent: "522400" }, { value: "522423", name: "?????????", parent: "522400" }, { value: "522424", name: "?????????", parent: "522400" }, { value: "522425", name: "?????????", parent: "522400" }, { value: "522426", name: "?????????", parent: "522400" }, { value: "522427", name: "?????????????????????????????????", parent: "522400" }, { value: "522428", name: "?????????", parent: "522400" }, { value: "522429", name: "?????????", parent: "522400" }, { value: "522601", name: "?????????", parent: "522600" }, { value: "522622", name: "?????????", parent: "522600" }, { value: "522623", name: "?????????", parent: "522600" }, { value: "522624", name: "?????????", parent: "522600" }, { value: "522625", name: "?????????", parent: "522600" }, { value: "522626", name: "?????????", parent: "522600" }, { value: "522627", name: "?????????", parent: "522600" }, { value: "522628", name: "?????????", parent: "522600" }, { value: "522629", name: "?????????", parent: "522600" }, { value: "522630", name: "?????????", parent: "522600" }, { value: "522631", name: "?????????", parent: "522600" }, { value: "522632", name: "?????????", parent: "522600" }, { value: "522633", name: "?????????", parent: "522600" }, { value: "522634", name: "?????????", parent: "522600" }, { value: "522635", name: "?????????", parent: "522600" }, { value: "522636", name: "?????????", parent: "522600" }, { value: "522637", name: "?????????", parent: "522600" }, { value: "522701", name: "?????????", parent: "522700" }, { value: "522702", name: "?????????", parent: "522700" }, { value: "522722", name: "?????????", parent: "522700" }, { value: "522723", name: "?????????", parent: "522700" }, { value: "522725", name: "?????????", parent: "522700" }, { value: "522726", name: "?????????", parent: "522700" }, { value: "522727", name: "?????????", parent: "522700" }, { value: "522728", name: "?????????", parent: "522700" }, { value: "522729", name: "?????????", parent: "522700" }, { value: "522730", name: "?????????", parent: "522700" }, { value: "522731", name: "?????????", parent: "522700" }, { value: "522732", name: "?????????????????????", parent: "522700" }, { value: "522733", name: "?????????", parent: "522700" }, { value: "530102", name: "?????????", parent: "530100" }, { value: "530103", name: "?????????", parent: "530100" }, { value: "530111", name: "?????????", parent: "530100" }, { value: "530112", name: "?????????", parent: "530100" }, { value: "530113", name: "?????????", parent: "530100" }, { value: "530121", name: "?????????", parent: "530100" }, { value: "530122", name: "?????????", parent: "530100" }, { value: "530124", name: "?????????", parent: "530100" }, { value: "530125", name: "?????????", parent: "530100" }, { value: "530126", name: "?????????????????????", parent: "530100" }, { value: "530127", name: "?????????", parent: "530100" }, { value: "530128", name: "???????????????????????????", parent: "530100" }, { value: "530129", name: "???????????????????????????", parent: "530100" }, { value: "530181", name: "?????????", parent: "530100" }, { value: "530182", name: "?????????", parent: "530100" }, { value: "530302", name: "?????????", parent: "530300" }, { value: "530321", name: "?????????", parent: "530300" }, { value: "530322", name: "?????????", parent: "530300" }, { value: "530323", name: "?????????", parent: "530300" }, { value: "530324", name: "?????????", parent: "530300" }, { value: "530325", name: "?????????", parent: "530300" }, { value: "530326", name: "?????????", parent: "530300" }, { value: "530328", name: "?????????", parent: "530300" }, { value: "530381", name: "?????????", parent: "530300" }, { value: "530382", name: "?????????", parent: "530300" }, { value: "530402", name: "?????????", parent: "530400" }, { value: "530421", name: "?????????", parent: "530400" }, { value: "530422", name: "?????????", parent: "530400" }, { value: "530423", name: "?????????", parent: "530400" }, { value: "530424", name: "?????????", parent: "530400" }, { value: "530425", name: "?????????", parent: "530400" }, { value: "530426", name: "?????????????????????", parent: "530400" }, { value: "530427", name: "???????????????????????????", parent: "530400" }, { value: "530428", name: "????????????????????????????????????", parent: "530400" }, { value: "530429", name: "?????????", parent: "530400" }, { value: "530502", name: "?????????", parent: "530500" }, { value: "530521", name: "?????????", parent: "530500" }, { value: "530522", name: "?????????", parent: "530500" }, { value: "530523", name: "?????????", parent: "530500" }, { value: "530524", name: "?????????", parent: "530500" }, { value: "530525", name: "?????????", parent: "530500" }, { value: "530602", name: "?????????", parent: "530600" }, { value: "530621", name: "?????????", parent: "530600" }, { value: "530622", name: "?????????", parent: "530600" }, { value: "530623", name: "?????????", parent: "530600" }, { value: "530624", name: "?????????", parent: "530600" }, { value: "530625", name: "?????????", parent: "530600" }, { value: "530626", name: "?????????", parent: "530600" }, { value: "530627", name: "?????????", parent: "530600" }, { value: "530628", name: "?????????", parent: "530600" }, { value: "530629", name: "?????????", parent: "530600" }, { value: "530630", name: "?????????", parent: "530600" }, { value: "530631", name: "?????????", parent: "530600" }, { value: "530702", name: "?????????", parent: "530700" }, { value: "530721", name: "????????????????????????", parent: "530700" }, { value: "530722", name: "?????????", parent: "530700" }, { value: "530723", name: "?????????", parent: "530700" }, { value: "530724", name: "?????????????????????", parent: "530700" }, { value: "530725", name: "?????????", parent: "530700" }, { value: "530802", name: "?????????", parent: "530800" }, { value: "530821", name: "??????????????????????????????", parent: "530800" }, { value: "530822", name: "????????????????????????", parent: "530800" }, { value: "530823", name: "?????????????????????", parent: "530800" }, { value: "530824", name: "???????????????????????????", parent: "530800" }, { value: "530825", name: "???????????????????????????????????????", parent: "530800" }, { value: "530826", name: "??????????????????????????????", parent: "530800" }, { value: "530827", name: "????????????????????????????????????", parent: "530800" }, { value: "530828", name: "????????????????????????", parent: "530800" }, { value: "530829", name: "?????????????????????", parent: "530800" }, { value: "530830", name: "?????????", parent: "530800" }, { value: "530902", name: "?????????", parent: "530900" }, { value: "530921", name: "?????????", parent: "530900" }, { value: "530922", name: "??????", parent: "530900" }, { value: "530923", name: "?????????", parent: "530900" }, { value: "530924", name: "?????????", parent: "530900" }, { value: "530925", name: "?????????????????????????????????????????????", parent: "530900" }, { value: "530926", name: "???????????????????????????", parent: "530900" }, { value: "530927", name: "?????????????????????", parent: "530900" }, { value: "530928", name: "?????????", parent: "530900" }, { value: "532301", name: "?????????", parent: "532300" }, { value: "532322", name: "?????????", parent: "532300" }, { value: "532323", name: "?????????", parent: "532300" }, { value: "532324", name: "?????????", parent: "532300" }, { value: "532325", name: "?????????", parent: "532300" }, { value: "532326", name: "?????????", parent: "532300" }, { value: "532327", name: "?????????", parent: "532300" }, { value: "532328", name: "?????????", parent: "532300" }, { value: "532329", name: "?????????", parent: "532300" }, { value: "532331", name: "?????????", parent: "532300" }, { value: "532332", name: "?????????", parent: "532300" }, { value: "532501", name: "?????????", parent: "532500" }, { value: "532502", name: "?????????", parent: "532500" }, { value: "532522", name: "?????????", parent: "532500" }, { value: "532523", name: "?????????????????????", parent: "532500" }, { value: "532524", name: "?????????", parent: "532500" }, { value: "532525", name: "?????????", parent: "532500" }, { value: "532526", name: "?????????", parent: "532500" }, { value: "532527", name: "?????????", parent: "532500" }, { value: "532528", name: "?????????", parent: "532500" }, { value: "532529", name: "?????????", parent: "532500" }, { value: "532530", name: "?????????????????????????????????", parent: "532500" }, { value: "532531", name: "?????????", parent: "532500" }, { value: "532532", name: "?????????????????????", parent: "532500" }, { value: "532533", name: "?????????", parent: "532500" }, { value: "532621", name: "?????????", parent: "532600" }, { value: "532622", name: "?????????", parent: "532600" }, { value: "532623", name: "?????????", parent: "532600" }, { value: "532624", name: "????????????", parent: "532600" }, { value: "532625", name: "?????????", parent: "532600" }, { value: "532626", name: "?????????", parent: "532600" }, { value: "532627", name: "?????????", parent: "532600" }, { value: "532628", name: "?????????", parent: "532600" }, { value: "532629", name: "?????????", parent: "532600" }, { value: "532801", name: "?????????", parent: "532800" }, { value: "532822", name: "?????????", parent: "532800" }, { value: "532823", name: "?????????", parent: "532800" }, { value: "532824", name: "?????????", parent: "532800" }, { value: "532901", name: "?????????", parent: "532900" }, { value: "532922", name: "?????????????????????", parent: "532900" }, { value: "532923", name: "?????????", parent: "532900" }, { value: "532924", name: "?????????", parent: "532900" }, { value: "532925", name: "?????????", parent: "532900" }, { value: "532926", name: "?????????????????????", parent: "532900" }, { value: "532927", name: "???????????????????????????", parent: "532900" }, { value: "532928", name: "?????????", parent: "532900" }, { value: "532929", name: "?????????", parent: "532900" }, { value: "532930", name: "?????????", parent: "532900" }, { value: "532931", name: "?????????", parent: "532900" }, { value: "532932", name: "?????????", parent: "532900" }, { value: "532933", name: "?????????", parent: "532900" }, { value: "533102", name: "?????????", parent: "533100" }, { value: "533103", name: "??????", parent: "533100" }, { value: "533122", name: "?????????", parent: "533100" }, { value: "533123", name: "?????????", parent: "533100" }, { value: "533124", name: "?????????", parent: "533100" }, { value: "533125", name: "?????????", parent: "533100" }, { value: "533321", name: "?????????", parent: "533300" }, { value: "533323", name: "?????????", parent: "533300" }, { value: "533324", name: "??????????????????????????????", parent: "533300" }, { value: "533325", name: "??????????????????????????????", parent: "533300" }, { value: "533326", name: "?????????", parent: "533300" }, { value: "533421", name: "???????????????", parent: "533400" }, { value: "533422", name: "?????????", parent: "533400" }, { value: "533423", name: "????????????????????????", parent: "533400" }, { value: "533424", name: "?????????", parent: "533400" }, { value: "540102", name: "?????????", parent: "540100" }, { value: "540121", name: "?????????", parent: "540100" }, { value: "540122", name: "?????????", parent: "540100" }, { value: "540123", name: "?????????", parent: "540100" }, { value: "540124", name: "?????????", parent: "540100" }, { value: "540125", name: "???????????????", parent: "540100" }, { value: "540126", name: "?????????", parent: "540100" }, { value: "540127", name: "???????????????", parent: "540100" }, { value: "540128", name: "?????????", parent: "540100" }, { value: "542121", name: "?????????", parent: "542100" }, { value: "542122", name: "?????????", parent: "542100" }, { value: "542123", name: "?????????", parent: "542100" }, { value: "542124", name: "????????????", parent: "542100" }, { value: "542125", name: "?????????", parent: "542100" }, { value: "542126", name: "?????????", parent: "542100" }, { value: "542127", name: "?????????", parent: "542100" }, { value: "542128", name: "?????????", parent: "542100" }, { value: "542129", name: "?????????", parent: "542100" }, { value: "542132", name: "?????????", parent: "542100" }, { value: "542133", name: "?????????", parent: "542100" }, { value: "542134", name: "?????????", parent: "542100" }, { value: "542221", name: "?????????", parent: "542200" }, { value: "542222", name: "?????????", parent: "542200" }, { value: "542223", name: "?????????", parent: "542200" }, { value: "542224", name: "?????????", parent: "542200" }, { value: "542225", name: "?????????", parent: "542200" }, { value: "542226", name: "?????????", parent: "542200" }, { value: "542227", name: "?????????", parent: "542200" }, { value: "542228", name: "?????????", parent: "542200" }, { value: "542229", name: "?????????", parent: "542200" }, { value: "542231", name: "?????????", parent: "542200" }, { value: "542232", name: "?????????", parent: "542200" }, { value: "542233", name: "????????????", parent: "542200" }, { value: "542234", name: "?????????", parent: "542200" }, { value: "542301", name: "????????????", parent: "542300" }, { value: "542322", name: "????????????", parent: "542300" }, { value: "542323", name: "?????????", parent: "542300" }, { value: "542324", name: "?????????", parent: "542300" }, { value: "542325", name: "?????????", parent: "542300" }, { value: "542326", name: "?????????", parent: "542300" }, { value: "542327", name: "?????????", parent: "542300" }, { value: "542328", name: "????????????", parent: "542300" }, { value: "542329", name: "?????????", parent: "542300" }, { value: "542330", name: "?????????", parent: "542300" }, { value: "542331", name: "?????????", parent: "542300" }, { value: "542332", name: "?????????", parent: "542300" }, { value: "542333", name: "?????????", parent: "542300" }, { value: "542334", name: "?????????", parent: "542300" }, { value: "542335", name: "?????????", parent: "542300" }, { value: "542336", name: "????????????", parent: "542300" }, { value: "542337", name: "?????????", parent: "542300" }, { value: "542338", name: "?????????", parent: "542300" }, { value: "542339", name: "?????????", parent: "542300" }, { value: "542421", name: "?????????", parent: "542400" }, { value: "542422", name: "?????????", parent: "542400" }, { value: "542423", name: "?????????", parent: "542400" }, { value: "542424", name: "?????????", parent: "542400" }, { value: "542425", name: "?????????", parent: "542400" }, { value: "542426", name: "?????????", parent: "542400" }, { value: "542427", name: "??????", parent: "542400" }, { value: "542428", name: "?????????", parent: "542400" }, { value: "542429", name: "?????????", parent: "542400" }, { value: "542430", name: "?????????", parent: "542400" }, { value: "542431", name: "?????????", parent: "542400" }, { value: "542432", name: "?????????", parent: "542400" }, { value: "542521", name: "?????????", parent: "542500" }, { value: "542522", name: "?????????", parent: "542500" }, { value: "542523", name: "?????????", parent: "542500" }, { value: "542524", name: "?????????", parent: "542500" }, { value: "542525", name: "?????????", parent: "542500" }, { value: "542526", name: "?????????", parent: "542500" }, { value: "542527", name: "?????????", parent: "542500" }, { value: "542528", name: "?????????", parent: "542500" }, { value: "542621", name: "?????????", parent: "542600" }, { value: "542622", name: "???????????????", parent: "542600" }, { value: "542623", name: "?????????", parent: "542600" }, { value: "542624", name: "?????????", parent: "542600" }, { value: "542625", name: "?????????", parent: "542600" }, { value: "542626", name: "?????????", parent: "542600" }, { value: "542627", name: "??????", parent: "542600" }, { value: "542628", name: "?????????", parent: "542600" }, { value: "610102", name: "?????????", parent: "610100" }, { value: "610103", name: "?????????", parent: "610100" }, { value: "610104", name: "?????????", parent: "610100" }, { value: "610111", name: "?????????", parent: "610100" }, { value: "610112", name: "?????????", parent: "610100" }, { value: "610113", name: "?????????", parent: "610100" }, { value: "610114", name: "?????????", parent: "610100" }, { value: "610115", name: "?????????", parent: "610100" }, { value: "610116", name: "?????????", parent: "610100" }, { value: "610122", name: "?????????", parent: "610100" }, { value: "610124", name: "?????????", parent: "610100" }, { value: "610125", name: "??????", parent: "610100" }, { value: "610126", name: "?????????", parent: "610100" }, { value: "610127", name: "?????????", parent: "610100" }, { value: "610202", name: "?????????", parent: "610200" }, { value: "610203", name: "?????????", parent: "610200" }, { value: "610204", name: "?????????", parent: "610200" }, { value: "610222", name: "?????????", parent: "610200" }, { value: "610223", name: "?????????", parent: "610200" }, { value: "610302", name: "?????????", parent: "610300" }, { value: "610303", name: "?????????", parent: "610300" }, { value: "610304", name: "?????????", parent: "610300" }, { value: "610322", name: "?????????", parent: "610300" }, { value: "610323", name: "?????????", parent: "610300" }, { value: "610324", name: "?????????", parent: "610300" }, { value: "610326", name: "??????", parent: "610300" }, { value: "610327", name: "??????", parent: "610300" }, { value: "610328", name: "?????????", parent: "610300" }, { value: "610329", name: "?????????", parent: "610300" }, { value: "610330", name: "??????", parent: "610300" }, { value: "610331", name: "?????????", parent: "610300" }, { value: "610332", name: "?????????", parent: "610300" }, { value: "610402", name: "?????????", parent: "610400" }, { value: "610403", name: "?????????", parent: "610400" }, { value: "610404", name: "?????????", parent: "610400" }, { value: "610422", name: "?????????", parent: "610400" }, { value: "610423", name: "?????????", parent: "610400" }, { value: "610424", name: "??????", parent: "610400" }, { value: "610425", name: "?????????", parent: "610400" }, { value: "610426", name: "?????????", parent: "610400" }, { value: "610427", name: "??????", parent: "610400" }, { value: "610428", name: "?????????", parent: "610400" }, { value: "610429", name: "?????????", parent: "610400" }, { value: "610430", name: "?????????", parent: "610400" }, { value: "610431", name: "?????????", parent: "610400" }, { value: "610481", name: "?????????", parent: "610400" }, { value: "610482", name: "?????????", parent: "610400" }, { value: "610502", name: "?????????", parent: "610500" }, { value: "610521", name: "??????", parent: "610500" }, { value: "610522", name: "?????????", parent: "610500" }, { value: "610523", name: "?????????", parent: "610500" }, { value: "610524", name: "?????????", parent: "610500" }, { value: "610525", name: "?????????", parent: "610500" }, { value: "610526", name: "?????????", parent: "610500" }, { value: "610527", name: "?????????", parent: "610500" }, { value: "610528", name: "?????????", parent: "610500" }, { value: "610581", name: "?????????", parent: "610500" }, { value: "610582", name: "?????????", parent: "610500" }, { value: "610583", name: "?????????", parent: "610500" }, { value: "610602", name: "?????????", parent: "610600" }, { value: "610621", name: "?????????", parent: "610600" }, { value: "610622", name: "?????????", parent: "610600" }, { value: "610623", name: "?????????", parent: "610600" }, { value: "610624", name: "?????????", parent: "610600" }, { value: "610625", name: "?????????", parent: "610600" }, { value: "610626", name: "?????????", parent: "610600" }, { value: "610627", name: "?????????", parent: "610600" }, { value: "610628", name: "??????", parent: "610600" }, { value: "610629", name: "?????????", parent: "610600" }, { value: "610630", name: "?????????", parent: "610600" }, { value: "610631", name: "?????????", parent: "610600" }, { value: "610632", name: "?????????", parent: "610600" }, { value: "610633", name: "?????????", parent: "610600" }, { value: "610702", name: "?????????", parent: "610700" }, { value: "610721", name: "?????????", parent: "610700" }, { value: "610722", name: "?????????", parent: "610700" }, { value: "610723", name: "??????", parent: "610700" }, { value: "610724", name: "?????????", parent: "610700" }, { value: "610725", name: "??????", parent: "610700" }, { value: "610726", name: "?????????", parent: "610700" }, { value: "610727", name: "?????????", parent: "610700" }, { value: "610728", name: "?????????", parent: "610700" }, { value: "610729", name: "?????????", parent: "610700" }, { value: "610730", name: "?????????", parent: "610700" }, { value: "610731", name: "?????????", parent: "610700" }, { value: "610802", name: "?????????", parent: "610800" }, { value: "610821", name: "?????????", parent: "610800" }, { value: "610822", name: "?????????", parent: "610800" }, { value: "610823", name: "?????????", parent: "610800" }, { value: "610824", name: "?????????", parent: "610800" }, { value: "610825", name: "?????????", parent: "610800" }, { value: "610826", name: "?????????", parent: "610800" }, { value: "610827", name: "?????????", parent: "610800" }, { value: "610828", name: "??????", parent: "610800" }, { value: "610829", name: "?????????", parent: "610800" }, { value: "610830", name: "?????????", parent: "610800" }, { value: "610831", name: "?????????", parent: "610800" }, { value: "610832", name: "?????????", parent: "610800" }, { value: "610902", name: "?????????", parent: "610900" }, { value: "610921", name: "?????????", parent: "610900" }, { value: "610922", name: "?????????", parent: "610900" }, { value: "610923", name: "?????????", parent: "610900" }, { value: "610924", name: "?????????", parent: "610900" }, { value: "610925", name: "?????????", parent: "610900" }, { value: "610926", name: "?????????", parent: "610900" }, { value: "610927", name: "?????????", parent: "610900" }, { value: "610928", name: "?????????", parent: "610900" }, { value: "610929", name: "?????????", parent: "610900" }, { value: "610930", name: "?????????", parent: "610900" }, { value: "611002", name: "?????????", parent: "611000" }, { value: "611021", name: "?????????", parent: "611000" }, { value: "611022", name: "?????????", parent: "611000" }, { value: "611023", name: "?????????", parent: "611000" }, { value: "611024", name: "?????????", parent: "611000" }, { value: "611025", name: "?????????", parent: "611000" }, { value: "611026", name: "?????????", parent: "611000" }, { value: "611027", name: "?????????", parent: "611000" }, { value: "620102", name: "?????????", parent: "620100" }, { value: "620103", name: "????????????", parent: "620100" }, { value: "620104", name: "?????????", parent: "620100" }, { value: "620105", name: "?????????", parent: "620100" }, { value: "620111", name: "?????????", parent: "620100" }, { value: "620121", name: "?????????", parent: "620100" }, { value: "620122", name: "?????????", parent: "620100" }, { value: "620123", name: "?????????", parent: "620100" }, { value: "620124", name: "?????????", parent: "620100" }, { value: "620302", name: "?????????", parent: "620300" }, { value: "620321", name: "?????????", parent: "620300" }, { value: "620322", name: "?????????", parent: "620300" }, { value: "620402", name: "?????????", parent: "620400" }, { value: "620403", name: "?????????", parent: "620400" }, { value: "620421", name: "?????????", parent: "620400" }, { value: "620422", name: "?????????", parent: "620400" }, { value: "620423", name: "?????????", parent: "620400" }, { value: "620424", name: "?????????", parent: "620400" }, { value: "620502", name: "?????????", parent: "620500" }, { value: "620503", name: "?????????", parent: "620500" }, { value: "620521", name: "?????????", parent: "620500" }, { value: "620522", name: "?????????", parent: "620500" }, { value: "620523", name: "?????????", parent: "620500" }, { value: "620524", name: "?????????", parent: "620500" }, { value: "620525", name: "????????????????????????", parent: "620500" }, { value: "620526", name: "?????????", parent: "620500" }, { value: "620602", name: "?????????", parent: "620600" }, { value: "620621", name: "?????????", parent: "620600" }, { value: "620622", name: "?????????", parent: "620600" }, { value: "620623", name: "?????????????????????", parent: "620600" }, { value: "620624", name: "?????????", parent: "620600" }, { value: "620702", name: "?????????", parent: "620700" }, { value: "620721", name: "????????????????????????", parent: "620700" }, { value: "620722", name: "?????????", parent: "620700" }, { value: "620723", name: "?????????", parent: "620700" }, { value: "620724", name: "?????????", parent: "620700" }, { value: "620725", name: "?????????", parent: "620700" }, { value: "620726", name: "?????????", parent: "620700" }, { value: "620802", name: "?????????", parent: "620800" }, { value: "620821", name: "?????????", parent: "620800" }, { value: "620822", name: "?????????", parent: "620800" }, { value: "620823", name: "?????????", parent: "620800" }, { value: "620824", name: "?????????", parent: "620800" }, { value: "620825", name: "?????????", parent: "620800" }, { value: "620826", name: "?????????", parent: "620800" }, { value: "620827", name: "?????????", parent: "620800" }, { value: "620902", name: "?????????", parent: "620900" }, { value: "620921", name: "?????????", parent: "620900" }, { value: "620922", name: "?????????", parent: "620900" }, { value: "620923", name: "????????????????????????", parent: "620900" }, { value: "620924", name: "??????????????????????????????", parent: "620900" }, { value: "620981", name: "?????????", parent: "620900" }, { value: "620982", name: "?????????", parent: "620900" }, { value: "620983", name: "?????????", parent: "620900" }, { value: "621002", name: "?????????", parent: "621000" }, { value: "621021", name: "?????????", parent: "621000" }, { value: "621022", name: "??????", parent: "621000" }, { value: "621023", name: "?????????", parent: "621000" }, { value: "621024", name: "?????????", parent: "621000" }, { value: "621025", name: "?????????", parent: "621000" }, { value: "621026", name: "??????", parent: "621000" }, { value: "621027", name: "?????????", parent: "621000" }, { value: "621028", name: "?????????", parent: "621000" }, { value: "621102", name: "?????????", parent: "621100" }, { value: "621121", name: "?????????", parent: "621100" }, { value: "621122", name: "?????????", parent: "621100" }, { value: "621123", name: "?????????", parent: "621100" }, { value: "621124", name: "?????????", parent: "621100" }, { value: "621125", name: "??????", parent: "621100" }, { value: "621126", name: "??????", parent: "621100" }, { value: "621127", name: "?????????", parent: "621100" }, { value: "621202", name: "?????????", parent: "621200" }, { value: "621221", name: "??????", parent: "621200" }, { value: "621222", name: "??????", parent: "621200" }, { value: "621223", name: "?????????", parent: "621200" }, { value: "621224", name: "??????", parent: "621200" }, { value: "621225", name: "?????????", parent: "621200" }, { value: "621226", name: "??????", parent: "621200" }, { value: "621227", name: "??????", parent: "621200" }, { value: "621228", name: "?????????", parent: "621200" }, { value: "621229", name: "?????????", parent: "621200" }, { value: "622901", name: "?????????", parent: "622900" }, { value: "622921", name: "?????????", parent: "622900" }, { value: "622922", name: "?????????", parent: "622900" }, { value: "622923", name: "?????????", parent: "622900" }, { value: "622924", name: "?????????", parent: "622900" }, { value: "622925", name: "?????????", parent: "622900" }, { value: "622926", name: "??????????????????", parent: "622900" }, { value: "622927", name: "?????????????????????????????????????????????", parent: "622900" }, { value: "622928", name: "?????????", parent: "622900" }, { value: "623001", name: "?????????", parent: "623000" }, { value: "623021", name: "?????????", parent: "623000" }, { value: "623022", name: "?????????", parent: "623000" }, { value: "623023", name: "?????????", parent: "623000" }, { value: "623024", name: "?????????", parent: "623000" }, { value: "623025", name: "?????????", parent: "623000" }, { value: "623026", name: "?????????", parent: "623000" }, { value: "623027", name: "?????????", parent: "623000" }, { value: "623028", name: "?????????", parent: "623000" }, { value: "630102", name: "?????????", parent: "630100" }, { value: "630103", name: "?????????", parent: "630100" }, { value: "630104", name: "?????????", parent: "630100" }, { value: "630105", name: "?????????", parent: "630100" }, { value: "630121", name: "???????????????????????????", parent: "630100" }, { value: "630122", name: "?????????", parent: "630100" }, { value: "630123", name: "?????????", parent: "630100" }, { value: "630124", name: "?????????", parent: "630100" }, { value: "632121", name: "?????????", parent: "632100" }, { value: "632122", name: "???????????????????????????", parent: "632100" }, { value: "632123", name: "?????????", parent: "632100" }, { value: "632126", name: "?????????????????????", parent: "632100" }, { value: "632127", name: "?????????????????????", parent: "632100" }, { value: "632128", name: "????????????????????????", parent: "632100" }, { value: "632129", name: "?????????", parent: "632100" }, { value: "632221", name: "?????????????????????", parent: "632200" }, { value: "632222", name: "?????????", parent: "632200" }, { value: "632223", name: "?????????", parent: "632200" }, { value: "632224", name: "?????????", parent: "632200" }, { value: "632225", name: "?????????", parent: "632200" }, { value: "632321", name: "?????????", parent: "632300" }, { value: "632322", name: "?????????", parent: "632300" }, { value: "632323", name: "?????????", parent: "632300" }, { value: "632324", name: "????????????????????????", parent: "632300" }, { value: "632325", name: "?????????", parent: "632300" }, { value: "632521", name: "?????????", parent: "632500" }, { value: "632522", name: "?????????", parent: "632500" }, { value: "632523", name: "?????????", parent: "632500" }, { value: "632524", name: "?????????", parent: "632500" }, { value: "632525", name: "?????????", parent: "632500" }, { value: "632526", name: "?????????", parent: "632500" }, { value: "632621", name: "?????????", parent: "632600" }, { value: "632622", name: "?????????", parent: "632600" }, { value: "632623", name: "?????????", parent: "632600" }, { value: "632624", name: "?????????", parent: "632600" }, { value: "632625", name: "?????????", parent: "632600" }, { value: "632626", name: "?????????", parent: "632600" }, { value: "632627", name: "?????????", parent: "632600" }, { value: "632721", name: "?????????", parent: "632700" }, { value: "632722", name: "?????????", parent: "632700" }, { value: "632723", name: "?????????", parent: "632700" }, { value: "632724", name: "?????????", parent: "632700" }, { value: "632725", name: "?????????", parent: "632700" }, { value: "632726", name: "????????????", parent: "632700" }, { value: "632727", name: "?????????", parent: "632700" }, { value: "632801", name: "????????????", parent: "632800" }, { value: "632802", name: "????????????", parent: "632800" }, { value: "632821", name: "?????????", parent: "632800" }, { value: "632822", name: "?????????", parent: "632800" }, { value: "632823", name: "?????????", parent: "632800" }, { value: "632824", name: "?????????", parent: "632800" }, { value: "640104", name: "?????????", parent: "640100" }, { value: "640105", name: "?????????", parent: "640100" }, { value: "640106", name: "?????????", parent: "640100" }, { value: "640121", name: "?????????", parent: "640100" }, { value: "640122", name: "?????????", parent: "640100" }, { value: "640181", name: "?????????", parent: "640100" }, { value: "640182", name: "?????????", parent: "640100" }, { value: "640202", name: "????????????", parent: "640200" }, { value: "640205", name: "?????????", parent: "640200" }, { value: "640221", name: "?????????", parent: "640200" }, { value: "640222", name: "?????????", parent: "640200" }, { value: "640302", name: "?????????", parent: "640300" }, { value: "640303", name: "????????????", parent: "640300" }, { value: "640323", name: "?????????", parent: "640300" }, { value: "640324", name: "?????????", parent: "640300" }, { value: "640381", name: "????????????", parent: "640300" }, { value: "640382", name: "?????????", parent: "640300" }, { value: "640402", name: "?????????", parent: "640400" }, { value: "640422", name: "?????????", parent: "640400" }, { value: "640423", name: "?????????", parent: "640400" }, { value: "640424", name: "?????????", parent: "640400" }, { value: "640425", name: "?????????", parent: "640400" }, { value: "640426", name: "?????????", parent: "640400" }, { value: "640502", name: "????????????", parent: "640500" }, { value: "640521", name: "?????????", parent: "640500" }, { value: "640522", name: "?????????", parent: "640500" }, { value: "640523", name: "?????????", parent: "640500" }, { value: "650102", name: "?????????", parent: "650100" }, { value: "650103", name: "???????????????", parent: "650100" }, { value: "650104", name: "?????????", parent: "650100" }, { value: "650105", name: "????????????", parent: "650100" }, { value: "650106", name: "????????????", parent: "650100" }, { value: "650107", name: "????????????", parent: "650100" }, { value: "650108", name: "?????????", parent: "650100" }, { value: "650109", name: "?????????", parent: "650100" }, { value: "650121", name: "???????????????", parent: "650100" }, { value: "650122", name: "?????????", parent: "650100" }, { value: "650202", name: "????????????", parent: "650200" }, { value: "650203", name: "???????????????", parent: "650200" }, { value: "650204", name: "????????????", parent: "650200" }, { value: "650205", name: "????????????", parent: "650200" }, { value: "650206", name: "?????????", parent: "650200" }, { value: "652101", name: "?????????", parent: "652100" }, { value: "652122", name: "?????????", parent: "652100" }, { value: "652123", name: "????????????", parent: "652100" }, { value: "652124", name: "?????????", parent: "652100" }, { value: "652201", name: "?????????", parent: "652200" }, { value: "652222", name: "???????????????????????????", parent: "652200" }, { value: "652223", name: "?????????", parent: "652200" }, { value: "652224", name: "?????????", parent: "652200" }, { value: "652301", name: "?????????", parent: "652300" }, { value: "652302", name: "?????????", parent: "652300" }, { value: "652303", name: "?????????", parent: "652300" }, { value: "652323", name: "????????????", parent: "652300" }, { value: "652324", name: "????????????", parent: "652300" }, { value: "652325", name: "?????????", parent: "652300" }, { value: "652327", name: "???????????????", parent: "652300" }, { value: "652328", name: "????????????????????????", parent: "652300" }, { value: "652329", name: "?????????", parent: "652300" }, { value: "652701", name: "?????????", parent: "652700" }, { value: "652702", name: "???????????????", parent: "652700" }, { value: "652722", name: "?????????", parent: "652700" }, { value: "652723", name: "?????????", parent: "652700" }, { value: "652724", name: "?????????", parent: "652700" }, { value: "652801", name: "????????????", parent: "652800" }, { value: "652822", name: "?????????", parent: "652800" }, { value: "652823", name: "?????????", parent: "652800" }, { value: "652824", name: "?????????", parent: "652800" }, { value: "652825", name: "?????????", parent: "652800" }, { value: "652826", name: "?????????????????????", parent: "652800" }, { value: "652827", name: "?????????", parent: "652800" }, { value: "652828", name: "?????????", parent: "652800" }, { value: "652829", name: "?????????", parent: "652800" }, { value: "652830", name: "?????????", parent: "652800" }, { value: "652901", name: "????????????", parent: "652900" }, { value: "652922", name: "?????????", parent: "652900" }, { value: "652923", name: "?????????", parent: "652900" }, { value: "652924", name: "?????????", parent: "652900" }, { value: "652925", name: "?????????", parent: "652900" }, { value: "652926", name: "?????????", parent: "652900" }, { value: "652927", name: "?????????", parent: "652900" }, { value: "652928", name: "????????????", parent: "652900" }, { value: "652929", name: "?????????", parent: "652900" }, { value: "652930", name: "?????????", parent: "652900" }, { value: "653001", name: "????????????", parent: "653000" }, { value: "653022", name: "????????????", parent: "653000" }, { value: "653023", name: "????????????", parent: "653000" }, { value: "653024", name: "?????????", parent: "653000" }, { value: "653025", name: "?????????", parent: "653000" }, { value: "653101", name: "?????????", parent: "653100" }, { value: "653121", name: "?????????", parent: "653100" }, { value: "653122", name: "?????????", parent: "653100" }, { value: "653123", name: "????????????", parent: "653100" }, { value: "653124", name: "?????????", parent: "653100" }, { value: "653125", name: "?????????", parent: "653100" }, { value: "653126", name: "?????????", parent: "653100" }, { value: "653127", name: "????????????", parent: "653100" }, { value: "653128", name: "????????????", parent: "653100" }, { value: "653129", name: "?????????", parent: "653100" }, { value: "653130", name: "?????????", parent: "653100" }, { value: "653131", name: "?????????????????????????????????", parent: "653100" }, { value: "653132", name: "?????????", parent: "653100" }, { value: "653201", name: "?????????", parent: "653200" }, { value: "653221", name: "?????????", parent: "653200" }, { value: "653222", name: "?????????", parent: "653200" }, { value: "653223", name: "?????????", parent: "653200" }, { value: "653224", name: "?????????", parent: "653200" }, { value: "653225", name: "?????????", parent: "653200" }, { value: "653226", name: "?????????", parent: "653200" }, { value: "653227", name: "?????????", parent: "653200" }, { value: "653228", name: "?????????", parent: "653200" }, { value: "654002", name: "?????????", parent: "654000" }, { value: "654003", name: "?????????", parent: "654000" }, { value: "654004", name: "???????????????", parent: "654000" }, { value: "654021", name: "?????????", parent: "654000" }, { value: "654022", name: "???????????????????????????", parent: "654000" }, { value: "654023", name: "?????????", parent: "654000" }, { value: "654024", name: "?????????", parent: "654000" }, { value: "654025", name: "?????????", parent: "654000" }, { value: "654026", name: "?????????", parent: "654000" }, { value: "654027", name: "????????????", parent: "654000" }, { value: "654028", name: "????????????", parent: "654000" }, { value: "654029", name: "?????????", parent: "654000" }, { value: "654201", name: "?????????", parent: "654200" }, { value: "654202", name: "?????????", parent: "654200" }, { value: "654221", name: "?????????", parent: "654200" }, { value: "654223", name: "?????????", parent: "654200" }, { value: "654224", name: "?????????", parent: "654200" }, { value: "654225", name: "?????????", parent: "654200" }, { value: "654226", name: "??????????????????????????????", parent: "654200" }, { value: "654227", name: "?????????", parent: "654200" }, { value: "654301", name: "????????????", parent: "654300" }, { value: "654321", name: "????????????", parent: "654300" }, { value: "654322", name: "?????????", parent: "654300" }, { value: "654323", name: "?????????", parent: "654300" }, { value: "654324", name: "????????????", parent: "654300" }, { value: "654325", name: "?????????", parent: "654300" }, { value: "654326", name: "????????????", parent: "654300" }, { value: "654327", name: "?????????", parent: "654300" }, { value: "659001", name: "????????????", parent: "650000" }, { value: "659002", name: "????????????", parent: "650000" }, { value: "659003", name: "???????????????", parent: "650000" }, { value: "659004", name: "????????????", parent: "650000" }, { value: "659007", name: "?????????", parent: "659000" }, { value: "659008", name: "???????????????", parent: "659000" }, { value: "710101", name: "?????????", parent: "710100" }, { value: "710102", name: "?????????", parent: "710100" }, { value: "710103", name: "?????????", parent: "710100" }, { value: "710104", name: "?????????", parent: "710100" }, { value: "710105", name: "?????????", parent: "710100" }, { value: "710106", name: "?????????", parent: "710100" }, { value: "710107", name: "?????????", parent: "710100" }, { value: "710108", name: "?????????", parent: "710100" }, { value: "710109", name: "?????????", parent: "710100" }, { value: "710110", name: "?????????", parent: "710100" }, { value: "710111", name: "?????????", parent: "710100" }, { value: "710112", name: "?????????", parent: "710100" }, { value: "710113", name: "?????????", parent: "710100" }, { value: "710201", name: "?????????", parent: "710200" }, { value: "710202", name: "?????????", parent: "710200" }, { value: "710203", name: "?????????", parent: "710200" }, { value: "710204", name: "?????????", parent: "710200" }, { value: "710205", name: "?????????", parent: "710200" }, { value: "710206", name: "?????????", parent: "710200" }, { value: "710207", name: "?????????", parent: "710200" }, { value: "710208", name: "?????????", parent: "710200" }, { value: "710209", name: "?????????", parent: "710200" }, { value: "710210", name: "?????????", parent: "710200" }, { value: "710211", name: "?????????", parent: "710200" }, { value: "710212", name: "?????????", parent: "710200" }, { value: "710241", name: "?????????", parent: "710200" }, { value: "710242", name: "?????????", parent: "710200" }, { value: "710243", name: "?????????", parent: "710200" }, { value: "710244", name: "?????????", parent: "710200" }, { value: "710245", name: "?????????", parent: "710200" }, { value: "710246", name: "?????????", parent: "710200" }, { value: "710247", name: "?????????", parent: "710200" }, { value: "710248", name: "?????????", parent: "710200" }, { value: "710249", name: "?????????", parent: "710200" }, { value: "710250", name: "?????????", parent: "710200" }, { value: "710251", name: "?????????", parent: "710200" }, { value: "710252", name: "?????????", parent: "710200" }, { value: "710253", name: "?????????", parent: "710200" }, { value: "710254", name: "?????????", parent: "710200" }, { value: "710255", name: "?????????", parent: "710200" }, { value: "710256", name: "?????????", parent: "710200" }, { value: "710257", name: "?????????", parent: "710200" }, { value: "710258", name: "?????????", parent: "710200" }, { value: "710259", name: "?????????", parent: "710200" }, { value: "710260", name: "?????????", parent: "710200" }, { value: "710261", name: "?????????", parent: "710200" }, { value: "710262", name: "?????????", parent: "710200" }, { value: "710263", name: "?????????", parent: "710200" }, { value: "710264", name: "?????????", parent: "710200" }, { value: "710265", name: "?????????", parent: "710200" }, { value: "710266", name: "????????????", parent: "710200" }, { value: "710267", name: "?????????", parent: "710200" }, { value: "710268", name: "?????????", parent: "710200" }, { value: "710301", name: "?????????", parent: "710300" }, { value: "710302", name: "??????", parent: "710300" }, { value: "710303", name: "??????", parent: "710300" }, { value: "710304", name: "??????", parent: "710300" }, { value: "710305", name: "?????????", parent: "710300" }, { value: "710306", name: "?????????", parent: "710300" }, { value: "710307", name: "?????????", parent: "710300" }, { value: "710339", name: "?????????", parent: "710300" }, { value: "710340", name: "?????????", parent: "710300" }, { value: "710341", name: "?????????", parent: "710300" }, { value: "710342", name: "?????????", parent: "710300" }, { value: "710343", name: "?????????", parent: "710300" }, { value: "710344", name: "?????????", parent: "710300" }, { value: "710345", name: "?????????", parent: "710300" }, { value: "710346", name: "?????????", parent: "710300" }, { value: "710347", name: "?????????", parent: "710300" }, { value: "710348", name: "?????????", parent: "710300" }, { value: "710349", name: "?????????", parent: "710300" }, { value: "710350", name: "?????????", parent: "710300" }, { value: "710351", name: "?????????", parent: "710300" }, { value: "710352", name: "?????????", parent: "710300" }, { value: "710353", name: "?????????", parent: "710300" }, { value: "710354", name: "?????????", parent: "710300" }, { value: "710355", name: "?????????", parent: "710300" }, { value: "710356", name: "?????????", parent: "710300" }, { value: "710357", name: "?????????", parent: "710300" }, { value: "710358", name: "?????????", parent: "710300" }, { value: "710359", name: "?????????", parent: "710300" }, { value: "710360", name: "?????????", parent: "710300" }, { value: "710361", name: "?????????", parent: "710300" }, { value: "710362", name: "?????????", parent: "710300" }, { value: "710363", name: "?????????", parent: "710300" }, { value: "710364", name: "?????????", parent: "710300" }, { value: "710365", name: "?????????", parent: "710300" }, { value: "710366", name: "?????????", parent: "710300" }, { value: "710367", name: "?????????", parent: "710300" }, { value: "710368", name: "?????????", parent: "710300" }, { value: "710369", name: "?????????", parent: "710300" }, { value: "710401", name: "??????", parent: "710400" }, { value: "710402", name: "??????", parent: "710400" }, { value: "710403", name: "??????", parent: "710400" }, { value: "710404", name: "??????", parent: "710400" }, { value: "710405", name: "??????", parent: "710400" }, { value: "710406", name: "?????????", parent: "710400" }, { value: "710407", name: "?????????", parent: "710400" }, { value: "710408", name: "?????????", parent: "710400" }, { value: "710409", name: "?????????", parent: "710400" }, { value: "710431", name: "?????????", parent: "710400" }, { value: "710432", name: "?????????", parent: "710400" }, { value: "710433", name: "?????????", parent: "710400" }, { value: "710434", name: "?????????", parent: "710400" }, { value: "710435", name: "?????????", parent: "710400" }, { value: "710436", name: "?????????", parent: "710400" }, { value: "710437", name: "?????????", parent: "710400" }, { value: "710438", name: "?????????", parent: "710400" }, { value: "710439", name: "?????????", parent: "710400" }, { value: "710440", name: "?????????", parent: "710400" }, { value: "710441", name: "?????????", parent: "710400" }, { value: "710442", name: "?????????", parent: "710400" }, { value: "710443", name: "?????????", parent: "710400" }, { value: "710444", name: "?????????", parent: "710400" }, { value: "710445", name: "?????????", parent: "710400" }, { value: "710446", name: "?????????", parent: "710400" }, { value: "710447", name: "?????????", parent: "710400" }, { value: "710448", name: "?????????", parent: "710400" }, { value: "710449", name: "?????????", parent: "710400" }, { value: "710450", name: "?????????", parent: "710400" }, { value: "710451", name: "?????????", parent: "710400" }, { value: "710507", name: "?????????", parent: "710500" }, { value: "710508", name: "?????????", parent: "710500" }, { value: "710509", name: "?????????", parent: "710500" }, { value: "710510", name: "?????????", parent: "710500" }, { value: "710511", name: "?????????", parent: "710500" }, { value: "710512", name: "?????????", parent: "710500" }, { value: "710614", name: "?????????", parent: "710600" }, { value: "710615", name: "?????????", parent: "710600" }, { value: "710616", name: "?????????", parent: "710600" }, { value: "710617", name: "?????????", parent: "710600" }, { value: "710618", name: "?????????", parent: "710600" }, { value: "710619", name: "?????????", parent: "710600" }, { value: "710620", name: "?????????", parent: "710600" }, { value: "710621", name: "?????????", parent: "710600" }, { value: "710622", name: "?????????", parent: "710600" }, { value: "710623", name: "?????????", parent: "710600" }, { value: "710624", name: "?????????", parent: "710600" }, { value: "710625", name: "?????????", parent: "710600" }, { value: "710626", name: "?????????", parent: "710600" }, { value: "710701", name: "?????????", parent: "710700" }, { value: "710702", name: "?????????", parent: "710700" }, { value: "710703", name: "?????????", parent: "710700" }, { value: "710704", name: "?????????", parent: "710700" }, { value: "710705", name: "?????????", parent: "710700" }, { value: "710706", name: "?????????", parent: "710700" }, { value: "710707", name: "?????????", parent: "710700" }, { value: "710708", name: "?????????", parent: "710700" }, { value: "710801", name: "??????", parent: "710800" }, { value: "710802", name: "??????", parent: "710800" }, { value: "710803", name: "?????????", parent: "710800" }, { value: "710804", name: "?????????", parent: "710800" }, { value: "710901", name: "??????", parent: "710900" }, { value: "710902", name: "??????", parent: "710900" }, { value: "710903", name: "?????????", parent: "710900" }, { value: "711130", name: "?????????", parent: "711100" }, { value: "711131", name: "?????????", parent: "711100" }, { value: "711132", name: "?????????", parent: "711100" }, { value: "711133", name: "?????????", parent: "711100" }, { value: "711134", name: "?????????", parent: "711100" }, { value: "711135", name: "?????????", parent: "711100" }, { value: "711136", name: "?????????", parent: "711100" }, { value: "711137", name: "?????????", parent: "711100" }, { value: "711138", name: "?????????", parent: "711100" }, { value: "711139", name: "?????????", parent: "711100" }, { value: "711140", name: "?????????", parent: "711100" }, { value: "711141", name: "?????????", parent: "711100" }, { value: "711142", name: "?????????", parent: "711100" }, { value: "711143", name: "?????????", parent: "711100" }, { value: "711144", name: "?????????", parent: "711100" }, { value: "711145", name: "?????????", parent: "711100" }, { value: "711146", name: "?????????", parent: "711100" }, { value: "711147", name: "?????????", parent: "711100" }, { value: "711148", name: "?????????", parent: "711100" }, { value: "711149", name: "?????????", parent: "711100" }, { value: "711150", name: "?????????", parent: "711100" }, { value: "711151", name: "?????????", parent: "711100" }, { value: "711152", name: "?????????", parent: "711100" }, { value: "711153", name: "?????????", parent: "711100" }, { value: "711154", name: "?????????", parent: "711100" }, { value: "711155", name: "?????????", parent: "711100" }, { value: "711156", name: "?????????", parent: "711100" }, { value: "711157", name: "?????????", parent: "711100" }, { value: "711158", name: "?????????", parent: "711100" }, { value: "711214", name: "?????????", parent: "711200" }, { value: "711215", name: "?????????", parent: "711200" }, { value: "711216", name: "?????????", parent: "711200" }, { value: "711217", name: "?????????", parent: "711200" }, { value: "711218", name: "?????????", parent: "711200" }, { value: "711219", name: "?????????", parent: "711200" }, { value: "711220", name: "?????????", parent: "711200" }, { value: "711221", name: "?????????", parent: "711200" }, { value: "711222", name: "?????????", parent: "711200" }, { value: "711223", name: "?????????", parent: "711200" }, { value: "711224", name: "?????????", parent: "711200" }, { value: "711225", name: "?????????", parent: "711200" }, { value: "711226", name: "?????????", parent: "711200" }, { value: "711314", name: "?????????", parent: "711300" }, { value: "711315", name: "?????????", parent: "711300" }, { value: "711316", name: "?????????", parent: "711300" }, { value: "711317", name: "?????????", parent: "711300" }, { value: "711318", name: "?????????", parent: "711300" }, { value: "711319", name: "?????????", parent: "711300" }, { value: "711320", name: "?????????", parent: "711300" }, { value: "711321", name: "?????????", parent: "711300" }, { value: "711322", name: "?????????", parent: "711300" }, { value: "711323", name: "?????????", parent: "711300" }, { value: "711324", name: "?????????", parent: "711300" }, { value: "711325", name: "?????????", parent: "711300" }, { value: "711326", name: "?????????", parent: "711300" }, { value: "711414", name: "?????????", parent: "711400" }, { value: "711415", name: "?????????", parent: "711400" }, { value: "711416", name: "?????????", parent: "711400" }, { value: "711417", name: "?????????", parent: "711400" }, { value: "711418", name: "?????????", parent: "711400" }, { value: "711419", name: "?????????", parent: "711400" }, { value: "711420", name: "?????????", parent: "711400" }, { value: "711421", name: "?????????", parent: "711400" }, { value: "711422", name: "?????????", parent: "711400" }, { value: "711423", name: "?????????", parent: "711400" }, { value: "711424", name: "?????????", parent: "711400" }, { value: "711425", name: "?????????", parent: "711400" }, { value: "711426", name: "?????????", parent: "711400" }, { value: "711519", name: "?????????", parent: "711500" }, { value: "711520", name: "?????????", parent: "711500" }, { value: "711521", name: "?????????", parent: "711500" }, { value: "711522", name: "?????????", parent: "711500" }, { value: "711523", name: "?????????", parent: "711500" }, { value: "711524", name: "?????????", parent: "711500" }, { value: "711525", name: "?????????", parent: "711500" }, { value: "711526", name: "?????????", parent: "711500" }, { value: "711527", name: "?????????", parent: "711500" }, { value: "711528", name: "?????????", parent: "711500" }, { value: "711529", name: "?????????", parent: "711500" }, { value: "711530", name: "?????????", parent: "711500" }, { value: "711531", name: "?????????", parent: "711500" }, { value: "711532", name: "?????????", parent: "711500" }, { value: "711533", name: "?????????", parent: "711500" }, { value: "711534", name: "?????????", parent: "711500" }, { value: "711535", name: "?????????", parent: "711500" }, { value: "711536", name: "?????????", parent: "711500" }, { value: "711727", name: "?????????", parent: "711700" }, { value: "711728", name: "?????????", parent: "711700" }, { value: "711729", name: "?????????", parent: "711700" }, { value: "711730", name: "?????????", parent: "711700" }, { value: "711731", name: "?????????", parent: "711700" }, { value: "711732", name: "?????????", parent: "711700" }, { value: "711733", name: "?????????", parent: "711700" }, { value: "711734", name: "?????????", parent: "711700" }, { value: "711735", name: "?????????", parent: "711700" }, { value: "711736", name: "?????????", parent: "711700" }, { value: "711737", name: "?????????", parent: "711700" }, { value: "711738", name: "?????????", parent: "711700" }, { value: "711739", name: "?????????", parent: "711700" }, { value: "711740", name: "?????????", parent: "711700" }, { value: "711741", name: "?????????", parent: "711700" }, { value: "711742", name: "?????????", parent: "711700" }, { value: "711743", name: "?????????", parent: "711700" }, { value: "711744", name: "?????????", parent: "711700" }, { value: "711745", name: "?????????", parent: "711700" }, { value: "711746", name: "?????????", parent: "711700" }, { value: "711747", name: "?????????", parent: "711700" }, { value: "711748", name: "?????????", parent: "711700" }, { value: "711749", name: "?????????", parent: "711700" }, { value: "711750", name: "?????????", parent: "711700" }, { value: "711751", name: "?????????", parent: "711700" }, { value: "711752", name: "?????????", parent: "711700" }, { value: "711919", name: "?????????", parent: "711900" }, { value: "711920", name: "?????????", parent: "711900" }, { value: "711921", name: "?????????", parent: "711900" }, { value: "711922", name: "????????????", parent: "711900" }, { value: "711923", name: "?????????", parent: "711900" }, { value: "711924", name: "?????????", parent: "711900" }, { value: "711925", name: "?????????", parent: "711900" }, { value: "711926", name: "?????????", parent: "711900" }, { value: "711927", name: "?????????", parent: "711900" }, { value: "711928", name: "?????????", parent: "711900" }, { value: "711929", name: "?????????", parent: "711900" }, { value: "711930", name: "?????????", parent: "711900" }, { value: "711931", name: "?????????", parent: "711900" }, { value: "711932", name: "?????????", parent: "711900" }, { value: "711933", name: "?????????", parent: "711900" }, { value: "711934", name: "?????????", parent: "711900" }, { value: "711935", name: "?????????", parent: "711900" }, { value: "711936", name: "?????????", parent: "711900" }, { value: "712121", name: "?????????", parent: "712100" }, { value: "712122", name: "?????????", parent: "712100" }, { value: "712123", name: "?????????", parent: "712100" }, { value: "712124", name: "?????????", parent: "712100" }, { value: "712125", name: "?????????", parent: "712100" }, { value: "712126", name: "?????????", parent: "712100" }, { value: "712127", name: "?????????", parent: "712100" }, { value: "712128", name: "?????????", parent: "712100" }, { value: "712129", name: "?????????", parent: "712100" }, { value: "712130", name: "?????????", parent: "712100" }, { value: "712131", name: "?????????", parent: "712100" }, { value: "712132", name: "?????????", parent: "712100" }, { value: "712133", name: "?????????", parent: "712100" }, { value: "712134", name: "?????????", parent: "712100" }, { value: "712135", name: "?????????", parent: "712100" }, { value: "712136", name: "?????????", parent: "712100" }, { value: "712137", name: "?????????", parent: "712100" }, { value: "712138", name: "?????????", parent: "712100" }, { value: "712139", name: "?????????", parent: "712100" }, { value: "712140", name: "?????????", parent: "712100" }, { value: "712434", name: "?????????", parent: "712400" }, { value: "712435", name: "????????????", parent: "712400" }, { value: "712436", name: "?????????", parent: "712400" }, { value: "712437", name: "?????????", parent: "712400" }, { value: "712438", name: "?????????", parent: "712400" }, { value: "712439", name: "?????????", parent: "712400" }, { value: "712440", name: "?????????", parent: "712400" }, { value: "712441", name: "?????????", parent: "712400" }, { value: "712442", name: "?????????", parent: "712400" }, { value: "712443", name: "?????????", parent: "712400" }, { value: "712444", name: "?????????", parent: "712400" }, { value: "712445", name: "?????????", parent: "712400" }, { value: "712446", name: "?????????", parent: "712400" }, { value: "712447", name: "?????????", parent: "712400" }, { value: "712448", name: "?????????", parent: "712400" }, { value: "712449", name: "?????????", parent: "712400" }, { value: "712450", name: "?????????", parent: "712400" }, { value: "712451", name: "?????????", parent: "712400" }, { value: "712452", name: "?????????", parent: "712400" }, { value: "712453", name: "?????????", parent: "712400" }, { value: "712454", name: "?????????", parent: "712400" }, { value: "712455", name: "?????????", parent: "712400" }, { value: "712456", name: "?????????", parent: "712400" }, { value: "712457", name: "?????????", parent: "712400" }, { value: "712458", name: "?????????", parent: "712400" }, { value: "712459", name: "?????????", parent: "712400" }, { value: "712460", name: "?????????", parent: "712400" }, { value: "712461", name: "?????????", parent: "712400" }, { value: "712462", name: "?????????", parent: "712400" }, { value: "712463", name: "?????????", parent: "712400" }, { value: "712464", name: "?????????", parent: "712400" }, { value: "712465", name: "?????????", parent: "712400" }, { value: "712466", name: "?????????", parent: "712400" }, { value: "712517", name: "?????????", parent: "712500" }, { value: "712518", name: "?????????", parent: "712500" }, { value: "712519", name: "?????????", parent: "712500" }, { value: "712520", name: "?????????", parent: "712500" }, { value: "712521", name: "?????????", parent: "712500" }, { value: "712522", name: "?????????", parent: "712500" }, { value: "712523", name: "?????????", parent: "712500" }, { value: "712524", name: "?????????", parent: "712500" }, { value: "712525", name: "?????????", parent: "712500" }, { value: "712526", name: "?????????", parent: "712500" }, { value: "712527", name: "?????????", parent: "712500" }, { value: "712528", name: "?????????", parent: "712500" }, { value: "712529", name: "?????????", parent: "712500" }, { value: "712530", name: "?????????", parent: "712500" }, { value: "712531", name: "?????????", parent: "712500" }, { value: "712532", name: "????????????", parent: "712500" }, { value: "712615", name: "?????????", parent: "712600" }, { value: "712616", name: "?????????", parent: "712600" }, { value: "712617", name: "?????????", parent: "712600" }, { value: "712618", name: "?????????", parent: "712600" }, { value: "712619", name: "?????????", parent: "712600" }, { value: "712620", name: "?????????", parent: "712600" }, { value: "712621", name: "?????????", parent: "712600" }, { value: "712622", name: "?????????", parent: "712600" }, { value: "712623", name: "?????????", parent: "712600" }, { value: "712624", name: "?????????", parent: "712600" }, { value: "712625", name: "?????????", parent: "712600" }, { value: "712626", name: "?????????", parent: "712600" }, { value: "712627", name: "?????????", parent: "712600" }, { value: "712628", name: "?????????", parent: "712600" }, { value: "712707", name: "?????????", parent: "712700" }, { value: "712708", name: "?????????", parent: "712700" }, { value: "712709", name: "?????????", parent: "712700" }, { value: "712710", name: "?????????", parent: "712700" }, { value: "712711", name: "?????????", parent: "712700" }, { value: "712712", name: "?????????", parent: "712700" }, { value: "712805", name: "?????????", parent: "712800" }, { value: "712806", name: "?????????", parent: "712800" }, { value: "712807", name: "?????????", parent: "712800" }, { value: "712808", name: "?????????", parent: "712800" }, { value: "810101", name: "?????????", parent: "810100" }, { value: "810102", name: "??????", parent: "810100" }, { value: "810103", name: "??????", parent: "810100" }, { value: "810104", name: "??????", parent: "810100" }, { value: "810201", name: "????????????", parent: "810200" }, { value: "810202", name: "????????????", parent: "810200" }, { value: "810203", name: "????????????", parent: "810200" }, { value: "810204", name: "????????????", parent: "810200" }, { value: "810205", name: "?????????", parent: "810200" }, { value: "810301", name: "??????", parent: "810300" }, { value: "810302", name: "?????????", parent: "810300" }, { value: "810303", name: "?????????", parent: "810300" }, { value: "810304", name: "?????????", parent: "810300" }, { value: "810305", name: "?????????", parent: "810300" }, { value: "810306", name: "?????????", parent: "810300" }, { value: "810307", name: "?????????", parent: "810300" }, { value: "810308", name: "?????????", parent: "810300" }, { value: "810309", name: "?????????", parent: "810300" }, { value: "441901", parent: "441900", name: "?????????" }, { value: "441902", parent: "441900", name: "?????????" }, { value: "441904", parent: "441900", name: "?????????" }, { value: "441905", parent: "441900", name: "?????????" }, { value: "441906", parent: "441900", name: "?????????" }, { value: "441907", parent: "441900", name: "?????????" }, { value: "441908", parent: "441900", name: "?????????" }, { value: "441909", parent: "441900", name: "?????????" }, { value: "441910", parent: "441900", name: "?????????" }, { value: "441911", parent: "441900", name: "?????????" }, { value: "441912", parent: "441900", name: "?????????" }, { value: "441913", parent: "441900", name: "?????????" }, { value: "441914", parent: "441900", name: "?????????" }, { value: "441915", parent: "441900", name: "?????????" }, { value: "441916", parent: "441900", name: "?????????" }, { value: "441917", parent: "441900", name: "?????????" }, { value: "441918", parent: "441900", name: "?????????" }, { value: "441919", parent: "441900", name: "?????????" }, { value: "441920", parent: "441900", name: "????????????" }, { value: "441921", parent: "441900", name: "????????????" }, { value: "441922", parent: "441900", name: "????????????" }, { value: "441923", parent: "441900", name: "?????????" }, { value: "441924", parent: "441900", name: "?????????" }, { value: "441925", parent: "441900", name: "?????????" }, { value: "441926", parent: "441900", name: "?????????" }, { value: "441927", parent: "441900", name: "?????????" }, { value: "441928", parent: "441900", name: "?????????" }, { value: "441929", parent: "441900", name: "?????????" }, { value: "441930", parent: "441900", name: "?????????" }, { value: "441931", parent: "441900", name: "?????????" }, { value: "441932", parent: "441900", name: "?????????" }, { value: "442001", parent: "442000", name: "?????????" }, { value: "442004", parent: "442000", name: "??????" }, { value: "442005", parent: "442000", name: "????????????" }, { value: "442006", parent: "442000", name: "???????????????" }, { value: "442007", parent: "442000", name: "?????????" }, { value: "442008", parent: "442000", name: "?????????" }, { value: "442009", parent: "442000", name: "?????????" }, { value: "442010", parent: "442000", name: "?????????" }, { value: "442011", parent: "442000", name: "?????????" }, { value: "442012", parent: "442000", name: "?????????" }, { value: "442013", parent: "442000", name: "?????????" }, { value: "442014", parent: "442000", name: "?????????" }, { value: "442015", parent: "442000", name: "?????????" }, { value: "442016", parent: "442000", name: "?????????" }, { value: "442017", parent: "442000", name: "?????????" }, { value: "442018", parent: "442000", name: "?????????" }, { value: "442019", parent: "442000", name: "?????????" }, { value: "442020", parent: "442000", name: "?????????" }, { value: "442021", parent: "442000", name: "?????????" }, { value: "442022", parent: "442000", name: "?????????" }, { value: "442023", parent: "442000", name: "?????????" }, { value: "442024", parent: "442000", name: "?????????" }];exports.lotusAddressJson = lotusAddressJson;

/***/ }),

/***/ 331:
/*!*************************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/components/u-parse/libs/html2json.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













var _wxDiscode = _interopRequireDefault(__webpack_require__(/*! ./wxDiscode */ 332));
var _htmlparser = _interopRequireDefault(__webpack_require__(/*! ./htmlparser */ 333));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                 * html2Json ????????????: https://github.com/Jxck/html2json
                                                                                                                                                                 *
                                                                                                                                                                 *
                                                                                                                                                                 * author: Di (??????????????????????????????)
                                                                                                                                                                 * organization: WeAppDev(???????????????????????????)(http://weappdev.com)
                                                                                                                                                                 *               ???????????????????????????????????????
                                                                                                                                                                 *
                                                                                                                                                                 * github??????: https://github.com/icindy/wxParse
                                                                                                                                                                 *
                                                                                                                                                                 * for: ??????????????????????????????
                                                                                                                                                                 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                                                                                 */function makeMap(str) {var obj = {};var items = str.split(',');for (var i = 0; i < items.length; i += 1) {obj[items[i]] = true;}return obj;} // Block Elements - HTML 5
var block = makeMap('br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'); // Inline Elements - HTML 5
var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');
// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');

function removeDOCTYPE(html) {
  var isDocument = /<body.*>([^]*)<\/body>/.test(html);
  return isDocument ? RegExp.$1 : html;
}

function trimHtml(html) {
  return html.
  replace(/<!--.*?-->/gi, '').
  replace(/\/\*.*?\*\//gi, '').
  replace(/[ ]+</gi, '<').
  replace(/<script[^]*<\/script>/gi, '').
  replace(/<style[^]*<\/style>/gi, '');
}

function getScreenInfo() {
  var screen = {};
  wx.getSystemInfo({
    success: function success(res) {
      screen.width = res.windowWidth;
      screen.height = res.windowHeight;
    } });

  return screen;
}

function html2json(html, customHandler, imageProp, host) {
  // ???????????????
  html = removeDOCTYPE(html);
  html = trimHtml(html);
  html = _wxDiscode.default.strDiscode(html);
  // ??????node??????
  var bufArray = [];
  var results = {
    nodes: [],
    imageUrls: [] };


  var screen = getScreenInfo();
  function Node(tag) {
    this.node = 'element';
    this.tag = tag;

    this.$screen = screen;
  }

  (0, _htmlparser.default)(html, {
    start: function start(tag, attrs, unary) {
      // node for this element
      var node = new Node(tag);

      if (bufArray.length !== 0) {
        var parent = bufArray[0];
        if (parent.nodes === undefined) {
          parent.nodes = [];
        }
      }

      if (block[tag]) {
        node.tagType = 'block';
      } else if (inline[tag]) {
        node.tagType = 'inline';
      } else if (closeSelf[tag]) {
        node.tagType = 'closeSelf';
      }

      node.attr = attrs.reduce(function (pre, attr) {var
        name = attr.name;var
        value = attr.value;
        if (name === 'class') {
          node.classStr = value;
        }
        // has multi attibutes
        // make it array of attribute
        if (name === 'style') {
          node.styleStr = value;
        }
        if (value.match(/ /)) {
          value = value.split(' ');
        }

        // if attr already exists
        // merge it
        if (pre[name]) {
          if (Array.isArray(pre[name])) {
            // already array, push to last
            pre[name].push(value);
          } else {
            // single value, make it array
            pre[name] = [pre[name], value];
          }
        } else {
          // not exist, put it
          pre[name] = value;
        }

        return pre;
      }, {});

      // ????????????????????????
      if (node.classStr) {
        node.classStr += " ".concat(node.tag);
      } else {
        node.classStr = node.tag;
      }
      if (node.tagType === 'inline') {
        node.classStr += ' inline';
      }

      // ???img??????????????????
      if (node.tag === 'img') {
        var imgUrl = node.attr.src;
        imgUrl = _wxDiscode.default.urlToHttpUrl(imgUrl, imageProp.domain);
        Object.assign(node.attr, imageProp, {
          src: imgUrl || '' });

        if (imgUrl) {
          results.imageUrls.push(imgUrl);
        }
      }

      // ??????a????????????
      if (node.tag === 'a') {
        node.attr.href = node.attr.href || '';
      }

      // ??????font??????????????????
      if (node.tag === 'font') {
        var fontSize = [
        'x-small',
        'small',
        'medium',
        'large',
        'x-large',
        'xx-large',
        '-webkit-xxx-large'];

        var styleAttrs = {
          color: 'color',
          face: 'font-family',
          size: 'font-size' };

        if (!node.styleStr) node.styleStr = '';
        Object.keys(styleAttrs).forEach(function (key) {
          if (node.attr[key]) {
            var value = key === 'size' ? fontSize[node.attr[key] - 1] : node.attr[key];
            node.styleStr += "".concat(styleAttrs[key], ": ").concat(value, ";");
          }
        });
      }

      // ????????????source??????
      if (node.tag === 'source') {
        results.source = node.attr.src;
      }

      if (customHandler.start) {
        customHandler.start(node, results);
      }

      if (unary) {
        // if this tag doesn't have end tag
        // like <img src="hoge.png"/>
        // add to parents
        var _parent = bufArray[0] || results;
        if (_parent.nodes === undefined) {
          _parent.nodes = [];
        }
        _parent.nodes.push(node);
      } else {
        bufArray.unshift(node);
      }
    },
    end: function end(tag) {
      // merge into parent tag
      var node = bufArray.shift();
      if (node.tag !== tag) {
        console.error('invalid state: mismatch end tag');
      }

      // ????????????source???????????????video??????src??????
      if (node.tag === 'video' && results.source) {
        node.attr.src = results.source;
        delete results.source;
      }

      if (customHandler.end) {
        customHandler.end(node, results);
      }

      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];
        if (!parent.nodes) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    },
    chars: function chars(text) {
      if (!text.trim()) return;

      var node = {
        node: 'text',
        text: text };


      if (customHandler.chars) {
        customHandler.chars(node, results);
      }

      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];
        if (parent.nodes === undefined) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    } });


  return results;
}var _default =

html2json;exports.default = _default;

/***/ }),

/***/ 332:
/*!*************************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/components/u-parse/libs/wxDiscode.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // HTML ?????????????????????
function strNumDiscode(str) {
  str = str.replace(/&forall;/g, '???');
  str = str.replace(/&part;/g, '???');
  str = str.replace(/&exist;/g, '???');
  str = str.replace(/&empty;/g, '???');
  str = str.replace(/&nabla;/g, '???');
  str = str.replace(/&isin;/g, '???');
  str = str.replace(/&notin;/g, '???');
  str = str.replace(/&ni;/g, '???');
  str = str.replace(/&prod;/g, '???');
  str = str.replace(/&sum;/g, '???');
  str = str.replace(/&minus;/g, '???');
  str = str.replace(/&lowast;/g, '???');
  str = str.replace(/&radic;/g, '???');
  str = str.replace(/&prop;/g, '???');
  str = str.replace(/&infin;/g, '???');
  str = str.replace(/&ang;/g, '???');
  str = str.replace(/&and;/g, '???');
  str = str.replace(/&or;/g, '???');
  str = str.replace(/&cap;/g, '???');
  str = str.replace(/&cup;/g, '???');
  str = str.replace(/&int;/g, '???');
  str = str.replace(/&there4;/g, '???');
  str = str.replace(/&sim;/g, '???');
  str = str.replace(/&cong;/g, '???');
  str = str.replace(/&asymp;/g, '???');
  str = str.replace(/&ne;/g, '???');
  str = str.replace(/&le;/g, '???');
  str = str.replace(/&ge;/g, '???');
  str = str.replace(/&sub;/g, '???');
  str = str.replace(/&sup;/g, '???');
  str = str.replace(/&nsub;/g, '???');
  str = str.replace(/&sube;/g, '???');
  str = str.replace(/&supe;/g, '???');
  str = str.replace(/&oplus;/g, '???');
  str = str.replace(/&otimes;/g, '???');
  str = str.replace(/&perp;/g, '???');
  str = str.replace(/&sdot;/g, '???');
  return str;
}

// HTML ?????????????????????
function strGreeceDiscode(str) {
  str = str.replace(/&Alpha;/g, '??');
  str = str.replace(/&Beta;/g, '??');
  str = str.replace(/&Gamma;/g, '??');
  str = str.replace(/&Delta;/g, '??');
  str = str.replace(/&Epsilon;/g, '??');
  str = str.replace(/&Zeta;/g, '??');
  str = str.replace(/&Eta;/g, '??');
  str = str.replace(/&Theta;/g, '??');
  str = str.replace(/&Iota;/g, '??');
  str = str.replace(/&Kappa;/g, '??');
  str = str.replace(/&Lambda;/g, '??');
  str = str.replace(/&Mu;/g, '??');
  str = str.replace(/&Nu;/g, '??');
  str = str.replace(/&Xi;/g, '??');
  str = str.replace(/&Omicron;/g, '??');
  str = str.replace(/&Pi;/g, '??');
  str = str.replace(/&Rho;/g, '??');
  str = str.replace(/&Sigma;/g, '??');
  str = str.replace(/&Tau;/g, '??');
  str = str.replace(/&Upsilon;/g, '??');
  str = str.replace(/&Phi;/g, '??');
  str = str.replace(/&Chi;/g, '??');
  str = str.replace(/&Psi;/g, '??');
  str = str.replace(/&Omega;/g, '??');

  str = str.replace(/&alpha;/g, '??');
  str = str.replace(/&beta;/g, '??');
  str = str.replace(/&gamma;/g, '??');
  str = str.replace(/&delta;/g, '??');
  str = str.replace(/&epsilon;/g, '??');
  str = str.replace(/&zeta;/g, '??');
  str = str.replace(/&eta;/g, '??');
  str = str.replace(/&theta;/g, '??');
  str = str.replace(/&iota;/g, '??');
  str = str.replace(/&kappa;/g, '??');
  str = str.replace(/&lambda;/g, '??');
  str = str.replace(/&mu;/g, '??');
  str = str.replace(/&nu;/g, '??');
  str = str.replace(/&xi;/g, '??');
  str = str.replace(/&omicron;/g, '??');
  str = str.replace(/&pi;/g, '??');
  str = str.replace(/&rho;/g, '??');
  str = str.replace(/&sigmaf;/g, '??');
  str = str.replace(/&sigma;/g, '??');
  str = str.replace(/&tau;/g, '??');
  str = str.replace(/&upsilon;/g, '??');
  str = str.replace(/&phi;/g, '??');
  str = str.replace(/&chi;/g, '??');
  str = str.replace(/&psi;/g, '??');
  str = str.replace(/&omega;/g, '??');
  str = str.replace(/&thetasym;/g, '??');
  str = str.replace(/&upsih;/g, '??');
  str = str.replace(/&piv;/g, '??');
  str = str.replace(/&middot;/g, '??');
  return str;
}

function strcharacterDiscode(str) {
  // ??????????????????
  str = str.replace(/&nbsp;/g, ' ');
  str = str.replace(/&ensp;/g, '???');
  str = str.replace(/&emsp;/g, '???');
  str = str.replace(/&quot;/g, "'");
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&#8226;/g, '???');

  return str;
}

// HTML ?????????????????????
function strOtherDiscode(str) {
  str = str.replace(/&OElig;/g, '??');
  str = str.replace(/&oelig;/g, '??');
  str = str.replace(/&Scaron;/g, '??');
  str = str.replace(/&scaron;/g, '??');
  str = str.replace(/&Yuml;/g, '??');
  str = str.replace(/&fnof;/g, '??');
  str = str.replace(/&circ;/g, '??');
  str = str.replace(/&tilde;/g, '??');
  str = str.replace(/&ensp;/g, '');
  str = str.replace(/&emsp;/g, '');
  str = str.replace(/&thinsp;/g, '');
  str = str.replace(/&zwnj;/g, '');
  str = str.replace(/&zwj;/g, '');
  str = str.replace(/&lrm;/g, '');
  str = str.replace(/&rlm;/g, '');
  str = str.replace(/&ndash;/g, '???');
  str = str.replace(/&mdash;/g, '???');
  str = str.replace(/&lsquo;/g, '???');
  str = str.replace(/&rsquo;/g, '???');
  str = str.replace(/&sbquo;/g, '???');
  str = str.replace(/&ldquo;/g, '???');
  str = str.replace(/&rdquo;/g, '???');
  str = str.replace(/&bdquo;/g, '???');
  str = str.replace(/&dagger;/g, '???');
  str = str.replace(/&Dagger;/g, '???');
  str = str.replace(/&bull;/g, '???');
  str = str.replace(/&hellip;/g, '???');
  str = str.replace(/&permil;/g, '???');
  str = str.replace(/&prime;/g, '???');
  str = str.replace(/&Prime;/g, '???');
  str = str.replace(/&lsaquo;/g, '???');
  str = str.replace(/&rsaquo;/g, '???');
  str = str.replace(/&oline;/g, '???');
  str = str.replace(/&euro;/g, '???');
  str = str.replace(/&trade;/g, '???');

  str = str.replace(/&larr;/g, '???');
  str = str.replace(/&uarr;/g, '???');
  str = str.replace(/&rarr;/g, '???');
  str = str.replace(/&darr;/g, '???');
  str = str.replace(/&harr;/g, '???');
  str = str.replace(/&crarr;/g, '???');
  str = str.replace(/&lceil;/g, '???');
  str = str.replace(/&rceil;/g, '???');

  str = str.replace(/&lfloor;/g, '???');
  str = str.replace(/&rfloor;/g, '???');
  str = str.replace(/&loz;/g, '???');
  str = str.replace(/&spades;/g, '???');
  str = str.replace(/&clubs;/g, '???');
  str = str.replace(/&hearts;/g, '???');

  str = str.replace(/&diams;/g, '???');
  str = str.replace(/&#39;/g, "'");
  return str;
}

function strDiscode(str) {
  str = strNumDiscode(str);
  str = strGreeceDiscode(str);
  str = strcharacterDiscode(str);
  str = strOtherDiscode(str);
  return str;
}

function urlToHttpUrl(url, domain) {
  if (/^\/\//.test(url)) {
    return "https:".concat(url);
  } else if (/^\//.test(url)) {
    return "https://".concat(domain).concat(url);
  }
  return url;
}var _default =

{
  strDiscode: strDiscode,
  urlToHttpUrl: urlToHttpUrl };exports.default = _default;

/***/ }),

/***/ 333:
/*!**************************************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/components/u-parse/libs/htmlparser.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      *
                                                                                                      * htmlParser?????????: https://github.com/blowsie/Pure-JavaScript-HTML5-Parser
                                                                                                      *
                                                                                                      * author: Di (??????????????????????????????)
                                                                                                      * organization: WeAppDev(???????????????????????????)(http://weappdev.com)
                                                                                                      *               ???????????????????????????????????????
                                                                                                      *
                                                                                                      * github??????: https://github.com/icindy/wxParse
                                                                                                      *
                                                                                                      * for: ??????????????????????????????
                                                                                                      * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                      */
// Regular Expressions for parsing tags and attributes

var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

function makeMap(str) {
  var obj = {};
  var items = str.split(',');
  for (var i = 0; i < items.length; i += 1) {obj[items[i]] = true;}
  return obj;
}

// Empty Elements - HTML 5
var empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr');

// Block Elements - HTML 5
var block = makeMap('address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video');

// Inline Elements - HTML 5
var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected');

function HTMLParser(html, handler) {
  var index;
  var chars;
  var match;
  var last = html;
  var stack = [];

  stack.last = function () {return stack[stack.length - 1];};

  function parseEndTag(tag, tagName) {
    // If no tag name is provided, clean shop
    var pos;
    if (!tagName) {
      pos = 0;
    } else {
      // Find the closest opened tag of the same type
      tagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos -= 1) {
        if (stack[pos] === tagName) break;
      }
    }
    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i -= 1) {
        if (handler.end) handler.end(stack[i]);
      }

      // Remove the open elements from the stack
      stack.length = pos;
    }
  }

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();

    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag('', stack.last());
      }
    }

    if (closeSelf[tagName] && stack.last() === tagName) {
      parseEndTag('', tagName);
    }

    unary = empty[tagName] || !!unary;

    if (!unary) stack.push(tagName);

    if (handler.start) {
      var attrs = [];

      rest.replace(attr, function genAttr(matches, name) {
        var value = arguments[2] || arguments[3] || arguments[4] || (fillAttrs[name] ? name : '');

        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\"') // "
        });
      });

      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }

  while (html) {
    chars = true;

    if (html.indexOf('</') === 0) {
      match = html.match(endTag);

      if (match) {
        html = html.substring(match[0].length);
        match[0].replace(endTag, parseEndTag);
        chars = false;
      }

      // start tag
    } else if (html.indexOf('<') === 0) {
      match = html.match(startTag);

      if (match) {
        html = html.substring(match[0].length);
        match[0].replace(startTag, parseStartTag);
        chars = false;
      }
    }

    if (chars) {
      index = html.indexOf('<');
      var text = '';
      while (index === 0) {
        text += '<';
        html = html.substring(1);
        index = html.indexOf('<');
      }
      text += index < 0 ? html : html.substring(0, index);
      html = index < 0 ? '' : html.substring(index);

      if (handler.chars) handler.chars(text);
    }

    if (html === last) throw new Error("Parse Error: ".concat(html));
    last = html;
  }

  // Clean up any remaining tags
  parseEndTag();
}var _default =

HTMLParser;exports.default = _default;

/***/ }),

/***/ 4:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx ????????????????????? plugins ???????????????????????????????????????????????????????????????????????? copyAugment ??????
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // ?????? externalClass ????????????(????????? externalClass ????????????????????????)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx ?????? hack ??? uni-app ???????????? name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//??????????????????????????? observer ??? setData callback ?????????????????????????????? warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field ????????????
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"????????????","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick ?????? ??? setData ??? setData ??????????????????
    //2.nextTick ???????????? render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"????????????","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"????????????","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // ???????????? vm ?????????????????????
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO ??????????????????????????????????????? list=>l0 ??? list ??????????????????????????????????????????
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //????????? data ???????????????
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"????????????","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']????????????',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js ?????? new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        triggerEvent.call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        });
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay ???????????? selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // ????????????????????????
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // ????????????????????????
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO ???????????? string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // ??????????????????????????????????????????
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // ???????????????????????????????????????
    'onPageShow',
    'onPageHide',
    'onPageResize',
    'onUploadDouyinVideo'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 5:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 6);

/***/ }),

/***/ 6:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 7);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 7:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 8:
/*!***********************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/pages.json ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 9:
/*!***************************************************************************************************!*\
  !*** D:/study/beiyou/graduationDesign/project-git/????????????-v2.0.0-dev/????????????-app-ui/store/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);



var store = new _vuex.default.Store({
  state: {
    hasLogin: false,
    userInfo: {},
    storageId: 0,
    cartNum: 0,
    storageObj: {},
    InvitationCode: '',
    headerTop: '' },

  mutations: {
    login: function login(state, provider) {
      state.hasLogin = true;
      state.userInfo = provider;
      uni.setStorageSync('userInfo', provider);
    },
    logout: function logout(state) {
      state.hasLogin = false;
      state.userInfo = {};
      uni.removeStorageSync('userInfo');
    },
    setStorage: function setStorage(state, id) {
      state.storageId = id;
    },
    setStorageCode: function setStorageCode(state, InvitationCode) {
      state.InvitationCode = InvitationCode;
    },
    setStorageObj: function setStorageObj(state, obj) {
      state.storageObj = obj;
    },
    addCart: function addCart(state, num) {
      state.cartNum = num;
    } },

  actions: {},


  getters: {
    getUserInfo: function getUserInfo(state) {
      return state.userInfo;
    } } });var _default =



store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map