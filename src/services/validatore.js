//////form validation /////////////////////
  export default{
   nameRules: [
    v => !!v || 'Name is required',
    v => v.length <= 10 || 'نام باید کمتر از 10 کاراکتر باشد',
  ],
  emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+/.test(v) || 'ایمیل معتبر وارد کنید',
  ],
  passRules: [
    
    v => !!v || 'password is required',
    v => v.length >= 6 || 'گذرواژه باید بیش از 6 کراتر باشد',
    v => v.match(/^[A-Za-z]\w{7,14}$/) || 'گذرواژه باید ترکیبی از عدد و حروف باشد',
  ]
  }