let snn = ["stupid","tenet","Dance Monkey"];
let ann = ["Nascar aloe","the sator king","tones and I"];
let sll = ["3mins","3mins","3mins"];
let iuu = ["https://images.genius.com/f865b7d8315eeb7d2d380bf32b7f170a.300x300x1.jpg","https://m.media-amazon.com/images/I/81kOkvlzuhL._SS500_.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Dance_Monkey_by_Tones_and_I.jpg/220px-Dance_Monkey_by_Tones_and_I.jpg"];
let slaa = ["https://www.youtube.com/watch?v=9zdjnEmMQh0","https://www.youtube.com/watch?v=nSFmrgkvfBk","https://www.youtube.com/watch?v=lYod0CqQZB0"];

$("#add").click(function () {
    let addy = $("#sla").val();
    let picture = $("#iu").val();
    let long = $("#sl").val();
    let sing = $("#sn").val();
    let singer = $("#an").val();
    sll.push(long);
    snn.push(sing);
    ann.push(singer);
    iuu.push(picture);
    slaa.push(addy);

    $(".song").empty();
    $(".artist").empty();
    $(".slength").empty();
    $(".iurl").empty();
    $(".sladdress").empty();






    snn.forEach(function (songx) {
        $(".song").append(songx);
    });

    sll.forEach(function (songL) {
        $(".slength").append(songL);
    });
    ann.forEach(function (artistN) {
        $(".artist").append(artistN);
    });
    iuu.forEach(function (imageU) {
        $(".iurl").append('<img src="' + imageU+ '">');
    });
    slaa.forEach(function (songlink) {
        $(".sladdress").append('<a target="_blank" href="' + songlink + '">play now</a href>');
    });

    console.log("hi");
});
// "<" + "" + ">"