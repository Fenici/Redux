
const user =(state={},action) =>{
    switch(action.type){
        case "CHANGE_USER_NAME":
        return {...state, userName:action.userName}
        default:
        return state
    }
}

export default user;