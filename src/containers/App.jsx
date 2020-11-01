import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../components/Page';
import User from '../components/User';
import Counter from '../components/Counter';
// eslint-disable-next-line import/no-duplicates
import { setYear } from '../actions/PageActions';
// eslint-disable-next-line import/no-duplicates
import { increaseCounter } from '../actions/PageActions';

import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const {
      user, page, setYearAction, counter, increaseCounterAction,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYearAction} />
        <Counter counter={counter.counter} increaseCounter={increaseCounterAction} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  page: state.page,
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  setYearAction: (year) => dispatch(setYear(year)),
  increaseCounterAction: (counter) => dispatch(increaseCounter(counter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
