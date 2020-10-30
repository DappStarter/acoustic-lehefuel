require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remember million half clinic outer slab'; 
let testAccounts = [
"0x0f830a633b96398f02ca8b370dda6293c641cbe5d7bd1aa23cf7f0c167f18090",
"0xec420d15828e1f2dfc4588433d5887ec58d832c885cb9376e5c91031b3d804f8",
"0x497a453a6de94114cdc63be144d9a46d0cae7c9c6e4eefbf4dbb74c805aef882",
"0x65d0def9a84211778f04ab8187fb2ef97efaef4f92327f00eeb06bcabf27dfd6",
"0x5c5f9f18cbef8c3852951ae25441675fb6628ccb073934edb6703de1a44e3e54",
"0xa1720f71ce5bb13c1d6bd3769ed9d82d4f5f009ab70fc39ae31ac2995c1f2cf5",
"0x6009ab07a5b12215c7219873932acb51174bc289d926d4ab2841be81dd3aa1e9",
"0x17089de7c0c18317c9a9d021717997c4160db99ca3129e47c380804c18ef0648",
"0x740fa135aaf8a6cde27dfa3e55df17d3d7258a82b573275fdcd3c8755f2df7c4",
"0xc1e6aee81bef357ea915ceb0c01e056e95c8517d1e3be7801a6e7cee1ca7218b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
