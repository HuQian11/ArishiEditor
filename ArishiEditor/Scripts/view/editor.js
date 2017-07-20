/**
 * ==========================================================
 * Copyright (C)
 * 公用组件JS
 * Author: Arishi
 * Date: 2017-7-11
 * ==========================================================
 */

function Editor() {
    this.$wrap = $('#uploader');
    this.Node = null;
    this.imageList = [];
    this.imgUploadHtml = $("#uploader").html();
    this.Init();


}

$(function () {
    var editor = $("#content").ArishiEditor({
        imgTag: "imgModal",
        imgUrl: "/UEditorController.ashx?action=uploadimage",
        content: '',
        cssStyleId: "#editorCss",
        height: window.innerHeight - $("#footer").innerHeight() - 20,
        resizeHandler: function () {
            var that = this;
            var height = window.innerHeight;
            window.onresize = function (e) {
                editor.setContentHeight(window.innerHeight - $("#footer").innerHeight() - 20);
                var opt = that.getElementOffset(editor.options.node == null ? $("#content")[0].lastChild : editor.options.node);
                if (window.innerHeight < height - 30) {
                    $("#content").scrollTop(opt.top - 50);
                }
            }
        }
    });
    console.log(editor);
    //未添加图片后台时，建议编辑器中只有一张图片时查看getAllHtml方法是否正确，因为base64位字符串过多，在手机中查看容易导致浏览器崩溃
    $(document).on("click", "#btn_Save", function () {
        var $html = that.getAllHtml();
        Ewin.alert({ message: $html });
    });

});