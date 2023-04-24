var week=new Date().getDay();

day=document.getElementById("today");

// day.textContent='星期'+week;

var addButton= document.getElementById('add');

addButton.addEventListener('click', function(){
    OpenPopBoardPlan();
});

//开启弹出窗口
function OpenPopBoardPlan(){
    $('.pop-board-lesson-pool').css("display", "block");
    $('.black_overlay').css("display", "block");
    $('.add-lesson-btn').css("transform", "rotate(135deg)")
    // $('.black_overlay').css("display", "block");
}