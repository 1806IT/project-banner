//主程序

//1 .初始化数据
    var hashA=init();
    var keys=hashA['keys'];
    var hash=hashA['hash'];

//2、生成键盘
creatKeyBoard(keys,hash)

//3、监听键盘
listenToKeyBoard(hash)




//私有函数区


//从浏览器缓存中取数据
function getFromLocalStorage(storageName){
    return JSON.parse(localStorage.getItem(storageName) || 'null')
}

//产生一个标签
function tag(tagName,attributes){
    var element= document.createElement(tagName);
    for(var key in attributes){  //遍历attributes，为新标签的属性赋值
        element[key]=attributes[key];
    }
    return element
}
//生成span
function createSpan(textContent){
    var span1=tag('span',{className:'text'});
    span1.textContent=textContent;
    return span1
}
//生成button
function createButton(id){
    var buttonX=tag('button',{});
    buttonX.textContent='E';
    buttonX.id= id;
    buttonX.onclick=function(userEdit){//当buttonX被点击时就执行这个函数
        var button2 = userEdit['target']
        console.log(button2.previousSibling)

        var img2 = button2.previousSibling

        var keyEdit= button2.id
        var x = prompt('请输入网址')    //这些部分都是用户端传进来的不是变量
        hash[keyEdit] = x
        img2.src='https://www.'+x+'/favicon.ico'
        img2.onerror = function(xxx){
            console.log(xxx);
            console.log('此处需添加默认图标')
        }
        localStorage.setItem('storage', JSON.stringify(hash))
    }
    return buttonX
}
//生成image标签
function createImage(domain){
    var img1 = tag('img');//这个我没传属性，测试是否报错
    if(domain){
        img1.src = 'https://www.' + domain + '/favicon.ico';
    }else{
        img1.herf='./2.jpeg';
    };
    img1.onerror = function(xxx){
        console.log(xxx);
        console.log('此处需添加默认图标')
    };
    return img1;
}
//生成按键KBD
function creatKbd(child1,child2,child3){
    var kbd1=tag('kbd',{className:'key'});
    kbd1.appendChild(child1);
    kbd1.appendChild(child2);
    kbd1.appendChild(child3);
    return kbd1;
}
//初始化
function init(){
    var keys={
        0:['q','w','e','r','t','y','u','i','o','p'],
        1:['a','s','d','f','g','h','j','k','l'],
        2:['z','x','c','v','b','n','m'],
        'length':3
    }
    var hash={
        q: 'qq.com', w: 'weibo.com', e: 'ele.com', t: 'taobao.com', r: 'renren.cn', y: '52pojie.cn', t: 'tianya.cn', u: 'uc.com',
        i: 'iqiyi.com', o: 'opera.com', p: 'dribbble.com', a: 'acfun.com',
        s: 'sohu.com', z: 'zhihu.com', m: 'manmanbuy.com',
    }
    var newhash= getFromLocalStorage('storage')

    if(newhash){
        console.log(newhash)
        hash=newhash
    }
    return {
        "keys":keys,
        "hash":hash
    }
}
//生成键盘
function creatKeyBoard(keys,hash){
    for(var index1=0;index1 < keys['length'];index1++){
        var div1=tag('div',{className:'row'});

        mid.appendChild(div1);

        var rows = keys[index1];
        for(var index2 = 0;index2<rows.length;index2++){

            var span1=createSpan(rows[index2]);

            var buttonX=createButton(rows[index2]);

            var img1 = createImage(hash[rows[index2]])

            var kbd1=creatKbd(span1,img1,buttonX)


            div1.appendChild(kbd1);
        }
    }
}
//监听
function listenToKeyBoard(hash){
    document.onkeypress=function(press){//当按键被按下时就执行这个函数

        var userKey1=press['key']
        console.log(hash)
        var website=hash[userKey1]
        console.log(website)
        window.open('https://www.'+website,'_blank')
    }
}