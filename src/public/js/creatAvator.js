
import rain from '../img/rain.jpg' // img 为压缩后的图片名

function createAvator(){
    var img = new Image()
    img.src = rain
    img.classList.add('avator')
    var root = document.getElementById('root');
    root.append(img)
}


export default createAvator

