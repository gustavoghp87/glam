import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART_FROM_DETAIL,
    ADD_TO_CART_FROM_CART_PAGE,
    SUBTRACT_CART_ITEM_FROM_DETAIL,
    SUBTRACT_CART_ITEM_FROM_CART_PAGE,
    GET_CART_ITEMS_USER,
    REMOVE_CART_ITEM_FROM_DETAIL,
    REMOVE_CART_ITEM_FROM_CART_PAGE,
    ON_SUCCESS_BUY_USER,
    ADD_ENVIO
} from '../_actions/types';


export default function (state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, loginSucces: action.payload }
        case AUTH_USER:
            return { ...state, userData: action.payload }
        case LOGOUT_USER:
            return { ...state }
        case ADD_TO_CART_FROM_DETAIL:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: {
                    ...state.userData,
                    cart: action.payload
                }
            }
        case ADD_TO_CART_FROM_CART_PAGE:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: {
                    ...state.userData,
                    cart: action.payload
                }
            }
        case ADD_ENVIO:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: {
                    ...state.userData,
                    cart: action.payload
                }
            }
        case SUBTRACT_CART_ITEM_FROM_DETAIL:
            return {
                ...state, userData: {
                    ...state.userData,
                    cart: action.payload
                }
            }
        case SUBTRACT_CART_ITEM_FROM_CART_PAGE:
            return {
                ...state,

                userData: {
                    ...state.userData,
                    cart: action.payload
                }
            }
        case GET_CART_ITEMS_USER:
            return {
                ...state, cartDetail: action.payload
            }
        case REMOVE_CART_ITEM_FROM_DETAIL:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                }
            }
        case REMOVE_CART_ITEM_FROM_CART_PAGE:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                }
            }
        case ON_SUCCESS_BUY_USER:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                },
                cartDetail: action.payload.cartDetail
            }

        default:
            return state;
    }
}