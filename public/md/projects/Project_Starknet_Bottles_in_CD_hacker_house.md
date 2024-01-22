# Starknet Bottles  
## Project Intro


**Solidity version**  
[Here](https://github.com/lrqstudy/ibottle/) is the code implementation of this project.  <br>

1.
Users register an account, purchase NFTs, and receive a token airdrop as NFT holders. The registration information includes username, age, gender, and other details, and users receive 100 points upon registration.  <br>

2.
After completing the registration, users receive NFTs and corresponding LFT tokens. Each time a user throws a message in a bottle, it costs 5 LFT tokens, which are sent to the contract. The bottle contains messages and social IDs, such as WeChat accounts. Throwing a bottle earns points.  <br>

3.
Picking up a bottle costs 50 LFT tokens, with 95% going to the person who threw the bottle and 5% sent to the contract. Picking up a bottle also earns points. Only the person who picks up the bottle can see its contents.  <br>

4.
Tokens can be purchased with ETH.  <br>

**Cairo version and ZKP**  
The new version will be based on ZKP and Cairo contracts. I will remove the server-side encryption and decryption code and use zk technology to implement on-chain data encryption. The logic of the contract will be implemented using Cairo.   <br>

The implementation logic is as follows:  
1.
Alice drops a bottle, writing the contract address and the hash of the message into the blockchain.<br>  
2. 
Bob picks up Alice's bottle, gets Alice's contract address, calculates a shared key between Bob and Alice using his private key, and writes the hash of the shared key and his own contract address into the blockchain, and pays the bottle picking fee.<br>  
3.
Alice receives Bob's request to pick up her bottle, calculates the hash of the shared key between them, compares it with the hash of the shared key submitted to the blockchain by Bob, and if they match, encrypts the content she wants to put into the bottle (including greetings and WeChat) using their shared key and puts it into the blockchain.<br>  
4.
Bob sees that Alice has accepted the request, retrieves the on-chain message encrypted with the shared key, decrypts it using the shared key, obtains the original message, hashes the message, and compares it with the hash of the message submitted by Alice in the first step. If they match, the transaction is confirmed.