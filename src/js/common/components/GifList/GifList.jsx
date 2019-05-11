import React, { PureComponent } from 'react';

import { Gif } from '../Gif';

class GifList extends PureComponent {
  render() {
    const { favorites } = this.props;
    return (
      <ul style={{ width: '100%' }}>
        {favorites.map((value) => {
          return (
            <li key={value.gif.id}>
              <Gif
                gif={value.gif}
                height={100}
                width={200}
              />
              <div style={{ alignSelf: 'center' }}>
                {value.score}/10
              </div>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default GifList;
