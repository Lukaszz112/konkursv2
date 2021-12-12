import react from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/header";
import Content from "./components/content"
import Main from './pages/main';
import Filtrowanie from "./pages/filtrowanie";
import PunktyOdbioru from "./pages/punktyOdbioru";
import ListaOdpadow from "./pages/listaOdpadow";
import Onas from "./pages/Onas";
import Recykling from "./pages/Recykling";

class App extends react.Component{
    render(){

      return(
        <Router>
          <Header />
          <Content>
            <Routes>
              <Route path="/"               element={<Main />} />
              <Route path="/filtrowanie"    element={<Filtrowanie />} />
              <Route path="/punkty_odbioru" element={<PunktyOdbioru />} />
              <Route path="/lista_odpadow"  element={<ListaOdpadow />} />
              <Route path="/o_nas"          element={<Onas />} />
              <Route path="/o_recyklingu"   element={<Recykling />} />
            </Routes>
           </Content>
        </Router>
      )
    }
}

export default App;
