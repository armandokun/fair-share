import { render, screen } from "@testing-library/react";

import Footer from ".";

import { withIntl } from "../../helpers/test";

describe("<Footer />", () => {
  const renderHelper = (element: JSX.Element) => render(withIntl(element));

  it("renders correctly", () => {
    const { container } = renderHelper(<Footer />);

    expect(container).toMatchSnapshot();
  });

  it("renders footer text", () => {
    renderHelper(<Footer />);

    expect(screen.getByText("© Made with empathy")).toBeInTheDocument();
  });

  it("renders fork this project button with correct href", () => {
    renderHelper(<Footer />);

    expect(screen.getByText("Fork this project on Github")).toHaveAttribute(
      "href",
      "https://github.com/armandokun/fair-share/fork"
    );
  });
});
