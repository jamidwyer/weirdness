import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
//  setFavorite,
  fetchGifIfNeeded,
} from '../../redux/actions/gifs'

import LazyLoading from '../../common/components/LazyLoading';
import { HomeWithError } from '../../common/components/Home';
import { ErrorBoundary } from '../../common/components/Utilities';
import { CustomSlider } from '../../common/components/CustomSlider';

// This is lazy loading example
const Gif = LazyLoading(() => import('../../common/components/Gif/Gif'));

class HomeView extends Component {
  state = {
    searchTerm: '',
    weirdness: 0,
  }

  componentDidMount() {
    const { searchTerm, weirdness } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchGifIfNeeded(searchTerm, weirdness));
  }

  onChange(weirdness) {
    this.setState({ weirdness: weirdness[0] })
    const { searchTerm } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchGifIfNeeded(searchTerm, weirdness[0]));
  }

  render() {
    const { favorites, gifs } = this.props;
    const { gif } = gifs.gifs;
    if (!gif || gifs.isFetching) {
      return null;
    }
    return (
      <Fragment>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
            <h2>YOUR RESULT</h2>
            <Gif gif={gif} />
            <CustomSlider
              onChange={this.onChange.bind(this)} // eslint-disable-line react/jsx-no-bind
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
        </div>
        <ErrorBoundary>
          <HomeWithError {...this.props} />
        </ErrorBoundary>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  gifs: state.gifs,
});

export default connect(mapStateToProps)(HomeView);
