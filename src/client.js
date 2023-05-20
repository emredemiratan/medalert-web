import axios from "axios";

const client = (method, url, data) => {
    // token
    if (localStorage.getItem("_token")) {
        switch (method) {
            case "GET":
                axios
                    .get(process.env.REACT_APP_BASE_URL + url, {
                        headers: { Authorization: `Bearer ${localStorage.getItem("_token")}` },
                    })
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        //
                    });
                break;
            case "POST":
                axios
                    .post(process.env.REACT_APP_BASE_URL + url, data, {
                        headers: { Authorization: `Bearer ${localStorage.getItem("_token")}` },
                    })
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        //
                    });
                break;
            case "PUT":
                axios
                    .put(process.env.REACT_APP_BASE_URL + url, data, {
                        headers: { Authorization: `Bearer ${localStorage.getItem("_token")}` },
                    })
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        //
                    });
                break;
            case "DELETE":
                axios
                    .delete(process.env.REACT_APP_BASE_URL + url, {
                        headers: { Authorization: `Bearer ${localStorage.getItem("_token")}` },
                    })
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        //
                    });
                break;
            default:
                break;
        }
    }
    // no token
    else {
        switch (method) {
            case "GET":
                axios
                    .get(process.env.REACT_APP_BASE_URL + url)
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        //
                    });
                break;
            case "POST":
                axios
                    .post(process.env.REACT_APP_BASE_URL + url, data)
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        //
                    });
                break;
            case "PUT":
                axios
                    .put(process.env.REACT_APP_BASE_URL + url, data)
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        //
                    });
                break;

            case "DELETE":
                axios
                    .delete(process.env.REACT_APP_BASE_URL + url)
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        //
                    });

                break;
            default:
                break;
        }
    }
};

export default client;
