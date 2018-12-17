import * as React from 'react'
import {Button} from 'react-bootstrap'

interface ISearchBarProps{
    onSearchChange : (newsearch:string) => void
    resetResult : () =>void
}

interface ISearchBarState{
    search:string
}

export class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
         constructor(props: ISearchBarProps) {
           super(props);

           this.state = { 
             search: "" 
            };
         }

         public render() {
           
           return <div className="searchbar">
               <input type="text" value={this.state.search} onChange={this.onSearchChange} placeholder="search app here" />
               <Button  bsStyle="primary" onClick={this.resetResult}>Reset</Button>
             </div>;
         }

         private resetResult = (e: any) => {
          this.props.resetResult()
         }

         private onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newsearch = e.currentTarget.value
            this.setState({ search: e.currentTarget.value });
            this.props.onSearchChange(newsearch)

            // tslint:disable-next-line:no-console
            console.log(this.state.search)
         };
       }