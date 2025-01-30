export class NumberUtils {
    // mask para trazer um numero com pontuacao de numros inteiros ex: 500.000
    static maskNumberInt = (value: any): string => {
        if (!value) return ''
        if (value === '') return ''
        if (value === null) return ''

        return value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }

    static arePasswordsEqual = (password1: string, password2: string): boolean => {
        return password1 !== password2;
      }

    static isInvalidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return !emailRegex.test(email);
    }
}


