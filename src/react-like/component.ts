class Component {
  private props:any;
  private state:any;
  public render:any;
  constructor(props:any) {
    this.state = {};
    this.props = props;
  }
  
  setState(new_state:any) {
    this.state = Object.assign(this.state, new_state);
  }
}

function createComponent(component:any, props:any) {
  if (component.prototype && component.prototype.render) {
    return new component(props);
  }
  const inst = new Component(props);
  inst.constructor = component;
  inst.render = function () {
    return this.constructor(props);
  };
  return inst;
}

function setComponentProps(component:any, props:any) {
  if ( !component.base ) {
    if ( component.componentWillMount ) component.componentWillMount();
  } else if ( component.componentWillReceiveProps ) {
    component.componentWillReceiveProps( props );
  }
  
  component.props = props;

}

export {
  Component,
};