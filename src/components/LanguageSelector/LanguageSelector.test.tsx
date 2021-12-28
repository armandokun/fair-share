import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LanguageSelector from ".";

import { withIntl } from "../../helpers/test";
import i18n from "../../translations";

describe("<LanguageSelector />", () => {
  const renderHelper = (element: JSX.Element) => render(withIntl(element));

  const getItem = jest.spyOn(window.localStorage, "getItem");
  const setItem = jest.spyOn(window.localStorage, "setItem");

  beforeEach(() => {
    getItem.mockImplementation(() => null);
    setItem.mockImplementation(() => null);
  });

  it("renders correctly", () => {
    const { container } = renderHelper(<LanguageSelector />);

    expect(container).toMatchSnapshot();
  });

  it("calls local storage to check for saved language", () => {
    renderHelper(<LanguageSelector />);

    expect(getItem).toHaveBeenCalledTimes(1);
    expect(getItem).toHaveBeenCalledWith("language");
  });

  it("renders with default value", () => {
    renderHelper(<LanguageSelector />);

    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  it("renders different selected language when local storage finds saved value", () => {
    getItem.mockImplementation(() => "lt");

    renderHelper(<LanguageSelector />);

    expect(screen.getByText("LT")).toBeInTheDocument();
  });

  it("renders language items when clicked on select component", () => {
    const { container } = renderHelper(<LanguageSelector />);

    userEvent.click(screen.getByText("EN"));

    expect(container).toMatchSnapshot();
  });

  it("sets different language when selected", () => {
    renderHelper(<LanguageSelector />);

    userEvent.click(screen.getByText("EN"));

    userEvent.click(screen.getByText("LT"));

    expect(setItem).toHaveBeenCalledTimes(2);
    expect(setItem).toHaveBeenCalledWith("language", "lt");
  });

  it("sets same language when selected", () => {
    renderHelper(<LanguageSelector />);

    userEvent.click(screen.getByTestId("language-select"));

    userEvent.click(screen.getByText("EN"));

    expect(setItem).toHaveBeenCalledTimes(0);
  });
});
