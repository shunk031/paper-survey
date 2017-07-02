# Annealed Dropout Training of Deep Networks

## 1. どんなもの？

学習が進むに連れてネットワーク内ノードのDropout率を徐々に減少させる「Annealed Dropout」を提案．

## 2. 先行研究と比べてどこがすごいの？

Dropoutを用いた学習は，複数のニューロンが繰り返し同じ特徴を識別してしまう「co-adapting」を抑制する．またネットワークの表現能力を制限することで過学習を避けることができる．

本研究ではデータ量が豊富な場合の学習において，高いDropout率(e.g. 0.5)からゼロまで徐々に減少させることで，予測精度を大幅に向上させる．

## 3. 技術や手法の"キモ"はどこにある？

* エポック数，ミニバッチ数でDropout率を決定するAnnealing Schedule

![Figure 1](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/Annealed_Dropout_Training_of_Deep_Networks/figure1.png)

## 4. どうやって有効だと検証した？

先行研究であるMaxout Deep Neural Networksと本研究のAnnealed Dropoutを用いたNeural Networkについて，Word Error Rate(WER)を比較している．

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

Maxout Networkについて
* [Ian J Goodfellow, David Warde-Farley, Mehdi Mirza, Aaron Courville, and Yoshua Bengio, “Maxout networks,” arXivpreprint arXiv:1302.4389, 2013.](https://arxiv.org/abs/1302.4389)

### 論文情報・リンク

* [Rennie, Steven J., Vaibhava Goel, and Samuel Thomas. "Annealed dropout training of deep networks." Spoken Language Technology Workshop (SLT), 2014 IEEE. IEEE, 2014.](https://pdfs.semanticscholar.org/c2d7/8722ebac92766f1154497d8424108d906ae3.pdf)
