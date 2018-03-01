var cache_data = {}; 

var header_names = {
    age: "Age",
    id: "X-Varnish",
    additional: ["Server,Via,Vary"]
};

function send_varnish_info(details,age){
    chrome.tabs.sendMessage(details.tabId,{
        "varnish_age":age,
        "url":details.url,
        "method":details.method
    });
}

chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
        chrome.runtime.sendMessage("reportVarnish", {"varnish_age":"X"});

        for(var k in details.responseHeaders){
            header = details.responseHeaders[k];
            if( header.name == header_names.age){
                var v = Number(header.value);
                if(v > 0){
                    console.log("recieved cached headers",details);
                    send_varnish_info(details,v);
                }
            }
        }
    }, {urls:["<all_urls>"]},  ["responseHeaders"]
);


