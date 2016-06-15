import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './csstransition.css';

class CssTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ['hello', 'world', 'click', 'me']};
  }

  handleAdd () {
    var newItems = this.state.items.concat([prompt('Enter some text')]);
    this.setState({ items: newItems });
  }

  handleRemove (i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    var style = {

    };
    var items = this.state.items.map(function (item, i) {
      return (
        <div key={item} className={styles.div} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      )
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd.bind(this)}>Add Item</button>
        <ReactCSSTransitionGroup transitionName={styles} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default CssTransition;
