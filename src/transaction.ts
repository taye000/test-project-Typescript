import { Alchemy, Network, Wallet } from "alchemy-sdk";
require("dotenv").config();

const api_key: any = process.env.API_KEY;
const private_key: any = process.env.PRIVATE_KEY;

const settings = {
  api_key: api_key,
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);

let wallet = new Wallet(private_key);

async function createTx() {
  try {
    const nonce = await alchemy.core.getTransactionCount(
      wallet.address,
      "latest"
    );
    //create a transaction
    let transaction = {
      to: "0x31B98D14007bDEe637298086988A0bBd31184523",
      value: 10, //wei
      gasLimit: "21000",
      maxFeePerGas: "1000000000",
      nonce: nonce,
      type: 2,
      chainId: 5,
    };
    //sign the transaction
    let rawTransaction = await wallet.signTransaction(transaction);
    //broadcast the transaction
    let tx = await alchemy.core.sendTransaction(rawTransaction);

    console.log("txhash", tx.hash);
  } catch (error) {
    console.log("error", error);
  }
}

createTx();
