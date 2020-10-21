import React, { Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import firebaseConfig from './firebaseConfig';

ReactDOM.render(
  (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<div>Cargando...</div>}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  ),
  document.getElementById('root')
);