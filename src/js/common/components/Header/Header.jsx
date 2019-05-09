import React, { PureComponent } from 'react';

import styles from './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className={styles.globalHeader}>
        <h1>Weirdness Calculator</h1>
      </header>
    );
  }
}

export default Header;
