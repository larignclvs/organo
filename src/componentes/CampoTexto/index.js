import './CampoTexto.css'
const CampoTexto = (props) => {
    //let valor = ''


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div> //aqui ele quer uma variavel js
    )
}
export default CampoTexto;
//problema de escopo de variáveis que vazam
