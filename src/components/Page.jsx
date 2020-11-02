import React, { Component } from 'react';

class Page extends Component {
  onBtnClick = (e) => {
    const year = +e.currentTarget.innerText;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getPhotos(year);
  }

  render() {
    const { year, photos, isFetching } = this.props;
    return (
      <div className="ib page">
        <div>
          <button className="btn" type="button" onClick={this.onBtnClick}>2020</button>
          <button className="btn" type="button" onClick={this.onBtnClick}>2019</button>
          <button className="btn" type="button" onClick={this.onBtnClick}>2018</button>
          <button className="btn" type="button" onClick={this.onBtnClick}>2017</button>
          <button className="btn" type="button" onClick={this.onBtnClick}>2016</button>
        </div>
        <h3>
          {' '}
          {year}
          {' '}
          год
        </h3>
        {isFetching ? <p>Загрузка...</p> : (
          <p>
            У тебя
            {' '}
            {photos.length}
            {' '}
            фото
          </p>
        )}
      </div>
    );
  }
}

export default Page;
