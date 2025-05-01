//ws@trade
export type TradeMessage = {
    e: 'trade'; // event type
    s: string; // symbol, e.g. "BTCUSDT"
    p: string; // price as string
    T: number; // trade time (timestamp)
};
