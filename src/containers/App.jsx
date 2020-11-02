import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../components/Page';
import User from '../components/User';
// eslint-disable-next-line import/no-duplicates
import { getPhotos } from '../actions/PageActions';
// eslint-disable-next-line import/no-duplicates

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const {
      user, page, getPhotosAction,
    } = this.props;
    return (
      <div className="row">
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          getPhotos={getPhotosAction}
        />
        <User name={user.name} />
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
  // диспатчим санку
  getPhotosAction: (year) => dispatch(getPhotos(year)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
