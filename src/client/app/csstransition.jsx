import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CssTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikeCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Likes: <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}> Like Me!</button></div>
      </div>
    )
  }
}

export default CssTransition;
