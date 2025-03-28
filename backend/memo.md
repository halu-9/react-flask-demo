python(flask)+React+PostgreSQL+SQLAlchemyでの開発環境構築メモ

1．venvディレクトリ作成（初回のみ）
```
python3 -m venv venv
```
※このコマンドは、venvディレクトリがない場合（つまり初回）のみ実行する

2．仮想環境を有効化
```
. venv/bin/activate
```

3.flaskのインストール（一度でOK）
```
python3 -m ensurepip --upgrade
```
でpipをアップデート
```

```
python3 -m pip install flask
```
でflaskをインストール

```
python3 -m pip show flask
```
でflaskのバージョンを確認（インストール確認）

4.
```
python3 /Users/r-shibata/Documents/projects/react-flask-demo/backend/hello.py
```
コマンドでサーバーを起動