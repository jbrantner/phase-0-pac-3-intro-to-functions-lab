function shout(string) {
    return string.toUpperCase();

}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}




function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
    return "I can't hear you!";
}
    if (string === string.toUpperCase()) {
    return "YES INDEED!"
}
    if (string === "Let's have dinner together!") {
    return "I would love to!"
}
}



//I need this to take "string" and change it:
//  hello = I can/'t hear you!
//  HELLO - YES INDEED!
//  Let\'s have dinner together! = I would love to!