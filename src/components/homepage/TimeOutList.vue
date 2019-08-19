<template>
  <div>
    <div class="left title bo-bt">
      <span style="margin-left:5px;">{{title}}</span>
    </div>
    <div class="list">
      <div v-for="item in todoList" :key="item.id" class="bo-bt">
        <el-row type="flex" justify="space-between">
          <el-col :span="16">
            <div class="list-box left">
              <div class="inner-block fs-weight icon-box">
                <i class="el-icon-arrow-right"></i>
              </div>
              <div class="inner-block fs-weight icon-box">
                <i class="el-icon-user"></i>
              </div>
              <div class="inner-block">
                <div class="font-box">{{item.value}}</div>
                <div class="font-box link-font">{{item.label}}</div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="list-box">
              <el-button-group>
                <el-button icon="el-icon-close" size="mini"></el-button>
                <el-button icon="el-icon-edit" size="mini"></el-button>
                <el-button icon="el-icon-date" size="mini"></el-button>
              </el-button-group>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "逾期预警",
      todoList: [
        {
          id: 1,
          value: "今天为您分配的新建潜在客户",
          label: "Swich(Sample)andy"
        },
        {
          id: 2,
          value: "今天为您分配的新建潜在客户",
          label: "Swich(Sample)andy"
        },
        {
          id: 3,
          value: "今天为您分配的新建潜在客户",
          label: "Swich(Sample)andy"
        },
        {
          id: 4,
          value: "今天为您分配的新建潜在客户",
          label: "Swich(Sample)andy"
        },
        {
          id: 5,
          value: "今天为您分配的新建潜在客户",
          label: "Swich(Sample)andy"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.list {
  padding: 0 5px;
  height: 16vh;
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.left {
  text-align: left;
  
}
.title {
  font-weight: bold;
  
}
.bo-bt {
  padding: 5px 0;
  border-bottom: 1px solid #aaa;
}
.br {
  border: 1px solid red;
}
.list-box {
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
}
.inner-block {
  display: inline-block;
}
.fs-weight {
  font-weight: bold;
  font-size: 20px;
}
.font-box {
  height: 25px;
  line-height: 25px;
  box-sizing: border-box;
  font-size: 14px;
}
.icon-box {
  position: relative;
  bottom: 10px;
  margin-right: 10px;
}
.link-font {
  border-bottom: 1px dotted rgb(104, 176, 243);
  color: rgb(104, 176, 243);
  cursor: pointer;
}
</style>
