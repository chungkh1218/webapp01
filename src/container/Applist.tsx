import { connect } from "react-redux";
import { APIListFreeAppAction } from "../actions/ListAction";
import { Applist } from "../compoent/applisting";

import { IRootState } from "../store";

const mapDispatchtoProps = (dispatch: any) => {
  return {
    getranking: () => {
      dispatch(APIListFreeAppAction());
    }
    
  };
};

const mapStateToProps = (state: IRootState) => {
  return { applist: state.applist.applist };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(Applist);
