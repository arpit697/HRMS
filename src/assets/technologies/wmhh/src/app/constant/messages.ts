export const invalidImageError = (format = "jpeg/png") =>
  `Only ${format} images are allowed`;

export const invalidFileSize = (size = 4) =>
  `File size can not be more than ${size} MB`;

export const COMMON_MESSAGES = {};
export const VALIDATION_MESSAGES = {
  "Confirm Password": {
    matchPassword: "Passwords do not match",
  },
};
export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const FORM_MESSAGES = {
  PATTERN_ERRORS: {
    EMAIL: "Please enter a valid $control$",
    PASSWORD: "$control$ can not contain blank spaces",
    NAME: "$control$ can not be blank",
    PHONE: "$control$ must contain only digits",
    PRICE: "$control$ must be numeric",
    PASSWORD_RULE:
      "$control$ must contain minimum 8, one uppercase, one lowercase, one number and a special character",
  },
  REQUIRED_ERROR: "$control$ is required",
  MIN_LENGTH_ERROR: "$control$ must be at least $minLength$ characters long",
  MAX_LENGTH_ERROR:
    "$control$ can not be more than $maxLength$ characters long",
  PASSWORD_MISMATCH: "$control$ doesn't match with $password$",
  MATCH_LENGTH: "$control$ must be $requiredLength$ $unit$ long",
};
export const POPUP_MESSAGES = {
  CLOSE: "Close",
  CONFIRM: "Confirmation",
  NO: "No",
  YES: "Yes",
};

export const FILE_FORMAT_MESSGAES = {
  INVALID_IMAGE_FORMAT: "Please upload a $format$ image",
  INVALID_CHAT_FILE_FORMAT: "Please upload a $format$ file",
  INVALID_VIDEO_FORMAT: "Please upload a $format$ video",
  INVALID_IMAGE_LENGTH: "You have to upload atleast $length$ image",
  INVALID_DOCUMENT_FORMAT: "Please upload a $format$ file",
};
