<template>
  <div class="foot-bar">
    <div class="foot-bar-inner">
      <div class="foot-left">
        <div class="logo">
          <img src="@/assets/images/yksg.svg" alt="" class="logo-img" />
          <p class="logo-name">随欲</p>
        </div>
        <p class="top-p">随欲是本人独自开发的，为便于与用户交流的留言平台。</p>
        <p class="top-p">用户将留言便签贴在留言墙上，用户可以自定义便签颜色和内容属性，不仅可以用于交流，也是一场记录。</p>
        <p class="state"><span>声明</span><span>备案/许可证粤ICP备19012866号</span></p>
      </div>
      <div class="link">
        <p class="title">链接</p>
        <div class="line-inner">
          <a href="https://github.com/huangyuanyin/hyy-vue3-followWall" target="_blank" class="link-name">GitHub</a>
          <a href="https://blog.csdn.net/weixin_42365757?spm=1000.2115.3001.5343" target="_blank" class="link-name">CSDN</a>
        </div>
      </div>
      <div class="foot-right">
        <p class="title">打赏</p>
        <div class="right-inner">
          <div>
            <img src="@/assets/images/zfb.png" alt="" />
            <p class="ds-title">支付宝支付</p>
          </div>
          <div>
            <img src="@/assets/images/wx.png" alt="" />
            <p class="ds-title">微信支付</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.foot-bar {
  width: 100%;
  height: 200px;
  background: @gray-1;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 40px;
  .foot-bar-inner {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    p {
      color: rgba(225, 225, 225, 0.5);
    }
  }
  .foot-left {
    .logo {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      .logo-name {
        font-size: 20px;
        font-weight: 600;
        color: @gray-10;
        padding-left: 10px;
      }
    }
    .top-p {
      font-size: @size-12;
      padding-bottom: 4px;
      width: 400px;
    }
    .state {
      font-size: @size-12;
      display: flex;
      justify-content: space-between;
      padding-top: 26px;
      span {
        font-size: @size-12;
        padding-right: 20px;
      }
    }
  }
  .title {
    font-size: @size-16;
    padding-bottom: 12px;
  }
  .link {
    flex: 1;
    padding: 0 40px;
    .line-inner {
      a {
        color: rgba(225, 225, 225, 0.5);
        padding-right: 20px;
        font-size: @size-12;
      }
    }
  }
  .foot-right {
    .right-inner {
      display: flex;
      img {
        width: 100px;
        height: 100px;
        padding-right: 40px;
      }
      .ds-title {
        font-size: @size-12;
        padding-top: 8px;
      }
    }
  }
}
</style>
