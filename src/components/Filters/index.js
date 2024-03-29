import { Col, Input, Radio, Row, Select, Tag, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FiltersSlice from "./FiltersSlice";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriorities, setFilterPriorities] = useState([]);
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(FiltersSlice.actions.searchFilterChange(e.target.value));
  };
  console.log("setState");
  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
    dispatch(FiltersSlice.actions.statusFilterChange(e.target.value));
  };
  const handlePriorityChange = (e) => {
    setFilterPriorities(e);
    dispatch(FiltersSlice.actions.prioritiesFilterChange(e));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: "bold", marginBotton: 3 }}>
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          onChange={handleSearchTextChange}
          value={searchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: "bold", marginBotton: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
          Filter by Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          onChange={handlePriorityChange}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
