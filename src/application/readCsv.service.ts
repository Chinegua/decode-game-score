import * as fs from "fs";
import * as path from "path";
import {parse} from 'csv-parse';
import {RowDto} from "./dto/row.dto";

export class ReadCsvService {

  constructor() {
  }

  public async readCsv(filePath: string): Promise<RowDto[]> {
    const csvFilePath = path.resolve(__dirname, filePath);
    const records: any[] = [];
    const stream = fs.createReadStream(csvFilePath);
    const parser = stream.pipe(parse({delimiter: ',', columns: true}));
    for await (const record of parser) {
      records.push(record);
    }
    return records;
  }
}
