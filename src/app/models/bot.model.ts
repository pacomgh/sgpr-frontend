

export class Bot{

  constructor(
    account: String,
    apiKey: String,
    datetime: Date,
    exchange: String,
    exchange_credentials: [],
    exit_on_signal: Boolean,
    go_long: Boolean,
    go_short: Boolean,
    ignore_last_candle: Boolean,
    initial_balance: Number,
    initial_entry_allocation: Number,
    last_signal: Number,
    market_type: String,
    master: String,
    next_run: Date,
    password: String,
    portfolio_id: String,
    reinvest_profits: Boolean,
    running: Boolean,
    secret: Boolean,
    server: Boolean,
    signal_distance: Number,
    stop_loss_value: Number,
    strat_params: [],
    _id?: String,
  ){}
}

export interface BotInterface{
  ok: boolean;
  bots: Bot[];
  uid: String;
}

export interface Bot{
  account: String,
    apiKey: String,
    datetime: Date,
    exchange: String,
    exchange_credentials: [],
    exit_on_signal: Boolean,
    go_long: Boolean,
    go_short: Boolean,
    ignore_last_candle: Boolean,
    initial_balance: Number,
    initial_entry_allocation: Number,
    last_signal: Number,
    market_type: String,
    master: String,
    next_run: Date,
    password: String,
    portfolio_id: String,
    reinvest_profits: Boolean,
    running: Boolean,
    secret: Boolean,
    server: Boolean,
    signal_distance: Number,
    stop_loss_value: Number,
    _id?: String,
}
