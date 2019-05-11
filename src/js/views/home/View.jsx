import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchGifIfNeeded,
} from '../../redux/actions/gifs'
import {
  setFavorite,
} from '../../redux/actions/favorites'

import { CustomSlider } from '../../common/components/CustomSlider';
import { RightPane } from '../../common/components/RightPane';
import { Gif } from '../../common/components/Gif';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

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

  handleLike() {
    const { gifs } = this.props;
    const { gif } = gifs;
    const { weirdness } = this.state;
    const { dispatch } = this.props;
    dispatch(setFavorite(gif, weirdness));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { weirdness } = this.state;
    const searchTerm = this.input.value;
    this.setState({ searchTerm })
    const { dispatch } = this.props;
    dispatch(fetchGifIfNeeded(searchTerm, weirdness));
  }

  render() {
    const { favorites, gifs } = this.props;
    const { gif } = gifs;
    if (!gif || gifs.isFetching) {
      return null;
    }

    /* eslint-disable no-return-assign */
    return (
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
          <form
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="searchTerm">
              Search Term:
              <input name="searchTerm" type="text" id="searchTerm" ref={(input) => this.input = input} />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <h2>YOUR RESULT</h2>
          <Gif gif={gif} />

          <button
            onClick={this.handleLike}
            type="button"
            style={{ width: 100, height: 50 }}
          >
            <span role="img" aria-label="thumbs-up">👍</span>
          </button>

          <CustomSlider
            onChange={this.onChange.bind(this)} // eslint-disable-line react/jsx-no-bind
          />

        </div>
        <RightPane
          favorites={favorites}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  gifs: state.gifs,
});

export default connect(mapStateToProps)(HomeView);
