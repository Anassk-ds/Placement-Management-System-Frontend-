//frontend ---> req --> 5000 backend
//frontend ---> localhost:5000/students/:id
//frontend --->
import axios from "axios";
import React from "react";
const api = axios.create({
    baseURL:"http://localhost:8000"
});
export default api;

//localhost:8000/student/:id

                // React
                //   |
                // api.js
                //   |
                //   backend
