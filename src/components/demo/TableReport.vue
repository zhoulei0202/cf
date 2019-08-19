<template>
  <div>
    <el-table :data="tableData" style="width:100%">
      <el-table-column align="center" prop="cwzb" label="财务指标"></el-table-column>
      <el-table-column align="center" prop="jldw" label="计量单位"></el-table-column>

      <el-table-column align="center" label="船舶板块">
        <el-table-column align="center" label="福建船政">
          <el-table-column align="center" prop="mwzc" label="马尾造船"></el-table-column>
          <el-table-column align="center" prop="xczg" label="厦船重工"></el-table-column>
          <el-table-column align="center" prop="dnzc" label="东南造船"></el-table-column>
        </el-table-column>
      </el-table-column>

      <el-table-column align="center" label="林业板块">
        <el-table-column align="center" prop="lytz" label="林业投资"></el-table-column>

        <el-table-column align="center" label="福人集团">
          <el-table-column align="center" prop="fzgs" label="福州公司"></el-table-column>
          <el-table-column align="center" prop="ptgs" label="莆田公司"></el-table-column>
          <el-table-column align="center" prop="swgs" label="邵武公司"></el-table-column>
          <el-table-column align="center" prop="hbgs" label="湖北公司"></el-table-column>
          <el-table-column align="center" prop="frsc" label="福人收储"></el-table-column>
          <el-table-column align="center" prop="frrz" label="福人融资"></el-table-column>
          <el-table-column align="center" prop="other" label="其他"></el-table-column>
        </el-table-column>
      </el-table-column>

      <el-table-column align="center" label="风电板块">
        <el-table-column align="center" label="福船投资">
          <el-table-column align="center" prop="yfxny" label="一帆新能源"></el-table-column>
          <el-table-column align="center" prop="ztfc" label="中铁福船"></el-table-column>
          <el-table-column align="center" prop="fcjs" label="福船建设"></el-table-column>
        </el-table-column>
      </el-table-column>

      <el-table-column align="center" prop="other1" label="其他" width></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          cwzb: "累计资产总额",
          jldw: "万元",
          mwzc: "1260000",
          xczg: "75430",
          dnzc: "465400",
          lytz: "30500",
          fzgs: "30620",
          yfxny: "84542",
          fzgs: "34343",
          ptgs: "42342",
          swgs: "21321",
          hbgs: "2312",
          frsc: "777",
          frrz: "23111",
          other: "2111111",
          ztfc: "21111",
          fcjs: "1221211",
          other1: "2222222"
        },
        {
          cwzb: "累计负债总额",
          jldw: "万元",
          mwzc: "1260000",
          xczg: "75430",
          dnzc: "465400",
          lytz: "30500",
          fzgs: "30620",
          yfxny: "84542",
          fzgs: "34343",
          ptgs: "42342",
          swgs: "21321",
          hbgs: "2312",
          frsc: "777",
          frrz: "23111",
          other: "2111111",
          ztfc: "21111",
          fcjs: "1221211",
          other1: "2222222"
        },
        {
          cwzb: "负债率",
          jldw: "%",
          mwzc: "1260000",
          xczg: "75430",
          dnzc: "465400",
          lytz: "30500",
          fzgs: "30620",
          yfxny: "84542",
          fzgs: "34343",
          ptgs: "42342",
          swgs: "21321",
          hbgs: "2312",
          frsc: "777",
          frrz: "23111",
          other: "2111111",
          ztfc: "21111",
          fcjs: "1221211",
          other1: "2222222"
        },
        {
          cwzb: "",
          jldw: "",
          mwzc: "",
          xczg: "",
          dnzc: "",
          lytz: "",
          fzgs: "",
          yfxny: "",
          fzgs: "",
          ptgs: "",
          swgs: "",
          hbgs: "",
          frsc: "",
          frrz: "",
          other: "",
          ztfc: "",
          fcjs: "",
          other1: ""
        },
        {
          cwzb: "本月营业收入",
          jldw: "万元",
          mwzc: "1260000",
          xczg: "75430",
          dnzc: "465400",
          lytz: "30500",
          fzgs: "30620",
          yfxny: "84542",
          fzgs: "34343",
          ptgs: "42342",
          swgs: "21321",
          hbgs: "2312",
          frsc: "777",
          frrz: "23111",
          other: "2111111",
          ztfc: "21111",
          fcjs: "1221211",
          other1: "2222222"
        },
        {
          cwzb: "本月利润",
          jldw: "万元",
          mwzc: "1260000",
          xczg: "75430",
          dnzc: "465400",
          lytz: "30500",
          fzgs: "30620",
          yfxny: "84542",
          fzgs: "34343",
          ptgs: "42342",
          swgs: "21321",
          hbgs: "2312",
          frsc: "777",
          frrz: "23111",
          other: "2111111",
          ztfc: "21111",
          fcjs: "1221211",
          other1: "2222222"
        },
        {
          cwzb: "本年营业收入累计",
          jldw: "万元",
          mwzc: "1260000",
          xczg: "75430",
          dnzc: "465400",
          lytz: "30500",
          fzgs: "30620",
          yfxny: "84542",
          fzgs: "34343",
          ptgs: "42342",
          swgs: "21321",
          hbgs: "2312",
          frsc: "777",
          frrz: "23111",
          other: "2111111",
          ztfc: "21111",
          fcjs: "1221211",
          other1: "2222222"
        },
        {
          cwzb: "本年利润累计",
          jldw: "万元",
          mwzc: "1260000",
          xczg: "75430",
          dnzc: "465400",
          lytz: "30500",
          fzgs: "30620",
          yfxny: "84542",
          fzgs: "34343",
          ptgs: "42342",
          swgs: "21321",
          hbgs: "2312",
          frsc: "777",
          frrz: "23111",
          other: "2111111",
          ztfc: "21111",
          fcjs: "1221211",
          other1: "2222222"
        },
        {
          cwzb: "本年利润率",
          jldw: "万元",
          mwzc: "1260000",
          xczg: "75430",
          dnzc: "465400",
          lytz: "30500",
          fzgs: "30620",
          yfxny: "84542",
          fzgs: "34343",
          ptgs: "42342",
          swgs: "21321",
          hbgs: "2312",
          frsc: "777",
          frrz: "23111",
          other: "2111111",
          ztfc: "21111",
          fcjs: "1221211",
          other1: "2222222"
        },
        {
          cwzb: "净利润",
          jldw: "万元",
          mwzc: "",
          xczg: "",
          dnzc: "",
          lytz: "",
          fzgs: "",
          yfxny: "",
          fzgs: "",
          ptgs: "",
          swgs: "",
          hbgs: "",
          frsc: "",
          frrz: "",
          other: "",
          ztfc: "",
          fcjs: "",
          other1: ""
        },
        {
          cwzb: "出口创汇",
          jldw: "万美元",
          mwzc: "",
          xczg: "",
          dnzc: "",
          lytz: "",
          fzgs: "",
          yfxny: "",
          fzgs: "",
          ptgs: "",
          swgs: "",
          hbgs: "",
          frsc: "",
          frrz: "",
          other: "",
          ztfc: "",
          fcjs: "",
          other1: ""
        }
      ]
    };
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style scoped>

</style>
