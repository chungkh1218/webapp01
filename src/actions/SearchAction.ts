

import {Dispatch} from 'redux';
// import {IApp} from '../model'

export const SEARCH_APP = "SEARCH_APP";
export type SEARCH_APP = typeof SEARCH_APP

export interface ISearchAppAction{
    type :SEARCH_APP;
    searchedapps:string
}

export function SearchFreeAppAction(searchedapps:string):ISearchAppAction{
    return{
        searchedapps,
        type:SEARCH_APP
    }
}


export function UpdateSearchAction (newsearch :string ){
    return (dispatch:Dispatch<ISearchAppAction>) =>
{   dispatch(SearchFreeAppAction(newsearch.toLowerCase()))
    // tslint:disable-next-line:no-console
    console.log(newsearch)
    
        // const lowersearch = newsearch.toLowerCase()

        // const result = this.props.applist.name.fliter(appitem => appitem.name.toLowerCase().indexOf(lowersearch)>1 ||
        // appitem.summary.toLowerCase().indexOf(lowersearch)>1)  


        // tslint:disable-next-line:no-console
        // console.log(result)
    //         dispatch(SearchFreeAppAction(result.map((item:any)=>{
    //             name : item.name,
    //             imageurl
    //         })) 
  
      

    //   )
    }
    
}

