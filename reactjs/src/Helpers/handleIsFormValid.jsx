import validator from "validator";

export const handleIsFormValid = ( email, fullName, password, dispatch, setError, removeError ) => {
    if ( email && !validator.isEmail( email ) ) {
        dispatch( setError( "Email is not valid." ) );
        return false;

    } else if ( fullName && fullName?.trim().length < 2 ){
        dispatch( setError( "Your Full Name is required." ) );
        return false;

    } else if ( password && password.trim().length < 6 ){
        dispatch( setError( "Password must be at least 8 characters." ) );
        return false;

    };
    
    dispatch( removeError() );  
    return true;
};