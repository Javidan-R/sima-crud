import sizes from './sizes';

const functions = {
    rem: (value: number) => value / sizes.base + 'rem',
};

export const {rem,} = functions;
