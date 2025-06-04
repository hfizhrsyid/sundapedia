import React from 'react';

export default function FlexiblePart({ blocks }) {
  if (!blocks) return null;
  return (
    <div>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'heading':
            if (block.level === 1) return <h1 key={idx}>{block.text}</h1>;
            if (block.level === 2) return <h2 key={idx}>{block.text}</h2>;
            if (block.level === 3) return <h3 key={idx}>{block.text}</h3>;
            return <h2 key={idx}>{block.text}</h2>;
          case 'text':
            return <p key={idx} className='text-base'>{block.content}</p>;
          case 'image':
            return <img key={idx} src={block.src} alt="" style={{ maxWidth: '100%', margin: '1em 0' }} />;
          // Add more block types (e.g., quiz) as needed
          default:
            return null;
        }
      })}
    </div>
  );
}
