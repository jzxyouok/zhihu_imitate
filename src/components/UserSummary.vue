<template>
  <div id="userSummary" class="" @mouseover="overCard" @mouseout="outCard">
    <div id="us_wrapper">
      <div class="us_upRow">
        <a href="/#/" class="us_avatar">
          <img :src="content.photo">
          <span>{{content.name}}</span>
        </a>
        <i class="icon_gender_m"></i>
        <div class="us_profile">{{content.profile}}</div>
        <div class="us_badge"><i class="icon_us_badge"></i><span>{{content.badge}}</span></div>
        <div class="us_secondary"><a :href="item.href" v-for="item in content.secondary">{{item.name}}</a><span>也关注他</span></div>
      </div>
      <div class="us_downRow clearfix">
        <div class="us_count clearfix">
          <a href="/#/" class="us_item">
            <span class="us_val">{{content.answer_num}}</span>
            <span class="us_key">回答</span>
          </a>
          <a href="/#/" class="us_item">
            <span class="us_val">{{content.article_num}}</span>
            <span class="us_key">文章</span>
          </a>
          <a href="/#/" class="us_item">
            <span class="us_val">{{content.followers_num}}</span>
            <span class="us_key">关注者</span>
          </a>
        </div>
        <div class="us_btnWrapper clearfix">
          <button class="us_unfollow">取消关注</button>
          <a href="/#/"><i class="icon_sendMsg"></i></a>
        </div>
      </div>
    </div>

    <div class="us_arrow_border"></div>
    <div class="us_arrow_body"></div>

  </div>
</template>
<script>
  import bus from '../assets/eventBus';
  import allAccount_store from '../store/modules/allAccount'

  let timeoutID;//保存窗口延时事件ID,用于取消该延时事件

  export default {
    name:"userSummary",
    data(){
      return {
        content:{}
      }
    },
    methods:{
      overCard(){
        clearTimeout(timeoutID);
      },
      outCard(){
        bus.$emit("leaveCard");
      }
    },
    computed:{
//      ...mapState({
//        ceshi: state => {
//          let list = state.allAccount.account_list.edtall.name;
//          console.log("list:",list);
//          return list;
//        }
//      })
    },
    mounted(){//生命周期钩子
      bus.$on("hoverCard",event => {
        clearTimeout(timeoutID);

        let us = $qs("#userSummary"),
          et = event.target,
          usHeight = us.offsetHeight,
          vpTop = getElementTop(et),
          vpLeft = getElementLeft(et),
          eHeight = et.offsetHeight,
          eWidth = et.offsetWidth,
          x = vpLeft+Math.floor(eWidth/2)-89,
          y;
        //console.log("索引值:",et.getAttribute("hovercard"));

        this.$data.content = allAccount_store.state.account_list[et.getAttribute("hovercard")];
        //console.log("更新数据:",this.$data);

        //console.log("鼠标触发事件时该元素所在高度:",vpTop,"窗口高度:",usHeight);
        if(vpTop<usHeight){
          y = vpTop+eHeight+5;
          us.className = "us_up";
        }else{
          y = vpTop-us.offsetHeight-5;
          us.className = "us_down";
        }
        us.style.top=y+"px";
        us.style.left=x+"px";
        us.style.visibility="visible";
      });

      bus.$on("leaveCard",()=>{
        let us = $qs("#userSummary");
        timeoutID = setTimeout(function () {
          us.style.visibility="hidden";
        },350);
      });
    }
  }


