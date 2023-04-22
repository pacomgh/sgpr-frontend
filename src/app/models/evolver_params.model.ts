

export class EvolverParams{

  constructor(
    name: String,
    values:[],
    _id?: String,
  ){}
}

export interface EvolverParamsInterface{
  ok: boolean;
  evolverParamss: EvolverParams[];
  uid: String;

}

export interface EvolverParams{
  name: String,
  values:[],
  _id?: String,
}
