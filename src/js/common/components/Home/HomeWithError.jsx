import React, { PureComponent } from 'react';

import styles from './Home.css';

class HomeWithError extends PureComponent {
  render() {
    const { home } = this.props;
    const result = home && home.result ? home.result : null;

    if (result && result.size && result.size > 0) {
      return (
        <div className={styles.homeOutput} />
      );
    }
    return <div />;
  }
}

export default HomeWithError;
