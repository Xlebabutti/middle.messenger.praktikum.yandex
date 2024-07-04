interface ValidatorResult {
    errorText: string;
    isValid?: boolean;
    save?: boolean;
}

interface FormProps {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    password: string;
    newpassword: string;
}

class Validator {
    static validateLogin(login: string): ValidatorResult {
        const loginRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/;
        const isValid = loginRegex.test(login);
        return {
            errorText: isValid
                ? ''
                : 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов.',
            isValid,
        };
    }

    static validatePassword(password: string): ValidatorResult {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
        const isValid = passwordRegex.test(password);
        return {
            errorText: isValid
                ? ''
                : 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
            isValid,
        };
    }

    static validateName(name: string): ValidatorResult {
        const nameRegex = /^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/;
        const isValid = nameRegex.test(name);
        return {
            errorText: isValid
                ? ''
                : 'Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).',
            isValid,
        };
    }

    static validateEmail(email: string): ValidatorResult {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailRegex.test(email);
        return {
            errorText: isValid
                ? ''
                : 'Латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.',
            isValid,
        };
    }

    static validatePhone(phone: string): ValidatorResult {
        const phoneRegex = /^\+?\d{10,15}$/;
        const isValid = phoneRegex.test(phone);
        return {
            errorText: isValid
                ? ''
                : 'От 10 до 15 символов, состоит из цифр, может начинается с плюса.',
            isValid,
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

    static validatePasswordsMatch(
        password: string,
        confirmPassword: string,
    ): ValidatorResult {
        const isValid = password === confirmPassword;
        return {
            errorText: isValid ? '' : 'Пароли не совпадают.',
            isValid,
            save: isValid,
        };
    }

    static validateForm(props: FormProps) {
        const results = {
            Email: Validator.validateEmail(props.email),
            Login: Validator.validateLogin(props.login),
            FirstName: Validator.validateName(props.first_name),
            SecondName: Validator.validateName(props.second_name),
            Phone: Validator.validatePhone(props.phone),
            Password: Validator.validatePassword(props.password),
        };

        const errors = Object.keys(results)
            .filter((key) => !results[key as keyof typeof results].isValid)
            .map((key) => results[key as keyof typeof results].errorText);

        return { results, errors };
    }
}

export { Validator };
