import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { GifList } from '../GifList'

class RightPane extends PureComponent {
  render() {
    const { favorites } = this.props;
    if (!favorites) {
      return null;
    }
    return (
      <Fragment>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>YOUR LIKED GIFS</h2>
          <GifList
            favorites={favorites}
          />
          {favorites.length >= 5 // TODO: fix when user can remove faves
            ? <Link to="/your-weirdness">CALCULATE MY WEIRDNESS SCORE</Link>
            : null
          }
        </div>
      </Fragment>
    )
  }
}

export default RightPane;
