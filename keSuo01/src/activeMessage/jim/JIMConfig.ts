/**
 * J-IM初始化配置
 */
export class JIMConfig {
    /**
     * 服务器IP地址
     */
    public readonly ServerIp!: string;

    /**
     * 服务器端口
     */
    public readonly Port!: string;

    /**
     * 带参构造函数
     * @param serverIp JIM服务端IP地址
     * @param port JIM服务端端口
     */
    public constructor(serverIp: string, port: string) {
        this.ServerIp = serverIp;
        this.Port = port;
    }

    /**
     * 设置JIM服务器连接地址
     * @param serverIp JIM服务端IP地址
     * @param serverPort JIM服务端端口
     */
    public getSocketAddressString(): string {
        let socketAddress = `http://${this.ServerIp}:${this.Port}`;
        return socketAddress;
    }

    /**
     * 获取通讯链接地址
     * @param userName 用户名
     * @param userPwd 密码
     */
    public getConnectionString(userName: string, passWrod: string): string {
        let connStr = this.getSocketAddressString + `?username=${userName}&${passWrod}`;
        return connStr;
    }
}