import axios from "axios";

class ProfileService {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config;
        });
    }

    uploadImage = (body) => {
        return this.api.post("/upload", body);
    };
    getImage = () => {
        return this.api.get("/image");
    }


}

const profileService = new ProfileService();

export default profileService;