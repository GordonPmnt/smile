import React from 'react';
import { create, act } from "react-test-renderer";
import SideBar from './SideBar';
import DeckList from './DeckList';
import Gallery from './Gallery';
import MyCam from './MyCam';
import LiveChat from './LiveChat';


describe("SideBar component", () => {
    it("is a valid react component", () => {
        let root;
        act(() => {
            root = create(<SideBar />);
        });
        expect(root.toTree().nodeType).toBe('component');
    });
    it("renders element with style", () => {
        let root;
        act(() => {
            root = create(<SideBar />);
        });
        const { props } = root.toTree().rendered
        expect(props.style).toBeTruthy();
    });
    describe("Within component", () => {
        it(`renders components <DeckList>, <Gallery>, 
            <MyCam> and <LiveChat>`, () => {
            let root;
            act(() => {
                root = create(<SideBar />);
            });
            let { children } = root.toTree().rendered.props
            children = children.map(child => child.type)
            expect(
                children.includes(DeckList) && 
                children.includes(Gallery) &&
                children.includes(MyCam) &&
                children.includes(LiveChat)
                ).toBe(true);
        });
    });
});