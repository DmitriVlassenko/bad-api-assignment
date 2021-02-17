import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <Link to={'/'} style={{ textDecoration: 'none' }}><h3 className={"logo"}>Logo</h3></Link>
            <ul className={"nav-links"}>
                <Link style={navStyle} to={'/gloves'}>
                    <li>Gloves</li>
                </Link>
                <Link style={navStyle} to={'/facemasks'}>
                    <li>Facemasks</li>
                </Link>
                <Link style={navStyle} to={'/beanies'}>
                    <li>Beanies</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
