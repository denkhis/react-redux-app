import React, { Component } from 'react';

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

export default Page;
