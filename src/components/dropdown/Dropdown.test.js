import { Dropdown } from "./Dropdown";

import { screen, render, userEvent } from "../../tests";

const title = "Selecione Pokemon";
const options = ["Bubassaur", "Squirtle", "Charmelon"];

describe("Dropdown", () => {
  it("should start closed", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  it("should show options when open", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

    const dropdownButton = screen.getByRole("button", { name: title });
    userEvent.click(dropdownButton);

    expect(
      screen.getByRole("menuitem", { name: options[0] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[1] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[2] })
    ).toBeInTheDocument();
  });

  it("should signal an option was selected and close the dropdown", () => {
    const onSelect = jest.fn();
    render(<Dropdown title={title} options={options} onSelect={onSelect} />);

    const dropdownButton = screen.getByRole("button", { name: title });
    userEvent.click(dropdownButton);

    const option0 = screen.getByRole("menuitem", { name: options[0] });
    const option1 = screen.getByRole("menuitem", { name: options[1] });
    const option2 = screen.getByRole("menuitem", { name: options[2] });

    expect(option0).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();

    userEvent.click(option1);

    expect(onSelect).toHaveBeenCalledWith(options[1]);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });
});
