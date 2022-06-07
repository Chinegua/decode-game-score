import {RowDto} from "../../application/dto/row.dto";
import {ScoreDto} from "../dtos/score.dto";
import {ResultDto} from "../dtos/result.dto";

export class DecodeService {

  /**
   *
   * @param rows all csv rows
   */
  public decode(rows: RowDto[]): ResultDto[] {
    let results: ResultDto[] = []
    rows.forEach(row => {
      results.push(new ScoreDto(row).getDecodeScore())
    })
    return this.sort(results);
  }

  /**
   * Sort results
   * @param results all ResultDto
   * @private
   */
  private sort(results: ResultDto[]): ResultDto[] {
    return results.sort((arrayItemA, arrayItemB) => {
      if (arrayItemA.score < arrayItemB.score) {
        return 1
      }
      if (arrayItemA.score > arrayItemB.score) {
        return -1
      }
      return 0
    })
  }
}