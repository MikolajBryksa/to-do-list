import React from 'react';
import Table from '../layout/Table';

export default function Archive() {

    return (
        <>
        <h2 className="text-center m-4">Archive</h2>
        <Table api="http://localhost:8080/archive" />
        </>
    )
}
