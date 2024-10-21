# KEYS FARM (PYTHON)

## Previous configuration

```bash
cp sample.env env
# Obtain a token with chat:read active in https://twitchtokengenerator.com/ and replace it on .env
```

### Linux

```bash
sudo apt-get install python3-tk python3-dev
python3 -m venv env
source env/bin/activate
pip3 install -r requirements.txt
python3 main.py
```

### Windows

```bash
python -m venv env
.\env\Scripts\activate
pip install -r requirements.txt
python main.py
```

## Update requeriments file

```bash
pip freeze > requirements.txt
```