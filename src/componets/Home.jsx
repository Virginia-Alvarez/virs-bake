import "../styles/app.scss";
import Header from './Header';
import Footer from './Footer';
import PreviewCarrousel from "./PreviewCarrousel";


export default function Home() {
    return (
        <>
            <Header/>
            <main className="mainHome">
                <PreviewCarrousel/>
            </main>
            <Footer/>
        </>
);
}
