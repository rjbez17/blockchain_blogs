const TruffleConfig = require('../truffle');
const Unlock = require('../unlock');

var Migrations = artifacts.require("./Migrations.sol");


module.exports = function(deployer, network, addresses) {

  const config = TruffleConfig.networks[network];

  return Unlock(web3, config, function(){

    console.log('Deploying migrations');
    deployer.deploy(Migrations).catch(console.error);

  });

};
