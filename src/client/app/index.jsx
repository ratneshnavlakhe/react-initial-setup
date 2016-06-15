import React from 'react';
import {render} from 'react-dom';
import CssTransition from './CssTransition.jsx';

class App extends React.Component {
  render () {
    return (
      <p> Hello React this is a webpack! </p>
      <CssTransition />
    );
  }
}

render(<App/>, document.getElementById('app'));
