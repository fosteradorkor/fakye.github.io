$(document).ready(function(){
    $(".categories_btn").click(function(){
    	$(".admin_dashboard").empty();
        $(".admin_dashboard").load("/manage-categories");
    });
});