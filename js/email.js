function sendEmail(){
     var name =  document.getElementById('name').value;
     var email = document.getElementById('email').value;
     var phoneNumber = document.getElementById('phoneNumber').value;
     var message = document.getElementById('message').value;
     if(name == null || name == ''){
         alert("Please enter name!");
         document.getElementById('name').focus();
         return;
     }
     if(phoneNumber == null || phoneNumber == '' || phoneNumber.length !=10 || !phoneNumber.match("[6789][0-9]{9}")){
         alert("Please enter valid 10 digit Phone Number!");
         document.getElementById('phoneNumber').focus();
         return;
     } 
     var matcher = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(email == null || email == '' || !email.match(matcher)){
         alert("Please enter valid Email Id!");
         document.getElementById('email').focus();
         return;
     }
     var body = "Name : " + "<strong>" + name + "</strong>" + ",<br/>" +
                 "Email : " + email + ",<br/>" +
                 "Phone Number : " + phoneNumber + ",<br/>" + 
                 "Message : " + message + "<br/>";
    Email.send({
        SecureToken : '5cfa90d3-7d4a-4fcc-b751-302a1943b841',
        To : 'Thesnehcarecompany@gmail.com',
        //To : 'balram.rajput505@gmail.com',
		From : 'snehacare12@gmail.com',
		Subject : "Sneh Care Contact us!",
		Body : body,    
    })
    .then(function(message){
        alert("Thanks for your feedback!");
        document.getElementById("name").value='';
        document.getElementById("email").value='';
        document.getElementById("phoneNumber").value='';
        document.getElementById("message").value='';
    });
}