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
  vNode.children.forEach((child) => {
    render(child, node);
  });
  return container.appendChild(node);
}

function setAttribute(dom:HTMLElement) {

}

const ReactLike = {
  createElement
};

export {
  ReactLike
};