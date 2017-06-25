<template>
  <div class="headerBar">
    <div id="headerWrapper" class="clearfix">
      <a href="/#/" id="logo"></a>
      <div id="searchBar" class="clearfix">
        <div class="clearfix">
          <input type="text" placeholder="搜索你感兴趣的内容...">
          <button><span></span></button>
        </div>
      </div>
      <div id="nav">
        <ul>
          <li class="aAct"><a href="/#/">首页</a></li>
          <li><a href="/#/">话题</a></li>
          <li><a href="/#/">发现</a></li>
          <li @click.prevant="inboxPopUp"><a href="/#/">消息<span id="navCount" v-if="msgNum">{{newMsgNum}}</span></a></li>
        </ul>
        <InboxPopUp :inboxData="dataToInbox"></InboxPopUp>
      </div>
      <div id="userInfo">
        <a href="/#/"><img :src="userPhoto" v-bind="userInfo"><span>{{userName}}</span></a>
        <ul id="navDropdown">
          <li><a href="/#/"><span class="n-d-home"></span>我的主页</a></li>
          <li><a href="/#/"><span class="n-d-inbox"></span>私信</a></li>
          <li><a href="/#/"><span class="n-d-setting"></span>设置</a></li>
          <li><a href="/#/"><span class="n-d-logout"></span>退出</a></li>
        </ul>
      </div>
      <div id="questionBtn">
        <button>提问</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import InboxPopUp from '../components/InboxPopUp';
  import bus from '../assets/eventBus';
  import account_store from '../store/modules/accountInfo';
  import inbox_store from '../store/modules/inbox';

  export default {
    name:'headerBar',
    data:function () {
      return {
        dataToInbox:inbox_store.state,
        newMsgNum:"0",
        userName:"用户名",
        userPhoto:"static/img/noone.png"
      }
    },
    components:{InboxPopUp},
    methods:{
      inboxPopUp(){
        $qs("#navCount").style.display = "none";
        this.newMsgNum = "0";
        bus.$emit('inboxPopUp');
      }
    },
    computed:{
      msgNum(){
        let newMsg = inbox_store.state.newMsg;
        if(newMsg!=="0"){
          console.log("新消息数量:",newMsg);
          this.newMsgNum = newMsg;
          return true;
        }
      },
      userInfo(){
        let userInfo = account_store.state;
          this.userName = userInfo.name;
          this.userPhoto = userInfo.photo.s;
      }
    }
  };








</script>

