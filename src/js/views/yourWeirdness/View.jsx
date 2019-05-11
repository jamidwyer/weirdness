import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import LazyLoading from '../../common/components/LazyLoading'

// This is lazy loading example
const Gif = LazyLoading(() => import('../../common/components/Gif/Gif'))

class YourWeirdnessView extends PureComponent {
  static propTypes = {
    favorites: PropTypes.object.isRequired,
  }

  render() {
    const { favorites } = this.props;
    console.log(favorites);
    return (
      <Fragment>
        <h2>YOUR LIKED GIFS</h2>
        <ul>
          {favorites.map((value) => {
            return (
              <li>
                <Gif gif={value.id} />
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
