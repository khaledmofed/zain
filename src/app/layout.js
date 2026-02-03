import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "react-modal-video/css/modal-video.css";
import "react-toastify/dist/ReactToastify.css";
import "react-photo-view/dist/react-photo-view.css";
import "react-circular-progressbar/dist/styles.css";
import "react-rangeslider/lib/index.css";
import "animate.css";

import "@/assets/css/animate.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/flaticon-set.css";
import "@/assets/css/cabourg-font.css";

import "@/assets/css/nice-select.css";
import "@/assets/css/validnavs.css";
import "@/assets/css/helper.css";
import "@/assets/css/unit-test.css";
import "@/assets/css/style.css";

import { NextIntlClientProvider } from "next-intl";

export const metadata = {
  title:
    "Zain Solutions - Integrated Infrastructure & Digital Transformation Solutions",
};

// Default messages so every route has next-intl context.
// [locale] layout overrides with correct locale/messages for /en/... and /ar/...
async function getDefaultMessages() {
  const m = await import("../../messages/en.json");
  return m.default;
}

export default async function RootLayout({ children }) {
  const defaultMessages = await getDefaultMessages();
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale="en" messages={defaultMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
