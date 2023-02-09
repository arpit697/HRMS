import { environment } from "src/environments/environment";

import fetch from "node-fetch";
import { APP_BASE_HREF } from "@angular/common";
import { existsSync } from "fs";
import { join } from "path";

const fetchApi = async function (url) {
  const apiUrl = `${environment.API_BASE_PATH}user/${url}`;
  // console.log(apiUrl);
  const { data } = await fetch(apiUrl, {
    headers: {
      api_key: `WmHhFreshWOrK`,
    },
  }).then(
    (resp) => {
      return resp.json();
    },
    (error) => {
      console.log("errrororo", error);
    }
  );
  return data;
};
//comment
export const setDefaultData = (html) => {
  const defaultData = {
    title: "Workplace Mental Health Hub",
    url: environment.url,
    image: `${environment.url}/assets/images/small-landing-page-banner.png`,
    twitterCard:
      "Workplace mental health has never been more important. BC’s Hub for Workplace Mental Health is here to help.",
    description:
      "Workplace mental health has never been more important. BC’s Hub for Workplace Mental Health is here to help.",
    siteName: "",
  };

  html = html.replace(/\$OG_TITLE/g, defaultData.title);
  html = html.replace(/\$META_DESCRIPTION/g, defaultData.description);
  html = html.replace(/\$OG_IMAGE/g, defaultData.image);
  html = html.replace(/\$OG_SITE/g, defaultData.siteName);
  html = html.replace(/\$TWITTER/g, defaultData.description);

  return html;
};
export const splitAndTitleCase = (item: string) => {
  return titleCase(
    item
      .split("?")
      .filter((item, idx) => idx == 0)
      .join("")
      .split("-")
      .join(" ")
  );
  // return '';
};
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word[0]) {
        return word[0].toUpperCase() + word.slice(1);
      } else return "";
    })
    .join(" ");
}
export const getPageTitle = (url: string) => {
  let urlArray = url.split("/");

  urlArray = [...urlArray.map((item) => splitAndTitleCase(item))];
  // console.log(urlArray);
  console.log(urlArray);
  let title = "";
  switch (urlArray[1]) {
    case "":
      title = "BC's Hub for Workplace Mental Health - Learn. Train. Inspire.";

      break;
    case "Resources":
      title = [...urlArray.filter((item, idx) => idx > 1)].join(" | ");

      break;
    case "Resource":
      title = [...urlArray.filter((item, idx) => idx > 2)].join(" | ");

      break;
    case "Sectors":
      title = [...urlArray.filter((item, idx) => idx > 1)].join(" | ");
      title = title + " | BC's Hub for Workplace Mental Health";

      break;
    default:
      title = [...urlArray.filter((item, idx) => idx > 0)].join(" | ");
      title = title + " | BC's Hub for Workplace Mental Health";
      break;
  }
  // console.log(title);
  if (title == "") {
    title = "BC's Hub for Workplace Mental Health - Learn. Train. Inspire.";
    return title;
  } else {
    return title;
  }
};

export const handleLandingPage = (req, res, next) => {
  const distFolder = join(process.cwd(), "dist/WMHH/browser");

  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";
  // console.log(distFolder, indexHtml);
  console.log(req.url);
  res.render(
    indexHtml,
    {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    },
    async (err, html) => {
      try {
        // console.log("came");

        const result = await fetchApi(
          `get-meta-details-byname?pageName=LandingPage`
        );
        // console.log();

        // console.log(result);
        if (result.length) {
          const resultData = result[0];
          // console.log(resultData);

          if (resultData.metaTitle && resultData.metaTitle.length) {
            let title = getPageTitle(req.url);
            html = html.replace(/\$OG_TITLE/g, title);
            // html = html.replace(/\$OG_TITLE/g, resultData.metaTitle);
          }

          if (resultData.metaDescription && resultData.metaDescription.length) {
            html = html.replace(
              /\$META_DESCRIPTION/g,
              `${resultData.metaDescription.substring(0, 300)}...`
            );
          }
        }
        html = setDefaultData(html);

        res.send(html);
      } catch (error) {
        console.log(error);
      }
      html = html.replace(/\$META_DESCRIPTION/g, `sadsadasdas...`);
      // next();
    }
  );
};

export const handleUrgentPage = (req, res, next) => {
  const distFolder = join(process.cwd(), "dist/WMHH/browser");

  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";
  // console.log(distFolder, indexHtml);
  console.log(req.url);
  res.render(
    indexHtml,
    {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    },
    async (err, html) => {
      try {
        const result = await fetchApi(
          `get-meta-details-byname?pageName=UrgentHelp`
        );

        // console.log(result);
        const resultData = result[0];
        // console.log(resultData);
        if (resultData) {
          if (resultData.metaTitle && resultData.metaTitle.length) {
            let title = getPageTitle(req.url);
            html = html.replace(/\$OG_TITLE/g, title);
            // html = html.replace(/\$OG_TITLE/g, resultData.metaTitle);
          }

          if (resultData.metaDescription && resultData.metaDescription.length) {
            html = html.replace(
              /\$META_DESCRIPTION/g,
              `${resultData.metaDescription.substring(0, 300)}...`
            );
          }
        }
        html = setDefaultData(html);
        res.send(html);
      } catch (error) {
        console.log(error);
      }
      html = html.replace(/\$META_DESCRIPTION/g, `sadsadasdas...`);
      // next();
    }
  );
};

