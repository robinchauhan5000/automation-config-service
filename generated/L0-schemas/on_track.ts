export const on_track = {
    type: "object",
    properties: {
        context: {
            description: "Describes a ONDC message context",
            type: "object",
            properties: {
                domain: {
                    description: "Codification of domain for ONDC",
                    type: "string",
                },
                country: {
                    type: "string",
                    description:
                        "Country code as per ISO 3166 Alpha-3 code format",
                },
                city: {
                    type: "string",
                    description:
                        "Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'",
                },
                action: {
                    type: "string",
                    description:
                        "Defines the ONDC API call. Any actions other than the enumerated actions are not supported by ONDC Protocol",
                },
                core_version: {
                    type: "string",
                    description:
                        "Version of ONDC core API specification being used",
                },
                bap_id: {
                    type: "string",
                    description:
                        "Unique id of the Buyer App. By default it is the fully qualified domain name of the Buyer App",
                },
                bap_uri: {
                    type: "string",
                    format: "uri",
                    description:
                        "URI of the Buyer App for accepting callbacks. Must have the same domain name as the bap_id",
                },
                bpp_id: {
                    type: "string",
                    description:
                        "Unique id of the Seller App. By default it is the fully qualified domain name of the Seller App, mandatory for all peer-to-peer API requests, i.e. except search and on_search",
                },
                bpp_uri: {
                    type: "string",
                    format: "uri",
                    description:
                        "URI of the Seller App. Must have the same domain name as the bap_id, mandatory for all peer-to-peer API requests, i.e. except search and on_search",
                },
                transaction_id: {
                    type: "string",
                    description:
                        "This is a unique value which persists across all API calls from search through confirm",
                },
                message_id: {
                    type: "string",
                    description:
                        "This is a unique value which persists during a request / callback cycle",
                },
                timestamp: {
                    type: "string",
                    format: "date-time",
                    description: "Time of request generation in RFC3339 format",
                },
                key: {
                    type: "string",
                    description: "The encryption public key of the sender",
                },
                ttl: {
                    type: "string",
                    description:
                        "Timestamp for which this message holds valid in ISO8601 durations format - Outer limit for ttl for search, select, init, confirm, status, track, cancel, update, rating, support is 'PT30S' which is 30 seconds, different buyer apps can change this to meet their UX requirements, but it shouldn't exceed this outer limit",
                },
            },
            additionalProperties: false,
        },
        message: {
            type: "object",
            properties: {
                tracking: {
                    description:
                        "Contains tracking information that can be used by the BAP to track the fulfillment of an order in real-time. which is useful for knowing the location of time sensitive deliveries.",
                    type: "object",
                    properties: {
                        id: {
                            description: "A unique tracking reference number",
                            type: "string",
                        },
                        url: {
                            description:
                                "A URL to the tracking endpoint. This can be a link to a tracking webpage, a webhook URL created by the BAP where BPP can push the tracking data, or a GET url creaed by the BPP which the BAP can poll to get the tracking data. It can also be a websocket URL where the BPP can push real-time tracking data.",
                            type: "string",
                            format: "uri",
                        },
                        location: {
                            description:
                                "In case there is no real-time tracking endpoint available, this field will contain the latest location of the entity being tracked. The BPP will update this value everytime the BAP calls the track API.",
                            allOf: [
                                {
                                    description:
                                        "Describes the location of a runtime object.",
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                        },
                                        descriptor: {
                                            description:
                                                "Describes the description of a real-world object.",
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                },
                                                code: {
                                                    type: "string",
                                                },
                                                symbol: {
                                                    type: "string",
                                                },
                                                short_desc: {
                                                    type: "string",
                                                },
                                                long_desc: {
                                                    type: "string",
                                                },
                                                additional_desc: {
                                                    type: "object",
                                                    properties: {
                                                        url: {
                                                            type: "string",
                                                        },
                                                        content_type: {
                                                            type: "string",
                                                        },
                                                    },
                                                    additionalProperties: false,
                                                },
                                                images: {
                                                    type: "array",
                                                    items: {
                                                        description:
                                                            "Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```",
                                                        type: "string",
                                                    },
                                                },
                                                audio: {
                                                    type: "string",
                                                    format: "uri",
                                                },
                                                "3d_render": {
                                                    type: "string",
                                                    format: "uri",
                                                },
                                                tags: {
                                                    description:
                                                        "A list of tags containing any additional information sent along with the Acknowledgement.",
                                                    type: "array",
                                                    items: {
                                                        description:
                                                            "A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316",
                                                        type: "object",
                                                        properties: {
                                                            display: {
                                                                description:
                                                                    "Indicates the display properties of the tag group. If display is set to false, then the group will not be displayed. If it is set to true, it should be displayed. However, group-level display properties can be overriden by individual tag-level display property. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.",
                                                                type: "boolean",
                                                                default: true,
                                                            },
                                                            code: {
                                                                description:
                                                                    "The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.",
                                                                type: "string",
                                                            },
                                                            name: {
                                                                description:
                                                                    "A human-readable string describing the heading under which the tags are to be displayed. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using code property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency. As this schema is purely for catalog display purposes, it is not recommended to send this value during `search`.",
                                                                type: "string",
                                                            },
                                                            list: {
                                                                description:
                                                                    "An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.",
                                                                type: "array",
                                                                items: {
                                                                    description:
                                                                        "Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.",
                                                                    type: "object",
                                                                    properties:
                                                                        {
                                                                            code: {
                                                                                description:
                                                                                    "The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.",
                                                                                type: "string",
                                                                            },
                                                                            name: {
                                                                                description:
                                                                                    "The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.",
                                                                                type: "string",
                                                                            },
                                                                            value: {
                                                                                description:
                                                                                    "The value of the tag. This set by the BPP and rendered as-is by the BAP.",
                                                                                type: "string",
                                                                            },
                                                                            display:
                                                                                {
                                                                                    description:
                                                                                        "This value indicates if the tag is intended for display purposes. If set to `true`, then this tag must be displayed. If it is set to `false`, it should not be displayed. This value can override the group display value.",
                                                                                    type: "boolean",
                                                                                },
                                                                        },
                                                                    additionalProperties:
                                                                        false,
                                                                },
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
                                                    },
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                        gps: {
                                            description:
                                                "Describes a gps coordinate",
                                            type: "string",
                                            pattern:
                                                "^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$",
                                        },
                                        address: {
                                            description: "Describes an address",
                                            type: "object",
                                            properties: {
                                                door: {
                                                    type: "string",
                                                    description:
                                                        "Door / Shop number of the address",
                                                },
                                                name: {
                                                    type: "string",
                                                    description:
                                                        "Name of address if applicable. Example, shop name",
                                                },
                                                building: {
                                                    type: "string",
                                                    description:
                                                        "Name of the building or block",
                                                },
                                                street: {
                                                    type: "string",
                                                    description:
                                                        "Street name or number",
                                                },
                                                locality: {
                                                    type: "string",
                                                    description:
                                                        "Name of the locality, apartments",
                                                },
                                                ward: {
                                                    type: "string",
                                                    description:
                                                        "Name or number of the ward if applicable",
                                                },
                                                city: {
                                                    type: "string",
                                                    description: "City name",
                                                },
                                                state: {
                                                    type: "string",
                                                    description: "State name",
                                                },
                                                country: {
                                                    type: "string",
                                                    description: "Country name",
                                                },
                                                area_code: {
                                                    type: "string",
                                                    description:
                                                        "Area code. This can be Pincode, ZIP code or any equivalent",
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                        station_code: {
                                            type: "string",
                                        },
                                        city: {
                                            description: "Describes a city",
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description:
                                                        "Name of the city",
                                                },
                                                code: {
                                                    type: "string",
                                                    description:
                                                        "Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'",
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                        country: {
                                            description: "Describes a country.",
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description:
                                                        "Name of the country",
                                                },
                                                code: {
                                                    type: "string",
                                                    description:
                                                        "Country code as per ISO 3166 Alpha-3 code format",
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                        circle: {
                                            description:
                                                "Describes a circular area on the map",
                                            type: "object",
                                            properties: {
                                                gps: {
                                                    description:
                                                        "Describes a gps coordinate",
                                                    type: "string",
                                                    pattern:
                                                        "^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$",
                                                },
                                                radius: {
                                                    description:
                                                        "An object representing a scalar quantity.",
                                                    type: "object",
                                                    properties: {
                                                        type: {
                                                            type: "string",
                                                        },
                                                        value: {
                                                            type: "number",
                                                        },
                                                        estimated_value: {
                                                            type: "number",
                                                        },
                                                        computed_value: {
                                                            type: "number",
                                                        },
                                                        range: {
                                                            type: "object",
                                                            properties: {
                                                                min: {
                                                                    type: "number",
                                                                },
                                                                max: {
                                                                    type: "number",
                                                                },
                                                            },
                                                            additionalProperties:
                                                                false,
                                                        },
                                                        unit: {
                                                            type: "string",
                                                        },
                                                    },
                                                    additionalProperties: false,
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                        polygon: {
                                            type: "string",
                                        },
                                        "3dspace": {
                                            type: "string",
                                        },
                                        updated_at: {
                                            type: "string",
                                        },
                                        time: {
                                            description:
                                                "Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations",
                                            type: "object",
                                            properties: {
                                                label: {
                                                    type: "string",
                                                },
                                                timestamp: {
                                                    type: "string",
                                                },
                                                duration: {
                                                    description:
                                                        "Describes duration as per ISO8601 format",
                                                    type: "string",
                                                },
                                                range: {
                                                    type: "object",
                                                    properties: {
                                                        start: {
                                                            type: "string",
                                                        },
                                                        end: {
                                                            type: "string",
                                                        },
                                                    },
                                                    additionalProperties: false,
                                                },
                                                days: {
                                                    type: "string",
                                                    description:
                                                        "comma separated values representing days of the week",
                                                },
                                                schedule: {
                                                    description:
                                                        "Describes a schedule",
                                                    type: "object",
                                                    properties: {
                                                        frequency: {
                                                            description:
                                                                "Describes duration as per ISO8601 format",
                                                            type: "string",
                                                        },
                                                        holidays: {
                                                            type: "array",
                                                            items: {
                                                                type: "string",
                                                            },
                                                        },
                                                        times: {
                                                            type: "array",
                                                            items: {
                                                                type: "string",
                                                                format: "date-time",
                                                            },
                                                        },
                                                    },
                                                    additionalProperties: false,
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                    },
                                    additionalProperties: false,
                                },
                            ],
                        },
                        status: {
                            description:
                                "This value indicates if the tracking is currently active or not. If this value is `active`, then the BAP can begin tracking the order. If this value is `inactive`, the tracking URL is considered to be expired and the BAP should stop tracking the order.",
                            type: "string",
                        },
                        tags: {
                            description:
                                "A list of tags containing any additional information sent along with the Acknowledgement.",
                            type: "array",
                            items: {
                                description:
                                    "A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316",
                                type: "object",
                                properties: {
                                    display: {
                                        description:
                                            "Indicates the display properties of the tag group. If display is set to false, then the group will not be displayed. If it is set to true, it should be displayed. However, group-level display properties can be overriden by individual tag-level display property. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.",
                                        type: "boolean",
                                        default: true,
                                    },
                                    code: {
                                        description:
                                            "The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.",
                                        type: "string",
                                    },
                                    name: {
                                        description:
                                            "A human-readable string describing the heading under which the tags are to be displayed. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using code property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency. As this schema is purely for catalog display purposes, it is not recommended to send this value during `search`.",
                                        type: "string",
                                    },
                                    list: {
                                        description:
                                            "An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.",
                                        type: "array",
                                        items: {
                                            description:
                                                "Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.",
                                            type: "object",
                                            properties: {
                                                code: {
                                                    description:
                                                        "The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.",
                                                    type: "string",
                                                },
                                                name: {
                                                    description:
                                                        "The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.",
                                                    type: "string",
                                                },
                                                value: {
                                                    description:
                                                        "The value of the tag. This set by the BPP and rendered as-is by the BAP.",
                                                    type: "string",
                                                },
                                                display: {
                                                    description:
                                                        "This value indicates if the tag is intended for display purposes. If set to `true`, then this tag must be displayed. If it is set to `false`, it should not be displayed. This value can override the group display value.",
                                                    type: "boolean",
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                    },
                                },
                                additionalProperties: false,
                            },
                        },
                    },
                    additionalProperties: false,
                },
            },
            additionalProperties: false,
        },
        error: {
            description: "Describes an error object",
            type: "object",
            properties: {
                type: {
                    type: "string",
                },
                code: {
                    type: "string",
                    description:
                        "ONDC specific error code. For full list of error codes, refer to docs/drafts/Error Codes.md of this repo",
                },
                path: {
                    type: "string",
                    description:
                        "Path to json schema generating the error. Used only during json schema validation errors",
                },
                message: {
                    type: "string",
                    description: "Human readable message describing the error",
                },
            },
            additionalProperties: false,
        },
    },
    additionalProperties: false,
};
