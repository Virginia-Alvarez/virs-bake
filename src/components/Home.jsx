import Nav from './Nav';
import {Link} from 'react-router-dom';

function Home() {
    return(
        <>
        <body>
            <header>
                <Nav/>
                <Link to='/'>Volver</Link>
            </header>
            <main>
                <section>
                    <h1>hola hola</h1>
                </section>
            </main>

        </body>
        </>
    )
}

export default Home;