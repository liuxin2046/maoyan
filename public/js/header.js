$(function(){
    $(`<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">`).appendTo('head');
    $(`<link rel='stylesheet' href='css/header.css'>`).appendTo('head');
    $.ajax({
        url:'header.html',
        type:'get',
        success:function(res){
            $(res).replaceAll($('#header'));
        }
    })
})