<template>
  <div class="main-box">
    <el-row>
      <el-col :span="8">
        <div class="topbnt_left fl">
          <ul>
            <li
              v-for="(todo, index) in todos"
              :key="todo.id"
              @click="addClass(index,$event)"
              :class="{ active:index==current}"
            >
              <a href="#">{{ todo.text }}</a>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <h1>{{msg}}</h1>
      </el-col>
    </el-row>

    <el-row class="base-height">
      <el-col :span="4">
        <div class="box aleftboxttop">
          <span class="test_b">测试标题123111</span>
          <Echarts1 ref="chart1" :option="option1" />
        </div>
      </el-col>
      <el-col :span="14">
        <div class="box amiddboxttop">
          <span>测试标题222</span>
          <Echarts4 />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box arightboxtop">
          <span class="test_b">测试标题222</span>
          <Echarts2 />
        </div>
      </el-col>
    </el-row>
    <el-row class="bottom-height">
      <el-col :span="9">
        <div class="box1 puleftboxtbott">
          <span>测试标题222</span>
          <Echarts5 />
        </div>
      </el-col>
      <el-col :span="9">
        <div class="box1 puleftboxtbott">
          <span>测试标题222</span>
          <Echarts6 />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box1 purightboxbott">
          <span>测试标题222</span>
          <Echarts7 />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Echarts from "@/components/Echarts";
import Echarts1 from "@/components/Echarts1";
import Echarts2 from "@/components/Echarts2";
import Echarts3 from "@/components/Echarts3";
import Echarts4 from "@/components/Echarts4";
import Echarts5 from "@/components/Echarts5";
import Echarts6 from "@/components/Echarts6";
import Echarts7 from "@/components/Echarts7";
import Echarts8 from "@/components/Echarts8";
import Echarts9 from "@/components/Echarts9";
// import axios from "axios";
export default {
  // name: "HelloWorld",
  data() {
    return {
      msg: "库存图表展示",
      current: 0,
      todos: [
        { id: 1, text: "全部" },
        { id: 2, text: "非光纤材料" },
        { id: 3, text: "光纤材料" },
        { id: 4, text: "半成品" },
        { id: 5, text: "成品" }
      ],
      //百分比图的配置
      option1: {}
    };
  },
  methods: {
    // goDashboard() {
    //   this.$router.push({ path: "/Echarts" });
    // }
    addClass: function(index, event) {
      this.current = index; //获取点击对象
      let _this = this;
      var el = event.currentTarget;
      debugger;

      //axios请求
      if (index == 1) {
        this.$axios
          .get(" http://localhost:7091/news")
          .then(function(response) {
            console.log(response);
            _this.option1 = response.data;
            _this.$refs.chart1.drawLine(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else if (index == 2) {
        this.$axios
          .get(" http://localhost:7091/news1")
          .then(function(response) {
            console.log(response);
            _this.option1 = response.data;
            _this.$refs.chart1.drawLine(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else if (index == 3) {
        this.$axios
          .get(" http://localhost:7091/news2")
          .then(function(response) {
            console.log(response);
            _this.option1 = response.data;
            _this.$refs.chart1.drawLine(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      }

      // axios
      //   .get("/user", {
      //     params: {
      //       ID: 12345
      //     }
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
      // axios
      //   .post("/user", {
      //     firstName: "Fred",
      //     lastName: "Flintstone"
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });

      // function getUserAccount() {
      //   return axios.get("/user/12345");
      // }

      // function getUserPermissions() {
      //   return axios.get("/user/12345/permissions");
      // }

      // axios.all([getUserAccount(), getUserPermissions()]).then(
      //   axios.spread(function(acct, perms) {
      //     // Both requests are now complete
      //   })
      // );
    }
  },
  components: {
    Echarts,
    Echarts1,
    Echarts2,
    Echarts3,
    Echarts4,
    Echarts5,
    Echarts6,
    Echarts7,
    Echarts8,
    Echarts9
  }
};
</script>

<style scoped>
.test_b {
  line-height: 1vh;
}

h1 {
  font-weight: normal;
  color: white;
  margin-top: 1vh;
  height: 8vh;
  box-sizing: border-box;
}
.main-box {
  height: 100vh;
  background-image: url(../assets/nybj.png);
  background-size: 100% 100%;
  overflow: hidden;
}
.base-height {
  height: 50vh;
  margin: 0 3vh;
  box-sizing: border-box;
  /* border: 1px solid red; */
}
.bottom-height {
  height: 38vh;
  margin: 0 3vh;
  box-sizing: border-box;
  /* border: 1px solid red; */
}
.box {
  margin: 1vh;
  padding: 1vh;
  box-sizing: border-box;
  height: 48vh;
  /* border: 1px solid red; */
}
.box1 {
  color: #ccc;
  padding: 1vh;
  margin: 1vh;
  box-sizing: border-box;
  height: 36vh;
  /* border: 1px solid red; */
}
.aleftboxttop {
  color: #ccc;
  background: url(../assets/arightboxtop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 98%;
}
.amiddboxttop {
  color: #ccc;
  overflow: hidden;
  background: url(../assets/amiddboxttop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 99.5%;
}
.arightboxtop {
  color: #ccc;
  background: url(../assets/arightboxtop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 97%;
}
.puleftboxtbott {
  background: url(../assets/puleftbott.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 99%;
}
.purightboxbott {
  background: url(../assets/purightbott.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 97%;
}
.fl {
  float: left;
}
.topbnt_left {
  width: 100%;
}
.topbnt_left ul {
  padding-top: 38px;
  padding-left: 4%;
  width: 100%;
}
.topbnt_left li {
  background: url(../assets/bnt.png) center;
  font-size: 14px;
  line-height: 33px;
  background-repeat: no-repeat;
  width: 18%;
  height: 35px;
  float: left;
  text-align: center;
  margin-left: 5px;
}
.topbnt_left li.active,
.topbnt_right li.active {
  background: url(../assets/bntactive.png) no-repeat center;
}
.topbnt_left li a {
  text-decoration: none;
  color: #fff;
}
</style>
