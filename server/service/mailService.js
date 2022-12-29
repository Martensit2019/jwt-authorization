const nodemailer = require('nodemailer')

class mailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        // user: "Martensit2019@yandex.ru",
        user: process.env.SMTP_USER,
        // pass: "Vfhntycbn2019",
        pass: process.env.SMTP_PASSWORD,
      },
    })
  }
  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Активация аккаунта на ' + process.env.API_URL,
      text: '',
      html:
      `      
      <div>
        <h1>Для активации перейдите по ссылке</h1>
        <a href="${link}">${link}</a>
      </div>
      `
    })
  }
}

module.exports = new mailService()
