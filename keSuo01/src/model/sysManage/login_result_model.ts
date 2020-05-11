import { base_model } from "@/model/base_model";
import { base_loading_model } from "@/model/base_loading_model";

/**
 * 【入参】测试请求入参model
 */
class login_par_model extends base_loading_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }

  public authCode!: string;

  /**密码 */
  public pwd!: string | null;

  /**账号 */
  public loginname!: string | null;

  /**uuid */
  public key!: string;
}

/**
 * 【输出】测试输出结果model
 */
class login_result_model extends base_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }

  /**明细数据 */
  public data!: login_result_model_detail;
}

/**
 * 【明细数据】
 */
class login_result_model_detail {
  /**默认构造函数 */
  public constructor() { }

  public authCode!: string;

  /**密码 */
  public pwd!: string;

  /**账号 */
  public loginname!: string;

  /**uuid */
  public key!: string;
}

/**
 * uiModel界面数据绑定
 */
class login_ui_model extends login_par_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }
}

/**
 * 【入参】测试请求入参model-------------token
 */
class token_par_model extends base_loading_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }

  public clientIp!: string; //客户端IP ,
  public clientType!: string; //客户端类型 ,
  public clientVersion!: string; //客户端版本
  public code!: string;  //注册机器码
  public count!: number;  //数量
  public id!: string;   //标识符
  public installDept!: string;   //安装单位
  public isNew!: number;  //是否最新版本（0不是，1是）
  public isOnline!: number;  //是否在线（0离线，1在线）
  public operateSystem!: string;  //操作系统
  public oprateSysLoginname!: string;   //操作系统账号
  public path!: string;                //客户端本地路径
  public seat!: string;               //坐席
  public stationId!: string;           //账号所属单位
  public stationName!: string;   //安装单位名称
  public sysLoginname!: string | null;   //系统登录账号
  public token!: string;           //标识字段
  public updateTime!: string;       //记录修改时间
  public userId!: string;             //用户id
}

class token_ui_model extends token_par_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }
}
/**
 * 【输出】测试输出结果model-----token
 */
class token_result_model extends base_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }

  /**明细数据 */
  public data!: token_result_model_detail;
}

/**
 * 【明细数据】
 */
class token_result_model_detail {
  /**默认构造函数 */
  public constructor() { }

  public clientIp!: string; //客户端IP ,
  public clientType!: string; //客户端类型 ,
  public clientVersion!: string; //客户端版本
  public code!: string;  //注册机器码
  public count!: number;  //数量
  public id!: string;   //标识符
  public installDept!: string;   //安装单位
  public isNew!: number;  //是否最新版本（0不是，1是）
  public isOnline!: number;  //是否在线（0离线，1在线）
  public operateSystem!: string;  //操作系统
  public oprateSysLoginname!: string;   //操作系统账号
  public path!: string;                //客户端本地路径
  public seat!: string;               //坐席
  public stationId!: string;           //账号所属单位
  public stationName!: string;   //安装单位名称
  public sysLoginname!: string;   //系统登录账号
  public token!: string;           //标识字段
  public updateTime!: string;       //记录修改时间
  public userId!: string;             //用户id
}


/////////////////**用户信息 */
/**
 * 【入参】测试请求入参model-------------用户
 */
class userinfo_par_model extends base_loading_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }

  public loginName!: string | null;
}

class userinfo_ui_model extends userinfo_par_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }
}

/**
 * 【输出】测试输出结果model-----token
 */
class userinfo_result_model extends base_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }

  /**明细数据 */
  public data!: token_result_model_detail;
}

/**
 * 【明细数据】
 */
class userinfo_result_model_detail {
  /**默认构造函数 */
  public constructor() { }
  /**生日 */
  public birthday!: string;
  /**更新时间 */
  public changeTime!: string;
  /**创建时间 */
  public createTime!: string;
  /**性别 */
  public gender!: string;
  /**身份证号 */
  public idCardNo!: string;
  /**是否为测试警员 */
  public isTestPolice!: number;
  /**登陆名称 */
  public loginName!: string;
  /**办公电话 */
  public officeTel!: string;
  /**照片 */
  public pictureUrl!: string;
  /**警员代码 */
  public policeCode!: string;
  /**警员ID */
  public policeId!: string;
  /**纬度 */
  public policeLatitude!: number;
  /**经度 */
  public policeLongitude!: number;
  /**警员姓名 */
  public policeName!: string;
  /**警察职位 */
  public policePosition!: PolicePosition;
  /**uuid */
  public policeStationInfo!: PoliceStationInfo;
  /**密码 */
  public policeType!: PoliceType;
  /**密码 */
  public pwd!: string;
  /**警员排序 */
  public sort!: number;
  /**用户状态 */
  public state!: number;
  /**警员状态 */
  public status!: number;
  /**电话 */
  public telephone!: string;
  /**用户ID */
  public userId!: string;
  /**用户名 */
  public username!: string;

}
class PoliceType {
  public sort!: number //排序,
  public staionnum!: string;  //岗位编号,
  public type!: string;  // 岗位名称

}
//警察职位
class PolicePosition {
  public id!: string;
  public position!: string;  //职位
  public sort!: number;    //排序
  public typeId!: string;    //类型id
}

class PoliceStationInfo {
  /**部门地址 */
  public address!: string;
  /**接出警车辆数 */
  public carCount!: number;
  /**覆盖范围 */
  public coverRange!: string;
  /**管辖区域 */
  public glxq!: string;
  /**id */
  public id!: string;
  /**是否使用 */
  public ifUse!: number;
  /**ip地址 */
  public ipAddress!: string;
  /**是否直属机构 */
  public isZsjg!: string;
  /**警力情况 */
  public jlqk!: string;
  /**纬度 */
  public latitude!: number;
  /**领导信息 */
  public leaderInfo!: string;
  /**经度 */
  public longitude!: number;
  /**组织代码 */
  public orgcode!: string;
  /**所属部门 */
  public parentId!: string;
  /**部门图片 */
  public pictureUrl!: string;
  /**默认手台号 */
  public radioId!: string;
  /**人口情况 */
  public rkqk!: string;
  /**排序 */
  public sort!: number;
  /**社区/责任区 */
  public sqzrq!: string;
  /**单位分组 */
  public stationGroup!: string;
  /**部门名称 */
  public stationName!: string;
  /**组织编号 */
  public stationNum!: string;
  /**电话 */
  public tel!: string;
  /**单位编码 */
  public unitNumber!: string;
  /**单位简写 */
  public unitShort!: string;
  /**重点部位 */
  public zdbw!: string;
  /**重点警情 */
  public zdjq!: string;
  /**Z轴 */
  public zindex!: number;
}
/////////////////**用户信息 */

export {
  /**model部分 */
  login_par_model,
  login_result_model,
  login_result_model_detail,
  /**uimodel部分 */
  login_ui_model,
  token_ui_model,
  token_par_model,
  token_result_model,
  token_result_model_detail,
  userinfo_ui_model,
  userinfo_par_model,
  userinfo_result_model,
  userinfo_result_model_detail,
  PoliceStationInfo,
  PolicePosition,
  PoliceType
};
