// import style from './public/css/index.css' //CSS module
require('./public/css/index.css') //这样是全局引入
import createAvator from './public/js/creatAvator'
import _rain from './public/img/rain.jpg' 

var img = new Image()
img.src = _rain
img.classList.add('avator') //css模块化
var root = document.getElementById('root');
root.append(img)

createAvator()