import React from 'react';
import { create, act } from "react-test-renderer";
import App from './App';
import { BrowserRouter } from "react-router-dom";


describe("App component", () => {
  it("renders Router", () => {
    let root;
    act(() => {
      root = create(<App />);
    });
    const { rendered } = root.toTree()
    expect(rendered.type).toBe(BrowserRouter)
  });
});
