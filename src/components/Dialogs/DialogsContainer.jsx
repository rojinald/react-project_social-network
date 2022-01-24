import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (dialogsNewMessageBody) => {
            dispatch(addMessageActionCreator(dialogsNewMessageBody));
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);