import camBrowseButtonHTML from 'camBrowseButton.html'

class camBrowseButtonController {
  constructor($state) {
    this.state = $state;
  }

  switchBrowse() {
    this.state.go('exploreMain.browseSearch', {vid: window.appConfig.vid});
  }
}

camBrowseButtonController.$inject = ['$state'];

export let camBrowseButtonConfig = {
  bindings : {
    parentCtrl: '<',
    isAdvanced: '='
  },
  controller: camBrowseButtonController,
  template: camBrowseButtonHTML
}
