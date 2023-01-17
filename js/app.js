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
    var interval = 4500;
    if(void 0 === start_from){
        start_from = 0;
    }
 
    $(".textgift").text(phrases[start_from]).animate({"opacity":"1"}, 1000, function(){
                if(start_from >= (total-1)){
                    setTimeout(function(){
                        $(".textgift").animate({"opacity":"0"}, 1000, function(){
                            Rotator();
                        });
                    }, interval);
                }else{
                    start_from++;
                    setTimeout(function(){
                        $(".textgift").animate({"opacity":"0"}, 1000,function(){
                            Rotator(start_from);
                        });
                    }, interval);
         
                }           
         
    })
}

$(document).ready(function(){
    Rotator2();
})
function Rotator2(start_from){
    var phrases = ["Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.",
    "Мы разработаем индивидуальную систему, чтобы Вы всегда были мотивированы на получение знаний. Также вы сможете общаться с кураторами и другими учениками, делиться своим опытом.",
    "Мы позаботились о том, чтобы ни один из наших учеников не остался голодным. Вам на выбор предоставят: овсяные печеньки, шоколадные, клубничные, банановые..."];
    var total = phrases.length;
    var interval = 4500;
    if(void 0 === start_from){
        start_from = 0;
    }
 
    $(".textgiftlittle").text(phrases[start_from]).animate({"opacity":"1"}, 1000, function(){
                if(start_from >= (total-1)){
                    setTimeout(function(){
                        $(".textgiftlittle").animate({"opacity":"0"}, 1000, function(){
                            Rotator2();
                        });
                    }, interval);
                }else{
                    start_from++;
                    setTimeout(function(){
                        $(".textgiftlittle").animate({"opacity":"0"}, 1000,function(){
                            Rotator2(start_from);
                        });
                    }, interval);
         
                }           
         
    })
}