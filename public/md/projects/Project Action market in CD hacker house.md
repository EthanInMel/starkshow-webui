# Action Market
## Project Intro 
[Here]((https://github.com/max65536/accountlend) is the code implementation of this project.   
This project allows a Starknet contract as an executor to execute a certain on-chain transaction, and the payer as the contract wallet must pay ETH or other ERC20 tokens for the action. The contract wallet as the payer can ensure immediate response to the executor contract by writing logic in the wallet and monitoring on-chain events. Scenarios include on-chain vote bribery, on-chain bounties, etc.

Different from Ethereum's account design, Starknet's native account abstraction, and the wallet as a contract allows transaction logic to be written. Therefore, this project is built based on the features of Starknet’s native account abstraction.

![Action market](https://i0.imgs.ovh/2024/01/22/sJG03.png)

![Buyer](https://i0.imgs.ovh/2024/01/22/sJ9Le.png)

![Seller](https://i0.imgs.ovh/2024/01/22/sJNt9.png)