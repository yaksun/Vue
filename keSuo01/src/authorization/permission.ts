import Vue from 'vue'
import store from "@/store/store";
/**权限指令**/
Vue.directive('btnPermission', {
  bind(el, binding, vnode) {

    let PermissionMenu: any = null;
    if (!!store.state.permissionMenu) PermissionMenu = store.state.permissionMenu;
    else if (!!sessionStorage.getItem("PermissionMenu")) {
      let menuinfoboj: any = JSON.parse(sessionStorage.getItem("PermissionMenu") || "");
      PermissionMenu = menuinfoboj;
    }

    if (PermissionMenu) {

      for (var oneMenu of PermissionMenu) 
      {
        for (var twoMenu of oneMenu.childList as any) 
        {
          if(!!twoMenu.code)
          {
            if (twoMenu.code=== binding.value.toString() ) 
            {
              for (var threebtn of twoMenu.childList as any)
              {
                  if (threebtn.name === el.innerText){
                    return;
                  }   
              }
              el.style.display = "none"; 
              return;
            }
        }
      }
    }

  }
}
});

//菜单权限控制
Vue.directive('menuPermission', {
  bind(el, binding, vnode) {
    let PermissionMenu: any = null;
    if (!!store.state.permissionMenu) PermissionMenu = store.state.permissionMenu;
    else if (!!sessionStorage.getItem("PermissionMenu")) {
      let menuinfoboj: any = JSON.parse(sessionStorage.getItem("PermissionMenu") || "");
      PermissionMenu = menuinfoboj;
    }

    if (PermissionMenu) {

      for (var oneMenu of PermissionMenu) {
        for (var twoMenu of oneMenu.childList as any) {
          if (twoMenu.name === el.innerText) {
            return;
          }
        }
      }
      el.style.display = "none";
    }

  }
});
 
