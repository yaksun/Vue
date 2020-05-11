import { jpConsole } from "@/utils/jpConsole";
import { timeNetwork } from "@/network/sysManage/time_network";


/***Time Controller*/
export class timeService {
  /**
  *getCurrentTime
  */
  public async schedule_getCurrentTime() {
    var startDateTime = new Date().getTime();
    const resultData = await new timeNetwork().schedule_getCurrentTime();
    var endDateTime = new Date().getTime();
    resultData.expendTime = endDateTime - startDateTime;
    return resultData;
  }
}
