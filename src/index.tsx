import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './header/header';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  
  <QueryClientProvider client={client}>
    <Header/>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
