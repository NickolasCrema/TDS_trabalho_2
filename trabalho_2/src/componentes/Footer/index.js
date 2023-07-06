import './Footer.css';
import {Twitter, Facebook, Instagram} from 'react-bootstrap-icons';

const Footer = () => {
    return(
            <div className='footer'>
                <div className='info-juridica'>
                    CNPJ 99.999.999/0001-99 © Todos os direitos reservados. 2023
                </div>
                <div className='links'>
                    <button className='texto'>
                        Quem somos
                    </button>
                    <button className='texto'>
                        Nossa missão
                    </button>
                    <button className='texto'>
                        Política de Privacidade
                    </button>
                    <button className='texto'>
                        Devoluções e trocas
                    </button>
                    <button className='texto'>
                        Pagamentos e fretes
                    </button>
                    <button className='rede-social'>
                        <Twitter />
                    </button >
                    <button className='rede-social'>
                        <Facebook />
                    </button>
                    <button className='rede-social'>
                        <Instagram />
                    </button>
                </div>
            </div>

    )
}

export default Footer