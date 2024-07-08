import React from 'react';
import { CodeProvider } from './CodeContext';
import Header from './Components/Header';
import Home from './Components/Home';

const App = () => {
  return (
    <CodeProvider>
      <Header />
      <Home />
    </CodeProvider>
  );
};

export default App;
