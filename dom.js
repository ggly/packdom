// window.dom = {
//     find(name){
//         return document.querySelectorAll(name)
//     },
//     style(node,name,value){
//         node.style[name] = value   //变量做key必须放在中括号中，否则的话会变成字符串，所以不能直接node.style.name
//     },
//     each(nodelist,fn){
//         for(let i = 0;i < nodelist.length;i++){
//             fn.call(null,nodelist[i])      //这里写成fn(null,nodelist[i])也可以实现效果
//         }
//     }
// }
//上面的代码是自己直接封装的，并无什么编程思想可言
//下面模仿jquery进行封装
window.jQuery = function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }
    return {
      addClass(className){
          for(let i = 0; i<elements.length;i++){
              elements[i].classList.add(className)
          }
          return this
      },
      find(selector){
        let array = []
        for(let i = 0;i<elements.length;i++){
            const elements2 = Array.from(elements[i].querySelectorAll(selector))
            array = array.concat(elements2)
        }
        return jQuery(array)
      }
    }
  }
  
  window.$ = window.jQuery
  