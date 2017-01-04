# Text Categorization with Support Vector Machines: Learning with Many Relavant Features

## 1. どんなもの？

Support Vector Machines(SVMs)を用いてテキストのカテゴリ分類を行なった。

## 2. 先行研究と比べてどこがすごいの？

テキスト分類というタスクは「入力が高次元」、「関連性の少ない特徴量」、「スパースな文書ベクトル」、「線形分離不可能」といった性質を持つが、先行研究に比べてこういった性質により適した結果を出すことができた。

## 3. 技術や手法の"キモ"はどこにある？

* ストップワードを取り除く
* information gainを基準とした文書ベクトルの作成

## 4. どうやって有効だと検証した？

複数のデータセットに対して、従来手法であるNaive BaysやRocchio、k-NNとSVMsを適用した結果、SVMsが良い結果を出した。

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

* [Y.Yang and J. Pedersen. A comparative study on feature selection in text-categorization. In international Conference on Machine Learning (ICML), 1997.]()

### 論文情報・リンク

* [Thorsten Joachims. "Text categorization with support vector machines: Learning with many relevant features." In Proc. of the European Conference on Machine Learning (ECML), pages 137–142, 1998](http://www.cs.cornell.edu/people/tj/publications/joachims_98a.pdf)
