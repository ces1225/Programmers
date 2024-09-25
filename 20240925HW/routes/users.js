const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const { body, param , validationResult } = require('express-validator');

// jwt / dotenv 모듈 생성
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

router.use(express.json()); // http 외 모듈 'json' 사용

const validate = (req, res, next) => {
    const err = validationResult(req)

    if (err.isEmpty()){
        return next();
    } else {
        return res.status(400).json(err.array())
    }
}

// 로그인
router.post(
    '/login',
    [
        body('email').notEmpty().isEmail().withMessage("이메일을 확인하세요."),
        body('password').notEmpty().isString().withMessage("비밀번호를 확인해 주세요."),
        validate
    ] 
    , function(req,res) {
        const {email, password} = req.body
        
        let sql = `SELECT * FROM users WHERE email = ?`
        conn.query(sql,email,
            function (err, results) {
                if (err) {
                    console.log(err)
                    return res.status(400).end();
                }

                var loginUser = results[0]

                if (loginUser && loginUser.password == password) {
                        //token 발급 및 설정 
                        const token = jwt.sign({
                            email: loginUser.email,
                            name : loginUser.name
                        }, process.env.PRIVATE_KEY,{
                            expiresIn: '30m',
                            issuer : 'eunseok'
                        });
                        
                        // cookie 발급 및 설정 
                        res.cookie("token", token , {
                            httpOnly : true
                        })

                        console.log(token)
                        res.status(200).json({
                            message : `${loginUser.name}님 로그인 되었습니다.`
                        })  
                } else {
                    res.status(403).json({
                        message : "이메일 또는 비밀번호가 틀렸습니다."
                })
            }           
        }) 
})

// 회원 가입
router.post(
    '/join',
    [
        body('email').notEmpty().isEmail().withMessage("이메일을 확인하세요."),
        body('name').notEmpty().isString().withMessage("이름을 확인해 주세요."),
        body('password').notEmpty().isString().withMessage("비밀번호를 확인해 주세요."),
        body('contact').notEmpty().isString().withMessage("연락처를 확인해 주세요."),
        validate
    ] 
    , function(req,res) {
            const {email, name, password, contact} = req.body
            
            let sql = `INSERT INTO users (email, name, password, contact) VALUES (?, ?, ?, ?)`
            let values = [email,name,password,contact]
            conn.query(sql, values,
                function (err, results) {
                    if (err) {
                        console.log(err)
                        return res.status(400).end();
                    }
                    res.status(201).json(results)    
                }
            ) 
        }
)


router
    .route('/users/')
    // 회원 개별 조회
    .get(
        [
            body('email').notEmpty().isEmail().withMessage("이메일을 확인하세요."),
            validate
        ]
        , function(req,res) {
            let {email} = req.body

            let sql = `SELECT * FROM users WHERE email = ?`
            conn.query(sql,email,
                function (err, results) {
                    if (err) {
                        console.log(err)
                        return res.status(400).end();
                    }
                    res.status(200).json(results)
                }
            ) 
        }
    )
    // 회원 탈퇴
    .delete(
        [
            body('email').notEmpty().isEmail().withMessage("이메일을 확인하세요."),
            validate
        ]
        , function(req,res) {
            let {email} = req.body
            
            let sql = 'DELETE FROM users WHERE email = ? '
            conn.query(sql, email, 
                function (err, results) { 
                    if (err) {
                        console.log(err)
                        return res.status(400).end();
                    }

                    if (results.affectedRows == 0) {
                        return res.status(400).end()
                    } else {
                        res.status(200).json(results)
                    }
                }
            );
        }
    )

module.exports = router