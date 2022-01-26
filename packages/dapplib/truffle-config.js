require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name response museum unable hidden clock equal general'; 
let testAccounts = [
"0x14f09971ceb4d2bf33a9e5cb79fbfba3ad3015f2d67a1810dc7279f92359fbb5",
"0x5ed4690083f4e0de52f67d3a2c5aaed0792677723cc93369070f52d1103b56f6",
"0x358cb6bc614a8ca0ee16db526dc23d0d1786e9c5f8f34a16b22c4f1773008cbb",
"0xe870a7f4dfe08c94f247aa2ae189dc476c4560cdbe7efa52f897ab007fdd8ccd",
"0x4e37847019efb82c81475ca6e55bb92e021781f1b9271d576f08ed978e0f1fe0",
"0xca6d0ee8ca1d61a4ad1205dbcc99e705232b29b15a8adb2bc28e799c82469caf",
"0x4a576f8ec3a03298e83f1b4f88da52d809101da46d315c9092ecc682d58d277e",
"0xd5a84b91bdc6fa71624445dd5491b711cf629207a064766e71ebf0daf25b36d9",
"0x218860926bb1762e9d7fd2c4348e1645ca4ae31596a8988e867703e331309624",
"0x110fe3ed2086271a9fa34b85d74779a70dfdc5569bd39e50b42340be2e2da611"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

