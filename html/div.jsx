const h = require('../h');

const DoubleContent = props => <span>{props.children}</span>;

const Perro = props =>
  <div class={props.clase}>
    <DoubleContent>{props.content}</DoubleContent>
  </div>;

export default Perro;
