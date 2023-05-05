export const SET_CATEGORİES = "set_categories"

export const setCategoryAction = (payload)=>{
    return {
        type:SET_CATEGORİES,
        payload
    }
}

const initialState = {
    categories :[]
}
export default function categoryReducers(state = initialState, action){
    switch (action.type) {
        case SET_CATEGORİES:
            
            return {
                categories:action.payload
            }
    
        default:
            return state;
    }
}