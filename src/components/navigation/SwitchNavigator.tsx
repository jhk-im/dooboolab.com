import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React, { ReactElement } from 'react';

import CodeOfConduct from '../screen/CodeOfConduct';
import Intro from '../screen/Intro';
import Vision from '../screen/Vision';

function SwitchNavigator(): ReactElement {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route exact={true} path="/" render={(): ReactElement => <Intro />} />
          <Route exact={true} path="/vision"render={(): ReactElement => <Vision />} />
          <Route exact={true} path="/codeofconduct"render={(): ReactElement => <CodeOfConduct />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
