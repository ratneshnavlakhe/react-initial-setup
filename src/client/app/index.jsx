import React from 'react';
import {render} from 'react-dom';
import CssTransition from './csstransition.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React this is a webpack! </p>
        <CssTransition />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
