<template>
  <div id="toolBar" class="clearfix">
    <div class="tb_Photo">
      <img src="../../static/img/head_xs.png">
    </div>
    <div class="tb_nav">
      <span class="tb_nav_bg"></span>
      <ul>
        <li><a href="/#/" v-on:click="questionPopUp"><span class="tb_nav_question"></span>提问</a></li>
        <li><a href="/#/"><span class="tb_nav_answer"></span>回答</a></li>
        <li><a href="/#/"><span class="tb_nav_article"></span>写文章</a></li>
      </ul>
      <a href="/#/" class="tb_nav_draft">草稿</a>
    </div>
  </div>
</template>
<script>
  import bus from '../assets/eventBus';

  export default{
    name:"toolBar",
    methods:{
      questionPopUp(){
        bus.$emit("questionPopUp");
      }
    }
  };
</script>
<style lang="less">
  .tb_bg_main {
    background: url("../assets/sprites.main.png") no-repeat;
    background-size: 208px 105px;
  };

  #toolBar{
    width: 100%;
    position: relative;
    margin-bottom: 30px;
  }
  .tb_Photo{
    float: left;
    >img{
      display: block;
      width: 38px;
      height: 38px;
      border-radius: 3px;
      background-color: #cccccc;
    }
  }
  .tb_nav{
    margin-left: 58px;
    height: 48px;
    line-height: 48px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    position: relative;
    span.tb_nav_bg{
      width: 10px;
      height: 10px;
      overflow: hidden;
      position: absolute;
      left: -10px;
      top: 10px;
      &:before{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: solid transparent;
        top: 0;
        left: 0;

        border-top-color: #f0f0f0;
        border-width: 14px;
      }
      &:after{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: solid transparent;

        border-top-color: #fafafa;
        border-width: 13px;
        top: 1px;
        left: 2px;
      }
    }
    >ul{
      width: 359px;
      height: 48px;
      display: flex;
      flex-direction: row;
      font-size: 14px;
      position: relative;
      float: left;
      >li{
        flex: 1 1 auto;
        position: relative;
        >a{
          color: #6c829f;
          display: block;
          text-align: center;
          >span{
            display: inline-block;
            width: 24px;
            height: 24px;
            vertical-align: middle;
          }
          .tb_nav_question{
            .tb_bg_main;
            background-position: -148px -30px;
          }
          .tb_nav_answer{
            .tb_bg_main;
            background-position: -96px -30px;
          }
          .tb_nav_article{
            .tb_bg_main;
            background-position: -122px -56px;
          }
          /*在a标签hover时*/
          &:hover{
            color: #225599;
            .tb_nav_question{
              .tb_bg_main;
              background-position: -122px -30px;
            }
            .tb_nav_answer{
              .tb_bg_main;
              background-position: -96px -56px;
            }
            .tb_nav_article{
              .tb_bg_main;
              background-position: -174px -30px;
            }
          }
        }
        &:after{
          content: '';
          position: absolute;
          width: 1px;
          height: 20px;
          left: 0;
          top: 50%;
          margin-top: -10px;
          background: #f0f0f0;
        }
        &:first-child:after{
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          right: 0;
          top: 0;
          margin-top: 0;
          background: rgba(0,0,0,0);
        }
      }
    }
    .tb_nav_draft{
      font-size: 13px;
      color: #999999;
      float: right;
      margin-right: 20px;
      &:hover{
        color: #698ebf;
      }
    }
  }
</style>
