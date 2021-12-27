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
      return instance.get(`profile/` + userId).then(response => {
         return response.data;
      })
   }
}

export const getAuthData = () => {
   return instance.get("auth/me")
      .then(response => {
         return response.data
      })
}