const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');


app.get("/", function(req, res){
    res.send("chal rah hai")
});

app.listen(3000, function() {
    console.log("its running");
})