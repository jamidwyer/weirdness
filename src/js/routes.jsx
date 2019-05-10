import React from 'react'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import LazyLoading from 'common/components/LazyLoading'

import styles from '../style/index.css'

// Lazy load component
const HomeRouteHandler = LazyLoading(() => import('views/home'));
const YourWeirdnessRouteHandler = LazyLoading(() => import('views/yourWeirdness'))

const Header = LazyLoading(() => import('common/components/Header/Header'))

// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => <Header {...props} />)

module.exports = (
  <div className={styles.container}>
    <HeaderWithRouter />
    <hr />
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={HomeRouteHandler} />
        <Route path="/your-weirdness" component={YourWeirdnessRouteHandler} />
        <Route path="*" component={HomeRouteHandler} />
      </Switch>
    </div>
  </div>
)
