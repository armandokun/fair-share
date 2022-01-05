import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from ".";
import { withIntl } from "../../helpers/test";

describe("<Form />", () => {
  const renderHelper = (element: JSX.Element) => render(withIntl(element));

  it("renders correctly", () => {
    const { container } = renderHelper(<Form />);

    expect(container).toMatchSnapshot();
  });

  it("adds salary input when clicked on add button", () => {
    renderHelper(<Form />);

    userEvent.click(screen.getByText("Add another person"));

    expect(screen.getByLabelText("Salary 3")).toBeInTheDocument();
  });

  it("removes salary input when clicked on remove button", () => {
    renderHelper(<Form />);

    userEvent.click(screen.getByText("Add another person"));
    userEvent.click(screen.getByTestId("remove-button"));

    expect(screen.queryByLabelText("Salary 3")).not.toBeInTheDocument();
  });

  it("does not render summary when only rent input is filled", () => {
    renderHelper(<Form />);

    userEvent.type(screen.getByLabelText("Rent to pay *"), "100");

    expect(screen.queryByText("Summary")).not.toBeInTheDocument();
  });

  it("renders summary when rent and salary inputs are filled", () => {
    renderHelper(<Form />);

    userEvent.type(screen.getByLabelText("Rent to pay *"), "100");
    userEvent.type(screen.getByLabelText("Salary 1 *"), "1000");
    userEvent.type(screen.getByLabelText("Salary 2 *"), "1000");

    expect(screen.getByText("Summary")).toBeInTheDocument();
  });

  describe("when summary is rendered", () => {
    const fillInputs = (
      rentToPay: string,
      salary1: string,
      salary2: string
    ) => {
      userEvent.type(screen.getByLabelText("Rent to pay *"), rentToPay);
      userEvent.type(screen.getByLabelText("Salary 1 *"), salary1);
      userEvent.type(screen.getByLabelText("Salary 2 *"), salary2);
    };

    it("renders the salary percent", () => {
      renderHelper(<Form />);

      fillInputs("100", "1000", "1000");

      expect(
        screen.getByText("You're all be paying 5.0% of your salary on rent")
      ).toBeInTheDocument();
    });

    it("renders individual payment to make", () => {
      renderHelper(<Form />);

      fillInputs("100", "1000", "1000");

      expect(screen.getByText("Salary 1 to pay: 50.00")).toBeInTheDocument();
      expect(screen.getByText("Salary 2 to pay: 50.00")).toBeInTheDocument();
    });

    describe("when evaluation note is rendered", () => {
      it("renders note for rent price too high", () => {
        renderHelper(<Form />);

        fillInputs("600", "400", "500");

        expect(
          screen.getByText("Do you really want to rent this place? 🤔")
        ).toBeInTheDocument();
      });

      it("renders note for rent price being low", () => {
        renderHelper(<Form />);

        fillInputs("100", "1000", "1000");

        expect(
          screen.getByText(
            "Do you want to tell us your secrets about the place you rent?",
            { exact: false }
          )
        ).toBeInTheDocument();
      });

      it("renders note for rent price being 50% of your salaries", () => {
        renderHelper(<Form />);

        fillInputs("1000", "1000", "1000");

        expect(
          screen.getByText("Jackpot! 🎰 You waste 50% of your salary on rent.")
        ).toBeInTheDocument();
      });
    });
  });
});
