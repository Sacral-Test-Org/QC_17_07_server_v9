CREATE TABLE Rider_Details (
    id NUMBER PRIMARY KEY,
    cover_code VARCHAR2(50) NOT NULL,
    sum_insured NUMBER NOT NULL,
    benefit_term NUMBER NOT NULL,
    premium_term NUMBER NOT NULL
);