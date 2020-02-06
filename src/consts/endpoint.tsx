export const END_POINT = 'https://kbucard.com:9766/'
export const END_POINT_TEST = 'https://kbucard.com:9766/'
export let DONGGYU_END_POINT = 'http://localhost:4001/api/'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
} else {
    // production code
    DONGGYU_END_POINT = 'https://kbucard.com:4001/api/'
}