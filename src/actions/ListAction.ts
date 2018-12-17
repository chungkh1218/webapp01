import Axios from "axios";
import { Dispatch } from "redux";
import { IApp } from "../model";

export const LIST_APP_FREE = "LIST_APP_FREE";
export type LIST_APP_FREE = typeof LIST_APP_FREE;

export interface IListFreeAppAction {
  type: LIST_APP_FREE;
  apps: IApp[];
}

export function ListFreeAppAction(apps: IApp[]): IListFreeAppAction {
  return {
    apps,
    type: LIST_APP_FREE
  };
}

export function APIListFreeAppAction() {
  return (dispatch: Dispatch<IListFreeAppAction>) => {
    Axios.get(
      "https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json"
    )
      // tslint:disable-next-line:no-console
      .then(res => {
        dispatch(ListFreeAppAction(res.data.feed.entry.map((item:any) =>{
         // tslint:disable-next-line:no-console
        return {
                author : item['im:artist'].label,
                category : item.category.attributes.term,
                imageurl :item['im:image'][2].label,
                name : item['im:name'].label,
                summary : item.summary.label,
                
                
               } 
                 } 
        )));
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
}
