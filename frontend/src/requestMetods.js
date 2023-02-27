import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTUwMDk0NWE3YWY4MjZkMDkzMjZhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzE1ODUwNywiZXhwIjoxNjc3NDE3NzA3fQ.bFgUUoxoHEQPZ3DLe1xyjHniIHBPmNxV0hT-Ghoj1Ao"

export const publicRequest =axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})