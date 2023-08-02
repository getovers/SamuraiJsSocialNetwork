import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage(newMessageText) {
            dispatch(sendMessageCreator(newMessageText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)



//previous code
// function DialogsContainer(props) {


//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState().dialogsPage;

//                 let sendMessage = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onMessageChange = (text) => {
//                     store.dispatch(updateMessageTextCreator(text))
//                 }
//                 return <Dialogs sendMessage={sendMessage} updateMessageText={onMessageChange} dialogsPage={state} />
//             }}
//         </StoreContext.Consumer>
//     )
// }