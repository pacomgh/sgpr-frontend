

export class HistPosition{

  constructor(
    bot_id: String,
    signal: Number,
    datetime: Date,
    processing_time: Number,
    _id?: String,
  ){}
}

export interface HistPositionInterface{
  ok: boolean;
  histPositions: HistPosition[];
  uid: String;

}

export interface HistPosition{
  bot_id: String,
  signal: Number,
  datetime: Date,
  processing_time: Number,
  _id?: String,
}
