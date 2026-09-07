// ページ内リンク
$(function() {
    var headerHeight = 0;
    // 余白を開けたい場合は + 10を追記する。
    var urlHash = location.hash;
    // ハッシュ値があればページ内スクロール
    if (urlHash) {
        // 外部リンクからのクリック時
        $('body,html').stop().scrollTop(0);
        // スクロールを0に戻す
        setTimeout(function() {
            // ロード時の処理を待ち、時間差でスクロール実行
            var target = $(urlHash);
            var position = target.offset().top - headerHeight;
            $('body,html').stop().animate({
                scrollTop: position
            }, 500);
            // スクロール速度ミリ秒
        }, 100);
    }
    $('.contents_box a[href^="#"]').click(function() {
        // 通常のクリック時（.contents_box a）
        var href = $(this).attr("href");
        // ページ内リンク先を取得
        var target = $(href);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({
            scrollTop: position
        }, 500);
        // スクロール速度ミリ秒
        return false;
        // #付与なし、付与したい場合は、true
    });
});

// スクロールトップ
$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            // スクロールが100に達したらボタン表示
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function() {
        // スクロールしてトップ
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        // スクロール速度ミリ秒
        return false;
    });
});
