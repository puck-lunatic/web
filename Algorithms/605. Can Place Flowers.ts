function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const length: number = flowerbed.length;
  for (let i = 0; i < length; i++) {
    const l = i === 0 ? 0 : flowerbed[i - 1];
    const r = i === length - 1 ? 0 : flowerbed[i + 1];
    if (l + flowerbed[i] + r === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
}
