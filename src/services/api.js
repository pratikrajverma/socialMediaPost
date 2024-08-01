const backendBaseUrl =process.dotenv.base_url

export const profileEndpoint = {
    CREATE_PROFILE: `${backendBaseUrl}/createProfile`,
    GET_PROFILE: `${backendBaseUrl}/getProfile`
}