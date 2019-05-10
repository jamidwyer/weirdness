import React, { PureComponent } from 'react';

class YourWeirdnessWithError extends PureComponent {
  render() {
    const { gifs } = this.props;
    const result = gifs || null;

    if (result && result.size && result.size > 0) {
      return (
        <div />
      );
    }
    return <div />;
  }
}

export default YourWeirdnessWithError;
