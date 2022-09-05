$(function(){
    // よくある質問アコーディオン
    $('.faq__link').click(function(){
        $(this).parent().next().slideToggle();
        $(this).toggleClass('faq__link--open');
        return false;
    });
});