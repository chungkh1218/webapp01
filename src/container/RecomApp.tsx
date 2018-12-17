import {connect} from"react-redux";
import {APIGetRecomAppAction} from '../actions/GetRecomAppAction';
import {RecomApp} from '../compoent/recomapp'

import {IRootState} from '../store';


const mapDispatchtoProps = (dispatch:any) => {
    return {
        getrecom:() => {
            dispatch(APIGetRecomAppAction());
        }
    }
}

const mapStateToProps = (state:IRootState) =>{
    return {recomapplist:state.recomapplist.recomapplist}
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(RecomApp);