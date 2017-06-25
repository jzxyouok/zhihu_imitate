<template>
  <div id="index-view">
    <headerBar></headerBar>
    <div class="container clearfix">
      <div class="mainWrapper">
        <div class="main">
          <ToolBar></ToolBar>
          <InfoCard></InfoCard>
        </div>
      </div>
      <div class="aside">
        <indexAside></indexAside>
      </div>
    </div>
    <popUp></popUp>
    <userSummary></userSummary>
    <feedback></feedback>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar';
import ToolBar from '../components/ToolBar';
import PopUp from '../components/PopUp';
import IndexAside from '../components/IndexAside';
import InfoCard from '../components/InfoCard';
import UserSummary from '../components/UserSummary';
import Feedback from '../components/Feedback';


export default {
  name:'index-view',
  components:{HeaderBar,ToolBar,PopUp,IndexAside,InfoCard,UserSummary,Feedback}
};
</script>

<style lang="less">
  #index-view{
    position: relative;
  }
</style>
