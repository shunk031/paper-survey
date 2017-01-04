# Convolutional Neural Networks for Sentence Classification

## 1. どんなもの？

word2vecを用いて単語をベクトル化し、そのベクトルをシンプルなアーキテクチャのCNNに入力し、センテンスの分類を行った。

## 2. 先行研究と比べてどこがすごいの？

画像認識分野でとてもよい結果を題しているConvolutional Neural NetworkをNLPの分野に適用した。

## 3. 技術や手法の"キモ"はどこにある？

* Google Newsのワードベクトルを用いてpre-trainingを行い、各タスクに対してfine-tuningをした
* 重みのL2正則化
* Dropoutの適用

## 4. どうやって有効だと検証した？

CNNの重みの初期化方法を変えたり、pre-trainingをしたり、チャンネル数を変えたりして実験を行っている。

## 5. 議論はあるか？

* MultichannelかSingle Channelのモデルどちらがよいか
  規模の小さいデータセットに対してはmultichannelのモデルは過学習を防ぐことができた。規模の大きいデータセットに対してはfine-tuningをしなくてはならない。
  
* StaticかNon-staticの表現方法どちらがよいか
  Non-staticなSingle channelモデルと同様に、Non-staticなmulticannelモデルでもfine-tuningすることで、タスクごとにより意味のある結果を出すことができる。
  
  
## 6. 次に読むべき論文はあるか？

* [Razavian, H. Azizpour, J. Sullivan, S. Carlsson 2014. "CNN Features off-the-shelf: an Astounding Baseline." CoRR, abs/1403.6382.](https://arxiv.org/abs/1403.6382)

### 論文情報・リンク

* [Kim, Yoon. 2014. Convolutional neural networks for sentence classification. arXiv preprint arXiv:1408.5882.](https://arxiv.org/abs/1408.5882)
