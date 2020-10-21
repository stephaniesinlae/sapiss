import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer';
import Lista from './containers/Lista/Lista';
import Random from './containers/Random/Random';
import Notas from './containers/Notas/Notas';
import './App.css';
import SelecActividad from './containers/SelecActividad/SelecActividad';
import SRespiratorio from './containers/SRespiratorio/SRespiratorio';
import SDigestivo from './containers/SDigestivo/SDigestivo';
import SNervioso from './containers/SNervioso/SNervioso';
import SCirculatorio from './containers/SCirculatorio/SCirculatorio';
import { ContextProvider } from './ContextProvider';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/lista" component={Lista} />
          <Route exact path="/random" component={Random} />
          <Route exact path="/mostrarnota" component={Notas} />
          <Route exact path="/seleccionaractividad" component={SelecActividad} />
          <Route exact path="/sistemarespiratorio" component={SRespiratorio} />
          <Route exact path="/sistemadigestivo" component={SDigestivo} />
          <Route exact path="/sistemanervioso" component={SNervioso} />
          <Route exact path="/sistemacirculatorio" component={SCirculatorio} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
