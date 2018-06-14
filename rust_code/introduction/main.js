window.wasm = {};
WebAssembly.instantiateStreaming(
    fetch('target/wasm32-unknown-unknown/release/introduction.wasm'))
    .then(module => {
        window.wasm.sqrt = module.instance.exports.sqrt;
        const h = document.createElement('H1');
        const node = document.createTextNode('Wasm ready');
        h.appendChild(node);
        document.getElementById('app').appendChild(h);
    });
