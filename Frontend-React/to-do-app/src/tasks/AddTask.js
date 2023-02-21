import React from 'react'

export default function AddTask() {
  return (

    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Add task</h2>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label"></label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter a date"
                    name="date"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label"></label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter a title"
                    name="title"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="details" className="form-label"></label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter a details"
                    name="details"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="priority" className="form-label"></label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter a priority"
                    name="priority"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="status" className="form-label"></label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter a status"
                    name="status"
                    />
                </div>

                <div class="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>

            </div>
        </div>
    </div>

  )
}
