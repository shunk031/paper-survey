## Paper Survey

![logo](assets/logo.png)

[![Build Status](https://travis-ci.org/shunk031/paper-survey.svg?branch=master)](https://travis-ci.org/shunk031/paper-survey)
[![GitHub issues](https://img.shields.io/github/issues/shunk031/paper-survey.svg)](https://github.com/shunk031/paper-survey/issues?q=is%3Aopen+is%3Aissue)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/shunk031/paper-survey.svg)](https://github.com/shunk031/paper-survey/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub stars](https://img.shields.io/github/stars/shunk031/paper-survey.svg?style=flat-square)](https://github.com/shunk031/paper-survey/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/shunk031/paper-survey.svg?style=social)](https://twitter.com/intent/tweet?text=shunk031/paper-survey:%20Survey%20of%20previous%20research%20on%20machine%20learning%20(especially%20Deep%20Learning)%20in%20Japanese&url=https%3A%2F%2Fgithub.com%2Fshunk031%2Fpaper-survey)

機械学習 (特にDeep Learning) に関する先行研究および関連研究をまとめています。

---

## Contents

- [Paper Summary of Computer Vision](https://shunk031.github.io/paper-survey/category/cv/)
- [Paper Summary of Natural Language Processing](https://shunk031.github.io/paper-survey/category/nlp/)
- [Paper Summary of Others](https://shunk031.github.io/paper-survey/category/others/)

---

## Rules

* 読もうと思っている論文は[Issue](https://github.com/shunk031/paper-survey/issues)に上げる
* [ProjectsのRelated Works](https://github.com/shunk031/paper-survey/projects/2)に論文を読んだかどうかを管理する
* [format.md](https://github.com/shunk031/paper-survey/blob/master/format.md)にしたがって論文の要旨をまとめる

## Abount Summary Format

- [高速で論文がバリバリ読める落合先生のフォーマットがいい感じだったのでメモ](http://lafrenze.hatenablog.com/entry/2015/08/04/120205)

```
---
layout: post
title:  "論文タイトル"
date:   YYYY-MM-DD
categories: CV NLP Others
---

## 1. どんなもの？

## 2. 先行研究と比べてどこがすごいの？

## 3. 技術や手法の"キモ"はどこにある？

![Figure 1]({{ site.baseurl }}/assets/img/(cv, nlp, others)/(title)/figure1.png)

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

* [著者，"タイトル，" ジャーナル名，voluem，no.，ページ，年](論文リンク)
```

## Example

- [先端技術とメディア表現1 #FTMA15](http://www.slideshare.net/Ochyai/1-ftma15) from [Yoichi Ochiai](http://www.slideshare.net/Ochyai)

![](https://raw.githubusercontent.com/shunk031/paper-survey/master/assets/img/FTMA15-1-page-65.png)

## Build

- Use rbenv and ruby-build for build this repo locally

``` shell
$ rbenv install 2.4.0
$ mkdir ~/.rbenv/versions/paper-survey-dev
$ ruby-build 2.4.0 ~/.rbenv/versions/paper-survey-dev
$ cd paper-survey
$ rbenv local paper-survey-dev
$ gem install bundle
$ bundle install
$ jekyll server
# then visit http://127.0.0.1:4000/paper-survey/ in your browser to preview the repo
```
