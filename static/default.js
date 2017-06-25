/**
 * Created by Haolin on 2017/6/6.
 */
/*
获取节点的指定样式值:
  element:节点(DOM element);
CSSProperty:CSS属性名(string);
*/
function getStyleValue(element,CSSProperty){
  return window.getComputedStyle(element).getPropertyValue(CSSProperty);
}
//CssSelectors为string，start为node
function $qs(CssSelectors,start){
  if(start){
    return start.querySelector(CssSelectors);
  }else{
    return document.querySelector(CssSelectors);
  }
}
function $qsa(CssSelectors,start){
  if(start){
    return start.querySelectorAll(CssSelectors);
  }else{
    return document.querySelectorAll(CssSelectors);
  }
}
//创建临时节点
function fragNode(strHTML){
  var range =document.createRange();
  range.selectNodeContents(document.documentElement);
  return range.createContextualFragment(strHTML);
}
//用于取得非节点触发事件的节点的parms属性值
function parmsVal(parms,str){
  var arr = parms.split(","),
    len = arr.length;
  for(var i=0;i<len;i++){
    if(arr[i].indexOf(str) !== -1){
      return arr[i].slice(str.length+1);
    }
  }
  return undefined;
}
//用于检索传入的ele在其父元素中是第几位，检索不到时返回-1
function eleIndexOf(ele){
  var collection = ele.parentNode.children;
  var len = collection.length;
  for(var i = 0;i<len;i++){
    if(collection[i]===ele){
      return i;
    }
  }
  return -1;
}
//过滤数组中的重复项
function uniqueArr(arr){
  var result = [],
    i;
  for (i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
      //console.log(arr[i]);
    }
  }
  return result;
}

function addClass(ele,newClass) {
  var old = ele.className;
  ele.className = old+" "+newClass;
}
function subClass(ele,oldClass) {
  var old = ele.className,
    arr = old.split(" "),
    index = arr.indexOf(oldClass);
  if(index !== -1){
    arr.splice(index,1);
  }
  ele.className = arr.join(" ");
}
//获取视口宽高
function getViewport(){
  if (document.compatMode == "BackCompat"){
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  } else {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }
}
function getElementLeft(element){
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;
  while (current !== null){
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
}
function getElementTop(element){
  var actualTop = element.offsetTop;
  var current = element.offsetParent;
  while (current !== null){
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}
