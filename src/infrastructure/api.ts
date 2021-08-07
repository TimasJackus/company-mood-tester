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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOjEwLCJ1c2VySWQiOiJxVWwyZFRtR3JIMEpuM2tFbzlJTEciLCJ0eXBlIjoic2Vzc2lvbiIsImlhdCI6MTYyODMzOTE5NH0.tUNR_I2pKx81cLfqlh0fDpjk6KXObbEp8Jvv6UoKz_o"

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});

export const fetcher = (url: string) => instance.get(url).then(res => res.data)

export const swrConfig = {
    fetcher,
}
