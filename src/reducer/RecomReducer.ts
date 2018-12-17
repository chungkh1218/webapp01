import {IApp} from '../model'

import {IGetRecomAppAction} from '../actions/GetRecomAppAction'
import {GET_RECOM_APP} from '../actions/GetRecomAppAction'

export interface IGetRecomAppState{
    recomapplist:IApp[]
}

const initialState = {
    recomapplist:[]
}

export function GetRecomAppReducer (state:IGetRecomAppState = initialState, action:IGetRecomAppAction){
switch (action.type){
    case GET_RECOM_APP:
    return{
        recomapplist:action.apps
    }
}
return state
}