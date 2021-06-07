import axios from "axios";

const LOCAL_HOST_URL = "http://localhost:8087/doctors";

class DoctorService{
    async getAllDoctors(){
        return await axios.get(LOCAL_HOST_URL);
    }

    async createDoctor(doctor){
        return await axios.post(LOCAL_HOST_URL,doctor);
    } 

    async getDoctorById(doctorId){
        return await axios.get(LOCAL_HOST_URL+"/"+doctorId);
    }

    async updateDoctor(doctorId,doctor){
        return await axios.put(LOCAL_HOST_URL + "/" +doctorId,doctor);
    }
    
    async deleteDoctor(doctorId){
        return await axios.delete(LOCAL_HOST_URL+"/"+doctorId);
    }
}
export default new DoctorService();