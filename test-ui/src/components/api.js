const axios = require('axios');
export const getPatients = (callback) => {
    return axios.get("http://localhost:8080/patients/get",
    ).then((data) => {callback(data.data)})
}
export const createPatient = (callback, patient) => {
    return axios.post("http://localhost:8080/patients/create",
        patient

    ).then((data) => {callback(data.data)})
}