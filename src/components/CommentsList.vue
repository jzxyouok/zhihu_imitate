<template>
  <div class="commentsList">

  </div>
</template>
<script>
  import bus from '../assets/eventBus';

  export default {
    name:"commentsList",
    props:['id'],
    data(){
      return {}
    },
    mounted(){
      bus.$on("showList",()=>{
        console.log("显示列表");
      })
    }
  }
</script>
<style lang="less"></style>
