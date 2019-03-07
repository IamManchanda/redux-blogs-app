import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Home from './views/pages/home/index.js';
import reducers from './store/reducers.js';

const store = createStore(reducers, applyMiddleware(thunk));

render(<Provider store={ store }>
    <Home />
  </Provider>, document.getElementById('root'));
