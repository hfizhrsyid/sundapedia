import React, { useState } from 'react';

export default function FlexiblePart({ blocks }) {
  if (!blocks) return null;

  // Group consecutive quiz blocks
  const grouped = [];
  let tempQuiz = [];
  blocks.forEach((block) => {
    if (block.type === 'quiz') {
      tempQuiz.push(block);
    } else {
      if (tempQuiz.length > 0) {
        grouped.push({ type: 'quizGroup', quizzes: tempQuiz });
        tempQuiz = [];
      }
      grouped.push(block);
    }
  });
  if (tempQuiz.length > 0) grouped.push({ type: 'quizGroup', quizzes: tempQuiz });

  return (
    <div>
      {grouped.map((item, idx) => {
        if (item.type === 'quizGroup') {
          return <QuizSwiper key={idx} quizzes={item.quizzes} />;
        }
        switch (item.type) {
          case 'heading':
            if (item.level === 1) return <h1 key={idx}>{item.text}</h1>;
            if (item.level === 2) return <h2 key={idx} className='font-bold my-2'>{item.text}</h2>;
            if (item.level === 3) return <h3 key={idx}>{item.text}</h3>;
            return <h2 key={idx}>{item.text}</h2>;
          case 'text':
            return <p key={idx} className='text-base text-justify'>{item.content}</p>;
          case 'image':
            return <img key={idx} src={item.src} alt="" style={{ maxWidth: '100%', margin: '1em 0' }} />;
          case 'quiz':
            // Single quiz not in a group
            return <QuizBlock key={idx} block={item} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

function QuizSwiper({ quizzes }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="my-6 p-4 border rounded bg-yellow-50 dark:bg-base-100 max-w-xl mx-auto">
      <QuizBlock block={quizzes[current]} />
      <div className="flex justify-between items-center mt-4">
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setCurrent(c => Math.max(0, c - 1))}
          disabled={current === 0}
        >Sebelumnya</button>
        <span className="text-sm">{current + 1} / {quizzes.length}</span>
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setCurrent(c => Math.min(quizzes.length - 1, c + 1))}
          disabled={current === quizzes.length - 1}
        >Selanjutnya</button>
      </div>
    </div>
  );
}

function QuizBlock({ block }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = selected === block.answer;

  return (
    <div>
      <div className="font-semibold mb-2">{block.question}</div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        {block.options && block.options.map((opt, i) => (
          <label key={i} className={`block p-2 rounded cursor-pointer border mb-2 ${submitted ? (i === block.answer ? 'border-green-500 bg-green-50' : (selected === i ? 'border-red-500 bg-red-50' : '')) : ''}`}>
            <input
              type="radio"
              name={`quiz-${block.question}`}
              value={i}
              checked={selected === i}
              onChange={() => setSelected(i)}
              disabled={submitted}
              className="mr-2"
            />
            {opt}
          </label>
        ))}
        <button
          type="submit"
          className="btn btn-primary mt-2"
          disabled={selected === null || submitted}
        >
          {submitted ? (isCorrect ? 'Benar!' : 'Coba Lagi') : 'Cek Jawaban'}
        </button>
        {submitted && (
          <div className={`mt-2 font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? 'Benar!' : 'Salah. Jawaban yang benar adalah: ' + block.options[block.answer]}
          </div>
        )}
      </form>
    </div>
  );
}
