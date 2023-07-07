import './LoginRegisterBody.css';
import FormularioCadastro from '../FormularioCadastro';
import CampoFormulario from '../CampoFormulario';
import { useState } from 'react';

const LoginRegisterBody = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return(
        <div className='login-register-body'>
            <div className='title'>
                Identificação
            </div>
            <div className='subtitle'>
                Faça login ou cadastre-se
            </div>
            <div className='bloco'>
                <FormularioCadastro label='Já possuo cadastro' buttonText='Login' valor={[user, password]} routePath={'/'}> 
                    <CampoFormulario 
                        label='Usuário' 
                        placeholder='Digite seu usuário' 
                        valor={user} 
                        changed={valor => setUser(valor)}
                    />
                    <CampoFormulario 
                        label='Senha' 
                        placeholder='Digite sua senha'  
                        valor={password} 
                        changed={valor => setPassword(valor)}
                    />
                </FormularioCadastro>
                <FormularioCadastro label='Não possuo cadastro' buttonText='Prosseguir' valor={email} routePath={'/Register'}> 
                    <CampoFormulario 
                        label='E-mail' 
                        placeholder='Digite seu e-mail para prosseguir' 
                        valor={email} 
                        changed={valor => setEmail(valor)}
                    />
                </FormularioCadastro>
            </div>
        </div>
    )
}

export default LoginRegisterBody