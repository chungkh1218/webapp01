import Axios from 'axios';
import {Dispatch} from'redux';
import {IApp} from '../model'

export const GET_RECOM_APP ='GET_RECOM_APP';
export type GET_RECOM_APP = typeof GET_RECOM_APP;

export interface IGetRecomAppAction{
    type:GET_RECOM_APP;
    apps:IApp[]
}

export function GetRecomAppAction(apps: IApp[]): IGetRecomAppAction {
    return {
        apps,
        type:GET_RECOM_APP
    }
}

export function APIGetRecomAppAction(){
    return(dispatch:Dispatch<IGetRecomAppAction>) => {
        Axios.get(
            "https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json"
        )
        .then(res => {
                       dispatch(GetRecomAppAction(res.data.feed.entry.map((item:any) => {
                           return {  
                                    category: item.category.attributes.term ,
                                    imageurl: item["im:image"][2].label,
                                    name: item["im:name"].label, 
                            };
                       }

                       )));
                       // tslint:disable-next-line:no-console
                     }).catch(err => console.log(err))
    }
}