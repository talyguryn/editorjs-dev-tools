require('./index.css');

import ToolboxIcon from './assets/toolbox-icon.svg';

export default class VAR_TOOL_NAME {

  constructor({ data }){
    this.data = data;

    this.nodes = {
      wrapper: null,
    };

    this.CSS = {};
  }

  static get toolbox() {
    return {
      title: 'VAR_TOOL_NAME',
      icon: ToolboxIcon,
    };
  }

  // static get pasteConfig() {}

  // renderSettings() {}

  render() {}

  save() {}
};