import './LoginRegisterBody.css';
import FormularioCadastro from '../FormularioCadastro';
import CampoFormulario from '../CampoFormulario';

const LoginRegisterBody = () => {
    return(
        <div className='login-register-body'>
            <div className='title'>
                Identificação
            </div>
            <div className='subtitle'>
                Faça login ou cadastre-se
            </div>
            <div className='bloco'>
                <FormularioCadastro label='Já possuo cadastro' buttonText='Login'> 
                    <CampoFormulario label='Usuário' placeholder='Digite seu usuário'/>
                    <CampoFormulario label='Senha' placeholder='Digite sua senha'/>
                </FormularioCadastro>
                <FormularioCadastro label='Não possuo cadastro' buttonText='Prosseguir'> 
                    <CampoFormulario label='E-mail' placeholder='Digite seu e-mail para prosseguir'/>
                </FormularioCadastro>
            </div>
        </div>
    )
}

export default LoginRegisterBody