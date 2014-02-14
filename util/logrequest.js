module.exports = function(req) {
    console.log("Request to: " + req.url, {query:req.query, body:req.body});
}