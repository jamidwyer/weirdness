import React, { PureComponent } from 'react';

class Gif extends PureComponent {
  render() {
    const { gif } = this.props;
    console.log(this.props);
    /*    if (!gif || !gif.images) {
      return null;
    } */
    const jpg = `${gif.thumbnailUrl}.jpg`;
    console.log(jpg);
    return (
      <div>
        <h3>{gif.title}</h3>
        <video width="320" height="240" autoPlay loop muted>
          <source src={gif.images.original_mp4.mp4} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <p>
          {gif.weirdness}
          /10
        </p>
      </div>
    );
  }
}

export default Gif;
