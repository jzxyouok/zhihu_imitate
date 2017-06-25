/**
 * Created by Haolin on 2017/6/15.
 */
const state = {
  actID:"",
  account_list:{
    edtall:{
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
    haolin:{
      name:"洪浩林",
      photo:"static/img/head_xs.png",
      gender:"male",
      badge:"!!!!!",
      profile:"Focus.",
      answer_num:"100",
      article_num:"20",
      followers_num:"10000",
      secondary:""
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
