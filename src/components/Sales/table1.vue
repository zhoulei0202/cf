<template>
  <el-table :data="tableData" border style="width: 100%" height="240">
    <el-table-column prop="date" label="排名" width="60"></el-table-column>
    <el-table-column prop="address" label="单位名称"></el-table-column>
    <el-table-column prop="name" label="销售额"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "王小虎",
          address: "上海市普"
        },
        {
          date: "2",
          name: "王小虎",
          address: "上海市普"
        },
        {
          date: "3",
          name: "王小虎",
          address: "上海市路"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市江"
        }
        ,
        {
          date: "4",
          name: "王小虎",
          address: "上海市江"
        }
        ,
        {
          date: "4",
          name: "王小虎",
          address: "上海市江"
        }
        ,
        {
          date: "4",
          name: "王小虎",
          address: "上海市江"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
