<template>
  <div>
    <el-card v-for="(i, k) in data" :key="k" class="newsItem">
      <el-row>
        <el-col :span="2">
          <el-avatar :size="45" :src="i.avatar"></el-avatar>
        </el-col>
        <el-col :span="18">
          <div style="font-size: 14px;color: #333;font-weight: 700;">
            <span>{{ i.name }}</span>
          </div>
          <div style="margin-top:5px">
            <div style="padding-bottom:3px">
              <em style="font-style: normal;color: #808080;font-size:12px"
                >地址:
              </em>
              <span style="font-size: 14px;">11</span>
            </div>
            <div>
              <em style="font-style: normal;color: #808080;font-size:12px"
                >简介:
              </em>
              <span style="font-size: 14px;">11</span>
            </div>
          </div>
        </el-col>
        <el-col
          :span="4"
          style="height:60px;line-height:60px;text-align:center"
        >
          <el-button type="primary">
            关注
          </el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Array }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.newsItem {
  margin-bottom: 15px;
  text-align: left;
}
.name {
  padding: 0px 15px;
}
</style>
