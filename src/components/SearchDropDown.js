import React from "react";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { categories } from "../categories";
import "./SearchDropDown.css";

class SearchDropDown extends React.Component {
  state = {
    dropdownItems: categories,
    dropdownOpen: false,
    dropdownValue: "Category",
    dropdownId: null,
    searchLetter: ""
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  onClick = e => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      dropdownValue: e.target.innerText,
      dropdownId: e.target.id
    });

    //this.props.onSubmit(e.target.id);
  };

  onChange = e => {
    this.setState({
      searchLetter: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
    this.props.onSubmit(this.state.dropdownId, this.state.searchLetter);
  };

  render() {
    return (
      <Card className="mt-3 mb-3 bg-light">
        <CardBody className="mx-auto">
          <Form onSubmit={this.onSubmit}>
            <FormGroup className="d-inline">
              <Dropdown
                className="d-inline"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle className="bg-dark text-white" caret>
                  {this.state.dropdownValue}
                </DropdownToggle>
                <DropdownMenu className="bg-dark">
                  {this.state.dropdownItems.map(item => (
                    <DropdownItem
                      className="text-white dropActive"
                      key={item.id}
                      id={item.id}
                      onClick={this.onClick}
                    >
                      {item.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </FormGroup>
            <FormGroup className="ml-4 text-center d-inline">
              <Label className="mr-2" for="searchLetter">
                Letter to Search By
              </Label>
              <Input
                className="d-inline center"
                style={{ width: "10%" }}
                type="text"
                value={this.state.searchLetter}
                name="searchLetter"
                id="searchLetter"
                maxLength="1"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup className="ml-4 d-inline">
              <Button color="dark" onClick={this.onSubmit}>
                Submit
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default SearchDropDown;
