import React from 'react';
import { create, act } from "react-test-renderer";
import GameRoom from './GameRoom';
import OpponentCam from './OpponentCam';
import SideBar from './SideBar';


describe("GameRoom component", () => {
    it("is a valid react component", () => {
        let root;
        act(() => {
            root = create(<GameRoom />);
        });
        expect(root.toTree().nodeType).toBe('component');
    });
    it("renders element with style", () => {
        let root;
        act(() => {
            root = create(<GameRoom />);
        });
        const { props } = root.toTree().rendered
        expect(props.style).toBeTruthy();
    });
    describe("Within component", () => {
        it('renders components <OpponentCam /> and <SideBar />', () => {
            let root;
            act(() => {
                root = create(<GameRoom />);
            });
            let { children } = root.toTree().rendered.props
            children = children.map(child => child.type)
            expect(
                children.includes(OpponentCam) && 
                children.includes(SideBar)
                ).toBe(true);
        });
    });
});