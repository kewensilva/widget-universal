import {
  UTM_STORAGE_KEY
} from "./constants";

import type {
  UTMData
} from "../types/tracking";

export const getUTM = (): UTMData => {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const currentUTM: UTMData = {

    utmSource:
      params.get("utm_source") ??
      undefined,

    utmMedium:
      params.get("utm_medium") ??
      undefined,

    utmCampaign:
      params.get("utm_campaign") ??
      undefined,

    utmContent:
      params.get("utm_content") ??
      undefined,

    utmTerm:
      params.get("utm_term") ??
      undefined

  };

  const hasUTM =
    Object.values(currentUTM)
      .some(Boolean);

  if (hasUTM) {

    localStorage.setItem(
      UTM_STORAGE_KEY,
      JSON.stringify(
        currentUTM
      )
    );

    return currentUTM;

  }

  const storedUTM =
    localStorage.getItem(
      UTM_STORAGE_KEY
    );

  if (!storedUTM) {

    return {};

  }

  return JSON.parse(
    storedUTM
  );

};