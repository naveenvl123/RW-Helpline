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
      "The correct answers, 'A new delivery profile that pulls in store location in the footer' and 'Dynamic From Name that pulls in the store location,' allow NTO to use subscribers' location preferences effectively. The delivery profile ensures the subscriber's location appears in the email footer, adding personal relevance. The dynamic From Name personalizes the sender information, which makes the emails feel more specific to each store location. The other options, 'A new send classification for holiday promotions' and 'A From Name for each store location,' would not leverage subscriber location preferences dynamically, making them less relevant in this scenario."
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
      "TThe correct answer is 'An automation that is initiated when a file is dropped into a designated Enhanced FTP Folder.' This describes the concept of triggered automation, which responds to external events (like file drops) rather than manual or scheduled triggers. The other options, while useful in automation workflows, relate more to user-initiated emails, data changes, or scheduled automation, none of which match the specific behavior of triggered automations.he correct answer is based on the fact that triggered automations are initiated when specific events occur, like file drops."
    },
  {
    type: "multipleChoice",
    question:
      "What tool is recommended to render personalization strings, AMPscript, and dynamic content in an email message before sending it to a subscriber?",
    options: ["List Detective", "Test Send", "Send Flow", "Preview and Test"],
    answer: "Preview and Test",
    note:
      "The correct answer is 'Preview and Test' because it allows marketers to review how personalization strings, AMPscript, and dynamic content will render for different subscribers before sending. This tool ensures content personalization is correct. 'List Detective' is a tool used to verify email lists, 'Test Send' sends the email to specified addresses for testing purposes, and 'Send Flow' controls the sending process but doesn't provide the same in-depth preview capabilities."
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
      "The correct answers, 'Dynamic content,' 'Einstein content,' and 'Personalization strings,' all contribute to individualized, personalized email content. Dynamic content allows different versions of an email to be displayed based on subscriber data. Einstein content uses AI to automatically select the best content for each recipient, while personalization strings insert unique data for each subscriber. 'Audience segmentation' helps target specific groups but doesn’t directly affect the content within the email. 'Specialized content' isn't a feature commonly associated with creating individualized email content."
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
      "The correct answer is 'Schedule Starting Source > Data Extract Activity > File Transfer Activity' because this configuration allows the process to run on a schedule (nightly), extract the relevant data, and then transfer the file to the external SFTP. The other configurations either use the wrong starting source (File Drop) or the wrong activity for data extraction (SQL Query Activity) in this context."
    },
  {
    type: "multipleChoice",
    question:
      "A Marketer developed an email with personalized content based on 5 geographical regions: I. Northwest – Static Image II. Southwest – Image carousel III. Central – No content IV. Northeast – Static image V. Southwest – Coupon. How many dynamic content rules need to be created to accomplish this?",
    options: ["3", "6", "4", "5"],
    answer: "4",
    note:
      "The correct answer is '4' because dynamic content rules are set based on different segments. Even though there are five regions, only four rules are needed: one for each of the distinct content types (static image, image carousel, no content, coupon). The Central region, having no content, doesn’t require a specific dynamic rule. Hence, fewer rules are needed than the number of regions."
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
      "The correct answers are 'List Attributes' and 'Email Address.' The default Profile Center allows subscribers to update these details easily. 'Data Extension Fields' are typically not user-editable via the Profile Center, and 'Order History' isn't something that would be editable by the subscriber within the Profile Center."
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
      "The correct answer is 'Send email' because this activity is used in Automation Studio to send an email with the same properties (content, recipients, etc.) across different automations. 'Automated send' and 'Triggered send' are more specific types of sends and may not allow the same flexibility. 'Template send' refers to creating a reusable template but not necessarily for identical properties across multiple automations."
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
      "The correct answer is 'Contact Builder > All Contacts' because it allows marketers to manage and delete contact information across all Marketing Cloud applications, ensuring compliance with GDPR requests. 'Administration > Contacts' manages user settings and permissions, while 'Email Studio > All Subscriber' is focused only on email subscribers, which may not fully meet GDPR deletion requirements."
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
      "The correct answers are 'Personalization strings can appear in the subject line or body of the email,' 'When using subscriber data, the attribute or field should have a default value,' and 'Personalization strings are noted by two sets of double percent symbols.' These are essential characteristics for understanding and using personalization strings effectively. 'Personalization strings are case-sensitive' is incorrect, and they are not limited to profile attributes, as they can use other data sources."
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
      "The correct answer is 'Data Relationship' because this feature allows you to join two data extensions based on a shared field, enabling segmentation in Marketing Cloud. 'Subscriber Key' and 'Subscriber ID' are identifiers for subscribers, but they don't serve as tools for joining data extensions. 'Send Relationship' defines how data is related to sending activities but isn't used for segmentation."
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
      "The correct answers are 'Subscribers who click on a specific link' and 'Performance data on the Overview tab,' both of which can be exported from Tracking in Email Studio to analyze email performance. 'Number of clicks from mobile devices' and 'Images showing how the email rendered on different devices' provide valuable insights but are not typically exported data points from Tracking."
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
      "The correct answers are 'Dynamic content,' 'Personalization string,' and 'Predictive content' because these features allow marketers to customize email content based on subscriber data, behavior, or predictions. 'Specialized content' isn't a specific feature in Marketing Cloud, and 'Audience Segmentation' helps group recipients but doesn’t directly customize content within the email."
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
      "The correct answers are 'Style alt text for when images do not display automatically' and 'Add background colors that match branding' because they optimize the design to align with branding and provide a better user experience when images don’t load. Making the email entirely image-based is not recommended due to accessibility and rendering issues, and using custom corporate fonts can lead to inconsistent rendering across email clients."
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
      "The correct answers are 'The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests,' 'The ability to update or create Salesforce CRM objects or records,' and 'The ability to set goals and have the system listen to see if users met the goal.' These are all unique capabilities of Journey Builder, making it more flexible and interactive compared to Automation Studio. The other options pertain more to data analysis or segmentation, which are not key benefits of Journey Builder."
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
      "The correct answers are 'Subscriber can choose to be unsubscribed from all NTO publications' and 'Subscriber can choose which publications to unsubscribe from.' These are the options typically provided by the default subscription center, allowing users to either unsubscribe from everything or select specific subscriptions. The other options, such as removing from a data extension or resubscribing, are not typically available in this default setting."
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
      "The correct answers are 'The email address and subscriber key will be added to the all subscriber list' and 'The subscriber will be added to the all subscriber list with a status of Active.' This is standard behavior when sending to a sendable data extension. If the subscriber does not already exist, they will be added with an active status. The other options are incorrect because the send will not fail if the subscriber doesn't exist, and demographic data is not automatically added to the all subscriber list."
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
      "The correct answer is 'Automation Studio' because it allows NTO to schedule and automate a series of emails to educate and remind members before their trial ends. 'Content Builder' is for creating content, 'Guided Send' is for manual email sends, and 'Send Flow' handles the sending process but doesn't automate the entire series of emails."
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
      "The correct answers are 'Include an unsubscribe link in the header or footer of emails' and 'Ensure opt-out mechanisms are operational for at least 30 days post-send.' These practices are aligned with CAN-SPAM compliance, ensuring that recipients can easily opt-out and that the process is functional for an extended period. The other options would add unnecessary friction or aren’t required by law."
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
      "The correct answers are 'Include @media query CSS in the email' and 'Use inline CSS styling on all HTML elements' because these are essential techniques for responsive email design. @media queries ensure that the layout adapts to different screen sizes, while inline CSS guarantees compatibility with most email clients. 'Include style='display"
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
      "The correct answer is 'Enter the email addresses to receive proofs, and then choose to send 'Based on Subscriber Preview myTestData.'' This option allows the marketer to preview the different dynamic content variations as they will appear in the recipients’ inboxes. The other methods either involve creating additional data extensions or test setups that are not necessary when you already have a targeted data extension like 'myTestData.'"
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
      "The correct answer is 'Query Activity > Data Extract Activity > File Transfer Activity.' This automation flow enables the query to filter subscribers who opened the emails, extracts the relevant data, and transfers it to the bank's external SFTP in an encrypted format. The other options either misplace the steps (like extracting data before querying) or include unnecessary steps."
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
      "The correct answer is 'Create a data extension composed of the management team, create a User-Initiated Send Definition, select the email, prepend 'Test' to the Subject, select the data extension, and send the email.' This approach ensures a controlled send to the management team without affecting broader email metrics and allows for the personalization to be retained. The other options either do not provide sufficient control or could disrupt the standard send flow."
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
      "The correct answer is 'Move the content into the Shared Content folder in Content Builder.' This method ensures that assets are shared efficiently across business units without the need to manage individual permissions or duplications. Creating individual folders or switching to Classic Content is less efficient and doesn't leverage the modern sharing features in Content Builder."
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
      "The correct answers are 'Mark the 'Is Testable' checkbox' and 'Mark the 'Is Sendable' checkbox.' Marking the data extension as 'Testable' ensures that the team's interactions won’t interfere with the primary send metrics. 'Sendable' ensures that emails can still be sent to this group, maintaining functionality without affecting the data integrity of tracking metrics."
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
      "The correct answers are 'Profile Center URL' and 'Physical Mailing Address.' These are essential elements for passing CAN-SPAM validation, as they ensure the recipient has a way to manage their preferences and unsubscribe, and they also provide the required physical contact information for the sender. The company website and terms and conditions, while important, are not required for CAN-SPAM compliance."
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
      "The correct answers are 'Scheduled Sends,' 'Triggered Sends,' and 'A/B Tests.' These send processes require an 'Approved' status to ensure compliance and accuracy before emails are sent out to a broader audience. Test Sends and Send Previews are internal processes for checking emails and don’t require approval before execution."
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
      "The correct answer is 'Create a double opt-in campaign that requires subscribers to confirm their email address by clicking a link in an email they receive after subscribing via Web Collect.' Double opt-in ensures that the subscriber truly wants to receive emails and that the email address is valid. The other options help engagement or improve the experience but don’t provide the same level of security or email validation."
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
      "The correct answers are 'Filter Activity' and 'Data Filter.' These tools provide point-and-click interfaces for testing and configuring segmentation rules, and they can also be automated to refresh the segment on a regular basis. 'SQL Query Activity' requires more technical knowledge and is not a point-and-click tool, and 'Filtered Group' doesn’t offer the same automation capabilities."
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
      "The correct answers are 'Wait Until,' 'Decision Split,' and 'Send SMS.' These are all Canvas Activities available in Journey Builder, allowing marketers to create more personalized and dynamic customer journeys. 'Query Activity' is not a Journey Builder activity, and 'Post to Facebook' is more related to social media integration, not a core Journey Builder function."
  },
];
