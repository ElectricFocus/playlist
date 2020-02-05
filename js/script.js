let snn = ["stupid"];
let ann = ["Nascar aloe"];
let sll = ["3mins"];
let iuu = ["https://images.genius.com/f865b7d8315eeb7d2d380bf32b7f170a.300x300x1.jpg"];
let slaa = ["https://www.youtube.com/watch?v=9zdjnEmMQh0"];

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
        $(".iurl").append(imageU);
    });
    slaa.forEach(function (songlink) {
        $(".sladdress").append(songlink);
    });

    console.log("hi");
});
// "<" + "" + ">"