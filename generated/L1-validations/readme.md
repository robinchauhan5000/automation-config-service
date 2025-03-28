

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_ID.1**: $.message.intent.category.id must be present in the payload
	  - **condition REQUIRED_MESSAGE_ID.2**: every element of $.message.intent.category.id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
	- **condition REQUIRED_MESSAGE_DAYS**: $.message.intent.provider.time.days must be present in the payload
	
	- **condition REQUIRED_MESSAGE_HOLIDAYS**: $.message.intent.provider.time.schedule.holidays[*] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION**: $.message.intent.provider.time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_START**: $.message.intent.provider.time.range.start must be present in the payload
	
	- **condition REQUIRED_MESSAGE_END**: $.message.intent.provider.time.range.end must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.intent.fulfillment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.intent.fulfillment.type must be in ["Delivery", "Return", "RTO"]
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.intent.fulfillment.start.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.intent.fulfillment.start.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_21**: $.message.intent.fulfillment.end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_22**: $.message.intent.fulfillment.end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_23**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_23.1**: $.message.intent.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_23.2**: every element of $.message.intent.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_UNIT**: $.message.intent['@ondc/org/payload_details'].weight.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.intent['@ondc/org/payload_details'].weight.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_26**: $.message.intent['@ondc/org/payload_details'].dimensions.length.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_27**: $.message.intent['@ondc/org/payload_details'].dimensions.length.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_28**: $.message.intent['@ondc/org/payload_details'].dimensions.breadth.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_29**: $.message.intent['@ondc/org/payload_details'].dimensions.breadth.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_30**: $.message.intent['@ondc/org/payload_details'].dimensions.height.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_31**: $.message.intent['@ondc/org/payload_details'].dimensions.height.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY**: $.message.intent['@ondc/org/payload_details'].category must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.intent['@ondc/org/payload_details'].value.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_34**: $.message.intent['@ondc/org/payload_details'].value.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DANGEROUS_GOODS**: $.message.intent['@ondc/org/payload_details'].dangerous_goods must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.intent.fulfillment.type must be in ["Delivery", "Return", "RTO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_3**: every element of $.message.intent.fulfillment.start.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.start.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.intent.fulfillment.start.instructions.code must be in ["2", "3", "4", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.start.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_5**: every element of $.message.intent.fulfillment.end.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.end.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_6**: every element of $.message.intent.fulfillment.end.instructions.code must be in ["1", "2", "3", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.end.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_7**: every element of $.message.intent.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_ID**: every element of $.message.intent.category.id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_ID** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.category.id must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_9**: every element of $.message.intent.item.descriptor.code must be in ["P2P", "P2H2P"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.item.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.intent.fulfillment.tags[*].code must be in ["linked_provider", "linked_order", "fulfill_request"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_linked_provider**: every element of $.message.intent.fulfillment.tags[?(@.code=='linked_provider')].list[*].code must be in ["id", "name"]
	
	- **condition validate_tag_0_linked_order**: every element of $.message.intent.fulfillment.tags[?(@.code=='linked_order')].list[*].code must be in ["cod_order", "currency", "declared_value", "category", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height"]
	
	- **condition validate_tag_0_fulfill_request**: every element of $.message.intent.fulfillment.tags[?(@.code=='fulfill_request')].list[*].code must be in ["rider_count", "order_count", "rate_basis", "motorable_distance", "pickup_slot_start", "pickup_slot_end", "delivery_slot_start", "delivery_slot_end"]
	
	- **condition validate_tag_1**: every element of $.message.intent.tags[*].code must be in ["lbnp_features", "lbnp_sla_terms"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_1_lbnp_features**: every element of $.message.intent.tags[?(@.code=='lbnp_features')].list[*].code must be in ["00B", "00E", "01D", "005", "009", "00C", "000", "001", "002", "003", "004", "006", "007", "008", "00A", "00D", "00F", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "01A", "01B", "01C", "01D", "01E", "01F", "020", "021"]
	
	- **condition validate_tag_1_lbnp_sla_terms**: every element of $.message.intent.tags[?(@.code=='lbnp_sla_terms')].list[*].code must be in ["metric", "base_unit", "base_min", "base_max", "penalty_min", "penalty_max", "penalty_unit", "penalty_value"]

- **init** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID**: $.message.order.items[*].category_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
	- **condition REQUIRED_MESSAGE_ID_18**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.fulfillments[*].start.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.fulfillments[*].start.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.fulfillments[*].start.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.fulfillments[*].start.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_30**: $.message.order.fulfillments[*].end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_31**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_32**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_33**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_34**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_35**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_36**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_37**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_38**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_39**: $.message.order.billing.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_40**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_41**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_42**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_43**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_44**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_45**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_46**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TAX_NUMBER**: $.message.order.billing.tax_number must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_48**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL_49**: $.message.order.billing.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: $.message.order.payment.collected_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_53**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_53.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_53.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_4**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in ["lbnp", "lsp"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].start.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_masked_contact**: every element of $.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].end.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_1_masked_contact**: every element of $.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].code must be in ["linked_provider", "fulfill_request", "fulfill_response", "linked_order"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_2_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in ["id", "name", "address"]
	
	- **condition validate_tag_2_fulfill_request**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_request')].list[*].code must be in ["rider_count", "order_count", "rate_basis", "motorable_distance", "pickup_slot_start", "pickup_slot_end", "delivery_slot_start", "delivery_slot_end"]
	
	- **condition validate_tag_2_fulfill_response**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_response')].list[*].code must be in ["rider_count", "order_count", "rate_basis"]
	
	- **condition validate_tag_2_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in ["id", "currency", "declared_value", "category", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height"]
	
	- **condition validate_tag_3**: every element of $.message.order.items[*].tags[*].code must be in ["type"]
	
		> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_3_type**: every element of $.message.order.items[*].tags[?(@.code=='type')].list[*].code must be in ["type"]
	
	- **condition validate_tag_4**: every element of $.message.order.tags[*].code must be in ["bap_terms"]
	
		> Note: **Condition validate_tag_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_4_bap_terms**: every element of $.message.order.tags[?(@.code=='bap_terms')].list[*].code must be in ["accept_bpp_terms"]
	
	- **init_fulfillment_id_validations** : All the following sub conditions must pass as per the api requirement
	
		fulfillment_id or fulfillment_ids should be present in items
		
		Fulfillment id in items should be mapped correctly in fulfillments array

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: $.message.order.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.1**: $.message.order.items[*].category_id must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.2**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
	- **condition REQUIRED_MESSAGE_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.order.items[*].time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_26**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_27**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_28**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
	- **condition REQUIRED_MESSAGE_DURATION_30**: $.message.order.fulfillments[*].start.time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.fulfillments[*].start.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_32**: $.message.order.fulfillments[*].start.location.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_34**: $.message.order.fulfillments[*].start.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.fulfillments[*].start.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_38**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.fulfillments[*].start.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.fulfillments[*].start.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_43**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_43.1**: $.message.order.fulfillments[*].start.instructions.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_43.2**: every element of $.message.order.fulfillments[*].start.instructions.code must be in ["2", "3", "4", "5"]
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.order.fulfillments[*].start.instructions.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CONTENT_TYPE**: $.message.order.fulfillments[*].start.instructions.additional_desc.content_type must be present in the payload
	
	- **condition REQUIRED_MESSAGE_URL**: $.message.order.fulfillments[*].start.instructions.additional_desc.url must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_47**: $.message.order.fulfillments[*].end.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_48**: $.message.order.fulfillments[*].end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_49**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_50**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_51**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_52**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_53**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_54**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_55**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_56**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL_57**: $.message.order.fulfillments[*].end.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_58**: $.message.order.billing.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_59**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_60**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_61**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_62**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_63**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_64**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_65**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TAX_NUMBER**: $.message.order.billing.tax_number must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_67**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL_68**: $.message.order.billing.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: $.message.order.payment.collected_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_72**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_72.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_72.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_NAME_73**: $.message.order['@ondc/org/linked_order'].items[*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_76**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_77**: $.message.order['@ondc/org/linked_order'].items[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_78**: $.message.order['@ondc/org/linked_order'].items[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_79**: $.message.order['@ondc/org/linked_order'].provider.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_80**: $.message.order['@ondc/org/linked_order'].provider.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_81**: $.message.order['@ondc/org/linked_order'].provider.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_82**: $.message.order['@ondc/org/linked_order'].provider.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_83**: $.message.order['@ondc/org/linked_order'].provider.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_84**: $.message.order['@ondc/org/linked_order'].provider.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_85**: $.message.order['@ondc/org/linked_order'].provider.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_86**: $.message.order['@ondc/org/linked_order'].order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_87**: $.message.order['@ondc/org/linked_order'].order.weight.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_88**: $.message.order['@ondc/org/linked_order'].order.weight.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_89**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_90**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_91**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_92**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_93**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_94**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT_95**: $.message.order.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_96**: $.message.order.updated_at must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_ID**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_ID** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].category_id must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_6**: every element of $.message.order.fulfillments[*].start.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_7**: every element of $.message.order.fulfillments[*].start.instructions.code must be in ["2", "3", "4", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_8**: every element of $.message.order.fulfillments[*].end.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_9**: every element of $.message.order.fulfillments[*].end.instructions.code must be in ["1", "2", "3", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_10**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_11**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in ["lbnp", "lsp"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.items[*].tags[*].code must be in ["type"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_type**: every element of $.message.order.items[*].tags[?(@.code=='type')].list[*].code must be in ["type"]
	
	- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].start.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_1_masked_contact**: every element of $.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].end.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_2_masked_contact**: every element of $.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_3**: every element of $.message.order.fulfillments[*].tags[*].code must be in ["linked_provider", "linked_order", "linked_order_item", "state", "rto_action", "provider", "order", "cod_settlement_detail", "rto_verification", "items", "reverseqc_input"]
	
		> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_3_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in ["id", "name", "address", "cred_code", "cred_desc"]
	
	- **condition validate_tag_3_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in ["id", "prep_time", "cod_order", "currency", "declared_value", "collection_amount", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height", "shipment_type"]
	
	- **condition validate_tag_3_linked_order_item**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')].list[*].code must be in ["category", "name", "currency", "value", "quantity", "weight_unit", "weight_value", "return_to_origin"]
	
	- **condition validate_tag_3_state**: every element of $.message.order.fulfillments[*].tags[?(@.code=='state')].list[*].code must be in ["ready_to_ship"]
	
	- **condition validate_tag_3_rto_action**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rto_action')].list[*].code must be in ["return_to_origin"]
	
	- **condition validate_tag_3_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='provider')].list[*].code must be in ["name", "address", "tax_id"]
	
	- **condition validate_tag_3_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='order')].list[*].code must be in ["id", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height"]
	
	- **condition validate_tag_3_cod_settlement_detail**: every element of $.message.order.fulfillments[*].tags[?(@.code=='cod_settlement_detail')].list[*].code must be in ["settlement_window", "settlement_type", "beneficiary_name", "upi_address", "bank_account_no", "ifsc_code", "bank_name", "branch_name"]
	
	- **condition validate_tag_3_rto_verification**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rto_verification')].list[*].code must be in ["code", "short_desc"]
	
	- **condition validate_tag_3_items**: every element of $.message.order.fulfillments[*].tags[?(@.code=='items')].list[*].code must be in ["category", "name", "currency", "value", "quantity", "weight_unit", "weight_value", "hsn_code", "ebn_exempt"]
	
	- **condition validate_tag_3_reverseqc_input**: every element of $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_input')].list[*].code must be in ["P001", "P003", "Q001"]
	
	- **condition validate_tag_4**: every element of $.message.order.tags[*].code must be in ["bap_terms", "lbnp_sla_terms"]
	
		> Note: **Condition validate_tag_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_4_bap_terms**: every element of $.message.order.tags[?(@.code=='bap_terms')].list[*].code must be in ["accept_bpp_terms"]
	
	- **condition validate_tag_4_lbnp_sla_terms**: every element of $.message.order.tags[?(@.code=='lbnp_sla_terms')].list[*].code must be in ["metric", "base_unit", "base_min", "base_max", "penalty_min", "penalty_max", "penalty_unit", "penalty_value"]
	
	- **confirm_fulfillment_id_validations** : All the following sub conditions must pass as per the api requirement
	
		fulfillment_id or fulfillment_ids should be present in items
		
		Fulfillment id in items should be mapped correctly in fulfillments array
	
	- **instructions_validations** : All the following sub conditions must pass as per the api requirement
	
		In start instructions, short description is required when ready_to_ship = yes
		
			> Note: **Condition start_instructions_short_desc_present** can be skipped if the following conditions are met:
			>
			> - **condition B**: every element of $.message.order.fulfillments[*].tags[?(@.code=='state')].list[?(@.code=='ready_to_ship')].value must **not** be in ["yes"]
	
	Acceptance to the LSP terms should be provided by LBNP in order/tags

- **status** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ORDER_ID**: $.message.order_id must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload

- **track** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ORDER_ID**: $.message.order_id must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ORDER_ID**: $.message.order_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CANCELLATION_REASON_ID**: $.message.cancellation_reason_id must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	Appropriate cancellation code should be used by LBNP

- **update** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATE_TARGET**: $.message.update_target must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.1**: $.message.order.items[*].category_id must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.2**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.updated_at must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.state must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_ID**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_ID** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].category_id must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_6**: every element of $.message.order.fulfillments[*].start.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_7**: every element of $.message.order.fulfillments[*].start.instructions.code must be in ["2", "3", "4", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_8**: every element of $.message.order.fulfillments[*].end.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_9**: every element of $.message.order.fulfillments[*].end.instructions.code must be in ["1", "2", "3", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_10**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_11**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in ["lbnp", "lsp"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].code must be in ["state", "linked_provider", "linked_order", "linked_order_item"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_state**: every element of $.message.order.fulfillments[*].tags[?(@.code=='state')].list[*].code must be in ["ready_to_ship", "order_ready"]
	
	- **condition validate_tag_0_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in ["id", "name", "address"]
	
	- **condition validate_tag_0_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in ["id", "currency", "declared_value", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height", "shipment_type"]
	
	- **condition validate_tag_0_linked_order_item**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')].list[*].code must be in ["category", "name", "currency", "value", "quantity", "weight_unit", "weight_value"]
	
	- **instructions_validations** : All the following sub conditions must pass as per the api requirement
	
		In start instructions, short description is required when ready_to_ship = yes
		
			> Note: **Condition start_instructions_short_desc_present** can be skipped if the following conditions are met:
			>
			> - **condition B**: every element of $.message.order.fulfillments[*].tags[?(@.code=='state')].list[?(@.code=='ready_to_ship')].value must **not** be in ["yes"]

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.catalog['bpp/descriptor'].name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.catalog['bpp/providers'][*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_15**: $.message.catalog['bpp/providers'][*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.catalog['bpp/providers'][*].descriptor.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.catalog['bpp/providers'][*].descriptor.long_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_18**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_ID_18.1**: $.message.catalog['bpp/providers'][*].categories[*].id must be present in the payload
	  - **condition REQUIRED_MESSAGE_ID_18.2**: every element of $.message.catalog['bpp/providers'][*].categories[*].id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
	- **condition REQUIRED_MESSAGE_LABEL**: $.message.catalog['bpp/providers'][*].categories[*].time.label must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION**: $.message.catalog['bpp/providers'][*].categories[*].time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.catalog['bpp/providers'][*].categories[*].time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_22**: $.message.catalog['bpp/providers'][*].fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.catalog['bpp/providers'][*].fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
	- **condition REQUIRED_MESSAGE_ID_24**: $.message.catalog['bpp/providers'][*].items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PARENT_ITEM_ID**: $.message.catalog['bpp/providers'][*].items[*].parent_item_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.1**: $.message.catalog['bpp/providers'][*].items[*].category_id must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.2**: every element of $.message.catalog['bpp/providers'][*].items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.catalog['bpp/providers'][*].items[*].fulfillment_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.catalog['bpp/providers'][*].items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.catalog['bpp/providers'][*].items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
	- **condition REQUIRED_MESSAGE_NAME_29**: $.message.catalog['bpp/providers'][*].items[*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC_30**: $.message.catalog['bpp/providers'][*].items[*].descriptor.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LONG_DESC_31**: $.message.catalog['bpp/providers'][*].items[*].descriptor.long_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.catalog['bpp/providers'][*].items[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.catalog['bpp/providers'][*].items[*].price.value must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.catalog['bpp/providers'][*].items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog['bpp/providers'][*].items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_ID**: every element of $.message.catalog['bpp/providers'][*].items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_ID** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog['bpp/providers'][*].items[*].category_id must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_ID**: every element of $.message.catalog['bpp/providers'][*].categories[*].id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_ID** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog['bpp/providers'][*].categories[*].id must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog['bpp/providers'][*].fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.catalog['bpp/descriptor'].tags[*].code must be in ["bpp_terms"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog['bpp/descriptor'].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_bpp_terms**: every element of $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[*].code must be in ["static_terms", "static_terms_new", "effective_date", "np_tax_type", "max_liability", "max_liability_cap", "mandatory_arbitration", "court_jurisdiction", "delay_interest"]
	
	- **condition validate_tag_1**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].tags[*].code must be in ["distance", "fulfill_request", "fulfill_response"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog['bpp/providers'][*].fulfillments[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_1_distance**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='distance')].list[*].code must be in ["motorable_distance_type", "motorable_distance"]
	
	- **condition validate_tag_1_fulfill_request**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='fulfill_request')].list[*].code must be in ["rider_count", "order_count", "rate_basis", "motorable_distance", "pickup_slot_start", "pickup_slot_end", "delivery_slot_start", "delivery_slot_end"]
	
	- **condition validate_tag_1_fulfill_response**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='fulfill_response')].list[*].code must be in ["rider_count", "order_count", "rate_basis"]
	
	- **condition validate_tag_2**: every element of $.message.catalog['bpp/providers'][*].items[*].tags[*].code must be in ["type"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog['bpp/providers'][*].items[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_2_type**: every element of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')].list[*].code must be in ["type", "unit"]
	
	- **condition validate_tag_3**: every element of $.message.catalog['bpp/providers'][*].tags[*].code must be in ["lsp_features", "special_req"]
	
		> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog['bpp/providers'][*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_3_lsp_features**: every element of $.message.catalog['bpp/providers'][*].tags[?(@.code=='lsp_features')].list[*].code must be in ["00B", "00E", "01D", "005", "009", "00C", "000", "001", "002", "003", "004", "006", "007", "008", "00A", "00D", "00F", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "01A", "01B", "01C", "01D", "01E", "01F", "020", "021"]
	
	- **condition validate_tag_3_special_req**: every element of $.message.catalog['bpp/providers'][*].tags[?(@.code=='special_req')].list[*].code must be in ["dangerous_goods", "cold_storage", "open_box_delivery", "fragile_handling", "cod_order"]
	
	Static terms should be sent inside bpp/descriptor/tags

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.fulfillments[*].start.location.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.fulfillments[*].start.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.fulfillments[*].start.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.fulfillments[*].start.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.fulfillments[*].start.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_27**: $.message.order.fulfillments[*].end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_28**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_29**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_30**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_31**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_32**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_33**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_34**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_35**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_40**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_41**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TTL**: $.message.order.quote.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_43**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_43.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_43.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: $.message.order.payment.collected_by must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_3**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in ["lbnp", "lsp"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].start.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_masked_contact**: every element of $.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].end.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_1_masked_contact**: every element of $.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].code must be in ["rider_check", "linked_provider", "fulfill_request", "fulfill_response", "linked_order", "linked_order_item"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_2_rider_check**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rider_check')].list[*].code must be in ["inline_check_for_rider"]
	
	- **condition validate_tag_2_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in ["id", "name", "address"]
	
	- **condition validate_tag_2_fulfill_request**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_request')].list[*].code must be in ["rider_count", "order_count", "rate_basis", "motorable_distance", "pickup_slot_start", "pickup_slot_end", "delivery_slot_start", "delivery_slot_end"]
	
	- **condition validate_tag_2_fulfill_response**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_response')].list[*].code must be in ["rider_count", "order_count", "rate_basis"]
	
	- **condition validate_tag_2_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in ["id", "currency", "declared_value", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height"]
	
	- **condition validate_tag_2_linked_order_item**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')].list[*].code must be in ["category", "name", "currency", "value", "quantity", "weight_unit", "weight_value"]
	
	- **condition validate_tag_3**: every element of $.message.order.tags[*].code must be in ["bpp_terms"]
	
		> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_3_bpp_terms**: every element of $.message.order.tags[?(@.code=='bpp_terms')].list[*].code must be in ["static_terms"]
	
	- **on_init_fulfillment_id_validations** : All the following sub conditions must pass as per the api requirement
	
		fulfillment_id or fulfillment_ids should be present in items
		
		Fulfillment id in items should be mapped correctly in fulfillments array

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.1**: $.message.order.items[*].category_id must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.2**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
	- **condition REQUIRED_MESSAGE_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.order.items[*].time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_27**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_28**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_29**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
	- **condition REQUIRED_MESSAGE_CODE_31**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_31.1**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_31.2**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]
	
	- **condition REQUIRED_MESSAGE_TRACKING**: $.message.order.fulfillments[*].tracking must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.fulfillments[*].start.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_34**: $.message.order.fulfillments[*].start.location.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_36**: $.message.order.fulfillments[*].start.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.fulfillments[*].start.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_40**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.fulfillments[*].start.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.fulfillments[*].start.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION_45**: $.message.order.fulfillments[*].start.time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_46**: $.message.order.fulfillments[*].end.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_47**: $.message.order.fulfillments[*].end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_48**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_49**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_50**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_51**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_52**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_53**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_54**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_55**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_56**: $.message.order.billing.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_57**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_58**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_59**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_60**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_61**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_62**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_63**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TAX_NUMBER**: $.message.order.billing.tax_number must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_65**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL_66**: $.message.order.billing.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: $.message.order.payment.collected_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_70**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_70.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_70.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID_71**: $.message.order['@ondc/org/linked_order'].items[*].category_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_72**: $.message.order['@ondc/org/linked_order'].items[*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_75**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_76**: $.message.order['@ondc/org/linked_order'].items[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_77**: $.message.order['@ondc/org/linked_order'].items[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_78**: $.message.order['@ondc/org/linked_order'].provider.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_79**: $.message.order['@ondc/org/linked_order'].provider.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_80**: $.message.order['@ondc/org/linked_order'].provider.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_81**: $.message.order['@ondc/org/linked_order'].provider.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_82**: $.message.order['@ondc/org/linked_order'].provider.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_83**: $.message.order['@ondc/org/linked_order'].provider.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_84**: $.message.order['@ondc/org/linked_order'].provider.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_85**: $.message.order['@ondc/org/linked_order'].order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_86**: $.message.order['@ondc/org/linked_order'].order.weight.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_87**: $.message.order['@ondc/org/linked_order'].order.weight.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_88**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_89**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_90**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_91**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_92**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_93**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT_94**: $.message.order.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_95**: $.message.order.updated_at must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.state must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_ID**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_ID** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].category_id must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_6**: every element of $.message.order.fulfillments[*].start.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_7**: every element of $.message.order.fulfillments[*].start.instructions.code must be in ["2", "3", "4", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_8**: every element of $.message.order.fulfillments[*].end.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_9**: every element of $.message.order.fulfillments[*].end.instructions.code must be in ["1", "2", "3", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_10**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_11**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in ["lbnp", "lsp"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.items[*].tags[*].code must be in ["type"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_type**: every element of $.message.order.items[*].tags[?(@.code=='type')].list[*].code must be in ["type"]
	
	- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].start.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_1_masked_contact**: every element of $.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].end.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_2_masked_contact**: every element of $.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_3**: every element of $.message.order.fulfillments[*].tags[*].code must be in ["linked_provider", "linked_order", "linked_order_item", "state", "rto_action", "shipping_label", "weather_check"]
	
		> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_3_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in ["id", "name", "address"]
	
	- **condition validate_tag_3_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in ["id", "currency", "declared_value", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height", "shipment_type"]
	
	- **condition validate_tag_3_linked_order_item**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')].list[*].code must be in ["category", "name", "currency", "value", "quantity", "weight_unit", "weight_value"]
	
	- **condition validate_tag_3_state**: every element of $.message.order.fulfillments[*].tags[?(@.code=='state')].list[*].code must be in ["ready_to_ship"]
	
	- **condition validate_tag_3_rto_action**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rto_action')].list[*].code must be in ["return_to_origin"]
	
	- **condition validate_tag_3_shipping_label**: every element of $.message.order.fulfillments[*].tags[?(@.code=='shipping_label')].list[*].code must be in ["type", "url"]
	
	- **condition validate_tag_3_weather_check**: every element of $.message.order.fulfillments[*].tags[?(@.code=='weather_check')].list[*].code must be in ["raining"]
	
	- **condition validate_tag_4**: every element of $.message.order.tags[*].code must be in ["bpp_terms", "bap_terms", "lbnp_sla_terms"]
	
		> Note: **Condition validate_tag_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_4_bpp_terms**: every element of $.message.order.tags[?(@.code=='bpp_terms')].list[*].code must be in ["static_terms"]
	
	- **condition validate_tag_4_bap_terms**: every element of $.message.order.tags[?(@.code=='bap_terms')].list[*].code must be in ["accept_bpp_terms"]
	
	- **condition validate_tag_4_lbnp_sla_terms**: every element of $.message.order.tags[?(@.code=='lbnp_sla_terms')].list[*].code must be in ["metric", "base_unit", "base_min", "base_max", "penalty_min", "penalty_max", "penalty_unit", "penalty_value"]
	
	- **on_confirm_fulfillment_id_validations** : All the following sub conditions must pass as per the api requirement
	
		fulfillment_id or fulfillment_ids should be present in items
		
		Fulfillment id in items should be mapped correctly in fulfillments array

- **on_track** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.tracking.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.tracking.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.tracking.location.time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.tracking.location.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.tracking.status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.tracking.status must be in ["active", "inactive"]
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.tracking.status must be in ["active", "inactive"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.tracking.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.tracking.tags[*].code must be in ["order", "config", "path"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.tracking.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_order**: every element of $.message.tracking.tags[?(@.code=='order')].list[*].code must be in ["id"]
	
	- **condition validate_tag_0_config**: every element of $.message.tracking.tags[?(@.code=='config')].list[*].code must be in ["attr", "type"]
	
	- **condition validate_tag_0_path**: every element of $.message.tracking.tags[?(@.code=='path')].list[*].code must be in ["lat_lng", "sequence"]

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
	- **condition REQUIRED_MESSAGE_CANCELLED_BY**: $.message.order.cancellation.cancelled_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.cancellation.reason.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_18**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.1**: $.message.order.items[*].category_id must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.2**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
	- **condition REQUIRED_MESSAGE_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.order.items[*].time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_28**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_29**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
	- **condition REQUIRED_MESSAGE_CODE_32**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_32.1**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_32.2**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]
	
	- **condition REQUIRED_MESSAGE_TYPE_33**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_33.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_33.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: $.message.order.payment.collected_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: $.message.order.payment.status must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.billing.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_37**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_41**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TAX_NUMBER**: $.message.order.billing.tax_number must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.billing.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID_49**: $.message.order['@ondc/org/linked_order'].items[*].category_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_50**: $.message.order['@ondc/org/linked_order'].items[*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_53**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_54**: $.message.order['@ondc/org/linked_order'].items[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_55**: $.message.order['@ondc/org/linked_order'].items[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_56**: $.message.order['@ondc/org/linked_order'].provider.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_57**: $.message.order['@ondc/org/linked_order'].provider.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_58**: $.message.order['@ondc/org/linked_order'].provider.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_59**: $.message.order['@ondc/org/linked_order'].provider.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_60**: $.message.order['@ondc/org/linked_order'].provider.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_61**: $.message.order['@ondc/org/linked_order'].provider.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_62**: $.message.order['@ondc/org/linked_order'].provider.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_63**: $.message.order['@ondc/org/linked_order'].order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_64**: $.message.order['@ondc/org/linked_order'].order.weight.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_65**: $.message.order['@ondc/org/linked_order'].order.weight.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_66**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_67**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_68**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_69**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_70**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_71**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_72**: $.message.order.updated_at must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.state must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_ID**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_ID** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].category_id must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_6**: every element of $.message.order.fulfillments[*].start.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_7**: every element of $.message.order.fulfillments[*].start.instructions.code must be in ["2", "3", "4", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_8**: every element of $.message.order.fulfillments[*].end.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_9**: every element of $.message.order.fulfillments[*].end.instructions.code must be in ["1", "2", "3", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_10**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_11**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in ["lbnp", "lsp"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].start.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_masked_contact**: every element of $.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].end.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_1_masked_contact**: every element of $.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].code must be in ["igm_request", "precancel_state", "linked_provider", "linked_order", "linked_order_item", "shipping_label", "rto_event", "ebn"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_2_igm_request**: every element of $.message.order.fulfillments[*].tags[?(@.code=='igm_request')].list[*].code must be in ["id"]
	
	- **condition validate_tag_2_precancel_state**: every element of $.message.order.fulfillments[*].tags[?(@.code=='precancel_state')].list[*].code must be in ["fulfillment_state", "updated_at"]
	
	- **condition validate_tag_2_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in ["id", "name", "address"]
	
	- **condition validate_tag_2_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in ["id", "currency", "declared_value", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height", "shipment_type"]
	
	- **condition validate_tag_2_linked_order_item**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')].list[*].code must be in ["category", "name", "currency", "value", "quantity", "weight_unit", "weight_value"]
	
	- **condition validate_tag_2_shipping_label**: every element of $.message.order.fulfillments[*].tags[?(@.code=='shipping_label')].list[*].code must be in ["type", "url"]
	
	- **condition validate_tag_2_rto_event**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rto_event')].list[*].code must be in ["retry_count", "rto_id", "cancellation_reason_id", "sub_reason_id", "cancelled_by"]
	
	- **condition validate_tag_2_ebn**: every element of $.message.order.fulfillments[*].tags[?(@.code=='ebn')].list[*].code must be in ["id", "expiry_date"]
	
	Order pickup timestamp in fulfillments/start/time/timestamp should be present when order is picked up
	
		> Note: **Condition order_picked_up_timestamp** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[?(@.type=='Delivery')].state.descriptor.code must **not** be in ["RTO"]
	
	RTO-Initiated timestamp in fulfillments/start/time/timestamp (RTO fulfillment) should be present when RTO is initiated 
	
		> Note: **Condition rto_initiated_timestamp** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[?(@.type=='RTO')].state.descriptor.code must **not** be in ["RTO-Initiated"]
	
	rto_event tag should be present in fulfillment with type 'Delivery' if that fulfillment is marked 'RTO'
	
		> Note: **Condition rto_event_tag_validation** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[?(@.type=='Delivery')].state.descriptor.code must **not** be in ["RTO"]
	
	Valid address should be sent in fulfillments/start/location
	
	Valid address should be sent in fulfillments/end/location

- **on_update** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.1**: $.message.order.items[*].category_id must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.2**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
	- **condition REQUIRED_MESSAGE_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.order.items[*].time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_27**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_28**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_29**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
	- **condition REQUIRED_MESSAGE_CODE_31**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_31.1**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_31.2**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]
	
	- **condition REQUIRED_MESSAGE_TRACKING**: $.message.order.fulfillments[*].tracking must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.fulfillments[*].start.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_34**: $.message.order.fulfillments[*].start.location.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_36**: $.message.order.fulfillments[*].start.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.fulfillments[*].start.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_40**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.fulfillments[*].start.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.fulfillments[*].start.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION_45**: $.message.order.fulfillments[*].start.time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_START**: $.message.order.fulfillments[*].start.time.range.start must be present in the payload
	
	- **condition REQUIRED_MESSAGE_END**: $.message.order.fulfillments[*].start.time.range.end must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_48**: $.message.order.fulfillments[*].end.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_49**: $.message.order.fulfillments[*].end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_50**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_51**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_52**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_53**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_54**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_55**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_56**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_57**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_START_58**: $.message.order.fulfillments[*].end.time.range.start must be present in the payload
	
	- **condition REQUIRED_MESSAGE_END_59**: $.message.order.fulfillments[*].end.time.range.end must be present in the payload
	
	- **condition REQUIRED_MESSAGE_REGISTRATION**: $.message.order.fulfillments[*].vehicle.registration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_61**: $.message.order.billing.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_62**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_63**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_64**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_65**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_66**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_67**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_68**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TAX_NUMBER**: $.message.order.billing.tax_number must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_70**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL_71**: $.message.order.billing.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: $.message.order.payment.collected_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_75**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_75.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_75.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID_76**: $.message.order['@ondc/org/linked_order'].items[*].category_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_77**: $.message.order['@ondc/org/linked_order'].items[*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_80**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_81**: $.message.order['@ondc/org/linked_order'].items[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_82**: $.message.order['@ondc/org/linked_order'].items[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_83**: $.message.order['@ondc/org/linked_order'].provider.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_84**: $.message.order['@ondc/org/linked_order'].provider.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_85**: $.message.order['@ondc/org/linked_order'].provider.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STREET**: $.message.order['@ondc/org/linked_order'].provider.address.street must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_87**: $.message.order['@ondc/org/linked_order'].provider.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_88**: $.message.order['@ondc/org/linked_order'].provider.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_89**: $.message.order['@ondc/org/linked_order'].provider.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_90**: $.message.order['@ondc/org/linked_order'].provider.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_91**: $.message.order['@ondc/org/linked_order'].order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_92**: $.message.order['@ondc/org/linked_order'].order.weight.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_93**: $.message.order['@ondc/org/linked_order'].order.weight.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_94**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_95**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_96**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_97**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_98**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_99**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_100**: $.message.order.updated_at must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.state must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_ID**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_ID** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].category_id must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_6**: every element of $.message.order.fulfillments[*].start.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_7**: every element of $.message.order.fulfillments[*].start.instructions.code must be in ["2", "3", "4", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_8**: every element of $.message.order.fulfillments[*].end.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_9**: every element of $.message.order.fulfillments[*].end.instructions.code must be in ["1", "2", "3", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_10**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_11**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in ["lbnp", "lsp"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].start.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_masked_contact**: every element of $.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].end.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_1_masked_contact**: every element of $.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].code must be in ["linked_provider", "linked_order", "linked_order_item", "shipping_label", "fulfill_request", "ebn", "fulfill_response", "rider_details", "fulfillment_delay", "fulfillment_proof", "linked_order_diff", "linked_order_diff_proof"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_2_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in ["id", "name", "address"]
	
	- **condition validate_tag_2_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in ["id", "currency", "declared_value", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height", "shipment_type"]
	
	- **condition validate_tag_2_linked_order_item**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')].list[*].code must be in ["category", "name", "currency", "value", "quantity", "weight_unit", "weight_value"]
	
	- **condition validate_tag_2_shipping_label**: every element of $.message.order.fulfillments[*].tags[?(@.code=='shipping_label')].list[*].code must be in ["type", "url"]
	
	- **condition validate_tag_2_fulfill_request**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_request')].list[*].code must be in ["rider_count", "order_count", "rate_basis", "motorable_distance", "pickup_slot_start", "pickup_slot_end", "delivery_slot_start", "delivery_slot_end"]
	
	- **condition validate_tag_2_ebn**: every element of $.message.order.fulfillments[*].tags[?(@.code=='ebn')].list[*].code must be in ["id", "expiry_date"]
	
	- **condition validate_tag_2_fulfill_response**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_response')].list[*].code must be in ["rider_count", "order_count", "rate_basis", "diff_value"]
	
	- **condition validate_tag_2_rider_details**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rider_details')].list[*].code must be in ["name", "phone"]
	
	- **condition validate_tag_2_fulfillment_delay**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[*].code must be in ["state", "reason_id", "timestamp", "attempt"]
	
	- **condition validate_tag_2_fulfillment_proof**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_proof')].list[*].code must be in ["state", "type", "url"]
	
	- **condition validate_tag_2_linked_order_diff**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_diff')].list[*].code must be in ["id", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height"]
	
	- **condition validate_tag_2_linked_order_diff_proof**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_diff_proof')].list[*].code must be in ["type", "url"]

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.1**: $.message.order.items[*].category_id must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_ID.2**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
	- **condition REQUIRED_MESSAGE_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.order.items[*].time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_26**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_27**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_28**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
	- **condition REQUIRED_MESSAGE_CODE_30**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_30.1**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_30.2**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]
	
	- **condition REQUIRED_MESSAGE_TYPE_31**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_31.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_31.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: $.message.order.payment.collected_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: $.message.order.payment.status must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.billing.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_35**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_39**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TAX_NUMBER**: $.message.order.billing.tax_number must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.billing.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID_47**: $.message.order['@ondc/org/linked_order'].items[*].category_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_48**: $.message.order['@ondc/org/linked_order'].items[*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_51**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_52**: $.message.order['@ondc/org/linked_order'].items[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_53**: $.message.order['@ondc/org/linked_order'].items[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_54**: $.message.order['@ondc/org/linked_order'].provider.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_55**: $.message.order['@ondc/org/linked_order'].provider.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_56**: $.message.order['@ondc/org/linked_order'].provider.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_57**: $.message.order['@ondc/org/linked_order'].provider.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_58**: $.message.order['@ondc/org/linked_order'].provider.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_59**: $.message.order['@ondc/org/linked_order'].provider.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_60**: $.message.order['@ondc/org/linked_order'].provider.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_61**: $.message.order['@ondc/org/linked_order'].order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_62**: $.message.order['@ondc/org/linked_order'].order.weight.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_63**: $.message.order['@ondc/org/linked_order'].order.weight.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_64**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_65**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_66**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_67**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT_68**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.unit must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_69**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_70**: $.message.order.updated_at must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.state must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_ID**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_ID** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].category_id must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_6**: every element of $.message.order.fulfillments[*].start.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_7**: every element of $.message.order.fulfillments[*].start.instructions.code must be in ["2", "3", "4", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_8**: every element of $.message.order.fulfillments[*].end.authorization.type must be in ["OTP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_9**: every element of $.message.order.fulfillments[*].end.instructions.code must be in ["1", "2", "3", "5"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_10**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_11**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in ["lbnp", "lsp"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].start.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].start.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_0_masked_contact**: every element of $.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].end.contact.tags[*].code must be in ["masked_contact"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.contact.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_1_masked_contact**: every element of $.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].code must be in ["tracking", "linked_provider", "linked_order", "linked_order_item", "shipping_label", "fulfill_request", "fulfill_response", "rider_details", "cod_collection_detail", "cod_settlement_detail", "rto_event", "reverseqc_output", "ebn"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_2_tracking**: every element of $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[*].code must be in ["gps_enabled", "url_enabled", "url"]
	
	- **condition validate_tag_2_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in ["id", "name", "address"]
	
	- **condition validate_tag_2_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in ["id", "currency", "declared_value", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height", "shipment_type"]
	
	- **condition validate_tag_2_linked_order_item**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')].list[*].code must be in ["category", "name", "currency", "value", "quantity", "weight_unit", "weight_value"]
	
	- **condition validate_tag_2_shipping_label**: every element of $.message.order.fulfillments[*].tags[?(@.code=='shipping_label')].list[*].code must be in ["type", "url"]
	
	- **condition validate_tag_2_fulfill_request**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_request')].list[*].code must be in ["rider_count", "order_count", "rate_basis", "motorable_distance", "pickup_slot_start", "pickup_slot_end", "delivery_slot_start", "delivery_slot_end"]
	
	- **condition validate_tag_2_fulfill_response**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_response')].list[*].code must be in ["rider_count", "order_count", "rate_basis", "diff_value"]
	
	- **condition validate_tag_2_rider_details**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rider_details')].list[*].code must be in ["name", "phone", "vehicle_registration"]
	
	- **condition validate_tag_2_cod_collection_detail**: every element of $.message.order.fulfillments[*].tags[?(@.code=='cod_collection_detail')].list[*].code must be in ["currency", "value", "transaction_id", "timestamp"]
	
	- **condition validate_tag_2_cod_settlement_detail**: every element of $.message.order.fulfillments[*].tags[?(@.code=='cod_settlement_detail')].list[*].code must be in ["settlement_window", "settlement_type", "beneficiary_name", "upi_address", "bank_account_no", "ifsc_code", "bank_name", "branch_name"]
	
	- **condition validate_tag_2_rto_event**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rto_event')].list[*].code must be in ["retry_count", "rto_id", "cancellation_reason_id", "reason_id", "sub_reason_id", "cancelled_by"]
	
	- **condition validate_tag_2_reverseqc_output**: every element of $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[*].code must be in ["P001", "P003", "Q001"]
	
	- **condition validate_tag_2_ebn**: every element of $.message.order.fulfillments[*].tags[?(@.code=='ebn')].list[*].code must be in ["id", "expiry_date"]
	
	- **condition validate_tag_3**: every element of $.message.order.tags[*].code must be in ["diff_dim", "diff_weight", "diff_proof"]
	
		> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.tags[*].code must **not** be present in the payload
	
	- **condition validate_tag_3_diff_dim**: every element of $.message.order.tags[?(@.code=='diff_dim')].list[*].code must be in ["unit", "length", "breadth", "height"]
	
	- **condition validate_tag_3_diff_weight**: every element of $.message.order.tags[?(@.code=='diff_weight')].list[*].code must be in ["unit", "weight"]
	
	- **condition validate_tag_3_diff_proof**: every element of $.message.order.tags[?(@.code=='diff_proof')].list[*].code must be in ["type", "url"]
	
	Order pickup timestamp in fulfillments/start/time/timestamp should be present when order is picked up
	
		> Note: **Condition order_picked_up_timestamp** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[?(@.type=='Delivery')].state.descriptor.code must **not** be in ["Order-picked-up", "Out-for-delivery", "Order-delivered", "At-location", "In-transit", "RTO"]
	
	Order pickup timestamp in fulfillments/start/time/timestamp and delivery timestamp in fulfillments/end/time/timestamp should be present when order is delivered
	
		> Note: **Condition order_delivered_timestamp** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[?(@.type=='Delivery')].state.descriptor.code must **not** be in ["Order-delivered"]
	
	RTO-Initiated timestamp in fulfillments/start/time/timestamp (RTO fulfillment) should be present when RTO is initiated 
	
		> Note: **Condition rto_initiated_timestamp** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[?(@.type=='RTO')].state.descriptor.code must **not** be in ["RTO-Initiated"]
	
	RTO-Initiated timestamp in fulfillments/start/time/timestamp and RTO delivery timestamp in fulfillments/end/time/timestamp (RTO fulfillment) should be present when RTO fulfillment reaches its terminal state
	
		> Note: **Condition rto_delivery_timestamp** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[?(@.type=='RTO')].state.descriptor.code must **not** be in ["RTO-Delivered", "RTO-Disposed"]
	
	Valid address should be sent in fulfillments/start/location
	
	Valid address should be sent in fulfillments/end/location