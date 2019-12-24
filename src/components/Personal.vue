<template>
  <div style="margin-top:20px">
    <el-row>
      <el-col :span="20" :offset="2">
        <el-row>
          <el-col :span="24">
            <el-card class="box-card" :body-style="topBodyStyle">
              <el-avatar
                :size="80"
                src="http://melon-site.oss-cn-beijing.aliyuncs.com/avatar/6e22e32d73e05b81f6127c559604a6db.jpg"
              ></el-avatar>
              <h1
                style="font-size:22px;font-weight: normal;margin: 0;padding: 0;padding-top:10px"
              >
                姐我想得到你
              </h1>
              <p
                style="font-size:14px;font-weight: normal;margin: 0;padding: 0;padding-bottom:10px;padding-top:10px"
              >
                无属性小糊逼
              </p>
              <el-button-group>
                <el-button type="primary" icon="el-icon-edit">关注</el-button>
                <el-button type="primary" icon="el-icon-share">私信</el-button>
              </el-button-group>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px" :gutter="20">
          <el-col :span="7">
            <el-card class="box-card" :body-style="asideCardStyle">
              <el-row class="asideCard">
                <el-col :span="8">
                  <p>11</p>
                  <span>关注</span>
                </el-col>
                <el-col :span="8">
                  <p>11</p>
                  <span>粉丝</span>
                </el-col>
                <el-col :span="8">
                  <p>11</p>
                  <span>微博</span>
                </el-col>
              </el-row>
            </el-card>
            <el-card
              class="description"
              style="margin-top:20px"
              :body-style="description"
            >
              <p>
                <span class="el-icon-location"></span>
                北京市
              </p>
              <p>
                <span class="el-icon-date" style="font-size:16px"></span>
                2000年4月20日
              </p>
              <p>
                <span class="el-icon-document" style="font-size:16px"></span>
                无属性小糊逼
              </p>
              <p>
                <span class="el-icon-crop" style="font-size:16px"></span>
                标签: 时尚 美食 旅游 健康 文艺
              </p>
            </el-card>
          </el-col>
          <el-col :span="17"> </el-col>
        </el-row>
      </el-col>
    </el-row>
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
        },
        {
          name: 'monster2222',
          content: 'ssxw',
          innerComment: [
            {
              name: 'sss',
              content: 'x2'
            }
          ]
        },
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
      ],
      topBodyStyle: {
        padding: '0px',
        'padding-top': '20px',
        'padding-bottom': '20px',
        'background-color': '#afd8ee'
      },
      asideCardStyle: {
        padding: '0px',
        'padding-top': '20px',
        'padding-bottom': '20px'
      },
      description: {
        padding: '0px',
        'padding-left': '20px',
        'padding-right': '20px'
      }
    }
  }
}
</script>

<style lang="scss">
.asideCard {
  p {
    padding: 0px;
    margin: 0px;
    font-size: 18px;
  }
  span {
    font-size: 14px;
  }
}

.description {
  p {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: #d9d9d9;
    text-align: left;
    padding-bottom: 6px;
    font-size: 14px;
  }
  span {
    font-size: 16px;
    margin-right: 5px;
  }
}
</style>
