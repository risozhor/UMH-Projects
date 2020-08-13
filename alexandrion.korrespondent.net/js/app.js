// const rootscript = document.getElementById("jq");
// const rootdiv = document.createElement('div');
// rootdiv.innerHTML=`
//
// <script src="./js/jquery.onepage-scroll.js"></script>
//
// <script src="./js/bootstrap.min.js"></script>
// `
// rootscript.after(rootdiv);



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


let formEl = document.getElementById('form');
let inputEls = formEl.querySelectorAll('input[mask]');
window.masks = [].map.call(inputEls, function (el) {
    return new Nebo15Mask.MaskedInput(el, el.getAttribute('mask'), {
        placeholder: el.getAttribute('with-placeholder'),
        showOnFocus: el.getAttribute('show-on-focus'),
        hideOnBlur: el.getAttribute('hide-on-blur'),
        showAlways: el.getAttribute('show-always'),
    });
});



    $( ".button-send" ).click(function() {

        if ($(window).width() <= '991'){
            if ($("#textareamob").val()!="") {
                $(".busy").removeClass('hidden');
                setTimeout(() => $(".busy").addClass('hidden'), 2000);
                setTimeout(addQuestionToChat(), 2000);
            }
        }
        else {
            if ($("#textarea").val()!="") {
                $(".busy").removeClass('hidden');
                setTimeout(() => $(".busy").addClass('hidden'), 2000);
                setTimeout(addQuestionToChat(), 2000);
            }
        }

    });
    //element.addEventListener(handleEvent, { passive: false });
let dialogwindow;
let firstdialog=0;
let dialogfromstorage;
let dialogueID;



if ($(window).width() <= '991'){firstdialog=1;}
$(document).ready(function() {

    if ($(window).width() >= '992'){
        $(".main").onepage_scroll({
            sectionContainer: "section",
            responsiveFallback: false,
            afterMove: function(index) {
                GoToChat()
            },
            loop: false
        });
        $(".scr1, .scr2, .scr3").remove();

    }
    else {
        $(".main").remove();
        $(".dec").detach().appendTo('.arrows_dec');
        $(".inc").detach().appendTo('.arrows_inc');

    }



    dialogfromstorage = localStorage.getItem('dialog');//передали див из localStorage
if(firstdialog!=1){$('.dialog').html(dialogfromstorage);//записали его из переданной переменнойe
 }

    div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));





    $('#age').modal({backdrop: 'static', keyboard: false});
});

