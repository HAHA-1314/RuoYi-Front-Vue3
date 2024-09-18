<template>
  <!-- 选择器 -->
  <el-row class="select">
    <el-col :span="8">
      <el-select
        v-model="store.index_label"
        :placeholder="store.index_label"
        style="width: 160px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          @click="
            () => {
              store.index_value = item.value;
              store.index_label = item.label;
            }
          " />
      </el-select>
    </el-col>
  </el-row>
  <!-- 仪表盘 Panel -->
  <div style="margin-left: 20px; margin-top: 20px; white-space: nowrap">
    <el-row>
      <!-- ------------------------- -->
      <el-col :span="5" class="drive-page">
        <el-row class="title"> 总司机数 </el-row>
        <el-row style="margin-top: 25px">
          <el-col :span="12">
            <!-- ICON  -->
            <img :src="driveIcon" alt="" class="icon" />
          </el-col>
          <el-col :span="4" class="digit">
            <!-- 计数器 -->
            {{ driver }}
            <span class="unit">人</span>
          </el-col>
        </el-row>
      </el-col>
      <!-- ------------------------- -->
      <el-col :span="5" class="page" style="background-color: #ebfdef">
        <el-row class="title">总订单数</el-row>
        <el-row style="margin-top: 25px">
          <el-col :span="12">
            <!-- ICON  -->
            <img :src="countIcon" alt="" class="icon" />
          </el-col>
          <el-col :span="4" class="digit">
            <!-- 计数器 -->
            {{ count }}
            <span class="unit">个</span>
          </el-col>
        </el-row>
      </el-col>
      <!-- ------------------------- -->
      <el-col :span="5" class="page" style="background-color: #e9f4fd">
        <el-row class="title">总收入金额</el-row>
        <el-row style="margin-top: 25px">
          <el-col :span="12">
            <!-- ICON  -->
            <img :src="incomeIcon" alt="" class="icon" />
          </el-col>
          <el-col :span="4" class="digit">
            <!-- 计数器 -->
            {{ income }}
            <span class="unit"> 元 </span>
          </el-col>
        </el-row>
      </el-col>
      <!-- ------------------------- -->
      <el-col :span="7" class="page" style="background-color: #ececfd">
        <el-row class="title">评分</el-row>
      </el-col>
    </el-row>
  </div>
  <!-- Windows 数据展示窗 -->
  <el-row>
    <el-col :span="12">
      <!-- ECharts -->
    </el-col>
    <el-col :span="10">
      <!-- 今日订单 -->
    </el-col>
  </el-row>
</template>

<script setup name="Index">
import { ref } from "vue";
import useUserStore from "@/store/modules/user";
import driveIcon from "@/assets/images/index-driver.png";
import countIcon from "@/assets/images/index-count.png";
import incomeIcon from "@/assets/images/index-income.png";
const store = useUserStore();
const options = ref([
  {
    value: 0, //0 为全部
    label: "全部",
  },
  {
    value: 1,
    label: "A",
  },
  {
    value: 2,
    label: "B",
  },
]);
const driver = ref(0);
const count = ref(0);
const income = ref(1111110);
const five = ref("200");
const four = ref("100");
const three = ref("50");
const two = ref("23");
const one = ref("10");

function goTarget(url) {
  window.open(url, "__blank");
}
</script>

<style lang="scss" scoped>
.select {
  margin-left: 20px;
  margin-top: 20px;
}
.title {
  color: #303133;
  margin-left: 20px;
  margin-top: 15px;
}
.unit {
  position: relative;
  color: #606266;
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
}
.digit {
  color: black;
  font-size: 28px;
  font-weight: 700;
}
.drive-page {
  display: inline-block;
  height: 140px;
  background-color: #e8f4fd;
}
.page {
  display: inline-block;
  height: 140px;
  margin-left: 10px;
}
.icon { 
  width: 50px;
  height: 50px;
}
</style>
