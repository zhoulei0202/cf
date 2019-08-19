<template>
  <div>
    <div class="header">
      <h1 class="header-title">{{msg}}</h1>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="col col-l">
          <div class="xpanel-wrapper xpanel-wrapper-40">
            <div class="xpanel xpanel-l-t">
              <div class="title">{{title}}</div>
              <Echarts />
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-60">
            <div class="xpanel xpanel-l-b">
              <div class="title">{{title}}</div>
            </div>
          </div>
        </div>
        <div class="col col-c">
          <div class="xpanel-wrapper xpanel-wrapper-75">
            <div class="xpanel no-bg">{{title}}</div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-25">
            <div class="xpanel xpanel-c-b">
              <div class="title title-long">{{title}}</div>
            </div>
          </div>
        </div>
        <div class="col col-r">
          <div class="xpanel-wrapper xpanel-wrapper-25">
            <div class="xpanel xpanel-r-t">
              <div class="title">{{title}}</div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-30">
            <div class="xpanel xpanel-r-m">
              <div class="title">{{title}}</div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-45">
            <div class="xpanel xpanel-r-b">
              <div class="title">{{title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      title:'图表标题',
      current: 0,
      todos: [
        { id: 1, text: "光纤材料" },
        { id: 2, text: "非光纤材料" },
        { id: 3, text: "半成品" },
        { id: 4, text: "成品" },
        { id: 5, text: "全部" }
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
/* @charset "utf-8"; */

/********** Global **********/
html,
body {
  width: 100%;
  height: 100%;
  font-family: "microsoft yahei", arial, sans-serif;
  background-color: #0b0f34;
  overflow-x: hidden;
  overflow-y: auto;
}
.main {
  background-color: #0b0f34;
}
body {
  margin: 0 auto;
  min-width: 375px;
  max-width: 1920px;
}

/********** Layout **********/
.header {
  position: relative;
  height: 42px;
  box-sizing: border-box;
}
.header-title {
  margin: 0;
  padding: 0;
  line-height: 64px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  color: #e9c29d;
}
.wrapper {
  position: absolute;
  top: 36px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  padding: 10px 10px 0 10px;
  min-height: 500px;
  background: url("../assets/img/wrapper-bg.png") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
}
/* PC */
@media (max-width: 1919px) {
  .header {
    height: 36px;
  }
  .header-title {
    line-height: 42px;
    font-size: 22px;
  }
  .wrapper {
    top: 22px;
  }
}
/* Mobile */
@media (max-width: 1279px) {
  .header-title {
    max-width: 96%;
  }
  .wrapper {
    background: none;
  }
}

/********** Content **********/
.content {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 25px 15px;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
}
.col {
  margin: 0 10px;
  height: 100%;
}
.col-l {
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2;
}
.col-c {
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
}
.col-r {
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2;
}
/* PC */
@media (max-width: 1919px) {
  .content {
    padding: 5px 0;
  }
}
/* Mobile */
@media (max-width: 1279px) {
  .content {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .col {
    margin: 5px 0;
  }
  .col-l,
  .col-c,
  .col-r {
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
  }
}
.xpanel-wrapper {
  padding-bottom: 10px;
  box-sizing: border-box;
}
.xpanel-wrapper {
  height: 100%;
}
.xpanel-wrapper-25 {
  height: 25%;
}
.xpanel-wrapper-30 {
  height: 30%;
}
.xpanel-wrapper-40 {
  height: 40%;
}
.xpanel-wrapper-45 {
  height: 45%;
}
.xpanel-wrapper-60 {
  height: 60%;
}
.xpanel-wrapper-75 {
  height: 75%;
}
.xpanel {
  height: 100%;
  min-height: 100px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
}
.xpanel-l-t {
  background-image: url("../assets/img/panel-l-t.png");
}
.xpanel-l-b {
  background-image: url("../assets/img/panel-l-b.png");
}
.xpanel-c-b {
  background-image: url("../assets/img/panel-c-b.png");
}
.xpanel-r-t {
  background-image: url("../assets/img/panel-r-t.png");
}
.xpanel-r-m {
  background-image: url("../assets/img/panel-r-m.png");
}
.xpanel-r-b {
  background-image: url("../assets/img/panel-r-b.png");
}
.xpanel .title {
  padding-left: 24px;
  height: 44px;
  line-height: 44px;
  font-size: 24px;
  font-weight: normal;
  color: #fff;
  background-image: url("../assets/img/title-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.xpanel .title-long {
  background-image: url("../assets/img/title-bg-long.png");
}
/* PC */
@media (max-width: 1919px) {
  .xpanel .title {
    padding-left: 20px;
    height: 36px;
    line-height: 36px;
    font-size: 20px;
  }
}

/* tool */
.fill-h {
  height: 100% !important;
  min-height: 100% !important;
}
.no-margin {
  margin: 0 !important;
}
.no-padding {
  padding: 0 !important;
}
.no-bg {
  background: none !important;
}
.no-border {
  border: 0 !important;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
<style>
html,
body {
  width: 100%;
  height: 100%;
  font-family: "microsoft yahei", arial, sans-serif;
  background-color: #0b0f34;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

