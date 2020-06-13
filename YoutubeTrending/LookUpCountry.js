import axios from 'axios';

const LookUpCountry = async (searchTerm) => {
    return axios.get(`youtube_api/${searchTerm}`)
}
export default LookUpCountry
