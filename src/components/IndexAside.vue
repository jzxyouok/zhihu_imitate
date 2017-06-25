<template>
  <div id="indexAside">
    <div class="asideBox">
      <ul class="aB_default">
        <li><a href="/#/"><span class="aB_bg_collection"></span>我的收藏</a></li>
        <li><a href="/#/"><span class="aB_bg_attention"></span>我关注的问题</a></li>
        <li><a href="/#/"><span class="aB_bg_invited"></span>邀请我回答的问题</a></li>
        <li><a href="/#/"><span class="aB_bg_balance"></span>我的余额</a></li>
      </ul>
    </div>
    <div class="asideBox">
      <ul class="aB_default">
        <li><a href="/#/"><span class="aB_bg_collection"></span>公共编辑动态</a></li>
        <li><a href="/#/"><span class="aB_bg_attention"></span>社区服务中心</a></li>
        <li><a href="/#/"><span class="aB_bg_invited"></span>版权服务中心</a></li>
      </ul>
    </div>

    <div class="asideBox">
      <h3 class="aB_title">知乎专栏</h3>
      <ul class="aB_responsive">
        <li><a href="/#/"><span class="aB_bg_column"></span><span class="aB_r_text">专栏・发现</span></a></li>
        <li v-for="item in column">
          <a v-bind:href="item.url"><img v-bind:src="item.img" class="ab_icon"><span class="aB_r_text">{{item.title}}</span></a>
        </li>
      </ul>
    </div>

    <div class="asideBox">
      <h3 class="aB_title">知乎 Live ⚡<a href="/#/">查看全部 »</a></h3>
      <ul class="aB_responsive">
        <li v-for="item in live">
          <a v-bind:href="item.url"><img v-bind:src="item.img" class="ab_icon"><span class="aB_r_text">{{item.title}}</span></a>
        </li>
      </ul>
    </div>
    <div class="asideBox">
      <h3 class="aB_title">知乎圆桌<a href="/#/">查看全部 »</a></h3>
      <ul class="aB_responsive">
        <li v-for="item in roundTable">
          <a v-bind:href="item.url"><img v-bind:src="item.img" class="ab_icon"><span class="aB_r_text">{{item.title}}</span></a>
        </li>
      </ul>
    </div>
    <div class="asideBox">
      <h3 class="aB_title">知乎书店<a href="/#/">查看全部 »</a></h3>
      <ul class="aB_responsive">
        <li v-for="item in bookstore">
          <a v-bind:href="item.url"><img v-bind:src="item.img" class="ab_icon"><span class="aB_r_text">{{item.title}}</span></a>
        </li>
      </ul>
    </div>

    <div class="asideBox">
      <ul class="aB_responsive">
        <li><a href="/#/"><span class="aB_bg_app"></span><span class="aB_r_text">下载 App</span></a></li>
      </ul>
    </div>

    <div class="asideBox">
      <ul class="aB_footer">
        <li><a href="/#/">刘看山</a></li>
        <li class="aB_footer_p"><a href="/#/">知乎指南</a></li>
        <li class="aB_footer_p"><a href="/#/">建议反馈</a></li>
        <li class="aB_footer_p"><a href="/#/">移动应用</a></li>
        <li><a href="/#/">加入知乎</a></li>
        <li class="aB_footer_p"><a href="/#/">知乎协议</a></li>
        <li class="aB_footer_p"><a href="/#/">举报投诉</a></li>
        <li class="aB_footer_p"><a href="/#/">联系我们</a></li>
      </ul>
      <p class="copyright">© 2017 知乎</p>
    </div>
  </div>
</template>
<script>
  import aside_store from '../store/modules/aside'

  export default {
    name:"indexAside",
    data(){
        //console.log(aside_store.state);
        return aside_store.state;
    }
  }

</script>
<style lang="less">
  .ab_bg{
    background: url("../assets/sprites.png") no-repeat;
    background-size: 308px 250px;
  }
  .ab_bg_icon{
    background: url("../assets/sprites.auto.a740548f.png") no-repeat;
    background-size: 67px 52px;
  }
  .ab_icon{
    float: left;
    width: 25px;
    height: 25px;
    border-radius: 3px;
    background-color: #eee;
    margin-right: 8px;
  }
  .aB_r_text{
    display: block;
    padding-right: 10px;
    max-width: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }


  .aB_bg_column{
    .ab_bg_icon;
    background-position: 0 0;
    .ab_icon;
  }
  .aB_bg_app{
    .ab_bg_icon;
    background-position: 0 -27px;
    .ab_icon;
  }


  .aB_title{
    margin-bottom: 10px;
    line-height: 23px;
    >a{
      font-size: 13px;
      font-weight: normal;
      color: #698ebf;
      float: right;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  .aB_responsive{
    margin-left: -10px;
    >li{
      margin-bottom: 3px;
      >a{
        display: block;
        position: relative;
        line-height: 25px;
        padding: 5px 0 5px 10px;
        color: #666666;
        &:hover{
          color: #259;
          background: #eff6fa;
          border-radius: 3px;
        }

      }
    }
  }
  .asideBox{
    font-size: 13px;
    padding: 10px 0;
    &:first-child{
      padding-top: 0;
    }
    border-bottom: solid 1px #eeeeee;
    &:last-child{
      border-bottom: none;
    }
  }
  .aB_default{
    margin-left: -10px;
    >li{
      height: 28px;
      line-height: 28px;
      margin-bottom: 3px;
      &:last-child{
        margin-bottom: 0;
      }
      >a{
        display: block;
        position: relative;
        padding-left: 10px;
        color: #666666;
        >span{
          display: inline-block;
          width: 14px;
          height: 14px;
          vertical-align: -2px;
          margin-right: 2px;
        }
        .aB_bg_collection{
          .ab_bg;
          background-position: -167px -4px;
        }
        .aB_bg_attention{
          .ab_bg;
          background-position: -183px -4px;
        }
        .aB_bg_invited{
          .ab_bg;
          background-position: -200px -4px;
        }
        .aB_bg_balance{
          background: url("../assets/purse.85383d0a.svg");
          background-position: left center;
        }
        /**/
        &:hover{
          color: #259;
          background: #eff6fa;
          border-radius: 3px;
          .aB_bg_collection{
            .ab_bg;
            background-position: -167px -24px;
          }
          .aB_bg_attention{
            .ab_bg;
            background-position: -183px -24px;
          }
          .aB_bg_invited{
            .ab_bg;
            background-position: -200px -24px;
          }
          .aB_bg_balance{
            background: url("../assets/purse__hover.5e51d654.svg");
            background-position: left center;
          }
        }
      }
    }
  }
  .aB_footer{
    font-size: 13px;
    >li{
      display: inline-block;
      padding-bottom: 10px;
      &.aB_footer_p:before{
        content: '•';
        margin-right: 3px;
        padding: 0 3px;
        color: #bbb;
      }
      >a{
        color: #999999;
        &:hover{
          text-decoration: underline;
          background: rgba(0,0,0,0);
        }
      }
    }
  }
  .copyright{
    margin-left: 1px;
    font-size: 13px;
    color: #999999;
  }
</style>
