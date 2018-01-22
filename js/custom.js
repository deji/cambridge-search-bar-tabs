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

var camBrowseButtonHTML = '<md-button aria-label="Browse"\n           class="switch-to-advanced zero-margin button-with-icon"\n           ng-click="$ctrl.switchBrowse()">\n           <span layout="row" layout-align="start center">\n             <span>Browse</span>\n           </span>\n</md-button>\n';

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

var searchBarHTML = '<div layout="column" layout-fill tabindex="-1" role="search" ng-class="{\'zero-padding\': $ctrl.showTabsAndScopesVal()}"><div class="search-wrapper dark-toolbar prm-top-bar-container main-header-row" div layout="row" ng-class="{\'facet-to-left\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xs && !$ctrl.mediaQueries.sm && !$ctrl.mediaQueries.md}"><div flex="0" flex-md="0" flex-lg="10" flex-xl="20" ng-class="{\'facet-to-left-spacer\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xl && !$ctrl.mediaQueries.md && !$ctrl.mediaQueries.sm && !$ctrl.mediaQueries.xs, \'flex-xl-25\': $ctrl.facetToLeft}"></div><div class="search-elements-wrapper" layout="column" flex flex-sm="85" flex-md="75" flex-lg="65" flex-xl="50" ng-class="(!$ctrl.advancedSearch ?\'simple-mode\' : \'advanced-mode\')  + \' \' + ($ctrl.mainSearchField ? \'has-input\' : \'\') + \' \' + ($ctrl.mediaQueries.lgPlus ? \'flex-lgPlus-55\' : \'\') + \' \' + ($ctrl.facetToLeft? \'facet-to-left-search-bar\' : \'\')"><div class="simple-search-wrapper layout-full-width" ng-hide="$ctrl.advancedSearch"><!-- add code here --><cam-tabs selected-scope="$ctrl.scopeField" selected-tab="$ctrl.selectedTab"></cam-tabs><!-- add code here --><form class="layout-full-height" layout="column" name="search-form" ng-submit="$ctrl.onSubmit()"><input type="submit" class="accessible-only" tabindex="-1" aria-hidden="true"/><div class="layout-full-width"><div class="search-element-inner layout-full-width"><div class="search-input"><prm-autocomplete class="search-input-container EXLPRMHeaderAutoComplete" md-input-id="searchBar" md-search-text="$ctrl.mainSearchField" md-search-text-change="$ctrl.autocompleteQuery($ctrl.mainSearchField)" md-selected-item="$ctrl.selectedItem" md-selected-item-change="$ctrl.onSelectItem()" md-item-text="item.display || $ctrl.typedQuery " md-min-length="2" md-autofocus="false" md-no-cache="true" md-items="item in $ctrl.autoCompleteItems" md-item-text="item" placeholder="{{$ctrl.placeHolderText}}" flex><md-item-template><div ng-if="item.tab"><span md-highlight-text="$ctrl.mainSearchField">{{$ctrl.mainSearchField}}</span><prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="magnifying-glass"></prm-icon><span class="suggestion-scope" translate="{{\'tabbedmenu.\'+item.tab+\'.label\'}}"></span></div><div ng-if="!item.tab" md-highlight-text="$ctrl.mainSearchField">{{item.shortDisplay}}</div></md-item-template></prm-autocomplete></div><div class="search-options" ng-class="{\'flex-sm-0 flex-0 hide-on-xs\':!$ctrl.showTabsAndScopesVal(), \'flex-sm-40 visible\':$ctrl.showTabsAndScopesVal()}"><prm-tabs-and-scopes-selector ng-if="$ctrl.showTabsAndScopesVal()" [(selected-scope)]="$ctrl.scopeField" [(selected-tab)]="$ctrl.selectedTab" ng-class="{\'is-displayed\':$ctrl.showTabsAndScopesVal()}" (update-find-in-db-event)="$ctrl.updateShowFindDBButton($event)"></prm-tabs-and-scopes-selector></div><div class="search-actions" ng-if="::(!$ctrl.scopesDialerConfiguration.display)" layout-align-xs="start center"><md-button class="zero-margin md-icon-button" ng-if="!$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()" hide-gt-xs><prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="tune"></prm-icon></md-button><md-button class="zero-margin button-confirm" aria-label="Search" (click)="$ctrl.onSubmit()"><prm-icon icon-type="{{::$ctrl.searchBoxIcons.searchTextBox.type}}" svg-icon-set="{{::$ctrl.searchBoxIcons.searchTextBox.iconSet}}" icon-definition="{{::$ctrl.searchBoxIcons.searchTextBox.icon}}"></prm-icon></md-button></div></div></div></form></div><div class="advanced-search-wrapper layout-full-width" layout="row" ng-if="$ctrl.advancedSearch" ng-cloak><prm-advanced-search tabindex="0" role="search" id="advanced-search" [(selected-scope)]="$ctrl.scopeField" [(selected-tab)]="$ctrl.selectedTab" [(show-tab-and-scopes)]="$ctrl.showTabsAndScopes" [(typed-query)]="$ctrl.mainSearchField" (update-find-in-db-event)="$ctrl.updateShowFindDBButton($event)"></prm-advanced-search><md-button class="switch-to-simple zero-margin md-icon-button" ng-if="$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()" hide-gt-xs><prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="close"></prm-icon></md-button></div><div ng-if="$ctrl.isShowFindDBButton" class="search-extras layout-full-width"><div layout="row"><span flex></span><md-button class="button-over-dark button-with-icon" (click)="::$ctrl.openFdbIframe();" translate-attr-title="mainmenu.label.moreoptions" aria-label="{{::(\'finddb.sb.title\' | translate)}}"><prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="database"></prm-icon><span translate="finddb.sb.title"></span></md-button></div></div></div><div class="search-switch-buttons" layout-sm="column" layout-align-sm="start stretch" hide-xs ng-class="{\'facet-to-left-advanced-search\': $ctrl.facetToLeft}"><md-button aria-label="{{\'nui.aria.searchBar.advancedLink\' | translate}}" class="switch-to-advanced zero-margin button-with-icon" ng-if="!$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()"><span layout="row" layout-align="start center"><span translate="label.advanced_search"></span></span></md-button><md-button class="switch-to-simple zero-margin button-with-icon" ng-if="$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()"><span layout="row" layout-align="start center"><span translate="label.simple_search"></span></span></md-button><!-- add code here --><cam-browse-button class="switch-to-advanced zero-margin button-with-icon"></cam-browse-button><!-- add code here --></div><div flex="0" flex-md="0" flex-sm="0" flex-lg="15" flex-xl="15" ng-class="{\'flex-lgPlus-10\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xs}"></div></div><div layout="row" ng-if="!$ctrl.advancedSearch && $ctrl.showSignIn"><div flex="0" flex-md="0" flex-lg="15" flex-xl="20"></div><prm-alert-bar flex [alert-object]="$ctrl.signInAlert"></prm-alert-bar><div class="padding-left-medium" flex="0" flex-md="25" flex-lg="10" flex-xl="15" hide-xs></div><div flex="0" flex-md="0" flex-sm="10" flex-lg="20" flex-xl="20"></div></div></div><div class="advanced-search-backdrop" ng-class="{\'visible\': $ctrl.advancedSearch}"></div><prm-search-bar-after parent-ctrl="$ctrl"></prm-search-bar-after>';

