import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 63DhDw-igbg5gc_55XF4olRzSvxgs91HdO-v0lykGYw",
    },
});