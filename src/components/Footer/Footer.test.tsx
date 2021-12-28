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

    expect(screen.getByText("© No copyrights")).toBeInTheDocument();
  });
});
