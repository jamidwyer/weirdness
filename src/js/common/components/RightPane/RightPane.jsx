import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';

import LazyLoading from '../LazyLoading';

const Gif = LazyLoading(() => import('../Gif/Gif'));

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
          <ul>
            {favorites.map((value) => {
              return (
                <li key={value.id}>
                  <Gif gif={value.gif} />
                </li>
              )
            })}
          </ul>
          <Link to="/your-weirdness">CALCULATE MY WEIRDNESS SCORE</Link>
        </div>
      </Fragment>
    )
  }
}

export default RightPane;
