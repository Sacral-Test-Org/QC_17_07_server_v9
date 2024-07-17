-- src/main/resources/db/migration/V13__Update_QC_Status_Shipment.sql

-- SQL script to update the QC status based on the shipment details

DECLARE
    cnt NUMBER;
BEGIN
    -- Check if the shipment number already exists in the shipment details database
    SELECT COUNT(*) INTO cnt 
    FROM azbj_logistics_shipment_detail
    WHERE shipment_id = :dispatch.ship_no;

    IF cnt = 0 THEN
        -- Insert new shipment details into the database
        INSERT INTO azbj_logistics_shipments
            (shipment_id, policy_no, consignee_name, consignee_address, destination_city, pincode, shipment_through, pickup_request_no, shipment_creation_date, shipment_create_user, shipment_status, consignee_address1, consignee_address2, consignee_address5, consignee_phone, consignee_mobile)
        VALUES 
            (:dispatch.ship_no, SUBSTR(:dispatch.ship_no, 4, 10), :dispatch.consignee_name, :dispatch.con_add1, :dispatch.con_city, :dispatch.des_pin, 
            CASE WHEN :dispatch.pick_req_no IS NULL THEN NULL ELSE 'THROUGH REQUEST' END, 
            :dispatch.pick_req_no, SYSDATE, user, 'CLOSE', :dispatch.con_add2, :dispatch.con_add3, :dispatch.con_state, v_tel, v_mobile);

        INSERT INTO azbj_logistics_shipment_detail
            (shipment_id, policy_no, consignee_name, consignee_address, destination_city, pincode, shipment_through, pickup_request_no, shipment_create_date, shipment_create_user, shipment_status, shipment_group_status, pickup_status, weight, declared_value, awb_no, pre_alert_instruction, vendor_id, courier_no, shipment_send_from, shipment_send_to, shipment_send_user, send_date, consignee_address1, consignee_address2, consignee_address5, consignee_phone, consignee_mobile)
        VALUES 
            (:dispatch.ship_no, SUBSTR(:dispatch.ship_no, 4, 10), :dispatch.consignee_name, :dispatch.con_add1, :dispatch.con_city, :dispatch.des_pin, 
            CASE WHEN :dispatch.pick_req_no IS NULL THEN NULL ELSE 'THROUGH REQUEST' END, 
            :dispatch.pick_req_no, SYSDATE, user, 'INDIVIDUAL', 'INDIVIDUAL', 'CLOSE', :dispatch.wt, '', :dispatch.awb_no, '', :dispatch.ven_code, :dispatch.awb_no, '', :dispatch.con_city, user, SYSDATE, :dispatch.con_add2, :dispatch.con_add3, :dispatch.con_state, v_tel, v_mobile);

        INSERT INTO azbj_logistics_document_detail
        VALUES (:dispatch.ship_no, '', :dispatch.awb_no, TO_NUMBER(SUBSTR(:dispatch.ship_no, 1, 3)), 1, :dispatch.wt, :dispatch.wt);

        -- Update the QC status to 'N' for the given policy reference
        UPDATE AZBJ_QC_KCLICK_DATA 
        SET flg = 'N'
        WHERE POLICY_REF = :GLOBAL.POLICY_REF;

        -- Commit the transaction
        COMMIT;

        -- Notify the user that the shipment has been dispatched successfully
        azbj_message('W', 'Shipment dispatched successfully');

        -- Clear the form
        clear_form;
    ELSE
        -- Update the QC status to 'N' for the given policy reference
        UPDATE AZBJ_QC_KCLICK_DATA 
        SET flg = 'N'
        WHERE POLICY_REF = :GLOBAL.POLICY_REF;

        -- Commit the transaction
        COMMIT;

        -- Clear the form
        clear_form;

        -- Notify the user that the shipment number already exists
        azbj_message('E', 'Shipment no already dispatched');
    END IF;
END;