import React from 'react';
import { create, act } from "react-test-renderer";
import OpponentCam from './OpponentCam';
//import SelectedJoke from './SelectedJoke';


describe("OpponentCam component", () => {
    it("is a valid react component", () => {
        let root;
        act(() => {
            root = create(<OpponentCam />);
        });
        expect(root.toTree().nodeType).toBe('component');
    });
    it("renders element with style", () => {
        let root;
        act(() => {
            root = create(<OpponentCam />);
        });
        const { props } = root.toTree().rendered
        expect(props.style).toBeTruthy();
    });
    describe("Within component", () => {
        it(`renders component <SelectedJoke> and element <button>`, () => {
            let root;
            act(() => {
                root = create(<OpponentCam />);
            });
            let { children } = root.toTree().rendered.props
            children = children.map(child => child.type)
            console.log(children)
            expect(
                children.includes(OpponentCam) &&
                children.includes('button')
                ).toBe(true);
        });
    });
});