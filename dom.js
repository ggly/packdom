window.dom = {
    find(name){
        return document.querySelectorAll(name)
    },
    style(node,name,value){
        node.style[name] = value   //变量做key必须放在中括号中，否则的话会变成字符串，所以不能直接node.style.name
    },
    each(nodelist,fn){
        for(let i = 0;i < nodelist.length;i++){
            fn.call(null,nodelist[i])     
        }
    }
}