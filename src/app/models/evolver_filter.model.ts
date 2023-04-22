export class EvolverFilter{

  constructor(
    name: String,
    values: [],
    _id?: String,
  ){}
}

export interface EvolverFilterInterface{
  ok: boolean;
  evolverFilters: EvolverFilter[];
  uid: String;

}

export interface EvolverFilter{
    name: String,
    values: [],
    _id?: String,
}
