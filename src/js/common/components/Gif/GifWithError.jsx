import React, { PureComponent } from 'react';

import styles from './Gif.css';

class GifWithError extends PureComponent {
  render() {
    const { home } = this.props;
    const result = home && home.result ? home.result : null;

    if (result && result.size && result.size > 0) {
      return (
        <div className={styles.homeOutput}>
          <h1>This should catch by ErrorBoundary</h1>
          {result.something_not_existed.get('something_not_existed')}
        </div>
      );
    }
    return <div />;
  }
}

export default GifWithError;