function GoToChat(){

    firstdialog=localStorage.getItem('firstdialog');
    //console.log("firstdialog: "+firstdialog);

    // setTimeout(() => $('#first').remove(), 600);
    if (firstdialog!=1){

        //alert('wellcomen')
        function first_thinkerinit(){
            //Аристотель
            $(".thinker").text('Аристотель');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Аристотель</b><br>Привет, дитя мое!</p></div>' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinkerinit(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Платон</b><br>Пливетствую. О мой Зевс, как человечество в эти клопки то маленькие научилось попадать. То ли дело от руки писать, на пергаменте.</p></div>' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinkerinit(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Сократ</b><br>Не дремли. Задавай свой вопрос сию минуту - в познании истина жизни кроется.</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);

        }
        first_thinkerinit();
        setTimeout(() => second_thinkerinit(), 5800);
        setTimeout(() => third_thinkerinit(), 12200);
        function writetostorage(){
            dialogwindow=$('.dialog').html();
            localStorage.setItem('dialog', dialogwindow);
        }
        setTimeout(() => writetostorage(), 18200);
        firstdialog=1;
        localStorage.setItem('firstdialog', firstdialog);

    }

}
//добавление вопроса в чат и ответа на него
function addQuestionToChat(){
    //
    getRandomInt(1, 4);

    //добавление вопроса
        let textarea;
    if ($(window).width() <= '991'){
        textarea = $("#textareamob").val();
    }
    else {textarea = $("#textarea").val();}

        $("#hidden").val(textarea);
        let request='<div class="row">' +
            '           <div class="col-2 "><div class="chat-member"></div></div>' +
            '           <div class="col-9"><p class="questiontxt">'+textarea+'</p></div>' +

            '       </div>';

        function addrequest(){
            $('.dialog:last-child').append(request);
            let div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        }
        setTimeout(() => addrequest(), 2000);
        //добавление ответа

    //console.log(dialogueID);
    if(dialogueID==1){
        function first_thinkerC1(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Платон</b><br>Скажу, что данная дилемма не из легких, понадобиться некоторые время для её решения."</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinkerC1(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Сократ</b><br>Чуваки, скажите ему про конкурс</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinkerC1(){
            //Аристотель
            $(".thinker").text('Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Аристотель</b><br>Чуваки?</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinkerC1(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Сократ</b><br>В их столетии "чувак" - это приятельская форма обращения друг к другу</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinkerC1(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Платон</b><br>Вылетело из головы, спасибо Сократ. Друг, вопрос твой автоматически участвует в конкурсе от Alexandrion! ' +
                'Твой вопрос может участвовать сразу в 3-х рубриках: "Самый оригинальный вопрос философам", "Самый смешной вопрос философам" и ' +
                '"Самый насущный вопрос философам" (Детальнее читай на вкладке "Призы" и "Правила").' +
                ' 27 декабря на сайте мы опубликуем результаты конкурса, и ты сможешь выиграть 4-х дневный тур на двоих в Румынию ' +
                '("Все включено!") и другие подарки»"</p></div>' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +

                '</div>' +
                '<div class="row">' +
                '<div class="col-12 text-center">' +
                '<button type="button" class="btn btn-info" data-toggle="modal" data-target="#registration">Учавствововать в конкурсе</button>' +
                '</div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        first_thinkerC1();
        setTimeout(() => second_thinkerC1(), 5800);
        setTimeout(() => third_thinkerC1(), 12200);
        setTimeout(() => fourth_thinkerC1(), 19200);
        setTimeout(() => fifth_thinkerC1(), 25200);
    }
    else if (dialogueID==2){
        function first_thinkerC2(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Сократ</b><br>Эх, любознательная нынче молодежь пошла.</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinkerC2(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Платон</b><br>И не говори. В наше время боялись слово лишнее произнести</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinkerC2(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Сократ</b><br>Ну, в 399 году до нашей эры интернет отсутствовал. Диоген вон до сих пор в бочке живет. Технологии раскрепостили общество. Разве это не прекрасно?</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinkerC2(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Платон</b><br>Я недавно с Илоном Маском дискутировал на эту тему, он говорил - сей прогресс может плохо закончиться</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinkerC2(){
            //Аристотель
            $(".thinker").text('Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Аристотель</b><br>Раз мои коллеги умно увиливают от ответа, тебе удалось их озадачить! Друг, ' +
                'вопрос твой автоматически участвует в конкурсе от Alexandrion! Твой вопрос может участвовать сразу в 3-х рубриках: ' +
                '"Самый оригинальный вопрос философам", "Самый смешной вопрос философам" и "Самый насущный вопрос философам" ' +
                '(Детальнее читай на вкладке "Призы" и "Правила"). 27 декабря на сайте мы опубликуем результаты конкурса, и ты сможешь выиграть ' +
                '4-х дневный тур на двоих в Румынию ("Все включено!") и другие подарки»"</p></div>' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +

                '</div>' +
                '<div class="row">' +
                '<div class="col-12 text-center">' +
                '<button type="button" class="btn btn-info" data-toggle="modal" data-target="#registration">Учавствововать в конкурсе</button>' +
                '</div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        first_thinkerC2();
        setTimeout(() => second_thinkerC2(), 5800);
        setTimeout(() => third_thinkerC2(), 12200);
        setTimeout(() => fourth_thinkerC2(), 19200);
        setTimeout(() => fifth_thinkerC2(), 25200);
    }
    else if (dialogueID==3){
        function first_thinkerC3(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Платон</b><br>Меньше знаешь, крепче спишь...</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinkerC3(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Сократ</b><br>Платон?!</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinkerC3(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Платон</b><br>Что?</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinkerC3(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Сократ</b><br>Будь вежливым!</p></div>' +

                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinkerC3(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Платон</b><br>Ладно, ладно</p></div>' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function sixth_thinkerC3(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Платон</b><br>Это самый блестящий, образцовый, франтоватый и диффундирующий вопрос, ' +
                'который я когда либо слышал в жизни. Я лично принимаю его в наш конкурс от Alexandrion! Ты можешь поучаствовать ' +
                'сразу в 3-х рубриках: "Самый оригинальный вопрос философам", "Самый смешной вопрос философам" и ' +
                '"Самый насущный вопрос философам" (Детальнее читай на вкладке "Призы" и "Правила").' +
                ' 27 декабря на сайте мы опубликуем результаты конкурса и определим того, кто выиграет 4-х дневный тур на двоих в ' +
                'Румынию ("Все включено!") и другие подарки."</p></div>' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function seventh_thinkerC3(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-9"><p><b>Сократ</b><br>Так-то лучше</p></div>' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +

                '</div>' +
                '<div class="row">' +
                '<div class="col-12 text-center">' +
                '<button type="button" class="btn btn-info" data-toggle="modal" data-target="#registration">Учавствововать в конкурсе</button>' +
                '</div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        first_thinkerC3();
        setTimeout(() => second_thinkerC3(), 5800);
        setTimeout(() => third_thinkerC3(), 12200);
        setTimeout(() => fourth_thinkerC3(), 19200);
        setTimeout(() => fifth_thinkerC3(), 25200);
        setTimeout(() => sixth_thinkerC3(), 32200);
        setTimeout(() => seventh_thinkerC3(), 38200);
    }

localStorage.setItem('firstdialog', 1);
}
//получаем ID вопроса по клику
$('.question a').click(function () {
    let scroll_el = $(this).attr('href');
    let answer;
    let request;
    let div;
    switch (scroll_el) {
        //вопрос 1
        case "#q1":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Где находится центр Вселенной?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Везде. Дело вот в чем. Вселенная начала своё существование еще с "Большого взрыва", который случился 13,7 млрд лет назад. Однажды взорвавшись она продолжает расширятся и по сей день. Независимо от того, в какой части Вселенной вы находитесь, все объекты в пространстве будут расширяться и удаляться от вас с одинаковой скоростью.</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Везде. Excellent, monsieur Platon!</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker(){
            //Аристотель
            $(".thinker").text('Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>优秀，先生柏拉图</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Grazie amici miei!</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker();
            setTimeout(() => second_thinker(), 5800);
            setTimeout(() => third_thinker(), 12200);
            setTimeout(() => fourth_thinker(), 19200);
            break;
        case "#q2":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Что появилось первым: яйцо или курица?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker2(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Сей вопрос достаточно распространен. Ответь ему, мой ученик</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker2(){
            //Аристотель
            $(".thinker").text('Аристотель ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель </b><br>Яйцо! Дело в том, сын мой, что животные размножались с помощью яиц задолго до появления кур как вида. Когда два животных одного вида спариваются, они передают своему потомству гены в форме ДНК.</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker2(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Согласен с предыдущем письменом. Но стоит еще добавить, что это "копирование" никогда не бывает на 100% точным. Посему организмы каждого нового поколения отличаются от предыдущего. Эти крошечные изменения в ДНК на протяжении тысяч поколений и создают новые виды животины.</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker2(){
            //Платон
            $(".thinker").text('Платон пьет Alexandrion и');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Эх, сейчас бы курочку закусить. Эврика, братья мои! Еще вопросы?</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker2();
            setTimeout(() => second_thinker2(), 5800);
            setTimeout(() => third_thinker2(), 12200);
            setTimeout(() => fourth_thinker2(), 19200);
            break;
        case "#q3":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">2.\tСколько мегапикселей у человеческого глаза?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker3(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>576 мегапикселей. Человеческий глаз и вправду работает как цифровой фотоаппарат. Вот только, разрешение у него гигантское. При нормальном освещении и здоровых глазах человек легко различает две линии, находящиеся друг к другу под углом в 0,6 градуса.</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker3(){
            //Аристотель
            $(".thinker").text('Аристотель ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель </b><br>Bravissimo, Платон. Кстати, про угол в 0,6 градуса не знал. Откуда информация?</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker3(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Все просто. За 2446 лет я все-таки научился гуглить.</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker3();
            setTimeout(() => second_thinker3(), 5800);
            setTimeout(() => third_thinker3(), 12200);
            break;
        case "#q4":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Почему бутерброд всегда падает маслом вниз?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker4(){
            //Аристотель
            $(".thinker").text('Аристотель ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Получается так, друг мой, что центр тяжести бутерброда смещается к стороне, намазанной маслом. ' +
                'Исходя из этого физического постулата, бутерброд падает именно намазанной стороной. Кроме того, даже падая вниз ненамазанной стороной, ' +
                'упругий кусок хлеба обычно отскакнет и полноценно соприкаснется с чистым полом на кухне своей верхней частью. Только не надо пытаться повторить это! ' +
                'Более 2,2 млрд человек на Земле все еще живет в нищете. </p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker4(){
            //Платон
            $(".thinker").text('Платон ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Как просветлял своих встречных попутчиков Ницше: ' +
                '"Из всех сокровищ знание всех драгоценнее, потому что оно не может быть ни похищено, ни потеряно, ни истреблено."</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker4(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Коллега мой, это высказывание не принадлежит Ницше. Это известное индийское изречение.</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker4(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Хм...я созерцал данную цитату на Facebook. Неужто наврали?</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinker4(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Мир онлайна жесток и противоречив.</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker4();
            setTimeout(() => second_thinker4(), 5800);
            setTimeout(() => third_thinker4(), 12200);
            setTimeout(() => fourth_thinker4(), 19200);
            setTimeout(() => fifth_thinker4(), 25200);
            break;
        case "#q5":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Как удалить весь интернет?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker5(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Великолепнейший из ответов на данный вопрос даст старина Диоген. С тех пор как ему удалось обзавестись интернетом, он не вылазит из бочки</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker5(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>ДИОГЕН!!!</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker5(){
            //Диоген
            $(".thinker").text('Диоген вылазит из бочки и ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/diogen.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Диоген</b><br>Что?</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker5(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Подскажи любознательным. Как удалить весь интернет? </p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinker5(){
            //Диоген
            $(".thinker").text('Диоген');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/diogen.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Диоген</b><br>Эх, мои начинающие злоумышленники, интернет, к великому счастью современных миллениалов, полностью децентрализован. ' +
                'Это значит, что он не управляется из одного центра, в который можно запросто запустить уничтожающую ракету. ' +
                'В нем нет незаменимых компонентов. Один узел сети дублируется сотнями такими же, только разбросанными по разным частям планеты. При этом, интернет невозможно сломать программно, запустив в него вирус. ' +
                'Чтобы уничтожить его, Вам придется перерезать все кабели на дне океана (Только не забудьте прихватить с собой специальные пневматические кусачки, поскольку такой кабель состоит из десятка плотных слоев, ' +
                'которые не перекусит даже белая акула), а затем взорвать все интернет-сервера на всех континентах Земли.</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker5();
            setTimeout(() => second_thinker5(), 5800);
            setTimeout(() => third_thinker5(), 12200);
            setTimeout(() => fourth_thinker5(), 19200);
            setTimeout(() => fifth_thinker5(), 25200);
            break;
        case "#q6":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Какого цвета зеркало?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker6(){
            //Аристотель
            $(".thinker").text('Аристотель');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Зелёного. Мы понимаем, нам и самим было трудно поверить, что зеркало не "белое" и не "серебряное". ' +
                'Конечно, идеальное зеркало "белым" и должно быть, ведь если оно идеальное, оно идеально отражает солнечные лучи. ' +
                'Но поскольку никакого идеального мира не существует, не существует и идеального зеркала. </p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker6(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Полностью согласен! ' +
                'Реальное зеркало отражает не так много света, и он отображается в диапазоне 510 нанометров. ' +
                'Это соответствует зелёному свету спектра.</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker6(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Тут нечего добавить.</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker6();
            setTimeout(() => second_thinker6(), 5800);
            setTimeout(() => third_thinker6(), 12200);
            break;
        case "#q7":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Чей голос мы слышим в голове при чтении?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker7(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Госпожа интрига постучалась в чат к просветленным. Каким же голосом Вы прочтете мой ответ?</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker7(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Я чувствую как ваш интерес возрастает словно искорка огня под промозглым ветром...</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker7(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Хватит графоманства, Сократ. Скорей дай истину ищущему её!</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker7(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>В наших коллег ученых на этот счет существует особое понятие и зовется оно - "эфферентная копия". ' +
                'Это предсказывающий сигнал, произведенный мозгом, который помогает объяснить, почему, например, другие люди могут щекотать нас, ' +
                'а сами мы этого делать не можем. Сигнал предсказывает наши собственные движения и эффективно сокращает ощущения от щекотки. ' +
                'Абсолютно такой же механизм срабатывает, когда наша зрительная система обрабатывает печатные буквы. ' +
                'Звук, который мы слышим в голове при чтении, является ничем иным как внутренним предсказанием нашего собственного голоса.</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinker7(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Ну вот, другое дело!</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker7();
            setTimeout(() => second_thinker7(), 5800);
            setTimeout(() => third_thinker7(), 12200);
            setTimeout(() => fourth_thinker7(), 19200);
            setTimeout(() => fifth_thinker7(), 25200);
            break;
        case "#q8":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Почему невозможно чихнуть с открытыми глазами?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker8(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Апчхи! Кажись аллергия на хорошие вопросы началась.</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker8(){
            //Аристотель
            $(".thinker").text('Аристотель');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Будьте здоровы, учитель</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker8(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Спасибо! </p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker8(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Здесь апостериори все проще простого. ' +
                'Наш мозг контролирует процесс чихания и одновременного закрытия глаз одним участком. ' +
                'В момент спазма мышц, отвечающих за чихание, идет одновременный спазм и мышц, регулирующих деятельность глаз, заставляя их закрываться.</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinker8(){
            //Аристотель
            $(".thinker").text('Аристотель');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Апчхи! Кажется, вы заразили и меня, учитель... </p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker8();
            setTimeout(() => second_thinker8(), 5800);
            setTimeout(() => third_thinker8(), 12200);
            setTimeout(() => fourth_thinker8(), 19200);
            setTimeout(() => fifth_thinker8(), 25200);
            break;
        case "#q9":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Почему мизинец на ногах страдает больше всего?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker9(){
            //Аристотель
            $(".thinker").text('Аристотель');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>О! Точно такой же вопрос мне задавал Кевин Харт (Известный американский актер и комик) в Twitter:</p>' +
                '<div class="quote"><blockquote><span>«Что за фигня с этим мизинцем? Это же ад! Мы должны беречь этот палец от всего, серьезно. ' +
                'Я клянусь, что вы зря пренебрегаете своим мизинцем, может быть, это самая страшная боль на планете. ' +
                'Я не понимаю, почему в момент удара ты чувствуешь невероятную боль, будто все сломалось, а уже через секунду чувствуешь себя нормально. ' +
                'Помогите мне понять, что за фигня, пожалуйста…».</span></blockquote></div></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker9(){
            //Аристотель
            $(".thinker").text('Аристотель');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Как и его, вразумлю я и Вас. Мозг попросту не воспринимает мизинец как часть своего тела, ' +
                'посему в момент удара Вы как бы о нем забываете и не успеваете им увернуться. Когда-то, когда не было супермаркетов, ' +
                'фриланса и офисной работы, а люди, прикрываясь лопухами, охотились за животными, все пять фаланг пальцев действительно ' +
                'были необходимы для эффективного хождения и бега. Современный человек находится в максимально безопасной среде и все 5 ' +
                'пальцев на ступнях ему вроде как уже и не нужны. Сам мизинчек - настоящий рудимент. Ненужный орган. Мозг не старается его "оберегать" и не ' +
                'встраивает в программу эффективного владения телом в целях безопасности. </p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker9(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Предлагаю тост: "За то, чтоб мизинчек и душа не страдали никогда!"</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }

            first_thinker9();
            setTimeout(() => second_thinker9(), 5800);
            setTimeout(() => third_thinker9(), 12200);
            break;
        case "#q10":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Есть ли люди, которые помнят себя в чреве матери?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker10(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Чур не я!</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker10(){
            //Аристотель
            $(".thinker").text('Аристотель');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Чур не я!</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker10(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Да что ж такое. Что ж вам, горсточкой просветления с человеком поделиться жалко?</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker10(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Нет. Взрослый человек способен помнить себя лишь лет с трех-четырех, не раньше. ' +
                'По-заумному этот феномен зовется «инфантильная амнезия»: память о самых первых годах жизни стирается без возможности восстановления. </p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinker10(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Ладно. Заинтересовал. И почему же?</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function sixth_thinker10(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Как показали исследования, самые ранние воспоминания мозга уничтожаются ' +
                'его формирующимися клетками. Этот процесс, известный среди ученых как "нейрогенез", происходит с нами и по сей день, ' +
                'но в пору младенчества он раскрывается на все 100%. Таким образом новые нейроны как бы «выталкивают» появившиеся памятные ячейки. </p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function seventh_thinker10(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>)</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function eighth_thinker10(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Зачем ты поставил скобку? </p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function ninth_thinker10(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>LOL</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function tenth_thinker10(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Хватит вещать петроглифами. Что еще за "LOL"? </p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function eleventh_thinker10(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Ок</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker10();
            setTimeout(() => second_thinker10(), 5800);
            setTimeout(() => third_thinker10(), 12200);
            setTimeout(() => fourth_thinker10(), 19200);
            setTimeout(() => fifth_thinker10(), 25200);
            setTimeout(() => sixth_thinker10(), 32200);
            setTimeout(() => seventh_thinker10(), 38200);
            setTimeout(() => eighth_thinker10(), 44200);
            setTimeout(() => ninth_thinker10(), 50200);
            setTimeout(() => tenth_thinker10(), 56200);
            setTimeout(() => eleventh_thinker10(), 62200);
            break;
        case "#q11":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Как работает механизм любви?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker11(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Чтимые меня коллеги, предлагаю соединить наши мысли ' +
                'воедино и разложить её Величество "любовь" на 3 основных этапа нейрохимии. Я начну с фенилэтиламина.</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker11(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Это некий стимулятор, по своей структуре похожий на дофамин, ' +
                'адреналин, норадреналин, и даже на амфетамин, если говорить о синтетических веществах. ' +
                'К примеру, Вы видите красивую девушку или парня, говорите с ней/с ним, а Феня (я его так называю) ' +
                'без Вашего ведома, иногда в тему, а иногда (всегда) не в тему, включает состояние дрожащих рук, ' +
                'краснеющих щек, желание видеть, трогать и заполучить объект симпатии. </p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker11(){
            //Аристотель
            $(".thinker").text('Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Принимаю эстафету. За фенилэтиламином включается дофаминовая мотивационная система. </p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker11(){
            //Аристотель
            $(".thinker").text('Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Вы встретились с этим человеком и теперь ' +
                'во чтобы то не стало ищете способ встретиться с ним вновь. ' +
                'Разумеется, вечно организм не может выдерживать такую горячку. В случае если объект симпатии не дается, ' +
                'включается синдром отмены и Вы со временем приходите в норму и ищете новые объекты. В случае если объект влюбленности все же ' +
                'удалось заполучить, мозг адаптируется к тому, что вы теперь не просто ходите и думаете о нем – он постоянно рядом с Вами. </p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinker11(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Финальный удар наносит окситоцин</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function sixth_thinker11(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Этот гормон включает финальные механизмы радости от того, что рядом человек, ' +
                'с которым комфортно. Он формирует привязанность – душевную и физическую. Окситоцин снижает первичный влюбленный угар, ' +
                'но продолжает взаимодействовать с дофаминовой системой – "мотивация любви" остается, только теперь вам нужно не ' +
                'просто найти партнера, а сделать ему хорошо и оставаться рядом до печального или счастливого конца. </p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function seventh_thinker11(){
            //Платон
            $(".thinker").text('Платон пьет Alexandrion и');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Пью за нашу триногу, товарищи мои.</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }

            first_thinker11();
            setTimeout(() => second_thinker11(), 5800);
            setTimeout(() => third_thinker11(), 12200);
            setTimeout(() => fourth_thinker11(), 19200);

            setTimeout(() => fifth_thinker11(), 25200);
            setTimeout(() => sixth_thinker11(), 32200);
            setTimeout(() => seventh_thinker11(), 38000);
            break;
        case "#q12":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Где голуби прячут своих птенцов?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker12(){
            //Аристотель
            $(".thinker").text('Аристотель');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Воробьи - это и есть дети голубей. </p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker12(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Ты что ж это, шут придворный?</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker12(){
            //Аристотель
            $(".thinker").text('Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Вижу сарказм не успел раскрыться вам в полный рост.</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker12(){
            //Аристотель
            $(".thinker").text('Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Ответ прост. Аж целых 6 недель после вылупления из яйца, ' +
                'птенцы голубей не могут покинуть гнездо. По-началу голубята попросту не приспособлены к самостоятельной жизни. ' +
                'А когда это все-таки становится возможным и они вылетают, чтобы полакомиться хлебушком - ' +
                'от взрослых голубей их уже не отличить.</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinker12(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>А где ж при этом находятся сами птенчики?</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function sixth_thinker12(){
            //Аристотель
            $(".thinker").text('Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Элементарно, мой дорогой учитель, элементарно! ' +
                'Сами голубиные гнезда великолепно упрятаны в городах - в щелях домов, под козырьками подъездов и крыш. ' +
                'В общем, там, куда человек обычно не заглядывает.</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function seventh_thinker12(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Молодец! Ты прошел экзамен. ' +
                'Теперь еще одна навязчивая диллема жителей мегаполисов успешно раскрыта.</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker12();
            setTimeout(() => second_thinker12(), 5800);
            setTimeout(() => third_thinker12(), 12200);
            setTimeout(() => fourth_thinker12(), 19200);
            setTimeout(() => fifth_thinker12(), 25200);
            setTimeout(() => sixth_thinker12(), 32200);
            setTimeout(() => seventh_thinker12(), 38000);
            break;
        case "#q13":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Если у яда заканчивается срок годности, то он становится еще более ядовитым или перестает им быть?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker13(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Можно я отвечу?</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker13(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Да вы хайпожор, месье Сократ.</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker13(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Кто?</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker13(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Цитируя великую Википедию, могу сказать: ' +
                '"Тот, кто использует широко обсуждаемые темы, события ради привлечения внимания к себе"</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinker13(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Да Зевсе упаси! ' +
                'Я - лишь доставщик знаний из своего разума в разум искателя правды.</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function sixth_thinker13(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Ну да... Отвечай уже, мы тут все заждались!</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function seventh_thinker13(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Точнейший ответ на Ваш вопрос зависит всего от двух факторов:\n<br><br>' +
                '1.\tКакое именно токсичное вещество \n<br>' +
                '2.\tКакой прописан срок его хранения\n<br><br>' +
                'Если это будет цианид, то даже спустя 100 лет после окончания срока годности им можно будет отравить любого человека. ' +
                'Та и почти все неорганические ядовитые вещества такие: сулема, соли таллия, свинца способны храниться неимоверно долго, ' +
                'не изменяя при этом уровня своей токсикации. Чего не скажешь про белковые органические токсины. Их состав крайне раним на воздух, ' +
                'поэтому некоторое время спустя они прекращают считаться ядовитыми. Они - это змеиный яд, ботокс и другие.\n</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker13();
            setTimeout(() => second_thinker13(), 5800);
            setTimeout(() => third_thinker13(), 12200);
            setTimeout(() => fourth_thinker13(), 19200);
            setTimeout(() => fifth_thinker13(), 25200);
            setTimeout(() => sixth_thinker13(), 32200);
            setTimeout(() => seventh_thinker13(), 38200);
            break;
        case "#q14":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">Почему обозначением неизвестного служит именно X?</p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');

        function first_thinker14(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Кто скинет ответ со своим письменом последним, тот исполняет песенку неудачника.</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker14(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Я - первый. Аль-Хорезми - автор первой книги об алгебре ' +
                '"Об исчислении аль-джабра и аль-мукабалы", был персом из Хорезма и использовал в своей роботе арабский алфавит. ' +
                'Неизвестное он решил обозначать буквой ۺ (Шин), начальной буквой слова "шалан", обозначающего "нечто". ' +
                'В Европу его сочинения и сама идея алгебры попали транзитом через Испанию и при адаптации книг, ' +
                'переводчикам пришлось заменить букву ۺ на букву х, ведь аналога первой в испанском языке не было.</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker14(){
            //Платон, Аристотель
            $(".thinker").text('Платон, Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Так Х добрался до Декарта, который сел, ' +
                'все систематизировал и предложил использовать последние буквы латинского алфавита (x, y, z) ' +
                'для обозначения неизвестных величин в уравнениях.</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker14(){
            //Платон
            $(".thinker").text('Платон');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Так не честно. Я еще не говорил: "Старт!"</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function fifth_thinker14(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Великая истина, мой друг, гласит: ' +
                '"Пытаясь других загнать в ловушку, будь осмотрителен и по сторонам смотри, ' +
                'ведь можешь сам в ней оказаться". Пой песенку.</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function sixth_thinker14(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>You are the champions, my friends\n<br>' +
                'And you\'ll keep on fighting \'til the end\n<br>' +
                'You are the champions\n<br>' +
                'You are the champions\n<br>' +
                'But not me...\n</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
        function seventh_thinker14(){
            //Аристотель
            $(".thinker").text('Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br> )</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker14();
            setTimeout(() => second_thinker14(), 5800);
            setTimeout(() => third_thinker14(), 12200);
            setTimeout(() => fourth_thinker14(), 19200);
            setTimeout(() => fifth_thinker14(), 25200);
            setTimeout(() => sixth_thinker14(), 32200);
            setTimeout(() => seventh_thinker14(), 38000);
            break;
        case "#q15":
            request='<div class="row">' +
                '           <div class="col-9"><p class="questiontxt">На какой вопрос вы не знаете ответ? </p></div>' +
                '           <div class="col-2 "><div class="chat-member"></div></div>' +
                '       </div>';
            $('.dialog:last-child').append(request);
            div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));
            $("#textarea").val('');
            $("#textareamob").val('');
        function first_thinker15(){
            //Сократ
            $(".thinker").text('Сократ');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);

            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>На субъективный. Никто из нас не может дать точный ответ на вопрос, ' +
                'в котором присутствуют личные пристрастия. К примеру: "Кто круче, Месси или Роналду?", "Надаль или Федерер?" ' +
                'и т.д. Мы оперируем фактами, а не эмоциями. </p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function second_thinker15(){
            //Платон
            $(".thinker").text('Платон');
            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/platon.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Платон</b><br>Да, но я все-таки полагаю, что Роналду намного круче Месси.</p></div>' +
                '</div>';

            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function third_thinker15(){
            //Аристотель
            $(".thinker").text('Аристотель');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/aristotel.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Аристотель</b><br>Статистика говорит об обратном.</p></div>' +
                '</div>';
            function addanswer(){$('.dialog:last-child').append(answer);div = $(".dialog");div.scrollTop(div.prop('scrollHeight'));}
            setTimeout(() => addanswer(), 5600);
        }
        function fourth_thinker15(){
            //Сократ
            $(".thinker").text('Сократ');

            //имитация печати философом
            setTimeout(() => $(".printing").removeClass('hidden'), 1000);
            setTimeout(() => $(".printing").addClass('hidden'), 3000);
            setTimeout(() => $(".printing").removeClass('hidden'), 3500);
            setTimeout(() => $(".printing").addClass('hidden'), 5500);
            answer = '<div class="row">' +
                '<div class="col-2 ">' +
                '<div class="chat-member">' +
                '<img src="images/sokrat.png" alt=""></div></div>' +
                '<div class="col-9"><p><b>Сократ</b><br>Вот видите.</p></div>' +
                '</div>';
            function addanswer(){
                $('.dialog:last-child').append(answer);
                div = $(".dialog");
                div.scrollTop(div.prop('scrollHeight'));
                //перезапись localstorage
                dialogwindow=$('.dialog').html();//прочитали див
                localStorage.setItem('dialog', dialogwindow);//записали его в localStorage
            }
            setTimeout(() => addanswer(), 5600);
        }
            first_thinker15();
            setTimeout(() => second_thinker15(), 5800);
            setTimeout(() => third_thinker15(), 12200);
            setTimeout(() => fourth_thinker15(), 19200);
            break;
        // case "#q17":

        //     break;
        default:
        //    alert( "Нет таких значений" );
    }
    return false;
});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   dialogueID = Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення

}

const form = document.querySelector('.sub');
const username = document.querySelector("input[name='fio']");
const email = document.querySelector("input[name='email']");
const phone = document.querySelector("input[name='phone']");
const hidden = document.querySelector("input[name='hidden']");

if ($("#form")){
    form.addEventListener('submit', async (e) =>{
        e.preventDefault();
            fetch('https://oskarmsapi.umh.ua/alexandrion/question', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username.value,
                    email: email.value,
                    question: hidden.value,
                    phone: phone.value
                })
            }).then(async (data) => {
                if(data.status === 200){

                    $("#note").html('');
                    $('#registration').modal('hide');

                } else {
                    let nott= await data.json();
                    if(nott.phone!="undefined"){
                        $("#note").html(nott.phone);
                    }
                    if(nott.email!=undefined){
                        $("#note").html(nott.email);
                    }

                }
            });


    });
}




const renderQuestions = document.querySelector('#result');
const pageInc = document.querySelector('.inc');
const pageDec = document.querySelector('.dec');

if(renderQuestions){
    let dataQuestion = [];
    let currentPage = 1;
    let allCount = 0;
    const countPerPage = 8;

    const fetchData = async (page) => {
        const response = await fetch(`https://oskarmsapi.umh.ua/alexandrion/userquestions/${countPerPage}/${page}`);
        // const response = await fetch(`http://192.168.7.39:2700/alexandrion/userquestions/${countPerPage}/${page}`);
        const { data, count } = await response.json();
        dataQuestion = data;
        allCount = count;
        renderQuestions.innerHTML = '';
    };

    const render = () => {
        dataQuestion.forEach((item, index) => {
            renderQuestions.innerHTML += `
                <div class="row">
                    <div class="col-1">${currentPage > 1 ? ((currentPage * countPerPage) - countPerPage) + (index + 1) : index + 1}</div>
                    <div class="col-2">${item.username}</div>
                    <div class="col-8 col-md-6">${item.question}</div>
                    <div class="col-md-3 hidden-xs"> ${(item.createdAt).split('T')[0]}</div>
              </div>
          
        `;
        });
        f();
    };

    fetchData(currentPage).then(() => {
        render();
    });

    pageInc.addEventListener('click', () => {
        if (currentPage >= (Math.ceil(allCount / countPerPage))) {

            return 0;
        }
        fetchData(currentPage += 1).then(() => {
            render();
        });
    });

    pageDec.addEventListener('click', () => {
        if (currentPage <= 1) {
            return 0;
        }
        fetchData(currentPage -= 1).then(() => {
            render();
        });
    });
    function f() {
        if(currentPage<=1){
            $(".left-btn").addClass('disabled');
        }
        else {
            $(".left-btn").removeClass('disabled');
        }

        if(currentPage>=Math.ceil(allCount / countPerPage)){
            $(".right-btn").addClass('disabled');
        }
        else {
            $(".right-btn").removeClass('disabled');
        }
    }

}

