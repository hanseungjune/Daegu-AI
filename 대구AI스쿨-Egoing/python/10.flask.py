from importlib.resources import contents
from flask import Flask
# import random

app = Flask(__name__)

topics = [
    {"id":1, "title":"html", "body":"html is ..." },
    {"id":2, "title":"css", "body":"css is ..." },
    {"id":3, "title":"js", "body":"js is ..." },
]          # 객체

def template(contents):
    liTags = ''
    for topic in topics:
        liTags += f'<li><a href="/read/{topic["id"]}">{topic["title"]}</a></li>'

    # return '<strong>random<strong> : ' + str(random.random())
    return f'''
        <html>
            <body>
                <h1><a href="/">WEB</a></h1>
                <ol>
                    {liTags}
                </ol>
                    {contents}
                <ul>
                    <li><a href="/create/">Create</a></li>  
                </ul>
            </body>
        </html>
    '''

@app.route("/")
def index():
    return template('<h2>Welcome</h2>Hello WEB!')

@app.route("/read/<int:id>/")
def read(id):
    title = ''
    body = ''
    for topic in topics:
        if topic['id'] == id:
            title = topic['title']
            body = topic['body']
            break
    return template(f'<h2>{title}</h2>{body}')

@app.route("/create/")
def create():
    content = '''
        <form action="/create/">
        <p><input type="text" name="title" placeholder="title"></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="create"></p>
        </form>
    '''
    return template(content)

app.run(host='0.0.0.0', debug=True)