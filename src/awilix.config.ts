import {asClass, createContainer, InjectionMode} from 'awilix'
import {ReadCsvService} from "./application/readCsv.service";
import {DecodeService} from "./domain/service/decode.service";

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
})

container.register({
  readCsvService: asClass(ReadCsvService),
  decodeService: asClass(DecodeService)
})

export {container}