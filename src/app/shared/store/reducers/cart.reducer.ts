import { Action } from '@ngrx/store'
import { CartModel } from '../models/fb-cart.model'
import * as CartActions from '../actions/cart.actions'

let initialState: CartModel

export function cartReducer(state: any = initialState, action: CartActions.Actions) {
    switch(action.type) {
        case CartActions.SET_CART:
            state = action.data;
            return action.data
        case CartActions.ADD_ITEM_CART:
            return[action.data, ...state ]
        case CartActions.REMOVE_ITEM_CART:
            return state
        case CartActions.UPDATE_CART:
            return state
        default:
            return state
    }
}
