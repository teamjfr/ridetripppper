var popup= document.querySelector('.popup'),
close=popup.querySelector('.close');

  function tripTablemaking() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#myTable tbody").length == 0) {
        $("#myTable").append("<tbody></tbody>");
    }
   var btn= document.createElement('button');
    btn.className="btn-details"
    btn.onclick=function(){detailpop()};
    btn.innerHTML="Details";

    // Append product to the table
    $("#myTable tbody").append("<tr>" +
        "<td data-label='Date'> New </td>" +
        "<td data-label='Time'> New1 </td>" +
        "<td data-label='To'> New2 </td>" +
        "<td data-label='From'> New3 </td>" +
        "<td data-label='Number Of Seats'> 5 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");

        $("#myTable tbody").append("<tr>" +
        "<td data-label='Date'> New </td>" +
        "<td data-label='Time'> New1 </td>" +
        "<td data-label='To'> New2 </td>" +
        "<td data-label='From'> New3 </td>" +
        "<td data-label='Number Of Seats'> 3 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");

        $("#myTable tbody").append("<tr>" +
        "<td data-label='Date'>29-01-2018</td>" +
        "<td data-label='Time'> New1 </td>" +
        "<td data-label='To'> New2 </td>" +
        "<td data-label='From'> New3 </td>" +
        "<td data-label='Number Of Seats'> 5 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");

        $("#myTable tbody").append("<tr>" +
        "<td data-label='Date'>29-01-2018</td>" +
        "<td data-label='Time'> New1 </td>" +
        "<td data-label='To'> New2 </td>" +
        "<td data-label='From'> New3 </td>" +
        "<td data-label='Number Of Seats'> 1 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");
        $("#myTable tbody").append("<tr>" +
        "<td data-label='Date'>29-01-2018</td>" +
        "<td data-label='Time'> New1 </td>" +
        "<td data-label='To'> New2 </td>" +
        "<td data-label='From'> New3 </td>" +
        "<td data-label='Number Of Seats'> 5 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");
        $("#myTable tbody").append("<tr>" +
        "<td data-label='Date'>29-01-2018</td>" +
        "<td data-label='Time'> New1 </td>" +
        "<td data-label='To'> New2 </td>" +
        "<td data-label='From'> New3 </td>" +
        "<td data-label='Number Of Seats'> 5 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");
        $("#myTable tbody").append("<tr>" +
        "<td data-label='Date'>29-01-2018</td>" +
        "<td data-label='Time'> New1 </td>" +
        "<td data-label='To'> New2 </td>" +
        "<td data-label='From'> New3 </td>" +
        "<td data-label='Number Of Seats'> 5 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");
        $("#myTable tbody").append("<tr>" +
        "<td data-label='Date'>29-01-2018</td>" +
        "<td data-label='Time'> New1 </td>" +
        "<td data-label='To'> New2 </td>" +
        "<td data-label='From'> New3 </td>" +
        "<td data-label='Number Of Seats'> 5 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");
        $("#myTable tbody").append("<tr>" +
        "<td data-label='Date'>29-01-2018</td>" +
        "<td data-label='Time'> New1 </td>" +
        "<td data-label='To'> New2 </td>" +
        "<td data-label='From'> New3 </td>" +
        "<td data-label='Number Of Seats'> 5 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");
   /* $("#myTable tbody").append("<tr>" +
        "<td> New </td>" +
        "<td> New1 </td>" +
        "<td> New2 </td>" +
        "<td> New3 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");

    $("#myTable tbody").append("<tr>" +
        "<td> New </td>" +
        "<td> New1 </td>" +
        "<td> New2 </td>" +
        "<td> New3 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");*/
};

tripTablemaking();

function passengerTablemaking() {
    // First check if a <tbody> tag exists, add one if not

    $("#myTable1").find("tr:not(:first)").remove();
    if ($("#myTable1 tbody").length == 0) {
        $("#myTable1").append("<tbody></tbody>");
    }

    // Append product to the table
    $("#myTable1 tbody").append("<tr>" +
        "<td data-label='Driver Image'> <img src='image/driver_image.jpg'> </td>" +
        "<td data-label='Driver Name'> New1 </td>" +
        "<td data-label='Contact Number'> New2 </td>" +
        "<td data-label='Vechicle Number'> New3 </td>" +
        "</tr>");
};

function detailpop(){
    passengerTablemaking();
  popup.classList.toggle('show');
  };

  close.onclick=()=>{
    popup.classList.toggle('show');
  };


  $(".menu-toggle-btn").click(function(){
    $(".navigation_bar_class").toggleClass("active");
  });