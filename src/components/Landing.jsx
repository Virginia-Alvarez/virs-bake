import '/src/styles/App.css'
import '/src/styles/components/landing.css'
import {Link} from 'react-router-dom';

function Landing() {
    return(
        <>
            <main>
                <div>
                    <h1>Vir bakes your life</h1>
                    <p>pequeño parrafo introductorio que enganche a darle al boton</p>
                </div>
                <div>
                    <Link to='Home'className='button'>Get started</Link>   
                </div>
            </main>
        </>
    )
}
export default Landing;