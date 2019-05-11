import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import LazyLoading from '../../common/components/LazyLoading'

const Gif = LazyLoading(() => import('../../common/components/Gif/Gif'))

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
          {average}
          {' '}
out of 10 on the weirdness scale!
        </h2>
        <h3>The GIFs you liked</h3>
        <ul>
          {favorites.map((value) => {
            return (
              <li key={value.id}>
                <Gif gif={value} />
              </li>
            )
          })}
        </ul>
        <Link to="/">Start Over</Link>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
})

export default connect(
  mapStateToProps,
)(YourWeirdnessView)
