import Perfume from "perfume.js";
import axios from "axios";

const sideId = "637c4ff6-d09a-4e27-be9e-a58ca19b5162";

function sendBeacon(data) {
  const options = {
    method: "POST",
    url: "https://enzo.shivam.dev/api/beacon",
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  axios.request(options).catch(function (error) {
    console.error(error);
  });
}

const perfume = new Perfume({
  resourceTiming: false,
  analyticsTracker: (options) => {
    const allowedMetrics = ["fp", "fcp", "fid", "lcp", "lcpFinal", "cls", "clsFinal", "tbt", "tbt5S", "tbt10S", "tbtFinal"];
    const { metricName, data, navigatorInformation } = options;

    if (allowedMetrics.includes(metricName)) {
      sendBeacon({
        metricName,
        siteId: sideId,
        value: data,
        ...navigatorInformation,
      });
    }
  },
});
