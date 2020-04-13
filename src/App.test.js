import React from 'react';
import { create, act } from "react-test-renderer";
import App from './App';
import MainPage from './components/MainPage';


describe("App component", () => {
  it("renders MainPage", () => {
    let root;
    act(() => {
      root = create(<App />);
    });
    const { rendered } = root.toTree()
    expect(rendered.type).toBe(MainPage)
  });
});
