/* global $ */

$(document).ready(function() {

    let startingScore = 0;

    $(".iphone").click(function(){
        startingScore = startingScore + 20;
        console.log(startingScore);
    });
    
    $(".oneplus").click(function(){
        startingScore = startingScore + 1;
        console.log(startingScore);
    });
    $(".galaxy").click(function(){
        startingScore = startingScore + 10;
        console.log(startingScore);
    });
    $(".pixle").click(function(){
        startingScore = startingScore + 5; 
        console.log(startingScore);
    });
    // $("#one,button").click(function(){
    //     $("#one").hide();
    //     $("#one").attr("src","https://i.gifer.com/7efs.gif")
    // });
    function decision(){
        if(startingScore < 20){
            return "the oneplus"
        }
        else if(startingScore < 40){
            return "the google pixle phone"
        }
        else if(startingScore <60){
            return "a samsung galaxy phone"
        }
        else{
            return "an Iphone"
        }
    }





    $("#final").click(function() {
        let name = $("#name").val();
        const final = decision();
        $("#final").html("Hey "+name+" your dream phone is "+final);
        console.log(startingScore);
        
        
    });

});