//Create the viewCustom module;

if (typeof app === "undefined") {
  var app = angular.module('viewCustom', []);
}
app.run(function ($templateCache) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9kaXNhYmxlZC1DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL2Rpc2FibGVkLUNFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL2dlbmVyYWwvY2FtQnJvd3NlQnV0dG9uLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vZGlzYWJsZWQtQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1UYWJzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vZGlzYWJsZWQtQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXIvcG54WG1sLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vZGlzYWJsZWQtQ0VOVFJBTF9QQUNLQUdFL2pzL21haW4uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9kaXNhYmxlZC1DRU5UUkFMX1BBQ0tBR0UvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cWpCQ0FBOzs7Ozs7Ozs7OztBQVdBOzs7QUFGQTs7QUFHQTs7QUFDQTs7QUFDQTs7OztJQUVxQixlOzs7Ozs7O3dCQUVGO0FBQ2Y7Ozs7Ozs7Ozs7O0FBWUEsYUFBTyxDQUNMLEVBQUMsTUFBTSxTQUFQLEVBQWtCLDRCQUFsQixFQUF3QyxTQUFTLElBQWpELEVBQXVELFVBQVUsa0NBQWpFLEVBREssRUFFTCxFQUFDLE1BQU0sVUFBUCxFQUFtQiw4QkFBbkIsRUFBMEMsU0FBUyxJQUFuRCxFQUF5RCxVQUFVLElBQW5FLEVBRkssRUFHTCxFQUFDLE1BQU0sbUJBQVAsRUFBNEIsOENBQTVCLEVBQTJELFNBQVMsSUFBcEUsRUFBMEUsVUFBVSxJQUFwRixFQUhLLEVBSUwsTUFKSyxDQUlFLFVBQUMsQ0FB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LE9BQU8sU0FBUCxDQUFpQixXQUFqQixHQUErQixZQUFXO0FBQ3hDLFNBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFvQixVQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTDtBQUFBLFdBQVksSUFBSSxDQUFKLEdBQVEsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFZLFdBQVosS0FBNEIsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFwQyxHQUFnRCxDQUE1RDtBQUFBLEdBQXBCLEVBQW1GLElBQW5GLENBQXdGLEVBQXhGLENBQVA7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gIERlY2xhcmUgeW91ciBjb21wb25lbnRzIGhlcmUuXG5cbiAgUmV3cml0ZSB0aGlzIHdoZW4gaW1wb3J0cyBjYW4gYmUgZG9uZSBkeW5hbWljYWxseVxuICBodHRwOi8vMmFsaXR5LmNvbS8yMDE3LzAxL2ltcG9ydC1vcGVyYXRvci5odG1sXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuaW1wb3J0ICcuL3V0aWxzJ1xuXG4vKiBpbXBvcnQgeW91ciBjb21wb25lbnQgY29uZmlndXJhdGlvbiovXG5pbXBvcnQge3BueFhtbENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyL3BueFhtbCdcbmltcG9ydCB7Y2FtVGFic0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvY2FtVGFicydcbmltcG9ydCB7Y2FtQnJvd3NlQnV0dG9uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1Ccm93c2VCdXR0b24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyQ29tcG9uZW50cyB7XG5cbiAgc3RhdGljIGdldCBhbGwoKSB7XG4gICAgLypcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcbiAgICAgIGNvbmZpZyA9IHRoZSBpbXBvcnRlZCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxuXG4gICAgICBleC4ge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ31cbiAgICAgIHJlc3VsdHMgaW46XG4gICAgICAgIDxwcm0tbG9nby1hZnRlciBwYXJlbnRDdHJsPSckY3RybCc+XG4gICAgICAgICAgPGhvbWUtaWNvbiBwYXJlbnRDdHJsPSckY3RybCc+PC9ob21lLWljb24+XG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XG4gICAgKi9cbiAgICByZXR1cm4gW1xuICAgICAge25hbWU6ICdwbngteG1sJywgY29uZmlnOiBwbnhYbWxDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWJyaWVmLXJlc3VsdC1jb250YWluZXItYWZ0ZXInfSxcbiAgICAgIHtuYW1lOiAnY2FtLXRhYnMnLCBjb25maWc6IGNhbVRhYnNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsfSxcbiAgICAgIHtuYW1lOiAnY2FtLWJyb3dzZS1idXR0b24nLCBjb25maWc6IGNhbUJyb3dzZUJ1dHRvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGx9XG4gICAgXS5maWx0ZXIoKG0pID0+IG0uZW5hYmxlZCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IGNhbUJyb3dzZUJ1dHRvbkhUTUwgZnJvbSAnY2FtQnJvd3NlQnV0dG9uLmh0bWwnXG5cbmNsYXNzIGNhbUJyb3dzZUJ1dHRvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gJHN0YXRlO1xuICB9XG5cbiAgc3dpdGNoQnJvd3NlKCkge1xuICAgIHRoaXMuc3RhdGUuZ28oJ2V4cGxvcmVNYWluLmJyb3dzZVNlYXJjaCcsIHt2aWQ6IHdpbmRvdy5hcHBDb25maWcudmlkfSk7XG4gIH1cbn1cblxuY2FtQnJvd3NlQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGUnXTtcblxuZXhwb3J0IGxldCBjYW1Ccm93c2VCdXR0b25Db25maWcgPSB7XG4gIGJpbmRpbmdzIDoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBjYW1Ccm93c2VCdXR0b25Db250cm9sbGVyLFxuICB0ZW1wbGF0ZTogY2FtQnJvd3NlQnV0dG9uSFRNTFxufVxuIiwiLypcbiAgQWRkcyB0YWJzIHRvIHRoZSBzaW1wbGUgc2VhcmNoIGJhci5cblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgY2FtVGFic0hUTUwgZnJvbSAnLi9jYW1UYWJzLmh0bWwnXG5cbmNsYXNzIENhbVRhYnNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIH1cblxuICBnZXQgc2VhcmNoU2NvcGVzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh3aW5kb3cuYXBwQ29uZmlnLnNlYXJjaFNjb3Blc01hcCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpe1xuICAgIGxldCBzY29wZXMgPSBBcnJheS5mcm9tKHRoaXMuc2VhcmNoU2NvcGVzKTtcbiAgICByZXR1cm4gc2NvcGVzLmluZGV4T2YodGhpcy5zZWxlY3RlZFRhYik7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0aGlzLnNlYXJjaFNjb3Blc1tpbmRleF07XG4gICAgdGhpcy5zZWxlY3RlZFNjb3BlID0gd2luZG93LmFwcENvbmZpZy5zZWFyY2hTY29wZXNNYXBbdGhpcy5zZWxlY3RlZFRhYl1bMF1bJ3Njb3BlLWlkJ107XG4gIH1cblxufVxuXG4vL0NhbVRhYnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtZEF1dG9Db21wbGV0ZUN0cmwnXTtcblxuZXhwb3J0IGxldCBjYW1UYWJzQ29uZmlnID0ge1xuICBiaW5kaW5nczp7XG4gICAgcGFyZW50Q3RybDogJzwnLFxuICAgIHNlbGVjdGVkVGFiOiAnPScsXG4gICAgc2VsZWN0ZWRTY29wZTogJz0nXG4gIH0sXG4gIGNvbnRyb2xsZXI6IENhbVRhYnNDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogY2FtVGFic0hUTUxcbn1cbiIsIi8qXG4gIENyZWF0ZXMgYSBob3RzcG90IGluIHRoZSByaWdodC1ib3R0b20gY29ybmVyLiBXaGVuIGNsaWNrZWQgYW4gWE1MIGFuZCBQTlggYnV0dG9uXG4gIHdpbGwgYXBwZWFyIGJlbmVhdGggZXZlcnkgcmVjb3JkLlxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cbmltcG9ydCBwbnhYbWxIVE1MIGZyb20gJy4vcG54WG1sLmh0bWwnXG5jbGFzcyBQbnhYbWxDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0cnkge1xuICAgICAgICB0aGlzLnJlY29yZGlkID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHRoaXMucmVjb3JkaWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gICRvbkluaXQoKXtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3BueC14bWwtdHJpZ2dlcicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncG54LXhtbC10cmlnZ2VyJyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpmaXhlZDtyaWdodDowO2JvdHRvbTowO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7ei1pbmRleDoxMDAwO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouMDMnKTtcbiAgICAgIGRpdi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XG5cbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbngteG1sJykpKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbGV0IHBueFhtbENvbmZpZyA9IHtcbiAgYmluZGluZ3MgOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFBueFhtbENvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBwbnhYbWxIVE1MXG59XG4iLCIvKlxuICBDZW50cmFsIFBhY2thZ2UgTG9hZGVyXG5cbiAgRG8gTk9UIGVkaXQgdGhpcyBmaWxlLlxuICBBbGwgY29tcG9uZW50cyBhcmUgZGVjbGFyZWQgaW4gXCJjb21wb25lbnRzLmpzXCJcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xuaW1wb3J0IHNlYXJjaEJhckhUTUwgZnJvbSAnLi4vaHRtbC9zZWFyY2hCYXIuaHRtbCdcblxuLy9DcmVhdGUgdGhlIHZpZXdDdXN0b20gbW9kdWxlO1xuaWYgKHR5cGVvZihhcHApID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmlld0N1c3RvbScsIFtdKVxufVxuYXBwLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcbiAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoQmFyL3NlYXJjaC1iYXIuaHRtbCcsIHNlYXJjaEJhckhUTUwpO1xuICAgIH0pO1xuXG4vL0NvbnRhaW5zIHRoZSBhZnRlciBjb21wb25lbnQgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSBpbmplY3RlZFxubGV0IGFmdGVyQ29tcG9uZW50cyA9IHt9O1xuXG4vL0NyZWF0ZSBhbGwgY29tcG9uZW50cyBhbmQgZGV0ZXJtaW5lIGluIHdoaWNoIGFmdGVyIGNvbXBvbmVudCB0aGVzZSBuZWVkIHRvIGJlXG4vL2luamVjdGVkXG5jb25zb2xlLmxvZygnTG9hZGluZyBjb21wb25lbnRzJyk7XG5Db21wb25lbnRzLmFsbC5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgaWYgKGNvbXBvbmVudC5hcHBlbmRUbykge1xuICAgIGxldCBlbGVtZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dIHx8IFtdO1xuICAgIGVsZW1lbnRzLnB1c2goY29tcG9uZW50Lm5hbWUpO1xuICAgIGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dID0gZWxlbWVudHM7XG4gIH1cblxuICBjb25zb2xlLmxvZyhgXFx0XFx0JHtjb21wb25lbnQubmFtZX1gKTtcbiAgYXBwLmNvbXBvbmVudChjb21wb25lbnQubmFtZS50b0NhbWVsQ2FzZSgpLCBjb21wb25lbnQuY29uZmlnKTtcbn0pO1xuXG4vL0luamVjdCBwbGFjZSBob2xkZXJzIGludG8gdGhlIGFmdGVyIGNvbXBvbmVudHNcbk9iamVjdC5rZXlzKGFmdGVyQ29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50LGkpID0+IHtcbiAgbGV0IHN1YkNvbXBvbmVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50XTtcblxuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC50b0NhbWVsQ2FzZSgpLCB7XG4gICAgYmluZGluZ3M6e1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogc3ViQ29tcG9uZW50cy5tYXAobSA9PiBgPCR7bX0gcGFyZW50LWN0cmw9XCIkY3RybFwiPjwvJHttfT5gKS5qb2luKFwiXCIpXG4gIH0pO1xufSk7XG4iLCIvKlxuICBHZW5lcmFsIFxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cblN0cmluZy5wcm90b3R5cGUudG9DYW1lbENhc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc3BsaXQoJy0nKS5tYXAoKGQsaSxhKSA9PiAgaSA+IDAgPyBkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZC5zbGljZSgxKSA6ZCkuam9pbignJyk7XG59XG4iXX0=
