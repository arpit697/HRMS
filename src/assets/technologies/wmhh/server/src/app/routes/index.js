const { Router } = require("express");
const {
  render,
  renderImageContent,
  renderVideoContent,
  renderMainContent,
  renderSectorContent,
  renderLandingPage,
  renderDiscoverPage,
  renderUrgentHelpPage,
} = require("../controller");

const router = Router();

router.get("/resource/article/:contentId", renderImageContent);
router.get("/resource/video/:contentId", renderVideoContent);
router.get("/resources/:contentId", renderMainContent);
router.get("/sectors/:sectorId", renderSectorContent);
router.get("/", renderLandingPage);
router.get("/discover", renderDiscoverPage);
router.get("/urgent-help", renderUrgentHelpPage);

//SPECIFIC SECTOR

router.use(render);

module.exports = router;
