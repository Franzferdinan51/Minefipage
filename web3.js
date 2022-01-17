import Web3 from 'web3';
import { useTronLink } from '../../contexts/tronlink';
const {
    wallet, // The connected wallet adress
    walletName, // The connected wallet name
    trxBalance, // Balance in TRX of the connected wallet
    connectToWallet, // Method that connects to the wallet and create a listener no wallet updates
    isConnected // Boolean that returns if the wallet is connected or not
    isMainNet // Boolean that returns if the waller is connected on main network or not
} = useTronLink();

var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:4444/'));

const TronWeb = require('tronweb')

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: { "TRON-PRO-API-KEY": 'your api key' },
    privateKey: 'your private key'
})


const getWeb3 = () => new Promise((resolve) => {
    window.addEventListener('load', () => {
        let currentWeb3;

        if (window.ethereum) {
            currentWeb3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                window.ethereum.enable();
                // Acccounts now exposed
                resolve(currentWeb3);
            } catch (error) {
                // User denied account access...
                alert('Please allow access for the app to work');
            }
        } else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            // Acccounts always exposed
            resolve(currentWeb3);
        } else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    });
});

getWeb3()
    .then((result) => {
        this.web3 = result;
    });

this.web3.eth.getAccounts()
    .then((accounts) => {
        this.account = accounts[0];
    })
const myContractInstance = new this.web3.eth.Contract(myContractAbi, myContractAddress)

this.myContractInstance.methods.myMethod(myParams)
    .call()
    .then(
        // do stuff with returned values
    )

this.myContractInstance.methods.myMethod(myParams)
    .send({
        from: this.account,
        gasPrice: 0
    })
    .then(
        (receipt) => {
            // returns a transaction receipt}
        )

        export default getWeb3;