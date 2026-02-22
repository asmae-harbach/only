const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })
        if (!user) {
            return res.status(401).json({ message: "Identifiants incorrects" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Identifiants incorrects" })
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "2d" }
        )

        return res.status(200).json({id : user._id, token : token})
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" })
    }
})

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) 
            return res.status(400).json({ message: "Tous les champs sont requis" })

        if (password.length < 6) 
            return res.status(400).json({ message: "Mot de passe trop court (min 6)" })

        const existingUser = await User.findOne({ username })
        if (existingUser) 
            return res.status(400).json({ message: "Utilisateur déjà existant" })

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            username,
            password: hashedPassword
        })

        await user.save()

        res.status(201).json({ message: "Compte créé avec succès" })

    } catch (error) {
        console.error("🚨 ERREUR SIGNUP:", error)
        res.status(500).json({ message: "Erreur serveur" })
    }
})

module.exports = router
