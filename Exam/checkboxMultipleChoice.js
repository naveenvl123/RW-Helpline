const checkboxMultipleChoiceQuestions = [
    {
        type: "checkboxMultipleChoice",
        question: "NTO wants to send promotional holiday emails to subscribers who have identified their favorite store locations. Which two actions should NTO take in order to utilize their subscribers’ location preferences? (Choose 2)",
        options: ["A new send classification for holiday promotions", "A From Name for each store location", "A new delivery profile that pulls in store location in the footer", "dynamic From Name that pulls in the store location"],
        
        answer: ["A new delivery profile that pulls in store location in the footer", "dynamic From Name that pulls in the store location"],
    },    
    {
        type: "checkboxMultipleChoice",
        question: "A marketing manager wants to provide unique content to each customer in an upcoming email campaign. Which three features could be used to create individualized content in the email? (Choose 3)",
        options: [
          "Dynamic content",
          "Einstein content",
          "Audience segmentation",
          "Personalization strings",
          "Specialized content"
        ],
        answer: [
          "Dynamic content",
          "Audience segmentation",
          "Personalization strings"
        ]
      },


      {
        type: "checkboxMultipleChoice",
        question: "A local craft store is implementing the Marketing Cloud and will be using Lists to store their subscriber data. Which two types of data can subscribers easily update via the default Profile Center? (Choose 2)",
        options: [
          "Data Extension Fields",
          "List Attributes",
          "Order History",
          "Email Address"
        ],
        answer: [
          "List Attributes",
          "Email Address"
        ]
      },


      {
        type: "checkboxMultipleChoice",
        question: "A marketer wants to use personalization strings to create individualized content for an upcoming send. What would the marketer need to know to understand how to use personalization strings? (Choose 3)",
        options: [
          "Personalization strings can appear in the subject line or body of the email",
          "Personalization strings are case-sensitive",
          "When using subscriber data, the attribute or field should have a default value",
          "Personalization strings are noted by two sets of double percent symbols",
          "Personalization strings are limited to profile attributes"
        ],
        answer: [
          "Personalization strings can appear in the subject line or body of the email",
          "Personalization strings are case-sensitive",
          "When using subscriber data, the attribute or field should have a default value"
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "The university’s marketing team wants to see the results of an email campaign. Which two items of information and data about the performance of an individual send can be exported from Tracking in Email Studio? (Choose 2)",
        options: [
          "Number of clicks from mobile devices",
          "Images showing how the email rendered on different devices",
          "Subscribers who click on a specific link",
          "Performance data on the Overview tab"
        ],
        answer: [
          "Subscribers who click on a specific link",
          "Performance data on the Overview tab"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "Which feature can a marketer use to individualize content in an email? (Choose 3)",
        options: [
          "Dynamic content",
          "Personalization string",
          "Specialized content",
          "Audience Segmentation",
          "Predictive content"
        ],
        answer: [
          "Dynamic content",
          "Personalization string",
          "Audience Segmentation"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "NTO branding guidelines require heavy use of imagery on its website, app, emails, ads, etc. What two ways can NTO optimize its email design to honor branding guidelines and ensure subscribers are getting the best experience possible? (Choose 2)",
        options: [
          "Style alt text for when images do not display automatically",
          "Make the email completely imaged based",
          "Add background colors that match branding",
          "Use custom corporate font to match the NTO brand"
        ],
        answer: [
          "Style alt text for when images do not display automatically",
          "Add background colors that match branding"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "NTO is looking at using Journey Builder rather than Automation Studio to send emails. What are the three benefits of using Journey Builder? (Choose 3)",
        options: [
          "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests",
          "The ability to update or create Salesforce CRM objects or records",
          "The ability to set goals and have the system listen to see if users met the goal",
          "The ability to extract data from an Audience data extension for analysis",
          "The ability to set criteria to segment contacts based on behavior using SQL"
        ],
        answer: [
          "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests",
          "The ability to update or create Salesforce CRM objects or records",
          "The ability to set goals and have the system listen to see if users met the goal"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "A subscriber unsubscribes upon receiving an email from Northern Trail Outfitters (NTO). At the bottom of the NTO email, the subscriber sees three links: Manage Subscriptions, Profile Center, and One-Click Unsubscribe. The subscriber clicks One-Click Unsubscribe. Given that NTO is using the default subscription center, which two options are given when the subscriber clicks One-Click Unsubscribe? (Choose 2)",
        options: [
          "Subscriber can choose to be removed from the data extension.",
          "Subscriber can choose to be unsubscribed from all NTO publications.",
          "Subscriber can choose which publications to unsubscribe from.",
          "Subscriber can choose to resubscribe to the list used for the send."
        ],
        answer: [
          "Subscriber can choose to be unsubscribed from all NTO publications.",
          "Subscriber can choose which publications to unsubscribe from."
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "A marketer wants to send an email to a sendable data extension that contains a Customer_ID field with a numeric data type that relates to the subscriber key on the all subscriber list as a send relationship. Which two statements are correct about the email send behavior for any subscriber who currently does not exist on the all subscriber list? (Choose 2)",
        options: [
          "The email address and subscriber key will be added to the all subscriber list.",
          "The subscriber will be added to the all subscriber list with a status of Active.",
          "If the customer_ID field does not exist on the all subscriber list, the email send will fail.",
          "The primary key and demographic data will be added to the All subscriber list."
        ],
        answer: [
          "The email address and subscriber key will be added to the all subscriber list.",
          "The subscriber will be added to the all subscriber list with a status of Active."
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "A marketer has been tasked with ensuring Northern Trail Outfitters' unsubscribe mechanisms are CAN-SPAM compliant and follow industry best practices. Which two criteria should the marketer incorporate into campaigns to ensure compliance and align with current best practices? (Choose 2)",
        options: [
          "Include an unsubscribe link in the header or footer of emails.",
          "Ask the subscriber to log in to the Preference Center to confirm opt-out.",
          "Ensure opt-out mechanisms are operational for at least 30 days post-send.",
          "Process every individual's unsubscribe request within 14 business days."
        ],
        answer: [
          "Include an unsubscribe link in the header or footer of emails.",
          "Ensure opt-out mechanisms are operational for at least 30 days post-send."
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "NTO wants its emails to render uniquely between mobile and desktop devices. NTO would like the emails to be responsive. Which two techniques should be used? (Choose 2)",
        options: [
          "Include @media query CSS in the email",
          "Use a Basic, Empty, or Themed Template in Content Builder",
          "Include style='display' on all images",
          "Use inline CSS styling on all HTML elements"
        ],
        answer: [
          "Include @media query CSS in the email",
          "Use inline CSS styling on all HTML elements"
        ]
      },




      {
        type: "checkboxMultipleChoice",
        question: "When deploying a send to its customers, a marketing team would like to send to its own team members also. However, the team does not want the team members' open and click behavior to affect the tracking metrics of the send. Which two steps must be completed when creating the data extension to address this need? (Choose 2)",
        options: [
          "Mark the 'Is Testable' checkbox",
          "Define the Send Relationship by email address",
          "Set the Email Address as the Primary Key",
          "Mark the 'Is Sendable' checkbox"
        ],
        answer: [
          "Define the Send Relationship by email address",
          "Set the Email Address as the Primary Key"
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "A marketer uses Email Approvals. In which send process must an email have an 'Approved' status prior to send? (Choose 3)",
        options: [
          "Test Sends",
          "Send Previews",
          "Scheduled Sends",
          "Triggered Sends",
          "A/B Tests"
        ],
        answer: [
          "Scheduled Sends",
          "Triggered Sends",
          "A/B Tests"
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "Northern Trail Outfitters (NTO) needs to use a point-and-click tool to test segmentation rules and verify that the correct subscribers are included in the segment. NTO will need to automate the refreshing of the segment once it is tested. Which two tools should be used to test and configure the segment? (Choose 2)",
        options: [
          "Filter Activity",
          "Filtered Group",
          "SQL Query Activity",
          "Data Filter"
        ],
        answer: [
          "Filtered Group",
          "Data Filter"
        ]
      },
      {
        type: "multipleChoice",
        question: "NTO has planned cross-channel marketing efforts based on how a subscriber responds to an email and when they last purchased. NTO is evaluating both Automation Studio and Journey Builder for its campaigns and are leaning towards Journey Builder due to the available activities. Which three Canvas Activities are available in Journey Builder? (Choose 3)",
        options: [
          "Wait Until",
          "Decision Split",
          "Query Activity",
          "Post to Facebook",
          "Send SMS"
        ],
        answer: [
          "Wait Until",
          "Decision Split",
          "Send SMS"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "A company has set out to increase their subscriber base. They hired a team of marketing consultants to develop an acquisition plan backed by data. What are two effective methods to acquire new subscribers? (Choose 2)",
        options: [
          "Require customers to provide their email address when calling customer service.",
          "Have customers opt in to email before they can shop online.",
          "Ask for an email address when a customer makes a purchase in-store.",
          "Create an in-store SMS campaign that offers a discount for opting in."
        ],
        answer: [
          "Ask for an email address when a customer makes a purchase in-store.",
          "Create an in-store SMS campaign that offers a discount for opting in."
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "The marketing team at NTO is working to make newsletter emails more relevant to the subscribers. The first step is to segment subscribers so NTO is not sending a 'batch and blast' newsletter. The second step is to personalize content based on data that has been collected from subscribers. What are two ways NTO can continue to improve the relevance of its newsletter? (Choose 2)",
        options: [
          "Use a substitution string to populate a subscriber's name in the subject line",
          "Change the color of the email background to match their subscribers' preferred color of choice",
          "Use a substitution string to populate a photo of the subscriber in the header of the email",
          "Create content tailored to subscribers' interests and use dynamic rules to populate relevant content"
        ],
        answer: [
          "Use a substitution string to populate a subscriber's name in the subject line",
          "Create content tailored to subscribers' interests and use dynamic rules to populate relevant content"
        ]
      },



      {
        type: "checkboxMultipleChoice",
        question: "Why should a marketer ensure that field lengths are accurate when creating a data extension? (Choose 2)",
        options: [
          "To determine the correct data type",
          "To optimize import process speed",
          "To ensure data integrity",
          "To save the data extension"
        ],
        answer: [
          "To determine the correct data type",
          "To ensure data integrity"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "A marketer is about to introduce Content Builder to the entire Northern Trail Outfitters marketing team. Which three considerations should the marketing team keep in mind as they begin using Content Builder? (Choose 3)",
        options: [
          "Establish a naming convention optimized for search.",
          "Import duplicate copies of content for different messages or groups.",
          "Create a folder structure prior to importing assets.",
          "Review permissions and roles for users accessing Content Builder.",
          "Focus on creating and importing content for one primary channel."
        ],
        answer: [
          "Establish a naming convention optimized for search.",
          "Create a folder structure prior to importing assets.",
          "Review permissions and roles for users accessing Content Builder."
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "A marketer wants to run an Account Send Summary report. Which option can be configured when running this report? (Choose 3)",
        options: [
          "Report results file format",
          "Report results delivery location",
          "Error report log location",
          "Date range parameters",
          "Error handling parameters"
        ],
        answer: [
          "Report results file format",
          "Report results delivery location",
          "Date range parameters"
        ]
      },


      {
        type: "checkboxMultipleChoice",
        question: "Which file type delimiter is available in the Import Wizard? (Choose 3)",
        options: [
          "Tab",
          "Comma",
          "Other",
          "Pipe",
          "Fixed Length"
        ],
        answer: [
          "Tab",
          "Comma",
          "Pipe"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "Which two best practices should the customer follow to ensure marketers across the company are taking full advantage of Content Builder? (Choose 2)",
        options: [
          "Optimize the way content is stored with a naming convention",
          "Plan for content to be used cross-channel, eliminating duplicates",
          "Import all content up front, rather than piece by piece",
          "Create folders for each type of uploaded content"
        ],
        answer: [
          "Optimize the way content is stored with a naming convention",
          "Plan for content to be used cross-channel, eliminating duplicates"
        ]
      },


      {
        type: "checkboxMultipleChoice",
        question: "A marketer sends a re-engagement email to contacts who have not opened or clicked emails in the last month. This email contains a call-to-action (CTA) prompting the recipient to 'Click here to keep receiving our emails.' In which two ways can the marketer determine who clicked on the CTA? (Choose 2)",
        options: [
          "Select the click activity bar chart from the email overlay view of the click activity tab",
          "Select the URL or tracking alias from the link view tab of the click activity tab",
          "Select unique clicks on the overview tab in the inbox activity section",
          "Select the URL ID for the URL or tracking alias from the job links tab"
        ],
        answer: [
          "Select the URL or tracking alias from the link view tab of the click activity tab",
          "Select the URL ID for the URL or tracking alias from the job links tab"
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "A marketing team is using the Import Activity to import a CSV file into a data extension. The file location is the system default File Location: Enhanced FTP. The import has failed and the error is 'File Not Found.' Which two steps should resolve the issue? (Choose 2)",
        options: [
          "Use the Import Wizard to point to rename the file on the FTP.",
          "Change the file format from 'comma separated value' to 'tab delimited.'",
          "Ensure the file to be imported is in the Import Folder on the Enhanced FTP.",
          "Ensure the name of the file in the Import Activity matches the file name on the FTP."
        ],
        answer: [
          "Ensure the file to be imported is in the Import Folder on the Enhanced FTP.",
          "Ensure the name of the file in the Import Activity matches the file name on the FTP."
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "Which feature can be included in a content box? (Choose 3)",
        options: [
          "Facebook Like",
          "Forward to a Friend",
          "Microsites",
          "Content Detective",
          "Social Forward"
        ],
        answer: [
          "Facebook Like",
          "Forward to a Friend",
          "Social Forward"
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "NTO launched a new custom preference center to allow customers to provide details about their personal information such as age, gender, and outdoor sporting interests. In which two ways should NTO honor customers’ preferences when creating emails? (Choose 2)",
        options: [
          "Create a dynamic rule based on customer’s preferences in order to send specific content.",
          "Send customers one email per preference choice to ensure customer receives what they want.",
          "Create emails to include all preference options so that customers do not miss any content.",
          "Use AMPScript to dynamically pull in content associated with customer’s preferences."
        ],
        answer: [
          "Create a dynamic rule based on customer’s preferences in order to send specific content.",
          "Use AMPScript to dynamically pull in content associated with customer’s preferences."
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "Which send process can use Sender Profiles? (Choose 3)",
        options: [
          "User-Initiated Sends",
          "Test Sends",
          "Triggered Sends",
          "Simple Automated Sends",
          "Guided Sends"
        ],
        answer: [
          "User-Initiated Sends",
          "Triggered Sends",
          "Guided Sends"
        ]
      },



      {
        type: "checkboxMultipleChoice",
        question: "When creating a custom email with the HTML Paste Editor, which feature can be inserted into the HTML code by using the Insert Tools? (Choose 2)",
        options: [
          "Physical Mailing address",
          "Link tooltips",
          "Stored Content Boxes",
          "Email Open Tracking"
        ],
        answer: [
          "Stored Content Boxes",
          "Email Open Tracking"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "An email marketer has been tasked with increasing open rates on a weekly newsletter that currently uses a consistent, identifiable subject line: 'NTO Weekly: Topics of interest this week.' Which two best practices should the marketer use to make the subject line more effective? (Choose 2)",
        options: [
          "Keep the subject text between 50 and 100 characters long",
          "Include information relevant to the message in the subject line",
          "A/B test the effectiveness of different subjects",
          "Include 'RE:’, 'FWD:', etc., to get the reader’s attention"
        ],
        answer: [
          "Include information relevant to the message in the subject line",
          "A/B test the effectiveness of different subjects"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "Northern Trail Outfitters (NTO) needs to use a point-and-click tool to test segmentation rules and verify that the correct subscribers are included in the segment. NTO will need to automate the refreshing of the segment once it is tested. Which two tools should be used to test and configure the segment? (Choose 2)",
        options: [
          "Filter Activity",
          "Filtered Group",
          "SQL Query Activity",
          "Data Filter"
        ],
        answer: [
          "Filtered Group",
          "Data Filter"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "A marketer needs to create an attribute named Gender that has a drop-down menu with appropriate values in the Profile Center. How can this be accomplished? (Choose 2)",
        options: [
          "Set a custom maximum length of six",
          "Select the attribute as required",
          "Create restricted values",
          "Select the data type as Text"
        ],
        answer: [
          "Create restricted values",
          "Select the data type as Text"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "A new marketing manager at Northern Trail Outfitters (NTO) has been asked to evaluate whether to use HTML Emails or Templates for weekly newsletter sends, which are created by a marketing coordinator with limited coding ability. While NTO has HTML developers on staff, their time is not guaranteed on an ongoing basis. Which two characteristics of Templates would benefit NTO when creating its weekly newsletter in Content Builder? (Choose 2)",
        options: [
          "Templates provide the ability to create email messages using content blocks.",
          "One template can only be used for one email, maintaining brand standards.",
          "HTML developers are needed to build templates, but not emails.",
          "Emails can be formatted for desktop and mobile without extra coding."
        ],
        answer: [
          "Templates provide the ability to create email messages using content blocks.",
          "Emails can be formatted for desktop and mobile without extra coding."
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "NTO is looking at using Journey Builder rather than Automation Studio to send emails. What are the three benefits of using Journey Builder? (Choose 3)",
        options: [
          "The ability to set criteria to segment contacts based on behavior using SQL",
          "The ability to extract data from an Audience data extension for analysis",
          "The ability to update or create Salesforce CRM objects or records",
          "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests",
          "The ability to set goals and have the system listen to see if users met the goal"
        ],
        answer: [
          "The ability to update or create Salesforce CRM objects or records",
          "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests",
          "The ability to set goals and have the system listen to see if users met the goal"
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "A customer wants to grow the number of subscribers in the account. Which two methods should the customer employ to acquire new subscribers? (Choose 2)",
        options: [
          "Re-import unsubscribed customers",
          "Create an SMS campaign allowing customers to sign up for email",
          "Add a 'Sign Me Up' form to the homepage",
          "Use a list of email addresses purchased from online vendors"
        ],
        answer: [
          "Create an SMS campaign allowing customers to sign up for email",
          "Add a 'Sign Me Up' form to the homepage"
        ]
      },
      {
        type: "multipleChoice",
        question: "An email marketer is writing the next send's subject line. What can the marketer do to make the subject line more effective? (Choose 2)",
        options: [
          "Include 'RE:' or 'FWD:' to get the reader's attention",
          "Include information relevant to the message in the subject line",
          "A/B test the effectiveness of different subjects",
          "Keep the subject text between 50 to 100 characters long"
        ],
        answer: [
          "Include information relevant to the message in the subject line",
          "A/B test the effectiveness of different subjects"
        ]
      },




      {
        type: "multipleChoice",
        question: "A customer wants to grow the number of subscribers in the account. Which two methods should the customer employ to acquire new subscribers? (Choose 2)",
        options: [
          "Add a 'Sign Me Up' form to the homepage",
          "Use a list of email addresses purchased from online vendors",
          "Re-import unsubscribed customers",
          "Create an SMS campaign allowing customers to sign up for email"
        ],
        answer: [
          "Add a 'Sign Me Up' form to the homepage",
          "Create an SMS campaign allowing customers to sign up for email"
        ]
      },
      {
        type: "multipleChoice",
        question: "A national landscape company wants to send targeted emails to customers to remind them of their upcoming lawn treatment. Depending on the service, clients will receive either one or two emails. The data for the campaign is in two separate data extensions. Customer Number is a Primary Key field in both data extensions. Which tool can be used to segment the data? (Choose 2)",
        options: [
          "Send Definition",
          "Query Activity",
          "Drag & Drop Segmentation",
          "Data Extract Activity"
        ],
        answer: [
          "Query Activity",
          "Drag & Drop Segmentation"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "A marketer wants to send a transactional email that is CAN-SPAM compliant. Which three criteria should be met to ensure compliance with the CAN-SPAM Act? (Choose 3)",
        options: [
          "The subject line contains a promotion to entice the recipient.",
          "The email confirms a transaction between the recipient and sender.",
          "The email body presents the transactional content prior to any commercial content.",
          "The subject line is transactional in nature and non-promotional."
        ],
        answer: [
          "The email confirms a transaction between the recipient and sender.",
          "The email body presents the transactional content prior to any commercial content.",
          "The subject line is transactional in nature and non-promotional."
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "Which feature can a marketer use to individualize content in an email? (Choose 3)",
        options: [
          "Audience Segmentation",
          "Specialized content",
          "Predictive content",
          "Personalization string",
          "Dynamic content"
        ],
        answer: [
          "Personalization string",
          "Dynamic content",
          "Predictive content"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "A company has set out to increase their subscriber base. They hired a team of marketing consultants to develop an acquisition plan backed by data. What are two effective methods to acquire new subscribers? (Choose 2)",
        options: [
          "Create an in-store SMS campaign that offers a discount for opting in",
          "Ask for an email address when a customer makes a purchase in-store",
          "Require customers to provide their email address when calling customer service",
          "Have customers opt in to email before they can shop online."
        ],
        answer: [
          "Create an in-store SMS campaign that offers a discount for opting in",
          "Ask for an email address when a customer makes a purchase in-store"
        ]
      },


      {
        type: "checkboxMultipleChoice",
        question: "Northern Train Outfitters wants to display different content areas based on the subscriber data. What can be used to accomplish this? (Choose 2)",
        options: [
          "Dynamic Content",
          "Profile Mapping",
          "Personalization Strings",
          "AMPscript"
        ],
        answer: [
          "Dynamic Content",
          "AMPscript"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "Which segmentation activity can be used to refresh data on a recurring schedule via an Automation? (Choose 2)",
        options: [
          "Filter activity",
          "SQL Query activity",
          "Data Extract activity",
          "Segment activity"
        ],
        answer: [
          "Filter activity",
          "SQL Query activity"
        ]
      },

      {
        type: "multipleChoice",
        question: "NTO is looking at using Journey Builder rather than Automation Studio to send emails. What are the three benefits of using Journey Builder? (Choose 3)",
        options: [
          "The ability to set criteria to segment contacts based on behavior using SQL",
          "The ability to extract data from an Audience data extension for analysis",
          "The ability to update or create Salesforce CRM objects or records",
          "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests",
          "The ability to set goals and have the system listen to see if users met the goal"
        ],
        answer: [
          "The ability to update or create Salesforce CRM objects or records",
          "The ability to set up A/B/N tests as part of the workflow to conduct timing and creative tests",
          "The ability to set goals and have the system listen to see if users met the goal"
        ]
      },


      {
        type: "checkboxMultipleChoice",
        question: "A marketer would like to send a commercial email that is CAN-SPAM compliant. Which two criteria should be met to ensure compliance with the CAN-SPAM Act? (Choose 2)",
        options: [
          "Ensure an opt-out link is present",
          "Include the mailing address of the sender",
          "Include a phone number to call",
          "State why the subscriber is receiving the email"
        ],
        answer: [
          "Ensure an opt-out link is present",
          "Include the mailing address of the sender"
        ]
      },


      {
        type: "checkboxMultipleChoice",
        question: "Northern Trail Outfitters (NTO) would like to evaluate which email content customers click most frequently. The email team wants to track click behavior for all linked hero images using the naming convention 'Hero_CTA.' Which two different methods would ensure click behavior on these images if tracked with this naming convention? (Choose 2)",
        options: [
          "Include 'Hero_CTA' in the filename for each Hero image",
          "Include an alias attribute in each anchor tag and populate it with 'Hero_CTA'",
          "Add 'Hero_CTA' to the Tracking Alias field for each link",
          "Include 'Hero_CTA' in the Link Tooltip field for each link"
        ],
        answer: [
          "Include an alias attribute in each anchor tag and populate it with 'Hero_CTA'",
          "Add 'Hero_CTA' to the Tracking Alias field for each link"
        ]
      },




      {
        type: "checkboxMultipleChoice",
        question: "A customer wants to send email from Sales Cloud on behalf of the record owner. In which two ways should the consultant meet the requirements? (Choose 2)",
        options: [
          "Use send from record owner",
          "Use organization-wide email address",
          "Use custom send classification"
        ],
        answer: [
          "Use send from record owner",
          "Use organization-wide email address"
        ]
      },

      {
        type: "multipleChoice",
        question: "Northern Trail Outfitters (NTO) is implementing the Marketing Cloud and is unsure whether to use lists or data extensions. Their consultant recommended they use data extensions. Which three considerations did the consultant take into account when recommending a data extension-based model over Lists? (Choose 3)",
        options: [
          "NTO is storing product and store data",
          "NTO has fewer than 15 data points",
          "NTO needs flexible data storage",
          "NTO has fewer than 250,000 subscribers",
          "NTO will be using Journey Builder"
        ],
        answer: [
          "NTO is storing product and store data",
          "NTO needs flexible data storage",
          "NTO will be using Journey Builder"
        ]
      },
      {
        type: "multipleChoice",
        question: "The marketing team at NTO is working to make newsletter emails more relevant to the subscribers. The first step is to segment subscribers, so NTO is not sending a 'batch and blast' newsletter. The second step is to personalize content based on data that has been collected from subscribers. What are two ways NTO can continue to improve the relevance of its newsletter? (Choose 2)",
        options: [
          "Use a substitution string to populate a subscriber's name in the subject line",
          "Create content tailored to subscribers' interests and use dynamic rules to populate relevant content",
          "Change the color of the email background to match their subscribers' preferred color of choice",
          "Use a substitution string to populate a photo of the subscriber in the header of the email"
        ],
        answer: [
          "Use a substitution string to populate a subscriber's name in the subject line",
          "Create content tailored to subscribers' interests and use dynamic rules to populate relevant content"
        ]
      },



      {
        type: "checkboxMultipleChoice",
        question: "A marketing team is using the Import Activity to import a CSV file into a data extension. The file location is the system default File Location: Enhanced FTP. The import has failed, and the error is 'File Not Found.' Which two steps should resolve the issue? (Choose 2)",
        options: [
          "Change the file format from 'comma-separated value' to 'tab delimited'",
          "Use the Import Wizard to point to rename the file on the FTP",
          "Ensure the name of the file in the Import Activity matches the file name on the FTP",
          "Ensure the file to be imported is in the Import Folder on the Enhanced FTP"
        ],
        answer: [
          "Ensure the name of the file in the Import Activity matches the file name on the FTP",
          "Ensure the file to be imported is in the Import Folder on the Enhanced FTP"
        ]
      },

      {
        type: "checkboxMultipleChoice",
        question: "NTO branding guidelines require heavy use of imagery on its website, app, emails, ads, etc. What two ways can NTO optimize its email design to honor branding guidelines and ensure subscribers are getting the best experience possible? (Choose 2)",
        options: [
          "Add background colors that match branding",
          "Make the email completely image-based",
          "Use custom corporate font to match the NTO brand",
          "Style alt text for when images do not display automatically"
        ],
        answer: [
          "Add background colors that match branding",
          "Style alt text for when images do not display automatically"
        ]
      },


      {
        type: "checkboxMultipleChoice",
        question: "Which type of data can a subscriber easily update via the Profile Center? (Choose 2)",
        options: [
          "Data Extension Fields",
          "List Attributes",
          "Email Address",
          "Order History"
        ],
        answer: [
          "List Attributes",
          "Email Address"
        ]
      },
      {
        type: "multipleChoice",
        question: "Northern Trail Outfitters (NTO) has been sending email for about 10 years. A new marketing manager noticed NTO's deliverability continually decreased over the last year. NTO wants to grow its existing subscriber base and increase its ROI on email marketing by improving engagement with its subscribers. Which three strategies will help improve NTO's email deliverability? (Choose 3)",
        options: [
          "Encourage subscribers to add the company's sending domain to their address books",
          "Purge old or inactive email addresses",
          "Authenticate email sending to distinguish it from spammers",
          "Purchase lists from companies that guarantee users have opted in",
          "Ensure the spam complaint rate is between 1% and 3%"
        ],
        answer: [
          "Encourage subscribers to add the company's sending domain to their address books",
          "Purge old or inactive email addresses",
          "Authenticate email sending to distinguish it from spammers"
        ]
      },
      {
        type: "checkboxMultipleChoice",
        question: "A marketer is designing email for mobile devices. Which three design best practices would the marketer use? (Choose 3)",
        options: [
          "Cut content to make the message fit above the fold",
          "Keep copy simple and direct",
          "Stack the content in a single column",
          "Use image-based text for hero graphics",
          "Design with the most important content at the top"
        ],
        answer: [
          "Keep copy simple and direct",
          "Stack the content in a single column",
          "Design with the most important content at the top"
        ]
      }
];
