// AddThreadBoard.tsx
// 추가페이지
import React, { useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import IThreadBoard from "../../../types/normal/IThreadBoard";
import ThreadBoardService from "../../../services/normal/ThreadBoardService";

function AddThreadBoard() {
  // todo: 변수 정의
  // todo: 객체 초기화
  const initialThreadBoard = {
    tid: null,
    subject: "", // 제목
    mainText: "", // 본문
    writer: "",
    views: 0, // 조회수
    tgroup: null, // 그룹번호
    tparent: 0, // 부모속성
  };

  // threadBoard 객체
  const [threadBoard, setThreadBoard] =
    useState<IThreadBoard>(initialThreadBoard);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // todo: 함수 정의
  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setThreadBoard({ ...threadBoard, [name]: value }); // 변수저장
  };

  // 저장 함수
  const saveThreadBoard = () => {
    // 임시 객체
    var data = {
        subject: threadBoard.subject, // 제목
        mainText: threadBoard.mainText, // 본문
        writer: threadBoard.writer,
        views: 0,     // 조회수
        tgroup: null, // 그룹번호
        tparent: 0, // 부모속성        
    };

    ThreadBoardService.createBoard(data) // 게시물 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newThreadBoard = () => {
    setThreadBoard(initialThreadBoard); //  초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  return (
    // 여기
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newThreadBoard}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add Thread Board" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="subject" className="col-form-label">
                  subject
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="subject"
                  required
                  className="form-control"
                  value={threadBoard.subject}
                  onChange={handleInputChange}
                  placeholder="subject"
                  name="subject"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="mainText" className="col-form-label">
                  mainText
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="mainText"
                  required
                  className="form-control"
                  value={threadBoard.mainText}
                  onChange={handleInputChange}
                  placeholder="mainText"
                  name="mainText"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="writer" className="col-form-label">
                  writer
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="writer"
                  required
                  className="form-control"
                  value={threadBoard.writer}
                  onChange={handleInputChange}
                  placeholder="writer"
                  name="writer"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveThreadBoard}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddThreadBoard;
