<template>
  <div class="inboxPopUp" v-if="toggle">
    <div class="boxArrow"></div>
    <div class="headerPopUp">
      <button id="message" @click="switchList" :class="messageClass"><span class="icon_message"></span></button>
      <button id="attention" @click="switchList" :class="attentionClass"><span class="icon_attention"></span></button>
      <button id="agree" @click="switchList" :class="agreeClass"><span class="icon_agree"></span></button>
    </div>
    <div class="mainPopUp">

      <div id="messageList" v-if="displayNow==='message'">
        <div class="ipu_row" v-for="item in inboxData.message">
          <a href="/#/">{{item.user}}</a>在<a href="/#/">{{item.column}}</a>中发布了<a href="/#/">{{item.title}}</a>
        </div>
      </div>

      <div id="attentionList" v-else-if="displayNow==='attention'">
        <div class="ipu_row" v-for="item in inboxData.attention">
          <a href="/#/">{{item.user}}</a>关注了你
        </div>
      </div>
      <div id="agreeList" v-else-if="displayNow==='agree'">
        <div class="ipu_row" v-for="item in inboxData.agree">
          <a href="/#/">{{item.user}}</a>
          <span v-if="item.case==='agree'">赞了</span>
          <span v-if="item.case==='thanks'">感谢</span>
          你在<a href="/#/">{{item.title}}</a>中
          <span v-if="item.case==='thanks'">的回答</span>
          <span v-if="item.case==='agree'">
            <span v-if="item.type==='answer'">的回答</span>
            <span v-if="item.type==='comment'">
              <a href="/#/">{{item.author}}</a>的回答下的评论
            </span>
          </span>
        </div>
      </div>
    </div>
    <div class="footerPopUp">
      <a href="/#/" class="msgSetting"><span></span></a>
      <a href="/#/" class="allMsg">查看全部 »</a>
    </div>
  </div>
</template>
<script>
  import bus from '../assets/eventBus';
  import inbox_store from '../store/modules/inbox';

  export default{
    name:"inboxPopUp",
    props:['inboxData'],
    data(){
        return {
          toggle:false,
          displayNow:"message",
          newMsg:{}
        }
    },
    methods:{
      switchList(event){
        let et = event.target;
        if(et.nodeName.toLowerCase()==="span"){
          et=et.parentNode;
        }
        if(et.id !== this.$data.displayNow){
          this.$data.displayNow = et.id;
        }
        console.log(this.$data.displayNow);
      }
    },
    computed:{
      messageClass(){
        return this.$data.displayNow==="message"?"inbox_act":"";
      },
      attentionClass(){
        return this.$data.displayNow==="attention"?"inbox_act":"";
      },
      agreeClass(){
        return this.$data.displayNow==="agree"?"inbox_act":"";
      },
      isNew(arg){//WTF
        console.log(arg);
        return arg===true?"ipu_new":"abc";
      }
    },
    mounted(){
      bus.$on('inboxPopUp',()=>{
        this.$data.toggle = this.$data.toggle!==true;
      });
    }
  };
</script>
<style lang="less">
  @border-in:solid 1px #eeeeee;
  @img_sprites:"../assets/sprites.png";

  .ipu_row{
    padding: 7px 9px;
    border-bottom: 1px solid #eee;
    &:last-child{
      border-bottom: none;
    }
    a{
      color: #225599;
      &:before,&:after{
        content: " ";
      }
    }
  }
  .ipu_new{
    background-color: #eff6fa;
  }


  .mainPopUp{
    height: 300px;
    padding: 0 0 0 4px;
    #messageList,#attentionList,#agreeList{
      font-size: 13px;
      line-height: 1.7;
      height: 100%;
      overflow-y: scroll;
      &::-webkit-scrollbar{
        width: 4px;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb{
        background-color: rgba(0,0,0,.5);
        border-radius: 3px;
      }
    }
  }
  .inboxPopUp{
    position: absolute;
    top:48px;
    left: 32px;
    z-index: 15;
    width: 315px;
    height: 370px;
    color: #000000;
    font-size: 13px;
    background-color: #ffffff;
    border: solid 1px #dddddd;
    border-radius: 5px;
    box-shadow: 0 1px 10px rgba(0,0,0,.1);
    .boxArrow{
      width: 25px;
      height: 15px;
      background: url(@img_sprites) no-repeat -228px -186px;
      background-size: 308px 250px;
      position: absolute;
      top: -12px;
      left: 145px;
      z-index: 15;
    }
  }
  .headerPopUp{
    width: 100%;
    height: 34px;
    border-bottom: @border-in;
    box-shadow: 0 0 1px rgba(0,0,0,.1);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    button{
      flex: 1 1 auto;
      cursor: pointer;
      background: #ffffff;
      padding: 0;
      border: 0;
      border-left: @border-in;
      z-index: 16;
      &:first-child{
        border-left: none;
      }
      &:hover{
        span{
          opacity: 1;
        }
      }
      span{
        display: block;
        margin: 9px auto 9px;
        width: 22px;
        height: 16px;
        opacity: .6;
      }
      .icon_message{
        background: #ffffff url(@img_sprites) no-repeat -94px -66px;
        background-size: 308px 250px;

      }
      .icon_attention{
        background: #ffffff url(@img_sprites) no-repeat -123px -65px;
        background-size: 308px 250px;

      }
      .icon_agree{
        background: #ffffff url(@img_sprites) no-repeat -151px -65px;
        background-size: 308px 250px;
      }
      //button处于激活状态时
      &.inbox_act{
        .icon_message{
          background: rgba(255,255,255,1) url(@img_sprites) no-repeat -94px -87px;
          background-size: 308px 250px;
          opacity: 1;
        }
        .icon_attention{
          background: rgba(255,255,255,1) url(@img_sprites) no-repeat -123px -87px;
          background-size: 308px 250px;
          opacity: 1;
        }
        .icon_agree{
          background: rgba(255,255,255,1) url(@img_sprites) no-repeat -151px -87px;
          background-size: 308px 250px;
          opacity: 1;
        }
      }
    }
  }

  .footerPopUp{
    width: 100%;
    height: 34px;
    border-top: @border-in;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    clear: both;
    .msgSetting{
      float: left;
      padding: 11px 10px 10px 11px;
      >span{
        display: block;
        width: 13px;
        height: 13px;
        background: url(@img_sprites) no-repeat -88px -148px;
        background-size: 308px 250px;
      }
    }
    .allMsg{
      float: right;
      line-height: 34px;
      margin-right: 10px;
      color: #999999;
      &:hover{
        text-decoration: underline;
      }
    }
  }

</style>
