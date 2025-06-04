import { useState, useEffect } from 'react';
import FlexiblePart from '../../pembelajaran/FlexiblePart';

// Block type options for CMS-like UI
const BLOCK_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'heading', label: 'Heading' },
  { value: 'image', label: 'Image' },
  { value: 'quiz', label: 'Quiz' },
];

export default function AdminBlockEditor({ initialBlocks = [], onSave }) {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [newType, setNewType] = useState('text');
  const [newHeadingLevel, setNewHeadingLevel] = useState(2);
  const [draggedIdx, setDraggedIdx] = useState(null);

  useEffect(() => {
    setBlocks(initialBlocks);
  }, [initialBlocks]);

  // Add a new block at a specific position
  const addBlockAt = (idx, type = 'text') => {
    let newBlock;
    if (type === 'heading') newBlock = { type: 'heading', text: '', level: 2 };
    else if (type === 'image') newBlock = { type: 'image', src: '' };
    else if (type === 'quiz') newBlock = { type: 'quiz', question: '', options: ['', '', '', ''], answer: 0 };
    else newBlock = { type: 'text', content: '' };
    const updated = [...blocks];
    updated.splice(idx, 0, newBlock);
    setBlocks(updated);
  };

  // Update block content
  const updateBlock = (idx, field, value) => {
    const updated = [...blocks];
    updated[idx][field] = value;
    setBlocks(updated);
  };

  // Change block type
  const changeBlockType = (idx, type) => {
    const updated = [...blocks];
    if (type === 'heading') {
      updated[idx] = { type: 'heading', text: '', level: 2 };
    } else if (type === 'image') {
      updated[idx] = { type: 'image', src: '' };
    } else if (type === 'quiz') {
      updated[idx] = { type: 'quiz', question: '', options: ['', '', '', ''], answer: 0 };
    } else {
      updated[idx] = { type: 'text', content: '' };
    }
    setBlocks(updated);
  };

  // Remove block
  const removeBlock = idx => setBlocks(blocks.filter((_, i) => i !== idx));

  // Drag and drop handlers
  const handleDragStart = idx => setDraggedIdx(idx);
  const handleDragOver = idx => e => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;
    const newBlocks = [...blocks];
    const [removed] = newBlocks.splice(draggedIdx, 1);
    newBlocks.splice(idx, 0, removed);
    setBlocks(newBlocks);
    setDraggedIdx(idx);
  };
  const handleDragEnd = () => setDraggedIdx(null);

  const handleSave = () => {
    if (onSave) onSave(blocks);
  };

  return (
    <div className="p-4 bg-gray-50 rounded border max-w-3xl mx-auto text-black">
      <h2 className="font-bold mb-4">Admin Block Editor</h2>
      <ul className="mb-4">
        {blocks.map((block, idx) => (
          <li
            key={idx}
            className={`flex flex-col gap-2 mb-4 rounded border px-2 py-2 bg-white relative group ${draggedIdx === idx ? 'opacity-50' : ''}`}
            draggable
            onDragStart={() => handleDragStart(idx)}
            onDragOver={handleDragOver(idx)}
            onDragEnd={handleDragEnd}
            style={{ cursor: 'grab' }}
            title="Drag to reorder"
          >
            <div className="flex items-center gap-2 mb-1">
              <select
                value={block.type}
                onChange={e => changeBlockType(idx, e.target.value)}
                className="border rounded px-2 py-1 text-xs bg-gray-100"
              >
                {BLOCK_TYPES.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {block.type === 'heading' && (
                <select
                  value={block.level}
                  onChange={e => updateBlock(idx, 'level', Number(e.target.value))}
                  className="border rounded px-1 py-0.5 text-xs"
                >
                  <option value={1}>H1</option>
                  <option value={2}>H2</option>
                  <option value={3}>H3</option>
                </select>
              )}
              <button className="text-red-600 ml-auto" onClick={() => removeBlock(idx)}>Remove</button>
              <span className="text-gray-400 cursor-move ml-2" title="Drag to reorder">↕</span>
            </div>
            {block.type === 'heading' ? (
              <input
                className="border px-2 py-1 rounded w-full text-lg font-bold"
                value={block.text}
                onChange={e => updateBlock(idx, 'text', e.target.value)}
                placeholder={`Heading (H${block.level})`}
              />
            ) : block.type === 'text' ? (
              <textarea
                className="border px-2 py-1 rounded w-full min-h-16 resize-y"
                value={block.content}
                onChange={e => updateBlock(idx, 'content', e.target.value)}
                placeholder="Text content"
              />
            ) : block.type === 'image' ? (
              <input
                className="border px-2 py-1 rounded w-full"
                value={block.src}
                onChange={e => updateBlock(idx, 'src', e.target.value)}
                placeholder="Image URL"
              />
            ) : block.type === 'quiz' ? (
              <div className="flex flex-col gap-2">
                <input
                  className="border px-2 py-1 rounded w-full font-semibold"
                  value={block.question}
                  onChange={e => updateBlock(idx, 'question', e.target.value)}
                  placeholder="Quiz question"
                />
                {block.options && block.options.map((opt, oidx) => (
                  <div key={oidx} className="flex items-center gap-2">
                    <input
                      className="border px-2 py-1 rounded flex-1"
                      value={opt}
                      onChange={e => {
                        const newOptions = [...block.options];
                        newOptions[oidx] = e.target.value;
                        updateBlock(idx, 'options', newOptions);
                      }}
                      placeholder={`Option ${oidx + 1}`}
                    />
                    <input
                      type="radio"
                      name={`answer-${idx}`}
                      checked={block.answer === oidx}
                      onChange={() => updateBlock(idx, 'answer', oidx)}
                      className="ml-2"
                    />
                    <span className="text-xs">Correct</span>
                    <button
                      className="text-red-500 text-xs ml-2"
                      onClick={() => {
                        const newOptions = block.options.filter((_, i) => i !== oidx);
                        let newAnswer = block.answer;
                        if (oidx < block.answer) newAnswer--;
                        if (newAnswer >= newOptions.length) newAnswer = 0;
                        updateBlock(idx, 'options', newOptions);
                        updateBlock(idx, 'answer', newAnswer);
                      }}
                      disabled={block.options.length <= 2}
                      type="button"
                    >Remove</button>
                  </div>
                ))}
                <button
                  className="text-blue-600 text-xs mt-1 self-start"
                  onClick={() => {
                    updateBlock(idx, 'options', [...block.options, '']);
                  }}
                  type="button"
                >+ Add Option</button>
              </div>
            ) : null}
            {/* Add block insert button between blocks */}
            <button
              className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 bg-blue-100 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center border border-blue-200 opacity-0 group-hover:opacity-100 transition"
              style={{ zIndex: 2 }}
              onClick={() => addBlockAt(idx, 'text')}
              title="Add block above"
              type="button"
            >+
            </button>
          </li>
        ))}
      </ul>
      {/* Add block at end */}
      <div className="flex gap-2 mb-4">
        <select value={newType} onChange={e => setNewType(e.target.value)}>
          {BLOCK_TYPES.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {newType === 'heading' && (
          <select value={newHeadingLevel} onChange={e => setNewHeadingLevel(Number(e.target.value))}>
            <option value={1}>H1</option>
            <option value={2}>H2</option>
            <option value={3}>H3</option>
          </select>
        )}
        <input
          className="flex-1 border px-2 py-1 rounded"
          value={newType === 'heading' ? '' : newType === 'image' ? '' : ''}
          onChange={() => {}}
          style={{ display: 'none' }}
          readOnly
        />
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onClick={() => addBlockAt(blocks.length, newType)}
        >
          + Add Block
        </button>
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSave}>Save Blocks</button>
      <h3 className="mt-6 mb-2 font-bold">Live Preview</h3>
      <div className="border p-4 bg-white rounded">
        <FlexiblePart blocks={blocks} />
      </div>
    </div>
  );
}

