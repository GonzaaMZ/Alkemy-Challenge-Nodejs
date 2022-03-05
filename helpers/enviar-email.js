const sgMail = require('@sendgrid/mail')

const enviarEmail = async (correo = '') => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: correo, // Change to your recipient
      from: process.env.EMAIL, // Change to your verified sender
      subject: 'Bienvenido!!!',
      text: 'Te damos la bienvenida la API del Mundo Disney diseñada por el equipo de desarrolladores de Alkemy',
      html: '<strong>Te damos la bienvenida la API del Mundo Disney diseñada por el equipo de desarrolladores de Alkemy</strong>',
    }
    
    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
      })
      .catch((error) => {
        console.error(error)
      })
    
}


module.exports = {
    enviarEmail
}