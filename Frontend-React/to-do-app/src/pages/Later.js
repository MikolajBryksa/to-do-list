import React from 'react';
import Table from '../layout/Table';

export default function Today() {

    return (
        <>
        <h2 className="text-center m-4">Later</h2>
        <Table api="http://localhost:8080/later" />
        </>
    )
}
