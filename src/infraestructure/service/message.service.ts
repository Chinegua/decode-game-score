import {ResultDto} from "../../domain/dtos/result.dto";

class MessagesService {
  public static generateDecodeMessage() {
    console.log(" _______   _______   ______   ______    _______   _______ \n" +
        "|       \\ |   ____| /      | /  __  \\  |       \\ |   ____|\n" +
        "|  .--.  ||  |__   |  ,----'|  |  |  | |  .--.  ||  |__   \n" +
        "|  |  |  ||   __|  |  |     |  |  |  | |  |  |  ||   __|  \n" +
        "|  '--'  ||  |____ |  `----.|  `--'  | |  '--'  ||  |____ \n" +
        "|_______/ |_______| \\______| \\______/  |_______/ |_______|\n" +
        "                                                          ");
  }

  public static generateRankingMessage(result: ResultDto[]) {
    console.table(result);
    console.log("El Hacker es: " + result[result.length - 1].player)
  }
}

export {MessagesService}