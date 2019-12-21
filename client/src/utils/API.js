import axios from "axios";

export default {
    getMatch: function () {
        return axios.get("/api/user");
    },
    saveUser: function (userData) {
        return axios.post("/api/user/saveuser", userData);
    },
    getUser: function (userid) {
        return axios.get("/api/user/" + userid);
    },
    saveUserAnswers: function (userid, formData) {
        let url = "/api/user/answers/" + userid;
        let data = formData;
        return axios.post(url, data);
    }
}
