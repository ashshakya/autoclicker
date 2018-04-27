chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    var a = document.getElementsByClassName('bsitem');
    for (var i = 0; i < a.length; i++) 
    {
      var b = document.getElementsByClassName('bsitem')[i].getElementsByTagName('a')
      for (var j = 0; j < b.length; j++)
      {
        if(b[j].innerText==message.linktext)
        {
          console.log(b[j].href + " : " + b[j].innerText);
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open("GET", b[j].href,false);  
          xmlHttp.send(null);
        }
      }
    }
    location.reload()
  }
);