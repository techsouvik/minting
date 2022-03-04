async function main(){
     const MyNFT = await ethers.getContractFactory("MyNFT")

     // deploying the NFT
     const myNFT = await MyNFT.deploy()
     await myNFT.deployed()
     console.log("Contract deployed to address:", myNFT.address)
}

main()
     .then(() => process.exit(0))
     .catch((err) => {
          console.log(err)
          process.exit(1) 
     })