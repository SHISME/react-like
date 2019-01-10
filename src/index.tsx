import { ReactLike } from './react-like/react-like';
const element = <h1>Hello, world!</h1>;
ReactLike.render(
  element,
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactLike.render(
    element,
    document.getElementById( 'root' )
  );
}

// setInterval( tick, 1000 );