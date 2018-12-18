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


/* Create new Profile*/
$("#btnProfile").click(function(e){
    e.preventDefault();
    var f_name = $("#f_name").val();
    var l_name = $("#l_name").val();
    var mobile = $("#mobile").val();
    var location = $("#searchLocation").val();
    var city = $("#city").val();
   if(f_name==null||f_name==0){
    bootbox.alert({
    message:"Enter First Name",
    size: 'small',className: 'bb-alternate-modal'
});
     
      $("#f_name").focus();
      return false;
    }
    
    if(l_name==null||l_name==0){
       bootbox.alert({
    message:"Enter Last Name",
    size: 'small',className: 'bb-alternate-modal'
});
      
      $("#l_name").focus();
      return false;
    }

    if(mobile==null||mobile==0){
      bootbox.alert({
    message:"Enter Phone Number",
    size: 'small',className: 'bb-alternate-modal'
});
 
      $("#mobile").focus();
      return false;
    }

    if(location==null||location==0){
      bootbox.alert({
    message:"Enter Enter Location",
    size: 'small',className: 'bb-alternate-modal'
});
    
      $("#searchLocation").focus();
      return false;
    }
   

   if(city==null||city==0){
    bootbox.alert({
    message:"Enter City",
    size: 'small',className: 'bb-alternate-modal'
});
 
      $("#city").focus();
      return false;
    }
   
    $.ajax({
        dataType: 'json',
        type:'POST',
        url: '/create-user-profile',
       data: $('#frmProfile').serialize(),
    success: function(data){
      bootbox.alert({
    message:"Profile Saved Successfully",
    size: 'small',className:'bb-alternate-modal'
});
        
       
     }, 
       error: function(data){
       bootbox.alert({
    message:"Kindly Fill All Required Fields",
    size: 'small',className:'bb-alternate-modal'
});
    
      }
});

});




/* Update User Password */
$("#btnPasswordUpdate").click(function(e){
    e.preventDefault();
    var old_pass = $("#old_pass").val();
    var new_pass = $("#new_pass").val();
    var confirm_pass = $("#confirm_pass").val();
    
   if(old_pass==null||old_pass==0){
    bootbox.alert({
    message:"Enter current Password",
    size: 'small',className: 'bb-alternate-modal'
});
     
      $("#old_pass").focus();
      return false;
    }
    
    if(new_pass==null||new_pass==0){
       bootbox.alert({
    message:"Enter Nnew Password",
    size: 'small',className: 'bb-alternate-modal'
});
      
      $("#confirm_pass").focus();
      return false;
    }

    if(confirm_pass==null||confirm_pass==0){
      bootbox.alert({
    message:"Confirm New Password",
    size: 'small',className: 'bb-alternate-modal'
});
 
      $("#confirm_pass").focus();
      return false;
    }

   
    $.ajax({
        dataType: 'json',
        type:'POST',
        url: '/update-user-password',
       data: $('#frmPasswordUpdate').serialize(),
    success: function(data){
     
      bootbox.alert({
    message:"Password Successfully Changed",
    size: 'small',className:'bb-alternate-modal'
   
});
        
      
     }, 
       error: function(data){
       bootbox.alert({
    message:"Kindly Fill All Required Fields",
    size: 'small',className:'bb-alternate-modal'
});
  
},

});
});


/* Update User Profile */
$(".btnProfileUpdate").click(function(e){
    e.preventDefault();
    var f_name = $("#f_name").val();
    var l_name = $("#l_name").val();
    var mobile = $("#mobile").val();
    var location = $("#searchLocation").val();
    var city = $("#city").val();
   if(f_name==null||f_name==0){
    bootbox.alert({
    message:"Enter First Name",
    size: 'small',className: 'bb-alternate-modal'
});
     
      $("#f_name").focus();
      return false;
    }
    
    if(l_name==null||l_name==0){
       bootbox.alert({
    message:"Enter Last Name",
    size: 'small',className: 'bb-alternate-modal'
});
      
      $("#l_name").focus();
      return false;
    }

    if(mobile==null||mobile==0){
      bootbox.alert({
    message:"Enter Phone Number",
    size: 'small',className: 'bb-alternate-modal'
});
 
      $("#mobile").focus();
      return false;
    }

    if(location==null||location==0){
      bootbox.alert({
    message:"Enter Enter Location",
    size: 'small',className: 'bb-alternate-modal'
});
    
      $("#searchLocation").focus();
      return false;
    }
   

   if(city==null||city==0){
    bootbox.alert({
    message:"Enter City",
    size: 'small',className: 'bb-alternate-modal'
});
 
      $("#city").focus();
      return false;
    }
   
    $.ajax({
        dataType: 'json',
        type:'POST',
        url: '/update-user-profile',
       data: $('#frmProfileUpdate').serialize(),
    success: function(data){
      bootbox.alert({
    message:"Profile Saved Successfully",
    size: 'small',className:'bb-alternate-modal'
});
        
       
     }, 
       error: function(data){
       bootbox.alert({
    message:"Kindly Fill All Required Fields",
    size: 'small',className:'bb-alternate-modal'
});
    
      },
});

});