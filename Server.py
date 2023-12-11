from flask import * 
import IED

app = Flask("Ncript")



@app.post("/EncryptAndReturn")
def HTTP_HANDLER__EncryptAndReturn():
	posted_data = request.get_data()
	print(posted_data)
	posted_data = posted_data[posted_data.find("base64,")+8:]
	posted_data = bytearray(posted_data)
	IED.save_image_and_return_name(posted_data)
	return b"meow"


@app.route("/assets/<name>")
def HTTP_HANDLER__assets(name):
	return send_file(f"./assets/{name}")


@app.route("/")
def HTTP_HANDLER__():
	return render_template("index.html")

app.run()