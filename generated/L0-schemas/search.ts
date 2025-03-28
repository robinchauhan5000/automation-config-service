export const search = {
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
                intent: {
                    description:
                        "Intent of a user. Used for searching for services",
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
                        provider: {
                            description:
                                "Describes a service provider. This can be a restaurant, a hospital, a Store etc",
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
                                category_id: {
                                    type: "string",
                                    description: "Category Id of the provider",
                                },
                                rating: {
                                    description:
                                        "Rating value given to the object (1 - Poor; 2 - Needs improvement; 3 - Satisfactory; 4 - Good; 5 - Excellent)",
                                    type: "number",
                                    minimum: 1,
                                    maximum: 5,
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
                                categories: {
                                    type: "array",
                                    items: {
                                        description: "Describes a category.",
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "string",
                                                description:
                                                    "Unique id of the category",
                                            },
                                            parent_category_id: {
                                                type: "string",
                                                description:
                                                    "Unique id of the parent category - Express delivery - Standard Delivery",
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
                                                description:
                                                    "Id of the provider",
                                            },
                                            rating: {
                                                description:
                                                    "Rating value given to the object (1 - Poor; 2 - Needs improvement; 3 - Satisfactory; 4 - Good; 5 - Excellent)",
                                                type: "number",
                                                minimum: 1,
                                                maximum: 5,
                                            },
                                            state: {
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
                                                        description:
                                                            "Phone number",
                                                    },
                                                    name: {
                                                        type: "string",
                                                        description:
                                                            "Agent name",
                                                    },
                                                },
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
                                                                    short_desc:
                                                                        {
                                                                            type: "string",
                                                                        },
                                                                    long_desc: {
                                                                        type: "string",
                                                                    },
                                                                    additional_desc:
                                                                        {
                                                                            type: "object",
                                                                            properties:
                                                                                {
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
                                                                    "3d_render":
                                                                        {
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
                                                                        properties:
                                                                            {
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
                                                                        properties:
                                                                            {
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
                                                                        properties:
                                                                            {
                                                                                frequency:
                                                                                    {
                                                                                        description:
                                                                                            "Describes duration as per ISO8601 format",
                                                                                        type: "string",
                                                                                    },
                                                                                holidays:
                                                                                    {
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
                                                        additionalProperties:
                                                            false,
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
                                                        additionalProperties:
                                                            false,
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
                                                                    short_desc:
                                                                        {
                                                                            type: "string",
                                                                        },
                                                                    long_desc: {
                                                                        type: "string",
                                                                    },
                                                                    additional_desc:
                                                                        {
                                                                            type: "object",
                                                                            properties:
                                                                                {
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
                                                                    "3d_render":
                                                                        {
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
                                                                        properties:
                                                                            {
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
                                                                        properties:
                                                                            {
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
                                                                        properties:
                                                                            {
                                                                                frequency:
                                                                                    {
                                                                                        description:
                                                                                            "Describes duration as per ISO8601 format",
                                                                                        type: "string",
                                                                                    },
                                                                                holidays:
                                                                                    {
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
                                                        additionalProperties:
                                                            false,
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
                                                        additionalProperties:
                                                            false,
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
                                payments: {
                                    type: "array",
                                    items: {
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
                                                        pattern:
                                                            "[+-]?([0-9]*[.])?[0-9]+",
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
                                                                additionalProperties:
                                                                    false,
                                                            },
                                                        },
                                                    },
                                                    additionalProperties: false,
                                                },
                                            },
                                            "@ondc/org/collection_amount": {
                                                description:
                                                    "CoD collection amount",
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
                                            "@ondc/org/settlement_window_status":
                                                {
                                                    type: "string",
                                                },
                                            "@ondc/org/settlement_details": {
                                                type: "array",
                                                items: {
                                                    type: "object",
                                                    properties: {
                                                        settlement_counterparty:
                                                            {
                                                                type: "string",
                                                            },
                                                        settlement_type: {
                                                            type: "string",
                                                        },
                                                        settlement_bank_account_no:
                                                            {
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
                                                            description:
                                                                "Bank name",
                                                            type: "string",
                                                        },
                                                        branch_name: {
                                                            description:
                                                                "Branch name",
                                                            type: "string",
                                                        },
                                                        beneficiary_name: {
                                                            description:
                                                                "Beneficiary Name",
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
                                },
                                locations: {
                                    type: "array",
                                    items: {
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
                                            {
                                                type: "object",
                                                properties: {
                                                    rateable: {
                                                        description:
                                                            "If the entity can be rated or not",
                                                        type: "boolean",
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                },
                                offers: {
                                    type: "array",
                                    items: {
                                        description: "Describes an offer",
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
                                            location_ids: {
                                                type: "array",
                                                items: {
                                                    type: "string",
                                                },
                                            },
                                            category_ids: {
                                                type: "array",
                                                items: {
                                                    type: "string",
                                                    description:
                                                        "Unique id of the category",
                                                },
                                            },
                                            item_ids: {
                                                type: "array",
                                                items: {
                                                    description:
                                                        "This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.",
                                                    type: "string",
                                                },
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
                                exp: {
                                    type: "string",
                                    description:
                                        "Time after which catalog has to be refreshed",
                                    format: "date-time",
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
                        fulfillment: {
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
                                agent: {
                                    description: "Describes an order executor",
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
                                                    additionalProperties: false,
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
                                                    additionalProperties: false,
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
                                                    additionalProperties: false,
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
                                                    additionalProperties: false,
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
                        category: {
                            description: "Describes a category.",
                            type: "object",
                            properties: {
                                id: {
                                    type: "string",
                                    description: "Unique id of the category",
                                },
                                parent_category_id: {
                                    type: "string",
                                    description:
                                        "Unique id of the parent category - Express delivery - Standard Delivery",
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
                        offer: {
                            description: "Describes an offer",
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
                                location_ids: {
                                    type: "array",
                                    items: {
                                        type: "string",
                                    },
                                },
                                category_ids: {
                                    type: "array",
                                    items: {
                                        type: "string",
                                        description:
                                            "Unique id of the category",
                                    },
                                },
                                item_ids: {
                                    type: "array",
                                    items: {
                                        description:
                                            "This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.",
                                        type: "string",
                                    },
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
                            },
                            additionalProperties: false,
                        },
                        item: {
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
                                category_id: {
                                    type: "string",
                                    description: "Unique id of the category",
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
                        "@ondc/org/payload_details": {
                            type: "object",
                            description:
                                'payload details that will allow logistics provider to determine serviceability. For weight, enums for unit are - "kilogram", "gram" For dimensions, enums for length.unit, breadth.unit and height.unit are - "meter", "centimeter"',
                            properties: {
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
                                                    additionalProperties: false,
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
                                                    additionalProperties: false,
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
                                                    additionalProperties: false,
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
                                category: {
                                    type: "string",
                                },
                                value: {
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
                                dangerous_goods: {
                                    type: "boolean",
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
    },
    additionalProperties: false,
};
