const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'erode essay voyage vehicle vague keen skate business arrow rally sponsor fog',
    'https://rinkeby.infura.io/v3/9d9938c95d3e46a2ac291f073c34b37a'
);

const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]); // 0xb0dF74403945Cd147284EEeAA2d9037F48Fdee28

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', gasPrice: 2000000000, from: accounts[0] });

    console.log('Contact deployed to', result.options.address); // 0xDB260d77C70526578f611088015aDA8a86341e5D

};

deploy();