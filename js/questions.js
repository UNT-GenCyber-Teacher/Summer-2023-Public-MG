const questions = [
  /* Category 1 Questions */
  {
    prompt: 'Question 1: What does confidentiality refer to in cybersecurity?',
    options: ['a. The protection of information from unauthorized disclosure',
    'b. The accuracy and completeness of information',
    'c. The accessibility of information',
    'd. The authenticity of information'],
    correctAnswer: 'a. The protection of information from unauthorized disclosure',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Which of the following is NOT an example of a confidentiality breach?',
    options: ['a. A hacker gains access to sensitive customer data',
    'b. An employee accidentally deletes important files',
    'c. A competitor steals confidential business information',
    'd. A cybercriminal intercepts confidential emails'],
    correctAnswer: 'b. An employee accidentally deletes important files',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: Which of the following is an effective way to protect confidential information?',
    options: ['a. Sharing sensitive information with as many people as possible',
    'b. Using weak passwords for accounts containing sensitive information',
    'c. Encrypting sensitive data',
    'd. Leaving sensitive documents on an unsecured desk'],
    correctAnswer: 'c. Encrypting sensitive data',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What is the primary goal of confidentiality in cybersecurity?',
    options: ['a. To ensure that data is always available',
    'b. To ensure that data is never lost',
    'c. To ensure that data is protected from unauthorized disclosure',
    'd. To ensure that data is always accurate'],
    correctAnswer: 'c. To ensure that data is protected from unauthorized disclosure',
    cashPrize: 500
    },
  /* Category 2 Questions */
  {
    prompt: 'Question 1: What does data integrity refer to in cybersecurity?',
    options: ['a. The accuracy and completeness of information',
    'b. The protection of information from unauthorized disclosure',
    'c. The accessibility of information',
    'd. The authenticity of information'],
    correctAnswer: 'a. The accuracy and completeness of information',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Which of the following is an example of a data integrity breach?',
    options: ['a. A hacker gains access to sensitive customer data',
    'b. An employee accidentally deletes important files',
    'c. A competitor steals confidential business information',
    'd. An attacker modifies data in a way that changes its meaning'],
    correctAnswer: 'd. An attacker modifies data in a way that changes its meaning',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: Which of the following is an effective way to protect data integrity?',
    options: ['a. Using weak passwords for accounts containing sensitive information',
    'b. Not backing up important data',
    'c. Implementing access controls',
    'd. Sharing sensitive information with as many people as possible'],
    correctAnswer: 'c. Implementing access controls',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What is the primary goal of data integrity in cybersecurity?',
    options: ['a. To ensure that data is always available',
    'b. To ensure that data is never lost',
    'c. To ensure that data is protected from unauthorized disclosure',
    'd. To ensure that data is accurate and complete'],
    correctAnswer: 'd. To ensure that data is accurate and complete',
    cashPrize: 500
    },
  /* Category 3 Questions */
  {
    prompt: 'Question 1: What does availability refer to in cybersecurity?',
    options: ['a. The protection of information from unauthorized disclosure',
    'b. The accuracy and completeness of information',
    'c. The accessibility of information',
    'd. The authenticity of information'],
    correctAnswer: 'c. The accessibility of information',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Which of the following is an example of an availability breach?',
    options: ['a. A hacker gains access to sensitive customer data',
    'b. An employee accidentally deletes important files',
    'c. A competitor steals confidential business information',
    'd. An attacker uses a DDoS attack to make a website unavailable'],
    correctAnswer: 'd. An attacker uses a DDoS attack to make a website unavailable',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: Which of the following is an effective way to protect availability?',
    options: ['a. Not backing up important data',
    'b. Implementing access controls',
    'c. Using weak passwords for accounts containing sensitive information',
    'd. Implementing redundancy and failover systems'],
    correctAnswer: 'd. Implementing redundancy and failover systems',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: Which of the following is a threat to the availability of information?',
    options: ['a. A hacker stealing confidential data',
    'b. An employee accidentally deleting important files',
    'c. A natural disaster destroying hardware',
    'd. All of the above'],
    correctAnswer: 'd. All of the above',
    cashPrize: 500
    },
  /* Category 4 Questions */
  {
    prompt: 'Question 1: What is the main objective of Defense in Depth in cybersecurity?',
    options: ['a. To rely on a single security measure to protect an organization',
    'b. To establish variable barriers across multiple layers and missions of an organization',
    'c. To prevent any unauthorized access to an organization\'s network',
    'd. To ensure the availability of all the organization\'s resources at all times'],
    correctAnswer: 'b. To establish variable barriers across multiple layers and missions of an organization',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Which of the following is NOT a benefit of Defense in Depth?',
    options: ['a. Reducing the likelihood of a successful cyber attack',
    'b. Minimizing the impact of a successful cyber attack',
    'c. Enhancing the performance of an organization\'s systems',
    'd. Protecting an organization\'s data and assets'],
    correctAnswer: 'c. Enhancing the performance of an organization\'s systems',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: What are the three main components of Defense in Depth?',
    options: ['a. People, technology, and operations',
    'b. Firewalls, antivirus software, and intrusion detection systems',
    'c. Authentication, authorization, and accounting',
    'd. Confidentiality, integrity, and availability'],
    correctAnswer: 'a. People, technology, and operations',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What is the purpose of establishing variable barriers in Defense in Depth?',
    options: ['a. To make it harder for attackers to penetrate an organization\'s network',
    'b. To provide more access points for authorized users to access an organization\'s network',
    'c. To reduce the number of security measures an organization needs to deploy',
    'd. To limit the number of users who can access an organization\'s network'],
    correctAnswer: 'a. To make it harder for attackers to penetrate an organization\'s network',
    cashPrize: 500
    },
  /* Category 5 Questions */
  {
    prompt: 'Question 1: What is a common cybersecurity threat that targets users through email or messaging?',
    options: ['a. Malware',
    'b. Social engineering',
    'c. Man-in-the-middle attacks',
    'd. Password guessing'],
    correctAnswer: 'b. Social engineering',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: What is a common method that attackers use to gain unauthorized access to a computer system?',
    options: ['a. Social engineering',
    'b. Installing antivirus software',
    'c. Updating system patches',
    'd. Performing regular backups'],
    correctAnswer: 'a. Social engineering',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: What is a technique that can help protect against cyber threats?',
    options: ['a. Using the same password for multiple accounts',
    'b. Sharing login credentials with others',
    'c. Clicking on links in suspicious emails',
    'd. Keeping software and systems up-to-date'],
    correctAnswer: 'd. Keeping software and systems up-to-date',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What is a common type of cyber attack that involves an attacker gaining control of a computer system and demanding a ransom to release it?',
    options: ['a. Phishing',
    'b. Malware',
    'c. Ransomware',
    'd. Man-in-the-middle attacks'],
    correctAnswer: 'c. Ransomware',
    cashPrize: 500
    },
  /* Category 6 Questions */
  {
    prompt: 'Question 1: What is a best practice for creating and managing passwords for online accounts?',
    options: ['a. Using the same password for multiple accounts',
    'b. Using personal information, like your name or birthdate, in your passwords',
    'c. Writing down your passwords on a piece of paper',
    'd. Using a password manager to generate and store unique passwords'],
    correctAnswer: 'd. Using a password manager to generate and store unique passwords',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Why is it important to keep your software up-to-date?',
    options: ['a. To slow down your computer or mobile device',
    'b. To prevent hackers from exploiting known vulnerabilities in outdated software',
    'c. To save storage space on your device',
    'd. To work with newer hardware components'],
    correctAnswer: 'b. To prevent hackers from exploiting known vulnerabilities in outdated software',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: What is a simple way to add an extra layer of security to your online accounts?',
    options: ['a. Using the same password for multiple accounts',
    'b. Saving passwords in an unencrypted file on your computer',
    'c. Enabling two-factor authentication (2FA)',
    'd. Using easy-to-guess passwords like "password" or "123456"'],
    correctAnswer: 'c. Enabling two-factor authentication (2FA)',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: Why is it important to review your privacy settings for your online accounts?',
    options: ['a. To block all incoming messages and notifications',
    'b. To share your personal information with trusted friends and family members only',
    'c. To prevent your account from appearing in search engine results',
    'd. To control what information is shared with other users or third-party apps'],
    correctAnswer: 'd. To control what information is shared with other users or third-party apps',
    cashPrize: 500
    }
];

export default questions;