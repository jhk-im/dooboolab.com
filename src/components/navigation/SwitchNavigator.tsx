import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { ReactElement } from 'react';

import CodeOfConduct from '../screen/CodeOfConduct';
import Contact from '../screen/Contact';
import Intro from '../screen/Intro';
import People from '../screen/People';
import Story from '../screen/Story';
import Vision from '../screen/Vision';
import Work from '../screen/Work';

function SwitchNavigator(): ReactElement {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route exact={true} path="/" render={(): ReactElement => <Intro />} />
          <Route exact={true} path="/story"render={(): ReactElement => <Story />} />
          <Route exact={true} path="/people"render={(): ReactElement => <People />} />
          <Route exact={true} path="/work"render={(): ReactElement => <Work />} />
          <Route exact={true} path="/contact"render={(): ReactElement => <Contact />} />
          <Route exact={true} path="/vision"render={(): ReactElement => <Vision />} />
          <Route exact={true} path="/codeofconduct"render={(): ReactElement => <CodeOfConduct />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
