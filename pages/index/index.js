var $nav=$('.navbar')
$nav.on('click','li',function(ev){
        var curNode=ev.currentTarget
        if(curNode.classList.contains('active')){
                return;
        }
        var parent=curNode.parentNode
        for(var i=0;i<parent.children.length;++i){
                parent.children[i].classList.remove('active')
        }
        curNode.classList.add('active')
})