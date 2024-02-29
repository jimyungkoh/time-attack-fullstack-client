export default function convertToKRW(amount: number) {
  return `₩ ${amount.toLocaleString("ko-KR")}`;
}
