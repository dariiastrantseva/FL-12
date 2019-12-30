const usmail = 'user@gmail.com';
const admail = 'admin@gmail.com';
const us_pas = 'UserPass';
const ad_pas = 'AdminPass';
const five = 5;
const six = 6;
let pass;
let oldPass;
let newPass;
let change;
let mail = prompt('Your email,please');
if (mail === '') {
    alert('Canceled');
} else if (mail.length < five) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (usmail !== mail && admail !== mail) {
    alert('I don\'t know you')
} else {
    pass = prompt('Your password,please');
    if (pass === '') {
        alert('Canceled')
    } else if (mail === usmail && pass !== us_pas) {
        alert('Wrong password')
    } else if (mail === admail && pass !== ad_pas) {
        alert('Wrong password');
    } else {
        change = confirm('Do you want to change your password?');
        if (pass && !change) {
            alert('You have failed the change');
        } else if (change) {
            oldPass = prompt('Old Password, please');
            if (oldPass === '') {
                alert('Canceled');
            } else if (mail === usmail && oldPass !== us_pas) {
                alert('Wrong password')
            } else if (mail === admail && oldPass !== ad_pas) {
                alert('Wrong password');
            } else { 
                newPass = prompt('New Password, please'); 
            }
            if (newPass === '') {
                alert('Canceled');
            } else if (newPass.length < six) {
                alert('It\'s too short password. Sorry.');
            } else if (newPass !== prompt('Enter new password again')) {
                alert('You wrote the wrong password');
            } else {
                alert('You have successfully changed your password.');
            }
        }
    }
}