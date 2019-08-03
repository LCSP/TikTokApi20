//Vars with card html for post lists
// -> Container ID (userid, chid, mid)
var n1 = '<div id="cont_';
// -> Container Title (Username, hashtag name)
var n2 = '" class="container-fluid" style="display:block"><h3>';
// -> Info
var n3 = '</h3><small>';
// -> List ID (userid, chid, mid);
var n4 = '</small><hr style="border-color: grey;"><div class="row" id="lst_';
// -> Load More Button ID (userid, chid, mid)
var n5 = '"></div><button type="button" id="btn_loadMore_'
// -> Type of Content (hash, posts, music) + '","' + (userid, chid, mid)
var n6 = '" onclick=\'loadMore("';
// -> End Card
var n7 = '");\' disabled="true" class="btn btn-dark btn-lg btn-block">Load More</button></div>';

//Vars with card html for search
// -> video id
var m1 = '<div class="col-md-4"><div class="card mb-4 shadow-sm" id="cont_post_';
// -> id, title, html tag
var m2 = '" onclick=\'loadhandler("';
// -> Info
var m3 = ')\''
// -> Image url
var m4 = '"><img class="bd-placeholder-img card-img-top" src="';
// -> New values
var m5 = '"><div class="card-body" ';
// -> Title
var m6 = '><p class="card-text">';
// -> First Button Arguments
var m7 = '</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-outline-secondary" ';
// -> Second Button Arguments
var m8 = '>Add To Favorites</button><button type="button" class="btn btn-sm btn-outline-secondary" ';
// -> Likes/Comments/Shares
var m9 = 'TODO</button></div><small class="text-muted">';
// -> End Card
var m10 = '</small></div></div></div></div>';

//Vars html for dropdown
// -> type, id
var b1 = '<a class="dropdown-item" href="#" onclick=\'setVideoList("';
// -> Dropdown ID
var b2 = '")\' id="';
// -> Content Title
var b3 = '">'
// -> End Dropwdown
var b4 = '</a><div class="dropdown-divider"></div>';

//vars html for hashtag search table
// -> cid,hashname,#cont_hSearch, hashsearch
var g1 = '<tr onclick=\'loadhandler("';
// -> hashtag name
var g2 = '")\'><td>';
// -> times used
var g3 = '</td><td>';
// -> views
var g4 = '</td><td>';
// -> end html table
var g5 = '</td></tr>';


function adaptList(listId, content, mode){
    console.log(mode);
    switch(mode){
        case 'musicsearch':
            $(listId).append(m1 + '' + m2 + content[3] + '","' + content[4] + '","#cont_mSearch","musicsearch"'+ m3 + m4 + content[0] + m5 + m6 + content[1] + m7 + m8 + m9 + content[2] + m10);
            //image -> Info -> --- -> mid -> at
            break;

        case 'hashtagpost':
            //videoLink -> videoUsername -> videoId -> VideoTitle -> VideoUInfo -> videoLCS -> videoUPFP -> videoThumb -> VideoTitle
            //$(listId).append(m1 + m2 + content[0] + m3 + m4 + content[1] + m5 + m6 + m7 + content[2] + m8);
            $(listId).append(m1 + content[2] + m2 + '' + '","' + content[8] + '","#cont_post_' + content[2] + '","loadVideo"' + m3 + 'videolink="' + content[0] + '" videouser="' + content[1] + '" videoid="' + content[2] + '" videotitle="' + content[3] + '" videouinfo="' + content[4] + '" videolcs="' + content[5] + '" videoupfp=" ' + content[6] + m4 + content[7] + m5 + m6 + content[8] + m7 + m8 + m9 + content[5] + m10);
            break;

        case 'hashtagsearch':
            //cid -> name -> timesused -> views
            //console.log(g1 + content[0] + '","' + content[1] + '","#cont_hSearch","hashsearch' + g2 + content[1] + g3 + content[2] + g4 + content[3] + g5);
            $(listId).append(g1 + content[0] + '","' + content[1] + '","#cont_hSearch","hashsearch' + g2 + content[1] + g3 + content[2] + g4 + content[3] + g5);
            break;

        case 'usernamesearch':
            $(listId).append(m1 + '' + m2 + content[3] + '","' + content[4] + '","#cont_uSearch","usersearch"'+ m3 + m4 + content[0] + m5 + m6 + content[1] + m7 + m8 + m9 + content[2] + m10);
            //image -> Info -> --- -> uid -> at
            break;

        case 'userinfo':
            //userid -> nickname -> at -> followers -> bio -> twitter -> insta -> awemecount -> region -> avatarSmall -> avatarBig
            $(listId).append(n1 + content[0] + n2 + '<img src="' + content[9] + '" height="100" width="100">    ' + content[1] + n3 + '@' + content[2] + '<br>Followers: ' + content[3] + '<br>Bio: ' + content[4] + '<br>Twitter: ' + content[5] + '<br> Instagram: ' + content[6] + '<br>Posted Videos: ' + content[7] + '<br>Region: ' + content[8] + n4 + content[0] + n5 + content[0] + n6 + 'posts","' + content[0] + n7);
            break;

        case 'post':
            //videoLink -> videoUsername -> videoId -> VideoTitle -> VideoUInfo -> videoLCS -> videoUPFP -> videoThumb -> VideoTitle
            //$(listId).append(m1 + m2 + content[0] + m3 + m4 + content[1] + m5 + m6 + m7 + content[2] + m8);
            $(listId).append(m1 + content[2] + m2 + '' + '","' + content[8] + '","#cont_post_' + content[2] + '","loadVideo"' + m3 + 'videolink="' + content[0] + '" videouser="' + content[1] + '" videoid="' + content[2] + '" videotitle="' + content[3] + '" videouinfo="' + content[4] + '" videolcs="' + content[5] + '" videoupfp=" ' + content[6] + m4 + content[7] + m5 + m6 + content[8] + m7 + m8 + m9 + content[5] + m10);
            break;

        case 'dropdown':
            //type, id -> DropwdownID -> Title
            $(listId).append(b1 + content[0] + b2 + content[1] + b3 + content[2] + b4);
            break;
    }

    

}