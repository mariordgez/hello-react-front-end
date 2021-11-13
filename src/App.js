import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Greeting from './components/greeting';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
        <Route path="*" element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
