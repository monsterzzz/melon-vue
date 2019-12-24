<template>
  <div>
    <PersonalUserList :data="data"></PersonalUserList>
  </div>
</template>

<script>
import PersonalUserList from '@/components/PersonalUserList.vue'
export default {
  components: {
    PersonalUserList
  },
  mounted() {},
  data() {
    var userList = []
    for (var i = 0; i <= 4; i++) {
      userList.push({
        name: 'hello fans' + i,
        avatar:
          'https://tvax2.sinaimg.cn/crop.1.0.748.748.180/bd4e13c2ly8fmtycpc8lpj20ku0ksq4i.jpg?KID=imgbed,tva&Expires=1577202477&ssig=OBX%2FmsyfD%2F',
        description: 'hello world'
      })
    }
    return {
      data: userList
    }
  }
}
</script>

<style></style>
