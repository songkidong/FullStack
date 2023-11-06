// CustomerListPage.tsx
import React, { useEffect } from "react";
import CustomerList from "../../components/basic/customer/CustomerList";
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";

function CustomerListPage() {
  useEffect(() => {
    initScripts();
    initCustom();
  }, []);

  return (
    <>
      {/* 테마 디자인 적용 : 컨택트 소스 */}
      {/* 테마 제목 시작 */}
      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">고객 조회</h1>
                <p className="text-white">
                  여기에서 고객 정보를 확인하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 테마 제목 끝 */}

      {/* 본문 시작 */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            {/* 여기 */}
            <CustomerList />
          </div>
        </div>
      </div>
      {/* 본문 끝 */}
    </>
  );
}

export default CustomerListPage;
