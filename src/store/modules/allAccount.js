/**
 * Created by Haolin on 2017/6/15.
 */
const state = {
  actID:"",
  account_list:{
    "edtall":{
      name:"孙志超",
      photo:"static/img/b7efa946b457fc271fe7d4a78e06e60b_xl.jpg",
      gender:"male",
      badge:"小米科技投资部 M&A",
      profile:"微信公众号见个人说明",
      answer_num:"2079",
      article_num:"595",
      followers_num:"210K",
      secondary:[
        {
          name:"1号",
          href:"/#/"
        },
        {
          name:"2号",
          href:"/#/"
        },{
          name:"3号",
          href:"/#/"
        }
      ]
    },
    "shijianju":{
      name:"吃货组长",
      photo:"static/img/v2-e968dd2c9b2ef820b913bd07657b2dfe_m.jpg",
      gender:"male",
      badge:"上海氩氪广告有限公司",
      profile:"微信公众号：魔都食鉴局",
      answer_num:"1",
      article_num:"133",
      followers_num:"400K",
      secondary:[
        {
          name:"1号",
          href:"/#/"
        },
        {
          name:"2号",
          href:"/#/"
        },{
          name:"3号",
          href:"/#/"
        }
      ]
    },
    "he-ming-ke":{
      name:"吃货组长",
      photo:"static/img/36b158fd8_xs.jpg",
      gender:"male",
      badge:"一面网络技术有限公司",
      profile:"不写程序的数据工程师不是好产品经理",
      answer_num:"734",
      article_num:"97",
      followers_num:"166K",
      secondary:[
        {
          name:"1号",
          href:"/#/"
        },
        {
          name:"2号",
          href:"/#/"
        },{
          name:"3号",
          href:"/#/"
        }
      ]
    },
    "Boyka2016":{
      name:"Boyka",
      photo:"static/img/v2-7782ff69838c379173415458b97b5008_xs.jpg",
      gender:"male",
      badge:"广州大学城",
      profile:"微博：Boyka88",
      answer_num:"65",
      article_num:"26",
      followers_num:"68K",
      secondary:[
        {
          name:"1号",
          href:"/#/"
        },
        {
          name:"2号",
          href:"/#/"
        },{
          name:"3号",
          href:"/#/"
        }
      ]
    },
    "he-shi-jun":{
      name:"贺师俊",
      photo:"static/img/da8e974dc_xs.jpg",
      gender:"male",
      badge:"五角场一流的复黏大学 | 自由而无用的哲学",
      profile:"Web开发者",
      answer_num:"993",
      article_num:"14",
      followers_num:"36K",
      secondary:[
        {
          name:"1号",
          href:"/#/"
        },
        {
          name:"2号",
          href:"/#/"
        },{
          name:"3号",
          href:"/#/"
        }
      ]
    },
    "wang-lu-43-95":{
      name:"王路",
      photo:"static/img/5451b0df9_xs.jpg",
      gender:"male",
      badge:"凤凰新闻客户端 | 主笔",
      profile:"新书《沉住气，吃硬饭》",
      answer_num:"676",
      article_num:"421",
      followers_num:"114K",
      secondary:[
        {
          name:"1号",
          href:"/#/"
        },
        {
          name:"2号",
          href:"/#/"
        },{
          name:"3号",
          href:"/#/"
        }
      ]
    }
  }
};
const mutations = {
  changeID(arg){
    state.actID = arg;
    console.log("actID:",state.actID);
  }
};
const action = {};
export default {state,mutations,action};
