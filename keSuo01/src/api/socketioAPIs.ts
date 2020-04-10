import { JPConfig } from "@/config/JPConfig";

/**
 * socketio消息中间件url地址
 */
const jpSocketioURL = JPConfig.Instance().jpSocketioURL;

/**
   * socketio消息中间件API
   */
const socketioAPIs = {
    /**
     * socketio消息中间件url地址 
     */
    jp_socketio_api: { url: jpSocketioURL }
}

export { socketioAPIs }