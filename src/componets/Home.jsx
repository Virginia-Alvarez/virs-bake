import { Link } from 'react-router-dom';
import '../styles/app.scss';

export default function Home() {
    return (
    <main className='mainHome'>
        <p className='p'>Home</p>
        <Link to='/'>patrás</Link>
    </main>
    )
}
