from flask import Flask,render_template
from flask_socketio import SocketIO, emit
from settings import NAMESPACE
from NET import *

app = Flask(__name__)

'''app.config['CORS_AUTOMATIC_OPTIONS'] = True
app.config['CORS_SUPPORTS_CREDENTIALS'] = True

CORS(app)'''
socketio = SocketIO()
socketio.init_app(app)

@socketio.on('connect', namespace=NAMESPACE)
def connect():
    emit('response', {'data': 'Connected'})
    print("Client connected")

@socketio.on('disconnect', namespace=NAMESPACE)
def disconnect():
    print('Client disconnected')

@socketio.on('query',namespace = NAMESPACE)
def translate(message):
    print(message)
    isEnglish = message['isEnglish']
    content = message['content']
    success = True
    try:
        res = 英转鱼(content) if isEnglish else 鱼转英(content)
    except Exception as e:
        res = "Error:"+str(e)
        success=False
    
    print('translated:',res)
    emit('results', {'content': res,'success':success})

@app.route("/",methods=['GET'])
def hello_world():
    return render_template("index.html")

if __name__=="__main__":
    print("haha --@DaivdYuan")
    socketio.run(app,host='localhost',port=5000,debug=True,log_output=True)
    print("MAIN","quitting")
