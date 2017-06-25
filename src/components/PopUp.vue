<template>
  <div id="questionCover" v-if="toggle">
    <div id="questionPopUp">
      <div class="qpp_title">
        <span class="qpp_title_text">提问</span><span class="qpp_title_close" v-on:click="questionClose"></span>
      </div>
      <div class="qpp_content">
        <form class="qpp_form">
          <div class="qpp_q_title">
            <textarea placeholder="写下你的问题"></textarea>
          </div>
          <div class="qpp_q_details">
            <div class="qpp_q_details_title">问题说明（可选）：</div>
            <div class="qpp_q_details_text">
              <textarea placeholder=""></textarea>
            </div>
          </div>
          <div class="qpp_topic">
            <div class="qpp_q_details_title">话题选择：<span class="qpp_q_details_title_r">话题越精准，越容易让相关领域专业人士看到你的问题</span></div>
            <div class="qpp_topic_text">
              <i class="icon_qpp_search"></i><input type="text">
            </div>
          </div>
          <div class="qpp_command clearfix">
            <label class="qpp_anonymous"><input type="checkbox" value="1">匿名</label>
            <a href="" class="qpp_submit">发布</a>
            <a href="" class="qpp_cancel">取消</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import bus from '../assets/eventBus';

  export default{
    name:"popUp",
    data(){
        return {
          toggle:false
        }
    },
    methods:{
      questionClose(){
        this.$data.toggle = false;
      }
    },
    mounted(){
      bus.$on("questionPopUp",()=>{
        this.$data.toggle = true;
      });
    }
  };

</script>
<style lang="less">
  .pp_bg {
    background: url("../assets/sprites.png") no-repeat;
    background-size: 308px 250px;
  }
  .icon_qpp_search{
    .pp_bg;
    display: inline-block;
    width: 12px;
    height: 12px;
    background-position: -45px -52px;
    vertical-align: -1px;
  }
  .text{
    padding: 8px 10px;
    border: solid 1px #ccc;
    border-radius: 3px;
  }

  #questionCover{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: rgba(100,100,100,.4);
  }
  #questionPopUp{
    font-size: 13px;
    width: 550px;
    /*height: 398px;*/
    margin: auto;
    position: absolute;
    margin-top: 14%;
    margin-top: 14vh;
    /*top: 0;*/
    right: 0;
    /*bottom: 0;*/
    left: 0;
    z-index: 100;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #888;
    box-shadow: 0 0 80px 0 rgba(0,0,0,.4);
  }
  .qpp_title{
    width: 548px;
    height: 35px;
    background: #1D7FE2;
    background: -webkit-linear-gradient(top,#1D7FE2,#0865C2);
    background: linear-gradient(to bottom,#1D7FE2,#0865C2);
    border: 1px solid #0D6EB8;
    border-radius: 6px 6px 0 0;
    line-height: 35px;
    .qpp_title_text{
      color: #fff;
      text-shadow: 0 1px 1px rgba(0,0,0,.4);
      font-size: 15px;
      font-weight: 700;
      margin-left: 15px;
    }
    .qpp_title_close{
      display: block;
      float: right;
      width: 30px;
      height: 30px;
      .pp_bg;
      background-position: -60px -53px;
      margin: 2px;
      cursor: pointer;
    }
  }
  .qpp_content{
    margin: 17px 0;
    padding: 0 15px;
    textarea{
      -webkit-tap-highlight-color: rgba(225,225,225,.5);
      resize: none;
      -webkit-appearance: none;
      outline: 0;
      width: 100%;
      font-weight: 400;

      line-height: 22px;

      padding: 0;
      margin: 0;
      border: 0 none;
      color: #222;
      overflow: hidden;

      vertical-align: bottom;
      min-height: 1em;

    }
  }
  .qpp_q_title{
    .text;
    margin-bottom: 20px;
    >textarea{
      /*高度自适应还未完善!!!*/
      height: 22px;
      /*高度自适应还未完善!!!*/
    }
  }
  .qpp_q_details{
    margin-bottom: 15px;
  }
  .qpp_q_details_title{
    margin-bottom: 5px;
    line-height: 22px;
  }
  .qpp_q_details_title_r{
    float: right;
    color: #999;
  }
  .qpp_q_details_text{
    .text;
    >textarea{}
  }
  .qpp_topic_text{
    .text;
    >input{
      line-height: 23px;
      margin-left: 5px;
      font-size: 13px;
      color: #999;
      border: none;
    }
  }
  .qpp_command{
    margin-top: 25px;
    >a{
      float: right;

    }
  }
  .qpp_submit{
    /*display: inline-block;*/
    text-align: center;
    padding: 4px 10px;
    cursor: pointer;
    border-radius: 3px;
    white-space: nowrap;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1.7;


    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.5);
    background: #1472cf;
    background: -webkit-linear-gradient(top,#1d7fe2,#0865c2);
    background: linear-gradient(to bottom,#1d7fe2,#0865c2);
    border: 1px solid #0D6EB8;
    box-shadow: 0 1px 0 rgba(255,255,255,.2) inset, 0 1px 0 rgba(0,0,0,.2);

    -webkit-tap-highlight-color: rgba(225,225,225,.5);
  }
  .qpp_cancel{
    color: #259;
    margin-right: 20px;
    line-height: 33px;
    &:hover{
      text-decoration: underline;
    }
  }
  .qpp_anonymous{
    float: left;
    margin: 5px 0;


    font-size: 13px;
    color: #666;
    line-height: 1.7;

    >input[type=checkbox]{
      -webkit-tap-highlight-color: rgba(225,225,225,.5);
      margin: 0 5px 0 0;
      vertical-align: 0;
    }
  }

</style>
