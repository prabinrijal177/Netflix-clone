const router = require('express').Router();
const {check, validationResult} = require('express-validator');

router.post("/signup",[
    check ("email", "please input a valid email address").isEmail(),
    check ("password", "please input a password with a min length of 6").isLength({min: 6}),
    check("username", "please input a username with a min length of 6").isLength({min: 6}),

], async(req, res) =>{

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }
   res.send("valid")

    const {email, password, username} = req.body
});

module.exports = router;