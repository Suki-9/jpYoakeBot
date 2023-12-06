# jpYoakeBot

## 何これは... ?
東京の日の出の時間になったら「日本の夜明けぜよおおおぉぉぉぉ！」を投稿するMisskeyのBotです。

## 使い方
config.yamlを作成してindex.jsと同じディレクトリに配置してください。
jp_sunriseBot.serviceは必要な所を追記して/etc/systemd/service/に配置してください。

config.yaml
```yaml
instanceUrl: #末尾の/は要りません。

token: #tokenを生成してください、投稿のみ許可していれば大丈夫です。
```

## ライセンス
MIT License

Copyright © 2023 好き

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.