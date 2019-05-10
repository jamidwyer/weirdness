import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import LazyLoading from '../../common/components/LazyLoading'
import { YourWeirdnessWithError } from '../../common/components/YourWeirdness'
import { ErrorBoundary } from '../../common/components/Utilities'

// This is lazy loading example
const Gif = LazyLoading(() => import('../../common/components/Gif/Gif'))

class YourWeirdnessView extends PureComponent {
  static propTypes = {
    gifs: PropTypes.object.isRequired,
  }

  render() {
    const { gifs } = this.props;
    return (
      <Fragment>
        <h2>YOUR LIKED GIFS</h2>
        <ul>
          {gifs.map((value) => {
            return (
              <li>
                <Gif gif={value.id} />
              </li>
            )
          })}
        </ul>
        <Link to="/">Start Over</Link>
        <ErrorBoundary>
          <YourWeirdnessWithError {...this.props} />
        </ErrorBoundary>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  gifs: state.gifs,
})

export default connect(
  mapStateToProps,
)(YourWeirdnessView)
