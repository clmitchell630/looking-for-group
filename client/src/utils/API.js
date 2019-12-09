import axios from "axios";

export default {
    saveUser: function (gameLevel, playLevel, troll, skillLevel) {
        return axios.post("/api/user", gameLevel, playLevel, troll, skillLevel)
    }
}
