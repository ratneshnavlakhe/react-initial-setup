import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React this is a webpack! </p>
        <AwesomeComponent />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
