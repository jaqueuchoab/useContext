import React from 'react';
import Header from './Header.tsx';
import Content from './Header.tsx';
import { UserContextProvider } from './UserContext.tsx';

function App() {
  return (
    <UserContextProvider>
      <Header/>
      <Content/>
    </UserContextProvider>
  );
}

export default App;