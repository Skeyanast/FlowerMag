import axios from "axios";

// Класс со статичными методами для подгрузки данных пользователей
export default class UserService {
    static async getAll() {
        const response = await axios.get('http://localhost:8000/api/user/list');
        return response.data;
    }

    static async getById() {
        const response = await axios.get(`http://localgost:8000/api/user/info`);
        return response.data;
    }
}
