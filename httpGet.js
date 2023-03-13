let options={
    method:"Get"
};

fetch("https://gorest.co.in/public-api/users",options)

.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
});