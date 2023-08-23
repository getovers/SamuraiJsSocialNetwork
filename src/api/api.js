import axios from "axios"

const api = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f6edd1e2-78d4-4b10-837a-975d6d93f70e"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return api.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return api.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return api.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return api.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return api.get(`profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return api.put(`profile/status`, {status})
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return api.put(`profile/photo`, formData)
            .then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return api.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return api.post(`auth/login`, { email, password, rememberMe})
    },
    logout() {
        return api.delete(`auth/login`)
    }
}
