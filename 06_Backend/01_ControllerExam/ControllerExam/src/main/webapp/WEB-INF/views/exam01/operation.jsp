<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%--TODO: jstl 표현식 사용을 위한 import --%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <%-- bootstrap css cdn   --%>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
<%-- TODO: spring 에서 전송한 값으로 사칙연산 , 논리연산 해보기  --%>
<div class="container p-3">
    <h2>산술연산자</h2>
    <div class="ms-3 mt-3">
        <%-- TODO: 문자열로 생긴 숫자는 자동으로 형변환 됨 (사칙연산시)     --%>
        <%--   jsp : java server page , 자바 문법 모두 사용가능 --%>
        <%--   jsp(.jsp) -> servlet(.java) --%>
        <p>덧셈 : ${strNum + 10}</p>
        <p>뺄셈 : ${strNum - 10}</p>
        <p>곱셈 : ${strNum * 10}</p>
        <p>나눗셈 : ${strNum / 10}</p>
        <p>나머지 : ${strNum % 10}</p>

        <p>숫자 연산 : ${iNum + 10}</p>

        <p>논리합 : ${bVal || false}</p>
        <p>논리곱 : ${bVal && false}</p>

        <p> 같음     : ${iNum == 100}</p>
        <p> 같지않음  : ${iNum != 100}</p>
        <p> 보다큼   : ${iNum >= 100}</p>
        <p> 보다작음  : ${iNum <= 100}</p>

        <p>조건(3항)  : ${(iNum == 100)? "100임" : "100이 아님"}</p>
        <%--  TODO: empty(빈) : 변수의 값이 비었으면(null, 0, "") true, 아니면 false --%>
        <p>empty: ${empty iNum}</p>
        <p>empty: ${not empty iNum}</p

    </div>

</div>

</body>
</html>