<template>
  <div>
    <el-card
      class="box-card"
      v-for="(i, k) in news"
      :key="k"
      :body-style="{ padding: '0px' }"
      style="margin-bottom:15px"
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
                <el-input v-model="input" size="mini" placeholder="请输入内容">
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
                  <span style="font-size:12px">{{ innerItem.content }}</span>
                </div>
                <div style="color: #808080;text-align:left;line-height:23px;">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          name: 'monster2222',
          content: 'ssxw',
          innerComment: [
            {
              name: 'sss',
              content: 'x2'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style></style>
