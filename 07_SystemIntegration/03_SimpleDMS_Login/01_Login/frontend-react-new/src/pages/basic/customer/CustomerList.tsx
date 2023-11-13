// QnaList.tsx : rfce
import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleCom from "../../../components/common/TitleCom";
import ICustomer from "../../../types/basic/ICustomer";
import CustomerService from "../../../services/basic/CustomerService";

function CustomerList() {
  // 변수 정의
  // customer 배열 변수
  const [customer, setCustomer] = useState<Array<ICustomer>>([]);
  // select 태그에 선택된 값을 저장할 변수 : 기본 (fullName)
  const [searchSelect, setSearchSelect] = useState<string>("fullName");
  // 검색어(input) 변수
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  // TODO: 공통 페이징 변수 4개
  // TODO: 공통 변수 : page(현재페이지), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  const pageSizes = [3, 6, 9]; // 공통 pageSizes : 배열 (select 박스 사용)

  // 함수 정의
  // 화면이 뜰때 실행되는 이벤트
  useEffect(() => {
    retrieveCustomer(); // 전체조회 실행
  }, [page, pageSize]);

  // 전체조회
  const retrieveCustomer = () => {
    // 벡엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    CustomerService.getAll(searchSelect, searchKeyword, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { customer, totalPages } = response.data;
        setCustomer(customer);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // select 태그 수동바인딩
  const onChangeSearchSelect = (e: any) => {
    setSearchSelect(e.target.value); // 화면값 -> 변수저장
  };

  // input 태그 수동바인딩
  const onChangeSearchKeyword = (e: any) => {
    setSearchKeyword(e.target.value); // 화면값 -> 변수저장
  };

  // TODO: 공통 페이징 함수 2개
  // TODO: handlePageSizeChange : pageSize 값 변경시 실행되는 함수
  // select 태그 수동 바인딩 : 화면값 -> 변수에 저장
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
    setPage(1); // 현재페이지번호 : 1로 강제설정
  };

  // TODO: Pagination 수동 바인딩(공통)
  // 페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  return (
    <>
      {/* 제목 start */}
      <TitleCom title="Customer List" />
      {/* 제목 end */}

      {/* question start */}
      <div className="row mb-5 justify-content-center">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <div className="col-2">
              <select
                className="form-select"
                onChange={onChangeSearchSelect}
                value={searchSelect}
              >
                <option key="fullName" value="fullName">
                  fullName
                </option>
                <option key="email" value="email">
                  email
                </option>
              </select>
            </div>

            <div className="col-9  w-50 input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Keyword"
                value={searchKeyword}
                onChange={onChangeSearchKeyword}
              />
            </div>

            <div className="input-group-append col-md-1">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={retrieveCustomer}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* question end */}

      <div className="col-md-12">
        {/* page control start */}
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
        {/* page control end */}

        {/* table start */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">fullName</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {customer &&
              customer.map((data) => (
                // 키값 추가 않하면 react 에서 경고를 추가 : 키는 내부적으로 리액트가 rerending 할때 체크하는 값임
                <tr key={data.cid}>
                  <td>{data.fullName}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <Link to={"/customer/" + data.cid}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* table end */}
      </div>
    </>
  );
}

export default CustomerList;
