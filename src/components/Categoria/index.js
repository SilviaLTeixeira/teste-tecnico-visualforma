import './Categoria.css';

const Categoria = (props) => {
    return (  
        <div className={props.className}>
        <img id = "categoria" src={props.image} alt = "Categoria"/>
        </div>
    );
}
 
export default Categoria;