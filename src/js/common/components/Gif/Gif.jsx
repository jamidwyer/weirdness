import React, { PureComponent } from 'react';

class Gif extends PureComponent {
  render() {
    const { gif, height, width } = this.props;
    if (!gif || !gif.images) {
      return null;
    }
    // const jpg = `${gif.thumbnailUrl}.jpg`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>{gif.title}</h3>
        <video width={width} height={height} autoPlay loop muted>
          <source src={gif.images.original_mp4.mp4} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Gif;
