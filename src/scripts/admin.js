$(document).on("click","#image_uploader",function(e){
    e.preventDefault();
    $('#imgInp').click();
    $('#container').attr('class','container1');
    function readURL(input) {
      
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                // alert(e.target.result)
                $('#image').attr('src',e.target.result);
                $('#image').attr('style','width:60px;height:60px');
                $('#del').removeAttr('style');
            }
            
            reader.readAsDataURL(input.files[0]);
        }

        else
        alert("Upload an image")
    }

    $("#imgInp").change(function(){
        readURL(this);
    });
});


$(document).on("click","#video_uploader",function(e){
    e.preventDefault();
    $('#videoInp').click();
    $('#videoUploaded').attr('class','container1');
    function readURL(input) {
      
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
               // alert(e.target.result)
                 $('#myVideo').removeAttr('style')
                 $('#myVideo').attr('src',e.target.result);
                 $('#myVideo').attr('width','100px');
                 $('#myVideo').attr('height','200px');
                // var div_tag=document.getElementById('videoUploaded');
                // var video=document.createElement('video')
                // video.setAttribute('src',e.target.result)
                // video.setAttribute('id','myVideo')
                // video.setAttribute('width',300)
                // video.setAttribute('height',100)
                // video.setAttribute('controls','')
                // div_tag.appendChild(video);
                $('#del_video').removeAttr('style');
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

// $(document).on("click","#item_image_uploader",function(e){
//     e.preventDefault();
//     $('#container').attr('class','container1');
//     $('#item_imgInp').click();
//     function readURL(input) {
      
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();
//             reader.onload = function (e) {
//                 $('#item_image').attr('src',e.target.result);
//                 $('#del').removeAttr('style');
//             }            
//             reader.readAsDataURL(input.files[0]);
//         }

//         else
//         alert("Upload an image")
//     }

//     $("#item_imgInp").change(function(){
//         readURL(this);
//     });

// });

$(document).on("click","#del",function(){
    $('#imgInp').val("");
    $('#image').removeAttr('src')
    $('#del').attr('style','display:none');
    $('#container').removeAttr('class');
    $('#image').removeAttr('style');

});

$(document).on("click","#del_video",function(){
    $('#videoInp').val("");
    $('#myVideo').removeAttr('src')
    $('#myVideo').attr('style','display:none');
    $('#del_video').attr('style','display:none');
    $('#videoUploaded').removeAttr('class');

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

$(document).on('click','#edit_item',function(e){
    e.preventDefault()
    document.getElementById('name').value=$(this).data('name');
    document.getElementById('category').value=$(this).data('category');
    document.getElementById('age').value=$(this).data('age');
    document.getElementById('size').value=$(this).data('size');
    document.getElementById('gender').value=$(this).data('gender');
    document.getElementById('price').value=$(this).data('price');
    document.getElementById('code').value=$(this).data('code');
    document.getElementById('description').value=$(this).data('des');
    document.getElementById('link').value=$(this).data('link');
    document.getElementById('image').src=$(this).data('imgsrc');
    $('#myVideo').removeAttr('style');
    document.getElementById('myVideo').src=$(this).data('videosrc');
    $('#videoUploaded').attr('class','container1');
    $('#container').attr('class','container1');
    $('#del_video').removeAttr('style');
    $('#del').removeAttr('style');
  
})




