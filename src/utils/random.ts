export function getRandomPhoneNumber(): string {
  const phonePrefixes = [
    '130',
    '131',
    '132',
    '133',
    '135',
    '136',
    '137',
    '138',
    '139',
    '147',
    '150',
    '151',
    '152',
    '153',
    '155',
    '156',
    '157',
    '158',
    '159',
    '186',
    '187',
    '188',
    '189',
  ];
  const prefixIndex = Math.floor(Math.random() * phonePrefixes.length);
  const phoneNumber =
    phonePrefixes[prefixIndex] +
    Math.floor(Math.random() * (99999999 - 10000000) + 10000000).toString();
  return phoneNumber;
}
/* 生成随机数字 */
export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
