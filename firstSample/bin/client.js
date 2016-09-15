/**
 * Created by Mohammad on 9/10/2016.
 */
var http = require("http");
var option = {
    hostname: "localhost",
    port: 8000,
    method: "GET",
    path: "/"
}
var request = http.request(option, function (resp) {

    console.log(resp.headers);

    resp.on("data", function (chunck) {
        console.log(chunck.toString());

    })

})
request.end();