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
      "<td data-label='date'> 28-07-2021 </td>" +
      "<td data-label='Time'> 13:30AM </td>" +
      "<td data-label='To'> Rajshahi </td>" +
      "<td data-label='From'> Dhaka </td>" +
        "<td data-label='Number Of Seats'> 5 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");

        $("#myTable tbody").append("<tr>" +
        "<td data-label='date'> 27-07-2021 </td>" +
        "<td data-label='Time'> 13:30AM </td>" +
        "<td data-label='To'> Dhaka </td>" +
        "<td data-label='From'> Rajshahi </td>" +
        "<td data-label='Number Of Seats'> 2 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");

        $("#myTable tbody").append("<tr>" +
        "<td data-label='date'> 16-07-2021 </td>" +
        "<td data-label='Time'> 13:30AM </td>" +
        "<td data-label='To'> Dhaka </td>" +
        "<td data-label='From'> Rajshahi </td>" +
        "<td data-label='Number Of Seats'> 1 </td>" +
        "<td> <button class='btn-details' onclick='detailpop()'>Details</button></td>" +
        "</tr>");

       
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
        "<td data-label='Driver Name'> XYZ </td>" +
        "<td data-label='Contact Number'> 78941518 </td>" +
        "<td data-label='Vechicle Number'> 6546515 </td>" +
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