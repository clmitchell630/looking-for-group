import axios from "axios";

export default{
    saveUser: function(gameDropdown, levelDropdown, trollDropdown, skillDropdown) {
        return axios.post("/api/user", gameDropdown, levelDropdown, trollDropdown, skillDropdown)
    }
    }
}