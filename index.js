import { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from '@emotion/styled';

const StyledDatePicker = styled.div`
  width: 100%; // 占满整个 .col-control

  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: block;
  }
  .react-datepicker-popper {
    z-index: 100;
  }
  .react-datepicker__close-icon {
    top: 50%;
    transform: translateY(-50%);
    height: auto; // 抵消原CSS
    right: 0.75rem; // 抵消原CSS

    &::after {
      background-color: transparent;
      color: #d6d6d6;
      font-size: 1.5rem;
      position: static; // 抵消原CSS
      padding: 0; // 抵消原CSS
    }
  }
`;

class CustomInput extends Component {
  render() {
    return <input
      type="text"
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      {...this.props}
    />;
  }
}

class MyDatePicker extends Component {
  render() {
    return <StyledDatePicker>
      <DatePicker
        dateFormat="YYYY-MM-DD"
        todayButton="今天"
        withPortal
        isClearable
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        locale="zh-cn"
        className="form-control"
        customInput={<CustomInput/>}
        {...this.props}
      />
    </StyledDatePicker>;
  }
}

export default MyDatePicker;
