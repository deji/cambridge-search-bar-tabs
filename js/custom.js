(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Declare your components here.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Rewrite this when imports can be done dynamically
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       http://2ality.com/2017/01/import-operator.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       KULeuven/LIBIS (c) 2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Mehmet Celik
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


/* import your component configuration*/


require('./utils');

var _pnxXml = require('./components/prmSearchResultThumbnailContainerAfter/pnxXml');

var _camTabs = require('./components/general/camTabs');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AfterComponents = function () {
  function AfterComponents() {
    _classCallCheck(this, AfterComponents);
  }

  _createClass(AfterComponents, null, [{
    key: 'all',
    get: function get() {
      /*
        name = the sub element in the after element
        config = the imported configuration object
        enabled = true/false should the component be created
        appendTo = The component should be created in this after component.
         ex. {name: 'home-icon', config: homeIconConfig, enabled: true, appendTo: 'prm-logo-after'}
        results in:
          <prm-logo-after parentCtrl='$ctrl'>
            <home-icon parentCtrl='$ctrl'></home-icon>
          </prm-logo-after>
      */
      return [{ name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after' }, { name: 'cam-tabs', config: _camTabs.camTabsConfig, enabled: true, appendTo: null }].filter(function (m) {
        return m.enabled;
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/camTabs":2,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":3,"./utils":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Adds tabs to the simple search bar.

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
var camTabsHTML = '<md-tabs style="background-color:white;" md-dynamic-height md-selected="$ctrl.selectedIndex">\n  <md-tab ng-repeat=\'tab in $ctrl.searchScopes\' value=\'{{tab}}\'>\n    <md-tab-label>\n      <span translate="{{\'tabbedmenu.\'+tab+\'.label\'}}"></span>\n    </md-tab-label>\n  </md-tab>\n</md-tabs>\n';

var CamTabsController = function () {
  function CamTabsController() {
    _classCallCheck(this, CamTabsController);

    var self = this;
  }

  _createClass(CamTabsController, [{
    key: 'searchScopes',
    get: function get() {
      return Object.keys(window.appConfig.searchScopesMap);
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      var scopes = Array.from(this.searchScopes);
      return scopes.indexOf(this.selectedTab);
    },
    set: function set(index) {
      this.selectedTab = this.searchScopes[index];
      this.selectedScope = window.appConfig.searchScopesMap[this.selectedTab][0]['scope-id'];
    }
  }]);

  return CamTabsController;
}();

//CamTabsController.$inject = ['$mdAutoCompleteCtrl'];

var camTabsConfig = exports.camTabsConfig = {
  bindings: {
    parentCtrl: '<',
    selectedTab: '=',
    selectedScope: '='
  },
  controller: CamTabsController,
  template: camTabsHTML
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Creates a hotspot in the right-bottom corner. When clicked an XML and PNX button
  will appear beneath every record.

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
var pnxXmlHTML = '<style>\n  .pnx-xml {\n    font-size:0.5em;\n    display:none;\n    justify-content:space-around;    \n  }\n</style>\n\n<div class=\'pnx-xml\'>\n  <a target="_blank" ng-href="/primo_library/libweb/jqp/record/{{ $ctrl.recordid }}.xml?needSession=0">XML</a> |\n  <a target="_blank" ng-href="/primo_library/libweb/jqp/record/{{ $ctrl.recordid }}.pnx?needSession=0">PNX</a>\n</div>\n';

var PnxXmlController = function () {
  function PnxXmlController() {
    _classCallCheck(this, PnxXmlController);

    try {
      this.recordid = this.parentCtrl.parentCtrl.item.pnx.control.recordid[0];
    } catch (e) {
      this.recordid = null;
    }
  }

  _createClass(PnxXmlController, [{
    key: '$onInit',
    value: function $onInit() {
      var self = this;
      if (document.querySelectorAll('pnx-xml-trigger').length == 0) {
        var div = document.createElement('pnx-xml-trigger');
        div.setAttribute('style', 'position:fixed;right:0;bottom:0;height:20px;width:20px;z-index:1000;background-color:black;opacity:.03');
        div.onclick = function (event) {
          self.visible = !self.visible;

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = Array.from(document.querySelectorAll('.pnx-xml'))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var element = _step.value;

              element.style.display = self.visible ? 'flex' : 'none';
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        };
        document.body.appendChild(div);
      }
    }
  }]);

  return PnxXmlController;
}();

var pnxXmlConfig = exports.pnxXmlConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: PnxXmlController,
  template: pnxXmlHTML
};

},{}],4:[function(require,module,exports){
/*
  Central Package Loader

  Do NOT edit this file.
  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
"use strict";

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchBarHTML = '<div layout="column" layout-fill tabindex="-1" role="search" ng-class="{\'zero-padding\': $ctrl.showTabsAndScopesVal()}">\n  <div class="search-wrapper dark-toolbar prm-top-bar-container main-header-row" div layout="row" ng-class="{\'facet-to-left\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xs && !$ctrl.mediaQueries.sm && !$ctrl.mediaQueries.md}">\n    <div flex="0" flex-md="0" flex-lg="10" flex-xl="20" ng-class="{\'facet-to-left-spacer\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xl && !$ctrl.mediaQueries.md && !$ctrl.mediaQueries.sm && !$ctrl.mediaQueries.xs, \'flex-xl-25\': $ctrl.facetToLeft}"></div>\n    <div class="search-elements-wrapper" layout="column" flex flex-sm="85" flex-md="75" flex-lg="65" flex-xl="50" ng-class="(!$ctrl.advancedSearch ?\'simple-mode\' : \'advanced-mode\')  + \' \' + ($ctrl.mainSearchField ? \'has-input\' : \'\') + \' \' + ($ctrl.mediaQueries.lgPlus ? \'flex-lgPlus-55\' : \'\') + \' \' + ($ctrl.facetToLeft? \'facet-to-left-search-bar\' : \'\')">\n      <div class="simple-search-wrapper layout-full-width" ng-hide="$ctrl.advancedSearch">\n\n        <!-- add code here -->\n          <cam-tabs selected-scope="$ctrl.scopeField" selected-tab="$ctrl.selectedTab"></cam-tabs>\n        <!-- add code here -->\n\n        <form class="layout-full-height" layout="column" name="search-form" ng-submit="$ctrl.onSubmit()"><input type="submit" class="accessible-only" tabindex="-1" aria-hidden="true" />\n          <div class="layout-full-width">\n            <div class="search-element-inner layout-full-width">\n              <div class="search-input">\n                <prm-autocomplete class="search-input-container EXLPRMHeaderAutoComplete" md-input-id="searchBar" md-search-text="$ctrl.mainSearchField" md-search-text-change="$ctrl.autocompleteQuery($ctrl.mainSearchField)" md-selected-item="$ctrl.selectedItem" md-selected-item-change="$ctrl.onSelectItem()"\n                  md-item-text="item.display || $ctrl.typedQuery " md-min-length="2" md-autofocus="false" md-no-cache="true" md-items="item in $ctrl.autoCompleteItems" md-item-text="item" placeholder="{{$ctrl.placeHolderText}}" flex>\n                  <md-item-template>\n                    <div ng-if="item.tab"><span md-highlight-text="$ctrl.mainSearchField">{{$ctrl.mainSearchField}}</span>\n                      <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="magnifying-glass"></prm-icon><span class="suggestion-scope" translate="{{\'tabbedmenu.\'+item.tab+\'.label\'}}"></span></div>\n                    <div ng-if="!item.tab" md-highlight-text="$ctrl.mainSearchField">{{item.shortDisplay}}</div>\n                  </md-item-template>\n                </prm-autocomplete>\n              </div>\n<!--\n              <div class="search-options" ng-class="{\'flex-sm-0 flex-0 hide-on-xs\':!$ctrl.showTabsAndScopesVal(), \'flex-sm-40 visible\':$ctrl.showTabsAndScopesVal()}">\n                <prm-tabs-and-scopes-selector ng-if="$ctrl.showTabsAndScopesVal()" [(selected-scope)]="$ctrl.scopeField" [(selected-tab)]="$ctrl.selectedTab" ng-class="{\'is-displayed\':$ctrl.showTabsAndScopesVal()}"></prm-tabs-and-scopes-selector>\n              </div>\n-->\n              <div class="search-actions" ng-if="::(!$ctrl.scopesDialerConfiguration.display)" layout-align-xs="start center">\n                <md-button class="zero-margin md-icon-button" ng-if="!$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()" hide-gt-xs>\n                  <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="tune"></prm-icon>\n                </md-button>\n                <md-button class="zero-margin button-confirm" aria-label="Search" (click)="$ctrl.onSubmit()">\n                  <prm-icon icon-type="{{::$ctrl.searchBoxIcons.searchTextBox.type}}" svg-icon-set="{{::$ctrl.searchBoxIcons.searchTextBox.iconSet}}" icon-definition="{{::$ctrl.searchBoxIcons.searchTextBox.icon}}"></prm-icon>\n                </md-button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class="advanced-search-wrapper layout-full-width" layout="row" ng-if="$ctrl.advancedSearch" ng-cloak>\n        <prm-advanced-search tabindex="0" role="search" id="advanced-search" [(selected-scope)]="$ctrl.scopeField" [(selected-tab)]="$ctrl.selectedTab" [(show-tab-and-scopes)]="$ctrl.showTabsAndScopes" [(typed-query)]="$ctrl.mainSearchField"></prm-advanced-search>\n        <md-button class="switch-to-simple zero-margin md-icon-button" ng-if="$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()" hide-gt-xs>\n          <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="close"></prm-icon>\n        </md-button>\n      </div>\n      <div ng-if="$ctrl.isShowFindDBButton()" class="search-extras layout-full-width">\n        <div layout="row"><span flex></span>\n          <md-button class="button-over-dark button-with-icon" (click)="::$ctrl.openFdbIframe();" translate-attr-title="mainmenu.label.moreoptions" aria-label="{{::(\'finddb.sb.title\' | translate)}}">\n            <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="database"></prm-icon><span translate="finddb.sb.title"></span></md-button>\n        </div>\n      </div>\n    </div>\n    <div class="search-switch-buttons" layout-sm="column" layout-align-sm="start stretch" hide-xs ng-class="{\'facet-to-left-advanced-search\': $ctrl.facetToLeft}">\n      <md-button aria-label="{{\'nui.aria.searchBar.advancedLink\' | translate}}" class="switch-to-advanced zero-margin button-with-icon" ng-if="!$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()"><span layout="row" layout-align="start center"><span translate="label.advanced_search"></span></span>\n      </md-button>\n      <md-button class="switch-to-simple zero-margin button-with-icon" ng-if="$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()"><span layout="row" layout-align="start center"><span translate="label.simple_search"></span></span>\n      </md-button>\n    </div>\n    <div flex="0" flex-md="0" flex-sm="0" flex-lg="15" flex-xl="15" ng-class="{\'flex-lgPlus-10\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xs}"></div>\n  </div>\n  <div layout="row" ng-if="!$ctrl.advancedSearch && $ctrl.showSignIn">\n    <div flex="0" flex-md="0" flex-lg="15" flex-xl="20"></div>\n    <prm-alert-bar flex [alert-object]="$ctrl.signInAlert"></prm-alert-bar>\n    <div class="padding-left-medium" flex="0" flex-md="25" flex-lg="10" flex-xl="15" hide-xs></div>\n    <div flex="0" flex-md="0" flex-sm="10" flex-lg="20" flex-xl="20"></div>\n  </div>\n</div>\n<div class="advanced-search-backdrop" ng-class="{\'visible\': $ctrl.advancedSearch}"></div>\n<prm-search-bar-after parent-ctrl="$ctrl"></prm-search-bar-after>\n';

//Create the centralCustom module;

var app = angular.module('centralCustom', []).run(function ($templateCache) {
  $templateCache.put('components/search/searchBar/search-bar.html', searchBarHTML);
});

//Contains the after component selectors that will be injected
var afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading centralCustom components');
_components2.default.all.forEach(function (component) {
  if (component.appendTo) {
    var elements = afterComponents[component.appendTo] || [];
    elements.push(component.name);
    afterComponents[component.appendTo] = elements;
  }

  console.log('\t\t' + component.name);
  app.component(component.name.toCamelCase(), component.config);
});

//Inject place holders into the after components
Object.keys(afterComponents).forEach(function (component, i) {
  var subComponents = afterComponents[component];

  app.component(component.toCamelCase(), {
    bindings: {
      parentCtrl: '<'
    },
    template: subComponents.map(function (m) {
      return '<' + m + ' parent-ctrl="$ctrl"></' + m + '>';
    }).join("")
  });
});

},{"./components":1}],5:[function(require,module,exports){
'use strict';

/*
  General 

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
String.prototype.toCamelCase = function () {
  return this.split('-').map(function (d, i, a) {
    return i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d;
  }).join('');
};

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL2dlbmVyYWwvY2FtVGFicy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyL3BueFhtbC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9tYWluLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7Ozs7Ozs7Ozs7QUFXQTs7O0FBRkE7O0FBR0E7O0FBQ0E7Ozs7SUFHcUIsZTs7Ozs7Ozt3QkFFRjtBQUNmOzs7Ozs7Ozs7OztBQVlBLGFBQU8sQ0FDTCxFQUFDLE1BQU0sU0FBUCxFQUFrQiw0QkFBbEIsRUFBd0MsU0FBUyxJQUFqRCxFQUF1RCxVQUFVLGtDQUFqRSxFQURLLEVBRUwsRUFBQyxNQUFNLFVBQVAsRUFBbUIsOEJBQW5CLEVBQTBDLFNBQVMsSUFBbkQsRUFBeUQsVUFBVSxJQUFuRSxFQUZLLEVBR0wsTUFISyxDQUdFLFVBQUMsQ0FBRDtBQUFBLGVBQU8sRUFBRSxPQUFUO0FBQUEsT0FIRixDQUFQO0FBSUQ7Ozs7OztrQkFuQmtCLGU7Ozs7Ozs7Ozs7Ozs7QUNoQnJCOzs7Ozs7OztJQVFNLGlCO0FBQ0osK0JBQWE7QUFBQTs7QUFDWCxRQUFJLE9BQU8sSUFBWDtBQUNEOzs7O3dCQUVrQjtBQUNqQixhQUFPLE9BQU8sSUFBUCxDQUFZLE9BQU8sU0FBUCxDQUFpQixlQUE3QixDQUFQO0FBQ0Q7Ozt3QkFFa0I7QUFD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QUNELENBVEQ7O0FBV0E7QUFDQSxPQUFPLElBQVAsQ0FBWSxlQUFaLEVBQTZCLE9BQTdCLENBQXFDLFVBQUMsU0FBRCxFQUFXLENBQVgsRUFBaUI7QUFDcEQsTUFBSSxnQkFBZ0IsZ0JBQWdCLFNBQWhCLENBQXBCOztBQUVBLE1BQUksU0FBSixDQUFjLFVBQVUsV0FBVixFQUFkLEVBQXVDO0FBQ3JDLGNBQVM7QUFDUCxrQkFBWTtBQURMLEtBRDRCO0FBSXJDLGNBQVUsY0FBYyxHQUFkLENBQWtCO0FBQUEsbUJBQVMsQ0FBVCwrQkFBb0MsQ0FBcEM7QUFBQSxLQUFsQixFQUE0RCxJQUE1RCxDQUFpRSxFQUFqRTtBQUoyQixHQUF2QztBQU1ELENBVEQ7Ozs7O0FDdENBOzs7Ozs7QUFNQSxPQUFPLFNBQVAsQ0FBaUIsV0FBakIsR0FBK0IsWUFBVztBQUN4QyxTQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBb0IsVUFBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUw7QUFBQSxXQUFZLElBQUksQ0FBSixHQUFRLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBWSxXQUFaLEtBQTRCLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBcEMsR0FBZ0QsQ0FBNUQ7QUFBQSxHQUFwQixFQUFtRixJQUFuRixDQUF3RixFQUF4RixDQUFQO0FBQ0QsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICBEZWNsYXJlIHlvdXIgY29tcG9uZW50cyBoZXJlLlxuXG4gIFJld3JpdGUgdGhpcyB3aGVuIGltcG9ydHMgY2FuIGJlIGRvbmUgZHluYW1pY2FsbHlcbiAgaHR0cDovLzJhbGl0eS5jb20vMjAxNy8wMS9pbXBvcnQtb3BlcmF0b3IuaHRtbFxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cbmltcG9ydCAnLi91dGlscydcblxuLyogaW1wb3J0IHlvdXIgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24qL1xuaW1wb3J0IHtwbnhYbWxDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlci9wbnhYbWwnXG5pbXBvcnQge2NhbVRhYnNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2NhbVRhYnMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWZ0ZXJDb21wb25lbnRzIHtcblxuICBzdGF0aWMgZ2V0IGFsbCgpIHtcbiAgICAvKlxuICAgICAgbmFtZSA9IHRoZSBzdWIgZWxlbWVudCBpbiB0aGUgYWZ0ZXIgZWxlbWVudFxuICAgICAgY29uZmlnID0gdGhlIGltcG9ydGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICBlbmFibGVkID0gdHJ1ZS9mYWxzZSBzaG91bGQgdGhlIGNvbXBvbmVudCBiZSBjcmVhdGVkXG4gICAgICBhcHBlbmRUbyA9IFRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gdGhpcyBhZnRlciBjb21wb25lbnQuXG5cbiAgICAgIGV4LiB7bmFtZTogJ2hvbWUtaWNvbicsIGNvbmZpZzogaG9tZUljb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInfVxuICAgICAgcmVzdWx0cyBpbjpcbiAgICAgICAgPHBybS1sb2dvLWFmdGVyIHBhcmVudEN0cmw9JyRjdHJsJz5cbiAgICAgICAgICA8aG9tZS1pY29uIHBhcmVudEN0cmw9JyRjdHJsJz48L2hvbWUtaWNvbj5cbiAgICAgICAgPC9wcm0tbG9nby1hZnRlcj5cbiAgICAqL1xuICAgIHJldHVybiBbXG4gICAgICB7bmFtZTogJ3BueC14bWwnLCBjb25maWc6IHBueFhtbENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcid9LFxuICAgICAge25hbWU6ICdjYW0tdGFicycsIGNvbmZpZzogY2FtVGFic0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGx9XG4gICAgXS5maWx0ZXIoKG0pID0+IG0uZW5hYmxlZCk7XG4gIH1cblxufVxuIiwiLypcbiAgQWRkcyB0YWJzIHRvIHRoZSBzaW1wbGUgc2VhcmNoIGJhci5cblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgY2FtVGFic0hUTUwgZnJvbSAnLi9jYW1UYWJzLmh0bWwnXG5cbmNsYXNzIENhbVRhYnNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIH1cblxuICBnZXQgc2VhcmNoU2NvcGVzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh3aW5kb3cuYXBwQ29uZmlnLnNlYXJjaFNjb3Blc01hcCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpe1xuICAgIGxldCBzY29wZXMgPSBBcnJheS5mcm9tKHRoaXMuc2VhcmNoU2NvcGVzKTtcbiAgICByZXR1cm4gc2NvcGVzLmluZGV4T2YodGhpcy5zZWxlY3RlZFRhYik7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0aGlzLnNlYXJjaFNjb3Blc1tpbmRleF07XG4gICAgdGhpcy5zZWxlY3RlZFNjb3BlID0gd2luZG93LmFwcENvbmZpZy5zZWFyY2hTY29wZXNNYXBbdGhpcy5zZWxlY3RlZFRhYl1bMF1bJ3Njb3BlLWlkJ107XG4gIH1cblxufVxuXG4vL0NhbVRhYnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtZEF1dG9Db21wbGV0ZUN0cmwnXTtcblxuZXhwb3J0IGxldCBjYW1UYWJzQ29uZmlnID0ge1xuICBiaW5kaW5nczp7XG4gICAgcGFyZW50Q3RybDogJzwnLFxuICAgIHNlbGVjdGVkVGFiOiAnPScsXG4gICAgc2VsZWN0ZWRTY29wZTogJz0nXG4gIH0sXG4gIGNvbnRyb2xsZXI6IENhbVRhYnNDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogY2FtVGFic0hUTUxcbn1cbiIsIi8qXG4gIENyZWF0ZXMgYSBob3RzcG90IGluIHRoZSByaWdodC1ib3R0b20gY29ybmVyLiBXaGVuIGNsaWNrZWQgYW4gWE1MIGFuZCBQTlggYnV0dG9uXG4gIHdpbGwgYXBwZWFyIGJlbmVhdGggZXZlcnkgcmVjb3JkLlxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cbmltcG9ydCBwbnhYbWxIVE1MIGZyb20gJy4vcG54WG1sLmh0bWwnXG5jbGFzcyBQbnhYbWxDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0cnkge1xuICAgICAgICB0aGlzLnJlY29yZGlkID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHRoaXMucmVjb3JkaWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gICRvbkluaXQoKXtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3BueC14bWwtdHJpZ2dlcicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncG54LXhtbC10cmlnZ2VyJyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpmaXhlZDtyaWdodDowO2JvdHRvbTowO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7ei1pbmRleDoxMDAwO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouMDMnKTtcbiAgICAgIGRpdi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XG5cbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbngteG1sJykpKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbGV0IHBueFhtbENvbmZpZyA9IHtcbiAgYmluZGluZ3MgOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFBueFhtbENvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBwbnhYbWxIVE1MXG59XG4iLCIvKlxuICBDZW50cmFsIFBhY2thZ2UgTG9hZGVyXG5cbiAgRG8gTk9UIGVkaXQgdGhpcyBmaWxlLlxuICBBbGwgY29tcG9uZW50cyBhcmUgZGVjbGFyZWQgaW4gXCJjb21wb25lbnRzLmpzXCJcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xuaW1wb3J0IHNlYXJjaEJhckhUTUwgZnJvbSAnLi4vaHRtbC9zZWFyY2hCYXIuaHRtbCdcblxuLy9DcmVhdGUgdGhlIGNlbnRyYWxDdXN0b20gbW9kdWxlO1xubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdjZW50cmFsQ3VzdG9tJyxbXSlcbiAgICAgICAgICAgICAgICAgLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaEJhci9zZWFyY2gtYmFyLmh0bWwnLCBzZWFyY2hCYXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgfSk7XG5cbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XG5cbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcbi8vaW5qZWN0ZWRcbmNvbnNvbGUubG9nKCdMb2FkaW5nIGNlbnRyYWxDdXN0b20gY29tcG9uZW50cycpO1xuQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gIGlmIChjb21wb25lbnQuYXBwZW5kVG8pIHtcbiAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcbiAgICBlbGVtZW50cy5wdXNoKGNvbXBvbmVudC5uYW1lKTtcbiAgICBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSA9IGVsZW1lbnRzO1xuICB9XG5cbiAgY29uc29sZS5sb2coYFxcdFxcdCR7Y29tcG9uZW50Lm5hbWV9YCk7XG4gIGFwcC5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUudG9DYW1lbENhc2UoKSwgY29tcG9uZW50LmNvbmZpZyk7XG59KTtcblxuLy9JbmplY3QgcGxhY2UgaG9sZGVycyBpbnRvIHRoZSBhZnRlciBjb21wb25lbnRzXG5PYmplY3Qua2V5cyhhZnRlckNvbXBvbmVudHMpLmZvckVhY2goKGNvbXBvbmVudCxpKSA9PiB7XG4gIGxldCBzdWJDb21wb25lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudF07XG5cbiAgYXBwLmNvbXBvbmVudChjb21wb25lbnQudG9DYW1lbENhc2UoKSwge1xuICAgIGJpbmRpbmdzOntcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IHN1YkNvbXBvbmVudHMubWFwKG0gPT4gYDwke219IHBhcmVudC1jdHJsPVwiJGN0cmxcIj48LyR7bX0+YCkuam9pbihcIlwiKVxuICB9KTtcbn0pO1xuIiwiLypcbiAgR2VuZXJhbCBcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5TdHJpbmcucHJvdG90eXBlLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNwbGl0KCctJykubWFwKChkLGksYSkgPT4gIGkgPiAwID8gZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGQuc2xpY2UoMSkgOmQpLmpvaW4oJycpO1xufVxuIl19
