import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import st from "../../../styles";
import Button from "../../ui/Button";
import CreateBook from "./CreateBook";
import DeleteBook from "./DeleteBook";
import ManageTitle from "./ManageTitle";
import UpdateBook from "./UpdateBook";

type actionTypes = "" | "delete" | "create" | "update";

const BooksManage: FC = () => {
  const [actionType, setActionType] = useState<actionTypes>("");

  useEffect(() => {
    setActionType("");
  }, []);

  if (actionType === "") {
    return (
      <Wrapper>
        <ManageTitle>Manage Books</ManageTitle>
        <div>
          <Button onClick={() => setActionType("create")}>Create Book</Button>
          <Button view="secondary" onClick={() => setActionType("update")}>
            Update Book
          </Button>
          <Button
            className="delete-btn"
            onClick={() => setActionType("delete")}
          >
            Delete Book
          </Button>
        </div>
      </Wrapper>
    );
  }

  if (actionType === "delete") {
    return <DeleteBook />;
  }

  if (actionType === "create") {
    return <CreateBook />;
  }

  if (actionType === "update") {
    return <UpdateBook />;
  }
  return <></>;
};

const Wrapper = styled.div`
  & > div {
    margin: ${st.indentations.ind_1200} 0;
    display: flex;
    gap: ${st.indentations.ind_800};
    justify-content: center;

    .delete-btn {
      color: ${st.colors.pr_red_9};
      background-color: ${st.colors.pr_red_2};
    }
  }
`;

export default BooksManage;
