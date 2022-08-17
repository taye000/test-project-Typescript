import Web3 from "web3";
const web3 = new Web3("https://alfajores-forno.celo-testnet.org")


//create a wallet address on celo
const createAccount = async ()=> {
    const acc = web3.eth.accounts.create();
    const walletAddress = acc.address;
    const privatekey = acc.privateKey;
    console.log("acc", walletAddress);
    console.log("private key", privatekey);
}


createAccount();
