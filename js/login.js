$(function(){
    $("#login").on("click",function(){
        $(".login-d").hide()
        $(".regist-z").show()
    })
    $("#regist").on("click",function(){
        $(".login-d").show()
        $(".regist-z").hide()
    })
})