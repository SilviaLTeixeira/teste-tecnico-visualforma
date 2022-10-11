import './Documents.css';
import {BsArrowRightShort} from 'react-icons/bs';

const Documents = (props) => {
    return ( 
        <div className={props.classNameDocuments}>
         <img id= "image_documents" src={props.ImageDocuments} alt="image_documents"/>
         <h2 className='title_documents'>{props.titleDocuments}</h2>
         <BsArrowRightShort className='arrow_documents'></BsArrowRightShort>
        </div>
     );
}
 
export default Documents;