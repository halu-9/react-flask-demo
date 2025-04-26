開発環境起動手順

１．
backendディレクトリに移動して、次のコマンドを実行
```
. venv/bin/activate
```
で仮想環境を有効化

2.
```
python3 hello.py
```
でサーバーを起動

3.
```
brew services start postgresql
```
でPostgreSQLを起動

終了は次の通り
```
brew services stop postgresql
```