export const on_cancel = {
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
                order: {
                    description: "Describes the details of an order -",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            description:
                                "Unique identifier for Order across network, will be created by buyer app in confirm API",
                        },
                        cancellation: {
                            description: "Describes a cancellation event",
                            type: "object",
                            properties: {
                                type: {
                                    type: "string",
                                },
                                ref_id: {
                                    type: "string",
                                },
                                policies: {
                                    type: "array",
                                    items: {
                                        description:
                                            "Describes a policy. Allows for domain extension.",
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
                                                        additionalProperties:
                                                            false,
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
                                                                    default:
                                                                        true,
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
                                            parent_policy_id: {
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
                                                        additionalProperties:
                                                            false,
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                },
                                time: {
                                    type: "string",
                                    format: "date-time",
                                },
                                cancelled_by: {
                                    type: "string",
                                },
                                reason: {
                                    description:
                                        "Describes a selectable option",
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
                                    },
                                    additionalProperties: false,
                                },
                                selected_reason: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                        },
                                    },
                                    additionalProperties: false,
                                },
                                additional_description: {
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
                                                            additionalProperties:
                                                                false,
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
                        state: {
                            type: "string",
                        },
                        provider: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "string",
                                    description: "Id of the provider",
                                },
                                locations: {
                                    type: "array",
                                    maxItems: 1,
                                    items: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "string",
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                },
                            },
                            additionalProperties: false,
                        },
                        items: {
                            type: "array",
                            items: {
                                description:
                                    "Describes a product or a service offered to the end consumer by the provider.",
                                type: "object",
                                properties: {
                                    id: {
                                        description:
                                            "This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.",
                                        type: "string",
                                    },
                                    parent_item_id: {
                                        description:
                                            "This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.",
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                    },
                                                    additionalProperties: false,
                                                },
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    price: {
                                        description:
                                            "Describes the price of an item. Allows for domain extension.",
                                        type: "object",
                                        properties: {
                                            currency: {
                                                type: "string",
                                                description:
                                                    "ISO 4217 alphabetic currency code e.g. 'INR'",
                                            },
                                            value: {
                                                description:
                                                    "Describes a decimal value",
                                                type: "string",
                                                pattern:
                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                            },
                                            estimated_value: {
                                                description:
                                                    "Describes a decimal value",
                                                type: "string",
                                                pattern:
                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                            },
                                            computed_value: {
                                                description:
                                                    "Describes a decimal value",
                                                type: "string",
                                                pattern:
                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                            },
                                            listed_value: {
                                                description:
                                                    "Describes a decimal value",
                                                type: "string",
                                                pattern:
                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                            },
                                            offered_value: {
                                                description:
                                                    "Describes a decimal value",
                                                type: "string",
                                                pattern:
                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                            },
                                            minimum_value: {
                                                description:
                                                    "Describes a decimal value",
                                                type: "string",
                                                pattern:
                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                            },
                                            maximum_value: {
                                                description:
                                                    "Describes a decimal value",
                                                type: "string",
                                                pattern:
                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    category_id: {
                                        type: "string",
                                        description:
                                            "Unique id of the category",
                                    },
                                    fulfillment_id: {
                                        type: "string",
                                        description:
                                            "Unique reference ID to the fulfillment of an order",
                                    },
                                    category_ids: {
                                        description:
                                            "Categories this item can be listed under",
                                        type: "array",
                                        items: {
                                            allOf: [
                                                {
                                                    type: "string",
                                                    description:
                                                        "Unique id of the category",
                                                },
                                            ],
                                        },
                                    },
                                    fulfillment_ids: {
                                        description:
                                            "Modes through which this item can be fulfilled",
                                        type: "array",
                                        items: {
                                            allOf: [
                                                {
                                                    type: "string",
                                                    description:
                                                        "Unique reference ID to the fulfillment of an order",
                                                },
                                            ],
                                        },
                                    },
                                    location_ids: {
                                        description:
                                            "Provider Locations this item is available in",
                                        type: "array",
                                        items: {
                                            allOf: [
                                                {
                                                    type: "string",
                                                },
                                            ],
                                        },
                                    },
                                    rating: {
                                        description:
                                            "Rating value given to the object (1 - Poor; 2 - Needs improvement; 3 - Satisfactory; 4 - Good; 5 - Excellent)",
                                        type: "number",
                                        minimum: 1,
                                        maximum: 5,
                                    },
                                    location_id: {
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
                                    rateable: {
                                        description:
                                            "If the entity can be rated or not",
                                        type: "boolean",
                                    },
                                    matched: {
                                        type: "boolean",
                                    },
                                    related: {
                                        type: "boolean",
                                    },
                                    recommended: {
                                        type: "boolean",
                                    },
                                    tags: {
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
                                                        additionalProperties:
                                                            false,
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
                        add_ons: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                        description:
                                            "ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR ",
                                    },
                                },
                                additionalProperties: false,
                            },
                        },
                        offers: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                    },
                                },
                                additionalProperties: false,
                            },
                        },
                        documents: {
                            type: "array",
                            items: {
                                description:
                                    "Describes a document which can be sent as a url",
                                type: "object",
                                properties: {
                                    url: {
                                        type: "string",
                                        format: "uri",
                                    },
                                    label: {
                                        type: "string",
                                    },
                                },
                                additionalProperties: false,
                            },
                        },
                        billing: {
                            description: "Describes a billing event",
                            type: "object",
                            properties: {
                                name: {
                                    description:
                                        "Personal details of the customer needed for billing.",
                                    type: "string",
                                },
                                organization: {
                                    description: "Describes an organization",
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string",
                                        },
                                        cred: {
                                            type: "string",
                                        },
                                    },
                                    additionalProperties: false,
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
                                email: {
                                    type: "string",
                                    format: "email",
                                },
                                phone: {
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
                                            description: "Describes a schedule",
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
                                tax_number: {
                                    description: "GST number",
                                    type: "string",
                                },
                                created_at: {
                                    type: "string",
                                    format: "date-time",
                                },
                                updated_at: {
                                    type: "string",
                                    format: "date-time",
                                },
                            },
                            additionalProperties: false,
                        },
                        cancellation_terms: {
                            description:
                                "The cancellation terms of this order. This can be overriden at the item level cancellation terms.",
                            type: "array",
                            items: {
                                description:
                                    "Describes the cancellation terms of an item or an order. This can be referenced at an item or order level. Item-level cancellation terms can override the terms at the order level.",
                                type: "object",
                                properties: {
                                    reason_required: {
                                        description:
                                            "Indicates whether a reason is required to cancel the order",
                                        type: "boolean",
                                    },
                                    refund_eligible: {
                                        description:
                                            "Indicates if cancellation will result in a refund",
                                        type: "boolean",
                                    },
                                    return_eligible: {
                                        description:
                                            "Indicates if cancellation will result in a return to origin",
                                        type: "boolean",
                                    },
                                    fulfillment_state: {
                                        description:
                                            "The state of fulfillment during which these terms are applicable.",
                                        allOf: [
                                            {
                                                description:
                                                    "Describes a state",
                                                type: "object",
                                                properties: {
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
                                                                    content_type:
                                                                        {
                                                                            type: "string",
                                                                        },
                                                                },
                                                                additionalProperties:
                                                                    false,
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
                                                                    properties:
                                                                        {
                                                                            display:
                                                                                {
                                                                                    description:
                                                                                        "Indicates the display properties of the tag group. If display is set to false, then the group will not be displayed. If it is set to true, it should be displayed. However, group-level display properties can be overriden by individual tag-level display property. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.",
                                                                                    type: "boolean",
                                                                                    default:
                                                                                        true,
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                    updated_at: {
                                                        type: "string",
                                                        format: "date-time",
                                                    },
                                                    updated_by: {
                                                        type: "string",
                                                        description:
                                                            "ID of entity which changed the state",
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                        ],
                                    },
                                    return_policy: {
                                        description:
                                            "Describes the return policy of an item or an order",
                                        type: "object",
                                        properties: {
                                            return_eligible: {
                                                description:
                                                    "Indicates whether the item is eligible for return",
                                                type: "boolean",
                                            },
                                            return_within: {
                                                description:
                                                    "Applicable only for buyer managed returns where the buyer has to return the item to the origin before a certain date-time, failing which they will not be eligible for refund.",
                                                allOf: [
                                                    {
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
                                                                additionalProperties:
                                                                    false,
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
                                                    },
                                                ],
                                            },
                                            return_location: {
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
                                                                    content_type:
                                                                        {
                                                                            type: "string",
                                                                        },
                                                                },
                                                                additionalProperties:
                                                                    false,
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
                                                                    properties:
                                                                        {
                                                                            display:
                                                                                {
                                                                                    description:
                                                                                        "Indicates the display properties of the tag group. If display is set to false, then the group will not be displayed. If it is set to true, it should be displayed. However, group-level display properties can be overriden by individual tag-level display property. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.",
                                                                                    type: "boolean",
                                                                                    default:
                                                                                        true,
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                    gps: {
                                                        description:
                                                            "Describes a gps coordinate",
                                                        type: "string",
                                                        pattern:
                                                            "^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$",
                                                    },
                                                    address: {
                                                        description:
                                                            "Describes an address",
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
                                                                description:
                                                                    "City name",
                                                            },
                                                            state: {
                                                                type: "string",
                                                                description:
                                                                    "State name",
                                                            },
                                                            country: {
                                                                type: "string",
                                                                description:
                                                                    "Country name",
                                                            },
                                                            area_code: {
                                                                type: "string",
                                                                description:
                                                                    "Area code. This can be Pincode, ZIP code or any equivalent",
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
                                                    },
                                                    station_code: {
                                                        type: "string",
                                                    },
                                                    city: {
                                                        description:
                                                            "Describes a city",
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                    country: {
                                                        description:
                                                            "Describes a country.",
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
                                                        additionalProperties:
                                                            false,
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
                                                                    estimated_value:
                                                                        {
                                                                            type: "number",
                                                                        },
                                                                    computed_value:
                                                                        {
                                                                            type: "number",
                                                                        },
                                                                    range: {
                                                                        type: "object",
                                                                        properties:
                                                                            {
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
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
                                                                additionalProperties:
                                                                    false,
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                            fulfillment_managed_by: {},
                                        },
                                        additionalProperties: false,
                                    },
                                    refund_policy: {
                                        type: "object",
                                        properties: {
                                            refund_eligible: {
                                                description:
                                                    "Indicates if cancellation will result in a refund",
                                                type: "boolean",
                                            },
                                            refund_within: {
                                                description:
                                                    "Time within which refund will be processed after successful cancellation.",
                                                allOf: [
                                                    {
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
                                                                additionalProperties:
                                                                    false,
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
                                                    },
                                                ],
                                            },
                                            refund_amount: {
                                                description:
                                                    "Describes the price of an item. Allows for domain extension.",
                                                type: "object",
                                                properties: {
                                                    currency: {
                                                        type: "string",
                                                        description:
                                                            "ISO 4217 alphabetic currency code e.g. 'INR'",
                                                    },
                                                    value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    estimated_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    computed_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    listed_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    offered_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    minimum_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    maximum_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    cancel_by: {
                                        description:
                                            "Information related to the time of cancellation.",
                                        allOf: [
                                            {
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
                                                        additionalProperties:
                                                            false,
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                        ],
                                    },
                                    cancellation_fee: {
                                        description:
                                            "A fee applied on a particular entity",
                                        type: "object",
                                        properties: {
                                            percentage: {
                                                description:
                                                    "Percentage of a value",
                                                allOf: [
                                                    {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                ],
                                            },
                                            amount: {
                                                description: "A fixed value",
                                                allOf: [
                                                    {
                                                        description:
                                                            "Describes the price of an item. Allows for domain extension.",
                                                        type: "object",
                                                        properties: {
                                                            currency: {
                                                                type: "string",
                                                                description:
                                                                    "ISO 4217 alphabetic currency code e.g. 'INR'",
                                                            },
                                                            value: {
                                                                description:
                                                                    "Describes a decimal value",
                                                                type: "string",
                                                                pattern:
                                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                                            },
                                                            estimated_value: {
                                                                description:
                                                                    "Describes a decimal value",
                                                                type: "string",
                                                                pattern:
                                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                                            },
                                                            computed_value: {
                                                                description:
                                                                    "Describes a decimal value",
                                                                type: "string",
                                                                pattern:
                                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                                            },
                                                            listed_value: {
                                                                description:
                                                                    "Describes a decimal value",
                                                                type: "string",
                                                                pattern:
                                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                                            },
                                                            offered_value: {
                                                                description:
                                                                    "Describes a decimal value",
                                                                type: "string",
                                                                pattern:
                                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                                            },
                                                            minimum_value: {
                                                                description:
                                                                    "Describes a decimal value",
                                                                type: "string",
                                                                pattern:
                                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                                            },
                                                            maximum_value: {
                                                                description:
                                                                    "Describes a decimal value",
                                                                type: "string",
                                                                pattern:
                                                                    "[+-]?([0-9]*[.])?[0-9]+",
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
                                                    },
                                                ],
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    xinput_required: {
                                        description:
                                            "Contains any additional or extended inputs required to confirm an order. This is typically a Form Input. Sometimes, selection of catalog elements is not enough for the BPP to confirm an order. For example, to confirm a flight ticket, the airline requires details of the passengers along with information on baggage, identity, in addition to the class of ticket. Similarly, a logistics company may require details on the nature of shipment in order to confirm the shipping. A recruiting firm may require additional details on the applicant in order to confirm a job application. For all such purposes, the BPP can choose to send this object attached to any object in the catalog that is required to be sent while placing the order. This object can typically be sent at an item level or at the order level. The item level XInput will override the Order level XInput as it indicates a special requirement of information for that particular item. Hence the BAP must render a separate form for the Item and another form at the Order level before confirmation.",
                                        allOf: [
                                            {
                                                description: "Describes a form",
                                                type: "object",
                                                properties: {
                                                    url: {
                                                        description:
                                                            "The URL from where the form can be fetched. The content fetched from the url must be processed as per the mime_type specified in this object. Once fetched, the rendering platform can choosed to render the form as-is as an embeddable element; or process it further to blend with the theme of the application. In case the interface is non-visual, the the render can process the form data and reproduce it as per the standard specified in the form.",
                                                        type: "string",
                                                        format: "uri",
                                                    },
                                                    data: {
                                                        description:
                                                            "The form content string. This content will again follow the mime_type field for processing. Typically forms should be sent as an html string starting with <form></form> tags. The application must render this form after removing any css or javascript code if necessary. The `action` attribute in the form should have a url where the form needs to be submitted.",
                                                        type: "string",
                                                    },
                                                    mime_type: {
                                                        description:
                                                            "This field indicates the nature and format of the form received by querying the url. MIME types are defined and standardized in IETF's RFC 6838.",
                                                        type: "string",
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                        ],
                                    },
                                    xinput_response: {
                                        description:
                                            "The response to the form fetched via the XInput URL",
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                input: {
                                                    description:
                                                        "The _name_ attribute of the input tag in the XInput form",
                                                    type: "string",
                                                },
                                                value: {
                                                    description:
                                                        "The value of the input field. Files must be sent as data URLs. For more information on Data URLs visit https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs",
                                                    type: "string",
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                    },
                                    external_ref: {
                                        description:
                                            "This object contains a url to a media file.",
                                        type: "object",
                                        properties: {
                                            mimetype: {
                                                description:
                                                    "indicates the nature and format of the document, file, or assortment of bytes. MIME types are defined and standardized in IETF's RFC 6838",
                                                type: "string",
                                            },
                                            url: {
                                                description:
                                                    "The URL of the file",
                                                type: "string",
                                                format: "uri",
                                            },
                                            signature: {
                                                description:
                                                    "The digital signature of the file signed by the sender",
                                                type: "string",
                                            },
                                            dsa: {
                                                description:
                                                    "The signing algorithm used by the sender",
                                                type: "string",
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                },
                                additionalProperties: false,
                            },
                        },
                        fulfillments: {
                            type: "array",
                            items: {
                                description:
                                    "Describes how a single product/service will be rendered/fulfilled to the end customer",
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                        description:
                                            "Unique reference ID to the fulfillment of an order",
                                    },
                                    type: {
                                        type: "string",
                                        description:
                                            "This describes the type of fulfillment",
                                    },
                                    "@ondc/org/awb_no": {
                                        type: "string",
                                    },
                                    "@ondc/org/ewaybillno": {
                                        type: "string",
                                    },
                                    "@ondc/org/ebnexpirydate": {
                                        type: "string",
                                        format: "date-time",
                                    },
                                    provider_id: {
                                        type: "string",
                                        description: "Id of the provider",
                                    },
                                    rating: {
                                        description:
                                            "Rating value given to the object (1 - Poor; 2 - Needs improvement; 3 - Satisfactory; 4 - Good; 5 - Excellent)",
                                        type: "number",
                                        minimum: 1,
                                        maximum: 5,
                                    },
                                    state: {
                                        description: "Describes a state",
                                        type: "object",
                                        properties: {
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
                                                        additionalProperties:
                                                            false,
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
                                                                    default:
                                                                        true,
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
                                            updated_at: {
                                                type: "string",
                                                format: "date-time",
                                            },
                                            updated_by: {
                                                type: "string",
                                                description:
                                                    "ID of entity which changed the state",
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    tracking: {
                                        type: "boolean",
                                        description:
                                            "Indicates whether the fulfillment allows tracking",
                                        default: false,
                                    },
                                    customer: {
                                        type: "object",
                                        properties: {
                                            person: {
                                                description:
                                                    "Describes a person.",
                                                type: "object",
                                                properties: {
                                                    name: {
                                                        type: "string",
                                                        description:
                                                            "Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}",
                                                    },
                                                    image: {
                                                        description:
                                                            "Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```",
                                                        type: "string",
                                                    },
                                                    dob: {
                                                        type: "string",
                                                        format: "date",
                                                    },
                                                    gender: {
                                                        type: "string",
                                                        description:
                                                            "Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender",
                                                    },
                                                    cred: {
                                                        type: "string",
                                                    },
                                                    tags: {
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
                                                                    default:
                                                                        true,
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
                                            contact: {
                                                type: "object",
                                                properties: {
                                                    phone: {
                                                        type: "string",
                                                    },
                                                    email: {
                                                        type: "string",
                                                    },
                                                    tags: {
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
                                                                    default:
                                                                        true,
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
                                        },
                                        additionalProperties: false,
                                    },
                                    agent: {
                                        description:
                                            "Describes an order executor",
                                        type: "object",
                                        properties: {
                                            phone: {
                                                type: "string",
                                                description: "Phone number",
                                            },
                                            name: {
                                                type: "string",
                                                description: "Agent name",
                                            },
                                        },
                                    },
                                    person: {
                                        description: "Describes a person.",
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string",
                                                description:
                                                    "Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}",
                                            },
                                            image: {
                                                description:
                                                    "Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```",
                                                type: "string",
                                            },
                                            dob: {
                                                type: "string",
                                                format: "date",
                                            },
                                            gender: {
                                                type: "string",
                                                description:
                                                    "Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender",
                                            },
                                            cred: {
                                                type: "string",
                                            },
                                            tags: {
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                    },
                                                    additionalProperties: false,
                                                },
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    contact: {
                                        type: "object",
                                        properties: {
                                            phone: {
                                                type: "string",
                                            },
                                            email: {
                                                type: "string",
                                            },
                                            tags: {
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                    },
                                                    additionalProperties: false,
                                                },
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    vehicle: {
                                        description:
                                            "Describes the properties of a vehicle used in a mobility service",
                                        type: "object",
                                        properties: {
                                            category: {
                                                type: "string",
                                            },
                                            capacity: {
                                                type: "integer",
                                            },
                                            make: {
                                                type: "string",
                                            },
                                            model: {
                                                type: "string",
                                            },
                                            size: {
                                                type: "string",
                                            },
                                            variant: {
                                                type: "string",
                                            },
                                            color: {
                                                type: "string",
                                            },
                                            energy_type: {
                                                type: "string",
                                            },
                                            registration: {
                                                type: "string",
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    start: {
                                        description:
                                            "Details on the start of fulfillment",
                                        type: "object",
                                        properties: {
                                            location: {
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
                                                                    content_type:
                                                                        {
                                                                            type: "string",
                                                                        },
                                                                },
                                                                additionalProperties:
                                                                    false,
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
                                                                    properties:
                                                                        {
                                                                            display:
                                                                                {
                                                                                    description:
                                                                                        "Indicates the display properties of the tag group. If display is set to false, then the group will not be displayed. If it is set to true, it should be displayed. However, group-level display properties can be overriden by individual tag-level display property. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.",
                                                                                    type: "boolean",
                                                                                    default:
                                                                                        true,
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                    gps: {
                                                        description:
                                                            "Describes a gps coordinate",
                                                        type: "string",
                                                        pattern:
                                                            "^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$",
                                                    },
                                                    address: {
                                                        description:
                                                            "Describes an address",
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
                                                                description:
                                                                    "City name",
                                                            },
                                                            state: {
                                                                type: "string",
                                                                description:
                                                                    "State name",
                                                            },
                                                            country: {
                                                                type: "string",
                                                                description:
                                                                    "Country name",
                                                            },
                                                            area_code: {
                                                                type: "string",
                                                                description:
                                                                    "Area code. This can be Pincode, ZIP code or any equivalent",
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
                                                    },
                                                    station_code: {
                                                        type: "string",
                                                    },
                                                    city: {
                                                        description:
                                                            "Describes a city",
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                    country: {
                                                        description:
                                                            "Describes a country.",
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
                                                        additionalProperties:
                                                            false,
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
                                                                    estimated_value:
                                                                        {
                                                                            type: "number",
                                                                        },
                                                                    computed_value:
                                                                        {
                                                                            type: "number",
                                                                        },
                                                                    range: {
                                                                        type: "object",
                                                                        properties:
                                                                            {
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
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
                                                                additionalProperties:
                                                                    false,
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
                                                    },
                                                },
                                                additionalProperties: false,
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
                                                        additionalProperties:
                                                            false,
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                            instructions: {
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
                                                        additionalProperties:
                                                            false,
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
                                                                    default:
                                                                        true,
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
                                            contact: {
                                                type: "object",
                                                properties: {
                                                    phone: {
                                                        type: "string",
                                                    },
                                                    email: {
                                                        type: "string",
                                                    },
                                                    tags: {
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
                                                                    default:
                                                                        true,
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
                                            person: {
                                                description:
                                                    "Describes a person.",
                                                type: "object",
                                                properties: {
                                                    name: {
                                                        type: "string",
                                                        description:
                                                            "Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}",
                                                    },
                                                    image: {
                                                        description:
                                                            "Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```",
                                                        type: "string",
                                                    },
                                                    dob: {
                                                        type: "string",
                                                        format: "date",
                                                    },
                                                    gender: {
                                                        type: "string",
                                                        description:
                                                            "Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender",
                                                    },
                                                    cred: {
                                                        type: "string",
                                                    },
                                                    tags: {
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
                                                                    default:
                                                                        true,
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
                                            authorization: {
                                                description:
                                                    "Describes an authorization mechanism",
                                                type: "object",
                                                properties: {
                                                    type: {
                                                        type: "string",
                                                        description:
                                                            "Type of authorization mechanism used",
                                                    },
                                                    token: {
                                                        type: "string",
                                                        description:
                                                            "Token used for authorization",
                                                    },
                                                    valid_from: {
                                                        type: "string",
                                                        format: "date-time",
                                                        description:
                                                            "Timestamp in RFC3339 format from which token is valid",
                                                    },
                                                    valid_to: {
                                                        type: "string",
                                                        format: "date-time",
                                                        description:
                                                            "Timestamp in RFC3339 format until which token is valid",
                                                    },
                                                    status: {
                                                        type: "string",
                                                        description:
                                                            "Status of the token",
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    end: {
                                        description:
                                            "Details on the end of fulfillment",
                                        type: "object",
                                        properties: {
                                            location: {
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
                                                                    content_type:
                                                                        {
                                                                            type: "string",
                                                                        },
                                                                },
                                                                additionalProperties:
                                                                    false,
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
                                                                    properties:
                                                                        {
                                                                            display:
                                                                                {
                                                                                    description:
                                                                                        "Indicates the display properties of the tag group. If display is set to false, then the group will not be displayed. If it is set to true, it should be displayed. However, group-level display properties can be overriden by individual tag-level display property. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.",
                                                                                    type: "boolean",
                                                                                    default:
                                                                                        true,
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                    gps: {
                                                        description:
                                                            "Describes a gps coordinate",
                                                        type: "string",
                                                        pattern:
                                                            "^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$",
                                                    },
                                                    address: {
                                                        description:
                                                            "Describes an address",
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
                                                                description:
                                                                    "City name",
                                                            },
                                                            state: {
                                                                type: "string",
                                                                description:
                                                                    "State name",
                                                            },
                                                            country: {
                                                                type: "string",
                                                                description:
                                                                    "Country name",
                                                            },
                                                            area_code: {
                                                                type: "string",
                                                                description:
                                                                    "Area code. This can be Pincode, ZIP code or any equivalent",
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
                                                    },
                                                    station_code: {
                                                        type: "string",
                                                    },
                                                    city: {
                                                        description:
                                                            "Describes a city",
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                    country: {
                                                        description:
                                                            "Describes a country.",
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
                                                        additionalProperties:
                                                            false,
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
                                                                    estimated_value:
                                                                        {
                                                                            type: "number",
                                                                        },
                                                                    computed_value:
                                                                        {
                                                                            type: "number",
                                                                        },
                                                                    range: {
                                                                        type: "object",
                                                                        properties:
                                                                            {
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
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
                                                                additionalProperties:
                                                                    false,
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                        additionalProperties:
                                                            false,
                                                    },
                                                },
                                                additionalProperties: false,
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
                                                        additionalProperties:
                                                            false,
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                            instructions: {
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
                                                        additionalProperties:
                                                            false,
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
                                                                    default:
                                                                        true,
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
                                            contact: {
                                                type: "object",
                                                properties: {
                                                    phone: {
                                                        type: "string",
                                                    },
                                                    email: {
                                                        type: "string",
                                                    },
                                                    tags: {
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
                                                                    default:
                                                                        true,
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
                                            person: {
                                                description:
                                                    "Describes a person.",
                                                type: "object",
                                                properties: {
                                                    name: {
                                                        type: "string",
                                                        description:
                                                            "Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}",
                                                    },
                                                    image: {
                                                        description:
                                                            "Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```",
                                                        type: "string",
                                                    },
                                                    dob: {
                                                        type: "string",
                                                        format: "date",
                                                    },
                                                    gender: {
                                                        type: "string",
                                                        description:
                                                            "Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender",
                                                    },
                                                    cred: {
                                                        type: "string",
                                                    },
                                                    tags: {
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
                                                                    default:
                                                                        true,
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
                                            authorization: {
                                                description:
                                                    "Describes an authorization mechanism",
                                                type: "object",
                                                properties: {
                                                    type: {
                                                        type: "string",
                                                        description:
                                                            "Type of authorization mechanism used",
                                                    },
                                                    token: {
                                                        type: "string",
                                                        description:
                                                            "Token used for authorization",
                                                    },
                                                    valid_from: {
                                                        type: "string",
                                                        format: "date-time",
                                                        description:
                                                            "Timestamp in RFC3339 format from which token is valid",
                                                    },
                                                    valid_to: {
                                                        type: "string",
                                                        format: "date-time",
                                                        description:
                                                            "Timestamp in RFC3339 format until which token is valid",
                                                    },
                                                    status: {
                                                        type: "string",
                                                        description:
                                                            "Status of the token",
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    rateable: {
                                        description:
                                            "If the entity can be rated or not",
                                        type: "boolean",
                                    },
                                    tags: {
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
                                                        additionalProperties:
                                                            false,
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
                        quote: {
                            description: "Describes a quote",
                            type: "object",
                            properties: {
                                price: {
                                    description:
                                        "Describes the price of an item. Allows for domain extension.",
                                    type: "object",
                                    properties: {
                                        currency: {
                                            type: "string",
                                            description:
                                                "ISO 4217 alphabetic currency code e.g. 'INR'",
                                        },
                                        value: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                        estimated_value: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                        computed_value: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                        listed_value: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                        offered_value: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                        minimum_value: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                        maximum_value: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                    },
                                    additionalProperties: false,
                                },
                                breakup: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            "@ondc/org/item_id": {
                                                description:
                                                    "This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.",
                                                type: "string",
                                            },
                                            "@ondc/org/title_type": {
                                                type: "string",
                                            },
                                            title: {
                                                type: "string",
                                            },
                                            price: {
                                                description:
                                                    "Describes the price of an item. Allows for domain extension.",
                                                type: "object",
                                                properties: {
                                                    currency: {
                                                        type: "string",
                                                        description:
                                                            "ISO 4217 alphabetic currency code e.g. 'INR'",
                                                    },
                                                    value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    estimated_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    computed_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    listed_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    offered_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    minimum_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    maximum_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                },
                                ttl: {
                                    description:
                                        "Describes duration as per ISO8601 format",
                                    type: "string",
                                },
                            },
                            additionalProperties: false,
                        },
                        payment: {
                            description: "Describes a payment",
                            type: "object",
                            properties: {
                                uri: {
                                    type: "string",
                                    description:
                                        "A payment uri to be called by the Buyer App. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234",
                                    format: "uri",
                                },
                                tl_method: {
                                    type: "string",
                                },
                                params: {
                                    type: "object",
                                    properties: {
                                        transaction_id: {
                                            type: "string",
                                            description:
                                                "This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests",
                                        },
                                        transaction_status: {
                                            type: "string",
                                        },
                                        amount: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                        currency: {
                                            type: "string",
                                            description:
                                                "ISO 4217 alphabetic currency code e.g. 'INR'",
                                        },
                                    },
                                    additionalProperties: {
                                        type: "string",
                                    },
                                },
                                type: {
                                    type: "string",
                                },
                                status: {
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
                                            description: "Describes a schedule",
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
                                collected_by: {
                                    type: "string",
                                },
                                tags: {
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
                                "@ondc/org/collection_amount": {
                                    description: "CoD collection amount",
                                    type: "string",
                                },
                                "@ondc/org/settlement_basis": {
                                    description:
                                        "whether settlement between counterparties should be on the basis of invoicing, etc",
                                    type: "string",
                                },
                                "@ondc/org/settlement_window": {
                                    description:
                                        "settlement window in ISO8601 durations format e.g. 'PT48H' indicates T+2 settlement",
                                    type: "string",
                                },
                                "@ondc/org/settlement_window_status": {
                                    type: "string",
                                },
                                "@ondc/org/settlement_details": {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            settlement_counterparty: {
                                                type: "string",
                                            },
                                            settlement_type: {
                                                type: "string",
                                            },
                                            settlement_bank_account_no: {
                                                type: "string",
                                            },
                                            settlement_ifsc_code: {
                                                type: "string",
                                            },
                                            upi_address: {
                                                description:
                                                    "UPI payment address e.g. VPA",
                                                type: "string",
                                            },
                                            bank_name: {
                                                description: "Bank name",
                                                type: "string",
                                            },
                                            branch_name: {
                                                description: "Branch name",
                                                type: "string",
                                            },
                                            beneficiary_name: {
                                                description: "Beneficiary Name",
                                                type: "string",
                                            },
                                            beneficiary_address: {
                                                description:
                                                    "Beneficiary Address",
                                                type: "string",
                                            },
                                            settlement_status: {
                                                type: "string",
                                            },
                                            settlement_reference: {
                                                description:
                                                    "Settlement transaction reference number",
                                                type: "string",
                                            },
                                            settlement_timestamp: {
                                                description:
                                                    "Settlement transaction timestamp",
                                                type: "string",
                                                format: "date-time",
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                },
                            },
                            additionalProperties: false,
                        },
                        created_at: {
                            type: "string",
                            format: "date-time",
                        },
                        updated_at: {
                            type: "string",
                            format: "date-time",
                        },
                        "@ondc/org/created_by": {
                            description: "order created by",
                            type: "string",
                        },
                        "@ondc/org/cancellation": {
                            description: "Describes a cancellation event",
                            type: "object",
                            properties: {
                                type: {
                                    type: "string",
                                },
                                ref_id: {
                                    type: "string",
                                },
                                policies: {
                                    type: "array",
                                    items: {
                                        description:
                                            "Describes a policy. Allows for domain extension.",
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
                                                        additionalProperties:
                                                            false,
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
                                                                    default:
                                                                        true,
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
                                            parent_policy_id: {
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
                                                        additionalProperties:
                                                            false,
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                },
                                time: {
                                    type: "string",
                                    format: "date-time",
                                },
                                cancelled_by: {
                                    type: "string",
                                },
                                reason: {
                                    description:
                                        "Describes a selectable option",
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
                                    },
                                    additionalProperties: false,
                                },
                                selected_reason: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                        },
                                    },
                                    additionalProperties: false,
                                },
                                additional_description: {
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
                                                            additionalProperties:
                                                                false,
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
                        "@ondc/org/linked_order": {
                            type: "object",
                            description:
                                "payload for linked order e.g. retail order that cascaded into this logistics order",
                            properties: {
                                items: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            category_id: {
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
                                                        additionalProperties:
                                                            false,
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
                                                                    default:
                                                                        true,
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
                                            quantity: {
                                                type: "object",
                                                properties: {
                                                    count: {
                                                        type: "integer",
                                                        minimum: 0,
                                                    },
                                                    measure: {
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
                                                        additionalProperties:
                                                            false,
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                            price: {
                                                description:
                                                    "Describes the price of an item. Allows for domain extension.",
                                                type: "object",
                                                properties: {
                                                    currency: {
                                                        type: "string",
                                                        description:
                                                            "ISO 4217 alphabetic currency code e.g. 'INR'",
                                                    },
                                                    value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    estimated_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    computed_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    listed_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    offered_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    minimum_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                    maximum_value: {
                                                        description:
                                                            "Describes a decimal value",
                                                        type: "string",
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
                                                    },
                                                },
                                                additionalProperties: false,
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                },
                                provider: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                            description: "Id of the provider",
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
                                    },
                                    additionalProperties: false,
                                },
                                order: {
                                    description:
                                        "use same units for weight and dimensions as defined for Intent",
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                            description:
                                                "Unique identifier for Order across network, will be created by buyer app in confirm API",
                                        },
                                        weight: {
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
                                                    additionalProperties: false,
                                                },
                                                unit: {
                                                    type: "string",
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                        dimensions: {
                                            description:
                                                "Describes the dimensions of a real-world object",
                                            type: "object",
                                            properties: {
                                                length: {
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
                                                breadth: {
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
                                                height: {
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
                                        declared_value: {
                                            description:
                                                "Describes the price of an item. Allows for domain extension.",
                                            type: "object",
                                            properties: {
                                                currency: {
                                                    type: "string",
                                                    description:
                                                        "ISO 4217 alphabetic currency code e.g. 'INR'",
                                                },
                                                value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                estimated_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                computed_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                listed_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                offered_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                minimum_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                maximum_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                        taxable_value: {
                                            description:
                                                "Describes the price of an item. Allows for domain extension.",
                                            type: "object",
                                            properties: {
                                                currency: {
                                                    type: "string",
                                                    description:
                                                        "ISO 4217 alphabetic currency code e.g. 'INR'",
                                                },
                                                value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                estimated_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                computed_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                listed_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                offered_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                minimum_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                                maximum_value: {
                                                    description:
                                                        "Describes a decimal value",
                                                    type: "string",
                                                    pattern:
                                                        "[+-]?([0-9]*[.])?[0-9]+",
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                        hsn_code: {
                                            type: "string",
                                        },
                                        sgst_amount: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                        cgst_amount: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                        igst_amount: {
                                            description:
                                                "Describes a decimal value",
                                            type: "string",
                                            pattern: "[+-]?([0-9]*[.])?[0-9]+",
                                        },
                                    },
                                    additionalProperties: false,
                                },
                            },
                            additionalProperties: false,
                        },
                        tags: {
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
