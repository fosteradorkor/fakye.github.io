/* Get Page Data*/
function getPageData() {
	$.ajax({
    	dataType: 'json',
    	url: url,
    	data: {page:page}
	}).done(function(data){
		manageRow(data.data);
	});
}


/* Create new Printer Item */
$("#SaveCategory").click(function(e){
    e.preventDefault();
    var category = $("#CategoryName").val();

    if(category==null||category==0){
    
      bootbox.alert({
    message:"Enter Category Name",
    size: 'small',className: 'bb-alternate-modal'
});
      $("#CategoryName").focus();
      return false;

    }
   
    $.ajax({
        dataType: 'json',
        type:'POST',
        url: '/create-categories',
       data: $('#frmCategory').serialize(),
    success: function(data){

      bootbox.alert({
    message:"Category Saved Successfully",
    size: 'small',className: 'bb-alternate-modal'
});
        document.getElementById('frmCategory').reset();
        location.reload();   
      $('#category').append("<tr class='dt-center rowCategory"+data.category_id+"' id='Category_"+data.category_id+"'><td class='dt-center'>" + data.category_name + "</td><td class='dt-center'>" + data.track_stock + "</td><td class='dt-center'>" + data.status + "</td><td class='dt-center'><a href='' data-id="+data.category_id+"><i class='fa fa-pencil' aria-hidden='true'></i></a><a href='javascript:void(0)' data-id="+data.category_id+" onclick='removeCategory("+data.category_id+");'><i class='fa fa-trash-o' aria-hidden='true' ></i> <i class='fa fa-cancel' aria-hidden='true'></i></a> </td></tr>")}, 
       error: function(data){
              bootbox.alert({
    message:"Data Entry error",
    size: 'small',className: 'bb-alternate-modal'
});
       
      }
});

});

/*$(document).ready(function() {
    $('#category').DataTable({
    
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": false 
  });
    });


*/

//delete item
function removeCategory(myvar){
$.ajax({
    type :"GET",
    url :"/category/delete",
    data:{'myvar':myvar},
    success: function(data){
       $('#Category_'+data.category_id).fadeOut().remove();
         location.reload(); 
    }
});
};

var popupWindow=null;
function editCategory(id)
{
    var id=id;
    var x = screen.width/2 - 1200/2;
    var y = screen.height/2 - 800/2;
    popupWindow = window.open('/edit-category/'+id+'' ,'editCategory','width=1000,height=590, "scrollbars=1",left='+x+',top='+y);
}

function parent_disable() {
if(popupWindow && !popupWindow.closed)
popupWindow.focus();
}

/* Create new Printer Item */
$("#editCategory").click(function(e){
    e.preventDefault();
    var category = $("#categoryName").val();

    if(category==null||category==0){
       bootbox.alert({
    message:"Enter Category Name",
    size: 'small',className: 'bb-alternate-modal'
});
     
      $("#categoryName").focus();
      return false;
    }
    $.ajax({
        dataType: 'json',
        type:'POST',
        url: '/edit-category',
       data: $('#frmEditCategory').serialize(),
    success: function(data){
             bootbox.alert({
    message:"Category Saved Successfully",
    size: 'small',className: 'bb-alternate-modal'
});
             
        window.close(); 
          window.opener.location.reload();
     }, 
       error: function(data){
         bootbox.alert({
    message:"'Data Entry error",
    size: 'small',className: 'bb-alternate-modal'
});
      }
});

});