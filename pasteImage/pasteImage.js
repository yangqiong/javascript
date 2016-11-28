/**
 * pasteImage.js
 * desc: 在div中粘贴图片
 * github: https://github.com/yangqiong/javascript/blob/master/pasteImage/pasteImage.js
 * version: 1.0.0
 * author: yangqiong
 * date: 2016-11-28
 */


/**
 * 使用: pasteImage(document.getElementById("需要粘贴的ID"))
 * P.S. 在需要粘贴图片的div上添加contentEditable="true", 可是div可显示编辑光标。
 *             
 */

function pasteImage(element){
    element.addEventListener("paste", function(event){
        var currentElement = event.currentTarget;
        var clipboardData = event.clipboardData;
        var items, item, types;
        if (clipboardData){
            items = clipboardData.items;
            if (items && items.length > 0){
                item = items[0];
                types = clipboardData.types || [];
                for (var i = 0; i < types.length; i++){
                    if (types[i] === "Files"){
                        item = items[i];
                        break;
                    }
                }
                if (item && item.kind === "file" && item.type.match(/^image\//i)){
                    imgRender(currentElement, item);
                }
            }
        }
    })

    function imgRender(element, item){
        var blob = item.getAsFile();
        var reader = new FileReader();

        reader.onload = function(e){
            var img = new Image();
            img.src = e.target.result;
            e.target.result.replace(/image\/(.*?);/, function(match, p1){
                img.dataset["type"] = p1;
            })
            element.innerHTML = "";
            element.appendChild(img);
        }

        reader.readAsDataURL( blob );
    }
}