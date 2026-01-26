import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MultiSelectDropdown } from './MultiSelectDropdown';
import { Users } from 'lucide-react';

describe('MultiSelectDropdown', () => {
  const mockOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with placeholder when no items selected', () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={[]}
        onChange={mockOnChange}
        placeholder="Select items"
      />
    );

    expect(screen.getByRole('button')).toHaveTextContent('Select items');
  });

  it('displays selected count when multiple items selected', () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={['Option 1', 'Option 2']}
        onChange={mockOnChange}
        placeholder="Select items"
      />
    );

    expect(screen.getByRole('button')).toHaveTextContent('2 selected');
  });

  it('displays single item name when one item selected', () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={['Option 1']}
        onChange={mockOnChange}
        placeholder="Select items"
      />
    );

    expect(screen.getByRole('button')).toHaveTextContent('Option 1');
  });

  it('opens dropdown when button clicked', async () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={[]}
        onChange={mockOnChange}
        placeholder="Select items"
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    mockOptions.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('filters options based on search query', async () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={[]}
        onChange={mockOnChange}
        placeholder="Select items"
        searchPlaceholder="Search options..."
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search options...')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText('Search options...');
    fireEvent.change(searchInput, { target: { value: 'Option 1' } });

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
  });

  it('toggles option selection when clicked', async () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={[]}
        onChange={mockOnChange}
        placeholder="Select items"
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    const option1Label = screen.getByText('Option 1').closest('label');
    if (option1Label) {
      fireEvent.click(option1Label);
    }

    expect(mockOnChange).toHaveBeenCalledWith(['Option 1']);
  });

  it('removes option when already selected and clicked again', async () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={['Option 1', 'Option 2']}
        onChange={mockOnChange}
        placeholder="Select items"
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    const option1Label = screen.getByText('Option 1').closest('label');
    if (option1Label) {
      fireEvent.click(option1Label);
    }

    expect(mockOnChange).toHaveBeenCalledWith(['Option 2']);
  });

  it('selects all filtered options when Select All clicked', async () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={[]}
        onChange={mockOnChange}
        placeholder="Select items"
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Select All')).toBeInTheDocument();
    });

    const selectAllButton = screen.getByText('Select All');
    fireEvent.click(selectAllButton);

    expect(mockOnChange).toHaveBeenCalledWith(mockOptions);
  });

  it('clears all selections when Clear All clicked', async () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={['Option 1', 'Option 2']}
        onChange={mockOnChange}
        placeholder="Select items"
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Clear All')).toBeInTheDocument();
    });

    const clearAllButton = screen.getByText('Clear All');
    fireEvent.click(clearAllButton);

    expect(mockOnChange).toHaveBeenCalledWith([]);
  });

  it('closes dropdown when clicking outside', async () => {
    render(
      <div>
        <MultiSelectDropdown
          options={mockOptions}
          selected={[]}
          onChange={mockOnChange}
          placeholder="Select items"
        />
        <div data-testid="outside">Outside element</div>
      </div>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    const outsideElement = screen.getByTestId('outside');
    fireEvent.mouseDown(outsideElement);

    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
    });
  });

  it('renders with custom icon', () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={[]}
        onChange={mockOnChange}
        placeholder="Select speakers"
        icon={Users}
      />
    );

    // Icon should be rendered but we can't easily test lucide icons
    // Just verify the component renders without errors
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('shows "No matches found" when search has no results', async () => {
    render(
      <MultiSelectDropdown
        options={mockOptions}
        selected={[]}
        onChange={mockOnChange}
        placeholder="Select items"
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'NonexistentOption' } });

    expect(screen.getByText('No matches found')).toBeInTheDocument();
  });
});
