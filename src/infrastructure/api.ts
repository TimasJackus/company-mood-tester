import axios from "axios";

// Default config options
const defaultOptions = {
    baseURL: "http://192.168.8.152:3000",
    headers: {
        'Content-Type': 'application/json',
    },
};

// Create instance
export const instance = axios.create(defaultOptions);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOjgsInVzZXJJZCI6InFVbDJkVG1HckgwSm4za0VvOUlMRyIsInR5cGUiOiJzZXNzaW9uIiwiaWF0IjoxNjI4MzM1NDYyfQ.H8LCJXRjjUGFdtvTl09FUpNpYNvq_f-5VX2cyJc09NE"

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});

export const fetcher = (url: string) => instance.get(url).then(res => res.data)

export const swrConfig = {
    fetcher,
}
