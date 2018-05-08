const h = (...arguments) => {
  const element = arguments[0];
  const elementType = typeof arguments[0];
  let component;
  const children = arguments.splice(2);
  const props = arguments[1] || {};
  switch(elementType) {
    case 'object': props.children = children;component = element.default(props);break;
    case 'function': props.children = children;component = element(props);break;
    case 'string': component = parseComponent(element, props, children);break;
  }
  return component
}

const parseComponent = (element, attrs, children) => {
  let listAttrs = '';
  listAttrs = Object.keys(attrs).map(k => ` ${k}="${attrs[k]}"`).reduce((a, c) => a.concat(c), '');
  const content = children.reduce((a, c) => a.concat(c), '');
  return content ? `<${element}${listAttrs}>${content}</${element}>` : `<${element}${listAttrs} />`;
};

module.exports = h;
