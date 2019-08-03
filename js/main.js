$("#txt_usersearch").on("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        searchUsers($("#txt_usersearch").val());
    }
});

$("#txt_hashtagsearch").on("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        hashtagSearch($("#txt_hashtagsearch").val());
    }
});

$("#txt_musicsearch").on("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        musicSearch($("#txt_musicsearch").val());
    }
});


/*
    This function handles any type of request based on the mode
    Para:
    @uid = user id
    @handle = unique_id (Username)
    @tag = id of the element from where it was called
    @mode = 
        'loadvideo' = loads the selected video on the player element
        'usersearch' = loads posts of the choosed (uid) user
        'hashsearch' = loads posts of the choosed hashtag
*/
function loadhandler(uid, handle, tag, mode){
    switch(mode){
        case 'loadVideo':
            var videoLink = $(tag).attr('videolink');
            var videoUser = $(tag).attr('videouser');
            var videoId = $(tag).attr('videoid');
            var videoTitle = $(tag).attr('videotitle');
            var videoUInfo = $(tag).attr('videouinfo');
            var videoLCS = $(tag).attr('videolcs').split("/");
            var videoUPFP = $(tag).attr('videoupfp');

            $("#video_player").attr('src', videoLink);
            $("#video_pfp").attr('src', videoUPFP);
            $("#video_username").html(videoUser);
            $("#video_userinfo").attr('value', videoUInfo);
            $("#video_title").html(videoTitle);
            $("#video_likes").html(videoLCS[0]);
            $("#video_comm").html(videoLCS[1]);
            $("#video_shares").html(videoLCS[2]);
            $("#video_player_tag").css('display', 'block');

            

            break;
        
        case 'usersearch':
            loadPosts(uid, handle, tag);
            break;

        case 'hashsearch':
            loadHashPost(uid, handle, tag);
            break;
        
        case 'musicsearch':
            loadMusicPosts(uid, handle, tag);
            break;
    }
}


