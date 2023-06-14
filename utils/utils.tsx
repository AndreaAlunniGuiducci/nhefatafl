export const pieceColor = {dark: 'dark', light: 'light', king: 'king'};


export const rangeNumber = (num: number, min: number, max: number) => {
    if (num > max) {
      return max;
    }
    if (num < min) {
      return min;
    }
    return num;
  };