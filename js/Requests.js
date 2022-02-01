const API_URL = "http://164.92.215.12:8644/";

$(document).ready(function(){
    SendedRequests();
});

function SendedRequests() {
    axios({
        method: 'get',
        url: API_URL+'requests',
        responseType: 'stream',
        headers: {'X-Requested-With': 'XMLHttpRequest'},
    })
    .then(function (response) {
        //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        console.log(response);
    });
}