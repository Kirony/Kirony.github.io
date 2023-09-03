//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '👀跑哪里去了~';
        clearTimeout(titleTime);
    } else {
        //返回当前页面时标签显示内容
        document.title = '🐖抓到你啦～';
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce (fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}