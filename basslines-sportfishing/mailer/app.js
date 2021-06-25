        const express = require('express');
        const bodyParser = require('body-parser');
        const exphbs = require('express-handlebars');
        const nodemailer = require('nodemailer');
        const path = require('path');

        
        const app = express();

        app.engine('handlebars', exphbs());
        app.set('view engine', 'handlebars');

        app.use('/static', express.static(path.join(__dirname, 'static')));

        app.use(bodyParser.urlencoded({ extended: false}))
        app.use(bodyParser.json())

        app.get('/', (req, res) =>{
            res.send('BookATrip');
        });

        app.post('/send', (req, res => {
            const output = ` 
            <p> You have a new customer request</p>
            <h3> Contact and trip details <h3>
            <ul>
                <li>Name: ${req.body.Fname}</li>
                <li>Name: ${req.body.lname}</li>
                <li>Name: ${req.body.email}</li>
                <li>Name: ${req.body.phone}</li>
            </ul> 
            `;

            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                  user: testAccount.user, // generated ethereal user
                  pass: testAccount.pass, // generated ethereal password
                },
              });
            
              // send mail with defined transport object
              let info = await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: "bar@example.com, baz@example.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
              });
            
              console.log("Message sent: %s", info.messageId);
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            
              // Preview only available when sending through an Ethereal account
              console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            }
        });

        app.listen(4000, () => console.long('Server started...'));