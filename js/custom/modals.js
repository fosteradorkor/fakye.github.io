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




// show delete modal
$(".category-delete-modal").click(function(e){
        $('#footer_action_button2').text("Delete");
        $('#footer_action_button').removeClass('glyphicon-check');
        $('#footer_action_button').addClass('glyphicon-trash');
        $('.actionBtn').removeClass('btn-success');
        $('.actionBtn').addClass('btn-danger');
        $('.actionBtn').addClass('categorydelete');
        $('.modal-title').text('Delete');
        $('.categoryID').text($(this).data('id'));
        $('.deleteContent').show();
        $('.categoryName').html($(this).data('name'));
        $('#categoryModalDelete').modal('show');
    });

//delete category
$('.modal-footer').on('click', '.categorydelete', function() {
        $.ajax({
            type: 'post',
            url: '/category/delete',
            data: {
                '_token': $('input[name=_token]').val(),
                'id': $('.categoryID').text()
            },
            success: function(data) {
                $('.category' + $('.categoryID').text()).remove();
            }
        });
    });

//show to edit catgeory
$(document).on('click', '.category-edit-modal', function() {
        $('#footer_action_button2').text(" Update");
        $('#footer_action_button').addClass('glyphicon-check');
        $('#footer_action_button').removeClass('glyphicon-trash');
        $('.actionBtn').addClass('btn-success');
        $('.actionBtn').removeClass('btn-danger');
        $('.actionBtn').addClass('categoryEdit');
        $('.modal-title').text('Edit');
        $('.deleteContent').hide();
        $('#specimenmode').show();
        $('#cid').val($(this).data('id'));
        $('#category').val($(this).data('name'));
        $('#categoryModal').modal('show');
    });

//click save edited category
$('.modal-footer').on('click', '.categoryEdit', function() {
 
        $.ajax({
            type: 'post',
            url: '/category/edit',
            data: {
                '_token': $('input[name=_token]').val(),
                'id': $("#cid").val(),
                'name': $('#category').val()
            },
            success: function(data) {
                $('.category' + data.categoryID).replaceWith("<tr class='category"+data.categoryID+"'><td scope='col'>"+data.categoryID+"</td><td scope='col'>" + data.categoryName  + "</td><td scope='col'> <button class='category-edit-modal btn btn-primary' data-toggle='modal' data-id="+data.categoryID+" data-name="+ data.categoryName +">Update</button></td><td scope='col'><button class='category-delete-modal btn btn-danger' data-id="+data.categoryID+" data-name=" + data.categoryName  + ">Delete</button></td></tr>");
            }
        });
    });


//show to edit user status
$(document).on('click', '.user-edit-modal', function() {
        $('#footer_action_button').text(" Update");
        $('#footer_action_button').addClass('glyphicon-check');
        $('#footer_action_button').removeClass('glyphicon-trash');
        $('.actionBtn').addClass('btn-success');
        $('.actionBtn').removeClass('btn-danger');
        $('.actionBtn').addClass('userEdit');
        $('.modal-title').text('Update User status');
        $('.deleteContent').hide();
        $('#specimenmode').show();
        $('#uid').val($(this).data('id'));
        $('#name').val($(this).data('name'));
        $('#email').val($(this).data('email'));
        $('#userModal').modal('show');
    });

//click save edited category
$('.modal-footer').on('click', '.userEdit', function() {
 
        $.ajax({
            type: 'post',
            url: '/user/edit',
            data: {
                '_token': $('input[name=_token]').val(),
                'id': $("#uid").val(),
                'name': $('#name').val(),
                'email': $('#email').val(),
                'status': $('#status').val()
            },
            success: function(data) {
                location.reload();
            }
        });
    });