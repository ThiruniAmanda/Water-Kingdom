$(document).on("click","#image_uploader",function(e){
    e.preventDefault();
    $('#imgInp').click();
    var bar = $('.bar');
    var percent = $('.percent');
    var status = $('#status');

    function readURL(input) {
      
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                // alert(e.target.result)
                $('#image').attr('src',e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }

        else
        alert("Upload an image")
    }

    $("#imgInp").change(function(){
        readURL(this);
    });
})

$(document).on("click","#video_uploader",function(e){
    e.preventDefault();
    $('#videoInp').click();
    function readURL(input) {
      
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                alert(e.target.result)
                var div_tag=document.getElementById('videoUploaded');
                var video=document.createElement('video')
                video.setAttribute('src',e.target.result)
                video.setAttribute('id','myVideo')
                video.setAttribute('width',300)
                video.setAttribute('height',100)
                video.setAttribute('controls','')
                div_tag.appendChild(video)
            }
            
            reader.readAsDataURL(input.files[0]);
        }

        else
        alert("Upload a video")
    }

    $("#videoInp").change(function(){
        readURL(this);
    });

});

$(document).on("click","#item_image_uploader",function(e){
    e.preventDefault();
    $('#container').attr('class','container1');
    $('#item_imgInp').click();
    function readURL(input) {
      
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#item_image').attr('src',e.target.result);
                $('#del').removeAttr('style');
            }            
            reader.readAsDataURL(input.files[0]);
        }

        else
        alert("Upload an image")
    }

    $("#item_imgInp").change(function(){
        readURL(this);
    });

});

$(document).on("click","#del",function(){
    $('#item_imgInp').val("");
    $('#item_image').removeAttr('src')
    $('#del').attr('style','display:none');
    $('#container').removeAttr('class');

});

$(document).on("click","#uploader",function(){
    $('#profile_img').click();
    function readURL(input) {
      
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#profile_pic').attr('src',e.target.result);
            }            
            reader.readAsDataURL(input.files[0]);
        }

        else
        alert("Upload an image")
    }

    $("#profile_img").change(function(){
        readURL(this);
    });

});

$(document).on("click","#remove",function(){
    $('#profile_img').val("");
    $('#profile_pic').attr('src','assets/img/pro_img.png')
});


