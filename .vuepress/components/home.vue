<template>
  <div class='home' id="a">
    <card v-for="(item, index) in cardList" :key="index" :name="item.name" :text="item.text" :tagline="item.tagline"
      :icon="item.icon" :color="item.color" :link="item.link">
    </card>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      cardList: [
        {
          color: '#8e44ad',
          icon: 'fa-file-code-o',
          name: '前端常用网站',
          text: '工作中常用的框架文档、素材网站、在线工具等',
          link: '/docs/nav/frontEndCommon'
        },

        {
          color: '#2ecc71',
          icon: 'fa-file-excel-o',
          name: '前端好项目收集',
          text: '如前端拖拽、用户引导、图片裁剪、验证器等',
          link: '/docs/nav/frontEndCollect'
        },
        {
          color: '#2980b9',
          icon: 'fa-file-powerpoint-o',
          name: '后端常用网站',
          text: '常用的框架，优秀作品等',
          link: '/docs/nav/document'
        },
        {
          color: '#1abc9c',
          icon: 'fa-wrench',
          name: '工具',
          text: '无论办公还是开发都极其适用的小工具推荐',
          link: '/docs/nav/document'
        }, {
          color: '#c0392b',
          icon: 'fa-user-circle',
          name: '个人博客',
          text: '本人CSDN博客跳转链接',
          link: '/docs/nav/document'
        },
        {
          color: '#2980b9',
          icon: 'fa-linode',
          name: '前端笔记',
          text: '前端学习、工作记录',
          link: '/docs/nav/document'
        },
        {
          color: '#f39c12',
          icon: 'fa-free-code-camp',
          name: '后端笔记',
          text: '后端学习、工作记录',
          link: '/docs/nav/document'
        },
      ]
    };
  },


  mounted() { },

  destroyed() { },

  methods: {}
}

</script>
<style lang='scss' scoped>
.home {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .card {
    width: 30%;
  }
}

@media screen and (max-width: 768px) {
  .home {
    .card {
      width: 100%;
    }
  }
}
</style>