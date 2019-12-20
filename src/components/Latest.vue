<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
      >
        <div v-for="item in data" :key="item.index" class="myCard">
          <el-card class="box-card" :body-style="{ padding: '5px' }">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-image
                  style="height:120px"
                  src="http://n.sinaimg.cn/games/transform/20171128/rvlj-fypceiq4411184.jpg"
                >
                </el-image>
              </el-col>
              <el-col :span="18">
                <div style="position: relative;height:120px;">
                  <div>
                    <el-row style="height:40px;line-height:40px">
                      <el-col
                        :span="16"
                        style="text-align:left;font-size:18px;font-weight:bold;"
                        >阿水去哪儿</el-col
                      >
                      <el-col :span="8">
                        <el-tag
                          size="mini"
                          v-for="i in tag"
                          :key="i"
                          style="margin-right:5px"
                        >
                          {{ i }}
                        </el-tag>
                      </el-col>
                    </el-row>
                  </div>
                  <div>
                    <el-row>
                      <el-col :span="24">
                        <p
                          style="text-align:left;overflow:hidden;margin:0;word-wrap:break-word;font-size:14px"
                        >
                          11
                        </p>
                      </el-col>
                    </el-row>
                  </div>
                  <div style="position: absolute;bottom:0px;width:100%">
                    <el-row style="height:30px;line-height:30px">
                      <el-col :span="2">
                        <el-avatar
                          size="small"
                          src="http://n.sinaimg.cn/games/transform/20171128/rvlj-fypceiq4411184.jpg"
                        ></el-avatar>
                      </el-col>
                      <el-col :span="5" style="text-align:left;font-size:14px"
                        >用户名</el-col
                      >
                      <el-col :span="3" style="text-align:left;font-size:12px"
                        >发布时间</el-col
                      >
                      <el-col :span="4" :offset="5" style="font-size:14px"
                        >阅读数</el-col
                      >
                      <el-col :span="4" style="font-size:14px">讨论数</el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      data: [],
      tag: ['haha', 'lol', 'zhuan'],
      busy: false
    }
  },
  methods: {
    loadMore: function() {
      this.busy = true
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: this.count++ })
        }
        console.log(this.data)
        this.busy = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #e8f3fe;
  margin: 10px;
  color: #7dbcfc;
}
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.myCard {
  margin-top: 15px;
  .el-image {
    overflow: visible;
  }
}
</style>
