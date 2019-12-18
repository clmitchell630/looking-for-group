import axios from "axios";

export default {
    saveUser: function (userData) {
        return axios.post("/api/user", userData);
    },
    saveUserAnswers: function (formData) {
        return axios.post("/api/user/answers", formData);
    }
}
