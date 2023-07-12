import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "../../redux/users-reducer";
import axios from 'axios'
import React from 'react'
import Users from './Users'
import preloader from '../../photos/preloader.gif'
class UsersC extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <>
            {this.props.isFetching ? <div><img src={preloader} alt="preloader" /></div> : undefined}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                
                isFetching={this.props.isFetching}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow(userId) {
            dispatch(followAC(userId))
        },
        unfollow(userId) {
            dispatch(unfollowAC(userId))
        },
        setUsers(users) {
            dispatch(setUsersAC(users))
        },
        setCurrentPage(pageNumber) {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount(totalCount) {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching(isFetching) {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
export default UsersContainer;