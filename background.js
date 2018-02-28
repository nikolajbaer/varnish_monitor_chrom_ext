var cache_data = {}; 

var header_names = {
    age: "Age",
    id: "X-Varnish",
    additional: ["Server,Via,Vary"]
};

chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
        chrome.runtime.sendMessage("reportVarnish", {"varnish_age":"X"});

        for(var k in details.responseHeaders){
            if( k.name == header_names.age){
                chrome.runtime.sendMessage("reportVarnish", {"varnish_age":k.value});
            }
        }
    }, {urls:["<all_urls>"]},  ["responseHeaders"]
);


