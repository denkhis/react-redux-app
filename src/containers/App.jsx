import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Page } from '../components/Page';
import { User } from '../components/User';
import { Counter } from '../components/Counter';
import { setYear} from '../actions/PageActions';
import { increaseCounter} from '../actions/PageActions';

import './App.css';

class App extends Component {
  render() {
    const { user, page, counter, setYearAction, increaseCounterAction } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYearAction}/>
        <Counter counter={counter} increaseCounter={increaseCounterAction}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  console.log(store);
  return {
    user: store.user,
    page: store.page,
    counter: store.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setYearAction: (year) => dispatch(setYear(year)),
    increaseCounterAction: (counter) => dispatch(increaseCounter(counter)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
