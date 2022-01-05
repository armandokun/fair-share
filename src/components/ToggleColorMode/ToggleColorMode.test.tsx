import { render } from "@testing-library/react";

import ToggleColorMode from ".";
import { ThemeProvider } from "../../containers";
import { withIntl } from "../../helpers/test";

describe("<ToggleColorMode />", () => {
  const renderWithProvider = (element: JSX.Element, { providerProps }) =>
    render(
      withIntl(<ThemeProvider {...providerProps}>{element}</ThemeProvider>)
    );

  it("renders correctly", () => {
    const { container } = render(<ToggleColorMode />);

    expect(container).toMatchSnapshot();
  });

  it("renders with light mode set", () => {
    const { container } = renderWithProvider(<ToggleColorMode />, {
      providerProps: {
        theme: {
          palette: {
            mode: "light",
          },
        },
      },
    });

    expect(container).toMatchSnapshot();
  });
});
