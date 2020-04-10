/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 11:03:13
 * @LastEditTime: 2020-03-12 16:52:45
 * @LastEditors: Please set LastEditors
 */
import { RuntimeEnvMode } from "@/utils/enumTypes";

/**
 * 初始化入口参数
 * 包括当前运行的环境、是否调试、版本号等
 */
const mainProgramParams = {
  /**
   * 当前版本运行模式
   * DEV:开发环境
   * UAT：测试环境
   * PROD：生产环境
   */
  currentRuntimeMode: RuntimeEnvMode.DEV,

  /**
   * 当前是否为调试模式，用于调试时默认设置值，发布时该值更新为false
   */
  isDebugMode: true,

  /**
   * 应用程序版本号
   */
  Version: "V1.12.12.02"
};

/**
 * 初始化配置
 */
export class JPConfig {
  /**
   * 当前运行环境
   * DEV:开发环境
   * UAT:测试环境
   * PROD:生产环境
   */
  public readonly CurrentRuntimeMode!: RuntimeEnvMode;

  /**
   * 当前是否为调试模式，用于调试时默认设置值，发布时该值更新为false
   */
  public readonly IsDebugMode!: boolean;

  /**
   * 应用版本编号
   */
  public readonly Version!: string;

  /**
   * 金鹏服务-后台请求地址
   */
  public readonly jpHttpUrl!: string;

  /**
   * socketio消息中间件url地址
   */
  public readonly jpSocketioURL!: string;

  /**
   * 私有对象
   */
  private static instance: JPConfig;

  /**
   * 全局单实例对象
   */
  public static Instance(): JPConfig {
    if (!JPConfig.instance) {
      JPConfig.instance = new JPConfig(
        mainProgramParams.currentRuntimeMode,
        mainProgramParams.isDebugMode,
        mainProgramParams.Version
      );
    }
    return JPConfig.instance;
  }

  /**
   * 默认构造函数
   * @param runtimeMode 当前运行环境
   * @param boolean 当前是否为调试模式
   * @param version 版本号
   */
  private constructor(
    runtimeMode: RuntimeEnvMode,
    isDebugMode: boolean,
    version: string
  ) {
    this.CurrentRuntimeMode = runtimeMode;
    this.IsDebugMode = isDebugMode;
    this.Version = version;

    if (runtimeMode === RuntimeEnvMode.DEV) {
      //开发环境
      this.jpHttpUrl = "http://172.16.14.151:20014";
      this.jpSocketioURL = "http://100.67.29.68:9092";
    } else if (runtimeMode === RuntimeEnvMode.UAT) {
      //测试环境
      this.jpHttpUrl = "http://api.community.com:10000";
      this.jpSocketioURL = "http://100.67.29.68:9092";
    } else if (runtimeMode === RuntimeEnvMode.PROD) {
      //生产环境
      this.jpHttpUrl = "http://api.community.com:10000";
      this.jpSocketioURL = "http://100.67.29.68:9092";
    }
    
  }
  [key: string]: any;
}
