import {
    LOGIN_FAILURE,
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../action/Auth';

const auth = (
    state  = {
        token: null,
        isAuthenticated: false,
        isRequesting: false,
        errorState: false,
        errorMsg : null,
    },
    action
) => {
    switch (action.type) {
        case LOGOUT_SUCCESS:
            return Object.assign({},state, {
                token : null,
                isAuthenticated: false,
                isRequesting: false,
            });
        case LOGIN_REQUESTING:
            return Object.assign({},state, {
                isRequesting:true,
                errorState: false,
                errorMsg : null
            })
        case LOGIN_SUCCESS :
            console.log('login success -------------------------- ok ok ', action.token);
            return Object.assign({},state, {
                token : action.token,
                isAuthenticated: true,
                isRequesting: true
            })
        case LOGIN_FAILURE:
            return Object.assign({},state, {
                isAuthenticated : false,
                isRequesting : false,
                errorState: state.errorState,
                errorMsg: state.errorMsg 
            })
        default :
            return state
    }
}

export default auth;