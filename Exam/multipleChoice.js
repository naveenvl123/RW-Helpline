const multipleChoiceQuestions = [
    {
        type: "multipleChoice",
        question: "What is triggered automation?",
        options: [  "An automation that is initiated when a file is dropped into a designated Enhanced FTP Folder", 
                    "An automation that triggers an email to be sent based on a user Initiated Email definition", 
                    "An automation that is initiated when a designated value in a data extension is changed", 
                    "An automation that is triggered based on a schedule that has been defined"],
        answer: "An automation that is initiated when a file is dropped into a designated Enhanced FTP Folder",
    },
    {
        type: "multipleChoice",
        question: "What tool is recommended to render personalization strings, AMPscript, and dynamic content in an email message before sending it to a subscriber?",
        options: [  "List Detective", 
                    "Test Send", 
                    "Send Flow", 
                    "Preview and Test"],
        answer: "Preview and Test",
    },
    {
        type: "multipleChoice",
        question: "Northern Trail Outfitters is using a Smart Capture form on a CloudPage to capture contest registrations in a data extension. Corporate has requested a nightly file with all registrants in this data extension be sent daily from Marketing Cloud to an external SFTP. Which automation configuration should be used to achieve this?",
        options: [
          "Schedule Starting Source > Data Extract Activity > File Transfer Activity",
          "File Drop Starting Source > Data Extract Activity > File Transfer Activity",
          "Schedule Starting Source > SQL Query Activity > File Transfer Activity",
          "File Drop Starting Source > SQL Query Activity > File Transfer Activity"
        ],
        answer: "Schedule Starting Source > Data Extract Activity > File Transfer Activity"
      },
      {
        type: "multipleChoice",
        question: "A Marketer developed an email with personalized content based on 5 geographical regions: I. Northwest – Static Image, II. Southwest – Image carousel, III. Central – No content, IV. Northeast – Static image, V. Southwest – Coupon. How many dynamic content rules need to be created to accomplish this?",
        options: [
          "3",
          "6",
          "4",
          "5"
        ],
        answer: "5"
      },
      {
        type: "multipleChoice",
        question: "A marketer wants to send the same email with the same send properties in several automations. Which activity should be created within Automation Studio?",
        options: [
          "Automated send",
          "Template send",
          "Send email",
          "Triggered send"
        ],
        answer: "Send email"
      },
      {
        type: "multipleChoice",
        question: "After receiving a GDPR 'Right to be Forgotten' request from their compliance team, a marketer must remove a contact from Email Studio. Where should this action be initiated in Marketing Cloud?",
        options: [
          "Contact Builder > Contacts Configuration",
          "Administration > Contacts",
          "Contact Builder > All Contacts",
          "Email Studio > All Subscriber"
        ],
        answer: "Contact Builder > All Contacts"
      },
      {
        type: "multipleChoice",
        question: "What can be used to join two data extensions to segment via Drag and Drop Segmentation?",
        options: [
          "Subscriber Key",
          "Data Relationship",
          "Subscriber ID",
          "Send Relationship"
        ],
        answer: "Data Relationship"
      },
      {
        type: "multipleChoice",
        question: "Northern Trail Outfitters (NTO) offers a 90-day trial on weekly snack box subscriptions. NTO would like to send out a series of emails to educate and remind members to purchase the subscription before the trial ends. What tool is an option for this scenario?",
        options: [
          "Content Builder",
          "Guided Send",
          "Send Flow",
          "Automation Studio"
        ],
        answer: "Automation Studio"
      },
      {
        type: "multipleChoice",
        question: "While testing an email with dynamic content in Content Builder, proofs of five content variations need to be reviewed directly in the inbox of a marketer's quality assurance specialist and the marketing manager. A data extension named 'myTestData' contains only the variations needed. Which method should be used to accomplish this task?",
        options: [
          "Enter the email addresses to receive proofs, and then choose to send 'Based on Subscriber Preview myTestData.'",
          "Choose data extension of contacts, and then choose to send 'Based on Recipient Test Data Extension.'",
          "Enter the email addresses to receive proofs, and then select the specific records from a list or data extension whose rendering should be sent.",
          "Create a Test data extension that contains the five content variations the two team members need to validate."
        ],
        answer: "Enter the email addresses to receive proofs, and then choose to send 'Based on Subscriber Preview myTestData.'"
      },
      {
        type: "multipleChoice",
        question: "The marketing team at a bank needs to receive a file of all subscribers who were sent payment reminder emails and opened them each week. The file needs to be encrypted and placed on the bank's external SFTP. How should the scheduled automation be configured to achieve this?",
        options: [
          "Filter Activity > File Transfer Activity > Data Extract Activity",
          "Filter Activity > Query Activity > File Transfer Activity",
          "Query Activity > Data Extract Activity > File Transfer Activity",
          "Data Extract Activity > Query Activity > File Transfer Activity"
        ],
        answer: "Query Activity > Data Extract Activity > File Transfer Activity"
      },
      {
        type: "multipleChoice",
        question: "A 15-person management team wants to review test emails built in Email Studio prior to live deployment based on content that is personalized for them but is clearly noted as a test email. What is the safest, most effective way for a marketer to accomplish this task without compromising the email content?",
        options: [
          "Find each individual with Subscriber Preview and Test Send to each individual recipient.",
          "Create a list composed of the management team, prepend 'Test' to the Subject, and use the Send Flow to send the email to the list.",
          "Create a data extension composed of the management team, create a User-Initiated Send Definition, select the email, prepend 'Test' to the Subject, select the data extension, and send the email.",
          "Create a Test data extension composed of the management team and Test Send to the Test data extension."
        ],
        answer: "Create a data extension composed of the management team, create a User-Initiated Send Definition, select the email, prepend 'Test' to the Subject, select the data extension, and send the email."
      },
      {
        type: "multipleChoice",
        question: "A marketer for Northern Trail Outfitters needs to share multiple assets in Content Builder for a campaign with another business unit in their account. How should the marketer share these assets?",
        options: [
          "Move the content into the Shared Content folder in Content Builder.",
          "Create and share a new folder for the assets in Content Builder.",
          "Individually share each asset with the other business unit in Content Builder.",
          "Switch to Classic Content to move the assets into the Shared Content folder."
        ],
        answer: "Move the content into the Shared Content folder in Content Builder."
      },
      {
        type: "multipleChoice",
        question: "A marketing associate wants to use the Validate button to ensure an email is CAN-SPAM compliant. What information does the associate need to provide in order for the email to pass validation?",
        options: [
          "Company Website URL",
          "Profile Center URL",
          "Terms and Conditions Policy",
          "Physical Mailing Address"
        ],
        answer: "Physical Mailing Address"
      },
      {
        type: "multipleChoice",
        question: "A marketer wants to ensure that customers on a list want to be email subscribers. Additionally, the marketer wants to minimize the number of invalid email addresses on the list and add a level of security when using Web Collect functionality. What is the optimal way to accomplish this task?",
        options: [
          "Create a double opt-in campaign that requires subscribers to confirm their email address by clicking a link in an email they receive after subscribing via Web Collect",
          "Add new subscribers to an automated engagement campaign, and then send a series of welcome emails based on their opens and clicks",
          "Configure Web Collect to return an error message for any email address that does not conform to standard conventions",
          "Send a welcome email to subscribers within 24 hours that includes a link to the website, a link to the terms and conditions page, and a customer service number"
        ],
        answer: "Create a double opt-in campaign that requires subscribers to confirm their email address by clicking a link in an email they receive after subscribing via Web Collect"
      },
      {
        type: "multipleChoice",
        question: "A marketing team is creating a new data extension. The data extension configuration is very similar to a data extension that is already in use. What creation method should the team use to create the new data extension?",
        options: [
          "Create from a Filtered Data Extension",
          "Create from Template",
          "Create from Existing",
          "Create from New"
        ],
        answer: "Create from Existing"
      },
      {
        type: "multipleChoice",
        question: "What single place in Content Builder would a marketer store CSS used in several Paste HTML Templates?",
        options: [
          "Code Snippet",
          "Style Block",
          "Script Activity",
          "Free Form Code Block"
        ],
        answer: "Style Block"
      },
      {
        type: "multipleChoice",
        question: "When using a mobile-optimized template, what causes the mobile layout to display?",
        options: [
          "A subscriber attribute that dictates a mobile layout preference",
          "The email client detection tracking pixel",
          "The screen size of the device that is used to view the email",
          "The specific device that is used to view the email"
        ],
        answer: "The screen size of the device that is used to view the email"
      },
      {
        type: "multipleChoice",
        question: "Northern Trail Outfitters (NTO) uses link aliases within the HTML versions of its emails to indicate when clicks occurred, even if the same URL is used multiple times within a send. A marketing employee has been asked to pull the email addresses of all customers who clicked on the link associated with 'Main Banner Top' in NTO’s most recent newsletter. Where can the marketer most easily find this information?",
        options: [
          "Tracking Job Links tab > URL ID",
          "Tracking Click Activity tab > Link View",
          "Tracking Click Activity tab > Email Overlay View",
          "Tracking Overview tab > Clicks"
        ],
        answer: "Tracking Click Activity tab > Link View"
      },
      {
        type: "multipleChoice",
        question: "Northern Trail Outfitters is using a Smart Capture form on a CloudPage to capture contest registrations in a data extension. Corporate has requested a nightly file with all registrants in this data extension be sent daily from Marketing Cloud to an external SFTP. Which automation configuration should be used to achieve this?",
        options: [
          "Scheduled Automation > SQL Query Activity > File Transfer Activity",
          "File Drop Automation > Data Extract Activity > File Transfer Activity",
          "File Drop Automation > SQL Query Activity > File Transfer Activity",
          "Scheduled Automation > Data Extract Activity > File Transfer Activity"
        ],
        answer: "Scheduled Automation > Data Extract Activity > File Transfer Activity"
      },
      {
        type: "multipleChoice",
        question: "The NTO email team is creating a reusable content block for its deals to run with campaigns. NTO will cross-promote this campaign in other emails in a single-column content area. This content will have one image, with text below it. How can the NTO email team create one content area and reuse it across other emails using Content Builder without writing any custom HTML?",
        options: [
          "Create an HTML content block",
          "Create a text content block",
          "Create an image content block",
          "Create a free form content block"
        ],
        answer: "Create a free form content block"
      },
      {
        type: "multipleChoice",
        question: "Northern Trail Outfitters has a Master Customer shared data extension. The company wants to make the table available to some of the business units, but not all of them. How can access to the Master Customer table be restricted?",
        options: [
          "Data/Time Range for Access",
          "Shared Data Extension Permissions",
          "Manage Data Extension Policies",
          "Data Extension Sharing Rules"
        ],
        answer: "Shared Data Extension Permissions"
      },
      {
        type: "multipleChoice",
        question: "Each time Northern Trail Outfitters sends its monthly promotional email, the volume of support calls spikes. The executive team would like the marketing team to slowly send emails throughout the day to avoid customers waiting on hold. Which feature should the marketing team use to achieve this?",
        options: [
          "Send Flow",
          "Triggered Send",
          "Send Email Activity",
          "Send Throttling"
        ],
        answer: "Send Throttling"
      },
      {
        type: "multipleChoice",
        question: "Which tactic will improve deliverability for a new sender?",
        options: [
          "Send email to ISPs that have been notified of the new sender",
          "Send email during the holiday season when new senders are less likely to be detected",
          "Send email to the most active and engaged customers",
          "Send email to a minimum of 35,000 subscribers per ISP per day"
        ],
        answer: "Send email to the most active and engaged customers"
      },
      {
        type: "multipleChoice",
        question: "NTO is having its annual footwear sale. NTO wants to try and top its revenue from last year's sale. The campaign last year was a series of emails targeting NTO customers that have expressed a specific interest in footwear. Which additional tactic should improve on NTO's targeted segmentation?",
        options: [
          "Content focused on winter sports items for holiday shopping",
          "Personalized imagery influenced by subscriber preferences",
          "Images of products that the customer has previously purchased",
          "Full-width lifestyle imagery featuring attractive people"
        ],
        answer: "Personalized imagery influenced by subscriber preferences"
      },
      {
        type: "multipleChoice",
        question: "A digital marketing team noticed an increase in unsubscribes and would like to implement a mechanism as an alternative to unsubscribing from all sends. The team currently uses data extensions for sending emails. Which tool should they use?",
        options: [
          "Suppression lists",
          "List unsubscribe",
          "Profile attributes",
          "Publication lists"
        ],
        answer: "Publication lists"
      },
      {
        type: "multipleChoice",
        question: "NTO uses HTML emails that have headers and footers coded into the email. What tool can the marketer use to control default headers and footers on email sends?",
        options: [
          "Delivery Profile",
          "AMPScript Lookups",
          "Dynamic Content",
          "Sender Profile"
        ],
        answer: "Delivery Profile"
      },
      {
        type: "multipleChoice",
        question: "Northern Trail Outfitters (NTO) is currently sending out a single welcome email when a subscriber joins its myNTO Rewards program. NTO wants to test whether one, two, or three welcome emails would result in a higher rate of conversion. How can this be accomplished most efficiently?",
        options: [
          "Journey Builder using a Random Split with three branches",
          "A series of A/B tests to determine the number of emails",
          "Automation Studio with three separate Welcome automations.",
          "Journey Builder using a Decision Split with three branches"
        ],
        answer: "Journey Builder using a Random Split with three branches"
      },
      {
        type: "multipleChoice",
        question: "A marketer needs to import a text file and does not have access to the account’s Enhanced FTP site. What is the recommended way to import the data?",
        options: [
          "Import Subscriber Wizard",
          "Data Extract Activity Interaction",
          "Manual Data Filter Refresh",
          "Import Activity Interaction"
        ],
        answer: "Import Subscriber Wizard"
      },
      {
        type: "multipleChoice",
        question: "The IT department at Northern Trail Outfitters would like to receive email notifications once an automation has completed. How should the automation be configured?",
        options: [
          "Select the IT users from the Notification Settings panel on the Overview page in Automation Studio.",
          "Navigate to the Automation’s Activity tab and enter a comma delimited list of IT staff in the Run Completion field.",
          "Select and configure the Automation Studio Completion report from the Reports Catalog within the Reports application.",
          "Add a Send Email Activity to the end of the Automation workflow and configure it to send to a Subscriber list of IT staff."
        ],
        answer: "Select the IT users from the Notification Settings panel on the Overview page in Automation Studio."
      },
      {
        type: "multipleChoice",
        question: "Northern Trail Outfitters (NTO) created several lists of subscribers and would now like to send an email to all the females on the list. Which feature allows NTO to easily target this segment?",
        options: [
          "List Detective",
          "Publication List",
          "Filtered Group",
          "Smart Capture"
        ],
        answer: "Filtered Group"
      },
      {
        type: "multipleChoice",
        question: "Northern Trail Outfitters (NTO) would like to create a landing page that contains subscriber information passed to it from email links on the page. They use a Smart Capture form to capture email address, reply date, and response form subscribers. How should NTO set up its data extension?",
        options: [
          "Create a data extension with email address, reply date, and response fields as non-nullable.",
          "Create a data extension with email address as non-nullable; reply date and response fields as nullable.",
          "Create a data extension with email address, reply date, and response fields as nullable.",
          "Create a data extension with email address as the Primary Key and reply date and response fields as nullable."
        ],
        answer: "Create a data extension with email address as the Primary Key and reply date and response fields as nullable."
      },
      {
        type: "multipleChoice",
        question: "How can AMPScript customize email messages?",
        options: [
          "Insert responsive content based on the user's viewing device",
          "Automate the template creation process",
          "Automate the flow of creating email messages",
          "Provide advanced content personalization"
        ],
        answer: "Provide advanced content personalization"
      },
      {
        type: "multipleChoice",
        question: "Northern Trail Outfitters (NTO) would like to send shipping email notifications to members. Shipping fulfillment data is included in a file which is moved at frequent intervals to a folder on NTO’s Enhanced FTP Account. Which solution can be used to achieve this?",
        options: [
          "File Drop Event in Journey Builder",
          "File Drop Automation in Automation Studio",
          "Triggered Email in Email Studio",
          "Import Activity in Email Studio"
        ],
        answer: "File Drop Automation in Automation Studio"
      },
      {
        type: "multipleChoice",
        question: "NTO sent three different emails as part of a seasonal campaign and would like to compare the open and click-through rates across the emails. What feature will enable this?",
        options: [
          "Compare Email Sends on the Tracking page",
          "Email Send Report",
          "Include Measures within a Filter",
          "Email Comparison Report"
        ],
        answer: "Email Comparison Report"
      },
      {
        type: "multipleChoice",
        question: "A marketer is completing a send preview based on a pre-deployment checklist. What task is validated during the send preview?",
        options: [
          "Ensure subscribers have not unsubscribed or are undeliverable",
          "Confirm that each content area specified in the dynamic content rule exists",
          "Ensure subscriber status at the time of send is Subscribed or Bounced",
          "Identify phrases like 'Click here' or 'Free!' that could be marked as spam"
        ],
        answer: "Confirm that each content area specified in the dynamic content rule exists"
      },
      {
        type: "multipleChoice",
        question: "A file is received daily from a data provider to the account FTP. This file needs to be imported into the Marketing Cloud as soon as it arrives. The arrival time of this file varies by several hours from day to day. What tool should be used to accomplish this?",
        options: [
          "Automation studio schedule starting source",
          "Journey Builder import activity entry source",
          "Journey Builder fire event entry source",
          "Automation studio file drop starting source"
        ],
        answer: "Automation studio file drop starting source"
      },
      {
        type: "multipleChoice",
        question: "The marketing team at a bank needs to receive a file of all subscribers who were sent payment reminder emails and opened them each week. The file needs to be encrypted and placed on the bank’s external SFTP. How should the scheduled automation be configured to achieve this?",
        options: [
          "SQL Query Activity > Data Extract Activity > File Transfer Activity",
          "Filter Activity > File Transfer Activity > Data Extract Activity",
          "Filter Activity > SQL Query Activity > File Transfer Activity",
          "Data Extract Activity > SQL Query Activity > File Transfer Activity"
        ],
        answer: "SQL Query Activity > Data Extract Activity > File Transfer Activity"
      },
      {
        type: "multipleChoice",
        question: "An email marketing team is setting up a campaign to message customers who register for an event. The registration data is being gathered in another system and will be passed to Marketing Cloud daily, and updates made to the customer registration information will be reflected in the same file. How should the import of event registration data be configured?",
        options: [
          "Use the Import Wizard to add new records into the data extension",
          "Use the Import Activity to add new records into the data extension",
          "Use the Import Activity to overwrite the records in the data extension",
          "Use the Import Wizard to overwrite the records in the data extension"
        ],
        answer: "Use the Import Activity to overwrite the records in the data extension"
      },
      {
        type: "multipleChoice",
        question: "Where can a marketer see the performance summary of a recent email send?",
        options: [
          "Summary tab",
          "Job Links tab within Tracking",
          "Overview Tab within Tracking",
          "Send Performance Tab"
        ],
        answer: "Overview Tab within Tracking"
      },
      {
        type: "multipleChoice",
        question: "A marketing team needs to narrow down a customer population of several million subscribers based on e-commerce order details and rapidly explore the data to find appropriate segments. How can segmentation with this scenario be accomplished?",
        options: [
          "Data Extract Activity",
          "Profile Attributes",
          "Audience Builder",
          "Drag and Drop Segmentation"
        ],
        answer: "Audience Builder"
      },
      {
        type: "multipleChoice",
        question: "NTO would like to improve email open rates to increase subscriber engagement and improve deliverability. What action should NTO take to increase open rates?",
        options: [
          "Include relevant preheader text in every email",
          "Send earlier in the day to give subscribers more time to check emails",
          "Add a clear, brief, and urgent call-to-action",
          "Use images, not text, to improve email look and branding"
        ],
        answer: "Include relevant preheader text in every email"
      },
      {
        type: "multipleChoice",
        question: "NTO is using a SMART Capture form on a CloudPage to capture registrations in a data extension. Corporate has requested a nightly file with all registrants in this data extension be sent daily from Marketing Cloud to an external FTP. Which automation configuration should be used?",
        options: [
          "File Drop Automation > Data Extract Activity > File Transfer Activity",
          "File Drop Automation > SQL Query Activity > File Transfer Activity",
          "Scheduled Automation > SQL Query Activity > File Transfer Activity",
          "Scheduled Automation > Data Extract Activity > File Transfer Activity"
        ],
        answer: "Scheduled Automation > Data Extract Activity > File Transfer Activity"
      },
      {
        type: "multipleChoice",
        question: "A marketer wants to overwrite the data in a data extension on a daily basis using Automation Studio. What can the marketer do to accomplish this task?",
        options: [
          "Create an import using the Import Wizard in the Email Application",
          "Create an Import Activity and execute it manually",
          "Create an import using the Import Wizard in Automation Studio",
          "Create an Import Activity to use in a workflow in Automation Studio"
        ],
        answer: "Create an Import Activity to use in a workflow in Automation Studio"
      },
      {
        type: "multipleChoice",
        question: "A marketing team has switched from the Classic Editor to Content Builder in Email Studio. All images, content blocks, and emails were saved in one folder. How should these saved items be found in Content Builder?",
        options: [
          "Filter based on content type",
          "Rename content to be alphabetical",
          "Add tags to each piece of content",
          "Create folders and move content"
        ],
        answer: "Filter based on content type"
      },
      {
        type: "multipleChoice",
        question: "A marketer mistakenly sent an email to a group of subscribers with an invalid link contained in an image. What step can the marketer take to correct the image link after the email has been sent?",
        options: [
          "Resend the email with the correct link",
          "Change the link in Job Links under Tracking",
          "Update the link using AMPscript",
          "Change the URL Expiration in Email Administration"
        ],
        answer: "Change the link in Job Links under Tracking"
      },
      {
        type: "multipleChoice",
        question: "Northern Train Outfitters has a Master Customer List in a shared data extension. The company wants to make the list available to some, but not all, of the business units. Which feature can be used to restrict users from a business unit from accessing the Master Customer list?",
        options: [
          "User Roles and Permissions",
          "Date/Time Range from Access",
          "Business Unit Access Permissions",
          "Shared Data Extension"
        ],
        answer: "Shared Data Extension"
      },
      {
        type: "multipleChoice",
        question: "A marketer wants to delete subscribers from a data extension if the records are older than 30 days. How should the marketer accomplish this task?",
        options: [
          "Set a reminder in the campaign calendar each day to manually delete the records from the data extension",
          "Use the mass delete wizard to automatically delete any records older than 30 days from the data extension",
          "Use the import activity in Automation Studio and select the delete records option for the specified timeframe",
          "Set data retention in the properties of the data extension to delete records older than 30 days"
        ],
        answer: "Set data retention in the properties of the data extension to delete records older than 30 days"
      },
      {
        type: "multipleChoice",
        question: "As part of a weekly email automation, a client needs to segment data in a Data Extension. Which activity is designed to address this scenario?",
        options: [
          "File Transfer Activity",
          "Import Activity",
          "Query Activity",
          "Group Refresh"
        ],
        answer: "Query Activity"
      },
      {
        type: "multipleChoice",
        question: "The IT department at Northern Trail Outfitters would like to receive email notifications once an automation has completed. How should the automation be configured?",
        options: [
          "Navigate to the Automation’s Activity tab and enter a comma delimited list of IT staff in the Run Completion field",
          "Add a Send Email Activity to the end of the Automation workflow and configure it to send to a Subscriber list of IT staff",
          "Select and configure the Automation Studio Completion report from the Reports Catalog within the Reports application",
          "Select the IT users from the Notification Settings panel on the Overview page in Automation Studio"
        ],
        answer: "Select the IT users from the Notification Settings panel on the Overview page in Automation Studio"
      },
      {
        type: "multipleChoice",
        question: "The NTO email team is creating a reusable content block for its 'Deal to Run With' campaign. NTO will cross-promote this campaign in other emails in a single-column content area. This content will have one image, with text below it. How can the NTO email team create one content area and reuse it across other emails using Content Builder without writing a custom HTML?",
        options: [
          "Create an 'HTML' content block and code the content by hand",
          "Create a 'Text' content block that accommodates text",
          "Create a 'Free Form' content block that accommodates text and images",
          "Create an 'Image' content block that accommodates pictures"
        ],
        answer: "Create a 'Free Form' content block that accommodates text and images"
      },
      {
        type: "multipleChoice",
        question: "NTO uses HTML emails that have headers and footers coded into the email. What tool can the marketer use to control default headers and footers on email sends?",
        options: [
          "AMPScript Lookups",
          "Sender Profile",
          "Dynamic Content",
          "Delivery Profile"
        ],
        answer: "Delivery Profile"
      },
      {
        type: "multipleChoice",
        question: "A marketing associate at Northern Trail Outfitters must design an email campaign for the company's new winter offerings. Which email design best practice would the associate implement in this campaign?",
        options: [
          "Use an infographic email template",
          "Limit the email text to 250 words",
          "Segment the audience for the email",
          "Personalize the email content"
        ],
        answer: "Personalize the email content"
      }
];