<style lang="less">
  @blue-zhihu:#0769cb;
  @blue-border: darken(@blue-zhihu,15%);
  @blue-light: lighten(@blue-zhihu,8%);
  @blue-border-light: lighten(@blue-border,8%);
  @blue-dark: darken(@blue-zhihu,5%);
  @maxWidth:960px;
  @minWidth:800px;

  .headerBar{
    width: 100%;
    height: 45px;
    background-color: @blue-zhihu;
    background: -webkit-linear-gradient(top,#086ed5,#055db5);
    background: linear-gradient(to bottom,#086ed5,#055db5);
    font-size: 14px;
    color: #ffffff;
    border-bottom: solid 1px @blue-border;
    box-shadow: 0 1px rgba(0,0,0,.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 15;
  }
  #headerWrapper{
    max-width: @maxWidth;
    min-width: @minWidth;
    height: 46px;
    position: relative;
    margin: 0 auto;
  }
  #logo{
    display: block;
    width: 61px;
    height: 46px;
    background: url("../assets/logo.png") no-repeat 0 8px;
    background-size: 61px 30px;
    float: left;
  }
  #searchBar{
    margin: 7px 0 0 12px;
    position: relative;
    float: left;
    width: 367px;

    input{
      width: 305px;
      line-height: 17px;
      padding: 7px 50px 7px 10px;
      border: solid 1px @blue-border;
      border-radius: 4px;
      outline: 0;
      background-color: #e1eaf2;
      font-size: 14px;
      color: #49525c;
      margin: 0;
    }
    button{
      width: 40px;
      height: 100%;
      position: absolute;
      top:0;
      right: 0;
      background-color: @blue-light;
      background: -webkit-linear-gradient(top,#0e7bef,#0d73da);
      background: linear-gradient(to bottom,#0e7bef,#0d73da);
      border: solid 1px @blue-border;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      cursor: pointer;
      span{
        background: url("../assets/sprites.auto.png") no-repeat -82px 0;
        width: 15px;
        height: 15px;
        display: inline-block;
        margin: auto;
      }
    }
  }
  #nav{
    float: left;
    margin-left: 18px;
    position: relative;
    >ul{
      width: 216px;
      height: inherit;
      display: flex;
      flex-direction: row;
      position: relative;
      >li{
        text-align: center;
        line-height: 45px;
        display: inline-block;
        flex: 1 1 auto;
        position: relative;
        cursor: pointer;
        &.aAct{
          background-color: @blue-dark;
        }
        a{
          color: #ffffff;
          #navCount{
            background: #bf1031;
            border: 1px solid #b11331;
            box-shadow: 0 1px 2px rgba(0,0,0,.1), inset 0 1px 0 rgba(255,255,255,.15);
            color: #fff;
            display: inline-block;
            font-size: 11px;
            font-weight: 700;
            -webkit-text-size-adjust: none;
            padding: 0 5px;
            height: 16px;
            line-height: 16px;
            border-radius: 16px;
            text-indent: 0;
            text-align: center;
            text-decoration: none;

            position: absolute;
            top: 5px;
            left: 31px;
            z-index: 12;
          }
        }
      }
    }
  }
  #questionBtn{
    float: right;
    margin: 7px 0 0;
    button{
      display: block;
      width: 64px;
      line-height: 30px;
      border: solid 1px @blue-border-light;
      border-radius: 4px;
      text-align: center;
      background-color: @blue-light;
      cursor: pointer;
      font-size: 14px;
      color: #ffffff;
      padding: 0;
      margin: 0;
    }
  }
  #userInfo{
    float: right;
    min-width: 120px;
    margin-left: 15px;
    z-index: 10;
    position: relative;
    >a{
      color: #ffffff;
      line-height: 46px;
      display: block;
      position: relative;
      padding: 0 10px;
      img{
        width: 26px;
        height: 26px;
        border: solid 1px @blue-border-light;
        border-radius: 2px;
        background-color: #cccccc;
        position: absolute;
        top: 8px;
      }
      span{
        margin-left: 38px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    &:hover{
      >a{
        background-color: @blue-dark;
        text-shadow: 0 1px 1px rgba(0,0,0,.12);
      }
      #navDropdown{
        display: block;
      }
    }
  }
  #navDropdown{
    display: none;
    width: 100%;
    box-sizing: border-box;
    background-color: @blue-dark;
    text-shadow: 0 1px 1px rgba(0,0,0,.12);
    position: absolute;

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 1px 1px rgba(0,0,0,.5);
    z-index: 10;
    li{
      border-top: solid 1px @blue-border-light;
      &:first-child{
        border-top: none;
      }
      a{
        display: block;
        line-height: 40px;
        color: #ffffff;
        &:hover{
          background-color: #0267cc;
        }
      }
      span{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 0 13px;
        vertical-align: middle;
        &.n-d-home{
          background: url("../assets/sprites.png") no-repeat -4px -4px;
          background-size: 308px 250px;
        }
        &.n-d-inbox{
          background: url("../assets/sprites.png") no-repeat -4px -32px;
          background-size: 308px 250px;
        }
        &.n-d-setting{
          background: url("../assets/sprites.png") no-repeat -4px -58px;
          background-size: 308px 250px;
        }
        &.n-d-logout{background: url("../assets/sprites.png") no-repeat -4px -86px;
          background-size: 308px 250px;}
      }
    }
  }
</style>
