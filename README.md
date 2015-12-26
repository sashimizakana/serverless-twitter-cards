# Twitter-cardsとかつくるやつ

## 概要

AWS Lambda + Amazon API Gatewayを使って放置しておくだけで安価に、   
Twitter-cardsとかOGPの画像とか、ブログ記事から手抜きして自動生成するやつ。  
ブログの記事のURLをクエリにつけてアクセスすると、先頭の画像かデフォルト画像にリダイレクトする。

## 環境

- AWS Lambda  
- Amazon API Gateway

## 詳細

対象のURLのsrc/config.jsのIMAGE_SELECTERで指定したセレクタのimgの先頭のSRCを返すだけ。  
なければDEFAULT_IMAGE_URLに指定したURLを返す。  
で、これをLambdaで動かして、API Gateway経由でブログの記事からアクセスする。  
あらかじめ、ブログの記事のヘッダのメタ情報には対象のAPIを記事のURLをクエリにつけて呼ぶようにしておく。  
（自分はBloggerでやってるけど、ほかのブログサービスでもきっと同じことやれると思う）  
そうすっと、ツイッターとかでつぶやかれたら、ページのメタ情報経由でAPI Gatewayにアクセスされて画像が返却される。  

ちょっと前まではAPI Gatewayにプログラムの実行結果でレスポンスヘッダ帰ることができなかったのだけど、  
最近（2015年12月）から可能になったので作ってみた。  
