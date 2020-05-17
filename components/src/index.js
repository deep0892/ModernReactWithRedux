import React from "react";

import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          avatar={faker.image.avatar}
          time="6:00pm"
          comment="Sam's comment"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Dips"
          avatar={faker.image.avatar}
          time="7:00pm"
          comment="Dips's comment"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Amit"
          avatar={faker.image.avatar}
          time="8:00pm"
          comment="Amit's comment"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
