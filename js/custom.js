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

var _camBrowseButton = require('./components/general/camBrowseButton');

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
      return [{ name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after' }, { name: 'cam-tabs', config: _camTabs.camTabsConfig, enabled: true, appendTo: null }, { name: 'cam-browse-button', config: _camBrowseButton.camBrowseButtonConfig, enabled: true, appendTo: null }].filter(function (m) {
        return m.enabled;
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/camBrowseButton":2,"./components/general/camTabs":3,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":4,"./utils":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var camBrowseButtonHTML = '<md-button aria-label="Browse"\n           class="cam-button zero-margin button-with-icon"\n           ng-click="$ctrl.switchBrowse()">\n           <span layout="row" layout-align="start center">\n             <span>Browse</span>\n           </span>\n</md-button>\n';

var camBrowseButtonController = function () {
  function camBrowseButtonController($state) {
    _classCallCheck(this, camBrowseButtonController);

    this.state = $state;
  }

  _createClass(camBrowseButtonController, [{
    key: 'switchBrowse',
    value: function switchBrowse() {
      this.state.go('exploreMain.browseSearch', { vid: window.appConfig.vid });
    }
  }]);

  return camBrowseButtonController;
}();

camBrowseButtonController.$inject = ['$state'];

var camBrowseButtonConfig = exports.camBrowseButtonConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: camBrowseButtonController,
  template: camBrowseButtonHTML
};

},{}],3:[function(require,module,exports){
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
var camTabsHTML = '<md-radio-group style="background-color:white;" ng-model="$ctrl.selectedIndex" ng-change="$ctrl.selectedIndex($index)" layout="row" layout-wrap>\n  <md-radio-button ng-repeat="tab in $ctrl.searchScopes" value="{{$index}}" class="md-primary" aria-label="{{\'tabbedmenu.\'+index+\'.label\' | translate}}">\n    <span translate="tabbedmenu.{{tab}}.label"></span>\n  </md-radio-button>\n</md-radio-group>\n';

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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

var searchBarHTML = '<div layout="column" layout-fill tabindex="-1" role="search" ng-class="{\'zero-padding\': $ctrl.showTabsAndScopesVal()}">\n  <div class="search-wrapper dark-toolbar prm-top-bar-container main-header-row" div layout="row" ng-class="{\'facet-to-left\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xs && !$ctrl.mediaQueries.sm && !$ctrl.mediaQueries.md}">\n    <div flex="0" flex-md="0" flex-lg="10" flex-xl="20" ng-class="{\'facet-to-left-spacer\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xl && !$ctrl.mediaQueries.md && !$ctrl.mediaQueries.sm && !$ctrl.mediaQueries.xs, \'flex-xl-25\': $ctrl.facetToLeft}"></div>\n    <div class="search-elements-wrapper" layout="column" flex flex-sm="85" flex-md="75" flex-lg="65" flex-xl="50" ng-class="(!$ctrl.advancedSearch ?\'simple-mode\' : \'advanced-mode\')  + \' \' + ($ctrl.mainSearchField ? \'has-input\' : \'\') + \' \' + ($ctrl.mediaQueries.lgPlus ? \'flex-lgPlus-55\' : \'\') + \' \' + ($ctrl.facetToLeft? \'facet-to-left-search-bar\' : \'\')">\n      <div class="simple-search-wrapper layout-full-width" ng-hide="$ctrl.advancedSearch">\n\n        <!-- add code here -->\n          <cam-tabs selected-scope="$ctrl.scopeField" selected-tab="$ctrl.selectedTab"></cam-tabs>\n        <!-- add code here -->\n\n        <form class="layout-full-height" layout="column" name="search-form" ng-submit="$ctrl.onSubmit()"><input type="submit" class="accessible-only" tabindex="-1" aria-hidden="true" />\n          <div class="layout-full-width">\n            <div class="search-element-inner layout-full-width">\n              <div class="search-input">\n                <prm-autocomplete class="search-input-container EXLPRMHeaderAutoComplete" md-input-id="searchBar" md-search-text="$ctrl.mainSearchField" md-search-text-change="$ctrl.autocompleteQuery($ctrl.mainSearchField)" md-selected-item="$ctrl.selectedItem" md-selected-item-change="$ctrl.onSelectItem()"\n                  md-item-text="item.display || $ctrl.typedQuery " md-min-length="2" md-autofocus="false" md-no-cache="true" md-items="item in $ctrl.autoCompleteItems" md-item-text="item" placeholder="{{$ctrl.placeHolderText}}" flex>\n                  <md-item-template>\n                    <div ng-if="item.tab"><span md-highlight-text="$ctrl.mainSearchField">{{$ctrl.mainSearchField}}</span>\n                      <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="magnifying-glass"></prm-icon><span class="suggestion-scope" translate="{{\'tabbedmenu.\'+item.tab+\'.label\'}}"></span></div>\n                    <div ng-if="!item.tab" md-highlight-text="$ctrl.mainSearchField">{{item.shortDisplay}}</div>\n                  </md-item-template>\n                </prm-autocomplete>\n              </div>\n              <div class="search-options" ng-class="{\'flex-sm-0 flex-0 hide-on-xs\':!$ctrl.showTabsAndScopesVal(), \'flex-sm-40 visible\':$ctrl.showTabsAndScopesVal()}">\n                <prm-tabs-and-scopes-selector ng-if="$ctrl.showTabsAndScopesVal()" [(selected-scope)]="$ctrl.scopeField" [(selected-tab)]="$ctrl.selectedTab" ng-class="{\'is-displayed\':$ctrl.showTabsAndScopesVal()}"></prm-tabs-and-scopes-selector>\n              </div>\n              <div class="search-actions" ng-if="::(!$ctrl.scopesDialerConfiguration.display)" layout-align-xs="start center">\n                <md-button class="zero-margin md-icon-button" ng-if="!$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()" hide-gt-xs>\n                  <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="tune"></prm-icon>\n                </md-button>\n                <md-button class="zero-margin button-confirm" aria-label="Search" (click)="$ctrl.onSubmit()">\n                  <prm-icon icon-type="{{::$ctrl.searchBoxIcons.searchTextBox.type}}" svg-icon-set="{{::$ctrl.searchBoxIcons.searchTextBox.iconSet}}" icon-definition="{{::$ctrl.searchBoxIcons.searchTextBox.icon}}"></prm-icon>\n                </md-button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class="advanced-search-wrapper layout-full-width" layout="row" ng-if="$ctrl.advancedSearch" ng-cloak>\n        <prm-advanced-search tabindex="0" role="search" id="advanced-search" [(selected-scope)]="$ctrl.scopeField" [(selected-tab)]="$ctrl.selectedTab" [(show-tab-and-scopes)]="$ctrl.showTabsAndScopes" [(typed-query)]="$ctrl.mainSearchField"></prm-advanced-search>\n        <md-button class="switch-to-simple zero-margin md-icon-button" ng-if="$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()" hide-gt-xs>\n          <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="close"></prm-icon>\n        </md-button>\n      </div>\n      <div ng-if="$ctrl.isShowFindDBButton()" class="search-extras layout-full-width">\n        <div layout="row"><span flex></span>\n          <md-button class="button-over-dark button-with-icon" (click)="::$ctrl.openFdbIframe();" translate-attr-title="mainmenu.label.moreoptions" aria-label="{{::(\'finddb.sb.title\' | translate)}}">\n            <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="database"></prm-icon><span translate="finddb.sb.title"></span></md-button>\n        </div>\n      </div>\n    </div>\n\n\n    <div class="search-switch-buttons"\n         layout=\'column\'\n         layout-align="center"\n         layout-sm="column"\n         layout-align-sm="start stretch"\n         hide-xs ng-class="{\'facet-to-left-advanced-search\': $ctrl.facetToLeft}">\n\n          <cam-browse-button></cam-browse-button>\n\n          <md-button aria-label="{{\'nui.aria.searchBar.advancedLink\' | translate}}"\n                     class="switch-to-advanced zero-margin button-with-icon"\n                     ng-if="!$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()">\n            <span layout="row" layout-align="start center">\n              <span translate="label.advanced_search"></span>\n            </span>\n          </md-button>\n\n          <md-button class="switch-to-simple zero-margin button-with-icon" ng-if="$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()">\n            <span layout="row" layout-align="start center">\n              <span translate="label.simple_search"></span>\n            </span>\n          </md-button>\n    </div>\n\n\n    <div flex="0" flex-md="0" flex-sm="0" flex-lg="15" flex-xl="15" ng-class="{\'flex-lgPlus-10\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xs}"></div>\n  </div>\n  <div layout="row" ng-if="!$ctrl.advancedSearch && $ctrl.showSignIn">\n    <div flex="0" flex-md="0" flex-lg="15" flex-xl="20"></div>\n    <prm-alert-bar flex [alert-object]="$ctrl.signInAlert"></prm-alert-bar>\n    <div class="padding-left-medium" flex="0" flex-md="25" flex-lg="10" flex-xl="15" hide-xs></div>\n    <div flex="0" flex-md="0" flex-sm="10" flex-lg="20" flex-xl="20"></div>\n  </div>\n</div>\n<div class="advanced-search-backdrop" ng-class="{\'visible\': $ctrl.advancedSearch}"></div>\n<prm-search-bar-after parent-ctrl="$ctrl"></prm-search-bar-after>\n';

//Create the centralCustom module;

var app = angular.module('viewCustom', []).run(function ($templateCache) {
  $templateCache.put('components/search/searchBar/search-bar.html', searchBarHTML);
});

//Contains the after component selectors that will be injected
var afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading components');
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

},{"./components":1}],6:[function(require,module,exports){
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

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9wcmltby1leHBsb3JlLWNhbWJyaWRnZS9qcy9jb21wb25lbnRzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vcHJpbW8tZXhwbG9yZS1jYW1icmlkZ2UvanMvY29tcG9uZW50cy9nZW5lcmFsL2NhbUJyb3dzZUJ1dHRvbi5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL3ByaW1vLWV4cGxvcmUtY2FtYnJpZGdlL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1UYWJzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vcHJpbW8tZXhwbG9yZS1jYW1icmlkZ2UvanMvY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlci9wbnhYbWwuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9wcmltby1leHBsb3JlLWNhbWJyaWRnZS9qcy9tYWluLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vcHJpbW8tZXhwbG9yZS1jYW1icmlkZ2UvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cWpCQ0FBOzs7Ozs7Ozs7OztBQVdBOzs7QUFGQTs7QUFHQTs7QUFDQTs7QUFDQTs7OztJQUVxQixlOzs7Ozs7O3dCQUVGO0FBQ2Y7Ozs7Ozs7Ozs7O0FBWUEsYUFBTyxDQUNMLEVBQUMsTUFBTSxTQUFQLEVBQWtCLDRCQUFsQixFQUF3QyxTQUFTLElBQWpELEVBQXVELFVBQVUsa0NBQWpFLEVBREssRUFFTCxFQUFDLE1BQU0sVUFBUCxFQUFtQiw4QkFBbkIsRUFBMEMsU0FBUyxJQUFuRCxFQUF5RCxVQUFVLElBQW5FLEVBRkssRUFHTCxFQUFDLE1BQU0sbUJBQVAsRUFBNEIsOENBQTVCLEVBQTJELFNBQVMsSUFBcEUsRUFBMEUsVUFBVSxJQUFwRixFQUhLLEVBSUwsTUFKSyxDQUlFLFVBQUMsQ0FBRDtBQUFB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Q0FBVyxHQUFYLEVBQWdCLEdBQWhCLENBQW9CLFVBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0FBQUEsV0FBWSxJQUFJLENBQUosR0FBUSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVksV0FBWixLQUE0QixFQUFFLEtBQUYsQ0FBUSxDQUFSLENBQXBDLEdBQWdELENBQTVEO0FBQUEsR0FBcEIsRUFBbUYsSUFBbkYsQ0FBd0YsRUFBeEYsQ0FBUDtBQUNELENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAgRGVjbGFyZSB5b3VyIGNvbXBvbmVudHMgaGVyZS5cblxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XG4gIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTcvMDEvaW1wb3J0LW9wZXJhdG9yLmh0bWxcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgJy4vdXRpbHMnXG5cbi8qIGltcG9ydCB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uKi9cbmltcG9ydCB7cG54WG1sQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXIvcG54WG1sJ1xuaW1wb3J0IHtjYW1UYWJzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1UYWJzJ1xuaW1wb3J0IHtjYW1Ccm93c2VCdXR0b25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2NhbUJyb3dzZUJ1dHRvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWZ0ZXJDb21wb25lbnRzIHtcblxuICBzdGF0aWMgZ2V0IGFsbCgpIHtcbiAgICAvKlxuICAgICAgbmFtZSA9IHRoZSBzdWIgZWxlbWVudCBpbiB0aGUgYWZ0ZXIgZWxlbWVudFxuICAgICAgY29uZmlnID0gdGhlIGltcG9ydGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICBlbmFibGVkID0gdHJ1ZS9mYWxzZSBzaG91bGQgdGhlIGNvbXBvbmVudCBiZSBjcmVhdGVkXG4gICAgICBhcHBlbmRUbyA9IFRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gdGhpcyBhZnRlciBjb21wb25lbnQuXG5cbiAgICAgIGV4LiB7bmFtZTogJ2hvbWUtaWNvbicsIGNvbmZpZzogaG9tZUljb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInfVxuICAgICAgcmVzdWx0cyBpbjpcbiAgICAgICAgPHBybS1sb2dvLWFmdGVyIHBhcmVudEN0cmw9JyRjdHJsJz5cbiAgICAgICAgICA8aG9tZS1pY29uIHBhcmVudEN0cmw9JyRjdHJsJz48L2hvbWUtaWNvbj5cbiAgICAgICAgPC9wcm0tbG9nby1hZnRlcj5cbiAgICAqL1xuICAgIHJldHVybiBbXG4gICAgICB7bmFtZTogJ3BueC14bWwnLCBjb25maWc6IHBueFhtbENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcid9LFxuICAgICAge25hbWU6ICdjYW0tdGFicycsIGNvbmZpZzogY2FtVGFic0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGx9LFxuICAgICAge25hbWU6ICdjYW0tYnJvd3NlLWJ1dHRvbicsIGNvbmZpZzogY2FtQnJvd3NlQnV0dG9uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogbnVsbH1cbiAgICBdLmZpbHRlcigobSkgPT4gbS5lbmFibGVkKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgY2FtQnJvd3NlQnV0dG9uSFRNTCBmcm9tICdjYW1Ccm93c2VCdXR0b24uaHRtbCdcblxuY2xhc3MgY2FtQnJvd3NlQnV0dG9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSAkc3RhdGU7XG4gIH1cblxuICBzd2l0Y2hCcm93c2UoKSB7XG4gICAgdGhpcy5zdGF0ZS5nbygnZXhwbG9yZU1haW4uYnJvd3NlU2VhcmNoJywge3ZpZDogd2luZG93LmFwcENvbmZpZy52aWR9KTtcbiAgfVxufVxuXG5jYW1Ccm93c2VCdXR0b25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xuXG5leHBvcnQgbGV0IGNhbUJyb3dzZUJ1dHRvbkNvbmZpZyA9IHtcbiAgYmluZGluZ3MgOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IGNhbUJyb3dzZUJ1dHRvbkNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBjYW1Ccm93c2VCdXR0b25IVE1MXG59XG4iLCIvKlxuICBBZGRzIHRhYnMgdG8gdGhlIHNpbXBsZSBzZWFyY2ggYmFyLlxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cbmltcG9ydCBjYW1UYWJzSFRNTCBmcm9tICcuL2NhbVRhYnMuaHRtbCdcblxuY2xhc3MgQ2FtVGFic0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgfVxuXG4gIGdldCBzZWFyY2hTY29wZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHdpbmRvdy5hcHBDb25maWcuc2VhcmNoU2NvcGVzTWFwKTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEluZGV4KCl7XG4gICAgbGV0IHNjb3BlcyA9IEFycmF5LmZyb20odGhpcy5zZWFyY2hTY29wZXMpO1xuICAgIHJldHVybiBzY29wZXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkVGFiKTtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRoaXMuc2VhcmNoU2NvcGVzW2luZGV4XTtcbiAgICB0aGlzLnNlbGVjdGVkU2NvcGUgPSB3aW5kb3cuYXBwQ29uZmlnLnNlYXJjaFNjb3Blc01hcFt0aGlzLnNlbGVjdGVkVGFiXVswXVsnc2NvcGUtaWQnXTtcbiAgfVxuXG59XG5cbi8vQ2FtVGFic0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJG1kQXV0b0NvbXBsZXRlQ3RybCddO1xuXG5leHBvcnQgbGV0IGNhbVRhYnNDb25maWcgPSB7XG4gIGJpbmRpbmdzOntcbiAgICBwYXJlbnRDdHJsOiAnPCcsXG4gICAgc2VsZWN0ZWRUYWI6ICc9JyxcbiAgICBzZWxlY3RlZFNjb3BlOiAnPSdcbiAgfSxcbiAgY29udHJvbGxlcjogQ2FtVGFic0NvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBjYW1UYWJzSFRNTFxufVxuIiwiLypcbiAgQ3JlYXRlcyBhIGhvdHNwb3QgaW4gdGhlIHJpZ2h0LWJvdHRvbSBjb3JuZXIuIFdoZW4gY2xpY2tlZCBhbiBYTUwgYW5kIFBOWCBidXR0b25cbiAgd2lsbCBhcHBlYXIgYmVuZWF0aCBldmVyeSByZWNvcmQuXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuaW1wb3J0IHBueFhtbEhUTUwgZnJvbSAnLi9wbnhYbWwuaHRtbCdcbmNsYXNzIFBueFhtbENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRyeSB7XG4gICAgICAgIHRoaXMucmVjb3JkaWQgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgdGhpcy5yZWNvcmRpZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgJG9uSW5pdCgpe1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncG54LXhtbC10cmlnZ2VyJykubGVuZ3RoID09IDApIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwbngteG1sLXRyaWdnZXInKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OjIwcHg7d2lkdGg6MjBweDt6LWluZGV4OjEwMDA7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi4wMycpO1xuICAgICAgZGl2Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2VsZi52aXNpYmxlID0gIXNlbGYudmlzaWJsZTtcblxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLnZpc2libGUgPyAnZmxleCcgOiAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBsZXQgcG54WG1sQ29uZmlnID0ge1xuICBiaW5kaW5ncyA6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogUG54WG1sQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IHBueFhtbEhUTUxcbn1cbiIsIi8qXG4gIENlbnRyYWwgUGFja2FnZSBMb2FkZXJcblxuICBEbyBOT1QgZWRpdCB0aGlzIGZpbGUuXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgc2VhcmNoQmFySFRNTCBmcm9tICcuLi9odG1sL3NlYXJjaEJhci5odG1sJ1xuXG4vL0NyZWF0ZSB0aGUgY2VudHJhbEN1c3RvbSBtb2R1bGU7XG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3ZpZXdDdXN0b20nLCBbXSlcbiAgICAgICAgICAgICAgICAgLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaEJhci9zZWFyY2gtYmFyLmh0bWwnLCBzZWFyY2hCYXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgfSk7XG5cbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XG5cbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcbi8vaW5qZWN0ZWRcbmNvbnNvbGUubG9nKCdMb2FkaW5nIGNvbXBvbmVudHMnKTtcbkNvbXBvbmVudHMuYWxsLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gfHwgW107XG4gICAgZWxlbWVudHMucHVzaChjb21wb25lbnQubmFtZSk7XG4gICAgYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gPSBlbGVtZW50cztcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGBcXHRcXHQke2NvbXBvbmVudC5uYW1lfWApO1xuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLnRvQ2FtZWxDYXNlKCksIGNvbXBvbmVudC5jb25maWcpO1xufSk7XG5cbi8vSW5qZWN0IHBsYWNlIGhvbGRlcnMgaW50byB0aGUgYWZ0ZXIgY29tcG9uZW50c1xuT2JqZWN0LmtleXMoYWZ0ZXJDb21wb25lbnRzKS5mb3JFYWNoKChjb21wb25lbnQsaSkgPT4ge1xuICBsZXQgc3ViQ29tcG9uZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnRdO1xuXG4gIGFwcC5jb21wb25lbnQoY29tcG9uZW50LnRvQ2FtZWxDYXNlKCksIHtcbiAgICBiaW5kaW5nczp7XG4gICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBzdWJDb21wb25lbnRzLm1hcChtID0+IGA8JHttfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke219PmApLmpvaW4oXCJcIilcbiAgfSk7XG59KTtcbiIsIi8qXG4gIEdlbmVyYWwgXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuU3RyaW5nLnByb3RvdHlwZS50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zcGxpdCgnLScpLm1hcCgoZCxpLGEpID0+ICBpID4gMCA/IGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEpIDpkKS5qb2luKCcnKTtcbn1cbiJdfQ==
