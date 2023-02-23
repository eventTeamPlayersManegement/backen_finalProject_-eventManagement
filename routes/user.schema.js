export const postUser = {
    type: "object",
    additionalProperties: false,
    properties: {
        firstName: {type: "string"},
        lastName: {type: "string"},
        email: {type: "string", format: "email"},
        password: {type: "string", format: "password"},
        admin: {type: "boolean"}
    }
};