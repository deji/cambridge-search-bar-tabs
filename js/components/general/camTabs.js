/*
  Adds tabs to the simple search bar.

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import camTabsHTML from './camTabs.html'

class CamTabsController {
  constructor(){
    let self = this;
  }

  get searchScopes() {
    return Object.keys(window.appConfig.searchScopesMap);
  }

  get selectedIndex(){
    let scopes = Array.from(this.searchScopes);
    return scopes.indexOf(this.selectedTab);
  }

  set selectedIndex(index) {
    this.selectedTab = this.searchScopes[index];
    this.selectedScope = window.appConfig.searchScopesMap[this.selectedTab][0]['scope-id'];
  }

}

//CamTabsController.$inject = ['$mdAutoCompleteCtrl'];

export let camTabsConfig = {
  bindings:{
    parentCtrl: '<',
    selectedTab: '=',
    selectedScope: '='
  },
  controller: CamTabsController,
  template: camTabsHTML
}
