import React, { Component } from 'react';
import Table from "./Table"
import Waiter from "./Waiter"
import Bill from "./Bill"

import { Route, Switch } from 'react-router-dom';

class Page extends Component {
  state = {}
  render() {
    return (<div>
      <Switch>
        <Route path="/bill" component={Bill} />
        <Route path="/waiter" component={Waiter} />
        <Route path="/" exact component={Table} />
      </Switch>
    </div>);
  }
}

export default Page;