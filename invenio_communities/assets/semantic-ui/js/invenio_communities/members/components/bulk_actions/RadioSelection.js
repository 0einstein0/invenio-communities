import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Radio, Item } from "semantic-ui-react";

export class RadioSelection extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: undefined };
  }

  handleOnChange = (e, { value }) => {
    const { onOptionChangeCallback } = this.props;
    this.setState({ selected: value });
    onOptionChangeCallback(value);
  };

  render() {
    const { options, label } = this.props;
    const { selected } = this.state;

    return (
      <Form.Field required>
        <label>{label}</label>
        <Item.Group className="mt-10">
          {Object.entries(options).map(([key, value]) => (
            <Item key={key}>
              <Item.Content>
                <Item.Header>
                  <Form.Field>
                    <Radio
                      onClick={this.handleOnChange}
                      label={value.title}
                      value={key}
                      checked={selected === key}
                      name="membersRoles"
                      key={key}
                    />
                  </Form.Field>
                </Item.Header>
                <Item.Meta className="ml-25 mt-0">
                  {value.description}
                </Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Form.Field>
    );
  }
}

RadioSelection.propTypes = {
  options: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onOptionChangeCallback: PropTypes.func.isRequired,
  permissions: PropTypes.object,
};

RadioSelection.defaultProps = {
  permissions: {},
};