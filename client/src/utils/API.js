import axios from "axios";

export default {
    saveUser: function (formData) {
        return axios.post("/api/user", formData);
    }
}
