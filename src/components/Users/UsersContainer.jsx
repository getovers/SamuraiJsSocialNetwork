import { connect } from "react-redux";
import { follow, unfollow, getUsers, getUpdatedUsers} from "../../redux/users-reducer";
import React from 'react'
import Users from './Users'
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChange = (pageNumber) => {
        this.props.getUpdatedUsers(pageNumber, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users {...this.props} onPageChange={this.onPageChange}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow(userId) {
//             dispatch(followAC(userId))
//         },
//         unfollow(userId) {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers(users) {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage(pageNumber) {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount(totalCount) {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching(isFetching) {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// } 


export default compose(
    connect(mapStateToProps,{ follow, unfollow, getUsers, getUpdatedUsers}),
    withAuthRedirect
)(UsersContainer)

// connect(mapStateToProps,
//     { follow, unfollow, getUsers, getUpdatedUsers})(UsersContainer);