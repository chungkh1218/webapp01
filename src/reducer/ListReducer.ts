import {IApp}  from '../model'

// import {IListFreeAppAction } from '../actions/ListAction'
import {LIST_APP_FREE } from'../actions/ListAction'
import {SEARCH_APP} from'../actions/SearchAction'
// import{ISearchAppAction} from '../actions/SearchAction'


export interface IListAppState {
    applist:IApp[]
}

const initialState ={
    applist:[],
    searchedapp:''
}

export function ListAppReducer(state: IListAppState  = initialState, action: any) {
switch (action.type){

    case LIST_APP_FREE:
    // tslint:disable-next-line:no-console
    console.log(action.apps)
    return {
        applist:action.apps
    }
    ;

    case SEARCH_APP:
    return { applist: state.applist.filter(appitem =>
        appitem.name.toLocaleLowerCase().indexOf(action.searchedapps)>-1||
         appitem.summary.toLowerCase().indexOf(action.searchedapps)>-1)
       };
}
return state
}