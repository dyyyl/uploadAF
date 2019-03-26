import React, { Fragment } from 'react';

import GlobalStyle from '../shared/styles/GlobalStyle';

import Upload from './Upload';

import Card from './Components/Card';
import Main from './Components/Main';

const App = () => (
  <Fragment>
    <Main>
      <Card>
        <Upload />
      </Card>
    </Main>
    <GlobalStyle />
  </Fragment>
);

export default App;
