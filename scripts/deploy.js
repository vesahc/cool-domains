

const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("force");
    await domainContract.deployed();

    console.log("Contract deployed to:", domainContract.address);

    let txn = await domainContract.register("master", {value: hre.ethers.utils.parseEther('0.1')});
    await txn.wait();
    console.log("Minted domain master.force");

    txn = await domainContract.setRecord("master", "Teamwork makes the dream work!");
    await txn.wait();
    console.log("Set record for master.force");

    const address = await domainContract.getAddress("master");
    console.log("Owner of domain master:", address);

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();