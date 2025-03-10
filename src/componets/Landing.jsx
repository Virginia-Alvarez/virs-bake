import { Link } from 'react-router-dom';
import '../styles/app.scss';
import logo from '../images/logo.png'

export default function Landing() {
  return (
    <>
      <header className='headerLanding'>
        <img src={logo} alt="Logo de Virs bakes" className='logoImg'/>
      </header>
      <main className='mainLanding'>
        <div className='btnBox'>
          <h1 className='titleLanding'>Dulces momentos, sabores inolvidables</h1>
          <Link to='/home' className='btnLanding'>Endúlzate la vida</Link>
        </div>
        <p className='paragraphLanding'>Más dulce que tu crush!</p>
      </main>
    </>
  )
}
