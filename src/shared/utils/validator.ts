interface ValidatorResult {
    errorText: string;
}

class Validator {
    static validateLogin(login: string): ValidatorResult {
        const loginRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/;
        if (!loginRegex.test(login)) {
            return {
                errorText:
                    'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов.',
            };
        }
        return {
            errorText: '',
        };
    }

    static validatePassword(password: string): ValidatorResult {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
        if (!passwordRegex.test(password)) {
            return {
                errorText:
                    'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
            };
        }
        return {
            errorText: '',
        };
    }

    static validateName(name: string): ValidatorResult {
        const nameRegex = /^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/;
        if (!nameRegex.test(name)) {
            return {
                errorText:
                    'Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).',
            };
        }
        return {
            errorText: '',
        };
    }

    static validateEmail(email: string): ValidatorResult {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return {
                errorText:
                    'Латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.',
            };
        }
        return {
            errorText: '',
        };
    }

    static validatePhone(phone: string): ValidatorResult {
        const phoneRegex = /^\+?\d{10,15}$/;
        if (!phoneRegex.test(phone)) {
            return {
                errorText:
                    'От 10 до 15 символов, состоит из цифр, может начинается с плюса.',
            };
        }
        return {
            errorText: '',
        };
    }

    static validateMessage(message: string): ValidatorResult {
        if (!message || message.trim() === '') {
            return {
                errorText: 'Не должно быть пустым.',
            };
        }
        return {
            errorText: '',
        };
    }
}

export { Validator };
