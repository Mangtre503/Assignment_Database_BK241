export const loginSuccess = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        data: data,
    }
}

export const logoutSuccess = () => {
    return{
        type: "LOGOUT",
    }
}

export const accountAction = (state = null, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return action.data;
        case "LOGOUT":
            return null;
        default:
            return state;
    }
}

export const openBackDrop = () => {
    return {
      type: 'OPENBACKDROP',
    }
  }
  
  export const closeBackDrop = () => {
    return {
      type: 'CLOSEBACKDROP',
    }
  }
  
  export const backdropAction = (state = false, action) => {
    switch (action.type) {
      case "OPENBACKDROP":
        return true;
        case "CLOSEBACKDROP":
          return false;
      default:
        return state;
    }
  }