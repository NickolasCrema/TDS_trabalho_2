import './CampoCEP.css'

const CampoCEP = (props) => {
    
    const checkCEP = (event) => {
        const cep = event.target.value.replace(/\D/g, '');
        if(cep.length >=8){
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {console.log(data)
            props.change(data.logradouro, data.bairro, data.localidade, data.uf)
            })
        }

    }

    return (
        <div className='campo-formulario'>
            <label>
                {props.label}
            </label>

            <input placeholder={props.placeholder} onBlur={checkCEP}>
            </input>
        </div>
    )
}

export default CampoCEP