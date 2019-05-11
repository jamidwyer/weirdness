import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { GifList } from '../../common/components/GifList';

class YourWeirdnessView extends PureComponent {
  render() {
    const { favorites } = this.props;
    const total = favorites.reduce((cnt, o) => { return cnt + o.score; }, 0);
    const average = total / favorites.length;

    return (
      <Fragment>
        <h2>
          You scored
          {' '}
          {Math.round(average)}
          {' '}
          out of 10 on the weirdness scale!
        </h2>
        <h3>The GIFs you liked</h3>
        <GifList
          favorites={favorites}
        />
        <Link to="/">Start Over</Link>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

export default connect(
  mapStateToProps,
)(YourWeirdnessView);
