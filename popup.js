var header_names = {
    age: "Age",
    id: "X-Varnish",
    additional: ["Server,Via,Vary"]
};


document.addEventListener('DOMContentLoaded', () => {
    cache_data = {};
    updateHeaderNames()
});

function updateHeaderNames(callback) {
    header_names.age = document.getElementById('age_name').value;
    header_names.id = document.getElementById('id_name').value;
    header_names.additional = document.getElementById('id_additional').value.split(',');
}



