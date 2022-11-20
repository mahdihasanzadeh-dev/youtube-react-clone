import { Stack } from '@mui/material';
import { categories } from '@assets/constants';
import type { ReactElement } from 'react';
import type { ISidebarProperties } from './sidebar-interface';

export function Sidebar({
  state,
  setState,
}: ISidebarProperties): ReactElement {
  const { selectedCategory } = state;
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {
        categories.map((category) => (
          <button
            key={category.name}
            className="category-btn"
            type="button"
            style={{
              background: category.name === selectedCategory ? '#FC1503' : 'transparent',
              color: '#FFFFFF',
            }}
            onClick={() => setState({ ...state, selectedCategory: category.name })}
          >
            <span
              style={{
                color: category.name === selectedCategory ? '#FFFFFF' : 'red',
                marginRight: '15px',
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? '1' : '0.8',
              }}
            >
              {category.name}
            </span>
          </button>
        ))
      }
    </Stack>
  );
}
