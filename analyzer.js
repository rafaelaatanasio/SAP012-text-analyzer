const analyzer = {
  getWordCount: (text) => {
    //Esta função deve retornar a contagem de palavras encontradas no parâmetro `text` do tipo `string`.
    const words = text.split(' '); //divide o texto em array de palavras (lista de strings)
    return words.length; //retorna o número total de palavras
  },

  getCharacterCount: (text) => {
    //Esta função deve retornar a contagem de caracteres que estão no parâmetro `text` do tipo `string`.
    return text.length; //retorna o número de caracteres na string
  },

  getCharacterCountExcludingSpaces: (text) => {
    //Esta função deve retornar a recuperação de caracteres excluindo espaços e sinais de pontuação que se encontram no parâmetro `text` do tipo `string`.
    const cleanText = text.replace(/[^\w\s]/g, "").replace(/\s+/g, "");
    return cleanText.length;
  },

  getAverageWordLength: (text) => {
    //Esta função deve retornar o comprimento médio das palavras que estão no parâmetro `text` do tipo `string`.
    const words = text.trim().split(/\s+/);
    const characterTotal = words.reduce((acc, word) => acc + word.length, 0);
    const average = characterTotal / words.length || 0;
    return parseFloat(average.toFixed(2));
  },

  getNumberCount: (text) => {
    //Esta função deve retornar quantos números estão no parâmetro `text` do tipo `string`.
    const isThatANum = text.match(/\b\d+(\.\d+)?\b/g);
    return isThatANum ? isThatANum.length : 0;
  },

  getNumberSum: (text) => {
    //Esta função deve retornar a soma de todos os números que estão no parâmetro `text` do tipo `string`.
    const numberSum = text.match(/\b\d+(\.\d+)?\b/g);
    if (numberSum) {
      let total = 0;
      for (let i = 0; i < numberSum.length; i++) {
        total += Number(numberSum[i]);
      }
      return total;
    } else {
      return 0;
    }
  },

};

export default analyzer;
