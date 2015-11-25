/**
 * DoraLayer 基于jquery的弹层插件
 * Created by Dora on 2015/11/25.
 */

;(function($, window, document,undefined) {


    $.layer = {

        alert : function(jsonData){
            var doraLayer = new DoraLayer(jsonData);
        }

    };

    var DoraLayer = function(jsonData){
        var jsonData = jsonData || {};
        var objId = "alert_" + Math.round(Math.random() * 100);
        jsonData.objId = objId;
        this.type = jsonData.type || 'dialog';
        this.width = jsonData.width || 500;
        this.height = jsonData.height || 300;
        if(this.type == 'dialog'){

            this.html = alertHtml(jsonData);
            this.initDialog(jsonData);

        }

    };



    DoraLayer.prototype = {

        initDialog : function(jsonData){
            var _this = this;
            _this.obj = $('#'+jsonData.objId);
            $('body').prepend(this.html);
            //设置容器的居中显示
            _this.setDialogCenter(jsonData.objId);

        },
        setDialogCenter : function(objId){
            $('#'+objId).css({
                'width' : $('#'+objId).width() +'px',
                'left' : '50%',
                'top' : '50%',
                'margin-left' : - $('#'+objId).width()/2 + 'px',
                'margin-top' : - $('#'+objId).height()/2 + 'px'
            });
        }

    };


    function alertHtml(jsonData){
        var index = Math.round(Math.random() * 1000);
        var html = "";
        html += "<div class='layui-layer-shade' style='z-index: "+index+"'></div>";
        html += "<div class='layui-layer layui-layer-dialog' style='z-index:"+(index+1)+";width:"+jsonData.width+"px;' id='"+jsonData.objId+"'>";
        html += "<div class='layui-layer-title'>初体验 - layer 2.0</div>";
        html += "<div class='layui-layer-content'>Hi，你好！ 点击确认更换图标</div>";
        html += "<span class='layui-layer-setwin'>";
        html += "    <i class='icon-nocircle-close'></i>";
        html += "</span>";
        html += "<div class='layui-layer-btn'>";
        html += "    <a class='layui-layer-btn0'>确定</a>";
        html += "</div>";
        html += "</div>";
        return html;
    }



})(jQuery, window, document);

