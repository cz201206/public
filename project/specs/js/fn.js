function dataFromAnchor(a) {
    var data = {};
    var args = a.substr(a.indexOf('?')+1).split("&");
    for(var i = 0; i<args.length;i++){
        var key_val = args[i].split("=");
        data[key_val[0]] = key_val[1];
    }
    return data;
}

//绘制圆-图标
function drawCircle_icon(ctx) {
    //context 样式
    var grad  = ctx.createLinearGradient(0,0,0,100);
    grad.addColorStop(0,'#007bef');    // 黄
    grad.addColorStop(0.5,'#007bff');  // 蓝
    grad.addColorStop(1,'#007baf');    //青
    ctx.fillStyle = grad;
    //准备绘制
    ctx.beginPath();
    //指定圆参数
    ctx.arc(10,13,5,0,2*Math.PI);
    ctx.fill();
}