export const checkValidData = (email, password) => {
    // Check if email is valid
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    // If email is not valid, return an error message
    if (!isEmailValid) {
        return "Please enter a valid email address.";
    }

    // Check if password is at least 8 characters long and meets complexity requirements
    if (!isPasswordValid) {
        return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character. ";
    }

    // If both checks pass, return null indicating no errors
    return null;
}

export const checkValidSignUpData = (name, email, password) => {
    // Check name is not empty
    if (!name || name.trim() === "") {
        return "Name cannot be empty.";
    }
    // Check if email is valid
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!isEmailValid) {
        return "Please enter a valid email address.";
    }
    // Check if password is at least 8 characters long and meets complexity requirements
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if (!isPasswordValid) {
        return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }
    // If all checks pass, return null indicating no errors
    return null;
}