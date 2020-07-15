import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React, { ReactElement } from 'react';

import CodeOfConduct from '../screen/CodeOfConductContainer';
import Contact from '../screen/ContactContainer';
import Intro from '../screen/Intro';
import People from '../screen/PeopleContainer';
import Story from '../screen/StoryContainer';
import Vision from '../screen/VisionContainer';
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
          <Route exact={true} path="/vision"render={(): ReactElement => <Vision />} />
          <Route exact={true} path="/codeofconduct"render={(): ReactElement => <CodeOfConduct />} />
          <Link to="https://github.com/dooboolab/dooboo-ui"/>
          <Link to="https://github.com/dooboolab/hackatalk"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
