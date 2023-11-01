// auth.js

// Define a key for storing the authentication status in localStorage
const AUTH_STORAGE_KEY = 'isAuthenticated';

localStorage.setItem('isAuthenticated', 'false');

// Function to set the authentication status in localStorage
export const setIsAuthenticated = (value) => {
    localStorage.setItem(AUTH_STORAGE_KEY, value);
};

// Function to get the authentication status from localStorage
export const getIsAuthenticated = () => {
    return localStorage.getItem(AUTH_STORAGE_KEY);
};

// Function to clear the authentication status from localStorage (logout)
export const clearAuthentication = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
};
