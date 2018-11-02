(function(){
    var navbar = document.getElementsByClassName('navbar')[0];
    var alinks = navbar.getElementsByTagName('a');
        
        for(var i=0;i<alinks.length;i++){
            alinks[i].addEventListener('click',function(){
                /*先清空所有alink的样式*/
                for(var tab of alinks){
                    tab.className = '';    
                }
                //console.log(eve.currentTarget.className);
                this.className = 'active';
            })
        }
})();
