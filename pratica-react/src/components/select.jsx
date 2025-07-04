import { useState, useRef, useEffect, useContext } from 'react';
import ThemeContext from '../context/theme';

const Select = () => {
    const theme = useContext(ThemeContext);
    const [municipios, setMunicipios] = useState([]);
    const [uf, setUf] = useState('');
    const inUf = useRef(null);
    
    
    const addUf = (e) => {
        e.preventDefault();
        setUf(inUf.current.value);
    };
    
    
    useEffect(() => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            setMunicipios(json);
        })
    }, [uf]);
    return (
        <div className={`theme-${theme}`}>
            <h3>
                Seleção de Municípios
            </h3>
            <form onSubmit={addUf}>
                <label htmlFor="">UF: </label>
                <input ref={inUf} />
                <button>Buscar</button>
            </form>
            <select>
                {
                    municipios.map((m, index) => {
                        return <option>{m.nome}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select;