// ============================================================
// A small helper function shared by StudentCard and the Home page.
//
// It turns a full name into initials for the avatar circle:
//   "Juan Dela Cruz" -> "JD"
//   "Maria Santos"   -> "MS"
//
// It lives in its own file so that StudentCard.jsx only exports
// a component (which keeps React Fast Refresh happy).
// ============================================================

export function getInitials(name) {
  return name
    .split(' ')             // split the full name into words
    .map((word) => word[0]) // take the first letter of each word
    .join('')               // join the letters together
    .slice(0, 2)            // keep only the first two
    .toUpperCase()          // make them uppercase
}
