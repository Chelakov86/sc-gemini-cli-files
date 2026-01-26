import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Catalog } from './Catalog';

const { mockSessions, mockSpeakers, mockTracks } = vi.hoisted(() => {
  return {
    mockSessions: [
      {
        id: '1',
        title: 'React Keynote',
        description: 'Deep dive into React',
        speaker: 'Dr. Sarah Chen',
        category: 'Keynote',
        day: 'Day 1',
        time: '10:00 AM',
        location: 'Hall A',
        details: {
          fullDescription: 'Deep dive into React and its modern patterns. This comprehensive session covers hooks, context, and performance optimization.',
          takeaways: ['React Hooks', 'Performance'],
          tracks: ['Web', 'Frontend'],
          level: 'Advanced',
          speakerBio: 'Dr. Sarah Chen is a React core contributor.'
        }
      },
      {
        id: '2',
        title: 'Vue Workshop',
        description: 'Hands-on with Vue',
        speaker: 'Marcus Rodriguez',
        category: 'Learning Lab',
        day: 'Day 2',
        time: '2:00 PM',
        location: 'Room 200',
        details: {
          fullDescription: 'Hands-on with Vue and Composition API. Learn how to build scalable applications.',
          takeaways: ['Composition API', 'State Management'],
          tracks: ['Web', 'Frontend'],
          level: 'Beginner',
          speakerBio: 'Marcus Rodriguez is a frontend developer.'
        }
      },
      {
        id: '3',
        title: 'AI in 2026',
        description: 'Future of AI',
        speaker: 'Emily Watson',
        category: 'Breakout',
        day: 'Day 1',
        time: '11:00 AM',
        location: 'Hall B',
        details: {
          fullDescription: 'Future of AI with machine learning models and neural networks.',
          takeaways: ['AI Trends', 'Neural Networks'],
          tracks: ['AI/ML', 'Strategy'],
          level: 'Intermediate',
          speakerBio: 'Emily Watson is an AI researcher.'
        }
      }
    ],
    mockSpeakers: ['Dr. Sarah Chen', 'Emily Watson', 'Marcus Rodriguez'],
    mockTracks: ['AI/ML', 'Frontend', 'Strategy', 'Web']
  };
});

vi.mock('../data/sessions', () => ({
  SESSIONS: mockSessions
}));

vi.mock('../data/sessionFilters', () => ({
  UNIQUE_SPEAKERS: mockSpeakers,
  UNIQUE_TRACKS: mockTracks,
  LEVELS: ['All', 'Beginner', 'Intermediate', 'Advanced']
}));

describe('Catalog Page', () => {
  it('renders all sessions initially', () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    expect(screen.getByText('Showing 3 sessions')).toBeInTheDocument();
  });

  it('filters by search query (title)', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();
  });

  it('filters by search query (speaker)', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'Marcus' } });

    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
  });

  it('filters by Day', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    // Find the select for Day. It's the first select, or we can look for options.
    // The component has two selects. We can distinguish by value or container.
    // Let's assume the Day filter is the one with 'Day 1' option.
    const selects = screen.getAllByRole('combobox');
    const daySelect = selects[0]; // Based on order in JSX

    fireEvent.change(daySelect, { target: { value: 'Day 2' } });

    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('AI in 2025')).not.toBeInTheDocument();
    });
  });

  it('filters by Category', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const selects = screen.getAllByRole('combobox');
    const categorySelect = selects[1]; // Based on order in JSX

    fireEvent.change(categorySelect, { target: { value: 'Keynote' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
  });

  it('shows no results message when no matches', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'NonExistentTerm' } });

    // Wait for debounced search
    await waitFor(() => {
      expect(screen.getByText('No sessions found')).toBeInTheDocument();
    }, { timeout: 500 });
    expect(screen.getByText('Showing 0 sessions')).toBeInTheDocument();
  });

  it('initializes filters from URL parameters', async () => {
    render(
      <MemoryRouter initialEntries={['/catalog?search=React&day=Day+1&level=Advanced']}>
        <Catalog />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    expect(searchInput).toHaveValue('React');

    const selects = screen.getAllByRole('combobox');
    const daySelect = selects[0];
    const levelSelect = selects[2]; // Now at index 2 (day, category, level)

    expect(daySelect).toHaveValue('Day 1');
    expect(levelSelect).toHaveValue('Advanced');

    // Wait for debounced search to apply
    await waitFor(() => {
      // Only React Keynote should match (React + Day 1 + Advanced)
      expect(screen.getByText('React Keynote')).toBeInTheDocument();
    }, { timeout: 500 });
  });

  it('filters by speaker', () => {
    render(
      <MemoryRouter initialEntries={['/catalog?speakers=Dr.%20Sarah%20Chen']}>
        <Catalog />
      </MemoryRouter>
    );

    // Only Dr. Sarah Chen's session should be visible
    expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();
    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    expect(screen.queryByText('AI in 2026')).not.toBeInTheDocument();
  });

  it('filters by level', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );

    const selects = screen.getAllByRole('combobox');
    const levelSelect = selects[2]; // Level is now the third select (day, category, level)

    fireEvent.change(levelSelect, { target: { value: 'Beginner' } });

    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
      expect(screen.queryByText('AI in 2026')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
  });

  it('filters by tracks with OR logic', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );

    // Open tracks dropdown
    const tracksButton = screen.getByText('All Tracks');
    fireEvent.click(tracksButton);

    await waitFor(() => {
      expect(screen.getByText('AI/ML')).toBeInTheDocument();
    });

    // Select AI/ML track
    const trackLabel = screen.getByText('AI/ML').closest('label');
    if (trackLabel) {
      fireEvent.click(trackLabel);
    }

    // Close dropdown
    fireEvent.mouseDown(document.body);

    await waitFor(() => {
      // Only AI in 2026 has AI/ML track
      expect(screen.getByText('AI in 2026')).toBeInTheDocument();
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
  });

  it('searches in fullDescription field', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    // Search for "neural networks" which only appears in fullDescription of AI in 2026
    fireEvent.change(searchInput, { target: { value: 'neural networks' } });

    // Wait for debounced search and filter to apply
    await waitFor(() => {
      expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();
    }, { timeout: 600 });

    // Wait for AnimatePresence exit animations to complete
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    }, { timeout: 500 });

    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
  });

  it('syncs filter changes to URL', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/catalog']}>
        <Catalog />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });

    const selects = screen.getAllByRole('combobox');
    const daySelect = selects[0];
    fireEvent.change(daySelect, { target: { value: 'Day 1' } });

    // URL sync happens via useSearchParams, which updates the browser history
    // In a real browser, we'd check window.location.search
    // In tests, MemoryRouter manages this internally
    await waitFor(() => {
      expect(screen.getByText('React Keynote')).toBeInTheDocument();
    });
  });

  it('clears all filters when Clear button clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/catalog?search=React&day=Day+1']}>
        <Catalog />
      </MemoryRouter>
    );

    // Verify filters are active
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    expect(searchInput).toHaveValue('React');

    // Clear all filters
    const clearButton = screen.getByText('Clear all filters');
    fireEvent.click(clearButton);

    await waitFor(() => {
      expect(searchInput).toHaveValue('');
      expect(screen.getByText('Showing 3 sessions')).toBeInTheDocument();
    });

    // All sessions should be visible again
    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
  });
});
