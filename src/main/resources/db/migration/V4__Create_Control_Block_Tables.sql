-- src/main/resources/db/migration/V4__Create_Control_Block_Tables.sql

-- Create table for storing user profiles
CREATE TABLE azbj_user_prof_ref (
    user_name VARCHAR2(50) PRIMARY KEY,
    user_profile VARCHAR2(100)
);

-- Create table for storing underwriter comments
CREATE TABLE azbj_uw_comments (
    policy_no VARCHAR2(20),
    user_id VARCHAR2(50),
    co_date DATE,
    uw_comments VARCHAR2(1000),
    PRIMARY KEY (policy_no, user_id, co_date)
);

-- Create table for storing RI CO details
CREATE TABLE azbj_ri_co_details (
    policy_ref VARCHAR2(20),
    user_id VARCHAR2(50),
    co_date DATE,
    uw_comments VARCHAR2(1000),
    PRIMARY KEY (policy_ref, user_id, co_date)
);

-- Create table for storing QC status details
CREATE TABLE azbj_phub_qc_status_detail (
    policy_no VARCHAR2(20) PRIMARY KEY,
    contract_id VARCHAR2(20),
    status VARCHAR2(20),
    substatus VARCHAR2(20),
    de1 VARCHAR2(100),
    de2 VARCHAR2(100),
    bbu VARCHAR2(100),
    lock_flg CHAR(1),
    ins_date DATE
);

-- Create table for storing tracker information
CREATE TABLE azbj_phub_tracker (
    proposal_no VARCHAR2(20) PRIMARY KEY,
    application_no VARCHAR2(20),
    perm_receipt_no VARCHAR2(20)
);

-- Create table for storing QC KClick data
CREATE TABLE azbj_qc_kclick_data (
    policy_ref VARCHAR2(20) PRIMARY KEY,
    flg CHAR(1)
);

-- Create table for storing Control Block users
CREATE TABLE control_users (
    user_id VARCHAR2(50) PRIMARY KEY,
    user_name VARCHAR2(100)
);

-- Create table for storing Control Block policies
CREATE TABLE control_policies (
    policy_no VARCHAR2(20) PRIMARY KEY,
    policy_status VARCHAR2(20),
    nominee_name VARCHAR2(100),
    old_nominee VARCHAR2(100),
    pr_desc VARCHAR2(1000),
    pr_desc1 VARCHAR2(1000),
    dt DATE,
    qc_skip_reason VARCHAR2(1000),
    chk CHAR(1),
    gug VARCHAR2(100),
    item1054 VARCHAR2(100),
    ch1 CHAR(1),
    ch2 CHAR(1),
    ch3 CHAR(1),
    ch4 CHAR(1),
    ch5 CHAR(1),
    ch6 CHAR(1),
    ch7 CHAR(1),
    ch8 CHAR(1),
    ch9 CHAR(1),
    ch10 CHAR(1),
    mdrt_flag CHAR(1),
    ch27 CHAR(1),
    ch28 CHAR(1),
    exit CHAR(1),
    uwcomments VARCHAR2(1000),
    users VARCHAR2(100),
    view_doc VARCHAR2(100),
    pb_skip CHAR(1),
    delink_comments VARCHAR2(1000),
    qc_fail_cases VARCHAR2(1000),
    solution_id VARCHAR2(100),
    nri_flag CHAR(1),
    hub_code VARCHAR2(100),
    otc_flag CHAR(1)
);