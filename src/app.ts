import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
const web3 = new Web3("https://alfajores-forno.celo-testnet.org");
const kit = newKitFromWeb3(web3 as any);

let anAddress = "0xC8AafcfE085C141475897Bb10a3ce36fe31173b7";
// let recipientAddress2 = "0x37D9F9c047BfAcA253c54510ED9d8609B0a64E0c";
let recipientAddress = "0xF17fcF91DF7038021CDe4DDE7e656163be308b96"

const getBal = async () => {
  let celotoken = await kit.contracts.getGoldToken();

  let celobalance = await celotoken.balanceOf(anAddress);

  console.log(celobalance.toString());
};
getBal();

const send = async () => {
  let privatekey =
    "0xeda4164c50e7ff4c4ab849bb06e7ba6f78860b53f8bedc7c84faca4fbbe8d18a";
  kit.connection.addAccount(privatekey);
  let amount = 10000000;

  let celotoken = await kit.contracts.getGoldToken();

  let celotx = await celotoken
    .transfer(recipientAddress, amount)
    .send({ from: anAddress });

  let celoReceipt = await celotx.waitReceipt();

  console.log("celo receipt", celoReceipt);
};
send();

getBal();
