import { login, logout, getInfo } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";
import defAva from "@/assets/images/profile.jpg";

const useUserStore = defineStore("user", {
  state: () => ({
    token: getToken(),
    id: "1",
    name: "哈哈",
    avatar: defAva,
    roles: ["admin"],
    permissions: ["system:dict:list", "system:user:edit"],
    index_value: "0", //主页选择器 默认为 0 --全部公司
    index_label: '全部'
  }),
  actions: {
    setIndex(value,label) {
      this.index_value = value;
      this.index_label = label;
    },
    //   // 登录
    //   login(userInfo) {
    //     const username = userInfo.username.trim();
    //     const password = userInfo.password;
    //     const code = userInfo.code;
    //     const uuid = userInfo.uuid;
    //     return new Promise((resolve, reject) => {
    //       login(username, password, code, uuid)
    //         .then((res) => {
    //           setToken(res.token);
    //           this.token = res.token;
    //           resolve();
    //         })
    //         .catch((error) => {
    //           reject(error);
    //         });
    //     });
    //   },
    //   // 获取用户信息
    //   getInfo() {
    //     return new Promise((resolve, reject) => {
    //       getInfo()
    //         .then((res) => {
    //           const user = res.user;
    //           const avatar =
    //             user.avatar == "" || user.avatar == null
    //               ? defAva
    //               : import.meta.env.VITE_APP_BASE_API + user.avatar;
    //           if (res.roles && res.roles.length > 0) {
    //             // 验证返回的roles是否是一个非空数组
    //             this.roles = res.roles;
    //             this.permissions = res.permissions;
    //           } else {
    //             this.roles = ["ROLE_DEFAULT"];
    //           }
    //           this.id = user.userId;
    //           this.name = user.userName;
    //           this.avatar = avatar;
    //           resolve(res);
    //         })
    //         .catch((error) => {
    //           reject(error);
    //         });
    //     });
    //   },
    //   // 退出系统
    //   logOut() {
    //     return new Promise((resolve, reject) => {
    //       logout(this.token)
    //         .then(() => {
    //           this.token = "";
    //           this.roles = [];
    //           this.permissions = [];
    //           removeToken();
    //           resolve();
    //         })
    //         .catch((error) => {
    //           reject(error);
    //         });
    //     });
    //   },
  },
});

export default useUserStore;
