export function addDotsToNumber(number) {
    // Convert number to string
    let numberStr = number.toString();
  
    // Add dots every three characters from the right
    let result = '';
    let count = 0;
    for (let i = numberStr.length - 1; i >= 0; i--) {
      result = numberStr[i] + result;
      count++;
      if (count === 3 && i !== 0) {
        result = '.' + result;
        count = 0;
      }
    }
  
    return result;
  }