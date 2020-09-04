import React from 'react';
import './App.css';

import { PageContent, Box, Provider as BumbagProvider } from 'bumbag';

function App(): JSX.Element {
  return (
    <BumbagProvider>
      <Box>
        <PageContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
          bibendum at varius vel. Volutpat sed cras ornare arcu dui. Faucibus
          scelerisque eleifend donec pretium vulputate sapien nec.
        </PageContent>
      </Box>
    </BumbagProvider>
  );
}

export default App;
