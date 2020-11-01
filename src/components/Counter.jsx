import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

  onCounterClick = () => {
    this.props.increaseCounter(this.props.counter);
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <button onClick={this.onCounterClick}>
          Увеличить
        </button>
        <p>
          Счетчик: {counter}
        </p>
      </div>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increaseCounter: PropTypes.func.isRequired,
}

export default Counter;
