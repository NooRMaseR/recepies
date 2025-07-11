from flask import Flask, request, Response, render_template
from pydantic import BaseModel, EmailStr, ValidationError
from pydantic_core import ErrorDetails
from flask_mail import Mail, Message
from dotenv import load_dotenv
from flask_cors import CORS
import os, json

load_dotenv()

app = Flask(__name__)
app.config['MAIL_SERVER'] = os.getenv("MAIL_SERVER")
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')

CORS(
    app, 
    methods=["POST"],
    origins=["http://localhost:3000"]
)
MAIL = Mail(app)

class EmailData(BaseModel):
    email: EmailStr
    subject: str
    name: str
    body: str
    
def formate_error(error: ErrorDetails) -> dict:
    return {
        "type": error['type'],
        "error_field": error['loc'][0],
        "error_message": error['msg']
    }

@app.post('/send-email/')
def send_email() -> Response:
    """
    Recive an email and send it back to the owner
    """

    # Get and validate the email data from the request
    try:
        form = EmailData(**request.get_json())
    except ValidationError as e:
        errors = tuple(map(formate_error, e.errors()))
        return Response(json.dumps(errors), 400, content_type="appliction/json")
    except Exception as e:
        return Response(json.dumps({'message': 'Somthing went wrong, please try again or contact the developer'}), 400, content_type="appliction/json")
    
    # Validate the email data
    if not form.email or not form.subject or not form.body or not form.name:
        return Response(json.dumps({'message': 'Invalid email data'}), 400, content_type="appliction/json")
    
    # Create a message object
    TEMP = render_template('email.html', **form.model_dump())
    msg = Message(form.subject, recipients=[os.getenv("MAIL_USERNAME", '')])
    msg.html = TEMP
    # msg.body = form.body

    # Send the email
    try:
        MAIL.send(msg)
        return Response(json.dumps({'message': 'Email sent successfully'}), 200, content_type="appliction/json")
    except Exception as e:
        return Response(json.dumps({'message': "error sending you email"}), 500, content_type="appliction/json")

if __name__ == "__main__":
    app.run(debug=True)
