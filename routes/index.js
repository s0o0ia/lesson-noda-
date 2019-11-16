const { Router } = require('express')
const router = Router();
const path = require('path');

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public','index.html'));
})


router.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public','about.html'));
})

router.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public','register.html'));
})


module.exports = router;