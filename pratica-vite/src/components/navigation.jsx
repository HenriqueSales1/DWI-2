import { NavLink } from 'react-router';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>&nbsp;
            <NavLink to="/clientes" className={({ isActive }) => isActive ? 'active' : ''}>Clientes</NavLink>&nbsp;
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>&nbsp;
        </nav>
    );
}

export default Navigation;