import { api } from "../api/api";


export const test = async() => {
    const {data} = await api.get()

    if(data) {
        return data
    }
}