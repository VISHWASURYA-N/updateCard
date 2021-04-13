// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
// const Edit = ({data}) => {
//     const {id,setDisplay,src,name}=data
//     const history=useHistory(); 
//     const [image,setImage]=useState(src)  
//     // console.log(image,id,setDisplay,src,name)
//     const dispatch=useDispatch()
// //     function changeImage(e){
// //     setImage(e.target.value)
// //     // dispatch({type:"CHANGE_IMAGE" ,id:id,image:image, name:name,id:id}) 
// // }
//     return (
//         <div className=" m-auto center">
//             <div className="text-right mr-2" onClick={()=>{history.push("/")}}></div>
//             <label htmlFor="edit"><span style={{display:'flex',alignItems:"center",justifyContent:"center",fontSize:"200px"}}><i class="fas fa-cloud-upload-alt"></i></span></label>
//             <input style={{visibility:"hidden"}} value={image} type="file" id="edit" onChange={changeImage}/>
//         </div>
//       );
// }
 
// export default Edit;
