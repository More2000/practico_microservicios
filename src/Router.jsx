import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Formulario from './formulario.jsx';
import App from './App.jsx';

function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* Otras rutas */}
        <Route path="/nueva-pagina">
          <NuevaPagina />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
