$(document).on("click","#image_uploader",function(e){
    e.preventDefault();
    $('#imgInp').click();
    $('#container').attr('class','container1');
    let pro_val=document.getElementById('pro_val');
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

        let xhr=new XMLHttpRequest();
        var params="success";

        // var formData = new FormData();
        // formData.append("imgInp", document.getElementById("imgInp").files[0]);
        xhr.upload.onloadstart=function(e){
            //console.log('started');
            $('.progress').removeAttr('style');
            // upd.classList.add('visible');
            pro_val.innerHTML='0%';
            //console.log(e.lengthComputable)
        }

        xhr.upload.onprogress=function(e){
            pro_val.innerHTML=(Math.floor((e.loaded/e.total)*100))+'%';
            //console.log(pro_val.innerHTML)
            pro_val.style.width=(Math.floor((e.loaded/e.total)*100))+'%';
        }


        xhr.upload.onloadend=function(e){
            // upd.classList.remove('visible');
           
        }

        xhr.upload.onerror=function(e){
            document.getElementById('message').innerHTML="Error Uplaoding";
            $('.progress').attr('style','display:none');
        }
               
        xhr.open("POST", "http://localhost:4600/image_uploader", true);
        xhr.send(params);
        readURL(this);

    });

    // fi.addEventListener('change',function(){
    //     let xhr=new XMLHttpRequest();
    //     var formData = new FormData();
    //     formData.append("imgInp", document.getElementById("imgInp").files[0]);
    //     xhr.upload.onloadstart=function(e){
    //         console.log('started')
    //         upd.classList.add('visible');
    //         upd.value=0;
    //         upd.max=e.total;
    //         msg.textContent='uploading'
    //     }

    //     xhr.upload.onprogress=function(e){
    //         console.log('ko')
    //         upd.value=e.loaded;
    //         upd.max=e.total;
    //     }

    //     xhr.upload.onloadend=function(e){
    //         console.log('ko')
    //         upd.classList.remove('visible');
    //         msg.textContent='finish';
    //         readURL(this);
    //     }
    //     xhr.open("POST", "/add-fish-details", true);
    //     xhr.send(formData);
    // })

    
});


// $(document).on("click","#video_uploader",function(e){
//     e.preventDefault();
//     $('#videoInp').click();
//     $('#videoUploaded').attr('class','container1');
//     function readURL(input) {
      
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();
//             reader.onload = function (e) {
//                // alert(e.target.result)
//                  $('#myVideo').removeAttr('style')
//                  $('#myVideo').attr('src',e.target.result);
//                  $('#myVideo').attr('width','100px');
//                  $('#myVideo').attr('height','200px');
//                  $('#del_video').removeAttr('style');
//             }
            
//             reader.readAsDataURL(input.files[0]);
//         }

//         else
//         alert("Upload a video")
//     }

//     $("#videoInp").change(function(){
//         readURL(this);
//     });

// });

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

    $('#imgInput').val("");
    $('#image').removeAttr('src')
    $('#del').attr('style','display:none');
    $('#container').removeAttr('class');
    $('#image').removeAttr('style');
    $('.progress').attr('style','display:none');
});

$(document).on("click","#up_del",function(){

    $('#imgInp1').val("");
    $('#imgs_src').val("del");
    $('#image1').removeAttr('src')
    $('#up_del').attr('style','display:none');
    $('#container1').removeAttr('class');
    // $('#image').removeAttr('style');
});

$(document).on("click","#image_uploader1",function(e){
    e.preventDefault();
    $('#imgInp1').click();
    $('#container1').attr('class','container1');
    let pro_val=document.getElementById('up_pro_val');
    function readURL(input) {
      
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                // alert(e.target.result)
                $('#image1').attr('src',e.target.result);
                //$('#image1').attr('style','width:60px;height:60px');
                $('#up_del').removeAttr('style');
                $('#imgs_src').val('not del');
            }
            
            reader.readAsDataURL(input.files[0]);
        }

        else
        alert("Upload an image")
    }

    $("#imgInp1").change(function(){
        let xhr=new XMLHttpRequest();
        var params="success";
        xhr.upload.onloadstart=function(e){
            //console.log('started');
            $('#up_progress').removeAttr('style');
            // upd.classList.add('visible');
            pro_val.innerHTML='0%';
            //console.log(e.lengthComputable)
        }

        xhr.upload.onprogress=function(e){
            pro_val.innerHTML=(Math.floor((e.loaded/e.total)*100))+'%';
            //console.log(pro_val.innerHTML)
            pro_val.style.width=(Math.floor((e.loaded/e.total)*100))+'%';
        }


        xhr.upload.onloadend=function(e){
            // upd.classList.remove('visible');
           
        }

        xhr.upload.onerror=function(e){
            document.getElementById('up_message').innerHTML="Error Uplaoding";
            $('#up_progress').attr('style','display:none');
        }
               
        xhr.open("POST", "http://localhost:4600/image_uploader", true);
        xhr.send(params);
        readURL(this);
    });
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

// $(document).on('click','#edit_item',function(e){
//     e.preventDefault()
//     document.getElementById('name').value=$(this).data('name');
//     document.getElementById('category').value=$(this).data('category');
//     document.getElementById('age').value=$(this).data('age');
//     document.getElementById('size').value=$(this).data('size');
//     document.getElementById('gender').value=$(this).data('gender');
//     document.getElementById('price').value=$(this).data('price');
//     document.getElementById('code').value=$(this).data('code');
//     document.getElementById('description').value=$(this).data('des');
//     document.getElementById('link').value=$(this).data('link');
//     document.getElementById('image').src=$(this).data('imgsrc');
//     $('#myVideo').removeAttr('style');
//     document.getElementById('myVideo').src=$(this).data('videosrc');
//     $('#videoUploaded').attr('class','container1');
//     $('#container').attr('class','container1');
//     $('#del_video').removeAttr('style');
//     $('#del').removeAttr('style');
// });


$(document).on('click','#nav-search',function(e){
    e.preventDefault();
    var search_code=$('#nav-search-item').val();
    // alert(search_code);
    $('#fish_id').val(search_code);
    // alert( $('#fish_id').val())
    $('#search_item_nav').click();
});

function enable_search_bar(){
    $('#nav_form').removeAttr('style');
}

function disable_search_bar(){
    $('#nav_form').attr('style','display:none');
}

$(document).on('click','#delete_item',function(e){
    e.preventDefault();
})

$(document).on('click','#update',function(e){
    e.preventDefault()
});

function getCode(value){
    $('#get_code')[0].click();
}

$(document).on('click','#get_code',function(e){
    e.preventDefault();
});

function redirect_to_dashboard(){
    
    $('#redirect_to')[0].click();
}




