/**
 * Created by Administrator on 2017/5/3.
 */
function getAttr(obj,attr){
    var result = "";
    if(window.getComputedStyle){
        result = window.getComputedStyle(obj,false)[attr];
    }else{
        result = obj.currentStyle[attr]
    }
    return result;
}
function fnAddSpeed(obj,nTarget,attr,fn){

    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var offset = parseInt(getAttr(obj,attr));
        var iSpeed = (nTarget - offset)/14
        iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

        if(Math.abs(nTarget - offset) <= Math.abs(iSpeed)){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }else{
            obj.style[attr] = iSpeed +offset+"px";
        }
    },30)
}
function fnAddSpeedJs(obj,oJon,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var bSwitch =true;
        for(var attr in oJon){
            if(attr == "opacity"){
                var offset = getAttr(obj,attr)*100;
            }else{
                var offset = parseInt(getAttr(obj,attr));
            }
            var iSpeed = (oJon[attr] - offset)/7
            iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
            if(iSpeed!=0){
                bSwitch = false;
            }
            if(attr == 'opacity'){
                obj.style[attr] = (offset + iSpeed)/100;
                obj.style["filter"] = "alpha(opacity:"+(offset + iSpeed)+")";}else{
                obj.style[attr] = offset + iSpeed + "px";
            }
        }

        if(bSwitch){

            clearInterval(obj.timer);
            if(fn){

                fn();
            }
        }
    },30)

}
//action
if(typeof window.ys === 'undefined'){
    window.ys ={};
}
ys.event = {
    addEventListener: function(ele, type, fun){
        if(window.addEventListener){
            ele.addEventListener(type, fun, false);
        }else{
            ele.attachEvent('on' + type, fun);
        }
    }
};
//
ys.$ = function(id){
    return document.getElementById(id);
};
var yshuai = Object.create(ys);
//loop

var playObj = {
    dom:$('.banner'),
    init:function(num){
        this.render();
        this.bindEvent(num);

    },
    buttons:function(){
        return this.dom.find('.loop_bg');
    },
    render:function(){

    },
    bindEvent:function(num){
        var _this = this;
        var height = _this.ownHeight() - num;
        $('html body').animate({scrollTop:height},1000);
    },
    ownHeight:function(){
        var height = this.dom.get(0).offsetTop;
        return height;
    },
    slide:function(){
        var oUl = $('.slidebox').get(0);
        var oLi = oUl.getElementsByTagName('li');
        var num = 0;
        var num01 = 0;
        var nWidth = 282;
        var oBtn = $('.loop_bg');
        function fnMove(){
            fnAddSpeed(oUl,(-num*282.1),"left");
            for(var i=0;i<$('.loop_bg').length;i++){
                $('.loop_bg').eq(i).removeClass('icon00'+(i+1));
            }
            $('.loop_bg').eq(num01).addClass('icon00'+(num01+1));
        };
        function fnPrev(){
            num01--;
            num--;
            if(num01<0){
                num01 = oBtn.length-1;
            }
            if(num <0){
                num = oLi.length-2;
                oUl.style.left = -(num+1)*nWidth + "px";
            }

            fnMove();


        }
        function fnNext(){
            num++;
            num01++;
            if(num01>=oBtn.length){
                num01 =0;

            }
            if(num >= oLi.length){
                num = 1;
                oUl.style.left = 0;
            }
            fnMove();
        }
        this.timer = setInterval(fnNext,3000);
        var _this = this;
        $('.loop_bg').onmouseenter = function(){

            clearInterval(_this.timer)

        }
        $('.loop_bg').onmouseleave = function(){

            _this.timer = setInterval(fnNext,3000);
        }
        for(var i=0;i<oBtn.length;i++){
            oBtn[i].index = i;
            oBtn[i].onclick = function(){

                num = num01 = this.index;
                fnMove();
            }
            oBtn[i].onmouseover = function(){
                clearInterval(_this.timer);
                for(var i=0;i<$('.loop_bg').length;i++){
                    $('.loop_bg').eq(i).removeClass('icon00'+(i+1));
                }
                $('.loop_bg').eq(this.index).addClass('icon00'+(this.index+1))
            }
            oBtn[i].onmouseleave = function(){

                fnMove();
                _this.timer = setInterval(fnNext,3000);
            }
        }
    }
}

playObj.slide();