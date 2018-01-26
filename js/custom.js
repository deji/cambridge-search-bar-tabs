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
      return [{ name: 'cam-tabs', config: _camTabs.camTabsConfig, enabled: true, appendTo: null }, { name: 'cam-browse-button', config: _camBrowseButton.camBrowseButtonConfig, enabled: true, appendTo: null }].filter(function (m) {
        return m.enabled;
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/camBrowseButton":2,"./components/general/camTabs":3,"./utils":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var camBrowseButtonHTML = '<md-button aria-label="Browse"\n           class="cam-button zero-margin button-with-icon"\n           ng-class="{\'switch-to-advanced\': $ctrl.isAdvanced, \'switch-to-advanced\': !$ctrl.isAdvanced}"\n           ng-click="$ctrl.switchBrowse()">\n           <span layout="row" layout-align="start center">\n             <span>Browse</span>\n           </span>\n</md-button>\n';

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
    parentCtrl: '<',
    isAdvanced: '='
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

var searchBarHTML = '<div layout="column" layout-fill tabindex="-1" role="search" ng-class="{\'zero-padding\': $ctrl.showTabsAndScopesVal()}">\n  <div class="search-wrapper dark-toolbar prm-top-bar-container main-header-row" div layout="row" ng-class="{\'facet-to-left\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xs && !$ctrl.mediaQueries.sm && !$ctrl.mediaQueries.md}">\n    <div flex="0" flex-md="0" flex-lg="10" flex-xl="20" ng-class="{\'facet-to-left-spacer\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xl && !$ctrl.mediaQueries.md && !$ctrl.mediaQueries.sm && !$ctrl.mediaQueries.xs, \'flex-xl-25\': $ctrl.facetToLeft}"></div>\n    <div class="search-elements-wrapper" layout="column" flex flex-sm="85" flex-md="75" flex-lg="65" flex-xl="50" ng-class="(!$ctrl.advancedSearch ?\'simple-mode\' : \'advanced-mode\')  + \' \' + ($ctrl.mainSearchField ? \'has-input\' : \'\') + \' \' + ($ctrl.mediaQueries.lgPlus ? \'flex-lgPlus-55\' : \'\') + \' \' + ($ctrl.facetToLeft? \'facet-to-left-search-bar\' : \'\')">\n      <div class="simple-search-wrapper layout-full-width" ng-hide="$ctrl.advancedSearch">\n        <!-- add code here -->\n        <cam-tabs selected-scope="$ctrl.scopeField" selected-tab="$ctrl.selectedTab"></cam-tabs>\n        <!-- add code here -->\n        <form class="layout-full-height" layout="column" name="search-form" ng-submit="$ctrl.onSubmit()"><input type="submit" class="accessible-only" tabindex="-1" aria-hidden="true" />\n          <div class="layout-full-width">\n            <div class="search-element-inner layout-full-width">\n              <div class="search-input">\n                <prm-autocomplete class="search-input-container EXLPRMHeaderAutoComplete" md-input-id="searchBar" md-search-text="$ctrl.mainSearchField" md-search-text-change="$ctrl.autocompleteQuery($ctrl.mainSearchField)" md-selected-item="$ctrl.selectedItem"\n                  md-selected-item-change="$ctrl.onSelectItem()" md-item-text="item.display || $ctrl.typedQuery " md-min-length="2" md-autofocus="false" md-no-cache="true" md-items="item in $ctrl.autoCompleteItems" md-item-text="item" placeholder="{{$ctrl.placeHolderText}}"\n                  flex>\n                  <md-item-template>\n                    <div ng-if="item.tab"><span md-highlight-text="$ctrl.mainSearchField">{{$ctrl.mainSearchField}}</span>\n                      <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="magnifying-glass"></prm-icon><span class="suggestion-scope" translate="{{\'tabbedmenu.\'+item.tab+\'.label\'}}"></span></div>\n                    <div ng-if="!item.tab" md-highlight-text="$ctrl.mainSearchField">{{item.shortDisplay}}</div>\n                  </md-item-template>\n                </prm-autocomplete>\n              </div>\n              <div class="search-options" ng-class="{\'flex-sm-0 flex-0 hide-on-xs\':!$ctrl.showTabsAndScopesVal(), \'flex-sm-40 visible\':$ctrl.showTabsAndScopesVal()}">\n                <prm-tabs-and-scopes-selector ng-if="$ctrl.showTabsAndScopesVal()" [(selected-scope)]="$ctrl.scopeField" [(selected-tab)]="$ctrl.selectedTab" ng-class="{\'is-displayed\':$ctrl.showTabsAndScopesVal()}" (update-find-in-db-event)="$ctrl.updateShowFindDBButton($event)"></prm-tabs-and-scopes-selector>\n              </div>\n              <div class="search-actions" ng-if="::(!$ctrl.scopesDialerConfiguration.display)" layout-align-xs="start center">\n                <md-button class="zero-margin md-icon-button" ng-if="!$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()" hide-gt-xs>\n                  <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="tune"></prm-icon>\n                </md-button>\n                <md-button class="zero-margin button-confirm" aria-label="Search" (click)="$ctrl.onSubmit()">\n                  <prm-icon icon-type="{{::$ctrl.searchBoxIcons.searchTextBox.type}}" svg-icon-set="{{::$ctrl.searchBoxIcons.searchTextBox.iconSet}}" icon-definition="{{::$ctrl.searchBoxIcons.searchTextBox.icon}}"></prm-icon>\n                </md-button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class="advanced-search-wrapper layout-full-width" layout="row" ng-if="$ctrl.advancedSearch" ng-cloak>\n        <prm-advanced-search tabindex="0" role="search" id="advanced-search" [(selected-scope)]="$ctrl.scopeField" [(selected-tab)]="$ctrl.selectedTab" [(show-tab-and-scopes)]="$ctrl.showTabsAndScopes" [(typed-query)]="$ctrl.mainSearchField" (update-find-in-db-event)="$ctrl.updateShowFindDBButton($event)"></prm-advanced-search>\n        <md-button class="switch-to-simple zero-margin md-icon-button" ng-if="$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()" hide-gt-xs>\n          <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="close"></prm-icon>\n        </md-button>\n      </div>\n      <div ng-if="$ctrl.isShowFindDBButton" class="search-extras layout-full-width">\n        <div layout="row"><span flex></span>\n          <md-button class="button-over-dark button-with-icon" (click)="::$ctrl.openFdbIframe();" translate-attr-title="mainmenu.label.moreoptions" aria-label="{{::(\'finddb.sb.title\' | translate)}}">\n            <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="database"></prm-icon><span translate="finddb.sb.title"></span></md-button>\n        </div>\n      </div>\n    </div>\n    <div class="search-switch-buttons" layout-sm="column" layout-align-sm="start stretch" hide-xs ng-class="{\'facet-to-left-advanced-search\': $ctrl.facetToLeft}">\n      <md-button aria-label="{{\'nui.aria.searchBar.advancedLink\' | translate}}" class="switch-to-advanced zero-margin button-with-icon" ng-if="!$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()"><span layout="row" layout-align="start center"><span translate="label.advanced_search"></span></span>\n      </md-button>\n      <md-button class="switch-to-simple zero-margin button-with-icon" ng-if="$ctrl.advancedSearch" ng-click="$ctrl.switchAdvancedSearch()"><span layout="row" layout-align="start center"><span translate="label.simple_search"></span></span>\n      </md-button>\n      <!-- add code here -->\n      <cam-browse-button is-advanced="$ctrl.advancedSearch" class="switch-to-advanced zero-margin button-with-icon"></cam-browse-button>\n      <!-- add code here -->\n    </div>\n    <div flex="0" flex-md="0" flex-sm="0" flex-lg="15" flex-xl="15" ng-class="{\'flex-lgPlus-10\': $ctrl.facetToLeft && !$ctrl.mediaQueries.xs}"></div>\n  </div>\n  <div layout="row" ng-if="!$ctrl.advancedSearch && $ctrl.showSignIn">\n    <div flex="0" flex-md="0" flex-lg="15" flex-xl="20"></div>\n    <prm-alert-bar flex [alert-object]="$ctrl.signInAlert"></prm-alert-bar>\n    <div class="padding-left-medium" flex="0" flex-md="25" flex-lg="10" flex-xl="15" hide-xs></div>\n    <div flex="0" flex-md="0" flex-sm="10" flex-lg="20" flex-xl="20"></div>\n  </div>\n</div>\n<div class="advanced-search-backdrop" ng-class="{\'visible\': $ctrl.advancedSearch}"></div>\n<prm-search-bar-after parent-ctrl="$ctrl"></prm-search-bar-after>\n';

//Create the viewCustom module;

console.log('Starting');

if (typeof app === "undefined") {
  try {
    app = angular.module('viewCustom');
    console.log('Referencing "app"');
  } catch (e) {
    try {
      app = angular.module('viewCustom', []);
      console.log('creating "app"');
    } catch (e) {
      console.log('unable to create app');
    }
  }
} else {
  app = angular.module('viewCustom');
  console.log('Found a reference to app');
}

if (app) {
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
}

},{"./components":1}]},{},[5]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5jYW1icmlkZ2UvcHJpbW8tZXhwbG9yZS1jYW0tc2VhcmNoLWJhci10YWJzL2pzL2NvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5jYW1icmlkZ2UvcHJpbW8tZXhwbG9yZS1jYW0tc2VhcmNoLWJhci10YWJzL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1Ccm93c2VCdXR0b24uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5jYW1icmlkZ2UvcHJpbW8tZXhwbG9yZS1jYW0tc2VhcmNoLWJhci10YWJzL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1UYWJzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20uY2FtYnJpZGdlL3ByaW1vLWV4cGxvcmUtY2FtLXNlYXJjaC1iYXItdGFicy9qcy91dGlscy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL3ByaW1vLWV4cGxvcmUtY2FtLXNlYXJjaC1iYXItdGFicy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7Ozs7Ozs7Ozs7QUFXQTs7O0FBRkE7O0FBR0E7O0FBQ0E7Ozs7SUFFcUIsZTs7Ozs7Ozt3QkFFRjtBQUNmOzs7Ozs7Ozs7OztBQVlBLGFBQU8sQ0FDTCxFQUFDLE1BQU0sVUFBUCxFQUFtQiw4QkFBbkIsRUFBMEMsU0FBUyxJQUFuRCxFQUF5RCxVQUFVLElBQW5FLEVBREssRUFFTCxFQUFDLE1BQU0sbUJBQVAsRUFBNEIsOENBQTVCLEVBQTJELFNBQVMsSUFBcEUsRUFBMEUsVUFBVSxJQUFwRixFQUZLLEVBR0wsTUFISyxDQUdFLFVBQUMsQ0FBRDtBQUFBLGVBQU8sRUFBRSxPQUFUO0FBQUEsT0FIRixDQUFQO0FBSUQ7Ozs7OztrQkFuQmtCLGU7Ozs7Ozs7Ozs7Ozs7OztJQ2JmLHlCO0FBQ0oscUNBQVksTUFBWixFQUFvQjtBQUFB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QWdCLFVBQVUsUUFBMUIsS0FBdUMsRUFBdEQ7QUFDQSxlQUFTLElBQVQsQ0FBYyxVQUFVLElBQXhCO0FBQ0Esc0JBQWdCLFVBQVUsUUFBMUIsSUFBc0MsUUFBdEM7QUFDRDs7QUFFRCxZQUFRLEdBQVIsVUFBbUIsVUFBVSxJQUE3QjtBQUNBLFFBQUksU0FBSixDQUFjLFVBQVUsSUFBVixDQUFlLFdBQWYsRUFBZCxFQUE0QyxVQUFVLE1BQXREO0FBQ0QsR0FURDs7QUFXQTtBQUNBLFNBQU8sSUFBUCxDQUFZLGVBQVosRUFBNkIsT0FBN0IsQ0FBcUMsVUFBQyxTQUFELEVBQVksQ0FBWixFQUFrQjtBQUNyRCxRQUFJLGdCQUFnQixnQkFBZ0IsU0FBaEIsQ0FBcEI7O0FBRUEsUUFBSSxTQUFKLENBQWMsVUFBVSxXQUFWLEVBQWQsRUFBdUM7QUFDckMsZ0JBQVU7QUFDUixvQkFBWTtBQURKLE9BRDJCO0FBSXJDLGdCQUFVLGNBQWMsR0FBZCxDQUFrQjtBQUFBLHFCQUFTLENBQVQsK0JBQW9DLENBQXBDO0FBQUEsT0FBbEIsRUFBNEQsSUFBNUQsQ0FBaUUsRUFBakU7QUFKMkIsS0FBdkM7QUFNRCxHQVREO0FBVUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAgRGVjbGFyZSB5b3VyIGNvbXBvbmVudHMgaGVyZS5cblxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XG4gIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTcvMDEvaW1wb3J0LW9wZXJhdG9yLmh0bWxcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgJy4vdXRpbHMnXG5cbi8qIGltcG9ydCB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uKi9cbmltcG9ydCB7Y2FtVGFic0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvY2FtVGFicydcbmltcG9ydCB7Y2FtQnJvd3NlQnV0dG9uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1Ccm93c2VCdXR0b24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyQ29tcG9uZW50cyB7XG5cbiAgc3RhdGljIGdldCBhbGwoKSB7XG4gICAgLypcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcbiAgICAgIGNvbmZpZyA9IHRoZSBpbXBvcnRlZCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxuXG4gICAgICBleC4ge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ31cbiAgICAgIHJlc3VsdHMgaW46XG4gICAgICAgIDxwcm0tbG9nby1hZnRlciBwYXJlbnRDdHJsPSckY3RybCc+XG4gICAgICAgICAgPGhvbWUtaWNvbiBwYXJlbnRDdHJsPSckY3RybCc+PC9ob21lLWljb24+XG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XG4gICAgKi9cbiAgICByZXR1cm4gW1xuICAgICAge25hbWU6ICdjYW0tdGFicycsIGNvbmZpZzogY2FtVGFic0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGx9LFxuICAgICAge25hbWU6ICdjYW0tYnJvd3NlLWJ1dHRvbicsIGNvbmZpZzogY2FtQnJvd3NlQnV0dG9uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogbnVsbH1cbiAgICBdLmZpbHRlcigobSkgPT4gbS5lbmFibGVkKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgY2FtQnJvd3NlQnV0dG9uSFRNTCBmcm9tICdjYW1Ccm93c2VCdXR0b24uaHRtbCdcblxuY2xhc3MgY2FtQnJvd3NlQnV0dG9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSAkc3RhdGU7XG4gIH1cblxuICBzd2l0Y2hCcm93c2UoKSB7XG4gICAgdGhpcy5zdGF0ZS5nbygnZXhwbG9yZU1haW4uYnJvd3NlU2VhcmNoJywge3ZpZDogd2luZG93LmFwcENvbmZpZy52aWR9KTtcbiAgfVxufVxuXG5jYW1Ccm93c2VCdXR0b25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZSddO1xuXG5leHBvcnQgbGV0IGNhbUJyb3dzZUJ1dHRvbkNvbmZpZyA9IHtcbiAgYmluZGluZ3MgOiB7XG4gICAgcGFyZW50Q3RybDogJzwnLFxuICAgIGlzQWR2YW5jZWQ6ICc9J1xuICB9LFxuICBjb250cm9sbGVyOiBjYW1Ccm93c2VCdXR0b25Db250cm9sbGVyLFxuICB0ZW1wbGF0ZTogY2FtQnJvd3NlQnV0dG9uSFRNTFxufVxuIiwiLypcbiAgQWRkcyB0YWJzIHRvIHRoZSBzaW1wbGUgc2VhcmNoIGJhci5cblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgY2FtVGFic0hUTUwgZnJvbSAnLi9jYW1UYWJzLmh0bWwnXG5cbmNsYXNzIENhbVRhYnNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gIH1cblxuICBnZXQgc2VhcmNoU2NvcGVzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh3aW5kb3cuYXBwQ29uZmlnLnNlYXJjaFNjb3Blc01hcCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpe1xuICAgIGxldCBzY29wZXMgPSBBcnJheS5mcm9tKHRoaXMuc2VhcmNoU2NvcGVzKTtcbiAgICByZXR1cm4gc2NvcGVzLmluZGV4T2YodGhpcy5zZWxlY3RlZFRhYik7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0aGlzLnNlYXJjaFNjb3Blc1tpbmRleF07XG4gICAgdGhpcy5zZWxlY3RlZFNjb3BlID0gd2luZG93LmFwcENvbmZpZy5zZWFyY2hTY29wZXNNYXBbdGhpcy5zZWxlY3RlZFRhYl1bMF1bJ3Njb3BlLWlkJ107XG4gIH1cblxufVxuXG4vL0NhbVRhYnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtZEF1dG9Db21wbGV0ZUN0cmwnXTtcblxuZXhwb3J0IGxldCBjYW1UYWJzQ29uZmlnID0ge1xuICBiaW5kaW5nczp7XG4gICAgcGFyZW50Q3RybDogJzwnLFxuICAgIHNlbGVjdGVkVGFiOiAnPScsXG4gICAgc2VsZWN0ZWRTY29wZTogJz0nXG4gIH0sXG4gIGNvbnRyb2xsZXI6IENhbVRhYnNDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogY2FtVGFic0hUTUxcbn1cbiIsIi8qXG4gIEdlbmVyYWwgXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuU3RyaW5nLnByb3RvdHlwZS50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zcGxpdCgnLScpLm1hcCgoZCxpLGEpID0+ICBpID4gMCA/IGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEpIDpkKS5qb2luKCcnKTtcbn1cbiIsIi8qXG4gIENlbnRyYWwgUGFja2FnZSBMb2FkZXJcblxuICBEbyBOT1QgZWRpdCB0aGlzIGZpbGUuXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgc2VhcmNoQmFySFRNTCBmcm9tICcuLi9odG1sL3NlYXJjaEJhci5odG1sJ1xuXG4vL0NyZWF0ZSB0aGUgdmlld0N1c3RvbSBtb2R1bGU7XG5jb25zb2xlLmxvZygnU3RhcnRpbmcnKTtcblxuaWYgKHR5cGVvZiBhcHAgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgdHJ5IHtcbiAgICBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmlld0N1c3RvbScpO1xuICAgIGNvbnNvbGUubG9nKCdSZWZlcmVuY2luZyBcImFwcFwiJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3ZpZXdDdXN0b20nLCBbXSk7XG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgXCJhcHBcIicpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd1bmFibGUgdG8gY3JlYXRlIGFwcCcpXG4gICAgfVxuICB9XG59IGVsc2Uge1xuICBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmlld0N1c3RvbScpO1xuICBjb25zb2xlLmxvZygnRm91bmQgYSByZWZlcmVuY2UgdG8gYXBwJyk7XG59XG5cbmlmIChhcHApIHtcbiAgYXBwLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaEJhci9zZWFyY2gtYmFyLmh0bWwnLCBzZWFyY2hCYXJIVE1MKTtcbiAgfSk7XG5cbiAgLy9Db250YWlucyB0aGUgYWZ0ZXIgY29tcG9uZW50IHNlbGVjdG9ycyB0aGF0IHdpbGwgYmUgaW5qZWN0ZWRcbiAgbGV0IGFmdGVyQ29tcG9uZW50cyA9IHt9O1xuXG4gIC8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcbiAgLy9pbmplY3RlZFxuICBjb25zb2xlLmxvZygnTG9hZGluZyBjb21wb25lbnRzJyk7ICBcbiAgQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgaWYgKGNvbXBvbmVudC5hcHBlbmRUbykge1xuICAgICAgbGV0IGVsZW1lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gfHwgW107XG4gICAgICBlbGVtZW50cy5wdXNoKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgIGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dID0gZWxlbWVudHM7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYFxcdFxcdCR7Y29tcG9uZW50Lm5hbWV9YCk7XG4gICAgYXBwLmNvbXBvbmVudChjb21wb25lbnQubmFtZS50b0NhbWVsQ2FzZSgpLCBjb21wb25lbnQuY29uZmlnKTtcbiAgfSk7XG5cbiAgLy9JbmplY3QgcGxhY2UgaG9sZGVycyBpbnRvIHRoZSBhZnRlciBjb21wb25lbnRzXG4gIE9iamVjdC5rZXlzKGFmdGVyQ29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XG4gICAgbGV0IHN1YkNvbXBvbmVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50XTtcblxuICAgIGFwcC5jb21wb25lbnQoY29tcG9uZW50LnRvQ2FtZWxDYXNlKCksIHtcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiBzdWJDb21wb25lbnRzLm1hcChtID0+IGA8JHttfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke219PmApLmpvaW4oXCJcIilcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=
