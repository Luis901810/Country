const { Router } = require("express");
const countriesRouter = require("./routesCountry/routesContry");
const routerActivity = require("./routesActivity/routesActivity");

const router = Router();


router.use("/countries", countriesRouter)
router.use("/Activity", routerActivity)

module.exports = router;
