
function onloadFunction() {
    gapi.client.setApiKey('AIzaSyBsHr6JQ84fMQrXJKqBJdtnA6-06Lt4bLs');
    gapi.client.load('plus','v1', function () {});
}

window.fbAsyncInit = function() {
    FB.init({
        appId            : '665602177105349',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.0',
        status : true
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected'){

        }else if(response.status === 'not_authorized') {

        } else {

        }
    });

};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));