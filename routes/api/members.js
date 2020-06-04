const express = require("express");
const router = express.Router();
const members = require("../../Members");

// get all members
router.get("/", (req, res) => res.json(members));

// get single member
router.get("/:id", (req, res) => {

    const found = members.some(
        member => member.id === parseInt(req.params.id)
    );

    if (found) {
    res.json(members.filter(
            member => member.id === parseInt(req.params.id)
        ));
    } else {
        res.status(400).json({msg: `No member with ID ${req.params.id}!`})
    }
});

module.exports = router;