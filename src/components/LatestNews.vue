<template>
  <div class="ln_item" @mouseover="showAllBtn" @mouseleave="hideSomeBtn">
    <div class="ln_aside">
      <a href="/#/" @mouseover="hoverCard" @mouseout="leaveCard" class="ln_aside_img"><img :src="news.photo" :hovercard="news.user_account"></a>
    </div>
    <div class="ln_main">
      <div class="ln_source"><a href="/#/" @mouseover="hoverCard" @mouseout="leaveCard"  :hovercard="news.user_account">{{news.user}}</a> {{sourceType}} • {{howlong}}</div>
      <div class="ln_title">
        <h2><a href="/#/">{{news.title}}</a></h2>
      </div>

      <div v-if="toggle_summary" v-on:click="readAll" class="ln_btn_one">
        <a href="/#/" class="ln_voteup_btn">{{news.voteups}}</a>
      </div>
      <div v-if="toggle_main" class="ln_btn_two">
        <button @click="voteUp" :pressed="isPressedUp" class="ln_vote_up" :class="{vote_act:btnVoteUp}">
          <i class="icon_vote_up"></i>
          <span class="">{{news.voteups}}</span>
          <!--<span class="label sr-only">赞同</span>-->
        </button>
        <button @click="voteDown" :pressed="isPressedDown" class="ln_vote_down" :class="{vote_act:btnVoteDown}">
          <i class="icon_vote_down"></i>
          <!--<span class="label sr-only">反对，不会显示你的姓名</span>-->
        </button>
      </div>

      <div class="ln_authorInfo">
        <span class="ln_authorInfo_n"><a href="/#/" @mouseover="hoverCard" @mouseout="leaveCard"  :hovercard="news.author_account">{{news.author}}</a><span v-if="news.badge!==''" class="icon_badge"></span></span>
        <span class="ln_authorInfo_b" v-if="news.badge!==''">{{news.badge}}</span>
        <span class="ln_authorInfo_p">{{news.profile}}</span>
      </div>

      <div v-if="toggle_summary" v-on:click="readAll" class="ln_content clearfix">
        <img v-if="news.summary.img.src!==''" :src="news.summary.img.src" :data-rawwidth="news.summary.img.width" :data-rawheight="news.summary.img.height"  class="ln_summary_img" :data-original="news.summary.img.original">
        <div v-html="news.summary.content" class="ln_content_summary"></div>
        <a v-on:click.prevent="readAll" :href="news.summary.href" class="toggle-expand">显示全部</a>
      </div>

      <div v-if="toggle_main" class="ln_body_wrapper">
        <div class="ln_votedUp">
          <a href="">{{news.voteups}}人赞同</a>
        </div>
        <div v-html="news.body" class="ln_body"></div>
        <p class="ln_publishTime">发布于 {{publishTime}}</p>
      </div>

      <div class="ln_footer">
        <a href="" v-if="isQuestion"><i class="icon_attention"></i>关注问题</a>
        <a href="" @click.prevent="showList"><i class="icon_comments"></i>{{comment}}</a>
        <a href="" v-if="isQuestion" :class="btnClass"><i class="icon_thanks"></i>感谢</a>
        <a href="" v-if="isQuestion" :class="btnClass"><i class="icon_collect"></i>收藏</a>
        <a href="" v-if="isQuestion" class="fix_ln_mg" :class="btnClass"><span class="icon_point">没有帮助</span></a>
        <a href="" class="fix_ln_mg" :class="btnClass"><span class="icon_point">举报</span></a>
        <a :href="purviewHref" class="fix_ln_mg"><span class="icon_point">{{purviewText}}</span></a>
        <button v-show="toggle_main" v-on:click="hideAll" class="ln_btn_hide"><i class="icon_btn_hide"></i>收起</button>
      </div>

      <commentsList :id="news.id"></commentsList>
    </div>
  </div>
