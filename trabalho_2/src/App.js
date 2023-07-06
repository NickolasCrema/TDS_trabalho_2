
import CampoFormulario from "./componentes/CampoFormulario";
import Footer from "./componentes/Footer";
import FormularioCadastro from "./componentes/FormularioCadastro";
import Header from "./componentes/Header";

function App() {
  return (
    <div>
      <Header/>
      <FormularioCadastro buttonText='Login' label='Já possuo cadastro'>
        <CampoFormulario label="Usuário" placeholder="Digite seu e-mail ou login"/>
        <CampoFormulario label="Usuário" placeholder="Digite seu e-mail ou login"/>
      </FormularioCadastro>
      <FormularioCadastro buttonText='Cadastro' label='Ainda não possuo cadastro'>
        <CampoFormulario label="E-mail" placeholder="Digite seu e-mail para efetuar cadastro"/>
      </FormularioCadastro>
      <Footer/>
    </div>
  );
}

export default App;
