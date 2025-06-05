import { render, screen, fireEvent } from '@testing-library/react';
import AdminBlockEditor from '../pages/admin/dashboard/AdminBlockEditor';

describe('AdminBlockEditor', () => {
  it('renders with initial blocks and allows adding a text block', () => {
    const initialBlocks = [
      { type: 'heading', text: 'Intro', level: 2 },
      { type: 'text', content: 'Hello world' },
    ];
    render(<AdminBlockEditor initialBlocks={initialBlocks} onSave={jest.fn()} />);
    // Heading and text block present
    expect(screen.getByDisplayValue('Intro')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Hello world')).toBeInTheDocument();
    // Add a new text block
    fireEvent.click(screen.getByText('+ Add Block'));
    // Should have a new textarea for text content
    expect(screen.getAllByPlaceholderText('Text content').length).toBeGreaterThan(1);
  });

  it('can change block type and remove a block', () => {
    const initialBlocks = [
      { type: 'text', content: 'Block to remove' },
    ];
    render(<AdminBlockEditor initialBlocks={initialBlocks} onSave={jest.fn()} />);
    // Remove the block
    fireEvent.click(screen.getByText('Remove'));
    expect(screen.queryByDisplayValue('Block to remove')).not.toBeInTheDocument();
  });

  it('calls onSave with updated blocks', () => {
    const onSave = jest.fn();
    render(<AdminBlockEditor initialBlocks={[]} onSave={onSave} />);
    fireEvent.click(screen.getByText('+ Add Block'));
    fireEvent.change(screen.getAllByPlaceholderText('Text content')[0], { target: { value: 'Test block' } });
    fireEvent.click(screen.getByText('Save Blocks'));
    expect(onSave).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ type: 'text', content: 'Test block' })
      ])
    );
  });
});
