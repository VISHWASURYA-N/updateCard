import React from 'react'
import CardDocuments from './card';
import {v4 as uuidv4} from "uuid"
import { useSelector } from 'react-redux';

const UpdateDocument = () => {
    const documentData = useSelector(state=>(state));
    console.log(documentData)
    return (
        <div className="row ">
            {documentData.map(data=>(
                <CardDocuments key={data.id} data={data}/>
            ))}

        </div>
      );
}
 
export default UpdateDocument;