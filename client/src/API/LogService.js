import axios from "axios";

// Класс со статичными методами для работы авторизации
export default class LogService {
    static async Login(login, password) {
        const response = await axios.post('http://localhost:8000/api/user/login',
            {data: {name: login, password: password}});
        console.log(response.data);
        return response.data;
    }

    static async Logout() {
        const response = await axios.get('http://localhost:8000/api/user/logout');
        return response.data;
    }

    static async isAuth() {
        const response = await axios.get('http://localhost:8000/api/user/info');
        return response.data;
    }
}