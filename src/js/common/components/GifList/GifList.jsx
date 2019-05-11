import React, { PureComponent } from 'react';

import { Gif } from '../Gif';

class GifList extends PureComponent {
  render() {
    const { favorites } = this.props;
    return (
      <ul>
        {favorites.map((value) => {
          return (
            <li key={value.id}>
              <Gif gif={value.gif} />
            </li>
          )
        })}
      </ul>
    );
  }
}

export default GifList;
