<template>
  <el-row style="margin-top:20px">
    <el-col :span="18" :offset="3">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-image
            style="height:120px"
            src="http://n.sinaimg.cn/games/transform/20171128/rvlj-fypceiq4411184.jpg"
          >
          </el-image>
        </el-col>
        <el-col :span="17" style="margin-left:10px">
          <div style="position: relative;height:120px;">
            <div>
              <el-row style="height:40px;line-height:40px">
                <el-col
                  :span="16"
                  style="text-align:left;font-size:28px;font-weight:bold;"
                  >阿水去哪儿</el-col
                >
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
      <el-divider></el-divider>
      <el-row>
        <el-col :span="15">
          <el-card class="box-card">
            <div>
              你要吃瓜吗
              <el-divider></el-divider>
              <el-row>
                <el-col :span="3">
                  <el-avatar
                    size="large"
                    src="http://melon-site.oss-cn-beijing.aliyuncs.com/avatar/6e22e32d73e05b81f6127c559604a6db.jpg"
                  ></el-avatar>
                </el-col>
                <el-col :span="20">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    placeholder="请输入内容"
                    v-model="textarea2"
                  >
                  </el-input>
                  <el-row style="margin-top:15px">
                    <el-col :span="1" :offset="22">
                      <el-button
                        type="primary"
                        size="mini"
                        icon="el-icon-message"
                        circle
                      ></el-button>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-card>

          <el-card
            class="box-card"
            v-for="i in 4"
            :key="i"
            style="margin-top:20px"
          >
            <div>
              <el-row>
                <el-col :span="3">
                  <el-avatar
                    size="large"
                    src="http://melon-site.oss-cn-beijing.aliyuncs.com/avatar/6e22e32d73e05b81f6127c559604a6db.jpg"
                  ></el-avatar>
                </el-col>
                <el-col :span="20">
                  <p
                    style="margin:0px;text-align:left;font-size: 14px;font-weight: 700;"
                  >
                    dsada
                  </p>
                  <p
                    style="margin:0px;text-align:left;font-size: 14px;line-height: 25px;word-break: break-word;"
                  >
                    这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文
                    这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文
                  </p>
                  <div style="margin:0px;text-align:left;">
                    <el-row>
                      <el-col :span="6">1</el-col>
                      <el-col :span="6">2</el-col>
                      <el-col :span="6">3</el-col>
                      <el-col :span="6">4</el-col>
                    </el-row>
                  </div>
                  <div style="margin:0px;text-align:left;">
                    <el-row>
                      <el-col :span="6">1</el-col>
                      <el-col :span="6">2</el-col>
                      <el-col :span="6">3</el-col>
                      <el-col :span="6">4</el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" :offset="1">
          <el-card
            class="box-card myCardHeader"
            :body-style="{ padding: '20px' }"
          >
            <div slot="header" class="clearfix">
              <span>瓜主</span>
            </div>
            <div>
              <el-row>
                <el-col :span="5">
                  <el-avatar
                    size="large"
                    style="height: 50px; width: 50px; line-height: 50px;text-align:left"
                    src="http://n.sinaimg.cn/games/transform/20171128/rvlj-fypceiq4411184.jpg"
                  ></el-avatar>
                </el-col>
                <el-col :span="14" :offset="0">
                  <p style="margin:0px;text-align:left;font-size:16px">名字</p>
                  <p
                    style="margin:0px;margin-top:5px;text-align:left;font-size:14px"
                  >
                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                  </p>
                </el-col>
                <el-col :span="5">
                  <el-button type="primary" size="mini">关注</el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      textarea2: ''
    }
  }
}
</script>

<style lang="scss">
.myCardHeader {
  .el-card__header {
    padding: 5px;
    padding-left: 15px;
    text-align: left;
    font-weight: bolder;
    font-size: 20px;
  }
}
</style>
