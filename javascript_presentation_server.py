from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route('/time')
def get_time():
    return str(datetime.datetime.now())

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/static')
def static_page():
    return app.send_static_file('static_content.html')

@app.route('/js/<path:path>')
def serve_js(path):
    return app.send_static_file('js/' + path)

@app.route('/css/<path:path>')
def serve_css(path):
    return app.send_static_file('css/' + path)

@app.route('/img/<path:path>')
def serve_img(path):
    return app.send_static_file('img/' + path)

@app.route('/html/<path:path>')
def serve_html(path):
    return app.send_static_file('html/' + path)

@app.route('/dynamic')
def dynamic_page():
    return render_template('cur_time.html',cur_time=str(datetime.datetime.now()))

if __name__ == '__main__':
    app.run()
