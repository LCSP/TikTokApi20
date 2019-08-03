

$("#sb_sidebar").on("click", function(event){
    //if($('#sb_sidebar').find('.active').html()==$(event.target).html()){return;} //Check if the clicked item is already selected (if is just return)
    $('#sb_sidebar').find('.active').removeClass('active'); //Remove the class active from the actual active item
    console.log($(event.target).html());
    switch($(event.target).html()){ //Get text of the clicked item
        case 'Home':
            $(event.target).addClass('active'); //Set active class
            $('#page_content div[style*="display:block"]').fadeOut(400,function(){ //find a div with the attr style=display:block inside the div #page_content and fade out that finded div
                $("#cont_home").fadeIn(function(){ //fade in the container of the specific section
                    $("#cont_home").attr('style','display:block'); //set attr style to display block so the selector in the fadeout can find
                });
            });
            break;

        case 'User Search':
            $(event.target).addClass('active');
            $('#page_content div[style*="display:block"]').fadeOut(400,function(){
                $("#cont_uSearch").fadeIn(function(){
                    $("#cont_uSearch").attr('style','display:block');
                });
            });
            break;

        case 'Hashtag Search':
            $(event.target).addClass('active');
            $('#page_content div[style*="display:block"]').fadeOut(400,function(){
                $("#cont_hSearch").fadeIn(function(){
                    $("#cont_hSearch").attr('style','display:block');
                });
            });
            break;

        case 'Music Search':
            $(event.target).addClass('active');
            $('#page_content div[style*="display:block"]').fadeOut(400,function(){
                $("#cont_mSearch").fadeIn(function(){
                    $("#cont_mSearch").attr('style','display:block');
                });
            });
            break;

        case 'Video Search':
            $(event.target).addClass('active');
            $('#page_content div[style*="display:block"]').fadeOut(400,function(){
                $("#cont_vSearch").fadeIn(function(){
                    $("#cont_vSearch").attr('style','display:block');
                });
            });
            break;

        case 'My Profile':
            $(event.target).addClass('active');
            $('#page_content div[style*="display:block"]').fadeOut(400,function(){
                $("#cont_profile").fadeIn(function(){
                    $("#cont_profile").attr('style','display:block');
                });
            });
            break;

        case 'Log Out':
            $(event.target).addClass('active');
            $('#page_content div[style*="display:block"]').fadeOut(400,function(){
                $("#cont_logOut").fadeIn(function(){
                    $("#cont_logOut").attr('style','display:block');
                });
            });
            break;  
    }
    
});

$("#btn_closePlayer").on("click", function(){
    if($("#video_player_tag").css('display') == 'block'){
        $("#video_player_tag").css('display', 'none');
        $("#video_player").attr('src', '');
    }
});


function setVideoList(type, id){
    switch(type){
        case 'usrposts':
            $('#postLists div[style*="display:block"]').hide();
            $('#page_content div[style*="display:block"]').hide();
            $('#postLists').attr('style','display:block');
            $("#cont_"+id).attr('style','display:block');
            break;

        case 'hashposts':
            $('#postLists div[style*="display:block"]').hide();
            $('#page_content div[style*="display:block"]').hide();
            $('#postLists').attr('style','display:block');
            $("#cont_"+id).attr('style','display:block');
            break;

        case 'musicposts':
            $('#postLists div[style*="display:block"]').hide();
            $('#page_content div[style*="display:block"]').hide();
            $('#postLists').attr('style','display:block');
            $("#cont_"+id).attr('style','display:block');
            break;
    }
}
