$(function (){
    step = 1;
    $('.next').click(function (){
        $(window).scrollTop(0);
        step = step + 1;
        switch (step){
            case 2: 
                    $('.account_form').css('display','none');
                    $('.personnel_step').css('display','block');
                    $('.form_step_scroll_bar ul li:nth-child(2)').removeClass('form_step_scroll_bar_waiting');
                    $('.form_step_scroll_bar ul li:nth-child(2)').addClass('form_step_scroll_bar_activ');
                    $('.desc_form_account').css('display','none');
                    $('.desc_form_perso').css('display','block');
                    $('.form_step_item_content_icon img').attr('src','img/perso.png');
                    break;
            case 3: 
                    $('.personnel_step').css('display','none');
                    $('.banc_step').css('display','block');
                    $('.form_step_scroll_bar ul li:nth-child(3)').removeClass('form_step_scroll_bar_waiting');
                    $('.form_step_scroll_bar ul li:nth-child(3)').addClass('form_step_scroll_bar_activ');
                    $('.desc_form_perso').css('display','none');
                    $('.desc_form_banc').css('display','block');
                    $('.form_step_item_content_icon img').attr('src','img/banc.png');
                    break;
        }
    });
    $('.pre').click(function (){
        $(window).scrollTop(0);
        step = step - 1;
        switch (step){
            case 1: 
                    $('.personnel_step').css('display','none');
                    $('.account_form').css('display','block');
                    $('.form_step_scroll_bar ul li:nth-child(2)').removeClass('form_step_scroll_bar_activ');
                    $('.form_step_scroll_bar ul li:nth-child(2)').addClass('form_step_scroll_bar_waiting');
                    $('.desc_form_perso').css('display','none');
                    $('.desc_form_account').css('display','block');
                    
                    $('.form_step_item_content_icon img').attr('src','img/account.png');
                    break;
            case 2: 
                    $('.banc_step').css('display','none');
                    $('.personnel_step').css('display','block');
                    $('.form_step_scroll_bar ul li:nth-child(3)').removeClass('form_step_scroll_bar_activ');
                    $('.form_step_scroll_bar ul li:nth-child(3)').addClass('form_step_scroll_bar_waiting');
                    
                    $('.desc_form_banc').css('display','none');
                    $('.desc_form_perso').css('display','block');
                    
                    $('.form_step_item_content_icon img').attr('src','img/perso.png');
                    break;
        }
    });
});