</script>
<style lang="less">
  .ic_bg {
    background: url("../assets/sprites.png") no-repeat;
    background-size: 308px 250px;
  };
  .icon_gender_m{
    .ic_bg;
    display: inline-block;
    vertical-align: middle;
    width: 16px;
    height: 16px;
    background-position: -144px -110px;
    margin-left: 3px;
  }
  .icon_sendMsg{
    .ic_bg;
    display: inline-block;
    vertical-align: middle;
    background-position: 0 -148px;
    width: 17px;
    height: 14px;
    text-indent: -999em;
  }


  #userSummary{
    visibility: hidden;
    position: absolute;
    width: 382px;
    line-height: 1.7;
    padding: 12px;
    font-size: 13px;
    z-index: 20;
  }
  #us_wrapper{
    background: #fff;
    border: solid 1px #cccccc;
    border-radius: 5px;
    overflow: hidden;
  }
  .us_upRow{
    border: 14px solid transparent;
    background: #fff;
    padding-left: 66px;
    min-height: 50px;
  }
  .us_avatar{
    position: relative;
    font-size: 14px;
    color: #225599;
    &:hover{
      text-decoration: underline;
    }
    >img{
      position: absolute;
      left: -66px;
      width: 50px;
      height: 50px;
    }
    >span{

      font-weight: 700;
      -webkit-tap-highlight-color: rgba(225,225,225,.5);
    }
  }
  .us_profile{
    color: #222;
    padding-top: 4px;
  }
  .us_badge{
    padding-top: 8px;

    color: #666666;
  }
  .us_secondary{
    padding-top: 8px;
    color: #999;
    border-top: 1px solid #EEE;
    margin-top: 8px;
    >a{
      color: #222222;
      margin-left: 6px;
      &:first-child{
        margin-left: 0;
      }
      &:hover{
        text-decoration: underline;
      }

    }
    >span{
      margin-left: 6px;
    }
  }



  .us_downRow{
    border: 14px solid transparent;
    background: #fafafa;
  }
  .us_count{
    float: left;
  }
  .us_item{
    float: left;
    padding: 0 16px;
    border-right: 1px solid #eee;
    &:hover{
      .us_val,.us_key{
        color: #698ebf;
      }
    }
    &:first-child{
      padding-left: 0;
    }
    &:last-child{
      border-right: none;
    }
    >span{
      display: block;
      text-align: center;
    }
    .us_val{
      font-size: 15px;
      font-weight: 700;
      color: #222222;
    }
    .us_key{
      font-size: 14px;
      color: #999;}
  }
  .us_btnWrapper{
    float: right;
    >a{
      float: right;
      height: 32px;
      margin-top: 8px;
      vertical-align: middle;
      font-size: 14px;
      display: inline-block;
      text-align: center;
      padding: 4px 10px;
      cursor: pointer;
      border-radius: 3px;
      white-space: nowrap;
      box-sizing: border-box;
      background: linear-gradient(to bottom,#f8f8f9,#e6e6e8);
      border: 1px solid #bbb;
      box-shadow: 0 1px 0 #fff inset, 0 1px 0 rgba(0,0,0,.1);
      -webkit-tap-highlight-color: rgba(225,225,225,.5);
    }
  }
  .us_unfollow{
    float: right;
    height: 32px;
    margin: 8px 0 0 15px;
    vertical-align: middle;

    display: block;
    text-align: center;
    min-width: 78px;
    font-size: 12px;
    padding: 1px;
    font-weight: 400;
    line-height: 18px;
    border-radius: 3px;
    cursor: pointer;
    box-sizing: border-box;
    background: #eee;
    color: #888;
    border: 1px solid #ccc;
  }



  .us_arrow_border{
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    margin-left: -13px;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
  }
  .us_arrow_body{
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    margin-left: -13px;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
  }

  .us_up{
    .us_arrow_border{
      top: 0;
      left: 89px;
      border-bottom: 13px solid #ccc;
    }
    .us_arrow_body{
      top: 1px;
      left: 89px;
      border-bottom: 13px solid #fff;
    }
  }
  .us_down{
    .us_arrow_border{
      bottom: 0;
      left: 89px;
      border-top: 13px solid #ccc;
    }
    .us_arrow_body{
      bottom: 1px;
      left: 89px;
      border-top: 13px solid #fafafa;
    }
  }
</style>
