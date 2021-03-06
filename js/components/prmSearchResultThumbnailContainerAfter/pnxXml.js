/*
  Creates a hotspot in the right-bottom corner. When clicked an XML and PNX button
  will appear beneath every record.

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import pnxXmlHTML from './pnxXml.html'
class PnxXmlController {
  constructor(){
    try {
        this.recordid = this.parentCtrl.parentCtrl.item.pnx.control.recordid[0];
    } catch(e) {
      this.recordid = null;
    }
  }

  $onInit(){
    let self = this;
    if (document.querySelectorAll('pnx-xml-trigger').length == 0) {
      let div = document.createElement('pnx-xml-trigger');
      div.setAttribute('style', 'position:fixed;right:0;bottom:0;height:20px;width:20px;z-index:1000;background-color:black;opacity:.03');
      div.onclick = (event) => {
        self.visible = !self.visible;

        for (let element of Array.from(document.querySelectorAll('.pnx-xml'))) {
          element.style.display = self.visible ? 'flex' : 'none';
        }
      };
      document.body.appendChild(div);
    }
  }
}

export let pnxXmlConfig = {
  bindings : {
    parentCtrl: '<'
  },
  controller: PnxXmlController,
  template: pnxXmlHTML
}
