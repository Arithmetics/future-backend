import React from 'react';
import './App.css';

import { PageContent, Box, Provider as BumbagProvider } from 'bumbag';

function App(): JSX.Element {
  return (
    <BumbagProvider>
      <Box>
        <PageContent>Here be my page</PageContent>
      </Box>
    </BumbagProvider>
  );
}

export default App;
