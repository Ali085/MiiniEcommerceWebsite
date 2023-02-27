import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTUwMDk0NWE3YWY4MjZkMDkzMjZhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzQyNDU1OCwiZXhwIjoxNjc3NjgzNzU4fQ.I9BV6d1ETDbkjao4AHMsxfxji7jt2KUvIqQVpZGyq8k"



export const publicRequest =axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})