</template>
<script>

  import bus from '../assets/eventBus';
  import CommentsList from '../components/CommentsList';
  //import store from '../store';

  export default {
    name:"latestNews",
    components:{CommentsList},
    props:['news'],
    data(){
      return {
        btnVoteUp:false,
        btnVoteDown:false,
        toggle_summary:true,
        toggle_main:false,
        allFooterBtn:false,
        footerToggle:false,
        comment:"",
        tempSaver:"收起列表"
      }
    },
    mounted(){
      let cNum = this.$props.news.comments;
      this.$data.comment = cNum>0?cNum+"条评论":"添加评论";
    },
    methods:{
      showAllBtn(){
        this.$data.allFooterBtn = true;
      },
      hideSomeBtn(){
        this.$data.allFooterBtn = false;
      },
      hoverCard(event){
        //store.commit('changeID',event.target.getAttribute("hovercard"));
        bus.$emit("hoverCard",event);
      },
      leaveCard(event){
        bus.$emit("leaveCard",event);
      },
      readAll(){
        this.$data.toggle_summary = false;
        this.$data.toggle_main = true;
        this.$data.footerToggle = true;
      },
      hideAll(){
        this.$data.toggle_main = false;
        this.$data.toggle_summary = true;
        this.$data.footerToggle = false;
      },

      voteUp(){
        let up = $qs(".ln_vote_up",this.$el);
        if(up.getAttribute("pressed")==="true"){
          this.$props.news.my_vote = "false";
          this.$props.news.voteups--;
        }else{
          this.$props.news.my_vote = "up";
          this.$props.news.voteups++;
        }
      },
      voteDown(){
        let down = $qs(".ln_vote_down",this.$el);
        if(down.getAttribute("pressed")==="true"){
          this.$props.news.my_vote = "false";
        }else{
          if(this.$props.news.my_vote==="up"){
            this.$props.news.voteups--;
          }
          this.$props.news.my_vote = "down";
        }
      },
      showList(){//评论列表
        let temp = this.$data.comment;
        this.$data.comment = this.$data.tempSaver;
        this.$data.tempSaver = temp;
        this.$data.footerToggle = this.$data.footerToggle===false;
        bus.$emit("showList");
      }
    },
    computed:{
      comments(){
        let cNum = this.$props.news.comments;
        this.$data.comment = cNum>0?cNum+"条评论":"添加评论";
      },
      isPressedUp(){
        let myVote = this.$props.news.my_vote;
        this.$data.btnVoteUp = myVote==="up";
        return myVote==="up"?"true":"false";
      },
      isPressedDown(){
        let myVote = this.$props.news.my_vote;
        this.$data.btnVoteDown = myVote==="down";
        return myVote==="down"?"true":"false";
      },
      //判断内容类型
      sourceType(){
        let result;
        switch (this.$props.news.source_type){
          case "member_answer_question":
            result = "回答了问题";
            break;
          case "member_agree_question":
            result = "赞同了回答";
            break;
          case "member_publish_article":
            result = "发布了文章";
            break;
          case "member_agree_article":
            result = "赞了 "+this.$props.news.column+" 中的文章";
            break;
          default:
            console.log("缺少此消息类型");
        }
        return result;
      },
      //发布时间
      publishTime(){
        let pubdate = new Date(Number(this.$props.news.time)),
          result;
        switch(comparisonDate(pubdate)){
          case 0:
            result = " "+pubdate.getHours()+":"+pubdate.getMinutes();
            break;
          case 1:
            result = "昨天 "+pubdate.getHours()+":"+pubdate.getMinutes();
            break;
          default:
            result = " "+pubdate.getFullYear()+"-"+(pubdate.getMonth()+1)+"-"+pubdate.getDate();
        }
        return result;
      },
      //计算发表时间
      howlong(){
        let pubtime = this.$props.news.time,
          pubdate = new Date(Number(pubtime)),
          com = comparisonDate(pubdate);
        if(com<1){
          return Math.floor((Date.now()-pubtime)/3600000)+"小时前";
        }else if(com<31){
          return com+"天前";
        }else if(com<365){
          return Math.floor(com/30)+"个月前";
        }else{
          return Math.floor(com/365)+"年前";
        }
      },
      isQuestion(){
        return this.$props.news.topic_type!=="article";
      },
      purviewHref(){
        let result;
        switch (checkType(this.$props.news)){
          case 1.2:
            result = "https://www.zhihu.com/terms#sec-licence-6";
            break;
          case 1.3:
            result = "https://www.zhihu.com/copyright/apply?answer="+this.$props.news.id;
            break;
          case 1.4:
            result = "https://www.zhihu.com/terms#sec-licence-1";
            break;
          case 2:
            result = "https://zhuanlan.zhihu.com/p/"+this.$props.news.topic_id;
            break;
          case 3:
            result = "https://www.zhihu.com/question/"+this.$props.news.topic_id;
        }
        return result;
      },
      purviewText(){
        let result;
        switch (checkType(this.$props.news)){
          case 1.2:
            result = "禁止转载";
            break;
          case 1.3:
            result = "申请转载";
            break;
          case 1.4:
            result = "保留个人权利";
            break;
          case 2:
            result = "前往文章页";
            break;
          case 3:
            result = this.$props.news.topic_answer+"条回答";
        }
        return result;
      },
      btnClass(){
        let val = this.$data.allFooterBtn,
          toggle = this.$data.footerToggle;
        if(toggle===true){
          return "default_show";
        }else{
          return val===true?"default_show":"default_hide";
        }

      }
    }
  }
  function checkType(arg) {
    let result;
    switch (arg.topic_type){
      case "question":
        let pv = arg.purview;
        if(pv==="repaint"){//允许转载
          result = 1.1;
        }else if(pv==="no_repaint"){//禁止转载
          result = 1.2;
        }else if(pv==="pay_repaint"){//申请转载
          result = 1.3;
        }else{//保留个人权利
          result = 1.4;
        }
        break;
      case "article":
        result = 2;
        break;
      case "attentionQ":
        result = 3;
        break;
    }
    return result;
  }

  function comparisonDate(arg) {
    let date,
      now = new Date();
    if(typeof arg === "number" && arg.toString().length === 13){
      date = new Date(arg);
    }else if(typeof arg === "object" && arg.getTime()){
      date = arg;
    }
    if(date.getFullYear() === now.getFullYear()){
        return witchDate(now) - witchDate(date);
    }else{
        return witchDate(now) + countFullYear(date) - witchDate(date);
    }
  }
  //取得传入日期所在年份的第几天
  function witchDate(arg) {
    let date,
      firstday,
      oneday = 86400000;
    if(typeof arg === "number" && arg.toString().length === 13){
      firstday = new Date(new Date(arg).getFullYear(),0,1).getTime();
      date = arg;
    }else if(typeof arg === "object" && arg.getTime()){
      firstday = new Date(arg.getFullYear(),0,1).getTime();
      date = arg.getTime();
    }
    return Math.ceil((date-firstday)/oneday);
  }
  //某年总共有多少天
  function countFullYear(arg) {
    let y,
      result = 0,
      i;
    if(typeof arg === "object" && arg.getFullYear()){
      y = arg.getFullYear();
    }else if(typeof arg === "number" && arg.toString().length === 13){
      y = new Date(arg).getFullYear();
    }else{
      y = arg;
    }
    for(i=1;i<13;i++){
      result += new Date(y,i,0).getDate();
    }
    return result;
  }
