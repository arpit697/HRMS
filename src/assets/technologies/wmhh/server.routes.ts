import { APP_BASE_HREF } from "@angular/common";
import { Router } from "express";
import { existsSync } from "fs";
import { join } from "path";
import {
  getPageTitle,
  handleDiscoverPage,
  handleImageContent,
  handleLandingPage,
  handleMainContent,
  handleSectorPage,
  handleUrgentPage,
  handleVideoContent,
  setDefaultData,
} from "server.meta";

const serverRouter: Router = Router();

serverRouter.get("/", handleLandingPage);
serverRouter.get("/discover", handleDiscoverPage);
serverRouter.get("/urgent-help", handleUrgentPage);
// sectorinfo
serverRouter.get("/sectors/:sectorId", handleSectorPage);
// main
serverRouter.get("/resources/:contentId", handleMainContent);
// image
serverRouter.get("/resource/article/:contentId", handleImageContent);
// video
serverRouter.get("/resource/video/:contentId", handleVideoContent);
serverRouter.get("/resource/audio/:contentId", handleVideoContent);

//quiz
serverRouter.get("/resource/quiz/:contentId", handleImageContent);

serverRouter.get("/verify-email/:token", (req, res) => {
  const distFolder = join(process.cwd(), "dist/WMHH/browser");
  console.log("came in verify email");

  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";
  res.sendFile(join(distFolder, "index.html"));
});

serverRouter.get("*", (req, res) => {
  const distFolder = join(process.cwd(), "dist/WMHH/browser");

  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";
  res.render(
    indexHtml,
    {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    },
    async (err, html) => {
      let title = getPageTitle(req.url);
      html = html.replace(/\$OG_TITLE/g, title);
      html = setDefaultData(html);
      res.send(html);

      // next();
    }
  );
});
export default serverRouter;
