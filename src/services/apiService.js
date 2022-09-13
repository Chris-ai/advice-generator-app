import axios from "axios";

class ApiService {
    getAdvice() {
        return axios.get('https://api.adviceslip.com/advice')
    }
}


export default new ApiService();