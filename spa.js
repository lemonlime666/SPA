const app = {
    pages:[],
    show: new Event('show'),
    init:function(){
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown); //註冊客製事件
        })
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.navigate); //註冊點擊更換hash
        })
        history.replaceState({},'Home','#home'); //一開始直接加入Hash 
        window.addEventListener('popstate', app.poppin); //當調用pushState || replaceState ，hash更換時執行（上一頁下一頁）
        // window.addEventListener('hashchange', app.poppin); 
        let hash = location.hash.replace('#', '');
        document.title = `My.${hash}`;
    },
    navigate:function(e){
        e.preventDefault();
        let currentPage = e.target.dataset.target;
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        history.pushState({},currentPage,`#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    pageShown:function(e){
        let hash = location.hash.replace('#', '');
        document.title = `My.${hash}`;
        let h1 = e.target.querySelector('h1');
        h1.classList.add('switch');
        setTimeout(()=>{
            h1.classList.remove('switch')
        },800)
    },
    poppin:function(e){ //返回上一頁或下一頁時
        console.log(location.hash, 'pop');
        let hash = location.hash.replace('#', '');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        // history.pushState({},currentPage,`#${currentPage}`); //這個不用做因為是返回上一頁或來到下一頁，不需重推hash
        document.getElementById(hash).dispatchEvent(app.show)
    }
}

document.addEventListener('DOMContentLoaded', app.init);

window.addEventListener('load', function(){
    console.log(looper(6));
})

const arr = [
    {id:21, name:"kobe"},
    {id:14, name:"kobe"},
    {id:23, name:"kobe"},
    {id:35, name:"kobe"},
    {id:46, name:"kobe"},
    {id:55, name:"kobe"},
    {id:62, name:"kobe"},
    {id:7, name:"kobe"}
]

function loop(n){
    if(n===0)return 0;
    return n + loop(n-1);
}

function looper(n){
    if(n<0)return 0;
    return arr[n].id + looper(n-1);
}

window.addEventListener('load', function(){
    var i = 1;
    while(i<10){
        if((i++)%2==0){
            console.log(i++);
        }
    }
})



