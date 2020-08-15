$(document).on('mouseover', '.column' , function(){
    $(this).addClass('active').siblings().removeClass('active');
});