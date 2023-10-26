export const checkLogin = () => {
    const isLogIn = localStorage.getItem('token');
    if (isLogIn) {
        return true;
    }
    return false;
}