import { useState, useRef, useContext } from "react";

import List from "./components/list.jsx";
import Select from "./components/select.jsx";
import Table from "./components/table.jsx";

import ThemeContext from "./context/theme.js";
import ChangeTheme from "./components/change_theme.jsx";

const titles = ["ID", "Nome", "Idade"];
const clients = [
    { id: 1, name: "João", age: 25 },
    { id: 2, name: "Maria", age: 30 },
    { id: 3, name: "Pedro", age: 22 },
];

const App = () => {
    const baseTheme = useContext(ThemeContext);
    const [theme, setTheme] = useState(baseTheme);
    const [felinos, setFelinos] = useState(['Gato', 'Leão', 'Tigre']);
    const inFelino = useRef(null);
    function addFelino(e) {
        e.preventDefault();
        setFelinos([...felinos, inFelino.current.value]);
        inFelino.current.value = '';
    }
    return (
        <div>
            <ChangeTheme theme={theme} setTheme={setTheme} />

            <ThemeContext.Provider value={theme}>
                <h3>Felinos</h3>
                <form onSubmit={addFelino}>
                    <input type="text" ref={inFelino} placeholder="Digite o nome do felino" />
                    <button type="submit">Adicionar</button>
                </form>
                <List items={felinos} />
            </ThemeContext.Provider>

            <hr />

            <ThemeContext.Provider value={theme}>
                <h3>Seleção de Municípios</h3>
                <Select />
            </ThemeContext.Provider>

            <hr />

            <ThemeContext.Provider value={theme}>
                <Table titles={titles} data={clients} />
            </ThemeContext.Provider>
        </div>
    );
};

export default App;
