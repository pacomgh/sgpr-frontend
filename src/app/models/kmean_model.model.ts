

export class KmeanModel{

  constructor(
    trading_model: [],
    params: Object,
    _id?: String,
  ){}
}

export interface KmeanModelInterface{
  ok: boolean;
  kmeanModels: KmeanModel[];
  uid: String;

}

export interface KmeanModel{
  trading_model: [],
  params: Object,
  _id?: String,
}
