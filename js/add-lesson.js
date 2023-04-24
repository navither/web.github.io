var removeSVG= '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';


$(function(){
    $('.add-lesson-btn').on('click', function(){
        if($('.black_overlay').css("display")=="none"){
            OpenPopBoard();
        }else{
            ClosePopBoard();
        }
    })

    var link=document.getElementById('t1');//链接内容
    var lessonTitle=document.getElementById('t2');//标题
    var lessonUrl='https://www.bilibili.com/video/BV1194y117Y6'
    var imgSrc='https://i1.hdslb.com/bfs/archive/e81fa456c23bb2d09aa817e2d8ca545e86d495de.jpg@256w_144h_1c.webp'

    $('.confirm-btn').on('click', function(){
        ClosePopBoard();
        NewLesson(lessonTitle, lessonUrl, imgSrc);
    })

    $('.week-block').on('click', function(){
        console.log(this.textContent);
    })
})

//关闭弹出窗口
function ClosePopBoard(){
    $('.pop-board').css("display", "none");
    $('.black_overlay').css("display", "none");
    $('.pop-board-lesson-pool').css("display", "none");
    $('.add-lesson-btn').css("transform", "rotate(0deg)")    
}
//开启弹出窗口
function OpenPopBoard(){
    $('.pop-board').css("display", "block");
    $('.black_overlay').css("display", "block");    
    $('.add-lesson-btn').css("transform", "rotate(135deg)")
    // $('.add-lesson-btn').css("background-color", "#c55b03")
}
function removeItem(){
    deleteElement = this.parentElement.parentElement.parentElement;
    console.log(deleteElement)
    deleteElement.classList.add('deleted');
   
    
    setTimeout(function() {
            //alert('deleted!');
            deleteElement.remove();
            alert('deleted!');
    }, 200);
        
}
function NewLesson(lessonTitle,lessonUrl,imgSrc){
    const room=document.getElementById('room')

    var box=document.createElement('div');
    box.classList.add('video-box');
    var bg=document.createElement('div');
    bg.classList.add('video-box-background');
    var url=document.createElement('a');
    url.href=lessonUrl;
    var img=document.createElement('img');
    img.classList.add('video');
    img.src=imgSrc;
    var title=document.createElement('span');
    title.classList.add('video-title');
    
    var buttonsDiv= document.createElement('div');
    buttonsDiv.classList.add('buttons');

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML= removeSVG;

    deleteButton.addEventListener('click', removeItem);
    console.log(deleteButton);
    title.textContent=lessonTitle.value;

    buttonsDiv.appendChild(deleteButton)
    bg.appendChild(buttonsDiv);
    url.appendChild(img);
    bg.appendChild(url);
    box.appendChild(bg);
    box.appendChild(title);

    console.log(room);
    room.insertBefore(box,room.firstChild);
}

