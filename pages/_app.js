import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
        />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
        />
        <link
          rel="stylesheet"
          href="%PUBLIC_URL%/plugins/uplot/uPlot.min.css"
        />

        <link rel="stylesheet" href="plugin/fontawesome-free/css/all.min.css" />
        <link
          rel="stylesheet"
          href="plugin/datatables-bs4/css/dataTables.bootstrap4.min.css"
        />
        <link
          rel="stylesheet"
          href="plugin/datatables-responsive/css/responsive.bootstrap4.min.css"
        />
        <link
          rel="stylesheet"
          href="plugin/datatables-buttons/css/buttons.bootstrap4.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link
          href="https://afeld.github.io/emoji-css/emoji.css"
          rel="stylesheet"
        />

        <link href="dist/css/style.css" rel="stylesheet" />
        <link rel="stylesheet" href="dist/css/adminlte.min.css" />
        <script src="plugin/jquery/jquery.min.js"></script>
        <script src="plugin/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="dist/js/adminlte.min.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"
          integrity="sha256-xKeoJ50pzbUGkpQxDYHD7o7hxe0LaOGeguUidbq6vis="
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
