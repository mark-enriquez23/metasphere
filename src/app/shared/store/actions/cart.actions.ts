import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { CartModel } from '../models/fb-cart.model'

export const SET_CART = '[CART] Set'
export const ADD_ITEM_CART = '[CART] Add'
export const REMOVE_ITEM_CART = '[CART] Add'
export const UPDATE_CART = '[CART] Update'

export class SetCart implements Action {
    readonly type = SET_CART

    constructor(public data: CartModel)  {
    }
}

export class AddItemCart implements Action {
    readonly type = ADD_ITEM_CART
    constructor(public data: CartModel)  {
    }
}


export class RemoveItemCart implements Action {
  readonly type = REMOVE_ITEM_CART
  constructor(public data: CartModel)  {
  }
}

export class UpdateCart implements Action {
    readonly type = UPDATE_CART
    constructor(public data: CartModel)  {
    }
}

export type Actions = SetCart | AddItemCart | RemoveItemCart | UpdateCart
