const { Router } = require("express");
const countriesRouter = require("./routesCountry/routesContry");

const router = Router();


router.use("/countries", countriesRouter)

module.exports = router;
