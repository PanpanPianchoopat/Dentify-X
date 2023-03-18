import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import { Montserrat } from "next/font/google";
import colors from "../../public/constants/colors";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: colors.PRIMARY_BLUE,
            fontFamily: montserrat.style.fontFamily,
          },
        }}
      >
        <style jsx global>{`
          html {
            font-family: ${montserrat.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
}
