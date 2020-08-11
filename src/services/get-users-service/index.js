export default class GetUsersService {
    _apiBase = 'http://localhost:3000';

    getUsers = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        return await res.json();
    }
}