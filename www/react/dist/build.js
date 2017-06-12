/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.regularDate = /([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))/;
exports.regularPhone = /^1[34578]\d{9}$/;
exports.regularEmail = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
exports.Verification = {
    $Valid: true,
    $ErrorMsg: '个人信息未填写完整'
};
exports.filter = function (name, value) {
    var Model = {
        $Valid: true,
        $ErrorMsg: ""
    };
    switch (name) {
        // 个人信息
        case 'Name':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "姓名不可为空！";
            break;
        case 'Birthday':
            Model.$Valid = exports.regularDate.test(value);
            Model.$ErrorMsg = "出生日期格式有误！";
            break;
        case 'Nation':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "名族不可为空！";
            break;
        case 'Face':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "政治面貌不可为空！";
            break;
        case 'PlaceOfOrigin':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "籍贯不可为空！";
            break;
        case 'Archives':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "档案所在地不可为空！";
            break;
        // 户口信息
        case 'Category':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "户口类别不可为空！";
            break;
        case 'Location':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "户口所在地不可为空！";
            break;
        case 'Address':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "户口地址不可为空！";
            break;
        // 联系方式
        case 'Phone':
            Model.$Valid = exports.regularPhone.test(value);
            Model.$ErrorMsg = "联系方式-手机格式有误！";
            break;
        case 'Mailbox':
            Model.$Valid = exports.regularEmail.test(value);
            Model.$ErrorMsg = "联系方式-电子邮箱格式有误！";
            break;
        case 'PresentAddress':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "联系方式-现居住地不可为空！";
            break;
        case 'ContactsName':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "紧急联系人-联系人姓名不可为空！";
            break;
        case 'ContactsPhone':
            Model.$Valid = value.length > 0;
            Model.$ErrorMsg = "紧急联系人-电话不可为空！";
            break;
        default:
            break;
    }
    return Model;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SwiperSlide = (function (_super) {
    __extends(SwiperSlide, _super);
    function SwiperSlide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwiperSlide.prototype.componentDidMount = function () {
    };
    SwiperSlide.prototype.componentWillUnmount = function () {
    };
    SwiperSlide.prototype.render = function () {
        if (this.props.className) {
            return React.createElement("div", { className: this.props.className, "data-hash": this.props.hash }, this.props.children);
        }
        return React.createElement("div", { className: "swiper-slide ", "data-hash": this.props.hash }, this.props.children);
    };
    return SwiperSlide;
}(React.Component));
exports.SwiperSlide = SwiperSlide;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Server = __webpack_require__(1);
var SwiperContainer_1 = __webpack_require__(6);
var SwiperSlide_1 = __webpack_require__(2);
var Inspect_1 = __webpack_require__(5);
var Personal_1 = __webpack_require__(12);
var Registered_1 = __webpack_require__(13);
var Contact_1 = __webpack_require__(7);
var Family_1 = __webpack_require__(10);
var Education_1 = __webpack_require__(9);
var Driving_1 = __webpack_require__(8);
var Work_1 = __webpack_require__(14);
var Files_1 = __webpack_require__(11);
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            // Inspect   FillIn   Submit
            //验证手机        填写数据      提交完成
            CheckThrough: "Inspect",
            // 保存需要提交的数据  通过提升状态传递
            Model: {
                Personal: {},
                Registered: {},
                Contact: {},
                Family: {},
                Education: {},
                Driving: {},
                Work: {},
                Files: {},
            },
        };
        _this.onCheckThrough = _this.onCheckThrough.bind(_this);
        _this.onHandleInputChange = _this.onHandleInputChange.bind(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);
        return _this;
    }
    // 组件输出已经呈现给DOM后，该钩子就会运行。
    App.prototype.componentDidMount = function () {
        console.log("SwiperSlide", this);
    };
    // 改变当前 状态 
    App.prototype.onCheckThrough = function (obj) {
        this.setState(function (prevState) { return ({
            CheckThrough: obj
        }); });
    };
    // 提升 的 数据回调事件
    App.prototype.onHandleInputChange = function (name, value) {
        this.setState(function (prevState) {
            prevState.Model[name] = value;
        });
        // console.info("提升 的 数据回调事件", this.state.Model);
    };
    //提交数据
    App.prototype.onSubmit = function () {
        var _this = this;
        console.log(this);
        this.check();
        if (Server.Verification.$Valid) {
            layer.open({ type: 2 });
            setTimeout(function () {
                _this.onCheckThrough("Submit");
                layer.closeAll();
                // this.forceUpdate();
            }, 2000);
        }
        else {
            layer.open({
                content: Server.Verification.$ErrorMsg,
                btn: '我知道了'
            });
        }
    };
    //检查所有参数
    App.prototype.check = function () {
        Server.Verification.$Valid = true;
        for (var key in this.state.Model) {
            if (this.state.Model.hasOwnProperty(key)) {
                var eles = this.state.Model[key];
                for (var key_1 in eles) {
                    if (eles.hasOwnProperty(key_1)) {
                        var ele = eles[key_1];
                        var Model = Server.filter(key_1, ele);
                        if (Server.Verification.$Valid) {
                            Server.Verification.$ErrorMsg = Model.$ErrorMsg;
                            Server.Verification.$Valid = Model.$Valid;
                        }
                        else {
                        }
                    }
                }
            }
        }
    };
    App.prototype.render = function () {
        // 验证
        if (this.state.CheckThrough == "Inspect") {
            return React.createElement(SwiperContainer_1.SwiperContainer, { CheckThrough: this.state.CheckThrough },
                React.createElement(Inspect_1.Inspect, { onCheckThrough: this.onCheckThrough }));
        }
        //填写
        if (this.state.CheckThrough == "FillIn") {
            return React.createElement(SwiperContainer_1.SwiperContainer, { CheckThrough: this.state.CheckThrough },
                React.createElement(SwiperSlide_1.SwiperSlide, { hash: "pl" },
                    React.createElement(Personal_1.Personal, { onHandleInputChange: this.onHandleInputChange })),
                React.createElement(SwiperSlide_1.SwiperSlide, { hash: "rr" },
                    React.createElement(Registered_1.Registered, { onHandleInputChange: this.onHandleInputChange })),
                React.createElement(SwiperSlide_1.SwiperSlide, { hash: "ct" },
                    React.createElement(Contact_1.Contact, { onHandleInputChange: this.onHandleInputChange })),
                React.createElement(SwiperSlide_1.SwiperSlide, { hash: "fy" },
                    React.createElement(Family_1.Family, { onHandleInputChange: this.onHandleInputChange }),
                    " "),
                React.createElement(SwiperSlide_1.SwiperSlide, { hash: "en" },
                    React.createElement(Education_1.Education, { onHandleInputChange: this.onHandleInputChange }),
                    " "),
                React.createElement(SwiperSlide_1.SwiperSlide, { hash: "dl" },
                    React.createElement(Driving_1.Driving, { onHandleInputChange: this.onHandleInputChange })),
                React.createElement(SwiperSlide_1.SwiperSlide, { hash: "wk" },
                    React.createElement(Work_1.Work, { onHandleInputChange: this.onHandleInputChange })),
                React.createElement(SwiperSlide_1.SwiperSlide, { hash: "pp" },
                    React.createElement(Files_1.Files, { onHandleInputChange: this.onHandleInputChange })),
                React.createElement(SwiperSlide_1.SwiperSlide, { hash: "sm" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "text-center foot_btn" },
                            React.createElement("button", { type: "button", className: "btn btn-danger w95", onClick: this.onSubmit }, "\u63D0\u4EA4")))));
        }
        //提交
        if (this.state.CheckThrough == "Submit") {
            return React.createElement(SwiperContainer_1.SwiperContainer, { CheckThrough: this.state.CheckThrough },
                React.createElement(SwiperSlide_1.SwiperSlide, null,
                    React.createElement("h1", null, "\u63D0\u4EA4\u6210\u529F\uFF01")));
        }
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SwiperSlide_1 = __webpack_require__(2);
//检查组件
var Inspect = (function (_super) {
    __extends(Inspect, _super);
    function Inspect(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { Phonecheck: false, Phone: "18611711111" };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.onInspect = _this.onInspect.bind(_this);
        return _this;
    }
    Inspect.prototype.componentDidMount = function () {
    };
    Inspect.prototype.componentWillUnmount = function () {
    };
    Inspect.prototype.handleChange = function (event) {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState(function (prevState) { return ({
            Phone: value,
            Phonecheck: value.length > 0 && !/^1[34578]\d{9}$/.test(value)
        }); });
    };
    Inspect.prototype.onInspect = function () {
        var _this = this;
        if (!this.state.Phonecheck && /^1[34578]\d{9}$/.test(this.state.Phone)) {
            layer.open({ type: 2 });
            setTimeout(function () {
                _this.props.onCheckThrough("FillIn");
                layer.closeAll();
            }, 2000);
        }
        else {
            layer.open({
                content: '请输入正确的手机号',
                btn: '我知道了'
            });
        }
    };
    Inspect.prototype.render = function () {
        return React.createElement(SwiperSlide_1.SwiperSlide, { className: "swiper-slide swiper-conter" },
            React.createElement("div", { className: "container minH500" },
                React.createElement("div", { className: "header entry_login" },
                    React.createElement("h4", null, "\u5458\u5DE5\u4FE1\u606F\u5F55\u5165")),
                React.createElement("div", { className: "form-hor-Login" },
                    React.createElement("div", { className: this.state.Phonecheck ? 'form-group row has-error' : 'form-group row' },
                        React.createElement("label", { className: "col-lg-4 control-label" }, "\u624B\u673A\u53F7"),
                        React.createElement("div", { className: "col-lg-4" },
                            React.createElement("input", { type: "text", className: "form-control", name: "phone", value: this.state.Phone, onChange: this.handleChange }),
                            React.createElement("span", { className: "ft14 ce9 fl mt10 mb10" },
                                React.createElement("span", { className: "" }, " * "),
                                "\u9A8C\u8BC1\u624B\u673A\u53F7")),
                        React.createElement("div", { className: "col-lg-4 text-l" }, this.state.Phonecheck &&
                            React.createElement("span", { className: "help-block ft16" }, "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"))),
                    React.createElement("div", { className: "form-group row text-center" },
                        React.createElement("button", { type: "submit", className: "btn btn-danger", onClick: this.onInspect }, "\u68C0\u67E5\u624B\u673A\u53F7")))));
    };
    return Inspect;
}(React.Component));
exports.Inspect = Inspect;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SwiperContainer = (function (_super) {
    __extends(SwiperContainer, _super);
    function SwiperContainer(props) {
        return _super.call(this, props) || this;
    }
    // 组件输出已经呈现给DOM后，该钩子就会运行
    SwiperContainer.prototype.componentDidMount = function () {
        this.initSwiper();
        console.log("SwiperContainer 加载", this);
    };
    SwiperContainer.prototype.componentWillUnmount = function () {
        this.swiper.destroy(false, true);
        console.log("SwiperContainer 销毁", this);
    };
    SwiperContainer.prototype.componentDidUpdate = function (prevProps, prevState) {
        this.initSwiper();
    };
    SwiperContainer.prototype.initSwiper = function () {
        // debugger
        if (this.swiper) {
            this.swiper.destroy(false, true);
        }
        if (this.props.CheckThrough == "FillIn") {
            // this.swiper = new Swiper(this.refs.swiperContainer, {
            //     direction: 'vertical',
            //     hashnav: true,
            //     hashnavWatchState: true,
            //     pagination: this.refs.swiperPagination,
            //     paginationType: 'progress',
            //     nextButton: this.refs.swiperButtonNext,
            //     prevButton: this.refs.swiperButtonPrev,
            //     roundLengths: true, //防止文字模糊
            //     mousewheelControl: true,
            // });
        }
    };
    SwiperContainer.prototype.render = function () {
        return React.createElement("div", { ref: "swiperContainer", className: this.props.CheckThrough + ' swiper-container' },
            React.createElement("div", { className: "swiper-wrapper" }, this.props.children),
            this.props.CheckThrough == "FillIn" &&
                React.createElement("div", { ref: "swiperPagination", className: "swiper-pagination" }),
            this.props.CheckThrough == "FillIn" &&
                React.createElement("div", { ref: "swiperButtonPrev", className: "swiper-button-prev" }),
            this.props.CheckThrough == "FillIn" &&
                React.createElement("div", { ref: "swiperButtonNext", className: "swiper-button-next" }));
    };
    return SwiperContainer;
}(React.Component));
exports.SwiperContainer = SwiperContainer;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Server = __webpack_require__(1);
// 联系方式
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            Check: {
                Phone: true,
                Mailbox: true
            }, Model: {
                HomePhone: "",
                Phone: "",
                Code: "",
                Mailbox: "",
                PresentAddress: "",
                ContactsName: "",
                ContactsPhone: "",
                $Valid: true,
                $ErrorMsg: '联系方式未填词完成！'
            }
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Contact.prototype.componentDidMount = function () {
        this.props.onHandleInputChange("Contact", this.state.Model);
    };
    Contact.prototype.handleChange = function (event) {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState(function (prevState) {
            prevState.Model[name] = value;
        });
        this.props.onHandleInputChange("Contact", this.state.Model);
        if (name == 'Phone') {
            this.state.Check[name] = Server.regularPhone.test(value);
        }
        if (name == 'Mailbox') {
            this.state.Check[name] = Server.regularEmail.test(value);
        }
    };
    Contact.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("div", { className: "container  text-left" },
                React.createElement("div", { className: "page-header" },
                    React.createElement("h1", { className: "tit-l-bor ft18 mt10" },
                        React.createElement("span", { className: "ml10" }, "\u8054\u7CFB\u65B9\u5F0F"))),
                React.createElement("div", { className: "form-horizontal" },
                    React.createElement("div", { className: "form-group col-xs-6" },
                        React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u5BB6\u5EAD\u7535\u8BDD"),
                        React.createElement("div", { className: "col-sm-8" },
                            React.createElement("input", { type: "text", className: "form-control", name: "HomePhone", onChange: this.handleChange }))),
                    React.createElement("div", { className: !this.state.Check.Phone ? 'form-group col-xs-6 has-error' : 'form-group col-xs-6' },
                        React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u624B\u673A"),
                        React.createElement("div", { className: "col-sm-8" },
                            React.createElement("input", { type: "text", className: "form-control", name: "Phone", onChange: this.handleChange }),
                            React.createElement("span", { className: "required-symbol" }, "*"))),
                    React.createElement("div", { className: "form-group col-xs-6" },
                        React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u90AE\u653F\u7F16\u7801"),
                        React.createElement("div", { className: "col-sm-8" },
                            React.createElement("input", { type: "text", className: "form-control", name: "Code", onChange: this.handleChange }))),
                    React.createElement("div", { className: !this.state.Check.Mailbox ? 'form-group col-xs-6 has-error' : 'form-group col-xs-6' },
                        React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u7535\u5B50\u90AE\u7BB1"),
                        React.createElement("div", { className: "col-sm-8" },
                            React.createElement("input", { type: "text", className: "form-control", name: "Mailbox", onChange: this.handleChange }),
                            React.createElement("span", { className: "required-symbol" }, "*"))),
                    React.createElement("div", { className: "form-group col-xs-12", style: { paddingRight: " 45px" } },
                        React.createElement("label", { className: "col-sm-2 control-label c39 ft14" }, "\u73B0\u5C45\u4F4F\u5730"),
                        React.createElement("div", { className: "col-sm-10" },
                            React.createElement("input", { type: "text", className: "form-control", name: "PresentAddress", onChange: this.handleChange }),
                            React.createElement("span", { className: "required-symbol" }, "*"),
                            React.createElement("span", { className: "ce85 ft14 white_space" }, "\u586B\u5199\u8BE6\u7EC6\u5730\u5740\u5230\u95E8\u724C\u53F7"))))),
            React.createElement("div", { className: "container text-left" },
                React.createElement("div", { className: "page-header" },
                    React.createElement("h1", { className: "tit-l-bor ft18" },
                        React.createElement("span", { className: "ml10" }, "\u7D27\u6025\u8054\u7CFB\u4EBA"))),
                React.createElement("div", { className: "form-horizontal" },
                    React.createElement("div", { className: "form-group col-xs-6" },
                        React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u8054\u7CFB\u4EBA\u59D3\u540D"),
                        React.createElement("div", { className: "col-sm-8" },
                            React.createElement("input", { type: "text", className: "form-control", name: "ContactsName", onChange: this.handleChange }),
                            React.createElement("span", { className: "required-symbol" }, "*"))),
                    React.createElement("div", { className: "form-group col-xs-6" },
                        React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u7535\u8BDD"),
                        React.createElement("div", { className: "col-sm-8" },
                            React.createElement("input", { type: "text", className: "form-control", name: "ContactsPhone", onChange: this.handleChange }),
                            React.createElement("span", { className: "required-symbol" }, "*"))))));
    };
    return Contact;
}(React.Component));
exports.Contact = Contact;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
// 驾照
var Driving = (function (_super) {
    __extends(Driving, _super);
    function Driving(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            check: {}, Model: {
                Driving: "false",
                Vehicle: "false",
                $Valid: true,
                $ErrorMsg: ''
            }
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Driving.prototype.componentDidMount = function () {
        this.props.onHandleInputChange("Driving", this.state.Model);
    };
    Driving.prototype.handleChange = function (event) {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState(function (prevState) {
            prevState.Model[name] = value;
        });
        this.props.onHandleInputChange("Driving", this.state.Model);
        this.check(name, value);
    };
    Driving.prototype.check = function (name, value) {
        this.setState(function (prevState) {
            // console.log(prevState);
            prevState.check[name] = true;
        });
    };
    Driving.prototype.render = function () {
        return React.createElement("div", { className: "container text-left" },
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", { className: "tit-l-bor ft18 mt10" },
                    React.createElement("span", { className: "ml10" }, "\u9A7E\u7167\u4FE1\u606F"))),
            React.createElement("div", { className: "form-horizontal" },
                React.createElement("div", { className: "form-group col-xs-6" },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u6709\u65E0\u9A7E\u7167"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("label", { className: "radio-inline ft14" },
                            React.createElement("input", { type: "radio", name: "Driving", value: "true", checked: this.state.Model.Driving == "true", onChange: this.handleChange }),
                            "\u6709"),
                        React.createElement("label", { className: "radio-inline ft14" },
                            React.createElement("input", { type: "radio", name: "Driving", value: "false", checked: this.state.Model.Driving == "false", onChange: this.handleChange }),
                            "\u65E0"))),
                React.createElement("div", { className: "form-group col-xs-6" },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u6709\u65E0\u7528\u8F66"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("label", { className: "radio-inline ft14" },
                            React.createElement("input", { type: "radio", name: "Vehicle", value: "true", checked: this.state.Model.Vehicle == "true", onChange: this.handleChange }),
                            "\u6709"),
                        React.createElement("label", { className: "radio-inline ft14" },
                            React.createElement("input", { type: "radio", name: "Vehicle", value: "false", checked: this.state.Model.Vehicle == "false", onChange: this.handleChange }),
                            "\u65E0")))));
    };
    return Driving;
}(React.Component));
exports.Driving = Driving;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Server = __webpack_require__(1);
// 教育经历
var Education = (function (_super) {
    __extends(Education, _super);
    function Education(props) {
        var _this = _super.call(this, props) || this;
        _this.Id = 0;
        _this.state = {
            check: {}, Model: {
                Item: [{ Id: 0, SchoolNature: "", StartDate: "", EndDate: "", SchoolName: "", Education: "", Degree: "" }],
                $Valid: true,
                $ErrorMsg: ''
            }
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.onAdd = _this.onAdd.bind(_this);
        _this.onDelete = _this.onDelete.bind(_this);
        return _this;
    }
    Education.prototype.componentDidMount = function () {
        this.props.onHandleInputChange("Education", this.state.Model);
    };
    Education.prototype.onAdd = function () {
        var _this = this;
        this.Id++;
        this.setState(function (prevState) {
            prevState.Model.Item.push({ Id: _this.Id, SchoolNature: "", StartDate: "", EndDate: "", SchoolName: "", Education: "", Degree: "" });
        });
    };
    Education.prototype.onDelete = function (index) {
        this.setState(function (prevState) {
            prevState.Model.Item.splice(index, 1);
        });
        this.props.onHandleInputChange("Education", this.state.Model);
    };
    Education.prototype.handleChange = function (event, index) {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState(function (prevState) {
            prevState.Model.Item[index][name] = value;
        });
        if (['StartDate', 'EndDate'].indexOf(name) != -1) {
            if (Server.regularDate.test(value)) {
                target.classList.remove('has-error');
            }
            else {
                target.classList.add('has-error');
            }
        }
        this.props.onHandleInputChange("Education", this.state.Model);
    };
    Education.prototype.check = function (name, value) {
        this.setState(function (prevState) {
            // console.log(prevState);
            prevState.check[name] = true;
        });
    };
    Education.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "container text-left" },
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", { className: "tit-l-bor ft18 mt10" },
                    React.createElement("span", { className: "ml10" }, "\u586B\u5199\u6559\u80B2\u4FE1\u606F"))),
            React.createElement("div", { className: "form-horizontal" },
                React.createElement("table", { className: "table table-hover table_bg-C" },
                    React.createElement("thead", { className: "c39 ft14" },
                        React.createElement("tr", null,
                            React.createElement("th", null, "\u5B66\u5386\u6027\u8D28\uFF1A"),
                            React.createElement("th", null, "\u5F00\u59CB\u65E5\u671F\uFF1A"),
                            React.createElement("th", null, "\u7ED3\u675F\u65E5\u671F\uFF1A"),
                            React.createElement("th", null, "\u5B66\u6821\u59D3\u540D\uFF1A"),
                            React.createElement("th", null, "\u5B66\u5386\uFF1A"),
                            React.createElement("th", null, "\u5B66\u4F4D\uFF1A"),
                            React.createElement("th", { className: "center" },
                                React.createElement("a", { onClick: this.onAdd, type: "button", className: "btn btn-add" }, "\u6DFB\u52A0")))),
                    React.createElement("tbody", null, this.state.Model.Item.map(function (x, i) {
                        return React.createElement("tr", { key: x.Id.toString() },
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "SchoolNature", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", { className: "pos_r" },
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "StartDate", onChange: function (e) { _this.handleChange(e, i); } }),
                                React.createElement("span", { className: "icon-rili pos_a" })),
                            React.createElement("td", { className: "pos_r" },
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "EndDate", onChange: function (e) { _this.handleChange(e, i); } }),
                                React.createElement("span", { className: "icon-rili pos_a" })),
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "SchoolName", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "Education", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "Degree", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", { className: "text-right" },
                                " ",
                                React.createElement("a", { type: "button", className: "btn btn-link", onClick: function () { _this.onDelete(i); } },
                                    React.createElement("span", { className: "icon-delete3" }),
                                    " \u5220\u9664")));
                    })))));
    };
    return Education;
}(React.Component));
exports.Education = Education;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
// 家人
var Family = (function (_super) {
    __extends(Family, _super);
    function Family(props) {
        var _this = _super.call(this, props) || this;
        _this.Id = 0;
        _this.state = {
            check: {}, Model: {
                Item: [{ Id: 0, Name: "", Relation: "", Company: "", Post: "", Phone: "" }],
                $Valid: true,
                $ErrorMsg: ''
            }
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.onAdd = _this.onAdd.bind(_this);
        _this.onDelete = _this.onDelete.bind(_this);
        return _this;
    }
    Family.prototype.componentDidMount = function () {
        this.props.onHandleInputChange("Family", this.state.Model);
    };
    Family.prototype.onAdd = function () {
        var _this = this;
        this.Id++;
        this.setState(function (prevState) {
            prevState.Model.Item.push({ Id: _this.Id, Name: "", Relation: "", Company: "", Post: "", Phone: "" });
        });
    };
    Family.prototype.onDelete = function (index) {
        this.setState(function (prevState) {
            prevState.Model.Item.splice(index, 1);
        });
        this.props.onHandleInputChange("Family", this.state.Model);
    };
    Family.prototype.handleChange = function (event, index) {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState(function (prevState) {
            prevState.Model.Item[index][name] = value;
        });
        this.props.onHandleInputChange("Family", this.state.Model);
    };
    Family.prototype.check = function (name, value) {
        this.setState(function (prevState) {
            // console.log(prevState);
            prevState.check[name] = true;
        });
    };
    Family.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "container text-left" },
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", { className: "tit-l-bor ft18 mt10" },
                    React.createElement("span", { className: "ml10" }, "\u586B\u5199\u5BB6\u5EAD\u6210\u5458"))),
            React.createElement("div", { className: "form-horizontal" },
                React.createElement("table", { className: "table table-hover table_bg-C" },
                    React.createElement("thead", { className: "c39 ft14" },
                        React.createElement("tr", null,
                            React.createElement("th", null, "\u59D3\u540D\uFF1A"),
                            React.createElement("th", null, "\u5173\u7CFB\uFF1A"),
                            React.createElement("th", null, "\u5DE5\u4F5C\u5355\u4F4D\uFF1A"),
                            React.createElement("th", null, "\u804C\u52A1\uFF1A"),
                            React.createElement("th", null, "\u8054\u7CFB\u65B9\u5F0F\uFF1A"),
                            React.createElement("th", { className: "center" },
                                React.createElement("a", { onClick: this.onAdd, type: "button", className: "btn btn-add" }, "\u6DFB\u52A0")))),
                    React.createElement("tbody", null, this.state.Model.Item.map(function (x, i) {
                        return React.createElement("tr", { key: x.Id.toString() },
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "Name", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "Relation", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "Company", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "Post", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "Phone", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", { className: "text-right" },
                                " ",
                                React.createElement("a", { type: "button", className: "btn btn-link", onClick: function () { _this.onDelete(i); } },
                                    React.createElement("span", { className: "icon-delete3" }),
                                    " \u5220\u9664")));
                    })))));
    };
    return Family;
}(React.Component));
exports.Family = Family;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
// 文件上传
var Files = (function (_super) {
    __extends(Files, _super);
    function Files(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            check: {}, Model: {
                Item: [],
                $Valid: true,
                $ErrorMsg: ''
            }
        };
        return _this;
    }
    // 组件输出已经呈现给DOM后，该钩子就会运行
    Files.prototype.componentDidMount = function () {
        var _this = this;
        this.props.onHandleInputChange("Files", this.state.Model);
        console.log("文件上传 加载", this);
        this.uploader = new plupload.Uploader({
            browse_button: this.refs.PluploadBtn,
            url: '/api/demo/upload'
        });
        this.uploader.init();
        this.uploader.bind('FilesAdded', function (up, files) {
            console.log(up);
            _this.onUpdate(up.files);
            setTimeout(function () {
                _this.uploader.start();
            }, 500);
        });
        //单个文件上传成功
        this.uploader.bind("FileUploaded", function (up, file, res) {
            res = JSON.parse(res.response);
            console.log("FileUploaded", res);
            file.url = res.data.url;
            _this.onUpdate(up.files);
        });
        // 上传过程不断触发
        this.uploader.bind('UploadProgress', function (up, file) {
            console.log("UploadProgress", file);
            _this.onUpdate(up.files);
        });
        // 全部上传成功
        this.uploader.bind('UploadComplete', function (up, files) {
        });
        // this.uploader.bind('UploadProgress', (up: any, file: any) => {
        // });
        // this.uploader.bind('Error', (up: any, err: any) => {
        // });
    };
    Files.prototype.removeFile = function (id) {
        this.uploader.removeFile(id);
        this.onUpdate(this.uploader.files);
    };
    Files.prototype.onUpdate = function (files) {
        this.setState(function (prevState) {
            prevState.Model.Item = files;
        });
        var item = this.state.Model.Item.map(function (x) {
            return { Name: x.name, Url: x.url || "", status: x.status };
        });
        var Valid = true, ErrorMsg = "文件未上传完成！";
        if (item.filter(function (x) { return x.status != 5; }).length > 0) {
            Valid = false;
        }
        var Model = {
            Item: item,
            $Valid: Valid,
            $ErrorMsg: ErrorMsg
        };
        this.props.onHandleInputChange("Files", Model);
    };
    Files.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "container text-left" },
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", { className: "tit-l-bor ft18 mt10" },
                    React.createElement("span", { className: "ml10" }, "\u6587\u4EF6\u4E0A\u4F20"))),
            React.createElement("table", { className: "table table-hover table_bg-C" },
                React.createElement("thead", { className: "c39 ft14" },
                    React.createElement("tr", null,
                        React.createElement("th", { style: { width: "50%" } }, "\u6587\u4EF6\u540D"),
                        React.createElement("th", { style: { width: "30%" } }, "\u4E0A\u4F20\u8FDB\u5EA6"),
                        React.createElement("th", { className: "center" },
                            " ",
                            React.createElement("a", { ref: "PluploadBtn", type: "button", className: "btn btn-add" }, "\u6DFB\u52A0\u6587\u4EF6")))),
                React.createElement("tbody", null, this.state.Model.Item.map(function (x, i) {
                    return React.createElement("tr", { key: i.toString() },
                        React.createElement("td", { className: "text-left" },
                            React.createElement("a", { href: x.url, target: "_blank" },
                                " ",
                                x.name)),
                        React.createElement("td", null,
                            React.createElement("div", { className: "progress" },
                                React.createElement("div", { className: "progress-bar", style: { width: Math.ceil(x.loaded / x.size * 100.0) + "%", minWidth: '3rem' } }, Math.ceil(x.loaded / x.size * 100.0) + "%"))),
                        React.createElement("td", { className: "text-right" },
                            React.createElement("button", { type: "button", className: "btn ", onClick: function () { _this.removeFile(x.id); } }, "\u5220\u9664")));
                }))));
    };
    return Files;
}(React.Component));
exports.Files = Files;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Server = __webpack_require__(1);
// 个人信息
var Personal = (function (_super) {
    __extends(Personal, _super);
    function Personal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            Check: {
                Name: {
                    $Valid: true,
                    $ErrorMsg: ""
                }, Birthday: {
                    $Valid: true,
                    $ErrorMsg: ""
                }, Marriage: {
                    $Valid: true,
                    $ErrorMsg: ""
                }, Children: {
                    $Valid: true,
                    $ErrorMsg: ""
                }, Nation: {
                    $Valid: true,
                    $ErrorMsg: ""
                }, Face: {
                    $Valid: true,
                    $ErrorMsg: ""
                }, PlaceOfOrigin: {
                    $Valid: true,
                    $ErrorMsg: ""
                }, Nickname: {
                    $Valid: true,
                    $ErrorMsg: ""
                }, Archives: {
                    $Valid: true,
                    $ErrorMsg: ""
                }
            },
            Model: {
                Name: "Name",
                Birthday: "2016-01-01",
                Marriage: "false",
                Children: "false",
                Nation: "",
                Face: "",
                PlaceOfOrigin: "",
                Nickname: "",
                Archives: "",
            }
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Personal.prototype.componentDidMount = function () {
        this.props.onHandleInputChange("Personal", this.state.Model);
        this.checkAll();
    };
    Personal.prototype.componentDidUpdate = function () {
    };
    Personal.prototype.handleChange = function (event) {
        // Server.Verification.$Valid = true;
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState(function (prevState) {
            prevState.Model[name] = value;
        }, function () {
            // this.checkAll();
        });
        this.props.onHandleInputChange("Personal", this.state.Model);
        // this.check(name, value);
        if (name == 'Birthday') {
            this.state.Check.Birthday.$Valid = Server.regularDate.test(value);
        }
    };
    Personal.prototype.check = function (name, value) {
        var checkVal = true;
        this.setState(function (prevState) {
            prevState.Check[name] = Server.filter(name, value);
        });
    };
    // 检查所有属性是否 通过，不通过跳出 给父组件传递 错误消息
    Personal.prototype.checkAll = function () {
        for (var key in this.state.Model) {
            if (this.state.Model.hasOwnProperty(key)) {
                if (['$Valid', '$ErrorMsg', 'Children', 'Marriage', 'Nickname'].indexOf(key) != -1) {
                }
                else {
                    var ele = this.state.Model[key];
                    var Model = Server.filter(key, ele);
                    if (Server.Verification.$Valid) {
                        Server.Verification.$ErrorMsg = Model.$ErrorMsg;
                        Server.Verification.$Valid = Model.$Valid;
                    }
                    else {
                    }
                }
            }
            ;
        }
    };
    Personal.prototype.render = function () {
        return React.createElement("div", { className: "container" },
            React.createElement("div", { className: "header entry_ft" },
                React.createElement("h4", null, "\u5458\u5DE5\u4E2A\u4EBA\u4FE1\u606F\u5F55\u5165")),
            React.createElement("div", { className: "page-header mt0" },
                React.createElement("h1", { className: "tit-l-bor ft18 mt10" },
                    React.createElement("span", { className: "ml10" }, "\u4E2A\u4EBA\u4FE1\u606F"))),
            React.createElement("div", { className: "form-horizontal text-left" },
                React.createElement("div", { className: !this.state.Check.Name.$Valid ? 'form-group col-xs-6 has-error' : 'form-group col-xs-6' },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u59D3\u540D"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("input", { type: "text", className: "form-control", name: "Name", value: this.state.Model.Name, onChange: this.handleChange, placeholder: "输入您的姓名" }),
                        React.createElement("span", { className: "required-symbol" }, "*"))),
                React.createElement("div", { className: !this.state.Check.Birthday.$Valid ? 'form-group col-xs-6 has-error' : 'form-group col-xs-6' },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u51FA\u751F\u65E5\u671F"),
                    React.createElement("div", { className: "col-sm-8 pos_r" },
                        React.createElement("input", { type: "text", className: "form-control", name: "Birthday", value: this.state.Model.Birthday, onChange: this.handleChange, placeholder: "如：1998-01-01" }),
                        React.createElement("span", { className: "icon-rili pos_a" }),
                        React.createElement("span", { className: "required-symbol" }, "*"))),
                React.createElement("div", { className: "form-group col-xs-6" },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u5A5A\u59FB\u72B6\u51B5"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("label", { className: "radio-inline ft14" },
                            React.createElement("input", { type: "radio", name: "Marriage", value: "true", checked: this.state.Model.Marriage == "true", onChange: this.handleChange }),
                            "\u5DF2\u5A5A"),
                        React.createElement("label", { className: "radio-inline ft14" },
                            React.createElement("input", { type: "radio", name: "Marriage", value: "false", checked: this.state.Model.Marriage == "false", onChange: this.handleChange }),
                            "\u672A\u5A5A"))),
                React.createElement("div", { className: "form-group col-xs-6" },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u6709\u65E0\u5B50\u5973"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("label", { className: "radio-inline ft14" },
                            React.createElement("input", { type: "radio", name: "Children", value: "true", checked: this.state.Model.Children == "true", onChange: this.handleChange }),
                            "\u6709"),
                        React.createElement("label", { className: "radio-inline ft14" },
                            React.createElement("input", { type: "radio", name: "Children", value: "false", checked: this.state.Model.Children == "false", onChange: this.handleChange }),
                            "\u65E0"))),
                React.createElement("div", { className: !this.state.Check.Nation.$Valid ? 'form-group col-xs-6 has-error' : 'form-group col-xs-6' },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u6C11\u65CF"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("input", { type: "text", className: "form-control", name: "Nation", onChange: this.handleChange }),
                        React.createElement("span", { className: "required-symbol" }, "*"))),
                React.createElement("div", { className: !this.state.Check.Face.$Valid ? 'form-group col-xs-6 has-error' : 'form-group col-xs-6' },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u653F\u6CBB\u9762\u8C8C"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("input", { type: "text", className: "form-control", name: "Face", onChange: this.handleChange }),
                        React.createElement("span", { className: "required-symbol" }, "*"))),
                React.createElement("div", { className: !this.state.Check.PlaceOfOrigin.$Valid ? 'form-group col-xs-6 has-error' : 'form-group col-xs-6' },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u7C4D\u8D2F"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("input", { type: "text", className: "form-control", name: "PlaceOfOrigin", onChange: this.handleChange }),
                        React.createElement("span", { className: "required-symbol" }, "*"))),
                React.createElement("div", { className: "form-group col-xs-6" },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u804C\u79F0"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("input", { type: "text", className: "form-control", name: "Nickname", onChange: this.handleChange }))),
                React.createElement("div", { className: "form-group col-xs-12", style: { paddingRight: " 45px" } },
                    React.createElement("label", { className: "col-sm-2 control-label c39 ft14" }, "\u6863\u6848\u6240\u5728\u5730"),
                    React.createElement("div", { className: "col-sm-4" },
                        React.createElement("input", { type: "text", className: "form-control", name: "Archives", onChange: this.handleChange }),
                        React.createElement("span", { className: "required-symbol" }, "*"),
                        React.createElement("span", { className: "ce85 ft14 white_space" }, "\u6863\u6848\u6240\u5728\u5730\u5199\u6863\u6848\u5B58\u653E\u673A\u6784\u5168\u79F0\u6216\u8005\u76F8\u5BF9\u5E94\u7684\u8BE6\u7EC6\u5730\u5740\uFF1B\u4E0D\u6E05\u695A\u6863\u6848\u5728\u54EA\u7684\u6216\u8005\u5728\u81EA\u5DF1\u624B\u91CC\u4E00\u5F8B\u5199\u4E2A\u4EBA\u4FDD\u7BA1")))));
    };
    return Personal;
}(React.Component));
exports.Personal = Personal;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
// 户口
var Registered = (function (_super) {
    __extends(Registered, _super);
    function Registered(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            check: {}, Model: {
                Category: "",
                Code: "",
                Location: "",
                Address: "",
                $Valid: true,
                $ErrorMsg: ''
            }
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Registered.prototype.componentDidMount = function () {
        this.props.onHandleInputChange("Registered", this.state.Model);
    };
    Registered.prototype.handleChange = function (event) {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState(function (prevState) {
            prevState.Model[name] = value;
        });
        this.props.onHandleInputChange("Registered", this.state.Model);
        // this.check(name, value);
    };
    Registered.prototype.check = function (name, value) {
        this.setState(function (prevState) {
            // console.log(prevState);
            prevState.check[name] = true;
        });
    };
    Registered.prototype.render = function () {
        return React.createElement("div", { className: "container text-left" },
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", { className: "tit-l-bor ft18 mt10" },
                    React.createElement("span", { className: "ml10" }, "\u6237\u53E3\u4FE1\u606F"))),
            React.createElement("div", { className: "form-horizontal" },
                React.createElement("div", { className: "form-group col-xs-6" },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u6237\u53E3\u7C7B\u522B"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("input", { type: "text", className: "form-control", name: "Category", onChange: this.handleChange }),
                        React.createElement("span", { className: "required-symbol" }, "*"))),
                React.createElement("div", { className: "form-group col-xs-6" },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u6237\u53E3\u6240\u5728\u5730"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("input", { type: "text", className: "form-control", name: "Location", onChange: this.handleChange }),
                        React.createElement("span", { className: "required-symbol" }, "*"))),
                React.createElement("div", { className: "form-group col-xs-6" },
                    React.createElement("label", { className: "col-sm-4 control-label c39 ft14" }, "\u90AE\u653F\u7F16\u7801"),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("input", { type: "text", className: "form-control", name: "Code", onChange: this.handleChange }))),
                React.createElement("div", { className: "form-group col-xs-12", style: { paddingRight: "45px" } },
                    React.createElement("label", { className: "col-sm-2 control-label c39 ft14" }, "\u6237\u53E3\u5730\u5740"),
                    React.createElement("div", { className: "col-sm-10" },
                        React.createElement("input", { type: "text", className: "form-control", name: "Address", onChange: this.handleChange }),
                        React.createElement("span", { className: "required-symbol" }, "*"),
                        React.createElement("span", { className: "ce85 ft14 white_space" }, "\u5F55\u5165\u7684\u6237\u53E3\u5730\u5740\u5FC5\u987B\u548C\u60A8\u7684\u6237\u53E3\u672C\u4E0A\u7684\u5730\u5740\u4FDD\u5B58\u4E00\u81F4")))));
    };
    return Registered;
}(React.Component));
exports.Registered = Registered;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Server = __webpack_require__(1);
// 工作经历
var Work = (function (_super) {
    __extends(Work, _super);
    function Work(props) {
        var _this = _super.call(this, props) || this;
        _this.Id = 0;
        _this.state = {
            check: {}, Model: {
                Item: [{ Id: 0, StartDate: "", EndDate: "", UnitName: "", Post: "", }],
                $Valid: true,
                $ErrorMsg: ''
            }
        };
        _this.handleChange = _this.handleChange.bind(_this);
        // this.onModelSubmit = this.onModelSubmit.bind(this);
        _this.onAdd = _this.onAdd.bind(_this);
        _this.onDelete = _this.onDelete.bind(_this);
        return _this;
    }
    Work.prototype.componentDidMount = function () {
        this.props.onHandleInputChange("Work", this.state.Model);
    };
    Work.prototype.onAdd = function () {
        var _this = this;
        this.Id++;
        this.setState(function (prevState) {
            prevState.Model.Item.push({ Id: _this.Id, StartDate: "", EndDate: "", UnitName: "", Post: "" });
        });
    };
    Work.prototype.onDelete = function (index) {
        this.setState(function (prevState) {
            prevState.Model.Item.splice(index, 1);
        });
        this.props.onHandleInputChange("Work", this.state.Model);
    };
    Work.prototype.handleChange = function (event, index) {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState(function (prevState) {
            prevState.Model.Item[index][name] = value;
        });
        if (['StartDate', 'EndDate'].indexOf(name) != -1) {
            if (Server.regularDate.test(value)) {
                target.classList.remove('has-error');
            }
            else {
                target.classList.add('has-error');
            }
        }
        this.props.onHandleInputChange("Work", this.state.Model);
    };
    Work.prototype.check = function (name, value) {
        this.setState(function (prevState) {
            // console.log(prevState);
            prevState.check[name] = true;
        });
    };
    Work.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "container text-left" },
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", { className: "tit-l-bor ft18 mt10" },
                    React.createElement("span", { className: "ml10" }, "\u5DE5\u4F5C\u7ECF\u5386"))),
            React.createElement("div", { className: "form-horizontal" },
                React.createElement("table", { className: "table table-hover table_bg-C" },
                    React.createElement("thead", { className: "c39 ft14" },
                        React.createElement("tr", null,
                            React.createElement("th", null, "\u5F00\u59CB\u65E5\u671F\uFF1A"),
                            React.createElement("th", null, "\u7ED3\u675F\u65E5\u671F\uFF1A"),
                            React.createElement("th", null, "\u5355\u4F4D\u540D\u79F0\uFF1A"),
                            React.createElement("th", null, "\u804C\u52A1\uFF1A"),
                            React.createElement("th", { className: "center" },
                                React.createElement("a", { onClick: this.onAdd, type: "button", className: "btn btn-add" }, "\u6DFB\u52A0")))),
                    React.createElement("tbody", null, this.state.Model.Item.map(function (x, i) {
                        return React.createElement("tr", { key: x.Id.toString() },
                            React.createElement("td", { className: "pos_r" },
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "StartDate", onChange: function (e) { _this.handleChange(e, i); } }),
                                React.createElement("span", { className: "icon-rili pos_a" })),
                            React.createElement("td", { className: "pos_r" },
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "EndDate", onChange: function (e) { _this.handleChange(e, i); } }),
                                React.createElement("span", { className: "icon-rili pos_a" })),
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "UnitName", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", name: "Post", onChange: function (e) { _this.handleChange(e, i); } })),
                            React.createElement("td", { className: "text-right" },
                                React.createElement("a", { type: "button", className: "btn btn-link", onClick: function () { _this.onDelete(i); } },
                                    React.createElement("span", { className: "icon-delete3" }),
                                    " \u5220\u9664")));
                    })))));
    };
    return Work;
}(React.Component));
exports.Work = Work;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./typings/tsd.d.ts" />
window.location.hash = "";
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(4);
var App_1 = __webpack_require__(3);
ReactDOM.render(React.createElement(App_1.App, null), document.getElementById("app"));


/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map