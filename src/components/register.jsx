import React from "react";
import RegistrationForm from './registrationform'

/**
 * Handle register result return from api
 * @param response
 * @returns {Promise<unknown>|*}
 */
function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        return new Promise((resolve, reject) => {
            return reject(response);
        })
    }
}

/**
 * Coonver response to JSON
 * @param response api response
 */
function toJson(response) {
    return response.json();
}


/**
 * Render register form
 */
function Register() {
    return (
        <div>
            <h1>Register</h1>
            <RegistrationForm/>
        </div>
    );
}

export default Register;

