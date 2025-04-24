    document.querySelectorAll('.answers').forEach(list => {
      list.addEventListener('click', e => {
        if (e.target.classList.contains('answer')) {
          e.target.classList.toggle('selected');
        }
      });
    });

    function checkAnswers() {
      document.querySelectorAll('.question').forEach(question => {
        const correct = question.dataset.answer.split('');
        const explanations = JSON.parse(question.dataset.explanations);
        const answers = question.querySelectorAll('.answer');

        answers.forEach((ans, i) => {
          const isSelected = ans.classList.contains('selected');
          const isCorrect = correct[i] === 'T';
          ans.setAttribute('data-tooltip', explanations[i]);

          if (isCorrect && isSelected) {
            ans.classList.add('correct');
          } else if (!isCorrect && isSelected) {
            ans.classList.add('incorrect');
          } else if (isCorrect && !isSelected) {
            ans.classList.add('missed');
          }
        });
      });
    }