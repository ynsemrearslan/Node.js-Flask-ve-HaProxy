
from flask import Flask
import os
app=Flask(__name__)
port=int(os.environ.get('PORT',4444))

@app.route("/staj")
def helloProxy():
    print("Hello Word form Flask!")
    return "Hello Word form Flask!"
@app.route("/flask")
def staj():
    print("Hello Word form Flask!")
    return "Hello Word form Flask!"
if __name__=='__main__':
    app.run(host='0.0.0.0',port=port)

