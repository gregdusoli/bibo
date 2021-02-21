import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Bible from '../../pages/bible'
import Book from '../../components/Book'
import Chapter from '../../components/Book/Chapter'
import Settings from '../../pages/settings'
import Timeline from '../../components/Timeline'
import Study from '../../components/Study'
import Group from '../../components/Group'
import Notification from '../../components/Notification'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Timeline} />
    <Route path="/bible" component={Bible} />
    <Route path="/books/:abbrev" exact component={Book} />
    <Route path="/books/:version/:abbrev/:chapter" component={Chapter} />
    <Route path="/studies" component={Study} />
    <Route path="/groups" component={Group} />
    <Route path="/notifications" component={Notification} />
    <Route path="/settings" component={Settings} />
  </Switch>
)

export default Routes
