import React from 'react'
import TitleCom from '../../../components/common/TitleCom'
import { Pagination } from '@mui/material'
import { Link } from 'react-router-dom'

function ThreadBoardList() {
  return (
    <div>
    {/* 제목 start */}
    <TitleCom title="Thread Board List" />
    {/* 제목 end */}

    {/* search start */}
    <div className="row mb-5 justify-content-center">
      <div className="col-12 w-50 input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title"
          value={searchSubject}
          onChange={onChangeSearchSubject}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={retrieveThreadBoard}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    {/* search end */}

    {/* page start */}
    <div className="mt-3">
      {"Items per Page: "}
      <select onChange={handlePageSizeChange} value={pageSize}>
        {pageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <Pagination
        className="my-3"
        count={count}
        page={page}
        siblingCount={1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
    </div>
    {/* page end */}

    <div className="col-md-12">
      {/* table start */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">board No</th>
            <th scope="col">board Title</th>
            <th scope="col">board Content</th>
            <th scope="col">board Writer</th>
            <th scope="col">view Cnt</th>
            <th scope="col">thread</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {threadBoard &&
            threadBoard.map((data, index) => (
              // 키값 추가 않하면 react 에서 경고를 추가 : 키는 내부적으로 리액트가 rerending 할때 체크하는 값임
              <tr key={index}>
                <td>{data.tid}</td>
                <td>{data.subject}</td>
                <td>{data.mainText}</td>
                <td>{data.writer}</td>
                <td>{data.views}</td>
                <td>
                  {data.tparent == 0 && (
                    <Link to={"#"}>
                      <span
                        className="badge bg-warning"
                        onClick={() => newThread(data)}
                      >
                        Thread
                      </span>
                    </Link>
                  )}
                </td>
                <td>
                  <Link
                    to={"/thread-board/tid/" + data.tid + "/tparent/" + data.tparent}
                  >
                    <span className="badge bg-success">Edit</span>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* table end */}

      {/* thread form start */}
      <div>
        {threadClicked && (
          <div className="col-md-12 row">
            <div className="col-md-12 row mt-2">
              <label htmlFor="tid" className="col-md-2 col-form-label">
                tid
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="tid"
                  placeholder={thread.tid || ""}
                  disabled
                  name="tid"
                />
              </div>
            </div>

            <div className="col-md-12 row mt-2">
              <label htmlFor="subject" className="col-md-2 col-form-label">
              subject
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="subject"
                  disabled
                  placeholder={thread.subject}
                  name="subject"
                />
              </div>
            </div>

            <div className="col-md-12 row mt-2">
              <label
                htmlFor="mainText"
                className="col-md-2 col-form-label"
              >
                mainText
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="mainText"
                  required
                  value={thread.mainText}
                  onChange={handleInputChange}
                  name="mainText"
                />
              </div>
            </div>

            <div className="col-md-12 row mt-2">
              <label
                htmlFor="writer"
                className="col-md-2 col-form-label"
              >
                Writer
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="writer"
                  required
                  value={thread.writer}
                  onChange={handleInputChange}
                  name="writer"
                />
              </div>
            </div>

            <div className="row px-4 mt-2">
              <button
                onClick={saveThread}
                className="btn btn-success mt-3 col-md-5"
              >
                Submit
              </button>
              <div className="col-md-2"></div>

              <button
                onClick={closeThread}
                className="btn btn-danger mt-3 col-md-5"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {/* thread form end */}
    </div>
  </div>
  )
}

export default ThreadBoardList