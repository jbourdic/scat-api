var index = {
    home: function (req, res) {
        console.log('je passe');
        res.status(200).json({id: "ca marche"});
    }
};
module.exports = index;