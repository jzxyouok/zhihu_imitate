<template>
  <div id="feedback" :class="fb_act">

    <button id="feedbackQuestion" @click="feedbackPopUp">
      <span class="icon_fb_bg"></span>
    </button>

    <div id="fb_cover" v-if="toggle"></div>
    <div id="fb_popUp" v-if="toggle">
      <button @click="feedbackClose" class="fb_pu_close" title="关闭">X</button>
      <div class="fb_pu_wrapper">
        <div class="fb_title">提交反馈</div>
        <textarea placeholder="告诉我们你的建议或遇到的问题。" rows="3" class="fb_text"></textarea>
        <div class="fb_submit">
          <button @click="feedbackSubmit">提交</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name:"feedback",
    data(){
      return {
        toggle:false,
        fb_act:""
      }
    },
    methods:{
      feedbackPopUp(){
        this.$data.fb_act = "fb_act";
        this.$data.toggle = true;
      },
      feedbackClose(){
        this.$data.fb_act = "";
        this.$data.toggle = false;
      },
      feedbackSubmit(){
        this.$data.fb_act = "";
        this.$data.toggle = false;

      }
    }
  }
</script>
<style lang="less">
  .placeholder (@color){
    &::-webkit-input-placeholder {
      font: inherit;
      color: @color;
    }
    &::-moz-placeholder{
      font: inherit;
      color: @color;
    }
  }
  .icon_fb_bg{
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    background: url("../assets/feedbackBtn.svg") no-repeat;
    background-size: contain;
  }

  .fb_act{
    z-index:96;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  #feedback{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  }
  #feedbackQuestion{
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    border: none;
    outline: none;
    box-shadow: 0 0 10px rgba(0,0,0,.15);
    z-index: 96;
    line-height: normal;
    padding: 0;
    &:hover{
      .icon_fb_bg{
        background: url("../assets/feedbackBtn_act.svg") no-repeat;
        background-size: contain;
      }
    }
  }
  #fb_cover{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 98;
    background-color: rgba(0,0,0,.65);
  }
  #fb_popUp{
    position: relative;
    z-index: 100;
    background-color: #fff;
    margin: auto;
    border-radius: 2px;
  }
  .fb_pu_wrapper{
    padding: 40px 24px 32px;
    font-size: 15px;
    color: #404040;
    font-weight: 500;
    line-height: 1.5;
    box-sizing: border-box;
    width: 588px;
  }
  .fb_title{
    font-size: 24px;

    font-weight: 500;
    line-height: 33px;
    text-align: center;
    margin-bottom: 26px;
  }
  .fb_text{
    display: block;
    padding: 12px;
    width: 100%;
    height: auto;
    font: inherit;
    border: 1px solid #e7eaf1;
    border-radius: 3px;
    box-sizing: border-box;
    resize: none;
    outline: none;
    transition: box-shadow .15s ease-out;
    overflow: auto;
    .placeholder(#9aaabf);
    &:hover{
      .placeholder(#aebbcc);
    }
  }
  .fb_submit{
    margin-top: 40px;
    text-align: center;
    >button{
      display: inline-block;
      width: 220px;
      padding: 8px 14px;
      text-align: center;
      background-color: #0f88eb;
      border: solid 1px #0f88eb;
      border-radius: 3px;
      color: #fff;
      cursor: pointer;
      outline: none;
      font: inherit;
      &:hover{
        background-color: #0d79d1;
      }
    }
  }
  .fb_pu_close{
    position: absolute;
    top: 4px;
    right: -44px;
    padding: 12px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    box-sizing: border-box;
    background: none;
    border: none;
    outline: none;
    z-index: 100;

    color: #fff;
  }
</style>
