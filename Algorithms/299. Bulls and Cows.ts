function getHint(secret: string, guess: string): string {
  const secretMap: Map<string, number> = new Map([
    ['0', 0],
    ['1', 0],
    ['2', 0],
    ['3', 0],
    ['4', 0],
    ['5', 0],
    ['6', 0],
    ['7', 0],
    ['8', 0],
    ['9', 0],
  ]);
  const guessMap: Map<string, number> = new Map([
    ['0', 0],
    ['1', 0],
    ['2', 0],
    ['3', 0],
    ['4', 0],
    ['5', 0],
    ['6', 0],
    ['7', 0],
    ['8', 0],
    ['9', 0],
  ]);
  let bull: number = 0;
  let cow: number = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret.charAt(i) === guess.charAt(i)) {
      bull++;
      continue;
    }

    if (secretMap.get(guess.charAt(i)) > 0) {
      cow++;
      secretMap.set(guess.charAt(i), secretMap.get(guess.charAt(i)) - 1);
    } else {
      guessMap.set(guess.charAt(i), guessMap.get(guess.charAt(i)) + 1);
    }

    if (guessMap.get(secret.charAt(i)) > 0) {
      cow++;
      guessMap.set(secret.charAt(i), guessMap.get(secret.charAt(i)) - 1);
    } else {
      secretMap.set(secret.charAt(i), secretMap.get(secret.charAt(i)) + 1);
    }
  }

  return `${bull}A${cow}B`;
};
