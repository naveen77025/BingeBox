export const validate = (email, password) =>{
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!emailValidate){
        return "Email address is not valid"
    }
    if(!passwordValidate){
        return "Password is not valid"
    }
    return null;
}