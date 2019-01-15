const sb = require('stellarburrito')
let masterAccount = sb.StellarSdk.Keypair.fromSecret('SD4XRWJ367PLQGERB5V3IG5KZHARQLWFIJLEPLICREOAFTP54PKPT7HI')
sb.accountOperations.createAccount(masterAccount.secret())
    .then((result) => {
        console.log('Public Key of generated Account  ' + result.publicKey + '\n\rPrivate Key of generated Account  ' + result.privateKey)
    })
    .catch((error) => {
        console.log(error)
    })