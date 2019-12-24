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
                        @click="addNews(ids)"
                      ></el-button>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-card>
          <el-card
            class="box-card"
            v-for="(i, k) in comment"
            :key="k"
            :body-style="{ padding: '0px' }"
            style="margin-top:20px"
          >
            <div
              style="padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:5px"
            >
              <el-row>
                <el-col :span="3">
                  <el-avatar
                    :size="50"
                    fit="fill"
                    src="http://melon-site.oss-cn-beijing.aliyuncs.com/avatar/6e22e32d73e05b81f6127c559604a6db.jpg"
                  ></el-avatar>
                </el-col>
                <el-col :span="20">
                  <div
                    style="margin:0px;text-align:left;font-size: 14px;font-weight: 700;margin-bottom:7px"
                  >
                    {{ i.name }}
                  </div>
                  <div
                    style="margin:0px;padding:0px;margin-bottom:3px;text-align:left;font-size: 12px;color: #808080;letter-spacing: normal;word-spacing: normal;"
                  >
                    12月13日 07:39 来自 iPhone客户端
                  </div>
                  <p
                    style="margin:0px;text-align:left;font-size: 14px;line-height: 25px;word-break: break-word;"
                  >
                    {{ i.content }}
                  </p>
                </el-col>
              </el-row>
            </div>
            <div
              style="margin:0px;text-align:left;border-top: 1px solid #ccc!important;border-color: #f2f2f5;"
            >
              <el-row style="text-align:center;line-height:32px;height:32px;">
                <el-col :span="6">
                  <el-link>
                    <span class="el-icon-chat-dot-round" style="font-size:16px">
                    </span>
                    <span style="font-size:12px;margin-left:2px">评论</span>
                  </el-link>
                </el-col>
                <el-col :span="6">
                  <el-link>
                    <span class="el-icon-chat-dot-round" style="font-size:16px">
                    </span>
                    <span style="font-size:12px;margin-left:2px">评论</span>
                  </el-link>
                </el-col>
                <el-col :span="6">
                  <el-link @click="changeActive(k)">
                    <span class="el-icon-chat-dot-round" style="font-size:16px">
                    </span>
                    <span style="font-size:12px;margin-left:2px">评论</span>
                  </el-link>
                </el-col>
                <el-col :span="6">
                  <el-link>
                    <span class="el-icon-chat-dot-round" style="font-size:16px">
                    </span>
                    <span style="font-size:12px;margin-left:2px">评论</span>
                  </el-link>
                </el-col>
              </el-row>
            </div>

            <div
              v-show="activeCardIndex == k"
              style="background-color: #f2f2f5;padding-top:30px;padding-bottom:10px"
            >
              <div
                style="padding-bottom:10px;border-bottom-width:1px;border-bottom-style:solid;border-color:#d9d9d9"
              >
                <el-row style="height:40px;line-height:40px">
                  <el-col :span="2" :offset="1">
                    <el-avatar
                      size="medium"
                      src="http://melon-site.oss-cn-beijing.aliyuncs.com/avatar/6e22e32d73e05b81f6127c559604a6db.jpg"
                    >
                    </el-avatar>
                  </el-col>
                  <el-col :span="20">
                    <div>
                      <el-input
                        v-model="input"
                        size="mini"
                        placeholder="请输入内容"
                      >
                      </el-input>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="height:30px;line-height:30px">
                  <el-col :span="17" :offset="3" style="text-align:left">
                    <el-checkbox v-model="checked">转发</el-checkbox>
                  </el-col>
                  <el-col :span="3">
                    <el-button type="warning" size="mini" @click="addComment(k)"
                      >评论</el-button
                    >
                  </el-col>
                </el-row>
              </div>

              <div>
                <div
                  v-for="(innerItem, idx) in i.innerComment"
                  :key="idx"
                  style="padding-bottom:5px;padding-top:10px;font-size:12px;border-bottom-width: 1px !important;border-bottom-style: solid !important;border-color: #d9d9d9;"
                >
                  <el-row>
                    <el-col
                      :span="2"
                      :offset="1"
                      style="height:40px;line-height:40px"
                    >
                      <el-avatar
                        size="medium"
                        src="http://melon-site.oss-cn-beijing.aliyuncs.com/avatar/6e22e32d73e05b81f6127c559604a6db.jpg"
                      >
                      </el-avatar>
                    </el-col>
                    <el-col :span="20">
                      <div style="text-align:left;line-height:23px;">
                        <span style="color: #ee6583;">{{ innerItem.name }}</span
                        >:
                        <span style="font-size:12px">{{
                          innerItem.content
                        }}</span>
                      </div>
                      <div
                        style="color: #808080;text-align:left;line-height:23px;"
                      >
                        <span>12月18日 08:29</span>

                        <el-link
                          :underline="false"
                          style="font-size:12px;line-height:23px;float:right;"
                        >
                          赞
                        </el-link>

                        <el-link
                          :underline="false"
                          style="font-size:12px;line-height:23px;float:right;margin-right:10px"
                        >
                          回复
                        </el-link>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
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
      activeCardIndex: -2,
      textarea2: '',
      input: '',
      checked: false,
      comment: [
        {
          name: 'monster1',
          content: 'hello1',
          innerComment: [
            {
              name: 'innerMonster',
              content: 'innerContent'
            }
          ]
        },
        {
          name: 'monster2',
          content: 'hello2',
          innerComment: []
        },
        {
          name: 'monster3',
          content: 'hello3',
          innerComment: []
        }
      ]
    }
  },
  methods: {
    changeActive(index) {
      if (this.activeCardIndex == index) {
        this.activeCardIndex = -1
        return
      }
      this.activeCardIndex = index
    },
    addComment(ids) {
      if (this.comment[ids])
        this.comment[ids].innerComment.push({
          name: 'temp',
          content: this.input
        })
      this.input = ''
    },
    addNews(ids) {
      console.log(ids)
      this.comment.push({
        name: 'ttemp',
        content: this.textarea2,
        innerComment: []
      })
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
