import { base_model } from "@/model/base_model";
import { base_loading_model } from '../base_loading_model';
import { base_page_model } from '../base_page_model';

/***【入参】请求入参modelqueryModel**/
class queryModel_ui_model extends base_loading_model {
    public constructor() { super(); }

    /***纬度***/
    public latitude!: any;

    /***经度***/
    public longitude!: any;

    /***半径范围，单位：米***/
    public radius!: any;

    /***部门id***/
    public stationId!: string;

    /***设备类型 警务通：appAccount 车小丫：car 手台：radio***/
    public type!: string;

    /*** 指令ID */
    insId!: string;
}

class queryModel_par_model  extends queryModel_ui_model{
    public constructor() { super(); }
}

/***【输出】输出结果modelOK**/
class facilityAndLocation_result_model extends base_model {
    public constructor() { super(); }

    /*** 明细数据**/
    public data!: facilityAndLocation_result_model_detail[];
}
/***【输出】带分页的结果modelOK**/
class facilityAndLocation_page_reult_model extends base_page_model<facilityAndLocation_result_model_detail> {
    public constructor() { super(); }

}
/***【输出】明细数据modelOK**/
class facilityAndLocation_result_model_detail {
    public constructor() { }

    /***当前纬度***/
    public latitude!: any;

    /***当前经度***/
    public longitude!: any;

    /***警员信息***/
    public polices!: polices_child_result_model_detail[];

    /******/
    public time!: string;

}



/***【输出】明细数据model警员信息**/
class polices_child_result_model_detail {
    public constructor() { }

    /***处置中数量***/
    public dealAlarmNum!: number;

    /***警员号***/
    public policeCode!: string;

    /***警员ID***/
    public policeId!: string;

    /***警员姓名***/
    public policeName!: string;

    /***警员sort***/
    public sort!: string;

    /***部门Code***/
    public stationCode!: string;

    /***部门ID***/
    public stationId!: string;

    /***部门名称***/
    public stationName!: string;

    /***部门类型***/
    public stationNum!: string;

    /***警员telephone ***/
    public telephone!: string;

    /***总警情数***/
    public totalAlarmNum!: number;

    /***警员照片url ***/
    public url!: string;

    /***用户ID***/
    public userId!: string;

    /***用户名***/
    public userName!: string;

}

class facilityAndLocation_par_model{

}
/***【输入】uiModel界面数据绑定OK**/
class facilityAndLocation_ui_model extends facilityAndLocation_par_model {
    public constructor() { super(); }

}


/***【输出】输出结果modelOK**/
class userStatusResultModel_result_model extends base_model {
    public constructor() { super(); }

    /*** 明细数据**/
    public data!: userStatusResultModel_result_model_detail[];
}
/***【输出】带分页的结果modelOK**/
class userStatusResultModel_page_reult_model extends base_page_model<userStatusResultModel_result_model_detail> {
    public constructor() { super(); }

}
/***【输出】明细数据modelOK**/
class userStatusResultModel_result_model_detail {
    public constructor() { }

    /***登录账号***/
    public loginName!: string;

    /***在线状态 0不在线 1在线***/
    public onlineStatus!: number;

    /***所属部门code***/
    public orgCode!: string;

    /***上级部门id***/
    public parentId!: string;

    /***照片***/
    public pictureUrl!: string;

    /***警号***/
    public policeCode!: string;

    /***警员姓名***/
    public policeName!: string;

    /***报备状态 0未报备 1已报备***/
    public reportStatus!: number;

    /***推送状态 0未推送 1已推送***/
    public sendStatus!: number;

    /***所属部门id***/
    public stationId!: string;

    /***所属部门名称***/
    public stationName!: string;

    /***所属部门类型***/
    public stationNum!: string;

    /***已推送的警员的任务id***/
    public taskId!: string;

    /***用户id***/
    public userId!: string;

    /***用户名***/
    public userName!: string;

}
class userStatusResultModel_par_model{
    
}
/***【输入】uiModel界面数据绑定OK**/
class userStatusResultModel_ui_model extends userStatusResultModel_par_model {
    public constructor() { super(); }

}
/***【入参】请求入参modeluserPageParameter**/
class userPageParameter_ui_model extends base_loading_model {
    public constructor() { super(); }

    /***指令id***/
    public insId!: string;

    /***模糊匹配警员名称、警号***/
    public keyWord!: string;

    /***分页参数，当前页， 1开始***/
    public pageIndex!: number;

    /***分页参数，每页条数***/
    public pageSize!: number;

    /***部门id***/
    public stationId!: string;

    /***警员状态 1在线、0离线***/
    public status!: [];

}

class  userPageParameter_par_model extends userPageParameter_ui_model{
    public constructor() { super(); }
}


export {
    queryModel_ui_model,
    queryModel_par_model,
    facilityAndLocation_result_model,
    facilityAndLocation_page_reult_model,
    polices_child_result_model_detail,
    facilityAndLocation_result_model_detail,
    facilityAndLocation_ui_model,
    userStatusResultModel_result_model,
    userStatusResultModel_page_reult_model,
    userStatusResultModel_result_model_detail,
    userStatusResultModel_ui_model,
    userPageParameter_par_model,
    userPageParameter_ui_model,
};
