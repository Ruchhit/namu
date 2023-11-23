import { render,screen } from "@testing-library/react";
import Contact from "../src/Components/Contact";
import "@testing-library/jest-dom";


describe("test cases for ContactUs Page",()=>{
    test("should load component", ()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("should have button in the contact us component",()=>{
        render(<Contact/>);
        const button = screen.getByText("submit");
        expect(button).toBeInTheDocument();
    });
    
    test("should load 2 input boxes on the contact us page",()=>{
        render(<Contact/>);
        const textBoxes = screen.getAllByRole("textbox");
        expect(textBoxes.length).toBe(1);
    })
});
 