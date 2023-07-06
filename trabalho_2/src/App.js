
import CampoFormulario from "./componentes/CampoFormulario";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

function App() {
  return (
    <div>
      <Header/>
      <CampoFormulario label="Usuário" placeholder="Digite seu e-mail ou login"/>
      <CampoFormulario label="Usuário" placeholder="Digite seu e-mail ou login"/>
      <CampoFormulario label="Usuário" placeholder="Digite seu e-mail ou login"/>
      <Footer/>
    </div>
  );
}

export default App;
