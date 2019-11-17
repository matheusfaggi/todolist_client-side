import axios from 'axios'

class Api {
    constructor() {
        const ApiNode = axios.create({
            baseURL: 'http://localhost:3000',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        this.ApiNode = ApiNode
    }
}
export default new Api().ApiNode
