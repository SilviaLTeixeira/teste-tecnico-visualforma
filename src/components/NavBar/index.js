import CamadaImg from "../../assets/Camada 2.png";
import InstagramLogo from "../../assets/instagram.png";
import SearchLogo from "../../assets/search.png";
import FacebookLogo from "../../assets/facebook.png";
import {AiOutlineMenu} from 'react-icons/ai';
import './NavBar.css';
export function NavBar() {
    return (
        <>
            <section>
                <nav className="top-nav">
                    <div className="social-media">
                        <img id="instagram" src={InstagramLogo} alt="instagram" />
                        <img id="facebook" src={FacebookLogo} alt="facebook" />
                    </div>
                    <div>
                        <img id="search" src={SearchLogo} alt="search" />
                    </div>
                </nav>
            </section>

            <section className= "bottom-section">
                <img src={CamadaImg} alt="camada" />
                <nav className="bottom-nav">
                    <a href="#">Munícipio</a>
                    <a href="#">Autarquia360</a>
                    <a href="#">Atividade Municipal</a>
                    <a href="#">Serviços Onlines</a>
                    <a href="#">Contactos</a>
                </nav>
            </section>

            <section>
                <AiOutlineMenu className="mobile" color="#246970"/>
            </section>
        </>
    )
}