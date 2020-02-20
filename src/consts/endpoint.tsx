export const END_POINT = 'http://13.125.144.97:9766/'
export const END_POINT_TEST = 'http://13.125.144.97:9766/'
export let DONGGYU_END_POINT = 'http://localhost:4001/api/'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
} else {
    // production code
    DONGGYU_END_POINT = 'http://15.165.99.75:4001/api/'
}