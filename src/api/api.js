import axios from "axios"

const instance = axios.create({
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   withCredentials: true,
   headers: { "API-KEY": "ab73fc98-562a-4a12-b515-e46758dbe317" }
})

export const userAPI = {
   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         })
   },
   getChangePage(pageNumber, pageSize) {
      return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
         .then(response => {
            return response.data;
         })
   },
   deleteSubscription(userId) {
      return instance.delete(`follow/${userId}`)
         .then(response => {
            return response.data;
         })
   },
   postSubscription(userId) {
      return instance.post(`follow/${userId}`)
         .then(response => {
            return response.data;
         })
   },
}


export const profileAPI = {
   getUserProfile(userId) {
      return instance.get(`profile/` + userId)
         .then(response => {
            return response.data;
         })
   },
   getUserStatus(userId) {
      return instance.get(`profile/status/` + userId)
         .then(response => {
            return response.data;
         })
   },
   updateUserStatus(status) {
      return instance.put(`profile/status`, { status: status })
         .then(response => {
            return response.data;
         })
   },
   savePhoto(photoFile) {
      const formData = new FormData();
      formData.append('image', photoFile)
      return instance.put(`profile/photo/`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
         .then(response => {
            return response.data;
         })
   },
   saveProfile(profile) {
      return instance.put(`profile`, profile)
         .then(response => {
            return response.data;
         })
   }
}

export const authApi = {
   getAuthData() {
      return instance.get("auth/me")
         .then(response => {
            return response.data
         })
   },
   login(email, password, rememberMe, captcha) {
      return instance.post("auth/login", { email, password, rememberMe, captcha })
         .then(response => {
            return response.data
         })
   },
   logout() {
      return instance.delete("auth/login")
         .then(response => {
            return response.data
         })
   }
}

export const securityAPI = {
   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`)
   }
}