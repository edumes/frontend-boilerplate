export default function capitalize(value: string) {
    return typeof value !== 'string'
        ? ''
        : value.charAt(0).toUpperCase() + value.slice(1);
}
