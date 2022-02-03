const API_URL = "http://164.92.215.12:8644/";

$(document).ready(function(){
    SendedRequests();
});

function SendedRequests() {
   /*
    axios({
        method: 'get',
        url: API_URL+'requests',
        responseType: 'stream',
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        timeout: 50000
    })
    .then(function (response) {
        //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        console.log(response);
    });
    */
    var settings = {
        "url": "http://164.92.215.12:8644/requests",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}