export default function formatPrice(num) {
  const regexFormatter = /\d(?=(\d{3})+\.)/g;
  const formattedNumber = '$' + num.toFixed(2).replace(regexFormatter, '$&,');
  return formattedNumber;
}
