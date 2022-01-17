import Web3 from 'web3';

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