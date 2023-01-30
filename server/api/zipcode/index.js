const router = require("express").Router();
const Zipcode = require("../../db/models/Zipcode");
const User = require("../../db/models/Zipcode");

router.get("/:zipcode", async (req, res, next) => {
  try {
    const zipcode = await Zipcode.findOne({
      where: {
        zipcode: req.params.zipcode,
      },
    });
    res.send(zipcode);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.table(req.body)
    const newZipCode = await Zipcode.create(req.body);
    res.status(201).send(newZipCode);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
