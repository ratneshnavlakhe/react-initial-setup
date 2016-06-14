import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React this is a webpack!</p>;
  }
}

render(<App/>, document.getElementById('app'));
