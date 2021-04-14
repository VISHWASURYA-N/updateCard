import types from "../types/types"

const documentData= 
     [
         {
        name:"TITLE",
        id:133243,
        src:"https://s3.ap-south-1.amazonaws.com/fms-assets/fms-documents/a2354423-7265-48bb-b931-e631f2f17c16.png"
      },
    {
        name:"REGISTRATION",
        id:22098948,
        src:"https://s3.ap-south-1.amazonaws.com/fms-assets/fms-documents/8173c2b2-7195-4a91-a0a1-7907c8e010fa.png"

    },
    {
        name:"INSURANCE",
    
        id:87978973,
        src:"https://s3.ap-south-1.amazonaws.com/fms-assets/fms-documents/dd6a52fc-bdf4-4fef-9275-fdc5240bfbff.jpg"
    },
    {
        name:"inspection",
        id:99089874,
        src:"https://s3.ap-south-1.amazonaws.com/fms-assets/fms-documents/dc56edb0-d261-4749-a142-cc65bf53efb2.png"
    }
]
function editReducer(state=documentData,action){ 
    switch(action.type){
    case types.edit_data:
          let newValue=[...state]
        const index=newValue.findIndex(i=>(
            i.id===action.id
        ))
        newValue[index]={name:action.name,id:action.id,src:action.image, date:action.date}
        console.log(action.id)
        
          return [...newValue]
            
        
        
        default:return(state)
    }
}
export default editReducer