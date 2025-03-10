import logo from '../images/logo.png';
import '../styles/app.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header className="headerHome">
            <img src={logo} alt="Logo de Virs bakes" className="logoImg" />
            <div className='rightSection'>
                <form className="searchBar">
                    <input type="text" placeholder='buscar'/>
                    <button type='submit'>
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <nav className="navIcons">
                    <button className="iconButton" aria-label="Perfil de usuario">
                        <FontAwesomeIcon icon={faUser} className="iconUser" tabIndex="0" />
                    </button>
                    <button className="iconButton" aria-label="Carrito de compras">
                        <FontAwesomeIcon icon={faCartShopping} className="iconCart" tabIndex="0" />
                    </button>
                </nav>
            </div>
        </header>
    );
}