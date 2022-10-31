require('./index.css');

import ToolboxIcon from './assets/toolbox-icon.svg';

export default class VAR_TOOL_NAME {

  constructor({ data }){
    this.data = data;

    this.nodes = {
      wrapper: null,
    };

    this.CSS = {
      baseClass: 'VAR_TOOL_NAME-tool',
    };
  }

  static get toolbox() {
    return {
      title: 'VAR_TOOL_NAME',
      icon: ToolboxIcon,
    };
  }

  // static get pasteConfig() {}

  // renderSettings() {}

  render() {
    this.nodes.wrapper = document.createElement('div');
    this.nodes.wrapper.classList.add(this.CSS.baseClass);

    return this.nodes.wrapper;
  }

  save() {}
};