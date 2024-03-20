const nodemailer = require('nodemailer');

const mailerConfig = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'trinhhienngo306@gmail.com',
        pass: 'vpbx eqlk jvxm ukyn'
    }
});

let mailContent = {
    from: 'trinhhienngo306@gmail.com',
    to: 'hienntph27799@fpt.edu.vn',
    subject: 'Demo Email',
    text: 'Read That Shit!!!'
}

const sendEmailFunction = () => {
    mailerConfig.sendMail(mailContent, (err, info) => {
        if(err){
            console.log('Lỗi gửi mail: ' + err);
        }
        else{
            console.log('Đã gửi thành công: ' + info);
        }
    })
};

module.exports = {sendEmailFunction}