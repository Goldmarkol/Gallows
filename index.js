
const randomWord = prompt("Введите загаданное слово!");

let answerArray = [];

if (randomWord?.length > 0) {
  for (let i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
  }

  let remainingLetters = randomWord.length;

  while (remainingLetters > 0) {
    alert(answerArray.join(" "));

    let answer = prompt("Введите букву или нажмите отмена для выхода из игры");

    if (!randomWord.includes(answer) && answer) {
      alert("Ошибка! Вы не угадали!");
      continue;
    }

    if (!answer) {
      alert("Вы вышли из игры!");
      break;
    } else if (answer.length !== 1) {
      alert("Введите одну букву плиз");
    } else {
      answer = answer.toLowerCase();

      for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === answer) {
          answerArray[j] = answer;
          remainingLetters--;
        }
      }
    }
  }

  let answerString = answerArray.join("");

  if (answerString === randomWord) {
    alert(answerString);
    alert("Отлично! Было загадано слово " + randomWord);
  }
}
