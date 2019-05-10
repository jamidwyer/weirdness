import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    const isHome = pathname === '/';
    const isYourWeirdness = pathname === '/your-weirdness';

    return (
      <header className={styles.globalHeader}>
        <ul>
          <li className={!isHome ? styles.active : ''}>
            {
              isHome
                ? 'Home' : <Link to="/">Home</Link>

            }
          </li>
          <li className={!isYourWeirdness ? styles.active : ''}>
            {
              isYourWeirdness
                ? 'Your Weirdness' : <Link to="/your-weirdness">Your Weirdness</Link>
            }
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
