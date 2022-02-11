<template>
      <div class="FooterGuide">
          <div class="FooterItem" :class="{on : $route.path === '/home' || $route.path === '/'}" @click="goto('/home')">
              <span>
                  <i class="iconfont icon-home"></i>
              </span>
              <span>首页</span>
          </div>
          <div class="FooterItem" :class="{on : $route.path === '/search'}" @click="goto('/search')">
              <span>
                  <i class="iconfont icon-search"></i>
              </span>
              <span>搜索</span>
          </div>
          <div class="FooterItem" :class="{on : $route.path === '/order'}" @click="goto('/order')">
              <span>
                  <i class="iconfont icon-order-fill"></i>
              </span>
              <span>订单</span>
          </div>
          <div class="FooterItem" :class="{on : $route.path === '/profile'}" @click="goto('/profile')">
              <span>
                  <i class="iconfont icon-person"></i>
              </span>
              <span>个人</span>
          </div>
      </div>
</template>

<script>
export default {
    name: 'FooterGuide',
    methods: {
        goto(path) {
            this.$router.replace(path)
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixins.styl'
    .FooterGuide 
      top-border-1px(#ccc)
      position fixed
      width 100%
      height 50px
      bottom 0
      left 0
      display flex
      .FooterItem
        display flex
        flex-direction column
        text-align center
        width 25%
        &.on
          color green
        span 
          font-size 12px
          margin-top 5px 
</style>