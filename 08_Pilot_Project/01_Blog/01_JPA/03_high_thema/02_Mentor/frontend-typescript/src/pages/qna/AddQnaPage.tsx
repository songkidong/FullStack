// AddQnaPage.tsx : rfce
import React, { useEffect } from 'react'
import AddQna from '../../components/basic/qna/AddQna'
import initMain from '../../assets/js/main';

function AddQnaPage() {
  useEffect(() => {
    initMain();
  }, []);
  return (
    <>
    {/* 제목 시작 */}
    {/* <!-- ======= Breadcrumbs ======= --> */}
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>Q & A 추가</h2>
        <p>Q & A 추가는 여기서 할 수 있습니다.</p>
      </div>
    </div>
    {/* <!-- End Breadcrumbs --> */}
    {/* 제목 끝 */}

    {/* <!-- ======= Q & A 추가 Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <AddQna />
        </div>
      </div>
    </section>
    {/* <!-- End Q & A 추가 Section --> */}
  </>
  )
}

export default AddQnaPage