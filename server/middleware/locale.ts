import geoip from "geoip-lite";

export default defineEventHandler((event) => {
  const headers = getRequestHeaders(event);
  const cookieLang = getCookie(event, "lang");

  if (cookieLang) {
    (event as any).detectedLang = cookieLang;
    return;
  }

  let ip: string = "127.0.0.1";

  const ipHeader = headers["x-forwarded-for"] || headers["x-real-ip"];

  if (ipHeader) {
    ip = Array.isArray(ipHeader)
      ? ipHeader[0]
      : ipHeader.toString().split(",")[0];
  } else if (event.node.req.socket?.remoteAddress) {
    ip = event.node.req.socket.remoteAddress;
  }

  // фильтр IPv6
  const isIPv4 = (ip: string) => ip.includes(".");
  if (!isIPv4(ip)) {
    ip = "127.0.0.1";
  }

  let detectedLang = "en";

  try {
    const geo = geoip.lookup(ip);
    const country = geo?.country?.toLowerCase();

    const map: Record<string, string> = {
      ua: "uk",
      de: "de",
      tr: "ru",
    };

    detectedLang = country && map[country] ? map[country] : "en";
  } catch {
    detectedLang = "en";
  }

  setCookie(event, "lang", detectedLang, {
    httpOnly: false,
    sameSite: "lax",
  });

  (event as any).detectedLang = detectedLang;
});
