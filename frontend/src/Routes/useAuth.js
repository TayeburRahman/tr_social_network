export default function useAuth() {
  
    const localAuth = localStorage.getItem("auth");   
 
    if (localAuth) {
        // Parse the authentication data
        const { user, token } = JSON.parse(localAuth);

        // Check if both user and token exist
        if (user && token) { 
            return true;   
        } else {
            return false;  
        } 
    } else {
        return false; 
    }
}