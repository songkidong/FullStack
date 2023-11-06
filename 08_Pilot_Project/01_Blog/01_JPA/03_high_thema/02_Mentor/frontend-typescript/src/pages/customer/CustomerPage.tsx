// CustomerPage.tsx : rfce
import React, { useEffect } from 'react'
import Customer from '../../components/basic/customer/Customer'
import initMain from '../../assets/js/main';

function CustomerPage() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    <>
    {/* 제목 시작 */}
    {/* <!-- ======= Breadcrumbs ======= --> */}
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>고객 상세조회</h2>
        <p>고객 상세조회는 여기서 할 수 있습니다.</p>
      </div>
    </div>
    {/* <!-- End Breadcrumbs --> */}
    {/* 제목 끝 */}

    {/* <!-- ======= 고객 상세조회 Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <Customer />
        </div>
      </div>
    </section>
    {/* <!-- End 고객 상세조회 Section --> */}
  </>
  )
}

export default CustomerPage