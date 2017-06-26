<template>
  <div id="infoCard">
    <div id="latestNews_title">
      <i class="icon_list"></i><span class="ln_title_text">最新动态</span><span class="ln_title_setting"><a href=""><i class="icon_setting"></i>设置</a></span>
    </div>
    <div id="latestNews_list">
      <div class="ln_item_wrapper" v-for="item in latestNews">
        <LatestNews :news="item.data"></LatestNews>
      </div>
    </div>
  </div>
</template>
<script>
  import LatestNews from  '../components/LatestNews';
  import ln_store from '../store/modules/latestNews';

  export default {
    name:"infoCard",
    components:{LatestNews},
    data:function () {
      return ln_store.state;
    },
    methods:{

    }
  }
</script>
<style lang="less">
  .ic_bg {
    background: url("../assets/sprites.png") no-repeat;
    background-size: 308px 250px;
  };

  #latestNews_title{
    height: 23px;
    line-height: 23px;
    padding-bottom: 10px;
    font-size: 14px;
    color: #666;
    font-weight: 700;
    border-bottom: 1px solid #ccc;
  }
  .icon_list{
    display: inline-block;
    width: 16px;
    height: 16px;
    .ic_bg;
    background-position: -71px -88px;
    vertical-align: -3px;
    margin-right: 10px;
  }

  .ln_title_setting{
    float: right;
    font-size: 13px;
    color: #999;
    font-weight: 400;
    >a{
      color: #999;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  .icon_setting{
    display: inline-block;
    width: 13px;
    height: 13px;
    margin-right: 5px;
    .ic_bg;
    background-position: -88px -148px;
    vertical-align: -1px;
  }

  #latestNews_list{
    position: relative;
    font-size: 13px;
  }
  .ln_item_wrapper{
    padding: 10px 0;
    position: relative;
    margin-left: 0;
    outline: 0;
    border-bottom: 1px solid #eee;
    &:last-child{
      border-bottom: none;
    }
  }
</style>
