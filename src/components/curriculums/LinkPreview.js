import FaviconFallback from "../../data/images/globe-fallback.svg"

// Ideal Function for Favicons:
// When AddCurriculum function is updated to include a favicon field,
// simply retrieve the img from the database when outputting the curriculum

export function Icon(fetchlink) {
  try {
    var url = new URL(fetchlink);
    var urlfav = "https://" + url.hostname + "/favicon.ico";
    return (
      <img
        className="link-favicon"
        src={`${urlfav ? urlfav : FaviconFallback}`}
        onError={(e) => {
          e.target.src = "";
        }}
      />
    );
  }
  catch (e) { //
  }
}

export function HostLink(fetchlink) {
  try {
    var url = new URL(fetchlink);
    return url.hostname;
  }
  catch (e) { //      
  }
}
