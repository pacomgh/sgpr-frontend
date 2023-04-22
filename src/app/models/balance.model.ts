

export class Balance{

  constructor(
    coin: String,
    availableForWithdrawal: String,
    availableWithoutBorrow: String,
    exchange: String,
    free: String,
    spotBorrow: String,
    total: String,
    usdValue: String,
    _id?: String,
  ){}
}

export interface BalanceInterface{
  ok: boolean;
  balance: Balance[];
  uid: String;

}

export interface Balance{
  coin: String,
  availableForWithdrawal: String,
  availableWithoutBorrow: String,
  exchange: String,
  free: String,
  spotBorrow: String,
  total: String,
  usdValue: String,
  _id?: String,
}
