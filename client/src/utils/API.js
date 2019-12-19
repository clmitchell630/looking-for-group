import axios from "axios";

export default {
    saveUser: function (userData) {
        return axios.post("/api/user", userData);
    },
    getUser: function (userid) {
        return axios.get("/api/user/" + userid);
    },
    saveUserAnswers: function (formData) {
        return axios.post("/api/user/answers", formData);
    }
}
