$.get("/api/all", function (data) {
    if (data.length !== 0) {
        for (var i = 0; i++; i < data.length) {

            var row = $("<div>");

            row.addClass("chirp");

            row.append("<p> author is" + data[i].author + "</p>");
            row.append("<p> body is " + data[i].body + "</p>");
            row.append("<p> created at" + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

            $("#chirp-area").prepend(row);
        }
    }
});


$("#chirp-submit").on("click", function (event) {
    event.preventDefault();

    var newChirp = {
        author: $("#author").val().trim(),
        body: $("#chirp-box").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    }

    $.post("/api/new", newChirp)
        .then(function () {

            var row = $("<div>");

            row.addClass("chirp");

            row.append("<p> author is " + newChirp.author + " </p>");
            row.append("<p> body is: " + newChirp.body + " </p>");
            row.append("<p> time created is" + moment(newChirp.created_at).format("h:mma on dddd") + " </p>");

            $("#chirp-area").prepend(row);
        });

    $("#author").val("");
    $("#chirp-box").val("");
});