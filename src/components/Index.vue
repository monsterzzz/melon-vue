<template>
  <div>
    <div class="dr" style="height: 60px;line-height: 60px;">
      <el-row>
        <el-col
          :xs="{ span: 3, offset: 0 }"
          :sm="{ span: 22, offset: 2 }"
          :md="{ span: 22, offset: 2 }"
          :lg="{ span: 1, offset: 2 }"
          :xl="{ span: 1, offset: 2 }"
        >
          <router-link to="/">
            <el-avatar
              :size="40"
              src="http://melon-site.oss-cn-beijing.aliyuncs.com/avatar/6e22e32d73e05b81f6127c559604a6db.jpg"
            >
              <img src="" @click="goLogin" />
            </el-avatar>
          </router-link>
        </el-col>
        <el-col
          :xs="{ span: 16, offset: 0 }"
          :sm="{ span: 5, offset: 0 }"
          :md="{ span: 5, offset: 0 }"
          :lg="{ span: 5, offset: 0 }"
          :xl="{ span: 5, offset: 0 }"
        >
          <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable
            style="height: 60px;line-height: 60px;"
          >
          </el-input>
        </el-col>
        <el-col
          :xs="{ span: 12, offset: 2 }"
          :sm="{ span: 5, offset: 0 }"
          :md="{ span: 5, offset: 0 }"
          :lg="{ span: 5, offset: 0 }"
          :xl="{ span: 1, offset: 0 }"
          style="height: 60px;line-height: 60px; margin-left:15px"
          class="hidden-sm-and-down"
        >
          <el-button type="primary" icon="el-icon-search" @click="backIndex"
            >搜索</el-button
          >
        </el-col>
        <el-col
          :xs="{ span: 1, offset: 1 }"
          :sm="{ span: 5, offset: 0 }"
          :md="{ span: 5, offset: 0 }"
          :lg="{ span: 5, offset: 0 }"
          :xl="{ span: 5, offset: 0 }"
          style="height: 60px;line-height: 60px;"
          class="hidden-sm-and-up"
        >
          <el-button type="primary" icon="el-icon-search"></el-button>
        </el-col>
        <el-col
          :xs="{ span: 5, offset: 2 }"
          :sm="{ span: 5, offset: 2 }"
          :md="{ span: 5, offset: 2 }"
          :lg="{ span: 5, offset: 2 }"
          :xl="{ span: 2, offset: 2 }"
          class="hidden-sm-and-down"
        >
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">关注</el-menu-item>
            <el-menu-item index="2">最新</el-menu-item>
          </el-menu>
        </el-col>
        <el-col
          :xs="{ span: 5, offset: 2 }"
          :sm="{ span: 5, offset: 2 }"
          :md="{ span: 5, offset: 2 }"
          :lg="{ span: 5, offset: 2 }"
          :xl="{ span: 2, offset: 2 }"
          class="hidden-sm-and-down"
        >
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
        </el-col>
        <div v-if="isLogin">
          <el-col
            :xs="{ span: 5, offset: 2 }"
            :sm="{ span: 5, offset: 2 }"
            :md="{ span: 5, offset: 2 }"
            :lg="{ span: 5, offset: 2 }"
            :xl="{ span: 1, offset: 2 }"
            class="hidden-sm-and-down"
            style="height:60px;line-height:60px;display:table-cell"
          >
            <el-avatar :size="50" src="https://empty" @error="errorHandler">
              <img
                src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
              />
            </el-avatar>
          </el-col>
        </div>
        <div v-else>
          <el-col
            :xs="{ span: 5, offset: 2 }"
            :sm="{ span: 5, offset: 2 }"
            :md="{ span: 5, offset: 2 }"
            :lg="{ span: 5, offset: 2 }"
            :xl="{ span: 1, offset: 2 }"
          >
            <el-button type="text" @click="goLogin">文字按钮</el-button>
          </el-col>
        </div>
      </el-row>
    </div>
    <div>
      <el-row>
        <el-col :span="16" :offset="4">
          <router-view> </router-view>
        </el-col>
      </el-row>
    </div>
    <div class="footer hidden-sm-and-up">
      <el-row>
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit">关注</el-button>
          <el-button type="primary" icon="el-icon-share">热门</el-button>
          <el-button type="primary" icon="el-icon-share">我的</el-button>
          <el-button type="primary" icon="el-icon-delete">发瓜</el-button>
        </el-button-group>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      input: '',
      tabPosition: 'left',
      isLogin: false
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    backIndex() {
      console.log('!!!')
      this.$router.push('/')
    },
    goLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
.dr {
  border-bottom: solid 1px #e6e6e6;
}
.footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: rgb(247, 247, 247);
  z-index: 9999;
}
.border {
  border-style: solid;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
}
.el-avatar {
  vertical-align: middle;
  text-align: center;
}
</style>
