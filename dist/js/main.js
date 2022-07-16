/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_calculate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calculate */ \"./modules/calculate.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/lightbox */ \"./modules/lightbox.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"21 july 2022 12:00\");\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_calculate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(1000);\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_lightbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n(0,_modules_validate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    formId: \"form1\",\n    someElem: [\n      {\n        type: \"input\",\n        id: \"calc-total\",\n      },\n    ],\n  });\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    formId: \"form2\",\n    someElem: [\n      {\n        type: \"block\",\n        id: \"calc-total\",\n      },\n    ],\n  });\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    formId: \"form3\",\n    someElem: [\n      {\n        type: \"block\",\n        id: \"calc-total\",\n      },\n    ],\n  });\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    formId: \"form4\",\n    someElem: [\n      {\n        type: \"block\",\n        id: \"calc-total\",\n      },\n    ],\n  });\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    formId: \"form5\",\n    someElem: [\n      {\n        type: \"block\",\n        id: \"calc-total\",\n      },\n    ],\n  });\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    formId: \"form6\",\n    someElem: [\n      {\n        type: \"block\",\n        id: \"calc-total\",\n      },\n    ],\n  });\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    formId: \"form7\",\n    someElem: [\n      {\n        // type: \"block\",\n        id: \"calc-total\",\n      },\n    ],\n  });\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculate.js":
/*!******************************!*\
  !*** ./modules/calculate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculate\": () => (/* binding */ calculate),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst calculate = (price = 1500) => {\n\tconst calcBlock = document.getElementById('calc');\n\tif (calcBlock) {\n\t\tconst calcType = document.getElementById('calc-type');\n\t\tconst calcTypeMaterial = document.getElementById('calc-type-material');\n\t\tconst calcSquare = document.getElementById('calc-input');\n\t\tconst total = document.getElementById('calc-total');\n\n\t\tlet totalValue = 0;\n\n\t\tconst countCalc = () => {\n\t\t\tconst calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n\t\t\tconst calcSquareValue = +calcSquare.value;\n\t\t\tconst calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;\n\n\t\t\tif (calcTypeValue && calcSquareValue && calcTypeMaterialValue) {\n\t\t\t\ttotalValue = price * calcSquareValue * calcTypeValue * calcTypeMaterialValue;\n\t\t\t} else {\n\t\t\t\ttotalValue = 0;\n\t\t\t}\n\t\t\treturn totalValue;\n\t\t};\n\n\t\tcalcBlock.addEventListener('input', e => {\n\t\t\tif (e.target === calcSquare) {\n\t\t\t\te.target.value = e.target.value.replace(/\\D+/g, '');\n\t\t\t}\n\t\t\tif (calcTypeMaterial.selectedIndex === 0 || calcType.selectedIndex === 0) {\n\t\t\t\ttotalValue = 0;\n\t\t\t}\n\t\t\tif (e.target === calcType || e.target === calcTypeMaterial || e.target === calcSquare) {\n\t\t\t\tconst totalValue = countCalc();\n\n\t\t\t\t(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n\t\t\t\t\tduration: 300,\n\t\t\t\t\ttiming(timeFraction) {\n\t\t\t\t\t\treturn timeFraction;\n\t\t\t\t\t},\n\t\t\t\t\tdraw(progress) {\n\t\t\t\t\t\ttotal.value = Math.round(progress * totalValue);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculate);\n\n//# sourceURL=webpack:///./modules/calculate.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst animate = ({\n\ttiming,\n\tdraw,\n\tduration\n}) => {\n\n\tlet start = performance.now();\n\n\trequestAnimationFrame(function animate(time) {\n\t\t// timeFraction change from 0 to 1\n\t\tlet timeFraction = (time - start) / duration;\n\t\tif (timeFraction > 1) timeFraction = 1;\n\n\t\t// Calculate actual animation status\n\t\tlet progress = timing(timeFraction);\n    \t// Rendering\n\t\tdraw(progress); \n\n\t\tif (timeFraction < 1) {\n\t\t\trequestAnimationFrame(animate);\n\t\t}\n\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/lightbox.js":
/*!*****************************!*\
  !*** ./modules/lightbox.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"lightbox\": () => (/* binding */ lightbox)\n/* harmony export */ });\nconst lightbox= () => {  \n    const body = document.querySelector('body');\n    const certificateDocuments = document.querySelectorAll('.sertificate-document');\n    const modalOverlay = document.querySelector('.overlay');\n\n    const modalBlock = document.createElement('div');\n    const clone = modalOverlay.cloneNode(true);\n\n    certificateDocuments.forEach(elem => {\n        elem.addEventListener('click', e => {\n            e.preventDefault();\n\n            // Getting the original IMG SRC\n            let href = e.target.closest('.sertificate-document').getAttribute('href'); \n            \n            const imgDocument = document.createElement('img');\n            imgDocument.setAttribute('src', href);\n\n            body.append(modalBlock);\n            modalBlock.innerHTML = `\n            <span title=\"Close\" class=\"header-modal__close\">x</span>\n            `;\n\n            modalBlock.append(imgDocument);\n            \n            modalBlock.append(clone);\n\n            imgDocument.style.display = 'block';\n            imgDocument.style.position = 'fixed';\n            imgDocument.style.top = '50%';\n            imgDocument.style.left = '50%';\n            imgDocument.style.zIndex = '9';\n            imgDocument.style.transform = 'translate(-50%, -50%)';    \n            imgDocument.style.maxHeight = '65%';\n            clone.style.display = 'block';\n\n\n            modalBlock.addEventListener('click', () => {\n                modalBlock.innerHTML = '';\n                modalBlock.remove();\n            });\n        });\n    });\n\n    \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightbox);\n\n//# sourceURL=webpack:///./modules/lightbox.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\n\tconst modal = document.querySelector(\".header-modal\");\n\tconst overlay = document.querySelector(\".overlay\");\n\tconst btn = document.getElementsByClassName(\"btn\")[1];\n\tconst closeBtn = document.querySelector(\".header-modal__close\");\n\n\tbtn.addEventListener(\"click\", (event) => {\n\t\tevent.preventDefault();\n\t\toverlay.style.display = \"block\";\n\t\tmodal.style.display = \"block\";\n\t});\n\n\tcloseBtn.addEventListener(\"click\", () => {\n\t\toverlay.style.display = \"none\";\n\t\tmodal.style.display = \"none\";\n\t});\n\tconst serviceBtn = document.querySelectorAll(\".service-button\");\n\tconst servicesModal = document.querySelector(\".services-modal\");\n\tconst servicesClose = document.querySelector(\".services-modal__close\");\n\tconst overlaytwo = document.querySelector(\".overlay\");\n\tconst subj = servicesModal.querySelector('input[name=\"subject\"]');\n\n\tserviceBtn.forEach((btn) => {\n\t\tbtn.addEventListener(\"click\", (event) => {\n\t\t\tevent.preventDefault();\n\t\t\toverlaytwo.style.display = \"block\";\n\t\t\tservicesModal.style.display = \"block\";\n\t\t\tsubj.value = event.target.attributes[1].value;\n\t\t});\n\t});\n\n\tservicesClose.addEventListener(\"click\", (event) => {\n\t\tevent.preventDefault();\n\t\toverlaytwo.style.display = \"none\";\n\t\tservicesModal.style.display = \"none\";\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\nconst scroll = () => {\n\tconst scrollBtn = document.querySelector('.smooth-scroll');\n\tscrollBtn.style.display = 'none';\n\n\tconst trackScroll = () => {\n\t\tconst scrolled = window.pageYOffset;\n\t\tconst coords = document.documentElement.clientHeight;\n\n\t\tif (scrolled > coords) {\n\t\t\tscrollBtn.style.display = 'block';\n\t\t}\n\t\tif (scrolled < coords) {\n\t\t\tscrollBtn.style.display = 'none';\n\t\t}\n\n\t};\n\n\tconst backToTop = () => {\n\t\tconst header = document.getElementById('header');\n\t\tif (header) {\n\t\t\theader.scrollIntoView({\n\t\t\t\tbehavior: 'smooth',\n\t\t\t\tblock: 'start',\n\t\t\t\tinline: 'center'\n\t\t\t});\n\t\t} else {\n\t\t\tdocument.body.scrollIntoView({\n\t\t\t\tbehavior: 'smooth',\n\t\t\t\tblock: 'start',\n\t\t\t\tinline: 'center'\n\t\t\t});\n\t\t}\n\t};\n\twindow.addEventListener('scroll', trackScroll);\n\tscrollBtn.addEventListener('click', backToTop);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\n    const form = document.getElementById(formId);\n    const statusBlock = document.createElement(\"div\");\n    const loadText = \"Загрузка...\";\n    const errorText = \"Ошибка ...\";\n    const successText = \"Спасибо! Заявка отправлена\";\n  \n    // // // валидация\n    const validateForm = (list) => {\n      let success = true;\n      const formElements = form.querySelectorAll(\"input\");\n  \n      formElements.forEach((input) => {\n        if (!input.value) {\n          success = false;\n          input.style.border = \"2px solid red\";\n        } else {\n          input.style.border = \"\";\n        }\n  \n        // отключение стиля ошибки при фокуссировке\n        input.addEventListener(\"focus\", () => {\n          const formElements = form.querySelectorAll(\"input\");\n          formElements.forEach((input) => {\n            input.style.border = \"\";\n          });\n        });\n      });\n      return success;\n    };\n  \n    // создание post запроса\n  \n    const sendData = (data) => {\n      return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n        method: \"POST\",\n        body: JSON.stringify(data),\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },\n      }).then((res) => res.json());\n    };\n  \n    const submitForm = () => {\n      // создание объекта из  данных введеднных в форму\n      const formData = new FormData(form);\n      const formBody = {};\n      const formElements = form.querySelectorAll(\"input\");\n  \n      formData.forEach((val, key) => {\n        formBody[key] = val;\n      });\n  \n      // // // добавление данных в объект\n  \n      someElem.forEach((elem) => {\n        const element = document.getElementById(elem.id);\n        // если элемент существует, то добавится в форму\n        if (element) {\n          if (elem.type === \"block\") {\n            formBody[elem.id] = element.textContent;\n          } else if (elem.type === \"input\") {\n            formBody[elem.id] = element.value;\n          }\n        }\n      });\n  \n      // проверка на валидация форм\n      if (validateForm(form)) {\n        // вывод сообщения о загрузке данных\n  \n        statusBlock.textContent = loadText;\n  \n        form.append(statusBlock);\n        // отправка данных\n        sendData(formBody)\n          .then((data) => {\n            // вывод сообщения об успешной отправке\n            statusBlock.textContent = successText;\n            // очистка полей ввода\n            formElements.forEach((input) => {\n              input.value = \"\";\n            });\n          })\n          //вывод ошибки\n          .catch((error) => {\n            statusBlock.textContent = errorText;\n          });\n      } else {\n        // alert(\"Данные не отправлены\");\n      }\n    };\n  \n    try {\n      if (!form) {\n        throw new Error(\"верните форму!\");\n      }\n  \n      form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        submitForm();\n      });\n    } catch (error) {\n      console.log(error.message);\n    }\n  };\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timersDays = document.querySelectorAll('.count_1 span');\n    const timersHours = document.querySelectorAll('.count_2 span');\n    const timersMinutes = document.querySelectorAll('.count_3 span');\n    const timersSeconds = document.querySelectorAll('.count_4 span');\n\n    if (!deadline) {\n        for (let i = 0; i < timersDays.length; i++) {\n            try {\n                timersDays[i].textContent = '00';\n                timersHours[i].textContent = '00';\n                timersMinutes[i].textContent = '00';\n                timersSeconds[i].textContent = '00';\n            } catch (error) {\n                console.log(error.message);\n            }\n        }\n        return;\n    }\n\n    let interval;\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n        return {\n            timeRemaining,\n            days,\n            hours,\n            minutes,\n            seconds\n        };\n    };\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n        for (let i = 0; i < timersDays.length; i++) {\n            try {\n                timersDays[i].textContent = getTime.days < 10 ? '0' + getTime.days : getTime.days;\n                timersHours[i].textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\n                timersMinutes[i].textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\n                timersSeconds[i].textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\n            } catch (error) {\n                console.log(error.message);\n            }\n        }\n        if (getTime.timeRemaining <= 0) {\n            clearInterval(interval);\n            for (let i = 0; i < timersDays.length; i++) {\n                try {\n                    timersDays[i].textContent = '00';\n                    timersHours[i].textContent = '00';\n                    timersMinutes[i].textContent = '00';\n                    timersSeconds[i].textContent = '00';\n                } catch (error) {\n                    console.log(error.message);\n                }\n            }\n        }\n    };\n\n    updateClock();\n    interval = setInterval(updateClock, 500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validate.js":
/*!*****************************!*\
  !*** ./modules/validate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\n    const userName = document.querySelectorAll(\"form [name=fio]\");\n  \n    //достаём forms с атрибутом [type=tel]\n    const phone = document.querySelectorAll(\"form [name=phone]\");\n  \n    // // проверка модальных окон\n  \n    //перевод в верхний регистр первой буквы, а остальные в нижний регистр\n    const validSimbols = (str) => {\n      //исправляем первый символ\n      str = str.replace(/\\S+/gi, (word) => {\n        word = word.split(\"\");\n  \n        for (let i = 0; i < word.length; i++) {\n          if (i === 0) {\n            word[i].toUpperCase();\n            word[i] = word[i].toUpperCase();\n          } else {\n            word[i] = word[i].toLowerCase();\n          }\n        }\n        word = word.join(\"\");\n        return word;\n      });\n  \n      return str;\n    };\n  \n    //функция проверки двойных и более пробелов в строчке и исправление на один пробел\n    const validSpace = (str) => {\n      // console.log(event.target.value.match(/(\\s\\s)+/gi))\n      if (/\\s\\s/gi.test(str)) {\n        do {\n          str = str.replace(/(\\s\\s)/gi, (str) => {\n            return \" \";\n          });\n        } while (/\\s\\s/gi.test(str));\n        //Дополнительно удалим пробел в начале и в конце строки\n        str = str.replace(/^\\s/i, \"\");\n        str = str.replace(/\\s$/gi, \"\");\n      }\n      return str;\n    };\n  \n    //проверка ввода текста\n    userName.forEach((name) => {\n      name.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/[^а-я a-z]/gi, \"\");\n      });\n    });\n  \n    //функция вешает на инпуты форм события blur и проверяет правильность ввода [type=text]\n    userName.forEach((textInput) => {\n      textInput.addEventListener(\"blur\", (event) => {\n        //если в тексте встречаются двойные и более пробелы,то менять на один пробел\n        event.target.value = validSpace(event.target.value);\n        //перевод первого символа в верхнйи регистр, а остальных в нижний\n        event.target.value = validSimbols(event.target.value);\n      });\n    });\n  \n    //проверка ввода телефона\n    phone.forEach((item) => {\n      item.setAttribute(\"maxlength\", \"16\");\n      item.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/[^+\\d]/g, \"\");\n      });\n    });\n  };\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///./modules/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;