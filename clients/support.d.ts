import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Support extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Support.Types.ClientConfiguration)
  config: Config & Support.Types.ClientConfiguration;
  /**
   * Adds one or more attachments to an attachment set.  An attachment set is a temporary container for attachments that you add to a case or case communication. The set is available for 1 hour after it's created. The expiryTime returned in the response is when the set expires.     You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  addAttachmentsToSet(params: Support.Types.AddAttachmentsToSetRequest, callback?: (err: AWSError, data: Support.Types.AddAttachmentsToSetResponse) => void): Request<Support.Types.AddAttachmentsToSetResponse, AWSError>;
  /**
   * Adds one or more attachments to an attachment set.  An attachment set is a temporary container for attachments that you add to a case or case communication. The set is available for 1 hour after it's created. The expiryTime returned in the response is when the set expires.     You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  addAttachmentsToSet(callback?: (err: AWSError, data: Support.Types.AddAttachmentsToSetResponse) => void): Request<Support.Types.AddAttachmentsToSetResponse, AWSError>;
  /**
   * Adds additional customer communication to an Amazon Web Services Support case. Use the caseId parameter to identify the case to which to add communication. You can list a set of email addresses to copy on the communication by using the ccEmailAddresses parameter. The communicationBody value contains the text of the communication.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  addCommunicationToCase(params: Support.Types.AddCommunicationToCaseRequest, callback?: (err: AWSError, data: Support.Types.AddCommunicationToCaseResponse) => void): Request<Support.Types.AddCommunicationToCaseResponse, AWSError>;
  /**
   * Adds additional customer communication to an Amazon Web Services Support case. Use the caseId parameter to identify the case to which to add communication. You can list a set of email addresses to copy on the communication by using the ccEmailAddresses parameter. The communicationBody value contains the text of the communication.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  addCommunicationToCase(callback?: (err: AWSError, data: Support.Types.AddCommunicationToCaseResponse) => void): Request<Support.Types.AddCommunicationToCaseResponse, AWSError>;
  /**
   * Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case in the Amazon Web Services Support Center Create Case page. The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways:    Submit a request from the Amazon Web Services Support Center Create Case page.   Use the Service Quotas RequestServiceQuotaIncrease operation.   A successful CreateCase request returns an Amazon Web Services Support case number. You can use the DescribeCases operation and specify the case number to get existing Amazon Web Services Support cases. After you create a case, use the AddCommunicationToCase operation to add additional communication or attachments to an existing case. The caseId is separate from the displayId that appears in the Amazon Web Services Support Center. Use the DescribeCases operation to get the displayId.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  createCase(params: Support.Types.CreateCaseRequest, callback?: (err: AWSError, data: Support.Types.CreateCaseResponse) => void): Request<Support.Types.CreateCaseResponse, AWSError>;
  /**
   * Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case in the Amazon Web Services Support Center Create Case page. The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways:    Submit a request from the Amazon Web Services Support Center Create Case page.   Use the Service Quotas RequestServiceQuotaIncrease operation.   A successful CreateCase request returns an Amazon Web Services Support case number. You can use the DescribeCases operation and specify the case number to get existing Amazon Web Services Support cases. After you create a case, use the AddCommunicationToCase operation to add additional communication or attachments to an existing case. The caseId is separate from the displayId that appears in the Amazon Web Services Support Center. Use the DescribeCases operation to get the displayId.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  createCase(callback?: (err: AWSError, data: Support.Types.CreateCaseResponse) => void): Request<Support.Types.CreateCaseResponse, AWSError>;
  /**
   * Returns the attachment that has the specified ID. Attachments can include screenshots, error logs, or other files that describe your issue. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the AttachmentDetails objects that are returned by the DescribeCommunications operation.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeAttachment(params: Support.Types.DescribeAttachmentRequest, callback?: (err: AWSError, data: Support.Types.DescribeAttachmentResponse) => void): Request<Support.Types.DescribeAttachmentResponse, AWSError>;
  /**
   * Returns the attachment that has the specified ID. Attachments can include screenshots, error logs, or other files that describe your issue. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the AttachmentDetails objects that are returned by the DescribeCommunications operation.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeAttachment(callback?: (err: AWSError, data: Support.Types.DescribeAttachmentResponse) => void): Request<Support.Types.DescribeAttachmentResponse, AWSError>;
  /**
   * Returns a list of cases that you specify by passing one or more case IDs. You can use the afterTime and beforeTime parameters to filter the cases by date. You can set values for the includeResolvedCases and includeCommunications parameters to specify how much information to return. The response returns the following in JSON format:   One or more CaseDetails data types.   One or more nextToken values, which specify where to paginate the returned records represented by the CaseDetails objects.   Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request might return an error.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeCases(params: Support.Types.DescribeCasesRequest, callback?: (err: AWSError, data: Support.Types.DescribeCasesResponse) => void): Request<Support.Types.DescribeCasesResponse, AWSError>;
  /**
   * Returns a list of cases that you specify by passing one or more case IDs. You can use the afterTime and beforeTime parameters to filter the cases by date. You can set values for the includeResolvedCases and includeCommunications parameters to specify how much information to return. The response returns the following in JSON format:   One or more CaseDetails data types.   One or more nextToken values, which specify where to paginate the returned records represented by the CaseDetails objects.   Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request might return an error.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeCases(callback?: (err: AWSError, data: Support.Types.DescribeCasesResponse) => void): Request<Support.Types.DescribeCasesResponse, AWSError>;
  /**
   * Returns communications and attachments for one or more support cases. Use the afterTime and beforeTime parameters to filter by date. You can use the caseId parameter to restrict the results to a specific case. Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error. You can use the maxResults and nextToken parameters to control the pagination of the results. Set maxResults to the number of cases that you want to display on each page, and use nextToken to specify the resumption of pagination.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeCommunications(params: Support.Types.DescribeCommunicationsRequest, callback?: (err: AWSError, data: Support.Types.DescribeCommunicationsResponse) => void): Request<Support.Types.DescribeCommunicationsResponse, AWSError>;
  /**
   * Returns communications and attachments for one or more support cases. Use the afterTime and beforeTime parameters to filter by date. You can use the caseId parameter to restrict the results to a specific case. Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error. You can use the maxResults and nextToken parameters to control the pagination of the results. Set maxResults to the number of cases that you want to display on each page, and use nextToken to specify the resumption of pagination.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeCommunications(callback?: (err: AWSError, data: Support.Types.DescribeCommunicationsResponse) => void): Request<Support.Types.DescribeCommunicationsResponse, AWSError>;
  /**
   * Returns a list of CreateCaseOption types along with the corresponding supported hours and language availability. You can specify the language categoryCode, issueType and serviceCode used to retrieve the CreateCaseOptions.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeCreateCaseOptions(params: Support.Types.DescribeCreateCaseOptionsRequest, callback?: (err: AWSError, data: Support.Types.DescribeCreateCaseOptionsResponse) => void): Request<Support.Types.DescribeCreateCaseOptionsResponse, AWSError>;
  /**
   * Returns a list of CreateCaseOption types along with the corresponding supported hours and language availability. You can specify the language categoryCode, issueType and serviceCode used to retrieve the CreateCaseOptions.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeCreateCaseOptions(callback?: (err: AWSError, data: Support.Types.DescribeCreateCaseOptionsResponse) => void): Request<Support.Types.DescribeCreateCaseOptionsResponse, AWSError>;
  /**
   * Returns the current list of Amazon Web Services services and a list of service categories for each service. You then use service names and categories in your CreateCase requests. Each Amazon Web Services service has its own set of categories. The service codes and category codes correspond to the values that appear in the Service and Category lists on the Amazon Web Services Support Center Create Case page. The values in those fields don't necessarily match the service codes and categories returned by the DescribeServices operation. Always use the service codes and categories that the DescribeServices operation returns, so that you have the most recent set of service and category codes.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeServices(params: Support.Types.DescribeServicesRequest, callback?: (err: AWSError, data: Support.Types.DescribeServicesResponse) => void): Request<Support.Types.DescribeServicesResponse, AWSError>;
  /**
   * Returns the current list of Amazon Web Services services and a list of service categories for each service. You then use service names and categories in your CreateCase requests. Each Amazon Web Services service has its own set of categories. The service codes and category codes correspond to the values that appear in the Service and Category lists on the Amazon Web Services Support Center Create Case page. The values in those fields don't necessarily match the service codes and categories returned by the DescribeServices operation. Always use the service codes and categories that the DescribeServices operation returns, so that you have the most recent set of service and category codes.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeServices(callback?: (err: AWSError, data: Support.Types.DescribeServicesResponse) => void): Request<Support.Types.DescribeServicesResponse, AWSError>;
  /**
   * Returns the list of severity levels that you can assign to a support case. The severity level for a case is also a field in the CaseDetails data type that you include for a CreateCase request.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeSeverityLevels(params: Support.Types.DescribeSeverityLevelsRequest, callback?: (err: AWSError, data: Support.Types.DescribeSeverityLevelsResponse) => void): Request<Support.Types.DescribeSeverityLevelsResponse, AWSError>;
  /**
   * Returns the list of severity levels that you can assign to a support case. The severity level for a case is also a field in the CaseDetails data type that you include for a CreateCase request.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeSeverityLevels(callback?: (err: AWSError, data: Support.Types.DescribeSeverityLevelsResponse) => void): Request<Support.Types.DescribeSeverityLevelsResponse, AWSError>;
  /**
   * Returns a list of supported languages for a specified categoryCode, issueType and serviceCode. The returned supported languages will include a ISO 639-1 code for the language, and the language display name.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeSupportedLanguages(params: Support.Types.DescribeSupportedLanguagesRequest, callback?: (err: AWSError, data: Support.Types.DescribeSupportedLanguagesResponse) => void): Request<Support.Types.DescribeSupportedLanguagesResponse, AWSError>;
  /**
   * Returns a list of supported languages for a specified categoryCode, issueType and serviceCode. The returned supported languages will include a ISO 639-1 code for the language, and the language display name.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  describeSupportedLanguages(callback?: (err: AWSError, data: Support.Types.DescribeSupportedLanguagesResponse) => void): Request<Support.Types.DescribeSupportedLanguagesResponse, AWSError>;
  /**
   * Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. Some checks are refreshed automatically, and you can't return their refresh statuses by using the DescribeTrustedAdvisorCheckRefreshStatuses operation. If you call this operation for these checks, you might see an InvalidParameterValue error.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.
   */
  describeTrustedAdvisorCheckRefreshStatuses(params: Support.Types.DescribeTrustedAdvisorCheckRefreshStatusesRequest, callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckRefreshStatusesResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckRefreshStatusesResponse, AWSError>;
  /**
   * Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. Some checks are refreshed automatically, and you can't return their refresh statuses by using the DescribeTrustedAdvisorCheckRefreshStatuses operation. If you call this operation for these checks, you might see an InvalidParameterValue error.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.
   */
  describeTrustedAdvisorCheckRefreshStatuses(callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckRefreshStatusesResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckRefreshStatusesResponse, AWSError>;
  /**
   * Returns the results of the Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. The response contains a TrustedAdvisorCheckResult object, which contains these three objects:    TrustedAdvisorCategorySpecificSummary     TrustedAdvisorResourceDetail     TrustedAdvisorResourcesSummary    In addition, the response contains these fields:    status - The alert status of the check can be ok (green), warning (yellow), error (red), or not_available.    timestamp - The time of the last refresh of the check.    checkId - The unique identifier for the check.      You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.
   */
  describeTrustedAdvisorCheckResult(params: Support.Types.DescribeTrustedAdvisorCheckResultRequest, callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckResultResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckResultResponse, AWSError>;
  /**
   * Returns the results of the Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. The response contains a TrustedAdvisorCheckResult object, which contains these three objects:    TrustedAdvisorCategorySpecificSummary     TrustedAdvisorResourceDetail     TrustedAdvisorResourcesSummary    In addition, the response contains these fields:    status - The alert status of the check can be ok (green), warning (yellow), error (red), or not_available.    timestamp - The time of the last refresh of the check.    checkId - The unique identifier for the check.      You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.
   */
  describeTrustedAdvisorCheckResult(callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckResultResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckResultResponse, AWSError>;
  /**
   * Returns the results for the Trusted Advisor check summaries for the check IDs that you specified. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. The response contains an array of TrustedAdvisorCheckSummary objects.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.
   */
  describeTrustedAdvisorCheckSummaries(params: Support.Types.DescribeTrustedAdvisorCheckSummariesRequest, callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckSummariesResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckSummariesResponse, AWSError>;
  /**
   * Returns the results for the Trusted Advisor check summaries for the check IDs that you specified. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. The response contains an array of TrustedAdvisorCheckSummary objects.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.
   */
  describeTrustedAdvisorCheckSummaries(callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorCheckSummariesResponse) => void): Request<Support.Types.DescribeTrustedAdvisorCheckSummariesResponse, AWSError>;
  /**
   * Returns information about all available Trusted Advisor checks, including the name, ID, category, description, and metadata. You must specify a language code. The response contains a TrustedAdvisorCheckDescription object for each check. You must set the Amazon Web Services Region to us-east-1.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   The names and descriptions for Trusted Advisor checks are subject to change. We recommend that you specify the check ID in your code to uniquely identify a check.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.
   */
  describeTrustedAdvisorChecks(params: Support.Types.DescribeTrustedAdvisorChecksRequest, callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorChecksResponse) => void): Request<Support.Types.DescribeTrustedAdvisorChecksResponse, AWSError>;
  /**
   * Returns information about all available Trusted Advisor checks, including the name, ID, category, description, and metadata. You must specify a language code. The response contains a TrustedAdvisorCheckDescription object for each check. You must set the Amazon Web Services Region to us-east-1.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   The names and descriptions for Trusted Advisor checks are subject to change. We recommend that you specify the check ID in your code to uniquely identify a check.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.
   */
  describeTrustedAdvisorChecks(callback?: (err: AWSError, data: Support.Types.DescribeTrustedAdvisorChecksResponse) => void): Request<Support.Types.DescribeTrustedAdvisorChecksResponse, AWSError>;
  /**
   * Refreshes the Trusted Advisor check that you specify using the check ID. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. Some checks are refreshed automatically. If you call the RefreshTrustedAdvisorCheck operation to refresh them, you might see the InvalidParameterValue error. The response contains a TrustedAdvisorCheckRefreshStatus object.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.
   */
  refreshTrustedAdvisorCheck(params: Support.Types.RefreshTrustedAdvisorCheckRequest, callback?: (err: AWSError, data: Support.Types.RefreshTrustedAdvisorCheckResponse) => void): Request<Support.Types.RefreshTrustedAdvisorCheckResponse, AWSError>;
  /**
   * Refreshes the Trusted Advisor check that you specify using the check ID. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. Some checks are refreshed automatically. If you call the RefreshTrustedAdvisorCheck operation to refresh them, you might see the InvalidParameterValue error. The response contains a TrustedAdvisorCheckRefreshStatus object.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.
   */
  refreshTrustedAdvisorCheck(callback?: (err: AWSError, data: Support.Types.RefreshTrustedAdvisorCheckResponse) => void): Request<Support.Types.RefreshTrustedAdvisorCheckResponse, AWSError>;
  /**
   * Resolves a support case. This operation takes a caseId and returns the initial and final state of the case.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  resolveCase(params: Support.Types.ResolveCaseRequest, callback?: (err: AWSError, data: Support.Types.ResolveCaseResponse) => void): Request<Support.Types.ResolveCaseResponse, AWSError>;
  /**
   * Resolves a support case. This operation takes a caseId and returns the initial and final state of the case.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   
   */
  resolveCase(callback?: (err: AWSError, data: Support.Types.ResolveCaseResponse) => void): Request<Support.Types.ResolveCaseResponse, AWSError>;
}
declare namespace Support {
  export interface AddAttachmentsToSetRequest {
    /**
     * The ID of the attachment set. If an attachmentSetId is not specified, a new attachment set is created, and the ID of the set is returned in the response. If an attachmentSetId is specified, the attachments are added to the specified set, if it exists.
     */
    attachmentSetId?: AttachmentSetId;
    /**
     * One or more attachments to add to the set. You can add up to three attachments per set. The size limit is 5 MB per attachment. In the Attachment object, use the data parameter to specify the contents of the attachment file. In the previous request syntax, the value for data appear as blob, which is represented as a base64-encoded string. The value for fileName is the name of the attachment, such as troubleshoot-screenshot.png.
     */
    attachments: Attachments;
  }
  export interface AddAttachmentsToSetResponse {
    /**
     * The ID of the attachment set. If an attachmentSetId was not specified, a new attachment set is created, and the ID of the set is returned in the response. If an attachmentSetId was specified, the attachments are added to the specified set, if it exists.
     */
    attachmentSetId?: AttachmentSetId;
    /**
     * The time and date when the attachment set expires.
     */
    expiryTime?: ExpiryTime;
  }
  export interface AddCommunicationToCaseRequest {
    /**
     * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
    /**
     * The body of an email communication to add to the support case.
     */
    communicationBody: CommunicationBody;
    /**
     * The email addresses in the CC line of an email to be added to the support case.
     */
    ccEmailAddresses?: CcEmailAddressList;
    /**
     * The ID of a set of one or more attachments for the communication to add to the case. Create the set by calling AddAttachmentsToSet 
     */
    attachmentSetId?: AttachmentSetId;
  }
  export interface AddCommunicationToCaseResponse {
    /**
     * True if AddCommunicationToCase succeeds. Otherwise, returns an error.
     */
    result?: Result;
  }
  export type AfterTime = string;
  export interface Attachment {
    /**
     * The name of the attachment file.
     */
    fileName?: FileName;
    /**
     * The content of the attachment file.
     */
    data?: Data;
  }
  export interface AttachmentDetails {
    /**
     * The ID of the attachment.
     */
    attachmentId?: AttachmentId;
    /**
     * The file name of the attachment.
     */
    fileName?: FileName;
  }
  export type AttachmentId = string;
  export type AttachmentSet = AttachmentDetails[];
  export type AttachmentSetId = string;
  export type Attachments = Attachment[];
  export type BeforeTime = string;
  export type Boolean = boolean;
  export interface CaseDetails {
    /**
     * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
    /**
     * The ID displayed for the case in the Amazon Web Services Support Center. This is a numeric string.
     */
    displayId?: DisplayId;
    /**
     * The subject line for the case in the Amazon Web Services Support Center.
     */
    subject?: Subject;
    /**
     * The status of the case. Valid values:    all-open     customer-action-completed     opened     pending-customer-action     reopened     resolved     unassigned     work-in-progress   
     */
    status?: Status;
    /**
     * The code for the Amazon Web Services service. You can get a list of codes and the corresponding service names by calling DescribeServices.
     */
    serviceCode?: ServiceCode;
    /**
     * The category of problem for the support case.
     */
    categoryCode?: CategoryCode;
    /**
     * The code for the severity level returned by the call to DescribeSeverityLevels.
     */
    severityCode?: SeverityCode;
    /**
     * The email address of the account that submitted the case.
     */
    submittedBy?: SubmittedBy;
    /**
     * The time that the case was created in the Amazon Web Services Support Center.
     */
    timeCreated?: TimeCreated;
    /**
     * The five most recent communications between you and Amazon Web Services Support Center, including the IDs of any attachments to the communications. Also includes a nextToken that you can use to retrieve earlier communications.
     */
    recentCommunications?: RecentCaseCommunications;
    /**
     * The email addresses that receive copies of communication about the case.
     */
    ccEmailAddresses?: CcEmailAddressList;
    /**
     * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
     */
    language?: Language;
  }
  export type CaseId = string;
  export type CaseIdList = CaseId[];
  export type CaseList = CaseDetails[];
  export type CaseStatus = string;
  export interface Category {
    /**
     * The category code for the support case.
     */
    code?: CategoryCode;
    /**
     * The category name for the support case.
     */
    name?: CategoryName;
  }
  export type CategoryCode = string;
  export type CategoryList = Category[];
  export type CategoryName = string;
  export type CcEmailAddress = string;
  export type CcEmailAddressList = CcEmailAddress[];
  export type Code = string;
  export interface Communication {
    /**
     * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
    /**
     * The text of the communication between the customer and Amazon Web Services Support.
     */
    body?: ValidatedCommunicationBody;
    /**
     * The identity of the account that submitted, or responded to, the support case. Customer entries include the IAM role as well as the email address (for example, "AdminRole (Role) &lt;janedoe@example.com&gt;). Entries from the Amazon Web Services Support team display "Amazon Web Services," and don't show an email address. 
     */
    submittedBy?: SubmittedBy;
    /**
     * The time the communication was created.
     */
    timeCreated?: TimeCreated;
    /**
     * Information about the attachments to the case communication.
     */
    attachmentSet?: AttachmentSet;
  }
  export type CommunicationBody = string;
  export type CommunicationList = Communication[];
  export interface CommunicationTypeOptions {
    /**
     *  A string value indicating the communication type. At the moment the type value can assume one of 3 values at the moment chat, web and call. 
     */
    type?: Type;
    /**
     *  A JSON-formatted list containing time ranges when support is available. 
     */
    supportedHours?: SupportedHoursList;
    /**
     *  A JSON-formatted list containing date and time ranges for periods without support 
     */
    datesWithoutSupport?: DatesWithoutSupportList;
  }
  export type CommunicationTypeOptionsList = CommunicationTypeOptions[];
  export interface CreateCaseRequest {
    /**
     * The title of the support case. The title appears in the Subject field on the Amazon Web Services Support Center Create Case page.
     */
    subject: Subject;
    /**
     * The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible serviceCode values.
     */
    serviceCode?: ServiceCode;
    /**
     * A value that indicates the urgency of the case. This value determines the response time according to your service level agreement with Amazon Web Services Support. You can use the DescribeSeverityLevels operation to get the possible values for severityCode.  For more information, see SeverityLevel and Choosing a Severity in the Amazon Web Services Support User Guide.  The availability of severity levels depends on the support plan for the Amazon Web Services account. 
     */
    severityCode?: SeverityCode;
    /**
     * The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes.
     */
    categoryCode?: CategoryCode;
    /**
     * The communication body text that describes the issue. This text appears in the Description field on the Amazon Web Services Support Center Create Case page.
     */
    communicationBody: CommunicationBody;
    /**
     * A list of email addresses that Amazon Web Services Support copies on case correspondence. Amazon Web Services Support identifies the account that creates the case when you specify your Amazon Web Services credentials in an HTTP POST method or use the Amazon Web Services SDKs. 
     */
    ccEmailAddresses?: CcEmailAddressList;
    /**
     * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
     */
    language?: Language;
    /**
     * The type of issue for the case. You can specify customer-service or technical. If you don't specify a value, the default is technical.
     */
    issueType?: IssueType;
    /**
     * The ID of a set of one or more attachments for the case. Create the set by using the AddAttachmentsToSet operation.
     */
    attachmentSetId?: AttachmentSetId;
  }
  export interface CreateCaseResponse {
    /**
     * The support case ID requested or returned in the call. The case ID is an alphanumeric string in the following format: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
  }
  export type Data = Buffer|Uint8Array|Blob|string;
  export interface DateInterval {
    /**
     *  A JSON object containing start and date time (UTC). Date and time format is RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'. 
     */
    startDateTime?: ValidatedDateTime;
    /**
     *  End Date Time (UTC). RFC 3339 format : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'. 
     */
    endDateTime?: ValidatedDateTime;
  }
  export type DatesWithoutSupportList = DateInterval[];
  export interface DescribeAttachmentRequest {
    /**
     * The ID of the attachment to return. Attachment IDs are returned by the DescribeCommunications operation.
     */
    attachmentId: AttachmentId;
  }
  export interface DescribeAttachmentResponse {
    /**
     * This object includes the attachment content and file name. In the previous response syntax, the value for the data parameter appears as blob, which is represented as a base64-encoded string. The value for fileName is the name of the attachment, such as troubleshoot-screenshot.png.
     */
    attachment?: Attachment;
  }
  export interface DescribeCasesRequest {
    /**
     * A list of ID numbers of the support cases you want returned. The maximum number of cases is 100.
     */
    caseIdList?: CaseIdList;
    /**
     * The ID displayed for a case in the Amazon Web Services Support Center user interface.
     */
    displayId?: DisplayId;
    /**
     * The start date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    afterTime?: AfterTime;
    /**
     * The end date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    beforeTime?: BeforeTime;
    /**
     * Specifies whether to include resolved support cases in the DescribeCases response. By default, resolved cases aren't included.
     */
    includeResolvedCases?: IncludeResolvedCases;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return before paginating.
     */
    maxResults?: MaxResults;
    /**
     * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
     */
    language?: Language;
    /**
     * Specifies whether to include communications in the DescribeCases response. By default, communications are included.
     */
    includeCommunications?: IncludeCommunications;
  }
  export interface DescribeCasesResponse {
    /**
     * The details for the cases that match the request.
     */
    cases?: CaseList;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
  }
  export interface DescribeCommunicationsRequest {
    /**
     * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId: CaseId;
    /**
     * The end date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    beforeTime?: BeforeTime;
    /**
     * The start date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    afterTime?: AfterTime;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return before paginating.
     */
    maxResults?: MaxResults;
  }
  export interface DescribeCommunicationsResponse {
    /**
     * The communications for the case.
     */
    communications?: CommunicationList;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
  }
  export interface DescribeCreateCaseOptionsRequest {
    /**
     * The type of issue for the case. You can specify customer-service or technical. If you don't specify a value, the default is technical.
     */
    issueType: IssueType;
    /**
     * The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible serviceCode values.
     */
    serviceCode: ServiceCode;
    /**
     * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
     */
    language: Language;
    /**
     * The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes.
     */
    categoryCode: CategoryCode;
  }
  export interface DescribeCreateCaseOptionsResponse {
    /**
     * Language availability can be any of the following:    available     best_effort     unavailable   
     */
    languageAvailability?: ValidatedLanguageAvailability;
    /**
     *  A JSON-formatted array that contains the available communication type options, along with the available support timeframes for the given inputs. 
     */
    communicationTypes?: CommunicationTypeOptionsList;
  }
  export interface DescribeServicesRequest {
    /**
     * A JSON-formatted list of service codes available for Amazon Web Services services.
     */
    serviceCodeList?: ServiceCodeList;
    /**
     * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
     */
    language?: Language;
  }
  export interface DescribeServicesResponse {
    /**
     * A JSON-formatted list of Amazon Web Services services.
     */
    services?: ServiceList;
  }
  export interface DescribeSeverityLevelsRequest {
    /**
     * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
     */
    language?: Language;
  }
  export interface DescribeSeverityLevelsResponse {
    /**
     * The available severity levels for the support case. Available severity levels are defined by your service level agreement with Amazon Web Services.
     */
    severityLevels?: SeverityLevelsList;
  }
  export interface DescribeSupportedLanguagesRequest {
    /**
     * The type of issue for the case. You can specify customer-service or technical.
     */
    issueType: ValidatedIssueTypeString;
    /**
     * The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible serviceCode values.
     */
    serviceCode: ValidatedServiceCode;
    /**
     * The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes.
     */
    categoryCode: ValidatedCategoryCode;
  }
  export interface DescribeSupportedLanguagesResponse {
    /**
     *  A JSON-formatted array that contains the available ISO 639-1 language codes. 
     */
    supportedLanguages?: SupportedLanguagesList;
  }
  export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
    /**
     * The IDs of the Trusted Advisor checks to get the status.  If you specify the check ID of a check that is automatically refreshed, you might see an InvalidParameterValue error. 
     */
    checkIds: StringList;
  }
  export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
    /**
     * The refresh status of the specified Trusted Advisor checks.
     */
    statuses: TrustedAdvisorCheckRefreshStatusList;
  }
  export interface DescribeTrustedAdvisorCheckResultRequest {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The ISO 639-1 code for the language that you want your check results to appear in. The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:   Chinese, Simplified - zh    Chinese, Traditional - zh_TW    English - en    French - fr    German - de    Indonesian - id    Italian - it    Japanese - ja    Korean - ko    Portuguese, Brazilian - pt_BR    Spanish - es   
     */
    language?: String;
  }
  export interface DescribeTrustedAdvisorCheckResultResponse {
    /**
     * The detailed results of the Trusted Advisor check.
     */
    result?: TrustedAdvisorCheckResult;
  }
  export interface DescribeTrustedAdvisorCheckSummariesRequest {
    /**
     * The IDs of the Trusted Advisor checks.
     */
    checkIds: StringList;
  }
  export interface DescribeTrustedAdvisorCheckSummariesResponse {
    /**
     * The summary information for the requested Trusted Advisor checks.
     */
    summaries: TrustedAdvisorCheckSummaryList;
  }
  export interface DescribeTrustedAdvisorChecksRequest {
    /**
     * The ISO 639-1 code for the language that you want your checks to appear in. The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:   Chinese, Simplified - zh    Chinese, Traditional - zh_TW    English - en    French - fr    German - de    Indonesian - id    Italian - it    Japanese - ja    Korean - ko    Portuguese, Brazilian - pt_BR    Spanish - es   
     */
    language: String;
  }
  export interface DescribeTrustedAdvisorChecksResponse {
    /**
     * Information about all available Trusted Advisor checks.
     */
    checks: TrustedAdvisorCheckList;
  }
  export type Display = string;
  export type DisplayId = string;
  export type Double = number;
  export type EndTime = string;
  export type ExpiryTime = string;
  export type FileName = string;
  export type IncludeCommunications = boolean;
  export type IncludeResolvedCases = boolean;
  export type IssueType = string;
  export type Language = string;
  export type Long = number;
  export type MaxResults = number;
  export type NextToken = string;
  export interface RecentCaseCommunications {
    /**
     * The five most recent communications associated with the case.
     */
    communications?: CommunicationList;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
  }
  export interface RefreshTrustedAdvisorCheckRequest {
    /**
     * The unique identifier for the Trusted Advisor check to refresh.  Specifying the check ID of a check that is automatically refreshed causes an InvalidParameterValue error. 
     */
    checkId: String;
  }
  export interface RefreshTrustedAdvisorCheckResponse {
    /**
     * The current refresh status for a check, including the amount of time until the check is eligible for refresh.
     */
    status: TrustedAdvisorCheckRefreshStatus;
  }
  export interface ResolveCaseRequest {
    /**
     * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
  }
  export interface ResolveCaseResponse {
    /**
     * The status of the case when the ResolveCase request was sent.
     */
    initialCaseStatus?: CaseStatus;
    /**
     * The status of the case after the ResolveCase request was processed.
     */
    finalCaseStatus?: CaseStatus;
  }
  export type Result = boolean;
  export interface Service {
    /**
     * The code for an Amazon Web Services service returned by the DescribeServices response. The name element contains the corresponding friendly name.
     */
    code?: ServiceCode;
    /**
     * The friendly name for an Amazon Web Services service. The code element contains the corresponding code.
     */
    name?: ServiceName;
    /**
     * A list of categories that describe the type of support issue a case describes. Categories consist of a category name and a category code. Category names and codes are passed to Amazon Web Services Support when you call CreateCase.
     */
    categories?: CategoryList;
  }
  export type ServiceCode = string;
  export type ServiceCodeList = ServiceCode[];
  export type ServiceList = Service[];
  export type ServiceName = string;
  export type SeverityCode = string;
  export interface SeverityLevel {
    /**
     * The code for case severity level. Valid values: low | normal | high | urgent | critical 
     */
    code?: SeverityLevelCode;
    /**
     * The name of the severity level that corresponds to the severity level code.  The values returned by the API are different from the values that appear in the Amazon Web Services Support Center. For example, the API uses the code low, but the name appears as General guidance in Support Center.  The following are the API code names and how they appear in the console:    low - General guidance    normal - System impaired    high - Production system impaired    urgent - Production system down    critical - Business-critical system down    For more information, see Choosing a severity in the Amazon Web Services Support User Guide.
     */
    name?: SeverityLevelName;
  }
  export type SeverityLevelCode = string;
  export type SeverityLevelName = string;
  export type SeverityLevelsList = SeverityLevel[];
  export type StartTime = string;
  export type Status = string;
  export type String = string;
  export type StringList = String[];
  export type Subject = string;
  export type SubmittedBy = string;
  export interface SupportedHour {
    /**
     *  Start Time. RFC 3339 format 'HH:mm:ss.SSS'. 
     */
    startTime?: StartTime;
    /**
     *  End Time. RFC 3339 format 'HH:mm:ss.SSS'. 
     */
    endTime?: EndTime;
  }
  export type SupportedHoursList = SupportedHour[];
  export interface SupportedLanguage {
    /**
     *  2 digit ISO 639-1 code. e.g. en 
     */
    code?: Code;
    /**
     *  Full language description e.g. ENGLISH 
     */
    language?: Language;
    /**
     *  Language display value e.g. ENGLISH 
     */
    display?: Display;
  }
  export type SupportedLanguagesList = SupportedLanguage[];
  export type TimeCreated = string;
  export interface TrustedAdvisorCategorySpecificSummary {
    /**
     * The summary information about cost savings for a Trusted Advisor check that is in the Cost Optimizing category.
     */
    costOptimizing?: TrustedAdvisorCostOptimizingSummary;
  }
  export interface TrustedAdvisorCheckDescription {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    id: String;
    /**
     * The display name for the Trusted Advisor check.
     */
    name: String;
    /**
     * The description of the Trusted Advisor check, which includes the alert criteria and recommended operations (contains HTML markup).
     */
    description: String;
    /**
     * The category of the Trusted Advisor check.
     */
    category: String;
    /**
     * The column headings for the data returned by the Trusted Advisor check. The order of the headings corresponds to the order of the data in the Metadata element of the TrustedAdvisorResourceDetail for the check. Metadata contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data. 
     */
    metadata: StringList;
  }
  export type TrustedAdvisorCheckList = TrustedAdvisorCheckDescription[];
  export interface TrustedAdvisorCheckRefreshStatus {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The status of the Trusted Advisor check for which a refresh has been requested:     none - The check is not refreshed or the non-success status exceeds the timeout    enqueued - The check refresh requests has entered the refresh queue    processing - The check refresh request is picked up by the rule processing engine    success - The check is successfully refreshed    abandoned - The check refresh has failed  
     */
    status: String;
    /**
     * The amount of time, in milliseconds, until the Trusted Advisor check is eligible for refresh.
     */
    millisUntilNextRefreshable: Long;
  }
  export type TrustedAdvisorCheckRefreshStatusList = TrustedAdvisorCheckRefreshStatus[];
  export interface TrustedAdvisorCheckResult {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The time of the last refresh of the check.
     */
    timestamp: String;
    /**
     * The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".
     */
    status: String;
    resourcesSummary: TrustedAdvisorResourcesSummary;
    /**
     * Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.
     */
    categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
    /**
     * The details about each resource listed in the check result.
     */
    flaggedResources: TrustedAdvisorResourceDetailList;
  }
  export interface TrustedAdvisorCheckSummary {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The time of the last refresh of the check.
     */
    timestamp: String;
    /**
     * The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".
     */
    status: String;
    /**
     * Specifies whether the Trusted Advisor check has flagged resources.
     */
    hasFlaggedResources?: Boolean;
    resourcesSummary: TrustedAdvisorResourcesSummary;
    /**
     * Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.
     */
    categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
  }
  export type TrustedAdvisorCheckSummaryList = TrustedAdvisorCheckSummary[];
  export interface TrustedAdvisorCostOptimizingSummary {
    /**
     * The estimated monthly savings that might be realized if the recommended operations are taken.
     */
    estimatedMonthlySavings: Double;
    /**
     * The estimated percentage of savings that might be realized if the recommended operations are taken.
     */
    estimatedPercentMonthlySavings: Double;
  }
  export interface TrustedAdvisorResourceDetail {
    /**
     * The status code for the resource identified in the Trusted Advisor check.
     */
    status: String;
    /**
     * The Amazon Web Services Region in which the identified resource is located.
     */
    region?: String;
    /**
     * The unique identifier for the identified resource.
     */
    resourceId: String;
    /**
     * Specifies whether the Amazon Web Services resource was ignored by Trusted Advisor because it was marked as suppressed by the user.
     */
    isSuppressed?: Boolean;
    /**
     * Additional information about the identified resource. The exact metadata and its order can be obtained by inspecting the TrustedAdvisorCheckDescription object returned by the call to DescribeTrustedAdvisorChecks. Metadata contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data.
     */
    metadata: StringList;
  }
  export type TrustedAdvisorResourceDetailList = TrustedAdvisorResourceDetail[];
  export interface TrustedAdvisorResourcesSummary {
    /**
     * The number of Amazon Web Services resources that were analyzed by the Trusted Advisor check.
     */
    resourcesProcessed: Long;
    /**
     * The number of Amazon Web Services resources that were flagged (listed) by the Trusted Advisor check.
     */
    resourcesFlagged: Long;
    /**
     * The number of Amazon Web Services resources ignored by Trusted Advisor because information was unavailable.
     */
    resourcesIgnored: Long;
    /**
     * The number of Amazon Web Services resources ignored by Trusted Advisor because they were marked as suppressed by the user.
     */
    resourcesSuppressed: Long;
  }
  export type Type = string;
  export type ValidatedCategoryCode = string;
  export type ValidatedCommunicationBody = string;
  export type ValidatedDateTime = string;
  export type ValidatedIssueTypeString = string;
  export type ValidatedLanguageAvailability = string;
  export type ValidatedServiceCode = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2013-04-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Support client.
   */
  export import Types = Support;
}
export = Support;
