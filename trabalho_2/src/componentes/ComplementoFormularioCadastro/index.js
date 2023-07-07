import './ComplementoFormularioCadastro.css'
import CampoCEP from "../CampoCEP"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import CampoTextoAutoFill from "../CampoTextoAutoFill"
import CampoTexto from "../CampoTexto"

const ComplementoFormularioCadastro = () => {
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUF] = useState('')

    const {state} = useLocation();
    const {email} = state;

    const setInfos = (endereco, bairro, cidade, uf) => {
        setEndereco(endereco)
        setBairro(bairro)
        setCidade(cidade)
        setUF(uf)
    }

    return(
        <div className="complemento-formulario-cadastro">

            <div className='block'>
                <div className='display-inline'>
                    <CampoTextoAutoFill label='E-mail' placeholder='Digite seu e-mail' valor={email}/>
                </div>
                <div className='display-inline'>
                    <CampoTexto label='Senha' placeholder='Digite sua senha' type='password'/>
                </div>
            </div>

            <div className='block'>
                <div className='display-inline'>
                    <CampoCEP label='CEP' placeholder='Digite seu CEP' change={setInfos}/>

                </div>
                <div className='display-inline'>
                    <CampoTextoAutoFill label='Logradouro' placeholder='Digite seu logradouro' valor={endereco}/>
                </div>
            </div>

            <div className='block'>
                <div className='display-inline'>
                    <CampoTexto label='Número' placeholder='Digite o número de sua residência' type='text'/>
                </div>
                <div className='display-inline'>
                    <CampoTextoAutoFill label='Bairro' placeholder='Digite seu bairro' valor={bairro}/>
                </div>
            </div>

            <div className='block'>
                <div className='display-inline'>
                    <CampoTextoAutoFill label='Cidade' placeholder='Digite sua Cidade' valor={cidade}/>
                </div>
                <div className='display-inline'>
                    <CampoTextoAutoFill label='Estado' placeholder='Digite seu estado' valor={uf}/>
                </div>
            </div>

            <div className='block'>
                <button>
                    Registrar
                </button>
            </div>

        </div>
    )
}

export default ComplementoFormularioCadastro