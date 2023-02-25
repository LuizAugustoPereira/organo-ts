import './CampoTexto.css'

interface CampoTextoProps {
    obrigatorio: boolean
    label: string
    placeholder: string
    valor: string
    aoAlterado: (valor: string) => void
}

const CampoTexto = ({ obrigatorio, label, placeholder, valor, aoAlterado }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto