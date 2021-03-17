(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Contacts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contacts.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contacts.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'create-contact',
  data: function data() {
    return {
      contacts: {},
      filterFavourites: null,
      search: null
    };
  },
  mounted: function mounted() {
    this.fetchContacts();
  },
  methods: {
    searchContacts: function searchContacts() {
      var _this = this;

      axios.get('/api/contacts', {
        params: {
          search: this.search,
          filter_favourites: this.filterFavourites
        }
      }).then(function (response) {
        _this.contacts = response.data.data;
      })["catch"](function (errors) {
        _this.$swal(_.toArray(errors.response.data.errors).join('<br>'));
      });
    },
    fetchContacts: function fetchContacts() {
      var _this2 = this;

      axios.get('/api/contacts').then(function (response) {
        _this2.contacts = response.data.data;
      })["catch"](function (errors) {
        _this2.$swal(_.toArray(errors.response.data.errors).join('<br>'));
      });
    },
    filterContacts: function filterContacts(event) {
      var vue = this;

      if (this.filterFavourites) {
        this.contacts = this.contacts.filter(function (contact) {
          return contact.favourite === vue.filterFavourites;
        });
      } else {
        this.fetchContacts();
      }
    },
    favourite: function favourite(contact) {
      var _this3 = this;

      axios.put('/api/contacts/' + contact.id + '/favourite').then(function (response) {
        _this3.$swal(response.data.message);

        contact.favourite = !contact.favourite;
      })["catch"](function (errors) {
        _this3.$swal(_.toArray(errors.response.data.errors).join('<br>'));
      });
    },
    destroy: function destroy(id) {
      var _this4 = this;

      axios["delete"]('/api/contacts/' + id).then(function (response) {
        _this4.$swal(response.data.message);

        _this4.contacts = _this4.contacts.filter(function (contact) {
          return contact.id !== id;
        });
      })["catch"](function (errors) {
        _this4.$swal(_.toArray(errors.response.data.errors).join('<br>'));
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Contacts.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Contacts.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contacts_vue_vue_type_template_id_cf61fa1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contacts.vue?vue&type=template&id=cf61fa1c& */ "./resources/js/views/Contacts.vue?vue&type=template&id=cf61fa1c&");
/* harmony import */ var _Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contacts.vue?vue&type=script&lang=js& */ "./resources/js/views/Contacts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Contacts_vue_vue_type_template_id_cf61fa1c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Contacts_vue_vue_type_template_id_cf61fa1c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Contacts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Contacts.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Contacts.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contacts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contacts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Contacts.vue?vue&type=template&id=cf61fa1c&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Contacts.vue?vue&type=template&id=cf61fa1c& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_cf61fa1c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_cf61fa1c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_cf61fa1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contacts.vue?vue&type=template&id=cf61fa1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contacts.vue?vue&type=template&id=cf61fa1c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contacts.vue?vue&type=template&id=cf61fa1c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contacts.vue?vue&type=template&id=cf61fa1c& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "overflow-x-auto" }, [
      _c(
        "div",
        {
          staticClass:
            "min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden"
        },
        [
          _c(
            "div",
            { staticClass: "w-full lg:w-5/6" },
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                  attrs: { to: { name: "contacts.create" } }
                },
                [_vm._v("\n                    Add Contact\n                ")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-span-12" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.filterFavourites,
                        expression: "filterFavourites"
                      }
                    ],
                    staticClass: "mt-4",
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.filterFavourites = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        function($event) {
                          return _vm.filterContacts($event)
                        }
                      ]
                    }
                  },
                  [
                    _c("option", { domProps: { value: false } }, [
                      _vm._v("Showing All")
                    ]),
                    _vm._v(" "),
                    _c("option", { domProps: { value: true } }, [
                      _vm._v("Show Favourites Only")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-span-12" }, [
                _c(
                  "label",
                  {
                    staticClass: "block text-sm font-medium text-gray-700",
                    attrs: { for: "search" }
                  },
                  [_vm._v("Search")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search"
                    }
                  ],
                  staticClass:
                    "mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md",
                  attrs: { type: "text", id: "search" },
                  domProps: { value: _vm.search },
                  on: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.searchContacts($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "bg-white shadow-md rounded my-6" }, [
                _c("table", { staticClass: "min-w-max w-full table-auto" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    { staticClass: "text-gray-600 text-sm font-light" },
                    _vm._l(_vm.contacts, function(contact) {
                      return _c(
                        "tr",
                        {
                          staticClass:
                            "border-b border-gray-200 hover:bg-gray-100"
                        },
                        [
                          _c(
                            "td",
                            {
                              staticClass:
                                "py-3 px-6 text-left whitespace-nowrap"
                            },
                            [
                              _c("div", { staticClass: "flex items-center" }, [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v(_vm._s(contact.name))
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-left" }, [
                            _c("div", { staticClass: "flex items-center" }, [
                              _c("span", [_vm._v(_vm._s(contact.email))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-center" }, [
                            _c("div", { staticClass: "flex items-center" }, [
                              _c("span", [_vm._v(_vm._s(contact.landline))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-center" }, [
                            _c("div", { staticClass: "flex items-center" }, [
                              _c("span", [_vm._v(_vm._s(contact.mobile))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-center" }, [
                            contact.favourite
                              ? _c(
                                  "span",
                                  {
                                    staticClass:
                                      "bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs"
                                  },
                                  [_vm._v("Favourite")]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-3 px-6 text-center" }, [
                            _c(
                              "div",
                              {
                                staticClass: "flex item-center justify-center"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        attrs: {
                                          width: "24",
                                          height: "24",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          "fill-rule": "evenodd",
                                          "clip-rule": "evenodd"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.favourite(contact)
                                          }
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "w-4 ml-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            name: "contact",
                                            params: { id: contact.id }
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor"
                                            }
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d:
                                                  "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("path", {
                                              attrs: {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d:
                                                  "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            name: "contacts.edit",
                                            params: { id: contact.id }
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor"
                                            }
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d:
                                                  "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.destroy(contact.id)
                                          }
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d:
                                              "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    }),
                    0
                  )
                ])
              ])
            ],
            1
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c(
        "tr",
        {
          staticClass:
            "bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
        },
        [
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Email")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [
            _vm._v("Landline")
          ]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-left" }, [_vm._v("Mobile")]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-center" }, [
            _vm._v("Favourite")
          ]),
          _vm._v(" "),
          _c("th", { staticClass: "py-3 px-6 text-center" }, [
            _vm._v("Actions")
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);