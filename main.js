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
var newhash= JSON.parse(localStorage.getItem('storage') || 'null')
if(newhash){
    console.log(newhash)
    hash=newhash
}
//程序
index1 = 0;
while(index1 < keys['length']){
    div1=document.createElement('div');
    div1.className='row';
    mid.appendChild(div1);
    rows = keys[index1];
    index2 = 0;
    while(index2<rows.length){/**/
        kbd1=document.createElement('kbd');
        span1=document.createElement('span');
        span1.textContent=rows[index2];
        kbd1.appendChild(span1);
        span1.className= 'text';
        kbd1.className = 'key';
        buttonX=document.createElement('button');
        buttonX.textContent='E';
        buttonX.id= rows[index2];
        img1 = document.createElement('img');
        if(hash[rows[index2]]){
            img1.src = 'https://www.' + hash[rows[index2]] + '/favicon.ico';
        }else{
            img1.herf='./2.jpeg';
        };

        img1.onerror = function(xxx){
            console.log(xxx);
        };

        buttonX.onclick=function(userEdit){//当buttonX被点击时就执行这个函数
            button2 = userEdit[target]
            console.log(button2.previousSibling)
            img2 = button2.previousSibling
            keyEdit= button2.id

            x = prompt('请输入网址')
            hash[keyEdit] = x
            localStorage.setItem('storage', JSON.stringify(hash))
        }

        kbd1.appendChild(img1)
        div1.appendChild(kbd1)
        kbd1.appendChild(buttonX)
        index2++
    }
    index1++
}
//监听
document.onkeypress=function(press){//当按键被按下时就执行这个函数

    userKey1=press['key']
    console.log(hash)
    website=hash[userKey1]
    console.log(website)
    window.open('https://www.'+website,'_blank')
}
