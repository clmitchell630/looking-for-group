import axios from "axios";

export default {
    saveUser: function (userData) {
        return axios.post("/api/user", userData);
    },
    getUser: function (userid) {
        return axios.get("/api/user/" + userid);
    },
    saveUserAnswers: function (userid, formData) {
        let url = "/api/user/answers/"+ userid;
        let data = formData;
        return axios.post( url, data);
    },
    getMatches: function (username) {
        return axios.get("/api/user/getmatches/" + username);
    }
}
