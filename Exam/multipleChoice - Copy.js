const multipleChoiceQuestions = [
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO wants to send promotional holiday emails to subscribers who have identified their favorite store locations. Which two actions should NTO take in order to utilize their subscribers’ location preferences? (Choose 2)",
    options: [
      "A new send classification for holiday promotions",
      "A From Name for each store location",
      "A new delivery profile that pulls in store location in the footer",
      "Dynamic From Name that pulls in the store location",
    ],
    answer: [
      "A new delivery profile that pulls in store location in the footer",
      "Dynamic From Name that pulls in the store location",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question: "What is triggered automation?",
    options: [
      "An automation that is initiated when a file is dropped into a designated Enhanced FTP Folder",
      "An automation that triggers an email to be sent based on a user-initiated email definition",
      "An automation that is initiated when a designated value in a data extension is changed",
      "An automation that is triggered based on a schedule that has been defined",
    ],
    answer:
      "An automation that is initiated when a file is dropped into a designated Enhanced FTP Folder",
    note:
      "The correct answer is based on the fact that triggered automations are initiated when specific events occur, like file drops."
    },
  {
    type: "multipleChoice",
    question:
      "What tool is recommended to render personalization strings, AMPscript, and dynamic content in an email message before sending it to a subscriber?",
    options: ["List Detective", "Test Send", "Send Flow", "Preview and Test"],
    answer: "Preview and Test",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketing manager wants to provide unique content to each customer in an upcoming email campaign. Which three features could be used to create individualized content in the email? (Choose 3)",
    options: [
      "Dynamic content",
      "Einstein content",
      "Audience segmentation",
      "Personalization strings",
      "Specialized content",
    ],
    answer: ["Dynamic content", "Einstein content", "Personalization strings"],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters is using a Smart Capture form on a CloudPage to capture contest registrations in a data extension. Corporate has requested a nightly file with all registrants in this data extension be sent daily from Marketing Cloud to an external SFTP. Which automation configuration should be used to achieve this?",
    options: [
      "Schedule Starting Source > Data Extract Activity > File Transfer Activity",
      "File Drop Starting Source > Data Extract Activity > File Transfer Activity",
      "Schedule Starting Source > SQL Query Activity > File Transfer Activity",
      "File Drop Starting Source > SQL Query Activity > File Transfer Activity",
    ],
    answer:
      "Schedule Starting Source > Data Extract Activity > File Transfer Activity",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "A Marketer developed an email with personalized content based on 5 geographical regions: I. Northwest – Static Image II. Southwest – Image carousel III. Central – No content IV. Northeast – Static image V. Southwest – Coupon. How many dynamic content rules need to be created to accomplish this?",
    options: ["3", "6", "4", "5"],
    answer: "4",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A local craft store is implementing the Marketing Cloud and will be using Lists to store their subscriber data. Which two types of data can subscribers easily update via the default Profile Center? (Choose 2)",
    options: [
      "Data Extension Fields",
      "List Attributes",
      "Order History",
      "Email Address",
    ],
    answer: ["List Attributes", "Email Address"],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketer wants to send the same email with the same send properties in several automations. Which activity should be created within Automation Studio?",
    options: [
      "Automated send",
      "Template send",
      "Send email",
      "Triggered send",
    ],
    answer: "Send email",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "After receiving a GDPR “Right to be Forgotten” request from their compliance team, a marketer must remove a contact from Email Studio. Where should this action be initiated in Marketing Cloud?",
    options: [
      "Contact Builder > Contacts Configuration",
      "Administration > Contacts",
      "Contact Builder > All Contacts",
      "Email Studio > All Subscriber",
    ],
    answer: "Contact Builder > All Contacts",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer wants to use personalization strings to create individualized content for an upcoming send. What would the marketer need to know to understand how to use personalization strings? (Choose 3)",
    options: [
      "Personalization strings can appear in the subject line or body of the email",
      "Personalization strings are case-sensitive",
      "When using subscriber data, the attribute or field should have a default value",
      "Personalization strings are noted by two sets of double percent symbols",
      "Personalization strings are limited to profile attributes",
    ],
    answer: [
      "Personalization strings can appear in the subject line or body of the email",
      "When using subscriber data, the attribute or field should have a default value",
      "Personalization strings are noted by two sets of double percent symbols",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "What can be used to join two data extensions to segment via Drag and Drop Segmentation?",
    options: [
      "Subscriber Key",
      "Data Relationship",
      "Subscriber ID",
      "Send Relationship",
    ],
    answer: "Data Relationship",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "The university’s marketing team wants to see the results of an email campaign. Which two items of information and data about the performance of an individual send can be exported from Tracking in Email Studio? (Choose 2)",
    options: [
      "Number of clicks from mobile devices",
      "Images showing how the email rendered on different devices",
      "Subscribers who click on a specific link",
      "Performance data on the Overview tab",
    ],
    answer: [
      "Subscribers who click on a specific link",
      "Performance data on the Overview tab",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Which feature can a marketer use to individualize content in an email? (Choose 3)",
    options: [
      "Dynamic content",
      "Personalization string",
      "Specialized content",
      "Audience Segmentation",
      "Predictive content",
    ],
    answer: ["Dynamic content", "Personalization string", "Predictive content"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO branding guidelines require heavy use of imagery on its website, app, emails, ads, etc. What two ways can NTO optimize its email design to honor branding guidelines and ensure subscribers are getting the best experience possible? (Choose 2)",
    options: [
      "Style alt text for when images do not display automatically",
      "Make the email completely imaged based",
      "Add background colors that match branding",
      "Use custom corporate font to match the NTO brand",
    ],
    answer: [
      "Style alt text for when images do not display automatically",
      "Add background colors that match branding",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO is looking at using Journey Builder rather than Automation Studio to send emails. What are the three benefits of using Journey Builder? (Choose 3)",
    options: [
      "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests",
      "The ability to update or create Salesforce CRM objects or records",
      "The ability to set goals and have the system listen to see if users met the goal",
      "The ability to extract data from an Audience data extension for analysis",
      "The ability to set criteria to segment contacts based on behavior using SQL",
    ],
    answer: [
      "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests",
      "The ability to update or create Salesforce CRM objects or records",
      "The ability to set goals and have the system listen to see if users met the goal",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A subscriber unsubscribes upon receiving an email from Northern Trail Outfitters (NTO). At the bottom of the NTO email, the subscriber sees three links: Manage Subscriptions, Profile Center, and One-Click Unsubscribe. The subscriber clicks One-Click Unsubscribe. Given that NTO is using the default subscription center, which two options are given when the subscriber clicks One-Click Unsubscribe? (Choose 2)",
    options: [
      "Subscriber can choose to be removed from the data extension.",
      "Subscriber can choose to be unsubscribed from all NTO publications.",
      "Subscriber can choose which publications to unsubscribe from.",
      "Subscriber can choose to resubscribe to the list used for the send.",
    ],
    answer: [
      "Subscriber can choose to be unsubscribed from all NTO publications.",
      "Subscriber can choose which publications to unsubscribe from.",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketer wants to send an email to a sendable data extension that contains a Customer_ID field with a numeric data type that relates to the subscriber key on the all subscriber list as a send relationship. Which two statements are correct about the email send behavior for any subscriber who currently does not exist on the all subscriber list? (Choose 2)",
    options: [
      "The email address and subscriber key will be added to the all subscriber list.",
      "The subscriber will be added to the all subscriber list with a status of Active.",
      "If the customer_ID field does not exist on the all subscriber list, the email send will fail.",
      "The primary key and demographic data will be added to the All subscriber list.",
    ],
    answer:
      "The email address and subscriber key will be added to the all subscriber list.",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters (NTO) offers a 90-day trial on weekly snack box subscriptions. NTO would like to send out a series of emails to educate and remind members to purchase the subscription before the trial ends. What tool is an option for this scenario?",
    options: [
      "Content Builder",
      "Guided Send",
      "Send Flow",
      "Automation Studio",
    ],
    answer: "Automation Studio",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer has been tasked with ensuring Northern Trail Outfitters' unsubscribe mechanisms are CAN-SPAM compliant and follow industry best practices. Which two criteria should the marketer incorporate into campaigns to ensure compliance and align with current best practices? (Choose 2)",
    options: [
      "Include an unsubscribe link in the header or footer of emails.",
      "Ask the subscriber to log in to the Preference Center to confirm opt-out.",
      "Ensure opt-out mechanisms are operational for at least 30 days post-send.",
      "Process every individual's unsubscribe request within 14 business days.",
    ],
    answer: [
      "Include an unsubscribe link in the header or footer of emails.",
      "Ensure opt-out mechanisms are operational for at least 30 days post-send.",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO wants its emails to render uniquely between mobile and desktop devices. NTO would like the emails to be responsive. Which two techniques should be used? (Choose 2)",
    options: [
      "Include @media query CSS in the email",
      "Use a Basic, Empty, or Themed Template in Content Builder",
      "Include style=”display:block” on all images",
      "Use inline CSS styling on all HTML elements",
    ],
    answer: [
      "Include @media query CSS in the email",
      "Use inline CSS styling on all HTML elements",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "While testing an email with dynamic content in Content Builder, proofs of five content variations need to be reviewed directly in the inbox of a marketer's quality assurance specialist and the marketing manager. A data extension named 'myTestData' contains only the variations needed. Which method should be used to accomplish this task?",
    options: [
      "Enter the email addresses to receive proofs, and then choose to send 'Based on Subscriber Preview myTestData.'",
      "Choose data extension of contacts, and then choose to send 'Based on Recipient Test Data Extension.'",
      "Enter the email addresses to receive proofs, and then select the specific records from a list or data extension whose rendering should be sent.",
      "Create a Test data extension that contains the five content variations the two team members need to validate.",
    ],
    answer:
      "Enter the email addresses to receive proofs, and then choose to send 'Based on Subscriber Preview myTestData.'",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "The marketing team at a bank needs to receive a file of all subscribers who were sent payment reminder emails and opened them each week. The file needs to be encrypted and placed on the bank's external SFTP. How should the scheduled automation be configured to achieve this?",
    options: [
      "Filter Activity > File Transfer Activity > Data Extract Activity",
      "Filter Activity > Query Activity > File Transfer Activity",
      "Query Activity > Data Extract Activity > File Transfer Activity",
      "Data Extract Activity > Query Activity > File Transfer Activity",
    ],
    answer: "Query Activity > Data Extract Activity > File Transfer Activity",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A 15-person management team wants to review test emails built in Email Studio prior to live deployment based on content that is personalized for them but is clearly noted as a test email. What is the safest, most effective way for a marketer to accomplish this task without compromising the email content?",
    options: [
      "Find each individual with Subscriber Preview and Test Send to each individual recipient.",
      "Create a list composed of the management team, prepend 'Test' to the Subject, and use the Send Flow to send the email to the list.",
      "Create a data extension composed of the management team, create a User-Initiated Send Definition, select the email, prepend 'Test' to the Subject, select the data extension, and send the email.",
      "Create a Test data extension composed of the management team and Test Send to the Test data extension.",
    ],
    answer:
      "Create a data extension composed of the management team, create a User-Initiated Send Definition, select the email, prepend 'Test' to the Subject, select the data extension, and send the email.",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "A marketer for Northern Trail Outfitters needs to share multiple assets in Content Builder for a campaign with another business unit in their account. How should the marketer share these assets?",
    options: [
      "Move the content into the Shared Content folder in Content Builder.",
      "Create and share a new folder for the assets in Content Builder.",
      "Individually share each asset with the other business unit in Content Builder.",
      "Switch to Classic Content to move the assets into the Shared Content folder.",
    ],
    answer:
      "Move the content into the Shared Content folder in Content Builder.",
    note:
      ""
    },
  {
    type: "checkboxMultipleChoice",
    question:
      "When deploying a send to its customers, a marketing team would like to send to its own team members also. However, the team does not want the team members' open and click behavior to affect the tracking metrics of the send. Which two steps must be completed when creating the data extension to address this need? (Choose 2)",
    options: [
      "Mark the 'Is Testable' checkbox",
      "Define the Send Relationship by email address",
      "Set the Email Address as the Primary Key",
      "Mark the 'Is Sendable' checkbox",
    ],
    answer: [
      "Mark the 'Is Testable' checkbox",
      "Mark the 'Is Sendable' checkbox",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketing associate wants to use the Validate button to ensure an email is CAN-SPAM compliant. What information does the associate need to provide in order for the email to pass validation?",
    options: [
      "Company Website URL",
      "Profile Center URL",
      "Terms and Conditions Policy",
      "Physical Mailing Address",
    ],
    answer: ["Profile Center URL", "Physical Mailing Address"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer uses Email Approvals. In which send process must an email have an 'Approved' status prior to send? (Choose 3)",
    options: [
      "Test Sends",
      "Send Previews",
      "Scheduled Sends",
      "Triggered Sends",
      "A/B Tests",
    ],
    answer: ["Scheduled Sends", "Triggered Sends", "A/B Tests"],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketer wants to ensure that customers on a list want to be email subscribers. Additionally, the marketer wants to minimize the number of invalid email addresses on the list and add a level of security when using Web Collect functionality. What is the optimal way to accomplish this task?",
    options: [
      "Create a double opt-in campaign that requires subscribers to confirm their email address by clicking a link in an email they receive after subscribing via Web Collect",
      "Add new subscribers to an automated engagement campaign, and then send a series of welcome emails based on their opens and clicks",
      "Configure Web Collect to return an error message for any email address that does not conform to standard conventions",
      "Send a welcome email to subscribers within 24 hours that includes a link to the website, a link to the terms and conditions page, and a customer service number",
    ],
    answer:
      "Create a double opt-in campaign that requires subscribers to confirm their email address by clicking a link in an email they receive after subscribing via Web Collect",
    note:
      ""
    },
  {
    type: "checkboxMultipleChoice",
    question:
      "Northern Trail Outfitters (NTO) needs to use a point-and-click tool to test segmentation rules and verify that the correct subscribers are included in the segment. NTO will need to automate the refreshing of the segment once it is tested. Which two tools should be used to test and configure the segment? (Choose 2)",
    options: [
      "Filter Activity",
      "Filtered Group",
      "SQL Query Activity",
      "Data Filter",
    ],
    answer: ["Filter Activity", "Data Filter"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO has planned cross-channel marketing efforts based on how a subscriber responds to an email and when they last purchased. NTO is evaluating both Automation Studio and Journey Builder for its campaigns and are leaning towards Journey Builder due to the available activities. Which three Canvas Activities are available in Journey Builder? (Choose 3)",
    options: [
      "Wait Until",
      "Decision Split",
      "Query Activity",
      "Post to Facebook",
      "Send SMS",
    ],
    answer: ["Wait Until", "Decision Split", "Send SMS"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A company has set out to increase their subscriber base. They hired a team of marketing consultants to develop an acquisition plan backed by data. What are two effective methods to acquire new subscribers? (Choose 2)",
    options: [
      "Require customers to provide their email address when calling customer service.",
      "Have customers opt in to email before they can shop online.",
      "Ask for an email address when a customer makes a purchase in-store.",
      "Create an in-store SMS campaign that offers a discount for opting in.",
    ],
    answer: [
      "Ask for an email address when a customer makes a purchase in-store.",
      "Create an in-store SMS campaign that offers a discount for opting in.",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketing team is creating a new data extension. The data extension configuration is very similar to a data extension that is already in use. What creation method should the team use to create the new data extension?",
    options: [
      "Create from a Filtered Data Extension",
      "Create from Template",
      "Create from Existing",
      "Create from New",
    ],
    answer: "Create from Existing",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "The marketing team at NTO is working to make newsletter emails more relevant to the subscribers. The first step is to segment subscribers so NTO is not sending a 'batch and blast' newsletter. The second step is to personalize content based on data that has been collected from subscribers. What are two ways NTO can continue to improve the relevance of its newsletter? (Choose 2)",
    options: [
      "Use a substitution string to populate a subscriber's name in the subject line",
      "Change the color of the email background to match their subscribers' preferred color of choice",
      "Use a substitution string to populate a photo of the subscriber in the header of the email",
      "Create content tailored to subscribers' interests and use dynamic rules to populate relevant content",
    ],
    answer: [
      "Use a substitution string to populate a subscriber's name in the subject line",
      "Create content tailored to subscribers' interests and use dynamic rules to populate relevant content",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "What single place in Content Builder would a marketer store CSS used in several Paste HTML Templates?",
    options: [
      "Code Snippet",
      "Style Block",
      "Script Activity",
      "Free Form Code Block",
    ],
    answer: "Code Snippet",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "When using a mobile-optimized template, what causes the mobile layout to display?",
    options: [
      "A subscriber attribute that dictates a mobile layout preference",
      "The email client detection tracking pixel",
      "The screen size of the device that is used to view the email",
      "The specific device that is used to view the email",
    ],
    answer: "The screen size of the device that is used to view the email",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters (NTO) uses link aliases within the HTML versions of its emails to indicate when clicks occurred, even if the same URL is used multiple times within a send. A marketing employee has been asked to pull the email addresses of all customers who clicked on the link associated with 'Main Banner Top' in NTO’s most recent newsletter. Where can the marketer most easily find this information?",
    options: [
      "Tracking Job Links tab > URL ID",
      "Tracking Click Activity tab > Link View",
      "Tracking Click Activity tab > Email Overlay View",
      "Tracking Overview tab > Clicks",
    ],
    answer: "Tracking Click Activity tab > Link View",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Why should a marketer ensure that field lengths are accurate when creating a data extension? (Choose 2)",
    options: [
      "To determine the correct data type",
      "To optimize import process speed",
      "To ensure data integrity",
      "To save the data extension",
    ],
    answer: ["To optimize import process speed", "To ensure data integrity"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer is about to introduce Content Builder to the entire Northern Trail Outfitters marketing team. Which three considerations should the marketing team keep in mind as they begin using Content Builder? (Choose 3)",
    options: [
      "Establish a naming convention optimized for search.",
      "Import duplicate copies of content for different messages or groups.",
      "Create a folder structure prior to importing assets.",
      "Review permissions and roles for users accessing Content Builder.",
      "Focus on creating and importing content for one primary channel.",
    ],
    answer: [
      "Establish a naming convention optimized for search.",
      "Create a folder structure prior to importing assets.",
      "Review permissions and roles for users accessing Content Builder.",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer wants to run an Account Send Summary report. Which option can be configured when running this report? (Choose 3)",
    options: [
      "Report results file format",
      "Report results delivery location",
      "Error report log location",
      "Date range parameters",
      "Error handling parameters",
    ],
    answer: [
      "Report results file format",
      "Report results delivery location",
      "Date range parameters",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters is using a Smart Capture form on a CloudPage to capture contest registrations in a data extension. Corporate has requested a nightly file with all registrants in this data extension be sent daily from Marketing Cloud to an external SFTP. Which automation configuration should be used to achieve this?",
    options: [
      "Scheduled Automation > SQL Query Activity > File Transfer Activity",
      "File Drop Automation > Data Extract Activity > File Transfer Activity",
      "File Drop Automation > SQL Query Activity > File Transfer Activity",
      "Scheduled Automation > Data Extract Activity > File Transfer Activity",
    ],
    answer:
      "Scheduled Automation > Data Extract Activity > File Transfer Activity",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "The NTO email team is creating a reusable content block for its deals to run with campaigns. NTO will cross-promote this campaign in other emails in a single-column content area. This content will have one image, with text below it. How can the NTO email team create one content area and reuse it across other emails using Content Builder without writing any custom HTML?",
    options: [
      "Create an HTML content block",
      "Create a text content block",
      "Create an image content block",
      "Create a free form content block",
    ],
    answer: "Create a free form content block",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Which file type delimiter is available in the Import Wizard? (Choose 3)",
    options: ["Tab", "Comma", "Other", "Pipe", "Fixed Length"],
    answer: ["Tab", "Comma", "Other"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Which two best practices should the customer follow to ensure marketers across the company are taking full advantage of Content Builder? (Choose 2)",
    options: [
      "Optimize the way content is stored with a naming convention",
      "Plan for content to be used cross-channel, eliminating duplicates",
      "Import all content up front, rather than piece by piece",
      "Create folders for each type of uploaded content",
    ],
    answer: [
      "Optimize the way content is stored with a naming convention",
      "Plan for content to be used cross-channel, eliminating duplicates",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters has a Master Customer shared data extension. The company wants to make the table available to some of the business units, but not all of them. How can access to the Master Customer table be restricted?",
    options: [
      "Data/Time Range for Access",
      "Shared Data Extension Permissions",
      "Manage Data Extension Policies",
      "Data Extension Sharing Rules",
    ],
    answer: "Shared Data Extension Permissions",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Each time Northern Trail Outfitters sends its monthly promotional email, the volume of support calls spikes. The executive team would like the marketing team to slowly send emails throughout the day to avoid customers waiting on hold. Which feature should the marketing team use to achieve this?",
    options: [
      "Send Flow",
      "Triggered Send",
      "Send Email Activity",
      "Send Throttling",
    ],
    answer: "Send Throttling",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer sends a re-engagement email to contacts who have not opened or clicked emails in the last month. This email contains a call-to-action (CTA) prompting the recipient to 'Click here to keep receiving our emails.' In which two ways can the marketer determine who clicked on the CTA? (Choose 2)",
    options: [
      "Select the click activity bar chart from the email overlay view of the click activity tab",
      "Select the URL or tracking alias from the link view tab of the click activity tab",
      "Select unique clicks on the overview tab in the inbox activity section",
      "Select the URL ID for the URL or tracking alias from the job links tab",
    ],
    answer: [
      "Select the URL or tracking alias from the link view tab of the click activity tab",
      "Select unique clicks on the overview tab in the inbox activity section",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question: "Which tactic will improve deliverability for a new sender?",
    options: [
      "Send email to ISPs that have been notified of the new sender",
      "Send email during the holiday season when new senders are less likely to be detected",
      "Send email to the most active and engaged customers",
      "Send email to a minimum of 35,000 subscribers per ISP per day",
    ],
    answer: "Send email to the most active and engaged customers",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketing team is using the Import Activity to import a CSV file into a data extension. The file location is the system default File Location: Enhanced FTP. The import has failed and the error is 'File Not Found.' Which two steps should resolve the issue? (Choose 2)",
    options: [
      "Use the Import Wizard to point to rename the file on the FTP.",
      "Change the file format from 'comma separated value' to 'tab delimited.'",
      "Ensure the file to be imported is in the Import Folder on the Enhanced FTP.",
      "Ensure the name of the file in the Import Activity matches the file name on the FTP.",
    ],
    answer: [
      "Ensure the file to be imported is in the Import Folder on the Enhanced FTP.",
      "Ensure the name of the file in the Import Activity matches the file name on the FTP.",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question: "Which feature can be included in a content box? (Choose 3)",
    options: [
      "Facebook Like",
      "Forward to a Friend",
      "Microsites",
      "Content Detective",
      "Social Forward",
    ],
    answer: ["Facebook Like", "Forward to a Friend", "Social Forward"],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "NTO is having its annual footwear sale. NTO wants to try and top its revenue from last year's sale. The campaign last year was a series of emails targeting NTO customers that have expressed a specific interest in footwear. Which additional tactic should improve on NTO's targeted segmentation?",
    options: [
      "Content focused on winter sports items for holiday shopping",
      "Personalized imagery influenced by subscriber preferences",
      "Images of products that the customer has previously purchased",
      "Full-width lifestyle imagery featuring attractive people",
    ],
    answer: "Personalized imagery influenced by subscriber preferences",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO launched a new custom preference center to allow customers to provide details about their personal information such as age, gender, and outdoor sporting interests. In which two ways should NTO honor customers’ preferences when creating emails? (Choose 2)",
    options: [
      "Create a dynamic rule based on customer’s preferences in order to send specific content.",
      "Send customers one email per preference choice to ensure customer receives what they want.",
      "Create emails to include all preference options so that customers do not miss any content.",
      "Use AMPScript to dynamically pull in content associated with customer’s preferences.",
    ],
    answer: [
      "Create a dynamic rule based on customer’s preferences in order to send specific content.",
      "Use AMPScript to dynamically pull in content associated with customer’s preferences.",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A digital marketing team noticed an increase in unsubscribes and would like to implement a mechanism as an alternative to unsubscribing from all sends. The team currently uses data extensions for sending emails. Which tool should they use?",
    options: [
      "Suppression lists",
      "List unsubscribe",
      "Profile attributes",
      "Publication lists",
    ],
    answer: "Publication lists",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question: "Which send process can use Sender Profiles? (Choose 3)",
    options: [
      "User-Initiated Sends",
      "Test Sends",
      "Triggered Sends",
      "Simple Automated Sends",
      "Guided Sends",
    ],
    answer: ["User-Initiated Sends", "Triggered Sends", "Guided Sends"],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "NTO uses HTML emails that have headers and footers coded into the email. What tool can the marketer use to control default headers and footers on email sends?",
    options: [
      "Delivery Profile",
      "AMPScript Lookups",
      "Dynamic Content",
      "Sender Profile",
    ],
    answer: "Delivery Profile",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters (NTO) is currently sending out a single welcome email when a subscriber joins its myNTO Rewards program. NTO wants to test whether one, two, or three welcome emails would result in a higher rate of conversion. How can this be accomplished most efficiently?",
    options: [
      "Journey Builder using a Random Split with three branches",
      "A series of A/B tests to determine the number of emails",
      "Automation Studio with three separate Welcome automations.",
      "Journey Builder using a Decision Split with three branches",
    ],
    answer: "Journey Builder using a Random Split with three branches",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketer needs to import a text file and does not have access to the account’s Enhanced FTP site. What is the recommended way to import the data?",
    options: [
      "Import Subscriber Wizard",
      "Data Extract Activity Interaction",
      "Manual Data Filter Refresh",
      "Import Activity Interaction",
    ],
    answer: "Import Subscriber Wizard",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "When creating a custom email with the HTML Paste Editor, which feature can be inserted into the HTML code by using the Insert Tools? (Choose 2)",
    options: [
      "Physical Mailing address",
      "Link tooltips",
      "Stored Content Boxes",
      "Email Open Tracking",
    ],
    answer: ["Physical Mailing address", "Email Open Tracking"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "An email marketer has been tasked with increasing open rates on a weekly newsletter that currently uses a consistent, identifiable subject line: 'NTO Weekly: Topics of interest this week.' Which two best practices should the marketer use to make the subject line more effective? (Choose 2)",
    options: [
      "Keep the subject text between 50 and 100 characters long",
      "Include information relevant to the message in the subject line",
      "A/B test the effectiveness of different subjects",
      "Include “RE:”, “FWD:”, etc., to get the reader’s attention",
    ],
    answer: [
      "Include information relevant to the message in the subject line",
      "A/B test the effectiveness of different subjects",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Northern Trail Outfitters (NTO) needs to use a point-and-click tool to test segmentation rules and verify that the correct subscribers are included in the segment. NTO will need to automate the refreshing of the segment once it is tested. Which two tools should be used to test and configure the segment? (Choose 2)",
    options: [
      "Filter Activity",
      "Filtered Group",
      "SQL Query Activity",
      "Data Filter",
    ],
    answer: ["Filter Activity", "Data Filter"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer needs to create an attribute named Gender that has a drop-down menu with appropriate values in the Profile Center. How can this be accomplished? (Choose 2)",
    options: [
      "Set a custom maximum length of six",
      "Select the attribute as required",
      "Create restricted values",
      "Select the data type as Text",
    ],
    answer: ["Create restricted values", "Select the data type as Text"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A new marketing manager at Northern Trail Outfitters (NTO) has been asked to evaluate whether to use HTML Emails or Templates for weekly newsletter sends, which are created by a marketing coordinator with limited coding ability. While NTO has HTML developers on staff, their time is not guaranteed on an ongoing basis. Which two characteristics of Templates would benefit NTO when creating its weekly newsletter in Content Builder? (Choose 2)",
    options: [
      "Templates provide the ability to create email messages using content blocks.",
      "One template can only be used for one email, maintaining brand standards.",
      "HTML developers are needed to build templates, but not emails.",
      "Emails can be formatted for desktop and mobile without extra coding.",
    ],
    answer: [
      "Templates provide the ability to create email messages using content blocks.",
      "Emails can be formatted for desktop and mobile without extra coding.",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "The IT department at Northern Trail Outfitters would like to receive email notifications once an automation has completed. How should the automation be configured?",
    options: [
      "Select the IT users from the Notification Settings panel on the Overview page in Automation Studio.",
      "Navigate to the Automation’s Activity tab and enter a comma delimited list of IT staff in the Run Completion field.",
      "Select and configure the Automation Studio Completion report from the Reports Catalog within the Reports application.",
      "Add a Send Email Activity to the end of the Automation workflow and configure it to send to a Subscriber list of IT staff.",
    ],
    answer:
      "Navigate to the Automation’s Activity tab and enter a comma delimited list of IT staff in the Run Completion field.",
    note:
      ""
    },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO is looking at using Journey Builder rather than Automation Studio to send emails. What are the three benefits of using Journey Builder? (Choose 3)",
    options: [
      "The ability to set criteria to segment contacts based on behavior using SQL.",
      "The ability to extract data from an Audience data extension for analysis.",
      "The ability to update or create Salesforce CRM objects or records.",
      "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests.",
      "The ability to set goals and have the system listen to see if users met the goal.",
    ],
    answer: [
      "The ability to update or create Salesforce CRM objects or records.",
      "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests.",
      "The ability to set goals and have the system listen to see if users met the goal.",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters (NTO) created several lists of subscribers and would now like to send an email to all the females on the list. Which feature allows NTO to easily target this segment?",
    options: [
      "List Detective",
      "Publication List",
      "Filtered Group",
      "Smart Capture",
    ],
    answer: "Filtered Group",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A customer wants to grow the number of subscribers in the account. Which two methods should the customer employ to acquire new subscribers? (Choose 2)",
    options: [
      "Re-import unsubscribed customers.",
      "Create an SMS campaign allowing customers to sign up for email.",
      "Add a 'Sign Me Up' form to the homepage.",
      "Use a list of email addresses purchased from online vendors.",
    ],
    answer: [
      "Create an SMS campaign allowing customers to sign up for email.",
      "Add a 'Sign Me Up' form to the homepage.",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "An email marketer is writing the next send's subject line. What can the marketer do to make the subject line more effective? (Choose 2)",
    options: [
      "Include 'RE:', 'FWD:' etc. to get reader's attention",
      "Include information relevant to the message in the subject line",
      "A/B test the effectiveness of different subjects",
      "Keep the subject text between 50 to 100 characters long",
    ],
    answer: [
      "Include information relevant to the message in the subject line",
      "A/B test the effectiveness of different subjects",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters (NTO) would like to create a landing page that contains subscriber information passed to it from email links on the page. They use a Smart Capture form to capture email address, reply date, and response form subscribers. How should NTO set up its data extension?",
    options: [
      "Create a data extension with email address, reply date, and response fields as non-nullable.",
      "Create a data extension with email address as non-nullable; reply date and response fields as nullable.",
      "Create a data extension with email address, reply date, and response fields as nullable.",
      "Create a data extension with email address as the Primary Key and reply date and response fields as nullable.",
    ],
    answer:
      "Create a data extension with email address, reply date, and response fields as non-nullable.",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question: "How can AMPScript customize email messages?",
    options: [
      "Insert responsive content based on the user's viewing device",
      "Automate the template creation process",
      "Automate the flow of creating email messages",
      "Provide advanced content personalization",
    ],
    answer: "Provide advanced content personalization",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters (NTO) would like to send shipping email notifications to members. Shipping fulfillment data is included in a file which is moved at frequent intervals to a folder on NTO’s Enhanced FTP Account. Which solution can be used to achieve this?",
    options: [
      "File Drop Event in Journey Builder",
      "File Drop Automation in Automation Studio",
      "Triggered Email in Email Studio",
      "Import Activity in Email Studio",
    ],
    answer: "File Drop Automation in Automation Studio",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "NTO sent three different emails as part of a seasonal campaign and would like to compare the open and click-through rates across the emails. What feature will enable this?",
    options: [
      "Compare Email Sends on the Tracking page",
      "Email Send Report",
      "Include Measures within a Filter",
      "Email Comparison Report",
    ],
    answer: "Compare Email Sends on the Tracking page",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A customer wants to grow the number of subscribers in the account. Which two methods should the customer employ to acquire new subscribers? (Choose 2)",
    options: [
      "Add a 'Sign Me Up' form to the homepage",
      "Use a list of email addresses purchased from online vendors",
      "Re-import unsubscribed customers",
      "Create an SMS campaign allowing customers to sign up for email",
    ],
    answer: [
      "Add a 'Sign Me Up' form to the homepage",
      "Create an SMS campaign allowing customers to sign up for email",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A national landscape company wants to send targeted emails to customers to remind them of their upcoming lawn treatment. Depending on the service, clients will receive either one or two emails. The data for the campaign is in two separate data extensions. Customer Number is a Primary Key field in both data extensions. Which tool can be used to segment the data? (Choose 2)",
    options: [
      "Send Definition",
      "Query Activity",
      "Drag & Drop Segmentation",
      "Data Extract Activity",
    ],
    answer: ["Query Activity", "Drag & Drop Segmentation"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer wants to send a transactional email that is CAN-SPAM compliant. Which three criteria should be met to ensure compliance with the CAN-SPAM Act? (Choose 3)",
    options: [
      "The subject line contains a promotion to entice the recipient.",
      "The email confirms a transaction between the recipient and sender.",
      "The email body presents the transactional content prior to any commercial content.",
      "The subject line is transactional in nature and non-promotional.",
    ],
    answer: [
      "The email confirms a transaction between the recipient and sender.",
      "The email body presents the transactional content prior to any commercial content.",
      "The subject line is transactional in nature and non-promotional.",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Which feature can a marketer use to individualize content in an email? (Choose 3)",
    options: [
      "Audience Segmentation",
      "Specialized content",
      "Predictive content",
      "Personalization string",
      "Dynamic content",
    ],
    answer: ["Personalization string", "Dynamic content", "Predictive content"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A company has set out to increase their subscriber base. They hired a team of marketing consultants to develop an acquisition plan backed by data. What are two effective methods to acquire new subscribers? (Choose 2)",
    options: [
      "Create an in-store SMS campaign that offers a discount for opting in",
      "Ask for an email address when a customer makes a purchase in-store",
      "Require customers to provide their email address when calling customer service",
      "Have customers opt in to email before they can shop online.",
    ],
    answer: [
      "Create an in-store SMS campaign that offers a discount for opting in",
      "Ask for an email address when a customer makes a purchase in-store",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketer is completing a send preview based on a pre-deployment checklist. What task is validated during the send preview?",
    options: [
      "Ensure subscribers have not unsubscribed or are undeliverable",
      "Confirm that each content area specified in the dynamic content rule exists",
      "Ensure subscriber status at the time of send is Subscribed or Bounced",
      "Identify phrases like 'Click here' or 'Free!' that could be marked as spam",
    ],
    answer:
      "Confirm that each content area specified in the dynamic content rule exists",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "A file is received daily from a data provider to the account FTP. This file needs to be imported into the Marketing Cloud as soon as it arrives. The arrival time of this file varies by several hours from day to day. What tool should be used to accomplish this?",
    options: [
      "Automation studio schedule starting source",
      "Journey Builder import activity entry source",
      "Journey Builder fire event entry source",
      "Automation studio file drop starting source",
    ],
    answer: "Automation studio file drop starting source",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Northern Trail Outfitters wants to display different content areas based on the subscriber data. What can be used to accomplish this? (Choose 2)",
    options: [
      "Dynamic Content",
      "Profile Mapping",
      "Personalization Strings",
      "AMPscript",
    ],
    answer: ["Dynamic Content", "AMPscript"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Which segmentation activity can be used to refresh data on a recurring schedule via an Automation? (Choose 2)",
    options: [
      "Filter activity",
      "SQL Query activity",
      "Data Extract activity",
      "Segment activity",
    ],
    answer: ["Filter activity", "SQL Query activity"],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "The marketing team at a bank needs to receive a file of all subscribers who were sent payment reminder emails and opened them each week. The file needs to be encrypted and placed on the bank’s external SFTP. How should the scheduled automation be configured to achieve this?",
    options: [
      "SQL Query Activity > Data Extract Activity > File Transfer Activity",
      "Filter Activity > File Transfer Activity > Data Extract Activity",
      "Filter Activity > SQL Query Activity > File Transfer Activity",
      "Data Extract Activity > SQL Query Activity > File Transfer Activity",
    ],
    answer:
      "SQL Query Activity > Data Extract Activity > File Transfer Activity",
    note:
      ""
    },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO is looking at using Journey Builder rather than Automation Studio to send emails. What are the three benefits of using Journey Builder? (Choose 3)",
    options: [
      "The ability to set criteria to segment contacts based on behavior using SQL",
      "The ability to extract data from an Audience data extension for analysis",
      "The ability to update or create Salesforce CRM objects or records",
      "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests",
      "The ability to set goals and have the system listen to see if users met the goal",
    ],
    answer: [
      "The ability to update or create Salesforce CRM objects or records",
      "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests",
      "The ability to set goals and have the system listen to see if users met the goal",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "An email marketing team is setting up a campaign to message customers who register for an event. The registration data is being gathered in another system and will be passed to Marketing Cloud daily, and updates made to the customer registration information will be reflected in the same file. How should the import of event registration data be configured?",
    options: [
      "Use the Import Wizard to add new records into the data extension",
      "Use the Import Activity to add new records into the data extension",
      "Use the Import Activity to overwrite the records in the data extension",
      "Use the Import Wizard to overwrite the records in the data extension",
    ],
    answer:
      "Use the Import Activity to overwrite the records in the data extension",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "Where can a marketer see the performance summary of a recent email send?",
    options: [
      "Summary tab",
      "Job Links tab within Tracking",
      "Overview Tab within Tracking",
      "Send Performance Tab",
    ],
    answer: "Overview Tab within Tracking",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer would like to send a commercial email that is CAN-SPAM compliant. Which two criteria should be met to ensure compliance with the CAN-SPAM Act? (Choose 2)",
    options: [
      "Ensure an opt-out link is present",
      "Include the mailing address of the sender",
      "Include a phone number to call",
      "State why the subscriber is receiving the email",
    ],
    answer: [
      "Ensure an opt-out link is present",
      "Include the mailing address of the sender",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketing team needs to narrow down a customer population of several million subscribers based on e-commerce order details and rapidly explore the data to find appropriate segments. How can segmentation with this scenario be accomplished?",
    options: [
      "Data Extract Activity",
      "Profile Attributes",
      "Audience Builder",
      "Drag and Drop Segmentation",
    ],
    answer: "Audience Builder",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "NTO would like to improve email open rates to increase subscriber engagement and improve deliverability. What action should NTO take to increase open rates?",
    options: [
      "Include relevant preheader text in every email",
      "Send earlier in the day to give subscribers more time to check emails",
      "Add a clear, brief, and urgent call-to-action",
      "Use images, not text, to improve email look and branding",
    ],
    answer: "Include relevant preheader text in every email",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Northern Trail Outfitters (NTO) would like to evaluate which email content customers click most frequently. The email team wants to track click behavior for all linked hero images using the naming convention 'Hero_CTA.' Which two different methods would ensure click behavior on these images if tracked with this naming convention? (Choose 2)",
    options: [
      "Include 'Hero_CTA' in the filename for each Hero image",
      "Include an alias attribute in each anchor tag and populate it with 'Hero_CTA'",
      "Add 'Hero_CTA' to the Tracking Alias field for each link",
      "Include 'Hero_CTA' in the Link Tooltip field for each link",
    ],
    answer: [
      "Include an alias attribute in each anchor tag and populate it with 'Hero_CTA'",
      "Add 'Hero_CTA' to the Tracking Alias field for each link",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "NTO is using a SMART Capture form on a CloudPage to capture registrations in a data extension. Corporate has requested a nightly file with all registrants in this data extension be sent daily from Marketing Cloud to an external FTP. Which automation configuration should be used?",
    options: [
      "File Drop Automation > Data Extract Activity > File Transfer Activity",
      "File Drop Automation > SQL Query Activity > File Transfer Activity",
      "Scheduled Automation > SQL Query Activity > File Transfer Activity",
      "Scheduled Automation > Data Extract Activity > File Transfer Activity",
    ],
    answer:
      "Scheduled Automation > Data Extract Activity > File Transfer Activity",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "A marketer wants to overwrite the data in a data extension on a daily basis using Automation Studio. What can the marketer do to accomplish this task?",
    options: [
      "Create an import using the Import Wizard in the Email Application",
      "Create an Import Activity and execute it manually",
      "Create an import using the Import Wizard in Automation Studio",
      "Create an Import Activity to use in a workflow in Automation Studio",
    ],
    answer:
      "Create an Import Activity to use in a workflow in Automation Studio",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "A marketing team has switched from the Classic Editor to Content Builder in Email Studio. All images, content blocks, and emails were saved in one folder. How should these saved items be found in Content Builder?",
    options: [
      "Filter based on content type",
      "Rename content to be alphabetical",
      "Add tags to each piece of content",
      "Create folders and move content",
    ],
    answer: "Filter based on content type",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketer mistakenly sent an email to a group of subscribers with an invalid link contained in an image. What step can the marketer take to correct the image link after the email has been sent?",
    options: [
      "Resend the email with the correct link",
      "Change the link in Job Links under Tracking",
      "Update the link using AMPscript",
      "Change the URL Expiration in Email Administration",
    ],
    answer: "Change the link in Job Links under Tracking",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A customer wants to send email from Sales Cloud on behalf of the record owner. In which two ways should the consultant meet the requirements? (Choose 2)",
    options: [
      "Use send from record owner",
      "Use organization-wide email address",
      "Use custom send classification",
    ],
    answer: ["Use send from record owner", "Use custom send classification"],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Train Outfitters has a Master Customer List in a shared data extension. The company wants to make the list available to some, but not all, of the business units. Which feature can be used to restrict users from a business unit from accessing the Master Customer list?",
    options: [
      "User Roles and Permissions",
      "Date/Time Range from Access",
      "Business Unit Access Permissions",
      "Shared Data Extension",
    ],
    answer: "Business Unit Access Permissions",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Northern Trail Outfitters (NTO) is implementing the Marketing Cloud and is unsure whether to use lists or data extensions. Their consultant recommended they use data extensions. Which three considerations did the consultant take into account when recommending a data extension-based model over Lists? (Choose 3)",
    options: [
      "NTO is storing product and store data",
      "NTO has fewer than 15 data points",
      "NTO needs flexible data storage",
      "NTO has fewer than 250,000 subscribers",
      "NTO will be using Journey Builder",
    ],
    answer: [
      "NTO is storing product and store data",
      "NTO needs flexible data storage",
      "NTO will be using Journey Builder",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "The marketing team at NTO is working to make newsletter emails more relevant to the subscribers. The first step is to segment subscribers, so NTO is not sending a 'batch and blast' newsletter. The second step is to personalize content based on data that has been collected from subscribers. What are two ways NTO can continue to improve the relevance of its newsletter? (Choose 2)",
    options: [
      "Use a substitution string to populate a subscriber's name in the subject line",
      "Create content tailored to subscribers' interests and use dynamic rules to populate relevant content",
      "Change the color of the email background to match their subscribers' preferred color of choice",
      "Use a substitution string to populate a photo of the subscriber in the header of the email",
    ],
    answer: [
      "Use a substitution string to populate a subscriber's name in the subject line",
      "Create content tailored to subscribers' interests and use dynamic rules to populate relevant content",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketer wants to delete subscribers from a data extension if the records are older than 30 days. How should the marketer accomplish this task?",
    options: [
      "Set a reminder in the campaign calendar each day to manually delete the records from the data extension",
      "Use the mass delete wizard to automatically delete any records older than 30 days from the data extension",
      "Use the import activity in Automation Studio and select the delete records option for the specified timeframe",
      "Set data retention in the properties of the data extension to delete records older than 30 days",
    ],
    answer:
      "Set data retention in the properties of the data extension to delete records older than 30 days",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "As part of a weekly email automation, a client needs to segment data in a Data Extension. Which activity is designed to address this scenario?",
    options: [
      "File Transfer Activity",
      "Import Activity",
      "Query Activity",
      "Group Refresh",
    ],
    answer: "Query Activity",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "The IT department at Northern Trail Outfitters would like to receive email notifications once an automation has completed. How should the automation be configured?",
    options: [
      "Navigate to the Automation’s Activity tab and enter a comma delimited list of IT staff in the Run Completion field",
      "Add a Send Email Activity to the end of the Automation workflow and configure it to send to a Subscriber list of IT staff",
      "Select and configure the Automation Studio Completion report from the Reports Catalog within the Reports application",
      "Select the IT users from the Notification Settings panel on the Overview page in Automation Studio",
    ],
    answer:
      "Navigate to the Automation’s Activity tab and enter a comma delimited list of IT staff in the Run Completion field",
    note:
      ""
    },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketing team is using the Import Activity to import a CSV file into a data extension. The file location is the system default File Location: Enhanced FTP. The import has failed, and the error is 'File Not Found.' Which two steps should resolve the issue? (Choose 2)",
    options: [
      "Change the file format from 'comma-separated value' to 'tab delimited'",
      "Use the Import Wizard to point to rename the file on the FTP",
      "Ensure the name of the file in the Import Activity matches the file name on the FTP",
      "Ensure the file to be imported is in the Import Folder on the Enhanced FTP",
    ],
    answer: [
      "Ensure the name of the file in the Import Activity matches the file name on the FTP",
      "Ensure the file to be imported is in the Import Folder on the Enhanced FTP",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "The NTO email team is creating a reusable content block for its 'Deal to Run With' campaign. NTO will cross-promote this campaign in other emails in a single-column content area. This content will have one image, with text below it. How can the NTO email team create one content area and reuse it across other emails using Content Builder without writing a custom HTML?",
    options: [
      "Create an 'HTML' content block and code the content by hand",
      "Create a 'Text' content block that accommodates text",
      "Create a 'Free Form' content block that accommodates text and images",
      "Create an 'Image' content block that accommodates pictures",
    ],
    answer:
      "Create a 'Free Form' content block that accommodates text and images",
    note:
      ""
    },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO branding guidelines require heavy use of imagery on its website, app, emails, ads, etc. What two ways can NTO optimize its email design to honor branding guidelines and ensure subscribers are getting the best experience possible? (Choose 2)",
    options: [
      "Add background colors that match branding",
      "Make the email completely image-based",
      "Use custom corporate font to match the NTO brand",
      "Style alt text for when images do not display automatically",
    ],
    answer: [
      "Add background colors that match branding",
      "Style alt text for when images do not display automatically",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "NTO uses HTML emails that have headers and footers coded into the email. What tool can the marketer use to control default headers and footers on email sends?",
    options: [
      "AMPScript Lookups",
      "Sender Profile",
      "Dynamic Content",
      "Delivery Profile",
    ],
    answer: "Delivery Profile",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketing associate at Northern Trail Outfitters must design an email campaign for the company's new winter offerings. Which email design best practice would the associate implement in this campaign?",
    options: [
      "Use an infographic email template",
      "Limit the email text to 250 words",
      "Segment the audience for the email",
      "Personalize the email content",
    ],
    answer: "Personalize the email content",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Which type of data can a subscriber easily update via the Profile Center? (Choose 2)",
    options: [
      "Data Extension Fields",
      "List Attributes",
      "Email Address",
      "Order History",
    ],
    answer: ["List Attributes", "Email Address"],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "Northern Trail Outfitters (NTO) has been sending email for about 10 years. A new marketing manager noticed NTO's deliverability continually decreased over the last year. NTO wants to grow its existing subscriber base and increase its ROI on email marketing by improving engagement with its subscribers. Which three strategies will help improve NTO's email deliverability? (Choose 3)",
    options: [
      "Encourage subscribers to add the company's sending domain to their address books",
      "Purge old or inactive email addresses",
      "Authenticate email sending to distinguish it from spammers",
      "Purchase lists from companies that guarantee users have opted in",
      "Ensure the spam complaint rate is between 1% and 3%",
    ],
    answer: [
      "Encourage subscribers to add the company's sending domain to their address books",
      "Purge old or inactive email addresses",
      "Authenticate email sending to distinguish it from spammers",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer is designing email for mobile devices. Which three design best practices would the marketer use? (Choose 3)",
    options: [
      "Cut content to make the message fit above the fold",
      "Keep copy simple and direct",
      "Stack the content in a single column",
      "Use image-based text for hero graphics",
      "Design with the most important content at the top",
    ],
    answer: [
      "Keep copy simple and direct",
      "Stack the content in a single column",
      "Design with the most important content at the top",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters (NTO) plans to launch an email campaign. They have two data extensions. The Mountain Manor Campaign Data Extension will contain the sending audience for this campaign and includes fields for Email Address, Full Name, Loyalty Member ID, and Loyalty Member Status. NTO will be using AMPScript to reference data in a second, non-sendable data extension named Loyalty Members. Which field on the Mountain Manor Campaign Data Extension should be created as the Primary Key to create a unique relationship with the Loyalty Member Profile Data Extension?",
    options: [
      "Loyalty Member ID",
      "Email Address",
      "Full Name",
      "Loyalty Member Status",
    ],
    answer: "Loyalty Member ID",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer has been tasked with ensuring Northern Trail Outfitters' unsubscribe mechanisms are CAN-SPAM compliant and follow industry best practices. Which two criteria should the marketer incorporate into campaigns to ensure compliance and align with current best practices? (Choose 2)",
    options: [
      "Process every individual's unsubscribe request within 14 business days",
      "Ensure opt-out mechanisms are operational for at least 30 days post-send",
      "Ask the subscriber to log in to the Preference Center to confirm opt-out",
      "Include an unsubscribe link in the header or footer of emails",
    ],
    answer: [
      "Ensure opt-out mechanisms are operational for at least 30 days post-send",
      "Include an unsubscribe link in the header or footer of emails",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketer sends an email to a sendable data extension. The data extension has a send relationship that matches Customer_ID on the data extension to Subscriber Key in All Subscribers. What is a true statement regarding the email send behavior?",
    options: [
      "The email will be sent to the field marked as the Primary Key",
      "The email will be sent to the email address stored on the Data Extension",
      "The email will be sent to the email address stored in All Subscribers",
      "The email will be sent to the Subscriber Key in All Subscribers",
    ],
    answer:
      "The email will be sent to the email address stored in All Subscribers",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "Which option is used to preview the rendering of an email as it will be sent to a recipient?",
    options: ["Test Send", "Guided Send", "Send Preview", "Simple Send"],
    answer: "Send Preview",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A retailer has been gathering email addresses in-store by asking customers to enter their email addresses at checkout to receive promotional emails. Upon sending to these addresses, many bounce because they are not valid. The marketing team would like to implement an acquisition strategy to address this. Which strategy should be used?",
    options: [
      "Double opt-in",
      "List detective",
      "Single opt-in",
      "Website signups",
    ],
    answer: "Double opt-in",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A marketer would like to improve open rates for weekly email campaigns. On which area of email design should the marketer focus?",
    options: ["Link Content", "Email Body", "Envelope Content", "Footer"],
    answer: "Envelope Content",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO has launched a new custom Preference Center to allow customers to provide details around their personal information such as age, gender, and outdoor sporting interests. In which two ways can NTO honor customer preferences when creating emails? (Choose 2)",
    options: [
      "Send customers one email per preference choice to ensure customers receive what they want",
      "Use AMPScript to dynamically pull in content associated with the customer preferences",
      "Create longer emails to include all preference options so that customers don't miss any content",
      "Create dynamic rules based on customers' preferences in order to send specific content",
    ],
    answer: [
      "Use AMPScript to dynamically pull in content associated with the customer preferences",
      "Create dynamic rules based on customers' preferences in order to send specific content",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Trail Outfitters wants to use something other than an email address to identify subscribers. What functionality can be used to accommodate this?",
    options: [
      "Subscriber Key",
      "System Preferences",
      "Primary Key",
      "Subscriber Attributes",
    ],
    answer: "Subscriber Key",
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "The marketing manager of NTO is interested in A/B testing emails in order to increase subscriber engagement. Which two practices should the marketing manager employ? (Choose 2)",
    options: [
      "Test multiple variations concurrently",
      "Offer a special discount for opening the email",
      "Wait at least 24 hours before declaring a winner",
      "Use a large sample size",
    ],
    answer: [
      "Wait at least 24 hours before declaring a winner",
      "Use a large sample size",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "A marketer sends an email to a sendable data extension that contains a Customer_ID field with a numeric data type that relates to the Subscriber Key on the All Subscribers List as a Send Relationship. Which two statements are correct about the email send behavior for any subscriber who currently does NOT exist on the All Subscribers List? (Choose 2)",
    options: [
      "The email address and Subscriber Key will be added to the All Subscribers List",
      "The subscriber will be added to the All Subscribers List with a status of Active",
      "The Primary Key and demographic data will be added to the All Subscribers List",
      "If the Customer_ID field does not exist on the All Subscribers List, the email send will fail",
    ],
    answer: [
      "The email address and Subscriber Key will be added to the All Subscribers List",
      "The subscriber will be added to the All Subscribers List with a status of Active",
    ],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "NTO has a list of Platinum members containing 50,000 subscribers and a Lifetime Member list containing 20,000 subscribers; 7,000 subscribers in the Lifetime Member list also exist in the Platinum Member list. An email was deployed to the Platinum members, but the marketing team would now like to send the same email to the Lifetime Member list. Which feature should be used when sending the second email to ensure that the 7,000 subscribers that exist on both lists don't receive the same email twice?",
    options: [
      "Exclusion List",
      "Domain Exclusion List",
      "Exclude SScript",
      "Suppression List",
    ],
    answer: "Exclusion List",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "Northern Train Outfitters wants to maintain enterprise-wide opt-outs for two segments of its subscribers: Education Events and Sales. Which feature would the company use?",
    options: [
      "Shared Publication Lists",
      "Shared Emails",
      "Shared Data Extensions",
      "Shared Portfolio Items",
    ],
    answer: "Shared Publication Lists",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "In order to use Data Extension Import Wizard, what must you have enabled in your account?",
    options: [
      "Amplified FTP",
      "Enchanted FPT",
      "Enhanced FTAF",
      "Enhanced FTP",
    ],
    answer: "Enhanced FTP",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A new data extension named 'Orders' contains order data. One row is recorded for each customer's order. Customers can place multiple orders. The data extension Orders relates to other data extensions. The data extension Orders contains the following fields: OrderNumber: a unique alphanumeric order number CustomerID: a numeric customer identification number OrderDate: the system date and time for the order Instructions: an optional alphanumeric string that contains customer delivery notes. Which statement accurately reflects the configuration of the Orders Data Extension?",
    options: [
      "OrderNumber will be used as the Primary Key",
      "CustomerID will be used as the Primary Key",
      "The OrderNumber field will be a Number data type field",
      "All fields in the data extension are nullable",
    ],
    answer: "OrderNumber will be used as the Primary Key",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "NTO just sent an HTML email to subscribers that contains a link to the wrong landing page for a particular campaign. Which option minimizes the impact of this error?",
    options: [
      "Have Support recall the email if it has not been opened by subscribers",
      "Send another email to the same subscribers containing the correct link",
      "Update the link in the stored email content and it will be pulled in automatically",
      "Locate the job under My Tracking and update the URL in the Jobs Links tab",
    ],
    answer:
      "Locate the job under My Tracking and update the URL in the Jobs Links tab",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "A marketer created dynamic content for an upcoming campaign that renders unique content based on subscriber attributes. The marketer would like to preview how each email will render for a given list of subscribers. How should the marketer proceed?",
    options: [
      "Use the test send tool to trigger copies of the email",
      "Create a user-initiated email to send to the list of subscribers",
      "Using the subscriber preview tool, cycle through the list of subscribers",
      "Select the 'preview' tab within the classic content tool",
    ],
    answer:
      "Using the subscriber preview tool, cycle through the list of subscribers",
    note:
      ""
    },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO branding guidelines require heavy use of imagery on its website, app, emails, ads, etc. What two ways can NTO optimize its email design to honor branding guidelines and ensure subscribers are getting the best experience possible? (Choose 2)",
    options: [
      "Use custom corporate font to match the NTO brand",
      "Add background colors that match branding",
      "Style alt text for when images do not display automatically",
      "Make the email completely image-based",
    ],
    answer: [
      "Add background colors that match branding",
      "Style alt text for when images do not display automatically",
    ],
    note:
      ""
  },
  {
    type: "checkboxMultipleChoice",
    question:
      "NTO needs to use a point-and-click tool to test segmentation rules and verify that the correct subscribers are included in the segment. NTO will need to automate the refreshing of the segment once it is tested. Which two tools should be used to test and configure the segment? (Choose 2)",
    options: [
      "Filter Activity",
      "Filtered Group",
      "Data Filter",
      "SQL Query Activity",
    ],
    answer: ["Filter Activity", "Data Filter"],
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "NTO has a small catalog of items featured in company emails. The NTO marketing team manages what images, copy, suggested items, and call-to-action are used with each item in this catalog within a database. This data is saved into a data extension in the Marketing Cloud and then called into the emails dynamically. Each time a change is made to the content, a new, updated file is dropped on NTO’s FTP. A proof email is then sent to business stakeholders for final approval. Using Automation Studio, how can NTO ensure that the catalog stays up-to-date?",
    options: [
      "Create a scheduled automation that runs every 15 minutes to import the file multiple times a day",
      "Create a scheduled automation to import the file, and send proof emails each morning when changes were detected",
      "Create a file drop automation to import the file when placed on the specified directory on the Enhanced FTP",
      "Create an API-driven process to put the data directly into the data extension when any data is changed",
    ],
    answer:
      "Create a file drop automation to import the file when placed on the specified directory on the Enhanced FTP",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "A marketing team wants to create an automation that can take a population, evaluate its subscriber data and send a series of emails. The emails received may vary based on each subscriber's engagement with previous emails in the automation. Which tool is best suited for a team with no SQL knowledge or support?",
    options: [
      "Automation Studio",
      "Predictive Email",
      "Journey Builder",
      "Scheduled Email Sends",
    ],
    answer: "Journey Builder",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "NTO wants to ensure a good user experience when subscribers read their emails. What best practice should NTO deploy?",
    options: [
      "Increase DPI and file size for image display",
      "Use one file type for all images in the email",
      "Rely on image-only emails to engage subscribers",
      "Keep total weight with images at 800 KB or lower",
    ],
    answer: "Keep total weight with images at 800 KB or lower",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A team wants to import a file with column names that do not match the fields into a data extension. What step is needed to align the file data to the field names in the data extension?",
    options: [
      "Map the attributes in the file",
      "Choose the appropriate date format",
      "Name the new import definition",
      "Select the delimiting character",
    ],
    answer: "Map the attributes in the file",
    note:
      ""
  },
  {
    type: "multipleChoice",
    question:
      "A 15-person management team wants to review test emails built in Email Studio prior to live deployment based on content that is personalized for them, but is clearly noted as a test email. What is the safest, most effective way for a marketer to accomplish this task without compromising the email content?",
    options: [
      "Create a Test data extension composed of the management team and Test Send to the Test data extension.",
      "Create a data extension composed of the management team, create a User-Initiated Send Definition, select the email, prepend 'Test' to the Subject, select the data extension, and send the email.",
      "Create a list composed of the management team, prepend 'Test' to the Subject, and use the Send Flow to send the email to the list.",
      "Find each individual with Subscriber Preview and Test Send to each individual recipient",
    ],
    answer:
      "Create a Test data extension composed of the management team and Test Send to the Test data extension.",
    note:
      ""
    },
  {
    type: "multipleChoice",
    question:
      "Approximately 50% of Northern Trail Outfitters’ (NTO) subscribers open emails on their mobile devices, while the remaining 50% of subscribers open their emails on their desktop. The Chief Marketing Officer of NTO would like the emails to render well on both desktop and mobile devices, but does not want to spend a significant amount of time developing for each environment. What is the recommended design approach?",
    options: [
      "Static Design",
      "Responsive Design",
      "Mobile-aware Design",
      "Desktop-centric Design",
    ],
    answer: "Mobile-aware Design",
    note:
      ""
  },
];
