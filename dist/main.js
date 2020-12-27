(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./build/contracts/LendingPool.json":
/*!******************************************!*\
  !*** ./build/contracts/LendingPool.json ***!
  \******************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, immutableReferences, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"LendingPool\",\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"accountAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"LogDepositMade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"accountAddress\",\"type\":\"address\"}],\"name\":\"LogEnrolled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"accountAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newBalance\",\"type\":\"uint256\"}],\"name\":\"LogWithdrawal\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\",\"payable\":true},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"enrolled\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"isEnrolled\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"enroll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\",\"payable\":true},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.6.12+commit.27d51765\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"accountAddress\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"LogDepositMade\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"accountAddress\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"LogEnrolled\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"accountAddress\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"withdrawAmount\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"newBalance\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"LogWithdrawal\\\",\\\"type\\\":\\\"event\\\"},{\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"fallback\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"deposit\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"enroll\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"enrolled\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getBalance\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"isEnrolled\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"owner\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"withdraw\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{\\\"deposit()\\\":{\\\"returns\\\":{\\\"_0\\\":\\\"The balance of the user after the deposit is made\\\"}},\\\"enroll()\\\":{\\\"returns\\\":{\\\"_0\\\":\\\"The users enrolled status\\\"}},\\\"getBalance()\\\":{\\\"returns\\\":{\\\"_0\\\":\\\"The balance of the user\\\"}},\\\"withdraw()\\\":{\\\"details\\\":\\\"This does not return any excess ether sent to it\\\",\\\"returns\\\":{\\\"_0\\\":\\\"The balance remaining for the user\\\"}}},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{\\\"deposit()\\\":{\\\"notice\\\":\\\"Deposit ether into bank\\\"},\\\"enroll()\\\":{\\\"notice\\\":\\\"Enroll a customer with the bank\\\"},\\\"getBalance()\\\":{\\\"notice\\\":\\\"Get balance\\\"},\\\"withdraw()\\\":{\\\"notice\\\":\\\"Withdraw deposited ether from liquidity pool\\\"}},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/F/Sources/Blockchain Developer Bootcamp 2020/Final Project/contracts/LendingPool.sol\\\":\\\"LendingPool\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/F/Sources/Blockchain Developer Bootcamp 2020/Final Project/contracts/LendingPool.sol\\\":{\\\"keccak256\\\":\\\"0x857af7aa1c9cb59e5f97f792b2d981e675a498973591c6522286517924fc11ba\\\",\\\"urls\\\":[\\\"bzz-raw://136dff072017a33eb1cad2665ea06b035136d671f4063dffdf7c2287eeab0cef\\\",\\\"dweb:/ipfs/QmXV1rKdkFQNYwXvwy9ndYwe6rW9xHFnjNcM6mUBkCS9ZE\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506107ba806100616000396000f3fe6080604052600436106100745760003560e01c80635e9ad6b41161004e5780635e9ad6b4146101375780638da5cb5b14610164578063d0e30db0146101a5578063e65f2a7e146101c357610075565b806310eb0e0e1461007a57806312065fe0146100e15780633ccfd60b1461010c57610075565b5b600080fd5b34801561008657600080fd5b506100c96004803603602081101561009d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101f0565b60405180821515815260200191505060405180910390f35b3480156100ed57600080fd5b506100f6610210565b6040518082815260200191505060405180910390f35b34801561011857600080fd5b50610121610256565b6040518082815260200191505060405180910390f35b34801561014357600080fd5b5061014c610453565b60405180821515815260200191505060405180910390f35b34801561017057600080fd5b506101796104a7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101ad6104cd565b6040518082815260200191505060405180910390f35b3480156101cf57600080fd5b506101d8610656565b60405180821515815260200191505060405180910390f35b60016020528060005260406000206000915054906101000a900460ff1681565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811161037357806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610371573d6000803e3d6000fd5b505b7ff9226daf630542048a23086c6af599511aac100ec8f532793cc9697d061bed7e33826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051808473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a16000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491505090565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610571576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603681526020018061074f6036913960400191505060405180910390fd5b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507fa8126f7572bb1fdeae5b5aa9ec126438b91f658a07873f009d041ae690f3a1933334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f990c442e6adb818b8fa7db3cf1023decd07f7b66e5306928c7ed527d974192bb33604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690509056fe55736572732073686f756c6420626520656e726f6c6c6564206265666f726520746865792063616e206d616b65206465706f73697473a26469706673582212205a893cc61e423940363066db1d0523789362f2e470005d267b36e3ea7cbc35b864736f6c634300060c0033\",\"deployedBytecode\":\"0x6080604052600436106100745760003560e01c80635e9ad6b41161004e5780635e9ad6b4146101375780638da5cb5b14610164578063d0e30db0146101a5578063e65f2a7e146101c357610075565b806310eb0e0e1461007a57806312065fe0146100e15780633ccfd60b1461010c57610075565b5b600080fd5b34801561008657600080fd5b506100c96004803603602081101561009d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101f0565b60405180821515815260200191505060405180910390f35b3480156100ed57600080fd5b506100f6610210565b6040518082815260200191505060405180910390f35b34801561011857600080fd5b50610121610256565b6040518082815260200191505060405180910390f35b34801561014357600080fd5b5061014c610453565b60405180821515815260200191505060405180910390f35b34801561017057600080fd5b506101796104a7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101ad6104cd565b6040518082815260200191505060405180910390f35b3480156101cf57600080fd5b506101d8610656565b60405180821515815260200191505060405180910390f35b60016020528060005260406000206000915054906101000a900460ff1681565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811161037357806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610371573d6000803e3d6000fd5b505b7ff9226daf630542048a23086c6af599511aac100ec8f532793cc9697d061bed7e33826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051808473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a16000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491505090565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610571576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603681526020018061074f6036913960400191505060405180910390fd5b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507fa8126f7572bb1fdeae5b5aa9ec126438b91f658a07873f009d041ae690f3a1933334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f990c442e6adb818b8fa7db3cf1023decd07f7b66e5306928c7ed527d974192bb33604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690509056fe55736572732073686f756c6420626520656e726f6c6c6564206265666f726520746865792063616e206d616b65206465706f73697473a26469706673582212205a893cc61e423940363066db1d0523789362f2e470005d267b36e3ea7cbc35b864736f6c634300060c0033\",\"immutableReferences\":{},\"sourceMap\":\"236:4533:1:-:0;;;1826:119;;;;;;;;;;1927:10;1919:5;;:18;;;;;;;;;;;;;;;;;;236:4533;;;;;;\",\"deployedSourceMap\":\"236:4533:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2294:8;;;584:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2516:160;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4092:674;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2684:165;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;732:20;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;3523:349;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2986:162;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;584:42;;;;;;;;;;;;;;;;;;;;;;:::o;2516:160::-;2559:4;2648:8;:20;2657:10;2648:20;;;;;;;;;;;;;;;;2641:27;;2516:160;:::o;4092:674::-;4146:4;4430:19;4452:8;:20;4461:10;4452:20;;;;;;;;;;;;;;;;4430:42;;4505:8;:20;4514:10;4505:20;;;;;;;;;;;;;;;;4487:14;:38;4483:159;;4566:14;4542:8;:20;4551:10;4542:20;;;;;;;;;;;;;;;;:38;;;;;;;;;;;4595:10;:19;;:35;4615:14;4595:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4483:159;4657:63;4671:10;4683:14;4699:8;:20;4708:10;4699:20;;;;;;;;;;;;;;;;4657:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4738:8;:20;4747:10;4738:20;;;;;;;;;;;;;;;;4731:27;;;4092:674;:::o;2684:165::-;2727:4;2821:8;:20;2830:10;2821:20;;;;;;;;;;;;;;;;;;;;;;;;;2814:27;;2684:165;:::o;732:20::-;;;;;;;;;;;;;:::o;3523:349::-;3579:4;1397:8;:20;1406:10;1397:20;;;;;;;;;;;;;;;;;;;;;;;;;1389:87;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3762:9:::1;3738:8;:20:::0;3747:10:::1;3738:20;;;;;;;;;;;;;;;;:33;;;;;;;;;;;3787:37;3802:10;3814:9;3787:37;;;;;;;;;;;;;;;;;;;;;;;;;;3842:8;:20:::0;3851:10:::1;3842:20;;;;;;;;;;;;;;;;3835:27;;3523:349:::0;:::o;2986:162::-;3020:4;3059;3036:8;:20;3045:10;3036:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;3079:23;3091:10;3079:23;;;;;;;;;;;;;;;;;;;;3120:8;:20;3129:10;3120:20;;;;;;;;;;;;;;;;;;;;;;;;;3113:27;;2986:162;:::o\",\"source\":\"/*\\r\\n    This exercise has been updated to use Solidity version 0.6.12\\r\\n    Breaking changes from 0.5 to 0.6 can be found here:\\r\\n    https://solidity.readthedocs.io/en/v0.6.12/060-breaking-changes.html\\r\\n*/\\r\\n\\r\\npragma solidity ^0.6.12;\\r\\n\\r\\ncontract LendingPool {\\r\\n\\r\\n    //\\r\\n    // State variables\\r\\n    //\\r\\n\\r\\n    /* Fill in the keyword. Hint: We want to protect our users balance from other contracts*/\\r\\n    mapping (address => uint) private balances;\\r\\n\\r\\n    /* Fill in the keyword. We want to create a getter function and allow contracts to be able to see if a user is enrolled.  */\\r\\n    mapping (address => bool) public  enrolled;\\r\\n\\r\\n    /* Let's make sure everyone knows who owns the bank. Use the appropriate keyword for this*/\\r\\n    address public owner;\\r\\n\\r\\n    //\\r\\n    // Events - publicize actions to external listeners\\r\\n    //\\r\\n\\r\\n    /* Add an argument for this event, an accountAddress */\\r\\n    event LogEnrolled(address accountAddress);\\r\\n\\r\\n    /* Add 2 arguments for this event, an accountAddress and an amount */\\r\\n    event LogDepositMade(address accountAddress, uint amount);\\r\\n\\r\\n    /* Create an event called LogWithdrawal */\\r\\n    /* Add 3 arguments for this event, an accountAddress, withdrawAmount and a newBalance */\\r\\n    event LogWithdrawal(address accountAddress, uint withdrawAmount, uint newBalance);\\r\\n\\r\\n    //\\r\\n    // Modifiers\\r\\n    //\\r\\n    modifier onlyEnrolled() {\\r\\n        require(enrolled[msg.sender], \\\"Users should be enrolled before they can make deposits\\\");\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    modifier enoughForWithdraw(uint _amount) {\\r\\n        require (\\r\\n            balances[msg.sender] <= _amount,\\r\\n            \\\"Not enough on account for withdrawal\\\"\\r\\n        );\\r\\n        _;\\r\\n\\r\\n    }\\r\\n\\r\\n\\r\\n    //\\r\\n    // Functions\\r\\n    //\\r\\n\\r\\n    /* Use the appropriate global variable to get the sender of the transaction */\\r\\n    constructor() public {\\r\\n        /* Set the owner to the creator of this contract */\\r\\n        owner = msg.sender;\\r\\n    }\\r\\n\\r\\n    // Fallback function - Called if other functions don't match call or\\r\\n    // sent ether without data\\r\\n    // Typically, called when invalid data is sent\\r\\n    // Added so ether sent to this contract is reverted if the contract fails\\r\\n    // otherwise, the sender's money is transferred to contract\\r\\n    fallback() external payable {\\r\\n        revert();\\r\\n    }\\r\\n\\r\\n    /// @notice Get balance\\r\\n    /// @return The balance of the user\\r\\n    // A SPECIAL KEYWORD prevents function from editing state variables;\\r\\n    // allows function to run locally/off blockchain\\r\\n    function getBalance() public view returns (uint) {\\r\\n        /* Get the balance of the sender of this transaction */\\r\\n        return balances[msg.sender];\\r\\n    }\\r\\n\\r\\n    function isEnrolled() public view returns (bool) {\\r\\n       /* Check if the current sender wallet is enrolled as Lender */\\r\\n       return enrolled[msg.sender];\\r\\n    }\\r\\n\\r\\n\\r\\n    /// @notice Enroll a customer with the bank\\r\\n    /// @return The users enrolled status\\r\\n    // Emit the appropriate event\\r\\n    function enroll() public returns (bool){\\r\\n        enrolled[msg.sender] = true;\\r\\n        emit LogEnrolled(msg.sender);\\r\\n        return enrolled[msg.sender];\\r\\n    }\\r\\n\\r\\n    /// @notice Deposit ether into bank\\r\\n    /// @return The balance of the user after the deposit is made\\r\\n    // Add the appropriate keyword so that this function can receive ether\\r\\n    // Use the appropriate global variables to get the transaction sender and value\\r\\n    // Emit the appropriate event\\r\\n    // Users should be enrolled before they can make deposits\\r\\n    function deposit() public payable onlyEnrolled returns (uint) {\\r\\n        /* Add the amount to the user's balance, call the event associated with a deposit,\\r\\n          then return the balance of the user */\\r\\n        balances[msg.sender] += msg.value;\\r\\n        emit LogDepositMade(msg.sender, msg.value);\\r\\n        return balances[msg.sender];\\r\\n\\r\\n    }\\r\\n\\r\\n    /// @notice Withdraw deposited ether from liquidity pool\\r\\n    /// @dev This does not return any excess ether sent to it\\r\\n    /// @return The balance remaining for the user\\r\\n    // Emit the appropriate event\\r\\n    function withdraw()\\r\\n        public\\r\\n        returns (uint) {\\r\\n        /* If the sender's balance is at least the amount they want to withdraw,\\r\\n           Subtract the amount from the sender's balance, and try to send that amount of ether\\r\\n           to the user attempting to withdraw.\\r\\n           return the user's balance.*/\\r\\n        uint withdrawAmount = balances[msg.sender];\\r\\n        if (withdrawAmount <= balances[msg.sender]) {\\r\\n            balances[msg.sender] -= withdrawAmount;\\r\\n            msg.sender.transfer(withdrawAmount);\\r\\n        }\\r\\n        emit LogWithdrawal(msg.sender, withdrawAmount, balances[msg.sender]);\\r\\n        return balances[msg.sender];\\r\\n    }\\r\\n}\\r\\n\",\"sourcePath\":\"F:/Sources/Blockchain Developer Bootcamp 2020/Final Project/contracts/LendingPool.sol\",\"ast\":{\"absolutePath\":\"/F/Sources/Blockchain Developer Bootcamp 2020/Final Project/contracts/LendingPool.sol\",\"exportedSymbols\":{\"LendingPool\":[219]},\"id\":220,\"license\":null,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":18,\"literals\":[\"solidity\",\"^\",\"0.6\",\".12\"],\"nodeType\":\"PragmaDirective\",\"src\":\"208:24:1\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":219,\"linearizedBaseContracts\":[219],\"name\":\"LendingPool\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":22,\"mutability\":\"mutable\",\"name\":\"balances\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":219,\"src\":\"403:42:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"typeName\":{\"id\":21,\"keyType\":{\"id\":19,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"412:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"403:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"valueType\":{\"id\":20,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"423:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}},\"value\":null,\"visibility\":\"private\"},{\"constant\":false,\"functionSelector\":\"10eb0e0e\",\"id\":26,\"mutability\":\"mutable\",\"name\":\"enrolled\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":219,\"src\":\"584:42:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":25,\"keyType\":{\"id\":23,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"593:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"584:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":24,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"604:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"value\":null,\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"8da5cb5b\",\"id\":28,\"mutability\":\"mutable\",\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":219,\"src\":\"732:20:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":27,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"732:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"public\"},{\"anonymous\":false,\"documentation\":null,\"id\":32,\"name\":\"LogEnrolled\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":31,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":30,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"accountAddress\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":32,\"src\":\"915:22:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":29,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"915:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"914:24:1\"},\"src\":\"897:42:1\"},{\"anonymous\":false,\"documentation\":null,\"id\":38,\"name\":\"LogDepositMade\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":37,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":34,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"accountAddress\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":38,\"src\":\"1043:22:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":33,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1043:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":36,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":38,\"src\":\"1067:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":35,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1067:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1042:37:1\"},\"src\":\"1022:58:1\"},{\"anonymous\":false,\"documentation\":null,\"id\":46,\"name\":\"LogWithdrawal\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":45,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":40,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"accountAddress\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":46,\"src\":\"1250:22:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":39,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1250:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":42,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"withdrawAmount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":46,\"src\":\"1274:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":41,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1274:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":44,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"newBalance\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":46,\"src\":\"1295:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":43,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1295:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1249:62:1\"},\"src\":\"1230:82:1\"},{\"body\":{\"id\":57,\"nodeType\":\"Block\",\"src\":\"1378:118:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":49,\"name\":\"enrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":26,\"src\":\"1397:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":52,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":50,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"1406:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":51,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1406:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1397:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"55736572732073686f756c6420626520656e726f6c6c6564206265666f726520746865792063616e206d616b65206465706f73697473\",\"id\":53,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1419:56:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_53e0bc9613004a61bd44018e7d7b500a9e25b7af81fc174735d5a0016595a178\",\"typeString\":\"literal_string \\\"Users should be enrolled before they can make deposits\\\"\"},\"value\":\"Users should be enrolled before they can make deposits\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_53e0bc9613004a61bd44018e7d7b500a9e25b7af81fc174735d5a0016595a178\",\"typeString\":\"literal_string \\\"Users should be enrolled before they can make deposits\\\"\"}],\"id\":48,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"1389:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":54,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1389:87:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":55,\"nodeType\":\"ExpressionStatement\",\"src\":\"1389:87:1\"},{\"id\":56,\"nodeType\":\"PlaceholderStatement\",\"src\":\"1487:1:1\"}]},\"documentation\":null,\"id\":58,\"name\":\"onlyEnrolled\",\"nodeType\":\"ModifierDefinition\",\"overrides\":null,\"parameters\":{\"id\":47,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1375:2:1\"},\"src\":\"1354:142:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":73,\"nodeType\":\"Block\",\"src\":\"1545:151:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":68,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":63,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"1579:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":66,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":64,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"1588:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":65,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1588:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1579:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<=\",\"rightExpression\":{\"argumentTypes\":null,\"id\":67,\"name\":\"_amount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":60,\"src\":\"1603:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1579:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"4e6f7420656e6f756768206f6e206163636f756e7420666f72207769746864726177616c\",\"id\":69,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1625:38:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_7ac64d51b309c047cc9a5fcde7c7a48960ae1c2ff2bc4e70d430b55df9708084\",\"typeString\":\"literal_string \\\"Not enough on account for withdrawal\\\"\"},\"value\":\"Not enough on account for withdrawal\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_7ac64d51b309c047cc9a5fcde7c7a48960ae1c2ff2bc4e70d430b55df9708084\",\"typeString\":\"literal_string \\\"Not enough on account for withdrawal\\\"\"}],\"id\":62,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"1556:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":70,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1556:118:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":71,\"nodeType\":\"ExpressionStatement\",\"src\":\"1556:118:1\"},{\"id\":72,\"nodeType\":\"PlaceholderStatement\",\"src\":\"1685:1:1\"}]},\"documentation\":null,\"id\":74,\"name\":\"enoughForWithdraw\",\"nodeType\":\"ModifierDefinition\",\"overrides\":null,\"parameters\":{\"id\":61,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":60,\"mutability\":\"mutable\",\"name\":\"_amount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":74,\"src\":\"1531:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":59,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1531:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1530:14:1\"},\"src\":\"1504:192:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":82,\"nodeType\":\"Block\",\"src\":\"1847:98:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":80,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"id\":77,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":28,\"src\":\"1919:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":78,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"1927:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":79,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1927:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"1919:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":81,\"nodeType\":\"ExpressionStatement\",\"src\":\"1919:18:1\"}]},\"documentation\":null,\"id\":83,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":75,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1837:2:1\"},\"returnParameters\":{\"id\":76,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1847:0:1\"},\"scope\":219,\"src\":\"1826:119:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":89,\"nodeType\":\"Block\",\"src\":\"2283:27:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"id\":86,\"name\":\"revert\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-19,-19],\"referencedDeclaration\":-19,\"src\":\"2294:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_revert_pure$__$returns$__$\",\"typeString\":\"function () pure\"}},\"id\":87,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2294:8:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":88,\"nodeType\":\"ExpressionStatement\",\"src\":\"2294:8:1\"}]},\"documentation\":null,\"id\":90,\"implemented\":true,\"kind\":\"fallback\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":84,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2263:2:1\"},\"returnParameters\":{\"id\":85,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2283:0:1\"},\"scope\":219,\"src\":\"2255:55:1\",\"stateMutability\":\"payable\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":{\"id\":101,\"nodeType\":\"Block\",\"src\":\"2565:111:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":96,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"2648:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":99,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":97,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2657:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":98,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"2657:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2648:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":95,\"id\":100,\"nodeType\":\"Return\",\"src\":\"2641:27:1\"}]},\"documentation\":{\"id\":91,\"nodeType\":\"StructuredDocumentation\",\"src\":\"2318:64:1\",\"text\":\"@notice Get balance\\n @return The balance of the user\"},\"functionSelector\":\"12065fe0\",\"id\":102,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getBalance\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":92,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2535:2:1\"},\"returnParameters\":{\"id\":95,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":94,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":102,\"src\":\"2559:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":93,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2559:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2558:6:1\"},\"scope\":219,\"src\":\"2516:160:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":112,\"nodeType\":\"Block\",\"src\":\"2733:116:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":107,\"name\":\"enrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":26,\"src\":\"2821:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":110,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":108,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2830:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":109,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"2830:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2821:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":106,\"id\":111,\"nodeType\":\"Return\",\"src\":\"2814:27:1\"}]},\"documentation\":null,\"functionSelector\":\"5e9ad6b4\",\"id\":113,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"isEnrolled\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":103,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2703:2:1\"},\"returnParameters\":{\"id\":106,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":105,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":113,\"src\":\"2727:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":104,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2727:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2726:6:1\"},\"scope\":219,\"src\":\"2684:165:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":136,\"nodeType\":\"Block\",\"src\":\"3025:123:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":124,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":119,\"name\":\"enrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":26,\"src\":\"3036:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":122,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":120,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3045:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":121,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3045:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3036:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":123,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3059:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"3036:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":125,\"nodeType\":\"ExpressionStatement\",\"src\":\"3036:27:1\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":127,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3091:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":128,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3091:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":126,\"name\":\"LogEnrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":32,\"src\":\"3079:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":129,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3079:23:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":130,\"nodeType\":\"EmitStatement\",\"src\":\"3074:28:1\"},{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":131,\"name\":\"enrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":26,\"src\":\"3120:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":134,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":132,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3129:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":133,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3129:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3120:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":118,\"id\":135,\"nodeType\":\"Return\",\"src\":\"3113:27:1\"}]},\"documentation\":{\"id\":114,\"nodeType\":\"StructuredDocumentation\",\"src\":\"2859:86:1\",\"text\":\"@notice Enroll a customer with the bank\\n @return The users enrolled status\"},\"functionSelector\":\"e65f2a7e\",\"id\":137,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"enroll\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":115,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3001:2:1\"},\"returnParameters\":{\"id\":118,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":117,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":137,\"src\":\"3020:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":116,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3020:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"3019:6:1\"},\"scope\":219,\"src\":\"2986:162:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":165,\"nodeType\":\"Block\",\"src\":\"3585:287:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":151,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":145,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"3738:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":148,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":146,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3747:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":147,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3747:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3738:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"+=\",\"rightHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":149,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3762:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":150,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"value\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3762:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3738:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":152,\"nodeType\":\"ExpressionStatement\",\"src\":\"3738:33:1\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":154,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3802:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":155,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3802:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":156,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3814:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":157,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"value\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3814:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":153,\"name\":\"LogDepositMade\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":38,\"src\":\"3787:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,uint256)\"}},\"id\":158,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3787:37:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":159,\"nodeType\":\"EmitStatement\",\"src\":\"3782:42:1\"},{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":160,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"3842:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":163,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":161,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3851:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":162,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3851:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3842:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":144,\"id\":164,\"nodeType\":\"Return\",\"src\":\"3835:27:1\"}]},\"documentation\":{\"id\":138,\"nodeType\":\"StructuredDocumentation\",\"src\":\"3156:102:1\",\"text\":\"@notice Deposit ether into bank\\n @return The balance of the user after the deposit is made\"},\"functionSelector\":\"d0e30db0\",\"id\":166,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":141,\"modifierName\":{\"argumentTypes\":null,\"id\":140,\"name\":\"onlyEnrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":58,\"src\":\"3557:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3557:12:1\"}],\"name\":\"deposit\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":139,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3539:2:1\"},\"returnParameters\":{\"id\":144,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":143,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":166,\"src\":\"3579:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":142,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3579:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"3578:6:1\"},\"scope\":219,\"src\":\"3523:349:1\",\"stateMutability\":\"payable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":217,\"nodeType\":\"Block\",\"src\":\"4152:614:1\",\"statements\":[{\"assignments\":[173],\"declarations\":[{\"constant\":false,\"id\":173,\"mutability\":\"mutable\",\"name\":\"withdrawAmount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":217,\"src\":\"4430:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":172,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4430:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":178,\"initialValue\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":174,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"4452:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":177,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":175,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4461:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":176,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4461:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4452:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4430:42:1\"},{\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":184,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":179,\"name\":\"withdrawAmount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":173,\"src\":\"4487:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<=\",\"rightExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":180,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"4505:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":183,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":181,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4514:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":182,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4514:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4505:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4487:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseBody\":null,\"id\":201,\"nodeType\":\"IfStatement\",\"src\":\"4483:159:1\",\"trueBody\":{\"id\":200,\"nodeType\":\"Block\",\"src\":\"4527:115:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":190,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":185,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"4542:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":188,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":186,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4551:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":187,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4551:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4542:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"-=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":189,\"name\":\"withdrawAmount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":173,\"src\":\"4566:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4542:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":191,\"nodeType\":\"ExpressionStatement\",\"src\":\"4542:38:1\"},{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":197,\"name\":\"withdrawAmount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":173,\"src\":\"4615:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":192,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4595:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":195,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4595:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"id\":196,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4595:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_transfer_nonpayable$_t_uint256_$returns$__$\",\"typeString\":\"function (uint256)\"}},\"id\":198,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4595:35:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":199,\"nodeType\":\"ExpressionStatement\",\"src\":\"4595:35:1\"}]}},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":203,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4671:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":204,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4671:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"id\":205,\"name\":\"withdrawAmount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":173,\"src\":\"4683:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":206,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"4699:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":209,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":207,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4708:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":208,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4708:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4699:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":202,\"name\":\"LogWithdrawal\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":46,\"src\":\"4657:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,uint256,uint256)\"}},\"id\":210,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4657:63:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":211,\"nodeType\":\"EmitStatement\",\"src\":\"4652:68:1\"},{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":212,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"4738:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":215,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":213,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4747:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":214,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4747:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4738:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":171,\"id\":216,\"nodeType\":\"Return\",\"src\":\"4731:27:1\"}]},\"documentation\":{\"id\":167,\"nodeType\":\"StructuredDocumentation\",\"src\":\"3880:171:1\",\"text\":\"@notice Withdraw deposited ether from liquidity pool\\n @dev This does not return any excess ether sent to it\\n @return The balance remaining for the user\"},\"functionSelector\":\"3ccfd60b\",\"id\":218,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"withdraw\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":168,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"4109:2:1\"},\"returnParameters\":{\"id\":171,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":170,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":218,\"src\":\"4146:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":169,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4146:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"4145:6:1\"},\"scope\":219,\"src\":\"4092:674:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":220,\"src\":\"236:4533:1\"}],\"src\":\"208:4563:1\"},\"legacyAST\":{\"absolutePath\":\"/F/Sources/Blockchain Developer Bootcamp 2020/Final Project/contracts/LendingPool.sol\",\"exportedSymbols\":{\"LendingPool\":[219]},\"id\":220,\"license\":null,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":18,\"literals\":[\"solidity\",\"^\",\"0.6\",\".12\"],\"nodeType\":\"PragmaDirective\",\"src\":\"208:24:1\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":219,\"linearizedBaseContracts\":[219],\"name\":\"LendingPool\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":22,\"mutability\":\"mutable\",\"name\":\"balances\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":219,\"src\":\"403:42:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"typeName\":{\"id\":21,\"keyType\":{\"id\":19,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"412:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"403:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"valueType\":{\"id\":20,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"423:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}},\"value\":null,\"visibility\":\"private\"},{\"constant\":false,\"functionSelector\":\"10eb0e0e\",\"id\":26,\"mutability\":\"mutable\",\"name\":\"enrolled\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":219,\"src\":\"584:42:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"typeName\":{\"id\":25,\"keyType\":{\"id\":23,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"593:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"584:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"},\"valueType\":{\"id\":24,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"604:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}},\"value\":null,\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"8da5cb5b\",\"id\":28,\"mutability\":\"mutable\",\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":219,\"src\":\"732:20:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":27,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"732:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"public\"},{\"anonymous\":false,\"documentation\":null,\"id\":32,\"name\":\"LogEnrolled\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":31,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":30,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"accountAddress\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":32,\"src\":\"915:22:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":29,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"915:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"914:24:1\"},\"src\":\"897:42:1\"},{\"anonymous\":false,\"documentation\":null,\"id\":38,\"name\":\"LogDepositMade\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":37,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":34,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"accountAddress\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":38,\"src\":\"1043:22:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":33,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1043:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":36,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":38,\"src\":\"1067:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":35,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1067:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1042:37:1\"},\"src\":\"1022:58:1\"},{\"anonymous\":false,\"documentation\":null,\"id\":46,\"name\":\"LogWithdrawal\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":45,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":40,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"accountAddress\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":46,\"src\":\"1250:22:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":39,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1250:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":42,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"withdrawAmount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":46,\"src\":\"1274:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":41,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1274:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":44,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"newBalance\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":46,\"src\":\"1295:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":43,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1295:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1249:62:1\"},\"src\":\"1230:82:1\"},{\"body\":{\"id\":57,\"nodeType\":\"Block\",\"src\":\"1378:118:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":49,\"name\":\"enrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":26,\"src\":\"1397:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":52,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":50,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"1406:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":51,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1406:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1397:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"55736572732073686f756c6420626520656e726f6c6c6564206265666f726520746865792063616e206d616b65206465706f73697473\",\"id\":53,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1419:56:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_53e0bc9613004a61bd44018e7d7b500a9e25b7af81fc174735d5a0016595a178\",\"typeString\":\"literal_string \\\"Users should be enrolled before they can make deposits\\\"\"},\"value\":\"Users should be enrolled before they can make deposits\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_53e0bc9613004a61bd44018e7d7b500a9e25b7af81fc174735d5a0016595a178\",\"typeString\":\"literal_string \\\"Users should be enrolled before they can make deposits\\\"\"}],\"id\":48,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"1389:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":54,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1389:87:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":55,\"nodeType\":\"ExpressionStatement\",\"src\":\"1389:87:1\"},{\"id\":56,\"nodeType\":\"PlaceholderStatement\",\"src\":\"1487:1:1\"}]},\"documentation\":null,\"id\":58,\"name\":\"onlyEnrolled\",\"nodeType\":\"ModifierDefinition\",\"overrides\":null,\"parameters\":{\"id\":47,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1375:2:1\"},\"src\":\"1354:142:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":73,\"nodeType\":\"Block\",\"src\":\"1545:151:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":68,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":63,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"1579:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":66,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":64,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"1588:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":65,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1588:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"1579:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<=\",\"rightExpression\":{\"argumentTypes\":null,\"id\":67,\"name\":\"_amount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":60,\"src\":\"1603:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"1579:31:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},{\"argumentTypes\":null,\"hexValue\":\"4e6f7420656e6f756768206f6e206163636f756e7420666f72207769746864726177616c\",\"id\":69,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1625:38:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_7ac64d51b309c047cc9a5fcde7c7a48960ae1c2ff2bc4e70d430b55df9708084\",\"typeString\":\"literal_string \\\"Not enough on account for withdrawal\\\"\"},\"value\":\"Not enough on account for withdrawal\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},{\"typeIdentifier\":\"t_stringliteral_7ac64d51b309c047cc9a5fcde7c7a48960ae1c2ff2bc4e70d430b55df9708084\",\"typeString\":\"literal_string \\\"Not enough on account for withdrawal\\\"\"}],\"id\":62,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-18,-18],\"referencedDeclaration\":-18,\"src\":\"1556:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$\",\"typeString\":\"function (bool,string memory) pure\"}},\"id\":70,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"1556:118:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":71,\"nodeType\":\"ExpressionStatement\",\"src\":\"1556:118:1\"},{\"id\":72,\"nodeType\":\"PlaceholderStatement\",\"src\":\"1685:1:1\"}]},\"documentation\":null,\"id\":74,\"name\":\"enoughForWithdraw\",\"nodeType\":\"ModifierDefinition\",\"overrides\":null,\"parameters\":{\"id\":61,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":60,\"mutability\":\"mutable\",\"name\":\"_amount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":74,\"src\":\"1531:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":59,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1531:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1530:14:1\"},\"src\":\"1504:192:1\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":82,\"nodeType\":\"Block\",\"src\":\"1847:98:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":80,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"id\":77,\"name\":\"owner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":28,\"src\":\"1919:5:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":78,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"1927:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":79,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"1927:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"src\":\"1919:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":81,\"nodeType\":\"ExpressionStatement\",\"src\":\"1919:18:1\"}]},\"documentation\":null,\"id\":83,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":75,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1837:2:1\"},\"returnParameters\":{\"id\":76,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1847:0:1\"},\"scope\":219,\"src\":\"1826:119:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":89,\"nodeType\":\"Block\",\"src\":\"2283:27:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[],\"expression\":{\"argumentTypes\":[],\"id\":86,\"name\":\"revert\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[-19,-19],\"referencedDeclaration\":-19,\"src\":\"2294:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_revert_pure$__$returns$__$\",\"typeString\":\"function () pure\"}},\"id\":87,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2294:8:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":88,\"nodeType\":\"ExpressionStatement\",\"src\":\"2294:8:1\"}]},\"documentation\":null,\"id\":90,\"implemented\":true,\"kind\":\"fallback\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":84,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2263:2:1\"},\"returnParameters\":{\"id\":85,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2283:0:1\"},\"scope\":219,\"src\":\"2255:55:1\",\"stateMutability\":\"payable\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":{\"id\":101,\"nodeType\":\"Block\",\"src\":\"2565:111:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":96,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"2648:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":99,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":97,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2657:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":98,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"2657:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2648:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":95,\"id\":100,\"nodeType\":\"Return\",\"src\":\"2641:27:1\"}]},\"documentation\":{\"id\":91,\"nodeType\":\"StructuredDocumentation\",\"src\":\"2318:64:1\",\"text\":\"@notice Get balance\\n @return The balance of the user\"},\"functionSelector\":\"12065fe0\",\"id\":102,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getBalance\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":92,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2535:2:1\"},\"returnParameters\":{\"id\":95,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":94,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":102,\"src\":\"2559:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":93,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2559:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2558:6:1\"},\"scope\":219,\"src\":\"2516:160:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":112,\"nodeType\":\"Block\",\"src\":\"2733:116:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":107,\"name\":\"enrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":26,\"src\":\"2821:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":110,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":108,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"2830:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":109,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"2830:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2821:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":106,\"id\":111,\"nodeType\":\"Return\",\"src\":\"2814:27:1\"}]},\"documentation\":null,\"functionSelector\":\"5e9ad6b4\",\"id\":113,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"isEnrolled\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":103,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2703:2:1\"},\"returnParameters\":{\"id\":106,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":105,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":113,\"src\":\"2727:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":104,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2727:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2726:6:1\"},\"scope\":219,\"src\":\"2684:165:1\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":136,\"nodeType\":\"Block\",\"src\":\"3025:123:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":124,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":119,\"name\":\"enrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":26,\"src\":\"3036:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":122,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":120,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3045:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":121,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3045:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3036:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":123,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3059:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"src\":\"3036:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"id\":125,\"nodeType\":\"ExpressionStatement\",\"src\":\"3036:27:1\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":127,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3091:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":128,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3091:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":126,\"name\":\"LogEnrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":32,\"src\":\"3079:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":129,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3079:23:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":130,\"nodeType\":\"EmitStatement\",\"src\":\"3074:28:1\"},{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":131,\"name\":\"enrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":26,\"src\":\"3120:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_bool_$\",\"typeString\":\"mapping(address => bool)\"}},\"id\":134,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":132,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3129:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":133,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3129:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3120:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"functionReturnParameters\":118,\"id\":135,\"nodeType\":\"Return\",\"src\":\"3113:27:1\"}]},\"documentation\":{\"id\":114,\"nodeType\":\"StructuredDocumentation\",\"src\":\"2859:86:1\",\"text\":\"@notice Enroll a customer with the bank\\n @return The users enrolled status\"},\"functionSelector\":\"e65f2a7e\",\"id\":137,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"enroll\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":115,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3001:2:1\"},\"returnParameters\":{\"id\":118,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":117,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":137,\"src\":\"3020:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":116,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3020:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"3019:6:1\"},\"scope\":219,\"src\":\"2986:162:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":165,\"nodeType\":\"Block\",\"src\":\"3585:287:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":151,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":145,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"3738:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":148,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":146,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3747:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":147,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3747:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3738:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"+=\",\"rightHandSide\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":149,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3762:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":150,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"value\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3762:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3738:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":152,\"nodeType\":\"ExpressionStatement\",\"src\":\"3738:33:1\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":154,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3802:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":155,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3802:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":156,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3814:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":157,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"value\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3814:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":153,\"name\":\"LogDepositMade\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":38,\"src\":\"3787:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,uint256)\"}},\"id\":158,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3787:37:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":159,\"nodeType\":\"EmitStatement\",\"src\":\"3782:42:1\"},{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":160,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"3842:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":163,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":161,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"3851:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":162,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"3851:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3842:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":144,\"id\":164,\"nodeType\":\"Return\",\"src\":\"3835:27:1\"}]},\"documentation\":{\"id\":138,\"nodeType\":\"StructuredDocumentation\",\"src\":\"3156:102:1\",\"text\":\"@notice Deposit ether into bank\\n @return The balance of the user after the deposit is made\"},\"functionSelector\":\"d0e30db0\",\"id\":166,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":141,\"modifierName\":{\"argumentTypes\":null,\"id\":140,\"name\":\"onlyEnrolled\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":58,\"src\":\"3557:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"3557:12:1\"}],\"name\":\"deposit\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":139,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"3539:2:1\"},\"returnParameters\":{\"id\":144,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":143,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":166,\"src\":\"3579:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":142,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3579:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"3578:6:1\"},\"scope\":219,\"src\":\"3523:349:1\",\"stateMutability\":\"payable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":217,\"nodeType\":\"Block\",\"src\":\"4152:614:1\",\"statements\":[{\"assignments\":[173],\"declarations\":[{\"constant\":false,\"id\":173,\"mutability\":\"mutable\",\"name\":\"withdrawAmount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":217,\"src\":\"4430:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":172,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4430:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":178,\"initialValue\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":174,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"4452:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":177,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":175,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4461:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":176,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4461:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4452:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"4430:42:1\"},{\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":184,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"id\":179,\"name\":\"withdrawAmount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":173,\"src\":\"4487:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<=\",\"rightExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":180,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"4505:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":183,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":181,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4514:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":182,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4514:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4505:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4487:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseBody\":null,\"id\":201,\"nodeType\":\"IfStatement\",\"src\":\"4483:159:1\",\"trueBody\":{\"id\":200,\"nodeType\":\"Block\",\"src\":\"4527:115:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":190,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":185,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"4542:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":188,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":186,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4551:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":187,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4551:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4542:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"-=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":189,\"name\":\"withdrawAmount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":173,\"src\":\"4566:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4542:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":191,\"nodeType\":\"ExpressionStatement\",\"src\":\"4542:38:1\"},{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":197,\"name\":\"withdrawAmount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":173,\"src\":\"4615:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"expression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":192,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4595:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":195,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4595:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"id\":196,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"transfer\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4595:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_transfer_nonpayable$_t_uint256_$returns$__$\",\"typeString\":\"function (uint256)\"}},\"id\":198,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4595:35:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":199,\"nodeType\":\"ExpressionStatement\",\"src\":\"4595:35:1\"}]}},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":203,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4671:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":204,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4671:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"id\":205,\"name\":\"withdrawAmount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":173,\"src\":\"4683:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":206,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"4699:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":209,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":207,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4708:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":208,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4708:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4699:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":202,\"name\":\"LogWithdrawal\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":46,\"src\":\"4657:13:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,uint256,uint256)\"}},\"id\":210,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4657:63:1\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":211,\"nodeType\":\"EmitStatement\",\"src\":\"4652:68:1\"},{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":212,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":22,\"src\":\"4738:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":215,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":213,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":-15,\"src\":\"4747:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":214,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"4747:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4738:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":171,\"id\":216,\"nodeType\":\"Return\",\"src\":\"4731:27:1\"}]},\"documentation\":{\"id\":167,\"nodeType\":\"StructuredDocumentation\",\"src\":\"3880:171:1\",\"text\":\"@notice Withdraw deposited ether from liquidity pool\\n @dev This does not return any excess ether sent to it\\n @return The balance remaining for the user\"},\"functionSelector\":\"3ccfd60b\",\"id\":218,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"withdraw\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":168,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"4109:2:1\"},\"returnParameters\":{\"id\":171,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":170,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":218,\"src\":\"4146:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":169,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4146:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"4145:6:1\"},\"scope\":219,\"src\":\"4092:674:1\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":220,\"src\":\"236:4533:1\"}],\"src\":\"208:4563:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.6.12+commit.27d51765.Emscripten.clang\"},\"networks\":{\"5777\":{\"events\":{\"0xa8126f7572bb1fdeae5b5aa9ec126438b91f658a07873f009d041ae690f3a193\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"accountAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"LogDepositMade\",\"type\":\"event\"},\"0x990c442e6adb818b8fa7db3cf1023decd07f7b66e5306928c7ed527d974192bb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"accountAddress\",\"type\":\"address\"}],\"name\":\"LogEnrolled\",\"type\":\"event\"},\"0xf9226daf630542048a23086c6af599511aac100ec8f532793cc9697d061bed7e\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"accountAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newBalance\",\"type\":\"uint256\"}],\"name\":\"LogWithdrawal\",\"type\":\"event\"}},\"links\":{},\"address\":\"0xf3F39E2156b8F26F50E2304FF239B3cAD5D096b3\",\"transactionHash\":\"0x48864d8c01dd1698e2eb323e7449e100f3f3b4a76b9e326b486a7bd080041227\"}},\"schemaVersion\":\"3.3.2\",\"updatedAt\":\"2020-12-22T09:33:42.501Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"deposit()\":{\"returns\":{\"_0\":\"The balance of the user after the deposit is made\"}},\"enroll()\":{\"returns\":{\"_0\":\"The users enrolled status\"}},\"getBalance()\":{\"returns\":{\"_0\":\"The balance of the user\"}},\"withdraw()\":{\"details\":\"This does not return any excess ether sent to it\",\"returns\":{\"_0\":\"The balance remaining for the user\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"deposit()\":{\"notice\":\"Deposit ether into bank\"},\"enroll()\":{\"notice\":\"Enroll a customer with the bank\"},\"getBalance()\":{\"notice\":\"Get balance\"},\"withdraw()\":{\"notice\":\"Withdraw deposited ether from liquidity pool\"}},\"version\":1}}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">ETHEREUM GIFT CARDS</mat-toolbar>\n<!-- <app-meta-sender></app-meta-sender> -->\n<app-lending-admin></app-lending-admin>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lending/lending-admin/lending-admin.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lending/lending-admin/lending-admin.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"headline center-content\">\n  LENDER ADMINISTRATION\n</h1>\n<mat-grid-list cols=\"2\" rowHeight=\"180px\">\n  <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n    <mat-form-field id=\"address-selector\" class=\"half-width\">\n      <mat-label>Selected Wallet Address:</mat-label>\n      <input matInput disabled value=\"{{model.account}}\" (selectionChange)=\"refreshBalance()\">\n    </mat-form-field>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" *ngIf=\"!this.model.enrolled\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>ENROLL CURRENT ADDRESS AS LENDER?</mat-card-title>\n      </mat-card-header>\n      <mat-card-actions>\n        <button mat-button id=\"send\" (click)=\"enrollLender()\">ENROLL</button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" *ngIf=\"this.model.enrolled\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>ADD FUNDS (ETH):</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <mat-form-field>\n          <mat-label>ADD FUNDS (ETH):</mat-label>\n          <input type=\"text\" matInput id=\"amount\" placeholder=\"Amount\" (change)=\"setAmount($event)\">\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button id=\"deposit\" (click)=\"depositFunds()\">DEPOSIT</button>\n      </mat-card-actions>\n\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" *ngIf=\"this.model.enrolled\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>WITHDRAW FUNDS (ETH):</mat-card-title>\n      </mat-card-header>\n      <mat-card-actions>\n        <button mat-button id=\"withdraw\" (click)=\"withdrawFunds()\">WITHDRAW</button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" *ngIf=\"this.model.enrolled\">\n    <mat-card>\n      <mat-card-title>Status</mat-card-title>\n      <mat-card-content>\n        <p>You have <span id=\"balance\">{{model.balance}}</span> ETH deposited</p>\n      </mat-card-content>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/web3-eth-accounts/src sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/web3-eth-accounts/src sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/web3-eth-accounts/src sync recursive";

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lending_lending_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lending/lending.module */ "./src/app/lending/lending.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _lending_lending_module__WEBPACK_IMPORTED_MODULE_6__["LendingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/lending/lending-admin/lending-admin.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/lending/lending-admin/lending-admin.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlbmRpbmcvbGVuZGluZy1hZG1pbi9sZW5kaW5nLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/lending/lending-admin/lending-admin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/lending/lending-admin/lending-admin.component.ts ***!
  \******************************************************************/
/*! exports provided: LendingAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LendingAdminComponent", function() { return LendingAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var lendingPool_artifacts = __webpack_require__(/*! ../../../../build/contracts/LendingPool.json */ "./build/contracts/LendingPool.json");
var LendingAdminComponent = /** @class */ (function () {
    function LendingAdminComponent(web3Service, matSnackBar) {
        this.web3Service = web3Service;
        this.matSnackBar = matSnackBar;
        this.model = {
            amount: 0,
            enrolled: false,
            balance: 0,
            account: ''
        };
        this.status = '';
        console.log('Constructor: ' + web3Service);
    }
    LendingAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit: ' + this.web3Service);
        console.log(this);
        this.watchAccount();
        this.web3Service.artifactsToContract(lendingPool_artifacts)
            .then(function (LendingPoolAbstraction) {
            _this.LendingPool = LendingPoolAbstraction;
            _this.LendingPool.deployed().then(function (deployed) {
                console.log(deployed);
                deployed.LogDepositMade({}, function (err, ev) {
                    console.log('Transfer event came in, refreshing balance');
                    _this.refreshBalance();
                });
                deployed.LogWithdrawal({}, function (err, ev) {
                    console.log('Withdrawal event came in, refreshing balance');
                    _this.refreshBalance();
                });
            });
        });
    };
    LendingAdminComponent.prototype.watchAccount = function () {
        var _this = this;
        this.web3Service.accountsObservable.subscribe(function (accounts) {
            _this.accounts = accounts;
            _this.model.account = accounts[0];
            _this.refreshBalance();
        });
    };
    LendingAdminComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    LendingAdminComponent.prototype.refreshBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedLendingPool, lendingPoolBalance, lendingIsEnrolled, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Refreshing balance');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.LendingPool.deployed()];
                    case 2:
                        deployedLendingPool = _a.sent();
                        console.log(deployedLendingPool);
                        console.log('Account', this.model.account);
                        return [4 /*yield*/, deployedLendingPool.getBalance.call({ from: this.model.account })];
                    case 3:
                        lendingPoolBalance = _a.sent();
                        return [4 /*yield*/, deployedLendingPool.isEnrolled.call({ from: this.model.account })];
                    case 4:
                        lendingIsEnrolled = _a.sent();
                        console.log('Is Current wallet enrolled: ' + lendingIsEnrolled);
                        console.log('Found balance: ' + lendingPoolBalance);
                        this.model.balance = this.web3Service.convertFromWei(lendingPoolBalance);
                        this.model.enrolled = lendingIsEnrolled;
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.setStatus('Error getting balance; see log.');
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LendingAdminComponent.prototype.enrollLender = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedLendingPool, transaction, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.LendingPool) {
                            this.setStatus('Lending Pool is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        // const amount = this.model.amount;
                        // const receiver = this.model.receiver;
                        // console.log('Sending coins' + amount + ' to ' + receiver);
                        this.setStatus('Initiating transaction (enroll lender)... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.LendingPool.deployed()];
                    case 2:
                        deployedLendingPool = _a.sent();
                        return [4 /*yield*/, deployedLendingPool.enroll({ from: this.model.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                            this.model.enrolled = true;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.log(e_2);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LendingAdminComponent.prototype.depositFunds = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var amount, deployedLendingPool, transaction, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.LendingPool) {
                            this.setStatus('Lending Pool is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        amount = this.model.amount;
                        console.log('Deposit eth to the liquitidy pool ' + amount);
                        this.setStatus('Initiating transaction (deposit funds)... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.LendingPool.deployed()];
                    case 2:
                        deployedLendingPool = _a.sent();
                        return [4 /*yield*/, deployedLendingPool.deposit.sendTransaction({ from: this.model.account, value: amount })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                            this.model.amount = 0;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        console.log(e_3);
                        this.setStatus('Error deposit funds; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LendingAdminComponent.prototype.setAmount = function (e) {
        console.log('Setting amount: ' + e.target.value);
        if (e.target.value !== '') {
            this.model.amount = this.web3Service.convertToWei(e.target.value);
        }
        console.log('this.model.amount: ' + this.model.amount);
    };
    LendingAdminComponent.prototype.withdrawFunds = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedLendingPool, transaction, e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.LendingPool) {
                            this.setStatus('Lending Pool is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        console.log('Withdraw eth from the liquitidy pool ');
                        this.setStatus('Initiating transaction (withdraw funds)... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.LendingPool.deployed()];
                    case 2:
                        deployedLendingPool = _a.sent();
                        return [4 /*yield*/, deployedLendingPool.withdraw.sendTransaction({ from: this.model.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_4 = _a.sent();
                        console.log(e_4);
                        this.setStatus('Error withdrawing funds; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LendingAdminComponent.ctorParameters = function () { return [
        { type: _util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    LendingAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lending-admin',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lending-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lending/lending-admin/lending-admin.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lending-admin.component.css */ "./src/app/lending/lending-admin/lending-admin.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], LendingAdminComponent);
    return LendingAdminComponent;
}());



/***/ }),

/***/ "./src/app/lending/lending.module.ts":
/*!*******************************************!*\
  !*** ./src/app/lending/lending.module.ts ***!
  \*******************************************/
/*! exports provided: LendingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LendingModule", function() { return LendingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lending_admin_lending_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lending-admin/lending-admin.component */ "./src/app/lending/lending-admin/lending-admin.component.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.module */ "./src/app/util/util.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








var LendingModule = /** @class */ (function () {
    function LendingModule() {
    }
    LendingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_4__["UtilModule"]
            ],
            declarations: [_lending_admin_lending_admin_component__WEBPACK_IMPORTED_MODULE_3__["LendingAdminComponent"]],
            exports: [_lending_admin_lending_admin_component__WEBPACK_IMPORTED_MODULE_3__["LendingAdminComponent"]]
        })
    ], LendingModule);
    return LendingModule;
}());



/***/ }),

/***/ "./src/app/util/util.module.ts":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "./src/app/util/web3.service.ts");




var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]
            ],
            declarations: []
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ }),

/***/ "./src/app/util/web3.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/web3.service.ts ***!
  \**************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
var contract = __webpack_require__(/*! @truffle/contract */ "./node_modules/@truffle/contract/index.js");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        var _this = this;
        this.ready = false;
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
        });
    }
    Web3Service.prototype.bootstrapWeb3 = function () {
        var _this = this;
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.ethereum !== 'undefined') {
            // Use Mist/MetaMask's provider
            window.ethereum.enable().then(function () {
                _this.web3 = new Web3(window.ethereum);
            });
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        setInterval(function () { return _this.refreshAccounts(); }, 10000);
    };
    Web3Service.prototype.convertToWei = function (ethValue) {
        return this.web3.utils.toWei(ethValue, 'ether');
    };
    Web3Service.prototype.convertFromWei = function (weiValue) {
        return this.web3.utils.fromWei(weiValue, 'ether');
    };
    Web3Service.prototype.artifactsToContract = function (artifacts) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var delay, contractAbstraction;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.web3) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.artifactsToContract(artifacts)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        contractAbstraction = contract(artifacts);
                        contractAbstraction.setProvider(this.web3.currentProvider);
                        return [2 /*return*/, contractAbstraction];
                }
            });
        });
    };
    Web3Service.prototype.refreshAccounts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var accs;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web3.eth.getAccounts()];
                    case 1:
                        accs = _a.sent();
                        console.log('Refreshing accounts');
                        // Get the initial account balance so it can be displayed.
                        if (accs.length === 0) {
                            console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                            return [2 /*return*/];
                        }
                        if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
                            console.log('Observed new accounts');
                            this.accountsObservable.next(accs);
                            this.accounts = accs;
                        }
                        this.ready = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Sources\Blockchain Developer Bootcamp 2020\Final Project\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map