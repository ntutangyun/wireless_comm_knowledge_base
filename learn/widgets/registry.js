import * as frameAnatomy from "./frame-anatomy.js";
import * as backoff from "./backoff.js";
import * as ofdmaRu from "./ofdma-ru.js";
import * as mcsSnr from "./mcs-snr.js";
import * as channelWidth from "./channel-width.js";
import * as mloLinks from "./mlo-links.js";

export const registry = {
  "frame-anatomy": frameAnatomy,
  "backoff": backoff,
  "ofdma-ru": ofdmaRu,
  "mcs-snr": mcsSnr,
  "channel-width": channelWidth,
  "mlo-links": mloLinks,
};
