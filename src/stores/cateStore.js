// 分类状态模块
// 从pinia中导出 定义store的方法
import { defineStore } from "pinia";
// 从cateAPI中导出 获取全部分类的接口
import { readCategories } from "../api/cateAPI";
import { topCategories } from "../api/constantsAPI";

export const useCateStore = defineStore({
  id: "cateStore",
  state: () => ({
    // 存储分类列表
    // 把静态数据渲染到页面上
    cateList: topCategories.map((categoryName) => ({ name: categoryName })),
  }),
  actions: {
    // 获取分类数据
    async initCategories() {
      // 通过解构 把分类数组和 响应状态解构出来    调用 获取全部分类的接口
      const { data: res, status: status } = await readCategories();

      console.log(res, status);
      res.result.forEach((item) => (item.open = false));
      // 判断status是否为200 如果为200 那么代表数据请求成功
      if (status === 200) {
        // 把分类数组赋值给 cateStore里面存储分类的state
        this.cateList = res.result;
      }
    },
    // 控制导航下拉菜单的显示
    open(id) {
      //如果鼠
      const target = this.cateList.find((item) => item.id === id);
      target.open = true;
    },
    // 控制导航下拉菜单的隐藏
    close(id) {
      const target = this.cateList.find((item) => item.id === id);
      target.open = false;
    },
  },
});
