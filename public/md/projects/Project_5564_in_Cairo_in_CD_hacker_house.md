# Stealth Addresses Contract Wallet: EIP-5564 In Cairo
## Project Intro 
[Here](https://github.com/yuguogang/CAIROEIP5564) is the code implementation of this project. This project is [EIP-5564](https://eips.ethereum.org/EIPS/eip-5564) implementation in Cairo.

The standardization of non-interactive stealth address generation presents the potential to significantly improve the privacy capabilities of the Starknet network by allowing recipients to remain private when receiving assets. <br>

This is accomplished through the sender generating a stealth address based on a shared secret known exclusively to the sender and recipient. The recipients alone can access the funds stored at their stealth addresses, as they are the sole possessors of the necessary private key. 

As a result, observers are unable to associate the recipient’s stealth address with their identity, thereby preserving the recipient’s privacy and leaving the sender as the only party privy to this information. By offering a foundational implementation in the form of a single contract that is compatible with multiple cryptographic schemes, recipients are granted a centralized location to monitor, ensuring they do not overlook any incoming transactions.

This logic as follows:
![logic](https://i0.imgs.ovh/2024/01/22/sJTjv.png)

## How it works
1, The receiver generates two private keys `p_spend`, `p_view`, and corresponding public keys.

2, Recipient publishes Meta address consisting of public key, `meta-address = P_spend+P_view`

3, The sender calls the `generateStealthAddress`(meta-address) method of the ERC5564Messenger messenger contract to generate the recipient's stealth address `stealthAddress`, `ephemeralPubKey`, `viewTag`.

4, The sender declares the information about the assets transferred to the private address, which is realized through the Announce contract, which is singleton, i.e., there is one and only one unique contract on each chain, and the function is to publish the Announcement event, which in general should be published at the same time as the sender transfers the assets to the stealthAddress.

```
contract IERC5564Announcer {  
/// @dev Emitted when sending something to a stealth address.  
/// @dev See the announce method for documentation on the parameters.  
event Announcement (  
uint256indexed schemeId,  
addressindexed stealthAddress,  
addressindexed caller,  
bytes ephemeralPubKey,  
bytes metadata  
);  
function announce (  
uint256 schemeId,  
address stealthAddress,  
bytesmemory ephemeralPubKey,  
bytesmemory metadata  
)   
external  
{  
emit Announcement(schemeId, stealthAddress, msg.sender, ephemeralPubKey, metadata);
}  
}  
```

5, the picker listens for the Announcement event and calls the checkStealthAddress method of the messenger contract.  
```
function checkStealthAddress(
address stealthAddress,
bytes calldata ephemeralPubKey,
bytes calldata viewingKey,
bytes calldata spendingPubKey
) external view returns (bool)
```
  
6, once the receiver checks that the private address is relevant to him or her, invoke the messenger contract's
```
function computeStealthKey(
address stealthAddress,
bytesmemory ephemeralPubKey,
bytesmemory spendingKey
) externalviewreturns (bytesmemory);
```