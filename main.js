// const div = dom.find('#test>.red')[0] // 获取对应的元素
// dom.style(div, 'color', 'red') // 设置 div.style.color

// const divList = dom.find('.red') // 获取多个 div.red 元素
// dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素
//上面是之前的调用操作
//下面是按jquery写了dom.js之后的调用操作
$('#test').find('.red').addClass('newclass')