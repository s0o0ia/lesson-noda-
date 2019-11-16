const { Router } = require('express')
const router = Router();

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})




module.exports = router;