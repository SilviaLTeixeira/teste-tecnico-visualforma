import React from 'react';
import './Footer.css';
import Contatos from "../../assets/Contatos.png";
import Mensagem1 from '../../assets/Mensagem1.png';
import Mensagem2 from '../../assets/Mensagem2.png';
import Mensagem3 from '../../assets/Mensagem3.png';
import Mapa from "../../assets/Mapa.png";
import Politica from '../../assets/politica.png';
import Compartilhar from '../../assets/compartilhar.png';
import Direitos from '../../assets/Direitos.png';
import Privacidade from '../../assets/Privacidade.png';
import LogoFooter from '../../assets/logo_footer.png';
import LogoW3 from '../../assets/Foreground.png';
import {BsArrowRightShort} from 'react-icons/bs';


const Footer = () => {
    return ( 
        <footer>
             <div className="container-footer">
             <img id= "mapa" src= {Mapa} alt= "Mapa"/>
                <div className="contacts">
                <img id = "contatos" src= {Contatos} alt= "Contatos"/>
                </div>
                <hr></hr>
                <h3 id = "municipio_h3">MUNICÍPIO</h3>
                <h3 id = "autarquia_h3">AUTARQUIA360</h3>
                <h3 id = "atividade_h3">ATIVIDADE MUNICIPAL</h3>
                <h3 id = "servicos_h3">SERVIÇOS ON-LINE</h3>
                <h3 id = "contactos_h3">CONTACTOS</h3>
                <h3 id = "contate_h3">CONTACTE-NOS</h3>
                <h3 id = "subs_h3">SUBSCREVA A NOSSA NEWSLETTER</h3>
                <img id = "mensagem_1" src= {Mensagem1} alt= "Mensagem1"/>
                <img id = "mensagem_2" src= {Mensagem2} alt= "Mensagem2"/>
                <img id = "mensagem_3" src= {Mensagem3} alt= "Mensagem3"/>
                <h3 className='email'>E-mail</h3>
                <BsArrowRightShort className='arrow_footer'></BsArrowRightShort>
                <img id = "politica" src= {Politica} alt= "politica"/>
                <img id = "compartilhar" src= {Compartilhar} alt= "compartilhar"/>
                <hr></hr>
                <img id = "direitos" src= {Direitos} alt= "direitos"/>
                <img id = "privacidade" src= {Privacidade} alt= "privacidade"/>
                <img id = "logo_footer" src= {LogoFooter} alt= "logo_footer"/>
                <img id = "logo_w3" src= {LogoW3} alt= "logo_w3"/>
             </div>
        </footer>
      );
}
 
export default Footer;