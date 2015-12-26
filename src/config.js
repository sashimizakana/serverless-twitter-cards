module.exports = {
    //画像が無かった場合のデフォルト画像URL
    DEFAULT_IMAGE_URL:"http://1.bp.blogspot.com/-UduEldnKRKM/Ui3koEbJ3pI/AAAAAAAABUo/WjSGKqZs3t0/s1600/IMGP1399-001%25E3%2581%25AE%25E3%2582%25B3%25E3%2583%2594%25E3%2583%25BC.jpg"
    //画像を絞り込むためのjQueryのセレクタ
    ,IMAGE_SELECTER:'.post-body img'
    //正規表現を指定すると記事URLを制限する（しないと誰でも勝手に使える）
    ,URL_MATCH:/^https?:\/\/b\.denkizakana\.com/
}