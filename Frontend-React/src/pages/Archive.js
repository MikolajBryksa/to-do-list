import React from "react";
import Table from "../layout/Table";

export default function Archive() {
  return (
    <>
      <Table api="http://localhost:8080/archive" />
    </>
  );
}
