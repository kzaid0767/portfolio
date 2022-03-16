
$(function() {
    $(".order").on('click',function () {
        $("#reserveModal").modal('show');
        Image_Id = document.getElementById('imageBuy');
        text = this.name;
        
        ToImage_Id = document.getElementById(text);
        Image_Id.src = ToImage_Id.src;
    });

});