export const handleDiscoverPage = (req, res, next) => {
  const distFolder = join(process.cwd(), "dist/WMHH/browser");

  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";
  // console.log(distFolder, indexHtml);
  console.log(req.url);
  res.render(
    indexHtml,
    {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    },
    async (err, html) => {
      try {
        const result = await fetchApi(
          `get-meta-details-byname?pageName=DiscoverPage`
        );

        // console.log(result);
        const resultData = result[0];
        // console.log(resultData);
        if (resultData) {
          if (resultData.metaTitle && resultData.metaTitle.length) {
            let title = getPageTitle(req.url);
            html = html.replace(/\$OG_TITLE/g, title);
          }

          if (resultData.metaDescription && resultData.metaDescription.length) {
            html = html.replace(
              /\$META_DESCRIPTION/g,
              `${resultData.metaDescription.substring(0, 300)}...`
            );
          }
        }
        html = setDefaultData(html);
        res.send(html);
      } catch (error) {
        console.log(error);
      }
      // html = html.replace(/\$META_DESCRIPTION/g, `sadsadasdas...`);
      // next();
    }
  );
};

export const handleSectorPage = (req, res, next) => {
  const distFolder = join(process.cwd(), "dist/WMHH/browser");

  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";
  console.log(req.url);

  const { sectorId } = req.params;

  let queryparams = {
    slug: sectorId,
  };

  let query = Object.keys(queryparams)
    .map(
      (k) => encodeURIComponent(k) + "=" + encodeURIComponent(queryparams[k])
    )
    .join("&");
  res.render(
    indexHtml,
    {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    },
    async (err, html) => {
      try {
        const result = await fetchApi(`get-sectors-details?${query}`);

        // console.log(result);
        let contentTitle = "";

        if (result.metaTitle && result.metaTitle.length) {
          contentTitle = result.metaTitle;
        } else {
          contentTitle = result.sectorName;
        }
        // let title = getPageTitle(req.url);
        // html = html.replace(/\$OG_TITLE/g, title);
        html = html.replace(
          /\$OG_TITLE/g,
          titleCase(contentTitle + " | BC's Hub for Workplace Mental Health")
        );

        let image = "";
        if (result.sectorImageData && result.sectorImageData.length) {
          const urlSubstring = result.sectorImageData[0].url.substring(1);
          image = `${environment.STRAPI_BASE_PATH}${urlSubstring}`;
        } else {
          image = `${environment.url}/assets/images/for-someone-else.png`;
        }
        html = html.replace(/\$OG_IMAGE/g, image);
        let description = "";
        if (result.metaDescription && result.metaDescription.length) {
          description =
            result.metaDescription && result.metaDescription.length
              ? `${result.metaDescription.substring(0, 300)}...`
              : "";
        } else {
          description =
            result.description && result.description.length
              ? `${result.description.substring(0, 300)}...`
              : "";
        }
        description = description.replace(/<a\b[^>]*>(.*?)<\/a>/i, "");
        // console.log(description);
        html = html.replace(/\$META_DESCRIPTION/g, description);

        html = setDefaultData(html);
        res.send(html);
      } catch (error) {
        console.log(error);
      }
      // next();
    }
  );
};

export const handleMainContent = (req, res, next) => {
  const distFolder = join(process.cwd(), "dist/WMHH/browser");

  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";
  console.log(req.url);

  const { contentId } = req.params;
  // console.log(contentId);
  let queryparams = {
    parentslug: contentId,
    page: 1,
    limit: 10,
  };

  let query = Object.keys(queryparams)
    .map(
      (k) => encodeURIComponent(k) + "=" + encodeURIComponent(queryparams[k])
    )
    .join("&");

  res.render(
    indexHtml,
    {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    },
    async (err, html) => {
      try {
        const result = await fetchApi(`get-child-content-list?${query}`);

        // console.log(result);

        let contentTitle = "";
        if (result.parentData.metaTitle && result.parentData.metaTitle.length) {
          contentTitle = result.parentData.metaTitle;
        } else {
          contentTitle = result.parentData.categorytitle;
        }
        // let title = getPageTitle(req.url);
        // html = html.replace(/\$OG_TITLE/g, title);
        html = html.replace(/\$OG_TITLE/g, titleCase(contentTitle));

        let urlSubstring = "";
        if (
          result.parentData.categoryimageData[0].url.indexOf("http://") == 0 ||
          result.parentData.categoryimageData[0].url.indexOf("https://") == 0
        ) {
          urlSubstring = `${result.parentData.categoryimageData[0].url}`;
          html = html.replace(/\$OG_IMAGE/g, `${urlSubstring}`);
        } else {
          // return `${environment.STRAPI_BASE_PATH}${temp}`;
          urlSubstring =
            result.parentData.categoryimageData[0].url.substring(1);
          html = html.replace(
            /\$OG_IMAGE/g,
            `${environment.STRAPI_BASE_PATH}${urlSubstring}`
          );
        }

        let description = "";
        if (
          result.parentData.metaDescription &&
          result.parentData.metaDescription.length
        ) {
          description = description =
            result.parentData.metaDescription &&
            result.parentData.metaDescription.length
              ? `${result.parentData.metaDescription.substring(0, 300)}...`
              : "";
        } else {
          description =
            result.parentData.categorydesc &&
            result.parentData.categorydesc.length
              ? `${result.parentData.categorydesc.substring(0, 300)}...`
              : "";
        }
        description = description.replace(/<a\b[^>]*>(.*?)<\/a>/i, "");

        html = html.replace(/\$META_DESCRIPTION/g, description);

        html = setDefaultData(html);
        res.send(html);
      } catch (error) {
        console.log(error);
      }
      // next();
    }
  );
};

