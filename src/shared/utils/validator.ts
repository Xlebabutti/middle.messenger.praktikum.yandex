interface ValidatorResult {
    isValid: boolean;
    errorText: string;
}

class Validator {
    static validateLogin(login: string): ValidatorResult {
        const loginRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/;
        if (!loginRegex.test(login)) {
            return {
                isValid: false,
                errorText: 'error write Login',
            };
        }
        return {
            isValid: true,
            errorText: '',
        };
    }

    static validatePassword(password: string): ValidatorResult {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
        if (!passwordRegex.test(password)) {
            return {
                isValid: false,
                errorText: 'error write password',
            };
        }
        return {
            isValid: true,
            errorText: '',
        };
    }
}

export { Validator };
