export class Validators {
    static required(value = '') {
        return value && value.trim()
    }

    static minLenght(len) {
        return value => {
            return value.length >= len
        }
    }
}