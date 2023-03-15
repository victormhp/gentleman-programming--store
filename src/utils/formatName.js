export default function formatName(name) {
  const formattedName = name.toLowerCase().replace(/\s+/g, '-');
  return formattedName;
}
