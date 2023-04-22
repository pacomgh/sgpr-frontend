

export class Order{

  constructor(
    exchange_id:String,
    id:Number,
    amount:Number,
    average:Number,
    clientOrderId:String,
    cost:Number,
    datetime:Date,
    fee:[],
    fees:[],
    filled:Number,
    info:[],
    lastTradeTimestamp:Date,
    local_params:[],
    n_trade:Number,
    postOnly:Boolean,
    price:Number,
    reduceOnly:Boolean,
    remaining:Number,
    side:String,
    status:String,
    stopPrice:String,
    symbol:String,
    timeInForce:String,
    timestamp:Number,
    trades:[],
    type:String,
    updated:Boolean,
    _id?: String,
  ){}
}

export interface OrderInterface{
  ok: boolean;
  orders: Order[];
  uid: String;
}

export interface Order{
  exchange_id:String,
  id:Number,
  amount:Number,
  average:Number,
  clientOrderId:String,
  cost:Number,
  datetime:Date,
  fee:[],
  fees:[],
  filled:Number,
  info:[],
  lastTradeTimestamp:Date,
  local_params:[],
  n_trade:Number,
  postOnly:Boolean,
  price:Number,
  reduceOnly:Boolean,
  remaining:Number,
  side:String,
  status:String,
  stopPrice:String,
  symbol:String,
  timeInForce:String,
  timestamp:Number,
  trades:[],
  type:String,
  updated:Boolean,
  _id?: String,
}
