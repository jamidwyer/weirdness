import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import {
//  setFavorite,
  fetchGifIfNeeded,
} from '../../redux/actions/gifs'

import LazyLoading from '../../common/components/LazyLoading'
import { HomeWithError } from '../../common/components/Home'
import { ErrorBoundary } from '../../common/components/Utilities'

// This is lazy loading example
const Gif = LazyLoading(() => import('../../common/components/Gif/Gif'))

class HomeView extends Component {
  static propTypes = {
    gif: PropTypes.object.isRequired,
  }

  state = {
    weirdness: 0,
  }

  componentDidMount() {
    const { weirdness } = this.state;
    const { dispatch, searchTerm } = this.props;
    dispatch(fetchGifIfNeeded(searchTerm, weirdness));
  }

  render() {
    const { isFetching, favorites, gif } = this.props;
    if (!gif || isFetching) {
      return null;
    }
    return (
      <Fragment>
        <SplitterLayout
          secondaryInitialSize={200}
          secondaryMinSize={200}
        >
          <div>
            <SplitterLayout
              vertical
            >
              <div>
                <p>
                  Find out how weird you are by selecting the GIFs that
                  make you laugh. We&rsquo;ll show you the least weird ones to
                  start, but you can move the slider to make them weirder.
                </p>
                <p>
                When you find a GIF you like, press the Like button. Once
                you like 5 GIFs, we&rsquo;ll show you how weird you are.
                </p>
                Search term
                <br />
                <input />
                <button type="submit">SEARCH</button>
              </div>
              <div>
                <h2>YOUR RESULT</h2>
                <Gif gif={gif} />
              </div>
            </SplitterLayout>
          </div>
          <div>
            <h2>YOUR LIKED GIFS</h2>
            <ul>
              {favorites.length > 0 ? favorites.forEach((value) => {
                return (
                  <li key={value.id}>
                    <Gif gif={value} />
                  </li>
                )
              }) : null
            }
            </ul>

            <Link to="/your-weirdness">CALCULATE MY WEIRDNESS SCORE</Link>
          </div>
        </SplitterLayout>
        <ErrorBoundary>
          <HomeWithError {...this.props} />
        </ErrorBoundary>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  gif: state.gifs.gifs.gif,
  isFetching: state.gifs.isFetching,
});

export default connect(
  mapStateToProps,
)(HomeView);
