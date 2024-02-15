const fs = require('fs');

function decode(message_numbers) {
    try {
      // read the contents of the file
      const fileContent = fs.readFileSync(message_numbers, 'utf-8');
  
      // split the file content into an array of lines
      const pyramidLines = fileContent.split('\n');
      const decodedNumbers = [];
      const fixedArray = [];

      //pulls the last number in each line
      pyramidLines.forEach((line) => {
          const numbers = line.trim().split(' ');
          const lastNumber = numbers[numbers.length - 1];
          decodedNumbers.push(lastNumber);
        });

        //creates new array, ready for decoding
        for(let i = 0; i < decodedNumbers.length; i++) {
             fixedArray.push(parseInt(decodedNumbers[i]))
        }
      
      const test = combineWords(fixedArray)
      
        return test
  
    } catch (error) {
      console.error('Error reading or decoding the file:', error.message);
    }
  }


function combineWords(startingNumbers) {
  try {
    const fileContent = fs.readFileSync('./real.txt', 'utf-8');

    const lines = fileContent.split('\n');

    // extract words based on the order or the number array given
    const selectedWords = startingNumbers.reduce((accumulator, number) => {
      const matchingLine = lines.find((line) => {
        const numbers = line.trim().split(' ');
        const lineNumber = parseInt(numbers[0]);
        return lineNumber === number;
      });

      if (matchingLine) {
        const word = matchingLine.trim().split(' ').slice(1).join(' ');
        accumulator.push(word);
      }

      return accumulator;
    }, []);

    //creates sentence
    const combinedSentence = selectedWords.join(' ');

    return combinedSentence;
  } catch (error) {
    console.error('Error reading or combining words:', error.message);
    return null;
  }
}

console.log(decode('./txtTest.txt'))