import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faClock, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../styles/app.scss';


export default function Footer() {
    return (
        <footer>
            <div className='conditionsFooter'>
                <ul className='listFooter'>
                    <li><FontAwesomeIcon icon={faTruck} style={{color: "#8b635c",}} className='listItem'/></li>
                    <li><FontAwesomeIcon icon={faClock} style={{color: "#8b635c",}} className='listItem'/></li>
                    <li><FontAwesomeIcon icon={faEnvelope} style={{color: "#8b635c",}} className='listItem'/></li>
                </ul>
            </div>
            <div className='copyFooter'>
                <p className='textCopy'>&copy;2025</p>
                <p className='textCopy'>Virginia Álvarez</p>
            </div>
        </footer>
    )
}
