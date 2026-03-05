import 'vitest'

interface CustomMatchers<R = unknown> {
    matchesColor: () => R
}

declare module 'vitest' {
    interface Matchers<T = any> extends CustomMatchers<T> {}
}