// Test away!

import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display';

test("Defaults to `unlocked` and `open`", () => {
  const state = {
    closed: false,
    locked: false
  };
  const {getByText} = render(<Display 
      closed = {state.closed}
      locked = {state.locked}
    />);
  expect(getByText(/unlocked/i)).toBeDefined();
  expect(getByText(/open/i)).toBeDefined();
});

test("Displays if gate is open/closed and if it is locked/unlocked", () => {
  const state = {
    locked: true,
    closed: true
  }
  const {getByText} = render(
    <Display
      locked={state.locked}
      closed={state.closed}
    />
  );
  expect(getByText(state.locked ? /locked/i : /unlocked/i)).toBeDefined();
  expect(getByText(state.closed ? /closed/i : /open/i)).toBeDefined();
});

test("Displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
  const state = {
    closed: true
  }
  const {getByText} = render(<Display closed={state.closed} />);
  expect(getByText(state.closed ? /closed/i : /open/i)).toBeDefined();
});

test("Displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
  const state = {
    locked: true
  }
  const {getByText} = render(<Display locked={state.locked} />);
  expect(getByText(state.locked ? /locked/i : /unlocked/i)).toBeDefined();
});

test("When `locked` or `closed` use the `red-led` class", () => {
  const state = {
    locked: true,
    closed: true
  }
  const {getByText} = render(<Display locked={state.locked} closed={state.closed} />);
  const isLocked = getByText(/locked/i);
  const isClosed = getByText(/closed/i);
  expect(isLocked.classList.contains('red-led')).toBe(true);
  expect(isClosed.classList.contains('red-led')).toBe(true);
});

test("When `unlocked` or `open` use the `green-led` class", () => {
  const state = {
    locked: false,
    closed: false
  };
  const {getByText} = render(
    <Display locked={state.locked} closed={state.closed} />
  );
  const isLocked = getByText(/unlocked/i);
  const isClosed = getByText(/open/i);
  expect(isLocked.classList.contains("green-led")).toBe(true);
  expect(isClosed.classList.contains("green-led")).toBe(true);
}); 