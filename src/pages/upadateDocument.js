import React ,{useEffect, useState}from 'react'
import CardDocuments from './card';
import {v4 as uuidv4} from "uuid"
import { useSelector } from 'react-redux';

const UpdateDocument = () => {
    const [documentData, setDocumentData] = useState([])
    const document = useSelector(state=>(state));
    useEffect(()=>{
        setDocumentData(document)

    },[document])
    
    console.log(documentData)
    return (
    
        <div className="row ">
            {  documentData.map(data=> {
                console.log(data);
                return (<CardDocuments key={data.id} data={data}/>)
            }
                
            )}
            </div>
        
      );
}
 
export default UpdateDocument;