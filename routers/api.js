exports.router = function(route)
{
    route.post('/register', (req,res)=>
    {
        route.getData()
        console.log(req.body)

        res.write('ini post')
        res.end()
    })
}