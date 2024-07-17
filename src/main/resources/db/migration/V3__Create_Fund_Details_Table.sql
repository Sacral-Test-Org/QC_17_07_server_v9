-- src/main/resources/db/migration/V3__Create_Fund_Details_Table.sql

-- Objective: Create the necessary table for storing fund details if it doesn't exist.

-- SQL Statements
CREATE TABLE IF NOT EXISTS Fund_Details (
    fundId VARCHAR(100),
    fundDescription VARCHAR(100),
    premiumApportionment VARCHAR(100)
);