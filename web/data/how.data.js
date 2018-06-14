export default [
    {
        title: 'How',
        bg: 'white',
        content: [
            {
                tag: 'p',
                text: [
                    '!2!Install rustup:',
                ]
            },
            {
                tag: 'p',
                text: [
                    '!0!curl https://sh.rustup.rs -sSf | sh'
                ]
            },
            {
                tag: 'p',
                text: [
                    '!2!Setup nightly:',
                ]
            },
            {
                tag: 'p',
                text: [
                    '!0!rustup default nightly',
                ]
            },
            {
                tag: 'p',
                text: [
                    '!2!Add the toolchain:',
                ]
            },
            {
                tag: 'p',
                text: [
                    '!0!rustup target add wasm32-unknown-unknown --toolchain nightly',
                ]
            },
            {
                tag: 'p',
                text: [
                    '!2!Add some optimizer:',
                ]
            },
            {
                tag: 'p',
                text: [
                    '!0!cargo install wasm-gc',
                ]
            },
            {
                tag: 'p',
                text: [
                    '_'
                ]
            },
            {
                tag: 'p',
                text: [
                    'Remember to create wasm module as', '!0!cdylib', ' and to describe exported functions as ', '!0!#no_mangle'
                ]
            },
        ]
    },
    {
        title: 'How',
        bg: 'white',
        content: [
            {
                tag: 'li',
                text: [
                    'basic'
                ]
            }
        ]
    },
];
