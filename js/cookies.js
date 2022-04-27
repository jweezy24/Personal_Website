var save_cookie = "";

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCookie_seconds(cname, cvalue, secs) {
    const d = new Date();
    d.setTime(d.getTime() + (secs * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function findCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let cvalue = c.split("=")[1];
            return cvalue
        }
    }
}


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function deleteCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let cvalue = c.split("=")[1];
            save_cookie = cname + "=" + cvalue + ";"
            document.cookie = cname + "=" + cvalue + ";" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT" + ";path=/";
        }
    }
}

  setCookie("test","test2",1);
  getCookie("test");
  window.alert("GETTING COOKIE AGAIN.".concat( getCookie("test")));
  deleteCookie("test");
  window.alert("GETTING COOKIE AGAIN.".concat( getCookie("test")));
  
  window.alert("Testing Local Cookie. ".concat( save_cookie ));

  window.alert("Natural Expiration Test:");
  sleep(5*1000);
  setCookie_seconds("tmp_cookie", "personal_information", 5);
  sleep(5*1000);
  window.alert("Attempting to grab cookie after natural expiration".concat( findCookie("tmp_cookie") ));


