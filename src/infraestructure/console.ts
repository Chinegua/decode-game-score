import {container} from "../awilix.config";
import {ReadCsvService} from "../application/readCsv.service";
import {RowDto} from "../application/dto/row.dto";
import {DecodeService} from "../domain/service/decode.service";
import {MessagesService} from "./service/message.service";

async function main() {
  MessagesService.generateDecodeMessage();
  const readCsvService = container.resolve<ReadCsvService>('readCsvService');
  // Read CSV and parse
  const rows: RowDto[] = await readCsvService.readCsv(process.argv[2]);
  const decodeService = container.resolve<DecodeService>('decodeService');
  // Decode scores
  const decodedValues = decodeService.decode(rows);
  MessagesService.generateRankingMessage(decodedValues);
}

main();



