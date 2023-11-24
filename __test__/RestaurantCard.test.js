import { render,screen } from "@testing-library/react"
import CardContainer from "../src/Components/CardContainer"
import MOCK_DATA from "../Mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render restaurantCard component with props data",()=>{
    render(<CardContainer resData={MOCK_DATA}/>);
    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
})