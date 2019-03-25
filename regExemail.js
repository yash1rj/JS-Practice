let mailInput = "locAlpart0@d0man";

let validIdArr = ["mysite@ourearth.com", "my.ownsite@ourearth.org", "mysite@you.me.net"];

let invalidIdArr = ["mysite.ourearth.com", "mysite@.com.my", "@you.me.net", "mysite123@gmail.b", "mysite@.org.org", ".mysite@mysite.org", "mysite()*@gmail.com", "mysite..1234@yahoo.com"];

let pattern = /(^\w[\.]?[A-Za-z0-9!#$%&'*+-/=?^_`{|}~]+)@([a-zA-Z0-9]+(\.\w{2,3})+$)/;

function validateName(mailId,pattern) {
    for (let i=0; i<mailId.length; i++) {
        if(pattern.test(mailId[i])) {
            console.log(mailId[i]+" is Valid email");
        }
        else {
            console.log(mailId[i]+" is Invalid email");
        }
    }
}

validateName(invalidIdArr,pattern);