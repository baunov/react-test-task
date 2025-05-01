export type SymbolInfo = {
    symbol: string; // "BTCUSDT"
    status: 'TRADING' | string;
    baseAsset: string; // "BTC"
    quoteAsset: string; // "USDT"
};

//exchange-info
export type ExchangeInfo = {
    symbols: SymbolInfo[];
};
