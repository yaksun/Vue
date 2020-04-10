import { JPConfig } from '@/config/JPConfig';

/**
*Time Controller
*/
const timeAPIs = {
  /**
  *getCurrentTime
  */
  jp_schedule_getCurrentTime_api:{
    url: "/api/jp-BIT-Schedule-ms/schedule/getCurrentTime",
    method:"get"
  },
}

export { timeAPIs }