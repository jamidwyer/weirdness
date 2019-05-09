import React, { PureComponent } from 'react';

import styles from './Home.css';

/**
 * Home
 * =============
 * @extends PureComponent
 */

class Home extends PureComponent {
  render() {
    const { gifs } = this.props;
    const result = gifs || null;
    if (result) {
      return (
        <div className={styles.homeOutput}>
          <pre>
            {JSON.stringify(result, undefined, 2)}
          </pre>
        </div>
      );
    }
    return <div />;
  }
}

export default Home;
