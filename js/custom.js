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

},{"./components/general/camBrowseButton":2,"./components/general/camTabs":3,"./utils":5}],2:[function(require,module,exports){
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
  var app;
  try {
    app = angular.module('viewCustom');
    console.log('Referencing "app"');
  } catch (e) {
    try {
      app = angular.module('viewCustom', []);
      console.log('creating "app"');
    } catch (f) {
      console.log('unable to create app');
      console.log(f);
    }
  }
} else {
  app = angular.module('viewCustom');
  console.log('Found a reference to app');
}

if (app) {
  (function () {
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
  })();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9jYW1icmlkZ2Utc2VhcmNoLWJhci10YWJzL2pzL2NvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9jYW1icmlkZ2Utc2VhcmNoLWJhci10YWJzL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1Ccm93c2VCdXR0b24uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9jYW1icmlkZ2Utc2VhcmNoLWJhci10YWJzL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1UYWJzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vY2FtYnJpZGdlLXNlYXJjaC1iYXItdGFicy9qcy9tYWluLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vY2FtYnJpZGdlLXNlYXJjaC1iYXItdGFicy9qcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxakJDQUE7Ozs7Ozs7Ozs7O0FBV0E7OztBQUZBOztBQUdBOztBQUNBOzs7O0lBRXFCLGU7Ozs7Ozs7d0JBRUY7QUFDZjs7Ozs7Ozs7Ozs7QUFZQSxhQUFPLENBQ0wsRUFBQyxNQUFNLFVBQVAsRUFBbUIsOEJBQW5CLEVBQTBDLFNBQVMsSUFBbkQsRUFBeUQsVUFBVSxJQUFuRSxFQURLLEVBRUwsRUFBQyxNQUFNLG1CQUFQLEVBQTRCLDhDQUE1QixFQUEyRCxTQUFTLElBQXBFLEVBQTBFLFVBQVUsSUFBcEYsRUFGSyxFQUdMLE1BSEssQ0FHRSxVQUFDLENBQUQ7QUFBQSxlQUFPLEVBQUUsT0FBVDtBQUFBLE9BSEYsQ0FBUDtBQUlEOzs7Ozs7a0JBbkJrQixlOzs7Ozs7Ozs7Ozs7Ozs7SUNiZix5QjtBQUNKLHFDQUFZLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBSyxLQUFMLEdBQWEsTUFBYjtBQUNEOzs7O21DQUVjO0FBQ2IsV0FBSyxLQUFMLENBQVcsRUFBWCxDQUFjLDBCQUFkLEVB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OztBQUVBLFVBQUksU0FBSixDQUFjLFVBQVUsV0FBVixFQUFkLEVBQXVDO0FBQ3JDLGtCQUFVO0FBQ1Isc0JBQVk7QUFESixTQUQyQjtBQUlyQyxrQkFBVSxjQUFjLEdBQWQsQ0FBa0I7QUFBQSx1QkFBUyxDQUFULCtCQUFvQyxDQUFwQztBQUFBLFNBQWxCLEVBQTRELElBQTVELENBQWlFLEVBQWpFO0FBSjJCLE9BQXZDO0FBTUQsS0FURDtBQXZCTztBQWlDUjs7Ozs7QUNyRUQ7Ozs7OztBQU1BLE9BQU8sU0FBUCxDQUFpQixXQUFqQixHQUErQixZQUFXO0FBQ3hDLFNBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFvQixVQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTDtBQUFBLFdBQVksSUFBSSxDQUFKLEdBQVEsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFZLFdBQVosS0FBNEIsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFwQyxHQUFnRCxDQUE1RDtBQUFBLEdBQXBCLEVBQW1GLElBQW5GLENBQXdGLEVBQXhGLENBQVA7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gIERlY2xhcmUgeW91ciBjb21wb25lbnRzIGhlcmUuXG5cbiAgUmV3cml0ZSB0aGlzIHdoZW4gaW1wb3J0cyBjYW4gYmUgZG9uZSBkeW5hbWljYWxseVxuICBodHRwOi8vMmFsaXR5LmNvbS8yMDE3LzAxL2ltcG9ydC1vcGVyYXRvci5odG1sXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuaW1wb3J0ICcuL3V0aWxzJ1xuXG4vKiBpbXBvcnQgeW91ciBjb21wb25lbnQgY29uZmlndXJhdGlvbiovXG5pbXBvcnQge2NhbVRhYnNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2NhbVRhYnMnXG5pbXBvcnQge2NhbUJyb3dzZUJ1dHRvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvY2FtQnJvd3NlQnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xuXG4gIHN0YXRpYyBnZXQgYWxsKCkge1xuICAgIC8qXG4gICAgICBuYW1lID0gdGhlIHN1YiBlbGVtZW50IGluIHRoZSBhZnRlciBlbGVtZW50XG4gICAgICBjb25maWcgPSB0aGUgaW1wb3J0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcbiAgICAgIGFwcGVuZFRvID0gVGhlIGNvbXBvbmVudCBzaG91bGQgYmUgY3JlYXRlZCBpbiB0aGlzIGFmdGVyIGNvbXBvbmVudC5cblxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XG4gICAgICByZXN1bHRzIGluOlxuICAgICAgICA8cHJtLWxvZ28tYWZ0ZXIgcGFyZW50Q3RybD0nJGN0cmwnPlxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxuICAgICAgICA8L3BybS1sb2dvLWFmdGVyPlxuICAgICovXG4gICAgcmV0dXJuIFtcbiAgICAgIHtuYW1lOiAnY2FtLXRhYnMnLCBjb25maWc6IGNhbVRhYnNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsfSxcbiAgICAgIHtuYW1lOiAnY2FtLWJyb3dzZS1idXR0b24nLCBjb25maWc6IGNhbUJyb3dzZUJ1dHRvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGx9XG4gICAgXS5maWx0ZXIoKG0pID0+IG0uZW5hYmxlZCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IGNhbUJyb3dzZUJ1dHRvbkhUTUwgZnJvbSAnY2FtQnJvd3NlQnV0dG9uLmh0bWwnXG5cbmNsYXNzIGNhbUJyb3dzZUJ1dHRvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gJHN0YXRlO1xuICB9XG5cbiAgc3dpdGNoQnJvd3NlKCkge1xuICAgIHRoaXMuc3RhdGUuZ28oJ2V4cGxvcmVNYWluLmJyb3dzZVNlYXJjaCcsIHt2aWQ6IHdpbmRvdy5hcHBDb25maWcudmlkfSk7XG4gIH1cbn1cblxuY2FtQnJvd3NlQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGUnXTtcblxuZXhwb3J0IGxldCBjYW1Ccm93c2VCdXR0b25Db25maWcgPSB7XG4gIGJpbmRpbmdzIDoge1xuICAgIHBhcmVudEN0cmw6ICc8JyxcbiAgICBpc0FkdmFuY2VkOiAnPSdcbiAgfSxcbiAgY29udHJvbGxlcjogY2FtQnJvd3NlQnV0dG9uQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGNhbUJyb3dzZUJ1dHRvbkhUTUxcbn1cbiIsIi8qXG4gIEFkZHMgdGFicyB0byB0aGUgc2ltcGxlIHNlYXJjaCBiYXIuXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuaW1wb3J0IGNhbVRhYnNIVE1MIGZyb20gJy4vY2FtVGFicy5odG1sJ1xuXG5jbGFzcyBDYW1UYWJzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICB9XG5cbiAgZ2V0IHNlYXJjaFNjb3BlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMod2luZG93LmFwcENvbmZpZy5zZWFyY2hTY29wZXNNYXApO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKXtcbiAgICBsZXQgc2NvcGVzID0gQXJyYXkuZnJvbSh0aGlzLnNlYXJjaFNjb3Blcyk7XG4gICAgcmV0dXJuIHNjb3Blcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRUYWIpO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGhpcy5zZWFyY2hTY29wZXNbaW5kZXhdO1xuICAgIHRoaXMuc2VsZWN0ZWRTY29wZSA9IHdpbmRvdy5hcHBDb25maWcuc2VhcmNoU2NvcGVzTWFwW3RoaXMuc2VsZWN0ZWRUYWJdWzBdWydzY29wZS1pZCddO1xuICB9XG5cbn1cblxuLy9DYW1UYWJzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbWRBdXRvQ29tcGxldGVDdHJsJ107XG5cbmV4cG9ydCBsZXQgY2FtVGFic0NvbmZpZyA9IHtcbiAgYmluZGluZ3M6e1xuICAgIHBhcmVudEN0cmw6ICc8JyxcbiAgICBzZWxlY3RlZFRhYjogJz0nLFxuICAgIHNlbGVjdGVkU2NvcGU6ICc9J1xuICB9LFxuICBjb250cm9sbGVyOiBDYW1UYWJzQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGNhbVRhYnNIVE1MXG59XG4iLCIvKlxuICBDZW50cmFsIFBhY2thZ2UgTG9hZGVyXG5cbiAgRG8gTk9UIGVkaXQgdGhpcyBmaWxlLlxuICBBbGwgY29tcG9uZW50cyBhcmUgZGVjbGFyZWQgaW4gXCJjb21wb25lbnRzLmpzXCJcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xuaW1wb3J0IHNlYXJjaEJhckhUTUwgZnJvbSAnLi4vaHRtbC9zZWFyY2hCYXIuaHRtbCdcblxuLy9DcmVhdGUgdGhlIHZpZXdDdXN0b20gbW9kdWxlO1xuY29uc29sZS5sb2coJ1N0YXJ0aW5nJyk7XG5cbmlmICh0eXBlb2YgYXBwID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIHZhciBhcHA7XG4gIHRyeSB7XG4gICAgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3ZpZXdDdXN0b20nKTtcbiAgICBjb25zb2xlLmxvZygnUmVmZXJlbmNpbmcgXCJhcHBcIicpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2aWV3Q3VzdG9tJywgW10pO1xuICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIFwiYXBwXCInKTtcbiAgICB9IGNhdGNoIChmKSB7XG4gICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIGNyZWF0ZSBhcHAnKVxuICAgICAgY29uc29sZS5sb2coZilcbiAgICB9XG4gIH1cbn0gZWxzZSB7XG4gIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2aWV3Q3VzdG9tJyk7XG4gIGNvbnNvbGUubG9nKCdGb3VuZCBhIHJlZmVyZW5jZSB0byBhcHAnKTtcbn1cblxuaWYgKGFwcCkge1xuICBhcHAucnVuKCgkdGVtcGxhdGVDYWNoZSkgPT4ge1xuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoQmFyL3NlYXJjaC1iYXIuaHRtbCcsIHNlYXJjaEJhckhUTUwpO1xuICB9KTtcblxuICAvL0NvbnRhaW5zIHRoZSBhZnRlciBjb21wb25lbnQgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSBpbmplY3RlZFxuICBsZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XG5cbiAgLy9DcmVhdGUgYWxsIGNvbXBvbmVudHMgYW5kIGRldGVybWluZSBpbiB3aGljaCBhZnRlciBjb21wb25lbnQgdGhlc2UgbmVlZCB0byBiZVxuICAvL2luamVjdGVkXG4gIGNvbnNvbGUubG9nKCdMb2FkaW5nIGNvbXBvbmVudHMnKTsgIFxuICBDb21wb25lbnRzLmFsbC5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcbiAgICAgIGVsZW1lbnRzLnB1c2goY29tcG9uZW50Lm5hbWUpO1xuICAgICAgYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gPSBlbGVtZW50cztcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgXFx0XFx0JHtjb21wb25lbnQubmFtZX1gKTtcbiAgICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLnRvQ2FtZWxDYXNlKCksIGNvbXBvbmVudC5jb25maWcpO1xuICB9KTtcblxuICAvL0luamVjdCBwbGFjZSBob2xkZXJzIGludG8gdGhlIGFmdGVyIGNvbXBvbmVudHNcbiAgT2JqZWN0LmtleXMoYWZ0ZXJDb21wb25lbnRzKS5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcbiAgICBsZXQgc3ViQ29tcG9uZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnRdO1xuXG4gICAgYXBwLmNvbXBvbmVudChjb21wb25lbnQudG9DYW1lbENhc2UoKSwge1xuICAgICAgYmluZGluZ3M6IHtcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6IHN1YkNvbXBvbmVudHMubWFwKG0gPT4gYDwke219IHBhcmVudC1jdHJsPVwiJGN0cmxcIj48LyR7bX0+YCkuam9pbihcIlwiKVxuICAgIH0pO1xuICB9KTtcbn1cbiIsIi8qXG4gIEdlbmVyYWwgXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuU3RyaW5nLnByb3RvdHlwZS50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zcGxpdCgnLScpLm1hcCgoZCxpLGEpID0+ICBpID4gMCA/IGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEpIDpkKS5qb2luKCcnKTtcbn1cbiJdfQ==
