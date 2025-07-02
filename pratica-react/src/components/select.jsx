import { useState, useRef, useEffect } from 'react';

const Select = () => {
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
        <div>
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