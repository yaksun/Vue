import { Loading } from "element-ui";

/**变量 */
let loading: any;
let loadArr = new Array<any>();
/**
 * 启动loading
 */
const startLoading = (loadingTarget: any) => {
  loading = Loading.service({
    lock: true,
    text: "加载中......",
    background: "rgba(18, 68, 111, 0.8)",
    target: document.querySelector(loadingTarget)
  });
  loadArr.push(loading);
};

/**
 * 关闭 loading
 */
const endLoading = () => {
  // loading.close();
  loadArr.forEach((item: any) => item.close());
};

/**
 * 显示loading
 **/
export const showLoading = (loadingTarget: any) => {
  if (document.querySelector(loadingTarget) != null)
    startLoading(loadingTarget);
};

/**
 * 关闭loading
 **/
export const hideLoading = () => endLoading();
