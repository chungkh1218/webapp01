import {connect} from 'react-redux';
import {APIListFreeAppAction} from '../actions/ListAction'
import {UpdateSearchAction} from '../actions/SearchAction'
import {SearchBar} from '../compoent/searchbar'

import {IRootState} from '../store'



const mapDispatchtoProps = (dispatch: any) => {
  return {
    onSearchChange: (newsearch:string) => {
      dispatch(UpdateSearchAction(newsearch));
    },
    resetResult : () =>{
        dispatch(APIListFreeAppAction())
    }

  };
};

const mapStateToProps = (state: IRootState) => {
  return { applist: state.applist.applist };
};

export default connect(
mapStateToProps,
mapDispatchtoProps
)(SearchBar);


