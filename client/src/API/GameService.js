import axios from "axios";

// Класс со статичными методами для подгрузки данных игр
export default class GameService {
    static async getAll() {
        const response = await axios.get('http://localhost:8000/api/games-list');
        return response.data;
    }

    static async getById(id) {
        const response = await axios.get('http://localhost:8000/api/games-list/' + id);
        return response.data;
    }
}
