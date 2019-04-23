function notifyMe(){
    Notification.requestPermission();
    // Notification.permission === "granted"

    if(Notification.permission === "default") {
        alert("Please grant permission");
    }

    else {
        new Notification("New Mail",{body:"You have 1 unread email"});
    }
}