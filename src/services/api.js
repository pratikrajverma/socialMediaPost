const backendBaseUrl = process.env.REACT_APP_BASE_URL 
// const backendBaseUrl = 'http://localhost:4000/api/v1';

export const profileEndpoint = {
    CREATE_PROFILE: `${backendBaseUrl}/createProfile`,
    // GET_PROFILE: `${backendBaseUrl}/getProfile`
    GET_PROFILE: backendBaseUrl + "/getProfile", 
}