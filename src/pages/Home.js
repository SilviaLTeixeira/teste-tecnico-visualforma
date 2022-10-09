import { NavBar } from '../components/NavBar';
import VidigueiraVila from '../assets/Vidigueira_Vila.png';
import Campo1 from '../assets/Campo1.png';
import Campo2 from '../assets/Campo2.png';
import Campo3 from '../assets/Campo3.png';
import Vidigueira from '../assets/Vidigueira.png';
import Castelo from '../assets/Castelo.png';
import SetaEsquerda from '../assets/Seta_Esquerda.png';
import SetaDireita from '../assets/Seta_Direita.png';
import './Home.css';
import Title from '../components/Title';
import SecondTitle from '../components/SecondTitle';
import Notices from '../components/Notices';
import Categoria from '../components/Categoria';
import CategoriaClara from '../assets/Categoria_Clara.png';
import CategoriaMedia from '../assets/Categoria_Media.png';
import CategoriaEscura from '../assets/Categoria_Escura.png';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <NavBar></NavBar>
    <img id = "vila" src={VidigueiraVila} alt="vila" />
    <div className='info-container'>
        <h1 className='bombeiros'>Apoio extraordinário à Associação Humanitária dos Bombeiros</h1>
        <h2>Saber Mais</h2>
    </div>
       <div className='seta'>
        <img id = "esquerda" src={SetaEsquerda} alt="seta_esquerda"/>
        <img id = "direita" src={SetaDireita} alt="seta_direita"/>
        </div>
    <div className='img-pt'>
        <img id = "campo1" src={Campo1} alt="campo1"/>
        <img id = "campo2" src={Campo2} alt="campo2"/>
        <img id = "campo3" src={Campo3} alt="campo3"/>
        <img id = "vidigueira" src={Vidigueira} alt="vidigueira"/>
        <img id = "castelo" src={Castelo} alt="castelo"/>
    </div>
    <Title
      title="Notícias"
     ></Title>
     <SecondTitle 
      secondtitle="Ver Todas"
      ></SecondTitle>
      <Notices
        noticetitle="Autarquia360 ao fresco 2020"
      ><Categoria 
        image= {CategoriaEscura}></Categoria><Categoria 
        image= {CategoriaEscura}></Categoria></Notices>
      <Footer></Footer>
    </>
  );
}

export default Home;
