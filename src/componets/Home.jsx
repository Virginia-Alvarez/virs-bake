import { Link } from "react-router-dom";
import "../styles/app.scss";
import Header from './Header';

export default function Home() {
    return (
        <>
            <Header/>
            <main className="mainHome">
                <p className="p">Home</p>
                <Link to="/">patrás</Link>
            </main>
        </>
);
}