</script>
<style lang="less">
  .ln_btn_hide{
    float: right;
    line-height: 23px;
    font-size: 13px;
    color: #999999;
    border: none;
    background-color: rgba(0,0,0,0);
    margin: 0;
    padding: 0 6px;
    cursor:pointer;
    &:hover{
      color: #698ebf;
      .icon_btn_hide{
        background-position: -135px -37px;
      }
    }
  }
  .icon_btn_hide{
    display: inline-block;
    .ic_bg;
    width: 8px;
    height: 9px;
    background-position: -135px -22px;
  }

  .ln_aside{
    float: left;
    margin-top: 3px;
    a.ln_aside_img{
      display: inline-block;

      >img{
        display: block;
        width: 38px;
        height: 38px;
        border-radius: 3px;
      }
    }
  }
  .ln_main{
    margin-left: 48px;
  }
  .ln_source{
    color: #999999;
    height: 22px;
    line-height: 22px;
    >a{
      color: #999999;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  .ln_title{
    line-height: 22px;
    margin-bottom: 3px;
    h2{
      font-weight: 700;
      font-size: 14px;
      outline: 0;
      margin-right: 20px;
    }
    a{
      color: #225599;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  .ln_authorInfo{
    height: 23px;
    line-height: 22px;
    /*margin-bottom: 2px;*/
    .ln_authorInfo_n{
      font-weight: 700;
      >a{
        color: #000000;
        &:hover{
          text-decoration: underline;
        }
      }
      &:after{
        content: '，';
        font-weight: normal;
        color: #222;
      }
    }
    .ln_authorInfo_b{
      color: #222222;
      &:after{
        content: ' • ';
        color: #999999;
      }
    }
    .ln_authorInfo_p{
      color: #999999;

    }
  }
  .ln_content{
    line-height: 22px;
    -webkit-tap-highlight-color: rgba(225,225,225,.5);
    position: relative;
    cursor: pointer;
  }
  .ln_content_summary{
    display: inline;
  }
  .ln_summary_img{
    float: left;
    height: 112px;
    width: 200px;
    border-radius: 4px;
    border: 0;
    margin: 1px 10px 5px 0;
    display: block;
    overflow: hidden;
    max-width: 100%;
  }
  .toggle-expand{
    display: inline-block;
    padding: 0 3px;
    border-radius: 2px;
    color: #225599;
  }

  .icon-external {
    display: inline-block;
    width: 7px;
    height: 7px;
    vertical-align: 0;
    .ic_bg;
    background-position: 0 -204px;
  }
  .ln_body{
    line-height: 22px;
    -webkit-tap-highlight-color: rgba(225,225,225,.5);
    position: relative;
    a{
      color: #259;
      &.external {
        margin: 0 4px 0 0;
        word-break: break-all;
      }
      &:hover{
        text-decoration: underline;
      }
      >.invisible {
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0;
      }
      >.ellipsis{
        word-wrap: normal;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:after{
          content: "...";
        }
      }
      &.external>.icon-external {
        margin-left: 4px;
      }
    }
    p{
      margin: 12px 0;
      &:first-child{
        margin-top: 0;
      }
    }
    blockquote {
      margin: .8em 0;
      padding: 0 0 0 10px;
      font-style: normal;
      font-size: 100%;
      line-height: 22px;
      border-left: 3px solid #D0E5F2;
    }
    h2{
      margin: 12px 0;
      >b{
        font-size: 14px;
      }
    }
    img{
      margin: 6px 0;
      display: block;
      overflow: hidden;
      max-width: 100%;
      height: auto;
    }
  }
  .ln_footer{
    line-height: 24px;
    padding-top: 5px;
    >a{
      color: #999999;
      margin-left: 7px;
      &:first-child{
        margin-right: 0;
      }
    }
    >a.fix_ln_mg{
      margin-left: 0;
    }
    i{
      display: inline-block;
      margin-right: 5px;
    }
  }
  .default_hide{
    display: none;
  }
  .default_show{
    display: inline-block;
  }


  .icon_vote_up{
    display: inline-block;
    vertical-align: middle;
    border: 6px solid transparent;
    position: absolute;
    top: 11px;
    left: 50%;
    margin-left: -6px;
    border-top-width: 0;
    border-bottom-color: #698ebf;
  }
  .icon_vote_down{
    display: inline-block;
    vertical-align: middle;
    border: 6px solid transparent;
    border-bottom-width: 0;
    border-top-color: #698ebf;
  }


  .vote_hover{
    background: #698ebf;
    color: #fff;
    >i{
      border-bottom-color: #ffffff;
      border-top-color: #ffffff;
    }
  }

  .ln_btn_one{
    float: left;
    margin-left: -48px;
  }
  .ln_voteup_btn{
    display: block;
    color: #698ebf;
    height: 24px;
    line-height: 24px;
    width: 38px;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    background: #eff6fa;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    &:hover{
      .vote_hover;
    }
  }
  .ln_btn_two{
    display: none;
    float: left;
    margin-left: -48px;
    >button{
      display: block;
      color: #698ebf;
      line-height: 24px;
      width: 38px;
      border-radius: 3px;
      border: 0;
      cursor: pointer;
      background: #eff6fa;
      font-weight: 500;
      text-align: center;
      position: relative;
      &:hover{
        .vote_hover;
      }
    }
    .vote_act{
      .vote_hover;
    }
  }

  .ln_vote_up{
    padding-top: 18px;
  }
  .ln_vote_down{
    height: 24px;
    margin-top: 5px;
  }

  .ln_votedUp{
    line-height: 20px;
    margin-bottom: 3px;
    >a{
      color: #999999;
    }
  }
  p.ln_publishTime{
    height: 22px;
    line-height: 22px;
    margin: 12px 0 6px;
    color: #999999;
  }


  .ic_bg {
    background: url("../assets/sprites.png") no-repeat;
    background-size: 308px 250px;
  };
  .icon_badge{
    display: inline-block;
    background-image: url("../assets/identity.svg");
    background-size: contain;
    cursor: pointer;
    margin-left: 3px;
    margin-right: 3px;
    vertical-align: -2px;
    height: 14px;
    width: 14px;
  }
  .icon_attention{
    .ic_bg;
    width: 8px;
    height: 9px;
    background-position: -97px -23px;
  }
  .icon_comments{
    .ic_bg;
    width: 9px;
    height: 10px;
    background-position: -28px -22px;
  }
  .icon_thanks{
    .ic_bg;
    width: 10px;
    height: 10px;
    background-position: -41px -22px;
  }
  .icon_collect{
    .ic_bg;
    width: 7px;
    height: 10px;
    background-position: -56px -22px;
  }
  .icon_point{
    &:before{
      content: '•';
      padding: 0 4px 0 3px;
    }
  }


</style>
