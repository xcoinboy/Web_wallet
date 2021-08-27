//export {};
let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl: [
        "https://wallet.urbancash.org/api/"
    ],
    nodeList: [
        "https://publicnode.urbancash.org/"
    ],
	nodeUrl: "",
	mainnetExplorerUrl: "https://explorer.urbancash.org/",
	mainnetExplorerUrlHash: "https://explorer.urbancash.org/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "https://explorer.urbancash.org/?hash={ID}#blockchain_block",
	testnetExplorerUrl: "https://testnet.urbancash.org/",
	testnetExplorerUrlHash: "https://texplorer.urbancash.org/?hash={ID}#blockchain_transaction",
	testnetExplorerUrlBlock: "https://texplorer.urbancash.org/?hash={ID}#blockchain_block",
	testnet: false,
    coinUnitPlaces: 8,
    coinDisplayUnitPlaces: 2,
	txMinConfirms: 10,
	txCoinbaseMinConfirms: 10,
	addressPrefix: 0x6f523,
	integratedAddressPrefix: 0x6f524,
	addressPrefixTestnet: 0x6f523,
	integratedAddressPrefixTestnet: 0x6f523,
	subAddressPrefix: 113,
	subAddressPrefixTestnet: 113,
	coinFee: new JSBigInt('50000'),
	feePerKB: new JSBigInt('100000'), //for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('100000'),//used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,
	syncBlockCount: 50,

	coinSymbol: 'URBC',
	openAliasPrefix: "urbc",
	coinName: 'Urbancash',
	coinUriPrefix: 'urbancash:',
	avgBlockTime: 60,
	maxBlockNumber: 500000000,
};
let randInt = Math.floor(Math.random() * Math.floor(config.nodeList.length));
config.nodeUrl = config.nodeList[randInt];
