import { sendMessageCreator, updateMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage() {
            dispatch(sendMessageCreator())
        },
        updateMessageText(text) {
            dispatch(updateMessageTextCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;

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