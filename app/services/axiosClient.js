import axios from "axios";


const axiosClient = axios.create({
    baseURL: "https://venomverser.azurewebsites.net",
    headers: {
        "Content-Type": "application/json",
    },
});

export { axiosClient}