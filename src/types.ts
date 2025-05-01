//exchange-info
export type ExchangeInfoResponse = {
  symbols: SymbolInfo[];
};

export type SymbolInfo = {
  symbol: string; // "BTCUSDT"
  status: 'TRADING' | string;
  baseAsset: string; // "BTC"
  quoteAsset: string; // "USDT"
};

//ws@trade
export type TradeMessage = {
  e: 'trade'; // event type
  s: string; // symbol, e.g. "BTCUSDT"
  p: string; // price as string
  T: number; // trade time (timestamp)
};
