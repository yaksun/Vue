import { JPConfig } from "@/config/JPConfig";

const isDebugMode = JPConfig.Instance().IsDebugMode;

/**
 * 金鹏日志处理
 */
export class jpConsole {
    /**
     * 默认构造函数
     */
    public constructor() { }

    /**
     * 调试输出日志
     * @param message 消息
     * @param data 数据内容
     */
    public static log(message: string, data: any = "") {
        if (isDebugMode) {
            console.log(message, data)
        }
    }
};