export const handleImageContent = (req, res, next) => {
  const distFolder = join(process.cwd(), "dist/WMHH/browser");

  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";
  console.log(req.url);

  const { contentId } = req.params;

  let queryparams = {
    slug: contentId,
  };

  let query = Object.keys(queryparams)
    .map(
      (k) => encodeURIComponent(k) + "=" + encodeURIComponent(queryparams[k])
    )
    .join("&");
  res.render(
    indexHtml,
    {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    },
    async (err, html) => {
      try {
        const result = await fetchApi(`get-child-content-details?${query}`);

        // console.log(result);

        let contentTitle = "";
        if (result.metaTitle && result.metaTitle.length) {
          contentTitle = result.metaTitle;
        } else {
          contentTitle = result.title;
        }
        // let title = getPageTitle(req.url);
        // html = html.replace(/\$OG_TITLE/g, title);
        html = html.replace(/\$OG_TITLE/g, titleCase(contentTitle));

        // const urlSubstring = result.postimageData[0]?.url.substring(1);
        let urlSubstring = "";
        if (
          result.postimageData[0]?.url.indexOf("http://") == 0 ||
          result.postimageData[0]?.url.indexOf("https://") == 0
        ) {
          urlSubstring = `${result.postimageData[0]?.url}`;
          html = html.replace(/\$OG_IMAGE/g, `${urlSubstring}`);
        } else {
          // return `${environment.STRAPI_BASE_PATH}${temp}`;
          urlSubstring = result.postimageData[0]?.url.substring(1);
          html = html.replace(
            /\$OG_IMAGE/g,
            `${environment.STRAPI_BASE_PATH}${urlSubstring}`
          );
        }

        let description = "";
        if (result.metaDescription && result.metaDescription.length) {
          description =
            result.metaDescription && result.metaDescription.length
              ? `${result.metaDescription.substring(0, 300)}...`
              : "";
        } else {
          description =
            result.postcontent && result.postcontent.length
              ? `${result.postcontent.substring(0, 300)}...`
              : "";
        }
        description = description.replace(/<a\b[^>]*>(.*?)<\/a>/i, "");

        html = html.replace(/\$META_DESCRIPTION/g, description);

        html = setDefaultData(html);
        res.send(html);
      } catch (error) {
        console.log(error);
      }
      // next();
    }
  );
};

export const handleVideoContent = (req, res, next) => {
  const distFolder = join(process.cwd(), "dist/WMHH/browser");

  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";
  console.log(req.url);

  const { contentId } = req.params;

  let queryparams = {
    slug: contentId,
  };

  let query = Object.keys(queryparams)
    .map(
      (k) => encodeURIComponent(k) + "=" + encodeURIComponent(queryparams[k])
    )
    .join("&");
  res.render(
    indexHtml,
    {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    },
    async (err, html) => {
      try {
        const result = await fetchApi(`get-child-content-details?${query}`);

        // console.log(result);

        let contentTitle = "";
        if (result.metaTitle && result.metaTitle.length) {
          contentTitle = result.metaTitle;
        } else {
          contentTitle = result.title;
        }
        // let title = getPageTitle(req.url);
        // html = html.replace(/\$OG_TITLE/g, title);
        html = html.replace(/\$OG_TITLE/g, titleCase(contentTitle));

        let image = "";
        if (result.videoThumbnail && result.videoThumbnail.url) {
          const urlSubstring = result.videoThumbnail.url.substring(1);
          image = `${environment.STRAPI_BASE_PATH}uploads/${urlSubstring}`;
        }

        html = html.replace(/\$OG_IMAGE/g, image);
        let description = "";
        if (result.metaDescription && result.metaDescription.length) {
          description =
            result.metaDescription && result.metaDescription.length
              ? `${result.metaDescription.substring(0, 300)}...`
              : "";
        } else {
          description =
            result.postcontent && result.postcontent.length
              ? `${result.postcontent.substring(0, 300)}...`
              : "";
        }
        description = description.replace(/<a\b[^>]*>(.*?)<\/a>/i, "");

        html = html.replace(/\$META_DESCRIPTION/g, description);

        html = setDefaultData(html);
        res.send(html);
      } catch (error) {
        console.log(error);
      }
      // next();
    }
  );
};
