
export const ADD_INQUIRY_QUERY = `
    mutation AddInquiry($contactName: String!, $email: String!, $phone: String!, $projectScope: String!, $serviceType: String!, $companyName: String) {
        addInquiry(contactName: $contactName, email: $email, phone: $phone, projectScope: $projectScope, serviceType: $serviceType, companyName: $companyName) {
            message
            status
        }
    }`