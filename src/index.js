import analyzer from './analyzer.js';

//Elementos do DOM com os atributos para exibir, somar e contar.
const textarea = document.querySelector('[name="user-input"]');
const button = document.getElementById("reset-button");
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');

textarea.addEventListener('input', allMetricsUpdate);
button.addEventListener("click", clearAllMetricsAndText);

function clearAllMetricsAndText() { //Limpa e redefine o conteúdo quando clicado.
  textarea.value = "";
  wordCount.textContent = "Contagem de palavras: 0";
  characterCount.textContent = "Contagem de caracteres: 0";
  characterNoSpacesCount.textContent = "Contagem de caracteres excluindo espaços e sinais: 0";
  numberCount.textContent = "Contagem de números: 0";
  numberSum.textContent = "Soma total de números: 0";
  wordLengthAverage.textContent = "Comprimento médio das palavras: 0";
}

function allMetricsUpdate() { //Função de digitar o texto. Métricas são atualizadas com base no texto inserido.
  const text = textarea.value;
  wordCount.textContent = "Contagem de palavras: " + analyzer.getWordCount(text);
  characterCount.textContent = "Contagem de caracteres: " + analyzer.getCharacterCount(text);
  characterNoSpacesCount.textContent = "Contagem de caracteres excluindo espaços e sinais: " + analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.textContent = "Contagem de números: " + analyzer.getNumberCount(text);
  numberSum.textContent = "Soma total de números: " + analyzer.getNumberSum(text);
  wordLengthAverage.textContent = "Comprimento médio das palavras: " + analyzer.getAverageWordLength(text);
}




