<template>
  <div>
    <el-select size="small" v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "张三"
        },
        {
          value: "选项2",
          label: "李四"
        },
        {
          value: "选项3",
          label: "王五"
        },
        {
          value: "选项4",
          label: "李六"
        }
      ],
      value: "选项1"
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
