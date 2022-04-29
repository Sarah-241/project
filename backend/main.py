# from flask import Flask, jsonify, make_response
# #import requests
# import os
# #import simplejson as json

# app = Flask(__name__)

# @app.route("/", methods=['GET'])
# def hello():
#     ''' Greet the user '''

#     return "Hey! The service is up, how about doing something useful"

# if __name__ == '__main__':
#     app.run(port=5000,debug=True)

from flask import Flask, jsonify, make_response,request
import requests
import os
import simplejson as json

app = Flask(__name__)

def load_data():
    with open('database/userdb.json') as f: #specify the file name
        return json.load(f)

@app.route("/adduser", methods=['POST'])
def write():

    def write_json(client_data, filename='database/userdb.json'):
        with open(filename,'r+') as file:
            file_data = json.load(file)
            file_data["users"].append(client_data)
            file.seek(0)
            json.dump(file_data, file, indent = 4)
        
    _json = request.json
    write_json(_json)
    return jsonify("registration successful")
    

@app.route("/users", methods=['GET'])
def readusers():
    
    json_data = load_data()
    return json_data

@app.route("/user/<id>", methods=['GET'])
def readuser(id):
    print(id)
    print(type(id))
    json_data = load_data()
    for obt in json_data["users"]:
        if obt['id'] == int(id):
            print(obt)
            return obt
   	

@app.route('/login',methods=['POST'])
def login():
    f = 0
    
    _json = request.json
    _username = _json["username"]
    _password = _json["password"]
    
    json_data = load_data()
    
    for obj in json_data["users"]:
	    if obj['username'] == _username and obj['password'] == _password:
                f = 1
                print(obj['count'])
                obj['count'] = obj['count']+1
                print(obj['count'])
                json_data["count"] = obj['count']
                with open("database/userdb.json","w") as jsonFile:
                    json.dump(json_data,jsonFile)
                print(obj['id'])
                return str(obj['id'])
     
    if f!=1:
            print(0)
            return jsonify("error")
        
       
          
        
        

                    
			

if __name__ == '__main__':
    app.run(port=5000, debug=True)