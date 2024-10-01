import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';
export const login = async(username, password) => {
    const response = await axios.get(`${API_URL}token/`, {
    username,
    password,
  });
  if (response.data.access) {
  // Store the JWT tokens (can be localStorage or Cookies)
    Cookies.set('access_token', response.data.access);
    Cookies.set('refresh_token', response.data.access);
}
return response;
};

//logout and remove jwt token 
export const logout = () => {
    Cookies.remove('access_token');
Cookies.r
};

// Get authenticated request
export const getAuthRequest = () => {
    const accessToken = Cookies.get('access_token');
    return axios.create({
      baseURL: API_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };