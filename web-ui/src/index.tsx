import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();


declare const module: { hot: { accept: () => void } };

if (process.env.NODE_ENV !== 'production') {
  if (module && module.hot && module.hot.accept) {
    module.hot.accept();
  }
}