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
import Events from '../components/Events';
import Domingo from '../assets/Domingo.png';
import Segunda from '../assets/Segunda.png';
import Dezembro from '../assets/dezembro.png';
import Calendar from '../assets/calendar.png';
import Hora from '../assets/Hora.png';
import Trilha from '../assets/trilha.png';
import ContainerFoto from '../assets/container_foto.png';
import SetaDireitaTrilha from '../assets/seta_direita_trilha.png';
import SetaEsquerdaTrilha from '../assets/seta_esquerda_trilha.png';
import Line from '../assets/Line.png';
import Documents from '../components/Documents';
import Ata from '../assets/Ata.png';
import Editais from '../assets/Edital.png';
import Formularios from '../assets/Formulario.png';
import Documentos from '../assets/Documento.png';
import Inscricoes from '../assets/Inscricao.png';
import Link from '../assets/Link.png';

function Home() {
  return (
    <>
    <NavBar></NavBar>
    <img id = "vila" src={VidigueiraVila} alt="vila" />
    <div className='info-container'>
        <h1 className='bombeiros'>Apoio extraordinário à Associação Humanitária dos Bombeiros</h1>
        <h2 id="saber_mais">Saber Mais</h2>
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
      className="noticias"
     ></Title>
     <SecondTitle 
      secondtitle="Ver Todas"
      classNameSecond="second_title1"
      ></SecondTitle>
      <Notices
        noticetitle="Autarquia360 ao fresco 2020"
        classNamePlantio= "plantio1"
        classNameNotices= "container_notices1"
        classNameData = "data1"
        classNameVer = "ver1"
      ><Categoria 
        image= {CategoriaEscura}></Categoria>
        <Categoria className="categoria_escura"
        image= {CategoriaEscura}></Categoria></Notices>
        <Notices 
         noticetitle="Exposição de fotografia Still(h)e(a)en"
         classNamePlantio= "plantio2"
         classNameNotices= "container_notices2"
         classNameData = "data2"
         classNameVer = "ver2"
         ><Categoria className="categoria_clara" image={CategoriaClara}></Categoria></Notices>
         <Notices 
         noticetitle="Regularizada a situação da interrupção do fornecimento ..."
         classNamePlantio= "plantio3"
         classNameNotices= "container_notices3"
         classNameData = "data3"
         classNameVer = "ver3"
         ><Categoria image={CategoriaMedia}></Categoria><Categoria className="categoria_media1" image={CategoriaMedia}></Categoria><Categoria className="categoria_media2" image={CategoriaMedia}></Categoria>
         </Notices>
         <Title 
         title="Eventos"
         className="eventos"
         ></Title>
         <SecondTitle 
          secondtitle="Ver Todos"
          classNameSecond="second_title2"
      ></SecondTitle>
         <Events 
          classNameContainer="container_events1"
          ImageEvents={Domingo}
          classNameContainer2="container_text"
          titulo="Categoria Categoria Cate"
          classNameColor="titulo_categoria1"
          ></Events>
          <Events 
          classNameContainer="container_events2"
          ImageEvents={Domingo}
          classNameContainer2="container_text2"
          titulo="Categoria"
          classNameColor="titulo_categoria2"
          ></Events>
           <Events 
          classNameContainer="container_events3"
          ImageEvents={Segunda}
          classNameContainer2="container_text3"
          titulo="Categoria"
          classNameColor="titulo_categoria3"
          ></Events>
           <Events 
          classNameContainer="container_events4"
          ImageEvents={Dezembro}
          classNameContainer2="container_text4"
          titulo="Categoria"
          classNameColor="titulo_categoria4"
          ></Events>
          <img id= "trilha" src={Trilha} alt= "trilha"/>
          <img id="container_foto" src={ContainerFoto} alt="container_foto"/>
          <div className='carrousel_trilha'>
            <img  id = "seta_esquerda" src={SetaEsquerdaTrilha} alt="seta_esquerda"/>
            <img  id = "linha" src={Line} alt="linha"/>
            <img  id = "seta_direita" src={SetaDireitaTrilha} alt="seta_direita"/>
          </div>
          <div className='container_texto'>
            <h1 className='text_atividades'>Atividades da semana</h1>
          </div>
          <div className='container_atividades'>
              <h2 id="aula1">Aula de dança</h2>
              <img id="calendario_1" src={Calendar} alt= "calendario"/>
              <h3 id= "one">Quinta-feira</h3>
              <img id="hora_1" src={Hora} alt="horario"/>
              <h3 id= "dezenove_1">19h30</h3>
              <hr id= "hr_1"></hr>
              <h2 id="conto">Hora do conto</h2>
              <img id= "calendario_2" src={Calendar} alt= "calendario"/>
              <h3 id="two">Quinta-feira</h3>
              <img id="hora_2" src={Hora} alt="horario"/>
              <h3 id= "dezenove_2">19h30</h3>
              <hr id="hr_2"></hr>
              <h2 id="aula2">Aula de dança</h2>
              <img id="calendario_3" src={Calendar} alt= "calendario"/>
              <h3 id="three">Quinta-feira</h3>
              <img id="hora_3" src={Hora} alt="horario"/>
              <h3 id= "dezenove_3">19h30</h3>
          </div>
          <Title 
         title="Documento Institucionais"
         className="documento_institucionais"
         ></Title>
         <Documents
         classNameDocuments="container_documents1"
         ImageDocuments={Ata}
         titleDocuments="atas"
         ></Documents>
         <Documents
         classNameDocuments="container_documents2"
         ImageDocuments={Editais}
         titleDocuments="editais"
         ></Documents>
          <Documents
         classNameDocuments="container_documents3"
         ImageDocuments={Formularios}
         titleDocuments="formulários"
         ></Documents>
         <Documents
         classNameDocuments="container_documents4"
         ImageDocuments={Documentos}
         titleDocuments="documentos"
         ></Documents>
         <Documents
         classNameDocuments="container_documents5"
         ImageDocuments={Inscricoes}
         titleDocuments="inscrições"
         ></Documents>
         <Title 
         title="Links Úteis"
         className="links_uteis"
         ></Title>
         <img id = "link_util_1" src={Link} alt="link_util"/>
         <img id = "link_util_2" src={Link} alt="link_util"/>
         <img id = "link_util_3" src={Link} alt="link_util"/>
         <img id = "link_util_4" src={Link} alt="link_util"/>
         <img id = "link_util_5" src={Link} alt="link_util"/>
      <Footer></Footer>
    </>
  );
}

export default Home;
