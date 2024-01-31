const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { prisma } = require("../db");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

router.post(
  "/signup",
  [
    check("email", "please input a valid email address").isEmail(),
    check(
      "password",
      "please input a password with a min length of 6"
    ).isLength({ min: 6 }),
    check(
      "username",
      "please input a username with a min length of 6"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password, username } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return res.status(400).json({
        errors: [{ message: "User already exists" }],
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    const token = await JWT.sign(newUser, process.env.JSON_WEB_TOKEN_SECRET, {
      expiresIn: 56770000,
    });

    return res.json({
      user: newUser,
      token,
    });
  }
);

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const user = await prisma.user.findUnique({
        where: {email},
    });
    if (!user) {
        return res.status(400).json({
            errors: [{ message: "Invalid credentials" }],
    });
}

const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
    return res.status(400).json({
        errors: [{ message: "Invalid credentials" }],
});
}

const userPayload = {
    id: user.id,
    email: user.email,
    username: user.username,

}

const token = await JWT.sign({
    id: user.id,
    email: user.email,
    username: user.username,
}, process.env.JSON_WEB_TOKEN_SECRET, {
    expiresIn: 56770000,
  });

 return res.json({
    user: userPayload,
    token,
  });
});
 router.get('/me', async (req, res) => {
    const bearerToken = req.headers.authorization;
    if(!bearerToken) return res.send(null);
    const jwt = bearerToken.split('Bearer')[1];
    if(!jwt) return res.send(null);

    let payload;
    try {
         payload = await JWT.verify(jwt, process.env.JSON_WEB_TOKEN_SECRET);
    } catch (error) {
        return res.send(null);

    }



    const user = await prisma.user.findUnique({
        where:{
            email: payload.email,
        },
        select:{
            id: true,
            email:true,
            username: true,
        }
    })
    return res.json(user);
 });
module.exports = router;
