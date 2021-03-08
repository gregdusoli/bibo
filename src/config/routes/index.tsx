import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Bible from '../../pages/bible'
import Book from '../../components/modules/Book'
import Chapter from '../../components/modules/Book/Chapter'
import Settings from '../../pages/settings'
import Timeline from '../../components/modules/Timeline'
import Study from '../../components/modules/Study'
import Group from '../../components/modules/Group'
import Notification from '../../components/modules/Notification'

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
