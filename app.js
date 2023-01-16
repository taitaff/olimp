const faqs = document.querySelectorAll(".qanda");

faqs.forEach(qanda => {
    qanda.addEventListener("click", () => {
        qanda.classList.toggle("active");
    })
})

$(document).ready(function(){
    Rotator();
})
function Rotator(start_from){
    var phrases = ["Авторские материалы","Поддержку и мотивацию","Домашние задания"];
    var total = phrases.length;
    var interval = 5000;
    if(void 0 === start_from){
        start_from = 0;
    }
 
    $(".textrotator").text(phrases[start_from]).animate({"opacity":"1"}, 1000, function(){
                if(start_from >= (total-1)){
                    setTimeout(function(){
                        $(".textrotator").animate({"opacity":"0"}, 1000, function(){
                            Rotator();
                        });
                    }, interval);
                }else{
                    start_from++;
                    setTimeout(function(){
                        $(".textrotator").animate({"opacity":"0"}, 1000,function(){
                            Rotator(start_from);
                        });
                    }, interval);
         
                }           
         
    })
}