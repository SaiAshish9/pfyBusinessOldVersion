import React from "react";
import {
  Input,
  InputNumber,
  Form,
  Checkbox,
  Select,
  DatePicker,
  Radio,
} from "antd";
const { Option } = Select;
const { RangePicker } = DatePicker;
export default function InputType({
  type,
  name,
  rule,
  placeholder,
  option,
  disabledDate,
}) {
  return (
    <>
      {type === "text" && (
        <Form.Item name={name} rules={rule}>
          <Input placeholder={placeholder}></Input>
        </Form.Item>
      )}
      {type === "number" && (
        <Form.Item name={name} rules={rule}>
          <InputNumber placeholder={placeholder}></InputNumber>
        </Form.Item>
      )}
      {type === "checkbox" && (
        <Form.Item name={name} valuePropName="checked">
          <Checkbox>{placeholder}</Checkbox>
        </Form.Item>
      )}
      {type === "textarea" && (
        <Form.Item name={name} rules={rule}>
          <Input.TextArea placeholder={placeholder} />
        </Form.Item>
      )}
      {type === "select" && (
        <Form.Item name={name} rules={rule}>
          <Select placeholder={placeholder}>
            {option.map((optionName, index) => (
              <Option value={optionName} key={index}>
                {optionName}
              </Option>
            ))}
          </Select>
        </Form.Item>
      )}
      {type === "rangePicker" && (
        <Form.Item name={name} rules={rule}>
          <RangePicker
            disabledDate={disabledDate}
            format="DD-MM-YYYY"
            placeholder={placeholder}
          ></RangePicker>
        </Form.Item>
      )}
      {type === "radioButton" && (
        <Form.Item name={name} rules={rule}>
          <Radio.Group>
            {option.map((optionName, index) => (
              <Radio.Button value={optionName} key={index}>
                {optionName}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
      )}
    </>
  );
}
