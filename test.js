var piano = require('./index');

$(document).ready(function () {

    var elemID = 'piano-container';
    var p = new piano(elemID, {
        octaves: 3,
        octaveBegin: 3
    });
    
    p.createPiano();

    $('#piano-container rect').click(function (e) {
        console.log(e.target.dataset)
    })
})