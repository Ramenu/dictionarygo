import { Provider, useSelector } from 'react-redux';
import store from "./redux/store";
import { useState } from 'react';
import { Entry } from './components/entry';

export default function App() {
  return (
    <Provider store={store}>
      <Entry/>
    </Provider>
  );
}


