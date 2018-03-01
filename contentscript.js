chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.varnish_age != undefined){ 
            console.log("Cached request (Aged "+request.varnish_age+"):",request.url);
        }
        /*
        if (request.requested == "reportVarnish"){
            //Code to create the div
            console.log("Received Event from extension",request);
            //addOverlayDiv();
            sendResponse({confirmation: "Successfully received event"});
        }*/
    }
);
console.log("added listener for reportVarnish");

/*
function addOverlayDiv(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id, 
            {   
                createDiv: { width: "100px", height: "100px", innerHTML: "Hello"}
            }, function(response) {
                if(response){
                    console.log(response.confirmation);
                }
            }
        );
    });
}
*/

