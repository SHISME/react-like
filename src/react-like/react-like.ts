interface VirtualNode {
  tag:string;
  attrs?:{[key:string]:any};
  children:any[];
}

function createElement(tag:string, attrs:{[key:string]:any}, ...children:any[]) {
  return {
    tag,
    attrs,
    children,
  };
}
function render(vNode:VirtualNode|string, container:HTMLElement) {
  if (typeof vNode === 'string') {
    const textNode = document.createTextNode(vNode);
    return container.appendChild(textNode);
  }
  const node = document.createElement(vNode.tag);
  if (vNode.attrs) {
    Object.keys(vNode.attrs).forEach((key) => {
      setAttribute(node, key, vNode.attrs[key]);
    })
  }
  vNode.children.forEach((child) => {
    render(child, node);
  });
  return container.appendChild(node);
}

function setAttribute(dom:HTMLElement, name:string, value:any) {
  if (name === 'className') name = 'class';
  // 如果属性名是onXXX，则是一个事件监听方法
  if ( /on\w+/.test( name ) ) {
    name = name.toLowerCase();
    dom[name] = value || '';
    return;
  }
  if (name === 'style') {
    if (value && typeof value === 'object') {
      for (let key in value) {
        dom.style[key] = typeof value[key] === 'number' ? value[key] + 'px' : value[key];
      }
      return;
    }
    if (typeof value === 'string') {
      dom.style.cssText = value;
      return;
    }
  }
  if (name in dom) {
    dom[name] = value || '';
    return;
  }
  if (value) {
    dom.setAttribute(name, value);
  } else {
    dom.removeAttribute(name);
  }
}
const ReactLike = {
  createElement,
  render(vnode:VirtualNode, container:HTMLElement){
    container.innerHTML = '';
    return render(vnode, container);
  },
};

export {
  ReactLike
};