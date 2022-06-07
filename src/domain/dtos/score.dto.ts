import {RowDto} from "../../application/dto/row.dto";
import {ResultDto} from "./result.dto";

export class ScoreDto {

  _player: string;
  _alphabet: string[];
  _score: string[];


  constructor(row: RowDto) {
    this._player = row.player;
    this._alphabet = row.alphabet.split('');
    this._score = row.score.split('').reverse();
  }

  /**
   * Decode algorithm
   */
  public getDecodeScore(): ResultDto {
    let scoreCalculation = 0;
    for (let i = 0; i < this._score.length; i++) {
      if(this._alphabet.indexOf(this._score[i]) == -1){
        throw Error("Alfabeto incorrecto para el usuario " + this._player);
      }
      scoreCalculation = scoreCalculation + (this._alphabet.indexOf(this._score[i]) * (this._alphabet.length ** i))
    }
    return {
      player: this._player,
      score: scoreCalculation
    };
  }
}