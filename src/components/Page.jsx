import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
  onBtnClick = (e) => {
    const year = +e.currentTarget.innerText;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.setYear(year);
  }

  render() {
    const { year, photos } = this.props;
    return (
      <div>
        <div>
          <button type="button" onClick={this.onBtnClick}>2020</button>
          <button type="button" onClick={this.onBtnClick}>2019</button>
          <button type="button" onClick={this.onBtnClick}>2018</button>
          <button type="button" onClick={this.onBtnClick}>2017</button>
          <button type="button" onClick={this.onBtnClick}>2016</button>
        </div>
        <p>
          У тебя
          {' '}
          {photos.length}
          {' '}
          фото за
          {' '}
          {year}
          {' '}
          год
        </p>
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
};

export default Page;
