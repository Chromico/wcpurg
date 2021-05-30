import os
from flask import Flask, render_template, request, url_for
import stripe
import random
from flask_mail import Mail, Message



app = Flask(__name__)


app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'yourId@gmail.com'
app.config['MAIL_PASSWORD'] = '*****'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/invest')
def invest():
    return render_template('invest.html')

@app.route('/pay')
def pay():
    return render_template('checkout.html')

# @app.route('/charge', methods=['POST'])
# def charge():
#     # Amount in cents
#     amount = 500

#     customer = stripe.Customer.create(
#         email='customer@example.com',
#         source=request.form['stripeToken']
#     )

#     charge = stripe.Charge.create(
#         customer=customer.id,
#         amount=amount,
#         currency='usd',
#         description='Flask Charge'
#     )

#     return render_template('charge.html', amount=amount)

@app.route('/simpwallet', methods=['POST'])
def wallet_gen():
    # Amount in cents

    hash = random.getrandbits(256)

    print("Simp coin wallet", hash)

    email = request.form["email"]

    msg = Message('Hello', sender = 'yourId@gmail.com', recipients = [email])
    msg.body = "Here's you simp coin walllet address. Use it just like any other crypto address, {hash}"
    mail.send(msg)

    print(email)

    return render_template('index.html')


@app.route('/payment', methods=['POST'])
def checkout():

    amount = 25000

    STRIPE_PUBLISHABLE_KEY = 'pk_test_6pRNASCoBOKtIshFeQd4XMUh'  
    STRIPE_SECRET_KEY = 'sk_test_BQokikJOvBiI2HlWgH4olfQ2'

    stripe.api_key = STRIPE_SECRET_KEY
    

    customer = stripe.Customer.create(
        email=request.form['stripeEmail'],
        source=request.form['stripeToken']
    )

    charge = stripe.Charge.create(
        amount=request.form['usd'],
        currency='usd',
        customer=customer.id,
        description='A payment for the Hello World project'
    )

    return render_template('index.html')




if __name__ == '__main__':
    app.run(debug=True)