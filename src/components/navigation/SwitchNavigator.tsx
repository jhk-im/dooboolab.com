import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { ReactElement } from 'react';

import Contact from '../screen/ContactContainer';
import Intro from '../screen/Intro';
import People from '../screen/PeopleContainer';
import Story from '../screen/StoryContainer';
import Work from '../screen/WorkContainer';

function SwitchNavigator(): ReactElement {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route exact={true} path="/intro" render={(): ReactElement => <Intro />} />
          <Route exact={true} path="/story"render={(): ReactElement => <Story />} />
          <Route exact={true} path="/people"render={(): ReactElement => <People />} />
          <Route exact={true} path="/work"render={(): ReactElement => <Work />} />
          <Route exact={true} path="/contact"render={(): ReactElement => <Contact />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
