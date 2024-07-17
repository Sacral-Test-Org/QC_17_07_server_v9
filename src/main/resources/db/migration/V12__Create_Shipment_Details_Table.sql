-- src/main/resources/db/migration/V12__Create_Shipment_Details_Table.sql

-- Create table for storing shipment details if it doesn't exist
CREATE TABLE IF NOT EXISTS azbj_logistics_shipment_detail (
    shipment_id VARCHAR2(50) PRIMARY KEY,
    policy_no VARCHAR2(50) NOT NULL,
    consignee_name VARCHAR2(100) NOT NULL,
    consignee_address VARCHAR2(255) NOT NULL,
    destination_city VARCHAR2(100) NOT NULL,
    pincode VARCHAR2(10) NOT NULL,
    shipment_through VARCHAR2(50),
    pickup_request_no VARCHAR2(50),
    shipment_create_date DATE DEFAULT SYSDATE NOT NULL,
    shipment_create_user VARCHAR2(50) NOT NULL,
    shipment_status VARCHAR2(20) DEFAULT 'INDIVIDUAL' NOT NULL,
    shipment_group_status VARCHAR2(20) DEFAULT 'INDIVIDUAL' NOT NULL,
    pickup_status VARCHAR2(20) DEFAULT 'CLOSE' NOT NULL,
    weight NUMBER(10, 2) NOT NULL,
    declared_value NUMBER(10, 2),
    awb_no VARCHAR2(50) NOT NULL,
    pre_alert_instruction VARCHAR2(255),
    vendor_id VARCHAR2(50) NOT NULL,
    courier_no VARCHAR2(50),
    shipment_send_from VARCHAR2(100),
    shipment_send_to VARCHAR2(100),
    shipment_send_user VARCHAR2(50) NOT NULL,
    send_date DATE DEFAULT SYSDATE NOT NULL,
    consignee_address1 VARCHAR2(255),
    consignee_address2 VARCHAR2(255),
    consignee_address5 VARCHAR2(255),
    consignee_phone VARCHAR2(20),
    consignee_mobile VARCHAR2(20)
);

-- Create table for storing shipment summary if it doesn't exist
CREATE TABLE IF NOT EXISTS azbj_logistics_shipments (
    shipment_id VARCHAR2(50) PRIMARY KEY,
    policy_no VARCHAR2(50) NOT NULL,
    consignee_name VARCHAR2(100) NOT NULL,
    consignee_address VARCHAR2(255) NOT NULL,
    destination_city VARCHAR2(100) NOT NULL,
    pincode VARCHAR2(10) NOT NULL,
    shipment_through VARCHAR2(50),
    pickup_request_no VARCHAR2(50),
    shipment_creation_date DATE DEFAULT SYSDATE NOT NULL,
    shipment_create_user VARCHAR2(50) NOT NULL,
    shipment_status VARCHAR2(20) DEFAULT 'CLOSE' NOT NULL,
    consignee_address1 VARCHAR2(255),
    consignee_address2 VARCHAR2(255),
    consignee_address5 VARCHAR2(255),
    consignee_phone VARCHAR2(20),
    consignee_mobile VARCHAR2(20)
);

-- Create table for storing document details if it doesn't exist
CREATE TABLE IF NOT EXISTS azbj_logistics_document_detail (
    shipment_id VARCHAR2(50) PRIMARY KEY,
    document_id VARCHAR2(50),
    awb_no VARCHAR2(50) NOT NULL,
    document_type NUMBER(3),
    document_sequence NUMBER(3),
    weight NUMBER(10, 2) NOT NULL,
    declared_value NUMBER(10, 2)
);

-- Create table for storing QC data if it doesn't exist
CREATE TABLE IF NOT EXISTS AZBJ_QC_KCLICK_DATA (
    POLICY_REF VARCHAR2(50) PRIMARY KEY,
    flg CHAR(1) DEFAULT 'Y' NOT NULL
);