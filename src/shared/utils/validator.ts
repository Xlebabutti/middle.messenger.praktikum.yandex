interface ValidatorResult {
    errorText: string;
    isValid?: boolean;
    save?: boolean;
}

interface FormProps {
    email?: string;
    loginValue?: string;
    firstName?: string;
    secondName?: string;
    phone?: string;
    passwordValue?: string;
    newpassword?: string;
}

class Validator {
    static validateLogin(login: string): ValidatorResult {
        if (!login) {
            return {
                errorText: 'Логин не должен быть пустым.',
                isValid: false,
            };
        }

        const loginRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/;
        const isValid = loginRegex.test(login);

        return {
            errorText: isValid
                ? ''
                : 'Логин должен состоять от 3 до 20 символов, содержать латинские буквы, цифры, дефис и подчеркивание, и начинаться хотя бы с одной буквы.',
            isValid,
        };
    }

    static validatePassword(password: string): ValidatorResult {
        if (!password) {
            return {
                errorText: 'Пароль не должен быть пустым.',
                isValid: false,
            };
        }

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
        if (!name) {
            return {
                errorText: 'Имя не должно быть пустым.',
                isValid: false,
            };
        }

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
        if (!email) {
            return {
                errorText: 'Email не должен быть пустым.',
                isValid: false,
            };
        }

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
        if (!phone) {
            return {
                errorText: 'Телефон не должен быть пустым.',
                isValid: false,
            };
        }

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

    static validateFormLogin(props: FormProps) {
        const results = {
            login: props.loginValue
                ? Validator.validateLogin(props.loginValue)
                : { errorText: 'Логин не должен быть пустым.', isValid: false },
            password: props.passwordValue
                ? Validator.validatePassword(props.passwordValue)
                : {
                      errorText: 'Пароль не должен быть пустым.',
                      isValid: false,
                  },
        };

        const errors = Object.keys(results)
            .filter((key) => !results[key as keyof typeof results].isValid)
            .map((key) => results[key as keyof typeof results].errorText);

        return { results, errors };
    }

    static validateForm(props: FormProps) {
        const results = {
            email: props.email
                ? Validator.validateEmail(props.email)
                : { errorText: 'Email не должен быть пустым.', isValid: false },
            login: props.loginValue
                ? Validator.validateLogin(props.loginValue)
                : { errorText: 'Логин не должен быть пустым.', isValid: false },
            firstName: props.firstName
                ? Validator.validateName(props.firstName)
                : { errorText: 'Имя не должно быть пустым.', isValid: false },
            secondName: props.secondName
                ? Validator.validateName(props.secondName)
                : {
                      errorText: 'Фамилия не должна быть пустой.',
                      isValid: false,
                  },
            phone: props.phone
                ? Validator.validatePhone(props.phone)
                : {
                      errorText: 'Телефон не должен быть пустым.',
                      isValid: false,
                  },
            password: props.passwordValue
                ? Validator.validatePassword(props.passwordValue)
                : {
                      errorText: 'Пароль не должен быть пустым.',
                      isValid: false,
                  },
        };

        const errors = Object.keys(results)
            .filter((key) => !results[key as keyof typeof results].isValid)
            .map((key) => results[key as keyof typeof results].errorText);

        return { results, errors };
    }
}

export { Validator };
