function markRepost()
{
  var linktext = document.getElementById('linktext').value
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {linktext:linktext}, function(response){
      });
  });
}
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button1');
    link.addEventListener('click', function() {
        markRepost();
    });
});
