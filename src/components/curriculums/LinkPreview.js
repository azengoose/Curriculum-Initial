//import { useEffect, useState } from "react";

// https://npm.runkit.com/get-link-preview?t=1664265914655
// https://github.com/siddhigate/link-preview
// export const useLinkPreview = (url) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [data, setData] = useState();

//   async function getLinkPreviewData(url) {
//     setLoading(true);
//     setError();
//     setData();
//     try {
//       const res = await fetch(
//         `https://get-link-preview.herokuapp.com/?url=${url}`
//       );
//       const data = await res.json();
//       setData(data);
//     } catch (err) {
//       if (err.response?.data?.message) {
//         setError(err.response.data.message);
//       } else {
//         setError("Something went wrong!");
//       }
//       setData({ url });
//     } finally {
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     if (url) {
//       getLinkPreviewData(url);
//     }
//   }, []);
//   return { getLinkPreviewData, loading, error, data };
// };

//const preview = useLinkPreview("https://www.tofugu.com/learn-japanese/");
// if (preview.data != undefined) {
//   console.log("", preview.data);
// }

export function Icon(fetchlink) {
  var url = new URL(fetchlink);
  var urlfav = "https://" + url.hostname + "/favicon.ico";
  return (
    <img
      className="link-favicon"
      src={urlfav}
      onError={(e) => {
        e.target.src = "";
      }}
    />
  );
}

export function HostLink(fetchlink) {
    try{
      var url = new URL(fetchlink);
      return url.hostname;
    }
    catch (e) {
        //
    }
}
